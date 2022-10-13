const productID = localStorage.getItem("productID");

console.log(productID);

// const deleteProduct = (id) => {
//   localStorage.removeItem(id);
// };

const productPageDiv = document.querySelector(".product_page");

fetch('https://63458eb1745bd0dbd36bb8f1.mockapi.io/products/' + productID)
  .then((res) => {
    return res.json();
  })
  .then((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const textDiv = document.createElement("div");
    textDiv.classList.add("product_text");
    const productID = item.id;
    const productName = item.name;
    const productPrice = item.price;
    const productLocation = item.location;
    const productImage = item.image_url;
    const productDescription = item.description;

    const heading = document.createElement("h1");
    heading.classList.add("productHeading");
    heading.innerHTML = productName;

    const price = document.createElement("p");
    price.classList.add("productPrice");
    price.innerHTML = productPrice;

    const description = document.createElement("p");
    description.classList.add("productDescription");
    description.innerHTML = productDescription;

    const location = document.createElement("p");
    location.classList.add("productLocation");
    location.innerHTML = productLocation;

    const image = document.createElement("img");
    image.classList.add("product_image");
    image.src = productImage;

    
    const deleteProductBtn = document.createElement("button");
    deleteProductBtn.classList.add("deleteBtn");
    deleteProductBtn.innerText = "Delete";

    deleteProductBtn.addEventListener("click", () => {
        fetch(
            "https://63458eb1745bd0dbd36bb8f1.mockapi.io/products/" + productID,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            showNotification();
          });

    const showNotification = () => {
        const notification = document.createElement("div");
        notification.classList.add("notification");
        notification.innerText = `Knyga sėkmingai ištrinta iš katalogo. Galite grįžti prie katalogo!`;
        productPageDiv.append(notification);

        setTimeout(() => {
          notification.remove();
        }, 3000);
      };
    });

    textDiv.append(heading, price, description, location);


    productDiv.appendChild(image);
    productDiv.appendChild(textDiv);
    productDiv.appendChild(deleteProductBtn);
    productPageDiv.appendChild(productDiv);
  });

