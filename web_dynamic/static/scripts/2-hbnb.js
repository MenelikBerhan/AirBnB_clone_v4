// js for updating api_status and selected amenities list
function myfun () {
  const amenities = {};
  $('li input[type=checkbox]').change(function () {
    if (this.checked) {
      amenities[this.dataset.name] = this.dataset.id;
    } else {
      delete amenities[this.dataset.name];
    }
    $('div.amenities h4').text(Object.keys(amenities).sort().join(', '));
  });

  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, (data) => {
    if (data.status === 'OK') $('div#api_status').addClass('available');
    else $('div#api_status').removeClass('available');
  });
}

$(document).ready(myfun);
