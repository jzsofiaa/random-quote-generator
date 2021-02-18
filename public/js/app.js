function mainGetQuote() {
    document.getElementById('main-page').style.display = 'none';
  
    fetchDataFromDatabase();
}

function fetchDataFromDatabase() {
    fetch(`${window.origin}/quotes`)
        .then((resp) => resp.json())
        .then((data) => {
            processData(data);
            getNewQuote(data);
        })
        .catch((err) => {
        });
}

function getNewQuote(data) {
    document.getElementById('new-quote-container').addEventListener('click', () => {
        processData(data);
    })
};

function processData(data) {
     let quoteList = [];
    
     for (i in data) {
         if (data.hasOwnProperty(i)) {
            let quote = data[i].quote;
            let by = data[i].by;
            let quoteObj = { quote, by };
            quoteList.push(quoteObj);
         }
     }
    randomQuote(quoteList);
};

function randomQuote(quoteList) {
    let randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

    displayRandomQuote(randomQuote);
}

function displayRandomQuote(randomQuote) {
    document.getElementById('quote').innerHTML = `${randomQuote.quote}`;
    document.getElementById('by').innerHTML = `- ${randomQuote.by}`;

    changeColorByCharachters(randomQuote.by);
    animateText();
}

function changeColorByCharachters(character) { 
    let quoteBox = document.getElementById('new-quote-container');
    let quoteMark = document.getElementById('quote-mark');
    document.getElementById('result-page').style.display = 'block';

    if (character === 'Finn') {
        quoteBox.style.backgroundColor = '#00A7C5';
        quoteBox.style.color = '#FFFFFF';
        quoteMark.style.color = '#a5f383';
    } else if (character === 'Jake') {
        quoteBox.style.backgroundColor = '#FFC620';
        quoteBox.style.color = '#000004';
        quoteMark.style.color = '#000000';
    } else if (character === 'Ice King') {
        quoteBox.style.backgroundColor = '#A6DEF9';
        quoteBox.style.color = '#000004';
        quoteMark.style.color = '#0000f8';
    } else if (character=== 'Marceline') {
        quoteBox.style.backgroundColor = '#06071b';
        quoteBox.style.color = '#FFFFFF';
        quoteMark.style.color = '#751616';
    } else if (character === 'Princess Bubblegum') {
        quoteBox.style.backgroundColor = '#edcbfa';
        quoteBox.style.color = '#000004';
        quoteMark.style.color = '#ff00cd';
    } else if (character === 'Lumpy Space Princess') {
        quoteBox.style.backgroundColor = '#c07af7';
        quoteBox.style.color = '#FFFFFF';
        quoteMark.style.color = '#fff25a';
    } else if (character === 'Gunter') {
        quoteBox.style.backgroundColor = '#0d1d28';
        quoteBox.style.color = '#FFFFFF';
        quoteMark.style.color = '#ffcc04';
    } else if (character === 'Peppermint Butler') {
        quoteBox.style.backgroundColor = '#25416b';
        quoteBox.style.color = '#FFFFFF';
        quoteMark.style.color = '#c31517';
    } else if (character === 'Prismo') {
        quoteBox.style.backgroundColor = '#f38d9a';
        quoteBox.style.color = '#000004';
        quoteMark.style.color = 'f3f001';
    } else if (character === 'BMO') {
        quoteBox.style.backgroundColor = '#5da796';
        quoteBox.style.color = '#FFFFFF';
        quoteMark.style.color = '#1a3e33';
    } else if (character === 'Tree Trunks') {
        quoteBox.style.backgroundColor = '#def362';
        quoteBox.style.color = '#000004';
        quoteMark.style.color = '#000004';
    } else {
        quoteBox.style.backgroundColor = '#edec0c';
        quoteBox.style.color = '#000004';
        quoteMark.style.color = '#605e45';
    } 
}

function animateText() {
    let quote = document.getElementById('quote');
    let by = document.getElementById('by');

    quote.style = '-webkit-animation: text-animation 750ms linear forwards';
    by.style = '-webkit-animation: text-animation 2s linear forwards';

    quote.addEventListener('webkitAnimationEnd', () => {
          quote.style.animation = "";
     })

     by.addEventListener('webkitAnimationEnd', () => {
         by.style.animation = "";
     })
}