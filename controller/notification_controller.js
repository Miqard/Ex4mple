

const notificationUser = () => {(req, res) => {
    const locals = {
      title: "Notification • Threads"
    }
    res.render('notification', { locals });
  }}

module.exports = {
    notificationUser
}