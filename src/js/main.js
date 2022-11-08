const wrapper = document.getElementById('bubble-wrapper')
const animateBubble = x => {
    const bubble = document.createElement("div")

    bubble.className = "bubble"
    bubble.style.left = `${x}px`

    wrapper.appendChild(bubble)
    setTimeout(() => wrapper.removeChild(bubble), 1500)
}
// window.onmousemove = e => {animateBubble(e.clientX)}

const cards = document.querySelectorAll('.portfolio__card')
// cards.forEach((card, i) => {
//     card.addEventListener('mouseenter', () => card.classList.add('see'))
//     card.addEventListener('mouseout', () => card.classList.remove('see'))
// })
const toDate = document.querySelector('#today')
const today = new Date()
const now = today.toLocaleString()
toDate.textContent = now.slice(0,10)
today.addEventListener('mouseout', () => alert(1))


