const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  await sgMail.send({
    to: email,
    from: process.env.MAIL,
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

module.exports = {
  sendWelcomeEmail,
};

const sendCancellationEmail = async (email, name) => {
  await sgMail.send({
    to: email,
    from: process.env.MAIL,
    subject: "Sorry to see you go!",
    text: `Good bye, ${name}. Hope to see you soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
