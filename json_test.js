const datalist = require("./data/profile_user.json")


for (key in datalist) {
    let username = datalist[key]['username'];
    let name = datalist[key]['name'];
    let bio = datalist[key]['bio'];

    console.log("------------------------------------");
    console.log("PROFILE");
    console.log("------------------------------------");
    console.log(username);
    console.log(name);
    console.log(bio);
}


