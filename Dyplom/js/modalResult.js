$.modalResult = function(options) {

    const aSpeed = 500
    
    const rmodal = document.createElement('div')
            rmodal.classList.add('rmodal')
            rmodal.insertAdjacentHTML('afterbegin',`
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Results</span>
                        <span class="modal-close" data-close="true">&times;</span>
                    </div>
                    <div class="modal-body" data-content>
                    </div>
                    <div class="modal-footer">
                        <button id="refresh" class="primary">Refresh Statistic</button>
                        <button id="close" class="Danger">Close</button>
                    </div>
                </div>
            </div>`)

            document.body.appendChild(rmodal)

            function refreshStat(event) {
                console.log("Working")
                localStorage.removeItem('statistic')
                modalResult.close()
            }

            rmodal.querySelector('#refresh').addEventListener('click', refreshStat)

            rmodal.querySelector('#close').addEventListener('click',  () => modalResult.close())


            function listener(event) {
                if (event.target.dataset.close) {
                    modalResult.close()
                }
            }

            rmodal.addEventListener('click', listener)

    return {
        open() {
            rmodal.classList.add('open')
            
        },
        close() {
            rmodal.classList.remove('open')
            //rmodal.parentNode.removeChild(rmodal)

            rmodal.classList.add('hiding')
            setTimeout( () => rmodal.classList.remove('hiding'), aSpeed)

        },
        destroy() {
            rmodal.parentNode.removeChild(rmodal)
            rmodal.removeEventListener('click', listener)
        },
        setcontent(html) {
            rmodal.querySelector('[data-content]').innerHTML = html
        }
    }
}