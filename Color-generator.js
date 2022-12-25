var color = document.getElementById('color')
var box = document.getElementById('box')
var btnDiv = document.getElementById('btn')
var arr = [1,2,3,4,5,6,7,8,9,'A','B', 'C', 'E', 'F']

// boxColor = color.value
btnDiv.addEventListener('click', ()=>{

   
    var hex = "#";
    for (let index = 0; index < 6; index++) {
        const element = Math.floor(Math.random() * arr.length)
        hex += arr[element]
        
    }
    color.innerText = hex
    var colorDiv = color.innerHTML
     
     box.style.backgroundColor = colorDiv
     btnDiv.style.backgroundColor = hex
})
