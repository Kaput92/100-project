const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");
const password = document.getElementById("password");
const toast = document.getElementById("toast");

toast.classList.add("toast-hidden");

genBtn.addEventListener("click", genPassword);
copyBtn.addEventListener("click", copyPassword);

function genPassword() {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*| ()-_=+";

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(4, 15);
  let passwordValue = "";

  for (let i = 0; i < rndInt; i++) {
    passwordValue += chars[Math.floor(Math.random() * chars.length)];
  }

  password.value = passwordValue;
  return passwordValue;
}

async function copyPassword() {
  if (!password.value) {
    showToast("⚠️ Genera una password prima di copiare!", "error");
    return;
  }

  try {
    await navigator.clipboard.writeText(password.value);
    showToast("✅ Password copiata!", "success");
  } catch (err) {
    console.error("Errore durante la copia: ", err);
    try {
      password.select();
      document.execCommand("copy");
      showToast("⚠️ Password copiata (metodo legacy)", "warning");
    } catch (fallbackErr) {
      showToast("❌ Errore durante la copia", "error");
      console.error("Fallback failed:", fallbackErr);
    }
  }
}

function showToast(message, type = "success") {
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  
  toast.textContent = message;
  toast.className = "";
  toast.classList.add(`toast-${type}`, "toast-visible");
  
  toast.timeoutId = setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
  }, 1000);
}