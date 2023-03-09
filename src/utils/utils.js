/*import request from 'request'

export const forecast = (latitude,longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=6764326dcc6ca07400b5ab682668cc15&query='+ longitude +','+ latitude +'&units=f'

    request({url : url,json: true},(error, response) => {
        if (error){
            callback('Unable to connect',undefined)
        }else if(response.body.error){
            callback('Nothing in array', undefined)
        }else{
            callback(undefined, response.body.current.temperature)
        }
    } )
}


export const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidXNtYW5qYyIsImEiOiJjbGV6dmxha2kwMzUxM3FwYWt3NTZxY3ZiIn0.5ZIY71KQ-dJwhlrr8W6p3g'

    request({url : url,json: true},(error, response) => {
        if (error){
            callback('Unable to connect',undefined)
        }else if(response.body.features.length === 0){
            callback('Nothing in array', undefined)
        }else{
            callback(undefined, {
                longitude:response.body.features[0].center[1],
                latitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    } )
}
*/