
console.log("inside getSupplierProfiles.js file")

//////////////////////// START DATA FETCHING ///////////////////////////
          const loader = document.querySelector(".loadingAnimation");
          loader.classList.remove("hidden");

    var suppliers = db.collection("suppliers").doc("Supplier Profiles");

    suppliers.get().then((doc) => {
        if (doc.exists) {
          var data = doc.data()
          for (var key in data)
          {
            let name = data[key]["supplierName"]
            let supplierProfileImage = data[key]["supplierProfileImage"];
            let supplierID = data[key]["supplierID"]
            let province = data[key]["supplierProvince"]
            let city = data[key]["supplierCity"]
            let services = data[key]["services"]

            newSupplierCard(name,supplierProfileImage,province,city,supplierID,services)
          }
          loader.classList.add("hidden");
        } else {
            // doc.data() will be undefined in this case
            loader.classList.add("hidden");
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

/////////////////// START OF Supplier CARDS POPULATING ///////////////////

function newSupplierCard(name,supplierProfileImage,province,city,supplierID,services)
{
  var provinceName = "";
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let h5 = document.createElement("h5");
  let image = document.createElement("img");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let p1 = document.createElement("p");

  // let button = document.createElement("button");

  switch (province) {
    case "المنطقة الشرقية":
      provinceName = "eastern";
      break;
    case "حائل":
      provinceName = "hael";
      break;
    case "مكة المكرمة":
      provinceName = "makkah";
      break;
    case "عسير":
      provinceName = "aseer";
      break;
    case "الرياض":
      provinceName = "riyadh";
      break;
    case "المدينة المنورة":
      provinceName = "madinah";
      break;
      case "القصيم":
    provinceName = "qassim";
      break;
      case "تبوك":
    provinceName = "tabouk";
      break;
      case "نجران":
    provinceName = "najran";
      break;
      case "جازان":
    provinceName = "jazan";
      break;
    
      default:
    provinceName = "";
      }

  div1.className = "col-xs-3 col-sm-6 col-md-6 col-lg-3 supplier "+provinceName+" "+(city.replace(/\s/g, ''))
  div2.className = "card w-100 mb-2 btn book"
  div2.id = supplierID;
  img.className =  "card-img-top"
  img.id = supplierID+"image"
  img.src = supplierProfileImage;
  div3.className = "card-body"
  div4.className = "text-center"
  h5.className = "card-title"
  h5.style.textAlign = "center"
  h5.innerText = name
  h5.id = supplierID+"name"
  image.src = "images/locationIcon-small.png";    
  span1.className = "text-right "+supplierID+"province"
  span1.style.fontSize = "14px";
  span2.style.fontSize = "14px";
  span1.innerText = province+" ، ";
  span2.style.marginBottom = "5px"
  span2.className = "text-right "+supplierID+"city"
  span2.innerText = city
  // button.classList = "btn btn-lg btn-info pt-1 pb-1 book rounded-pill"
  // button.id =  supplierID
  // button.type  =  "button"
  // button.innerText = "حــجــز"
  // button.onclick = 'supplierProfilePage()'
  // p3.innerHTML = "<button id= 'supplierID' type='button' onclick= 'supplierProfilePage(supplierID)' class='btn btn-lg btn-info pt-1 pb-1 search'>حــجــز</button>"
  // p3.appendChild(button)
  div1.appendChild(div2)
  div4.appendChild(p1)
  div2.appendChild(img)
  div2.appendChild(div3)
  div3.appendChild(h5)
  div3.appendChild(image)
  div3.appendChild(span1)
  div3.appendChild(span2)
  div2.appendChild(div4)
  let lengthofDictionary = 0;
  if ( services != null)
  {
    lengthofDictionary = Object.keys(services).length;
    console.log("Number of services is: "+lengthofDictionary);
  }
  function insertAfter(referenceNode, newNode)
  {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  var appendingElement = document.getElementById("startAppendingFromHere")
  insertAfter(appendingElement,div1)

  document.querySelector(".book").addEventListener("click", function(){
    let supplier_id = this.id
    let supplier_name = document.getElementById(supplierID+"name").innerText
    // let supplier_image_src = document.getElementById(supplierID+"image").src
    let stringifiedSupplierServices = JSON.stringify(services);
    let isEmpty = "true";

    if (lengthofDictionary>0)
    {
       isEmpty = "false";
    }
    else if (lengthofDictionary == 0)
    {
       isEmpty = "true";
    }

    localStorage.setItem("supplierID", supplier_id )
    localStorage.setItem("supplierName", supplier_name)
    // localStorage.setItem("supplierImageSrc", supplier_image_src)
    localStorage.setItem("supplierServices", stringifiedSupplierServices)
    localStorage.setItem("isEmpty", isEmpty);
    window.location.assign("supplierProfile\\"+supplier_id);
  });
}
/////////////////// END OF Supplier CARDS POPULATING ////////////////////
