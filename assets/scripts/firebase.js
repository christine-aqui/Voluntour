  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBqAqj7yjN_NyKsJkoo4KFMEFeesHymTl4",
    authDomain: "most-recent-user-8b478.firebaseapp.com",
    databaseURL: "https://most-recent-user-8b478.firebaseio.com",
    projectId: "most-recent-user-8b478",
    storageBucket: "most-recent-user-8b478.appspot.com",
    messagingSenderId: "642980408159"
  };
  firebase.initializeApp(config);

  var region = "";
  var organization = "";
  var start = "";
  var type = "";
  var itinerary = "";


  $("#add-tour").on("click", function() {
    region = $("#region-input").val().trim();
    organization = $("#organization-input").val().trim();
    start = $("#start-input").val().trim();
    type = $("#type-input").val().trim();
    itinerary = $("#itinerary-input").val().trim();

  firebase.database().ref().push({
      region:region,
      organization:organization,
      start:start,
      type:type,
      itinerary:itinerary,
      dateAdded:firebase.database.ServerValue.TIMESTAMP
  })
})

firebase.database().ref().orderByChild("dateAdded").limitToLast(2).on("child_added", function(snapshot){
    $("#region-display").html(snapshot.val().region);
    $("#organization-display").html(snapshot.val().organization);
    $("#start-display").html(snapshot.val().start);
    $("#type-display").html(snapshot.val().type);
    $("#itinerary-display").html(snapshot.val().itinerary);
    console.log("test")
})

// $(document).ready(function () {
  function getSpanshot(){
    var database = firebase.database();
    var itineraryData;
    database.ref().on("value", function (snapshot) {
      itineraryData = snapshot.val();
      console.log(itineraryData);
    });
  }

// });

