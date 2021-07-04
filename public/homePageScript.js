
let selectedProvinceSuppliers = [];

document.getElementById("easternCities").classList.remove("d-none")
document.getElementById("easternCities").disabled = true;

document.querySelector(".form-select-province").addEventListener("change", provinceFilter);
document.getElementById("easternCities").addEventListener("change", cityFilter);
document.getElementById("haelCities").addEventListener("change", cityFilter);
document.getElementById("makkahCities").addEventListener("change", cityFilter);
document.getElementById("riyadhCities").addEventListener("change", cityFilter);
document.getElementById("aseerCities").addEventListener("change", cityFilter);
document.getElementById("madinahCities").addEventListener("change", cityFilter);
document.getElementById("qassimCities").addEventListener("change", cityFilter);
document.getElementById("taboukCities").addEventListener("change", cityFilter);
document.getElementById("najranCities").addEventListener("change", cityFilter);
document.getElementById("jazanCities").addEventListener("change", cityFilter);

function provinceFilter()
{
  console.log("inside homePageScript.js!")
  var selectedProvince = document.querySelector(".form-select-province")
  var value = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  var text = selectedProvince.options[selectedProvince.selectedIndex].text;
  if(text == "المنطقة الشرقية")
  {
    console.log("eastern selected")
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").disabled = false;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".eastern").forEach(showElement);
    document.querySelectorAll(".eastern").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSuppliers);
    }
  else if(text == "حائل")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("haelCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".hael").forEach(showElement);
    document.querySelectorAll(".hael").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);
    
    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSuppliers);
    }
  else if(text == "مكة المكرمة")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("makkahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".makkah").forEach(showElement);
    document.querySelectorAll(".makkah").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
 
    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
    console.log(text);
    console.log(selectedProvinceSuppliers);
  }
  else if(text == "عسير")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("aseerCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
  
    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
      console.log(text);
      console.log(selectedProvinceSuppliers);
  }
  else if(text == "الرياض")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("riyadhCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".riyadh").forEach(showElement);
    document.querySelectorAll(".riyadh").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
        console.log(selectedProvinceSuppliers);
  }
  else if(text == "المدينة المنورة")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("madinahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".madinah").forEach(showElement);
    document.querySelectorAll(".madinah").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
        elem.classList.remove("d-none");
      }
    function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    console.log(selectedProvinceSuppliers)
  }
  else if(text == "القصيم")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("qassimCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".qassim").forEach(showElement);
    document.querySelectorAll(".qassim").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
        elem.classList.remove("d-none");
      }
    function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    console.log(selectedProvinceSuppliers)
  }
  else if(text == "تبوك")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("taboukCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".tabouk").forEach(showElement);
    document.querySelectorAll(".tabouk").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSuppliers);
    }
  else if(text == "نجران")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("najranCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".najran").forEach(showElement);
    document.querySelectorAll(".najran").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSuppliers);
    }
  else if(text == "جازان")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;

    document.getElementById("jazanCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")

    document.querySelectorAll(".jazan").forEach(showElement);
    document.querySelectorAll(".jazan").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSuppliers);
    }
  else{
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").disabled = true;
    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(showElement);

    document.querySelectorAll(".hael").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".riyadh").forEach(showElement);

    document.querySelectorAll(".madinah").forEach(showElement);

    document.querySelectorAll(".qassim").forEach(showElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(showElement);

    document.querySelectorAll(".jazan").forEach(showElement);

    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    console.log(text)
  }
}

function cityFilter(e)
{
  let selectedCity = document.getElementById("easternSelected");

  console.log("target id: "+e.target.id);

  if(e.target.id == "haelCities")
  {
    selectedCity = document.getElementById("haelCities");
  }
  else if(e.target.id == "easternCities")
  {
    selectedCity = document.getElementById("easternCities");
  }
  else if(e.target.id == "riyadhCities")
  {
    selectedCity = document.getElementById("riyadhCities");
  }
  else if(e.target.id == "makkahCities")
  {
    selectedCity = document.getElementById("makkahCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  else if(e.target.id == "aseerCities")
  {
    selectedCity = document.getElementById("aseerCities");
  }
  else if(e.target.id == "abhaCities")
  {
    selectedCity = document.getElementById("abhaCities");
  }
  // else if(e.target.id == "joufCities")
  // {
  //   selectedCity = document.getElementById("joufCities");
  // }
  // else if(e.target.id == "northernBordersCities")
  // {
  //   selectedCity = document.getElementById("northernBordersCities");
  // }
  else if(e.target.id == "madinahCities")
  {
    selectedCity = document.getElementById("madinahCities");
  }
  else if(e.target.id == "jazanCities")
  {
    selectedCity = document.getElementById("jazanCities");
  }
  else if(e.target.id == "qassimCities")
  {
    selectedCity = document.getElementById("qassimCities");
  }
  else if(e.target.id == "taboukCities")
  {
    selectedCity = document.getElementById("taboukCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  console.log(selectedCity);
  let cityValue = selectedCity.options[selectedCity.selectedIndex].value;// get selected option value
  let cityText = selectedCity.options[selectedCity.selectedIndex].text;

  console.log(cityText+" is selected...");

  // Eastern Province Cities
  if(cityText == "الظهران")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الظهران'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الظهران'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الخبر")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الخبر'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الخبر'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الدمام")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الدمام'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الدمام'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الجبيل")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الجبيل'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الجبيل'))
      {
        item.classList.remove("d-none");
      }
    });
  }

  else if(cityText == "الأحساء")
  {
  
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الأحساء'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الأحساء'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "القطيف")
  {
  
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('القطيف'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('القطيف'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "حفر الباطن")
  {
  
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('حفرالباطن'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('حفرالباطن'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الخفجي")
  {
  
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الخفجي'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الخفجي'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النعيرية")
  {
  
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('النعيرية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('النعيرية'))
      {
        item.classList.remove("d-none");
      }
    });
  }

//Hael Province Cities
if(cityText == "مدينة حائل")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('مدينة حائل'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('مدينة حائل'))
    {
      item.classList.remove("d-none");
    }
  });
} 
else if(cityText == "بقعاء")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('بقعاء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('بقعاء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "قفار")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('قفار'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('قفار'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الغزالة")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الغزالة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الغزالة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الشنان")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الشنان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الشنان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "موقق")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('موقق'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('موقق'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الحائط")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الحائط'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الحائط'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "السليمي")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('السليمي'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('السليمي'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الشملي")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الشملي'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الشملي'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "سميراء")
{

  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('سميراء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('سميراء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الحليفة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الحليفة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الحليفة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "جبة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('جبة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('جبة'))
    {
      item.classList.remove("d-none");
    }
  });
}

// Makkah cities
else if(cityText == "الطائف")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الطائف'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الطائف'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "جدة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('جدة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('جدة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "مكة المكرمة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('مكة المكرمة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('مكة المكرمة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "رابغ")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('رابغ'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('رابغ'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "القنفذة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('القنفذة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('القنفذة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الليث")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الليث'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الليث'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "خليص")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('خليص'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('خليص'))
    {
      item.classList.remove("d-none");
    }
  });
}

// Riyadh Cities
else if(cityText == "شمال الرياض")
  {
    console.log("added شمال الرياض");
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('شمالالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('شمالالرياض'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "جنوب الرياض")
  {
    console.log("add جنوبالرياض");
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('جنوبالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('جنوبالرياض'))
      {
        console.log("contains جنوب الرياض");
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "شرق الرياض")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('شرقالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('شرقالرياض'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "غرب الرياض")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('غربالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('غربالرياض'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  
  // Aseer Cities
  else if(cityText == "أبها")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('أبها'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('أبها'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "خميس مشيط")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('خميسمشيط'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('خميسمشيط'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النماص")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('النماص'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('النماص'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "تنومة")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('تنومة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('تنومة'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "رجال ألمع")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('رجالألمع'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('رجالألمع'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ظهران الجنوب")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('ظهرانالجنوب'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ظهرانالجنوب'))
      {
        item.classList.remove("d-none");
      }
    });
  }

  // Madinah Cities
  else if(cityText == "الحناكية")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الحناكية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الحناكية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "العلا")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('العلا'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('العلا'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ينبع")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('ينبع'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ينبع'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ينبع الصناعية")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('ينبعالصناعية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ينبعالصناعية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "المدينة المنورة")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('المدينةالمنورة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('المدينةالمنورة'))
      {
        item.classList.remove("d-none");
      }
    });
  }

  // Qassim Cities
  else if(cityText == "عنيزة")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('عنيزة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('عنيزة'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "بريدة")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('بريدة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('بريدة'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "البكيرية")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('البكيرية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('البكيرية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ضرية")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('ضرية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ضرية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "المذنب")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('المذنب'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('المذنب'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "عيون الجواء")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('عيونالجواء'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('عيونالجواء'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "رياض الخبراء")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('رياضالخبراء'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('رياضالخبراء'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "عقلة الصقور")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('عقلةالصقور'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('عقلةالصقور'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الأسياح")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الأسياح'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الأسياح'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النبهانية")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('النبهانية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('النبهانية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الرس")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الرس'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الرس'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الشماسية")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الشماسية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الشماسية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "البدائع")
  {
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('البدائع'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('البدائع'))
      {
        item.classList.remove("d-none");
      }
    });
  }

// Tabouk Cities
else if(cityText == "أملج")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('أملج'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('أملج'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الوجه")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الوجه'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الوجه'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "تيماء")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('تيماء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('تيماء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "ضباء")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('ضباء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('ضباء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حقل")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('حقل'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حقل'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "البدع")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('البدع'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('البدع'))
    {
      item.classList.remove("d-none");
    }
  });
}
// Najran Cities
else if(cityText == "رجلا")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('رجلا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('رجلا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "المشعلية")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('المشعلية'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('المشعلية'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حي الفيصلية")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('حيالفيصلية'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حيالفيصلية'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حي الفهد")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('حيالفهد'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حيالفهد'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "سقام")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('سقام'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('سقام'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الغويلا")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الغويلا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الغويلا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الجربة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الجربة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الجربة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الجربة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الجربة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الجربة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الصفا")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الصفا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الصفا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الشرفة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الشرفة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الشرفة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "القابل")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('القابل'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('القابل'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "العريسة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('العريسة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('العريسة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حي الأسكان")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('حيالأسكان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حيالأسكان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "شرق المطار")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('شرقالمطار'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('شرقالمطار'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "يدمة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('يدمة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('يدمة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حبونا")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('حبونا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حبونا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "نجران البلد")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('نجرانالبلد'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('نجرانالبلد'))
    {
      item.classList.remove("d-none");
    }
  });
}

// Jazan Cities
else if(cityText == "صبيا")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('صبيا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('صبيا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "صامطة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('صامطة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('صامطة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "أبو عريش")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('أبوعريش'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('أبوعريش'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "جازان")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('جازان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('جازان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "أحد مسارحة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('أحدمسارحة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('أحدمسارحة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "بيش")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('بيش'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('بيش'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "العارضة")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('العارضة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('العارضة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "ضمد")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('ضمد'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('ضمد'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الدرب")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الدرب'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الدرب'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "العيدابي")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('العيدابي'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('العيدابي'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الدائر")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الدائر'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الدائر'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الريث")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الريث'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الريث'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الحرث")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الحرث'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الحرث'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "فرسان")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('فرسان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('فرسان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الطوال")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('الطوال'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الطوال'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "هروب")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('هروب'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('هروب'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "فيفاء")
{
  selectedProvinceSuppliers.forEach(function(item){
    if (!item.classList.contains('فيفاء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('فيفاء'))
    {
      item.classList.remove("d-none");
    }
  });
}

// If no city selected
  else if(cityText == "المدينة / الحي")
  {
  selectedProvinceSuppliers.forEach(function(item){
      item.classList.remove("d-none");
    });
  }
}

document.getElementById("supplierLoginOrRegisterButton").addEventListener("click", function(){
  Swal.fire({
    title: '',
    icon: '',
    iconHtml: '',
    confirmButtonText: 'إنشاء  حساب',
    cancelButtonText: 'دخول',
    showCancelButton: true,
    showCloseButton: true
  })
  document.querySelector(".swal2-confirm").addEventListener('click', function(){
    window.location.assign("signup.html")
  });
  document.querySelector(".swal2-cancel").addEventListener('click', function(){
    window.location.assign("signin.html")
  });
});


// document.querySelector(".signup").addEventListener("click", function(){
//   document.querySelector(".signup").classList.add("dim");
//   setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
// });


// document.querySelector(".search").addEventListener("click", function(){
//   window.location.href = "http://stackoverflow.com";
//   console.log("search button clicked");
// });
