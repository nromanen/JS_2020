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
    if (this.validity.patternMismatch) {
        telephone.setCustomValidity("I expect a telephone, darling!  :) ")
        errorTelephone.innerHTML = "Telephone must be in format xxx-xxx-xx-xx or (xxx) xxx xx xx"
      } else {
        this.setCustomValidity("")
        errorTelephone.innerHTML = ""
      }
}
 

 

function validation() {
  if (name.validity.valid && password.validity.valid && email.validity.valid && telephone.validity.valid) {
      return true
     }
     return false
}

function loadUsers() {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = () => {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
        let respondUsers = JSON.parse(xhttp.response)
        respondUsers.forEach(worker => {
          function printUser(element) {
            //let displayUsers = '<table border="1">'
            if (typeof(element) === 'object') {
              for (let key in element) {
                console.log(key + ' : ')
                //displayUsers += '<tr><td>' + key + '</td></tr>'
                printUser(element[key])
              }
            } else {
                console.log(element)
        
            }
          }
          printUser(worker)
        });     
      }
  } 
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
  xhttp.send()
}

button.addEventListener ('click',function(event) {
  event.preventDefault()
  if (validation()) {
    let xhr = new XMLHttpRequest()
    let user = {
      name: name.value,
      email: email.value,
      phone: telephone.value
    }
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(JSON.stringify(user))

    xhr.onreadystatechange = function() {
      
      if (this.readyState == 4 && this.status == 201) {
        let respond = JSON.parse(this.response)
        let displayUser = '<table border="1">'
        for (let key in respond)  {
          displayUser += '<tr><td>' + key +'</td><td>' + respond[key] +'</td></tr>' 
        }
        displayUser += '</table>'
        showUser.innerHTML = displayUser
        
        
      }
    }
  }
})


name.addEventListener("change", validateName )

password.addEventListener("change", validatePassword)

email.addEventListener("change", validateEmail)

telephone.addEventListener("change", validateTelephone)

// telephone.addEventListener('input', function(event) {
//   switch(this.value.length) {
//     case 1: this.value = '+38(' + this.value 
//       break
//     case 7: this.value = this.value + ') ' 
//       break
//     case 12: this.value = this.value + ' ' 
//       break  
//     case 15: this.value = this.value + ' '
//     break
//   }
//})
    

