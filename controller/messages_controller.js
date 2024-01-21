

const messageUser = () => {(req, res) => {
    const locals = {
      title: "Messages • Threads"
    }
    res.render('message', { locals });
  }
}

module.exports = {
    messageUser
}