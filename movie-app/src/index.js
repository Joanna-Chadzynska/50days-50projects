// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const header = document.createElement('header')
const form = document.createElement('form')
const input = document.createElement('input')
form.setAttribute('id', 'form')
input.setAttribute('type', 'search')
input.setAttribute('placeholder', 'Search...')
input.setAttribute('id', 'search')
input.classList = 'search'

form.appendChild(input)
header.appendChild(form)

const main = document.createElement('main')
main.setAttribute('id', 'main')

const app = document.querySelector('#root')

app.append(header, main)
