function getProductInput(product, price, isAdd) {
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    
    if(isAdd == true){
        productNumber = parseInt(productNumber)+1;  
        productInput.value = productNumber; 
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber)-1;  
        productInput.value = productNumber;    
    }
     
    // update price 
    const productMoney = document.getElementById(product+'-money');
    productMoney.innerText = productNumber*price;

    totalCalculate();
}

// function productQuantity(product) {
//     const productInput = document.getElementById(product+'-number').value;
//     return productInput;
// }

function totalCalculate() {
    const phonePrice = document.getElementById('phone-number').value*1200;
    const casePrice = document.getElementById('case-number').value*60;
    const subTotal = phonePrice +casePrice;
    const taxTotal = subTotal/10;
    const totalAmount = subTotal+taxTotal;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total-amount').innerText = totalAmount;
}

// handle phone increase decrease event 
document.getElementById('phone-plus').addEventListener('click', function () {
    const phoneResult = getProductInput('phone', 1200, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    const phoneResult = getProductInput('phone', 1200, false);
})


// handle case increase decrease event 
document.getElementById('case-plus').addEventListener('click', function () {
    const caseResult = getProductInput('case',60, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    const caseResult = getProductInput('case', 60, false);
})