const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY)

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)
  const { email, subject } = data
  console.log(data)

  const body = Object.keys(data)
    .map(k => {
      if (k === "name") {
        return `<h2><strong>Imię i nazwisko: </strong> ${data[k]}</h2>`
      } else if (k === "firmName") {
        return `<div><strong>Firma: </strong> ${data[k]}</div>`
      } else if (k === "phoneNumber") {
        return `<div><strong>Numer telefonu: </strong> ${data[k]}</div>`
      } else if (k === "email") {
        return `<div><strong>Email: </strong> ${data[k]}</div>`
      } else if (k === "subject") {
        return `<div><strong>Temat: </strong> ${data[k]}</div>`
      } else if (k === "message") {
        return `<div><strong>Wiadomość: </strong> ${data[k]}</div>`
      } else {
        return `<div><strong>${k}:</strong> ${data[k]}</div>`
      }
    })
    .join("<br><br>")

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
