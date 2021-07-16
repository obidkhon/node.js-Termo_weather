if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
    
    
    const DARKSKY_API_KEY =  process.env.DARKSKY_API_KEY
}


const express=require('express')
const app= express()
app.use(express.json())

const axios=require('axios')
app.use(express.static('public'))

/// davomi bor!

app.post('/weather', (req, res) => {
    const url=    `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`
 axios({
     url:url,
     responseType:'json'
 }).then(data=>data.data.curractly)
   
})



const port =process.env.PORT||4000
app.listen(port,()=>{
    console.log(`men ${port}inchi portni eshitim`)

})