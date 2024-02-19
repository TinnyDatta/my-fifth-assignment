// seat color A1

const btn = document.getElementById('aOne');

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = '#1DD100';
    btn.style.color = 'white'
});
// ----------A2
const btnTwo = document.getElementById('aTwo');

btnTwo.addEventListener('click', function onClick() {
    btnTwo.style.backgroundColor = '#1DD100';
    btnTwo.style.color = 'white'
});
// --------A3
const btnThree = document.getElementById('aThree');

btnThree.addEventListener('click', function onClick() {
    btnThree.style.backgroundColor = '#1DD100';
    btnThree.style.color = 'white'
});
// ---------A4
const btnFour = document.getElementById('aFour');

btnFour.addEventListener('click', function onClick() {
    btnFour.style.backgroundColor = '#1DD100';
    btnFour.style.color = 'white'
});

// --------B1
const bOne = document.getElementById('bOne');

bOne.addEventListener('click', function onClick() {
    bOne.style.backgroundColor = '#1DD100';
    bOne.style.color = 'white'
});
// --------B2
const bTwo = document.getElementById('bTwo');

bTwo.addEventListener('click', function onClick() {
    bTwo.style.backgroundColor = '#1DD100';
    bTwo.style.color = 'white'
});
// ---------B3
const bThree = document.getElementById('bThree');

bThree.addEventListener('click', function onClick() {
    bThree.style.backgroundColor = '#1DD100';
    bThree.style.color = 'white'
});
// ---------B4
const bFour = document.getElementById('bFour');

bFour.addEventListener('click', function onClick() {
    bFour.style.backgroundColor = '#1DD100';
    bFour.style.color = 'white'
});

const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn ){
    btn.addEventListener("click", function (e){
       count = count + 1;

       const seatName = e.target.innerText;
    //    const className =  document. createElement("className");
    //    className.append("Economy");
    //    const price = document. createElement("price");
    //    price.append(550);
    // const price = e.target.innerText;

       console.log(seatName);

       const selectedContainer = document.getElementById("selected-seat");
       const li = document.createElement("li");
       const p = document.createElement("p");
       p.innerText= seatName;
    //    const p2 = document.createElement("p2");
    //    p2. innerText= className;
    //    const p2 = document.createElement("p2");
    //    p2.innerText= price;

       li.appendChild(p);
    //    li.appendChild(p2);
    //    li.appendChild(p3);
       selectedContainer.appendChild(li);

       const totalCost = document.getElementById("total-cost").innerText;
       const changeType = parseInt(totalCost);

       setUpOfInnerText("seat-count", count)
    })
}
let minus = 8;
for (const btn of allBtn ){
    btn.addEventListener("click", function (e){
       minus = minus - 1;
       setUpOfInnerText("left-seats", minus)
    })
}

function setUpOfInnerText(id, value){
    document.getElementById(id).innerText = value;
}
