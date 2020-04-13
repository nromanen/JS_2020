$.modalResult = function() {
    
    const rmodal = document.createElement('div')
            rmodal.classList.add('rmodal')
            rmodal.insertAdjacentHTML('afterbegin',`
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header"></div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>`)

    return {
        open(options) {
            rmodal.classList.add('open')
            document.body.appendChild(rmodal)
        },
        close(options) {
            rmodal.classList.remove('open')
        },
        destroy() {}
    }
}