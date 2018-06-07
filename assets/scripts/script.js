console.log('connected');
$('#logo').hide();
// $('.container').hide();
$(document).ready(function () {
  console.log("document ready!");
  setTimeout(function () {
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    // setTimeout(function ()  {
    //   $('.container').show();
    // }, 400);
  }, 500);
});

// Meetup API
$(".formBtn").on("click", function  (e) {
  e.preventDefault(); // without page resets and causes isses
  console.log('button pressed'); // checks that button is ressed
  var userSelLoc = $("#region-list").val(); // gets dopedown menu value
  console.log(userSelLoc);
  // using the windows object location method
  // var urlParms = new URLSearchParams(window.location.search);
  // using the URLSearchParams utility method
  // URLSearchParams.get() Returns the first value associated to the given search parameter.
  // var regChoi = urlParms.get('region-choice');
  // consol log what you got
  // console.log('User selected: ', regChoi);
  //
  //
  var meetupURL = 'https://cors.io/?https://api.meetup.com/2/open_events?';

  $.ajax({
    url: meetupURL,
    method: 'GET',
    data: {
      key: '116b73e106c122e802f104e7767213',
      city: "Honolulu",
      state: 'Hawaii',
      // country: userSelLoc,
      country: "USA",
      category: 1, //hard coded temp
      sign: 'true',
    }
  }).done(function (responce) {
    console.log('made it to the res');
    // console.log(meetupURL);
    console.log('meetup ', responce);
  });


});