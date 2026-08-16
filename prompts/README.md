# Prompts 索引

## 使用方式

1. 講師先說明任務與驗收方式，不直接展示完成答案。
2. 學員只使用目前的合成資料 `data/ir_registration_synthetic.csv`（342 列、11 欄，涵蓋 2021–2026 學年度、6 個學院、19 個系所與 3 個招生管道）。
3. 依序完成四張練習卡，每一輪只處理一個主要目標。
4. AI 產出後，使用原始 CSV、資料字典與驗收清單人工檢查。
5. 完成後才對照 `examples/`，不可把範例當成本次執行證據。

## Prompt 四要素

本課統一使用（與 PDF P26 對齊；取代 PDF 簡報版 Goal／Context／Output／Boundaries）：

- **Context**：背景、資料、使用者與專案脈絡。
- **Task**：希望 AI 完成的明確任務。
- **Constraints**：格式、工具、資料、安全與不可做的事情。
- **Acceptance Criteria**：如何判斷輸出可接受。

四要素不一定要逐字成為標題，但 Prompt 必須交代完整。

## 練習順序

1. `01_problem_brief.md`：把註冊率變化改寫成可驗證問題，輸出 `problem-brief.md`。
2. `02_data_exploration.md`：探索 CSV 的欄位、筆數、缺失值與分組摘要。
3. `03_analysis_report.md`：產生有證據鏈與限制說明的 `analysis.md`。
4. `04_iteration_check.md`：使用 PDCA 逐輪檢查並修正 `analysis.md`。

## 課堂規則

- 不貼入真實校務資料。
- 不要求 AI 直接宣稱因果關係。
- 不修改原始 CSV。
- 不把 API key、密碼、token 或 mapping table 放進 Prompt。
- 不把第一次產出視為完成。
- 不捏造已執行的命令、統計數字、來源或掃描結果。
