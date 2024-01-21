

const searchUser = () => {(req, res) => {
    const locals = {
      title: "Search • Threads",
      data: jsondata
    }
    res.render('search', locals);
  }  
}

module.exports = {
    searchUser
}