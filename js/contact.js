//Form Validation
document.querySelector('#btn').addEventListener('click', () => {
  const first_Name = document.getElementById('first_Name');
  const last_Name = document.getElementById('last_Name');
  const email = document.getElementById('email');

  if (first_Name.value === '') {
    first_Name.focus();
    return;
  }
  if (last_Name.value === '') {
    last_Name.focus();
    return
  }
  if (email.value === '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    email.focus();
    return;
  }
  console.log(first_Name.value);
  console.log(last_Name.value);
  console.log(email.value);
});