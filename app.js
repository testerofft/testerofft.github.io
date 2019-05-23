const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/send', (req, res) => {
  const output = `
    <p>Вам пришла заявка</p>
    <h3>Данные зявки</h3>
    <ul>
      <li>Имя: ${req.body.name}</li>
      <li>E-mail: ${req.body.email}</li>
      <li>Телеофн: ${req.body.phone}</li>
    </ul>
    <h3>Сообщение</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '5022449@mail.ru', // generated ethereal user
      pass: 'Rena1987Mail'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Заказ" <5022449@mail.ru>', // sender address
      to: '5022449@mail.ru', // list of receivers
      subject: 'Заявка', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.sendFile(__dirname + "/index.html");
  });
  });

app.listen(3000, () => console.log('Server started...'));
