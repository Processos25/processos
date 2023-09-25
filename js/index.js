
let docTitle = document.title 

window.addEventListener('blur', () => {
    document.title = 'Volte para página inicial'
})

window.addEventListener('focus', () => {
    document.title = docTitle
})