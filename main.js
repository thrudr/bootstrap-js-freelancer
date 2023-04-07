
//-------------FUNCTION-----------------------------
function workCalculation (){

    let work = document.getElementById("work").value;
    work = parseInt(work);
    switch (work){
        case 1:
            work = 20.5;
            break;

        case 2:
            work = 15.3;
            break;

        case 3:
            work = 33.6;
            break;
    }

    return work
}


function priceCalculation (hour, work){

    price = hour*work;
    return price.toFixed(2)
}


function submitForm(event){
    event.preventDefault();

    let work = workCalculation();
    let hour = document.getElementById("hour").value;
    let priceInt = priceCalculation(hour, work);

    let finalPrice;

    finalPrice = priceInt;

    document.getElementById("totalPrice").innerHTML = "Il prezzo totale è: " + finalPrice + "€";
}