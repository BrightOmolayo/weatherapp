const input = document.querySelector('input')
const btn = document.querySelector('button')
const imageParagraph = document.getElementById('imgp')
const imageCon = document.getElementById('sub-image-container')

btn.addEventListener('click', () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=69e6d554b0894e1fa4d84719241202&q=${input.value}`, { mode: 'cors' })
    .then(response => response.json())

    .then(json => {
      imageParagraph.append(json.current.condition.text)
      console.log(json)
    })
})

const date = new Date()
document.getElementById('date').innerHTML = date

document.getElementById('refreshbtn').addEventListener('click', function () {
  // eslint-disable-next-line no-undef
  location.reload()
})

// eslint-disable-next-line eqeqeq
if (imageParagraph.value == 'Sunny') {
  imageCon.body.style.backgroundImage = "url('./images/sunny.jpg')"
}

/* const icon = {
  sunny: 'C:\Users\HP\weatherapp\images\sunny.jpg'
  clody : 'C:\Users\HP\weatherapp\images\cloudy.jpg'
  foggy:'C:\Users\HP\weatherapp\images\foggy.jpg'
  rainfall:'C:\Users\HP\weatherapp\images\rain-fall.jpg'
  sleet:'C:\Users\HP\weatherapp\images\sleet.jpg'
  snowy:'C:\Users\HP\weatherapp\images\snowy.jpg'
  thunder:'C:\Users\HP\weatherapp\images\thunder.jpg'
  windy:'C:\Users\HP\weatherapp\images\Windy.jpg'
} */
