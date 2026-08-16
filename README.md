# Vibe Coding 概念與基礎操作

一組可重跑的 Codex／AI 協作練習資產，使用合成校務資料示範資料探索、描述性分析、文件化與安全檢查。資料與示範帳號均為虛構內容，不代表任何真實學生、教師、學校或政策結果。

## Contents

- `data/`：目前使用的 342 列、11 欄合成 CSV 與資料字典，涵蓋 2021–2026 學年度、6 個學院、19 個系所與 3 個招生管道。
- `prompts/`：問題定義、資料探索、分析報告與迭代練習 Prompt。
- `examples/`：可供對照的完成範例。
- `templates/`：Agent 規則、安全檢查與研究安全決策模板。
- `security-demo/`：只使用 fake key 與假資料的故意漏洞示範。

## Requirements

- Codex Desktop 或其他能讀寫本機檔案並執行命令的 Agent 工具。
- Python 3；只在啟動 `security-demo/` 的本機靜態伺服器時需要。
- 不需要安裝第三方套件即可使用資料、Prompt、模板與前端示範。

## Quick start

開啟專案後，先閱讀 [AGENTS.md](AGENTS.md) 與本 README，再依任務需要讀取資料字典、Prompt 或模板。若要查看安全示範頁面，可在專案根目錄執行：

```bash
python3 -m http.server 8000
```

接著開啟 <http://localhost:8000/security-demo/>。安全示範的操作限制與檔案說明見 [`security-demo/README.md`](security-demo/README.md)。

## Technology

- 文件：Markdown。
- 資料：CSV。
- 安全示範前端：原生 HTML、CSS 與 JavaScript ES modules。
- 本機伺服器：Python 3 標準函式庫。
- Agent 工作流：以 Codex 的專案指令、Prompt、模板與可重現驗證組成。

## Data and safety

- `data/ir_registration_synthetic.csv` 是唯讀的合成資料來源，不得替換成真實校務資料或修改原始內容。
- 不要加入真實姓名、學號、Email、手機、API key、密碼、token、mapping table 或正式環境設定。
- `security-demo/` 刻意包含前端秘密暴露、明文帳密、缺少授權與錯誤訊息暴露等漏洞，只能在本機做唯讀掃描、教學討論與修復練習，不得部署或連接真實服務。
- 分析結果只能描述目前合成資料中的觀察；不得直接推論為因果關係、真實政策證據或安全保證。

## Documentation

- [資料字典](data/data_dictionary.md)
- [Prompt 索引](prompts/README.md)
- [完成範例說明](examples/README.md)
- [模板目錄](templates/)
- [安全示範說明](security-demo/README.md)
