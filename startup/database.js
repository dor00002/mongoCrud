const debug = require('debug')('assignment2:db')
const mongoose = require('mongoose')

module.exports = () => {
  mongoose
    .connect(`mongodb://localhost:27017/mad9124`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      debug(`Connected to MongoDB ...`)
    })
    .catch(err => {
      debug(`Error connecting to MongoDB ...`, err)
      process.exit(1)
    })
}
