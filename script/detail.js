const main = document.getElementById('main');

let productos = []

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

            let product = {
                nombre : nombre,
                imagen: imagen1,
                precio: precio,
                cantidad: 1

            }

            productos.push(product);

            localStorage.setItem('producto', JSON.stringify(product))

            

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
                            <button id="ADD" class="add" data-bs-toggle="modal" data-bs-target="#exampleModal">
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



let btnAdd = document.querySelector('#main');

console.log(btnAdd);

btnAdd.addEventListener('click', (e)=>{
    modal()
})


const modal = () => {

    let traerDatos = JSON.parse(localStorage.getItem('producto'));
    console.log(traerDatos);

    let modalBody = document.getElementById('modal-body')

    modalBody.innerHTML = ''
    modalBody.innerHTML += `
        <div class="modalito">
            <div>
                <img src="${traerDatos.imagen}">
            </div>
            
            <div class="textModal">
                <strong><p>${traerDatos.nombre}</p></strong>
                <strong><p>$${traerDatos.precio}</p></strong>
                <strong><p>${traerDatos.cantidad}</p></strong>

                <button class="btn btn-danger">Eliminar</<button>
            </div>
        </div>
    
     `
    

    
}

