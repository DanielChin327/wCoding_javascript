document.addEventListener("DOMContentLoaded", function(){

  let shippingForm = document.getElementById('shipping-form')

  shippingForm.addEventListener('submit', function(e) {
    // Prevent the default behavior submission
    // the default behavior of a submiited form is to refresh the page
    e.preventDefault();


    // Method 1 - setting variabiles to object.

    // let formData = new FormData(shippingForm)

    // console.log(formData)

    // let firstName = formData.get("firstName") //grabed from name attribute

    // console.log(firstName)

    // let lastName = formData.get('lastName')
    // let date = formData.get('date')
    // let city = formData.get('city')
    // let zip = formData.get('zipCode')
    // let email = formData.get('email')
    // let agree = formData.get('agree')

  /////////////////////////////////////////////////////////////////

    // Method 2 - setting variables to an array that is made with submit button
    let firstName = e.target.elements['firstName'].value
    let lastName = e.target.elements['lastName'].value
    let date = e.target.elements['date'].value
    let city =  e.target.elements['city'].value
    let zip = e.target.elements['zipCode'].value
    let email = e.target.elements['email'].value


    /////////////////////////////////////////////////////////////////

    if (firstName.length < 10 ) {
      console.log("Invalid First Name")
    }
    if (lastName.length < 10) {

    }
    if (zip === "" || isNaN(zip) || zip.length !== 5) {

    }

  })

});
