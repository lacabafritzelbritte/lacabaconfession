function sendMail(){
		var params = {
			name: document.getElementById("name").value,
			name: document.getElementById("email").value,
			name: document.getElementById("message").value,
	};		
}
			
const serviceID = "service_7o62h8p";
const templateID = "template_ew8woig";

emailjs.send(serviceID, templateID, params)
.then(
	res =>{}
		document.getElementById("name").value = "";
		 document.getElementById("email").value,
		document.getElementById("message").value,
		console.log(res);
		alert("Your message is nasend na")
		})
.catch((err) => console.log(err));