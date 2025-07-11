// function sendEmail() {
//   // Get the form values
//   const templateParams = {
//     name: document.getElementById('contact-name').value,
//     email: document.getElementById('contact-email').value,
//     message: document.getElementById('contact-message').value,
//     subject: document.getElementById('contact-subject').value
//   };

//   // Send the email using EmailJS
//   emailjs.send("service_frxazyg", "template_lgwiaow", templateParams)
//   .then(function(response) {
//     console.log("Email sent successfully:", response);
//     alert("Your message has been sent successfully!");
//     // Optionally, reset the form after sending
//     document.getElementById('contact-form').reset();    
//   }, function(error) {
//     console.error("Error sending email:", error);
//   })
// };