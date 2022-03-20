if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('Registered');
        console.log(registration);
    }).catch(error =>{
        console.log('sw registration failed');
        console.log(error);
    })
}

const quotes = import('../data/quote.json', {
    assert: {
        type: 'json'
    }
});

function getQuote() {
    quotes.then(data => {
        const quotes = data.default;
        const index = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote').innerText = quotes[index].quote;
    });
}

getQuote();