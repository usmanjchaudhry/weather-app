console.log('hey buddy')

fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')



messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value;

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    console.log(location)


    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent= 'Theres been a mistake'
        }else{
            messageOne.textContent= data.location  
            messageTwo.textContent= data.forecast.feelslike
            messageThree.textContent=data.forecast.weather_descriptions[0]
            console.log(data)  
        } 
})
})
})