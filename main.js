
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

