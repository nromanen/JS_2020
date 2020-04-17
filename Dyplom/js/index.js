'use strict'

let $containerTask = document.querySelector('.containerTask'),
    $containerConfig = document.querySelector('.containerConfig'),
    $main = document.querySelector('.main')





configTask.addEventListener('click', () => {
    $containerConfig.style="display: block"
    $main.style="display: none"
})


task.addEventListener('click', () => {
    $containerTask.style="display: block"
    $main.style="display: none"

})


exit.addEventListener('click', () => {
    $containerTask.style="display: none"
    $main.style="display: block"

})


exitConfig.addEventListener('click', () => {
    $containerConfig.style="display: none"
    $main.style="display: block"
})


statistic.addEventListener('click', function() {
    let stat = JSON.parse(localStorage.getItem('statistic')) 

    if (stat === null) {
        stat = {
            rightAnswer: 0,
            wrongAnswer: 0
        }
    }
    

    let statContent = `
    <p><span>Correct ones</span><div id="correct">${stat.rightAnswer}</div></p>
    <p><span>Wrong ones</span><div id="wrong">${stat.wrongAnswer}</div></p>
    `

    statisticModal.setcontent(statContent)
    statisticModal.open()

})






const statisticModal = $.modalResult({
    title: 'Statistic',
    closable: true,
    width: '400px',
    footerButtons: [ 
        {text: 'Close',
        type: 'primary',
        handler() {
            statisticModal.close()
            }
        },
        {text: 'Refresh statistic',
        type: 'danger',
        handler() {
            localStorage.removeItem('statistic')
            statisticModal.close()
        }
    }]
})



const exampleModal = $.modalResult({
    title: 'Example',
    closable: true,
    width: '400px',
    footerButtons: [ {
            text: 'Ok',
            type: 'primary',
            data: 1,
            handler() {
                exampleModal.close()
                document.querySelector('#answer').focus()

            }
    }]
})
 

const configModal = $.modalResult({
    title: 'Configuration',
    closable: false,
    width: '400px',
    footerButtons: [ {
            text: 'Ok',
            type: 'primary',
            handler() {
                configModal.close()
                $containerConfig.style="display: none"
                $main.style="display: block"

                }
        }]
})



function getOptionsMinMax(event) {
    
    let min = Number(from.value)
    let max = Number(to.value)    
    
    let checkboxes = document.querySelectorAll('.checkbox') 
    let chedboxesChecked = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            chedboxesChecked.push(checkboxes[i].value)
        }
    }

    if (from.value === '') {
        event.preventDefault()
        warning.innerHTML = 'Choose minimum number'
    } else if (to.value === '') {
        event.preventDefault()
        warning.innerHTML = 'Choose maximum number'
    } else if (+from.value > +to.value) {
        event.preventDefault()
        warning.innerHTML = 'Minimun must bee less then maximum'
    } else if (chedboxesChecked.length === 0 ) {
        event.preventDefault()
        warning.innerHTML = 'Choose minimum one operation'
    } else {
        event.preventDefault()
        let configuration = {
            min,
            max,
            operations: chedboxesChecked
            }

            let showConfig = `
            <h5>Your configuration :</h5> 
            <p>min = ${configuration.min}</p>
            <p>max = ${configuration.max}</p>
            <p>operations = ${configuration.operations}</p>
            `

            warning.innerHTML = ''
    
        sessionStorage.setItem('configuration', JSON.stringify(configuration))

        configModal.setcontent(showConfig)
        configModal.open()
        }          
        
    return 
}

saveConfig.addEventListener('click', getOptionsMinMax)




function generateExample() {

    let configObj = JSON.parse(sessionStorage.getItem('configuration'))
    let a = Math.floor(configObj.min + Math.random() * (configObj.max + 1 - configObj.min))
    let b = Math.floor(configObj.min + Math.random() * (configObj.max + 1 - configObj.min))

    let signId = Math.floor(Math.random() * configObj.operations.length)
    let sign = configObj.operations[signId]
    let res
    

    switch (sign) {
        case '+' :
        res = a + b
            break;

        case '-' :
            if ( a < b) {
                let c = a
                a = b
                b = c
            }
        res = a - b 
            break;

        case '*' :
        res = a * b
            break;

        case '/' :
            if ( a < b) {
                let c = a
                a = b
                b = c
            }
            specification.innerHTML = '  there should be two decimal places'
            if (b === 0) {
                res = 0
            } else {
                res = Number((a / b).toFixed(2))
            } 
                break;
    
        default:
            break;
    }




    let stringExample = `${a} ${sign} ${b} = `

    document.querySelector('#example').innerHTML = stringExample

    specification.innerHTML = ''


    let example = {
        body: stringExample,
        res
    }
    console.log((example))


    sessionStorage.setItem('example',JSON.stringify(example))
    document.querySelector('#answer').focus()


    let $generateEx = document.querySelector('#generateEx')
    $generateEx.setAttribute('disabled','')
    
}



generateEx.addEventListener('click', generateExample)




checkYourself.addEventListener('click', function() {

    let statistic
    let example = JSON.parse(sessionStorage.getItem('example'))
    let correctAnswer
        
    


    if (JSON.parse(localStorage.getItem('statistic')) !== null) {
        statistic = JSON.parse(localStorage.getItem('statistic'))
    } else {
        statistic = {
            rightAnswer: 0,
            wrongAnswer: 0
        }
    }



    if (Number(document.querySelector('#answer').value) == example.res) {
        statistic.rightAnswer += 1 
        correctAnswer = 'right'
        soundRightAnswer()
    } else {
        statistic.wrongAnswer += 1 
        correctAnswer = 'wrong'
        soundWrongAnswer()
    }


    localStorage.setItem('statistic', JSON.stringify(statistic))
    console.log(statistic)



    generateExample()

    document.querySelector('#answer').value = ''


    exampleModal.setcontent(`<div id="modal-answer" class="${correctAnswer}">
    <p>You are ${correctAnswer} !</p> 
    <p>${example.body}${example.res}</p>
    </div>
    `)
    exampleModal.open()

})

document.querySelector('#answer').addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        checkYourself.click()
        this.value = ''
    }
})



function soundRightAnswer() {
    let audio = new Audio(); 
    audio.src = '/Users/vitalii/Downloads/line_open.mp3'; 
    audio.play(); 
    }

function soundWrongAnswer() {
    let audio = new Audio(); 
    audio.src = '/Users/vitalii/Downloads/100-k-1-the-same-answer.mp3'; 
    audio.play(); 
    }



