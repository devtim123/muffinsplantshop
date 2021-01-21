const axios = require("axios");

exports.handler = async function (event) {
  const { validationURL } = JSON.parse(event.body)

  // ttpsAgent = new https.Agent({
  //   rejectUnauthorized: false,
  //   cert: fs.readFileSync(path.join(__dirname, "./certificate.pem")),
  //   key: fs.readFileSync(path.join(__dirname, "./sandbox.key")),
  // })

  // const result = await axios
  //   .post(
  //     "validationURL",
  //     {
  //       merchantIdentifier: "merchant.com.example.mystore",
  //       displayName: "MyStore",
  //       initiative: "web",
  //       initiativeContext: "mystore.example.com",
  //     },
  //     {
  //       httpsAgent,
  //     }
  //   );

    const result = await axios.post(
      "https://api.mollie.com/v2/wallets/applepay/sessions",
      {
        domain: "devtimshop.netlify.app",
        validationURL,
      },
      {
        headers: {
          Authorization: `Basic test_Ruc8KEWFTt4984raVWw7gcyys9g2cE`,
        },
      }
    )

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
