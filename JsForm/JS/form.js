'use strict'

let button = document.getElementById('button')
let form = document.forms.user
let name = document.querySelectorAll("#name")[0]
let password = document.getElementById('password')
let email = document.getElementById('email')
let dateOfBirthday = document.getElementById('dateOfBirthday')
let telephone = document.getElementById('telephone')
let gender = document.getElementsByName('gender')
let respond = document.querySelector('#respond')


function validateName(event) {
  let errorName = document.getElementById("errorName")
    if (/^[A-Z][a-z]{1,14}$/.test(name.value)) {
        name.setCustomValidity('')
        errorName.innerHTML = ''
        return true
    }
    else {
        name.setCustomValidity('The name must begin with a capital letter, darling! :) ')
        errorName.innerHTML = "Enter your name please :) "
        return false
    }


    // if (name.validity.patternMismatch) {
    //     name.setCustomValidity("The name must begin with a capital letter, darling! :) ")
    //     errorName.innerHTML = "Please enter your name! :) "
    //   } else {
    //     name.setCustomValidity("")
    //     errorName.innerHTML = ""
    //  }
}

function validatePassword(event) {
  let errorPassword = document.getElementById('errorPassword')
    if (password.validity.patternMismatch) {
        password.setCustomValidity("I expect a password, darling!  :) ")
        errorPassword.innerHTML = "Password must be at least 5 characters long"
      } else {
        password.setCustomValidity("")
        errorPassword.innerHTML = ""
      }
}


function validateEmail(event) {
  let errorEmail = document.getElementById('errorEmail')
    if (email.validity.patternMismatch) {
        email.setCustomValidity("I expect an e-mail, darling!  :) ")
        errorEmail.innerHTML = "Please enter only Gmail, for exemple :     '...@gmail.com'"
      } else {
        email.setCustomValidity("")
        errorEmail.innerHTML = ""
      }
}


function validateTelephone(event) {
  let errorTelephone = document.getElementById('errorTelephone')
    if (telephone.validity.patternMismatch) {
        telephone.setCustomValidity("I expect a telephone, darling!  :) ")
        errorTelephone.innerHTML = "Telephone must be in format xxx-xxx-xx-xx or (xxx) xxx xx xx"
      } else {
        telephone.setCustomValidity("")
        errorTelephone.innerHTML = ""
      }
}



button.addEventListener ('click',function(event) {
    //event.preventDefault()
    let select = document.getElementById('car')
    if (name.validity.valid && password.validity.valid && email.validity.valid && telephone.validity.valid) {
        
        let user = {
            name: name.value,
            password: password.value,
            email: email.value,
            telephone: telephone.value,
            car: select.value,
        }
let userObj = `User name: ${user.name}
User password: ${user.password}
User email: ${user.email}
User telephone: ${user.telephone}
User car: ${user.car}`
        alert(userObj)
    }
})


name.addEventListener("change", validateName )

password.addEventListener("change", validatePassword)

email.addEventListener("change", validateEmail)

telephone.addEventListener("change", validateTelephone)

   
    

