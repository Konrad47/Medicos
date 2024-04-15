const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY)

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)
  const { name, firmName, phoneNumber, email, subject, message } = data
  console.log(data)

  if (name === "" || subject === "" || email === "" || message === "") {
    return {
      statusCode: 500,
      body: "Empty data",
    }
  }

  // const body = Object.keys(data)
  //   .map(k => {
  //     console.log(k)
  //     if (k === "name") {
  //       return `<h2><strong>Imię i nazwisko: </strong> ${data[k]}</h2>`
  //     } else if (k === "firmName") {
  //       return `<h2><strong>Firma: </strong> ${data[k]}</h2>`
  //     } else if (k === "phoneNumber") {
  //       return `<h2><strong>Numer telefonu: </strong> ${data[k]}</h2>`
  //     } else if (k === "email") {
  //       return `<h2><strong>Email: </strong> ${data[k]}</h2>`
  //     } else if (k === "subject") {
  //       return `<h2><strong>Temat: </strong> ${data[k]}</h2>`
  //     } else if (k === "message") {
  //       return `<h2><strong>Wiadomość: </strong> ${data[k]}</h2>`
  //     } else {
  //       return `<h2><strong>${k}:</strong> ${data[k]}</h2>`
  //     }
  //   })
  //   .join("<br><br>")

  const body = `<h4>Imię i nazwisko: ${name}<h4>
      <br><br>
      <h4>Email: ${email}<h4>
      <br><br>
      <h4>Firma: ${firmName !== "" ? firmName : "Nie podano"}<h4>
      <br><br>
      <h4>Numer telefonu: ${phoneNumber !== "" ? phoneNumber : "Nie podano"}<h4>
      <br><br>
      <h4>Temat: ${subject}<h4>
      <br><br>
      <h4>Wiadomość: ${message}<h4>
      <br><br>
  `

  const mail_to_send = {
    to: "kplichta@innovationshub.pl",
    from: email,
    subject: subject,
    html: body,
  }

  try {
    await sgMail.send(mail_to_send)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message,
      }),
    }
  }
}
