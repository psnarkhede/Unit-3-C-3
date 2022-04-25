// Store the wallet amount to your local storage with key "amount"
let displayamount = JSON.parse(localStorage.getItem("amount"));

if(displayamount !== null){
    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${displayamount}`;
} else{
    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${00}`;
}

add = () => {

    let amount = document.getElementById("amount").value;

    let presentamount = JSON.parse(localStorage.getItem("amount"));

    let newamount = Number(presentamount) + Number(amount);

    localStorage.setItem("amount",JSON.stringify(newamount));

    let displayamount = JSON.parse(localStorage.getItem("amount"));

    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${displayamount}`;

    document.getElementById("amount").value = "";
}

redirect = () => {
    window.location.href = "movies.html";
}