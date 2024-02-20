const input = document.querySelector('input')
const btn = document.querySelector('button')
const time = document.getElementById('time')
// const imageParagraph = document.getElementById('imgp')
const imageCon = document.getElementById('body')
console.log(imageCon)

const icon = {
  sunny: 'images/sunny.jpg',
  'cloudy ': 'images/cloudy.jpg',
  'foggy ': 'images/foggy.jpg',
  'rainfall ': 'images/rain-fall.jpg',
  'sleet ': 'images/sleet.jpg',
  'snowy ': 'images/snowy.jpg',
  'thunder ': 'images/thunder.jpg',
  'windy ': 'images/Windy.jpg',
  'clear ': 'images/cleary-weather.jpg',
  clear: 'images/cleary-weather.jpg',
  'partly cloudy ': 'images/partly-cloudy.jpg',
  'partly cloudy': 'images/partly-cloudy.jpg',
  'thundery outbreaks in nearby': 'images/thunder.jpg',
  mist: 'images/mist.jpg',
  'patchy rain nearby': 'images/p-rain.jpg',
  overcast: 'images/overcast.jpg',
  'Patchy light rain in area with thunder': ' images/patchy rain with thunder'
}

btn.addEventListener('click', () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=69e6d554b0894e1fa4d84719241202&q=${input.value}`, { mode: 'cors' })
    .then(response => response.json())

    .then(json => {
      imageCon.style.backgroundImage = `url(${icon[json.current.condition.text.toLowerCase()]})`
      document.getElementById('sub-image-container').append(json.current.condition.text)
      time.append(json.location.localtime.toLowerCase())
      console.log(json)
    })
})

const date = new Date()
document.getElementById('date').innerHTML = date

document.getElementById('refreshbtn').addEventListener('click', function () {
  // eslint-disable-next-line no-undef
  location.reload()
})
