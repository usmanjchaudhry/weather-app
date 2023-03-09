const request = require('request');


 const forecast = (latitude,longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=6764326dcc6ca07400b5ab682668cc15&query='+ longitude +','+ latitude +'&units=f'

    request({url : url,json: true},(error, response) => {
        if (error){
            callback('Unable to connect',undefined)
        }else if(response.body.error){
            callback('Nothing in array', undefined)
        }else{
            callback(undefined, response.body.current)
        }
    } )
}

module.exports = forecast
