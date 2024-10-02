
function generarTabla() {
    const selectedNumber = document.getElementById('numero').value;
    const tablaResultado = document.getElementById('tablaResultado');
  
    if (selectedNumber >= 1 && selectedNumber <= 10) {
      let tablaHTML = '<table class="table"><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>';
  
      for (let i = 1; i <= 12; i++) {
        tablaHTML += `<tr><td>${selectedNumber} X ${i}</td><td>${selectedNumber * i}</td></tr>`;
      }
  
      tablaHTML += '</tbody></table>';
      tablaResultado.innerHTML = tablaHTML;
    } else {
      tablaResultado.innerHTML = '<p>Por favor, elige un número del 1 al 10.</p>';
    }
  }
  