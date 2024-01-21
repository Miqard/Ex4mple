const login = () => {(req, res) => {
    const locals = {
      title: "Login • Threads"
    }
    res.render('login', { locals });
  }

}

const register = () => {(req, res) => {
    const locals = {
      title: "Register • Threads"
    }
    res.render('register', { locals });
  }
}

const logout = () => {

}

const userDetails = () => {(req, res) => {
    const locals = {
      title: "Profile • Threads"
    }
    res.render("profile", { locals });
  }
}

module.exports = {
    login,register,logout,userDetails
}