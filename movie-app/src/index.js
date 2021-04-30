// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const header = document.createElement('header')
const form = document.createElement('form')
const input = document.createElement('input')
const main = document.createElement('main')
const movie = document.createElement('div')
const movieCover = document.createElement('img')
const movieInfo = document.createElement('div')
const movieTitle = document.createElement('h3')
const movieRating = document.createElement('span')
const movieOverview = document.createElement('div')

form.setAttribute('id', 'form')

input.setAttribute('type', 'search')
input.setAttribute('placeholder', 'Search...')
input.setAttribute('id', 'search')
input.classList = 'search'

form.appendChild(input)
header.appendChild(form)

main.setAttribute('id', 'main')
movie.classList = 'movie'

movieCover.src = `https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2077&q=80`

movieInfo.classList = 'movie-info'
movieTitle.innerText = 'Movie Title'
movieRating.classList = `green`
movieRating.innerText = 9.8
movieInfo.append(movieTitle, movieRating)

movieOverview.classList = 'overview'
movieOverview.innerHTML = ` <h3>Overview</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et odio purus. In lobortis vestibulum venenatis. Sed commodo elit at cursus laoreet. Curabitur sit amet purus sed mauris lobortis lacinia commodo ac lectus. Fusce viverra massa vitae erat ultrices mattis. Morbi a arcu sed erat venenatis pretium vel at libero.`

movie.append(movieCover, movieInfo, movieOverview)
main.append(movie)
const app = document.querySelector('#root')

app.append(header, main)
