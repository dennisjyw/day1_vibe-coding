import { DEMO_CLIENT_SECRETS, DEMO_KEY_LABELS } from "./demo-api-keys.js";
import {
  clearRecordedCredentials,
  HARDCODED_DEMO_CREDENTIALS,
  recordCredentialsInPlaintext,
} from "./demo-credentials.js";

const loginForm = document.querySelector("#demo-login-form");
const clearButton = document.querySelector("#clear-demo-data");
const loginResult = document.querySelector("#login-result");
const inspectConfigButton = document.querySelector("#inspect-config");
const configResult = document.querySelector("#config-result");
const exposedKeyList = document.querySelector("#exposed-key-list");

function renderExposedKeys() {
  exposedKeyList.replaceChildren(
    ...Object.entries(DEMO_CLIENT_SECRETS).map(([name, value]) => {
      const row = document.createElement("div");
      const label = document.createElement("dt");
      const code = document.createElement("dd");

      label.textContent = DEMO_KEY_LABELS[name];
      code.textContent = value;
      row.append(label, code);

      return row;
    }),
  );
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const account = String(formData.get("account"));
  const password = String(formData.get("password"));
  const recorded = recordCredentialsInPlaintext(account, password);

  loginResult.textContent = `已用明文寫入 ${recorded.account} 的假帳密。請查看 DevTools。`;
  loginResult.dataset.state = "danger";
});

clearButton.addEventListener("click", () => {
  clearRecordedCredentials();
  loginForm.elements.account.value = HARDCODED_DEMO_CREDENTIALS.account;
  loginForm.elements.password.value = HARDCODED_DEMO_CREDENTIALS.password;
  loginResult.textContent = "已清除 localStorage 與 sessionStorage 內的課堂假資料。";
  delete loginResult.dataset.state;
});

inspectConfigButton.addEventListener("click", () => {
  // Intentionally unsafe: proves bundled client configuration is readable at runtime.
  console.warn("[INSECURE CLASSROOM DEMO] Exposed API keys:", DEMO_CLIENT_SECRETS);
  configResult.textContent = `瀏覽器已讀到 ${Object.keys(DEMO_CLIENT_SECRETS).length} 組假 API key。`;
  configResult.dataset.state = "danger";
});

renderExposedKeys();
