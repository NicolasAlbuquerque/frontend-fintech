//       REDIRECT THE USER /REDIRECIONAR O USUÁRIO

export const initRedirects = ()=> {
  const direcionarReceitas = document.querySelector('.direcionar-receitas');
  const direcionarGastos = document.querySelector('.direcionar-gastos');
  const direcionarInvestimento = document.querySelector('.direcionar-invest');
  const direcionarObjetivos = document.querySelector('.direcionar-objetivos'); 
  const ultimoGasto = document.querySelector('.ultimo-gasto');
  

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

};
