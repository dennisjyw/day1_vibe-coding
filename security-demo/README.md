# Codex Security 課堂示範專案

## 重要警告

本資料夾是故意包含漏洞的課堂示範，僅供唯讀掃描與修復討論使用。

- 只使用 fake key 與假資料。
- 不可部署。
- 不可連接真實 API。
- 不可把其中的模式複製到正式專案。
- 掃描範圍只限於本資料夾。

## 示範問題

1. `frontend-demo.js` 把單一 fake key 放在前端程式碼。
2. `demo-api-keys.js` 把多組 fake API key 打包進瀏覽器 JavaScript。
3. `demo-credentials.js` 將假帳號密碼以明文寫入 `localStorage`、`sessionStorage` 與 console。
4. `index.html` 將假帳密直接預填在頁面，且密碼欄位刻意使用明文顯示。
5. `backend-demo.py` 依賴前端傳入的 `student_id`，沒有真正檢查 authentication／authorization。
6. `backend-demo.py` 將例外訊息與本機路徑直接回傳給使用者。

## 執行前端 Demo

此頁面不需要安裝套件，也不會呼叫外部 API。因為使用 ES modules，請從專案根目錄啟動本機靜態伺服器：

```bash
python3 -m http.server 8000
```

再開啟 `http://localhost:8000/security-demo/`。操作「模擬不安全登入」後，可在瀏覽器 DevTools 的 Console 與 Application 分頁找到故意留下的假帳密。

## 建議教學流程

1. 先要求 Codex Security 進行唯讀 standard scan。
2. 要求回報檔案位置、證據、影響、觸發條件與 coverage。
3. 討論哪些 finding 是真問題，哪些需要人工判讀。
4. 修復 fake key、權限檢查與錯誤訊息。
5. 重新掃描並記錄未解決風險。

## 相關檔案

- `index.html`：可互動的故意不安全前端示範頁。
- `styles.css`：示範頁樣式，不含安全邏輯。
- `app.js`：串接兩個前端漏洞示範。
- `demo-api-keys.js`：故意暴露多組 fake API key。
- `demo-credentials.js`：故意硬編碼並明文紀錄假帳密。
- `frontend-demo.js`：故意暴露 fake key。
- `backend-demo.py`：故意缺少授權與錯誤訊息清理。
- `secure-version-notes.md`：修復方向，不是可直接部署的正式系統。
