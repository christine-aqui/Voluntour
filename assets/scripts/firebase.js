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

  let region = "";
  let organization = "";
  let start = "";
  let type = "";
  var itinerary = "";
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
  let itineraryImage = '';
  let fireLine = '';


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
  //
  function getSpanshot(uSel) {
    let database = firebase.database();
    database.ref().on("value", function (snapshot) {
      itineraryData = snapshot.val();
      console.log('itiner for : ', itineraryData, 'uSel: ', uSel);
      switch (uSel) {
        case "Malawi":
          itineraryMalawu = itineraryData['-LDi3H-QccqyLjISx8zx'];
          fireOrg = itineraryMalawu.organization;
          fireRegion = itineraryMalawu.region;
          fireType = itineraryMalawu.type;
          fireLine = itineraryMalawu.link;
          itineraryImage = './assets/images/Habitat_for_humanity.png';
          console.log('itiner for malawi: ', itineraryMalawu);
          break;
          //
        case "Jordan":
          itineraryJordan = itineraryData['-LDi3Xp0WDiZ7oyOLbPE'];
          fireOrg = itineraryJordan.organization;
          fireRegion = itineraryJordan.region;
          fireType = itineraryJordan.type;
          fireLine = itineraryJordan.link;
          itineraryImage = './assets/images/Habitat_for_humanity.png';
          break;
          //
        case "Nepal":
          itineraryNepal = itineraryData['-LDi3vPtosAGDf_ZymPq'];
          fireOrg = itineraryNepal.organization;
          fireRegion = itineraryNepal.region;
          fireType = itineraryNepal.type;
          fireLine = itineraryNepal.link;
          itineraryImage = './assets/images/Habitat_for_humanity.png';
          break;
          //
        case "Fiji":
          itineraryFiji = itineraryData['-LDi6K2ib_jb-SzlY-U7'];
          fireOrg = itineraryFiji.organization;
          fireRegion = itineraryFiji.region;
          fireType = itineraryFiji.type;
          fireLine = itineraryFiji.link;
          itineraryImage = './assets/images/GVI-Logo.png';
          break;
          //
        case "Hawaii":
          itineraryHawaii = itineraryData['-LDi4ptt94YiQAbu-HOC'];
          fireOrg = itineraryHawaii.organization;
          fireRegion = itineraryHawaii.region;
          fireType = itineraryHawaii.type;
          fireLine = itineraryHawaii.link;
          itineraryImage = './assets/images/Habitat_for_humanity.png';
          break;
          //
        case "Peru":
          itineraryPeru = itineraryData['-LDi6qhNpeYhSZpJtCXa'];
          fireOrg = itineraryPeru.organization;
          fireRegion = itineraryPeru.region;
          fireType = itineraryPeru.type;
          fireLine = itineraryPeru.link;
          itineraryImage = './assets/images/GVI-Logo.png';
          break;
          //
        case "Cambodia":
          itineraryCambodia = itineraryData['-LDi7Sl78JMRWydHSWpP'];
          fireOrg = itineraryCambodia.organization;
          fireRegion = itineraryCambodia.region;
          fireType = itineraryCambodia.type;
          fireLine = itineraryCambodia.link;
          itineraryImage = './assets/images/GVI-Logo.png';
          break;
          //
        case "India":
          itineraryIndia = itineraryData['-LDi8n9cFmUcSqBRGG_F'];
          fireOrg = itineraryIndia.organization;
          fireRegion = itineraryIndia.region;
          fireType = itineraryIndia.type;
          fireLine = itineraryIndia.link;
          console.log('itiner for malawi: ', itineraryIndia);
          itineraryImage = './assets/images/GVI-Logo.png';
          break;
          //
        case "Thailand":
          itineraryThailand = itineraryData['-LDi9MWa0Jg2VRy2VjYj'];
          fireOrg = itineraryThailand.organization;
          fireRegion = itineraryThailand.region;
          fireType = itineraryThailand.type;
          fireLine = itineraryThailand.link;
          itineraryImage = './assets/images/GVI-Logo.png';
          break;
          //
        case "Ecuador":
          itineraryEcuador = itineraryData['-LDiAQT5DRRpPSEdoItG'];
          fireOrg = itineraryEcuador.organization;
          fireRegion = itineraryEcuador.region;
          fireType = itineraryEcuador.type;
          fireLine = itineraryEcuador.link;
          itineraryImage = './assets/images/ME_to_WE.png';
          break;
          //
        case "Kenya":
          itineraryKenya = itineraryData['-LDiAvHNUeH_AvO7pQ8k'];
          fireOrg = itineraryKenya.organization;
          fireRegion = itineraryKenya.region;
          fireType = itineraryKenya.type;
          fireLine = itineraryKenya.link;
          itineraryImage = './assets/images/ME_to_WE.png';
          break;
          //
        case "Senegal":
          itinerarySenegal = itineraryData['-LDsKzNRL_MgbbwX-9dL'];
          fireOrg = itinerarySenegal.organization;
          fireRegion = itinerarySenegal.region;
          fireType = itinerarySenegal.type;
          fireLine = itinerarySenegal.link;
          itineraryImage = './assets/images/projects-abroad.png';
          break;
          //
        case "Philippines":
          itineraryPhilippines = itineraryData['-LDsMJLnOdwSrcTvOAK0'];
          fireOrg = itineraryPhilippines.organization;
          fireRegion = itineraryPhilippines.region;
          fireType = itineraryPhilippines.type;
          fireLine = itinerary.link;
          itineraryImage = './assets/images/projects-abroad.png';
          break;
          //
      }
      $('#returnTrips').append(firebaseDisplay());
    });
    // return fireOrg , fireRegion, fireType;
  };
  //
  function firebaseDisplay() {
    return `
      <div class='rTrip hvr-underline-from-center'>
        <img class="orgImage" src="${itineraryImage}" alt="">
        <div class="groupFire">
        <a href="${fireLine}"><h5>${fireOrg}</h5></a>
        <h5>Look At Charitable Tours in ${fireRegion}</h5>
        <h5>${fireType}</h5>
        </div>
      </div>
    `;
  };
