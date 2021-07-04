              console.log("Inside clients JS")

              let clientDictionaryLength = 0;
              let supplierClients = localStorage.getItem("supplierClients");
              let clientsIsEmpty = localStorage.getItem("clientsIsEmpty");
              let supplierID = localStorage.getItem("supplierID");
              document.querySelector("tbody").id = supplierID;
              //clients
              let parsedSupplierClients = []
              
              if (clientsIsEmpty == "false"){
                parsedSupplierClients = JSON.parse(supplierClients);
                console.log("clients dictionary length is: "+(Object.keys(parsedSupplierClients).length));
              }
              
              let clientText = ""
              let j = 0;

              // for (var key in parsedSupplierClients)
              // {
              //   j = j+1;
              //   clientText = parsedSupplierClients[key]
              //   // console.log(clientText);
              //   let clientName = clientText["clientName"];
              //   let clientPhone = clientText["clientPhone"];
              //   let clientBookedProducts = clientText["clientRequestedProducts"];

              //   // console.log("client name is: "+clientName);
              //   // console.log("client phone is: "+clientPhone);
              //   // console.log("client rquested products are: "+clientBookedProducts);
              //   console.log("client name:  "+clientName+"client phone: "+clientPhone+"client booked: "+clientBookedProducts);
              //   addNewClient(clientName, clientPhone, clientBookedProducts);
              // }

              // db.collection("suppliers").doc("Supplier Profiles").onSnapshot((doc) => {
              //     console.log("Current data: ", doc.data());
              // });
              ///////////////////////////////
               db.collection("suppliers").doc("Supplier Profiles")
                 .onSnapshot((doc) => {
                    let data = doc.data();
                     for (var key in data)
                     {
                       if (data[key]["supplierID"] == firebase.auth().currentUser.uid)
                       {
                       }
                     }
                });
              /////////////////////// Sart Real-time database listener ////////////////////////
              const loader = document.querySelector(".smallLoadingAnimation");
              loader.classList.remove("hidden");

              db.collection("clients").onSnapshot((snapshot) => {
                  let changes  = snapshot.docChanges();
                  if (changes == "")
                  {
                    loader.classList.add("hidden");
                    loader.classList.add("d-none");
                  }
                  
                  console.log(snapshot);

                  changes.forEach(change => {
                  let  changeType = change.type; 
                  let data = change.doc.data();

                  if(Object.keys(data).length == 0 || data[supplierID] == null )
                  {
                    loader.classList.add("hidden");
                    loader.classList.add("d-none"); 
                  }
                    if((changeType == "modified" || changeType == "added"))
                    {
                      // if (document.querySelectorAll(".newClientRow").length > 0)
                      //     {
                      //       document.querySelectorAll(".newClientRow").forEach(function(item){
                          
                      //         item.classList.add("d-none");
                          
                      //       });
                      //     }
                     
                      let counter = 0;
                      for (var key in data)
                      {
                        if (counter == 0 && data[key]["supplierID"] == firebase.auth().currentUser.uid)
                        {
                          console.log(data[key]["supplierID"]);
                          console.log(firebase.auth().currentUser.uid);
                          document.getElementById((data[key]["supplierID"])).innerHTML = "<tr id='startAppendingClientsFromHere'></tr>";
                          console.log("Modified or added");
                          counter = 1;
                        }
                        if((data[key]["supplierID"] == firebase.auth().currentUser.uid))
                        {
                          let clientID = data[key]["clientID"];
                          console.log(clientID);
                          let supplierID = data[key]["supplierID"];
                          let clientName = data[key]["clientName"];
                          let clientBookingDateAndTime = data[key]["clientBookingDateAndTime"];
                          let clientPhone =  data[key]["clientPhone"];
                          let clientBookedProducts = data[key]["clientRequestedProducts"];
  
                          console.log(supplierID);
                          console.log(clientName);
                          console.log(clientBookingDateAndTime);
                          console.log(clientPhone);
                          console.log(clientBookedProducts);
                          console.log(clientID);
                          addNewClient(clientName, clientBookingDateAndTime, clientPhone, clientBookedProducts, clientID);
                          console.log(data[key]);
                        }
                       
                      }
    
                    }
                })
              }, (error) => {
                console.log("error getting data");
            });
            ////////////////////// End of Real-time database listener ///////////////////////
  
function addNewClient(clientName, clientBookingDateAndTime, clientPhone, clientBookedProducts, clientID)
{
  loader.classList.add("hidden");
  loader.classList.add("d-none");

  console.log("inside addNewClient Function...");

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  let i = 1;

  if (i<=20)
  {

      let button = document.createElement("button");

      button.type = 'button';
      button.style.padding = "0";
      button.style.borderColor = "transparent";
      button.style.borderWidth = "0"; 
      button.style.borderRadius = "50%";
      button.style.fontSize = "20px";
      button.id = "removeClientButton";
      button.style.backgroundColor = "rgb(236, 79, 79)";
      button.style.width = "35px";
      button.style.height = "35px";
      button.style.alignContent = "center";
      button.style.position="relative";
      button.style.right = "0";
      button.style.justifyContent = "center";
      button.style.alignItems ="center";

      button.innerText =  "X";

      td1.innerText =""+clientName;
      td2.innerText = ""+clientPhone;
      td3.innerText = ""+clientBookedProducts;
      td4.innerText = ""+clientBookingDateAndTime;
      td5.style.boxShadow  = "none";
      td5.style.width = "1%";
      td5.style.padding = "0";
      td5.style.textAlign = "center";

      tr.classList.add("newClientRow");

      td5.appendChild(button);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      function insertAfter(referenceNode, newNode)
      {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }

      var appendingElement = document.getElementById("startAppendingClientsFromHere")
      insertAfter(appendingElement,tr);

      i = i + 1;
    }

  document.getElementById("removeClientButton").addEventListener('click',function(){
    
    let i = 1;
    tr.classList.add("d-none");
    tr.classList.remove("clientTableRow");
    i = i-1;

    // Remove client from the "clients" database...
    var clientsRef = db.collection('clients').doc(supplierID).set({
      [clientID] : {}
    }, { merge: true });
  });
 
}
