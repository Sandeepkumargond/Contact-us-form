function sendMail(){
    
	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var msg = document.getElementById('msg').value;

	var messageBody = "Name " + userName +
	"<br/> Email " + email +
	"<br/> Message " + msg;
	Email.send({
    SecureToken : "a8e76ebe-ea13-417a-9361-87a050b21a68",
    To : 'sandeepkumargond198@gmail.com',
    From : email,
    Subject : "Contact us for Enquiry", 
    Body : messageBody
}).then(
  message => alert("Message sent succesfully")
);
}

