firebase.initializeApp(config);
var dataRef = firebase.database();
var eventsRef = dataRef.ref("events");

var numEvents = 0;

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
  
function showAllEvents() {
  eventsRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var eventName = childSnapshot.name;
      var eventDate = childSnapshot.date;
      var eventTime = childSnapshot.time;
      var eventDesc = childSnapshot.desc;
      var eventData = childSnapshot.val();
      console.log ('eventData: ' + eventData)

      eventNameDiv = $('<div id="event-name">' + eventName + '</div>')
      eventDateDiv = $('<div id="event-date">' + eventDate + '</div>')
      eventTimeDiv = $('<div id="event-time">' + eventTime + '</div>')
      eventNameDiv = $('<div id="event-name">' + eventName + '</div>')

      var newEventDiv = $('<div class="event"></div>')
      newEventDiv.append(event)
    });
  });
  
  dataRef.ref().orderByChild('date').on('click', '#calLink', function(snapshot) {
      console.log(snapshot.val())   
  });

  // $(document).on('click','#calLink', function() {
  //   var allEvents =  {}
  //   dataRef.ref().orderByChild("date").on("click" '#calLink', function(snapshot) {

  //     // Change the HTML to reflect
  //     $("#name-display").text(snapshot.val().name);
  //     $("#email-display").text(snapshot.val().email);
  //     $("#age-display").text(snapshot.val().age);
  //     $("#comment-display").text(snapshot.val().comment);
  //   });
}
// gameRef.on('value', function(function(gamesSnapshot) {
//    gamesSnapshot.forEach(function (snapshot) {
//        var obj = snapshot.val();
//        if(obj.isOnline == true) {
//            console.log(obj.name + " is online.");
//        }
//    }
// }); 
// 