
//Obtener los datos del checkbox
function datos(){


   //Obtención de la selección de los combos
    var supercombo = document.getElementById("supercombo");
    var combopersonal = document.getElementById("combopersonal");
    var scomboinfantil = document.getElementById("comboinfantil");
    //Obtención de la selección de los  complementos
    var de1 = document.getElementById("de1");
    var de2 = document.getElementById("de2");
    var de3 = document.getElementById("de3");
    var de4 = document.getElementById("de4");
    var de5 = document.getElementById("de5");
    var de6 = document.getElementById("de6");
    var de7 = document.getElementById("de7");
    var de8 = document.getElementById("de8");
    var de9 = document.getElementById("de9");
    var de10 = document.getElementById("de10");

// Se obtiene la cantidad de veces que el cliente escogio el producto
var cantidadsuper = document.getElementById("number1").value;
var cantidadpersonal = document.getElementById("number2").value;
var cantidadinfantil = document.getElementById("number3").value;
var complemento1 = document.getElementById("number4").value;
var complemento2 = document.getElementById("number5").value;
var complemento3 = document.getElementById("number6").value;
var complemento4 = document.getElementById("number7").value;
var complemento5 = document.getElementById("number8").value;
var complemento6 = document.getElementById("number9").value;
var complemento7 = document.getElementById("number10").value;
var complemento8 = document.getElementById("number11").value;
var complemento9 = document.getElementById("number12").value;
var complemento10 = document.getElementById("number13").value;
// Se comprueba cuales de los combos estan chekeados
if(supercombo.checked){
    var combo1 = supercombo.value;
    console.log(combo1);
    var precio1 = 7.75;
    
//Condicion por la cantidad de veces que desse el producto
    if(cantidadsuper>1){
        var pf1 = precio1 * cantidadsuper;
    }
}

if(combopersonal.checked){
    var combo2 = combopersonal.value;
    console.log(combo2);
    var precio2 = 5.25;

    if(cantidadpersonal>1){
       var pf2 = precio2 * cantidadpersonal;
    }


}
if(scomboinfantil.checked){
    var combo3 = scomboinfantil.value;
    console.log(combo3);
    var precio3 = 3.25;

    if(cantidadinfantil>1){
        var pf3 = precio3 * cantidadinfantil;
    }
}

// Se comprueba cuales de los complementos estan chekeados
if(de1.checked){
    var com1 = de1.value;
    console.log(com1);
    var precio4 = 1.50;

//Se condiciona si el cliente deseaa más de una vez el mismo producto
    if(complemento1>1){
        var pf4 = precio4 * complemento1;
    }
}
if(de2.checked){
    var com2 = de2.value;
    console.log(com2);
    var precio5 = 1.25;

    if(complemento2>1){
        var pf5 = precio5 * complemento2;
    }
}
if(de3.checked){
    var com3 = de3.value;
    console.log(com3);
    var precio6 = 1.75;

    if(complemento3>1){
        var pf6 = precio6 * complemento3;
    }
}
if(de4.checked){
    var com4 = de4.value;
    console.log(com4);
    var precio7 = 1.50;

    if(complemento4>1){
        var pf7 = precio7 * complemento4;
    }
}
if(de5.checked){
    var com5 = de5.value;
    console.log(com5);
    var precio8 = 1.25;

    if(complemento5>1){
        var pf8 = precio8 * complemento5;
    }
}
if(de6.checked){
    var com6 = de6.value;
    console.log(com6);
    var precio9 = 1.50;

    if(complemento6>1){
        var pf9 = precio9 * complemento6;
    }
}
if(de7.checked){
    var com7 = de7.value;
    console.log(com7);
    var precio10 = 1.25;

    if(complemento7>1){
        var pf10 = precio10 * complemento7;
    }
}
if(de8.checked){
    var com8 = de8.value;
    console.log(com8);
    var precio11 = 1.00;

    if(complemento8>1){
        var pf11 = precio11 * complemento8;
    }
}
if(de9.checked){
    var com9 = de9.value;
    console.log(com9);
    var precio12 = 0.50;

    if(complemento9>1){
        var pf12 = precio12 * complemento9;
    }
}
if(de10.checked){
    var com10 = de10.value;
    console.log(com10);
    var precio13 = 1.25;

    if(complemento10>1){
        var pf13 = precio13 * complemento10;
    }
}
//Obtengo el valor donde guardo el precio final

var preciototal = document.getElementById("ptotal");
// Ya no me quedo tiempo para hacer lo del total;(

}



