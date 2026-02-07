
const containerReceitas = document.querySelector('.exibir-receitas')
const containerGastos = document.querySelector('.exibir-gastos');
const containerInvestimentos = document.querySelector('.exibir-invest')
const filtroInvest = document.querySelector('.menu-filtro');
const totalGasto =document.querySelector('.total-gasto');
const totalReceita = document.querySelector('.total-receita');
const ultimoGasto = document.querySelector('.ultimo-gasto');
const agora = new Date;
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
  {nome:'Convenio', tipo:'gasto', valor: 126, data:'20/03', hora: '12:45'  ,recorrente: true},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
  {nome:'Celular', tipo:'investimento', valor: 45, data:'20/03', hora: '12:45'},
];

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

//somar os gastos
const totalGastos = gastos.reduce((total, gasto)=>{
  return total + gasto.valor;
}, 0);

// somar as receitas
const totalReceitas = receitas.reduce((total, receita)=>{
  return total + receita.valor
},0)

console.log(`total de gastos ${totalGastos}`);   
console.log(`total de receitas ${totalReceitas}`);   


//renderizar o total recebido
const exibirTotalRecebido = (totalReceita) => {
  if(!totalReceita)return;
  return totalReceita.innerText =  `${totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}
//renderizar o total gasto
const exibirTotalGasto = (totalGasto) => {
  if(!totalGasto)return;
  return totalGasto.innerText=`${totalGastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  
}

//renderizando filtro dos investimentos
const renderizarFiltro= ()=>{
  if(!filtroInvest) return;
  filtroInvest.innerHTML = tipoIvestimento.map((tipoIvestimento)=>{
    return `
    <button class=" button-invest  mx-3">${tipoIvestimento}</button>
    `
  }).join('')
};

//renderizando os objetos em seus respectivos continers
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
};

// Renderização do ultimmo gasto
const renderizarUltimoGasto = (gastos)=>{
  if(!ultimoGasto)return;
  ultimoGasto.innerHTML = `
            <article class="col-11 row my-4 mx-auto my-auto " >

            <!-- início ícone -->
              <div class="col-1 p-2 m-auto d-flex texto-vermelho icone-exibicao justify-content-center">
                <i class="bi bi-coin"></i>
              </div>
              <!-- fim ícone -->
              
              <!-- Data -->
              <div class="col-3 m-0 p-2 row my-auto d-flex flex-column  text-center">
                <div class="col-12"><p class="mb-0  ">${gastos[gastos.length-1].data}</p></div>
                <div class="col-12"><p class="mb-0 ">${gastos[gastos.length -1].hora}</p></div>
                <div class="col-12"><p class="mb-0 ">${gastos[gastos.length-1].nome}</p></div>
                <p class="minha-font fs-2 text-center "></p>
              <!-- fim Data -->
              </div>
              
              <!-- Valor-->
              <div class="col-4 p-2 my-auto ">
                <p class="minha-font  fs-2">${gastos[gastos.length-1]['valor'].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
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
}
console.log(`total de gastos ${totalGastos}`);


// RENDER()
(()=>{
    RENDER();
    renderizarFiltro();
    renderizarUltimoGasto(gastos);
    exibirTotalGasto(totalGasto);
    exibirTotalRecebido(totalReceita);
})();







//Renderizar Mês ------------------------------------------------------------------------------ 

const mes = agora.getMonth();
const renderizarMes = document.querySelector('.renderizar-mes');
const calendario = document.querySelector('.calendario')
const mesGrafico = document.querySelector('.mes-grafico')
console.log(mes);
console.log();

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const mesAtual = meses[mes];
console.log(mesAtual);

renderizarMes.innerHTML  = `${mesAtual}`

mesGrafico.innerText = `Balanço do mês ${mesAtual}` 



//         REDIRECIONAR USUÁRIO
const direcionarReceitas = document.querySelector('.direcionar-receitas');
const direcionarGastos = document.querySelector('.direcionar-gastos');
const direcionarInvestimento = document.querySelector('.direcionar-invest');
const direcionarObjetivos = document.querySelector('.direcionar-objetivos'); 

direcionarReceitas?.addEventListener('click', () => {
  window.location.href = 'receitas.html'
}) ;

direcionarGastos?.addEventListener('click', () => {
  window.location.href = 'gastos.html'
});

direcionarInvestimento?.addEventListener('click', () => {
  window.location.href = 'investimentos.html'
});

direcionarObjetivos?.addEventListener('click', () => {
  window.location.href = 'objetivos.html'
});

ultimoGasto?.addEventListener('click', ()=> {
  window.location.href = 'gastos.html'
}); 
