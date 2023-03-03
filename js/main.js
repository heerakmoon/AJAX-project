// var $yesterdaysQuote = document.querySelector('#yesterdays-quote');
var $quoteOfDay = document.querySelector('#new-daily-quote');
// var newAjaxData;

function ajaxRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log(xhr.status);
    // console.log(xhr.response);
    var $newQuote = document.createElement('h4');
    $quoteOfDay.appendChild($newQuote);
    if (xhr.status === 200) {
      // newAjaxData = xhr.response;
      $newQuote.textContent = '"' + xhr.response.quote + '"';
      // console.log(newAjaxData);
    } else {
      $newQuote.textContent = 'Sorry, I can\'t seem to find today\'s quote. Go watch more anime! I\'ll have the quote ready for you in a bit';
    }
  });

  xhr.send();
}

ajaxRequest();
setInterval(ajaxRequest, 600000);
