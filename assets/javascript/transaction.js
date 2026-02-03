const containerReceitas = document.querySelector('.exibir-receitas')
const containerGastos = document.querySelector('.exibir-gastos')
const containerInvestimentos = document.querySelector('.exibir-invest')
const filtroInvest = document.querySelector('.menu-filtro')

console.log(containerReceitas);

const tipoIvestimento = [
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

const transations = [
  {nome:'Salário', tipo:'receita', valor: 1500, data:'20/03', hora: '12:15'},
  {nome:'Freelancer', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'Presente', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'Pix', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'Investimento', tipo:'receita',valor: 500, data:'20/03', hora: '12:45'},
  {nome:'água', tipo:'gasto', valor: 500, data:'20/03', hora: '12:45' ,recorrente: true},
  {nome:'almoço', tipo:'gasto', valor: 20,  data:'20/03', hora: '12:45',recorrente: false},
  {nome:'internet', tipo:'gasto', valor: 120, data:'20/03', hora: '12:45' ,recorrente: true},
  {nome:'Celular', tipo:'gasto', valor: 45, data:'20/03', hora: '12:45'  ,recorrente: true},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
];
console.table(transations)
const receitas = transations.filter((transation) => {
  return transation['tipo'] === 'receita';
});
console.log(receitas);

const gastos = transations.filter((transation)=>{
  return transation['tipo'] === 'gasto';
});

const investimentos = transations.filter((transation)=>{
  return transation['tipo'] === 'investimento';
})
console.log(gastos);


const gastosRecorrentes =transations.filter((transation)=>{
  return transation['tipo'] === 'gasto' && transation['recorrente'] === true;
});
const renderizarFiltro= ()=>{

  filtroInvest.innerHTML = tipoIvestimento.map((tipoIvestimento)=>{
    return `
    <button class=" button-invest  mx-3">${tipoIvestimento}</button>
    `
  }).join('')
}
const RENDER=() => {


  if(containerReceitas){
    renderizarLista(receitas,containerReceitas,'texto-verde', `<i class="bi bi-cash"></i>`)

  }
  
  if(containerGastos){
    renderizarLista(gastos,containerGastos,'texto-vermelho',`<i class="bi bi-coin"></i>` )
  }

  if(containerInvestimentos){
    renderizarLista(investimentos,containerInvestimentos,'texto-azul2',`<i class="bi bi-graph-up"></i>`)
  }
}
  const renderizarLista = (transacao,container,classe,icone)=> {
    container.innerHTML= transacao.map((transacao)=>{
  
  return`
            <article class="col-11 row my-4 mx-auto my-auto " >

            <!-- início ícone -->
              <div class="col-1 p-2 m-auto ${classe} d-flex  icone-exibicao justify-content-center">
                ${icone}
              </div>
              <!-- fim ícone -->
              
              <!-- Data -->
              <div class="col-3 m-0 p-2 row my-auto d-flex flex-column  text-center">
                <div class="col-12"><p class="mb-0  ">${transacao['data']}</p></div>
                <div class="col-12"><p class="mb-0 ">${transacao['hora']}</p></div>
                <div class="col-12"><p class="mb-0 ">${transacao['nome']}</p></div>
                <p class="minha-font fs-2 text-center "></p>
              <!-- fim Data -->
              </div>
              
              <!-- Valor-->
              <div class="col-4 p-2 my-auto ">
                <p class="minha-font  fs-2">${transacao['valor'].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
              <!-- Fim Valor-->
              <!--  Botões --> 
              <div class="col-3 p-2 my-auto  ms-2 d-flex" >
                <button   class="button-delete"><i class="bi bi-trash3 "></i></button>
                <button class="button-edit"><i class="bi bi-pencil"></i></button>
              </div>
              <!-- fim botões -->
          </article>
  `
}).join('')
}



// RENDER()
(()=>{
    RENDER();
    renderizarFiltro()
})();
// console.log(containerGastos);


