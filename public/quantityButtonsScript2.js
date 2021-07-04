
const quantityButton = document.querySelectorAll(".btn-number");
var checkoutBadge    = document.querySelector(".checkoutBadge");
var checkoutBadgeValue   = parseInt(checkoutBadge.innerText);

 for (let i = 0; i < quantityButton.length; i++) {
     quantityButton[i].addEventListener("click", function()
     {
     var productName = quantityButton[i].getAttribute("name");
     var productQuantityInput = document.querySelector("#"+productName);
     var currentQuantityValue = productQuantityInput.value;
     var buttonType = quantityButton[i].getAttribute("data-type");
    //  var productPrice = parseInt(document.querySelector("#"+productName+"Price").innerText);
     var checkoutBadge = document.querySelector(".checkoutBadge");

     if (buttonType == 'minus')
       {
         if(parseInt(productQuantityInput.value) > 0)
         {
           productQuantityInput.value = parseInt(currentQuantityValue)-1;
        //    document.querySelector("#"+productName+"TotalCost").innerText = (productQuantityInput.value)*productPrice;

           checkoutBadgeValue = checkoutBadgeValue-1;
           console.log(checkoutBadgeValue);
           document.querySelector(".checkoutBadge").innerText = checkoutBadgeValue;
         }
       }
     else if (buttonType == 'plus')
       {
         if(parseInt(productQuantityInput.value) < 100)
         {
           productQuantityInput.value = parseInt(productQuantityInput.value)+1;
        //    document.querySelector("#"+productName+"TotalCost").innerText = (productQuantityInput.value)*productPrice;

        checkoutBadgeValue = checkoutBadgeValue+1;
        console.log(checkoutBadgeValue);
        document.querySelector(".checkoutBadge").innerText = checkoutBadgeValue;
      }
       }
    });
 }
    // if (!isNaN(currentVal)) {
    //     if(type == 'minus') {
    //
    //         if(currentVal > input.attr('min')) {
    //             input.val(currentVal - 1).change();
    //         }
    //
    //     } else if(type == 'plus') {
    //
    //         if(currentVal < input.attr('max')) {
    //             input.val(currentVal + 1).change();
    //         }
    //     }
    // } else {
    //     input.val(0);
    // }
// });


// $('.input-number').focusin(function(){
//    $(this).data('oldValue', $(this).val());
// });
//
// $(".input-number").keydown(function (e) {
//         // Allow: backspace, delete, tab, escape, enter and .
//         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//              // Allow: Ctrl+A
//             (e.keyCode == 65 && e.ctrlKey === true) ||
//              // Allow: home, end, left, right
//             (e.keyCode >= 35 && e.keyCode <= 39)) {
//                  // let it happen, don't do anything
//                  return;
//         }
//         // Ensure that it is a number and stop the keypress
//         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//             e.preventDefault();
//         }
//     });
