// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

//wllet balance
let displayamount = JSON.parse(localStorage.getItem("amount"));

if(displayamount !== null){
    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${displayamount}`;
} else{
    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${00}`;
}

let data = JSON.parse(localStorage.getItem("movie"));
console.log(data);

helper = (id) => {
    return document.getElementById(id);
}


let datadiv = document.createElement("div");
datadiv.setAttribute("class", "datadiv");

let poster = document.createElement("img");
poster.setAttribute("class", "poster");
poster.src = data.Poster;

let title = document.createElement("h3");
title.setAttribute("class", "title");
title.innerText = data.Title;

datadiv.append(poster, title);
helper("movie").append(datadiv);

submit = () => {

    if (helper("user_name").value == "" && helper("number_of_seats").value == "") {
        alert("Please fill all the fields");
    } else if (helper("user_name").value == "") {
        alert("Please Enetr Username");
    }
    else if (helper("number_of_seats").value == "") {
        alert("Please Enetr Number of seats");
    } else {


        let seats = helper("number_of_seats").value;

        let total = Number(seats) * 100;

        let balance = JSON.parse(localStorage.getItem("amount"));
        console.log(balance);
        console.log(total);

        if (total > balance) {
            alert("Insufficient Balance!");
        } else {
            alert("Booking successful!");
            let available_balance = balance - total;
            document.getElementById("wallet").innerText = `Wallet Balance: Rs ${available_balance}`;
            localStorage.setItem("amount",JSON.stringify(available_balance));
        }
    };
}



