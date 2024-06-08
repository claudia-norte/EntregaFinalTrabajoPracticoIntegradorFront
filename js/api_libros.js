document.addEventListener("DOMContentLoaded", function () {
    // Función para realizar la búsqueda de libros
    function searchBooks(terms) {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${terms}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Limpiar resultados anteriores
                document.getElementById('results').innerHTML = '';

                // Manejar los datos de la respuesta
                data.items.forEach(item => {
                    const title = item.volumeInfo.title;
                    const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author';
                    const thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '';
                    const publishedDate = item.volumeInfo.publishedDate;
                    const link = item.volumeInfo.previewLink;
                                    

                    // Crear elementos HTML para mostrar los resultados
                    const bookElement = document.createElement('div');
                    bookElement.innerHTML = `
                
                        
            
              <a href="${link}">
                    <div class="pelicula">
                    <img class="imgTendencia" src="${thumbnail}" alt="${title}"/img>
                    <div class="tituloPelicula">
                    <h4>${title}</h4> 
                    </div>
                    </div>
                </a>
                        
            `;
            
                    document.getElementById('results').appendChild(bookElement);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Event listener para el botón de búsqueda
    document.getElementById('searchButton').addEventListener('click', function () {
        const searchTerms = document.getElementById('searchInput').value.trim();
        if (searchTerms !== '') {
            searchBooks(searchTerms);
        } else {
            alert('Por favor, ingrese un término de búsqueda');
        }
    });
});