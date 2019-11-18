/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {quote: '“Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative”', source
        : 'Aristotle', citation: 'The Nicomachean Ethics'},
  {quote: '“We are too weak to discover the truth by reason alone”', source: 'St. Augustine', citation: 'Confessions', year: '397 AD'},
  {quote: '“The greater the difficulty, the more glory in surmounting it.”', source: 'Epicurus'},
  {quote: '“One cannot step twice in the same river.”', source: 'Heraclitus'},
  {quote: '"The highest and most beautiful things in life are not to be heard about, nor read about, nor seen but, if one will, are to be lived."',
    source: 'Soren Kierkegaard'}

]


/***
 * `getRandomQuote` function
***/
//This functions receives a random object from the quotes array of objects
function getRandomQuote(){
return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(getRandomQuote());
/***
 * `printQuote` function
***/

function printQuote(){
var randQuote = getRandomQuote();
var html = ' ';

html += '<p class="quote">' + randQuote.quote + '</p>';
html += '<p class = "source">' + randQuote.source;
if (randQuote.citation === true){
  html += '<span class = "citation">' + randQuote.citation + '</span>';
} if (randQuote.year === true){
  html += 'span class = "year">' + randQuote.year + '</span>'; 
}
html += '</p>';
console.log(html);

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);