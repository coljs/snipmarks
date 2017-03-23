const firebaseKey = (process.env.FIREBASE_KEY) ? `"${process.env.FIREBASE_KEY}"` : ''

module.exports = {
  NODE_ENV: '"production"',
  FIREBASE_KEY: firebaseKey
}
