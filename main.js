const img = document.querySelector('img')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=OPQ40UPzNNpk0gOkzNCIG5pZbmgntLrY&s=rain', { mode: 'cors' })

  .then(function (response) {
    return response.json()
  })
  .then(function (response) {
    img.src = response.data.images.original.url
  })
