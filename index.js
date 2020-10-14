const quote = document.getElementById('quote');
const author = document.getElementById('author');
const authorPic = document.querySelector('img');
const run = document.getElementById('run');

function getQuote(){
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data)=>{
        printQuote(data)
    })
}

function printQuote(data){
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    authorPic.src = data.photo;
}

getQuote()

run.addEventListener('click', getQuote)