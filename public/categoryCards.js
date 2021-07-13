    
    var counter1 = 1;
    var counter2 = 1;
    var counter3 = 1;
    var counter4 = 1;
    var counter5 = 1;
    var counter6 = 1;
    var counter7 = 1;
    var counter8 = 1;
    var counter9 = 1;
    var selectedCategories =  0;

    document.getElementById("categoryCard1").addEventListener("click", fontColorChange1);

    function fontColorChange1()
    {
        console.log(selectedCategories);
        if (selectedCategories ==  0)
        {
            document.getElementById("check01").disabled = true;
        }
        else if(counter1 == 1)
        {
            selectedCategories = 0;
            document.getElementById("check01").disabled = false;
            counter1 = counter1 + 1;
            if (document.getElementById("cardBody1").style.color == "blue")
            {
                document.getElementById("cardBody1").style.color = "white";
                document.getElementById("categoryImage1").style.filter = "grayscale(0%)"

                document.getElementById("check02").checked = false;
                document.getElementById("cardBody2").style.color = "blue"
                document.getElementById("categoryImage2").style.filter = "grayscale(100%)"

                document.getElementById("check03").checked = false;
                document.getElementById("cardBody3").style.color = "blue"
                document.getElementById("categoryImage3").style.filter = "grayscale(100%)"

                document.getElementById("check04").checked = false;
                document.getElementById("cardBody4").style.color = "blue"
                document.getElementById("categoryImage4").style.filter = "grayscale(100%)"

                document.getElementById("check05").checked = false;
                document.getElementById("cardBody5").style.color = "blue"
                document.getElementById("categoryImage5").style.filter = "grayscale(100%)"

                document.getElementById("check06").checked = false;
                document.getElementById("cardBody6").style.color = "blue"
                document.getElementById("categoryImage6").style.filter = "grayscale(100%)"

                document.getElementById("check07").checked = false;
                document.getElementById("cardBody7").style.color = "blue"
                document.getElementById("categoryImage7").style.filter = "grayscale(100%)"

                document.getElementById("check08").checked = false;
                document.getElementById("cardBody8").style.color = "blue"
                document.getElementById("categoryImage8").style.filter = "grayscale(100%)"

                document.getElementById("check09").checked = false;
                document.getElementById("cardBody9").style.color = "blue"
                document.getElementById("categoryImage9").style.filter = "grayscale(100%)"

            }
            else if (document.getElementById("cardBody1").style.color == "white")
            {
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)";
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
            if (document.getElementById("cardBody2").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody2").style.color = "white";
                document.getElementById("categoryImage2").style.filter = "grayscale(0%)"

                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

            }
            else if (document.getElementById("cardBody2").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody2").style.color = "blue";
                document.getElementById("categoryImage2").style.filter = "grayscale(100%)"

                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
                
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
            if (document.getElementById("cardBody3").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody3").style.color = "white";
                document.getElementById("categoryImage3").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"
                        }
            else if (document.getElementById("cardBody3").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody3").style.color = "blue";
                document.getElementById("categoryImage3").style.filter = "grayscale(100%)"

                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
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
            if (document.getElementById("cardBody4").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody4").style.color = "white";
                document.getElementById("categoryImage4").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)" 
            }
            else if (document.getElementById("cardBody4").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody4").style.color = "blue";
                document.getElementById("categoryImage4").style.filter = "grayscale(100%)"

                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
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
            if (document.getElementById("cardBody5").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody5").style.color = "white";
                document.getElementById("categoryImage5").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"
            }
            else if (document.getElementById("cardBody5").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody5").style.color = "blue";
                document.getElementById("categoryImage5").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
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
            if (document.getElementById("cardBody6").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody6").style.color = "white";
                document.getElementById("categoryImage6").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"
            }
            else if (document.getElementById("cardBody6").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody6").style.color = "blue";
                document.getElementById("categoryImage6").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
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
            if (document.getElementById("cardBody7").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody7").style.color = "white";
                document.getElementById("categoryImage7").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"
            }
            else if (document.getElementById("cardBody7").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody7").style.color = "blue";
                document.getElementById("categoryImage7").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
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
            if (document.getElementById("cardBody8").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody8").style.color = "white";
                document.getElementById("categoryImage8").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"
            }
            else if (document.getElementById("cardBody8").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody8").style.color = "blue";
                document.getElementById("categoryImage8").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter8 = 1;
        }
    }
    document.getElementById("categoryCard9").addEventListener("click", fontColorChange9);

    function fontColorChange9()
    {
        if(counter9 == 1)
        {
            counter9 = counter9 + 1;
            if (document.getElementById("cardBody9").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody9").style.color = "white";
                document.getElementById("categoryImage9").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"
                
            }
            else if (document.getElementById("cardBody9").style.color == "white")
            {
                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody9").style.color = "blue";
                document.getElementById("categoryImage9").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter9 = 1;
        }
    }
