/* Vamos programar uma calculadora simples com o conhecimento que adquirimos até agora.
A calculadora terá 4 funções básicas:
Somar
Subtrair
Multiplicar
Dividir
*/
// Importação dos módulos.
import somar from './module/somar.js'
import subtrair from './module/subtrair.js'
import multiplicar from './module/multiplicar.js'
import dividir from './module/dividir.js'

// Declaração das variáveis.
let calculadora = prompt(
  'Bem Vindo a Calculadora da Digital House: Digite uma opção desejada: 1- Somar 2- Subtrair 3- Multiplicar 4- Dividir'
)
let n1 = parseInt(prompt('Digite um número: '))
let n2 = parseInt(prompt('Digite outro número: '))

// Escolha da operação matemática.
if (calculadora == 1) {
  alert(somar(n1, n2))
} else if (calculadora == 2) {
  alert(subtrair(n1, n2))
} else if (calculadora == 3) {
  alert(multiplicar(n1, n2))
} else if (calculadora == 4) {
  alert(dividir(n1, n2))
} else {
  alert('Valor Invalido, escolha apenas um valor entre 1 e 4.')
}
