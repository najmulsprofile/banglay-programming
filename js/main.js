/**
 * Banglay JavaScript — main.js
 *
 * এই ফাইলে JavaScript কোর্সের সব মডিউল মেটাডাটা ও লেসন কনটেন্ট আছে।
 * html-main.js / css-main.js / main.js থেকে সম্পূর্ণ আলাদা — যাতে
 * চারটা কোর্সের ডাটা একসাথে থাকলেও একে অপরের ডাটাকে ওভাররাইট না করে।
 *
 * নামকরণ প্যাটার্ন:
 *   JS_MODULES  → CSS_MODULES / HTML_MODULES এর সমতুল্য
 *   JS_LESSONS  → CSS_LESSONS / HTML_LESSONS এর সমতুল্য
 *
 * ══════════════════════════════════════════════════════════════
 * গুরুত্বপূর্ণ ডিজাইন সিদ্ধান্ত — দুই ধরনের আউটপুট প্যানেল
 * ══════════════════════════════════════════════════════════════
 * JavaScript-এর আউটপুট দুই ধরনের হতে পারে:
 *
 * ১. CONSOLE আউটপুট — console.log() দিয়ে যা প্রিন্ট হয়, সেটা
 *    Python কোর্সের TERMINAL-এর মতোই একটা ডার্ক, মনোস্পেস প্যানেলে
 *    দেখানো হয় (.console-divider + .console-wrap)।
 *
 * ২. LIVE PREVIEW আউটপুট — DOM ম্যানিপুলেশন/ইভেন্ট হ্যান্ডলিং-এর
 *    উদাহরণে, CSS কোর্সের মতোই একটা লাইট, ইন্টারঅ্যাক্টিভ প্যানেলে
 *    সত্যিকারের কাজ-করা বাটন/এলিমেন্ট দেখানো হয় (.preview-divider +
 *    .preview-wrap)। যেহেতু innerHTML দিয়ে বসানো &lt;script&gt; ট্যাগ
 *    ব্রাউজারে অটো-এক্সিকিউট হয় না, তাই ইন্টারঅ্যাক্টিভ ডেমোগুলোতে
 *    সরাসরি inline onclick/oninput অ্যাট্রিবিউট ব্যবহার করা হয়েছে,
 *    যা innerHTML দিয়ে বসালেও ঠিকভাবে কাজ করে।
 *
 * প্রতিটা লেসনে বিষয়ের ধরন অনুযায়ী এই দুই প্যানেলের যেকোনো একটা
 * (বা প্রয়োজনে দুটোই) ব্যবহার করা হয়েছে।
 * ══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────────────────────
   MODULE METADATA — মোট ১০টি মডিউল
───────────────────────────────────────────────────────────── */
const JS_MODULES = [
  { id: 1,  title: "জাভাস্ক্রিপ্ট পরিচিতি ও ভেরিয়েবল",   icon: "📜" },
  { id: 2,  title: "ডাটা টাইপ ও অপারেটর",                  icon: "🔢" },
  { id: 3,  title: "কন্ডিশনাল স্টেটমেন্ট",                  icon: "🔀" },
  { id: 4,  title: "লুপ (Loops)",                          icon: "🔁" },
  { id: 5,  title: "ফাংশন (Functions)",                    icon: "⚙️" },
  { id: 6,  title: "অ্যারে (Arrays)",                       icon: "📚" },
  { id: 7,  title: "অবজেক্ট (Objects)",                     icon: "🧱" },
  { id: 8,  title: "DOM ম্যানিপুলেশন",                       icon: "🖱️" },
  { id: 9,  title: "ইভেন্ট হ্যান্ডলিং ও ফর্ম",               icon: "⚡" },
  { id: 10, title: "অ্যাডভান্সড টপিক ও বেস্ট প্র্যাকটিস",    icon: "🚀" },
];

/* ─────────────────────────────────────────────────────────────
   LESSON SECTIONS
───────────────────────────────────────────────────────────── */
const JS_LESSONS = {

  /* ══════════════════════════════════════════════════════════
     MODULE 1 — জাভাস্ক্রিপ্ট পরিচিতি ও ভেরিয়েবল (complete)
  ══════════════════════════════════════════════════════════ */
  1: [
    {
      id: "1.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📜 মডিউল ১: জাভাস্ক্রিপ্ট পরিচিতি ও ভেরিয়েবল</h2>

        <h3>🔹 ১.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>JavaScript কী এবং ওয়েবসাইটে এর ভূমিকা কী</li>
          <li>JavaScript যুক্ত করার পদ্ধতি (External ও Internal)</li>
          <li><code>console.log()</code> ও ব্রাউজার Console পরিচিতি</li>
          <li>ভেরিয়েবল — <code>let</code>, <code>const</code>, <code>var</code></li>
          <li>কমেন্ট লেখার নিয়ম</li>
        </ul>
        <p>HTML দিয়ে কাঠামো, CSS দিয়ে ডিজাইন — এখন পালা JavaScript দিয়ে <strong>কার্যকারিতা (behavior)</strong> যোগ করার। বাটনে ক্লিক করলে কিছু ঘটা, ফর্ম যাচাই করা, ডাটা নিয়ে হিসাব করা — এসবই JavaScript দিয়ে হয়।</p>
      `
    },
    {
      id: "1.1",
      title: "JavaScript কী এবং কেন শিখব?",
      content: `
        <h3>🔹 ১.১ JavaScript কী? (What is JavaScript?)</h3>
        <p><strong>JavaScript (JS)</strong> হলো একটা প্রোগ্রামিং ভাষা, যেটা ওয়েব পেজকে <strong>ইন্টারঅ্যাক্টিভ ও কার্যকরী</strong> বানায়। HTML দিয়ে কাঠামো ও CSS দিয়ে ডিজাইনের পর, JavaScript-ই সেই তৃতীয় স্তম্ভ যা পেজকে "জীবন্ত" করে তোলে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ভাষা</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td>HTML</td><td>কাঠামো / কনটেন্ট (Structure)</td></tr>
              <tr><td>CSS</td><td>ডিজাইন / সাজসজ্জা (Style)</td></tr>
              <tr><td>JavaScript</td><td>কার্যকারিতা / ইন্টারঅ্যাকশন (Behavior)</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>JavaScript দিয়ে যা করা যায়:</strong></p>
        <ul>
          <li>বাটনে ক্লিক করলে কিছু ঘটানো (মেনু খোলা, মোডাল দেখানো)</li>
          <li>ফর্ম সাবমিট করার আগে ডাটা যাচাই করা (validation)</li>
          <li>পেজ রিলোড ছাড়াই কনটেন্ট বদলানো (যেমন লাইক কাউন্ট বাড়ানো)</li>
          <li>সার্ভার থেকে ডাটা আনা ও দেখানো (API কল)</li>
          <li>গেম, ক্যালকুলেটর, টু-ডু লিস্টের মতো পূর্ণাঙ্গ অ্যাপ্লিকেশন বানানো</li>
        </ul>

        <p>💡 <strong>একটা গুরুত্বপূর্ণ পার্থক্য মনে রাখো:</strong> এই কোর্সের আগের অংশে (Python কোর্স) তুমি যে JavaScript-এর মতোই দেখতে "প্রোগ্রামিং" শিখেছ, তার সাথে JavaScript-এর মূল পার্থক্য হলো — JavaScript সরাসরি <strong>ব্রাউজারে</strong> চলে এবং HTML/CSS-এর সাথে সরাসরি কথা বলতে পারে, Python সাধারণত সার্ভারে বা টার্মিনালে চলে।</p>
      `
    },
    {
      id: "1.2",
      title: "JavaScript যুক্ত করার পদ্ধতি",
      content: `
        <h3>🔹 ১.২ JavaScript যুক্ত করার পদ্ধতি</h3>
        <p>CSS-এর মতোই, JavaScript-ও HTML ফাইলের সাথে দুইভাবে যুক্ত করা যায়।</p>

        <h4>১. External JavaScript — আলাদা .js ফাইল (সবচেয়ে ভালো পদ্ধতি)</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;body&gt;</span>
  ...
  <span class="kw">&lt;script</span> <span class="fn">src</span>=<span class="str">"script.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/body&gt;</span></code></pre></div>
        </div>

        <p>⚠️ <strong>গুরুত্বপূর্ণ:</strong> <code>&lt;script&gt;</code> ট্যাগ সাধারণত <code>&lt;/body&gt;</code> এর ঠিক আগে বসানো হয়, মাথার (<code>&lt;head&gt;</code>) ভেতরে না। এর কারণ — JavaScript প্রায়ই HTML এলিমেন্ট খুঁজে বের করে কাজ করে; স্ক্রিপ্ট আগে চললে সেই এলিমেন্টগুলো তখনো তৈরিই হয়নি, তাই এরর হবে। body-এর শেষে রাখলে ততক্ষণে পুরো পেজ লোড হয়ে যায়।</p>

        <h4>২. Internal JavaScript — সরাসরি HTML ফাইলে</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;body&gt;</span>
  ...
  <span class="kw">&lt;script&gt;</span>
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"হ্যালো, জাভাস্ক্রিপ্ট!"</span>);
  <span class="kw">&lt;/script&gt;</span>
<span class="kw">&lt;/body&gt;</span></code></pre></div>
        </div>

        <p>💡 CSS-এর মতোই — ছোট, এককালীন টেস্টের জন্য Internal ব্যবহার করা যায়, কিন্তু বড় প্রজেক্টে সবসময় External (আলাদা <code>.js</code> ফাইল) ব্যবহার করাই স্ট্যান্ডার্ড অভ্যাস, কারণ এতে কোড গোছানো থাকে ও একাধিক পেজে পুনঃব্যবহার করা যায়।</p>
      `
    },
    {
      id: "1.3",
      title: "console.log ও ব্রাউজার Console",
      content: `
        <h3>🔹 ১.৩ console.log() ও ব্রাউজার Console</h3>
        <p><code>console.log()</code> হলো JavaScript শেখার সবচেয়ে গুরুত্বপূর্ণ টুল — এটা দিয়ে যেকোনো ভ্যালু ব্রাউজারের <strong>Developer Console</strong>-এ প্রিন্ট করে দেখা যায় (CSS কোর্সের মডিউল ১০-এ শেখা DevTools-এর একটা ট্যাব — Console)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"হ্যালো, দুনিয়া!"</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">42</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">true</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">হ্যালো, দুনিয়া!</div>
            <div class="console-line">42</div>
            <div class="console-line">true</div>
          </div>
        </div>

        <p>💡 <strong>Python কোর্সের সাথে তুলনা:</strong> Python-এ <code>print()</code> দিয়ে টার্মিনালে আউটপুট দেখানো হতো — JavaScript-এ <code>console.log()</code> ঠিক একই কাজ করে, শুধু আউটপুটটা টার্মিনালের বদলে ব্রাউজারের Console-এ যায়। এই কোর্সের প্রতিটা "CONSOLE" প্যানেল আসলে এই <code>console.log()</code>-এর ফলাফলই দেখাচ্ছে।</p>

        <p>⚠️ <strong>সতর্কতা:</strong> <code>console.log()</code> শুধু ডেভেলপারদের জন্য — সাধারণ ইউজার এই আউটপুট কখনো দেখে না (Console খুলে না দেখলে)। তাই এটা মূলত কোড ডিবাগ করতে ও শেখার সময় ব্যবহার হয়, চূড়ান্ত (production) কোডে খুব বেশি <code>console.log()</code> রাখা ভালো অভ্যাস না।</p>
      `
    },
    {
      id: "1.4",
      title: "ভেরিয়েবল — let, const, var",
      content: `
        <h3>🔹 ১.৪ ভেরিয়েবল (Variables)</h3>
        <p><strong>ভেরিয়েবল</strong> হলো ডাটা রাখার একটা "বাক্স", যাকে একটা নাম দেওয়া হয় — পরে সেই নাম দিয়ে ডাটাটা ব্যবহার করা যায়। JavaScript-এ ভেরিয়েবল বানানোর তিনটা কীওয়ার্ড আছে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">name</span> = <span class="str">"নাজমুল"</span>;
<span class="kw">const</span> <span class="fn">age</span> = <span class="num">25</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">name</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">age</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাজমুল</div>
            <div class="console-line">25</div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>কীওয়ার্ড</th><th>মান বদলানো যায়?</th><th>কখন ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><code>let</code></td><td>হ্যাঁ</td><td>যে ভেরিয়েবলের মান পরে বদলাবে (যেমন কাউন্টার, লুপ ভেরিয়েবল)</td></tr>
              <tr><td><code>const</code></td><td>না (constant)</td><td>যে ভেরিয়েবলের মান কখনো বদলাবে না (বেশিরভাগ ক্ষেত্রেই এটাই ডিফল্ট বাছাই হওয়া উচিত)</td></tr>
              <tr><td><code>var</code></td><td>হ্যাঁ</td><td>পুরনো পদ্ধতি — আধুনিক কোডে আর ব্যবহার করা হয় না</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">pi</span> = <span class="num">3.14</span>;
<span class="fn">pi</span> = <span class="num">4</span>;  <span class="cmt">// ❌ এরর! const-এর মান বদলানো যায় না</span>

<span class="kw">let</span> <span class="fn">score</span> = <span class="num">0</span>;
<span class="fn">score</span> = <span class="num">10</span>;  <span class="cmt">// ✅ ঠিক আছে, let-এর মান বদলানো যায়</span></code></pre></div>
        </div>

        <p>⚠️ <strong>বেস্ট প্র্যাকটিস:</strong> আধুনিক JavaScript-এ <code>var</code> এড়িয়ে চলা উচিত (এর কিছু পুরনো, বিভ্রান্তিকর আচরণ আছে scope নিয়ে)। নিয়ম হিসেবে — <strong>ডিফল্টভাবে সবসময় <code>const</code> ব্যবহার করো</strong>, আর শুধু তখনই <code>let</code> ব্যবহার করো যখন নিশ্চিত জানো মানটা পরে বদলাবে।</p>

        <p><strong>ভেরিয়েবলের নামকরণ নিয়ম:</strong></p>
        <ul>
          <li>নাম অক্ষর, সংখ্যা, <code>_</code>, <code>$</code> দিয়ে গঠিত হতে পারে, কিন্তু সংখ্যা দিয়ে শুরু করা যাবে না</li>
          <li>জাভাস্ক্রিপ্টের রিজার্ভড কীওয়ার্ড (<code>let</code>, <code>const</code>, <code>function</code> ইত্যাদি) ভেরিয়েবলের নাম হিসেবে ব্যবহার করা যাবে না</li>
          <li>প্রথাগতভাবে <code>camelCase</code> ব্যবহার হয় — যেমন <code>userName</code>, <code>totalPrice</code> (HTML/CSS-এর <code>kebab-case</code> থেকে আলাদা, মনে রেখো)</li>
        </ul>
      `
    },
    {
      id: "1.5",
      title: "কমেন্ট ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ১.৫ JavaScript-এ কমেন্ট লেখা</h3>
        <p>JavaScript-এ দুই ধরনের কমেন্ট লেখা যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// এক-লাইনের কমেন্ট — শুধু এই লাইনের বাকি অংশ কমেন্ট হবে</span>
<span class="kw">const</span> <span class="fn">total</span> = <span class="num">100</span>; <span class="cmt">// এখানেও ইনলাইন কমেন্ট লেখা যায়</span>

<span class="cmt">/* মাল্টি-লাইন কমেন্ট —
   একাধিক লাইন জুড়ে লেখা যায়,
   যতক্ষণ না */</span> </code></pre></div>
        </div>

        <p>💡 <code>//</code> দিয়ে এক-লাইনের কমেন্ট (CSS-এর <code>/* */</code> থেকে আলাদা, এটা আরও দ্রুত লেখা যায় একলাইনের জন্য), আর <code>/* ... */</code> দিয়ে একাধিক লাইন জুড়ে কমেন্ট লেখা হয় — ঠিক CSS-এর কমেন্টের মতোই।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📜 JavaScript ওয়েব পেজে কার্যকারিতা (behavior) যোগ করে — HTML (কাঠামো) ও CSS (ডিজাইন)-এর পর তৃতীয় স্তম্ভ।</div>
          <div class="takeaway-item">🔗 <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code> সাধারণত <code>&lt;/body&gt;</code> এর ঠিক আগে বসানো হয়।</div>
          <div class="takeaway-item">🖥️ <code>console.log()</code> দিয়ে ব্রাউজারের Console-এ ভ্যালু প্রিন্ট করে দেখা যায় — এটা Python-এর <code>print()</code>-এরই সমতুল্য।</div>
          <div class="takeaway-item">📦 <code>const</code> (মান বদলায় না — ডিফল্ট বাছাই), <code>let</code> (মান বদলাতে পারে), <code>var</code> (পুরনো, এড়িয়ে চলো)।</div>
          <div class="takeaway-item">💬 <code>//</code> এক-লাইনের কমেন্ট, <code>/* ... */</code> মাল্টি-লাইন কমেন্ট।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=2&section=2.0">
          পরের মডিউল: ডাটা টাইপ ও অপারেটর
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],

  /* ══════════════════════════════════════════════════════════
     MODULE 2-10 — শীঘ্রই আসছে (পরবর্তী সেশনে যোগ হবে)
  ══════════════════════════════════════════════════════════ */
  2: [
    {
      id: "2.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🔢 মডিউল ২: ডাটা টাইপ ও অপারেটর</h2>

        <h3>🔹 ২.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>প্রাইমিটিভ ডাটা টাইপ — String, Number, Boolean, Undefined, Null</li>
          <li><code>typeof</code> অপারেটর দিয়ে ডাটা টাইপ চেক করা</li>
          <li>অ্যারিথমেটিক অপারেটর (+, -, *, /, %, **)</li>
          <li>অ্যাসাইনমেন্ট অপারেটর (=, +=, -=, *=, /=)</li>
          <li>তুলনা অপারেটর — বিশেষ করে <code>==</code> vs <code>===</code>-এর গুরুত্বপূর্ণ পার্থক্য</li>
          <li>লজিক্যাল অপারেটর (&&, ||, !)</li>
          <li>স্ট্রিং কনক্যাটেনেশন ও টেমপ্লেট লিটারেল</li>
        </ul>
        <p>প্রতিটা উদাহরণে কোড ও তার <strong>ঠিক আউটপুট</strong> দুটোই CONSOLE প্যানেলে পাশাপাশি দেখানো হয়েছে, যাতে কোন লাইন কী প্রিন্ট করছে তা স্পষ্টভাবে বোঝা যায়।</p>
      `
    },
    {
      id: "2.1",
      title: "প্রাইমিটিভ ডাটা টাইপ",
      content: `
        <h3>🔹 ২.১ প্রাইমিটিভ ডাটা টাইপ (Primitive Data Types)</h3>
        <p>JavaScript-এ পাঁচটা বেসিক (প্রাইমিটিভ) ডাটা টাইপ আছে:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>টাইপ</th><th>উদাহরণ</th><th>ব্যাখ্যা</th></tr></thead>
            <tbody>
              <tr><td><strong>String</strong></td><td><code>"হ্যালো"</code></td><td>টেক্সট — কোটেশনের ভেতরে (single, double, বা backtick)</td></tr>
              <tr><td><strong>Number</strong></td><td><code>25</code>, <code>3.14</code></td><td>যেকোনো সংখ্যা — পূর্ণসংখ্যা বা দশমিক, আলাদা কোনো "int"/"float" টাইপ নেই</td></tr>
              <tr><td><strong>Boolean</strong></td><td><code>true</code>, <code>false</code></td><td>সত্য/মিথ্যা — শুধু এই দুইটা মান হতে পারে</td></tr>
              <tr><td><strong>Undefined</strong></td><td><code>undefined</code></td><td>ভেরিয়েবল ঘোষণা করা হয়েছে কিন্তু কোনো মান বসানো হয়নি</td></tr>
              <tr><td><strong>Null</strong></td><td><code>null</code></td><td>ইচ্ছাকৃতভাবে "কোনো মান নেই" বোঝাতে ব্যবহার হয়</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">city</span> = <span class="str">"চট্টগ্রাম"</span>;
<span class="kw">const</span> <span class="fn">age</span> = <span class="num">25</span>;
<span class="kw">const</span> <span class="fn">isStudent</span> = <span class="num">true</span>;
<span class="kw">let</span> <span class="fn">score</span>;  <span class="cmt">// কোনো মান দেওয়া হয়নি</span>
<span class="kw">const</span> <span class="fn">middleName</span> = <span class="num">null</span>;  <span class="cmt">// ইচ্ছাকৃতভাবে খালি</span>

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">city</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">age</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">isStudent</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">score</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">middleName</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">চট্টগ্রাম</div>
            <div class="console-line">25</div>
            <div class="console-line">true</div>
            <div class="console-line">undefined</div>
            <div class="console-line">null</div>
          </div>
        </div>

        <p>💡 লক্ষ করো — কোডে ৫টা <code>console.log()</code> লেখা হয়েছে, আর CONSOLE-এ ঠিক ৫টা লাইন প্রিন্ট হয়েছে, একদম একই ক্রমে — প্রতিটা <code>console.log()</code> নিজের একটা নতুন লাইনে আউটপুট দেয়।</p>

        <h3>🔹 typeof — ডাটা টাইপ চেক করা</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="str">"হ্যালো"</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="num">25</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="num">true</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="kw">undefined</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">string</div>
            <div class="console-line">number</div>
            <div class="console-line">boolean</div>
            <div class="console-line">undefined</div>
          </div>
        </div>
        <p>⚠️ <strong>মজার (এবং বিভ্রান্তিকর) ব্যতিক্রম:</strong> <code>typeof null</code> আসলে <code>"object"</code> রিটার্ন করে — এটা JavaScript-এর একটা পুরনো, প্রায় ৩০ বছরের বাগ, যা এখন ভাষার একটা স্থায়ী অংশ হয়ে গেছে (বদলালে পুরনো কোড ভেঙে যাবে)। এটা মনে রাখা ভালো, কারণ এটা প্রায় সব নতুন ডেভেলপারকেই একবার না একবার বিভ্রান্ত করে।</p>
      `
    },
    {
      id: "2.2",
      title: "অ্যারিথমেটিক অপারেটর",
      content: `
        <h3>🔹 ২.২ অ্যারিথমেটিক অপারেটর (Arithmetic Operators)</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>অপারেটর</th><th>কাজ</th><th>উদাহরণ</th><th>ফলাফল</th></tr></thead>
            <tbody>
              <tr><td><code>+</code></td><td>যোগ</td><td><code>5 + 3</code></td><td><code>8</code></td></tr>
              <tr><td><code>-</code></td><td>বিয়োগ</td><td><code>5 - 3</code></td><td><code>2</code></td></tr>
              <tr><td><code>*</code></td><td>গুণ</td><td><code>5 * 3</code></td><td><code>15</code></td></tr>
              <tr><td><code>/</code></td><td>ভাগ</td><td><code>10 / 3</code></td><td><code>3.333...</code></td></tr>
              <tr><td><code>%</code></td><td>ভাগশেষ (Modulus)</td><td><code>10 % 3</code></td><td><code>1</code></td></tr>
              <tr><td><code>**</code></td><td>পাওয়ার (সূচক)</td><td><code>2 ** 3</code></td><td><code>8</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> + <span class="num">3</span>);   <span class="cmt">// যোগ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> - <span class="num">3</span>);   <span class="cmt">// বিয়োগ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> * <span class="num">3</span>);   <span class="cmt">// গুণ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">10</span> / <span class="num">3</span>);  <span class="cmt">// ভাগ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">10</span> % <span class="num">3</span>);  <span class="cmt">// ভাগশেষ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">2</span> ** <span class="num">3</span>);  <span class="cmt">// 2 এর 3 পাওয়ার</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">8</div>
            <div class="console-line">2</div>
            <div class="console-line">15</div>
            <div class="console-line">3.3333333333333335</div>
            <div class="console-line">1</div>
            <div class="console-line">8</div>
          </div>
        </div>

        <p>💡 <code>%</code> (Modulus/ভাগশেষ) খুবই কাজের একটা অপারেটর — কোনো সংখ্যা জোড় (even) না বিজোড় (odd) তা চেক করতে (<code>num % 2 === 0</code> হলে জোড়), অথবা একটা তালিকায় নির্দিষ্ট ব্যবধানে কিছু করতে (যেমন প্রতি ৫ নম্বর আইটেমে) এটা ব্যবহার হয়।</p>

        <p>⚠️ <strong>সতর্কতা:</strong> <code>10 / 3</code> এর ফলাফল <code>3.3333333333333335</code> — কম্পিউটার দশমিক সংখ্যা বাইনারিতে হিসাব করে বলে মাঝেমধ্যে এমন লম্বা, সামান্য অ-নিখুঁত দশমিক দেখা যায়। এটা কোনো ভুল না, বরং কম্পিউটার সংখ্যা প্রক্রিয়াকরণের স্বাভাবিক সীমাবদ্ধতা।</p>
      `
    },
    {
      id: "2.3",
      title: "অ্যাসাইনমেন্ট অপারেটর",
      content: `
        <h3>🔹 ২.৩ অ্যাসাইনমেন্ট অপারেটর (Assignment Operators)</h3>
        <p>একটা ভেরিয়েবলের মান নিজের সাথেই হিসাব করে আপডেট করার জন্য সংক্ষিপ্ত অপারেটর আছে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অপারেটর</th><th>সংক্ষিপ্ত রূপ</th><th>পূর্ণ রূপ</th></tr></thead>
            <tbody>
              <tr><td><code>+=</code></td><td><code>x += 5</code></td><td><code>x = x + 5</code></td></tr>
              <tr><td><code>-=</code></td><td><code>x -= 5</code></td><td><code>x = x - 5</code></td></tr>
              <tr><td><code>*=</code></td><td><code>x *= 5</code></td><td><code>x = x * 5</code></td></tr>
              <tr><td><code>/=</code></td><td><code>x /= 5</code></td><td><code>x = x / 5</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">score</span> = <span class="num">10</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">score</span>);  <span class="cmt">// শুরুর মান</span>

<span class="fn">score</span> += <span class="num">5</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">score</span>);  <span class="cmt">// 5 যোগ হলো</span>

<span class="fn">score</span> *= <span class="num">2</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">score</span>);  <span class="cmt">// 2 দিয়ে গুণ হলো</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">10</div>
            <div class="console-line">15</div>
            <div class="console-line">30</div>
          </div>
        </div>

        <p>💡 <code>score += 5</code> কার্যকর হওয়ার পর <code>score</code>-এর মান স্থায়ীভাবে বদলে যায় (১০ থেকে ১৫) — পরের লাইনে <code>score *= 2</code> তখন নতুন মান (১৫) নিয়েই কাজ করে, তাই ফলাফল ৩০। এভাবে প্রতিটা লাইন আগের লাইনের ফলাফলের উপর ভিত্তি করে চলে — কোড টপ-টু-বটম (উপর থেকে নিচে) ক্রমানুসারে এক্সিকিউট হয়, এই ধারণাটা মনে রাখা জরুরি।</p>

        <p><strong>বাড়তি — ইনক্রিমেন্ট/ডিক্রিমেন্ট:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">count</span> = <span class="num">5</span>;
<span class="fn">count</span>++;  <span class="cmt">// count = count + 1 এরই সংক্ষিপ্ত রূপ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">count</span>);

<span class="fn">count</span>--;  <span class="cmt">// count = count - 1</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">count</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">6</div>
            <div class="console-line">5</div>
          </div>
        </div>
      `
    },
    {
      id: "2.4",
      title: "তুলনা অপারেটর",
      content: `
        <h3>🔹 ২.৪ তুলনা অপারেটর (Comparison Operators)</h3>
        <p>দুটো মান তুলনা করলে সবসময় একটা <strong>Boolean</strong> (<code>true</code>/<code>false</code>) ফলাফল পাওয়া যায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অপারেটর</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>&gt;</code></td><td>বড়</td></tr>
              <tr><td><code>&lt;</code></td><td>ছোট</td></tr>
              <tr><td><code>&gt;=</code></td><td>বড় বা সমান</td></tr>
              <tr><td><code>&lt;=</code></td><td>ছোট বা সমান</td></tr>
              <tr><td><code>==</code></td><td>সমান (শুধু মান দেখে, টাইপ উপেক্ষা করে)</td></tr>
              <tr><td><code>===</code></td><td>সমান (মান <strong>ও</strong> টাইপ দুটোই মিলতে হবে)</td></tr>
              <tr><td><code>!=</code></td><td>সমান না (টাইপ উপেক্ষা করে)</td></tr>
              <tr><td><code>!==</code></td><td>সমান না (মান বা টাইপ যেকোনো একটা ভিন্ন হলেই)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> &gt; <span class="num">3</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> &lt; <span class="num">3</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> &gt;= <span class="num">5</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">true</div>
            <div class="console-line">false</div>
            <div class="console-line">true</div>
          </div>
        </div>

        <h3>🔹 == vs === — সবচেয়ে গুরুত্বপূর্ণ পার্থক্য</h3>
        <p><code>==</code> শুধু মান তুলনা করে, প্রয়োজনে ভিন্ন টাইপকে "জোর করে" একই টাইপে রূপান্তর করে তারপর তুলনা করে (একে বলে <strong>Type Coercion</strong>)। <code>===</code> কোনো রূপান্তর ছাড়াই মান ও টাইপ দুটোই হুবহু মিলছে কিনা চেক করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> == <span class="str">"5"</span>);   <span class="cmt">// টাইপ ভিন্ন (number vs string), কিন্তু == উপেক্ষা করে</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> === <span class="str">"5"</span>);  <span class="cmt">// টাইপ মেলে না, তাই === false দেয়</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="num">5</span> === <span class="num">5</span>);   <span class="cmt">// মান ও টাইপ দুটোই মিলছে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">true</div>
            <div class="console-line">false</div>
            <div class="console-line">true</div>
          </div>
        </div>

        <p>⚠️ <strong>বেস্ট প্র্যাকটিস — এই কোর্সের সবচেয়ে গুরুত্বপূর্ণ নিয়মগুলোর একটা:</strong> সবসময় <code>==</code>/<code>!=</code> এড়িয়ে <code>===</code>/<code>!==</code> ব্যবহার করো। <code>==</code>-এর "জোর করে টাইপ বদলে ফেলা" আচরণ মাঝেমধ্যে খুবই অপ্রত্যাশিত ফলাফল দেয় (যেমন <code>0 == false</code> আসলে <code>true</code>!), যা বাগ খুঁজে বের করা কঠিন করে তোলে। <code>===</code> সবসময় predictable (অনুমানযোগ্য), তাই এটাই আধুনিক JavaScript-এর স্ট্যান্ডার্ড অভ্যাস।</p>
      `
    },
    {
      id: "2.5",
      title: "লজিক্যাল অপারেটর",
      content: `
        <h3>🔹 ২.৫ লজিক্যাল অপারেটর (Logical Operators)</h3>
        <p>একাধিক শর্ত একসাথে যাচাই করতে লজিক্যাল অপারেটর ব্যবহার হয়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অপারেটর</th><th>নাম</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>&&</code></td><td>AND</td><td>দুটো শর্তই সত্যি হলে <code>true</code></td></tr>
              <tr><td><code>||</code></td><td>OR</td><td>যেকোনো একটা শর্ত সত্যি হলেই <code>true</code></td></tr>
              <tr><td><code>!</code></td><td>NOT</td><td>মানটাকে উল্টে দেয় (<code>true</code> → <code>false</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">age</span> = <span class="num">20</span>;
<span class="kw">const</span> <span class="fn">hasID</span> = <span class="num">true</span>;

<span class="cmt">// AND — দুটো শর্তই সত্যি হতে হবে</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">age</span> &gt;= <span class="num">18</span> && <span class="fn">hasID</span>);

<span class="cmt">// OR — যেকোনো একটা সত্যি হলেই যথেষ্ট</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">age</span> &lt; <span class="num">10</span> || <span class="fn">hasID</span>);

<span class="cmt">// NOT — মান উল্টে দেয়</span>
<span class="fn">console</span>.<span class="fn">log</span>(!<span class="fn">hasID</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">true</div>
            <div class="console-line">true</div>
            <div class="console-line">false</div>
          </div>
        </div>

        <p>💡 <strong>ব্যাখ্যা:</strong> প্রথম লাইনে <code>age >= 18</code> সত্যি (২০ ≥ ১৮) এবং <code>hasID</code>-ও সত্যি (<code>true</code>), তাই <code>&&</code>-এর ফলাফল <code>true</code>। দ্বিতীয় লাইনে <code>age < 10</code> মিথ্যা, কিন্তু <code>hasID</code> সত্যি — <code>||</code>-এ যেকোনো একটা সত্যি হলেই যথেষ্ট, তাই ফলাফল <code>true</code>। তৃতীয় লাইনে <code>!hasID</code> মানে <code>hasID</code> (যা <code>true</code>) এর উল্টো, তাই <code>false</code>।</p>

        <p>এই অপারেটরগুলো পরের মডিউলে (কন্ডিশনাল স্টেটমেন্ট) <code>if</code> এর সাথে মিলিয়ে সবচেয়ে বেশি ব্যবহার হবে — যেমন "যদি বয়স ১৮-এর বেশি হয় <strong>এবং</strong> আইডি কার্ড থাকে, তাহলে প্রবেশ করতে দাও"।</p>
      `
    },
    {
      id: "2.6",
      title: "স্ট্রিং ও টেমপ্লেট লিটারেল",
      content: `
        <h3>🔹 ২.৬ স্ট্রিং কনক্যাটেনেশন ও টেমপ্লেট লিটারেল</h3>
        <p>একাধিক স্ট্রিং বা স্ট্রিং+ভেরিয়েবল জোড়া লাগানোর (concatenate) দুইটা পদ্ধতি আছে।</p>

        <h4>পুরনো পদ্ধতি — + দিয়ে জোড়া লাগানো</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">name</span> = <span class="str">"নাজমুল"</span>;
<span class="kw">const</span> <span class="fn">age</span> = <span class="num">25</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"আমার নাম "</span> + <span class="fn">name</span> + <span class="str">" এবং বয়স "</span> + <span class="fn">age</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আমার নাম নাজমুল এবং বয়স 25</div>
          </div>
        </div>
        <p>⚠️ এই পদ্ধতিতে <code>+</code>, স্পেস, কোটেশন — সব হাতে ম্যানেজ করতে হয়, যা লম্বা বাক্যে বিরক্তিকর ও ভুলপ্রবণ হয়ে যায়।</p>

        <h4>আধুনিক পদ্ধতি — Template Literal (ব্যাকটিক)</h4>
        <p>সাধারণ কোটেশন (<code>" "</code> বা <code>' '</code>) এর বদলে <strong>ব্যাকটিক</strong> (<code>\` \`</code> — কীবোর্ডে সাধারণত ১ নম্বর কী-এর বাম পাশে) ব্যবহার করে, আর <code>\${ }</code> এর ভেতরে সরাসরি ভেরিয়েবল বসানো যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">name</span> = <span class="str">"নাজমুল"</span>;
<span class="kw">const</span> <span class="fn">age</span> = <span class="num">25</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`আমার নাম \${name} এবং বয়স \${age}\`</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আমার নাম নাজমুল এবং বয়স 25</div>
          </div>
        </div>

        <p>💡 লক্ষ করো — দুটো পদ্ধতিতেই ফলাফল <strong>হুবহু একই</strong>, কিন্তু Template Literal দিয়ে লেখা কোড অনেক পরিষ্কার ও পড়তে সহজ। <code>\${ }</code>-এর ভেতরে শুধু ভেরিয়েবল না, যেকোনো এক্সপ্রেশনও লেখা যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">price</span> = <span class="num">100</span>;
<span class="kw">const</span> <span class="fn">quantity</span> = <span class="num">3</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`মোট দাম: \${price * quantity} টাকা\`</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">মোট দাম: 300 টাকা</div>
          </div>
        </div>

        <p>⚠️ <strong>বেস্ট প্র্যাকটিস:</strong> আধুনিক JavaScript-এ যেকোনো স্ট্রিং জোড়া লাগানোর প্রয়োজনে <code>+</code>-এর বদলে সবসময় Template Literal ব্যবহার করাই স্ট্যান্ডার্ড অভ্যাস।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔤 পাঁচটা প্রাইমিটিভ টাইপ: String, Number, Boolean, Undefined, Null — <code>typeof</code> দিয়ে চেক করা যায় (তবে <code>typeof null</code> "object" দেখায়, এটা একটা পুরনো বাগ)।</div>
          <div class="takeaway-item">➕ অ্যারিথমেটিক: +, -, *, /, % (ভাগশেষ), ** (পাওয়ার)।</div>
          <div class="takeaway-item">📥 অ্যাসাইনমেন্ট: +=, -=, *=, /= — ভেরিয়েবলের মান নিজের সাথেই হিসাব করে আপডেট করে।</div>
          <div class="takeaway-item">⚖️ তুলনা: <code>===</code>/<code>!==</code> সবসময় ব্যবহার করো, <code>==</code>/<code>!=</code> এড়িয়ে চলো — টাইপ কোয়ার্শনের অপ্রত্যাশিত আচরণ থেকে বাঁচতে।</div>
          <div class="takeaway-item">🔗 লজিক্যাল: && (AND — দুটোই সত্যি), || (OR — একটা সত্যি হলেই), ! (NOT — উল্টে দেয়)।</div>
          <div class="takeaway-item">📝 Template Literal (<code>\`...\${variable}...\`</code>) — আধুনিক, পরিষ্কার স্ট্রিং লেখার পদ্ধতি, <code>+</code> দিয়ে জোড়া লাগানোর চেয়ে ভালো।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=3&section=3.0">
          পরের মডিউল: কন্ডিশনাল স্টেটমেন্ট
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  3: [
    {
      id: "3.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🔀 মডিউল ৩: কন্ডিশনাল স্টেটমেন্ট</h2>

        <h3>🔹 ৩.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>if</code> স্টেটমেন্ট বেসিক</li>
          <li><code>else</code> ও <code>else if</code></li>
          <li>Ternary Operator — সংক্ষিপ্ত if-else</li>
          <li><code>switch</code> স্টেটমেন্ট</li>
          <li>Truthy ও Falsy ভ্যালু — JavaScript-এর একটা গুরুত্বপূর্ণ ধারণা</li>
        </ul>
        <p>কন্ডিশনাল স্টেটমেন্ট দিয়ে প্রোগ্রামকে "সিদ্ধান্ত নিতে" শেখানো হয় — "যদি এই শর্ত সত্যি হয়, তাহলে এটা করো, নাহলে ওটা করো"। এটাই যেকোনো প্রোগ্রামিং ভাষার সবচেয়ে গুরুত্বপূর্ণ বিল্ডিং ব্লকগুলোর একটা।</p>
      `
    },
    {
      id: "3.1",
      title: "if স্টেটমেন্ট",
      content: `
        <h3>🔹 ৩.১ if স্টেটমেন্ট বেসিক</h3>
        <p><code>if</code> এর ভেতরে একটা শর্ত (condition) দেওয়া হয় — শর্তটা <code>true</code> হলে তবেই <code>{ }</code> এর ভেতরের কোড চলবে, <code>false</code> হলে সেই ব্লক পুরোপুরি বাদ যাবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">age</span> = <span class="num">20</span>;

<span class="kw">if</span> (<span class="fn">age</span> &gt;= <span class="num">18</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"তুমি প্রাপ্তবয়স্ক।"</span>);
}

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"এই লাইনটা সবসময় চলবে।"</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">তুমি প্রাপ্তবয়স্ক।</div>
            <div class="console-line">এই লাইনটা সবসময় চলবে।</div>
          </div>
        </div>

        <p>💡 যেহেতু <code>age >= 18</code> সত্যি (২০ ≥ ১৮), তাই <code>if</code>-এর ভেতরের <code>console.log()</code> চলেছে। এর পরের লাইনটা <code>if</code>-এর বাইরে থাকায় শর্ত যাই হোক না কেন সবসময়ই চলে।</p>

        <p><strong>শর্ত মিথ্যা হলে কী হয় দেখা যাক:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">age</span> = <span class="num">15</span>;

<span class="kw">if</span> (<span class="fn">age</span> &gt;= <span class="num">18</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"তুমি প্রাপ্তবয়স্ক।"</span>);
}

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"এই লাইনটা সবসময় চলবে।"</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">এই লাইনটা সবসময় চলবে।</div>
          </div>
        </div>
        <p>💡 এবার <code>age >= 18</code> মিথ্যা (১৫ ≥ ১৮ না), তাই <code>if</code>-এর ভেতরের লাইনটা <strong>একদমই চলেনি</strong> — CONSOLE-এ শুধু বাইরের লাইনটাই দেখা যাচ্ছে।</p>
      `
    },
    {
      id: "3.2",
      title: "else ও else if",
      content: `
        <h3>🔹 ৩.২ else — শর্ত মিথ্যা হলে বিকল্প কাজ</h3>
        <p><code>else</code> ব্যবহার করলে শর্ত মিথ্যা হলে কী হবে তাও বলে দেওয়া যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">age</span> = <span class="num">15</span>;

<span class="kw">if</span> (<span class="fn">age</span> &gt;= <span class="num">18</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"তুমি প্রাপ্তবয়স্ক।"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"তুমি এখনো প্রাপ্তবয়স্ক না।"</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">তুমি এখনো প্রাপ্তবয়স্ক না।</div>
          </div>
        </div>

        <h3>🔹 else if — একাধিক শর্ত পরপর চেক করা</h3>
        <p>দুইয়ের বেশি সম্ভাবনা থাকলে <code>else if</code> দিয়ে একাধিক শর্ত ক্রমানুসারে চেক করা যায়। JavaScript উপর থেকে নিচে চেক করে, <strong>প্রথম যে শর্তটা সত্যি হয় সেটার ব্লকই চলে</strong>, তারপর বাকি সব বাদ যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">marks</span> = <span class="num">75</span>;

<span class="kw">if</span> (<span class="fn">marks</span> &gt;= <span class="num">90</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"গ্রেড: A+"</span>);
} <span class="kw">else if</span> (<span class="fn">marks</span> &gt;= <span class="num">80</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"গ্রেড: A"</span>);
} <span class="kw">else if</span> (<span class="fn">marks</span> &gt;= <span class="num">70</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"গ্রেড: A-"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"গ্রেড: B বা তার নিচে"</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">গ্রেড: A-</div>
          </div>
        </div>

        <p>💡 <strong>ধাপে ধাপে বোঝা যাক কেন শুধু "A-" প্রিন্ট হলো:</strong> <code>marks = 75</code>। প্রথম শর্ত <code>marks >= 90</code> — মিথ্যা (৭৫ ≥ ৯০ না)। দ্বিতীয় শর্ত <code>marks >= 80</code> — মিথ্যা। তৃতীয় শর্ত <code>marks >= 70</code> — সত্যি (৭৫ ≥ ৭০)! তাই এই ব্লক চলে ও "গ্রেড: A-" প্রিন্ট হয়, এবং এরপর <code>else</code> ব্লক পুরোপুরি উপেক্ষা করা হয় — যদিও সেটাও কারিগরিভাবে "সত্যি" হতে পারতো, JavaScript প্রথম মিলে যাওয়া শর্তের পরই থেমে যায়।</p>
      `
    },
    {
      id: "3.3",
      title: "Ternary Operator",
      content: `
        <h3>🔹 ৩.৩ Ternary Operator — সংক্ষিপ্ত if-else</h3>
        <p>যখন if-else দিয়ে শুধু একটা সাধারণ মান বেছে নেওয়া হয়, তখন পুরো <code>if...else</code> ব্লক না লিখে <strong>Ternary Operator</strong> (<code>? :</code>) দিয়ে এক লাইনেই লেখা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// পুরনো পদ্ধতি — if...else ব্যবহার করে</span>
<span class="kw">const</span> <span class="fn">age</span> = <span class="num">20</span>;
<span class="kw">let</span> <span class="fn">status</span>;

<span class="kw">if</span> (<span class="fn">age</span> &gt;= <span class="num">18</span>) {
  <span class="fn">status</span> = <span class="str">"প্রাপ্তবয়স্ক"</span>;
} <span class="kw">else</span> {
  <span class="fn">status</span> = <span class="str">"নাবালক"</span>;
}
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">status</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">প্রাপ্তবয়স্ক</div>
          </div>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// একই কাজ Ternary Operator দিয়ে — এক লাইনে!</span>
<span class="kw">const</span> <span class="fn">age</span> = <span class="num">20</span>;
<span class="kw">const</span> <span class="fn">status</span> = <span class="fn">age</span> &gt;= <span class="num">18</span> ? <span class="str">"প্রাপ্তবয়স্ক"</span> : <span class="str">"নাবালক"</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">status</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">প্রাপ্তবয়স্ক</div>
          </div>
        </div>

        <p>💡 <strong>সিনট্যাক্স ভেঙে বোঝা যাক:</strong> <code>শর্ত ? যদি-সত্যি-হয়-এই-মান : যদি-মিথ্যা-হয়-এই-মান</code>। দুটো কোডই একদম একই ফলাফল দিয়েছে — ৭ লাইনের <code>if...else</code> ব্লক মাত্র ১ লাইনে নেমে এসেছে। তবে এটা শুধুই <strong>সহজ, একক মান বাছাইয়ের</strong> জন্য ব্যবহার করা উচিত — জটিল লজিকের জন্য সাধারণ <code>if...else</code>-ই বেশি পড়ার-উপযোগী।</p>
      `
    },
    {
      id: "3.4",
      title: "switch স্টেটমেন্ট",
      content: `
        <h3>🔹 ৩.৪ switch স্টেটমেন্ট</h3>
        <p>একই ভেরিয়েবলের অনেকগুলো সম্ভাব্য নির্দিষ্ট মান (যেমন দিনের নাম, অবস্থা কোড) আলাদা আলাদাভাবে হ্যান্ডেল করতে হলে, অনেকগুলো <code>else if</code> এর বদলে <code>switch</code> ব্যবহার করলে কোড আরও পরিষ্কার দেখায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">day</span> = <span class="str">"শুক্রবার"</span>;

<span class="kw">switch</span> (<span class="fn">day</span>) {
  <span class="kw">case</span> <span class="str">"শনিবার"</span>:
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"সপ্তাহের প্রথম দিন"</span>);
    <span class="kw">break</span>;
  <span class="kw">case</span> <span class="str">"শুক্রবার"</span>:
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"সাপ্তাহিক ছুটির দিন"</span>);
    <span class="kw">break</span>;
  <span class="kw">default</span>:
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"সাধারণ কর্মদিবস"</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">সাপ্তাহিক ছুটির দিন</div>
          </div>
        </div>

        <p>💡 <code>day</code>-এর মান <code>"শুক্রবার"</code>-এর সাথে <code>case "শুক্রবার":</code> মিলে যাওয়ায় সেই ব্লকটাই চলেছে। <code>default:</code> ব্লক তখনই চলে যখন কোনো <code>case</code>-ই মেলে না — এটা <code>else</code>-এর মতোই কাজ করে।</p>

        <p>⚠️ <strong>break ভুলে গেলে কী হয়:</strong> প্রতিটা <code>case</code>-এর শেষে <code>break;</code> লেখা আবশ্যক — এটা ছাড়া JavaScript সেই case-এর কাজ শেষ করার পরও থামে না, বরং নিচের case-এর কোডও চালাতে থাকে (একে বলে "fall-through")। এটা একটা খুবই কমন ভুল, তাই প্রতিটা <code>case</code>-এর শেষে <code>break;</code> লেখা ভুলে যাওয়া চলবে না।</p>
      `
    },
    {
      id: "3.5",
      title: "Truthy ও Falsy ভ্যালু",
      content: `
        <h3>🔹 ৩.৫ Truthy ও Falsy ভ্যালু</h3>
        <p><code>if</code>-এর ভেতরে সবসময় সরাসরি <code>true</code>/<code>false</code> দিতে হয় না — JavaScript যেকোনো ভ্যালুকে "সত্যি নাকি মিথ্যার মতো আচরণ করবে" তা নিজে থেকেই ঠিক করে ফেলে। এটাকেই বলে <strong>Truthy</strong> ও <strong>Falsy</strong>।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>Falsy ভ্যালু (এই ৬টাই একমাত্র falsy)</th><th>বাকি সব ভ্যালু</th></tr></thead>
            <tbody>
              <tr><td><code>false</code>, <code>0</code>, <code>""</code> (খালি স্ট্রিং), <code>null</code>, <code>undefined</code>, <code>NaN</code></td><td><strong>Truthy</strong> — যেকোনো নন-খালি স্ট্রিং, যেকোনো নন-শূন্য সংখ্যা, অ্যারে/অবজেক্ট (এমনকি খালি হলেও!)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">userName</span> = <span class="str">""</span>;  <span class="cmt">// খালি স্ট্রিং</span>

<span class="kw">if</span> (<span class="fn">userName</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"নাম আছে"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"নাম খালি!"</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাম খালি!</div>
          </div>
        </div>

        <p>💡 লক্ষ করো — <code>if (userName)</code>-এ কোনো <code>=== ""</code> বা তুলনা লেখা হয়নি, শুধু ভেরিয়েবলটাই বসানো হয়েছে। যেহেতু খালি স্ট্রিং (<code>""</code>) falsy, তাই <code>if</code>-এর শর্ত মিথ্যা ধরা হয়েছে এবং <code>else</code> ব্লক চলেছে। ফর্ম ইনপুট খালি আছে কিনা চেক করতে এই প্যাটার্ন খুবই কমন — <code>if (userName) { ... }</code> লেখা <code>if (userName !== "") { ... }</code> লেখার চেয়ে ছোট ও বেশি প্রচলিত।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔀 <code>if (শর্ত) { ... }</code> — শর্ত true হলে ব্লক চলে, false হলে সম্পূর্ণ বাদ যায়।</div>
          <div class="takeaway-item">🔁 <code>else if</code> দিয়ে একাধিক শর্ত ক্রমানুসারে চেক হয় — প্রথম যেটা সত্যি, শুধু সেটাই চলে।</div>
          <div class="takeaway-item">❓ Ternary Operator (<code>শর্ত ? সত্যি_হলে : মিথ্যা_হলে</code>) — সহজ, একক মান বাছাইয়ের জন্য এক-লাইনের if-else।</div>
          <div class="takeaway-item">🔘 <code>switch</code> — একই ভেরিয়েবলের অনেক নির্দিষ্ট মান হ্যান্ডেল করতে; প্রতিটা <code>case</code>-এর শেষে <code>break;</code> ভুলে যাওয়া চলবে না।</div>
          <div class="takeaway-item">✅ Falsy মাত্র ৬টা: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code> — বাকি সবকিছুই truthy (খালি অ্যারে/অবজেক্টও)।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=4&section=4.0">
          পরের মডিউল: লুপ (Loops)
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  4: [
    {
      id: "4.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🔁 মডিউল ৪: লুপ (Loops)</h2>

        <h3>🔹 ৪.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>for</code> লুপ বেসিক</li>
          <li><code>while</code> লুপ</li>
          <li><code>do...while</code> লুপ</li>
          <li><code>break</code> ও <code>continue</code></li>
          <li><code>for...of</code> লুপ (অ্যারে/স্ট্রিং-এর জন্য)</li>
          <li>নেস্টেড লুপ (লুপের ভেতরে লুপ)</li>
        </ul>
        <p><strong>লুপ</strong> দিয়ে একই কাজ বারবার পুনরাবৃত্তি করা যায়, হাতে বারবার একই কোড না লিখেই — যেমন ১ থেকে ১০০ পর্যন্ত সব সংখ্যা প্রিন্ট করা, বা একটা তালিকার প্রতিটা আইটেম নিয়ে কিছু করা।</p>
      `
    },
    {
      id: "4.1",
      title: "for লুপ",
      content: `
        <h3>🔹 ৪.১ for লুপ বেসিক</h3>
        <p><code>for</code> লুপের তিনটা অংশ থাকে, সেমিকোলন দিয়ে আলাদা করা: <strong>শুরুর মান</strong>, <strong>শর্ত</strong> (যতক্ষণ সত্যি ততক্ষণ চলবে), আর <strong>প্রতি রাউন্ডের পর কী হবে</strong>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">for</span> (<span class="kw">let</span> <span class="fn">i</span> = <span class="num">1</span>; <span class="fn">i</span> &lt;= <span class="num">5</span>; <span class="fn">i</span>++) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">i</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">1</div>
            <div class="console-line">2</div>
            <div class="console-line">3</div>
            <div class="console-line">4</div>
            <div class="console-line">5</div>
          </div>
        </div>

        <p>💡 <strong>ধাপে ধাপে কী ঘটছে:</strong></p>
        <ul>
          <li><code>let i = 1</code> — লুপ শুরু হওয়ার আগে একবারই চলে, <code>i</code>-কে ১ দিয়ে শুরু করে</li>
          <li><code>i <= 5</code> — প্রতি রাউন্ডের শুরুতে চেক হয়; সত্যি হলে লুপের ভেতরের কোড চলে, মিথ্যা হলে লুপ থেমে যায়</li>
          <li><code>i++</code> — প্রতি রাউন্ড শেষে চলে, <code>i</code>-এর মান ১ বাড়িয়ে দেয়</li>
        </ul>
        <p>তাই ক্রম এমন: <code>i=1</code> (প্রিন্ট ১) → <code>i++</code> করে <code>i=2</code> (প্রিন্ট ২) → ... → <code>i=6</code> হলে <code>6 <= 5</code> মিথ্যা, লুপ থেমে যায়। এই কারণেই ঠিক ৫ বার (১ থেকে ৫) প্রিন্ট হয়েছে, ৬ প্রিন্ট হয়নি।</p>

        <p><strong>উল্টো দিকে গোনা:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">for</span> (<span class="kw">let</span> <span class="fn">i</span> = <span class="num">5</span>; <span class="fn">i</span> &gt;= <span class="num">1</span>; <span class="fn">i</span>--) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">i</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">5</div>
            <div class="console-line">4</div>
            <div class="console-line">3</div>
            <div class="console-line">2</div>
            <div class="console-line">1</div>
          </div>
        </div>
        <p>💡 এখানে <code>i--</code> দিয়ে প্রতি রাউন্ডে ১ কমানো হচ্ছে, আর শর্ত <code>i >= 1</code> — তাই ৫ থেকে উল্টো দিকে ১ পর্যন্ত গোনা হয়েছে।</p>
      `
    },
    {
      id: "4.2",
      title: "while লুপ",
      content: `
        <h3>🔹 ৪.২ while লুপ</h3>
        <p><code>while</code> লুপ শুধু একটা শর্ত নেয় — শর্ত সত্যি থাকা পর্যন্ত লুপ চলতেই থাকে। শুরুর মান ও পরের ধাপ নিজে থেকেই লিখতে হয়, <code>for</code>-এর মতো একসাথে বাঁধা থাকে না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">count</span> = <span class="num">1</span>;

<span class="kw">while</span> (<span class="fn">count</span> &lt;= <span class="num">4</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`রাউন্ড \${count}\`</span>);
  <span class="fn">count</span>++;
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">রাউন্ড 1</div>
            <div class="console-line">রাউন্ড 2</div>
            <div class="console-line">রাউন্ড 3</div>
            <div class="console-line">রাউন্ড 4</div>
          </div>
        </div>

        <p>⚠️ <strong>সবচেয়ে বড় সতর্কতা — Infinite Loop (অসীম লুপ):</strong> <code>while</code> লুপে <code>count++</code> লিখতে ভুলে গেলে <code>count</code> কখনো বাড়বে না, শর্ত সবসময় সত্যি থেকে যাবে, আর লুপ কখনো থামবে না — ব্রাউজার/প্রোগ্রাম আটকে (freeze) যাবে। তাই <code>while</code> লুপ লেখার সময় সবসময় নিশ্চিত করো যে ভেতরে এমন কিছু আছে যা শেষ পর্যন্ত শর্তটাকে মিথ্যা করে দেবে।</p>

        <p>💡 <strong>কখন for-এর বদলে while ব্যবহার করবে:</strong> ঠিক কতবার লুপ চলবে তা যদি আগে থেকে জানা না থাকে (যেমন "ইউজার সঠিক পাসওয়ার্ড না দেওয়া পর্যন্ত জিজ্ঞেস করতে থাকো"), তখন <code>while</code> বেশি স্বাভাবিক মানানসই — নির্দিষ্ট সংখ্যক বার পুনরাবৃত্তির জন্য <code>for</code> বেশি ব্যবহৃত হয়।</p>
      `
    },
    {
      id: "4.3",
      title: "do...while লুপ",
      content: `
        <h3>🔹 ৪.৩ do...while লুপ</h3>
        <p><code>do...while</code>, <code>while</code>-এরই একটা ভ্যারিয়েন্ট — মূল পার্থক্য হলো, এটা শর্ত চেক করার <strong>আগেই</strong> একবার কোড ব্লক চালিয়ে নেয়। মানে শর্ত শুরুতেই মিথ্যা হলেও, <code>do...while</code> ব্লকটা <strong>অন্তত একবার</strong> চলবেই।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">num</span> = <span class="num">10</span>;

<span class="kw">do</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`num এখন \${num}\`</span>);
  <span class="fn">num</span>++;
} <span class="kw">while</span> (<span class="fn">num</span> &lt; <span class="num">5</span>);   <span class="cmt">// শর্ত শুরুতেই মিথ্যা (10 &lt; 5 না)</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">num এখন 10</div>
          </div>
        </div>

        <p>💡 লক্ষ করো — শর্ত <code>num < 5</code> শুরুতেই মিথ্যা (১০ < ৫ না), তাই সাধারণ <code>while</code> লুপ হলে একবারও চলত না। কিন্তু <code>do...while</code> আগে ব্লকটা চালিয়ে নেয়, <strong>তারপর</strong> শর্ত চেক করে — তাই "num এখন 10" ঠিক একবার প্রিন্ট হয়েছে, এরপর শর্ত চেক করে দেখে মিথ্যা, তাই লুপ থেমে যায়।</p>

        <p>💡 <strong>কখন ব্যবহার করবে:</strong> যখন কোডটা <strong>অন্তত একবার</strong> চালানো নিশ্চিত করতে হয় (যেমন প্রথমবার একটা মেনু দেখানো, তারপর ইউজার আবার দেখতে চায় কিনা জিজ্ঞেস করা) — এই বিশেষ প্রয়োজন ছাড়া সাধারণত সাধারণ <code>while</code> বা <code>for</code>-ই যথেষ্ট।</p>
      `
    },
    {
      id: "4.4",
      title: "break ও continue",
      content: `
        <h3>🔹 ৪.৪ break — লুপ পুরোপুরি থামানো</h3>
        <p><code>break</code> চলার সাথে সাথে পুরো লুপ সম্পূর্ণ বন্ধ হয়ে যায়, বাকি রাউন্ড আর চলে না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">for</span> (<span class="kw">let</span> <span class="fn">i</span> = <span class="num">1</span>; <span class="fn">i</span> &lt;= <span class="num">10</span>; <span class="fn">i</span>++) {
  <span class="kw">if</span> (<span class="fn">i</span> === <span class="num">4</span>) {
    <span class="kw">break</span>;   <span class="cmt">// i চার হলেই পুরো লুপ বন্ধ</span>
  }
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">i</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">1</div>
            <div class="console-line">2</div>
            <div class="console-line">3</div>
          </div>
        </div>
        <p>💡 লুপ ১০ পর্যন্ত যাওয়ার কথা ছিল, কিন্তু <code>i</code> ৪ হওয়ার সাথে সাথে <code>break</code> চলে পুরো লুপ থেমে গেছে — তাই মাত্র ১, ২, ৩ প্রিন্ট হয়েছে, ৪ থেকে ১০ পর্যন্ত আর কিছুই না।</p>

        <h3>🔹 continue — শুধু এই রাউন্ড স্কিপ করা</h3>
        <p><code>continue</code>, <code>break</code>-এর চেয়ে হালকা — এটা পুরো লুপ বন্ধ করে না, শুধু <strong>বর্তমান রাউন্ডটা</strong> স্কিপ করে পরের রাউন্ডে চলে যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">for</span> (<span class="kw">let</span> <span class="fn">i</span> = <span class="num">1</span>; <span class="fn">i</span> &lt;= <span class="num">5</span>; <span class="fn">i</span>++) {
  <span class="kw">if</span> (<span class="fn">i</span> === <span class="num">3</span>) {
    <span class="kw">continue</span>;   <span class="cmt">// শুধু 3 স্কিপ হবে, লুপ থামবে না</span>
  }
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">i</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">1</div>
            <div class="console-line">2</div>
            <div class="console-line">4</div>
            <div class="console-line">5</div>
          </div>
        </div>
        <p>💡 লক্ষ করো — ৩ বাদে ১, ২, ৪, ৫ সবই প্রিন্ট হয়েছে, লুপ পুরোপুরি ৫ পর্যন্ত চলেছে। শুধু <code>i === 3</code> হওয়ার রাউন্ডে <code>console.log(i)</code> লাইনটা পর্যন্ত না পৌঁছেই পরের রাউন্ডে চলে গেছে <code>continue</code>-এর কারণে।</p>

        <p><strong>সহজে মনে রাখার নিয়ম:</strong> <code>break</code> = "পুরো লুপ বন্ধ করো", <code>continue</code> = "শুধু এই একটা রাউন্ড বাদ দিয়ে চালিয়ে যাও"।</p>
      `
    },
    {
      id: "4.5",
      title: "for...of লুপ",
      content: `
        <h3>🔹 ৪.৫ for...of লুপ — অ্যারে/স্ট্রিং-এর জন্য</h3>
        <p><code>for...of</code> একটা বিশেষ ধরনের লুপ, যা সরাসরি একটা অ্যারে (বা স্ট্রিং)-এর প্রতিটা আইটেমের উপর দিয়ে ঘোরে — ইনডেক্স নিয়ে মাথা ঘামানোর দরকার হয় না (অ্যারে বিস্তারিত মডিউল ৬-এ শিখবে, এখানে শুধু পরিচিতি)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">fruits</span> = [<span class="str">"আম"</span>, <span class="str">"কাঁঠাল"</span>, <span class="str">"লিচু"</span>];

<span class="kw">for</span> (<span class="kw">const</span> <span class="fn">fruit</span> <span class="kw">of</span> <span class="fn">fruits</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruit</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আম</div>
            <div class="console-line">কাঁঠাল</div>
            <div class="console-line">লিচু</div>
          </div>
        </div>

        <p>💡 প্রতি রাউন্ডে <code>fruit</code> ভেরিয়েবলটা অ্যারের পরের আইটেমের মান ধারণ করে — প্রথম রাউন্ডে <code>fruit = "আম"</code>, দ্বিতীয় রাউন্ডে <code>fruit = "কাঁঠাল"</code>, এভাবে চলতে থাকে যতক্ষণ না অ্যারের সব আইটেম শেষ হয়। এই লুপটা <code>for (let i = 0; i < fruits.length; i++) { fruits[i] }</code> লেখার চেয়ে অনেক পরিষ্কার ও সহজ — অ্যারে নিয়ে কাজ করার সময় এটাই সবচেয়ে বেশি ব্যবহৃত হবে।</p>
      `
    },
    {
      id: "4.6",
      title: "নেস্টেড লুপ",
      content: `
        <h3>🔹 ৪.৬ নেস্টেড লুপ (Nested Loop)</h3>
        <p>একটা লুপের ভেতরে আরেকটা লুপ রাখা যায় — এটাকেই নেস্টেড লুপ বলে। বাইরের লুপ একবার ঘুরলে, ভেতরের লুপ <strong>সম্পূর্ণভাবে</strong> শুরু থেকে শেষ পর্যন্ত ঘোরে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">for</span> (<span class="kw">let</span> <span class="fn">i</span> = <span class="num">1</span>; <span class="fn">i</span> &lt;= <span class="num">2</span>; <span class="fn">i</span>++) {
  <span class="kw">for</span> (<span class="kw">let</span> <span class="fn">j</span> = <span class="num">1</span>; <span class="fn">j</span> &lt;= <span class="num">3</span>; <span class="fn">j</span>++) {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`i=\${i}, j=\${j}\`</span>);
  }
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">i=1, j=1</div>
            <div class="console-line">i=1, j=2</div>
            <div class="console-line">i=1, j=3</div>
            <div class="console-line">i=2, j=1</div>
            <div class="console-line">i=2, j=2</div>
            <div class="console-line">i=2, j=3</div>
          </div>
        </div>

        <p>💡 <strong>ধাপে ধাপে বোঝা যাক:</strong> বাইরের লুপে <code>i=1</code> হওয়ার পর, ভেতরের লুপ <code>j</code>-কে ১ থেকে ৩ পর্যন্ত সম্পূর্ণ ঘুরিয়ে ফেলে (৩ বার প্রিন্ট)। তারপর বাইরের লুপ পরের রাউন্ডে যায়, <code>i=2</code> হয়, আর ভেতরের লুপ আবার নতুন করে ১ থেকে ৩ পর্যন্ত ঘোরে। মোট রাউন্ড সংখ্যা: বাইরের ২ বার × ভেতরের ৩ বার = ৬ বার প্রিন্ট — ঠিক যা CONSOLE-এ দেখা যাচ্ছে।</p>

        <p>নেস্টেড লুপ প্রায়ই ব্যবহার হয় ২-মাত্রিক ডাটা (যেমন একটা গ্রিড, দাবার বোর্ড, বা টেবিলের সারি-কলাম) নিয়ে কাজ করার সময়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔢 <code>for (শুরু; শর্ত; পরের-ধাপ)</code> — নির্দিষ্ট সংখ্যক বার পুনরাবৃত্তির জন্য সবচেয়ে বেশি ব্যবহৃত লুপ।</div>
          <div class="takeaway-item">🔄 <code>while (শর্ত)</code> — কতবার চলবে আগে থেকে জানা না থাকলে ব্যবহার হয়; ভেতরে শর্তকে একসময় মিথ্যা করার কোড থাকা আবশ্যক (নাহলে infinite loop)।</div>
          <div class="takeaway-item">1️⃣ <code>do...while</code> — শর্ত চেক করার আগেই ব্লক অন্তত একবার চালায়।</div>
          <div class="takeaway-item">⛔ <code>break</code> পুরো লুপ থামায়; <code>continue</code> শুধু বর্তমান রাউন্ড স্কিপ করে, লুপ চলতে থাকে।</div>
          <div class="takeaway-item">📋 <code>for...of</code> — অ্যারে/স্ট্রিং-এর প্রতিটা আইটেমের উপর সহজে ঘোরার জন্য, ইনডেক্স ছাড়াই।</div>
          <div class="takeaway-item">🪆 নেস্টেড লুপে বাইরের লুপ একবার ঘুরলে ভেতরের লুপ সম্পূর্ণভাবে ঘোরে — মোট রাউন্ড = বাইরের সংখ্যা × ভেতরের সংখ্যা।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=5&section=5.0">
          পরের মডিউল: ফাংশন (Functions)
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  5: [
    {
      id: "5.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>⚙️ মডিউল ৫: ফাংশন (Functions)</h2>

        <h3>🔹 ৫.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>ফাংশন ডিক্লেয়ারেশন বেসিক</li>
          <li>প্যারামিটার ও আর্গুমেন্ট</li>
          <li><code>return</code> স্টেটমেন্ট</li>
          <li>ফাংশন এক্সপ্রেশন</li>
          <li>অ্যারো ফাংশন (Arrow Function) — আধুনিক সংক্ষিপ্ত সিনট্যাক্স</li>
          <li>ডিফল্ট প্যারামিটার</li>
          <li>স্কোপ (Scope) — লোকাল vs গ্লোবাল ভেরিয়েবল</li>
        </ul>
        <p><strong>ফাংশন</strong> হলো কোডের একটা পুনঃব্যবহারযোগ্য ব্লক — একবার লিখে রাখলে যতবার দরকার ততবার "কল" করা যায়, বারবার একই কোড না লিখেই। এটা প্রোগ্রামিংয়ের সবচেয়ে গুরুত্বপূর্ণ ধারণাগুলোর একটা।</p>
      `
    },
    {
      id: "5.1",
      title: "ফাংশন ডিক্লেয়ারেশন বেসিক",
      content: `
        <h3>🔹 ৫.১ ফাংশন ডিক্লেয়ারেশন বেসিক</h3>
        <p><code>function</code> কীওয়ার্ড দিয়ে একটা ফাংশন সংজ্ঞায়িত (define) করা হয়, তারপর নাম লিখে সেটাকে "কল" (ডাকা) করা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// ধাপ ১: ফাংশন সংজ্ঞায়িত করা (এখনো চলেনি)</span>
<span class="kw">function</span> <span class="fn">greet</span>() {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"হ্যালো, স্বাগতম!"</span>);
}

<span class="cmt">// ধাপ ২: ফাংশন কল করা — এখন এটা চলবে</span>
<span class="fn">greet</span>();
<span class="fn">greet</span>();  <span class="cmt">// আবার কল করলে আবার চলবে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">হ্যালো, স্বাগতম!</div>
            <div class="console-line">হ্যালো, স্বাগতম!</div>
          </div>
        </div>

        <p>💡 <strong>গুরুত্বপূর্ণ:</strong> ফাংশন <em>সংজ্ঞায়িত</em> করলেই (লাইন ২-৪) সেটার ভেতরের কোড চলে না — শুধু <code>greet()</code> লিখে <strong>কল</strong> করলেই তখন ভেতরের কোড এক্সিকিউট হয়। এখানে ২ বার কল করায় ২ বার প্রিন্ট হয়েছে — একই ফাংশন যতবার ইচ্ছা কল করা যায়।</p>
      `
    },
    {
      id: "5.2",
      title: "প্যারামিটার ও আর্গুমেন্ট",
      content: `
        <h3>🔹 ৫.২ প্যারামিটার ও আর্গুমেন্ট</h3>
        <p><strong>প্যারামিটার</strong> হলো ফাংশনের ভেতরে যে "ফাঁকা জায়গা" রাখা হয় বাইরে থেকে ডাটা নেওয়ার জন্য, আর <strong>আর্গুমেন্ট</strong> হলো কল করার সময় সেই জায়গায় প্রকৃতপক্ষে যে মান পাঠানো হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// "name" হলো প্যারামিটার</span>
<span class="kw">function</span> <span class="fn">greet</span>(<span class="fn">name</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`হ্যালো, \${name}!\`</span>);
}

<span class="cmt">// "নাজমুল" ও "রাফি" হলো আর্গুমেন্ট</span>
<span class="fn">greet</span>(<span class="str">"নাজমুল"</span>);
<span class="fn">greet</span>(<span class="str">"রাফি"</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">হ্যালো, নাজমুল!</div>
            <div class="console-line">হ্যালো, রাফি!</div>
          </div>
        </div>

        <p>💡 প্রথমবার কল করার সময় <code>name</code>-এর মান <code>"নাজমুল"</code> বসে, দ্বিতীয়বার <code>"রাফি"</code> বসে — একই ফাংশন, কিন্তু ভিন্ন আর্গুমেন্ট দেওয়ায় ভিন্ন ফলাফল এসেছে। এটাই ফাংশনের আসল শক্তি — একই লজিক, ভিন্ন ডাটায় পুনঃব্যবহার।</p>

        <p><strong>একাধিক প্যারামিটার:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">introduce</span>(<span class="fn">name</span>, <span class="fn">age</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`আমার নাম \${name}, বয়স \${age}\`</span>);
}

<span class="fn">introduce</span>(<span class="str">"নাজমুল"</span>, <span class="num">25</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আমার নাম নাজমুল, বয়স 25</div>
          </div>
        </div>
        <p>💡 আর্গুমেন্ট যে ক্রমে দেওয়া হয়, প্যারামিটারও ঠিক সেই ক্রমেই মান পায় — প্রথম আর্গুমেন্ট (<code>"নাজমুল"</code>) প্রথম প্যারামিটারে (<code>name</code>), দ্বিতীয় আর্গুমেন্ট (<code>25</code>) দ্বিতীয় প্যারামিটারে (<code>age</code>) বসেছে।</p>
      `
    },
    {
      id: "5.3",
      title: "return স্টেটমেন্ট",
      content: `
        <h3>🔹 ৫.৩ return স্টেটমেন্ট</h3>
        <p><code>return</code> দিয়ে একটা ফাংশন একটা মান "ফেরত" পাঠায়, যা পরে একটা ভেরিয়েবলে সেভ করা বা অন্য কোথাও ব্যবহার করা যায়। এটা শুধু <code>console.log()</code> দিয়ে প্রিন্ট করা থেকে সম্পূর্ণ ভিন্ন — return করা মান পরে ব্যবহারযোগ্য।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">add</span>(<span class="fn">a</span>, <span class="fn">b</span>) {
  <span class="kw">return</span> <span class="fn">a</span> + <span class="fn">b</span>;
}

<span class="kw">const</span> <span class="fn">result</span> = <span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">result</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">result</span> * <span class="num">2</span>);  <span class="cmt">// রিটার্ন করা মান আবার ব্যবহার করা</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">8</div>
            <div class="console-line">16</div>
          </div>
        </div>

        <p>💡 <code>add(5, 3)</code> কল করার সময় ফাংশনের ভেতরে <code>a + b</code> হিসাব হয়ে <code>8</code> রিটার্ন হয়, যা <code>result</code> ভেরিয়েবলে সেভ হয়ে যায়। এরপর <code>result</code>-কে আবার <code>* 2</code> করা গেছে — কারণ এটা এখন একটা সাধারণ Number ভেরিয়েবল, ঠিক যেমন সরাসরি <code>8</code> লিখলে হতো।</p>

        <p>⚠️ <strong>সতর্কতা — কমন ভুল:</strong> <code>return</code> চলার সাথে সাথেই ফাংশনের বাকি কোড থেমে যায় — <code>return</code>-এর পরের কোনো লাইন আর চলে না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">checkAge</span>(<span class="fn">age</span>) {
  <span class="kw">return</span> <span class="str">"ফলাফল পাঠানো হলো"</span>;
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"এই লাইনটা কখনোই চলবে না"</span>);  <span class="cmt">// return এর পরে, তাই মৃত কোড</span>
}

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">checkAge</span>(<span class="num">20</span>));</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">ফলাফল পাঠানো হলো</div>
          </div>
        </div>
        <p>💡 লক্ষ করো — দ্বিতীয় <code>console.log()</code> কখনোই প্রিন্ট হয়নি, কারণ তার আগেই <code>return</code> ফাংশনটা শেষ করে দিয়েছে। তাই <code>return</code>-এর পরে কোনো কোড লেখার দরকার নেই, সেটা কখনো চলবে না।</p>
      `
    },
    {
      id: "5.4",
      title: "ফাংশন এক্সপ্রেশন",
      content: `
        <h3>🔹 ৫.৪ ফাংশন এক্সপ্রেশন (Function Expression)</h3>
        <p>ফাংশন লেখার আরেকটা পদ্ধতি হলো একটা ভেরিয়েবলে ফাংশনটাকে "মান" হিসেবে সেভ করা — একে বলে Function Expression।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// Function Declaration (আগের পদ্ধতি)</span>
<span class="kw">function</span> <span class="fn">square1</span>(<span class="fn">n</span>) {
  <span class="kw">return</span> <span class="fn">n</span> * <span class="fn">n</span>;
}

<span class="cmt">// Function Expression — const ভেরিয়েবলে ফাংশন সেভ করা</span>
<span class="kw">const</span> <span class="fn">square2</span> = <span class="kw">function</span>(<span class="fn">n</span>) {
  <span class="kw">return</span> <span class="fn">n</span> * <span class="fn">n</span>;
};

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">square1</span>(<span class="num">4</span>));
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">square2</span>(<span class="num">4</span>));</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">16</div>
            <div class="console-line">16</div>
          </div>
        </div>

        <p>💡 দুটোই একই ফলাফল দেয়, শুধু লেখার ধরন আলাদা। একটা গুরুত্বপূর্ণ পার্থক্য: Function Declaration (<code>function name() {}</code>) সংজ্ঞায়িত করার <strong>আগেও</strong> কল করা যায় (JavaScript এটাকে ফাইলের শুরুতে "তুলে নেয়", একে বলে Hoisting), কিন্তু Function Expression (<code>const name = function() {}</code>) সংজ্ঞায়িত হওয়ার <strong>আগে</strong> কল করলে এরর দেবে।</p>
      `
    },
    {
      id: "5.5",
      title: "অ্যারো ফাংশন",
      content: `
        <h3>🔹 ৫.৫ অ্যারো ফাংশন (Arrow Function)</h3>
        <p>আধুনিক JavaScript-এ ফাংশন লেখার সবচেয়ে জনপ্রিয়, সংক্ষিপ্ত পদ্ধতি হলো <strong>Arrow Function</strong> — <code>function</code> কীওয়ার্ডের বদলে <code>=></code> (তীর চিহ্ন) ব্যবহার করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// পুরনো পদ্ধতি — Function Expression</span>
<span class="kw">const</span> <span class="fn">add1</span> = <span class="kw">function</span>(<span class="fn">a</span>, <span class="fn">b</span>) {
  <span class="kw">return</span> <span class="fn">a</span> + <span class="fn">b</span>;
};

<span class="cmt">// আধুনিক পদ্ধতি — Arrow Function</span>
<span class="kw">const</span> <span class="fn">add2</span> = (<span class="fn">a</span>, <span class="fn">b</span>) <span class="kw">=&gt;</span> {
  <span class="kw">return</span> <span class="fn">a</span> + <span class="fn">b</span>;
};

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">add1</span>(<span class="num">3</span>, <span class="num">4</span>));
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">add2</span>(<span class="num">3</span>, <span class="num">4</span>));</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">7</div>
            <div class="console-line">7</div>
          </div>
        </div>

        <p><strong>আরও সংক্ষিপ্ত — Implicit Return:</strong> ফাংশনের ভেতরে শুধু একটা লাইনে <code>return</code> করার হলে, <code>{ }</code> ও <code>return</code> কীওয়ার্ডও বাদ দেওয়া যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// সবচেয়ে সংক্ষিপ্ত রূপ — এক লাইনে return, তাই { } ও return বাদ</span>
<span class="kw">const</span> <span class="fn">add3</span> = (<span class="fn">a</span>, <span class="fn">b</span>) <span class="kw">=&gt;</span> <span class="fn">a</span> + <span class="fn">b</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">add3</span>(<span class="num">10</span>, <span class="num">5</span>));</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">15</div>
          </div>
        </div>

        <p>💡 <code>add1</code>, <code>add2</code>, <code>add3</code> — তিনটাই একদম একই কাজ করে, শুধু লেখার সংক্ষিপ্ততা ভিন্ন। আধুনিক JavaScript কোডে ছোট, সাধারণ ফাংশনের জন্য Arrow Function-ই সবচেয়ে বেশি দেখা যায় — মডিউল ৬ ও ৮-এ অ্যারে মেথড ও ইভেন্ট হ্যান্ডলারে এই সিনট্যাক্স বারবার ব্যবহার হবে।</p>
      `
    },
    {
      id: "5.6",
      title: "ডিফল্ট প্যারামিটার",
      content: `
        <h3>🔹 ৫.৬ ডিফল্ট প্যারামিটার (Default Parameters)</h3>
        <p>কোনো আর্গুমেন্ট না দিয়ে ফাংশন কল করলে প্যারামিটারের মান <code>undefined</code> হয়ে যায় — এটা এড়াতে প্যারামিটারে একটা ডিফল্ট মান আগে থেকেই সেট করে রাখা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">greet</span>(<span class="fn">name</span> = <span class="str">"বন্ধু"</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`হ্যালো, \${name}!\`</span>);
}

<span class="fn">greet</span>(<span class="str">"নাজমুল"</span>);   <span class="cmt">// আর্গুমেন্ট দেওয়া হয়েছে</span>
<span class="fn">greet</span>();            <span class="cmt">// কোনো আর্গুমেন্ট নেই — ডিফল্ট মান ব্যবহার হবে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">হ্যালো, নাজমুল!</div>
            <div class="console-line">হ্যালো, বন্ধু!</div>
          </div>
        </div>

        <p>💡 প্রথম কলে <code>"নাজমুল"</code> আর্গুমেন্ট হিসেবে দেওয়ায় <code>name</code> সেই মানই পেয়েছে। দ্বিতীয় কলে কোনো আর্গুমেন্ট না দেওয়ায় <code>name</code> তার ডিফল্ট মান <code>"বন্ধু"</code> ব্যবহার করেছে — <code>undefined</code> হয়ে যায়নি। এটা ফাংশনকে আরও নিরাপদ ও নমনীয় করে তোলে।</p>
      `
    },
    {
      id: "5.7",
      title: "স্কোপ (Scope)",
      content: `
        <h3>🔹 ৫.৭ স্কোপ (Scope) — কোথায় একটা ভেরিয়েবল ব্যবহারযোগ্য</h3>
        <p><strong>Scope</strong> ঠিক করে একটা ভেরিয়েবল কোড-এর কোন অংশে "দেখা যায়" বা ব্যবহার করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">globalMsg</span> = <span class="str">"আমি সব জায়গায় দেখা যাই"</span>;  <span class="cmt">// Global Scope</span>

<span class="kw">function</span> <span class="fn">showMessage</span>() {
  <span class="kw">const</span> <span class="fn">localMsg</span> = <span class="str">"আমি শুধু ফাংশনের ভেতরে দেখা যাই"</span>;  <span class="cmt">// Local Scope</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">globalMsg</span>);   <span class="cmt">// ✅ কাজ করবে — গ্লোবাল সব জায়গা থেকে দেখা যায়</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">localMsg</span>);    <span class="cmt">// ✅ কাজ করবে — নিজের স্কোপের ভেতরেই আছে</span>
}

<span class="fn">showMessage</span>();
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">globalMsg</span>);   <span class="cmt">// ✅ কাজ করবে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আমি সব জায়গায় দেখা যাই</div>
            <div class="console-line">আমি শুধু ফাংশনের ভেতরে দেখা যাই</div>
            <div class="console-line">আমি সব জায়গায় দেখা যাই</div>
          </div>
        </div>

        <p>এখন দেখা যাক <code>localMsg</code> ফাংশনের <strong>বাইরে</strong> থেকে ব্যবহার করার চেষ্টা করলে কী হয়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">localMsg</span>);  <span class="cmt">// ❌ ReferenceError! localMsg ফাংশনের বাইরে সংজ্ঞায়িত নেই</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line" style="color:#F87171;">Uncaught ReferenceError: localMsg is not defined</div>
          </div>
        </div>

        <p>💡 <strong>মূল ধারণা:</strong> <code>function</code>-এর ভেতরে <code>let</code>/<code>const</code> দিয়ে বানানো ভেরিয়েবল শুধু সেই ফাংশনের <strong>ভেতরেই</strong> ব্যবহারযোগ্য (Local Scope) — ফাংশন শেষ হয়ে গেলে সেই ভেরিয়েবলও "হারিয়ে" যায়। কিন্তু ফাংশনের বাইরে সংজ্ঞায়িত ভেরিয়েবল (Global Scope) কোডের যেকোনো জায়গা থেকে, এমনকি ফাংশনের ভেতর থেকেও ব্যবহার করা যায়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">⚙️ <code>function name() {}</code> সংজ্ঞায়িত করলেই চলে না — <code>name()</code> লিখে <strong>কল</strong> করলে তবেই ভেতরের কোড এক্সিকিউট হয়।</div>
          <div class="takeaway-item">📥 প্যারামিটার = ফাংশনের ভেতরের "ফাঁকা জায়গা", আর্গুমেন্ট = কল করার সময় সেখানে পাঠানো আসল মান — ক্রম অনুযায়ী মিলে যায়।</div>
          <div class="takeaway-item">📤 <code>return</code> একটা মান ফেরত পাঠায় (পরে ব্যবহারযোগ্য) এবং চলার সাথে সাথেই ফাংশন থেমে যায় — এর পরের কোনো কোড চলে না।</div>
          <div class="takeaway-item">✏️ Function Declaration (<code>function name() {}</code>) ও Function Expression (<code>const name = function() {}</code>) — কাজ একই, শুধু লেখার ধরন আলাদা।</div>
          <div class="takeaway-item">➡️ Arrow Function (<code>(a, b) => a + b</code>) — আধুনিক, সংক্ষিপ্ত সিনট্যাক্স, ছোট ফাংশনের জন্য সবচেয়ে বেশি ব্যবহৃত।</div>
          <div class="takeaway-item">🔧 ডিফল্ট প্যারামিটার (<code>function greet(name = "বন্ধু")</code>) — আর্গুমেন্ট না দিলে <code>undefined</code>-এর বদলে একটা যুক্তিসঙ্গত ডিফল্ট মান ব্যবহার হয়।</div>
          <div class="takeaway-item">🔒 Scope — ফাংশনের ভেতরে বানানো ভেরিয়েবল (Local) শুধু ভেতরেই ব্যবহারযোগ্য; ফাংশনের বাইরের ভেরিয়েবল (Global) সব জায়গা থেকে ব্যবহারযোগ্য।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=6&section=6.0">
          পরের মডিউল: অ্যারে (Arrays)
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  6: [
    {
      id: "6.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📚 মডিউল ৬: অ্যারে (Arrays)</h2>

        <h3>🔹 ৬.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>অ্যারে তৈরি ও বেসিক (ইনডেক্স, length)</li>
          <li>push, pop, shift, unshift — অ্যারেতে আইটেম যোগ/বাদ দেওয়া</li>
          <li>indexOf ও includes — আইটেম খোঁজা</li>
          <li>slice ও splice — অংশবিশেষ কাটা/বদলানো</li>
          <li>forEach — প্রতিটা আইটেম নিয়ে কিছু করা</li>
          <li>map — নতুন অ্যারে বানানো</li>
          <li>filter — শর্ত অনুযায়ী বাছাই করা</li>
          <li>reduce — সব আইটেম মিলিয়ে একটা ফলাফল বানানো</li>
          <li>sort — সাজানো</li>
        </ul>
        <p><strong>অ্যারে</strong> হলো একাধিক ভ্যালু একসাথে, একটা ক্রমানুসারে সাজিয়ে রাখার জন্য একটা "তালিকা"। এই মডিউলে যেসব মেথড শিখব, সেগুলো বাস্তব প্রজেক্টে (প্রোডাক্ট লিস্ট, ইউজার লিস্ট, টু-ডু আইটেম) সবচেয়ে বেশি ব্যবহার হবে।</p>
      `
    },
    {
      id: "6.1",
      title: "অ্যারে তৈরি ও বেসিক",
      content: `
        <h3>🔹 ৬.১ অ্যারে তৈরি ও বেসিক</h3>
        <p>অ্যারে বানানো হয় <code>[ ]</code> (স্কয়ার ব্র্যাকেট) দিয়ে, ভেতরে কমা দিয়ে আলাদা করা ভ্যালু থাকে। প্রতিটা আইটেমের একটা <strong>ইনডেক্স (index)</strong> নাম্বার থাকে, যা <strong>০ থেকে শুরু হয়</strong> — এটা মনে রাখা খুবই জরুরি।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">fruits</span> = [<span class="str">"আম"</span>, <span class="str">"কাঁঠাল"</span>, <span class="str">"লিচু"</span>];

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>[<span class="num">0</span>]);   <span class="cmt">// প্রথম আইটেম — ইনডেক্স 0</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>[<span class="num">1</span>]);   <span class="cmt">// দ্বিতীয় আইটেম — ইনডেক্স 1</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>[<span class="num">2</span>]);   <span class="cmt">// তৃতীয় আইটেম — ইনডেক্স 2</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>.<span class="fn">length</span>);   <span class="cmt">// মোট আইটেম সংখ্যা</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আম</div>
            <div class="console-line">কাঁঠাল</div>
            <div class="console-line">লিচু</div>
            <div class="console-line">3</div>
          </div>
        </div>

        <p>⚠️ <strong>সতর্কতা — সবচেয়ে কমন ভুল:</strong> ৩টা আইটেমের অ্যারেতে ইনডেক্স হয় <code>0</code>, <code>1</code>, <code>2</code> — <strong>৩ না!</strong> <code>fruits[3]</code> লিখলে <code>undefined</code> পাবে, কারণ ইনডেক্স ৩-এ কিছু নেই। এই "০ থেকে শুরু" নিয়মটা (zero-based indexing) নতুনদের সবচেয়ে বেশি বিভ্রান্ত করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>[<span class="num">3</span>]);   <span class="cmt">// এই ইনডেক্সে কিছু নেই</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">undefined</div>
          </div>
        </div>
      `
    },
    {
      id: "6.2",
      title: "push, pop, shift, unshift",
      content: `
        <h3>🔹 ৬.২ push, pop, shift, unshift — আইটেম যোগ/বাদ দেওয়া</h3>
        <p>এই চারটা মেথড অ্যারের শুরু বা শেষে আইটেম যোগ বা বাদ দেয়। মনে রাখার সহজ নিয়ম: <strong>push/pop = শেষে</strong>, <strong>shift/unshift = শুরুতে</strong>।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মেথড</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>push(item)</code></td><td>অ্যারের <strong>শেষে</strong> নতুন আইটেম যোগ করে</td></tr>
              <tr><td><code>pop()</code></td><td>অ্যারের <strong>শেষ</strong> আইটেম বাদ দিয়ে সেটাই রিটার্ন করে</td></tr>
              <tr><td><code>unshift(item)</code></td><td>অ্যারের <strong>শুরুতে</strong> নতুন আইটেম যোগ করে</td></tr>
              <tr><td><code>shift()</code></td><td>অ্যারের <strong>প্রথম</strong> আইটেম বাদ দিয়ে সেটাই রিটার্ন করে</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">fruits</span> = [<span class="str">"আম"</span>, <span class="str">"কাঁঠাল"</span>];
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>);

<span class="fn">fruits</span>.<span class="fn">push</span>(<span class="str">"লিচু"</span>);       <span class="cmt">// শেষে যোগ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>);

<span class="fn">fruits</span>.<span class="fn">unshift</span>(<span class="str">"পেঁপে"</span>);   <span class="cmt">// শুরুতে যোগ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>);

<span class="fn">fruits</span>.<span class="fn">pop</span>();               <span class="cmt">// শেষেরটা বাদ</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 'আম', 'কাঁঠাল' ]</div>
            <div class="console-line">[ 'আম', 'কাঁঠাল', 'লিচু' ]</div>
            <div class="console-line">[ 'পেঁপে', 'আম', 'কাঁঠাল', 'লিচু' ]</div>
            <div class="console-line">[ 'পেঁপে', 'আম', 'কাঁঠাল' ]</div>
          </div>
        </div>

        <p>💡 <strong>ধাপে ধাপে ট্রেস করা যাক:</strong> শুরুতে <code>["আম", "কাঁঠাল"]</code>। <code>push("লিচু")</code> শেষে যোগ করে <code>["আম", "কাঁঠাল", "লিচু"]</code>। <code>unshift("পেঁপে")</code> শুরুতে যোগ করে <code>["পেঁপে", "আম", "কাঁঠাল", "লিচু"]</code>। সবশেষে <code>pop()</code> সবচেয়ে শেষের আইটেম ("লিচু") বাদ দিয়ে <code>["পেঁপে", "আম", "কাঁঠাল"]</code> রেখে যায়। এই চারটা মেথডই মূল অ্যারেকে <strong>সরাসরি বদলে দেয়</strong> (mutate করে) — এটা মনে রাখা জরুরি।</p>
      `
    },
    {
      id: "6.3",
      title: "indexOf ও includes",
      content: `
        <h3>🔹 ৬.৩ indexOf ও includes — আইটেম খোঁজা</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">fruits</span> = [<span class="str">"আম"</span>, <span class="str">"কাঁঠাল"</span>, <span class="str">"লিচু"</span>];

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>.<span class="fn">indexOf</span>(<span class="str">"কাঁঠাল"</span>));   <span class="cmt">// এই আইটেম কোন ইনডেক্সে আছে</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>.<span class="fn">indexOf</span>(<span class="str">"তরমুজ"</span>));    <span class="cmt">// নেই এমন আইটেম</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">fruits</span>.<span class="fn">includes</span>(<span class="str">"লিচু"</span>));    <span class="cmt">// আছে কিনা — সরাসরি true/false</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">1</div>
            <div class="console-line">-1</div>
            <div class="console-line">true</div>
          </div>
        </div>

        <p>💡 <code>indexOf("কাঁঠাল")</code> → <code>1</code> কারণ "কাঁঠাল" ইনডেক্স ১-এ আছে (ইনডেক্স ০ থেকে গোনা)। <code>indexOf("তরমুজ")</code> → <code>-1</code>, কারণ অ্যারেতে "তরমুজ" নেই — <code>indexOf</code> কিছু না পেলে সবসময় <code>-1</code> রিটার্ন করে (ইনডেক্স কখনো নেগেটিভ হয় না, তাই এটা "পাওয়া যায়নি" বোঝানোর জন্য একটা সেফ সিগন্যাল)। <code>includes("লিচু")</code> সরাসরি <code>true</code>/<code>false</code> দেয় — শুধু "আছে কিনা" জানতে চাইলে <code>indexOf</code> এর চেয়ে <code>includes</code> ব্যবহার করা বেশি পরিষ্কার।</p>
      `
    },
    {
      id: "6.4",
      title: "slice ও splice",
      content: `
        <h3>🔹 ৬.৪ slice ও splice — অংশবিশেষ কাটা/বদলানো</h3>
        <p>নাম প্রায় একই রকম শোনালেও <code>slice</code> ও <code>splice</code> সম্পূর্ণ ভিন্ন কাজ করে — এই পার্থক্যটা ভালোভাবে বুঝে নেওয়া জরুরি।</p>

        <h4>slice(start, end) — মূল অ্যারে অপরিবর্তিত রেখে একটা অংশ কপি করে</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">numbers</span> = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>];

<span class="kw">const</span> <span class="fn">middle</span> = <span class="fn">numbers</span>.<span class="fn">slice</span>(<span class="num">1</span>, <span class="num">4</span>);  <span class="cmt">// ইনডেক্স 1 থেকে শুরু, 4-এর ঠিক আগ পর্যন্ত</span>

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">middle</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">numbers</span>);  <span class="cmt">// মূল অ্যারে অপরিবর্তিত</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 20, 30, 40 ]</div>
            <div class="console-line">[ 10, 20, 30, 40, 50 ]</div>
          </div>
        </div>
        <p>💡 <code>slice(1, 4)</code> মানে ইনডেক্স ১ থেকে শুরু করে ইনডেক্স ৪-এর <strong>ঠিক আগ পর্যন্ত</strong> (৪ বাদে) — তাই ইনডেক্স ১, ২, ৩ (মান ২০, ৩০, ৪০) এসেছে। আসল <code>numbers</code> অ্যারে একদমই বদলায়নি — <code>slice</code> সবসময় একটা <strong>নতুন</strong> অ্যারে রিটার্ন করে, মূলটা টাচ করে না।</p>

        <h4>splice(start, deleteCount, ...items) — মূল অ্যারে সরাসরি বদলে দেয়</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">numbers</span> = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>];

<span class="fn">numbers</span>.<span class="fn">splice</span>(<span class="num">1</span>, <span class="num">2</span>);  <span class="cmt">// ইনডেক্স 1 থেকে 2টা আইটেম বাদ দাও</span>

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">numbers</span>);  <span class="cmt">// মূল অ্যারেই বদলে গেছে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 10, 40, 50 ]</div>
          </div>
        </div>
        <p>💡 <code>splice(1, 2)</code> মানে ইনডেক্স ১ থেকে শুরু করে ২টা আইটেম (২০ ও ৩০) মুছে ফেলো — এবং এবার আসল <code>numbers</code> অ্যারেই সরাসরি বদলে গেছে (mutate হয়েছে), <code>slice</code>-এর মতো নতুন কপি রিটার্ন হয়নি।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th></th><th>slice</th><th>splice</th></tr></thead>
            <tbody>
              <tr><td>মূল অ্যারে বদলায়?</td><td>না — নতুন কপি দেয়</td><td>হ্যাঁ — সরাসরি বদলে দেয়</td></tr>
              <tr><td>কাজ</td><td>একটা অংশ "দেখা" (copy)</td><td>যোগ/বাদ দিয়ে সরাসরি "বদলানো"</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "6.5",
      title: "forEach",
      content: `
        <h3>🔹 ৬.৫ forEach — প্রতিটা আইটেম নিয়ে কিছু করা</h3>
        <p><code>forEach</code> মডিউল ৪-এ শেখা <code>for...of</code>-এরই আরেকটা রূপ — একটা ফাংশন নেয় (সাধারণত Arrow Function), যেটা অ্যারের প্রতিটা আইটেমের জন্য একবার করে চলে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">fruits</span> = [<span class="str">"আম"</span>, <span class="str">"কাঁঠাল"</span>, <span class="str">"লিচু"</span>];

<span class="fn">fruits</span>.<span class="fn">forEach</span>((<span class="fn">fruit</span>, <span class="fn">index</span>) <span class="kw">=&gt;</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`\${index}: \${fruit}\`</span>);
});</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">0: আম</div>
            <div class="console-line">1: কাঁঠাল</div>
            <div class="console-line">2: লিচু</div>
          </div>
        </div>

        <p>💡 <code>forEach</code>-এ দেওয়া Arrow Function দুইটা প্যারামিটার পায়: প্রথমটা বর্তমান আইটেম (<code>fruit</code>), দ্বিতীয়টা তার ইনডেক্স (<code>index</code>) — <code>index</code> ঐচ্ছিক, দরকার না হলে বাদ দেওয়া যায়। <code>forEach</code> কোনো নতুন অ্যারে রিটার্ন করে না, এটা শুধু "প্রতিটা আইটেম নিয়ে কিছু একটা করার" জন্য (যেমন প্রিন্ট করা, বা প্রতিটার জন্য একটা HTML এলিমেন্ট বানানো — মডিউল ৮-এ দেখব)।</p>
      `
    },
    {
      id: "6.6",
      title: "map",
      content: `
        <h3>🔹 ৬.৬ map — নতুন অ্যারে বানানো</h3>
        <p><code>map</code>, <code>forEach</code>-এর মতোই প্রতিটা আইটেমের উপর দিয়ে ঘোরে, কিন্তু একটা গুরুত্বপূর্ণ পার্থক্যে — <code>map</code> প্রতিটা আইটেমের জন্য একটা নতুন মান রিটার্ন করে এবং সেগুলো দিয়ে একটা <strong>সম্পূর্ণ নতুন অ্যারে</strong> তৈরি করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">numbers</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>];

<span class="kw">const</span> <span class="fn">doubled</span> = <span class="fn">numbers</span>.<span class="fn">map</span>((<span class="fn">num</span>) <span class="kw">=&gt;</span> <span class="fn">num</span> * <span class="num">2</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">doubled</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">numbers</span>);  <span class="cmt">// মূল অ্যারে অপরিবর্তিত</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 2, 4, 6, 8 ]</div>
            <div class="console-line">[ 1, 2, 3, 4 ]</div>
          </div>
        </div>

        <p>💡 <code>numbers</code>-এর প্রতিটা আইটেমকে ২ দিয়ে গুণ করে <code>doubled</code> নামে একটা <strong>সম্পূর্ণ নতুন</strong> অ্যারে তৈরি হয়েছে — আসল <code>numbers</code> একদমই বদলায়নি। এটাই <code>map</code>-এর সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য: এটা মূল ডাটা "বদলায়" না, বরং তার ভিত্তিতে "নতুন কিছু বানায়"।</p>

        <p><strong>বাস্তব উদাহরণ — অবজেক্টের অ্যারে থেকে নির্দিষ্ট তথ্য বের করা (অবজেক্ট মডিউল ৭-এ বিস্তারিত শিখবে):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">students</span> = [
  { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">marks</span>: <span class="num">90</span> },
  { <span class="fn">name</span>: <span class="str">"রাফি"</span>, <span class="fn">marks</span>: <span class="num">75</span> },
];

<span class="kw">const</span> <span class="fn">names</span> = <span class="fn">students</span>.<span class="fn">map</span>((<span class="fn">student</span>) <span class="kw">=&gt;</span> <span class="fn">student</span>.<span class="fn">name</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">names</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 'নাজমুল', 'রাফি' ]</div>
          </div>
        </div>
      `
    },
    {
      id: "6.7",
      title: "filter",
      content: `
        <h3>🔹 ৬.৭ filter — শর্ত অনুযায়ী বাছাই করা</h3>
        <p><code>filter</code> একটা ফাংশন নেয় যা প্রতিটা আইটেমের জন্য <code>true</code>/<code>false</code> রিটার্ন করে — যেসব আইটেমের জন্য <code>true</code> আসে, শুধু সেগুলোই নতুন অ্যারেতে থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">numbers</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>];

<span class="kw">const</span> <span class="fn">evens</span> = <span class="fn">numbers</span>.<span class="fn">filter</span>((<span class="fn">num</span>) <span class="kw">=&gt;</span> <span class="fn">num</span> % <span class="num">2</span> === <span class="num">0</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">evens</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 2, 4, 6 ]</div>
          </div>
        </div>

        <p>💡 প্রতিটা সংখ্যার জন্য <code>num % 2 === 0</code> (জোড় কিনা) চেক হয়েছে — ১ এর জন্য false, ২ এর জন্য true, ৩ এর জন্য false, এভাবে চলতে থাকে। শুধু যেগুলোর জন্য <code>true</code> এসেছে (২, ৪, ৬) সেগুলোই <code>evens</code>-এ থেকে গেছে।</p>

        <p><strong>বাস্তব উদাহরণ:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">students</span> = [
  { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">marks</span>: <span class="num">90</span> },
  { <span class="fn">name</span>: <span class="str">"রাফি"</span>, <span class="fn">marks</span>: <span class="num">55</span> },
  { <span class="fn">name</span>: <span class="str">"তানিয়া"</span>, <span class="fn">marks</span>: <span class="num">82</span> },
];

<span class="kw">const</span> <span class="fn">passed</span> = <span class="fn">students</span>.<span class="fn">filter</span>((<span class="fn">student</span>) <span class="kw">=&gt;</span> <span class="fn">student</span>.<span class="fn">marks</span> &gt;= <span class="num">60</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">passed</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ { name: 'নাজমুল', marks: 90 }, { name: 'তানিয়া', marks: 82 } ]</div>
          </div>
        </div>
        <p>💡 রাফির মার্কস (৫৫) ৬০-এর কম হওয়ায় সে <code>passed</code> অ্যারেতে জায়গা পায়নি — বাকি দুইজন শর্ত পূরণ করায় থেকে গেছে।</p>
      `
    },
    {
      id: "6.8",
      title: "reduce",
      content: `
        <h3>🔹 ৬.৮ reduce — সব আইটেম মিলিয়ে একটা ফলাফল বানানো</h3>
        <p><code>reduce</code> সবচেয়ে শক্তিশালী কিন্তু নতুনদের জন্য সবচেয়ে জটিল মনে হওয়া অ্যারে মেথড — এটা পুরো অ্যারেকে "কমিয়ে" (reduce করে) একটা মাত্র ভ্যালুতে পরিণত করে, যেমন সবগুলোর যোগফল।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">prices</span> = [<span class="num">100</span>, <span class="num">250</span>, <span class="num">75</span>];

<span class="kw">const</span> <span class="fn">total</span> = <span class="fn">prices</span>.<span class="fn">reduce</span>((<span class="fn">sum</span>, <span class="fn">price</span>) <span class="kw">=&gt;</span> <span class="fn">sum</span> + <span class="fn">price</span>, <span class="num">0</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">total</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">425</div>
          </div>
        </div>

        <p>💡 <strong>ধাপে ধাপে বোঝা যাক:</strong> <code>reduce</code>-এর দুইটা আর্গুমেন্ট — প্রথমটা একটা ফাংশন (<code>sum, price</code> নিয়ে), দ্বিতীয়টা <code>sum</code>-এর <strong>শুরুর মান</strong> (এখানে <code>0</code>)।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>রাউন্ড</th><th>sum (আগের যোগফল)</th><th>price (বর্তমান আইটেম)</th><th>নতুন sum</th></tr></thead>
            <tbody>
              <tr><td>শুরু</td><td>0</td><td>—</td><td>—</td></tr>
              <tr><td>১</td><td>0</td><td>100</td><td>0 + 100 = 100</td></tr>
              <tr><td>২</td><td>100</td><td>250</td><td>100 + 250 = 350</td></tr>
              <tr><td>৩</td><td>350</td><td>75</td><td>350 + 75 = 425</td></tr>
            </tbody>
          </table>
        </div>

        <p>প্রতি রাউন্ডে <code>sum</code> আগের রাউন্ডের ফলাফল বহন করে নিয়ে যায়, শেষ রাউন্ডের ফলাফলই (<code>425</code>) চূড়ান্তভাবে <code>total</code>-এ সেভ হয়। এই "একটা মান বহন করে করে পরের রাউন্ডে নিয়ে যাওয়ার" ধারণাটাই <code>reduce</code> বোঝার আসল চাবিকাঠি।</p>
      `
    },
    {
      id: "6.9",
      title: "sort ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৬.৯ sort — অ্যারে সাজানো</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">numbers</span> = [<span class="num">5</span>, <span class="num">2</span>, <span class="num">8</span>, <span class="num">1</span>];

<span class="cmt">// ছোট থেকে বড় (ascending)</span>
<span class="kw">const</span> <span class="fn">ascending</span> = [...<span class="fn">numbers</span>].<span class="fn">sort</span>((<span class="fn">a</span>, <span class="fn">b</span>) <span class="kw">=&gt;</span> <span class="fn">a</span> - <span class="fn">b</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">ascending</span>);

<span class="cmt">// বড় থেকে ছোট (descending)</span>
<span class="kw">const</span> <span class="fn">descending</span> = [...<span class="fn">numbers</span>].<span class="fn">sort</span>((<span class="fn">a</span>, <span class="fn">b</span>) <span class="kw">=&gt;</span> <span class="fn">b</span> - <span class="fn">a</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">descending</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 1, 2, 5, 8 ]</div>
            <div class="console-line">[ 8, 5, 2, 1 ]</div>
          </div>
        </div>

        <p>💡 <code>sort()</code>-এর ভেতরে দেওয়া ফাংশন দুইটা আইটেম (<code>a</code>, <code>b</code>) তুলনা করে একটা সংখ্যা রিটার্ন করে: ফলাফল ঋণাত্মক হলে <code>a</code> আগে বসে, ধনাত্মক হলে <code>b</code> আগে বসে। <code>a - b</code> ছোট থেকে বড় সাজায়, <code>b - a</code> বড় থেকে ছোট সাজায় — এই প্যাটার্নটাই মুখস্থ রাখাই যথেষ্ট।</p>

        <p>⚠️ <strong>সতর্কতা:</strong> <code>sort()</code> মূল অ্যারেকেই সরাসরি বদলে দেয় (mutate করে) — তাই এখানে <code>[...numbers]</code> (স্প্রেড অপারেটর দিয়ে একটা কপি) ব্যবহার করা হয়েছে, যাতে আসল <code>numbers</code> অপরিবর্তিত থাকে। স্প্রেড অপারেটর সম্পর্কে বিস্তারিত মডিউল ১০-এ শিখবে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📚 অ্যারের ইনডেক্স <code>0</code> থেকে শুরু হয় — ৩টা আইটেমের অ্যারেতে ইনডেক্স হয় ০, ১, ২ (৩ না)।</div>
          <div class="takeaway-item">➕ push/pop = শেষে যোগ/বাদ, unshift/shift = শুরুতে যোগ/বাদ — সবগুলোই মূল অ্যারে বদলে দেয়।</div>
          <div class="takeaway-item">🔍 indexOf আইটেমের অবস্থান দেয় (না পেলে -1), includes সরাসরি true/false দেয়।</div>
          <div class="takeaway-item">✂️ slice নতুন কপি বানায় (মূল অ্যারে অপরিবর্তিত), splice মূল অ্যারে সরাসরি বদলে দেয়।</div>
          <div class="takeaway-item">🔁 forEach প্রতিটা আইটেম নিয়ে "কিছু করে" (রিটার্ন নেই); map প্রতিটা আইটেম থেকে "নতুন কিছু বানিয়ে" একটা নতুন অ্যারে দেয়; filter শর্ত অনুযায়ী "বাছাই" করে নতুন অ্যারে দেয়; reduce সবকিছু মিলিয়ে "একটা মাত্র ফলাফল" বানায়।</div>
          <div class="takeaway-item">🔢 sort((a, b) => a - b) ছোট থেকে বড়, sort((a, b) => b - a) বড় থেকে ছোট — মূল অ্যারে বদলে যায়, তাই কপি ([...array]) নিয়ে কাজ করা নিরাপদ।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=7&section=7.0">
          পরের মডিউল: অবজেক্ট (Objects)
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  7: [
    {
      id: "7.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🧱 মডিউল ৭: অবজেক্ট (Objects)</h2>

        <h3>🔹 ৭.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>অবজেক্ট তৈরি ও বেসিক (key-value pairs)</li>
          <li>প্রপার্টি অ্যাক্সেস — Dot Notation vs Bracket Notation</li>
          <li>প্রপার্টি যোগ, পরিবর্তন ও মুছে ফেলা</li>
          <li>অবজেক্ট মেথড ও <code>this</code> কীওয়ার্ড</li>
          <li>নেস্টেড অবজেক্ট (অবজেক্টের ভেতরে অবজেক্ট)</li>
          <li><code>Object.keys()</code>, <code>Object.values()</code>, <code>Object.entries()</code></li>
          <li><code>for...in</code> লুপ</li>
        </ul>
        <p>অ্যারে যদি হয় একটা তালিকা (ক্রমানুসারে সাজানো), তাহলে <strong>অবজেক্ট</strong> হলো একটা "প্রোফাইল" — নাম দেওয়া প্রপার্টিতে ডাটা রাখা, যেখানে ক্রম না, নাম দিয়েই সবকিছু চেনা যায়। বাস্তব জীবনের জিনিস (একজন ইউজার, একটা প্রোডাক্ট, একটা গাড়ি) মডেল করতে অবজেক্ট সবচেয়ে বেশি ব্যবহার হয়।</p>
      `
    },
    {
      id: "7.1",
      title: "অবজেক্ট তৈরি ও বেসিক",
      content: `
        <h3>🔹 ৭.১ অবজেক্ট তৈরি ও বেসিক</h3>
        <p>অবজেক্ট বানানো হয় <code>{ }</code> (কার্লি ব্র্যাকেট) দিয়ে — ভেতরে <code>key: value</code> জোড়ায় জোড়ায় ডাটা থাকে, কমা দিয়ে আলাদা করা।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = {
  <span class="fn">name</span>: <span class="str">"নাজমুল"</span>,
  <span class="fn">age</span>: <span class="num">25</span>,
  <span class="fn">isEnrolled</span>: <span class="num">true</span>,
};

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">{ name: 'নাজমুল', age: 25, isEnrolled: true }</div>
          </div>
        </div>

        <p>💡 এখানে <code>name</code>, <code>age</code>, <code>isEnrolled</code> হলো <strong>key</strong> (বা প্রপার্টির নাম), আর <code>"নাজমুল"</code>, <code>25</code>, <code>true</code> হলো তাদের <strong>value</strong>। অ্যারের মতো এখানে ইনডেক্স নাম্বার নেই — প্রতিটা ডাটা তার নামের (key) মাধ্যমেই চেনা যায়, ক্রম গুরুত্বপূর্ণ না।</p>
      `
    },
    {
      id: "7.2",
      title: "প্রপার্টি অ্যাক্সেস",
      content: `
        <h3>🔹 ৭.২ প্রপার্টি অ্যাক্সেস — Dot vs Bracket Notation</h3>
        <p>অবজেক্টের ভেতরের কোনো নির্দিষ্ট মান পড়তে দুইভাবে অ্যাক্সেস করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span> };

<span class="cmt">// Dot Notation — বেশি ব্যবহৃত, পরিষ্কার</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>.<span class="fn">name</span>);

<span class="cmt">// Bracket Notation — কোটেশনের ভেতরে key-এর নাম</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>[<span class="str">"age"</span>]);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাজমুল</div>
            <div class="console-line">25</div>
          </div>
        </div>

        <p>💡 <strong>দুটোই একই ফলাফল দেয়, কিন্তু Bracket Notation-এর একটা বিশেষ সুবিধা আছে</strong> — key-এর নামটা যদি একটা ভেরিয়েবলে থাকে (dynamic), তাহলে শুধু Bracket Notation-ই ব্যবহার করা যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span> };
<span class="kw">const</span> <span class="fn">key</span> = <span class="str">"name"</span>;   <span class="cmt">// key-এর নাম একটা ভেরিয়েবলে</span>

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>[<span class="fn">key</span>]);   <span class="cmt">// ✅ কাজ করে — dynamic key</span>
<span class="cmt">// console.log(student.key);  // ❌ এটা "key" নামের প্রপার্টি খুঁজবে, যা নেই</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাজমুল</div>
          </div>
        </div>
        <p>💡 <code>student.key</code> লিখলে JavaScript আক্ষরিকভাবে <code>"key"</code> নামের একটা প্রপার্টি খুঁজবে (যা <code>student</code>-এ নেই, তাই <code>undefined</code> দেবে) — কিন্তু <code>student[key]</code> লিখলে প্রথমে <code>key</code> ভেরিয়েবলের মান (<code>"name"</code>) বের করে, তারপর সেই নামের প্রপার্টি খোঁজে। এই পার্থক্যটা মনে রাখা জরুরি।</p>
      `
    },
    {
      id: "7.3",
      title: "প্রপার্টি যোগ/পরিবর্তন/মুছে ফেলা",
      content: `
        <h3>🔹 ৭.৩ প্রপার্টি যোগ, পরিবর্তন ও মুছে ফেলা</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span> };
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>);

<span class="cmt">// নতুন প্রপার্টি যোগ করা</span>
<span class="fn">student</span>.<span class="fn">city</span> = <span class="str">"চট্টগ্রাম"</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>);

<span class="cmt">// বিদ্যমান প্রপার্টি পরিবর্তন করা</span>
<span class="fn">student</span>.<span class="fn">age</span> = <span class="num">26</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>);

<span class="cmt">// প্রপার্টি মুছে ফেলা</span>
<span class="kw">delete</span> <span class="fn">student</span>.<span class="fn">city</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">{ name: 'নাজমুল', age: 25 }</div>
            <div class="console-line">{ name: 'নাজমুল', age: 25, city: 'চট্টগ্রাম' }</div>
            <div class="console-line">{ name: 'নাজমুল', age: 26, city: 'চট্টগ্রাম' }</div>
            <div class="console-line">{ name: 'নাজমুল', age: 26 }</div>
          </div>
        </div>

        <p>⚠️ <strong>গুরুত্বপূর্ণ — const দিয়ে বানানো অবজেক্টেও এটা কাজ করে!</strong> মডিউল ১-এ শিখেছিলে <code>const</code>-এর মান বদলানো যায় না — কিন্তু এখানে <code>student</code> (যা <code>const</code>) এর প্রপার্টি বদলে যাচ্ছে! আসলে <code>const</code> শুধু আটকায় ভেরিয়েবলটাকে <strong>সম্পূর্ণ নতুন একটা মান দিয়ে replace করা</strong> (যেমন <code>student = {}</code> লেখা এরর দেবে) — কিন্তু অবজেক্টের <strong>ভেতরের</strong> প্রপার্টি বদলানো, যোগ করা, বা মুছে ফেলা সম্পূর্ণ অনুমোদিত।</p>
      `
    },
    {
      id: "7.4",
      title: "অবজেক্ট মেথড ও this",
      content: `
        <h3>🔹 ৭.৪ অবজেক্ট মেথড ও this কীওয়ার্ড</h3>
        <p>অবজেক্টের ভেতরে ভ্যালু হিসেবে একটা ফাংশনও রাখা যায় — একে বলে <strong>মেথড</strong>। মেথডের ভেতরে <code>this</code> ব্যবহার করে সেই অবজেক্টেরই অন্য প্রপার্টি অ্যাক্সেস করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = {
  <span class="fn">name</span>: <span class="str">"নাজমুল"</span>,
  <span class="fn">age</span>: <span class="num">25</span>,
  <span class="fn">introduce</span>: <span class="kw">function</span>() {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`আমার নাম \${this.name}, বয়স \${this.age}\`</span>);
  },
};

<span class="fn">student</span>.<span class="fn">introduce</span>();</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আমার নাম নাজমুল, বয়স 25</div>
          </div>
        </div>

        <p>💡 <code>this</code> মানে "যে অবজেক্টের ভেতরে এই মেথডটা আছে, সেই অবজেক্ট নিজেই" — এখানে <code>this.name</code> মানে <code>student.name</code>-ই, শুধু মেথডের ভেতর থেকে অবজেক্টের নাম বারবার না লিখেই <code>this</code> দিয়ে নিজেকে রেফার করা যায়। এটা খুবই কাজের যখন একই অবজেক্টের একাধিক মেথডে বারবার নিজের প্রপার্টি ব্যবহার করতে হয়।</p>

        <p><strong>আধুনিক সংক্ষিপ্ত সিনট্যাক্স (Shorthand Method):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = {
  <span class="fn">name</span>: <span class="str">"নাজমুল"</span>,
  <span class="fn">introduce</span>() {   <span class="cmt">// function কীওয়ার্ড ছাড়াই লেখা যায়</span>
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`আমি \${this.name}\`</span>);
  },
};

<span class="fn">student</span>.<span class="fn">introduce</span>();</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">আমি নাজমুল</div>
          </div>
        </div>
        <p>⚠️ <strong>সতর্কতা:</strong> Arrow Function-এর ভেতরে <code>this</code> অবজেক্টের মেথডে প্রত্যাশামতো কাজ করে না (এটা একটা জটিল, একটু অ্যাডভান্সড বিষয়) — তাই অবজেক্ট মেথড লেখার সময় সাধারণ <code>function</code> বা Shorthand Method সিনট্যাক্স ব্যবহার করাই নিরাপদ, Arrow Function না।</p>
      `
    },
    {
      id: "7.5",
      title: "নেস্টেড অবজেক্ট",
      content: `
        <h3>🔹 ৭.৫ নেস্টেড অবজেক্ট (Nested Object)</h3>
        <p>অবজেক্টের ভেতরে আরেকটা অবজেক্ট (বা অ্যারে) রাখা যায় — বাস্তব জীবনের জটিল ডাটা (যেমন একজন ইউজারের ঠিকানা, একাধিক স্কিল) মডেল করতে এটা খুবই দরকারি।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = {
  <span class="fn">name</span>: <span class="str">"নাজমুল"</span>,
  <span class="fn">address</span>: {
    <span class="fn">city</span>: <span class="str">"চট্টগ্রাম"</span>,
    <span class="fn">country</span>: <span class="str">"বাংলাদেশ"</span>,
  },
  <span class="fn">skills</span>: [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>, <span class="str">"JavaScript"</span>],
};

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>.<span class="fn">address</span>.<span class="fn">city</span>);   <span class="cmt">// নেস্টেড অবজেক্টের ভেতরে যাওয়া</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>.<span class="fn">skills</span>[<span class="num">1</span>]);       <span class="cmt">// অবজেক্টের ভেতরের অ্যারে থেকে ইনডেক্স ধরে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">চট্টগ্রাম</div>
            <div class="console-line">CSS</div>
          </div>
        </div>

        <p>💡 <code>student.address.city</code> — একের পর এক ডট দিয়ে যত গভীরেই ডাটা থাকুক না কেন, সেখানে পৌঁছানো যায়। <code>student.skills[1]</code>-এ দুটো ধারণা একসাথে ব্যবহার হয়েছে: অবজেক্ট থেকে <code>skills</code> অ্যারে বের করা (dot notation), তারপর সেই অ্যারের ইনডেক্স ১-এ থাকা মান বের করা (bracket notation, মডিউল ৬ থেকে মনে আছে?)।</p>
      `
    },
    {
      id: "7.6",
      title: "Object.keys, values, entries",
      content: `
        <h3>🔹 ৭.৬ Object.keys(), Object.values(), Object.entries()</h3>
        <p>একটা অবজেক্টের সব key/value/জোড়া একসাথে অ্যারে হিসেবে বের করতে এই তিনটা মেথড ব্যবহার হয় — এতে মডিউল ৪-৬-এ শেখা লুপ ও অ্যারে মেথড অবজেক্টের সাথেও ব্যবহার করা সম্ভব হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span>, <span class="fn">city</span>: <span class="str">"চট্টগ্রাম"</span> };

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">Object</span>.<span class="fn">keys</span>(<span class="fn">student</span>));      <span class="cmt">// শুধু key গুলো</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">Object</span>.<span class="fn">values</span>(<span class="fn">student</span>));    <span class="cmt">// শুধু value গুলো</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">Object</span>.<span class="fn">entries</span>(<span class="fn">student</span>));   <span class="cmt">// key-value জোড়া, প্রতিটা একটা মিনি-অ্যারে</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 'name', 'age', 'city' ]</div>
            <div class="console-line">[ 'নাজমুল', 25, 'চট্টগ্রাম' ]</div>
            <div class="console-line">[ ['name', 'নাজমুল'], ['age', 25], ['city', 'চট্টগ্রাম'] ]</div>
          </div>
        </div>

        <p>💡 এই তিনটা মেথডই একটা <strong>অ্যারে</strong> রিটার্ন করে — তাই এর উপর মডিউল ৬-এ শেখা <code>forEach</code>, <code>map</code>, ইত্যাদি ব্যবহার করা যায়। যেমন সব key প্রিন্ট করতে চাইলে: <code>Object.keys(student).forEach(key => console.log(key))</code>।</p>
      `
    },
    {
      id: "7.7",
      title: "for...in লুপ ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৭.৭ for...in লুপ</h3>
        <p><code>for...in</code> সরাসরি একটা অবজেক্টের প্রতিটা key-এর উপর দিয়ে ঘোরে — মডিউল ৪-এ শেখা অ্যারের <code>for...of</code>-এর অবজেক্ট-ভার্সন।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span>, <span class="fn">city</span>: <span class="str">"চট্টগ্রাম"</span> };

<span class="kw">for</span> (<span class="kw">const</span> <span class="fn">key</span> <span class="kw">in</span> <span class="fn">student</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`\${key}: \${student[key]}\`</span>);
}</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">name: নাজমুল</div>
            <div class="console-line">age: 25</div>
            <div class="console-line">city: চট্টগ্রাম</div>
          </div>
        </div>

        <p>💡 প্রতি রাউন্ডে <code>key</code> ভেরিয়েবলটা একটা করে প্রপার্টির নাম ধারণ করে (প্রথমে <code>"name"</code>, তারপর <code>"age"</code>, তারপর <code>"city"</code>) — আর <code>student[key]</code> (Bracket Notation, মনে আছে কেন এখানে Dot Notation ব্যবহার করা যাবে না?) দিয়ে সেই key-এর মান বের করা হচ্ছে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>লুপ</th><th>কীসের উপর দিয়ে ঘোরে</th></tr></thead>
            <tbody>
              <tr><td><code>for...of</code></td><td>অ্যারে/স্ট্রিং-এর <strong>ভ্যালু</strong> (মডিউল ৪)</td></tr>
              <tr><td><code>for...in</code></td><td>অবজেক্টের <strong>key</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🧱 অবজেক্ট <code>{ key: value }</code> জোড়ায় ডাটা রাখে — ক্রম না, নাম দিয়ে ডাটা চেনা যায়।</div>
          <div class="takeaway-item">🔑 Dot Notation (<code>obj.key</code>) সাধারণ ব্যবহারে, Bracket Notation (<code>obj[key]</code>) dynamic (ভেরিয়েবলে রাখা) key-এর জন্য আবশ্যক।</div>
          <div class="takeaway-item">✏️ <code>const</code> দিয়ে বানানো অবজেক্টেও প্রপার্টি যোগ/পরিবর্তন/মুছে ফেলা যায় — <code>const</code> শুধু পুরো ভেরিয়েবলটা replace করা আটকায়।</div>
          <div class="takeaway-item">⚙️ অবজেক্ট মেথডের ভেতরে <code>this</code> দিয়ে সেই অবজেক্টেরই অন্য প্রপার্টি অ্যাক্সেস করা যায় (Arrow Function এখানে ব্যবহার না করাই নিরাপদ)।</div>
          <div class="takeaway-item">🪆 নেস্টেড অবজেক্টে একের পর এক ডট (<code>obj.a.b.c</code>) দিয়ে যত গভীরেই ডাটা থাকুক পৌঁছানো যায়।</div>
          <div class="takeaway-item">🔄 <code>Object.keys()</code>/<code>values()</code>/<code>entries()</code> অবজেক্টকে অ্যারেতে রূপান্তর করে, যাতে অ্যারে মেথড ব্যবহার করা যায়; <code>for...in</code> সরাসরি key-এর উপর দিয়ে ঘোরে।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=8&section=8.0">
          পরের মডিউল: DOM ম্যানিপুলেশন
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  8: [
    {
      id: "8.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🖱️ মডিউল ৮: DOM ম্যানিপুলেশন</h2>

        <h3>🔹 ৮.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>DOM কী এবং কেন গুরুত্বপূর্ণ</li>
          <li><code>querySelector</code> ও <code>getElementById</code> দিয়ে এলিমেন্ট খোঁজা</li>
          <li><code>textContent</code> ও <code>innerHTML</code> দিয়ে কনটেন্ট বদলানো</li>
          <li><code>style</code> প্রপার্টি দিয়ে সরাসরি CSS বদলানো</li>
          <li><code>classList</code> (add/remove/toggle) দিয়ে ক্লাস নিয়ন্ত্রণ</li>
          <li>নতুন এলিমেন্ট তৈরি করা (<code>createElement</code>, <code>appendChild</code>)</li>
          <li>এলিমেন্ট মুছে ফেলা</li>
        </ul>
        <p>এই মডিউল থেকে জিনিসগুলো সরাসরি চোখে দেখা যাবে — এখন থেকে বেশিরভাগ উদাহরণে CONSOLE-এর বদলে <strong>LIVE PREVIEW</strong> ব্যবহার হবে, যেখানে সত্যিকারের বাটনে ক্লিক করে ফলাফল দেখা যাবে।</p>
      `
    },
    {
      id: "8.1",
      title: "DOM কী এবং কেন গুরুত্বপূর্ণ",
      content: `
        <h3>🔹 ৮.১ DOM কী? (Document Object Model)</h3>
        <p><strong>DOM</strong> হলো ব্রাউজার তোমার HTML পেজকে যেভাবে "বুঝে" ও মেমরিতে সংরক্ষণ করে, তার একটা মডেল — প্রতিটা HTML ট্যাগ একটা "নোড" (node) হিসেবে গাছের (tree) মতো কাঠামোয় সাজানো থাকে। JavaScript এই DOM-এর সাথে সরাসরি কথা বলে HTML এলিমেন্ট খুঁজে বের করতে, পড়তে, ও বদলাতে পারে।</p>

        <p>💡 <strong>সহজ ভাবে বলতে গেলে:</strong> HTML ফাইল হলো তোমার লেখা মূল "রেসিপি", আর DOM হলো ব্রাউজার সেই রেসিপি পড়ে মেমরিতে তৈরি করা "জীবন্ত" কাঠামো — JavaScript দিয়ে DOM বদলালে, স্ক্রিনে সাথে সাথে পরিবর্তন দেখা যায়, HTML ফাইলটা নিজে বদলায় না (শুধু ব্রাউজারের মেমরিতে যা আছে, সেটাই বদলায়)।</p>

        <p>এই ক্ষমতার কারণেই পেজ রিলোড ছাড়াই — লাইক বাটনে ক্লিক করলে কাউন্ট বাড়া, ফর্মে টাইপ করার সাথে সাথে এরর মেসেজ দেখানো, নতুন আইটেম তালিকায় যোগ হওয়া — এসব সম্ভব হয়।</p>
      `
    },
    {
      id: "8.2",
      title: "এলিমেন্ট খোঁজা",
      content: `
        <h3>🔹 ৮.২ querySelector ও getElementById দিয়ে এলিমেন্ট খোঁজা</h3>
        <p>DOM বদলানোর প্রথম ধাপ হলো ঠিক কোন এলিমেন্টটা বদলাতে চাও সেটা খুঁজে বের করা।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;h1</span> <span class="fn">id</span>=<span class="str">"title"</span><span class="kw">&gt;</span>স্বাগতম<span class="kw">&lt;/h1&gt;</span>
<span class="kw">&lt;p</span> <span class="fn">class</span>=<span class="str">"info"</span><span class="kw">&gt;</span>তথ্য<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// পদ্ধতি ১: getElementById — শুধু id দিয়ে, দ্রুত</span>
<span class="kw">const</span> <span class="fn">title</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"title"</span>);

<span class="cmt">// পদ্ধতি ২: querySelector — CSS সিলেক্টর সিনট্যাক্স ব্যবহার করে (মডিউল ২, CSS কোর্স মনে আছে?)</span>
<span class="kw">const</span> <span class="fn">info</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">".info"</span>);
<span class="kw">const</span> <span class="fn">titleAgain</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"#title"</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">title</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">info</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">&lt;h1 id="title"&gt;স্বাগতম&lt;/h1&gt;</div>
            <div class="console-line">&lt;p class="info"&gt;তথ্য&lt;/p&gt;</div>
          </div>
        </div>

        <p>💡 <code>console.log(title)</code> সরাসরি পুরো HTML এলিমেন্টটাই দেখায় — কারণ <code>title</code> একটা টেক্সট বা সংখ্যা না, এটা একটা "DOM এলিমেন্ট" নিজেই।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মেথড</th><th>সিলেক্টর সিনট্যাক্স</th><th>কখন ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><code>getElementById</code></td><td>শুধু id-এর নাম, কোনো <code>#</code> ছাড়া</td><td>শুধু id দিয়ে খুঁজতে, দ্রুততম পদ্ধতি</td></tr>
              <tr><td><code>querySelector</code></td><td>যেকোনো CSS সিলেক্টর (<code>.class</code>, <code>#id</code>, <code>tag</code>)</td><td>নমনীয়, একই সিলেক্টর CSS-এও ব্যবহার করা যেত (CSS কোর্সের মডিউল ২)</td></tr>
              <tr><td><code>querySelectorAll</code></td><td>যেকোনো CSS সিলেক্টর</td><td>মিলে যাওয়া <strong>সব</strong> এলিমেন্ট একটা লিস্টে ফেরত দেয়</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 আধুনিক কোডে <code>querySelector</code> বেশি ব্যবহৃত হয়, কারণ এটা CSS-এর সিলেক্টর সিনট্যাক্সই ব্যবহার করে — একবার শিখলে দুই জায়গাতেই কাজে লাগে।</p>
      `
    },
    {
      id: "8.3",
      title: "textContent ও innerHTML",
      content: `
        <h3>🔹 ৮.৩ textContent ও innerHTML দিয়ে কনটেন্ট বদলানো</h3>
        <p>একটা এলিমেন্ট খুঁজে পাওয়ার পর, তার ভেতরের লেখা পড়া বা বদলানো যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">heading</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"demo-heading-83"</span>);
<span class="fn">heading</span>.<span class="fn">textContent</span> = <span class="str">"নতুন লেখা বসানো হলো!"</span>;</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h3 id="demo-heading-83" style="font-size:16px;margin-bottom:10px;">এটাই আসল লেখা</h3>
            <button onclick="document.getElementById('demo-heading-83').textContent = 'নতুন লেখা বসানো হলো!'" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;">বাটনে ক্লিক করো</button>
          </div>
        </div>
        <p>👆 বাটনে ক্লিক করে দেখো — উপরের হেডিং সত্যিই বদলে যাচ্ছে।</p>

        <p><strong>textContent vs innerHTML — পার্থক্য:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রপার্টি</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>textContent</code></td><td>শুধু সাধারণ টেক্সট বসায়/পড়ে — HTML ট্যাগ থাকলেও তা লেখা হিসেবেই দেখাবে, রেন্ডার হবে না</td></tr>
              <tr><td><code>innerHTML</code></td><td>HTML কোড হিসেবে বসায় — ট্যাগ থাকলে সেটা আসল HTML এলিমেন্ট হিসেবে রেন্ডার হয়</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">box1</span>.<span class="fn">textContent</span> = <span class="str">"&lt;strong&gt;জরুরি&lt;/strong&gt;"</span>;  <span class="cmt">// ট্যাগ টেক্সট হিসেবেই দেখাবে</span>
<span class="fn">box2</span>.<span class="fn">innerHTML</span> = <span class="str">"&lt;strong&gt;জরুরি&lt;/strong&gt;"</span>;   <span class="cmt">// আসল বোল্ড টেক্সট হিসেবে রেন্ডার হবে</span></code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="font-size:12px;color:#6B7280;margin-bottom:4px;">textContent দিয়ে বসালে:</p>
            <div style="border:1px solid #E5E7EB;padding:8px;border-radius:6px;margin-bottom:10px;font-size:13px;">&lt;strong&gt;জরুরি&lt;/strong&gt;</div>
            <p style="font-size:12px;color:#6B7280;margin-bottom:4px;">innerHTML দিয়ে বসালে:</p>
            <div style="border:1px solid #E5E7EB;padding:8px;border-radius:6px;font-size:13px;"><strong>জরুরি</strong></div>
          </div>
        </div>

        <p>⚠️ <strong>নিরাপত্তা সতর্কতা:</strong> ইউজারের টাইপ করা ডাটা (যেমন কমেন্ট বক্সের লেখা) কখনো সরাসরি <code>innerHTML</code>-এ বসানো উচিত না — যদি সেই টেক্সটে <code>&lt;script&gt;</code> ট্যাগ থাকে, তা এক্সিকিউট হয়ে যেতে পারে (এই ধরনের নিরাপত্তা ঝুঁকিকে বলে XSS)। ইউজারের ডাটার জন্য সবসময় নিরাপদ <code>textContent</code> ব্যবহার করাই বেস্ট প্র্যাকটিস।</p>
      `
    },
    {
      id: "8.4",
      title: "style প্রপার্টি",
      content: `
        <h3>🔹 ৮.৪ style প্রপার্টি দিয়ে সরাসরি CSS বদলানো</h3>
        <p>JavaScript দিয়ে সরাসরি একটা এলিমেন্টের CSS প্রপার্টি বদলানো যায় <code>element.style.propertyName</code> সিনট্যাক্সে। মনে রাখতে হবে — CSS প্রপার্টির নামে হাইফেন থাকলে (যেমন <code>background-color</code>), JavaScript-এ সেটা <code>camelCase</code>-এ লিখতে হয় (<code>backgroundColor</code>) — CSS কোর্সের মডিউল ১০-এ শেখা <code>kebab-case</code> ও এই মডিউলের <code>camelCase</code> নামকরণের পার্থক্যটা এখানে গুরুত্বপূর্ণ।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">box</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"demo-box-84"</span>);

<span class="fn">box</span>.<span class="fn">style</span>.<span class="fn">backgroundColor</span> = <span class="str">"#0066CC"</span>;
<span class="fn">box</span>.<span class="fn">style</span>.<span class="fn">color</span> = <span class="str">"white"</span>;
<span class="fn">box</span>.<span class="fn">style</span>.<span class="fn">borderRadius</span> = <span class="str">"10px"</span>;</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div id="demo-box-84" style="padding:16px;border:1px solid #E5E7EB;margin-bottom:10px;">এই বক্সটাই বদলাবে</div>
            <button onclick="const b=document.getElementById('demo-box-84'); b.style.backgroundColor='#0066CC'; b.style.color='white'; b.style.borderRadius='10px';" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;">স্টাইল করো</button>
          </div>
        </div>
        <p>👆 ক্লিক করে দেখো — বক্সটা নীল ব্যাকগ্রাউন্ড, সাদা টেক্সট ও গোল কোণা পেয়ে যাবে।</p>

        <p>⚠️ <strong>বেস্ট প্র্যাকটিস:</strong> একাধিক CSS প্রপার্টি বদলানোর দরকার হলে <code>style</code> দিয়ে একটার পর একটা না লিখে, পরের সেকশনে শেখা <code>classList</code> ব্যবহার করা ভালো অভ্যাস — CSS-এ একটা class বানিয়ে রেখে শুধু সেই class-টা যোগ/বাদ দেওয়া কোডকে আরও গোছানো রাখে।</p>
      `
    },
    {
      id: "8.5",
      title: "classList",
      content: `
        <h3>🔹 ৮.৫ classList — ক্লাস নিয়ন্ত্রণ (add, remove, toggle)</h3>
        <p>সরাসরি ইনলাইন স্টাইল বদলানোর বদলে, CSS ফাইলে আগে থেকে class বানিয়ে রেখে, JavaScript দিয়ে শুধু সেই class-টা এলিমেন্টে যোগ/বাদ দেওয়াই বেশি প্রফেশনাল পদ্ধতি।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* আগে থেকে CSS-এ class বানানো */</span>
<span class="kw">.highlight</span> {
  <span class="prop">background-color</span>: <span class="val">#FEF3C7</span>;
  <span class="prop">border</span>: <span class="val">2px solid #F59E0B</span>;
}</code></pre></div>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">card</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"demo-card-85"</span>);

<span class="fn">card</span>.<span class="fn">classList</span>.<span class="fn">add</span>(<span class="str">"highlight"</span>);      <span class="cmt">// class যোগ করা</span>
<span class="fn">card</span>.<span class="fn">classList</span>.<span class="fn">remove</span>(<span class="str">"highlight"</span>);   <span class="cmt">// class বাদ দেওয়া</span>
<span class="fn">card</span>.<span class="fn">classList</span>.<span class="fn">toggle</span>(<span class="str">"highlight"</span>);   <span class="cmt">// থাকলে বাদ, না থাকলে যোগ (সুইচের মতো)</span></code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>.demo-highlight-85{background-color:#FEF3C7;border:2px solid #F59E0B;}</style>
            <div id="demo-card-85" style="padding:16px;border:2px solid #E5E7EB;border-radius:8px;margin-bottom:10px;transition:all 0.2s ease;">এই কার্ডে toggle করো</div>
            <button onclick="document.getElementById('demo-card-85').classList.toggle('demo-highlight-85')" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;">Highlight টগল করো</button>
          </div>
        </div>
        <p>👆 বাটনে বারবার ক্লিক করো — প্রতিবার কার্ডটা highlight অন-অফ হবে। <code>toggle</code> সবচেয়ে বেশি ব্যবহৃত হয় মেনু খোলা/বন্ধ, ডার্ক মোড অন/অফ, অথবা "active" স্টেট দেখানোর জন্য।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মেথড</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>classList.add("x")</code></td><td>class যোগ করে (আগে থেকে থাকলেও সমস্যা নেই)</td></tr>
              <tr><td><code>classList.remove("x")</code></td><td>class বাদ দেয় (না থাকলেও এরর দেয় না)</td></tr>
              <tr><td><code>classList.toggle("x")</code></td><td>থাকলে বাদ দেয়, না থাকলে যোগ করে</td></tr>
              <tr><td><code>classList.contains("x")</code></td><td>class আছে কিনা true/false রিটার্ন করে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "8.6",
      title: "নতুন এলিমেন্ট তৈরি করা",
      content: `
        <h3>🔹 ৮.৬ createElement ও appendChild দিয়ে নতুন এলিমেন্ট তৈরি</h3>
        <p>JavaScript দিয়ে সম্পূর্ণ নতুন HTML এলিমেন্ট তৈরি করে পেজে যোগ করা যায় — এভাবেই টু-ডু লিস্ট অ্যাপে নতুন টাস্ক যোগ হয়, বা কমেন্ট সেকশনে নতুন কমেন্ট যোগ হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">list</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"demo-list-86"</span>);

<span class="cmt">// ধাপ ১: নতুন &lt;li&gt; এলিমেন্ট তৈরি (এখনো পেজে যোগ হয়নি)</span>
<span class="kw">const</span> <span class="fn">newItem</span> = <span class="fn">document</span>.<span class="fn">createElement</span>(<span class="str">"li"</span>);

<span class="cmt">// ধাপ ২: তার ভেতরে টেক্সট বসানো</span>
<span class="fn">newItem</span>.<span class="fn">textContent</span> = <span class="str">"নতুন টাস্ক"</span>;

<span class="cmt">// ধাপ ৩: লিস্টের শেষে যোগ করা — এখন পেজে দেখা যাবে</span>
<span class="fn">list</span>.<span class="fn">appendChild</span>(<span class="fn">newItem</span>);</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <ul id="demo-list-86" style="margin-left:18px;font-size:13px;margin-bottom:10px;">
              <li>প্রথম টাস্ক</li>
              <li>দ্বিতীয় টাস্ক</li>
            </ul>
            <button onclick="const list=document.getElementById('demo-list-86'); const item=document.createElement('li'); item.textContent='নতুন টাস্ক'; list.appendChild(item);" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;">নতুন টাস্ক যোগ করো</button>
          </div>
        </div>
        <p>👆 বাটনে একাধিকবার ক্লিক করো — প্রতিবার তালিকায় একটা নতুন "নতুন টাস্ক" লাইন যোগ হবে।</p>

        <p>💡 <strong>তিনটা ধাপ মনে রাখো:</strong> ১) <code>createElement</code> দিয়ে এলিমেন্ট বানাও (এখনো "অদৃশ্য", মেমরিতে আছে কিন্তু পেজে নেই), ২) তার কনটেন্ট/স্টাইল সেট করো, ৩) <code>appendChild</code> (বা আধুনিক <code>append</code>) দিয়ে আসল DOM-এ যোগ করো — এই তৃতীয় ধাপের আগ পর্যন্ত এলিমেন্টটা স্ক্রিনে দেখা যাবে না।</p>
      `
    },
    {
      id: "8.7",
      title: "এলিমেন্ট মুছে ফেলা ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৮.৭ remove() দিয়ে এলিমেন্ট মুছে ফেলা</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">item</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"demo-item-87"</span>);
<span class="fn">item</span>.<span class="fn">remove</span>();</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div id="demo-item-87" style="padding:12px;border:1px solid #E5E7EB;border-radius:6px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
              <span>এই নোটিফিকেশনটা বন্ধ করো</span>
              <button onclick="document.getElementById('demo-item-87').remove()" style="background:#DC2626;color:white;border:none;padding:5px 12px;border-radius:6px;cursor:pointer;font-size:12px;">✕ বন্ধ করো</button>
            </div>
          </div>
        </div>
        <p>👆 বাটনে ক্লিক করো — পুরো এলিমেন্টটাই DOM থেকে সম্পূর্ণ সরে যাবে (মুছে ফেলার পর আবার আনতে পেজ রিফ্রেশ করতে হবে, যেহেতু এটা সত্যিই মুছে গেছে)। এই প্যাটার্নটাই "নোটিফিকেশন বন্ধ করা" বা "লিস্ট থেকে আইটেম মুছে ফেলা" ফিচারে ব্যবহার হয়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🌳 DOM হলো ব্রাউজারের মেমরিতে HTML-এর "জীবন্ত" প্রতিরূপ — JavaScript এটা বদলালে সাথে সাথে স্ক্রিনে পরিবর্তন দেখা যায়।</div>
          <div class="takeaway-item">🔍 <code>querySelector("সিলেক্টর")</code> — CSS সিলেক্টর সিনট্যাক্স দিয়েই এলিমেন্ট খোঁজা যায়, <code>getElementById</code> শুধু id-এর জন্য দ্রুত পদ্ধতি।</div>
          <div class="takeaway-item">✏️ <code>textContent</code> নিরাপদ প্লেইন টেক্সটের জন্য; <code>innerHTML</code> HTML রেন্ডার করে কিন্তু ইউজার-ইনপুটে ব্যবহার করলে নিরাপত্তা ঝুঁকি (XSS) থাকে।</div>
          <div class="takeaway-item">🎨 <code>element.style.propertyName</code> (camelCase-এ) দিয়ে সরাসরি CSS বদলানো যায়, তবে বড় পরিবর্তনে <code>classList</code> ব্যবহার করা বেশি গোছানো।</div>
          <div class="takeaway-item">🔄 <code>classList.add/remove/toggle("class")</code> — CSS-এ আগে থেকে বানানো class এলিমেন্টে যোগ/বাদ/সুইচ করে।</div>
          <div class="takeaway-item">➕ <code>createElement</code> → কনটেন্ট সেট করো → <code>appendChild</code> — এই তিন ধাপে সম্পূর্ণ নতুন এলিমেন্ট পেজে যোগ করা যায়।</div>
          <div class="takeaway-item">🗑️ <code>element.remove()</code> দিয়ে DOM থেকে সরাসরি এলিমেন্ট মুছে ফেলা যায়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=9&section=9.0">
          পরের মডিউল: ইভেন্ট হ্যান্ডলিং ও ফর্ম
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  9: [
    {
      id: "9.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>⚡ মডিউল ৯: ইভেন্ট হ্যান্ডলিং ও ফর্ম</h2>

        <h3>🔹 ৯.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>addEventListener</code> বেসিক</li>
          <li>ক্লিক ইভেন্ট</li>
          <li>মাউস ইভেন্ট (mouseover/mouseout)</li>
          <li>কীবোর্ড ও ইনপুট ইভেন্ট</li>
          <li>Event Object ও <code>e.target</code></li>
          <li>ফর্ম সাবমিট ও <code>preventDefault()</code></li>
          <li>বেসিক ফর্ম ভ্যালিডেশন</li>
        </ul>
        <p><strong>ইভেন্ট</strong> হলো এমন কিছু যা ব্রাউজারে "ঘটে" — ক্লিক করা, মাউস আনা, টাইপ করা, ফর্ম সাবমিট করা। JavaScript দিয়ে এসব ইভেন্ট "শোনা" (listen) যায়, আর ইভেন্ট ঘটলেই একটা নির্দিষ্ট ফাংশন চালানো যায় — এটাই একটা ওয়েবসাইটকে সত্যিকারের ইন্টারঅ্যাক্টিভ করে তোলে।</p>
      `
    },
    {
      id: "9.1",
      title: "addEventListener বেসিক",
      content: `
        <h3>🔹 ৯.১ addEventListener বেসিক</h3>
        <p>HTML কোর্সে হয়তো <code>onclick="..."</code> অ্যাট্রিবিউট দেখেছ (এই কোর্সের প্রিভিউ-ডেমোগুলোতেও এটা ব্যবহার হয়েছে, সরলতার জন্য) — কিন্তু বাস্তব প্রজেক্টের <code>.js</code> ফাইলে ইভেন্ট শোনার প্রফেশনাল ও স্ট্যান্ডার্ড পদ্ধতি হলো <code>addEventListener</code>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;button</span> <span class="fn">id</span>=<span class="str">"myBtn"</span><span class="kw">&gt;</span>ক্লিক করো<span class="kw">&lt;/button&gt;</span></code></pre></div>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">btn</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"myBtn"</span>);

<span class="fn">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, <span class="kw">function</span>() {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"বাটনে ক্লিক করা হয়েছে!"</span>);
});</code></pre></div>
        </div>

        <p>💡 <strong>সিনট্যাক্স ভেঙে বোঝা যাক:</strong> <code>addEventListener</code> দুইটা আর্গুমেন্ট নেয় — প্রথমটা কোন ইভেন্ট শুনতে হবে তার নাম (<code>"click"</code>), দ্বিতীয়টা একটা ফাংশন, যা সেই ইভেন্ট ঘটলে চলবে। এই ফাংশনকে বলে <strong>Event Handler</strong> বা <strong>Callback Function</strong>।</p>

        <p>নিচে দেখো সত্যিকারের কাজ-করা উদাহরণ (ডেমোর সরলতার জন্য <code>onclick</code> ব্যবহার করা হয়েছে, ফলাফল হুবহু একই):</p>

        <div class="preview-divider" style="border-radius:8px 8px 0 0;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
        <div class="preview-wrap" style="border-radius:0 0 8px 8px;border:1px solid #E5E7EB;border-top:none;">
          <button id="demo-btn-91" onclick="document.getElementById('demo-result-91').textContent = 'বাটনে ক্লিক করা হয়েছে! ✅'" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;margin-bottom:10px;">ক্লিক করো</button>
          <p id="demo-result-91" style="font-size:13px;color:#374151;">এখনো ক্লিক করা হয়নি</p>
        </div>

        <p>⚠️ <strong>কেন addEventListener ব্যবহার করা উচিত <code>onclick</code> অ্যাট্রিবিউটের বদলে:</strong> <code>onclick="..."</code> HTML-এর ভেতরে JavaScript লজিক মিশিয়ে ফেলে (HTML=কাঠামো, JS=লজিক আলাদা রাখাই ভালো অভ্যাস), আর একই এলিমেন্টে একাধিক ইভেন্ট লিসেনার যোগ করাও <code>addEventListener</code> দিয়েই সহজ। তাই <code>.js</code> ফাইলে সবসময় <code>addEventListener</code> ব্যবহার করো — এই কোর্সের প্রিভিউ-ডেমোতে শুধু <code>onclick</code> ব্যবহার হয়েছে কারণ এই পেজের গঠনগত সীমাবদ্ধতার জন্য (কোড সরাসরি HTML-এ বসে), বাস্তব প্রজেক্টে না।</p>
      `
    },
    {
      id: "9.2",
      title: "মাউস ইভেন্ট",
      content: `
        <h3>🔹 ৯.২ মাউস ইভেন্ট — mouseover ও mouseout</h3>
        <p>CSS কোর্সে <code>:hover</code> দিয়ে হোভার স্টাইল করা শিখেছিলে — JavaScript দিয়েও মাউস আসা/যাওয়া "শোনা" যায়, যা CSS দিয়ে সম্ভব না এমন জটিল লজিকের জন্য দরকার (যেমন হোভার করলে একটা কাউন্টার বাড়ানো)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">box</span>.<span class="fn">addEventListener</span>(<span class="str">"mouseover"</span>, <span class="kw">function</span>() {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"মাউস ভেতরে ঢুকেছে"</span>);
});

<span class="fn">box</span>.<span class="fn">addEventListener</span>(<span class="str">"mouseout"</span>, <span class="kw">function</span>() {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"মাউস বাইরে চলে গেছে"</span>);
});</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div onmouseover="document.getElementById('demo-mouse-92').textContent = 'মাউস ভেতরে আছে! 👋'" onmouseout="document.getElementById('demo-mouse-92').textContent = 'মাউস বাইরে চলে গেছে'" style="background:#F0F9FF;border:2px dashed #0066CC;padding:24px;border-radius:8px;text-align:center;margin-bottom:10px;cursor:pointer;">এই বক্সের ওপর মাউস আনো</div>
            <p id="demo-mouse-92" style="font-size:13px;color:#374151;">এখনো মাউস আনা হয়নি</p>
          </div>
        </div>
        <p>👆 বক্সের ওপর মাউস নিয়ে যাও ও সরিয়ে নাও — নিচের টেক্সট সাথে সাথে বদলে যাবে।</p>
      `
    },
    {
      id: "9.3",
      title: "কীবোর্ড ও ইনপুট ইভেন্ট",
      content: `
        <h3>🔹 ৯.৩ কীবোর্ড ও ইনপুট ইভেন্ট</h3>
        <p>ফর্ম ইনপুটে টাইপ করার সাথে সাথে কিছু ঘটাতে (যেমন লাইভ ক্যারেক্টার কাউন্ট) <code>input</code> ইভেন্ট ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">input</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"username"</span>);

<span class="fn">input</span>.<span class="fn">addEventListener</span>(<span class="str">"input"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`তুমি লিখেছ: \${e.target.value}\`</span>);
});</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <input type="text" placeholder="এখানে টাইপ করো..." oninput="document.getElementById('demo-input-93').textContent = 'তুমি লিখেছ: ' + this.value" style="border:1px solid #D1D5DB;border-radius:6px;padding:8px 12px;font-size:13px;width:220px;margin-bottom:10px;">
            <p id="demo-input-93" style="font-size:13px;color:#374151;">তুমি লিখেছ: (এখনো কিছু লেখা হয়নি)</p>
          </div>
        </div>
        <p>👆 ইনপুট বক্সে টাইপ করো — প্রতিটা অক্ষর টাইপ করার সাথে সাথে নিচের টেক্সট আপডেট হবে।</p>

        <p>💡 <code>e.target.value</code> — এখানে <code>e</code> হলো Event Object (পরের সেকশনে বিস্তারিত), <code>e.target</code> মানে যে এলিমেন্টে ইভেন্টটা ঘটেছে (এখানে ইনপুট বক্স), আর <code>.value</code> সেই ইনপুটে বর্তমানে কী লেখা আছে তা বের করে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ইভেন্ট</th><th>কখন ঘটে</th></tr></thead>
            <tbody>
              <tr><td><code>input</code></td><td>প্রতিটা অক্ষর টাইপ/মুছার সাথে সাথে</td></tr>
              <tr><td><code>change</code></td><td>ইনপুট থেকে ফোকাস সরে গেলে (একবার, শেষ মান নিয়ে)</td></tr>
              <tr><td><code>keydown</code></td><td>যেকোনো কী চাপার মুহূর্তে</td></tr>
              <tr><td><code>keyup</code></td><td>কী ছেড়ে দেওয়ার মুহূর্তে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "9.4",
      title: "Event Object ও e.target",
      content: `
        <h3>🔹 ৯.৪ Event Object ও e.target</h3>
        <p>যেকোনো ইভেন্ট হ্যান্ডলার ফাংশন স্বয়ংক্রিয়ভাবে একটা <strong>Event Object</strong> পায় (সাধারণত <code>e</code> বা <code>event</code> নামে) — এতে ইভেন্ট সম্পর্কে অনেক দরকারি তথ্য থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">button</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">e</span>.<span class="fn">target</span>);        <span class="cmt">// ঠিক কোন এলিমেন্টে ক্লিক হয়েছে</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">e</span>.<span class="fn">type</span>);          <span class="cmt">// ইভেন্টের নাম ("click")</span>
});</code></pre></div>
        </div>

        <p>💡 <code>e.target</code> সবচেয়ে বেশি ব্যবহৃত হয় যখন <strong>একাধিক এলিমেন্টের জন্য একটাই</strong> ইভেন্ট হ্যান্ডলার ব্যবহার করা হয় — তখন <code>e.target</code> দিয়ে বোঝা যায় ঠিক কোনটাতে ক্লিক পড়েছে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// ধরো তিনটা বাটনেই একই ফাংশন লাগানো আছে</span>
<span class="kw">function</span> <span class="fn">handleClick</span>(<span class="fn">e</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`তুমি \${e.target.textContent} বাটনে ক্লিক করেছ\`</span>);
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;gap:8px;margin-bottom:10px;">
              <button onclick="document.getElementById('demo-target-94').textContent = 'তুমি ' + this.textContent + ' বাটনে ক্লিক করেছ'" style="background:#0066CC;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">লাল</button>
              <button onclick="document.getElementById('demo-target-94').textContent = 'তুমি ' + this.textContent + ' বাটনে ক্লিক করেছ'" style="background:#0066CC;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">নীল</button>
              <button onclick="document.getElementById('demo-target-94').textContent = 'তুমি ' + this.textContent + ' বাটনে ক্লিক করেছ'" style="background:#0066CC;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">সবুজ</button>
            </div>
            <p id="demo-target-94" style="font-size:13px;color:#374151;">এখনো কোনো বাটনে ক্লিক করা হয়নি</p>
          </div>
        </div>
        <p>👆 ভিন্ন ভিন্ন বাটনে ক্লিক করো — একই লজিক দিয়েই বোঝা যাচ্ছে ঠিক কোন বাটনে ক্লিক হয়েছে, কারণ প্রতিটা বাটনের নিজস্ব টেক্সট <code>e.target</code>-এর মাধ্যমে পাওয়া যাচ্ছে (এখানে ডেমোতে <code>this</code> ব্যবহার হয়েছে, যা <code>e.target</code>-এরই সমতুল্য)।</p>
      `
    },
    {
      id: "9.5",
      title: "ফর্ম সাবমিট ও preventDefault",
      content: `
        <h3>🔹 ৯.৫ ফর্ম সাবমিট ও preventDefault()</h3>
        <p>HTML কোর্সের মডিউল ৬-এ শেখা <code>&lt;form&gt;</code>-এর ডিফল্ট আচরণ হলো সাবমিট করলেই পেজ রিলোড হয়ে যাওয়া (বা অন্য পেজে চলে যাওয়া) — কিন্তু আধুনিক ওয়েব অ্যাপে সাধারণত এটা চাওয়া হয় না, বরং JavaScript দিয়ে সরাসরি ডাটা প্রসেস করতে চাওয়া হয়। এই ডিফল্ট আচরণ বন্ধ করতে <code>e.preventDefault()</code> ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">form</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"myForm"</span>);

<span class="fn">form</span>.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="fn">e</span>.<span class="fn">preventDefault</span>();   <span class="cmt">// পেজ রিলোড/রিডাইরেক্ট বন্ধ করা</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"ফর্ম সাবমিট হয়েছে, কিন্তু পেজ রিলোড হয়নি!"</span>);
});</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <form onsubmit="event.preventDefault(); document.getElementById('demo-form-95').textContent = 'ফর্ম সাবমিট হয়েছে, পেজ রিলোড হয়নি! ✅';">
              <input type="text" placeholder="তোমার নাম" style="border:1px solid #D1D5DB;border-radius:6px;padding:8px 12px;font-size:13px;margin-bottom:8px;display:block;">
              <button type="submit" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;">সাবমিট করো</button>
            </form>
            <p id="demo-form-95" style="font-size:13px;color:#374151;margin-top:10px;">এখনো সাবমিট করা হয়নি</p>
          </div>
        </div>
        <p>👆 সাবমিট বাটনে ক্লিক করো — লক্ষ করো পুরো পেজটা রিলোড হচ্ছে না (সাধারণত ফর্ম সাবমিট করলে যা হতো), শুধু নিচের টেক্সট বদলে যাচ্ছে।</p>
      `
    },
    {
      id: "9.6",
      title: "বেসিক ফর্ম ভ্যালিডেশন",
      content: `
        <h3>🔹 ৯.৬ JavaScript দিয়ে বেসিক ফর্ম ভ্যালিডেশন</h3>
        <p>HTML কোর্সের মডিউল ৬-এ <code>required</code>, <code>pattern</code>-এর মতো HTML-নিজস্ব ভ্যালিডেশন শিখেছিলে। JavaScript দিয়ে আরও নমনীয় (custom) ভ্যালিডেশন লজিক লেখা যায়, যা শুধু HTML অ্যাট্রিবিউট দিয়ে সম্ভব না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">form</span>.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="fn">e</span>.<span class="fn">preventDefault</span>();

  <span class="kw">const</span> <span class="fn">password</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"pass"</span>).<span class="fn">value</span>;

  <span class="kw">if</span> (<span class="fn">password</span>.<span class="fn">length</span> &lt; <span class="num">6</span>) {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"❌ পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে"</span>);
  } <span class="kw">else</span> {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"✅ পাসওয়ার্ড ঠিক আছে, সাবমিট হচ্ছে"</span>);
  }
});</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <form onsubmit="
              event.preventDefault();
              const pass = document.getElementById('demo-pass-96').value;
              const msg = document.getElementById('demo-validation-96');
              if (pass.length < 6) {
                msg.textContent = '❌ পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে';
                msg.style.color = '#DC2626';
              } else {
                msg.textContent = '✅ পাসওয়ার্ড ঠিক আছে, সাবমিট হচ্ছে';
                msg.style.color = '#16A34A';
              }
            ">
              <input type="password" id="demo-pass-96" placeholder="পাসওয়ার্ড দাও" style="border:1px solid #D1D5DB;border-radius:6px;padding:8px 12px;font-size:13px;margin-bottom:8px;display:block;">
              <button type="submit" style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;">সাবমিট করো</button>
            </form>
            <p id="demo-validation-96" style="font-size:13px;margin-top:10px;">এখনো কিছু সাবমিট করা হয়নি</p>
          </div>
        </div>
        <p>👆 ৬ অক্ষরের কম কিছু দিয়ে সাবমিট করে দেখো (লাল এরর দেখবে), তারপর ৬ বা তার বেশি অক্ষর দিয়ে আবার চেষ্টা করো (সবুজ সাফল্য বার্তা দেখবে)।</p>

        <p>💡 এখানে মডিউল ৩-এ শেখা <code>if...else</code>, মডিউল ৬-এ শেখা স্ট্রিং-এর <code>.length</code>, আর এই মডিউলের <code>preventDefault()</code> ও DOM ম্যানিপুলেশন — সবকিছু একসাথে মিলিয়ে একটা বাস্তব ফর্ম ভ্যালিডেশন তৈরি হয়েছে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🎧 <code>element.addEventListener("ইভেন্ট-নাম", ফাংশন)</code> — প্রফেশনাল কোডে ইভেন্ট শোনার স্ট্যান্ডার্ড পদ্ধতি, HTML-এর <code>onclick</code> অ্যাট্রিবিউটের চেয়ে ভালো (HTML ও JS আলাদা রাখে)।</div>
          <div class="takeaway-item">🖱️ mouseover/mouseout (মাউস ঢোকা/বের হওয়া), input (টাইপ করার সাথে সাথে), keydown/keyup (কী চাপা/ছাড়া), submit (ফর্ম সাবমিট) — সবচেয়ে বেশি ব্যবহৃত ইভেন্ট।</div>
          <div class="takeaway-item">📦 Event Object (<code>e</code>) প্রতিটা হ্যান্ডলার ফাংশন স্বয়ংক্রিয়ভাবে পায়; <code>e.target</code> দিয়ে বোঝা যায় ঠিক কোন এলিমেন্টে ইভেন্ট ঘটেছে।</div>
          <div class="takeaway-item">🚫 <code>e.preventDefault()</code> ফর্মের ডিফল্ট পেজ-রিলোড আচরণ বন্ধ করে, JavaScript দিয়ে নিজে ডাটা প্রসেস করার সুযোগ দেয়।</div>
          <div class="takeaway-item">✅ JavaScript ভ্যালিডেশন (if/else + string length ইত্যাদি) HTML-এর built-in ভ্যালিডেশনের চেয়ে বেশি কাস্টম ও নমনীয় নিয়ম প্রয়োগ করতে দেয়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=10&section=10.0">
          পরের মডিউল: অ্যাডভান্সড টপিক ও বেস্ট প্র্যাকটিস
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
  10: [
    {
      id: "10.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🚀 মডিউল ১০: অ্যাডভান্সড টপিক ও বেস্ট প্র্যাকটিস</h2>

        <h3>🔹 ১০.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এটা এই কোর্সের শেষ মডিউল! এখানে আমরা যা শিখব:</p>
        <ul>
          <li>Destructuring — অ্যারে ও অবজেক্ট থেকে সহজে ভ্যালু বের করা</li>
          <li>Spread ও Rest অপারেটর (<code>...</code>)</li>
          <li>JSON — <code>JSON.stringify()</code> ও <code>JSON.parse()</code></li>
          <li>localStorage — ব্রাউজারে ডাটা সেভ রাখা</li>
          <li><code>try...catch</code> দিয়ে এরর হ্যান্ডলিং</li>
          <li>এই কোর্স জুড়ে দেখা কমন ভুলের রিক্যাপ</li>
        </ul>
        <p>এই মডিউল শেষ করলে তুমি একদম বেসিক ভেরিয়েবল থেকে শুরু করে DOM ম্যানিপুলেশন, ইভেন্ট হ্যান্ডলিং, ও আধুনিক ES6+ ফিচার পর্যন্ত — JavaScript-এর একটা শক্ত ভিত্তি পেয়ে যাবে।</p>
      `
    },
    {
      id: "10.1",
      title: "Destructuring",
      content: `
        <h3>🔹 ১০.১ Destructuring — সহজে ভ্যালু বের করা</h3>
        <p><strong>Array Destructuring</strong> — একটা অ্যারের ভ্যালুগুলো এক লাইনেই আলাদা আলাদা ভেরিয়েবলে বসিয়ে ফেলা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">colors</span> = [<span class="str">"লাল"</span>, <span class="str">"সবুজ"</span>, <span class="str">"নীল"</span>];

<span class="cmt">// পুরনো পদ্ধতি</span>
<span class="kw">const</span> <span class="fn">first</span> = <span class="fn">colors</span>[<span class="num">0</span>];
<span class="kw">const</span> <span class="fn">second</span> = <span class="fn">colors</span>[<span class="num">1</span>];

<span class="cmt">// Destructuring — এক লাইনে একই কাজ</span>
<span class="kw">const</span> [<span class="fn">c1</span>, <span class="fn">c2</span>, <span class="fn">c3</span>] = <span class="fn">colors</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">c1</span>, <span class="fn">c2</span>, <span class="fn">c3</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">লাল সবুজ নীল</div>
          </div>
        </div>

        <p><strong>Object Destructuring</strong> — অবজেক্ট থেকে নির্দিষ্ট key-গুলো সরাসরি ভেরিয়েবল হিসেবে বের করা যায় (key-এর নাম ও ভেরিয়েবলের নাম একই হতে হবে)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span>, <span class="fn">city</span>: <span class="str">"চট্টগ্রাম"</span> };

<span class="cmt">// পুরনো পদ্ধতি</span>
<span class="kw">const</span> <span class="fn">name1</span> = <span class="fn">student</span>.<span class="fn">name</span>;
<span class="kw">const</span> <span class="fn">age1</span> = <span class="fn">student</span>.<span class="fn">age</span>;

<span class="cmt">// Destructuring — এক লাইনে</span>
<span class="kw">const</span> { <span class="fn">name</span>, <span class="fn">age</span> } = <span class="fn">student</span>;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">name</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">age</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাজমুল</div>
            <div class="console-line">25</div>
          </div>
        </div>

        <p>💡 লক্ষ করো — <code>{ name, age }</code> ঠিক <code>student</code>-এর key-এর নাম মিলিয়ে লেখা হয়েছে, আর সেই নামেই দুটো নতুন ভেরিয়েবল (<code>name</code>, <code>age</code>) তৈরি হয়ে গেছে। ফাংশনের প্যারামিটারেও ডেস্ট্রাকচারিং খুব বেশি ব্যবহার হয় — মডিউল ৮ ও ৯-এর <code>e => { const { target } = e; }</code>-এর মতো প্যাটার্ন আধুনিক কোডে খুবই সাধারণ।</p>
      `
    },
    {
      id: "10.2",
      title: "Spread ও Rest অপারেটর",
      content: `
        <h3>🔹 ১০.২ Spread অপারেটর (...) — ছড়িয়ে দেওয়া</h3>
        <p>মডিউল ৬-এ <code>sort()</code>-এর সময় <code>[...numbers]</code> দেখেছিলে — এটাই Spread অপারেটর, যা একটা অ্যারে/অবজেক্টের সব ভ্যালু "ছড়িয়ে" নতুন একটাতে কপি করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">fruits1</span> = [<span class="str">"আম"</span>, <span class="str">"কাঁঠাল"</span>];
<span class="kw">const</span> <span class="fn">fruits2</span> = [<span class="str">"লিচু"</span>, <span class="str">"পেঁপে"</span>];

<span class="cmt">// দুটো অ্যারে মিলিয়ে নতুন একটা অ্যারে বানানো</span>
<span class="kw">const</span> <span class="fn">allFruits</span> = [...<span class="fn">fruits1</span>, ...<span class="fn">fruits2</span>];

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">allFruits</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">[ 'আম', 'কাঁঠাল', 'লিচু', 'পেঁপে' ]</div>
          </div>
        </div>

        <p><strong>অবজেক্টেও একইভাবে কাজ করে — নতুন প্রপার্টি যোগ করে একটা নতুন অবজেক্ট বানাতে:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span> };

<span class="kw">const</span> <span class="fn">updatedStudent</span> = { ...<span class="fn">student</span>, <span class="fn">city</span>: <span class="str">"চট্টগ্রাম"</span> };

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">updatedStudent</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">student</span>);  <span class="cmt">// আসল অবজেক্ট অপরিবর্তিত</span></code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">{ name: 'নাজমুল', age: 25, city: 'চট্টগ্রাম' }</div>
            <div class="console-line">{ name: 'নাজমুল', age: 25 }</div>
          </div>
        </div>
        <p>💡 <code>{ ...student, city: "চট্টগ্রাম" }</code> — প্রথমে <code>student</code>-এর সব প্রপার্টি কপি হয়, তারপর <code>city</code> নতুন যোগ হয়। মূল <code>student</code> অবজেক্ট একদমই বদলায়নি — এটাই Spread-এর সবচেয়ে বড় সুবিধা: মূল ডাটা "বদলানো" না গিয়ে একটা "পরিবর্তিত কপি" বানানো।</p>

        <h3>🔹 Rest অপারেটর (...) — একসাথে জড়ো করা</h3>
        <p>দেখতে Spread-এর মতোই (<code>...</code>), কিন্তু কাজ উল্টো — একাধিক আলাদা ভ্যালুকে একটা অ্যারেতে "জড়ো" করে, সাধারণত ফাংশনের প্যারামিটারে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">sum</span>(...<span class="fn">numbers</span>) {   <span class="cmt">// যতগুলো আর্গুমেন্ট দাও, সব একটা অ্যারেতে জড়ো হবে</span>
  <span class="kw">return</span> <span class="fn">numbers</span>.<span class="fn">reduce</span>((<span class="fn">total</span>, <span class="fn">n</span>) <span class="kw">=&gt;</span> <span class="fn">total</span> + <span class="fn">n</span>, <span class="num">0</span>);
}

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>));
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>));</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">3</div>
            <div class="console-line">10</div>
          </div>
        </div>
        <p>💡 <code>...numbers</code> প্যারামিটারে দেওয়ায়, যতগুলোই আর্গুমেন্ট পাঠাও না কেন (২টা বা ৪টা), সবগুলোই <code>numbers</code> নামের একটা অ্যারেতে জড়ো হয়ে যায় — এরপর মডিউল ৬-এ শেখা <code>reduce</code> দিয়ে সেই অ্যারের যোগফল বের করা হয়েছে।</p>
      `
    },
    {
      id: "10.3",
      title: "JSON",
      content: `
        <h3>🔹 ১০.৩ JSON — JSON.stringify() ও JSON.parse()</h3>
        <p><strong>JSON</strong> (JavaScript Object Notation) একটা টেক্সট-ফরম্যাট, যা দিয়ে অবজেক্ট/অ্যারে ডাটা সংরক্ষণ বা পাঠানো হয় — সার্ভারের সাথে ডাটা আদান-প্রদান, বা ব্রাউজারে ডাটা সেভ রাখার সময় এটাই সবচেয়ে বেশি ব্যবহৃত ফরম্যাট।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span> };

<span class="cmt">// অবজেক্ট থেকে JSON টেক্সট (স্ট্রিং) বানানো</span>
<span class="kw">const</span> <span class="fn">jsonText</span> = <span class="fn">JSON</span>.<span class="fn">stringify</span>(<span class="fn">student</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">jsonText</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="fn">jsonText</span>);   <span class="cmt">// এটা এখন একটা সাধারণ স্ট্রিং</span>

<span class="cmt">// JSON টেক্সট থেকে আবার অবজেক্টে ফিরিয়ে আনা</span>
<span class="kw">const</span> <span class="fn">parsedBack</span> = <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="fn">jsonText</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">parsedBack</span>.<span class="fn">name</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">{"name":"নাজমুল","age":25}</div>
            <div class="console-line">string</div>
            <div class="console-line">নাজমুল</div>
          </div>
        </div>

        <p>💡 <strong>সহজে মনে রাখার নিয়ম:</strong> <code>stringify</code> = অবজেক্ট → স্ট্রিং (পাঠানো/সেভ করার উপযোগী বানানো), <code>parse</code> = স্ট্রিং → অবজেক্ট (আবার ব্যবহারযোগ্য করা)। এই দুটো মেথড একে অপরের বিপরীত কাজ করে।</p>
      `
    },
    {
      id: "10.4",
      title: "localStorage",
      content: `
        <h3>🔹 ১০.৪ localStorage — ব্রাউজারে ডাটা সেভ রাখা</h3>
        <p><code>localStorage</code> দিয়ে ব্রাউজারে সরাসরি ডাটা সেভ রাখা যায়, যা পেজ রিলোড করলে বা ব্রাউজার বন্ধ করে আবার খুললেও থেকে যায় (যতক্ষণ না ইচ্ছাকৃতভাবে মুছে ফেলা হয়)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// ডাটা সেভ করা — শুধু স্ট্রিং সেভ করা যায়</span>
<span class="fn">localStorage</span>.<span class="fn">setItem</span>(<span class="str">"username"</span>, <span class="str">"নাজমুল"</span>);

<span class="cmt">// ডাটা পড়া</span>
<span class="kw">const</span> <span class="fn">savedName</span> = <span class="fn">localStorage</span>.<span class="fn">getItem</span>(<span class="str">"username"</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">savedName</span>);

<span class="cmt">// ডাটা মুছে ফেলা</span>
<span class="fn">localStorage</span>.<span class="fn">removeItem</span>(<span class="str">"username"</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাজমুল</div>
          </div>
        </div>

        <p>⚠️ <strong>গুরুত্বপূর্ণ সীমাবদ্ধতা:</strong> <code>localStorage</code> শুধু <strong>স্ট্রিং</strong> সেভ করতে পারে — সরাসরি অবজেক্ট বা অ্যারে সেভ করার চেষ্টা করলে তা <code>"[object Object]"</code>-এর মতো ভুল টেক্সটে পরিণত হবে। তাই অবজেক্ট/অ্যারে সেভ করতে হলে আগে <code>JSON.stringify()</code> দিয়ে স্ট্রিং বানাতে হয়, আর পড়ার সময় <code>JSON.parse()</code> দিয়ে আবার অবজেক্টে ফেরাতে হয় — ঠিক আগের সেকশনে শেখা পদ্ধতিতে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">student</span> = { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">age</span>: <span class="num">25</span> };

<span class="cmt">// অবজেক্ট সেভ করার সঠিক পদ্ধতি — আগে JSON বানাও</span>
<span class="fn">localStorage</span>.<span class="fn">setItem</span>(<span class="str">"student"</span>, <span class="fn">JSON</span>.<span class="fn">stringify</span>(<span class="fn">student</span>));

<span class="cmt">// পড়ার সময় আবার অবজেক্টে ফেরাও</span>
<span class="kw">const</span> <span class="fn">saved</span> = <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="fn">localStorage</span>.<span class="fn">getItem</span>(<span class="str">"student"</span>));
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">saved</span>.<span class="fn">name</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">নাজমুল</div>
          </div>
        </div>
      `
    },
    {
      id: "10.5",
      title: "try...catch এরর হ্যান্ডলিং",
      content: `
        <h3>🔹 ১০.৫ try...catch — এরর হ্যান্ডলিং</h3>
        <p>কোনো কোডে এরর ঘটার সম্ভাবনা থাকলে (যেমন ভুল ফরম্যাটের JSON পার্স করা), সেই এরর হ্যান্ডেল না করলে পুরো প্রোগ্রাম থেমে যায়। <code>try...catch</code> দিয়ে এরর "ধরে" প্রোগ্রামকে চলতে দেওয়া যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">try</span> {
  <span class="kw">const</span> <span class="fn">data</span> = <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="str">"এটা ভ্যালিড JSON না"</span>);   <span class="cmt">// এটা এরর দেবে</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">data</span>);
} <span class="kw">catch</span> (<span class="fn">error</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"কিছু একটা ভুল হয়েছে, কিন্তু প্রোগ্রাম থামেনি!"</span>);
}

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"এই লাইনটা এখনো চলছে"</span>);</code></pre></div>
          <div class="console-divider"><span class="console-icon">▸</span> CONSOLE</div>
          <div class="console-wrap">
            <div class="console-line">কিছু একটা ভুল হয়েছে, কিন্তু প্রোগ্রাম থামেনি!</div>
            <div class="console-line">এই লাইনটা এখনো চলছে</div>
          </div>
        </div>

        <p>💡 <code>try</code>-এর ভেতরে ঝুঁকিপূর্ণ কোড থাকে — এরর ঘটলে সাথে সাথে <code>catch</code>-এ চলে যায় (try-এর বাকি লাইন বাদ যায়), আর <code>catch</code>-এর কোড দিয়ে সেই এরর সামলে নেওয়া হয়। এরর ঘটলেও পুরো প্রোগ্রাম না থেমে পরের লাইনগুলো (যেমন শেষের <code>console.log</code>) স্বাভাবিকভাবে চলতে থেকেছে।</p>

        <p>💡 <code>try...catch</code> সাধারণত ব্যবহার হয় এমন কাজে যেখানে বাইরের/অনির্ভরযোগ্য ডাটা নিয়ে কাজ করা হয় — যেমন <code>JSON.parse()</code> (ইউজার বা সার্ভার থেকে আসা ডাটা সবসময় ভ্যালিড নাও হতে পারে), অথবা সার্ভারে নেটওয়ার্ক রিকোয়েস্ট পাঠানো।</p>
      `
    },
    {
      id: "10.6",
      title: "কমন ভুল রিক্যাপ",
      content: `
        <h3>🔹 ১০.৬ এই কোর্স জুড়ে দেখা কমন ভুলের রিক্যাপ</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ভুল</th><th>কেন সমস্যা</th><th>শেখা হয়েছিল</th></tr></thead>
            <tbody>
              <tr><td><code>==</code>/<code>!=</code> ব্যবহার করা</td><td>টাইপ কোয়ার্শনের অপ্রত্যাশিত আচরণ (যেমন <code>0 == false</code> সত্যি)</td><td>মডিউল ২</td></tr>
              <tr><td>while লুপে কাউন্টার আপডেট করতে ভুলে যাওয়া</td><td>Infinite Loop — প্রোগ্রাম আটকে যায়</td><td>মডিউল ৪</td></tr>
              <tr><td><code>switch</code>-এ <code>break;</code> বাদ দেওয়া</td><td>Fall-through — পরের case-ও চলতে থাকে</td><td>মডিউল ৩</td></tr>
              <tr><td>অ্যারের ইনডেক্স ১ থেকে গোনা</td><td>ইনডেক্স আসলে ০ থেকে শুরু হয়</td><td>মডিউল ৬</td></tr>
              <tr><td>ইউজার-ইনপুট সরাসরি <code>innerHTML</code>-এ বসানো</td><td>নিরাপত্তা ঝুঁকি (XSS)</td><td>মডিউল ৮</td></tr>
              <tr><td>ফর্ম সাবমিটে <code>preventDefault()</code> ভুলে যাওয়া</td><td>পেজ অনিচ্ছাকৃতভাবে রিলোড/রিডাইরেক্ট হয়ে যায়</td><td>মডিউল ৯</td></tr>
              <tr><td>localStorage-এ সরাসরি অবজেক্ট/অ্যারে সেভ করা</td><td><code>"[object Object]"</code> এর মতো ভুল ডাটা সেভ হয়</td><td>মডিউল ১০</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "10.7",
      title: "সারসংক্ষেপ ও কোর্স সমাপ্তি",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📦 Destructuring (<code>const [a, b] = arr;</code> / <code>const { name } = obj;</code>) — অ্যারে/অবজেক্ট থেকে সহজে, সংক্ষিপ্তভাবে ভ্যালু বের করার আধুনিক পদ্ধতি।</div>
          <div class="takeaway-item">🌊 Spread (<code>...arr</code>) ডাটা "ছড়িয়ে" কপি/মার্জ করে (মূল ডাটা বদলায় না); Rest (<code>...args</code>) একাধিক ভ্যালুকে একটা অ্যারেতে "জড়ো" করে।</div>
          <div class="takeaway-item">🔤 <code>JSON.stringify()</code> অবজেক্ট → স্ট্রিং, <code>JSON.parse()</code> স্ট্রিং → অবজেক্ট — ডাটা সংরক্ষণ/আদান-প্রদানের স্ট্যান্ডার্ড ফরম্যাট।</div>
          <div class="takeaway-item">💾 <code>localStorage</code> ব্রাউজারে স্থায়ীভাবে ডাটা রাখে, কিন্তু শুধু স্ট্রিং সেভ করতে পারে — অবজেক্ট/অ্যারের জন্য JSON.stringify/parse আবশ্যক।</div>
          <div class="takeaway-item">🛡️ <code>try { ঝুঁকিপূর্ণ কোড } catch (error) { এরর সামলানো }</code> — এরর ঘটলেও প্রোগ্রাম না থামিয়ে সামলে নেওয়ার পদ্ধতি।</div>
        </div>

        <h3>🎉 অভিনন্দন!</h3>
        <p>তুমি সম্পূর্ণ <strong>Banglay JavaScript</strong> কোর্সের ১০টা মডিউল শেষ করে ফেলেছ — ভেরিয়েবল, ডাটা টাইপ, কন্ডিশনাল, লুপ, ফাংশন, অ্যারে, অবজেক্ট থেকে শুরু করে DOM ম্যানিপুলেশন, ইভেন্ট হ্যান্ডলিং, ও আধুনিক ES6+ ফিচার পর্যন্ত!</p>
        <p>এখন HTML (কাঠামো), CSS (ডিজাইন), ও JavaScript (কার্যকারিতা) — তিনটা স্তম্ভই তোমার হাতে। সময় হাতে-কলমে প্র্যাকটিস করার। <strong>Amazing JavaScript Projects</strong> সেকশনে গিয়ে যা শিখেছ তা দিয়ে বাস্তব, ইন্টারঅ্যাক্টিভ প্রজেক্ট বানানো শুরু করো — সেখানেই আসল শেখা হবে।</p>

        <a class="btn-next-module" href="projects.html">
          🚀 Amazing JavaScript Projects শুরু করো
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
};
