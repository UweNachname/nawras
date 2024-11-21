function esWurdeGeklickt(wert) {
    document.getElementById('demo').innerHTML = Date();
    alert('Hallo Nawras: ' + wert);
}

// Funktion, die eine Nachricht anzeigt
function zeigeNachricht() {
    alert("Willkommen auf meiner Webseite!");
}

// Event hinzufügen
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("meinButton");
    button.addEventListener("click", zeigeNachricht);
});

function neueNachricht(wert){
    document.getElementById('demo').innerHTML = Date ()
    alert('Das ist eine neue Website!'+ wert);
}

function updateInfo() {
    // Ändert den Inhalt des <p>-Tags mit der id "info"
    document.getElementById("info").textContent = "Hier ist mehr Information über mich!";
}


function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}



// JavaScript-Funktion für Formularüberprüfung => Wichtig nachfragen , wichtiger Teil!!!
document.getElementById("kontaktForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Standard-Absenden

    // Überprüfen, ob die Zustimmung angekreuzt ist
    if (!document.getElementById("zustimmung").checked) {
        alert("Bitte stimmen Sie den Bedingungen zu.");
        return;
    }

    // Falls alle Bedingungen erfüllt sind, zeigt eine Meldung an
    alert("Vielen Dank! Ihr Formular wurde erfolgreich abgesendet.");
    this.reset(); // Formular zurücksetzen
});
