let toDoList = document.getElementById("to-do-list-form")





toDoList.addEventListener( "submit", function (e) {
    e.preventDefault()



let btn = document.getElementById('button')

btn.addEventListener('click', (e) => {
        console.log("okfinqua")
})






const toDoInputField = document.getElementById('toDo')

const retrievedToDo = toDoInputField.value

console.log(retrievedToDo)


let newquest = document.createElement("li");
newquest.classList.add("task")

newquest.innerHTML = `
<li"myParagraph">${retrievedToDo} </li>
<button id="delete-button">ELIMINA</button>

`

newquest.addEventListener("click", function() {
    newquest.classList.toggle("completed");
  });


const savedQuestDiv = document.getElementById("taskList")
savedQuestDiv.appendChild(newquest)

const allDeleteButtons = document.querySelectorAll("li button")
allDeleteButtons.forEach((button) => {
 
button.addEventListener ("click", function (e) {





let buttonClicked = e.target
let questToRemove = buttonClicked.parentElement
questToRemove.remove() 
    })

}) 



})

      
toDoInputField.value = " "
