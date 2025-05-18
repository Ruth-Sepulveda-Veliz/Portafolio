<script>
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
  if(!validarFormulario()) {
    event.preventDefault();  // Evita enviar si hay errores
  }
});

document.getElementById('btnWhatsapp').addEventListener('click', function() {
  if (validarFormulario()) {
    enviarPorWhatsApp();
  }
});

function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const email = document.getElementById('email').value.trim();
  const producto = document.getElementById('producto').value;
  const direccion = document.getElementById('direccion').value.trim();

  if (nombre === '') {
    alert('Por favor ingresa tu nombre.');
    return false;
  }

  if (!/^[0-9]{9}$/.test(telefono)) {
    alert('El teléfono debe tener 9 dígitos (ejemplo: 912345678).');
    return false;
  }

  if (!validarEmail(email)) {
    alert('Por favor ingresa un correo válido.');
    return false;
  }

  if (producto === '') {
    alert('Por favor selecciona un producto.');
    return false;
  }

  if (direccion === '') {
    alert('Por favor ingresa la dirección de entrega.');
    return false;
  }

  return true;
}

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function enviarPorWhatsApp() {
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const email = document.getElementById('email').value.trim();
  const producto = document.getElementById('producto').value;
  const direccion = document.getElementById('direccion').value.trim();
  const comentarios = document.getElementById('comentarios').value.trim();

  let mensaje = `*Pedido de Gas - Xinxo Gas Colina*%0A`;
  mensaje += `👤 Nombre: ${nombre}%0A`;
  mensaje += `📱 Teléfono: +569${telefono}%0A`;
  mensaje += `✉️ Correo: ${email}%0A`;
  mensaje += `🛢️ Producto: ${producto}%0A`;
  mensaje += `🏡 Dirección: ${direccion}%0A`;
  if (comentarios !== '') {
    mensaje += `📝 Comentarios: ${comentarios}%0A`;
  }

  const numeroWhatsapp = "56953754622"; // Cambia por tu número (sin +)
  const url = `https://wa.me/${numeroWhatsapp}?text=${mensaje}`;
  window.open(url, '_blank');
}
</script>
