'use strict'

$.modalForm = function () {

    function _createModalForm() {
        let form = document.createElement('div') 
        form.classList.add('containerForm')
        form.insertAdjacentHTML('afterbegin', `
        <div class="modal-form-overlay" data-close="true">
            <div class="modal-form-window">    
                <form action="" name="user" id="user">
                            <p><span class="span" id="displayError"></span></p>
                            <p><label for="name">Name*</label></p>
                            <p><input type="text" id="name" name="firstName" required pattern="[A-Z][a-z]{1,14}" placeholder="name"><span id="errorName" class="span" ></span></p>
                            <p><label for="password">Input password*</label></p>
                            <p><input type="password" id="password" name="password" required pattern="[A-Za-z0-9]{5,10}" placeholder="password"><span id="errorPassword" class="span" ></span></p>
                            <p><label for="email">E-mail*</label></p>
                            <p><input type="email" id="email" name="email" required pattern="^[A-Za-z0-9]{1,15}@gmail\.com$" placeholder="email"><span id="errorEmail" class="span" ></span></p>
                            <p><label for="date_of_birthday">Date of birthday</label></p>
                            <p><input type="date" id="dateOfBirthday" name="dateOfBirthday"><span id="errorDateOfBirthday" class="span"></span></p>
                            <p><label for="telephone">Telephone*</label></p>
                            <p><input type="text" id="telephone" name="telephone" maxlength="18" placeholder="XXX-XXX-XX-XX or (XXX) XXX XX XX" required pattern="([0-9]{3}|[(][0-9]{3}[)])(([-][0-9]{3}[-][0-9]{2}[-][0-9]{2})|([ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2}))"><span id="errorTelephone" class="span"></span></p>
                            <p>
                                <input type="radio" id="male" name="gender" value="male">
                                <label for="male">Male</label>
                                <input type="radio" id="female" name="gender" value="female">
                                <label for="female">Female</label>
                            </p>
                    <button id="button" form="user" type="submit" >Send</button>
                </form>
            </d
        `)
        return form
    }

        const $form = _createModalForm()
        document.body.appendChild($form)

        const modalForm = {
            open() {
                $form.classList.add('open')
            },
            close() {
                $form.classList.remove('open')
                $form.classList.add('hiding')
                setTimeout( () => {
                    $form.classList.remove('hiding')
                }, 500)
            }
        }


        const listener = event => {
            if (event.target.dataset.close) {
                modalForm.close()
            }
        }

        $form.addEventListener('click', listener)


    return modalForm
}