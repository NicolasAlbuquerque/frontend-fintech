

//Renderizar Mês ------------------------------------------------------------------------------ 


export const ExibirData = () => {
  const agora = new Date();
  const mes = agora.getMonth();
  const renderizarMes = document.querySelector('.renderizar-mes');
  const mesGrafico = document.querySelector('.mes-grafico')
  console.log(mes);
  console.log();

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const mesAtual = meses[mes];
  console.log(mesAtual);

  if(renderizarMes)renderizarMes.innerHTML = `${mesAtual}`
  if (mesGrafico) {
    mesGrafico.innerText = `Balanço do mês ${mesAtual}`
  }

}

//renderizando filtro dos investimentos
export const renderizarFiltro= (tipoIvestimento, filtroInvest)=>{
  if(!filtroInvest) return;
  filtroInvest.innerHTML = tipoIvestimento.map((tipoIvestimento)=>{
    return `
    <button class=" button-invest  mx-2">${tipoIvestimento}</button>
    `
  }).join('')
}


//renderizar os totais

  

    //renderizar o total recebido
export const exibirTotalRecebido = (totalReceita, totalReceitas) => {
      if(!totalReceita)return;
      return totalReceita.innerText =  `${totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  }
  

export const exibirTotalGasto = (totalGasto, totalGastos) => {
      if(!totalGasto)return;
      return totalGasto.innerText=`${totalGastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
      
    
  }
  //renderizar o total gasto
