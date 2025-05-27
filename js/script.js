// Warten bis DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
  const spiele = document.querySelectorAll(".spiel .ergebnis[contenteditable='true']");
  const saveBtn = document.getElementById("save-results");
  const resetBtn = document.getElementById("reset-results");

  // Funktion: Lade gespeicherte Ergebnisse aus localStorage
  function ladeErgebnisse() {
    spiele.forEach((spiel, index) => {
      const key = `spiel-ergebnis-${index}`;
      const gespeichert = localStorage.getItem(key);
      if (gespeichert !== null) {
        spiel.textContent = gespeichert;
      }
    });
  }

  // Funktion: Speichere aktuelle Ergebnisse in localStorage
  function speichereErgebnisse() {
    spiele.forEach((spiel, index) => {
      const key = `spiel-ergebnis-${index}`;
      const wert = spiel.textContent.trim();
      localStorage.setItem(key, wert);
    });
    alert("Ergebnisse wurden gespeichert!");
  }

  // Funktion: Alle Ergebnisse zurücksetzen
  function resetErgebnisse() {
    if (confirm("Möchtest du wirklich alle Ergebnisse löschen?")) {
      spiele.forEach((spiel, index) => {
        spiel.textContent = "";
        localStorage.removeItem(`spiel-ergebnis-${index}`);
      });
      alert("Alle Ergebnisse wurden gelöscht!");
    }
  }

  // Eventlistener für Speichern Button
  if (saveBtn) {
    saveBtn.addEventListener("click", speichereErgebnisse);
  }

  // Eventlistener für Reset Button
  if (resetBtn) {
    resetBtn.addEventListener("click", resetErgebnisse);
  }

  // Ergebnisse direkt beim Laden setzen
  ladeErgebnisse();
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const btnAccept = document.getElementById("accept-cookies");

  // Prüfen, ob Cookie bereits akzeptiert wurde
  if (!localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "block";
  }

  btnAccept.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
});
