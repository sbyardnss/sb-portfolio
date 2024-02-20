export function downloadResume() {
    // window.open('/Stephen Byard Resume.pdf', '_blank');
    fetch('/Stephen_Byard_Resume.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a blob URL representing the PDF file
        const url = window.URL.createObjectURL(blob);
        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        // Set the download attribute of the link element
        link.setAttribute('download', 'Stephen_Byard_Resume.pdf');
        // Append the link to body
        document.body.appendChild(link);
        // Simulate click to start download
        link.click();
        // Remove the link from body
        document.body.removeChild(link);
    });
}