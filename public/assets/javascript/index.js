// ************* Initializations *************************
document.addEventListener('DOMContentLoaded', function() {
    // Hide the main page content initially
    $('.ui.grid.container').hide()
    const app = firebase.app()
    const db = firebase.firestore()

    $('#add-task')
    .popup({
      popup : $('.custom.popup'),
      on    : 'click'
    })
  })

  
  //*********** MAIN LOGIC GOES INSIDE THIS FUNCTION****************************************
  function app(e) {
    // Clear screen
    // document.write()
    // Show main page content after login
    $('.ui.grid.container').show()
    

    
    const name = e.displayName
    const email = e.email
    
    console.log(name)
    console.log(email)
    // document.write(`<button class="g-signout"id="signOut" onclick="signOut()">Sign Out</button>`)
  }


  //*************************************************************************

  

  // Add Task function
  function addTask() {

    console.log('Clicked addTask()')
    // Get the task "value" from the textbox and store it
    const toDoTask = $('#add-task-input').val().trim()

    // const eventDate = $('#test-04202018')
    const UIListItem = $(`<div class="item extra text">`)
    const UICheckbox = $(`<div class="ui checkbox">`)
    const UITaskInput = $(`<input type="checkbox">`)
    const UITaskLabel = $(`<label>`)
    
    const taskList = $('#list-04202018')
    // const taskListItem = $(taskList).append(UIListItem)
    // const taskListCheckbox = $(taskListItem).append(UICheckbox)
    // const taskListInputLabel = $(taskListCheckbox).append(UITaskInput).append(UITaskLabel)

    const taskListItem = $(UIListItem).appendTo(taskList)
    const taskListCheckbox = $(UICheckbox).appendTo(taskListItem)
    const taskListInput = $(UITaskInput).appendTo(taskListCheckbox)
    const taskListLabel = $(UITaskLabel).appendTo(taskListCheckbox)

    taskListLabel.append(toDoTask)
  }
