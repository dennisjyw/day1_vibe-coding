// CLASSROOM-ONLY INSECURE EXAMPLE
// These credentials are fake. This module intentionally demonstrates unsafe handling.

export const HARDCODED_DEMO_CREDENTIALS = Object.freeze({
  account: "student.demo@tair.example",
  password: "FAKE-Plaintext-Password-2026",
});

export function recordCredentialsInPlaintext(account, password) {
  const plaintextCredentials = {
    account,
    password,
    recordedAt: new Date().toISOString(),
  };

  // Intentionally unsafe: localStorage persists readable plaintext credentials.
  localStorage.setItem(
    "tair-demo-plaintext-credentials",
    JSON.stringify(plaintextCredentials),
  );

  // Intentionally unsafe: sessionStorage is still readable by browser-side scripts.
  sessionStorage.setItem("tair-demo-account", account);
  sessionStorage.setItem("tair-demo-password", password);

  // Intentionally unsafe: credentials can leak through logs and screen sharing.
  console.warn("[INSECURE CLASSROOM DEMO] Plaintext credentials:", {
    account,
    password,
  });

  return plaintextCredentials;
}

export function clearRecordedCredentials() {
  localStorage.removeItem("tair-demo-plaintext-credentials");
  sessionStorage.removeItem("tair-demo-account");
  sessionStorage.removeItem("tair-demo-password");
}
