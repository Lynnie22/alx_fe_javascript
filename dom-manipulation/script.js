// // Array of quote objects
// const quotes = [
//     { text: "The best way to predict the future is to create it.", category: "Inspiration" },
//     { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Motivation" },
//     { text: "Whether you think you can or think you can’t, you’re right.", category: "Belief" },
//     { text: "The purpose of our lives is to be happy.", category: "Life" },
//     { text: "Life is what happens when you’re busy making other plans.", category: "Life" }
//   ];
  
//   // Function to display a random quote
//   function showRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     const quoteDisplay = document.getElementById('quoteDisplay');
//     quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
//   }
  
//   // Function to create a form for adding new quotes
//   function createAddQuoteForm() {
//     const formContainer = document.createElement('div');
//     formContainer.innerHTML = `
//       <form id="addQuoteForm">
//         <label for="quoteText">Quote:</label>
//         <input type="text" id="quoteText" name="quoteText" required>
//         <label for="quoteCategory">Category:</label>
//         <input type="text" id="quoteCategory" name="quoteCategory" required>
//         <button type="submit">Add Quote</button>
//       </form>
//     `;
  
//     document.body.appendChild(formContainer);
  
//     const addQuoteForm = document.getElementById('addQuoteForm');
//     addQuoteForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const quoteText = document.getElementById('quoteText').value;
//       const quoteCategory = document.getElementById('quoteCategory').value;
//       quotes.push({ text: quoteText, category: quoteCategory });
//       addQuoteForm.reset();
//       alert('Quote added successfully!');
//     });
//   }
  
//   // Event listener for the Show New Quote button
//   document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  
//   // Initialize the app by showing the first random quote and creating the add quote form
//   showRandomQuote();
//   createAddQuoteForm();
  
// Load quotes from local storage or use default quotes
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Motivation" },
  { text: "Whether you think you can or think you can’t, you’re right.", category: "Belief" },
  { text: "The purpose of our lives is to be happy.", category: "Life" },
  { text: "Life is what happens when you’re busy making other plans.", category: "Life" }
];

// Function to display a random quote
function showRandomQuote() {
  const filteredQuotes = getFilteredQuotes();
  if (filteredQuotes.length === 0) return;
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
  // Store last viewed quote in session storage
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    // Save updated quotes array to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes));
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    alert('Quote added successfully!');
    populateCategoryFilter(); // Update categories in dropdown
    filterQuotes();
  } else {
    alert('Please enter both a quote and a category.');
  }
}

// Function to export quotes to JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const exportFileDefaultName = 'quotes.json';

  const link = document.createElement('a');
  link.href = url;
  link.download = exportFileDefaultName;
  link.click();
}

// Function to import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    // Save updated quotes array to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes));
    alert('Quotes imported successfully!');
    populateCategoryFilter(); // Update categories in dropdown
    filterQuotes();
  };
  fileReader.readAsText(event.target.files[0]);
}

// Function to populate the category filter dropdown
function populateCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset the dropdown
  const categories = [...new Set(quotes.map(quote => quote.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Function to filter quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  localStorage.setItem('lastSelectedCategory', selectedCategory);
  showRandomQuote();
}

// Function to get quotes based on the selected category
function getFilteredQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  if (selectedCategory === 'all') {
    return quotes;
  }
  return quotes.filter(quote => quote.category === selectedCategory);
}

// Event listener for the Show New Quote button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Load the last viewed quote from session storage if available
const lastViewedQuote = JSON.parse(sessionStorage.getItem('lastViewedQuote'));
if (lastViewedQuote) {
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `<p>${lastViewedQuote.text}</p><p><em>${lastViewedQuote.category}</em></p>`;
} else {
  // Initialize the app by showing the first random quote
  showRandomQuote();
}

// Load the last selected category filter from local storage
const lastSelectedCategory = localStorage.getItem('lastSelectedCategory') || 'all';
document.getElementById('categoryFilter').value = lastSelectedCategory;
populateCategoryFilter();
filterQuotes();
