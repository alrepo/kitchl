//////////////////////// STAET DATA FETCHING ///////////////////////////
const loader = document.querySelector(".smallLoadingAnimation");
loader.classList.remove("hidden");

var suppliers = db.collection("suppliers").doc("Supplier Profiles");

suppliers.get().then((doc) => {
    if (doc.exists) {
      let supplierProducts = [];
      var data = doc.data()
      for (var key in data)
      {
        if([key] == firebase.auth().currentUser.uid)
        {
          supplierProducts = data[key]["products"];
        }
       
      }
    updateProfileProducts(supplierProducts);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

document.querySelector("#menuProductAddButton").addEventListener("click", addNewProduct);
document.getElementById("productDescription").addEventListener("change", getProductDecription);
document.getElementById("productPrice").addEventListener("change", getProductPrice);
document.getElementById("productName").addEventListener("change", getProductName);
document.getElementById("productQuantity").addEventListener("change", getProductQuantity);

function getProductName()
{
  var productName = document.getElementById("productName").value;
  return productName;
}

function getProductDecription()
{
  var productText = document.getElementById("productDescription").value;
  return productText;
}
function getProductQuantity()
{
  var selectedProductQuantity = document.getElementById("productQuantity");
  var productQuantityValue = selectedProductQuantity.options[selectedProductQuantity.selectedIndex].value;
  var productQuantityText = selectedProductQuantity.options[selectedProductQuantity.selectedIndex].text;

  return productQuantityText;
}
function getProductPrice()
{
  document.getElementById("productPrice").style.borderStyle = "none";

  var pricePrice = document.getElementById("productPrice").value;

  return pricePrice;
}

function updateProfileProducts(supplierProducts)
{
  loader.classList.add("hidden");
  loader.classList.add("d-none");

  // console.log(supplierProducts);
  // console.log(supplierProducts);
  console.log("fethcing Products...");
  let numberOfexistingProducts = Object.keys(supplierProducts).length;
  let existingproductName = "";
  let existingproductDescription= "";
  let existingproductQuantity = "";
  let existingproductPrice = "";

  for (i=1; i<=numberOfexistingProducts; i++)
  {
      existingproductName = supplierProducts["product"+i]["product"+i+"Name"];
      existingproductDescription = supplierProducts["product"+i]["product"+i+"Description"];
      existingproductQuantity = supplierProducts["product"+i]["product"+i+"Quantity"];
      existingproductPrice = supplierProducts["product"+i]["product"+i+"Price"];

      let tr = document.createElement("tr");
      let td1 = document.createElement("td"); //removeButton
      let td2 = document.createElement("td"); //productName
      let td3 = document.createElement("td"); //productDescription
      let td4 = document.createElement("td"); //productQuantity
      let td5 = document.createElement("td"); //productPrice
      let button = document.createElement("button");

      button.type = 'button';
      button.style.padding = "0";
      button.style.borderColor = "transparent";
      button.style.borderWidth = "0"; 
      button.style.borderRadius = "50%";
      button.style.fontSize = "20px";
      button.id = "removeProductButton";
      button.style.backgroundColor = "rgb(236, 79, 79)";
      button.style.width = "35px";
      button.style.height = "35px";
      button.style.alignContent = "center";
      button.style.position="relative";
      button.style.right = "0";
      button.style.justifyContent = "center";
      button.style.display = "inline-flex";
      button.style.flexDirection = "column";
      button.style.justifyContent = "center";
      button.style.alignItems = "center";

      button.innerText =  "X";
      // td3.style.border = "none";
      // td3.style.borderRight = "solid 0.1px black";
      // td3.style.borderBottom = "solid 0.1px black";
      
      td1.style.paddingRight = "5px";
      td1.style.textAlign = "center";
      td2.style.paddingRight = "5px";
      td2.style.textAlign = "center";
      td3.style.paddingRight = "5px";
      td3.style.textAlign = "center";
      td4.style.paddingRight = "5px";
      td4.style.textAlign = "center";
      td5.style.paddingRight = "5px";
      td5.style.boxShadow  = "none";
      td5.style.width = "1%";
      td5.style.padding = "0";
      td5.style.textAlign = "center";

      // td3.style.border = "none !importanrt";
      // td3.style.borderRight = "solid 0.1px black";
      // td3.style.borderBottom = "solid 0.1px black";
      // td3.style.width = "1%";
      td1.innerText = ""+existingproductName;
      td2.innerText = ""+existingproductDescription;
      td3.innerText = ""+existingproductQuantity;
      td4.innerText = ""+existingproductPrice;

      tr.classList.add("productTableRow");
      td1.classList.add("productName");
      td2.classList.add("productCell");
      td3.classList.add("productQuantity");
      td4.classList.add("priceCell");

      td5.appendChild(button);

      tr.appendChild(td4);
      tr.appendChild(td3);
      tr.appendChild(td2);
      tr.appendChild(td1);
      tr.appendChild(td5);

      function removeProduct()
        {
          tr.classList.add("d-none");
          tr.classList.remove("productTableRow");
          // i = i-1;
          document.getElementById("saveSupplierProfileProducts").style.opacity = 1;
          document.getElementById("saveSupplierProfileProducts").style.borderStyle = "solid";
          document.getElementById("saveSupplierProfileProducts").style.borderWidth = "2px";
          document.getElementById("saveSupplierProfileProducts").style.borderColor = "red";
          document.getElementById("saveSupplierProfileProducts").classList.remove("disabled");
        }
      function insertAfter(referenceNode, newNode)
      {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }

      var appendingElement = document.getElementById("appendProductsAfterThisRow")
      insertAfter(appendingElement,tr);
      document.getElementById("removeProductButton").addEventListener('click',removeProduct);

  }
  // i = numberOfexistingProducts;
}

function addNewProduct()
{
  if(getProductName() != "" && getProductDecription() != "" && getProductQuantity() != "" && getProductPrice() != "")
  {
    console.log("Name: "+getProductName());
    console.log("Description: "+getProductDecription());
    console.log("Quantity: "+getProductQuantity());
    console.log("Price: "+getProductPrice());

      document.getElementById("saveSupplierProfileProducts").classList.remove("disabled");
      document.getElementById("saveSupplierProfileProducts").style.removeProperty("opacity");
      document.getElementById("saveSupplierProfileProducts").style.borderStyle = "solid";
      document.getElementById("saveSupplierProfileProducts").style.borderWidth = "2px";
      document.getElementById("saveSupplierProfileProducts").style.borderColor = "red";

      let i = 1;

      console.log("inside addNewProduct...");
      if (i<=20)
      {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td"); //removeButton
          let td2 = document.createElement("td"); //productName
          let td3 = document.createElement("td"); //productDescription
          let td4 = document.createElement("td"); //productQuantity
          let td5 = document.createElement("td"); //productPrice
          let button = document.createElement("button");

          button.type = 'button';
          button.style.padding = "0";
          button.style.borderColor = "transparent";
          button.style.borderWidth = "0"; 
          button.style.borderRadius = "50%";
          button.style.fontSize = "20px";
          button.id = "removeProductButton";
          button.style.backgroundColor = "rgb(236, 79, 79)";
          button.style.width = "35px";
          button.style.height = "35px";
          button.style.alignContent = "center"; 
          button.style.position="relative";
          button.style.right = "0";
          button.style.display = "inline-flex";
          button.style.flexDirection = "column";
          button.style.justifyContent = "center";
          button.style.alignItems = "center";

          button.innerText =  "X";
          // td3.style.border = "none";
          // td3.style.borderRight = "solid 0.1px black";
          // td3.style.borderBottom = "solid 0.1px black";
          
          td1.style.paddingRight = "5px";
          td1.style.textAlign = "center";
          td2.style.paddingRight = "5px";
          td2.style.textAlign = "center";
          td3.style.paddingRight = "5px";
          td3.style.textAlign = "center";
          td4.style.paddingRight = "5px";
          td4.style.textAlign = "center";
          td5.style.paddingRight = "5px";
          td5.style.boxShadow  = "none";
          td5.style.width = "1%";
          td5.style.padding = "0";
          td5.style.textAlign = "center";

          // td3.style.border = "none !importanrt";
          // td3.style.borderRight = "solid 0.1px black";
          // td3.style.borderBottom = "solid 0.1px black";
          // td3.style.width = "1%";
          td1.innerText = ""+getProductName();
          td2.innerText = ""+getProductDecription();
          td3.innerText = ""+getProductQuantity();
          td4.innerText = ""+getProductPrice();

          tr.classList.add("productTableRow");
          td1.classList.add("productName");
          td2.classList.add("productCell");
          td3.classList.add("productQuantity");
          td4.classList.add("priceCell");

          td5.appendChild(button);

          tr.appendChild(td4);
          tr.appendChild(td3);
          tr.appendChild(td2);
          tr.appendChild(td1);
          tr.appendChild(td5);


          function removeProduct()
            {
              tr.classList.add("d-none");
              tr.classList.remove("productTableRow");
              i = i-1;
              document.getElementById("saveSupplierProfileProducts").style.borderStyle = "solid";
              document.getElementById("saveSupplierProfileProducts").style.borderWidth = "2px";
              document.getElementById("saveSupplierProfileProducts").style.borderColor = "red";
              document.getElementById("saveSupplierProfileProducts").style.opacity = 1;
              document.getElementById("saveSupplierProfileProducts").classList.remove("disabled");
            }
          function insertAfter(referenceNode, newNode)
          {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
          }

          var appendingElement = document.getElementById("appendProductsAfterThisRow")
          insertAfter(appendingElement,tr);

          i = i + 1;
      }
}
if(getProductName() == "")
{
  document.getElementById("productName").style.borderStyle = "solid";
  document.getElementById("productName").style.borderWidth = "2px";
  document.getElementById("productName").style.borderColor = "red";
}
else{
  document.getElementById("productName").style.borderStyle = "solid";
  document.getElementById("productName").style.borderWidth = "0.5px";
  document.getElementById("productName").style.borderColor = "grey";
}
if(getProductDecription() == "")
{
  document.getElementById("productDescription").style.borderStyle = "solid";
  document.getElementById("productDescription").style.borderWidth = "2px";
  document.getElementById("productDescription").style.borderColor = "red";
}
else{
  document.getElementById("productDescription").style.borderStyle = "solid";
  document.getElementById("productDescription").style.borderWidth = "0.5px";
  document.getElementById("productDescription").style.borderColor = "grey";
}
if(getProductQuantity() == "")
{
  document.getElementById("productQuantity").style.borderStyle = "solid";
  document.getElementById("productQuantity").style.borderWidth = "2px";
  document.getElementById("productQuantity").style.borderColor = "red";
}
else{
  document.getElementById("productQuantity").style.borderStyle = "solid";
  document.getElementById("productQuantity").style.borderWidth = "0.5px";
  document.getElementById("productQuantity").style.borderColor = "grey";
}
if(getProductPrice() == "")
{
  document.getElementById("productPrice").style.borderStyle = "solid";
  document.getElementById("productPrice").style.borderWidth = "2px";
  document.getElementById("productPrice").style.borderColor = "red";
}
else{
  document.getElementById("productPrice").style.borderStyle = "solid";
  document.getElementById("productPrice").style.borderWidth = "0.5px";
  document.getElementById("productPrice").style.borderColor = "grey";
}
    document.getElementById("removeProductButton").addEventListener('click',removeProduct);
}

////////////////// Start of Sending Products To Database //////////////

document.getElementById("saveSupplierProfileProducts").addEventListener("click", sendProductsToDatabase);

function sendProductsToDatabase()
{
  let productTableRowCollection = [];
  document.querySelectorAll(".productTableRow").forEach(appednToProductTableRowsCollection);
  let productDescriptionAndPrice = {};
  let supplierProducts = {};
  let supplierProductsToDatabase = {};

  function appednToProductTableRowsCollection(item)
  {
    productTableRowCollection.push(item);
  }
  for(i=0;i<productTableRowCollection.length;i++)
  {
    // console.log(productTableRowCollection[i].querySelector(".productCell").innerText)
    // console.log(productTableRowCollection[i].querySelector(".priceCell").innerText)
    // supplierproducts["product"+(i+1)] = productTableRowCollection[i].querySelector(".productCell").innerText;
    productDescriptionAndPrice["product"+(i+1)+"Name"] = productTableRowCollection[i].querySelector(".productName").innerText;
    productDescriptionAndPrice["product"+(i+1)+"Description"] = productTableRowCollection[i].querySelector(".productCell").innerText;
    productDescriptionAndPrice["product"+(i+1)+"Quantity"] = productTableRowCollection[i].querySelector(".productQuantity").innerText;
    productDescriptionAndPrice["product"+(i+1)+"Price"] = productTableRowCollection[i].querySelector(".priceCell").innerText;

    supplierProducts["product"+(i+1)] = productDescriptionAndPrice;
    productDescriptionAndPrice = {};
  }
  console.log(supplierProducts);
  supplierProductsToDatabase["products"] = supplierProducts;
  console.log(supplierProductsToDatabase);

    let supplierID = firebase.auth().currentUser.uid;
    console.log(supplierID);

    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'تم الحفظ',
      showConfirmButton: false,
      timer: 1000
    })
    document.getElementById("productDescription").selectedIndex = 0;
    document.getElementById("productPrice").selectedIndex = 0;

    document.getElementById("productDescription").style.borderStyle = "none";
    document.getElementById("productPrice").style.borderStyle = "none";
    
    document.getElementById("saveSupplierProfileProducts").style.borderStyle = "none";
    document.getElementById("saveSupplierProfileProducts").style.opacity = 0.5;
    document.getElementById("saveSupplierProfileProducts").classList.add("disabled");

    var supplierRef = db.collection('suppliers').doc('Supplier Profiles').set({
      [supplierID] : {"products": null}
    }, { merge: true });

    var supplierRef = db.collection('suppliers').doc('Supplier Profiles').set({
      [supplierID] : supplierProductsToDatabase
    }, { merge: true });

}
////////////////// End of Sending Products To Database //////////////

// document.querySelector("#bookingButton").addEventListener("click", function()
//   {
//     console.log("button clicked");
//     clientName = document.querySelector("#clientName").value;
//     console.log("name: "+clientName);
//     clientPhone = document.querySelector("#clientPhone").value;
//     console.log("phone: "+clientPhone);
//     clientOrder ={clientName:clientName, clientPhone:clientPhone,clientRequestedProducts:clientRequestedProducts};
//     console.log(clientOrder);

//       let clientID = uuidv4();
//       let supplierProfile = {};

//       let key = clientID;
//       let newClient = {};
//       newClient[key]= clientOrder;
//       let clients = {clients:newClient};

//       var cityRef = db.collection('Suppliers').doc('Supplier Profiles').set({
//         [supplierID] : clients
//       }, { merge: true });

//       // var setWithMerge = cityRef.set({
//       //     capital: true
//       // }, { merge: true });

//   }
