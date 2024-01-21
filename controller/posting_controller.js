

const viewAllPost = (req, res) => {
    const jsondata = require("../data/profile_user.json");
    const locals = {
        title: "Threads",
        data: jsondata
    }
    res.render('guesthome', locals);
}

const viewPostDetails = () => {

}

const addPost = () => {

}

const updatePost = () => {

}

const deletePost = () => {

}

module.exports = {
    viewAllPost,
    viewPostDetails,
    addPost,
    updatePost,
    deletePost,
}
