var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next){
	res.render('contact', {title: 'contact'});
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'felik.official@gmail.com',
			pass: 'passwordhere'
		}
	});

	var mailOptions = {
		from: 'another Felik <felik@student.untan.ac.id>',
		to: 'felik.official@gmail.com',
		subject: 'website submission',
		text: 'you have a new email from .. Name: '+req.body.name+ 'email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p>You have a new message with the following details.. <p/><ul><li>Name : '+req.body.name+'</li><li>Email : '+req.body.email+'</li><li>Message : '+req.body.message+'</li></ul>'
	}

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message sent'+info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;