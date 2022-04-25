// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// Wallent Balance
let displayamount = JSON.parse(localStorage.getItem("amount"));

if(displayamount !== null){
    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${displayamount}`;
} else{
    document.getElementById("wallet").innerText = `Wallet Balance: Rs ${00}`;
}

//helper

helper = (id) => {
    return document.getElementById(id);
}

//Search bar

search = async () => {

    try{

    const input = helper("search").value;
    
    const res = await fetch(`https://www.omdbapi.com/?apikey=34e17369&s=${input}`);

    const data = await res.json();

    console.log(data.Search);
    append(data.Search);

    }catch(err){

    };
};

append = (data) => {

    localStorage.removeItem("movie");

    helper("movies").innerHTML = null;

    data.map((el) => {
        let datadiv = document.createElement("div");
        datadiv.setAttribute("class","datadiv");

        let poster = document.createElement("img");
        poster.setAttribute("class","poster");
        poster.src = el.Poster;

        let title = document.createElement("h2");
        title.setAttribute("class","title");
        title.innerText = el.Title;

        let btn = document.createElement("button");
        btn.setAttribute("class","book_now");
        btn.innerText = "Book Now";
        btn.addEventListener("click",() => {
            addmovie(el);
        })

        datadiv.append(poster, title, btn);
        helper("movies").append(datadiv);
    }); 

    addmovie = (el) => {
        localStorage.setItem("movie",JSON.stringify(el));
        window.location.href = "checkout.html";
    }
};

//debouncing
let id;
debounce = (func, delay) => {
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(() => {
        func();
    },delay);
};

