function calc() {
    var price = document.getElementById("cookies").value
    var val = document.getElementById("Amount").value;
    var tot_price = val * price;
    var divobj = document.getElementById('total');
    divobj.value = tot_price;
}

function changeByOpeningHours(){
    if (new Date().getHours() > 10 && new Date().getHours() < 20){
        document.getElementById("open").innerHTML = ' WE ARE OPEN NOW';
    }
    else{
        document.getElementById("open").innerHTML = 'WE ARE CLOSE NOW';
    }
}

function markOnNav(){
    if (document.links[0].href === document.URL) {
        document.links[0].className = 'thisPage';  
    }
    else{
        document.links[1].className = 'thisPage';   
    }
}    




