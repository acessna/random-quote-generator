/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// The array below stores all the quotes for the random quote generator
var quotes = [
  {quote: 'Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative', source
        : 'Aristotle', citation: 'The Nicomachean Ethics'},
  {quote: 'We are too weak to discover the truth by reason alone', source: 'St. Augustine', citation: 'Confessions', year: '397 AD'},
  {quote: 'The greater the difficulty, the more glory in surmounting it.', source: 'Epicurus'},
  {quote: 'One cannot step twice in the same river.', source: 'Heraclitus'},
  {quote: 'The highest and most beautiful things in life are not to be heard about, nor read about, nor seen but, if one will, are to be lived.',
    source: 'Soren Kierkegaard'}

]

//The getRandomQuote function receives a random object from the quotes array of objects
function getRandomQuote(){
return quotes[Math.floor(Math.random() * quotes.length)];
}

//The printQuote function below prints the randomQuote from the getRandomQuote function onto the webpage

function printQuote(){
var randQuote = getRandomQuote();
var html = ' ';

html += '<p class="quote">' + randQuote.quote + '</p>';
html += '<p class = "source">' + randQuote.source;
if (randQuote.citation){
  html += '<span class = "citation">' + randQuote.citation + '</span>';
} if (randQuote.year){
  html += '<span class = "year">' + randQuote.year + '</span>'; 
}
html += '</p>';

document.getElementById("quote-box").innerHTML = html;
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);