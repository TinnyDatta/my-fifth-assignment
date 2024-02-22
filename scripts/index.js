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
       const name = e.target.parentNode.childNodes[1].innerText;
       const className = e.target.parentNode.childNodes[3].innerText;
       const price =e.target.parentNode.childNodes[5].innerText;
      

       const selectedContainer = document.getElementById("selected-btn-container");

       e.target.setAttribute("disabled" , false)


       const seatCount = getConvertedValue("seat-count");
       if(seatCount+1>4){
        alert("Cannot book more than four seats at a time");
        return;
       }

       const div = document.createElement("div");
       div.classList.add("selected-seats");

       const p = document.createElement("p");
       const p1 = document.createElement("p");
       const p2 = document.createElement("p");
       p.innerText = name;
       p1.innerText = className;
       p2.innerText = price;

       div.appendChild(p);
       div.appendChild(p1);
       div.appendChild(p2);

       selectedContainer.appendChild(div);
       updateTotalCost(price);
       updateGrandTotal();

    //    const seatPrice = e.target.innerText;
    //    const seatName = e.target.innerText;
    

    //    console.log(seatName);

       
    // //    ------------try---------
       
    // //    ----------main----------
       
    //    
    //    p.innerText= seatName;
   
    //    li.appendChild(p);
    //    selectedContainer.appendChild(li);
        //   *****************needed***************
    //    const totalCost = document.getElementById("total-cost").innerText;
    //    const changeTypeOfTotalCost = parseInt(totalCost);  
    //   const sum = changeTypeOfTotalCost+ parseInt(seatPrice);
      
    //   const grandTotalCost =document.getElementById("grand-total").innerText;
    //    const changeTypeOfGrandTotalCost = parseInt(grandTotalCost);
    //   const sum2 = changeTypeOfGrandTotalCost + parseInt(seatPrice);
       
    //    setUpOfInnerText("total-cost", sum)
    //    setUpOfInnerText("grand-total", sum2)
       setUpOfInnerText("seat-count", count)
    })
}

// function updateGrandTotal (){
//     const totalCost = getConvertedValue("total-cost");
//     document.getElementById("grand-total").innerText=totalCost;
// }

function updateGrandTotal (status){
    const totalCost = getConvertedValue("total-cost");
    if (status == undefined){
        document.getElementById("grand-total").innerText=totalCost;
    } else {
        const couponCode = document.getElementById("coupon-code").value;
        if(couponCode == "Couple20"){
            const discountPrice = totalCost * 0.2;
            document.getElementById("grand-total").innerText= totalCost - discountPrice;
        } 
        

        else if(couponCode == "NEW15"){
            const discountPrice = totalCost * 0.15;
            document.getElementById("grand-total").innerText= totalCost - discountPrice;
        }
         else {
            alert ("Please enter valid coupon code");
        }
    
        // ///////
        

    }
   
}





function updateTotalCost (price) {
    const totalCost = getConvertedValue("total-cost");
   
    const convertedPrice = parseInt(price);
    const sum = totalCost +convertedPrice;
    document.getElementById("total-cost").innerText=sum;
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

// const leftSeats = getConvertedValue("left-seats");
// const seatCount = getConvertedValue("seat-count");


function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

