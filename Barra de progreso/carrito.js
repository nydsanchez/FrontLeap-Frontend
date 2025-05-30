const btAdd = document.querySelectorAll("button[data-btn]");
const tbody = document.querySelector(".carrito tbody");

const compras = {};

btAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const span = item.querySelector("span[data-id]");

    // Validamos que exista el span
    if (!span) return;

    const id = span.dataset.id; // ID único (ej. "rice2k")
    const nombre = span.textContent.trim(); // Nombre visible (ej. "Arroz")

    // Si el producto no está en el carrito, lo agregamos
    if (!compras[id]) {
      compras[id] = { nombre: nombre, cantidad: 1 };
    } else {
      compras[id].cantidad++;
    }

    actualizarTabla();
  });
});

function actualizarTabla() {
  tbody.innerHTML = "";

  for (const id in compras) {
    const producto = compras[id];
    //const cantidad = compras[producto];
    console.log(compras[id]);
    const tr = document.createElement("tr");

    const tdCodigo = document.createElement("td");
    tdCodigo.textContent = compras[id];

    const tdNombre = document.createElement("td");
    tdNombre.textContent = producto.nombre;

    const tdCantidad = document.createElement("td");
    tdCantidad.textContent = producto.cantidad;

    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tr.appendChild(tdCantidad);

    tbody.appendChild(tr);
  }
}
