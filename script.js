// Fungsi untuk mengambil data dari server
function fetchData() {
    fetch('https://URL_SERVER/endpoint')  // Ganti dengan URL endpoint server Anda
        .then(response => response.json())
        .then(data => {
            document.getElementById('level-air').textContent = data.distance;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Ambil data setiap 5 detik
setInterval(fetchData, 5000);

// Ambil data pertama kali saat halaman dimuat
fetchData();
