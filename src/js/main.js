const cards = document.querySelectorAll('.portfolio__card')
cards.forEach((card, i) => {
    card.addEventListener('click', () => card.classList.toggle('see'))
    // card.addEventListener('mouseout', () => card.classList.remove('see'))
})
const toDate = document.querySelector('#today')
const today = new Date()
const now = today.toLocaleString()
toDate.textContent = now.slice(0,10)


