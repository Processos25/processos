let docTitle = document.title 

window.addEventListener('blur', () => {
    document.title = 'Volte para página de processos'
})

window.addEventListener('focus', () => {
    document.title = docTitle
})