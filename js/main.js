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
      getYesterdaysQuote();
    } else {
      $newQuote.textContent = 'Sorry, I can\'t seem to find today\'s quote. Go watch more anime! I\'ll have the quote ready for you in a bit';
    }
  });

  xhr.send();
}

ajaxRequest();

setInterval(ajaxRequest, 86400000);

var $yesterdaysAnimeQuote = document.createElement('h4');
$yesterdaysQuote.appendChild($yesterdaysAnimeQuote);

var $yesterdaysAnimeCharacter = document.createElement('h4');
$yesterdaysQuote.appendChild($yesterdaysAnimeCharacter);

function getYesterdaysQuote() {
  var quoteOfDay = data.dailyQuotes[0];
  var oldQuote = data.dailyQuotes[1];

  if (data.dailyQuotes[0]) {
    $newQuote.textContent = '"' + quoteOfDay.quote + '"';
  }
  if (data.dailyQuotes[1]) {
    $yesterdaysAnimeTitle.textContent = oldQuote.anime;

    $yesterdaysAnimeQuote.textContent = '"' + oldQuote.quote + '"';

    $yesterdaysAnimeCharacter.className = 'text-right';
    $yesterdaysAnimeCharacter.textContent = '- ' + oldQuote.character;
    data.dailyQuotes.pop();
  }
}
