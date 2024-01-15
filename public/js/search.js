document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    let items = [];  // Initialize an empty 
    
    // Fetch data from the JSON file
  async function fetchData() {
    try {
      const response = await fetch('profile_user.json');
      items = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call the fetchData function to load data
  fetchData();
  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
    //  console.log(searchTerm);
  
      const results = items.filter(item => item.name.toLowerCase().includes(searchTerm));
      displaySearchResults(results);
    });
  
    function displaySearchResults(results) {
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
      } else {
        results.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.className = 'resultItem';
          resultItem.innerText = result.name;
  
          resultItem.addEventListener('click', function () {
            alert(`You clicked on: ${result.name}`);
          });
  
          searchResults.appendChild(resultItem);
        });
      }
    }
  });
  