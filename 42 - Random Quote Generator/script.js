const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document
  .getElementById("quoteOutput")
  .querySelector("span");
const authorOutput = document.getElementById("authorOutput");

async function getRandomQuote() {
  try {
    const response = await fetch("https://qapi.vercel.app/api/random");
    if (!response.ok) {
      throw new Error("Errore nella richiesta della citazione");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore:", error);
  }
}

async function updateQuote() {
  const quoteData = await getRandomQuote();
  if (quoteData) {
    quoteOutput.textContent = quoteData.quote;
    authorOutput.querySelector("small").textContent = `- ${quoteData.author} -`;

    quoteOutput.style.animation = "none";
    void quoteOutput.offsetWidth;
    quoteOutput.style.animation = null;
  }
}

generateQuoteBtn.addEventListener("click", updateQuote);

updateQuote();
