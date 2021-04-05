var ProductNameInput = document.getElementById("ProductNameInput");
var ProductPriceInput = document.getElementById("ProductPriceInput");
var ProductCategoryInput = document.getElementById("ProductCategoryInput");
var ProductDescInput = document.getElementById("ProductDescInput");
// var search=document.getElementById("")
var productlist;
var currentindex = 0;
var addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function () {
  if (addbtn.innerHTML == "add product") {
    addProduct();
  } else {
    saveupdate();
  }
});

// function validateProductName() {
//   if (Regex.test(ProductNameInput.value) == false) {
//     productNameInp.classList.add("is-invalid");
//     productNameInp.classList.remove("is-valid");

//     return false;
//   } else {
//     productNameInp.classList.add("is-valid");
//     productNameInp.classList.remove("is-invalid");

//     return true;
//   }
// }
// ProductNameInput.addEventListener("keyup", validateProductName);
function saveupdate() {
  var product = {
    ProductName: ProductNameInput.value,
    ProductPrice: ProductPriceInput.value,
    ProductCategory: ProductCategoryInput.value,
    ProductDesc: ProductDescInput.value,
  };
  productlist[currentindex] = product;
  localStorage.setItem("myproducts", JSON.stringify(productlist));
  display();
  addbtn.innerHTML = "add Product";
  addbtn.style.backgroundColor = "teal";
}
// console.log(typeof products);
if (localStorage.getItem("myproducts") == null) {
  productlist = [];
} else {
  productlist = JSON.parse(localStorage.getItem("myproducts"));
  // console.log(productlist);
  // console.log(typeof productlist);
  display();
}
function addProduct() {
  // console.log(typeof products);
  // if (validateProductName() == true) {
  var product = {
    ProductName: ProductNameInput.value,
    ProductPrice: ProductPriceInput.value,
    ProductCategory: ProductCategoryInput.value,
    ProductDesc: ProductDescInput.value,
  };
  productlist.push(product);
  localStorage.setItem("myproducts", JSON.stringify(productlist));
  display();
  clearform();
  // console.log(products);
  // }
}
function display() {
  var cartonaa = " ";
  for (var i = 0; i < productlist.length; i++) {
    cartonaa +=
      "<tr><td>" +
      productlist[i].ProductName +
      "</td><td>" +
      productlist[i].ProductPrice +
      "</td><td>" +
      productlist[i].ProductCategory +
      "</td><td>" +
      productlist[i].ProductDesc +
      "</td><td>" +
      `<button  class="btn btn-danger"  onclick=" updateproduct(${i})">update</button>` +
      "</td><td>" +
      `<button class="btn btn-primary"  onclick=" deleteproduct(${i})">delete</button>` +
      "</td></tr>";
  }
  document.getElementById("tableBody").innerHTML = cartonaa;
}
function search(x) {
  var contain = " ";
  var contain2 = " ";
  var newtxt = "";
  for (var i = 0; i < productlist.length; i++) {
    if (productlist[i].ProductName.includes(x.trim())) {
      // console.log(products[i].ProductName);
      //   products[i].ProductName.includes(x).style.color = "red";
      newtxt = productlist[i].ProductName.replace(
        x,
        '<span style= "color:red">' + x + "</span>"
      );
      contain +=
        "<tr><td>" +
        productlist[i].ProductName +
        "</td><td>" +
        productlist[i].ProductPrice +
        "</td><td>" +
        productlist[i].ProductCategory +
        "</td><td>" +
        productlist[i].ProductDesc +
        "</td></tr>";

      contain2 += "<p>" + newtxt + "</p>";
    }
  }
  document.getElementById("tableBody").innerHTML = contain;
  document.getElementById("searchbox").innerHTML = contain2;
}

function clearform() {
  ProductNameInput.value = " ";
  ProductPriceInput.value = " ";
  ProductCategoryInput.value = " ";
  ProductDescInput.value = " ";
}
function deleteproduct(index) {
  // for (var i = 0; i < productlist.length; i++) {
  productlist.splice(index, 1);
  // }
  localStorage.setItem("myproducts", JSON.stringify(productlist));
  display();
}
function updateproduct(index) {
  addbtn.innerHTML = "Update";
  currentindex = index;
  addbtn.style.backgroundColor = "gray";
  ProductNameInput.value = productlist[index].ProductName;
  ProductPriceInput.value = productlist[index].ProductPrice;
  ProductCategoryInput.value = productlist[index].ProductCategory;
  ProductDescInput.value = productlist[index].ProductDesc;
}
// localStorage.setItem("username", "heba");
