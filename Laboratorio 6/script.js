function showHelp(id) {
    document.getElementById(id).style.visibility = 'visible';
  }
  
  function hideHelp(id) {
    document.getElementById(id).style.visibility = 'hidden';
  }
  
  function validatePassword() {
    const pass = document.getElementById("password");
    const value = pass.value;
    const valid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
    pass.className = valid ? 'valid' : 'invalid';
    checkMatch();
  }
  
  function checkMatch() {
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const msg = document.getElementById("matchMsg");
    const submit = document.getElementById("submitBtn");
    const success = document.getElementById("successMessage");
  
    if (confirm.length > 0) {
      if (pass === confirm) {
        msg.textContent = "✔ Las contraseñas coinciden.";
        msg.style.color = "green";
        msg.style.visibility = "visible";
  
        if (document.getElementById("password").classList.contains("valid")) {
          submit.disabled = false;
          success.style.visibility = "visible";
          success.textContent = "✅ Contraseña válida y confirmada correctamente.";
        } else {
          success.style.visibility = "hidden";
        }
      } else {
        msg.textContent = "✘ Las contraseñas no coinciden.";
        msg.style.color = "red";
        msg.style.visibility = "visible";
        success.style.visibility = "hidden";
        submit.disabled = true;
      }
    } else {
      msg.style.visibility = "hidden";
      success.style.visibility = "hidden";
      submit.disabled = true;
    }
}