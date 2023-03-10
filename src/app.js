const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


console.log(path.join(__dirname, '../public'))

//Define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'./templates/views')
const partialsPath = path.join(__dirname, './templates/partials')


console.log(__dirname)

const app = express()

const port = process.env.PORT || 3000

//set hbs and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to server
app.use(express.static(publicDirectory))


app.get('',(req, res)=>{
    res.render('index',{
        title:"Weather app",
        name: 'Usman',
        footer:"Footer"

    })
})


app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You need an addy'
        })

    }
  
    geocode(req.query.address, (error, {latitude,longitude,location}={}) =>{
        if(error){
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast:forecastData,
                location,
                address: req.query.address
            })
        })
    })
    
})


app.get('/about',(req, res)=>{
    res.render('about',{
        title:"About Me",
        name: 'Usman',
        footer:"Footer"
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
title:"Help page",
footer:"Footer",
message:'Help page'

    })
})



 
app.get('/render',(req,res)=>{
    res.send({
        forecast: 'its snowing'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"404 page",
        footer:"Footer",
        errorMessage:'Help Article not found'

    })
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:"404 page",
        footer:"Footer",
        errorMessage:'Error Page not found'

    })
})


app.listen(port, () =>{
    console.log('Server is up' + port)
})