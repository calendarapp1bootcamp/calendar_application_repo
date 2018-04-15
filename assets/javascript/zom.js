var eid = ""; 
var etype = ""; 

$( window ).on( "load", function() {

  var usStates = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
  ];

  var stateSelect = document.getElementById('state');

  for(var i = 0; i < usStates.length; i++) {
      var option = document.createElement("option");
      option.text = usStates[i].name;
      option.value = usStates[i].abbreviation;
      stateSelect.add(option);
  }

  $(document).on("click", "#citysubmit", findCity);



});

//var zomapi = a9f103698b4f0c331c939d53be137fea


function findCity(event) {
  event.preventDefault();

  var cityName = $("#cityinput").val().trim();
  
  if (cityName == "") {
    alert("CITY must be filled out");
    $("#cityhelp").text("CITY must be filled out");
    return false;
  }
  else{
    var cityClean = cityName.replace(" ", "+")
    var stateName = $("#state").find(":selected").text();
    var queryLocation = cityClean + "%2C" + stateName;
    
    $("#cityhelp").text("You entered: " + cityName + ", " + stateName);

  }

  console.log(cityName);
  console.log(cityClean);
  console.log(stateName);
  console.log(queryLocation);

    //var queryURL = "https://developers.zomato.com/api/v2.1/locations?query=oakland%2CCalifornia";
    var queryURL = "https://developers.zomato.com/api/v2.1/locations?&query=";
    queryURL += queryLocation;
  
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: { "user-key": "a9f103698b4f0c331c939d53be137fea"} 

    })
    .then(function(response) {

      eid = response.location_suggestions["0"].city_id;
      etype = response.location_suggestions["0"].entity_type;
      console.log(eid);
      console.log(etype);
      callZom(eid,etype);
    });
  }
  //findCity();




  function callZom(inEid, inEType) {
    //var searchTerm = $(this).attr("data-name");
     searchEID = "entity_id=" + inEid + "&";
     searchETYPE = "entity_type=" + inEType + "&";
     var trend = "count=10&collection_id=1"

    //var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=10773&entity_type=city&collection_id=1";
    //var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=10773&entity_type=city";
    //var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=10773&entity_type=city&count=10&collection_id=1";
    var queryURL = "https://developers.zomato.com/api/v2.1/search?";
    
    queryURL += searchEID;
    queryURL += searchETYPE;
    queryURL += trend;
    
    //queryURL += searchTerm
    console.log(queryURL);
  
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: { "user-key": "a9f103698b4f0c331c939d53be137fea"} 

    })
    .then(function(response) {

      console.log("response");
      console.log(response);
    
      
      var newFlex = $("<div class='zom flex-grow'>");
      
      response.restaurants.forEach(function(zomObject) {

        var zomObjectMin = zomObject.restaurant;
        
        
        var dataBtnDiv = $("<div>");
        var cuisines = zomObjectMin.cuisines;
        var resultName = zomObjectMin.name;
        var resultAddy = zomObjectMin.location.address;
        
        var resultID = zomObjectMin.id;
        var catID = "#" + resultID;

        var cuisines = zomObjectMin.cuisines;
        // var impDate = gifObject.import_datetime
        // var gifid = gifObject.id;
        var p1 = $("<p>").html(resultName + "<br/>" + resultAddy);

        // var p2 = $("<p class='pone'>").text("Date: " + impDate);
        //var showImg = $('<img>');
        // var addFavBtn = $("<br><div class='btn btn-info btn-xs'>").text("favs");
        // var dwnBtn = $("<a>"); //.attr('download');      
        btnData = $('<button>').text(cuisines); 
        // var dwnlink1 = ' https://giphy.com/gifs/style-';
        // var dwnId = dwnlink1 + gifid;
        // var fullDwnLink = dwnId + '/download';
  
        dataBtnDiv.attr({
          'id': resultID,
          "class":"collapse"
        });
  
        btnData.attr({
          'type': 'button',
          'class': 'btn btn-success btn-sm',
          "data-toggle":"collapse",
          "data-target": catID
        })
  
        // dwnBtn.append(btnData);
  
        // showImg.attr({
        //   src: imgStill,
        //   'data-move': imgMove,
        //   'data-still': imgStill,
        //   'data-state': "still",
        //   'data-play': "play1",
        //   class: "gifbox",
        //   id: gifid
        // });
  
        // addFavBtn.attr({
        //   'data-btnid': gifid
        // });
  
        // p2.append(addFavBtn);
        // p2.append(dwnBtn);
        // p.append(p2);
        dataBtnDiv.append(p1);
        newFlex.append(btnData);
        $( btnData ).after(function() {
          return dataBtnDiv;
        });
        $("#results").append( newFlex )
      })
    });
  }
 // callZom();



