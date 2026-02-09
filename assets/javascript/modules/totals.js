//somar o total 
export const calcularTotal = (lista =[])=> {
  return lista.reduce((total, item)=> total + item.valor, 0);
}

