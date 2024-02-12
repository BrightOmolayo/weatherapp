const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=69e6d554b0894e1fa4d84719241202&q=${input.value}`, { mode: 'cors' })
    .then(response => response.json())

    .then(json => {
      document.getElementById('img').append(json.current.condition.text)
      console.log(json)
    })
})

const date = new Date()
document.getElementById('date').innerHTML = date

document.getElementById('refreshbtn').addEventListener('click', function () {
  // eslint-disable-next-line no-undef
  location.reload()
})
