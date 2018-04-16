

firebase.initializeApp(config);
var dataRef = firebase.database();
var eventsRef = dataRef.ref("events");

var numEvents = 0;
// var allEvents = {
//   event: {
//     eventName:'',
//     eventDate:'',
//     // In 15 min increments
//     eventTime:'',
//     eventDesc:'',
//   }
// }
const datePicker = datepicker('#datepicker');
const timePicker = $('#timepicker').timepicker();

$(document).on('click','#save-changes', function() {
  event.preventDefault();
  var eventName = $('#event-name').val().trim();
  console.log(eventName)
  var eventDate = $('#datepicker').val().trim();
  console.log(eventDate)
  var eventTime = $('#timepicker').val().trim();
  console.log(eventTime)
  var eventDesc = $('#event-desc').val().trim();
  console.log(eventDesc)

  
  eventIndex = numEvents + 1
  
  var newEvent = {
    name: eventName,
    date: eventDate,
    time: eventTime,
    description: eventDesc
  }

  // Uploads employee data to the database
  eventsRef.push(newEvent);
  numEvents++

  // Clear out user input values in modal
  document.getElementById("event-name").value = '';
  document.getElementById("datepicker").value = '';
  document.getElementById("timepicker").value = '';
  document.getElementById("event-desc").value = '';
 
  // var form = $('#createEventForm')
  // form.reset();

  // Hide modal
  $('#createEventModal').modal('hide');
  return false;
});

// 