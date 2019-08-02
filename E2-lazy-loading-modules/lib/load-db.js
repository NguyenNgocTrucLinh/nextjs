export default async function loadDb() {
 // const firebase = require('firebase/app')
  const firebase = await import('firebase')
  require('firebase/database')

  try {
    firebase.initializeApp({
      databaseURL: 'https://hacker-news.firebaseio.com'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database().ref('v0')
}


//Hàm này được dùng bên trong hàm "getInitialProps" ở mỗi page và dùng "require" để load module firebase
//dùng function "import()" để load firebase module. Function này return một promise và ta dùng "await" để chờ và resolve module "firebase"
