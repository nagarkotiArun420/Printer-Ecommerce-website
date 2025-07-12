function data(){//making the code in one section//
    var a=document.getElementById("n1").value;//storking the value of forms as n1,n2,n3//
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    var d=document.getElementById("n4").value;
    var e=document.getElementById("n5").value;
    var f=document.getElementById("n6").value;
    var g=document.getElementById("n7").value;
    if(a==""|| b==""|| c==""|| d==""|| e==""|| f==""|| g=="")//if the fields are empty//
    {
        alert("All fields must be filled");
        return false;
    }
   else if(d.length<10 || d.length>10)
   {
        alert("Your number is invalid !Please enter valid number");
        return false;
    }
    else if(isNaN(d))
   {
        alert("Alphabets  are not allowed !Please enter valid number");
        return false;
    }
    else
    {
       document.getElementById("myform").reset();
        return true;
    }
}