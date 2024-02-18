const input = document.querySelector('input')
const btn = document.querySelector('button')
// const imageParagraph = document.getElementById('imgp')
const imageCon = document.getElementById('body')
console.log(imageCon)

const icon = {
  'sunny ': 'images/sunny.jpg',
  'clody ': 'images/cloudy.jpg',
  'foggy ': 'images/foggy.jpg',
  'rainfall ': 'images/rain-fall.jpg',
  'sleet ': 'images/sleet.jpg',
  'snowy ': 'images/snowy.jpg',
  'thunder ': 'images/thunder.jpg',
  'windy ': ' images/Windy.jpg',
  'clear ': 'images/cleary-weather.jpg',
  'partly   cloudy ': 'images/partly-cloudy.jpg'
}

btn.addEventListener('click', () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=69e6d554b0894e1fa4d84719241202&q=${input.value}`, { mode: 'cors' })
    .then(response => response.json())

    .then(json => {
      imageCon.style.backgroundImage = `url(${icon[json.current.condition.text.toLowerCase()]})`
      console.log(json)
    })
})

const date = new Date()
document.getElementById('date').innerHTML = date

document.getElementById('refreshbtn').addEventListener('click', function () {
  // eslint-disable-next-line no-undef
  location.reload()
})
