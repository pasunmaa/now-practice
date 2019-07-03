const firestore = require('./firestore-backend.js')

//module.exports = (req, res) => {
exports.testFireStore = async (req, res) => {
  await firestore.testDB()
  console.log('test DB ran & sending response ...')
  res.end(`Hello from node.js and firestore-integration on Now 2.0!`)
}