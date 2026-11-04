/* Testes das regras de negócio simuladas.
   Execute na raiz do projeto: node tests/test_store.cjs */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { webcrypto } = require('node:crypto');

function storage() {
  const data = new Map();
  return {
    getItem: k => data.has(k) ? data.get(k) : null,
    setItem: (k, v) => data.set(k, String(v)),
    removeItem: k => data.delete(k)
  };
}
const context = {
  window: {}, localStorage: storage(), sessionStorage: storage(),
  crypto: webcrypto, TextEncoder, Date, Intl, console, Uint8Array, Math
};
vm.createContext(context);
vm.runInContext(fs.readFileSync('store.js','utf8'), context);
const S = context.window.MoveStore;
function nextWeekday(daysAhead = 5) {
  const date = new Date();
  date.setHours(12,0,0,0);
  date.setDate(date.getDate() + daysAhead);
  while ([0,6].includes(date.getDay())) date.setDate(date.getDate() + 1);
  return S.todayLocal(date);
}
async function run() {
  await S.init();
  assert.equal(S.read().users.length, 2, 'duas contas demonstrativas');
  assert.equal(S.role(), null, 'sem sessão inicialmente');
  await assert.rejects(() => S.login('admin@move.com.br','errada'), /inválidos/);
  await S.login('admin@move.com.br','Move@2026');
  assert.equal(S.role(), 'admin');
  const date = nextWeekday();
  S.setDaySlots(date, ['08:00','10:00','14:00']);
  assert.equal(S.daySlots(date).length,3);
  S.signOut();
  await assert.rejects(() => S.register({name:'Teste',email:'teste@move.com.br',password:'12345678',confirm:'outro123'}), /senhas não coincidem/i);
  await S.register({name:'Teste de Aluno',email:'teste@move.com.br',password:'senha123456',confirm:'senha123456'});
  await assert.rejects(() => S.register({name:'Teste 2',email:'teste@move.com.br',password:'senha123456',confirm:'senha123456'}), /já está cadastrado/i);
  const student = await S.login('teste@move.com.br','senha123456');
  assert.equal(student.role, 'aluno');
  assert.equal(S.role(), 'aluno');
  const b = S.book({userId:student.id,date,time:'10:00'});
  assert.equal(S.bookingsFor(student.id).length,1);
  assert.ok(!S.available(date).includes('10:00'), 'horário ocupado deve desaparecer');
  assert.throws(() => S.book({userId:student.id,date,time:'10:00'}), /ocupado/);
  assert.throws(() => S.book({userId:student.id,date:S.todayLocal(),time:'18:00'}), /24 horas/);
  S.change(b.id,{date,time:'14:00'});
  assert.equal(S.bookingsFor(student.id)[0].time,'14:00');
  S.cancel(b.id);
  assert.equal(S.bookingsFor(student.id).length,0);
  S.sendMessage({name:'Teste',email:'teste@move.com.br',returnMode:'WhatsApp',subject:'Dúvidas',message:'Olá!'});
  assert.equal(S.inbox().length,1);
  S.signOut();
  await S.login('admin@move.com.br','Move@2026');
  const x = S.book({userId:student.id,date,time:'08:00'});
  assert.throws(() => S.setDaySlots(date, ['10:00']), /não é possível remover/i);
  S.cancel(x.id);
  S.setDaySlots(date, ['10:00']);
  assert.equal(S.daySlots(date).length,1);
  assert.equal(S.bookingsFor(student.id).length,0);
  console.log('OK — cadastro, login, perfis, agenda, conflito, antecedência, alteração, cancelamento, horários e contato.');
}
run().catch(e => { console.error(e); process.exitCode=1; });
