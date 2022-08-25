const imageContainer = document.querySelector('.dog-container')
const dogBtn = document.querySelector('#button')

// dog api
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(json => {
//         console.log(json.message)
//         imageContainer.innerHTML = `<img src = '${json.message}' /> `
//     })


// creating functionlistners to btn for getting new dog
const newDod = ()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        imageContainer.innerHTML = `<img src = '${json.message}' height = 300 widht = 300/> `
    })
} 
// adding eventListners to button for calling newDog function
dogBtn.addEventListener('click', function(){
    newDod()
})
