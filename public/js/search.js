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
  