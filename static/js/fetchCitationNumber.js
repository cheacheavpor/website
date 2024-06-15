document.addEventListener('DOMContentLoaded', function() {
    fetchCitationNumber();
});

async function fetchCitationNumber() {
    try {
        const response = await fetch('https://scholar.google.com.au/citations?user=xmMITLoAAAAJ&hl=en'); // Replace with the actual URL
        const data = await response.json();
        document.getElementById('citation-number').textContent = data.citationNumber;
    } catch (error) {
        console.error('Error fetching citation number:', error);
    }
}
