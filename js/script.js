/*
creates an array with 5 objects
each object has an least 2 properties and 2 of the objects have 2 extra properties
*/
let quotes =
[
  {
    quote: "There are people in this world who prefer solitude. But there is no one who can withstand it.",
    source: "Makarov Dreyar",
    citation: "Fairy Tale",
    year: 2009
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dream.",
    source: "Dr. Suess"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King"
  },
  {
    quote: "Even if I can't see you... no matter how far away you may be... I will always be watching you.",
    source: "Makarov Dreyar"
  },
  {
    quote: "It ain't the speakers that bump hearts, its the hearts that make the beat.",
    source: "21 Piolets",
    citation: "Holding on to You",
    year: 2012
  }
];
/*
makes a random number from 0 - 4 but not including 5
returns a quote from the subscript of the array equal to the random number
*/
function getRandomQuote()
{
  let subscript = Math.floor(Math.random() * 5)

  return quotes[subscript];
};
/***
responsible for printing the string to the page

first grabs a random quote
then assigns properties to seperate strings
next checks for optional properties
lastley prints the string to the page using CSS's preset format
***/
function printQuote()
{
  let object = getRandomQuote();

  let line = object.quote;
  let person = object.source;
  let place = object.citation;
  let time = object.year;

  if (object.citation === undefined || object.year === undefined)
  document.getElementById('quote-box').innerHTML = '<p class = "quote">' + line  + '</p> ' + '<p class = "source">' + person + '</p>';
else
  document.getElementById('quote-box').innerHTML = '<p class = "quote">' + line  + '</p> ' + '<p class = "source">' + person + '<span class = "citation">' + place + '<span class = "year">' + time + '</p>';
};
/***
writting by the instructor to create a event
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
