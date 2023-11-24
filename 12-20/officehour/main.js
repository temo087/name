const input = document.querySelector("input")
const button = document.querySelector("button")
const ol = document.querySelector("ol")

let arr = []
let id = 1;

button.addEventListener("click", () => {
    addTodo()


})



function addTodo(){

   arr.push ({
        id: id,
        name:input.value,
        isComplated: false
    })
 id++
  showTodos(arr)
}

function showTodos(arr){

    arr.forEach(element => {
        
    });
}
