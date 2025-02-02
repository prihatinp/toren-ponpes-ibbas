// Konfigurasi Firebase

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyATciWiVmXo74a-dzLmz-ZylpQ1hK_qAmk",
    authDomain: "monitoring-toren.firebaseapp.com",
    projectId: "monitoring-toren",
    storageBucket: "monitoring-toren.firebasestorage.app",
    messagingSenderId: "385578729455",
    appId: "1:385578729455:web:edb306ecc8b022e1a1c01a"
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
