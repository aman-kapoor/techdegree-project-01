/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
  {quote: 'Weeks of coding can save you hours of planning.', source: 'Unknown',},
  {quote: 'Any application that can be written in JavaScript, will eventually be written in JavaScript',source: 'Jeff Atwood', citation: 'codinghorror', year: 2007 },
  {quote: 'Machines take me by surprise with great frequency.', source: 'Alan Turing',},
  {quote: 'Good code is its own best documentation. As you\'re about to add a comment, ask yourself, \'How can I improve the code so that this comment isn\'t needed?\' Improve the code and then document it to make it even clearer.', source: 'Steve McConnell',},
  {quote: 'To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.', source: 'Grace Hopper', tags: 'Coding' ,}
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  const randomNumber = Math.floor(Math.random() * quotes.length); // to get the random number.
  const randomQuote = quotes[randomNumber]; // to get the random quote object.
  return randomQuote;
};


/***
 * `printQuote` function
***/


function printQuote() {

  const randomQuoteObject = getRandomQuote();

  let html = `<p class="quote">${randomQuoteObject.quote}</p>
  <p class="source">${randomQuoteObject.source}`;
  if(randomQuoteObject.citation) {
    html += `<span class='citation'>${randomQuoteObject.citation}</span>`;
  }
  if(randomQuoteObject.year) {
    html += `<span class='year'>${randomQuoteObject.year}</span>`;
  }
  if(randomQuoteObject.tags) {
    html += `<span class='tags'>${randomQuoteObject.tags}</span>`;
  }
  `</p>`

  return document.getElementById('quote-box').innerHTML = html;

};

/***
 * `randomBackgrounColor` function
 * 
 * for setting the background color I took help from https://stackoverflow.com/questions/2173229/how-do-i-write-a-rgb-color-value-in-javascript
***/

function randomBackgroundColor() {
  const randomColor = Math.floor(Math.random() * 255);
  return document.body.style.backgroundColor = "rgb("+randomColor+", "+randomColor+", "+randomColor+")";
};

/***
 * `timing` function
***/

// function timing() {
  // return setInterval(function(){})
// };

setInterval(printQuote, 10000);
setInterval(randomBackgroundColor, 10000)

// timing();

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", randomBackgroundColor, false);