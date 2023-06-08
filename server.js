const express = require('express');
const ejs = require('ejs');
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
var app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

app.use(express.static("content"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    res.render('login', { title : 'login'})
})

app.get('/home', (req, res) => {
    res.render('test', { title : 'home'})
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title : 'dashboard'})
})

app.get('/addInterview', (req, res) => {
    res.render('addInterview', { title : 'addInterview'})
})

app.get('/addClient', (req, res) => {
    res.render('addClient', { title : 'addClient'})
})


app.get('/addEmployee', (req, res) => {
    res.render('addEmployee', { title : 'addEmployee'})
})

app.get('/contact', (req, res) => {
    res.render('contact', { title : 'contact'})
})



mongoose.connect('mongodb://127.0.0.1:27017/proment',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


var db = mongoose.connection;
db.on('error',console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("Connection Succeeded");
})

app.use(bodyParse.json());
app.use(express.static(path.resolve(__dirname,'views')));
app.use(bodyParse.urlencoded({ extended : true}));

app.post('/clientSubmit', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var address = req.body.address;
    var country = req.body.country;
    var state = req.body.state;
    var phone = req.body.phone;
    var city = req.body.city;
    var pin = req.body.pin;

    var data = {
        "name" : name,
        "email" : email,
        "address" : address,
        "city" : city,
        "state" : state,
        "country" : country,
        "phone" : phone,
        "pin" : pin 
    }

    db.collection('clients').insertOne(data, (err, collection) => {
        if (err) throw err;
        console.log("Record inserted successfully");

    })

    return res.redirect('http://localhost:8080/addClient');
})

app.get('/', (req, res) => {
    res.set({
        'Access-control-Allow-Origin' : '*'
    })
    return res.redirect('index.ejs');
})

//Fetch Data

var schema = new mongoose.Schema({
    name : String,
    email : String,
    city : String,
    phone : Number,
    address : String,
    state : String,
    country : String,
    pin : Number
  }) 

  const clientData = mongoose.model('clients', schema);
  app.get('/viewClient', (req, res) => {
    clientData.find({}).then(formData => {
      res.render('viewClient', { formData: formData });
    }).catch(err => {
      console.error('Error fetching form data:', err);
      res.status(500).send('Error fetching form data');
    });
  });
//   app.get('/viewClient', (req, res) => {
//     clientData.find({}).exec( (err, formData) => {
//       if (err) {
//         console.error('Error fetching form data:', err);
//         res.status(500).send('Error fetching form data');
//       } else {
//         res.render('viewClient', { formData: formData }); // Render the EJS file with the form data
//       }
//     });
//   });
  



// async function fetchData() {
//     try {
//       await mongoose.connect('mongodb://127.0.0.1:27017/proment', { useNewUrlParser: true, useUnifiedTopology: true });
//       console.log('Connected successfully to MongoDB');
  
//       const db = mongoose.connection.db;
//       const collection = db.collection('clients');
  
//       const data = await collection.find({}).toArray();
//       console.log('Data fetched successfully:', data);
  
//       mongoose.connection.close();
//     } catch (err) {
//       console.error('Error occurred while fetching data from MongoDB:', err);
//     }
//   }
  
//   fetchData();
  

// app.get('/viewClient', (req, res) => {
//     mongoose.connect('mongodb://127.0.0.1:27017', (err, client) => {
//     if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     res.status(500).send('Error connecting to MongoDB');
//     return;

//     }
//     const dbName = client.db('proment');
//     const collectionName = dbName.collection('clients');

//     collectionName.find().toArray((err, documents) => {
//     if (err) {
//         console.error("Error in Fetching : ", err);
//         res.status(500).send('Error fetching data from Mongodb');
//         return ;
//     }
//     res.render('viewClient', { details : documents });
//     client.close();
// })
// })
// })

const port = 8080;
app.listen(port, () => console.log(`Server listening at port http://localhost:${port}`))
// app.use(bodyParse.urlencoded({ extended: true}));

// app.post('/views/clientSubmit', (req, res) => {

//     const formData = req.body;

//     mongoose.connect('mongodb://127.0.0.1:27017/proment', (err, client) => {
//         if (err){
//             console.error('Error in connecting to MongoDB: ', err);
//             res.status(500).send('Error connecting to database');
//             return ;
//         }

//         //access db

//         const db = client.db('proment');
//         const collection = db.collection('clients');

//         collection.insertOne(formData, (err, result) => {
//             if (err){
//                 console.error('Error in inserting document: ',err);
//                 res.status(500).send("Error in inserting document into database");
//             } else {
//                 console.log("Document inserted successfully");
//                 res.status(200).send('Form data stored successfully');
//             }

//             client.close();
//         })
//     })
// })

// app.listen(8080, () => console.log(`Server started at the port number 8080`))

// var db = mongoose.connection;   
// db.collection('clients').insertOne({"name" : "gokul"});

// db.on('error',()=> console.log("error in connecting database"));
// db.once('open', ()=>console.log("connected to database"));

// app.get('/', (req, res) => {
//     res.render('home', { title: 'Home' });
// });

// app.get('/vedio', (req, res) => {
//     res.render('vedio', { title: 'VideoPlayer' });
// });

// app.get('/contact', (req, res) => {
//     res.render('contact', { title: 'Contact' });
// });


// app.get('/signin', (req, res) => {
//     res.render('signin', { title: 'signin' });
// });

// app.get('/signup_success', (req, res) => {
//     res.render('signup_success', { title: 'signup' });
// });


// app.use(bodyParse.json())
// app.use(express.static('public'))
// app.use(bodyParse.urlencoded({
//     extended:true
// }))




// //data upload

// app.post("/sign_up",(req, res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var password = req.body.password;

//     var data={
//         "name":name,
//         "email":email,
//         "phno":phno,
//         "password":password
//     }


//     db.collection('users').insertOne(data,(err,collection)=> {
//         if(err) throw err;
//         console.log("record insert successfull");
//     });

//     return res.redirect("http://localhost:8080/signup_success")
// });


// app.post("/contact_connect",(req, res)=>{
//     var name = req.body.Name;
//     var phno = req.body.phnno;
//     var email = req.body.Email;
//     var password = req.body.pass;
//     var repass = req.body.repass;
    
//     var data={
//         "name":name,
//         "phno":phno,
//         "email":email,
//         "password":password,
//         "re-password":repass
        
//     }


//     db.collection('contact').insertOne(data,(err,collection)=> {
//         if(err) throw err;
//         console.log("record insert successfull");
//     });

//     return res.redirect("http://localhost:8080/signup_success")
// });


// app.get("/",(req, res)=>{

//         res.set({
//             "Allow-access-Allow-Origin":'*'
//         })

//         return res.redirect('index.html');

// }).listen(8080);