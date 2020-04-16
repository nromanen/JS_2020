'use strict'


const books = [
    {id:1, title: "7apps", price: 20, img: "images/7apps.jpg"},
    {id:2, title: "Adpro", price: 20, img: "images/adrpo.jpg"},
    {id:3, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},
    {id:4, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},
    {id:5, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},
    {id:6, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},

]


const toHtml = book => `
    <div class="col">
        <div class="card" >
            <img src='${book.img}'style="height: 200px;" class="card-img-top" alt='${book.title}'>
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" data-btn='price' data-id='${book.id}'>Look price</a>
            <a href="#" class="btn btn-danger" data-btn='remove' data-id='${book.id}'>Delete</a>
            </div>
        </div>
    </div>
    `

function render() {
    const html = books.map(toHtml).join('')
    document.querySelector('#books').innerHTML = html

}

render()



const priceModal = $.modal({
    title: 'Price :',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
            console.log('Primari btn clicked')
            priceModal.close()
        }},
    ]
})





const confirmModal = $.modal({
    title: 'Are you shure ?',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
            console.log('Primari btn clicked')
            priceModal.close()
        }},
        {text: 'Remove', type: 'danger', handler() {
            console.log('Danger btn clicked')
            priceModal.close()
        }},
    ]
})


document.addEventListener('click', event => {

    event.preventDefault()

    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const book = books.find(item => item.id === id)

    



    if (btnType === 'price') {

        priceModal.setContent(`
        <p>Price for ${book.title}</p>
        <strong>${book.price}</strong>
        `)
        priceModal.open()

    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Are you shure?',
            content: `
            <p>Are you shure want to remove : <strong>${book.title}</strong></p>
            `
        })
        .then(() => {
            console.log('Remove')

        }).catch(() => {
            console.log('Cancel')
        })
    }

    // if (btnType === 'remove') {

    //     confirmModal.setContent(`
    //     <p>Are you shure want to remove : <strong>${book.title}</strong></p>
    //     `)
    //     confirmModal.open()
    // }

    
})