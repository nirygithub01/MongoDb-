const projectName='rando-quote-machine';
let quoteData;


var colors = [];
var currentQuote = '',
currentAuthor = '';

function getQuotes () {
    return $.ajax({
        headers:{
            Accept: 'applicartion/json'
        },
        url:

        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: function(jsonQuotes) {
            if(typeof jsonQuotes === 'string') {
                quoteData = JSON.parse(jsonQuotes);
                console.log('quotesData');
                console.log(quotesdata);
            }
        }
    });
}

function getRandomQuote(){
    return quotesData.quotes[
        Math.floor(Math.random() * quotesData.quotes.length)
    ]; 
}

function getQuotes() {
    let randomQuotes = getRandomQuote();

    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +

        encodeURIComponent(currentAuthor) + 
        '&content=' +
        encodeURIComponent(currentQuote) +


        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );

    $('.quote-text').animate({opacity:0}, 500, function() {
        $(this).animate({opacity: 1}, 500);
        $('#text').text(randomQuote.quote);
    });

 var color = Math.floor(Math.random() * color.length);
 $('html body').animate(
     {
         backgroundColor: colors[color],
         color:colors[color]
     },
     1000
 );
 $('.button').animate(
     {
         backgroundColor: color[color]
     },
     1000
 );
}

$(document).ready(function () {
    getQuotes().then(() => {
        getQuotes();

    });
    $('#new-quote').on('click', getQuote);
});
