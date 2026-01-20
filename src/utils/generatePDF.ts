import html2pdf from 'html2pdf.js';

/**
 * Genera un PDF de la página actual sin botones ni elementos interactivos
 * Puede llamarse desde la consola del navegador o desde cualquier componente
 */
export function generatePDF() {
  // Ocultar elementos que no deben aparecer en el PDF
  const buttons = document.querySelectorAll('button, a[role="button"], [onclick]');
  const header = document.querySelector('header, [id*="header"], nav');
  const whatsappButton = document.querySelector('[id*="whatsapp"], [id*="WhatsApp"]');
  const navigationArrows = document.querySelectorAll('[class*="chevron"], [class*="arrow"]');
  
  // Guardar estados originales
  const originalStyles: { element: Element; display: string }[] = [];
  
  const hideElements = (elements: NodeListOf<Element>) => {
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      originalStyles.push({ 
        element: el, 
        display: htmlEl.style.display || window.getComputedStyle(htmlEl).display 
      });
      htmlEl.style.display = 'none';
    });
  };
  
  // Ocultar todos los elementos
  hideElements(buttons);
  if (header) hideElements([header] as any);
  if (whatsappButton) hideElements([whatsappButton] as any);
  hideElements(navigationArrows);
  
  // Seleccionar el contenido principal de la página
  const pageElement = document.body;
  
  // Opciones de configuración para el PDF
  const options = {
    margin: [10, 10, 10, 10],
    filename: 'martin-pinto-propiedades.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true,
      ignoreElements: (el: Element) => {
        // Ignorar elementos interactivos adicionales
        return el.tagName === 'BUTTON' || 
               el.tagName === 'A' || 
               el.hasAttribute('onclick') ||
               el.classList.contains('cursor-pointer');
      }
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  // Generar y descargar el PDF
  html2pdf()
    .set(options)
    .from(pageElement)
    .save()
    .then(() => {
      // Restaurar estados originales después de generar el PDF
      originalStyles.forEach(({ element, display }) => {
        (element as HTMLElement).style.display = display;
      });
    })
    .catch((error: Error) => {
      // Restaurar estados incluso si hay error
      originalStyles.forEach(({ element, display }) => {
        (element as HTMLElement).style.display = display;
      });
      console.error('Error al generar PDF:', error);
    });
}

// Hacer la función disponible globalmente para usarla desde la consola
declare global {
  interface Window {
    generatePDF: () => void;
  }
}

if (typeof window !== 'undefined') {
  window.generatePDF = generatePDF;
}
