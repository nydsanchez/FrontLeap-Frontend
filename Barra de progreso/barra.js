const pasos = document.querySelectorAll("span[data-step");
const progreso = document.querySelector("relleno");
const steps = pasos.length;

for (const item of pasos) {
  item.addEventListener("click", () => {
    const currentStep = parseInt(item.dataset.step);

    item.forEach((element) => {
      const num = parseInt(element.dataset.step);
      const li = element.parentElement;
      const titulo = li.querySelector("h4");

      if (num <= currentStep) {
        element.classList.add("activo");
        element.classList.remove("inactivo");
        titulo.classList.add("flash");
      } else {
        element.classList.remove("activo");
        element.classList.add("inactivo");
        titulo.classList.remove("flash");
      }
    });

    const porciento = (currentStep / steps) * 100;
    progreso.style.width = `${porciento}%`;
  });
}
