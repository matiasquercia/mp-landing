import html2pdf from 'html2pdf.js';

/**
 * Genera un PDF de la página actual
 * Puede llamarse desde la consola del navegador o desde cualquier componente
 */
export function generatePDF() {
  // Seleccionar el contenido principal de la página
  const element = document.body;
  
  // Opciones de configuración para el PDF
  const options = {
    margin: [10, 10, 10, 10],
    filename: 'martin-pinto-propiedades.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  // Generar y descargar el PDF
  html2pdf().set(options).from(element).save();
}

// Hacer la función disponible globalmente para usarla desde la consola
if (typeof window !== 'undefined') {
  (window as any).generatePDF = generatePDF;
}
