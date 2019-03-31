document.addEventListener("DOMContentLoaded", function() {
  const signModal = document.querySelector('.modal');
  const signInButton = document.querySelector('button');
  const closeButton = document.getElementsByClassName('close')[0];
  const userNameField = document.getElementById('user');
  const pwField = document.getElementById('pass');


  signInButton.addEventListener('click', function modalDisp() {
    signModal.style.display = 'flex';
    userNameField.classList.add('error');
    pwField.classList.add('error');
    console.log("Understood");
  });

  userNameField.addEventListener('mouseover', function styleChange() {
    userNameField.classList.remove('error');
  });

  pwField.addEventListener('mouseover', function styleChange() {
    pwField.classList.remove('error');
  });

  closeButton.addEventListener('click', function modalRemov() {
    signModal.style.display = 'none';
  });

  signModal.addEventListener('click', function modalRemov() {
    signModal.style.display = 'none';
  });

});
