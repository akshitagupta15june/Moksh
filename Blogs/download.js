async function generateAndDownloadPDF() {
    const content = document.querySelector(".blogDetails").innerText.trim();
    const name  = document.querySelector(".titleBlog").innerText.trim();

    const docDefinition = {
      content: [
        content,
      ],
    };

    pdfMake.createPdf(docDefinition).download(`${name}.pdf`);
  }