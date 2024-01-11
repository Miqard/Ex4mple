$(document).ready(function () {
    const searchInput = $('#searchInput');
    const searchResults = $('#searchResults');
  
    searchInput.on('input', function () {
      const searchTerm = $(this).val();
  
      // Make an AJAX request to the server for search results
      $.get(`/search?q=${searchTerm}`, function (data) {
        displaySearchResults(data);
      });
    });
  
    function displaySearchResults(results) {
      searchResults.empty();
  
      if (results.length === 0) {
        searchResults.append('<p>No results found.</p>');
      } else {
        results.forEach(result => {
          const resultItem = $('<p>').text(result);
          resultItem.click(function () {
            alert(`You clicked on: ${result}`);
          });
          searchResults.append(resultItem);
        });
      }
    }
  });
  

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
  
    let jsonData = null;
  
    fileInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          try {
            jsonData = JSON.parse(e.target.result);
            alert('File loaded successfully!');
          } catch (error) {
            alert('Error parsing JSON file.');
          }
        };
  
        reader.readAsText(file);
      }
    });
  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      if (jsonData) {
        const results = jsonData.filter(item => {
          // Implement your own search logic here
          return Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchTerm)
          );
        });
  
        displaySearchResults(results);
      }
    });
  
    function displaySearchResults(results) {
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
      } else {
        results.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.className = 'resultItem';
          resultItem.innerText = JSON.stringify(result);
  
          resultItem.addEventListener('click', function () {
            alert(`You clicked on: ${JSON.stringify(result)}`);
          });
  
          searchResults.appendChild(resultItem);
        });
      }
    }
  });
  