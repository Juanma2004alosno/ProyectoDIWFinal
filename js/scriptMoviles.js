//Productos
var productosInformatica = [
    { id: 1, nombre: "Producto 1", precio: 1200.99, imagen: "img/moviles/producto1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 800.99, imagen: "img/moviles/producto2.jpg" },
    { id: 3, nombre: "Producto 3", precio: 200.45, imagen: "img/moviles/producto3.jpg" },
    { id: 4, nombre: "Producto 4", precio: 1200.99, imagen: "img/moviles/producto4.jpg" },
    { id: 5, nombre: "Producto 5", precio: 600.99, imagen: "img/moviles/producto5.jpg" },
    { id: 6, nombre: "Producto 6", precio: 234.99, imagen: "img/moviles/producto6.jpg" },
    { id: 1, nombre: "Producto 7", precio: 500.99, imagen: "img/moviles/producto7.jpg" },
    { id: 2, nombre: "Producto 8", precio: 780.99, imagen: "img/moviles/producto8.jpg" },
    { id: 3, nombre: "Producto 9", precio: 732.99, imagen: "img/moviles/producto9.jpg" },
    { id: 4, nombre: "Producto 10", precio: 122.99, imagen: "img/moviles/producto10.jpg" },
    { id: 5, nombre: "Producto 11", precio: 333.99, imagen: "img/moviles/producto11.jpg" },
    { id: 6, nombre: "Producto 12", precio: 323.99, imagen: "img/moviles/producto12.jpg" }
  ];
  
  // Función para generar la lista de productos
  function generarProductos() {
    var container = document.getElementById("productContainer");
  
    productosInformatica.forEach(function(producto) {
      var col = document.createElement("div");
      col.className = "col-md-4 mb-4";
  
      var card = document.createElement("div");
      card.className = "card";
  
      var img = document.createElement("img");
      img.className = "card-img-top";
      img.src = producto.imagen;
      img.alt = producto.nombre;
  
      var cardBody = document.createElement("div");
      cardBody.className = "card-body";
  
      var title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = producto.nombre;
  
      var price = document.createElement("p");
      price.className = "card-text";
      price.textContent = "Precio: $" + producto.precio;
  
      var button = document.createElement("button");
      button.className = "btn btn-primary btn-add-to-cart";
      button.textContent = "Agregar al carrito";
      button.dataset.id = producto.id;
  
      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(button);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      container.appendChild(col);
    });
  }
  
  // Llama a la función para generar los productos
  document.addEventListener("DOMContentLoaded", function() {
    generarProductos();
  });
  
  // Función para agregar al carrito
  $(document).on("click", ".btn-add-to-cart", function() {
    var productId = $(this).data("id");
    // Logica para añadir productos al carrito
    console.log("Producto agregado al carrito con ID:", productId);
  });
  