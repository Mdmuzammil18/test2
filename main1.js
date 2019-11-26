function checkAge() {
let named = document.querySelectorAll(".name");
for (var i = 0; i < named.length; i++) {
    let myage = named[i].querySelector(".color");
    if(myage.value  && myage.value <= 20){
        named[i].style.backgroundColor = 'blue';
} else if(myage.value  && myage.value <= 40){
        named[i].style.backgroundColor = 'green'; 
}else if(myage.value  && myage.value <= 60){
    named[i].style.backgroundColor = 'yellow'; 
}
else if(myage.value  && myage.value > 60){
    named[i].style.backgroundColor = 'red'; 
}
}
}