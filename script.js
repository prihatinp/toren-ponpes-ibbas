// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fungsi untuk update status sensor
function updateStatus(sensorId, status) {
    const statusElement = document.getElementById(`${sensorId}-status`);
    const indicator = statusElement.nextElementSibling;

    statusElement.textContent = status;
    indicator.className = `status-indicator ${status.toLowerCase()}`;
}

// Listen untuk perubahan data di Firebase
database.ref('/').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Update TORN 1
        updateStatus('t1a', data.toren1.atas);
        updateStatus('t1b', data.toren1.bawah);

        // Update TORN 2
        updateStatus('t2a', data.toren2.atas);
        updateStatus('t2b', data.toren2.bawah);
    }
});
