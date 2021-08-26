/**
 * Function to send email via user mail program, cloaking?? my email address
 * to avoid spam
 */
function sendEmail() {
  at = String.fromCharCode(Math.pow(2, 6))
  adress = 'mailt' + 'o:chicho' + 'spit' + at + 'm' + 'e.com'
  window.location.href = adress
}

/**
 * Contact Form that uses a microserver on AWS Lambda to send me an email
 * with the content of the contact form
 */
const form = document.forms['contactForm']
form.addEventListener('submit', (event) => {
  console.log('submited')
  // prevent the form submit from refreshing the page
  event.preventDefault()

  const { name, email, message } = event.target

  // TODO Limit the rate of the lambda execution, create usage limit.
  // endpoint with the lambda function
  const endpoint = 'https://37ulbwz6ff.execute-api.eu-west-1.amazonaws.com/default/martinSendCForm2Mail'

  // TODO add info about the lead, languaje, country, OS, etc.
  // Use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value,
  })

  const requestOptions = {
    method: 'POST',
    body,
  }

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error('Error in fetch')
      return response.json()
    })

    .then((response) => {
      // sets the confirmation message
      document.querySelector('.section-contact h2').innerText = 'Message sent successfully!'
      document.querySelector('.section-contact p').innerText = "I'll get back to you ASAP!"
      // hide the form
      document.forms['contactForm'].style['display'] = 'none'
    })
    .catch((error) => {
      // sets the error message
      document.querySelector('.section-contact h2').innerText = 'An unkown error occured.'
      document.querySelector('.section-contact p').innerText = 'Please try later or contact me via LinkedIn'
    })
})
