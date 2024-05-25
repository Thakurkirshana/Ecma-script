
// let pro = new Promise((res, rej) =>{
//     let khilao = 'Zinger khilaao'
//     if (khilao == 'khilaao'){
//         res ('han bhai theak hai')
//     }
//     else{
//         rej ('nikar bhai ')
//     }
// })

// pro. then( (data) => {
//     console.log (data) 
// })

// .catch((err)=>{
//     console.log(err)
// })


// let pro = new Promise((res, rej) => {
//     let pakistan = " pakistan world cup jeeti ga"
//     if (pakistan == " pakistan world cup jeeti ga"){
//         res ('cup jeeti ga')
//     }

//     else{
//         rej ('nhi jeeti ga pakistan')
//     }
// })
//    pro. then((data)=> {
//     console.log(data)
//    })
//  .catch((err)=>{
//     console.log(err)
//  })



// DESTRUCTURING ( array, object)
// let arr = ['ali','rehman ',1,2,3,4]
// let [a,b,c,d,e,f] =arr 
// console.log(c) 


// const obj = {
//     abc :'ABCD',
//     def : '24',
//     ghi : 'Hello World'

// }


// const obj = {
//     abc : 'ABCD',
//     def : '24',
//     ghi : ' Hello World',  
//     arr : [1,2,3]
// }
// const{ abc, def, ghi, arr } = obj 
// const [a, b, c] = arr
// document.write(a)


// fetch('https://jsonplaceholder.typicode.com/todos' )
// .then(data => data.json())
// .then(data=> console.log(data[177].title))
// .catch(err=> console.log(err))

//     fetch('https://jsonplaceholder.typicode.com/posts')
//  .then(data => data.json())
//  .then(data => document.write(data))
//  .catch((err) => {
//     console.log(err)
//  })

let obj = [
{
p_id : '01',
p_des : 'Hello World',
p_img : 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D'
},
{
    p_id : '02',
    p_des : 'Hello World',
    p_img : 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D'
    },

    {
        p_id : '03',
        p_des : 'Hello World',
        p_img : 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D'
        },
]
  var products = document.getElementById('show')
for (var i= 0; i < obj.length; i++){
    for(var key in obj ){
        // console.log(obj[key])
       for ( var i =0; i< obj.length; i++){
        var pro = obj[i]
        var p = document.createElement('p')
        p.innerHTML = pro.p_id
        products.appendChild(p)
         var pdes = document.createElement('p')
         products.appendChild(pdes)
   var pimg = document.createElement('img')
   pimg.src = pro.p_img
   products.appendChild(pimg)
   pimg.setAttribute('width','100')




       }

    }
}


