function readFromDatabase() {
    showTableSkeleton();
    Object.values(localStorage).forEach(function (item) {
        showOrder(JSON.parse(item));
    });
    console.log(localStorage.getItem("0"));
    showUlSkeleton();
    Object.values(localStorage).forEach(function (item) {
        showCustomerList(JSON.parse(item));
    });
}

if (Object.keys(localStorage).length){
    readFromDatabase();
} else {
    showErrMsg();
}

function showErrMsg() {
    let tableContainer = document.getElementById("Article");

    let errMsg = document.createElement("div");
    errMsg.className = "err-msg"
    errMsg.innerHTML = "Nothing Found";
    tableContainer.appendChild(errMsg);
}

function showTableSkeleton() {
    let tableContainer = document.getElementById("Article");

    let title = document.createElement("h1");
    title.className = "order-title";
    tableContainer.appendChild(title);

    let table = document.createElement("table");
    table.className = "table-article";
    table.id = "tableArticle";
    tableContainer.appendChild(table);

    let idTd = document.createElement("th");
    idTd.innerHTML = "ID";
    table.appendChild(idTd);

    let fullNameTd = document.createElement("th");
    fullNameTd.innerHTML = "Full name";
    table.appendChild(fullNameTd);

    let emailTd = document.createElement("th");
    emailTd.innerHTML = "E-mail";
    table.appendChild(emailTd);

    let laptopModelTd = document.createElement("th");
    laptopModelTd.innerHTML = "Laptop model";
    table.appendChild(laptopModelTd);

    let addRamTd = document.createElement("th");
    addRamTd.innerHTML = "Adding RAM";
    table.appendChild(addRamTd);

    let ramValueTd = document.createElement("th");
    ramValueTd.innerHTML = "RAM value";
    table.appendChild(ramValueTd);

    let commentTd = document.createElement("th");
    commentTd.innerHTML = "Comments";
    table.appendChild(commentTd);

}

function showOrder(orderDetails) {
    let table = document.getElementById("tableArticle")

    table.appendChild(document.createElement("tr"));

    let idTd = document.createElement("td");
    idTd.innerHTML = orderDetails.id;
    table.appendChild(idTd);

    let fullNameTd = document.createElement("td");
    fullNameTd.innerHTML = orderDetails.fullName;
    table.appendChild(fullNameTd);

    let emailTd = document.createElement("td");
    emailTd.innerHTML = orderDetails.email;
    table.appendChild(emailTd);

    let laptopModelTd = document.createElement("td");
    laptopModelTd.innerHTML = orderDetails.laptopModel;
    table.appendChild(laptopModelTd);

    let addRamTd = document.createElement("td");
    if (orderDetails.addRam){
        addRamTd.innerHTML = "+";
    } else {
        addRamTd.innerHTML = "-";
    }
    table.appendChild(addRamTd);

    let ramValueTd = document.createElement("td");
    if (orderDetails.ramValue) {
        ramValueTd.innerHTML = orderDetails.ramValue;
    }
    table.appendChild(ramValueTd);

    let commentTd = document.createElement("td");
    commentTd.innerHTML = orderDetails.comment;
    table.appendChild(commentTd);
}

function showUlSkeleton() {
    let tableContainer = document.getElementById("Article");
    tableContainer.style.display = "block";

    let customerListTitle = document.createElement("h3");
    customerListTitle.innerHTML = "Customer list";
    customerListTitle.className = "customer-list";
    tableContainer.appendChild(customerListTitle);

    let customerList = document.createElement("ol");
    customerList.id = "customerList";
    tableContainer.appendChild(customerList);
}

function showCustomerList(orderDetails) {

    let customerList = document.getElementById("customerList");

    let listItem = document.createElement("li");
    listItem.innerHTML = orderDetails.fullName;
    customerList.appendChild(listItem);
}

if (document.getElementById("closeTab")) {
    document.getElementById("closeTab").addEventListener("click", function () {
        window.close();
    })
}