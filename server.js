const express=require("express");

const bodyParser=require("body-parser");
const port=3002;
const app= express();
app.set('view engine','ejs');
app.get('/', function(req, res) {
    res.render(__dirname +"/src/pages/landing_pages/main-page.jsx")
  })

app.get('/contacts',(req,res)=>{
    res.send(('contacts'))
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })