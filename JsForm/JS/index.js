const books = [
    {id:1, title: "7apps", price: 20, img: "images/7apps.jpg"},
    {id:1, title: "Adpro", price: 20, img: "images/adrpo.jpg"},
    {id:1, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},
    {id:1, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},
    {id:1, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},
    {id:1, title: "Dcbang", price: 20, img: "images/dcbang.jpg"},

]


const toHtml = book => `
    <div class="col">
        <div class="card" >
            <img src='${book.img}'style="height: 200px;" class="card-img-top" alt='${book.title}'>
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Look price</a>
            <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
    `

function render() {
    const html = books.map(toHtml).join('')
    document.querySelector('#books').innerHTML = html

}

render()


const modal = $.modal({
    title: 'Vitalii modal',
    closable: true,
    content: `
    <h4>My modal is working</h4>
    <p>Aaaaaaaaaaaaaaa</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primari btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'Danger', handler() {
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})
