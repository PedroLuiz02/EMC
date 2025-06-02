function BaixarPDF(){
    let conteudo = document.getElementById('rt2');
    let opt = {
      filename:     'cetificado.pdf',
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(conteudo).save();
}