// const arr = ['saas', 'ali', 'rehman']
// arr = ['jalal', 'osma']
// arr[0]='kirshanna'
// console.log(arr)
// const obj = {
//     fname :'saad',
//     lname : 'ali'
// // }

// // obj . fname ='kirshana'
// obj = {
//     fname : 'shanto',
//     lname : 'ali gul pir'
// // }
// console.log(obj)


// ... function // rest operter
// ...// obj' arr , arr of obj // spread op // copy karna 
// let arr = [1,2,3,4,5,6.,78,99,8,45,35,4]
// let arr2 = [1,2,3,4,5,6.,78,99,8,45,35,4]
// let arr3 = [...arr, ...arr2 ]
// console.log(arr3)   spread op
//  let obj = {
//     first :'1',
//     last :'2',
//     end : '3'

//  }
// let obj2 = {
//     ...obj,
//     lname: 'kirshan bhai'

// }
// console.log(obj2)
 
// abc()
// function abc(){
//     console.log('hello world')
// }


// var a = 'abcd'
// console.log(a)


// function(){
//     console.log('hello kirshanan')
// }

//NORMAL FUNCTION
// function abc (){
//     console.log('HELLO')

// }
// abc()


// FUNCTION EXPRESSION 
// let foo = function (){
//     console.log('saad')
// }
// foo()
// let abc = () => {
//     console.log('kirshana')
// }
// abc()


// let abc2 = (a,b,c,d,e) => {
//     console.log(a,b,c,d,e )
// }
// abc2('saad','kiehsn','ali','dekak','momm')


// let sum = ( a, b) => {
// return a +b 
// }
// console.log(sum(2,4))


//ternary operator

// var a = 5
// if ( a=== 5){
//     console.log('just okok')

// }
//  else{
//     console.log(' not okok')
//  }

// var a =( 3 == 5 ?' han bhai ok': 'nikal')
// console.log(a)

 
let onBulb = () => {
    let a = document.getElementById('bulb')
    a.src = 'light-bulb-2-1427493.webp '
}

let offBulb = () => {
    let a = document.getElementById('bulb')
    a.src = 'e0fd25f9127a9a109a0648c83ee61643.png '
}