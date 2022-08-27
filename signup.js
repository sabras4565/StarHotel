function validation(){
	var firstname=document.getElementById("firstname");
	var lastname=document.getElementById("lastname");
	var password=document.getElementById("password");
	var confirmpassword=document.getElementById("confirmpassword");
	var email=document.getElementById("email");
	var valid=true;
	if(firstname.value.length==0){
	firstname.className="wrong-input";
	firstname.nextElementSibling.innerHTML="firstname can't be
	blank";
	valid=false;
	}
	
	if(lastname.value.length==0){
	lastname.className="wrong-input";
	lastname.nextElementSibling.innerHTML="lastname can't be
	blank";
	valid=false;
	}
	if(password.value.length==6){
	password.className="wrong-input";
	password.nextElementSibling.innerHTML="password cannot be less than
	6";
	valid=false;
	}
	if(password.value!=confirmpassword.value){
	confirmpassword.className="wrong-input";
	confirmpassword.nextElementSibling.innerHTML="password does not match;
	valid=false;
	}
	return valid;
}


	function myfunction(){
	var x=document.getElementbyId("msg");
	x.className"show";
	setTimeout(function(){x.className=x.className.replace("show","");},3000);
	}