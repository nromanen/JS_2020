'use strict'


Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}



function _createModal(options) {

    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')

    modal.classList.add('rmodal')
    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal-overlay">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'My window'}</span>
                ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
            </div>
            <div class="modal-body" data-content>
            ${options.content || ''}
            </div>
        </div>
    </div>`)



    const $footer = _createFooter(options.footerButtons)
    $footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    

    return modal
}


function noop () {

}


function _createFooter(buttons = []) {

    if (buttons.length === 0 ) {
        const div = document.createElement('div')
        div.appendAfter(document.querySelector('[data-content]'))
        return div
    }

    const footer = document.createElement('div')

    footer.classList.add('modal-footer')
    
    buttons.forEach( btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.setAttribute('data-btn', btn.data || '')
        $btn.onclick = btn.handler || noop

        footer.appendChild($btn)
    })

    //document.querySelector('[data-content]').after(footer)
    return footer
}




$.modalResult = function(options) {

    const aSpeed = 500
    const $modal = _createModal(options)

    let closing = false
    let destroyed = false
    


    const modal = {

        open() {
            if (destroyed) {
              return  console.log('Modal is destroyed!!!')
                }
            !closing && $modal.classList.add('open') 
        },

        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hiding')
            setTimeout( () => {
                $modal.classList.remove('hiding')
                closing = false
            }, aSpeed)
        },
        
    }



    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }   
    }


    $modal.addEventListener('click', listener)


    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            destroyed = true
            $modal.removeEventListener('click', listener)

        },
        setcontent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}