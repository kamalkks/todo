const meal =document.getElementById('addTodoItem')
const myUL = document.getElementById('todoList')
document.getElementById("addTodo").addEventListener("click",e=>
{
    e.preventDefault()
    if(meal.value =='')
    {
        alert("Please enter the value")
    }
    else
    {
      let win =document.createElement('li')
      win.textContent = meal.value
      myUL.appendChild(win)
      
      
      let clear =document.createElement('button')
      let t = document.createTextNode("Delete")
      clear.appendChild(t)
      win.appendChild(clear)
      document.getElementById("addTodoItem").value=""
      
      clear.addEventListener("click",(e)=>
      {
          
          const gold = e.target.parentNode
          gold.parentNode.removeChild(gold)
          e.stopPropagation()
      })
      
      win.addEventListener("click",(e)=>
      {
          alert("You clicked list ")
         
      })
    }//end of else
    
})//end of addTodo listener




      

	






	