// DOM document order model
// console.log(document.childNodes[1].childNodes[0].childNodes[0])
// console.log(document.childNodes[1].childNodes[2].childNodes[1].textContent)

// var a = document.childNodes[1].childNodes[2].childNodes[1].textContent = 'kirshana thakur'
// console.log(a)

// var a = document.getElementById('getul')
// console.log(a.childNodes[3].textContent = 'justchill')


// let a = document.getElementById('getul')
// console.log(a. parentNode.childNodes[1].textContent += 'bheemsinga')



// function changeColor(){
//     let getElements = document.getElementsByTagName('p')
//     getElements.foreach(function(data){
//         data.style.color = 'blue'
//     })
// }


function changeColor(){
    let getElements = document.getElementsByTagName('p')
    for (let i=0; i<getElements.length; i++){
      
        getElements[i].className ='abc'
        // getElements[i].style.backgroundColor = 'red';
        // getElements[i].style.color = 'white'
    }
}