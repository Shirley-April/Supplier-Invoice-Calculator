function Calculate(){
    var amt =parseInt(document.querySelector("#amount").value) || 0;
    var fp =parseInt(document.querySelector("#period").value) || 0;
    var commision =parseInt(document.querySelector("#commission").value)|| 0;
    var interest =parseInt(document.querySelector("#interest").value) || 0;
    var calculate;

    var official_interest = (amt * fp * interest)/36500
    var official_commision = (commision * amt)/100

    calculate = official_commision + official_interest

    document.querySelector("#total").innerHTML = calculate.toFixed(2);
}