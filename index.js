
const endpoint = 'https://63458eb1745bd0dbd36bb8f1.mockapi.io/products?orderBy=price&order=asc';

const productContainer = document.querySelector(".product-container");

fetch(endpoint)
  .then((response) => response.json())
  .then((res) => {
    res.forEach((item) => {
      console.log(item)

      const productDiv = document.createElement("div");
      productDiv.classList.add("product_card");

      const textDiv = document.createElement("div");
      textDiv.classList.add("product_text");

      const productID = item.id;
      const productName = item.name;
      const productPrice = `${item.price}` + ` €`;
      const productLocation = item.location;
      const productImage = item.image_url;

      const viewProductBtn = document.createElement("a");
      viewProductBtn.innerText = "Daugiau";
      viewProductBtn.href = "./pages/product.html";
      viewProductBtn.classList.add("ProductBtn");

      viewProductBtn.addEventListener("click", () => {
        localStorage.setItem("productID", productID);
        console.log(productID);
      });

      const heading = document.createElement("h1");
      heading.classList.add("textDivHeading");
      heading.innerHTML = productName;

      const price = document.createElement("p");
      price.classList.add("textDivPrice");
      price.innerHTML = productPrice;

      const location = document.createElement("p");
      location.classList.add("textDivLocation");
      location.innerHTML = productLocation;

      const image = document.createElement("img");
      image.classList.add("product_image");
      image.src = productImage;

      textDiv.append(heading, price, location, viewProductBtn);

      productDiv.appendChild(image);
      productDiv.appendChild(textDiv);

      productContainer.appendChild(productDiv);

    });
  });