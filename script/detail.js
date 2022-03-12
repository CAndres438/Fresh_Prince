const main = document.getElementById('main');

let api = 'https://viajes02.herokuapp.com/categorias';

let idLocal = JSON.parse(localStorage.getItem('ID'));

console.log(idLocal);

document.addEventListener('DOMContentLoaded', (e) => {
    mostrarInfo(api);
})

const mostrarInfo = async (api) => {
    const resp = await fetch(api);
    const data = await resp.json();

    main.innerHTML = '';

    data.forEach(element => {

        const { images, nombre, id, precio, descripción } = element;

        const imagen1 = images[0]['imagen1'];
        const imagen2 = images[1]['imagen2'];
        const imagen3 = images[2]['imagen3'];

        if (element.id == idLocal) {

            main.innerHTML += `
            <div class="container-fluid" id="containerDetail">
                <div class="row">
                    <div class="col-2">

                        <img src="${imagen1}">

                        <img src="${imagen2}">

                        <img src="${imagen3}">


                    </div>

                    <div class="col-6">
                        <img src="${imagen1}">
                        <img src="${imagen2}">
                        <img src="${imagen3}">

                    </div>

                    <div class="col-4">
                        <h1>${nombre}</h1>
                        <p>$${precio}</p>
                        <h4>Size</h4>
                        <form>
                            <input type="button" name="talla" value="s" id="s" class="btnTalla">
                            <input type="button" name="talla" value="m" id="m" class="btnTalla">
                            <input type="button" name="talla" value="l" id="l" class="btnTalla">
                            <input type="button" name="talla" value="xl" id="xl" class="btnTalla">
                            <input type="button" name="talla" value="xll" id="xll" class="btnTalla">
                        </form>

                        <div class="btnCar">
                            <button class="add">
                                ADD TO CART
                            </button> <br>

                            <button class="buy">
                                BUY IT NOW
                            </button>
                        </div>

                        <div class="description">
                            <p>${descripción}</p>
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    });

}