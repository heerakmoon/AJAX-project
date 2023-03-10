var $body = document.querySelector('body');
var $yesterdaysQuote = document.querySelector('#yesterdays-quote');
var $newQuote = document.querySelector('#new-quote');
var $yesterdaysAnimeTitle = document.querySelector('#yesterdays-title');
var newAjaxData;
// var animeList;

function animeListRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/available/anime');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      // animeList = xhr.response;
    }
  });
  xhr.send();
}

animeListRequest();

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

var quoteOfDay = data.dailyQuotes[0];
var oldQuote = data.dailyQuotes[1];

function getYesterdaysQuote() {

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

var $guess = document.querySelector('#guess');
var $mobileGuess = document.querySelector('#mobile-guess');
var $guessButton = document.querySelector('#guess-button');
var $yesterdaysContainer = document.querySelector('#yesterdays-container');
var $searchBar = document.querySelector('#search-bar');
var $home = document.querySelector('#home');
var $mobileHome = document.querySelector('#mobile-home');
var $dataViewGuess = document.querySelector('[data-view="guess"]');
var $answers = document.querySelector('#answers');

$body.addEventListener('click', function (event) {
  if (event.target.matches('#guess') || event.target.matches('#guess-button') || event.target.matches('.fa-question') || event.target.matches('#bot-guess') || event.target.matches('mobile-guess')) {
    $yesterdaysContainer.className = 'col-30 hidden';
    $searchBar.className = 'col-40 search-bar-margin hidden';
    $guessButton.className = 'text-center hidden';
    $home.className = 'width-20 top-nav';
    $guess.className = 'width-20 top-nav nav-darker-blue';
    $mobileHome.className = 'mobile-nav-padding width-20';
    $mobileGuess.className = 'mobile-nav-padding width-20 nav-darker-blue';
    $dataViewGuess.className = 'guess-col guess-top-margin row space-between';
    $answers.className = 'col-45 margin-left';
  }
});

var $answer1 = document.querySelector('#answer-1');
var $answer2 = document.querySelector('#answer-2');
var $answer3 = document.querySelector('#answer-3');

function createAnswers() {
  var ansArr = [$answer1, $answer2, $answer3];
  var oneTwoThree = Math.floor(Math.random() * ansArr.length);
  ansArr[oneTwoThree].textContent = quoteOfDay.anime;
  ansArr.splice(oneTwoThree, 1);
}

createAnswers();
