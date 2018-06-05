console.log('connected');
$('#logo').hide();
$('.container').hide();
$(document).ready(function () {
  console.log("ready!");
  setTimeout(function () {
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    setTimeout(() => {
      $('.container').show();
    }, 400);
  }, 500);
});
// Meetup API
// using the windows object location method
var urlParms = new URLSearchParams(window.location.search);
// using the URLSearchParams utility method
// URLSearchParams.get() Returns the first value associated to the given search parameter.
var regChoi = urlParms.get('region-choice');
// consol log what you got
console.log('User selected: ',regChoi);