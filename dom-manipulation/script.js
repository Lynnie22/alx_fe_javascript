// Array of quote objects
const quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Motivation" },
    { text: "Whether you think you can or think you can’t, you’re right.", category: "Belief" },
    { text: "The purpose of our lives is to be happy.", category: "Life" },
    { text: "Life is what happens when you’re busy making other plans.", category: "Life" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
  }
  
  // Function to create a form for adding new quotes
  function createAddQuoteForm() {
    const formContainer = document.createElement('div');
    formContainer.innerHTML = `
      <form id="addQuoteForm">
        <label for="quoteText">Quote:</label>
        <input type="text" id="quoteText" name="quoteText" required>
        <label for="quoteCategory">Category:</label>
        <input type="text" id="quoteCategory" name="quoteCategory" required>
        <button type="submit">Add Quote</button>
      </form>
    `;
  
    document.body.appendChild(formContainer);
  
    const addQuoteForm = document.getElementById('addQuoteForm');
    addQuoteForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const quoteText = document.getElementById('quoteText').value;
      const quoteCategory = document.getElementById('quoteCategory').value;
      quotes.push({ text: quoteText, category: quoteCategory });
      addQuoteForm.reset();
      alert('Quote added successfully!');
    });
  }
  
  // Event listener for the Show New Quote button
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  
  // Initialize the app by showing the first random quote and creating the add quote form
  showRandomQuote();
  createAddQuoteForm();
  