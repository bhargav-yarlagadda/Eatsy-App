const { default: axios } = require("axios");

const getGooglePlace=(category:any,radius:any,lat:any,lng:any)=>axios.get('/api/google-place?'+
'category='+category+'&radius='+radius+'&lat='+lat+'&lng='+lng)

export default{
    getGooglePlace
}