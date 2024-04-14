const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY)

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)
  const { email, subject } = data
  console.log(data)

  const body = Object.keys(data)
    .map(k => {
      return `${k}: ${data[k]}`
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
