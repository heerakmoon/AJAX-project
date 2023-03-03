var $yesterdaysQuote = document.querySelector('#yesterdays-quote');
var $quoteOfDay = document.querySelector('#new-daily-quote');
var newAjaxData;

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
      newAjaxData = xhr.response;
      data.dailyQuotes.push(newAjaxData);
      $newQuote.textContent = '"' + xhr.response.quote + '"';
      // console.log(newAjaxData);
    } else {
      $newQuote.textContent = 'Sorry, I can\'t seem to find today\'s quote. Go watch more anime! I\'ll have the quote ready for you in a bit';
    }
  });

  xhr.send();
}

ajaxRequest();
// console.log('data.dailyQuotes:', data.dailyQuotes);
getYesterdaysQuote();

// setInterval(ajaxRequest, 60000, getYesterdaysQuote, 60000);

function getYesterdaysQuote() {
  var oldQuote = data.dailyQuotes[0];
  var $yesterdaysAnimeTitle = document.createElement('h4');
  $yesterdaysAnimeTitle.textContent = oldQuote.anime;
  $yesterdaysQuote.appendChild($yesterdaysAnimeTitle);

  var $yesterdaysAnimeQuote = document.createElement('h4');
  $yesterdaysAnimeQuote.textContent = '"' + oldQuote.quote + '"';
  $yesterdaysQuote.appendChild($yesterdaysAnimeQuote);

  var $yesterdaysAnimeCharacter = document.createElement('h4');
  $yesterdaysAnimeCharacter.textContent = oldQuote.character;
  $yesterdaysQuote.appendChild($yesterdaysAnimeCharacter);

  if (data.dailyQuotes.length === 3) {
    data.dailyQuotes.shift();
  }
}
