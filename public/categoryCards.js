    
    var counter1 = 1;
    var counter2 = 1;
    var counter3 = 1;
    var counter4 = 1;

    document.getElementById("categoryCard1").addEventListener("click", fontColorChange1);

    function fontColorChange1()
    {
        if(counter1 == 1)
        {
            counter1 = counter1 + 1;
            console.log(document.getElementById("cardBody1").style.color);
            if (document.getElementById("cardBody1").style.color == "blue")
            {
                document.getElementById("cardBody1").style.color = "white";
                // document.getElementById("berry1").style.display = "none";
                // document.getElementById("berry2").style.display = "block";

            }
            else if (document.getElementById("cardBody1").style.color == "white")
            {
                document.getElementById("cardBody1").style.color = "blue";
                // document.getElementById("berry2").style.display = "none";
                // document.getElementById("berry1").style.display = "block";
            }
        }
        else
        {
            counter1 = 1;
        }
    }

    document.getElementById("categoryCard2").addEventListener("click", fontColorChange2);

    function fontColorChange2()
    {
        if(counter2 == 1)
        {
            counter2 = counter2 + 1;
            console.log(document.getElementById("cardBody2").style.color);
            if (document.getElementById("cardBody2").style.color == "blue")
            {
                document.getElementById("cardBody2").style.color = "white";
            }
            else if (document.getElementById("cardBody2").style.color == "white")
            {
                document.getElementById("cardBody2").style.color = "blue";
                
            }
        }
        else
        {
            counter2 = 1;
        }
    }

    document.getElementById("categoryCard3").addEventListener("click", fontColorChange3);

    function fontColorChange3()
    {
        if(counter3 == 1)
        {
            counter3 = counter3 + 1;
            console.log(document.getElementById("cardBody3").style.color);
            if (document.getElementById("cardBody3").style.color == "blue")
            {
                document.getElementById("cardBody3").style.color = "white";
            }
            else if (document.getElementById("cardBody3").style.color == "white")
            {
                document.getElementById("cardBody3").style.color = "blue";
            }
        }
        else
        {
            counter3 = 1;
        }
    }

    document.getElementById("categoryCard4").addEventListener("click", fontColorChange4);

    function fontColorChange4()
    {
        if(counter4 == 1)
        {
            counter4 = counter4 + 1;
            console.log(document.getElementById("cardBody4").style.color);
            if (document.getElementById("cardBody4").style.color == "blue")
            {
                document.getElementById("cardBody4").style.color = "white";
            }
            else if (document.getElementById("cardBody4").style.color == "white")
            {
                document.getElementById("cardBody4").style.color = "blue";
            }
        }
        else
        {
            counter4 = 1;
        }
    }