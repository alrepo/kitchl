    
    var counter1 = 1;
    var counter2 = 1;
    var counter3 = 1;
    var counter4 = 1;
    var counter5 = 1;
    var counter6 = 1;
    var counter7 = 1;
    var counter8 = 1;

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
                document.getElementById("categoryImage1").src = "fruit.svg"
                // document.getElementById("berry1").style.display = "none";
                // document.getElementById("berry2").style.display = "block";

            }
            else if (document.getElementById("cardBody1").style.color == "white")
            {
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("categoryImage1").src = "apple-no-color.svg"
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

    document.getElementById("categoryCard5").addEventListener("click", fontColorChange5);

    function fontColorChange5()
    {
        if(counter5 == 1)
        {
            counter5 = counter5 + 1;
            console.log(document.getElementById("cardBody5").style.color);
            if (document.getElementById("cardBody5").style.color == "blue")
            {
                document.getElementById("cardBody5").style.color = "white";
            }
            else if (document.getElementById("cardBody5").style.color == "white")
            {
                document.getElementById("cardBody5").style.color = "blue";
            }
        }
        else
        {
            counter5 = 1;
        }
    }

    document.getElementById("categoryCard6").addEventListener("click", fontColorChange6);

    function fontColorChange6()
    {
        if(counter6 == 1)
        {
            counter6 = counter6 + 1;
            console.log(document.getElementById("cardBody6").style.color);
            if (document.getElementById("cardBody6").style.color == "blue")
            {
                document.getElementById("cardBody6").style.color = "white";
            }
            else if (document.getElementById("cardBody6").style.color == "white")
            {
                document.getElementById("cardBody6").style.color = "blue";
            }
        }
        else
        {
            counter6 = 1;
        }
    }

    document.getElementById("categoryCard7").addEventListener("click", fontColorChange7);

    function fontColorChange7()
    {
        if(counter7 == 1)
        {
            counter7 = counter7 + 1;
            console.log(document.getElementById("cardBody7").style.color);
            if (document.getElementById("cardBody7").style.color == "blue")
            {
                document.getElementById("cardBody7").style.color = "white";
            }
            else if (document.getElementById("cardBody7").style.color == "white")
            {
                document.getElementById("cardBody7").style.color = "blue";
            }
        }
        else
        {
            counter7 = 1;
        }
    }

    document.getElementById("categoryCard8").addEventListener("click", fontColorChange8);

    function fontColorChange8()
    {
        if(counter8 == 1)
        {
            counter8 = counter8 + 1;
            console.log(document.getElementById("cardBody8").style.color);
            if (document.getElementById("cardBody8").style.color == "blue")
            {
                document.getElementById("cardBody8").style.color = "white";
            }
            else if (document.getElementById("cardBody8").style.color == "white")
            {
                document.getElementById("cardBody8").style.color = "blue";
            }
        }
        else
        {
            counter8 = 1;
        }
    }
