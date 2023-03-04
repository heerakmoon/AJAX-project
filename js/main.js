var $yesterdaysQuote = document.querySelector('#yesterdays-quote');
var $newQuote = document.querySelector('#new-quote');
var $yesterdaysAnimeTitle = document.querySelector('#yesterdays-title');
var newAjaxData;

function ajaxRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      newAjaxData = xhr.response;
      data.dailyQuotes.unshift(newAjaxData);
    } else {
      $newQuote.textContent = 'Sorry, I can\'t seem to find today\'s quote. Go watch more anime! I\'ll have the quote ready for you in a bit';
    }
  });

  xhr.send();
}

ajaxRequest();
getYesterdaysQuote();

// setInterval(ajaxRequest, 10000, getYesterdaysQuote, 11000);

function getYesterdaysQuote() {
  var quoteOfDay = data.dailyQuotes[0];
  var oldQuote = data.dailyQuotes[1];

  if (data.dailyQuotes[0]) {
    $newQuote.textContent = '"' + quoteOfDay.quote + '"';
  }
  if (data.dailyQuotes[1]) {
    $yesterdaysAnimeTitle.textContent = oldQuote.anime;

    var $yesterdaysAnimeQuote = document.createElement('h4');
    $yesterdaysAnimeQuote.textContent = '"' + oldQuote.quote + '"';
    $yesterdaysQuote.appendChild($yesterdaysAnimeQuote);

    var $yesterdaysAnimeCharacter = document.createElement('h4');
    $yesterdaysAnimeCharacter.className = 'text-right';
    $yesterdaysAnimeCharacter.textContent = '- ' + oldQuote.character;
    $yesterdaysQuote.appendChild($yesterdaysAnimeCharacter);
    data.dailyQuotes.pop();
  }
}
