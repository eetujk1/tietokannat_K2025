function compare(num1, num2) {
    
    if(num1<num2) {
        console.log(num2 + " on suurempi");
    }

    else if(num1>num2) {
        console.log(num1 + " on suurempi");
    }

    else {
        console.log("Luvut ovat yhtä suuria");
    }  
}

compare(5, 10);
