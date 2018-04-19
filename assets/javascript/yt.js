/*
https://wger.de/en/user/api-key
Your API key
25a72c6fcb1ee3b9e5de1dd8def03a9e1a65cffa


# In the request header
Authorization: Token 25a72c6fcb1ee3b9e5de1dd8def03a9e1a65cffa


# Example with curl
curl -X GET https://wger.de/api/v2/workout/ \
     -H 'Authorization: Token 25a72c6fcb1ee3b9e5de1dd8def03a9e1a65cffa'



{id: 10, name: "Abs"}
{id: 8, name: "Arms"}
{id: 12, name: "Back"}
{id: 14, name: "Calves"}
{id: 11, name: "Chest"}
{id: 9, name: "Legs"}
{id: 13, name: "Shoulders"}


GET https://www.googleapis.com/youtube/v3/search


*/

var fail = 0;

var eid = ""; 
var etype = ""; 

$( window ).on( "load", function() {

  // var muscleGroup = [
  //   {category: 10, name: "Abs" , text : "Abs"},
  //   {category: 8, name: "Arms" , text : "Arms"},
  //   {category: 12, name: "Back" , text : "Back"},
  //   {category: 14, name: "Calves" , text : "Calves"},
  //   {category: 11, name: "Chest" , text : "Chest"},
  //   {category: 9, name: "Legs" , text : "Legs"  },
  //   {category: 13, name: "Shoulders" , text :"Shoulders"}
  // ];
  var muscleGroup = [
    {category: 10, name: "category" , text : "Abs"},
    {category: 8, name: "category" , text : "Arms"},
    {category: 12, name: "category" , text : "Back"},
    {category: 14, name: "category" , text : "Calves"},
    {category: 11, name: "category" , text : "Chest"},
    {category: 9, name: "category" , text : "Legs"  },
    {category: 13, name: "category" , text :"Shoulders"}
  ];


  //var muscleSelect = document.getElementById('muscle');

  // for(var i = 0; i < muscleGroup.length; i++) {
  //     var option = document.createElement("option");
  //     option.text = muscleGroup[i].name;
  //     option.value = muscleGroup[i].id;
  //     muscleSelect.add(option);
  // }

  muscleGroup.forEach(function(element){

    btnText = element.text;
    btnName = element.name;
    btnValue = element.category;
    var btnData = $('<button>').text(btnText); 

    var inputBtnData = $('<input>'); 

    btnData.attr({
      name : btnName,
      value : btnValue,
      class : "btn btn-outline-primary btnbody",
      "aria-pressed":"true",
      "type" : "button"
    })

    inputBtnData.attr({
      name : btnName,
      value : btnValue,
      "type" : "checkbox"
    })

    btnData.append(inputBtnData);
    $("#musclelist").append( btnData )
  })

  $(document).on("click", "#worksubmit", workGetter);
  //savemodal
  //$("#exampleModal").on("click", "show.bs.modal", saveFoodEvent);

  // $('#exampleModal').on('show.bs.modal', function (event) {
  //   var button = $(event.relatedTarget) // Button that triggered the modal
  //   var recipient = button.data('btnid') // Extract info from data-* attributes
  //   console.log(button);
  //   console.log(recipient);
  //   var modal = $(this)
  //   modal.find('.modal-title').text('New message to ' + recipient)
  //   //modal.find('.modal-body input').val(recipient)
  // })





});

//var zomapi = a9f103698b4f0c331c939d53be137fea


function workGetter(event) {
  event.preventDefault();

  console.log("test press")

  var serialInput = $( "form" ).serialize();
  
  // if (cityName == "") {
  //   alert("CITY must be filled out");
  //   $("#cityhelp").text("CITY must be filled out");
  //   return false;
  // }
  // else{
  //   var cityClean = cityName.replace(" ", "+")
  //   var stateName = $("#state").find(":selected").text();
  //   var queryLocation = cityClean + "%2C" + stateName;
  //   $("#cityhelp").text("You entered: " + cityName + ", " + stateName);
  // }

  console.log(serialInput);


    var queryURL = "https://wger.de/api/v2/exercise/?language=2&";
    //var queryURL = "https://wger.de/api/v2/exercise/?language=2";

    //var queryURL = "https://wger.de/api/v2/exercisecategory/";
    
    //var queryURL = "https://wger.de/api/v2/muscle/";
    //var queryURL = "https://wger.de/api/v2/exerciseimage/";
    //var queryURL = "https://wger.de/api/v2/exerciseinfo/";
    
    //var queryURL = "https://wger.de/api/v2/exerciseimage/4/thumbnails/";
    queryURL += serialInput;
    //console.log(queryURL)
  
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: { "Authorization": "Token 25a72c6fcb1ee3b9e5de1dd8def03a9e1a65cffa" } 

    })
    .then(function(response) {

      console.log(response.results)
      resultsArray = response.results;
      
      resultsArray.forEach(function(wgerObj){
        workID = wgerObj.id;   
        workDesc = wgerObj.description;   
        getImages(workID);

      })
    });
  }

  //wodGetter();

  function getImages(inID, inDesc) {

    var searchID = inID + "/";
    var searchThumb = "/thumbnails/";
    var imageArray = [];
    var newDesc = inDesc;

    //var queryURL = "https://wger.de/api/v2/exerciseimage/4/thumbnails/";
    var queryURL = "https://wger.de/api/v2/exerciseimage/";
    
    queryURL += searchID;
    queryURL += searchThumb;

  
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: { "Authorization": "Token 25a72c6fcb1ee3b9e5de1dd8def03a9e1a65cffa" } 
    })
    .then(function(response) {

      //console.log("response");
     // console.log(response);
      //console.log(Object.keys(response))

      
      if (Object.keys(response).length > 0){
        
          //console.log(Object.keys(response).length);
          console.log("response = PASS");
          stuff = response;
          console.log(stuff);

          for (key in stuff ){
              if ( key == "medium_cropped"){
                  console.log("key");
                  console.log(stuff[key].url);
                  resultsImages = stuff[key].url;
                  //$("#results").append( resultsImages )
                  
                }
            }
            
        }
        else {
            fail++
            //console.log("fail: " + fail)
        }
        
        btnData = $("<input type='image'>");
        
        btnData.attr({
            "src": resultsImages,
            width : 200,
            height : 200
        })
        //$("#results").append( btnData )



  
      
      
      //var newFlex = $("<div class='zom flex-grow'>");
      
     // stuff.data.forEach(function(wodObject) {
        
        //var resultsImages = wodObject.medium_cropped.url
        
        
        // var restaurantData = $("<div>");
        // var cuisines = wodObjectMin.cuisines;
        // var resultName = wodObjectMin.name;
        // var resultAddy = wodObjectMin.location.address;
        
        // var resultID = wodObjectMin.id;
        // var catID = "#" + resultID;

        // var cuisines = wodObjectMin.cuisines;
        // var impDate = gifObject.import_datetime
        // var gifid = gifObject.id;
        
        // var p2 = $("<p class='pone'>").text("Date: " + impDate);
        // var showImg = $('<img>');
        // var addSavBtn = $("<button>").text("Add Event");
        // var p1 = $("<p>").html(resultName + "<br/>" + resultAddy + "<br/>");
  
        // btnData = $('<button>').text(cuisines); 
  
        // restaurantData.attr({
        //   'id': resultID,
        //   "class":"collapse"
        // });
  
        // btnData.attr({
        //   'type': 'button',
        //   'class': 'btn btn-success btn-sm',
        //   "data-toggle":"collapse",
        //   "data-target": catID
        // })
  
        // addSavBtn.attr({
        //   'data-btnid': resultID,
        //   'class':'btn btn-info btn-xs',
        //   "data-toggle": "modal",
        //   'data-target':'.foodsave'
        // });
  
        // // p2.append(addFavBtn);
        // // p2.append(dwnBtn);
        // // p.append(p2);

        // p1.append(addSavBtn)
        // restaurantData.append(p1);
        // newFlex.append(btnData);
        // $( btnData ).after(function() {
        //   return restaurantData;
        // });
        //$("#results").append( resultsImages )
     // })
    });
      // $("#results").append( resultsImages )
  }

  function saveFoodEvent (){
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('btnid') // Extract info from data-* attributes
    console.log(button);
    console.log(recipient);
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    //modal.find('.modal-body input').val(recipient)



  }



