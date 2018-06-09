console.log('connected');
let capCity = '';
let cityCode = '';
let cityStae = '';
let cityLat = 0;
let cityLon = 0;
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
    return capCity , cityCode, cityLat, cityLon, cityStae;
  }
  setTimeout(function () { // logo is loaded
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    //
    setTimeout(() => {// start code
      $('.container').show();
      //
      document.querySelector('#formBtn').addEventListener('click', function (e) {
        e.preventDefault();
        //
        let userSelected = $('#region-list').val();
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
        //
        if(userSelected != "Country"){
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
            console.log('meetup: ', myResp);
            // }
          });

          let newsKey = 'd91452c6c0c0450dbd402a43d19d7905'
          let newsURL = `https://newsapi.org/v2/everything?q=${userSelected}&apikey=${newsKey}`
          $.ajax({
            url: newsURL,
            method: 'GET',
            language: 'en',
            sortBy: 'relevancy',
          }).done(function(newsResponse){
            console.log('news: ', newsResponse)
          })

          let advisoryKey = '7csv43cjcwbtnfyspr6n6gjd';
          let advisoryURL = `https://api.tugo.com/v1/travelsafe/countries/${cityCode}`;
          $.ajax({
            url: advisoryURL,
            method: 'GET',
            headers: {
              "X-Auth-API-Key": advisoryKey
            }
          }).done(function(advisoryResponse){
            console.log('advisory: ', advisoryResponse)
          })

        } else{
          console.log("notting");
        }
      });
    }, 400);
  }, 500);

  //
  //
  // Lisa's Code Here


  //
  //
  //



  // end of doc ready
});







// Meetup API
// $("#formBtn").on('click', function(e) {
//   // using the windows object location method
//   var urlParms = new URLSearchParams(window.location.search);
//   // using the URLSearchParams utility method
//   // URLSearchParams.get() Returns the first value associated to the given search parameter.
//   var regChoi = urlParms.get('region-choice');
//   // consol log what you got
//   console.log('User selected: ', regChoi);
//   //
//   //
//   var meetupURL = `https://cors.io/?https://api.meetup.com/2/open_events?`;
//   $.ajax({
//     url: meetupURL,
//     method: 'GET',
//     data: {
//       key: '116b73e106c122e802f104e7767213',
//       city: regChoi,
//       // country: 'CA',
//       category: 1, //hard coded temp
//       sign: 'true',
//     }
//   }).done(function (responce) {
//     console.log(meetupURL);
//     // console.log('meetup ', responce);
//   });


// });