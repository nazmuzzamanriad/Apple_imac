
//set memory Value on memory cost....................

function memory8Gb() {
    document.getElementById("memoryCostDisplay").innerText = 0;
    updateTotalPrice();
}
function memory16Gb() {
    document.getElementById("memoryCostDisplay").innerText = 180;
    updateTotalPrice();
}

// set storage value on storage cost.......
function storage256Gb() {
    document.getElementById("storageCostDisplay").innerText = 0;
    updateTotalPrice();
}
function storage512Gb() {
    document.getElementById("storageCostDisplay").innerText = 100;
    updateTotalPrice();
}
function storage1Tb() {
    document.getElementById("storageCostDisplay").innerText = 180;
    updateTotalPrice();
}

// set delivery charge value...
document.getElementById("deliveryDate25").addEventListener("click", function () {
    document.getElementById("deliveryCostDispaly").innerText = 0;
    updateTotalPrice();
})
document.getElementById("deliveryDate21").addEventListener("click", function () {
    document.getElementById("deliveryCostDispaly").innerText = 20;
    updateTotalPrice();
})

// calculate Total price...


function updateTotalPrice() {

    const best_price = parseFloat(document.getElementById("bestCostDisplay").innerText);
    const extra_memory_cost = parseFloat(document.getElementById("memoryCostDisplay").innerText);
    const extra_storage_cost = parseFloat(document.getElementById("storageCostDisplay").innerText);
    const delivery_cost = parseFloat(document.getElementById("deliveryCostDispaly").innerText);
    const total_price = best_price + extra_memory_cost + extra_storage_cost + delivery_cost;
    document.getElementById("totalPriceDisplay").innerText = total_price;
    document.getElementById("newTotal").innerText = total_price;
}
// add event handler on apply button to execite promo..
document.getElementById("verifyPromo").addEventListener("click", function () {
    const promo_input = document.getElementById("promoInput").value;


    if (promo_input == "stevekaku") {
        CalculateParcentage();
    }
    else {
        console.log("please write carefully");
    }
    document.getElementById("promoInput").value = "";

})

// calculate parcentage off..............

function CalculateParcentage() {
    const totalPriceInput = document.getElementById("totalPriceDisplay").innerText;
    const parcentageOff = (20 / 100);
    const calculateParcentage = totalPriceInput * parcentageOff;
    const newTotalPrice = totalPriceInput - calculateParcentage;
    document.getElementById("newTotal").innerText = newTotalPrice;


}




