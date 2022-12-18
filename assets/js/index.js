// Inicializar variables de DOM
const $room = document.querySelector("#room");
const $from = document.querySelector("#from");
const $to = document.querySelector("#to");
const $total = document.querySelector("#total");
const $realstateproperty = document.querySelector("#realstateproperty");

const search = () => {

  //Inicializar valores para operar
  let result = "";
  let count = 0;
  let room = Number($room.value);
  let from = Number($from.value);
  let to = Number($to.value);

  // Descartar campos vacios en formulario
  if (!room || !from || !to) {
    return alert("Faltan campos por llenar")
  }

  // Iterar arreglo de objetos en ./assets/js/data.js
  for (let item of data) {

    if (room === item.cuartos && from <= item.metros && to >= item.metros) {

      // Concatenar nuevo elemento
      result += ` 
                <div class="propiedad">
                  <div class="img" style="background-image: url('${item.src}')"></div>
                  <section>
                    <h5>${item.nombre}</h5>
                      <div class="d-flex justify-content-between">
                        <p>Cuartos: ${item.cuartos}</p>
                        <p>Metros: ${item.metros}</p>
                      </div>
                    <p class="my-3">${item.descripcion}</p>
                    <button class="btn btn-info ">Ver más</button>
                  </section>
                </div>
                `
      // Sumar al total
      count++

    }

    // Insertar valores procesados en HTML
    $realstateproperty.innerHTML = result
    $total.innerHTML = count

  }
}

// Cargar todos los items al iniciar <body onload="allItems()">
const allItems = () => {

  //Inicializar valores para operar
  let result = ""
  let count = 0;

  // Iterar arreglo de objetos en ./assets/js/data.js
  for (let item of data) {

    // Concatenar nuevo elemento
    result += ` 
                <div class="propiedad">
                  <div class="img" style="background-image: url('${item.src}')"></div>
                  <section>
                    <h5>${item.nombre}</h5>
                      <div class="d-flex justify-content-between">
                        <p>Cuartos: ${item.cuartos}</p>
                        <p>Metros: ${item.metros}</p>
                      </div>
                    <p class="my-3">${item.descripcion}</p>
                    <button class="btn btn-info ">Ver más</button>
                  </section>
                </div>
                `
    // Sumar al total
    count++
  }
  // Insertar valores procesados en HTML
  $realstateproperty.innerHTML = result
  $total.innerHTML = count

}