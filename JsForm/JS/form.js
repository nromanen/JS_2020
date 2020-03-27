'use strict'

let button = document.getElementById('button')
let form = document.forms.user
let name = document.querySelectorAll("#name")[0]
let errorName = document.getElementById("errorName")
let password = document.getElementById('password')
let errorPassword = document.getElementById('errorPassword')
let email = document.getElementById('email')
let errorEmail = document.getElementById('errorEmail')
let dateOfBirthday = document.getElementById('dateOfBirthday')
let errorDateOgBirthday = document.getElementById('errorDateOgBirthday')
let telephone = document.getElementById('telephone')
let errorTelephone = document.getElementById('errorTelephone')
let respond = document.querySelector('.respond')


function validateName(event) {
    // alert(/^[A-Z][a-z]{1,14}$/.test(name.value))
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
    if (password.validity.patternMismatch) {
        password.setCustomValidity("I expect a password, darling!  :) ")
        errorPassword.innerHTML = "Password must be at least 5 characters long"
      } else {
        password.setCustomValidity("")
        errorPassword.innerHTML = ""
      }
}


function validateEmail(event) {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("I expect an e-mail, darling!  :) ")
        errorEmail.innerHTML = "Please enter only Gmail, for exemple :     '...@gmail.com'"
      } else {
        email.setCustomValidity("")
        errorEmail.innerHTML = ""
      }
}


function validateTelephone(event) {
    if (telephone.validity.patternMismatch) {
        telephone.setCustomValidity("I expect a telephone, darling!  :) ")
        errorTelephone.innerHTML = "Telephone must be in format xxx-xxx-xx-xx or (xxx) xxx xx xx"
      } else {
        telephone.setCustomValidity("")
        errorTelephone.innerHTML = ""
      }
}



button.addEventListener ('click',function(event) {
    event.preventDefault()
    if (name.validity.valid && password.validity.valid && email.validity.valid && telephone.validity.valid) {
        let user = {
            name: name.value,
            password: password.value,
            email: email.value,
            telephone: telephone.value

        }
        respond.innerHTML = JSON.stringify(user)
        alert(user.name)
    }
})


name.addEventListener("change", validateName )

password.addEventListener("change", validatePassword)

email.addEventListener("change", validateEmail)

telephone.addEventListener("change", validateTelephone)

   
    

