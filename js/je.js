var choiutls = prompt("Choisissez vous pierre, feuille, ou ciseau?");
var choipc = Math.floor(Math.random() * 11);
console.log(choiutls);
console.log(choipc);

if (choiutls === "") {
    document.write("<h1>saisisez une entre</h1>");
    
}
else{
    document.write("<h3>Player 1</h3>" +choiutls );
}

    if (choipc <=5) 
    {
choipc  = "pierre";
    
    } 
    else if (choipc >=8 )

    {
        choipc = "feuille";
    }
    else
    {
        choipc = "ciseau";
    }
    document.write("<h3>Computer </h3>" +choipc );

 

    
   var result = function (choix1, choix2)
    {
        if ((choix1 === choix2 ))
         {
            document.write("<h1>Null</h1>");
        }
        else if ((choix1 === "feuille") && (choix2 === "ciseau"))
        { 
            document.write("<h2 >vous etes gagner</h2>");
         

        }
        else if ((choix1 === "feuille") && (choix2 === "pierre"))
        {
            document.write("<h2>vous etes gangner</h2>");
        }

        else if ((choix1 === "pierre") && (choix2 === "ciseau"))
        {
            document.write("<h2>vous etes gagner</h2>");
        }

        else if ((choix1 === "pierre") && (choix2 === "feuille"))
        {
            document.write("<h1>vous etes perdu</h1>");
        }




        else if ((choix1 === "ciseau") && (choix2 === "feuille"))
        {
            document.write("<h1>vous etes gagner</h1>");
        }
        else if ((choix1 === "ciseau") && (choix2 === "pierre"))
        {
            document.write("<h1>vous etes perdu</h1>");
        }
    }
    
    var res = result(choiutls, choipc);
    