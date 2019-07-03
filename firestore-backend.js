const Firestore = require('@google-cloud/firestore')
// set environment variable to point GCLOUD service account keyfile
// export GOOGLE_APPLICATION_CREDENTIALS="~/Repo/now-practice/keyfile/getquotekeyfile030719.json"

const testDB = async () => {
  try {
    const db = new Firestore({
      projectId: 'platinum-form-233310',
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    })
    console.log(`Firestore initialized ${db}`)

    const docRef = db.collection('assets').doc('FI0009005318');

    const setNRE1V = docRef.set({
      isin: "FI0009005318",
      basicinfo: {
        exchange: "XHEL",   
        ticker: "NRE1V",
        fullname: "Nokian Renkaat Oyj Public",
        OMXNordicID: "HEX24312",
        YahooID: "NRE1V.HE",
      }
    })

    const docRef2 = db.collection('assets').doc('FI0009000681');

    docRef2.set({
      isin: "FI0009000681",
      basicinfo: {
        exchange: "XHEL",
        ticker: "NOKIA",
        fullname: "Nokia Oyj",
        OMXNordicID: "HEX24311",
        YahooID: "NOKIA.HE",
      }
    })

    const docRef3 = db.collection('assets').doc('FI123456789');

    docRef3.set({
      isin: "FI123456789",
      basicinfo: {
        exchange: "XHEL",
        ticker: "TESTI",
        fullname: "Testifirma Oy",
        OMXNordicID: "HEX12345",
        YahooID: "TESTI.HE",
      }
    })

    db.collection('assets').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      })
  }
  catch (err) {
    console.log('Failed to initiate Firestore', err);
    res.end(`Failed to initiate Firestore: ${err}`)
  }
}

module.exports = {
  testDB
}