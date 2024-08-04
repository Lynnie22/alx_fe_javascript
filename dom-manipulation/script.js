// let quotes = JSON.parse(localStorage.getItem('quotes')) || [
//   { text: "The best way to predict the future is to create it.", category: "Inspiration" },
//   { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Motivation" },
//   { text: "Whether you think you can or think you can’t, you’re right.", category: "Belief" },
//   { text: "The purpose of our lives is to be happy.", category: "Life" },
//   { text: "Life is what happens when you’re busy making other plans.", category: "Life" }
// ];

// // Function to display a random quote
// function showRandomQuote() {
//   const filteredQuotes = getFilteredQuotes();
//   if (filteredQuotes.length === 0) return;
//   const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
//   const randomQuote = filteredQuotes[randomIndex];
//   const quoteDisplay = document.getElementById('quoteDisplay');
//   quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
//   // Store last viewed quote in session storage
//   sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
// }

// // Function to add a new quote
// function addQuote() {
//   const newQuoteText = document.getElementById('newQuoteText').value;
//   const newQuoteCategory = document.getElementById('newQuoteCategory').value;

//   if (newQuoteText && newQuoteCategory) {
//     quotes.push({ text: newQuoteText, category: newQuoteCategory });
//     // Save updated quotes array to local storage
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     document.getElementById('newQuoteText').value = '';
//     document.getElementById('newQuoteCategory').value = '';
//     alert('Quote added successfully!');
//     populateCategories(); // Update categories in dropdown
//     filterQuote();
//   } else {
//     alert('Please enter both a quote and a category.');
//   }
// }

// // Function to export quotes to JSON file
// function exportToJsonFile() {
//   const dataStr = JSON.stringify(quotes, null, 2);
//   const dataBlob = new Blob([dataStr], { type: 'application/json' });
//   const url = URL.createObjectURL(dataBlob);
//   const exportFileDefaultName = 'quotes.json';

//   const link = document.createElement('a');
//   link.href = url;
//   link.download = exportFileDefaultName;
//   link.click();
// }

// // Function to import quotes from JSON file
// function importFromJsonFile(event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function(event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     // Save updated quotes array to local storage
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     alert('Quotes imported successfully!');
//     populateCategories(); // Update categories in dropdown
//     filterQuote();
//   };
//   fileReader.readAsText(event.target.files[0]);
// }

// // Function to populate the category filter dropdown
// function populateCategories() {
//   const categoryFilter = document.getElementById('categoryFilter');
//   categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset the dropdown
//   const categories = [...new Set(quotes.map(quote => quote.category))];
//   categories.forEach(category => {
//     const option = document.createElement('option');
//     option.value = category;
//     option.textContent = category;
//     categoryFilter.appendChild(option);
//   });
// }

// // Function to filter quotes based on selected category
// function filterQuote() {
//   const selectedCategory = document.getElementById('categoryFilter').value;
//   localStorage.setItem('lastSelectedCategory', selectedCategory);
//   showRandomQuote();
// }

// // Function to get quotes based on the selected category
// function getFilteredQuotes() {
//   const selectedCategory = document.getElementById('categoryFilter').value;
//   if (selectedCategory === 'all') {
//     return quotes;
//   }
//   return quotes.filter(quote => quote.category === selectedCategory);
// }

// // Event listener for the Show New Quote button
// document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// // Load the last viewed quote from session storage if available
// const lastViewedQuote = JSON.parse(sessionStorage.getItem('lastViewedQuote'));
// if (lastViewedQuote) {
//   const quoteDisplay = document.getElementById('quoteDisplay');
//   quoteDisplay.innerHTML = `<p>${lastViewedQuote.text}</p><p><em>${lastViewedQuote.category}</em></p>`;
// } else {
//   // Initialize the app by showing the first random quote
//   showRandomQuote();
// }

// // Load the last selected category filter from local storage
// const lastSelectedCategory = localStorage.getItem('lastSelectedCategory') || 'all';
// document.getElementById('categoryFilter').value = lastSelectedCategory;
// populateCategories();
// filterQuote();

// let quotes = JSON.parse(localStorage.getItem('quotes')) || [
//   { text: "The best way to predict the future is to create it.", category: "Inspiration" },
//   { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Motivation" },
//   { text: "Whether you think you can or think you can’t, you’re right.", category: "Belief" },
//   { text: "The purpose of our lives is to be happy.", category: "Life" },
//   { text: "Life is what happens when you’re busy making other plans.", category: "Life" }
// ];

// // Function to display a random quote
// function showRandomQuote() {
//   const filteredQuotes = getFilteredQuotes();
//   if (filteredQuotes.length === 0) return;
//   const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
//   const randomQuote = filteredQuotes[randomIndex];
//   const quoteDisplay = document.getElementById('quoteDisplay');
//   quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
//   // Store last viewed quote in session storage
//   sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
// }

// // Function to add a new quote
// function addQuote() {
//   const newQuoteText = document.getElementById('newQuoteText').value;
//   const newQuoteCategory = document.getElementById('newQuoteCategory').value;

//   if (newQuoteText && newQuoteCategory) {
//     const newQuote = { text: newQuoteText, category: newQuoteCategory };
//     quotes.push(newQuote);
//     // Save updated quotes array to local storage
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     document.getElementById('newQuoteText').value = '';
//     document.getElementById('newQuoteCategory').value = '';
//     alert('Quote added successfully!');
//     populateCategories(); // Update categories in dropdown
//     filterQuote();
//     postQuoteToServer(newQuote); // Post new quote to server
//   } else {
//     alert('Please enter both a quote and a category.');
//   }
// }

// // Function to export quotes to JSON file
// function exportToJsonFile() {
//   const dataStr = JSON.stringify(quotes, null, 2);
//   const dataBlob = new Blob([dataStr], { type: 'application/json' });
//   const url = URL.createObjectURL(dataBlob);
//   const exportFileDefaultName = 'quotes.json';

//   const link = document.createElement('a');
//   link.href = url;
//   link.download = exportFileDefaultName;
//   link.click();
// }

// // Function to import quotes from JSON file
// function importFromJsonFile(event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function(event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     // Save updated quotes array to local storage
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     alert('Quotes imported successfully!');
//     populateCategories(); // Update categories in dropdown
//     filterQuote();
//   };
//   fileReader.readAsText(event.target.files[0]);
// }

// // Function to populate the category filter dropdown
// function populateCategories() {
//   const categoryFilter = document.getElementById('categoryFilter');
//   categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset the dropdown
//   const categories = [...new Set(quotes.map(quote => quote.category))];
//   categories.forEach(category => {
//     const option = document.createElement('option');
//     option.value = category;
//     option.textContent = category;
//     categoryFilter.appendChild(option);
//   });
// }

// // Function to filter quotes based on selected category
// function filterQuote() {
//   const selectedCategory = document.getElementById('categoryFilter').value;
//   localStorage.setItem('lastSelectedCategory', selectedCategory);
//   showRandomQuote();
// }

// // Function to get quotes based on the selected category
// function getFilteredQuotes() {
//   const selectedCategory = document.getElementById('categoryFilter').value;
//   if (selectedCategory === 'all') {
//     return quotes;
//   }
//   return quotes.filter(quote => quote.category === selectedCategory);
// }

// // Function to fetch quotes from the server
// async function fetchQuotesFromServer() {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your mock API
//     const serverQuotes = response.data.map(item => ({ text: item.title, category: "Server" })); // Adjust according to the API response structure
//     // Assuming serverQuotes is an array of quotes

//     // Merge server quotes with local quotes
//     serverQuotes.forEach(serverQuote => {
//       if (!quotes.some(localQuote => localQuote.text === serverQuote.text)) {
//         quotes.push(serverQuote);
//       }
//     });

//     // Save updated quotes array to local storage
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     alert('Quotes synced with server successfully!');
//     populateCategories(); // Update categories in dropdown
//     filterQuote();
//   } catch (error) {
//     console.error('Error syncing with server:', error);
//   }
// }

// // Function to post a new quote to the server
// async function postQuoteToServer(newQuote) {
//   try {
//     await axios.post('https://jsonplaceholder.typicode.com/posts', newQuote, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     alert('Quote posted to server successfully!');
//   } catch (error) {
//     console.error('Error posting quote to server:', error);
//   }
// }

// // Function to periodically sync with the server
// function startPeriodicSync(interval = 60000) { // Default interval: 60 seconds
//   setInterval(fetchQuotesFromServer, interval);
// }

// // Event listener for the Show New Quote button
// document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// // Load the last viewed quote from session storage if available
// const lastViewedQuote = JSON.parse(sessionStorage.getItem('lastViewedQuote'));
// if (lastViewedQuote) {
//   const quoteDisplay = document.getElementById('quoteDisplay');
//   quoteDisplay.innerHTML = `<p>${lastViewedQuote.text}</p><p><em>${lastViewedQuote.category}</em></p>`;
// } else {
//   // Initialize the app by showing the first random quote
//   showRandomQuote();
// }

// // Load the last selected category filter from local storage
// const lastSelectedCategory = localStorage.getItem('lastSelectedCategory') || 'all';
// document.getElementById('categoryFilter').value = lastSelectedCategory;
// populateCategories();
// filterQuote();

// // Start periodic syncing with the server
// startPeriodicSync();


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
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);
    // Save updated quotes array to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes));
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    alert('Quote added successfully!');
    populateCategories(); // Update categories in dropdown
    filterQuote();
    postQuoteToServer(newQuote); // Post new quote to server
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
    populateCategories(); // Update categories in dropdown
    filterQuote();
  };
  fileReader.readAsText(event.target.files[0]);
}

// Function to populate the category filter dropdown
function populateCategories() {
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
function filterQuote() {
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

// Function to fetch quotes from the server
async function fetchQuotesFromServer() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your mock API
    const serverQuotes = response.data.map(item => ({ text: item.title, category: "Server" })); // Adjust according to the API response structure
    // Assuming serverQuotes is an array of quotes

    let conflicts = false;

    // Merge server quotes with local quotes
    serverQuotes.forEach(serverQuote => {
      if (!quotes.some(localQuote => localQuote.text === serverQuote.text)) {
        quotes.push(serverQuote);
      } else {
        conflicts = true;
      }
    });

    // Save updated quotes array to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes));
    
    if (conflicts) {
      showNotification('Data conflict resolved. Server data took precedence.');
    } else {
      showNotification('Quotes synced with server successfully.');
    }
    populateCategories(); // Update categories in dropdown
    filterQuote();
  } catch (error) {
    console.error('Error syncing with server:', error);
    showNotification('Error syncing with server.');
  }
}

// Function to post a new quote to the server
async function postQuoteToServer(newQuote) {
  try {
    await axios.post('https://jsonplaceholder.typicode.com/posts', newQuote, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    showNotification('Quote posted to server successfully.');
  } catch (error) {
    console.error('Error posting quote to server:', error);
    showNotification('Error posting quote to server.');
  }
}

// Function to periodically sync with the server
function startPeriodicSync(interval = 60000) { // Default interval: 60 seconds
  setInterval(fetchQuotesFromServer, interval);
}

// Function to show notifications
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
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
populateCategories();
filterQuote();

// Start periodic syncing with the server
startPeriodicSync();