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
