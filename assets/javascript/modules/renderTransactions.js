export const renderizarLista = (transacao,container,classe,icone)=> {
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

// renderization from the last ... Renderização do ultimmo gasto
export const renderizarUltimoGasto = (gastos, ultimoGasto)=>{
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