const names = [{username: 'Smith', age: 18},
 {username: 'David', age: 25},
 {username: 'john', age: 34},
 {username: 'Mike', age: 42},
 {username: 'Mark', age: 08},
 {username: 'Maria', age: 52},
 {username: 'Joey', age: 65},
 {username: 'Clark', age: 71},
 {username: 'Ricky', age: 22},
 {username: 'Don', age: 49},
];

// console.log(names);
for(let people of names){
    people['username']


    let p =document.createElement('p');
    let span = document.createElement('sapn')
    let age = document.createElement('input')
    age.classList.add("my-class");
    age.setAttribute('type', 'number')
    // age.setAttribute('id',"my-class");
    // p.innerHTML = '<input type="number" class="color">';
    span.textContent = ('Age: ')
    p.textContent = ('Username:' + ' ' + people['username']) 
    // h1.setAttribute('class', 'demo');
    document.body.appendChild(p);
   
    p.appendChild(document.createElement('br'))
    p.appendChild(span)
    p.appendChild(age)
    // document.write('Age:' + ' ' +  '<input type="number" class="color">')
    // h1.addEventListener('input', changeColor)
    // document.getElementById("color").addEventListener("input", changeColor);

    // document.write();
    // h2.setAttribute('class', 'demo');
    // document.body.appendChild(h2);
    
    
//      function changeColor(e){


// }
function changeColor(e){
    let value = e.target.value;
    let color;
if(value <= 20){
    e.target.parentElement.style.backgroundColor = 'blue';
    h1.style.backgroundColor = 'blue';
}
else if (value <= 40){
    e.target.parentElement.style.backgroundColor = 'green';
    h1.style.backgroundColor = 'green';
}
else if (value<= 60){
    e.target.parentElement.style.backgroundColor = 'yellow';
    h1.style.backgroundColor = 'yellow';
}else {
    e.target.parentElement.style.backgroundColor = 'red';
    h1.style.backgroundColor = 'red';
}
e.target.style.backgroundColor = 'color';

document.querySelector(".my-class").addEventListener("input", changeColor(e));

};

}

// console.log(namesArr)


