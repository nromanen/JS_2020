'use strict'


const modalForm = $.modalForm()
const url = 'https://jsonplaceholder.typicode.com/users'
let displayUser = ``




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
    // if (/^[A-Z][a-z]{1,14}$/.test(name.value)) {
    //     name.setCustomValidity('')
    //     errorName.innerHTML = ''
    //     return true
    // }
    // else {
    //     name.setCustomValidity('The name must begin with a capital letter, darling! :) ')
    //     errorName.innerHTML = "Enter your name please :) "
    //     return false
    // }


    if (name.validity.patternMismatch) {
        name.setCustomValidity("The name must begin with a capital letter, darling! :) ")
        errorName.innerHTML = "Please enter your name! :) "
      } else {
        name.setCustomValidity("")
        errorName.innerHTML = ""
     }
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
 

 
function validation() {
  if (name.validity.valid && password.validity.valid && email.validity.valid && telephone.validity.valid) {
      return true
     }
     return false
}



// function loadUsers() {
//   let xhttp = new XMLHttpRequest()
//   xhttp.onreadystatechange = () => {
//      if (xhttp.readyState == 4 && xhttp.status == 200) {
//         let respondUsers = JSON.parse(xhttp.response)
//         respondUsers.forEach(worker => {
//           function printUser(element) {
//             if (typeof(element) === 'object') {
//               for (let key in element) {
//                 console.log(key + ' : ')
//                 printUser(element[key])
//               }
//             } else {
//                 console.log(element)
//             }
//           }
//           printUser(worker)
//         });     
//       }
//   } 
//   xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
//   xhttp.send()
// }


function loadUsers2 () {
  let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
        let respondUsers = JSON.parse(xhttp.response)
        sessionStorage.setItem('users', xhttp.response)
        respondUsers.forEach(element => {
          displayUser += `
          <p>Name : ${element.name}</p>
          <p>Username : ${element.username}</p>
          <p>Email : ${element.email}</p>
          <p>Phone : ${element.phone}</p>
          <p>Website : ${element.website}</p>
          <p>City : ${element.address.city}</p>
          <br>
          `
        });
        response.innerHTML = displayUser

     }
    } 
    xhttp.open('GET', url, true)
    xhttp.send()
}


button.addEventListener ('click',function(event) {
  event.preventDefault()
  if (validation()) {
    
    
    let user = {
      name: name.value,
      email: email.value,
      phone: telephone.value,
      date: dateOfBirthday.value
    }

    let genders = document.getElementsByName('gender') 
    for (let i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        user.gender = genders[i].value
      }
    }
    console.log(user)

    let xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(JSON.stringify(user))
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            let response = JSON.parse(this.response)
            console.log(response)
            let users = JSON.parse(sessionStorage.getItem('users'))
            users.push(response)
            sessionStorage.setItem('users', JSON.stringify(users))
            displayUser += `
            <p>Name : ${response.name}</p>
            <p>Email : ${response.email}</p>
            <p>Phone : ${response.phone}</p>
            `
            document.querySelector('#response').innerHTML = displayUser

        }
    }
    

      // let tableUser = '<table border="1">'
      //   for (let key in user)  {
      //     tableUser += '<tr><td>' + key +'</td><td>' + user[key] +'</td></tr>' 
      //   }
      //   tableUser += '</table>'


      modalForm.close()
   
  } else {
      displayError.innerHTML = 'Fill out the form'
      document.querySelector('.modal-form-window').classList.add('error')
  }

})



function formError() {
  document.querySelector('.modal-form-window').classList.remove('error')
  displayError.innerHTML = ''
}


name.addEventListener("blur", validateName )
name.addEventListener('focus', () => {
  errorName.innerHTML = ""
  formError()
})

password.addEventListener("blur", validatePassword)
password.addEventListener("focus", () => {
  errorPassword.innerHTML = ""
  formError()
})

email.addEventListener("blur", validateEmail)
email.addEventListener("focus", () => {
  errorEmail.innerHTML = ""
  formError()
})

telephone.addEventListener("blur", validateTelephone)
telephone.addEventListener("focus", () => {
  errorTelephone.innerHTML = ""
  formError()
})



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
// })
    

