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


  $("#add-tour").on("click", function () {
    region = $("#region-input").val().trim();
    organization = $("#organization-input").val().trim();
    start = $("#start-input").val().trim();
    type = $("#type-input").val().trim();
    itinerary = $("#itinerary-input").val().trim();

    firebase.database().ref().push({
      region: region,
      organization: organization,
      start: start,
      type: type,
      itinerary: itinerary,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  })

  firebase.database().ref().orderByChild("dateAdded").limitToLast(2).on("child_added", function (snapshot) {
    $("#region-display").html(snapshot.val().region);
    $("#organization-display").html(snapshot.val().organization);
    $("#start-display").html(snapshot.val().start);
    $("#type-display").html(snapshot.val().type);
    $("#itinerary-display").html(snapshot.val().itinerary);
    console.log("test")
  })

  let fireOrg = '';
  let fireRegion = '';
  let fireType = '';
  let itineraryMalawu = '';
  let itineraryJordan = '';
  let itineraryNepal = '';
  let itineraryFiji = '';
  let itineraryHawaii = '';
  let itineraryPeru = '';
  let itineraryCambodia = '';
  let itineraryIndia = '';
  let itineraryThailand = '';
  let itineraryEcuador = '';
  let itineraryKenya = '';
  let itinerarySenegal = '';
  let itineraryPhilippines = '';
  //
  // $(document).ready(function()  {

  function getSpanshot(uSel) {
    let database = firebase.database();
    // let itineraryData;
    database.ref().on("value", function (snapshot) {
      itineraryData = snapshot.val();
      console.log('itiner for : ', itineraryData,'uSel: ', uSel );
      switch (uSel) {
        case "Malawi":
          itineraryMalawu = itineraryData['-LDi3H-QccqyLjISx8zx'];
          fireOrg = itineraryMalawu.organization;
          fireRegion = itineraryMalawu.region;
          fireType = itineraryMalawu.type;
          console.log('itiner for malawi: ', itineraryMalawu);
          break;
          //
        case "Jordan":
          itineraryJordan = itineraryData['-LDi3Xp0WDiZ7oyOLbPE'];
          fireOrg = itineraryJordan.organization;
          fireRegion = itineraryJordan.region;
          fireType = itineraryJordan.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Nepal":
          itineraryNepal = itineraryData['-LDi3vPtosAGDf_ZymPq'];
          fireOrg = itineraryNepal.organization;
          fireRegion = itineraryNepal.region;
          fireType = itineraryNepal.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Fiji":
          itineraryFiji = itineraryData['-LDi6K2ib_jb-SzlY-U7'];
          fireOrg = itineraryFiji.organization;
          fireRegion = itineraryFiji.region;
          fireType = itineraryFiji.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Hawaii":
          itineraryHawaii = itineraryData['-LDi4ptt94YiQAbu-HOC'];
          fireOrg = itineraryHawaii.organization;
          fireRegion = itineraryHawaii.region;
          fireType = itineraryHawaii.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Peru":
          itineraryPeru = itineraryData['-LDi6qhNpeYhSZpJtCXa'];
          fireOrg = itineraryPeru.organization;
          fireRegion = itineraryPeru.region;
          fireType = itineraryPeru.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Cambodia":
          itineraryCambodia = itineraryData['-LDi7Sl78JMRWydHSWpP'];
          fireOrg = itineraryCambodia.organization;
          fireRegion = itineraryCambodia.region;
          fireType = itineraryCambodia.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "India":
          itineraryIndia = itineraryData['-LDi8n9cFmUcSqBRGG_F'];
          fireOrg = itineraryIndia.organization;
          fireRegion = itineraryIndia.region;
          fireType = itineraryIndia.type;
          console.log('itiner for malawi: ', itineraryIndia);

          // console.log('City name: ', capCity);
          break;
          //
        case "Thailand":
          itineraryThailand = itineraryData['-LDi9MWa0Jg2VRy2VjYj'];
          fireOrg = itineraryThailand.organization;
          fireRegion = itineraryThailand.region;
          fireType = itineraryThailand.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Ecuador":
          itineraryEcuador = itineraryData['-LDiAQT5DRRpPSEdoItG'];
          fireOrg = itineraryEcuador.organization;
          fireRegion = itineraryEcuador.region;
          fireType = itineraryEcuador.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Kenya":
          itineraryKenya = itineraryData['-LDiAvHNUeH_AvO7pQ8k'];
          fireOrg = itineraryKenya.organization;
          fireRegion = itineraryKenya.region;
          fireType = itineraryKenya.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Senegal":
          itinerarySenegal = itineraryData['-LDsKzNRL_MgbbwX-9dL'];
          fireOrg = itinerarySenegal.organization;
          fireRegion = itinerarySenegal.region;
          fireType = itinerarySenegal.type;
          // console.log('City name: ', capCity);
          break;
          //
        case "Philippines":
          itineraryPhilippines = itineraryData['-LDsMJLnOdwSrcTvOAK0'];
          fireOrg = itineraryPhilippines.organization;
          fireRegion = itineraryPhilippines.region;
          fireType = itineraryPhilippines.type;
          // console.log('City name: ', capCity);
          break;
          //
      }

      $('#returetrips').append(firebaseDisplay());



      // $('#returetrips').append(`
      // <div class='rTrip>
      // <h3>Organization: ${fireOrg}</h3>
      // <h4>Region: ${fireRegion}</h4>
      // <h4>Charity Type: ${fireType}</h4>
      // </div>`);
    });
    // return fireOrg , fireRegion, fireType;
  };


  // document.querySelector('#formBtn').addEventListener('click', function (e){
    // getSpanshot(userSelected);
    // $('#returetrips').append(firebaseDisplay);
  // });

  // });

  function firebaseDisplay(){
    return `
      <div class='rTrip'>
        <h3>Organization: ${fireOrg}</h3>
        <h4>Region: ${fireRegion}</h4>
        <h4>Charity Type: ${fireType}</h4>
      </div>
    `;
  }