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
// var elem = document.querySelector('#region-list');
// var userRegion = elem.options[elem.selectedIndex].value;
// var userRegion = $('#region-list option:selected').text();
// console.log('User selected: ',userRegion);