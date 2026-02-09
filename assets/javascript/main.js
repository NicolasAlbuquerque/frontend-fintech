import { initRedirects } from './modules/redirect.js'
import { renderizarLista, renderizarUltimoGasto } from './modules/renderTransactions.js';
import { receitas, gastos, investimentos, tipoIvestimento } from './modules/transactions.js';
import { ExibirData,renderizarFiltro, exibirTotalGasto, exibirTotalRecebido} from './modules/dashboard.js';
import { calcularTotal } from './modules/totals.js';
// import { exibirTotalRecebido, exibirTotalGasto } from './modules/dashboard.js'

//HTML ELEMENTS

const containerReceitas = document.querySelector('.exibir-receitas')
const containerGastos = document.querySelector('.exibir-gastos');
const containerInvestimentos = document.querySelector('.exibir-invest')
const filtroInvestElemento = document.querySelector('.menu-filtro');
const totalGastoElemento = document.querySelector('.total-gasto');
const totalReceitaElemento = document.querySelector('.total-receita');
const ultimoGastoElemento = document.querySelector('.ultimo-gasto');



//Redirect Users
initRedirects();

//Renderizatiom
renderizarUltimoGasto(ultimoGastoElemento);

  if(containerReceitas){
    renderizarLista(receitas,containerReceitas,'texto-verde', `<i class="bi bi-cash"></i>`)
  }
  
  if(containerGastos){
    renderizarLista(gastos,containerGastos,'texto-vermelho',`<i class="bi bi-coin"></i>` )
  }

  if(containerInvestimentos){
    renderizarLista(investimentos,containerInvestimentos,'texto-azul2',`<i class="bi bi-graph-up"></i>`)
  }

//Exibir data
ExibirData()
renderizarFiltro(tipoIvestimento ,filtroInvestElemento)



//calcular totais
const totalGastosValor = calcularTotal(gastos)
const totalReceitasValor = calcularTotal(receitas)


exibirTotalGasto(totalGastoElemento, totalGastosValor);
exibirTotalRecebido(totalReceitaElemento,totalReceitasValor);
