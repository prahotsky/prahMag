function writeHiddenId() {
    document.getElementById("idInput").value = getStorageLength();
}

function getStorageLength() {
    return Object.keys(localStorage).length;
}

function showRadioBtn(event) {
    let firstRadBtn = document.getElementById("rad1");
    let secondRadBtn = document.getElementById("rad2");
    let thirdRadBtn = document.getElementById("rad3");

    if (event.target.checked) {
        firstRadBtn.disabled = false;
        secondRadBtn.disabled = false;
        thirdRadBtn.disabled = false;
    } else {
        firstRadBtn.disabled = true;
        firstRadBtn.checked = false;
        secondRadBtn.disabled = true;
        secondRadBtn.checked = false;
        thirdRadBtn.disabled = true;
        thirdRadBtn.checked = false;
    }
}

function submitOrderForm() {
    writeHiddenId();
    writeToDatabase()
}

function writeToDatabase() {
    let orderDetails = {};
    orderDetails.id = document.getElementById("idInput").value;
    orderDetails.fullName = document.getElementById("fullName").value;
    orderDetails.email = document.getElementById("email").value;
    orderDetails.laptopModel = document.getElementById("laptopModel").value;
    orderDetails.addRam = document.getElementById("checkBox").checked;
    if (orderDetails.addRam) {
        let rad = document.getElementsByName("radiobutton");
        rad.forEach(function (item) {
            if (item.checked) {
                orderDetails.ramValue = item.value;
            }
        });
    } else {
        orderDetails.ramValue = null;
    }
    orderDetails.comment = document.getElementById("comment").value;
    localStorage.setItem(getStorageLength(), JSON.stringify(orderDetails));
    reloadTab();
}

function reloadTab() {
    window.location.reload();
}

function cleanDatabase() {
    localStorage.clear();
}

document.getElementById("checkBox").addEventListener("click", showRadioBtn);

document.getElementById("orderForm").addEventListener("submit", submitOrderForm);

document.getElementById("cleanUp").addEventListener("click", cleanDatabase);