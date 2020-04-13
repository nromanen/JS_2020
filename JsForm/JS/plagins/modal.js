Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}


function noop() {
    //modal.sendXHTTP(document.querySelector('[data-content]').innerHTML)
    modal.sendXHTTP(document.querySelector('[data-content]').dataset.content)
    modal.close()
}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}


function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay"321>
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'window'}</span>
                    ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}

                </div>
                
            </div>
        </div>
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
     return modal   
}


$.modal = function(options) {
    const $modal = _createModal(options)
    const ANIMATION_SPEED = 500
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed!!!')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout( () => {
                $modal.classList.remove('hide')
                closing = false
            },ANIMATION_SPEED)
        },
        destroy() {},
        
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
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        },
        sendXHTTP(json) {
            let xhr = new XMLHttpRequest()
            xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', true)
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send(json)
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 201) {
                    let respond = JSON.parse(this.response)
                    console.log(respond)
                }
            }
        },
        setDataContent(stringJson) {
            document.querySelector('[data-content]').dataset.content = stringJson
            console.log(document.querySelector('[data-content]').dataset.content)
        }
    })
}