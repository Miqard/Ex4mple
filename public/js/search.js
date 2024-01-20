document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    let items = [];   
    
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
       // const results = items.filter(item => item.name.toLowerCase().includes(searchTerm));
        const results = [];
        for (let key in items) {
            x = items[key];
            if (searchTerm.length == 0){
                continue;
            }
            if (x["name"].toLowerCase().includes(searchTerm)){
                results.push(x);
            }
        }
        console.log(results);
        displaySearchResults(results);
    });
  
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        } else {
            results.forEach(result => {
                // buat gambar profile user
                const userPreview = document.createElement('div');
                userPreview.className = "user-preview";
                const userImg = document.createElement('div');
                userImg.className = "user-img";
                const img = document.createElement('img');
                img.src = result["user_img"];
                userImg.appendChild(img);
                userPreview.appendChild(userImg);
                // buat detail user
                const userDetail = document.createElement('div');
                userDetail.className = "user-details";
                const userName = document.createElement('div');
                userName.className = "user-name";
                const userDesc = document.createElement('div');
                userDesc.className = "user-description";
                const followers = document.createElement('div');
                followers.className = "followers";
                userName.innerHTML = result["name"];
                userDesc.innerHTML = result["bio"];
                followers.innerHTML = result["followers"];
                userDetail.appendChild(userName);
                userDetail.appendChild(userDesc);
                userDetail.appendChild(followers);
                userPreview.appendChild(userDetail);
                // buat follow button
                const button = document.createElement('div');
                button.className = "follow-btn";
                button.innerHTML = "Follow";
                userPreview.appendChild(button);

                searchResults.appendChild(userPreview);
                // resultItem.addEventListener('click', function () {
                //     alert(`You clicked on: ${result.name}`);
                // });
            });
        }
    }
});
  