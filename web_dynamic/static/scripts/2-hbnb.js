// js for updating api_status
function fetchApiStatus () {
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, (data) => {
    if (data.status === 'OK') $('div#api_status').addClass('available');
    else $('div#api_status').removeClass('available');
  });
}

$(document).ready(fetchApiStatus);
