import { lookupCep } from "./api/viacep.js";
import { qs } from "./utils/dom.js";

const cepForm = qs("#cepForm");
const cepInput = qs("#cep");
const cepResult = qs("#cepResult");
const contactForm = qs("#contactForm");
const contactStatus = qs("#contactStatus");

function showStatus(el, msg, ok = true) {
  el.textContent = msg;
  el.className = ok ? "status status--ok" : "status status--error";
}

// --- CEP ---
if (cepForm) {
  cepForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const raw = cepInput.value.replace(/\D/g, "");
    cepResult.textContent = "🔎 Consultando…";
    try {
      const data = await lookupCep(raw);
      if (data.erro) {
        throw new Error("CEP não encontrado.");
      }
      cepResult.textContent = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    } catch (err) {
      cepResult.textContent = "❌ Erro: " + err.message;
    }
  });
}

// --- Formulário de Contato ---
if (contactForm) {
  contactForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formData = new FormData(contactForm);
    const submitBtn = qs("#contactBtn");
    submitBtn.disabled = true;
    showStatus(contactStatus, "📨 Enviando…", true);

    try {
      const resp = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!resp.ok) throw new Error("Falha no envio.");
      showStatus(contactStatus, "✅ Mensagem enviada com sucesso!");
      contactForm.reset();
    } catch (err) {
      showStatus(contactStatus, "❌ Erro: " + err.message, false);
    } finally {
      submitBtn.disabled = false;
    }
  });
}
