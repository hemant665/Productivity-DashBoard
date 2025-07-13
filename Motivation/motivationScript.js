
const DailyQuote = document.querySelector('.dailyQuote');
const Author = document.querySelector('.author h1');

const randomQuotes = async () => {
  try {
    let response = await fetch("https://quotes-api-self.vercel.app/quote");
    let data = await response.json();
    DailyQuote.textContent = data.quote;
    Author.textContent = data.author
    console.log(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};

randomQuotes()

