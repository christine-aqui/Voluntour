console.log('connected');
let capCity = '';
let cityCode = '';
let cityStae = '';
let cityLat = 0;
let cityLon = 0;
let userSelected = '';
//
//
$('#logo').hide();
$('.container').hide();

$(document).ready(function () {
  console.log("document ready!");
  //
  function cityInfo(obj) {
    capCity = obj.capitalCity;
    cityCode = obj.countryCode1;
    cityLat = obj.lat;
    cityLon = obj.lon;
    // if(obj === 'Hawaii'){
    cityStae = obj.state;
    // }
    return capCity, cityCode, cityLat, cityLon, cityStae;
  }
  setTimeout(function () { // logo is loaded
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    //
    setTimeout(() => { // start code
      $('.container').show();
      //
      document.querySelector('#formBtn').addEventListener('click', function (e) {
        e.preventDefault();
        //
        userSelected = $('#region-list').val();
        console.log('user selected: ', userSelected);

        switch (userSelected) {
          case "Malawi":
            cityInfo(malawi);
            console.log('City name: ', capCity);
            break;
          //
          case "Jordan":
            cityInfo(jordan);
            console.log('City name: ', capCity);
            break;
          //
          case "Nepal":
            cityInfo(nepal);
            console.log('City name: ', capCity);
            break;
          //
          case "Fiji":
            cityInfo(fiji);
            console.log('City name: ', capCity);
            break;
          //
          case "Hawaii":
            cityInfo(hawaii);
            console.log('City name: ', capCity);
            break;
          //
          case "Peru":
            cityInfo(peru);
            console.log('City name: ', capCity);
            break;
          //
          case "Cambodia":
            cityInfo(cambodia);
            console.log('City name: ', capCity);
            break;
          //
          case "India":
            cityInfo(india);
            console.log('City name: ', capCity);
            break;
          //
          case "Thailand":
            cityInfo(thailand);
            console.log('City name: ', capCity);
            break;
          //
          case "Ecuador":
            cityInfo(ecuador);
            console.log('City name: ', capCity);
            break;
          //
          case "Kenya":
            cityInfo(kenya);
            console.log('City name: ', capCity);
            break;
          //
          case "Senegal":
            cityInfo(senegal);
            console.log('City name: ', capCity);
            break;
          //
          case "Philippines":
            cityInfo(philippines);
            console.log('City name: ', capCity);
            break;
          //
        }
        // checks to see if country is selected. if no country is selected then do notting
        if (userSelected != "Country") {
          // Ajax start here
          let meetupURL = `https://cors.io/?https://api.meetup.com/2/open_events?`;
          $.ajax({
            url: meetupURL,
            method: 'GET',
            data: {
              key: '116b73e106c122e802f104e7767213',
              city: capCity,
              state: cityStae,
              country: cityCode,
              category: 1, //hard coded temp
              page: 10,
              sign: 'true',
            }
          }).done(function (response) {
            // takes response string and converts it to a JavaScript object
            let myResp = JSON.parse(response);
            let meetUpResults = myResp.results;
            if (myResp.results.length != 0) {
              console.log('meetup: ', meetUpResults);
              let newDiv = "<div class='meetup-event'></div>";
              let newP = '<p>';
              let newH3 = '<h3>';
              let newImg = `<img class='meetup-image'>`;
              for (let result of meetUpResults) {
                // let meetupImage = meetUpResults[result].photo_url;
                console.log(result.name);
                $('#meetup-events').append(newDiv);
                $('.meetup-event').append(newImg);

              }
            } else {
              console.log("no events");
            }
            // Pushing the html
            // I want the results[i].name
            // results[i].photo_url
            // results[i].status
            // results[i].description
            // results[i].event_url

          });
          // Ahmed's Code Here
          // News Api
          let newsKey = 'd91452c6c0c0450dbd402a43d19d7905';
          let newsURL = `https://newsapi.org/v2/everything?q=${userSelected}&apikey=${newsKey}`;
          $.ajax({
            url: newsURL,
            method: 'GET',
            language: 'en',
            sortBy: 'relevancy',
          }).done(function (newsResponse) {
            console.log('news: ', newsResponse);
          });

          // advisoryAPI
          let advisoryKey = '7csv43cjcwbtnfyspr6n6gjd';
          let advisoryURL = `https://api.tugo.com/v1/travelsafe/countries/${cityCode}`;
          $.ajax({
            url: advisoryURL,
            method: 'GET',
            headers: {
              "X-Auth-API-Key": advisoryKey
            }
          }).done(function (advisoryResponse) {
            console.log('advisory: ', advisoryResponse);
          });
          //
        } else {
          console.log("notting");
        }

      });
      // end of Meetup api
      //
      //
      // Lisa's Code Here

      //
      //
      //
      //
      //


      //
      //
      //
      //
      //
      // usama's Code Here

      //
      //
      //
    }, 400);
  }, 500);
  //
});
// end of doc ready