# 安全修復方向

這份文件只用於講師講解，不是正式可部署的後端實作。

## 問題一：前端 fake key

- 前端程式碼、瀏覽器 bundle 與 Network 都可能被使用者查看。
- 任何需要保密的 key 都不能放在前端。
- 正式做法是把第三方服務呼叫移到後端，並透過受控的環境變數或金鑰管理服務管理秘密。
- 課堂示範只需要移除 fake key，不需要連接真實服務。

## 問題二：前端明文帳密

- 不把密碼硬編碼或預填在 HTML／JavaScript。
- 不把密碼寫入 `localStorage`、`sessionStorage`、console、analytics 或錯誤回報工具。
- 密碼輸入欄位使用 `type="password"`，但這只避免畫面直接顯示，不能取代正確的憑證處理。
- 正式登入應透過 HTTPS 傳給受控後端驗證；前端只保留必要且短效的 session 狀態。

## 問題三：缺少 authentication／authorization

- Authentication：確認呼叫者是誰。
- Authorization：確認呼叫者是否有權查看指定資料。
- 不能只相信前端傳來的 `student_id`。
- 正式系統要由後端依登入身分與權限重新判斷。

## 問題四：錯誤訊息暴露內部資訊

- 對外只回傳一般化錯誤訊息。
- 詳細例外寫入受控的內部 log。
- 不把本機路徑、資料庫錯誤、內部服務名稱或設定值回傳給使用者。

## 重掃要求

修復後重新執行掃描，記錄：

- finding 是否消失。
- 是否仍有 coverage 缺口。
- 是否有新的 finding。
- 未解決風險與人工檢查項目。
