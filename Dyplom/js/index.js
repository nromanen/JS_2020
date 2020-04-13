'use strict'

function getCheckboxesMinMax(event) {
    event.preventDefault()
    
    let min = Number(from.value)
    let max = Number(to.value)    
    
    let checkboxes = document.querySelectorAll('.checkbox') 
    let chedboxesChecked = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            chedboxesChecked.push(checkboxes[i].value)
        }
    }

    let configuration = {
        min,
        max,
        checkboxes: chedboxesChecked
    }
    console.log(configuration)
    sessionStorage.setItem('configuration', JSON.stringify(configuration))
    console.log(sessionStorage.getItem('configuration'))

    return configuration
}

saveConfig.addEventListener('click', getCheckboxesMinMax)




function generateExample() {
    let configObj = JSON.parse(sessionStorage.getItem('configuration'))
    let a = Math.floor(configObj.min + Math.random() * (configObj.max + 1 - configObj.min))
    let b = Math.floor(configObj.min + Math.random() * (configObj.max + 1 - configObj.min))

    let signId = Math.floor(Math.random() * configObj.checkboxes.length)
    let sign = configObj.checkboxes[signId]

    let stringExample = `${a} ${sign} ${b} = `
    console.log(stringExample)

    document.querySelector('#example').innerHTML = stringExample


    let res

    switch (sign) {
        case '+' :
        res = a + b
        console.log(res) 
            break;

        case '-' :
        res = a - b 
        console.log(res) 
            break;

        case '*' :
        res = a * b 
        console.log(res) 
            break;

        case '/' :
        res = a / b 
        console.log(res) 
            break;
    
        default:
            break;
    }

    let example = {
        body: stringExample,
        res
    }
    console.log((example))
    sessionStorage.setItem('example',JSON.stringify(example))

    return example
    
}

generateEx.addEventListener('click', generateExample)


checkYourself.addEventListener('click', function() {

    document.querySelector('#answer').focus()


    let statistic
    
    if (JSON.parse(localStorage.getItem('statistic')) !== null) {
        statistic = JSON.parse(localStorage.getItem('statistic'))
    } else {
        statistic = {
            rightAnswer: 0,
            wrongAnswer: 0
        }
    }


    let example = JSON.parse(sessionStorage.getItem('example'))
    let correctAnswer 
    if (Number(document.querySelector('#answer').value) == example.res) {
        statistic.rightAnswer += 1 
        correctAnswer = true
    } else {
        statistic.wrongAnswer += 1 
        correctAnswer = false
    }
    check.innerHTML = correctAnswer
    localStorage.setItem('statistic', JSON.stringify(statistic))
    console.log(statistic)


    generateExample()
    document.querySelector('#answer').value = ''

})


statistic.addEventListener('click', function() {
    let stat = JSON.parse(localStorage.getItem('statistic'))

    if (stat) {
        correct.innerHTML = stat.rightAnswer
        wrong.innerHTML = stat.wrongAnswer
    } else {
        correct.innerHTML = 0
        wrong.innerHTML = 0
    }
})


refresh.addEventListener('click', function() {
    localStorage.removeItem('statistic')
    correct.innerHTML = ''
    wrong.innerHTML = ''

})