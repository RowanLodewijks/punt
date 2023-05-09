<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nike Site</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" type="image/x-icon" href="./assets/img/logo.png">
  <script src="./assets/js/script.js" defer></script>
  <!-- Icons Link -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <!-- Font Awesome Link -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />

 
</head>

<body>
  <?php include 'header.php';?>

  <section class="section2">
    <div class="container">
      <p>Meeting the<br> unexpected:<br> Mercedes-Benz x<br> SUPERPLASTIC.<br> <span>Two worlds unite.</span></p>
      <a href="./product.php">
        <button class="section2_button">Discover More</button>
      </a>
    </div>
  </section>

  <section class="section3">
    <div class="container">
      <h2>Featured Products</h2>
      <div class="featured_grid"></div>
    </div>
  </section>

  <section class="section4">
    <div class="container">
    <h2>Products</h2>
      <div class="product_grid"></div>
    </div>
  </section>

  <?php include 'footer.php';?>
  
</body>

</html>