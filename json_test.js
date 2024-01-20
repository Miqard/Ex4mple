const items = require("./data/profile_user.json")


let searchTerm = "hisyam";
const results = items.filter(item => item.name.toLowerCase().includes(searchTerm));
console.log(results);