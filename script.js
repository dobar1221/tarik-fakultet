document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const messageDiv = document.getElementById('form-message');
  // Basic validation
  if (!name || !email || !phone || !service || !date || !time) {
    messageDiv.textContent = "Molimo popunite sva obavezna polja.";
    messageDiv.className = "error";
    return;
  }
  // Email validation
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    messageDiv.textContent = "Unesite ispravan email.";
    messageDiv.className = "error";
    return;
  }
  // Phone validation
  if (!/^[\d\s\-\+\(\)]{7,}$/.test(phone)) {
    messageDiv.textContent = "Unesite ispravan broj telefona.";
    messageDiv.className = "error";
    return;
  }
  // Date and time validation
  const now = new Date();
  const selectedDateTime = new Date(date + "T" + time);
  if (selectedDateTime < now) {
    messageDiv.textContent = "Odaberite budući datum i vrijeme za rezervaciju.";
    messageDiv.className = "error";
    return;
  }
  // Success
  messageDiv.textContent = "Rezervacija je poslana! Kontaktirat ćemo vas uskoro.";
  messageDiv.className = "success";
  document.getElementById('reservation-form').reset();
  setTimeout(() => {
    messageDiv.textContent = "";
    messageDiv.className = "";
  }, 5000);
});