document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        const detailsContainer = document.getElementById('detalle-container');
        const detailsUrl = `./js/productos.json`; // Ruta al archivo detalle.json

        fetch(detailsUrl)
            .then(response => response.json())
            .then(data => {
                const producto = data.find(item => item.id === id);

                if (producto) {
                    const detailsHTML = `
                    <div class="producto-img">
                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <h2>${producto.titulo}</h2>
                    <p>${producto.detalle}</p>
                    <p class="precio">Precio: ${producto.precio}</p></div>`;
                    
                    detailsContainer.innerHTML = detailsHTML;
                } else {
                    detailsContainer.innerHTML = "<p>Producto no encontrado</p>";
                }
            })
            .catch(error => console.error('Error:', error));
    }
});