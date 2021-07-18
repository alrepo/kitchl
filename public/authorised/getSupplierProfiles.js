
console.log("inside authorised getSupplierProfiles.js file")

var state = 
          {
            'allProfiles_JSONArray' : {},
            'page' : 1,
            'profilesPerPage' : 4
          }
          
var trimmedProfiles = {};
let arrayForCurrentPage = {};
var tempAllProfiles = {};
var filteredProfilesArray = {};
// function cloneFullProfilesArray(obj) {
//   if (null == obj || "object" != typeof obj) return obj;
//   var copy = obj.constructor();
//   for (var attr in obj) {
//       if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
//   }
//   return copy;
// }
var fullArrayObject = {};
//////////////////////// START DATA FETCHING ///////////////////////////
    const loader = document.querySelector(".loadingAnimation");
    loader.classList.remove("hidden");

    var suppliers = db.collection("suppliers").doc("Supplier Profiles");

    suppliers.get().then((doc) => {
        if (doc.exists) {
          var data = doc.data();
          // state.allProfiles_JSONArray = data;
          state.allProfiles_JSONArray = Object.assign({}, data);
          fullArrayObject = Object.assign({}, data);
          updatedProfilesCategoriesArray = (Object.assign({}, fullArrayObject));
          filteredProfilesArray = Object.assign({}, data);
          updatedProfilesLocationsArray = Object.assign({}, data);
          // let numberOfProfiles = Object.keys(data).length;
          // let slicedData = Object.values(data).slice(0,2);
          // console.log(slicedData);
          // let numberOfPages = Math.floor(numberOfProfiles/5);
          // let remainder = numberOfProfiles % 5 ;
          
          // if (remainder > 0)
          // {
          //   numberOfPages = numberOfPages +1;
          // }

          // console.log(numberOfPages);
          trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage);
          arrayForCurrentPage = trimmedProfiles.dataSet;
          for (var i = 0 in arrayForCurrentPage)
          {
            let name = arrayForCurrentPage[i]["supplierName"]
            let supplierProfileImage = arrayForCurrentPage[i]["supplierProfileImage"];
            let supplierID = arrayForCurrentPage[i]["supplierID"]
            let province = arrayForCurrentPage[i]["supplierProvince"]
            let city = arrayForCurrentPage[i]["supplierCity"]
            let products = arrayForCurrentPage[i]["products"]
            let categories = arrayForCurrentPage[i]["supplierCategory"]
           
            newSupplierCard(name,supplierProfileImage,province,city,supplierID,products,categories)
          }
          pageButtons(trimmedProfiles.pages);
          loader.classList.add("hidden");
        } else {
            // doc.arrayForCurrentPage() will be undefined in this case
            loader.classList.add("hidden");
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

//////////////////// Start Pagination Code //////////////////////////////
function pagination(profilesArray,page,profilesPerPage)
{
  var trimStart = (page-1)*profilesPerPage;
  var trimEnd = trimStart + profilesPerPage;

  var trimmedProfiles = Object.values(profilesArray).slice(trimStart,trimEnd);
  
  var pages = Math.ceil(Object.values(profilesArray).length/profilesPerPage);

  return{
    "dataSet": trimmedProfiles,
    "pages": pages
  }

}
function pageButtons(pages) 
{
  if (pages == 0)
  {
    pages = 1;
  }
  var wrapper = document.getElementById('pagination-wrapper')

  wrapper.innerHTML = ``;
  
  for (var page = 1; page <= pages; page++) 
  {
    wrapper.innerHTML += `<button id='pageNumber${page}' value=${page} onclick="updatePage(this)" class="page paginationButtons">${page}</button>`
  }

  document.getElementById("pageNumber"+state.page).classList.add('paginationButtonsClicked');//to highlight clicked button with blue color
}
function updatePage(e)
  {
    // document.querySelector(".paginationButtonsClicked").forEach(element => {
    //   this.classList.remove('paginationButtonsClicked');
    // });
 
    document.getElementById("supplierProfileCardsContainer").innerHTML = "<div id='startAppendingFromHere'></div>";
    state.page = e.value;
    console.log("JSON_array:");
    console.log(Object.keys(state.allProfiles_JSONArray).length);
    console.log("page number: "+state.page);
    if (state.allProfiles_JSONArray !=null)
    {
      trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage); 
    }
    else
    {
      trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage); 
    }
    trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage); 
          arrayForCurrentPage = trimmedProfiles.dataSet;
          for (var i = 0 in arrayForCurrentPage)
          {
            let name = arrayForCurrentPage[i]["supplierName"]
            let supplierProfileImage = arrayForCurrentPage[i]["supplierProfileImage"];
            let supplierID = arrayForCurrentPage[i]["supplierID"]
            let province = arrayForCurrentPage[i]["supplierProvince"]
            let city = arrayForCurrentPage[i]["supplierCity"]
            let products = arrayForCurrentPage[i]["products"]
            let categories = arrayForCurrentPage[i]["supplierCategory"]

            newSupplierCard(name,supplierProfileImage,province,city,supplierID,products,categories);
          }
          // tempLocationProfilesArray = Object.assign({}, fullArrayObject);
          console.log("number of pages");
          console.log(trimmedProfiles.pages);
        pageButtons(trimmedProfiles.pages);
  }
  function updateProfilesArray()
    {
      state.page = 1;
      // console.log("'''''''''''''''''******* updatedProfilesCategoriesArray Values ******* '''''''''''''''''''");
      // console.log(updatedProfilesCategoriesArray);
      // console.log("'''''''''''''''''******* updatedProfilesLocationsArray Values *******'''''''''''''''''''");
      // console.log(updatedProfilesLocationsArray);      // console.log("updateProfilesArray: ");
      // console.log(state.allProfiles_JSONArray);
      // console.log(state.allProfiles_JSONArray);
      filteredProfilesArray = {};

      console.log(" LENGTH of Locations");
      console.log(Object.keys(updatedProfilesLocationsArray).length);
      if (Object.keys(updatedProfilesLocationsArray).length > 0 && Object.keys(updatedProfilesLocationsArray).length > 0)
      {
        for (key in updatedProfilesLocationsArray)
        {
          for (key in updatedProfilesCategoriesArray)
          {
            if (updatedProfilesLocationsArray[key] == updatedProfilesCategoriesArray[key] )
                {
                  filteredProfilesArray[key] = updatedProfilesCategoriesArray[key];
                }
          }
        }
      }
      console.log(filteredProfilesArray);
      state.allProfiles_JSONArray = filteredProfilesArray;
      document.getElementById("supplierProfileCardsContainer").innerHTML = "<div id='startAppendingFromHere'></div>";
      trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage);
      console.log("trimmedProfiles: ");
      console.log(trimmedProfiles);
      arrayForCurrentPage = trimmedProfiles.dataSet;
      console.log("NewData");
      console.log(arrayForCurrentPage);
      for (var i = 0 in arrayForCurrentPage)
      {
        let name = arrayForCurrentPage[i]["supplierName"]
        let supplierProfileImage = arrayForCurrentPage[i]["supplierProfileImage"];
        let supplierID = arrayForCurrentPage[i]["supplierID"]
        let province = arrayForCurrentPage[i]["supplierProvince"]
        let city = arrayForCurrentPage[i]["supplierCity"]
        let products = arrayForCurrentPage[i]["products"]
        let categories = arrayForCurrentPage[i]["supplierCategory"]

        newSupplierCard(name,supplierProfileImage,province,city,supplierID,products,categories);
      }
      console.log("leeeength is:"+Object.keys(state.allProfiles_JSONArray).length);
      if (Object.keys(state.allProfiles_JSONArray).length == 0)
      {
        pageButtons(1);
      }
      else{
        pageButtons(trimmedProfiles.pages);
      }

    }
//////////////////// End Pagination Code //////////////////////////////

/////////////////// START OF Supplier CARDS POPULATING //////////////////
function newSupplierCard(name,supplierProfileImage,province,city,supplierID,products,categories)
{
    
  var provinceName = "";
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
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

  let categoriesClasses = ""
  for(var i=0; i<categories.length;i++)
  {
    categoriesClasses= categoriesClasses+" "+categories[i];
  }
  div1.className = "ml-1 mr-1 supplier "+provinceName+" "+(city.replace(/\s/g, ''))+" "+categoriesClasses
  div2.className = "card mb-2 btn book"
  div2.id = supplierID;
  div2.style.borderRadius = "15px";
  div2.style.color ="blue";
  div1.style.display = "inline-block";
  // div2.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
  img.className =  "card-img-top"
  img.style.width= "100%";
  img.id = supplierID+"image"
  img.src = supplierProfileImage;
  div3.className = "card-body d-flex justify-content-center"
  div3.style.position = "relative";
  div4.className = "text-center"
  div5.className = "locationContainer"
  div5.style.position= "absolute";
  div5.style.bottom = "0";
  h5.className = "card-title"
  h5.style.textAlign = "center"
  h5.innerText = name
  h5.style.overflow = "auto";
  h5.id = supplierID+"name"
  image.src = "../images/locationIcon-small.png";    
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
  div5.appendChild(image)
  div5.appendChild(span1)
  div5.appendChild(span2)
  div3.appendChild(div5)
  div2.appendChild(div4)
  let lengthofDictionary = 0;
  // if ( products != null)
  // {
  //   lengthofDictionary = Object.keys(products).length;
  //   console.log("Number of products is: "+lengthofDictionary);
  // }
  function insertAfter(referenceNode, newNode)
  {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  var appendingElement = document.getElementById("startAppendingFromHere")
  insertAfter(appendingElement,div1)

  // function resetAllSelectionsAndArrays()
  // {
  //   document.querySelector(".form-select-province").selectedIndex = 0; // This is in order to reset filtering values when you return back to the index/home page back from a profile page
  //   document.querySelector(".form-select-city").selectedIndex = 0; // This is in order to reset filtering values when you return back to the index/home page back from a profile page

  //   updatedProfilesCategoriesArray = (Object.assign({}, fullArrayObject));
  //   filteredProfilesArray = Object.assign({}, fullArrayObject);
  //   updatedProfilesLocationsArray = Object.assign({}, fullArrayObject);
    
  //    counter1 = 1;
  //    counter2 = 1;
  //    counter3 = 1;
  //    counter4 = 1;
  //    counter5 = 1;
  //    counter6 = 1;
  //    counter7 = 1;
  //    counter8 = 1;
  //    counter9 = 1;
  //    counter10 = 1;

  //   allCategoriesSelected = true;
  //   meatSelected = false;
  //   coffeeTeaSelected = false;
  //   plasticsSelected = false;
  //   fruitSelected = false;
  //   bakedSelected = false;
  //   spicesSelected = false;
  //   frozenSelected = false;
  //   drinksSelected = false;

  //   document.getElementById("check01").checked = false;
  //   document.getElementById("cardBody1").style.color = "white";
  //   document.getElementById("check01").disabled = true;
  //   document.getElementById("categoryImage1").style.filter = "grayscale(0)"

  //   highlightCategoryAndFilterCards1();
  //   highlightCategoryAndFilterCards2();
  //   highlightCategoryAndFilterCards3();
  //   highlightCategoryAndFilterCards4();
  //   highlightCategoryAndFilterCards5();
  //   highlightCategoryAndFilterCards6();
  //   highlightCategoryAndFilterCards7();
  //   highlightCategoryAndFilterCards8();
  //   highlightCategoryAndFilterCards9();

  // }

  document.querySelector(".book").addEventListener("click", function()
  {
    let supplier_id = this.id;
    let supplier_name = document.getElementById(supplierID+"name").innerText
    // let supplier_image_src = document.getElementById(supplierID+"image").src
    let stringifiedSupplierServices = JSON.stringify(products);
    let isEmpty = "true";

    if (lengthofDictionary>0)
    {
       isEmpty = "false";
    }
    else if (lengthofDictionary == 0)
    {
       isEmpty = "true";
    }

    // // localStorage.setItem("supplierID", supplier_id )
    // localStorage.setItem("supplierName", supplier_name)
    // // localStorage.setItem("supplierImageSrc", supplier_image_src)
    // localStorage.setItem("supplierServices", stringifiedSupplierServices)
    localStorage.setItem("isEmpty", isEmpty);
    window.location.assign("supplierProfile\\"+supplier_id);

    document.querySelector(".form-select-province").selectedIndex = 0; // This is in order to reset filtering values when you return back to the index/home page back from a profile page
    document.querySelector(".form-select-city").selectedIndex = 0; // This is in order to reset filtering values when you return back to the index/home page back from a profile page

  });
  
}
/////////////////// END OF Supplier CARDS POPULATING ////////////////////
