// document.querySelector('button');
// document.querySelector('.new-quote button')

console.log('pls');
async function getQuote(){
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.content);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://api.quotable.io/random'
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

shareButton.addEventListener("click", async () => {
  try {
    await navigator.share({ title: "Example Page", url: "week12-demo.html" });
    console.log("Data was shared successfully");
  } catch (err) {
    console.error("Share failed:", err.message);
  }
});
