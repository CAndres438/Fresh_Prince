const catenedorCards = document.getElementById('catenedorCards');
const main = document.getElementById('main');



apiCategoria = 'https://viajes02.herokuapp.com/categorias';


document.addEventListener('DOMContentLoaded', () => {
    traerData(apiCategoria)
})

const traerData = async (api) => {
    const resp = await fetch(api);
    const data = await resp.json();

    mostrarCards(data);

}

const mostrarCards = async (data) => {
    catenedorCards.innerHTML = '';


    data.forEach(element => {
        const { images, nombre, precio, id } = element;

        const imagen1 = images[0]['imagen1']

        catenedorCards.innerHTML += `

        <div class="card">
                <img src="${imagen1}" id="${id}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <strong>
                        <p class="card-text">$${precio}</p>
                    </strong>
                </div>
            </div>
        `
    });
}

main.addEventListener('click', (e) => {
    e.preventDefault()
    const btn = e.target.classList.contains('card-img-top')
    const id = e.target.id;

    if (btn) {

        localStorage.setItem('ID', id);
        window.location.href = 'detail.html'
    }
})