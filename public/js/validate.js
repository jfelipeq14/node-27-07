window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const $ = (selector) => document.querySelector(selector);
  const $form = $("#form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      codigo_reserva,
      nombre_cabana,
      fecha_inicio,
      fecha_fin,
      cantidad_dias,
      alimentacion,
      precio_por_dia,
      precio_total,
    } = $form;

    if (
      parseInt(codigo_reserva) !== 0 &&
      nombre_cabana !== "" &&
      new Date(fecha_inicio) !== "" &&
      new Date(fecha_fin) !== "" &&
      cantidad_dias !== "" &&
      alimentacion !== "" &&
      precio_por_dia !== "" &&
      precio_total !== ""
    ) {
      if (fecha_inicio.value > fecha_fin.value) {
        alert("Fecha incorrecta");
        fecha_fin.focus();
        return;
      }

      cantidad_dias.value =
        new Date(fecha_fin.value).getDate() -
        new Date(fecha_inicio.value).getDate();

      precio_total.value =
        parseInt(cantidad_dias.value) * parseInt(precio_por_dia.value);

      // crear un objeto con todos los valores
      const data = {
        codigo_reserva: codigo_reserva.value,
        nombre_cabana: nombre_cabana.value,
        fecha_inicio: fecha_inicio.value,
        fecha_fin: fecha_fin.value,
        cantidad_dias: cantidad_dias.value,
        alimentacion: alimentacion.value,
        precio_por_dia: precio_por_dia.value,
        precio_total: precio_total.value,
      };
      console.log(data);
    } else {
      alert("Todos los campos son requeridos");
    }
  });
});
