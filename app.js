
const express = require("express");
const app = express();
// set up firebase...
var admin = require("firebase-admin");
var productAccount = require("./groceryapp-b381a-firebase-adminsdk-kiwxy-65c0fc9169.json");
admin.initializeApp({
  credential: admin.credential.cert(productAccount),
  databaseURL: "https://groceryapp-b381a.firebaseio.com"
});
// admin.initializeApp();

// end of set up firebase...

// app.get("/supplierProfile/supplier1", function(req,res){
//     res.send("This is supplier 1!");
// });
// app.get("/", function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });
app.set('view engine', 'ejs');
app.use('/supplierProfile', express.static('public'))
// app.use(express.static('authorised'))
app.use('/authorised/supplierProfile', express.static('public'))
app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
    
    // res.send("Hello!");
})
// app.get('/authorised', function(req,res){
//   res.sendFile(__dirname+'/home.html');
// })
// app.get('/authorised/index.html', function(req,res){
//   res.redirect('/');
// })
app.get("/supplierProfile/:id", function(req,res){
    // console.log("the id is: "+req.params.id);
    let id = req.params.id;

    //////////////////////// START DATA FETCHING ///////////////////////////

 // Your web app's Firebase configuration
 
  // Initialize Firebase
  
  const db = admin.firestore();

    let supplierName = "";
    let supplierProfileImageSrc = "";
    let supplierID2 = "";
    let supplierProvince = "";
    let supplierCity = "";
    let supplierImageSrc = "";
    let supplierProducts = "";
    let productDescription = "";
    let productPrice = "";

    let isEmpty = false; // to be checked later...

    // Get a database reference to our posts

        const ref = db
        .collection("suppliers")
        .doc('Supplier Profiles');

        ref.get()
        .then(docSnapshot=> {
            let data = docSnapshot.data();
            for (var key in data)
      {
        if([key] == id)
        {
          supplierName = data[key]["supplierName"];
          supplierProfileImageSrc = data[key]["supplierProfileImage"];
          supplierID2 = data[key]["supplierID"];
          supplierProvince = data[key]["supplierProvince"];
          supplierCity = data[key]["supplierCity"];

          //new account with no products added...
          if(data[key]["products"] != null)
          {
            supplierProducts = data[key]["products"];
          }
          else
          {
            supplierProducts = {};
          }

          if(Object.keys(supplierProducts).length > 0)
          {
            for (i=1; i<=Object.keys(supplierProducts).length; i++)
              {
                productDescription = supplierProducts["product"+i]["product"+i+"Description"];
                productPrice = supplierProducts["product"+i]["product"+i+"Price"];
              }
          }
          // console.log([key]);
        //   updateProfile();
        }
        
      }
      res.status(200).render("profile", {name: supplierName,
                                         imgSource: supplierProfileImageSrc,
                                         id: supplierID2,
                                         provience: supplierProvince,
                                         city: supplierCity,
                                         products: supplierProducts
                                        })
    localStorage.setItem("supplierID", supplierID2);
  })
    .catch(err => {
        res.status(500).send(err)
    });

//////////////////////// EDN OF DATA FETCHING ///////////////////////////

    // res.json({supplier_id: id})

    // res.send("the id is"+id);

    // res.render('template');

});

app.get("/authorised/supplierProfile/:id", function(req,res){
  // console.log("the id is: "+req.params.id);
    let id = req.params.id;

  //////////////////////// START DATA FETCHING ///////////////////////////
   
  const db = admin.firestore();

    let supplierName = "";
    let supplierProfileImageSrc = "";
    let supplierID2 = "";
    let supplierProvince = "";
    let supplierCity = "";
    let supplierImageSrc = "";
    let supplierProducts = "";
    let productDescription = "";
    let productPrice = "";

    let isEmpty = false; // to be checked later...

    // Get a database reference to our posts

        const ref = db
        .collection("suppliers")
        .doc('Supplier Profiles');

        ref.get()
        .then(docSnapshot=> {
            let data = docSnapshot.data();
            for (var key in data)
      {
        if([key] == id)
        {
          supplierName = data[key]["supplierName"];
          supplierProfileImageSrc = data[key]["supplierProfileImage"];
          supplierID2 = data[key]["supplierID"];
          supplierProvince = data[key]["supplierProvince"];
          supplierCity = data[key]["supplierCity"];

          // res.send(supplierCity);

          //new account with no products added...
          if(data[key]["products"] != null)
          {
            supplierProducts = data[key]["products"];

            // res.send(supplierProducts["product1"]["product1Description"]);
            // res.send(supplierProducts["product1"]["product1Price"]);
          }
          else
          {
            supplierProducts = {};
          }

          if(Object.keys(supplierProducts).length > 0)
          {
            for (i=1; i<=Object.keys(supplierProducts).length; i++)
              {
                productDescription = supplierProducts["product"+i]["product"+i+"Description"];
                productPrice = supplierProducts["product"+i]["product"+i+"Price"];
              }
          }
          // console.log([key]);
        //   updateProfile();
        }
        
      }
      res.status(200).render("authorisedProfile.ejs", {name: supplierName,
                                         imgSource: supplierProfileImageSrc,
                                         id: supplierID2,
                                         provience: supplierProvince,
                                         city: supplierCity,
                                         products: supplierProducts
                                        })
    localStorage.setItem("supplierID", supplierID2 );
    })
    .catch(err => {
        res.status(500).send(err)
    });

//////////////////////// EDN OF DATA FETCHING ///////////////////////////

    // res.json({supplier_id: id})

    // res.send("the id is"+id);

    // res.render('template');

});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port, function(){
   console.log("Server started...");
  });
// app.listen(PORT, function(){
//     console.log("Server started...");
// });

// app.get('/profile/:id', function (req, res) {
//      var id = req.params.id;
//      localStorage.setItem("supplierID", id);
//      res.sendFile(__dirname+"/supplierProfile.html");
//     });
