// Toggle Menu
window.addEventListener("load",function(){
  var button = document.querySelector('.menu_toggle');
  var menu2 = document.querySelector('.hidden2');

  button.addEventListener('click', function(){
    menu2.classList.toggle('visible');
  });
});

// Stops Scrolling When In Menu
function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}

//products
let featuredGrid = document.querySelector(".featured_grid"); 
  for (let i = 0; i < 4; i++) {
    featuredGrid.innerHTML += '<div class="product_item"><img src="./assets/img/placeholder.png"><h4>Title 1</h4><div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon><ion-icon name="star-outline"></ion-icon></div><p>Price</p><a href="./product.php"><button>Buy Now</button></a></div>'
}
{/* <div class="feature_item">
      <img src="./assets/img/placeholder.png">
      <h4>Title 1</h4>
      <div class="stars">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-half"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>
      <p>Price</p>
      <a href="./product.php"><button>Buy Now</button></a>
    </div> */}


let productGrid = document.querySelector(".product_grid"); 
for (let i = 0; i < 12; i++) {
  productGrid.innerHTML += '<div class="product_item"><img src="./assets/img/placeholder.png"><h4>Title 1</h4><div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon><ion-icon name="star-outline"></ion-icon></div><p>Price</p><a href="./product.php"><button>Buy Now</button></a></div>'
}
{/* <div class="product_item">
      <img src="./assets/img/placeholder.png">
      <h4>Title 1</h4>
      <div class="stars">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-half"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>
      <p>Price</p>
      <button>Add To Cart</button>
    </div> */}