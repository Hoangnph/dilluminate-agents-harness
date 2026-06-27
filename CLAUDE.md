# CLAUDE.md — AI Agent Harness Training Website

> **Design System:** Xem `DESIGN.md` tại project root cho YAML tokens và prose rationale (google-labs-code/design.md format).

## Thiết kế dựa trên nghiên cứu (Evidence-Based Educational Web Design)

Các quy tắc dưới đây được tổng hợp từ nghiên cứu về Cognitive Load Theory, UX design của Brilliant.org, Stripe Docs, Khan Academy, và các platform e-learning hàng đầu. **Mọi module mới phải tuân thủ tất cả quy tắc này.**

---

## 1. KIẾN TRÚC NỘI DUNG (Cognitive Load)

### 1.1 Chunking — Chia nhỏ nội dung
- Mỗi lesson section = 1 khái niệm chính, không quá 3 sub-sections (h3)
- Mỗi sub-section không quá 5–7 paragraphs
- Thêm `<hr class="lesson-divider">` giữa các phần dài để "thở"
- Mỗi lesson bắt đầu bằng `.learning-objective` box — liệt kê 3–4 mục tiêu học rõ ràng

### 1.2 Progressive Disclosure — Tiết lộ dần
- Dùng `.expand-section` cho nội dung nâng cao/optional, không hiển thị mặc định
- Quy tắc: thông tin cần thiết cho 80% người học → hiển thị ngay; còn lại → trong `.expand-section`
- Label rõ: "📖 Tìm hiểu thêm: [tên nội dung]" để người học biết họ đang bỏ qua gì

### 1.3 Worked Examples — Ví dụ trước, bài tập sau
- Luôn dùng FinTech Corp / LoanBot làm ví dụ xuyên suốt
- Cấu trúc: **Lý thuyết → Ví dụ LoanBot → Concept Check → Ứng dụng**
- Sau mỗi khái niệm quan trọng, thêm `.concept-check` để kiểm tra hiểu biết ngay

---

## 2. THIẾT KẾ HÌNH ẢNH (Visual Design)

### 2.1 Typography
- Font chính: `var(--font-sans)` — sans-serif system fonts
- Body text: `font-size: 1rem`, `line-height: 1.7` — không thay đổi
- Max prose width: nội dung văn bản giới hạn trong `max-width: 900px` (≈ 75 ký tự/dòng)
- Không dùng `font-size` nhỏ hơn `.8rem` cho text đọc thông thường
- Heading hierarchy phải nhất quán: `h2` cho lesson title, `h3` cho sub-section, `h4` cho detail

### 2.2 Màu sắc — Sử dụng design tokens
```
--primary (#0f4c81)    → chính, navigation, headings
--accent  (#f5a623)    → highlight, CTA, accent
--success (#16a34a)    → ví dụ tốt, pass, green states
--warning (#d97706)    → cảnh báo
--danger  (#dc2626)    → lỗi, fail, critical
--info    (#0ea5e9)    → concept, explanation
Purple (#7e22ce)       → key insight, đột phá
```
- KHÔNG dùng màu nền tùy ý — phải dùng từ design token hoặc các biến CSS đã định nghĩa
- Contrast: text trên nền màu phải đảm bảo tương phản đủ (WCAG AA minimum)

### 2.3 Whitespace — "Breathing Room"
- Giữa lesson sections: `margin: var(--space-12) 0`
- Giữa h2 và nội dung đầu tiên: ít nhất `var(--space-6)`
- Callout boxes: `margin: var(--space-6) 0`
- Không nhồi nhét nhiều callout liên tiếp — tối đa 2 callout liên tiếp

---

## 3. SƠ ĐỒ & HÌNH ẢNH (Diagrams)

### 3.1 SVG là tiêu chuẩn — Không dùng raster images
- Tất cả diagram PHẢI là inline SVG để scale hoàn hảo trên mọi màn hình
- `viewBox` luôn được đặt; `max-width: 100%; height: auto` trên SVG
- Mỗi SVG phải có `<title>` (accessibility) và `.diagram-title` caption bên dưới
- Tối đa 760px chiều rộng viewBox cho diagram ngang; 500px cho diagram dọc

### 3.2 Nguyên tắc thiết kế SVG
- Dùng màu từ palette nhất quán: `#eff6ff` (xanh nhạt), `#f0fdf4` (xanh lá nhạt), `#fdf4ff` (tím nhạt)
- Stroke: `stroke-width="1.5"`, rounded corners `rx="8"` hoặc `rx="12"`
- Text trong SVG: `font-size="12"` hoặc `font-size="13"` là minimum; `font-weight="700"` cho labels
- Arrow markers: luôn định nghĩa trong `<defs>` và tái sử dụng qua `id`
- Mỗi diagram phải có **title** rõ ràng trong `<text>` ở trên cùng

### 3.3 Interactivity
- Thêm `cursor: pointer` cho các elements SVG có thể click/hover
- Wrap `.diagram-container` với `:hover` state để tăng shadow nhẹ
- Nếu diagram có nhiều bước: dùng `opacity` để highlight bước đang giải thích

### 3.4 Nguyên tắc "Diagram dạy, không trang trí"
- Mỗi diagram phải convey 1 ý tưởng rõ ràng — nếu cần 2 ý, dùng 2 diagram
- Label tất cả components — không để người đọc đoán
- Đặt legend nếu dùng màu sắc để encode thông tin

---

## 4. CALLOUT BOXES — Phân loại và sử dụng

### 4.1 Các loại callout và quy tắc dùng
```html
<!-- Tình huống FinTech Corp / LoanBot -->
<div class="callout example">
  <div class="callout-header">🏢 Tình huống: FinTech Corp</div>
  ...
</div>

<!-- Analogy / so sánh dễ hiểu -->
<div class="callout analogy">
  <div class="callout-header">💡 Analogy: [tên]</div>
  ...
</div>

<!-- Cảnh báo / sai lầm phổ biến -->
<div class="callout warning">
  <div class="callout-header">⚠️ Cảnh báo</div>
  ...
</div>

<!-- Khái niệm kỹ thuật cần định nghĩa -->
<div class="callout concept">
  <div class="callout-header">📌 Khái niệm: [tên]</div>
  ...
</div>

<!-- Insight quan trọng, takeaway chính -->
<div class="callout key-insight">
  <div class="callout-header">🔑 Key Insight</div>
  ...
</div>

<!-- Công thức / formula -->
<div class="callout formula">
  <div class="callout-header">📐 Công thức</div>
  ...
</div>
```

### 4.2 Mật độ callout
- Tối đa 3 callout / lesson section
- Không đặt 2 callout cùng loại liên tiếp
- Sau mỗi callout phải có ít nhất 1 paragraph prose

---

## 5. CODE BLOCKS — Hiển thị code

### 5.1 Cấu trúc code block
```html
<div class="code-block">
  <span class="code-label">Python</span>
  <pre><code>
<span class="code-keyword">def</span> <span class="code-function">process_loan</span>(application):
    <span class="code-comment"># Xử lý hồ sơ vay với LoanBot</span>
    ...
  </code></pre>
</div>
```

### 5.2 Quy tắc code
- LUÔN có `code-label` để người đọc biết ngôn ngữ
- LUÔN có comment tiếng Việt giải thích logic chính
- Dùng đủ color tokens: `code-keyword`, `code-string`, `code-comment`, `code-function`, `code-number`, `code-type`
- Sau mỗi code block quan trọng: giải thích bằng prose hoặc callout "Giải thích từng dòng"
- Tối đa 30 dòng mỗi code block trong lecture — dài hơn → dùng `.expand-section`

---

## 6. COMPONENTS MỚI — Phải dùng trong mọi module

### 6.1 Learning Objective (BẮT BUỘC ở đầu mỗi lesson)
```html
<div class="learning-objective">
  <h4>🎯 Sau bài này, bạn sẽ:</h4>
  <ul>
    <li>Hiểu được [khái niệm 1]</li>
    <li>Biết cách [kỹ năng 1]</li>
    <li>Áp dụng [vào LoanBot như thế nào]</li>
  </ul>
</div>
```

### 6.2 Key Formula (Dùng cho công thức/phương trình quan trọng)
```html
<div class="key-formula">
  <div class="formula-label">Công thức cốt lõi</div>
  <div class="formula-text">Agent = Model + Harness</div>
  <div class="formula-desc">Model là bộ não — Harness là hệ thống vận hành</div>
</div>
```

### 6.3 Concept Check (Sau mỗi khái niệm quan trọng)
```html
<div class="concept-check">
  <div class="concept-check-header">🧠 Kiểm tra nhanh</div>
  <p class="concept-check-q">Câu hỏi kiểm tra ngắn về khái niệm vừa học?</p>
  <button class="concept-check-toggle" onclick="toggleConceptCheck(this)">💡 Xem gợi ý</button>
  <div class="concept-check-answer">
    <strong>Gợi ý:</strong> [câu trả lời ngắn gọn với giải thích]
  </div>
</div>
```

### 6.4 Progressive Disclosure (Cho nội dung nâng cao)
```html
<div class="expand-section">
  <button class="expand-trigger" onclick="toggleExpand(this)" aria-expanded="false">
    📖 Tìm hiểu thêm: [tên nội dung nâng cao]
    <span class="expand-icon">▼</span>
  </button>
  <div class="expand-content">
    [Nội dung nâng cao, optional]
  </div>
</div>
```

### 6.5 Process Steps (Cho quy trình có thứ tự)
```html
<ol class="process-steps">
  <li>
    <strong>Bước đầu tiên</strong>
    <p>Mô tả ngắn gọn</p>
  </li>
  ...
</ol>
```

---

## 7. QUIZ DESIGN

### 7.1 Cấu trúc câu hỏi
- Mỗi module: 15 câu hỏi, phủ đều 5 lessons (3 câu/lesson)
- Phân bố độ khó: 5 dễ (recall) + 7 trung bình (application) + 3 khó (analysis)
- Mỗi câu: 4 options, 1 đúng, 3 sai nhưng có vẻ hợp lý (plausible distractors)

### 7.2 Feedback giải thích (BẮT BUỘC)
- Sau mỗi câu trả lời: KHÔNG chỉ "Đúng/Sai" — PHẢI giải thích tại sao
- Đúng: Xác nhận + giải thích tại sao options khác sai
- Sai: Giải thích đáp án đúng + liên kết với ví dụ LoanBot

### 7.3 UX quizz
- Hiển thị progress bar (câu X/15)
- Màu feedback: xanh lá cho đúng, đỏ nhạt cho sai
- Nút "Xem giải thích đầy đủ" cho phép đọc thêm context

---

## 8. ACCESSIBILITY

- `alt` text cho mọi `<img>` (dù không dùng images trong project này)
- SVG: thêm `<title>` element cho screen readers
- Contrast ratio: black text (#1e293b) trên white/light backgrounds — đảm bảo WCAG AA
- Tất cả interactive elements (buttons, links) phải có `:focus` style
- Keyboard navigation: tab order hợp lý trong sidebar và content

---

## 9. TÍNH NHẤT QUÁN

### 9.1 Ví dụ xuyên suốt
- Luôn dùng FinTech Corp, LoanBot, 4 mock customers:
  - FC-2024-001: Khách hàng tốt (score 720)
  - FC-2024-002: Borderline (score 580)
  - FC-2024-003: Blacklisted (score 400)
  - FC-2024-004: Borderline (score 645)
- Numbers nhất quán: 50K hồ sơ/tháng, 350K VNĐ/hồ sơ manual, ROI 99.7%

### 9.2 Terminology
- Tiếng Việt là ngôn ngữ chính; technical terms giữ tiếng Anh
- Lần đầu xuất hiện thuật ngữ: **bold + giải thích ngay** trong text
- Glossary section ở cuối mỗi module: tối thiểu 10 terms

### 9.3 Navigation
- Sidebar: active state rõ ràng cho lesson hiện tại
- Scroll progress bar: luôn visible
- Bottom navigation: nút "← Bài trước" và "Bài tiếp theo →"
- Quiz result page: **PHẢI có link "→ Module tiếp theo"** để user có thể proceed sau khi hoàn thành quiz

---

## 11. HTML/CSS CODING STANDARDS (Chuẩn kỹ thuật bắt buộc)

### 11.1 Layout wrapper — BẮT BUỘC dùng đúng class
```html
<!-- index.html của mỗi module (có sidebar) -->
<div class="page-layout">        <!-- wrapper ngoài cùng -->
  <aside class="sidebar">...</aside>
  <main class="main-content">...</main>
</div>

<!-- KHÔNG được dùng: .layout, .wrapper, .container -->
```

### 11.2 Scroll progress bar — BẮT BUỘC dùng đúng class
```html
<!-- ĐÚNG -->
<div class="scroll-progress"><div class="scroll-progress-fill"></div></div>

<!-- SAI — main.js không tìm được class này -->
<div class="scroll-progress"><div class="scroll-progress-bar" id="scrollBar"></div></div>
```

### 11.3 Script tag bắt buộc — CUỐI MỌI index.html
```html
<!-- Phải có ở cuối body, TRƯỚC </body> -->
<script src="../../assets/js/main.js"></script>
```
- **KHÔNG** viết inline scroll event listener thay thế — main.js xử lý tất cả
- Thiếu script tag → concept checks, expand sections, code copy, scrollspy đều broken

### 11.4 Bottom navigation — dùng đúng class
```html
<!-- ĐÚNG: .bottom-nav (CSS đã định nghĩa) -->
<div class="bottom-nav">
  <a href="../moduleN/index.html" class="btn btn-outline">← Module N</a>
  <a href="quiz.html" class="btn btn-primary">📝 Quiz Module N+1 →</a>
</div>

<!-- KHÔNG dùng: .lesson-nav (chỉ cho modules 1-7) -->
```

### 11.5 Sidebar — cấu trúc chuẩn cho modules 10+
```html
<aside class="sidebar">
  <div class="sidebar-module-tag" style="background:var(--mN-light);color:var(--mN-primary);border-color:var(--mN-border);">MODULE N</div>
  <div class="sidebar-title">Tên Module</div>
  <nav class="sidebar-nav">
    <a href="#lesson1" class="active">L1. Tên Bài</a>
    <a href="#lesson2">L2. Tên Bài</a>
    ...
    <a href="quiz.html" style="margin-top:var(--space-4);color:var(--mN-accent);">📝 Quiz Module N</a>
    <a href="lab.ipynb" download style="color:var(--mN-accent);">🔬 Lab Notebook</a>
  </nav>
  <div style="margin-top:auto;padding-top:var(--space-6);">
    <a href="../moduleN-1/index.html" style="font-size:.8rem;color:var(--text-muted);">← Module N-1</a>
  </div>
</aside>
```

### 11.6 Quiz HTML pattern — sử dụng pattern đơn giản cho modules 11+
```html
<!-- Cấu trúc quiz.html mới (modules 11+) -->
<div class="quiz-hero">
  <div class="quiz-hero-content">
    <span class="module-tag">MODULE N · QUIZ</span>
    <h1>📝 [Tên Module]</h1>
    <p>15 câu hỏi · Phủ đều 5 lessons · ~20 phút</p>
    <div class="quiz-stats">
      <span>5 câu dễ</span><span>7 câu trung bình</span><span>3 câu khó</span>
    </div>
  </div>
</div>
<div class="quiz-container">
  <div class="quiz-progress">
    <div class="quiz-progress-text">Câu <span id="currentQ">1</span> / 15</div>
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="progressFill" style="width:6.67%"></div></div>
  </div>
  <div id="quizArea"></div>
  <div id="resultArea" style="display:none" class="quiz-result">...</div>
</div>
```

### 11.7 Callout header — luôn dùng `.callout-header` (KHÔNG phải `.callout-title`)
```html
<!-- ĐÚNG -->
<div class="callout-header">🔑 Key Insight</div>

<!-- SAI — CSS chỉ style .callout-header, không phải .callout-title -->
<div class="callout-title">🔑 Key Insight</div>
```

---

## 10. SELF-EVALUATION RUBRIC (Cho mỗi module)

Trước khi chuyển sang module tiếp theo, kiểm tra:

| Tiêu chí | Điểm tối đa | Kiểm tra |
|----------|-------------|---------|
| Learning objectives rõ ràng ở đầu mỗi lesson | 10 | ≥ 1 `.learning-objective` per lesson |
| Diagrams inline SVG, labeled, có caption | 20 | Tất cả diagram là SVG, có `.diagram-title` |
| Ví dụ LoanBot xuyên suốt | 15 | ≥ 1 ví dụ LoanBot/lesson |
| Callout diversity (≥ 3 loại khác nhau/module) | 10 | analogy + example + concept/warning |
| Concept checks sau khái niệm quan trọng | 10 | ≥ 2 concept check/module |
| Code blocks có color tokens và comments | 10 | Tất cả code dùng code-keyword, code-string, etc. |
| Key formulas trong `.key-formula` hoặc `.highlight-box` | 10 | ≥ 1/module cho công thức cốt lõi |
| Progressive disclosure cho nội dung advanced | 5 | ≥ 1 `.expand-section`/module |
| Quiz 15 câu với giải thích | 10 | Đủ 15 câu, giải thích từng câu |

**Ngưỡng minimum: 85/100 (8.5/10) mới chuyển sang module tiếp theo.**

---

## 12. TOC & SIDEBAR (Table of Contents — BẮT BUỘC)

### 12.1 Mọi module index.html PHẢI có sidebar với `.sidebar-nav`
```html
<!-- ĐÚNG — cấu trúc chuẩn -->
<div class="page-layout">
  <aside class="sidebar">
    <div class="sidebar-module-tag" style="background:var(--mN-light);color:var(--mN-primary);border-color:var(--mN-border);">MODULE N</div>
    <div class="sidebar-title">Tên Module</div>
    <nav class="sidebar-nav">
      <a href="#lesson1" class="active">L1. Tên Bài 1</a>
      <a href="#lesson2">L2. Tên Bài 2</a>
      <!-- ... 5 lessons ... -->
    </nav>
  </aside>
  <main class="main-content">
    <!-- Content goes here -->
  </main>
</div>

<!-- KHÔNG dùng .container thay cho .page-layout -->
<!-- KHÔNG bỏ sidebar -->
```

### 12.2 Scroll spy hoạt động tự động
main.js tự detect `section[id]` và highlights sidebar link tương ứng khi scroll. KHÔNG cần viết thêm JS.

### 12.3 Section IDs phải khớp với sidebar href
- Sidebar: `<a href="#lesson1">`
- Section: `<section id="lesson1">` (không dùng `lesson-1` với hyphen)
- Scrollspy match: `entry.target.id === 'lesson1'` → highlights `.sidebar-nav a[href="#lesson1"]`

---

## 13. SVG DIAGRAM QUALITY STANDARDS

### 13.1 Bắt buộc cho mọi SVG
```html
<div class="diagram-container">
  <svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
    <title>Mô tả cụ thể diagram dạy gì — không generic "Sơ đồ minh họa"</title>
    <!-- ... -->
  </svg>
  <div class="diagram-title">Hình N: Caption mô tả key insight của diagram</div>
</div>
```

### 13.2 Dark background là chuẩn cho modules 10+
- Background: `fill="#0f172a"` (dark slate) hoặc module-specific dark color
- Text: `fill="#f8fafc"` (near-white) hoặc light accent
- Boxes: module-theme dark color với lighter border/stroke
- KHÔNG dùng light pastel backgrounds (`#eff6ff`, `#fdf4ff`) trong diagram của modules 10+

### 13.3 SVG không được dùng emoji
- Dùng text labels thay emoji: `⚙️` → viết "⚙" bằng unicode hoặc text
- Emoji render khác nhau trên mỗi OS — không reliable trong SVG
- Thay bằng geometric shapes, icons từ path, hoặc short text labels

### 13.4 Minimum quality checklist mỗi SVG
- [ ] `<title>` cụ thể (không generic)
- [ ] `.diagram-container` wrapper
- [ ] `.diagram-title` caption bên dưới
- [ ] `viewBox` set đúng kích thước
- [ ] `max-width:100%;height:auto` trên thẻ SVG
- [ ] Arrow markers trong `<defs>` được tái sử dụng
- [ ] Không có text nhỏ hơn `font-size="11"`
