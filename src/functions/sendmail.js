import { setApiKey, send } from "@sendgrid/mail"
setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY)

export async function handler(event, context, callback) {
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
    await send(mail_to_send)

    return {
      statusCode: 200,
      body: "Message sent successfully",
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}
