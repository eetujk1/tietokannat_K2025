function onkoPalindromi(sana) {
    let sanaTakaperin =sana.split("").reverse().join("");

    if(sana === sanaTakaperin) {
        console.log("Sana on palindromi!");
    }
    else{
        console.log("Sana ei ole palindromi");
    }
}

onkoPalindromi("saippuakauppias");