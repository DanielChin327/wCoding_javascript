document.addEventListener("DOMContentLoaded", function(){

  let shippingForm = document.getElementById('shipping-form');

  shippingForm.addEventListener('submit', function(e) {
      // Prevent the default behavior submission
      // the default behavior of a submitted form is to refresh the page
      e.preventDefault();

      let formData = new FormData(shippingForm);
      let hasErrors = false;

      // Method 1 - setting variables to object.

      // let formData = new FormData(shippingForm)
      // let firstName = formData.get("firstName") //grabbed from name attribute
      // let lastName = formData.get('lastName')
      // let date = formData.get('date')
      // let city = formData.get('city')
      // let email = formData.get('email')
      // let agree = formData.get('agree')

      /////////////////////////////////////////////////////////////////

      // Method 2 - setting variables to an array that is made with submit button
      let firstName = e.target.elements['firstName'].value;
      let lastName = e.target.elements['lastName'].value;
      let birthDate = e.target.elements['birthDate'];
      let city = e.target.elements['city'].value;
      let email = e.target.elements['email'].value;

      /////////////////////////////////////////////////////////////////

      let errors = verifyFormData(firstName, lastName, birthDate, city, email);

      if(errors.length > 0 ) {
          hasErrors = true;

          for (let i = 0; i < errors.length; i++) {
              switch(errors[i]) {
                  case firstName:
                      shippingForm.firstName.classList.add("input-error");
                      break;
                  case lastName:
                      shippingForm.lastName.classList.add('input-error');
                      break;
                  case birthDate:
                      shippingForm.birthDate.classList.add('input-error');
                      break;
                  case city:
                      shippingForm.city.classList.add('input-error');
                      break;
                  case email:
                      shippingForm.email.classList.add('input-error');
                      break;
                  default:
                      return;
              }
          }
      }
  });

function resetFormError(shippingForm) {
  shippingForm.addEventListener('input', function(e) {
      e.target.classList.remove("input-error");
  });
}

resetFormError(shippingForm);
});



function verifyFormData(firstName, lastName, birthDate, city, email) {
  let errors = [];
  if (firstName.length > 10 ) {
      errors.push(firstName);
  }
  if (lastName.length > 10) {
      errors.push(lastName);
  }
  if (city.length > 10 ) {
      errors.push(city);
  }
  if (birthDate === ''){
      errors.push(birthDate);
  }
  return errors;
}
