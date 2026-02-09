export const tipoIvestimento = [
  "Poupança",
  "Tesouro Direto",
  "CDB",
  "LCI",
  "LCA",
  "Fundos de Investimento",
  "Fundos Imobiliários (FII)",
  "Ações",
  "ETFs",
  "Previdência Privada",
  "Criptomoedas"
];

export const transactions = [
  {nome:'Salário', tipo:'receita', valor: 1500, data:'20/03', hora: '12:15'},
  {nome:'Freelancer', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'Presente', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'Pix', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'Investimento', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'água', tipo:'gasto', valor: 500, data:'20/03', hora: '12:45' ,recorrente: true},
  {nome:'almoço', tipo:'gasto', valor: 20,  data:'20/03', hora: '12:45',recorrente: false},
  {nome:'internet', tipo:'gasto', valor: 120, data:'20/03', hora: '12:45' ,recorrente: true},
  {nome:'Celular', tipo:'gasto', valor: 45, data:'20/03', hora: '12:45'  ,recorrente: true},
  {nome:'Convenio', tipo:'gasto', valor: 126, data:'20/03', hora: '12:45'  ,recorrente: true},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
];


//filtrar categoria
export const receitas = transactions.filter((transaction) => {
  return transaction['tipo'] === 'receita';
});
console.log(receitas);

export const gastos = transactions.filter((transaction)=>{
  return transaction['tipo'] === 'gasto';
});

export const investimentos = transactions.filter((transaction)=>{
  return transaction['tipo'] === 'investimento';
})
console.log(gastos);


export const gastosRecorrentes =transactions.filter((transaction)=>{
  return transaction['tipo'] === 'gasto' && transaction['recorrente'] === true;
});
