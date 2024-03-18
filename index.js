function Validateform() {
 const Email = document.getElementById ('email1');
 const mainContainer = document.getElementById ('maincontainer');
 const secondContainer = document.getElementById ('secondcontainer');
 const errorMessage = document.getElementById ('error-message');
const correctemail = document.getElementById ('correct-email');


const correct = Email.value;



 if (correct === "") {
  errorMessage.style.display = 'block'
 } else {
  mainContainer.style.display = 'none'
  secondContainer.style.display = 'block'
  correctemail.innerHTML = correct
 }
}

function Returnbutton() {
  const mainContainer = document.getElementById ('maincontainer');
 const secondContainer = document.getElementById ('secondcontainer');
 const Email = document.getElementById ('email1');

 secondContainer.style.display = 'none';
 mainContainer.style.display = 'block';

 Email.value = ""

}