function downloadCV() {
    const link = document.createElement('a');
    link.href = 'src/Resume.pdf'; // Replace with the actual path to your CV
    link.download = 'Maheswaran D CV.pdf'; // Set the filename for download (optional)
    link.style.display = 'none'; // Hide the link element
    document.body.appendChild(link);
    link.click(); // Simulate a click to trigger the download
    document.body.removeChild(link); // Remove the link
}