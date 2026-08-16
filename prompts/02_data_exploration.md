# 練習 2：資料探索

## 可直接貼入 Codex 的 Prompt

```text
Context
先閱讀 data/data_dictionary.md，再讀取 data/ir_registration_synthetic.csv。

Task
1. 產生資料探索摘要，包含檔案路徑、資料列數與欄位數、每個欄位的型別與意義、
2. 缺失值、完全重複列、`學年度＋系所＋招生管道`（對應 `academic_year＋department＋admission_channel`）組合鍵重複、
3. 各年度／系所／招生管道的筆數與加總，以及可能的資料品質問題。
4. 同時檢查 `報名人數（applicants）≥ 錄取人數（admitted）≥ 報到人數（reported）≥ 註冊人數（registered）`、`休學人數（leave_count）≤ 註冊人數（registered）`，以及比率分母是否為 0。

Constraints
- 不修改原始 CSV。
- 不建立或推測真實個資。
- 不把合成資料描述成真實校務結果。
- 若資料定義不足，列出問題，不自行捏造定義。
- 必須說明實際使用的讀取或計算方式。

Acceptance Criteria
- 資料列數、欄位數、欄位名稱與資料字典一致。
- 缺失值、重複與人數邏輯都有檢查。
- 結果可回溯到原始欄位與實際計算。
- 清楚列出資料品質限制與尚未驗證項目。
```

## 人工驗收

- 筆數、欄位數與欄位意義正確
- 有檢查缺失值、重複與分母為 0
- 有檢查 `applicants ≥ admitted ≥ reported ≥ registered`
- 有列出資料限制
- 沒有只引用 `examples/` 而未讀取 CSV
