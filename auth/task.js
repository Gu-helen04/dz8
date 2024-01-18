const form = document.getElementById("signin__form");
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const userId = document.getElementById('user_id');

form.addEventListener('submit', (e) => {
	e.preventDefault();
  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); 
  xhr.send(formData);
	xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 201) {
	    let object = JSON.parse(xhr.responseText);
      if (object.success === true) {
	      localStorage.user_id = object.user_id;
	      userId.textContent = localStorage.user_id;
	      signin.classList.remove('signin_active');
	      welcome.classList.add('welcome_active');
  	  } else if (object.success === false) {
		    alert("Неверные логин/пароль.");
		  };
    }  
  };
});
window.onload = function() {
	if (localStorage.user_id === undefined) {
	  welcome.classList.remove('welcome_active');
	  signin.classList.add('signin_active');
	} else {
  	userId.textContent = localStorage.user_id;
    signin.classList.remove('signin_active');
	  welcome.classList.add('welcome_active');
	};
};