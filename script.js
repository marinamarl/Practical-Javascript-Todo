
var todosList = {
  todos: [],
  // displayTodos: function(){
  //   if (this.todos.length===0){
  //     console.log("Your todos list is empty!");
  //   }else{
  //     console.log("My Todos:");
  //   for (var i=0; i<this.todos.length; i++){
  //     if (this.todos[i].completed===true){
  //     console.log("(x)",this.todos[i].todoText);
  //     }else{
  //     console.log("( )",this.todos[i].todoText);
  //     }
  //   }
  // }
    // you need strict comparison === and not = assignment, so stop using assignment operators in conditional statements!
  // dont forget to write [i], else todos [] will have nothing inside it. you need to assign some information in.
  // },
  
   // it could have been written like this: var addTodoTextInput = document.getElementById('addTodoTextInputId'); todoText=AddTodoTextInput.value; 
    //but there is no need since that var wouldnt be used anywhere else anyway (so it is being looked for only once)
    // its an if statement because it produces an error (cannot set value of todoText property) if there are no todos and user attempts to change one.
   addTodo: function (todoText){
     var addTodoTextInput = document.getElementById('addTodoTextInputId');
      todoText=addTodoTextInput;
      if(addTodoTextInput&&addTodoTextInput.value){
        this.todos.push({
          todoText: addTodoTextInput.value,
          completed: false
      });
      view.displayTodos();
      addTodoTextInput.value ='';
      document.getElementById("message").innerHTML ='';
      }else{
        view.displayTodos();
        document.getElementById("message").innerHTML ='You will need to tell me what you want to do, first ;)';
      }
   },
 
  // todoText on line 26 could have been: todoText= document.getElementById('addTodoTextInputId'); because
  //there would be no need for it to be declared as var since its already declared on the function's line 24. BUT 
  //that would be only if it was only used once. Since we need it for the if statement and the reset,
  //(addTodoTextInput.value='';), we need to grab the element and its value as separate things in different places.
  // .valueAsNumber , dont forget this needs a number and not a string (.value is a string).
  
  changeTodo: function(position,todoText){
    var cP = document.getElementById('changeTodoPosition');
    var cT = document.getElementById('changeTodoText');
    position= cP.valueAsNumber;
    todoText= cT.value;
   if (cT && cP && cT.value + cP.value){
    this.todos[position].todoText = todoText;
    view.displayTodos();
    cT.value='';
    cP.value='';
    document.getElementById("message").innerHTML ='';
  }else{
     view.displayTodos();
     document.getElementById("message").innerHTML = "Damn it!(╯°□°）╯︵ ┻━┻  I'm sorry, just make sure you fill in everything needed in order to change your To Do, okay?┬─┬ノ( º _ ºノ)";
      
   }

},
// for changeTodo:we had an array called todos earlier, and in that array we grabed the item with the index of "position" and assigned a new value to it. 

  deleteTodo: function(position){
    var deleteTodoPosition = document.getElementById('deleteTodoPositionInput');
    if(deleteTodoPosition&&deleteTodoPosition.value){position=deleteTodoPosition.valueAsNumber;
    this.todos.splice(position,1);
    deleteTodoPosition.value='';
    view.displayTodos();
     document.getElementById("message").innerHTML = ''; 
    } else {
     view.displayTodos();
     document.getElementById("message").innerHTML = "Gief position of which To Do to delete plxktyvm";
      
    }
    
},
  toggleCompleted: function (position) {
    var toggleCompletedPosition = document.getElementById('toggleCompletedPositionInput');
    position = toggleCompletedPosition.valueAsNumber;
    var todo = this.todos[position];
    if(toggleCompletedPosition&&toggleCompletedPosition.value){
      todo.completed = !todo.completed;
      toggleCompletedPosition.value='';
      view.displayTodos();
      document.getElementById("message").innerHTML ='';
    }else{
      view.displayTodos();
      document.getElementById("message").innerHTML ="Hey, you didnt tell me which To Do you've completed!";
      
    }
  },
  toggleAll: function(){
    var allTodos = this.todos.length;
    var completedTodos = 0;
  for (var i=0; i<allTodos; i++){
      if (this.todos[i].completed===true){
      completedTodos++
      }
      }
      // case 1: if everything's true, make everything false
      if (allTodos === completedTodos){
        for (var i=0; i<allTodos; i++){
        this.todos[i].completed=false;
        }
      //  case 2: otherwise make everything true
      }else{
        for (var i=0; i<allTodos; i++){
          this.todos[i].completed=true;
        }
      }
        view.displayTodos();
  }

};

// this refers to the scope immediately outside of the scope that 'this' is in. In this case,
// the window object of todosList.it needs the .something to know exactly at which part of the object to refer to
// every function will be called separately, and thats why it needs a way to display the ending list of todos (the first function) inside it, otherwise it just returns undefined
var view = {
  displayTodos: function(){
    var todoUl = document.querySelector('ul'); //selects every element of ul
    todoUl.innerHTML=''; //sets the for loop to start from 0 so the no of todos appearing always reflects the length of todos.
    for (var i=0; i<todosList.todos.length; i++){
    var todoLi = document.createElement('li');
    var todo = todosList.todos[i];
    var todoWithCompletion = '';
    if (todo.completed === true){
      todoWithCompletion = '(x) ' + todo.todoText;
    }else{
      todoWithCompletion = '( ) ' + todo.todoText;
    }
    
    
    todoLi.textContent = todoWithCompletion; 
    todoUl.appendChild(todoLi); 
    }
  }
 //every type of todoLi has a textContent property, which can be set to another value.(here its being set to the todoText property)
 //for targeting the what to change it to: one needs to iterate through the array (with the for loop),
 //then get all the items in the array (note: NOT with the.length property, but just todosList.todos, just targeting the object),
 //get each item separately (with the [i]), and then each item's property that we want, in this case todoText.
};





