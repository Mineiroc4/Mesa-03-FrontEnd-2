/*Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante: Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".
*/
function dividir(n1,n2){
  if(n1 == 0 || n2 == 0){
    return "Não se pode dividir por zero"
  }
  return n1 / n2
}

export default dividir