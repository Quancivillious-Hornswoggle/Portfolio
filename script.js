const api_url = 'https://api.api-ninjas.com/v1/quotes';
const api_key = "kw3HpAqyFTS+/r+t62MQjg==GvOo94ubsDxUGJbj"

const quoteElement = document.querySelector('.quote-text');

async function getQuote() {
    const response = await fetch(api_url, {
        headers: { 'X-Api-Key': api_key }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data[0].quote;
}

async function displayQuote() {
    try {
        const quote = await getQuote();
        quoteElement.textContent = `"${quote}"`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to load quote.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuote();
});
