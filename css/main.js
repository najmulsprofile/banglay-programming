/**
 * Banglay CSS — main.js
 *
 * এই ফাইলে CSS কোর্সের সব মডিউল মেটাডাটা ও লেসন কনটেন্ট আছে।
 * html-main.js / main.js থেকে সম্পূর্ণ আলাদা — যাতে তিনটা কোর্সের
 * ডাটা একসাথে থাকলেও একে অপরের ডাটাকে ওভাররাইট না করে।
 *
 * নামকরণ প্যাটার্ন:
 *   CSS_MODULES  → HTML_MODULES / MODULES এর সমতুল্য
 *   CSS_LESSONS  → HTML_LESSONS / LESSONS এর সমতুল্য
 *
 * ══════════════════════════════════════════════════════════════
 * গুরুত্বপূর্ণ ডিজাইন সিদ্ধান্ত — "LIVE PREVIEW" প্যাটার্ন
 * ══════════════════════════════════════════════════════════════
 * Python কোর্সে প্রতিটা কোড উদাহরণের ঠিক নিচে একই vscode-panel-এর
 * ভেতরে একটা TERMINAL সেকশন থাকে, যেখানে কোডটা রান করলে কী
 * আউটপুট আসবে তা সরাসরি দেখানো হয়।
 *
 * CSS-এর আউটপুট টার্মিনাল-টেক্সট না, বরং ভিজ্যুয়াল রেন্ডার —
 * তাই একই ধারণা অনুসরণ করে, একই vscode-panel-এর ভেতরে TERMINAL-এর
 * বদলে "LIVE PREVIEW" সেকশন রাখা হয়েছে, যেখানে কোডটা প্রয়োগ করলে
 * পেজে ঠিক কেমন দেখাবে তা সরাসরি রেন্ডার করে দেখানো হয়।
 *
 * ফলে প্রতিটা লেসনে: শেখা হচ্ছে → সাথে সাথে কোড লেখা হচ্ছে →
 * সাথে সাথে তার ফলাফল চোখে দেখা যাচ্ছে — এই তিনটা ধাপ একসাথে ঘটে,
 * যা শেখাটাকে অনেক বেশি মনে রাখার মতো করে তোলে।
 * ══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────────────────────
   MODULE METADATA
   মোট ১০টি মডিউল — বেসিক থেকে অ্যাডভান্সড CSS পর্যন্ত।
───────────────────────────────────────────────────────────── */
const CSS_MODULES = [
  { id: 1,  title: "CSS পরিচিতি ও যুক্ত করার পদ্ধতি",         icon: "🎨" },
  { id: 2,  title: "সিলেক্টর (Selectors)",                      icon: "🎯" },
  { id: 3,  title: "কালার, ব্যাকগ্রাউন্ড ও টেক্সট স্টাইলিং",    icon: "🖌️" },
  { id: 4,  title: "বক্স মডেল (Box Model)",                     icon: "📦" },
  { id: 5,  title: "ডিসপ্লে ও পজিশনিং",                          icon: "📐" },
  { id: 6,  title: "Flexbox",                                    icon: "🧩" },
  { id: 7,  title: "CSS Grid",                                   icon: "▦" },
  { id: 8,  title: "রেসপনসিভ ডিজাইন ও মিডিয়া কোয়েরি",          icon: "📱" },
  { id: 9,  title: "ট্রানজিশন, অ্যানিমেশন ও ট্রান্সফর্ম",        icon: "🎞️" },
  { id: 10, title: "অ্যাডভান্সড টপিক ও বেস্ট প্র্যাকটিস",        icon: "🚀" },
];

/* ─────────────────────────────────────────────────────────────
   LESSON SECTIONS
   প্রতিটা সেকশন = { id, title, content (HTML string) }
   মডিউল ১ সম্পূর্ণ লেখা; ২-১০ পরের সেশনে যোগ হবে।
───────────────────────────────────────────────────────────── */
const CSS_LESSONS = {

  /* ══════════════════════════════════════════════════════════
     MODULE 1 — CSS পরিচিতি ও যুক্ত করার পদ্ধতি (complete)
  ══════════════════════════════════════════════════════════ */
  1: [
    {
      id: "1.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🎨 মডিউল ১: CSS পরিচিতি ও যুক্ত করার পদ্ধতি</h2>

        <h3>🔹 ১.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>CSS কী এবং ওয়েবসাইটে এর ভূমিকা কী</li>
          <li>CSS-এর বেসিক সিনট্যাক্স (selector, property, value)</li>
          <li>CSS যুক্ত করার ৩টা পদ্ধতি — External, Internal, Inline</li>
          <li>কোন পদ্ধতি কখন ব্যবহার করা উচিত</li>
          <li>CSS-এ কমেন্ট লেখার নিয়ম</li>
        </ul>
        <p><strong>নোট:</strong> HTML কোর্সে তুমি শিখেছ কীভাবে ওয়েব পেজের কাঠামো (structure) বানাতে হয়। এবার CSS দিয়ে শিখবে সেই কাঠামোকে কীভাবে <strong>সুন্দর ও প্রফেশনাল</strong> দেখানো যায় — রঙ, ফন্ট, স্পেসিং, লেআউট সবকিছু।</p>
      `
    },
    {
      id: "1.1",
      title: "CSS কী এবং কেন শিখব?",
      content: `
        <h3>🔹 ১.১ CSS কী? (What is CSS?)</h3>
        <p><strong>CSS</strong> মানে <strong>Cascading Style Sheets</strong>। এটা দিয়ে HTML এলিমেন্টের ডিজাইন — রঙ, ফন্ট, সাইজ, স্পেসিং, লেআউট — নিয়ন্ত্রণ করা হয়।</p>

        <p><strong>সহজ ভাষায়:</strong> HTML যদি হয় বাড়ির কাঠামো (ইট, রড, ছাদ), তাহলে CSS হলো সেই বাড়ির রং, টাইলস, পর্দা, আসবাবপত্রের সাজসজ্জা। কাঠামো ছাড়া সাজানো যেমন সম্ভব না, তেমনি সাজসজ্জা ছাড়া একটা বাড়ি (বা ওয়েবসাইট) দেখতে সাদামাটা লাগে।</p>

        <p><strong>CSS ছাড়া ও CSS সহ একটা পেজের পার্থক্য:</strong></p>
        <ul>
          <li>CSS ছাড়া: সাদা ব্যাকগ্রাউন্ড, কালো ডিফল্ট টেক্সট, উপর থেকে নিচে সোজা সাজানো কনটেন্ট</li>
          <li>CSS সহ: রঙিন ব্যাকগ্রাউন্ড, সুন্দর ফন্ট, কার্ড-স্টাইল লেআউট, বাটনে হোভার ইফেক্ট — যেকোনো প্রফেশনাল ওয়েবসাইট দেখতে ঠিক এমনই হয়!</li>
        </ul>

        <p><strong>কেন CSS শিখব?</strong></p>
        <ul>
          <li>যেকোনো প্রফেশনাল ওয়েবসাইটের ডিজাইনের ভিত্তি CSS</li>
          <li>একই HTML দিয়ে শুধু CSS বদলে সম্পূর্ণ ভিন্ন ডিজাইন বানানো যায়</li>
          <li>মোবাইল ও ডেস্কটপে ভিন্নভাবে দেখানো (Responsive Design) সম্ভব হয় CSS দিয়েই</li>
        </ul>
      `
    },
    {
      id: "1.2",
      title: "CSS-এর বেসিক সিনট্যাক্স",
      content: `
        <h3>🔹 ১.২ CSS-এর বেসিক সিনট্যাক্স (Syntax)</h3>
        <p>প্রতিটা CSS নিয়মের (rule) তিনটা অংশ থাকে:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">selector</span> {
  <span class="prop">property</span>: <span class="val">value</span>;
}</code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অংশ</th><th>কাজ</th><th>উদাহরণ</th></tr></thead>
            <tbody>
              <tr><td><strong>Selector</strong></td><td>কোন HTML এলিমেন্টে স্টাইল প্রয়োগ হবে তা নির্ধারণ করে</td><td><code>h1</code>, <code>p</code>, <code>.card</code></td></tr>
              <tr><td><strong>Property</strong></td><td>কী স্টাইল করা হবে (রঙ, সাইজ, ইত্যাদি)</td><td><code>color</code>, <code>font-size</code></td></tr>
              <tr><td><strong>Value</strong></td><td>সেই প্রপার্টির মান কী হবে</td><td><code>blue</code>, <code>20px</code></td></tr>
            </tbody>
          </table>
        </div>

        <p>একটা বাস্তব উদাহরণ দেখা যাক — এখানে সব <code>&lt;h1&gt;</code> ট্যাগকে নীল রঙ করা হচ্ছে:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ধরে নাও তোমার index.html ফাইলে এই লাইনটা আছে: */</span>
<span class="cmt">/* &lt;h1&gt;এটা একটা হেডিং&lt;/h1&gt; */</span>

<span class="sel">h1</span> {
  <span class="prop">color</span>: <span class="val">blue</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h1 style="color:blue;font-size:22px;">এটা একটা হেডিং</h1>
          </div>
        </div>

        <p>💡 লক্ষ করো: এই <code>style.css</code> ফাইলে আমরা <code>&lt;h1&gt;</code> ট্যাগের কোনো নতুন টেক্সট লিখছি না — CSS কখনো নতুন কনটেন্ট তৈরি করে না, এটা শুধু HTML ফাইলে <strong>আগে থেকেই থাকা</strong> <code>&lt;h1&gt;এটা একটা হেডিং&lt;/h1&gt;</code> এলিমেন্টটাকে রঙিন করে দিচ্ছে। তাই CSS-এর কোড পড়ার সময় সবসময় মাথায় রাখতে হয় — এই সিলেক্টরটা তোমার HTML ফাইলের কোন এলিমেন্টে প্রয়োগ হচ্ছে।</p>

        <p>💡 লক্ষ করো: <code>property: value;</code> এর শেষে সবসময় একটা সেমিকোলন <code>;</code> বসাতে হয় — এটা বলে দেয় একটা নিয়ম শেষ হয়েছে, পরেরটা শুরু হচ্ছে। একটা সিলেক্টরের ভেতরে একাধিক প্রপার্টি-ভ্যালু জোড়া দেওয়া যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;h1&gt;এটা একটা হেডিং&lt;/h1&gt; */</span>

<span class="sel">h1</span> {
  <span class="prop">color</span>: <span class="val">blue</span>;
  <span class="prop">font-size</span>: <span class="val">28px</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h1 style="color:blue;font-size:22px;text-align:center;">এটা একটা হেডিং</h1>
          </div>
        </div>
      `
    },
    {
      id: "1.3",
      title: "CSS যুক্ত করার ৩ পদ্ধতি",
      content: `
        <h3>🔹 ১.৩ CSS যুক্ত করার ৩টা পদ্ধতি</h3>
        <p>HTML ফাইলের সাথে CSS তিনভাবে যুক্ত করা যায়। প্রতিটার নিজস্ব ব্যবহারক্ষেত্র আছে।</p>

        <h4>১. External CSS — আলাদা .css ফাইল (সবচেয়ে ভালো পদ্ধতি)</h4>
        <p>একটা আলাদা <code>.css</code> ফাইলে সব স্টাইল লিখে, HTML-এর <code>&lt;head&gt;</code> থেকে <code>&lt;link&gt;</code> দিয়ে যুক্ত করা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">&lt;head&gt;</span>
  <span class="sel">&lt;link</span> <span class="prop">rel</span>=<span class="val">"stylesheet"</span> <span class="prop">href</span>=<span class="val">"style.css"</span><span class="sel">&gt;</span>
<span class="sel">&lt;/head&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>কেন এটাই সবচেয়ে ভালো:</strong> একই <code>.css</code> ফাইল একাধিক HTML পেজে ব্যবহার করা যায় (যেমন একটা ওয়েবসাইটের সব পেজে একই ডিজাইন সিস্টেম চালানো হয়), ফলে ডিজাইন বদলাতে চাইলে শুধু একটা ফাইল এডিট করলেই সব পেজে বদলে যায়।</p>

        <h4>২. Internal CSS — একই ফাইলের head-এ &lt;style&gt;</h4>
        <p>যখন শুধু একটা পেজের জন্য আলাদা স্টাইল দরকার, তখন <code>&lt;head&gt;</code> এর ভেতরে সরাসরি <code>&lt;style&gt;</code> ট্যাগে লেখা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">&lt;head&gt;</span>
  <span class="sel">&lt;style&gt;</span>
    <span class="sel">h1</span> {
      <span class="prop">color</span>: <span class="val">green</span>;
    }
  <span class="sel">&lt;/style&gt;</span>
<span class="sel">&lt;/head&gt;</span>
<span class="sel">&lt;body&gt;</span>
  <span class="sel">&lt;h1&gt;</span>এটা একটা হেডিং<span class="sel">&lt;/h1&gt;</span>
<span class="sel">&lt;/body&gt;</span></code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h1 style="color:green;font-size:22px;">এটা একটা হেডিং</h1>
          </div>
        </div>

        <h4>৩. Inline CSS — সরাসরি ট্যাগের ভেতরে</h4>
        <p>একটা নির্দিষ্ট এলিমেন্টে সরাসরি <code>style</code> অ্যাট্রিবিউট দিয়ে স্টাইল দেওয়া যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">&lt;h1</span> <span class="prop">style</span>=<span class="val">"color: red;"</span><span class="sel">&gt;</span>এটা একটা হেডিং<span class="sel">&lt;/h1&gt;</span></code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h1 style="color:red;font-size:22px;">এটা একটা হেডিং</h1>
          </div>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> Inline CSS শুধু এককালীন/জরুরি ছোট পরিবর্তনের জন্য ব্যবহার করা উচিত। বড় প্রজেক্টে সব জায়গায় Inline CSS ব্যবহার করলে কোড অগোছালো হয়ে যায় ও মেইনটেইন করা কঠিন হয়ে পড়ে — তাই প্রফেশনাল কাজে সবসময় <strong>External CSS</strong>-ই প্রাধান্য পায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>পদ্ধতি</th><th>কখন ব্যবহার করবে</th></tr></thead>
            <tbody>
              <tr><td>External</td><td>প্রায় সবসময় — এটাই স্ট্যান্ডার্ড ও প্রফেশনাল পদ্ধতি</td></tr>
              <tr><td>Internal</td><td>শুধু একটা পেজের জন্য বিশেষ স্টাইল দরকার হলে</td></tr>
              <tr><td>Inline</td><td>খুব ছোট, এককালীন override করতে (কম ব্যবহার করাই ভালো)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "1.4",
      title: "কমেন্ট ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ১.৪ CSS-এ কমেন্ট লেখা</h3>
        <p>CSS-এ কমেন্ট লেখা হয় <code>/* ... */</code> দিয়ে — এর ভেতরের লেখা ব্রাউজার স্টাইল হিসেবে প্রয়োগ করে না, শুধু কোড বোঝার জন্য থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* এটা হেডারের স্টাইল */</span>
<span class="sel">header</span> {
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
}

<span class="cmt">/* নিচের নিয়মটা এখনো টেস্ট করা হচ্ছে */</span>
<span class="cmt">/* .card { border: 2px solid red; } */</span></code></pre></div>
        </div>

        <p>💡 HTML-এর কমেন্ট (<code>&lt;!-- ... --&gt;</code>) থেকে CSS-এর কমেন্টের সিনট্যাক্স আলাদা — এটা মনে রাখা জরুরি, কারণ দুটো ভুল জায়গায় ব্যবহার করলে এরর হবে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🎨 CSS দিয়ে HTML এলিমেন্টের রঙ, ফন্ট, স্পেসিং, লেআউট নিয়ন্ত্রণ করা হয় — HTML কাঠামো তৈরি করে, CSS তাকে সুন্দর করে।</div>
          <div class="takeaway-item">📝 প্রতিটা CSS নিয়ম <code>selector { property: value; }</code> ফরম্যাটে লেখা হয়, প্রতিটা ঘোষণা সেমিকোলন দিয়ে শেষ হয়।</div>
          <div class="takeaway-item">🔗 CSS যুক্ত করার ৩ পদ্ধতি: <strong>External</strong> (সবচেয়ে ভালো, <code>&lt;link&gt;</code>), <strong>Internal</strong> (<code>&lt;style&gt;</code>), <strong>Inline</strong> (<code>style</code> অ্যাট্রিবিউট — কম ব্যবহার করো)।</div>
          <div class="takeaway-item">💬 CSS কমেন্ট লেখা হয় <code>/* ... */</code> দিয়ে, HTML-এর <code>&lt;!-- --&gt;</code> থেকে আলাদা।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=2&section=2.0">
          পরের মডিউল: সিলেক্টর (Selectors)
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
        <h2>🎯 মডিউল ২: সিলেক্টর (Selectors)</h2>

        <h3>🔹 ২.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>Universal ও Type সিলেক্টর</li>
          <li>Class সিলেক্টর</li>
          <li>ID সিলেক্টর</li>
          <li>Grouping সিলেক্টর (একসাথে একাধিক এলিমেন্ট)</li>
          <li>Combinator সিলেক্টর — Descendant, Child, Sibling</li>
          <li>Attribute সিলেক্টর</li>
          <li>Pseudo-class সিলেক্টর (:hover, :nth-child ইত্যাদি)</li>
          <li>Pseudo-element সিলেক্টর (::before, ::after ইত্যাদি)</li>
          <li>Specificity — কোন নিয়ম জিতবে তা কীভাবে ঠিক হয়</li>
        </ul>
        <p>সিলেক্টর হলো CSS-এর সবচেয়ে গুরুত্বপূর্ণ অংশ — কারণ এটাই ঠিক করে দেয় তোমার স্টাইল ঠিক কোন এলিমেন্টে প্রয়োগ হবে। এই মডিউলে আমরা প্রতিটা ধরনের সিলেক্টর <strong>বিস্তারিতভাবে</strong> কভার করব, যাতে একটাও বাদ না যায়।</p>
      `
    },
    {
      id: "2.1",
      title: "Universal ও Type সিলেক্টর",
      content: `
        <h3>🔹 ২.১ Universal সিলেক্টর (*)</h3>
        <p><code>*</code> চিহ্ন দিয়ে পেজের <strong>সব</strong> এলিমেন্টকে একসাথে টার্গেট করা যায়। সাধারণত এটা ব্রাউজারের ডিফল্ট মার্জিন/প্যাডিং রিসেট করতে ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* সব এলিমেন্টের ডিফল্ট মার্জিন/প্যাডিং শূন্য করা হচ্ছে */</span>
<span class="sel">*</span> {
  <span class="prop">margin</span>: <span class="val">0</span>;
  <span class="prop">padding</span>: <span class="val">0</span>;
}</code></pre></div>
        </div>

        <p>💡 এটা প্রায় প্রতিটা প্রফেশনাল CSS ফাইলের একদম প্রথমে থাকে (একে বলে "CSS Reset") — কারণ বিভিন্ন ব্রাউজারের নিজস্ব ডিফল্ট স্পেসিং থাকে, যা রিসেট না করলে ডিজাইন ব্রাউজারভেদে ভিন্ন দেখাতে পারে।</p>

        <h3>🔹 Type সিলেক্টর (ট্যাগ নাম দিয়ে)</h3>
        <p>HTML ট্যাগের নাম সরাসরি লিখে সেই ধরনের <strong>সব</strong> এলিমেন্টকে টার্গেট করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;p&gt;প্রথম প্যারাগ্রাফ&lt;/p&gt; &lt;p&gt;দ্বিতীয় প্যারাগ্রাফ&lt;/p&gt; */</span>

<span class="sel">p</span> {
  <span class="prop">color</span>: <span class="val">#374151</span>;
  <span class="prop">line-height</span>: <span class="val">1.6</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="color:#374151;line-height:1.6;margin-bottom:6px;">প্রথম প্যারাগ্রাফ</p>
            <p style="color:#374151;line-height:1.6;">দ্বিতীয় প্যারাগ্রাফ</p>
          </div>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> Type সিলেক্টর পেজের <strong>সব</strong> <code>&lt;p&gt;</code> ট্যাগে প্রভাব ফেলে — যদি শুধু নির্দিষ্ট কিছু প্যারাগ্রাফে স্টাইল দিতে চাও, তাহলে Class সিলেক্টর ব্যবহার করা উচিত (পরের সেকশনে শিখছি)।</p>
      `
    },
    {
      id: "2.2",
      title: "Class সিলেক্টর",
      content: `
        <h3>🔹 ২.২ Class সিলেক্টর (.classname)</h3>
        <p>নির্দিষ্ট কিছু এলিমেন্টকে (যাদের একই <code>class</code> অ্যাট্রিবিউট আছে) টার্গেট করতে সবচেয়ে বেশি ব্যবহৃত সিলেক্টর এটা। CSS-এ class নামের আগে একটা ডট (<code>.</code>) বসাতে হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;p class="highlight"&gt;গুরুত্বপূর্ণ লেখা&lt;/p&gt; */</span>
<span class="cmt">/*       &lt;p&gt;সাধারণ লেখা&lt;/p&gt; */</span>

<span class="sel">.highlight</span> {
  <span class="prop">background-color</span>: <span class="val">#FEF3C7</span>;
  <span class="prop">font-weight</span>: <span class="val">600</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="background-color:#FEF3C7;font-weight:600;padding:6px 10px;display:inline-block;margin-bottom:6px;">গুরুত্বপূর্ণ লেখা</p><br>
            <p>সাধারণ লেখা</p>
          </div>
        </div>

        <p>💡 লক্ষ করো: শুধু <code>class="highlight"</code> আছে এমন প্যারাগ্রাফটাই হাইলাইট হয়েছে, অন্যটা হয়নি — এটাই Type সিলেক্টরের চেয়ে Class সিলেক্টরের সুবিধা: <strong>নির্দিষ্ট</strong> এলিমেন্ট বেছে নেওয়া যায়।</p>

        <p>একই <code>class</code> একাধিক এলিমেন্টে ব্যবহার করা যায়, আবার একটা এলিমেন্টে একাধিক class-ও দেওয়া যায় (স্পেস দিয়ে আলাদা করে):</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;button class="btn btn-primary"&gt;সাবমিট&lt;/button&gt; */</span>

<span class="sel">.btn</span> {
  <span class="prop">padding</span>: <span class="val">10px 24px</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
  <span class="prop">border</span>: <span class="val">none</span>;
}

<span class="sel">.btn-primary</span> {
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <button style="padding:10px 24px;border-radius:8px;border:none;background-color:#0066CC;color:white;">সাবমিট</button>
          </div>
        </div>

        <p>💡 এখানে <code>.btn</code> সাধারণ বাটন-শেপ দিচ্ছে (প্যাডিং, রাউন্ড কোণা), আর <code>.btn-primary</code> রঙ দিচ্ছে — দুটো class একসাথে ব্যবহার করে একটা বাটনকে একাধিক দিক থেকে সাজানো যায়। এই প্যাটার্নটা মডিউল ৮-এ HTML কোর্সে শেখা <code>class="card featured"</code> এর মতোই।</p>
      `
    },
    {
      id: "2.3",
      title: "ID সিলেক্টর",
      content: `
        <h3>🔹 ২.৩ ID সিলেক্টর (#idname)</h3>
        <p>একটা নির্দিষ্ট, ইউনিক এলিমেন্টকে টার্গেট করতে <code>id</code> অ্যাট্রিবিউট ব্যবহার হয়। CSS-এ id নামের আগে একটা হ্যাশ (<code>#</code>) বসাতে হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;h1 id="main-title"&gt;মেঘনা টেকনোলজিস&lt;/h1&gt; */</span>

<span class="sel">#main-title</span> {
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h1 style="color:#0066CC;text-align:center;font-size:22px;">মেঘনা টেকনোলজিস</h1>
          </div>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> HTML কোর্সের মডিউল ৮-এ শিখেছিলে <code>id</code> একটা পেজে <strong>একবারই</strong> ব্যবহার করা উচিত। যেহেতু class পুনঃব্যবহারযোগ্য (reusable) এবং একই কাজ করতে পারে, তাই প্রফেশনাল CSS-এ <strong>স্টাইলিংয়ের জন্য সাধারণত class-ই বেশি ব্যবহার হয়</strong>; id মূলত JavaScript দিয়ে একটা নির্দিষ্ট এলিমেন্ট খুঁজে বের করতে বা পেজের ভেতরে জাম্প-লিংকের (<code>href="#id"</code>) জন্য বেশি ব্যবহার হয়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>সিলেক্টর</th><th>সিনট্যাক্স</th><th>ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td>Type</td><td><code>h1</code></td><td>সব একই ট্যাগ</td></tr>
              <tr><td>Class</td><td><code>.card</code></td><td>একাধিক এলিমেন্ট, পুনঃব্যবহারযোগ্য</td></tr>
              <tr><td>ID</td><td><code>#header</code></td><td>একটা নির্দিষ্ট, ইউনিক এলিমেন্ট</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "2.4",
      title: "Grouping সিলেক্টর",
      content: `
        <h3>🔹 ২.৪ Grouping সিলেক্টর (কমা দিয়ে একাধিক)</h3>
        <p>একাধিক আলাদা সিলেক্টরে <strong>একই স্টাইল</strong> দিতে চাইলে, প্রতিটা আলাদা করে না লিখে কমা (<code>,</code>) দিয়ে একসাথে গ্রুপ করে লেখা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ❌ পুনরাবৃত্তি — অপ্রয়োজনীয়ভাবে লম্বা */</span>
<span class="sel">h1</span> { <span class="prop">font-family</span>: <span class="val">'Inter', sans-serif</span>; }
<span class="sel">h2</span> { <span class="prop">font-family</span>: <span class="val">'Inter', sans-serif</span>; }
<span class="sel">h3</span> { <span class="prop">font-family</span>: <span class="val">'Inter', sans-serif</span>; }

<span class="cmt">/* ✅ Grouping — সংক্ষিপ্ত ও পরিষ্কার */</span>
<span class="sel">h1, h2, h3</span> {
  <span class="prop">font-family</span>: <span class="val">'Inter', sans-serif</span>;
}</code></pre></div>
        </div>

        <p>💡 Grouping সিলেক্টরে সব ধরনের সিলেক্টর (type, class, id) মিশিয়েও ব্যবহার করা যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">h2, .subtitle, #main-title</span> {
  <span class="prop">font-weight</span>: <span class="val">700</span>;
}</code></pre></div>
        </div>
      `
    },
    {
      id: "2.5",
      title: "Combinator সিলেক্টর",
      content: `
        <h3>🔹 ২.৫ Combinator সিলেক্টর — এলিমেন্টের সম্পর্ক ধরে টার্গেট করা</h3>
        <p>Combinator দিয়ে দুটো সিলেক্টরের মধ্যেকার <strong>সম্পর্ক</strong> (parent-child, sibling ইত্যাদি) বুঝিয়ে নির্দিষ্ট এলিমেন্ট টার্গেট করা যায়।</p>

        <h4>১. Descendant Combinator (স্পেস) — ভেতরের যেকোনো গভীরতার এলিমেন্ট</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="card"&gt;&lt;p&gt;কার্ডের ভেতরের টেক্সট&lt;/p&gt;&lt;/div&gt; */</span>
<span class="cmt">/*       &lt;p&gt;কার্ডের বাইরের টেক্সট&lt;/p&gt; */</span>

<span class="sel">.card p</span> {
  <span class="prop">color</span>: <span class="val">#DC2626</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="border:1px solid #E5E7EB;padding:8px;border-radius:6px;margin-bottom:6px;"><p style="color:#DC2626;margin:0;">কার্ডের ভেতরের টেক্সট</p></div>
            <p>কার্ডের বাইরের টেক্সট</p>
          </div>
        </div>
        <p>💡 <code>.card p</code> (স্পেস দিয়ে) মানে — <code>.card</code> এর <strong>ভেতরে যেকোনো গভীরতায়</strong> থাকা সব <code>&lt;p&gt;</code>। এখানে কার্ডের বাইরের প্যারাগ্রাফটা প্রভাবিত হয়নি।</p>

        <h4>২. Child Combinator (>) — শুধু সরাসরি সন্তান</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* .card > p মানে শুধু .card এর সরাসরি সন্তান p, নাতি-নাতনি না */</span>
<span class="sel">.card &gt; p</span> {
  <span class="prop">font-weight</span>: <span class="val">bold</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>.card p</code> ও <code>.card > p</code> এর পার্থক্য: প্রথমটা ভেতরের <strong>যেকোনো গভীরতার</strong> <code>&lt;p&gt;</code> ধরে, দ্বিতীয়টা শুধু <strong>সরাসরি ভেতরের</strong> <code>&lt;p&gt;</code> ধরে — যদি একটা <code>&lt;div&gt;</code> এর ভেতরে আরেকটা <code>&lt;div&gt;</code> এ <code>&lt;p&gt;</code> থাকে, সেটা <code>></code> দিয়ে ধরা পড়বে না।</p>

        <h4>৩. Adjacent Sibling (+) — ঠিক পরের ভাইবোন এলিমেন্ট</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;h2&gt;শিরোনাম&lt;/h2&gt; &lt;p&gt;প্রথম প্যারা&lt;/p&gt; &lt;p&gt;দ্বিতীয় প্যারা&lt;/p&gt; */</span>

<span class="sel">h2 + p</span> {
  <span class="prop">font-size</span>: <span class="val">18px</span>;
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h2 style="font-size:16px;margin-bottom:4px;">শিরোনাম</h2>
            <p style="font-size:18px;color:#0066CC;margin-bottom:4px;">প্রথম প্যারা</p>
            <p style="font-size:14px;color:#374151;">দ্বিতীয় প্যারা</p>
          </div>
        </div>
        <p>💡 <code>h2 + p</code> মানে — <code>&lt;h2&gt;</code> এর <strong>ঠিক পরেই</strong> থাকা প্রথম <code>&lt;p&gt;</code>। এখানে দেখো শুধু প্রথম প্যারাগ্রাফটাই স্টাইল পেয়েছে, দ্বিতীয়টা না — কারণ সেটা h2-এর ঠিক পরে না, প্রথম p-এর পরে।</p>

        <h4>৪. General Sibling (~) — পরের সব ভাইবোন এলিমেন্ট</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* h2 এর পরের সব p (শুধু ঠিক পরেরটা না, পরে যতগুলো আছে সবগুলো) */</span>
<span class="sel">h2 ~ p</span> {
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>+</code> ও <code>~</code> এর পার্থক্য: <code>+</code> শুধু <strong>ঠিক পরেরটা</strong> ধরে, <code>~</code> পরে যতগুলো <code>&lt;p&gt;</code> আছে <strong>সবগুলোই</strong> ধরে (যদি তারা একই প্যারেন্টের ভেতরে থাকে)।</p>
      `
    },
    {
      id: "2.6",
      title: "Attribute সিলেক্টর",
      content: `
        <h3>🔹 ২.৬ Attribute সিলেক্টর ([attribute])</h3>
        <p>কোনো নির্দিষ্ট অ্যাট্রিবিউট আছে (বা নির্দিষ্ট মান আছে) এমন এলিমেন্ট টার্গেট করতে Attribute সিলেক্টর ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;input type="text"&gt; &lt;input type="email"&gt; */</span>

<span class="cmt">/* শুধু type="email" ইনপুটে বর্ডার রঙ পরিবর্তন */</span>
<span class="sel">input[type="email"]</span> {
  <span class="prop">border-color</span>: <span class="val">#0066CC</span>;
}</code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>সিনট্যাক্স</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>[href]</code></td><td><code>href</code> অ্যাট্রিবিউট আছে এমন যেকোনো এলিমেন্ট</td></tr>
              <tr><td><code>[type="text"]</code></td><td>ঠিক এই মান আছে এমন এলিমেন্ট</td></tr>
              <tr><td><code>[href^="https"]</code></td><td>মান এই দিয়ে <strong>শুরু</strong> হয় (^)</td></tr>
              <tr><td><code>[href$=".pdf"]</code></td><td>মান এই দিয়ে <strong>শেষ</strong> হয় ($)</td></tr>
              <tr><td><code>[class*="card"]</code></td><td>মানের মধ্যে এই টেক্সট <strong>কোথাও থাকলেই</strong> (*)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* সব PDF লিংকের পাশে একটা আইকন দেখানো (content ব্যবহার করে) */</span>
<span class="sel">a[href$=".pdf"]</span> {
  <span class="prop">color</span>: <span class="val">#DC2626</span>;
}</code></pre></div>
        </div>
      `
    },
    {
      id: "2.7",
      title: "Pseudo-class সিলেক্টর",
      content: `
        <h3>🔹 ২.৭ Pseudo-class সিলেক্টর (:state)</h3>
        <p>Pseudo-class দিয়ে একটা এলিমেন্টের <strong>বিশেষ অবস্থা</strong> (state) বা <strong>অবস্থান</strong> (position) অনুযায়ী স্টাইল দেওয়া যায় — যেমন মাউস হোভার করলে, বা একটা লিস্টের প্রথম আইটেম হলে।</p>

        <h4>:hover — মাউস হোভার করলে</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;button class="btn"&gt;আমার ওপর মাউস আনো&lt;/button&gt; */</span>

<span class="sel">.btn</span> {
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">padding</span>: <span class="val">10px 20px</span>;
  <span class="prop">border</span>: <span class="val">none</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
}

<span class="sel">.btn:hover</span> {
  <span class="prop">background-color</span>: <span class="val">#004182</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>.demo-btn-27{background-color:#0066CC;color:white;padding:10px 20px;border:none;border-radius:8px;cursor:pointer;}.demo-btn-27:hover{background-color:#004182;}</style>
            <button class="demo-btn-27">আমার ওপর মাউস আনো</button>
          </div>
        </div>
        <p>💡 উপরের বাটনে সত্যিকারের মাউস নিয়ে গেলে রঙ বদলাবে — চেষ্টা করে দেখো!</p>

        <h4>:first-child ও :last-child</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;ul&gt;&lt;li&gt;এক&lt;/li&gt;&lt;li&gt;দুই&lt;/li&gt;&lt;li&gt;তিন&lt;/li&gt;&lt;/ul&gt; */</span>

<span class="sel">li:first-child</span> {
  <span class="prop">font-weight</span>: <span class="val">bold</span>;
}

<span class="sel">li:last-child</span> {
  <span class="prop">color</span>: <span class="val">#DC2626</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <ul style="margin-left:18px;">
              <li style="font-weight:bold;">এক</li>
              <li>দুই</li>
              <li style="color:#DC2626;">তিন</li>
            </ul>
          </div>
        </div>

        <h4>:nth-child(n) — নির্দিষ্ট নম্বরের এলিমেন্ট</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* জোড় সংখ্যার (even) সারিতে হালকা রঙ — টেবিলে খুবই কমন প্যাটার্ন */</span>
<span class="sel">tr:nth-child(even)</span> {
  <span class="prop">background-color</span>: <span class="val">#F3F4F6</span>;
}

<span class="cmt">/* ঠিক ২য় আইটেমকে টার্গেট করা */</span>
<span class="sel">li:nth-child(2)</span> {
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
}</code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>Pseudo-class</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>:hover</code></td><td>মাউস উপরে থাকা অবস্থায়</td></tr>
              <tr><td><code>:focus</code></td><td>ইনপুট ফিল্ড সিলেক্টেড/অ্যাক্টিভ থাকা অবস্থায়</td></tr>
              <tr><td><code>:first-child</code></td><td>প্যারেন্টের প্রথম সন্তান হলে</td></tr>
              <tr><td><code>:last-child</code></td><td>প্যারেন্টের শেষ সন্তান হলে</td></tr>
              <tr><td><code>:nth-child(n)</code></td><td>নির্দিষ্ট নম্বরের সন্তান (even/odd/2n ইত্যাদিও চলে)</td></tr>
              <tr><td><code>:not(selector)</code></td><td>যা এই সিলেক্টরের সাথে মেলে না, তা বাদে বাকি সব</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "2.8",
      title: "Pseudo-element সিলেক্টর",
      content: `
        <h3>🔹 ২.৮ Pseudo-element সিলেক্টর (::part)</h3>
        <p>Pseudo-element দিয়ে একটা এলিমেন্টের <strong>নির্দিষ্ট অংশ</strong> টার্গেট করা যায়, অথবা এমন কিছু যোগ করা যায় যা আসলে HTML-এ নেই — CSS দিয়েই "ভার্চুয়ালি" তৈরি করা হয়। এগুলো দুটো কোলন (<code>::</code>) দিয়ে লেখা হয়।</p>

        <h4>::first-letter ও ::first-line</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* প্যারাগ্রাফের প্রথম অক্ষর বড় করা (ম্যাগাজিন স্টাইল) */</span>
<span class="sel">p::first-letter</span> {
  <span class="prop">font-size</span>: <span class="val">28px</span>;
  <span class="prop">font-weight</span>: <span class="val">bold</span>;
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="font-size:14px;"><span style="font-size:28px;font-weight:bold;color:#0066CC;">এ</span>টা একটা প্যারাগ্রাফ, যার প্রথম অক্ষরটা বড় ও রঙিন করা হয়েছে।</p>
          </div>
        </div>

        <h4>::before ও ::after</h4>
        <p>এই দুটো pseudo-element দিয়ে একটা এলিমেন্টের ঠিক আগে বা পরে নতুন কনটেন্ট "ইনজেক্ট" করা যায় — HTML না বদলেই।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;a class="external" href="..."&gt;গুগল&lt;/a&gt; */</span>

<span class="sel">.external::after</span> {
  <span class="prop">content</span>: <span class="val">" ↗"</span>;
  <span class="prop">color</span>: <span class="val">#6B7280</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <a href="#" style="color:#0066CC;">গুগল<span style="color:#6B7280;"> ↗</span></a>
          </div>
        </div>

        <p>💡 <code>content</code> প্রপার্টি ছাড়া <code>::before</code>/<code>::after</code> কিছুই দেখাবে না — এই দুটো pseudo-element সবসময় <code>content: "...";</code> এর সাথে ব্যবহার করতে হয়, এমনকি খালি রাখতে চাইলেও <code>content: "";</code> লিখতে হয়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>Pseudo-element</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>::first-letter</code></td><td>টেক্সটের প্রথম অক্ষর</td></tr>
              <tr><td><code>::first-line</code></td><td>টেক্সটের প্রথম লাইন</td></tr>
              <tr><td><code>::before</code></td><td>এলিমেন্টের কনটেন্টের ঠিক আগে নতুন কনটেন্ট যোগ</td></tr>
              <tr><td><code>::after</code></td><td>এলিমেন্টের কনটেন্টের ঠিক পরে নতুন কনটেন্ট যোগ</td></tr>
              <tr><td><code>::selection</code></td><td>ইউজার টেক্সট সিলেক্ট (হাইলাইট) করলে তার রঙ</td></tr>
            </tbody>
          </table>
        </div>

        <p>⚠️ <strong>সতর্কতা — কমন ভুল:</strong> Pseudo-class একটা কোলন (<code>:hover</code>), Pseudo-element দুটো কোলন (<code>::before</code>) — এই পার্থক্যটা গুলিয়ে ফেলা খুবই সাধারণ ভুল। আধুনিক ব্রাউজারে একটা কোলন দিয়েও পুরনো pseudo-element (<code>:before</code>) কাজ করে ব্যাকওয়ার্ড-কম্প্যাটিবিলিটির জন্য, কিন্তু নতুন কোড লেখার সময় সবসময় সঠিক নিয়ম (দুটো কোলন) মেনে চলা উচিত।</p>
      `
    },
    {
      id: "2.9",
      title: "Specificity ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ২.৯ Specificity — কোন নিয়ম জিতবে?</h3>
        <p>একই এলিমেন্টে যদি একাধিক CSS নিয়ম সাংঘর্ষিক (conflicting) স্টাইল দেয়, ব্রাউজার তখন <strong>Specificity</strong> (নির্দিষ্টতা) হিসাব করে ঠিক করে কোনটা প্রয়োগ হবে। যে সিলেক্টর যত বেশি "নির্দিষ্ট", সেটা তত বেশি প্রাধান্য পায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>সিলেক্টর ধরন</th><th>শক্তি (কম থেকে বেশি)</th></tr></thead>
            <tbody>
              <tr><td>Type সিলেক্টর (<code>p</code>)</td><td>⭐ সবচেয়ে কম</td></tr>
              <tr><td>Class / Attribute / Pseudo-class (<code>.card</code>, <code>[type]</code>, <code>:hover</code>)</td><td>⭐⭐ মাঝারি</td></tr>
              <tr><td>ID সিলেক্টর (<code>#header</code>)</td><td>⭐⭐⭐ বেশি</td></tr>
              <tr><td>Inline style (<code>style="..."</code>)</td><td>⭐⭐⭐⭐ সবচেয়ে বেশি</td></tr>
              <tr><td><code>!important</code></td><td>⭐⭐⭐⭐⭐ সব ছাড়িয়ে যায় (এড়িয়ে চলাই ভালো)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;p class="text"&gt;কোন রঙ জিতবে?&lt;/p&gt; */</span>

<span class="sel">p</span> {
  <span class="prop">color</span>: <span class="val">green</span>;   <span class="cmt">/* Type — কম শক্তি */</span>
}

<span class="sel">.text</span> {
  <span class="prop">color</span>: <span class="val">blue</span>;    <span class="cmt">/* Class — বেশি শক্তি, তাই এটাই জিতবে */</span>
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="color:blue;">কোন রঙ জিতবে?</p>
          </div>
        </div>

        <p>💡 <strong>মনে রাখার সহজ নিয়ম:</strong> সিলেক্টর যত বেশি নির্দিষ্ট (id > class > type), সেটার Specificity তত বেশি। যদি Specificity সমান হয়, তাহলে যে নিয়মটা <strong>ফাইলে পরে</strong> লেখা আছে সেটাই জিতবে (একে বলে "Cascade" — CSS-এর "C")।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">⭐ <code>*</code> সব এলিমেন্ট, <code>h1</code> টাইপ (সব একই ট্যাগ), <code>.class</code> নির্দিষ্ট গ্রুপ, <code>#id</code> একটা ইউনিক এলিমেন্ট।</div>
          <div class="takeaway-item">🔗 কমা (<code>,</code>) দিয়ে একাধিক সিলেক্টরে একই স্টাইল একসাথে দেওয়া যায় (Grouping)।</div>
          <div class="takeaway-item">🧬 Combinator: স্পেস (ভেতরের যেকোনো গভীরতা), <code>></code> (শুধু সরাসরি সন্তান), <code>+</code> (ঠিক পরের ভাইবোন), <code>~</code> (পরের সব ভাইবোন)।</div>
          <div class="takeaway-item">🏷️ <code>[attribute]</code> দিয়ে নির্দিষ্ট অ্যাট্রিবিউট/মান থাকা এলিমেন্ট টার্গেট করা যায়।</div>
          <div class="takeaway-item">🖱️ Pseudo-class (<code>:hover</code>, <code>:nth-child</code>) এলিমেন্টের অবস্থা/অবস্থান বোঝায়; Pseudo-element (<code>::before</code>, <code>::after</code>) এলিমেন্টের অংশ বা নতুন ভার্চুয়াল কনটেন্ট বোঝায় — একটা কোলন vs দুটো কোলন মনে রেখো।</div>
          <div class="takeaway-item">⚖️ Specificity: Type < Class < ID < Inline < <code>!important</code> — বেশি নির্দিষ্ট সিলেক্টর জেতে।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=3&section=3.0">
          পরের মডিউল: কালার, ব্যাকগ্রাউন্ড ও টেক্সট স্টাইলিং
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
        <h2>🖌️ মডিউল ৩: কালার, ব্যাকগ্রাউন্ড ও টেক্সট স্টাইলিং</h2>

        <h3>🔹 ৩.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>রঙ লেখার সব ফরম্যাট — Named, Hex, RGB, RGBA, HSL</li>
          <li>ব্যাকগ্রাউন্ড প্রপার্টি — color, image, size, position, repeat</li>
          <li>ফন্ট প্রপার্টি — family, size, weight, style, Google Fonts যুক্ত করা</li>
          <li>টেক্সট স্টাইলিং — align, decoration, transform, line-height, letter-spacing</li>
        </ul>
        <p>এই মডিউল শেষ করলে তুমি যেকোনো পেজের রঙ, ব্যাকগ্রাউন্ড ও টেক্সট সম্পূর্ণভাবে নিজের ইচ্ছামতো সাজাতে পারবে — যেকোনো প্রফেশনাল ওয়েবসাইটেই এই একই প্রপার্টিগুলো ব্যবহার হয়।</p>
      `
    },
    {
      id: "3.1",
      title: "কালার ফরম্যাট",
      content: `
        <h3>🔹 ৩.১ রঙ লেখার সব ফরম্যাট</h3>
        <p>CSS-এ রঙ পাঁচ ধরনের ফরম্যাটে লেখা যায়। প্রতিটার নিজস্ব সুবিধা আছে।</p>

        <h4>১. Named Colors — নামে লেখা</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;p&gt;নামে লেখা রঙ&lt;/p&gt; */</span>

<span class="sel">p</span> {
  <span class="prop">color</span>: <span class="val">tomato</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="color:tomato;">নামে লেখা রঙ</p>
          </div>
        </div>
        <p>💡 CSS-এ ১৪০+ নামের রঙ (<code>red</code>, <code>tomato</code>, <code>navy</code>, <code>coral</code> ইত্যাদি) আছে — সহজে মনে রাখা যায়, কিন্তু নির্দিষ্ট শেড (যেমন ব্র্যান্ডের ঠিক নীল রঙ) দরকার হলে যথেষ্ট না।</p>

        <h4>২. Hex Code — # দিয়ে ৬ ডিজিট</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">p</span> {
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="color:#0066CC;">Hex কোডে লেখা রঙ (#0066CC)</p>
          </div>
        </div>
        <p>💡 Hex কোড লাল-সবুজ-নীল (RGB) এর মান দুই-দুইটা হেক্সাডেসিমেল সংখ্যায় লেখে (<code>#RRGGBB</code>) — এটাই সবচেয়ে বেশি ব্যবহৃত ফরম্যাট, কারণ Figma/Photoshop-এর মতো ডিজাইন টুল থেকে সরাসরি Hex কোড কপি করা যায়।</p>

        <h4>৩. RGB ও RGBA — সংখ্যায় লেখা</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">p</span> {
  <span class="prop">color</span>: <span class="val">rgb(0, 102, 204)</span>;
}

<span class="cmt">/* RGBA তে চতুর্থ মান হলো স্বচ্ছতা (0 = সম্পূর্ণ স্বচ্ছ, 1 = সম্পূর্ণ অস্বচ্ছ) */</span>
<span class="sel">.overlay</span> {
  <span class="prop">background-color</span>: <span class="val">rgba(0, 0, 0, 0.5)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="color:rgb(0, 102, 204);margin-bottom:8px;">RGB-তে লেখা রঙ</p>
            <div style="background:#0066CC;padding:16px;border-radius:6px;position:relative;">
              <div style="background:rgba(0,0,0,0.5);color:white;padding:8px;border-radius:4px;font-size:12px;">৫০% স্বচ্ছ কালো ওভারলে</div>
            </div>
          </div>
        </div>
        <p>💡 <strong>RGBA</strong>-ই একমাত্র ফরম্যাট যেখানে <strong>স্বচ্ছতা (transparency)</strong> নিয়ন্ত্রণ করা যায় — মডেল/ওভারলে/হালকা ব্যাকগ্রাউন্ডের জন্য এটা খুবই দরকারি।</p>

        <h4>৪. HSL ও HSLA — Hue, Saturation, Lightness</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">p</span> {
  <span class="prop">color</span>: <span class="val">hsl(210, 100%, 40%)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="color:hsl(210, 100%, 40%);">HSL-এ লেখা রঙ</p>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>HSL অংশ</th><th>মানে</th></tr></thead>
            <tbody>
              <tr><td>Hue</td><td>রঙের ধরন, ০-৩৬০ ডিগ্রি (0=লাল, 120=সবুজ, 240=নীল)</td></tr>
              <tr><td>Saturation</td><td>রঙের তীব্রতা, ০%-১০০% (0%=ধূসর, 100%=পূর্ণ রঙ)</td></tr>
              <tr><td>Lightness</td><td>উজ্জ্বলতা, ০%-১০০% (0%=কালো, 100%=সাদা)</td></tr>
            </tbody>
          </table>
        </div>
        <p>💡 <strong>HSL-এর সুবিধা:</strong> একই <code>Hue</code> রেখে শুধু <code>Lightness</code> বাড়িয়ে-কমিয়ে একই রঙের হালকা/গাঢ় শেড সহজেই বানানো যায় — যা Hex/RGB দিয়ে মাথায় হিসাব করে করা কঠিন।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ফরম্যাট</th><th>উদাহরণ</th><th>কখন ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td>Named</td><td><code>tomato</code></td><td>দ্রুত প্রোটোটাইপ/টেস্টিং</td></tr>
              <tr><td>Hex</td><td><code>#0066CC</code></td><td>সবচেয়ে কমন, ডিজাইন টুল থেকে সরাসরি কপি</td></tr>
              <tr><td>RGB/RGBA</td><td><code>rgba(0,0,0,0.5)</code></td><td>স্বচ্ছতা দরকার হলে</td></tr>
              <tr><td>HSL/HSLA</td><td><code>hsl(210,100%,40%)</code></td><td>একই রঙের শেড তৈরি করতে সুবিধাজনক</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "3.2",
      title: "ব্যাকগ্রাউন্ড প্রপার্টি",
      content: `
        <h3>🔹 ৩.২ ব্যাকগ্রাউন্ড প্রপার্টি</h3>

        <h4>background-color</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="box"&gt;বক্স&lt;/div&gt; */</span>

<span class="sel">.box</span> {
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
  <span class="prop">padding</span>: <span class="val">16px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="background-color:#F0F9FF;padding:16px;border-radius:6px;">বক্স</div>
          </div>
        </div>

        <h4>background-image</h4>
        <p>ব্যাকগ্রাউন্ডে ছবি বসাতে <code>url()</code> এর ভেতরে ফাইলের পাথ দিতে হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.hero</span> {
  <span class="prop">background-image</span>: <span class="val">url("banner.jpg")</span>;
  <span class="prop">background-size</span>: <span class="val">cover</span>;
  <span class="prop">background-position</span>: <span class="val">center</span>;
  <span class="prop">background-repeat</span>: <span class="val">no-repeat</span>;
  <span class="prop">height</span>: <span class="val">200px</span>;
}</code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রপার্টি</th><th>মান</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>background-size</code></td><td><code>cover</code></td><td>পুরো বক্স ঢেকে ফেলে, প্রয়োজনে ছবি ক্রপ হয়</td></tr>
              <tr><td></td><td><code>contain</code></td><td>পুরো ছবি দেখা যায়, খালি জায়গা থাকতে পারে</td></tr>
              <tr><td><code>background-position</code></td><td><code>center</code>, <code>top</code>, <code>left</code></td><td>ছবিটা বক্সের কোন দিকে বসবে</td></tr>
              <tr><td><code>background-repeat</code></td><td><code>no-repeat</code></td><td>ছবি ছোট হলেও বারবার রিপিট না করে একবারই দেখায়</td></tr>
              <tr><td></td><td><code>repeat</code></td><td>ছবি ছোট হলে টাইলের মতো বারবার রিপিট হয় (ডিফল্ট আচরণ)</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>Shorthand — সব একসাথে এক লাইনে:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.hero</span> {
  <span class="prop">background</span>: <span class="val">url("banner.jpg") no-repeat center / cover</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>background</code> শর্টহ্যান্ড প্রপার্টি দিয়ে image, repeat, position, size — সবকিছু এক লাইনে লেখা যায় (স্ল্যাশ <code>/</code> এর পরে size লেখা হয়)। বড় প্রজেক্টে কোড ছোট রাখতে এই শর্টহ্যান্ড খুবই দরকারি।</p>

        <h4>Linear Gradient — রঙের গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.banner</span> {
  <span class="prop">background</span>: <span class="val">linear-gradient(135deg, #0066CC, #00C6FF)</span>;
  <span class="prop">height</span>: <span class="val">80px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="background:linear-gradient(135deg, #0066CC, #00C6FF);height:70px;border-radius:6px;"></div>
          </div>
        </div>
      `
    },
    {
      id: "3.3",
      title: "ফন্ট প্রপার্টি",
      content: `
        <h3>🔹 ৩.৩ ফন্ট প্রপার্টি</h3>

        <h4>font-family</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">body</span> {
  <span class="prop">font-family</span>: <span class="val">'Inter', Arial, sans-serif</span>;
}</code></pre></div>
        </div>
        <p>💡 কমা দিয়ে একাধিক ফন্ট লেখা হয় — যাকে বলে <strong>Font Stack</strong>। ব্রাউজার প্রথম ফন্টটা (<code>Inter</code>) খোঁজে; যদি ইউজারের ডিভাইসে সেটা না থাকে বা লোড না হয়, তাহলে পরেরটা (<code>Arial</code>) ব্যবহার করে; একদম শেষে থাকা <code>sans-serif</code> একটা জেনেরিক ক্যাটাগরি — সব ব্রাউজারে এর কোনো না কোনো ফন্ট থাকবেই, তাই এটা ফলব্যাক হিসেবে সবসময় শেষে রাখা উচিত।</p>

        <h4>Google Fonts যুক্ত করা</h4>
        <p><code>Inter</code>-এর মতো কাস্টম ফন্ট ব্যবহার করতে হলে সেটা প্রথমে পেজে যুক্ত করে নিতে হয় — অনেক প্রফেশনাল ওয়েবসাইটেই এই একই পদ্ধতিতে কাস্টম ফন্ট আনা হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">&lt;head&gt;</span>
  <span class="sel">&lt;link</span> <span class="prop">href</span>=<span class="val">"https://fonts.googleapis.com/css2?family=Inter&amp;display=swap"</span> <span class="prop">rel</span>=<span class="val">"stylesheet"</span><span class="sel">&gt;</span>
<span class="sel">&lt;/head&gt;</span></code></pre></div>
        </div>
        <p>💡 Google Fonts-এর ওয়েবসাইট থেকে ফন্ট বেছে নিলে এই <code>&lt;link&gt;</code> ট্যাগটা নিজে থেকেই দিয়ে দেয় — এটা <code>&lt;head&gt;</code> এ বসিয়ে তারপর CSS-এ <code>font-family: 'Inter', sans-serif;</code> লিখলেই কাজ করবে।</p>

        <h4>font-size, font-weight, font-style</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;p class="note"&gt;বিশেষ নোট&lt;/p&gt; */</span>

<span class="sel">.note</span> {
  <span class="prop">font-size</span>: <span class="val">18px</span>;
  <span class="prop">font-weight</span>: <span class="val">700</span>;
  <span class="prop">font-style</span>: <span class="val">italic</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="font-size:18px;font-weight:700;font-style:italic;">বিশেষ নোট</p>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রপার্টি</th><th>সাধারণ মান</th></tr></thead>
            <tbody>
              <tr><td><code>font-size</code></td><td><code>px</code> (নির্দিষ্ট আকার), <code>em</code>/<code>rem</code> (আপেক্ষিক আকার), <code>%</code></td></tr>
              <tr><td><code>font-weight</code></td><td><code>normal</code> (400), <code>bold</code> (700), অথবা সরাসরি <code>100</code>-<code>900</code> সংখ্যা</td></tr>
              <tr><td><code>font-style</code></td><td><code>normal</code>, <code>italic</code></td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>px vs rem:</strong> <code>px</code> সবসময় একই নির্দিষ্ট আকার থাকে। <code>rem</code> ব্রাউজারের ডিফল্ট ফন্ট সাইজের (সাধারণত 16px) সাপেক্ষে হিসাব হয় — <code>1rem = 16px</code>, <code>1.5rem = 24px</code>। প্রফেশনাল CSS-এ প্রায়ই <code>rem</code> ব্যবহার করা হয়, কারণ ইউজার ব্রাউজারে ফন্ট সাইজ বড় করলে পুরো সাইটই সেই অনুযায়ী স্কেল হয় — এটা Accessibility-র জন্য ভালো।</p>
      `
    },
    {
      id: "3.4",
      title: "টেক্সট স্টাইলিং",
      content: `
        <h3>🔹 ৩.৪ টেক্সট স্টাইলিং প্রপার্টি</h3>

        <h4>text-align</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">h1</span> {
  <span class="prop">text-align</span>: <span class="val">center</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <h1 style="text-align:center;font-size:18px;">মাঝ বরাবর শিরোনাম</h1>
          </div>
        </div>
        <p>মান হতে পারে: <code>left</code> (ডিফল্ট), <code>center</code>, <code>right</code>, <code>justify</code> (দুই পাশে সমান করে)।</p>

        <h4>text-decoration</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* লিংকের ডিফল্ট আন্ডারলাইন সরানো — খুবই কমন প্যাটার্ন */</span>
<span class="sel">a</span> {
  <span class="prop">text-decoration</span>: <span class="val">none</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <a href="#" style="text-decoration:none;color:#0066CC;">আন্ডারলাইন ছাড়া লিংক</a>
          </div>
        </div>
        <p>মান হতে পারে: <code>none</code>, <code>underline</code>, <code>line-through</code>, <code>overline</code>।</p>

        <h4>text-transform</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;button&gt;সাবমিট করো&lt;/button&gt; */</span>

<span class="sel">button</span> {
  <span class="prop">text-transform</span>: <span class="val">uppercase</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <button style="text-transform:uppercase;padding:8px 16px;border:1px solid #D1D5DB;border-radius:6px;">submit button</button>
          </div>
        </div>
        <p>মান হতে পারে: <code>uppercase</code> (সব বড় হাতের), <code>lowercase</code> (সব ছোট হাতের), <code>capitalize</code> (প্রতিটা শব্দের প্রথম অক্ষর বড়)। 💡 বাংলায় বড়/ছোট হাতের অক্ষরের ধারণা নেই, তাই এই প্রপার্টি মূলত ইংরেজি টেক্সটের জন্য কাজে লাগে।</p>

        <h4>line-height ও letter-spacing</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">p</span> {
  <span class="prop">line-height</span>: <span class="val">1.8</span>;
  <span class="prop">letter-spacing</span>: <span class="val">0.5px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="line-height:1.8;letter-spacing:0.5px;font-size:14px;">এই প্যারাগ্রাফে লাইনের মধ্যে বাড়তি ফাঁকা জায়গা (line-height) ও অক্ষরের মধ্যে সামান্য দূরত্ব (letter-spacing) দেওয়া হয়েছে, যা পড়তে আরও আরামদায়ক করে তোলে।</p>
          </div>
        </div>
        <p>💡 <code>line-height</code> সাধারণত একটা <strong>ইউনিটবিহীন সংখ্যা</strong> (যেমন <code>1.6</code>) দিয়ে লেখা হয় — এটা ফন্ট সাইজের গুণিতক হিসেবে কাজ করে, তাই ফন্ট সাইজ বদলালেও অনুপাত ঠিক থাকে। প্যারাগ্রাফ-টেক্সটের জন্য <code>1.5</code>-<code>1.8</code> এর মধ্যে একটা মান সাধারণত সবচেয়ে পড়ার-উপযোগী হয়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🎨 রঙ লেখার ৪ ফরম্যাট: Named, Hex (<code>#0066CC</code>), RGB/RGBA (স্বচ্ছতার জন্য), HSL (শেড তৈরির জন্য সুবিধাজনক)।</div>
          <div class="takeaway-item">🖼️ <code>background-image</code> + <code>background-size: cover</code> + <code>no-repeat</code> — এই তিনটা একসাথে সবচেয়ে কমন ব্যাকগ্রাউন্ড-ইমেজ প্যাটার্ন।</div>
          <div class="takeaway-item">🔤 <code>font-family</code>-এ কমা দিয়ে একাধিক ফন্ট (Font Stack) লেখা হয়, শেষে জেনেরিক ফলব্যাক (<code>sans-serif</code>) রাখা উচিত। Google Fonts <code>&lt;link&gt;</code> দিয়ে যুক্ত হয়।</div>
          <div class="takeaway-item">📏 <code>rem</code> ইউনিট Accessibility-র জন্য <code>px</code> এর চেয়ে ভালো, কারণ এটা ইউজারের ব্রাউজার সেটিংসের সাথে স্কেল হয়।</div>
          <div class="takeaway-item">📝 <code>text-align</code>, <code>text-decoration</code>, <code>text-transform</code>, <code>line-height</code>, <code>letter-spacing</code> — এই পাঁচটা প্রপার্টি দিয়েই টেক্সটের প্রায় সব ভিজ্যুয়াল দিক নিয়ন্ত্রণ করা যায়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=4&section=4.0">
          পরের মডিউল: বক্স মডেল (Box Model)
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
        <h2>📦 মডিউল ৪: বক্স মডেল (Box Model)</h2>

        <h3>🔹 ৪.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>বক্স মডেলের ধারণা — content, padding, border, margin</li>
          <li>width, height ও padding</li>
          <li>border ও border-radius</li>
          <li>margin ও Margin Collapsing</li>
          <li>box-sizing — content-box vs border-box</li>
          <li>box-shadow</li>
        </ul>
        <p><strong>বক্স মডেল</strong> হলো CSS-এর সবচেয়ে মৌলিক ধারণাগুলোর একটা — HTML-এর <strong>প্রতিটা এলিমেন্টই</strong> আসলে একটা আয়তাকার বক্স, আর এই বক্সের সাইজ ও স্পেসিং বোঝাই লেআউট ডিজাইনের ভিত্তি। এই মডিউল ভালোভাবে বুঝলে পরের মডিউল (Flexbox, Grid) অনেক সহজ লাগবে।</p>
      `
    },
    {
      id: "4.1",
      title: "বক্স মডেলের ধারণা",
      content: `
        <h3>🔹 ৪.১ বক্স মডেলের ধারণা</h3>
        <p>প্রতিটা HTML এলিমেন্ট চারটা স্তরে তৈরি একটা বক্স — বাইরে থেকে ভেতরে সাজালে এভাবে দেখা যায়:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>স্তর (বাইরে থেকে ভেতরে)</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><strong>Margin</strong></td><td>বক্সের বাইরের ফাঁকা জায়গা — অন্য এলিমেন্ট থেকে কতটা দূরে থাকবে</td></tr>
              <tr><td><strong>Border</strong></td><td>বক্সের চারপাশের সীমারেখা</td></tr>
              <tr><td><strong>Padding</strong></td><td>বক্সের ভেতরের ফাঁকা জায়গা — কনটেন্ট থেকে বর্ডার কতটা দূরে থাকবে</td></tr>
              <tr><td><strong>Content</strong></td><td>আসল কনটেন্ট (টেক্সট, ছবি ইত্যাদি)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="box"&gt;আমার কনটেন্ট&lt;/div&gt; */</span>

<span class="sel">.box</span> {
  <span class="prop">margin</span>: <span class="val">20px</span>;
  <span class="prop">border</span>: <span class="val">4px solid #0066CC</span>;
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="background:#FEE2E2;padding:20px;">
              <div style="border:4px solid #0066CC;background:#F0F9FF;padding:20px;text-align:center;">আমার কনটেন্ট</div>
            </div>
          </div>
        </div>

        <p>💡 উপরের প্রিভিউতে বাইরের হালকা লাল অংশটা <code>margin</code> বোঝাতে যোগ করা হয়েছে (আসল পেজে এটা দেখা যায় না, শুধু ফাঁকা জায়গা থাকে) — নীল বর্ডার হলো <code>border</code>, বর্ডার আর টেক্সটের মাঝের জায়গাটা <code>padding</code>, আর "আমার কনটেন্ট" টেক্সটটাই আসল <code>content</code>।</p>
      `
    },
    {
      id: "4.2",
      title: "width, height ও padding",
      content: `
        <h3>🔹 ৪.২ width, height ও padding</h3>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.card</span> {
  <span class="prop">width</span>: <span class="val">200px</span>;
  <span class="prop">height</span>: <span class="val">100px</span>;
  <span class="prop">padding</span>: <span class="val">16px</span>;
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="width:200px;height:100px;padding:16px;background:#F0F9FF;box-sizing:border-box;">নির্দিষ্ট সাইজের কার্ড</div>
          </div>
        </div>

        <p><strong>Padding চারদিকে ভিন্ন ভিন্ন মান দেওয়া যায়:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ১টা মান — চারদিকেই সমান */</span>
<span class="sel">.a</span> { <span class="prop">padding</span>: <span class="val">20px</span>; }

<span class="cmt">/* ২টা মান — উপর-নিচ, তারপর ডান-বাম */</span>
<span class="sel">.b</span> { <span class="prop">padding</span>: <span class="val">10px 20px</span>; }

<span class="cmt">/* ৪টা মান — উপর, ডান, নিচ, বাম (ঘড়ির কাঁটার দিকে) */</span>
<span class="sel">.c</span> { <span class="prop">padding</span>: <span class="val">10px 15px 20px 5px</span>; }

<span class="cmt">/* শুধু একদিকে */</span>
<span class="sel">.d</span> { <span class="prop">padding-left</span>: <span class="val">30px</span>; }</code></pre></div>
        </div>

        <p>💡 <strong>মনে রাখার সহজ নিয়ম:</strong> চারটা মান দিলে সবসময় উপর থেকে শুরু করে <strong>ঘড়ির কাঁটার দিকে</strong> (top → right → bottom → left) ঘুরে আসে। এই একই নিয়ম <code>margin</code>-এর জন্যও প্রযোজ্য।</p>
      `
    },
    {
      id: "4.3",
      title: "border ও border-radius",
      content: `
        <h3>🔹 ৪.৩ border ও border-radius</h3>
        <p><code>border</code> শর্টহ্যান্ড প্রপার্টিতে তিনটা মান একসাথে দেওয়া হয়: <strong>প্রস্থ</strong>, <strong>স্টাইল</strong>, <strong>রঙ</strong>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="box"&gt;বর্ডার সহ বক্স&lt;/div&gt; */</span>

<span class="sel">.box</span> {
  <span class="prop">border</span>: <span class="val">2px solid #0066CC</span>;
  <span class="prop">padding</span>: <span class="val">16px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="border:2px solid #0066CC;padding:16px;">বর্ডার সহ বক্স</div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>border-style মান</th><th>দেখতে</th></tr></thead>
            <tbody>
              <tr><td><code>solid</code></td><td>একটানা সরল লাইন</td></tr>
              <tr><td><code>dashed</code></td><td>ড্যাশ-ড্যাশ লাইন</td></tr>
              <tr><td><code>dotted</code></td><td>বিন্দু বিন্দু লাইন</td></tr>
              <tr><td><code>none</code></td><td>কোনো বর্ডার নেই (ডিফল্ট)</td></tr>
            </tbody>
          </table>
        </div>

        <h4>border-radius — গোল কোণা</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.card</span> {
  <span class="prop">border</span>: <span class="val">1px solid #E5E7EB</span>;
  <span class="prop">border-radius</span>: <span class="val">12px</span>;
  <span class="prop">padding</span>: <span class="val">16px</span>;
}

<span class="cmt">/* সম্পূর্ণ গোল বানাতে (প্রোফাইল ছবির জন্য কমন) */</span>
<span class="sel">.avatar</span> {
  <span class="prop">border-radius</span>: <span class="val">50%</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;gap:16px;align-items:center;">
              <div style="border:1px solid #E5E7EB;border-radius:12px;padding:16px;font-size:12px;">গোল কোণা কার্ড</div>
              <div style="width:60px;height:60px;background:#0066CC;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;">👤</div>
            </div>
          </div>
        </div>
        <p>💡 <code>border-radius: 50%;</code> একটা বর্গাকার (সমান width-height) এলিমেন্টকে সম্পূর্ণ বৃত্তে রূপান্তর করে — প্রোফাইল ছবি বা আইকন বাটন গোল বানাতে এই ট্রিকটা খুবই কমন।</p>
      `
    },
    {
      id: "4.4",
      title: "margin ও Margin Collapsing",
      content: `
        <h3>🔹 ৪.৪ margin ও Margin Collapsing</h3>
        <p><code>margin</code> কাজ করে <code>padding</code>-এর ঠিক উল্টো দিক থেকে — এটা বক্সের <strong>বাইরের</strong> ফাঁকা জায়গা, যা এলিমেন্টগুলোর মধ্যে দূরত্ব তৈরি করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="box"&gt;বক্স ১&lt;/div&gt; &lt;div class="box"&gt;বক্স ২&lt;/div&gt; */</span>

<span class="sel">.box</span> {
  <span class="prop">margin-bottom</span>: <span class="val">20px</span>;
  <span class="prop">padding</span>: <span class="val">12px</span>;
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="padding:12px;background:#F0F9FF;margin-bottom:20px;">বক্স ১</div>
            <div style="padding:12px;background:#F0F9FF;">বক্স ২</div>
          </div>
        </div>

        <p><strong>মাঝখানে বসাতে (Center) margin: auto ব্যবহার:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.centered</span> {
  <span class="prop">width</span>: <span class="val">200px</span>;
  <span class="prop">margin</span>: <span class="val">0 auto</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>margin: 0 auto;</code> একটা ক্লাসিক ট্রিক — উপর-নিচ margin ০, আর ডান-বাম margin <code>auto</code> দিলে ব্রাউজার নিজে থেকে দুই পাশে সমান জায়গা রেখে এলিমেন্টটাকে মাঝখানে বসিয়ে দেয় (এটা কাজ করে শুধু যখন এলিমেন্টের একটা নির্দিষ্ট <code>width</code> থাকে)।</p>

        <h4>⚠️ Margin Collapsing — একটা জরুরি বিহেভিয়ার</h4>
        <p>দুটো ব্লক এলিমেন্ট উপর-নিচে থাকলে, তাদের <strong>উলম্ব (vertical) margin</strong> যোগ হয় না — বরং যেটা বড়, শুধু সেটাই কার্যকর হয়। একে বলে <strong>Margin Collapsing</strong>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;p class="a"&gt;প্রথম প্যারা&lt;/p&gt; &lt;p class="b"&gt;দ্বিতীয় প্যারা&lt;/p&gt; */</span>

<span class="sel">.a</span> { <span class="prop">margin-bottom</span>: <span class="val">30px</span>; }
<span class="sel">.b</span> { <span class="prop">margin-top</span>: <span class="val">20px</span>; }

<span class="cmt">/* দুইয়ের মাঝে গ্যাপ হবে 30px+20px=50px না, বরং যেটা বড় সেটাই — 30px */</span></code></pre></div>
        </div>
        <p>💡 এই আচরণটা অনেক নতুন ডেভেলপারকেই বিভ্রান্ত করে — মনে রেখো, উলম্ব margin-এর ক্ষেত্রে বড়টাই জিতে যায়, দুটো যোগ হয় না। (Flexbox/Grid ব্যবহার করলে এই সমস্যা এড়ানো যায়, যা পরের মডিউলে শিখবে।)</p>
      `
    },
    {
      id: "4.5",
      title: "box-sizing",
      content: `
        <h3>🔹 ৪.৫ box-sizing — content-box vs border-box</h3>
        <p>ডিফল্টভাবে, যখন তুমি <code>width: 200px;</code> দাও, ব্রাউজার সেই ২০০পিক্সেল শুধু <strong>content</strong>-এর জন্য গণনা করে — <code>padding</code> ও <code>border</code> সেই ২০০পিক্সেলের সাথে <strong>যোগ</strong> হয়ে যায়, ফলে বক্সের আসল সাইজ বড় হয়ে যায়। একে বলে <code>content-box</code> (ডিফল্ট মডেল)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ডিফল্ট content-box: আসল সাইজ = 200 + 40(padding) + 4(border) = 244px */</span>
<span class="sel">.box-default</span> {
  <span class="prop">width</span>: <span class="val">200px</span>;
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">border</span>: <span class="val">2px solid #0066CC</span>;
}</code></pre></div>
        </div>

        <p>এটা এড়াতে প্রফেশনাল ডেভেলপাররা প্রায় সবসময় <code>box-sizing: border-box;</code> ব্যবহার করে — এতে <code>padding</code> ও <code>border</code> নির্ধারিত <code>width</code>-এর <strong>ভেতরেই</strong> হিসাব হয়, বাইরে বাড়ে না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* border-box: আসল সাইজ = ঠিক 200px, padding+border এর ভেতরেই থাকে */</span>
<span class="sel">.box-better</span> {
  <span class="prop">box-sizing</span>: <span class="val">border-box</span>;
  <span class="prop">width</span>: <span class="val">200px</span>;
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">border</span>: <span class="val">2px solid #0066CC</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="box-sizing:border-box;width:200px;padding:20px;border:2px solid #0066CC;">ঠিক 200px চওড়া</div>
          </div>
        </div>

        <p><strong>প্রফেশনাল বেস্ট প্র্যাকটিস:</strong> প্রায় প্রতিটা CSS ফাইলের একদম শুরুতে এই নিয়মটা দিয়ে দেওয়া হয়, যাতে পুরো সাইটের সব এলিমেন্ট <code>border-box</code> মডেল মেনে চলে:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">*</span> {
  <span class="prop">box-sizing</span>: <span class="val">border-box</span>;
}</code></pre></div>
        </div>
        <p>💡 মডিউল ২-এ শেখা Universal সিলেক্টর (<code>*</code>) এখানে আবার কাজে লাগছে — এই একটা লাইন প্রায় সব প্রফেশনাল CSS ফাইলে দেখা যায়, কারণ এটা সাইজ নিয়ে হওয়া অনেক বিভ্রান্তিকর সমস্যা এড়িয়ে দেয়।</p>
      `
    },
    {
      id: "4.6",
      title: "box-shadow ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৪.৬ box-shadow — বক্সের ছায়া</h3>
        <p><code>box-shadow</code> দিয়ে একটা এলিমেন্টের চারপাশে ছায়া (shadow) যোগ করা যায়, যা কার্ড বা বাটনকে ভেসে থাকার মতো একটা 3D অনুভূতি দেয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* box-shadow: অনুভূমিক-অফসেট উলম্ব-অফসেট ব্লার-রেডিয়াস রঙ */</span>
<span class="sel">.card</span> {
  <span class="prop">border-radius</span>: <span class="val">12px</span>;
  <span class="prop">padding</span>: <span class="val">16px</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 4px 12px rgba(0, 0, 0, 0.1)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="border-radius:12px;padding:16px;box-shadow:0 4px 12px rgba(0,0,0,0.15);width:180px;">ছায়াসহ কার্ড</div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মানের ক্রম</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td>১ম মান</td><td>অনুভূমিক অফসেট (ডানে + হলে, বামে - হলে)</td></tr>
              <tr><td>২য় মান</td><td>উলম্ব অফসেট (নিচে + হলে, উপরে - হলে)</td></tr>
              <tr><td>৩য় মান</td><td>ব্লার-রেডিয়াস (যত বেশি, তত ঝাপসা/নরম ছায়া)</td></tr>
              <tr><td>৪র্থ মান</td><td>রঙ (সাধারণত <code>rgba()</code> দিয়ে হালকা স্বচ্ছ কালো)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <code>box-shadow</code>-এ রঙ প্রায় সবসময় <code>rgba()</code> দিয়ে লেখা হয় (মডিউল ৩ থেকে মনে আছে?), কারণ স্বচ্ছ ছায়া প্রাকৃতিক দেখায় — সম্পূর্ণ কালো নিরেট ছায়া কৃত্রিম লাগে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📦 বক্স মডেল বাইরে থেকে ভেতরে: <strong>margin</strong> → <strong>border</strong> → <strong>padding</strong> → <strong>content</strong>।</div>
          <div class="takeaway-item">🔢 padding/margin-এ ১, ২ বা ৪টা মান দেওয়া যায়; ৪টা মান হলে ক্রম top → right → bottom → left (ঘড়ির কাঁটার দিকে)।</div>
          <div class="takeaway-item">🔲 <code>border</code> শর্টহ্যান্ড (প্রস্থ, স্টাইল, রঙ); <code>border-radius: 50%</code> দিয়ে সম্পূর্ণ বৃত্ত বানানো যায়।</div>
          <div class="takeaway-item">↔️ <code>margin: 0 auto;</code> দিয়ে নির্দিষ্ট width-এর এলিমেন্ট মাঝখানে বসানো যায়; মনে রেখো উলম্ব margin কোলাপ্স (যোগ না হয়ে বড়টাই থাকে) হতে পারে।</div>
          <div class="takeaway-item">⚙️ <code>box-sizing: border-box;</code> — padding/border কে width-এর ভেতরেই রাখে, প্রায় সব প্রফেশনাল CSS-এ <code>*</code> সিলেক্টরে এটা সেট করা থাকে।</div>
          <div class="takeaway-item">🌑 <code>box-shadow: x y blur color;</code> — কার্ড/বাটনে গভীরতার অনুভূতি দেয়, রঙ সাধারণত <code>rgba()</code> দিয়ে স্বচ্ছ রাখা হয়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=5&section=5.0">
          পরের মডিউল: ডিসপ্লে ও পজিশনিং
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
        <h2>📐 মডিউল ৫: ডিসপ্লে ও পজিশনিং</h2>

        <h3>🔹 ৫.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>display</code> প্রপার্টি — block, inline, inline-block, none</li>
          <li><code>position</code> প্রপার্টি — static, relative, absolute, fixed, sticky</li>
          <li>top/right/bottom/left ও z-index</li>
          <li>overflow প্রপার্টি</li>
          <li>float (পুরনো লেআউট পদ্ধতি — পরিচিতিমূলক)</li>
        </ul>
        <p>HTML কোর্সের মডিউল ৮-এ তুমি Block vs Inline এলিমেন্টের ধারণা শিখেছিলে। এই মডিউলে আমরা দেখব কীভাবে CSS দিয়ে <strong>যেকোনো</strong> এলিমেন্টের display-এর ধরন বদলে ফেলা যায়, এবং কীভাবে একটা এলিমেন্টকে তার স্বাভাবিক জায়গা থেকে সরিয়ে পেজের যেকোনো জায়গায় বসানো যায়।</p>
      `
    },
    {
      id: "5.1",
      title: "display প্রপার্টি",
      content: `
        <h3>🔹 ৫.১ display প্রপার্টি</h3>
        <p>প্রতিটা HTML ট্যাগের একটা ডিফল্ট display থাকে (যেমন <code>&lt;div&gt;</code> ডিফল্টভাবে block, <code>&lt;span&gt;</code> ডিফল্টভাবে inline) — কিন্তু CSS দিয়ে এটা ইচ্ছামতো বদলে ফেলা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;span class="tag"&gt;এক&lt;/span&gt;&lt;span class="tag"&gt;দুই&lt;/span&gt; */</span>

<span class="sel">.tag</span> {
  <span class="prop">display</span>: <span class="val">inline-block</span>;
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
  <span class="prop">padding</span>: <span class="val">8px 14px</span>;
  <span class="prop">margin-right</span>: <span class="val">8px</span>;
  <span class="prop">border-radius</span>: <span class="val">6px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <span style="display:inline-block;background:#F0F9FF;padding:8px 14px;margin-right:8px;border-radius:6px;">এক</span>
            <span style="display:inline-block;background:#F0F9FF;padding:8px 14px;border-radius:6px;">দুই</span>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মান</th><th>নতুন লাইনে যায়?</th><th>width/height কাজ করে?</th><th>উদাহরণ</th></tr></thead>
            <tbody>
              <tr><td><code>block</code></td><td>হ্যাঁ</td><td>হ্যাঁ</td><td>div, p, h1</td></tr>
              <tr><td><code>inline</code></td><td>না</td><td>না (উপেক্ষা করে)</td><td>span, a, strong</td></tr>
              <tr><td><code>inline-block</code></td><td>না</td><td>হ্যাঁ</td><td>উপরের ট্যাগ এলিমেন্ট উদাহরণ</td></tr>
              <tr><td><code>none</code></td><td>—</td><td>এলিমেন্টটাই সম্পূর্ণ অদৃশ্য, জায়গাও নেয় না</td><td>—</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <code>display: inline-block</code> হলো ইনলাইন ও ব্লকের সেরা দুটো দিকের মিশ্রণ — এলিমেন্টগুলো পাশাপাশি বসে (inline-এর মতো), কিন্তু width/height/padding ঠিকভাবে কাজ করে (block-এর মতো)। ট্যাগ, ব্যাজ, বা মেনু আইটেমের জন্য এটা খুবই কমন।</p>

        <p><strong>display: none vs visibility: hidden — একটা গুরুত্বপূর্ণ পার্থক্য:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রপার্টি</th><th>এলিমেন্ট দেখা যায়?</th><th>জায়গা দখল করে থাকে?</th></tr></thead>
            <tbody>
              <tr><td><code>display: none;</code></td><td>না</td><td>না — সম্পূর্ণ সরে যায়, যেন ছিলই না</td></tr>
              <tr><td><code>visibility: hidden;</code></td><td>না</td><td>হ্যাঁ — জায়গা খালি থেকে যায়</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "5.2",
      title: "position: static ও relative",
      content: `
        <h3>🔹 ৫.২ position প্রপার্টি — static ও relative</h3>
        <p><code>position</code> প্রপার্টি ঠিক করে একটা এলিমেন্ট পেজে কীভাবে বসবে — স্বাভাবিক প্রবাহে, নাকি নির্দিষ্ট কোঅর্ডিনেটে সরিয়ে।</p>

        <h4>static — ডিফল্ট আচরণ</h4>
        <p>প্রতিটা এলিমেন্টের ডিফল্ট <code>position</code> হলো <code>static</code> — মানে এলিমেন্টটা HTML-এ যেভাবে লেখা আছে সেভাবেই স্বাভাবিক প্রবাহে বসে। <code>top</code>/<code>left</code> ইত্যাদি দিলেও static এলিমেন্টে কোনো প্রভাব পড়ে না।</p>

        <h4>relative — নিজের জায়গা থেকে সরানো</h4>
        <p><code>position: relative</code> দিলে এলিমেন্টটা তার <strong>নিজের স্বাভাবিক জায়গা থেকে</strong> <code>top</code>/<code>right</code>/<code>bottom</code>/<code>left</code> দিয়ে সরানো যায় — কিন্তু তার আসল জায়গাটা খালি (reserved) থেকে যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="box1"&gt;বক্স ১&lt;/div&gt; &lt;div class="box2"&gt;বক্স ২&lt;/div&gt; */</span>

<span class="sel">.box2</span> {
  <span class="prop">position</span>: <span class="val">relative</span>;
  <span class="prop">top</span>: <span class="val">10px</span>;
  <span class="prop">left</span>: <span class="val">20px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="background:#F0F9FF;padding:8px;margin-bottom:4px;">বক্স ১</div>
            <div style="background:#DBEAFE;padding:8px;position:relative;top:10px;left:20px;">বক্স ২ (সরানো হয়েছে)</div>
          </div>
        </div>
        <p>💡 লক্ষ করো: বক্স ২ সরে গেলেও তার আসল জায়গাটা খালি থেকে গেছে (নিচে বাড়তি ফাঁকা জায়গা)। <code>position: relative</code>-এর আরেকটা খুব গুরুত্বপূর্ণ ব্যবহার আছে — এটা পরের সেকশনে <code>absolute</code> এর সাথে একসাথে বোঝা যাবে।</p>
      `
    },
    {
      id: "5.3",
      title: "position: absolute ও fixed",
      content: `
        <h3>🔹 ৫.৩ position: absolute ও fixed</h3>

        <h4>absolute — সবচেয়ে কাছের positioned প্যারেন্টের সাপেক্ষে</h4>
        <p><code>position: absolute</code> দিলে এলিমেন্টটা স্বাভাবিক প্রবাহ থেকে সম্পূর্ণ সরে যায় (তার জায়গা আর খালি থাকে না) এবং তার সবচেয়ে কাছের এমন প্যারেন্টের সাপেক্ষে বসে, যার <code>position</code> <code>static</code> ছাড়া অন্য কিছু (relative/absolute/fixed) — যদি এমন কোনো প্যারেন্ট না থাকে, তাহলে পুরো পেজের (<code>&lt;html&gt;</code>) সাপেক্ষে বসে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="card"&gt;&lt;span class="badge"&gt;নতুন&lt;/span&gt;কার্ড কনটেন্ট&lt;/div&gt; */</span>

<span class="sel">.card</span> {
  <span class="prop">position</span>: <span class="val">relative</span>;  <span class="cmt">/* এই লাইনটাই badge-কে সঠিক জায়গায় রাখার চাবি */</span>
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">border</span>: <span class="val">1px solid #E5E7EB</span>;
}

<span class="sel">.badge</span> {
  <span class="prop">position</span>: <span class="val">absolute</span>;
  <span class="prop">top</span>: <span class="val">8px</span>;
  <span class="prop">right</span>: <span class="val">8px</span>;
  <span class="prop">background-color</span>: <span class="val">#DC2626</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">padding</span>: <span class="val">4px 10px</span>;
  <span class="prop">border-radius</span>: <span class="val">20px</span>;
  <span class="prop">font-size</span>: <span class="val">11px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="position:relative;padding:20px;border:1px solid #E5E7EB;border-radius:8px;">
              <span style="position:absolute;top:8px;right:8px;background:#DC2626;color:white;padding:4px 10px;border-radius:20px;font-size:11px;">নতুন</span>
              কার্ড কনটেন্ট
            </div>
          </div>
        </div>
        <p>💡 <strong>এটাই relative + absolute-এর সবচেয়ে কমন ব্যবহার:</strong> প্যারেন্টে (<code>.card</code>) <code>position: relative</code> দিলে, তার ভেতরের কোনো এলিমেন্টে (<code>.badge</code>) <code>position: absolute</code> দিলে সেটা প্যারেন্টের কোণায় নিখুঁতভাবে বসে যায় — "নতুন" ব্যাজ, নোটিফিকেশন কাউন্ট, ক্লোজ বাটন ইত্যাদির জন্য এই প্যাটার্ন সবচেয়ে বেশি ব্যবহৃত হয়।</p>

        <h4>fixed — স্ক্রল করলেও একই জায়গায় স্থির</h4>
        <p><code>position: fixed</code> এলিমেন্টকে ব্রাউজার উইন্ডোর সাপেক্ষে স্থির করে দেয় — পেজ যতই স্ক্রল করা হোক, এলিমেন্টটা স্ক্রিনের একই জায়গায় থেকে যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* স্ক্রল করলেও সবসময় নিচে ডানে "উপরে যাও" বাটন দেখা যাবে */</span>
<span class="sel">.back-to-top</span> {
  <span class="prop">position</span>: <span class="val">fixed</span>;
  <span class="prop">bottom</span>: <span class="val">20px</span>;
  <span class="prop">right</span>: <span class="val">20px</span>;
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">padding</span>: <span class="val">12px 16px</span>;
  <span class="prop">border-radius</span>: <span class="val">50%</span>;
}</code></pre></div>
        </div>
        <p>💡 চ্যাট বাটন, "উপরে যাও" বাটন, স্টিকি হেডার (স্ক্রল করলেও উপরে থেকে যায়) — এগুলো সবই <code>position: fixed</code> দিয়ে বানানো হয়।</p>
      `
    },
    {
      id: "5.4",
      title: "position: sticky",
      content: `
        <h3>🔹 ৫.৪ position: sticky</h3>
        <p><code>position: sticky</code> হলো <code>relative</code> ও <code>fixed</code>-এর মিশ্রণ — এলিমেন্টটা স্বাভাবিকভাবে স্ক্রল হতে থাকে, কিন্তু একটা নির্দিষ্ট জায়গায় পৌঁছালে সেখানে "আটকে" যায় ও স্ক্রিনে স্থির থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* পেজের হেডার — স্ক্রল করলে উপরের 0px এ এসে আটকে যাবে */</span>
<span class="sel">header</span> {
  <span class="prop">position</span>: <span class="val">sticky</span>;
  <span class="prop">top</span>: <span class="val">0</span>;
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 2px 8px rgba(0,0,0,0.08)</span>;
}</code></pre></div>
        </div>

        <p>💡 <strong>Sticky কাজ করার শর্ত:</strong> <code>top</code> (বা right/bottom/left) একটা নির্দিষ্ট মান দিতেই হবে (শুধু <code>position: sticky;</code> লিখলে কাজ করবে না), এবং প্যারেন্ট এলিমেন্টের যথেষ্ট উচ্চতা থাকতে হবে যাতে স্ক্রল করার জায়গা থাকে। অনেক ডকুমেন্টেশন বা লেসন-স্টাইল ওয়েবসাইটে সাইডবার ঠিক এই <code>position: sticky; top: 24px;</code> প্যাটার্ন দিয়েই বানানো হয়, যাতে স্ক্রল করলেও সাইডবারের মেনু সবসময় দেখা যায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>position মান</th><th>আচরণ</th></tr></thead>
            <tbody>
              <tr><td><code>static</code></td><td>স্বাভাবিক প্রবাহ (ডিফল্ট)</td></tr>
              <tr><td><code>relative</code></td><td>নিজের জায়গা থেকে সরে, কিন্তু জায়গা খালি থেকে যায়</td></tr>
              <tr><td><code>absolute</code></td><td>নিকটতম positioned প্যারেন্টের সাপেক্ষে, প্রবাহ থেকে সরে যায়</td></tr>
              <tr><td><code>fixed</code></td><td>ব্রাউজার উইন্ডোর সাপেক্ষে সবসময় স্থির</td></tr>
              <tr><td><code>sticky</code></td><td>স্বাভাবিক প্রবাহে থাকে, নির্দিষ্ট জায়গায় পৌঁছালে স্থির হয়ে যায়</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "5.5",
      title: "z-index",
      content: `
        <h3>🔹 ৫.৫ z-index — কোন এলিমেন্ট উপরে থাকবে</h3>
        <p>যখন একাধিক positioned এলিমেন্ট (relative/absolute/fixed/sticky) একে অপরের উপর ওভারল্যাপ করে, তখন <code>z-index</code> ঠিক করে কোনটা <strong>উপরে</strong> এবং কোনটা <strong>নিচে</strong> দেখাবে। যার মান যত বেশি, সেটা তত উপরে থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: দুটো ওভারল্যাপিং বক্স, .box2 কিছুটা .box1-এর উপরে বসানো */</span>

<span class="sel">.box1</span> {
  <span class="prop">position</span>: <span class="val">absolute</span>;
  <span class="prop">z-index</span>: <span class="val">1</span>;
  <span class="prop">background-color</span>: <span class="val">#93C5FD</span>;
}

<span class="sel">.box2</span> {
  <span class="prop">position</span>: <span class="val">absolute</span>;
  <span class="prop">top</span>: <span class="val">20px</span>;
  <span class="prop">left</span>: <span class="val">20px</span>;
  <span class="prop">z-index</span>: <span class="val">2</span>;   <span class="cmt">/* বেশি, তাই .box1-এর উপরে দেখাবে */</span>
  <span class="prop">background-color</span>: <span class="val">#FCA5A5</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="position:relative;height:100px;">
              <div style="position:absolute;top:0;left:0;width:120px;height:80px;background:#93C5FD;z-index:1;border-radius:6px;"></div>
              <div style="position:absolute;top:20px;left:40px;width:120px;height:80px;background:#FCA5A5;z-index:2;border-radius:6px;opacity:0.9;"></div>
            </div>
          </div>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> <code>z-index</code> শুধু তখনই কাজ করে যখন এলিমেন্টের <code>position</code> <code>static</code> ছাড়া অন্য কিছু (relative/absolute/fixed/sticky)। <code>position</code> সেট না করে শুধু <code>z-index</code> দিলে কোনো প্রভাব পড়বে না — এটা একটা খুব কমন ভুল।</p>
      `
    },
    {
      id: "5.6",
      title: "overflow ও float",
      content: `
        <h3>🔹 ৫.৬ overflow প্রপার্টি</h3>
        <p>কনটেন্ট যদি তার প্যারেন্ট বক্সের চেয়ে বড় হয়ে যায়, তখন <code>overflow</code> প্রপার্টি ঠিক করে অতিরিক্ত অংশের কী হবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.box</span> {
  <span class="prop">width</span>: <span class="val">200px</span>;
  <span class="prop">height</span>: <span class="val">60px</span>;
  <span class="prop">overflow</span>: <span class="val">auto</span>;
  <span class="prop">border</span>: <span class="val">1px solid #E5E7EB</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="width:200px;height:60px;overflow:auto;border:1px solid #E5E7EB;padding:8px;font-size:12.5px;">এটা একটা লম্বা টেক্সট যা বক্সের ভেতরে আটবে না, তাই স্ক্রলবার দেখা যাবে যাতে বাকি অংশও পড়া যায়।</div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মান</th><th>আচরণ</th></tr></thead>
            <tbody>
              <tr><td><code>visible</code></td><td>ডিফল্ট — অতিরিক্ত কনটেন্ট বক্সের বাইরেও দেখা যায়</td></tr>
              <tr><td><code>hidden</code></td><td>অতিরিক্ত অংশ কেটে (ক্রপ করে) লুকিয়ে ফেলা হয়</td></tr>
              <tr><td><code>scroll</code></td><td>সবসময় স্ক্রলবার দেখায় (দরকার না হলেও)</td></tr>
              <tr><td><code>auto</code></td><td>দরকার হলেই শুধু স্ক্রলবার দেখায় (সবচেয়ে বেশি ব্যবহৃত)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 float — পুরনো লেআউট পদ্ধতি (পরিচিতিমূলক)</h3>
        <p><code>float</code> একসময় সাইড-বাই-সাইড লেআউট বানানোর প্রধান পদ্ধতি ছিল — এটা একটা এলিমেন্টকে বামে বা ডানে "ভাসিয়ে" দেয়, আর তার পাশের কনটেন্ট সেটাকে জড়িয়ে বসে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">img</span> {
  <span class="prop">float</span>: <span class="val">left</span>;
  <span class="prop">margin-right</span>: <span class="val">12px</span>;
}</code></pre></div>
        </div>

        <p>⚠️ <strong>গুরুত্বপূর্ণ নোট:</strong> আধুনিক CSS-এ পুরো পেজের লেআউট বানাতে <code>float</code> আর ব্যবহার করা হয় না — এর বদলে পরের দুই মডিউলে শেখা <strong>Flexbox</strong> ও <strong>CSS Grid</strong> ব্যবহার করা হয়, যেগুলো অনেক বেশি শক্তিশালী ও সহজ। <code>float</code> সম্পর্কে জানা ভালো (পুরনো কোড পড়ার জন্য), কিন্তু নতুন প্রজেক্টে লেআউটের জন্য এটা ব্যবহার না করাই বেস্ট প্র্যাকটিস।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📦 <code>display</code>: block (নতুন লাইন, সাইজ কাজ করে), inline (একই লাইন, সাইজ কাজ করে না), inline-block (একই লাইন + সাইজ কাজ করে), none (সম্পূর্ণ অদৃশ্য)।</div>
          <div class="takeaway-item">📍 <code>position</code>: static (ডিফল্ট), relative (নিজের জায়গা থেকে সরে, জায়গা খালি থাকে), absolute (প্যারেন্টের সাপেক্ষে, প্রবাহ থেকে বের), fixed (স্ক্রিনের সাপেক্ষে স্থির), sticky (স্ক্রল করে এক জায়গায় আটকে যায়)।</div>
          <div class="takeaway-item">🎯 প্যারেন্টে <code>position: relative</code> + সন্তানে <code>position: absolute</code> — ব্যাজ/আইকন সঠিক কোণায় বসানোর সবচেয়ে কমন প্যাটার্ন।</div>
          <div class="takeaway-item">🔢 <code>z-index</code> শুধু positioned এলিমেন্টেই কাজ করে; বেশি মান মানে বেশি উপরে।</div>
          <div class="takeaway-item">📜 <code>overflow: auto</code> দরকার হলেই স্ক্রলবার দেখায় — কনটেন্ট বক্সের চেয়ে বড় হলে এটা ব্যবহার করো।</div>
          <div class="takeaway-item">🏊 <code>float</code> পুরনো লেআউট পদ্ধতি — নতুন প্রজেক্টে Flexbox/Grid ব্যবহার করাই বেস্ট প্র্যাকটিস।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=6&section=6.0">
          পরের মডিউল: Flexbox
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
        <h2>🧩 মডিউল ৬: Flexbox</h2>

        <h3>🔹 ৬.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>Flexbox আধুনিক CSS লেআউটের অন্যতম গুরুত্বপূর্ণ টুল — এই মডিউলে আমরা প্রতিটা Flexbox প্রপার্টি <strong>বিস্তারিতভাবে, একটাও বাদ না দিয়ে</strong> কভার করব:</p>
        <ul>
          <li><code>display: flex</code> ও <code>flex-direction</code></li>
          <li><code>justify-content</code> — মূল অক্ষ বরাবর সাজানো</li>
          <li><code>align-items</code> — ক্রস অক্ষ বরাবর সাজানো</li>
          <li><code>flex-wrap</code> ও <code>gap</code></li>
          <li><code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> (flex শর্টহ্যান্ড)</li>
          <li><code>align-self</code> ও <code>order</code></li>
          <li>বাস্তব উদাহরণ — Flexbox দিয়ে নেভবার লেআউট বানানো</li>
        </ul>
        <p>মডিউল ৫-এর <code>float</code> নিয়ে মনে আছে? Flexbox হলো তারই আধুনিক ও অনেক বেশি শক্তিশালী বিকল্প — এক লাইনে বা একটা কলামে এলিমেন্ট সাজানোর জন্য এখন এটাই স্ট্যান্ডার্ড পদ্ধতি।</p>
      `
    },
    {
      id: "6.1",
      title: "display: flex ও flex-direction",
      content: `
        <h3>🔹 ৬.১ display: flex — Flexbox চালু করা</h3>
        <p>যেকোনো এলিমেন্টে <code>display: flex;</code> দিলে তার সরাসরি সন্তানরা (children) "flex item" হয়ে যায় এবং ডিফল্টভাবে পাশাপাশি (একই সারিতে) সাজানো শুরু হয় — কোনো <code>float</code> বা <code>inline-block</code> ছাড়াই।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="container"&gt;
     &lt;div class="item"&gt;১&lt;/div&gt;&lt;div class="item"&gt;২&lt;/div&gt;&lt;div class="item"&gt;৩&lt;/div&gt;
   &lt;/div&gt; */</span>

<span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;gap:10px;">
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;">১</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;">২</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;">৩</div>
            </div>
          </div>
        </div>

        <p>💡 <strong>Flexbox-এর দুইটা অক্ষ বুঝে নেওয়া জরুরি:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>অক্ষ</th><th>মানে</th></tr></thead>
            <tbody>
              <tr><td><strong>Main Axis</strong> (মূল অক্ষ)</td><td>যে দিকে ফ্লেক্স আইটেমগুলো সাজানো হয় (ডিফল্টভাবে বাম থেকে ডানে)</td></tr>
              <tr><td><strong>Cross Axis</strong> (ক্রস অক্ষ)</td><td>মূল অক্ষের সাথে লম্বভাবে (ডিফল্টভাবে উপর থেকে নিচে)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 flex-direction — সাজানোর দিক বদলানো</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;flex-direction:column;gap:8px;width:80px;">
              <div style="background:#0066CC;color:white;padding:10px;border-radius:6px;text-align:center;">১</div>
              <div style="background:#0066CC;color:white;padding:10px;border-radius:6px;text-align:center;">২</div>
              <div style="background:#0066CC;color:white;padding:10px;border-radius:6px;text-align:center;">৩</div>
            </div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মান</th><th>মূল অক্ষের দিক</th></tr></thead>
            <tbody>
              <tr><td><code>row</code></td><td>বাম → ডান (ডিফল্ট)</td></tr>
              <tr><td><code>row-reverse</code></td><td>ডান → বাম</td></tr>
              <tr><td><code>column</code></td><td>উপর → নিচ</td></tr>
              <tr><td><code>column-reverse</code></td><td>নিচ → উপর</td></tr>
            </tbody>
          </table>
        </div>
        <p>⚠️ <strong>মনে রাখা জরুরি:</strong> <code>flex-direction</code> বদলালে "মূল অক্ষ" কোনটা সেটাও বদলে যায় — <code>row</code> এ মূল অক্ষ আনুভূমিক, <code>column</code> এ মূল অক্ষ উলম্ব হয়ে যায়। এটা বুঝলে পরের দুই সেকশন (justify-content, align-items) সহজে বোঝা যাবে।</p>
      `
    },
    {
      id: "6.2",
      title: "justify-content",
      content: `
        <h3>🔹 ৬.২ justify-content — মূল অক্ষ বরাবর সাজানো</h3>
        <p><code>justify-content</code> ঠিক করে flex item গুলো <strong>মূল অক্ষ বরাবর</strong> (ডিফল্ট <code>row</code>-এ মানে আনুভূমিকভাবে) কীভাবে সাজানো হবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">justify-content</span>: <span class="val">space-between</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;justify-content:space-between;background:#F3F4F6;padding:10px;border-radius:6px;">
              <div style="background:#0066CC;color:white;padding:10px 16px;border-radius:6px;">১</div>
              <div style="background:#0066CC;color:white;padding:10px 16px;border-radius:6px;">২</div>
              <div style="background:#0066CC;color:white;padding:10px 16px;border-radius:6px;">৩</div>
            </div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মান</th><th>ফলাফল</th></tr></thead>
            <tbody>
              <tr><td><code>flex-start</code></td><td>শুরুর দিকে জড়ো (ডিফল্ট)</td></tr>
              <tr><td><code>flex-end</code></td><td>শেষের দিকে জড়ো</td></tr>
              <tr><td><code>center</code></td><td>মাঝখানে জড়ো</td></tr>
              <tr><td><code>space-between</code></td><td>প্রথমটা একদম শুরুতে, শেষেরটা একদম শেষে, মাঝে সমান ফাঁকা জায়গা</td></tr>
              <tr><td><code>space-around</code></td><td>প্রতিটা আইটেমের চারপাশে সমান জায়গা</td></tr>
              <tr><td><code>space-evenly</code></td><td>সব ফাঁকা জায়গা (আইটেমের মাঝে ও দুই প্রান্তে) পুরোপুরি সমান</td></tr>
            </tbody>
          </table>
        </div>

        <p>নিচে <code>center</code> ও <code>space-around</code>-এর তুলনা দেখো:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.center</span> { <span class="prop">justify-content</span>: <span class="val">center</span>; }
<span class="sel">.around</span>  { <span class="prop">justify-content</span>: <span class="val">space-around</span>; }</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="font-size:11px;color:#6B7280;margin-bottom:4px;">center:</p>
            <div style="display:flex;justify-content:center;gap:8px;background:#F3F4F6;padding:8px;border-radius:6px;margin-bottom:12px;">
              <div style="background:#0066CC;color:white;padding:6px 12px;border-radius:6px;font-size:12px;">১</div>
              <div style="background:#0066CC;color:white;padding:6px 12px;border-radius:6px;font-size:12px;">২</div>
            </div>
            <p style="font-size:11px;color:#6B7280;margin-bottom:4px;">space-around:</p>
            <div style="display:flex;justify-content:space-around;background:#F3F4F6;padding:8px;border-radius:6px;">
              <div style="background:#0066CC;color:white;padding:6px 12px;border-radius:6px;font-size:12px;">১</div>
              <div style="background:#0066CC;color:white;padding:6px 12px;border-radius:6px;font-size:12px;">২</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "6.3",
      title: "align-items",
      content: `
        <h3>🔹 ৬.৩ align-items — ক্রস অক্ষ বরাবর সাজানো</h3>
        <p><code>align-items</code> ঠিক করে flex item গুলো <strong>ক্রস অক্ষ বরাবর</strong> (ডিফল্ট <code>row</code>-এ মানে উলম্বভাবে) কীভাবে সাজানো হবে। এটা <code>justify-content</code>-এর ঠিক লম্ব দিক।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">height</span>: <span class="val">100px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;align-items:center;height:100px;background:#F3F4F6;gap:10px;padding:0 10px;border-radius:6px;">
              <div style="background:#0066CC;color:white;padding:8px;border-radius:6px;">ছোট</div>
              <div style="background:#0066CC;color:white;padding:20px 8px;border-radius:6px;">লম্বা বক্স</div>
              <div style="background:#0066CC;color:white;padding:12px 8px;border-radius:6px;">মাঝারি</div>
            </div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মান</th><th>ফলাফল</th></tr></thead>
            <tbody>
              <tr><td><code>stretch</code></td><td>ক্রস অক্ষ বরাবর পুরো জায়গা ভরে (ডিফল্ট)</td></tr>
              <tr><td><code>flex-start</code></td><td>উপরের দিকে সাজায়</td></tr>
              <tr><td><code>flex-end</code></td><td>নিচের দিকে সাজায়</td></tr>
              <tr><td><code>center</code></td><td>ঠিক মাঝখানে (উলম্বভাবে সেন্টার) — এটাই সবচেয়ে বেশি ব্যবহৃত</td></tr>
            </tbody>
          </table>
        </div>

        <p>🎯 <strong>Flexbox-এর সবচেয়ে বিখ্যাত ট্রিক — সম্পূর্ণ সেন্টারিং:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* যেকোনো এলিমেন্টকে আনুভূমিক ও উলম্ব দুইদিক থেকেই মাঝে আনতে */</span>
<span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">justify-content</span>: <span class="val">center</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">height</span>: <span class="val">150px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;justify-content:center;align-items:center;height:120px;background:#F3F4F6;border-radius:6px;">
              <div style="background:#0066CC;color:white;padding:12px 20px;border-radius:6px;">সম্পূর্ণ মাঝখানে</div>
            </div>
          </div>
        </div>
        <p>💡 বহু বছর ধরে "CSS দিয়ে একটা জিনিস মাঝখানে আনা" ডেভেলপারদের কাছে একটা মজার সমস্যা ছিল — Flexbox আসার পর এই দুই লাইন (<code>justify-content: center; align-items: center;</code>) দিয়েই তা সমাধান হয়ে গেছে।</p>
      `
    },
    {
      id: "6.4",
      title: "flex-wrap ও gap",
      content: `
        <h3>🔹 ৬.৪ flex-wrap — লাইনে না আঁটলে পরের লাইনে যাওয়া</h3>
        <p>ডিফল্টভাবে flex item গুলো <strong>একই লাইনে</strong> থাকার চেষ্টা করে, প্রয়োজনে সংকুচিত হয়ে যায়। <code>flex-wrap: wrap;</code> দিলে জায়গা না হলে আইটেমগুলো পরের লাইনে চলে যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-wrap</span>: <span class="val">wrap</span>;
  <span class="prop">gap</span>: <span class="val">10px</span>;
}

<span class="sel">.card</span> {
  <span class="prop">width</span>: <span class="val">120px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;flex-wrap:wrap;gap:10px;width:280px;">
              <div style="width:120px;background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;">কার্ড ১</div>
              <div style="width:120px;background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;">কার্ড ২</div>
              <div style="width:120px;background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;">কার্ড ৩</div>
            </div>
          </div>
        </div>
        <p>💡 দেখো — কন্টেইনারের প্রস্থে ৩টা কার্ড না আঁটায় ৩য় কার্ডটা নিজে থেকেই পরের লাইনে চলে গেছে। এটা প্রোডাক্ট গ্রিড বা কার্ড লেআউটের জন্য অপরিহার্য।</p>

        <h3>🔹 gap — আইটেমের মধ্যে ফাঁকা জায়গা</h3>
        <p><code>gap</code> প্রপার্টি দিয়ে flex item গুলোর মধ্যে সহজেই সমান ফাঁকা জায়গা দেওয়া যায় — প্রতিটা আইটেমে আলাদা <code>margin</code> দেওয়ার দরকার নেই।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">gap</span>: <span class="val">20px</span>;   <span class="cmt">/* row-gap column-gap ও আলাদা করে লেখা যায় */</span>
}</code></pre></div>
        </div>
        <p>⚠️ <strong>পুরনো পদ্ধতির চেয়ে ভালো:</strong> আগে আইটেমগুলোর মধ্যে ফাঁকা জায়গা রাখতে প্রতিটাতে <code>margin-right</code> দেওয়া হতো, কিন্তু তাতে শেষ আইটেমের পরেও বাড়তি জায়গা থেকে যেত। <code>gap</code> এই সমস্যা সম্পূর্ণ সমাধান করে দেয় — শুধু আইটেমগুলোর <strong>মাঝখানেই</strong> জায়গা তৈরি করে।</p>
      `
    },
    {
      id: "6.5",
      title: "flex-grow, flex-shrink, flex-basis",
      content: `
        <h3>🔹 ৬.৫ flex-grow, flex-shrink, flex-basis</h3>
        <p>এই তিনটা প্রপার্টি নিয়ন্ত্রণ করে একটা flex item কতটুকু জায়গা নেবে — এগুলো item-এর উপর বসে (container-এ না)।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রপার্টি</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>flex-grow</code></td><td>বাড়তি খালি জায়গা থাকলে সেই আইটেম তা কতটা "শুষে নেবে" (0 = বাড়বে না, 1+ = বাড়বে, সংখ্যা যত বেশি তত বেশি ভাগ পাবে)</td></tr>
              <tr><td><code>flex-shrink</code></td><td>জায়গা কম পড়লে আইটেম কতটা সংকুচিত হবে (0 = সংকুচিত হবে না)</td></tr>
              <tr><td><code>flex-basis</code></td><td>বাড়া/কমার আগে আইটেমের শুরুর সাইজ (width-এর মতোই কাজ করে)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="sidebar"&gt;সাইডবার&lt;/div&gt;&lt;div class="content"&gt;মূল কনটেন্ট&lt;/div&gt; */</span>

<span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">gap</span>: <span class="val">12px</span>;
}

<span class="sel">.sidebar</span> {
  <span class="prop">flex</span>: <span class="val">0 0 100px</span>;  <span class="cmt">/* grow shrink basis — স্থির 100px, বাড়বে/কমবে না */</span>
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
}

<span class="sel">.content</span> {
  <span class="prop">flex</span>: <span class="val">1</span>;  <span class="cmt">/* বাকি সব খালি জায়গা এটা নিয়ে নেবে */</span>
  <span class="prop">background-color</span>: <span class="val">#FEF3C7</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;gap:12px;">
              <div style="flex:0 0 100px;background:#F0F9FF;padding:12px;border-radius:6px;text-align:center;">সাইডবার</div>
              <div style="flex:1;background:#FEF3C7;padding:12px;border-radius:6px;">মূল কনটেন্ট (বাকি সব জায়গা নেয়)</div>
            </div>
          </div>
        </div>

        <p>💡 <code>flex: 1;</code> লেখা আসলে <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0;</code>-এর শর্টহ্যান্ড — এটাই সবচেয়ে বেশি ব্যবহৃত প্যাটার্ন, যার মানে "বাকি সব খালি জায়গা এই আইটেম নিয়ে নেবে"। যখন একাধিক এলিমেন্টে <code>flex: 1;</code> দেওয়া হয়, তারা সমান ভাগে জায়গা ভাগ করে নেয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* তিনটা কলাম সমান ভাগে জায়গা ভাগ করবে */</span>
<span class="sel">.col</span> {
  <span class="prop">flex</span>: <span class="val">1</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;gap:10px;">
              <div style="flex:1;background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;">কলাম ১</div>
              <div style="flex:1;background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;">কলাম ২</div>
              <div style="flex:1;background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;">কলাম ৩</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "6.6",
      title: "align-self ও order",
      content: `
        <h3>🔹 ৬.৬ align-self — একটা নির্দিষ্ট আইটেমের জন্য আলাদা নিয়ম</h3>
        <p><code>align-items</code> কন্টেইনারে বসিয়ে সব আইটেমে একসাথে প্রভাব ফেলা হয়, কিন্তু <code>align-self</code> দিয়ে একটা নির্দিষ্ট আইটেমের জন্য আলাদা করে ক্রস-অক্ষ পজিশন ঠিক করা যায় (কন্টেইনারের নিয়ম উপেক্ষা করে)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.container</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">align-items</span>: <span class="val">flex-start</span>;
  <span class="prop">height</span>: <span class="val">100px</span>;
}

<span class="sel">.item-special</span> {
  <span class="prop">align-self</span>: <span class="val">flex-end</span>;  <span class="cmt">/* শুধু এইটাই নিচে থাকবে, বাকিরা উপরে */</span>
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;align-items:flex-start;height:100px;background:#F3F4F6;gap:10px;padding:0 10px;border-radius:6px;">
              <div style="background:#0066CC;color:white;padding:10px;border-radius:6px;">সাধারণ</div>
              <div style="background:#DC2626;color:white;padding:10px;border-radius:6px;align-self:flex-end;">বিশেষ (নিচে)</div>
              <div style="background:#0066CC;color:white;padding:10px;border-radius:6px;">সাধারণ</div>
            </div>
          </div>
        </div>

        <h3>🔹 order — ভিজ্যুয়াল ক্রম বদলানো</h3>
        <p><code>order</code> দিয়ে HTML-এ যে ক্রমে লেখা আছে তা না বদলেই, শুধু <strong>স্ক্রিনে দেখানোর ক্রম</strong> বদলে ফেলা যায়। ডিফল্ট মান সব আইটেমের জন্য <code>0</code> — যার মান যত কম, সেটা তত আগে দেখানো হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML-এ লেখার ক্রম: এক, দুই, তিন — কিন্তু স্ক্রিনে দেখাবে অন্য ক্রমে */</span>

<span class="sel">.first</span>  { <span class="prop">order</span>: <span class="val">3</span>; }  <span class="cmt">/* "এক" সবার শেষে দেখাবে */</span>
<span class="sel">.second</span> { <span class="prop">order</span>: <span class="val">1</span>; }  <span class="cmt">/* "দুই" সবার আগে দেখাবে */</span>
<span class="sel">.third</span>  { <span class="prop">order</span>: <span class="val">2</span>; }</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;gap:10px;">
              <div style="order:3;background:#0066CC;color:white;padding:10px 16px;border-radius:6px;">এক</div>
              <div style="order:1;background:#0066CC;color:white;padding:10px 16px;border-radius:6px;">দুই</div>
              <div style="order:2;background:#0066CC;color:white;padding:10px 16px;border-radius:6px;">তিন</div>
            </div>
          </div>
        </div>
        <p>💡 লক্ষ করো: HTML-এ "এক, দুই, তিন" ক্রমে লেখা থাকলেও প্রিভিউতে দেখাচ্ছে "দুই, তিন, এক" — কারণ <code>order</code> শুধু ভিজ্যুয়াল ক্রম বদলায়, HTML-এর আসল কাঠামো বদলায় না। এটা প্রায়ই মোবাইলে একটা লেআউট আর ডেস্কটপে ভিন্ন ক্রম দেখাতে ব্যবহার হয় (মিডিয়া কোয়েরির সাথে, যা মডিউল ৮-এ শিখবে)।</p>
      `
    },
    {
      id: "6.7",
      title: "বাস্তব উদাহরণ — Flexbox নেভবার",
      content: `
        <h3>🔹 ৬.৭ বাস্তব উদাহরণ — Flexbox দিয়ে নেভবার বানানো</h3>
        <p>এতক্ষণ যা শিখেছ তা একসাথে ব্যবহার করে একটা বাস্তব ওয়েবসাইট নেভবার বানানো যাক — লোগো বামে, মেনু লিংক ডানে, উলম্বভাবে সব মাঝ বরাবর।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;nav class="navbar"&gt;
     &lt;div class="logo"&gt;মেঘনা টেকনোলজিস&lt;/div&gt;
     &lt;ul class="menu"&gt;
       &lt;li&gt;হোম&lt;/li&gt;&lt;li&gt;কোর্স&lt;/li&gt;&lt;li&gt;যোগাযোগ&lt;/li&gt;
     &lt;/ul&gt;
   &lt;/nav&gt; */</span>

<span class="sel">.navbar</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">justify-content</span>: <span class="val">space-between</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">padding</span>: <span class="val">16px 24px</span>;
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 2px 8px rgba(0,0,0,0.08)</span>;
}

<span class="sel">.menu</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">gap</span>: <span class="val">20px</span>;
  <span class="prop">list-style</span>: <span class="val">none</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:white;box-shadow:0 2px 8px rgba(0,0,0,0.1);border-radius:6px;">
              <div style="font-weight:700;color:#0066CC;">মেঘনা টেকনোলজিস</div>
              <div style="display:flex;gap:18px;font-size:13px;color:#374151;">
                <span>হোম</span><span>কোর্স</span><span>যোগাযোগ</span>
              </div>
            </div>
          </div>
        </div>

        <p>💡 <strong>এখানে যা যা ব্যবহার হয়েছে:</strong></p>
        <ul>
          <li><code>.navbar</code>-এ <code>display: flex</code> + <code>justify-content: space-between</code> — লোগো একদম বামে, মেনু একদম ডানে</li>
          <li><code>align-items: center</code> — লোগো ও মেনু লিংক উলম্বভাবে একই লাইনে সমান্তরাল</li>
          <li><code>.menu</code>-এও আবার <code>display: flex</code> + <code>gap</code> — মেনুর লিস্ট আইটেমগুলো পাশাপাশি, নিজস্ব ফাঁকা জায়গাসহ</li>
        </ul>
        <p>এটাই Flexbox-এর আসল শক্তি — একটা <code>container</code> এর ভেতরে আরেকটা <code>flex container</code> নেস্ট করে যেকোনো জটিল লেআউট গড়ে তোলা যায়।</p>
      `
    },
    {
      id: "6.8",
      title: "সারসংক্ষেপ",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🧩 <code>display: flex;</code> কন্টেইনারে দিলে তার সরাসরি সন্তানরা flex item হয়ে যায়; <code>flex-direction</code> (row/column) ঠিক করে মূল অক্ষের দিক।</div>
          <div class="takeaway-item">↔️ <code>justify-content</code> মূল অক্ষ বরাবর সাজায় (flex-start/center/space-between/space-around/space-evenly)।</div>
          <div class="takeaway-item">↕️ <code>align-items</code> ক্রস অক্ষ বরাবর সাজায়; দুটো একসাথে <code>center</code> দিলে যেকোনো এলিমেন্ট নিখুঁতভাবে মাঝখানে বসে যায়।</div>
          <div class="takeaway-item">📦 <code>flex-wrap: wrap;</code> জায়গা না হলে আইটেম পরের লাইনে নেয়; <code>gap</code> দিয়ে সহজে আইটেমের মাঝে ফাঁকা জায়গা দেওয়া যায়।</div>
          <div class="takeaway-item">📏 <code>flex: 1;</code> মানে বাকি সব খালি জায়গা সমান ভাগে নিয়ে নেওয়া (grow/shrink/basis-এর শর্টহ্যান্ড); <code>flex: 0 0 100px;</code> মানে স্থির সাইজ, বাড়বে-কমবে না।</div>
          <div class="takeaway-item">🎯 <code>align-self</code> দিয়ে একটা নির্দিষ্ট আইটেমের জন্য কন্টেইনারের নিয়ম উপেক্ষা করে আলাদা পজিশন দেওয়া যায়; <code>order</code> দিয়ে HTML না বদলেই ভিজ্যুয়াল ক্রম বদলানো যায়।</div>
          <div class="takeaway-item">🧭 বাস্তব লেআউট (নেভবার, কার্ড গ্রিড) সাধারণত নেস্টেড ফ্লেক্স কন্টেইনার দিয়ে বানানো হয় — একটার ভেতরে আরেকটা।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=7&section=7.0">
          পরের মডিউল: CSS Grid
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
        <h2>▦ মডিউল ৭: CSS Grid</h2>

        <h3>🔹 ৭.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা CSS Grid-এর প্রতিটা গুরুত্বপূর্ণ দিক কভার করব:</p>
        <ul>
          <li><code>display: grid</code>, <code>grid-template-columns</code>, <code>grid-template-rows</code></li>
          <li><code>fr</code> ইউনিট ও <code>gap</code></li>
          <li><code>repeat()</code> ফাংশন</li>
          <li><code>grid-column</code> ও <code>grid-row</code> — একাধিক সেল জুড়ে বিস্তার করা</li>
          <li><code>grid-template-areas</code> — নাম দিয়ে লেআউট ডিজাইন</li>
          <li><code>minmax()</code> ও <code>auto-fit</code>/<code>auto-fill</code> — রেসপনসিভ গ্রিড</li>
          <li>আইটেম অ্যালাইনমেন্ট</li>
          <li>Flexbox vs Grid — কখন কোনটা ব্যবহার করবে</li>
        </ul>
        <p>মডিউল ৬-এ Flexbox শিখেছ, যা <strong>এক-মাত্রিক (1D)</strong> লেআউটের জন্য (হয় সারি, নয়তো কলাম)। CSS Grid হলো <strong>দ্বি-মাত্রিক (2D)</strong> লেআউট সিস্টেম — সারি ও কলাম দুটোই একসাথে নিয়ন্ত্রণ করা যায়, যা জটিল পেজ লেআউট বানাতে অসাধারণ শক্তিশালী।</p>
      `
    },
    {
      id: "7.1",
      title: "display: grid বেসিক",
      content: `
        <h3>🔹 ৭.১ display: grid ও গ্রিড ট্র্যাক তৈরি</h3>
        <p><code>display: grid;</code> দিলে এলিমেন্টটা একটা গ্রিড কন্টেইনার হয়ে যায়। এরপর <code>grid-template-columns</code> ও <code>grid-template-rows</code> দিয়ে কয়টা কলাম/সারি হবে ও তাদের সাইজ কত হবে তা ঠিক করা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="grid"&gt;
     &lt;div&gt;১&lt;/div&gt;&lt;div&gt;২&lt;/div&gt;&lt;div&gt;৩&lt;/div&gt;&lt;div&gt;৪&lt;/div&gt;&lt;div&gt;৫&lt;/div&gt;&lt;div&gt;৬&lt;/div&gt;
   &lt;/div&gt; */</span>

<span class="sel">.grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">100px 100px 100px</span>;
  <span class="prop">gap</span>: <span class="val">10px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:100px 100px 100px;gap:10px;">
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">১</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">২</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">৩</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">৪</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">৫</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">৬</div>
            </div>
          </div>
        </div>

        <p>💡 লক্ষ করো: মাত্র ৩টা কলাম-সাইজ (<code>100px 100px 100px</code>) দেওয়ায় ৬টা আইটেম নিজে থেকেই দুই সারিতে সাজিয়ে ফেলেছে — Flexbox-এ এটা করতে <code>flex-wrap</code> লাগত, কিন্তু Grid-এ এটা স্বাভাবিক আচরণ, কারণ Grid শুরু থেকেই সারি-কলাম দুটোই একসাথে ভাবে।</p>
      `
    },
    {
      id: "7.2",
      title: "fr ইউনিট ও gap",
      content: `
        <h3>🔹 ৭.২ fr ইউনিট — ভগ্নাংশ হিসেবে জায়গা ভাগ</h3>
        <p><code>fr</code> (fraction) ইউনিট দিয়ে কলাম/সারির সাইজ পিক্সেলে না দিয়ে <strong>উপলব্ধ জায়গার ভগ্নাংশ</strong> হিসেবে দেওয়া যায় — এটা Grid-এর সবচেয়ে ব্যবহারিক ইউনিট।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* তিনটা কলাম সমান ভাগে (প্রতিটা 1fr) */</span>
<span class="sel">.grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">1fr 1fr 1fr</span>;
  <span class="prop">gap</span>: <span class="val">12px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">১</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">২</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">৩</div>
            </div>
          </div>
        </div>

        <p><strong>fr মিশিয়ে অসম ভাগও করা যায়:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* সাইডবার:কনটেন্ট = 1:3 অনুপাতে ভাগ */</span>
<span class="sel">.layout</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">1fr 3fr</span>;
  <span class="prop">gap</span>: <span class="val">12px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:1fr 3fr;gap:12px;">
              <div style="background:#F0F9FF;padding:16px;border-radius:6px;text-align:center;">সাইডবার (1fr)</div>
              <div style="background:#FEF3C7;padding:16px;border-radius:6px;text-align:center;">মূল কনটেন্ট (3fr)</div>
            </div>
          </div>
        </div>

        <p>💡 <code>gap</code> প্রপার্টি (Flexbox-এর মতোই) সারি ও কলাম দুটোতেই ফাঁকা জায়গা দেয়। আলাদা করে <code>row-gap</code> ও <code>column-gap</code> দিয়েও নিয়ন্ত্রণ করা যায়।</p>
      `
    },
    {
      id: "7.3",
      title: "repeat() ফাংশন",
      content: `
        <h3>🔹 ৭.৩ repeat() — পুনরাবৃত্তি সংক্ষেপে লেখা</h3>
        <p>একই সাইজের অনেকগুলো কলাম/সারি বারবার লেখার বদলে <code>repeat()</code> ফাংশন ব্যবহার করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ❌ পুনরাবৃত্তি — লম্বা */</span>
<span class="sel">.grid-a</span> {
  <span class="prop">grid-template-columns</span>: <span class="val">1fr 1fr 1fr 1fr</span>;
}

<span class="cmt">/* ✅ repeat() দিয়ে সংক্ষিপ্ত — একই ফলাফল */</span>
<span class="sel">.grid-b</span> {
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(4, 1fr)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:8px;">
              <div style="background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;font-size:12px;">১</div>
              <div style="background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;font-size:12px;">২</div>
              <div style="background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;font-size:12px;">৩</div>
              <div style="background:#0066CC;color:white;padding:12px;border-radius:6px;text-align:center;font-size:12px;">৪</div>
            </div>
          </div>
        </div>

        <p>💡 <code>repeat(4, 1fr)</code> মানে "1fr সাইজের কলাম ৪ বার পুনরাবৃত্তি করো" — <code>repeat()</code>-এর ভেতরে যেকোনো প্যাটার্নও দেওয়া যায়, যেমন <code>repeat(2, 100px 1fr)</code> লিখলে ১০০পিক্সেল ও ১fr বিকল্পভাবে ২ বার পুনরাবৃত্তি হবে (মোট ৪টা কলাম)।</p>
      `
    },
    {
      id: "7.4",
      title: "grid-column ও grid-row",
      content: `
        <h3>🔹 ৭.৪ grid-column ও grid-row — সেল জুড়ে বিস্তার করা</h3>
        <p>HTML কোর্সের মডিউল ৫-এ <code>colspan</code>/<code>rowspan</code> শিখেছিলে টেবিলের জন্য — Grid-এও ঠিক একই ধারণা আছে, শুধু প্রপার্টির নাম আলাদা: <code>grid-column</code> ও <code>grid-row</code>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="grid"&gt;
     &lt;div class="wide"&gt;চওড়া হেডার&lt;/div&gt;
     &lt;div&gt;২&lt;/div&gt;&lt;div&gt;৩&lt;/div&gt;
   &lt;/div&gt; */</span>

<span class="sel">.grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(3, 1fr)</span>;
  <span class="prop">gap</span>: <span class="val">10px</span>;
}

<span class="sel">.wide</span> {
  <span class="prop">grid-column</span>: <span class="val">1 / 4</span>;  <span class="cmt">/* ১ম থেকে ৪র্থ লাইন পর্যন্ত — ৩ কলামই জুড়ে */</span>
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
              <div style="grid-column:1/4;background:#0066CC;color:white;padding:14px;border-radius:6px;text-align:center;">চওড়া হেডার (৩ কলাম জুড়ে)</div>
              <div style="background:#93C5FD;padding:14px;border-radius:6px;text-align:center;">২</div>
              <div style="background:#93C5FD;padding:14px;border-radius:6px;text-align:center;">৩</div>
            </div>
          </div>
        </div>

        <p>💡 <strong>গ্রিড লাইন নাম্বারিং:</strong> Grid-এ কলামের "লাইন" গোনা হয় ১ থেকে — ৩টা কলামের গ্রিডে ৪টা উলম্ব লাইন থাকে (শুরু, ১-২ এর মাঝে, ২-৩ এর মাঝে, শেষ)। <code>grid-column: 1 / 4;</code> মানে ১ম লাইন থেকে ৪র্থ লাইন পর্যন্ত বিস্তৃত — অর্থাৎ পুরো ৩টা কলামই জুড়ে।</p>

        <p><strong>শর্টকাট — span কীওয়ার্ড:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* "কতটা লাইন পর্যন্ত" এর বদলে "কয়টা কলাম জুড়ে" বলা যায় */</span>
<span class="sel">.wide</span> {
  <span class="prop">grid-column</span>: <span class="val">span 2</span>;  <span class="cmt">/* যেখান থেকেই শুরু হোক, ২টা কলাম জুড়ে থাকবে */</span>
}</code></pre></div>
        </div>
        <p>💡 <code>grid-row</code> ঠিক একই নিয়মে কাজ করে, শুধু সারি বরাবর — <code>grid-row: 1 / 3;</code> মানে ২টা সারি জুড়ে বিস্তৃত।</p>
      `
    },
    {
      id: "7.5",
      title: "grid-template-areas",
      content: `
        <h3>🔹 ৭.৫ grid-template-areas — নাম দিয়ে লেআউট ডিজাইন</h3>
        <p>এটা Grid-এর সবচেয়ে পাঠযোগ্য (readable) ফিচার — সংখ্যার হিসাব না করে, নাম দিয়ে সরাসরি লেআউটের "ম্যাপ" এঁকে ফেলা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="layout"&gt;
     &lt;header&gt;হেডার&lt;/header&gt;
     &lt;nav&gt;নেভ&lt;/nav&gt;
     &lt;main&gt;মূল কনটেন্ট&lt;/main&gt;
     &lt;footer&gt;ফুটার&lt;/footer&gt;
   &lt;/div&gt; */</span>

<span class="sel">.layout</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">150px 1fr</span>;
  <span class="prop">grid-template-areas</span>:
    <span class="val">"header header"</span>
    <span class="val">"nav    main"</span>
    <span class="val">"footer footer"</span>;
  <span class="prop">gap</span>: <span class="val">10px</span>;
}

<span class="sel">header</span> { <span class="prop">grid-area</span>: <span class="val">header</span>; }
<span class="sel">nav</span>    { <span class="prop">grid-area</span>: <span class="val">nav</span>; }
<span class="sel">main</span>   { <span class="prop">grid-area</span>: <span class="val">main</span>; }
<span class="sel">footer</span> { <span class="prop">grid-area</span>: <span class="val">footer</span>; }</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:100px 1fr;grid-template-rows:auto auto auto;gap:8px;font-size:12px;">
              <div style="grid-column:1/3;background:#0066CC;color:white;padding:10px;border-radius:6px;text-align:center;">হেডার</div>
              <div style="background:#F0F9FF;padding:10px;border-radius:6px;text-align:center;">নেভ</div>
              <div style="background:#FEF3C7;padding:10px;border-radius:6px;">মূল কনটেন্ট</div>
              <div style="grid-column:1/3;background:#374151;color:white;padding:10px;border-radius:6px;text-align:center;">ফুটার</div>
            </div>
          </div>
        </div>

        <p>💡 লক্ষ করো <code>grid-template-areas</code>-এর কোড আসলে <strong>দেখতেই</strong> একটা ম্যাপের মতো — <code>"header header"</code> মানে হেডার দুই কলামজুড়ে, <code>"nav main"</code> মানে নেভ ও মেইন পাশাপাশি। এই ভিজ্যুয়াল স্পষ্টতাই একে HTML কোর্সের মডিউল ৭-এ শেখা সিমান্টিক লেআউট (<code>header</code>/<code>nav</code>/<code>main</code>/<code>footer</code>) বাস্তবায়নের জন্য সবচেয়ে জনপ্রিয় Grid প্যাটার্ন করে তুলেছে।</p>
      `
    },
    {
      id: "7.6",
      title: "রেসপনসিভ গ্রিড — minmax() ও auto-fit",
      content: `
        <h3>🔹 ৭.৬ minmax() ও auto-fit/auto-fill — রেসপনসিভ গ্রিড</h3>
        <p><code>minmax(min, max)</code> ফাংশন দিয়ে একটা কলামের সর্বনিম্ন ও সর্বোচ্চ সাইজ ঠিক করা যায়। <code>auto-fit</code>/<code>auto-fill</code>-এর সাথে মিলিয়ে ব্যবহার করলে, ব্রাউজার নিজে থেকেই স্ক্রিনের প্রস্থ অনুযায়ী হিসাব করে কতগুলো কলাম আঁটবে তা ঠিক করে ফেলে — <strong>কোনো মিডিয়া কোয়েরি ছাড়াই!</strong></p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* প্রতিটা কার্ড কমপক্ষে 150px, স্ক্রিনে যতগুলো আঁটে ততগুলো কলাম */</span>
<span class="sel">.grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(auto-fit, minmax(150px, 1fr))</span>;
  <span class="prop">gap</span>: <span class="val">10px</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:10px;">
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">কার্ড ১</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">কার্ড ২</div>
              <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;text-align:center;">কার্ড ৩</div>
            </div>
            <p style="font-size:11px;color:#6B7280;margin-top:8px;">💻 প্রিভিউ প্যানেলের প্রস্থ অনুযায়ী কার্ডগুলো নিজে থেকেই সাজছে — উইন্ডো ছোট-বড় করলে (বা মোবাইলে দেখলে) কলাম সংখ্যা নিজে থেকেই বদলে যাবে।</p>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ফাংশন</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>minmax(150px, 1fr)</code></td><td>কলাম কমপক্ষে 150px, তবে জায়গা থাকলে 1fr পর্যন্ত বাড়তে পারে</td></tr>
              <tr><td><code>auto-fit</code></td><td>যতগুলো কলাম আঁটে ততগুলো বানায়, খালি কলাম থাকলে বাকিদের বড় করে ফাঁকা জায়গা ভরে</td></tr>
              <tr><td><code>auto-fill</code></td><td>যতগুলো কলাম আঁটে ততগুলো বানায়, কিন্তু খালি জায়গায় অদৃশ্য খালি কলাম রাখে (বাকিদের বড় করে না)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>এটাই CSS Grid-এর সবচেয়ে "জাদুকরী" ফিচার:</strong> মডিউল ৮-এ মিডিয়া কোয়েরি শেখার আগেই, শুধু এই একটা লাইন (<code>repeat(auto-fit, minmax(150px, 1fr))</code>) দিয়ে প্রোডাক্ট গ্রিড বা কার্ড লেআউট সম্পূর্ণ রেসপনসিভ বানানো যায়।</p>
      `
    },
    {
      id: "7.7",
      title: "গ্রিড আইটেম অ্যালাইনমেন্ট",
      content: `
        <h3>🔹 ৭.৭ গ্রিড আইটেম অ্যালাইনমেন্ট</h3>
        <p>Flexbox-এর মতোই Grid-এও আইটেম সাজানোর প্রপার্টি আছে, শুধু নাম কিছুটা আলাদা।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রপার্টি</th><th>প্রয়োগ হয়</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>justify-items</code></td><td>কন্টেইনারে</td><td>প্রতিটা আইটেম তার সেলের ভেতরে আনুভূমিকভাবে কীভাবে বসবে</td></tr>
              <tr><td><code>align-items</code></td><td>কন্টেইনারে</td><td>প্রতিটা আইটেম তার সেলের ভেতরে উলম্বভাবে কীভাবে বসবে</td></tr>
              <tr><td><code>justify-self</code></td><td>একক আইটেমে</td><td>শুধু এই আইটেমটার আনুভূমিক পজিশন (কন্টেইনারের নিয়ম উপেক্ষা করে)</td></tr>
              <tr><td><code>align-self</code></td><td>একক আইটেমে</td><td>শুধু এই আইটেমটার উলম্ব পজিশন</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(3, 1fr)</span>;
  <span class="prop">justify-items</span>: <span class="val">center</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);justify-items:center;align-items:center;background:#F3F4F6;padding:10px;border-radius:6px;height:80px;">
              <div style="background:#0066CC;color:white;padding:8px 14px;border-radius:6px;">১</div>
              <div style="background:#0066CC;color:white;padding:8px 14px;border-radius:6px;">২</div>
              <div style="background:#0066CC;color:white;padding:8px 14px;border-radius:6px;">৩</div>
            </div>
          </div>
        </div>
        <p>💡 লক্ষ করো, এখানে প্রতিটা সেল আসলে অনেক বড় জায়গা নিয়েছে, কিন্তু ভেতরের নীল বক্সগুলো <code>justify-items: center;</code> ও <code>align-items: center;</code> এর কারণে প্রতিটা সেলের ঠিক মাঝখানে বসেছে — সম্পূর্ণ জায়গা না ভরে।</p>
      `
    },
    {
      id: "7.8",
      title: "Flexbox vs Grid",
      content: `
        <h3>🔹 ৭.৮ Flexbox vs Grid — কখন কোনটা ব্যবহার করবে</h3>
        <p>দুটোই লেআউটের জন্য, কিন্তু এদের সবচেয়ে ভালো ব্যবহারক্ষেত্র আলাদা।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th></th><th>Flexbox</th><th>Grid</th></tr></thead>
            <tbody>
              <tr><td>মাত্রা</td><td>এক-মাত্রিক (এক লাইন বা এক কলাম)</td><td>দ্বি-মাত্রিক (সারি ও কলাম একসাথে)</td></tr>
              <tr><td>সবচেয়ে ভালো যেখানে</td><td>নেভবার, বাটন গ্রুপ, ছোট কম্পোনেন্ট</td><td>পুরো পেজ লেআউট, কার্ড গ্রিড, ম্যাগাজিন-স্টাইল ডিজাইন</td></tr>
              <tr><td>কনটেন্ট নাকি কন্টেইনার-ভিত্তিক</td><td>কনটেন্ট-ভিত্তিক (আইটেম যতটুকু জায়গা দরকার নেয়)</td><td>কন্টেইনার-ভিত্তিক (আগে থেকেই গ্রিড কাঠামো ঠিক করে দেওয়া হয়)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>বাস্তবে বেশিরভাগ প্রফেশনাল সাইটে দুটোই একসাথে ব্যবহার হয়:</strong> পুরো পেজের বড় লেআউট (হেডার-সাইডবার-মেইন-ফুটার) Grid দিয়ে, আর তার ভেতরের ছোট ছোট কম্পোনেন্ট (নেভবার লিংক, বাটন গ্রুপ, কার্ডের ভেতরের আইকন+টেক্সট) Flexbox দিয়ে সাজানো হয়। দুটো টুলকেই প্রতিদ্বন্দ্বী না ভেবে, একে অপরের পরিপূরক হিসেবে দেখাই সঠিক দৃষ্টিভঙ্গি।</p>
      `
    },
    {
      id: "7.9",
      title: "সারসংক্ষেপ",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">▦ <code>display: grid;</code> + <code>grid-template-columns</code>/<code>grid-template-rows</code> দিয়ে দ্বি-মাত্রিক (সারি+কলাম) লেআউট তৈরি হয়।</div>
          <div class="takeaway-item">🔢 <code>fr</code> ইউনিট দিয়ে জায়গা ভগ্নাংশ হিসেবে ভাগ করা যায় (<code>1fr 3fr</code> মানে ১:৩ অনুপাত); <code>repeat(n, size)</code> দিয়ে পুনরাবৃত্তি সংক্ষেপে লেখা যায়।</div>
          <div class="takeaway-item">🧱 <code>grid-column</code>/<code>grid-row</code> (বা <code>span n</code>) দিয়ে একটা আইটেম একাধিক সেল জুড়ে বিস্তৃত করা যায় — টেবিলের colspan/rowspan-এর মতোই ধারণা।</div>
          <div class="takeaway-item">🗺️ <code>grid-template-areas</code> দিয়ে নাম-ভিত্তিক ভিজ্যুয়াল ম্যাপ এঁকে লেআউট ডিজাইন করা যায় — header/nav/main/footer লেআউটের জন্য সবচেয়ে জনপ্রিয়।</div>
          <div class="takeaway-item">📱 <code>repeat(auto-fit, minmax(150px, 1fr))</code> দিয়ে মিডিয়া কোয়েরি ছাড়াই সম্পূর্ণ রেসপনসিভ কার্ড-গ্রিড বানানো যায়।</div>
          <div class="takeaway-item">🎯 <code>justify-items</code>/<code>align-items</code> (কন্টেইনারে) ও <code>justify-self</code>/<code>align-self</code> (একক আইটেমে) দিয়ে সেলের ভেতরে আইটেমের পজিশন ঠিক করা যায়।</div>
          <div class="takeaway-item">⚖️ Flexbox এক-মাত্রিক ছোট কম্পোনেন্টের জন্য, Grid দ্বি-মাত্রিক পুরো পেজ লেআউটের জন্য — বাস্তবে দুটোই একসাথে ব্যবহার হয়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=8&section=8.0">
          পরের মডিউল: রেসপনসিভ ডিজাইন ও মিডিয়া কোয়েরি
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
        <h2>📱 মডিউল ৮: রেসপনসিভ ডিজাইন ও মিডিয়া কোয়েরি</h2>

        <h3>🔹 ৮.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>রেসপনসিভ ডিজাইন কেন দরকার ও viewport মেটা ট্যাগ</li>
          <li>মিডিয়া কোয়েরির (<code>@media</code>) বেসিক সিনট্যাক্স</li>
          <li><code>min-width</code> vs <code>max-width</code> ও কমন ব্রেকপয়েন্ট</li>
          <li>Mobile-First vs Desktop-First অ্যাপ্রোচ</li>
          <li>রেসপনসিভ ইউনিট — %, vw, vh, rem, em</li>
          <li>রেসপনসিভ ছবি</li>
          <li>বাস্তব উদাহরণ — মিডিয়া কোয়েরি দিয়ে লেআউট বদলানো</li>
        </ul>
        <p>একটা ওয়েবসাইট মোবাইল, ট্যাবলেট, ল্যাপটপ, বড় মনিটর — সব ধরনের স্ক্রিনে ভালোভাবে দেখানোই <strong>রেসপনসিভ ডিজাইনের</strong> মূল লক্ষ্য। এই মডিউল শেষ করলে তুমি একই CSS ফাইল দিয়ে সব ডিভাইসের জন্য মানানসই ডিজাইন বানাতে পারবে।</p>
      `
    },
    {
      id: "8.1",
      title: "কেন রেসপনসিভ ডিজাইন দরকার",
      content: `
        <h3>🔹 ৮.১ রেসপনসিভ ডিজাইন কেন দরকার?</h3>
        <p>আজকাল মানুষ ওয়েবসাইট দেখে ফোনে, ট্যাবলেটে, ল্যাপটপে, বড় ডেস্কটপ মনিটরে — প্রতিটার স্ক্রিন সাইজ ভিন্ন। যদি ওয়েবসাইট শুধু একটা নির্দিষ্ট সাইজের জন্য বানানো হয়, তাহলে অন্য ডিভাইসে সেটা ভাঙাচোরা বা ব্যবহার করা কঠিন দেখাবে — যেমন ডেস্কটপের জন্য বানানো ৩-কলাম লেআউট মোবাইলে দেখলে টেক্সট এত ছোট হয়ে যাবে যে পড়াই যাবে না।</p>

        <h3>🔹 Viewport মেটা ট্যাগ — প্রথম ও বাধ্যতামূলক ধাপ</h3>
        <p>HTML কোর্সের মডিউল ৯-এ এই ট্যাগটা দেখেছিলে — রেসপনসিভ ডিজাইনের একদম প্রথম শর্ত এটাই, তাই আবার মনে করিয়ে দিচ্ছি:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">&lt;meta</span> <span class="prop">name</span>=<span class="val">"viewport"</span> <span class="prop">content</span>=<span class="val">"width=device-width, initial-scale=1.0"</span><span class="sel">&gt;</span></code></pre></div>
        </div>

        <p>⚠️ <strong>এই ট্যাগ ছাড়া মিডিয়া কোয়েরি ঠিকভাবে কাজ করবে না।</strong> এটা ছাড়া মোবাইল ব্রাউজার পুরো ডেস্কটপ ভার্সনের পেজটা ছোট করে দেখায় (zoomed out), মিডিয়া কোয়েরি অনুযায়ী রিফ্লো করে না। তাই এটা প্রতিটা HTML ফাইলের <code>&lt;head&gt;</code>-এ অবশ্যই থাকতে হবে।</p>
      `
    },
    {
      id: "8.2",
      title: "মিডিয়া কোয়েরির বেসিক সিনট্যাক্স",
      content: `
        <h3>🔹 ৮.২ @media — মিডিয়া কোয়েরির বেসিক সিনট্যাক্স</h3>
        <p><strong>মিডিয়া কোয়েরি</strong> দিয়ে একটা নির্দিষ্ট শর্ত (যেমন স্ক্রিনের প্রস্থ) পূরণ হলেই শুধু কিছু CSS নিয়ম প্রয়োগ করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* সাধারণ (ডেস্কটপ) স্টাইল */</span>
<span class="sel">.title</span> {
  <span class="prop">font-size</span>: <span class="val">32px</span>;
}

<span class="cmt">/* স্ক্রিনের প্রস্থ 600px বা তার কম হলেই শুধু এই নিয়ম প্রয়োগ হবে */</span>
<span class="sel">@media (max-width: 600px)</span> {
  <span class="sel">.title</span> {
    <span class="prop">font-size</span>: <span class="val">20px</span>;
  }
}</code></pre></div>
        </div>

        <p>💡 <strong>সিনট্যাক্স ভেঙে বোঝা যাক:</strong></p>
        <ul>
          <li><code>@media</code> — মিডিয়া কোয়েরি শুরুর কীওয়ার্ড</li>
          <li><code>(max-width: 600px)</code> — শর্ত: স্ক্রিন ৬০০পিক্সেল বা তার কম প্রস্থের হতে হবে</li>
          <li><code>{ }</code> এর ভেতরে — শর্ত সত্যি হলে যেসব CSS নিয়ম প্রয়োগ হবে</li>
        </ul>
        <p>⚠️ মিডিয়া কোয়েরির ভেতরের সিলেক্টর (<code>.title</code>) বাইরের সিলেক্টরের মতোই Specificity মেনে চলে (মডিউল ২ থেকে মনে আছে?) — তাই একই সিলেক্টর ব্যবহার করলে মিডিয়া কোয়েরির নিয়ম বাইরের নিয়মকে override করে, কারণ এটা ফাইলে <strong>পরে</strong> লেখা।</p>
      `
    },
    {
      id: "8.3",
      title: "min-width vs max-width ও ব্রেকপয়েন্ট",
      content: `
        <h3>🔹 ৮.৩ min-width vs max-width</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>শর্ত</th><th>কখন সত্যি হয়</th></tr></thead>
            <tbody>
              <tr><td><code>(max-width: 768px)</code></td><td>স্ক্রিন ৭৬৮পিক্সেল <strong>বা তার কম</strong> হলে — "এই সাইজ পর্যন্ত"</td></tr>
              <tr><td><code>(min-width: 768px)</code></td><td>স্ক্রিন ৭৬৮পিক্সেল <strong>বা তার বেশি</strong> হলে — "এই সাইজ থেকে শুরু করে"</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 কমন ব্রেকপয়েন্ট (Breakpoints)</h3>
        <p><strong>ব্রেকপয়েন্ট</strong> হলো সেই স্ক্রিন-সাইজ, যেখানে লেআউট বদলে যাওয়া দরকার। নিচের মানগুলো ইন্ডাস্ট্রিতে সবচেয়ে বেশি ব্যবহৃত হয় (এই সাইটেও একই মান ব্যবহার হয়েছে):</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ডিভাইস</th><th>কমন ব্রেকপয়েন্ট</th></tr></thead>
            <tbody>
              <tr><td>মোবাইল</td><td>৬০০px পর্যন্ত</td></tr>
              <tr><td>ট্যাবলেট</td><td>৬০১px - ৯৬০px</td></tr>
              <tr><td>ল্যাপটপ/ডেস্কটপ</td><td>৯৬১px এবং তার বেশি</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* মোবাইলে সিঙ্গেল কলাম */</span>
<span class="sel">@media (max-width: 600px)</span> {
  <span class="sel">.grid</span> {
    <span class="prop">grid-template-columns</span>: <span class="val">1fr</span>;
  }
}

<span class="cmt">/* ট্যাবলেটে দুই কলাম */</span>
<span class="sel">@media (min-width: 601px) and (max-width: 960px)</span> {
  <span class="sel">.grid</span> {
    <span class="prop">grid-template-columns</span>: <span class="val">1fr 1fr</span>;
  }
}</code></pre></div>
        </div>
        <p>💡 <code>and</code> কীওয়ার্ড দিয়ে একাধিক শর্ত একসাথে মেলানো যায় — এখানে দুটো শর্তই (৬০১px-এর বেশি, ৯৬০px-এর কম) সত্যি হলে তবেই নিয়মটা প্রয়োগ হবে।</p>
      `
    },
    {
      id: "8.4",
      title: "Mobile-First vs Desktop-First",
      content: `
        <h3>🔹 ৮.৪ Mobile-First vs Desktop-First অ্যাপ্রোচ</h3>
        <p>মিডিয়া কোয়েরি লেখার দুটো ভিন্ন দর্শন (philosophy) আছে।</p>

        <h4>Desktop-First (max-width ব্যবহার করে)</h4>
        <p>আগে ডেস্কটপের জন্য স্টাইল লেখা হয়, তারপর <code>max-width</code> দিয়ে ছোট স্ক্রিনের জন্য override করা হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ডিফল্ট (ডেস্কটপ) */</span>
<span class="sel">.container</span> { <span class="prop">width</span>: <span class="val">80%</span>; }

<span class="cmt">/* ছোট স্ক্রিনে override */</span>
<span class="sel">@media (max-width: 600px)</span> {
  <span class="sel">.container</span> { <span class="prop">width</span>: <span class="val">100%</span>; }
}</code></pre></div>
        </div>

        <h4>Mobile-First (min-width ব্যবহার করে) — বর্তমানে বেস্ট প্র্যাকটিস</h4>
        <p>আগে মোবাইলের জন্য (সবচেয়ে সহজ/সাধারণ) স্টাইল লেখা হয়, তারপর <code>min-width</code> দিয়ে বড় স্ক্রিনের জন্য বাড়তি স্টাইল যোগ করা হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ডিফল্ট (মোবাইল) — সিঙ্গেল কলাম */</span>
<span class="sel">.grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">1fr</span>;
}

<span class="cmt">/* বড় স্ক্রিনে বাড়তি কলাম যোগ */</span>
<span class="sel">@media (min-width: 768px)</span> {
  <span class="sel">.grid</span> { <span class="prop">grid-template-columns</span>: <span class="val">repeat(3, 1fr)</span>; }
}</code></pre></div>
        </div>

        <p>💡 <strong>Mobile-First কেন বেস্ট প্র্যাকটিস:</strong></p>
        <ul>
          <li>বিশ্বে বেশিরভাগ ওয়েব ট্রাফিক এখন মোবাইল থেকে আসে, তাই মোবাইল অভিজ্ঞতাকে প্রাধান্য দেওয়া যুক্তিসঙ্গত</li>
          <li>সহজ (মোবাইল) থেকে জটিল (ডেস্কটপ) দিকে যাওয়া, উল্টোটার (জটিল থেকে সহজ করা/override) চেয়ে সহজ</li>
          <li>ডিফল্ট স্টাইল হালকা রাখা যায়, যা মোবাইলে দ্রুত লোড হয়</li>
        </ul>
      `
    },
    {
      id: "8.5",
      title: "রেসপনসিভ ইউনিট",
      content: `
        <h3>🔹 ৮.৫ রেসপনসিভ ইউনিট — %, vw, vh, rem, em</h3>
        <p>শুধু মিডিয়া কোয়েরি না, সাইজ লেখার জন্য সঠিক <strong>ইউনিট</strong> বেছে নেওয়াও রেসপনসিভ ডিজাইনের একটা বড় অংশ।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ইউনিট</th><th>কীসের সাপেক্ষে</th><th>উদাহরণ ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><code>%</code></td><td>প্যারেন্ট এলিমেন্টের সাইজ</td><td><code>width: 50%;</code> — প্যারেন্টের অর্ধেক প্রস্থ</td></tr>
              <tr><td><code>vw</code></td><td>Viewport-এর (ব্রাউজার উইন্ডো) প্রস্থের ১%</td><td><code>width: 100vw;</code> — পুরো স্ক্রিনের প্রস্থ</td></tr>
              <tr><td><code>vh</code></td><td>Viewport-এর উচ্চতার ১%</td><td><code>height: 100vh;</code> — পুরো স্ক্রিনের উচ্চতা (ফুল-স্ক্রিন সেকশনের জন্য কমন)</td></tr>
              <tr><td><code>rem</code></td><td>রুট (<code>&lt;html&gt;</code>) এলিমেন্টের ফন্ট সাইজ</td><td>মডিউল ৩-এ শেখা — Accessibility-বান্ধব ফন্ট সাইজিং</td></tr>
              <tr><td><code>em</code></td><td>নিজের প্যারেন্টের ফন্ট সাইজ</td><td>নেস্টেড এলিমেন্টে ধাপে ধাপে স্কেল করতে</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.hero</span> {
  <span class="prop">height</span>: <span class="val">100vh</span>;   <span class="cmt">/* পুরো স্ক্রিন উচ্চতা */</span>
  <span class="prop">width</span>: <span class="val">100%</span>;    <span class="cmt">/* প্যারেন্টের পুরো প্রস্থ */</span>
}

<span class="sel">h1</span> {
  <span class="prop">font-size</span>: <span class="val">2.5rem</span>;  <span class="cmt">/* রুট ফন্ট সাইজের 2.5 গুণ */</span>
}</code></pre></div>
        </div>

        <p>💡 <strong>সহজ নিয়ম:</strong> লেআউট/সাইজের জন্য <code>%</code> ও <code>vw</code>/<code>vh</code>, ফন্ট সাইজের জন্য <code>rem</code> — এই কম্বিনেশন মেনে চললেই বেশিরভাগ ক্ষেত্রে ভালো রেসপনসিভ ফলাফল পাওয়া যায়।</p>
      `
    },
    {
      id: "8.6",
      title: "রেসপনসিভ ছবি ও বাস্তব উদাহরণ",
      content: `
        <h3>🔹 ৮.৬ রেসপনসিভ ছবি</h3>
        <p>ছবিকে তার প্যারেন্ট বক্সের চেয়ে বড় হয়ে ওভারফ্লো করা থেকে আটকাতে এই একটা নিয়ম প্রায় সব CSS ফাইলে থাকে:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">img</span> {
  <span class="prop">max-width</span>: <span class="val">100%</span>;
  <span class="prop">height</span>: <span class="val">auto</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>max-width: 100%;</code> মানে ছবি তার আসল সাইজের চেয়ে বড় হবে না, কিন্তু প্যারেন্ট বক্স ছোট হলে ছবিও সেই অনুযায়ী ছোট হয়ে যাবে। <code>height: auto;</code> নিশ্চিত করে ছবির অনুপাত (aspect ratio) ঠিক থাকে, চ্যাপ্টা বা টানা দেখাবে না।</p>

        <h3>🔹 বাস্তব উদাহরণ — মিডিয়া কোয়েরি দিয়ে Flexbox লেআউট বদলানো</h3>
        <p>মডিউল ৬-এ শেখা Flexbox-এর সাথে মিডিয়া কোয়েরি মিলিয়ে, ডেস্কটপে পাশাপাশি (row) থাকা এলিমেন্টকে মোবাইলে একটার নিচে একটা (column) সাজানো যাক — এটা প্রায় প্রতিটা রেসপনসিভ ওয়েবসাইটে দেখা একটা ক্লাসিক প্যাটার্ন।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="layout"&gt;
     &lt;div class="sidebar"&gt;সাইডবার&lt;/div&gt;
     &lt;div class="content"&gt;মূল কনটেন্ট&lt;/div&gt;
   &lt;/div&gt; */</span>

<span class="cmt">/* ডিফল্ট (মোবাইল-ফার্স্ট) — একটার নিচে একটা */</span>
<span class="sel">.layout</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">gap</span>: <span class="val">12px</span>;
}

<span class="cmt">/* ট্যাবলেট ও বড় স্ক্রিনে — পাশাপাশি */</span>
<span class="sel">@media (min-width: 768px)</span> {
  <span class="sel">.layout</span> {
    <span class="prop">flex-direction</span>: <span class="val">row</span>;
  }
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <p style="font-size:11px;color:#6B7280;margin-bottom:6px;">📱 মোবাইল (column):</p>
            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;width:160px;">
              <div style="background:#F0F9FF;padding:10px;border-radius:6px;text-align:center;font-size:12px;">সাইডবার</div>
              <div style="background:#FEF3C7;padding:10px;border-radius:6px;text-align:center;font-size:12px;">মূল কনটেন্ট</div>
            </div>
            <p style="font-size:11px;color:#6B7280;margin-bottom:6px;">💻 ডেস্কটপ (row):</p>
            <div style="display:flex;flex-direction:row;gap:8px;">
              <div style="background:#F0F9FF;padding:10px;border-radius:6px;text-align:center;font-size:12px;">সাইডবার</div>
              <div style="background:#FEF3C7;padding:10px;border-radius:6px;text-align:center;font-size:12px;flex:1;">মূল কনটেন্ট</div>
            </div>
          </div>
        </div>
        <p>💡 এটাই Mobile-First অ্যাপ্রোচের বাস্তব উদাহরণ — ডিফল্ট (কোনো মিডিয়া কোয়েরি ছাড়া) স্টাইল মোবাইলের জন্য লেখা, তারপর <code>min-width: 768px</code> দিয়ে বড় স্ক্রিনে <code>flex-direction</code> বদলে <code>row</code> করে দেওয়া হয়েছে।</p>
      `
    },
    {
      id: "8.7",
      title: "সারসংক্ষেপ",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📲 <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> ছাড়া মিডিয়া কোয়েরি ঠিকভাবে কাজ করে না — এটা বাধ্যতামূলক।</div>
          <div class="takeaway-item">🎯 <code>@media (condition) { ... }</code> — নির্দিষ্ট শর্ত সত্যি হলেই ভেতরের CSS নিয়ম প্রয়োগ হয়।</div>
          <div class="takeaway-item">📏 <code>max-width</code> = "এই সাইজ পর্যন্ত", <code>min-width</code> = "এই সাইজ থেকে শুরু করে"; কমন ব্রেকপয়েন্ট: মোবাইল ৬০০px, ট্যাবলেট ৯৬০px পর্যন্ত।</div>
          <div class="takeaway-item">📱 <strong>Mobile-First</strong> (আগে মোবাইল, <code>min-width</code> দিয়ে বড় স্ক্রিনে যোগ করা) বর্তমান বেস্ট প্র্যাকটিস।</div>
          <div class="takeaway-item">📐 লেআউটে <code>%</code>/<code>vw</code>/<code>vh</code>, ফন্টে <code>rem</code> — এই কম্বিনেশন সবচেয়ে বেশি ব্যবহৃত রেসপনসিভ ইউনিট প্যাটার্ন।</div>
          <div class="takeaway-item">🖼️ <code>img { max-width: 100%; height: auto; }</code> ছবিকে প্যারেন্ট বক্সের চেয়ে বড় হতে আটকায়, অনুপাত ঠিক রাখে।</div>
          <div class="takeaway-item">🔄 Flexbox/Grid + মিডিয়া কোয়েরি মিলিয়ে ব্যবহার করলে (যেমন <code>flex-direction</code> মোবাইলে column, ডেস্কটপে row) সম্পূর্ণ রেসপনসিভ লেআউট বানানো যায়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=9&section=9.0">
          পরের মডিউল: ট্রানজিশন, অ্যানিমেশন ও ট্রান্সফর্ম
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
        <h2>🎞️ মডিউল ৯: ট্রানজিশন, অ্যানিমেশন ও ট্রান্সফর্ম</h2>

        <h3>🔹 ৯.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>transform</code> — translate, rotate, scale, skew</li>
          <li><code>transition</code> — property, duration, timing-function, delay</li>
          <li>Transform + Transition মিলিয়ে ইন্টারঅ্যাক্টিভ হোভার ইফেক্ট বানানো</li>
          <li><code>@keyframes</code> দিয়ে কাস্টম অ্যানিমেশন তৈরি</li>
          <li><code>animation</code> প্রপার্টি — duration, timing-function, iteration-count, direction, fill-mode</li>
        </ul>
        <p>এই মডিউলে যা শিখবে তা দিয়ে তোমার ওয়েবসাইট আর "স্ট্যাটিক" থাকবে না — বাটনে হোভার করলে সুন্দরভাবে বড় হবে, কার্ড উপরে উঠে আসবে, লোডিং স্পিনার ঘুরবে — এই ধরনের প্রাণবন্ত ইন্টারঅ্যাকশন এখান থেকেই আসে।</p>
      `
    },
    {
      id: "9.1",
      title: "transform প্রপার্টি",
      content: `
        <h3>🔹 ৯.১ transform — এলিমেন্ট নড়ানো, ঘোরানো, সাইজ বদলানো</h3>
        <p><code>transform</code> প্রপার্টি দিয়ে একটা এলিমেন্টের ভিজ্যুয়াল পজিশন, ঘূর্ণন বা সাইজ বদলানো যায় — লেআউটের অন্য কোনো এলিমেন্টকে প্রভাবিত না করেই (মডিউল ৪/৫-এর <code>margin</code>/<code>position</code> থেকে এটাই মূল পার্থক্য)।</p>

        <h4>translate() — সরানো</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.box</span> {
  <span class="prop">transform</span>: <span class="val">translate(20px, 10px)</span>;  <span class="cmt">/* ডানে 20px, নিচে 10px */</span>
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="background:#F3F4F6;padding:10px;border-radius:6px;">
              <div style="background:#0066CC;color:white;padding:10px;border-radius:6px;display:inline-block;transform:translate(20px, 10px);">সরানো বক্স</div>
            </div>
          </div>
        </div>

        <h4>rotate() — ঘোরানো</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.box</span> {
  <span class="prop">transform</span>: <span class="val">rotate(15deg)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="background:#0066CC;color:white;padding:16px;border-radius:6px;display:inline-block;transform:rotate(15deg);">ঘোরানো বক্স</div>
          </div>
        </div>

        <h4>scale() — সাইজ বড়/ছোট করা</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.box</span> {
  <span class="prop">transform</span>: <span class="val">scale(1.3)</span>;  <span class="cmt">/* ১৩০% আকার */</span>
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="padding:20px;">
              <div style="background:#0066CC;color:white;padding:14px;border-radius:6px;display:inline-block;transform:scale(1.3);">বড় করা বক্স</div>
            </div>
          </div>
        </div>

        <h4>skew() — বাঁকানো</h4>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.box</span> {
  <span class="prop">transform</span>: <span class="val">skew(-10deg)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <div style="padding:12px;">
              <div style="background:#0066CC;color:white;padding:14px;border-radius:6px;display:inline-block;transform:skew(-10deg);">বাঁকানো বক্স</div>
            </div>
          </div>
        </div>

        <p>💡 একাধিক transform একসাথেও দেওয়া যায় (স্পেস দিয়ে আলাদা করে): <code>transform: rotate(10deg) scale(1.1);</code>।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ফাংশন</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>translate(x, y)</code></td><td>আনুভূমিক ও উলম্বভাবে সরানো</td></tr>
              <tr><td><code>rotate(deg)</code></td><td>ঘোরানো (ডিগ্রিতে)</td></tr>
              <tr><td><code>scale(n)</code></td><td>সাইজ বড়/ছোট করা (গুণিতক হিসেবে)</td></tr>
              <tr><td><code>skew(deg)</code></td><td>বাঁকা করা (ডিগ্রিতে)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "9.2",
      title: "transition বেসিক",
      content: `
        <h3>🔹 ৯.২ transition — পরিবর্তনকে মসৃণ করা</h3>
        <p>স্বাভাবিকভাবে CSS-এ কোনো প্রপার্টি বদলালে (যেমন <code>:hover</code>-এ রঙ বদলানো) তা <strong>সাথে সাথেই</strong> ঘটে যায় — কোনো মসৃণতা (smoothness) ছাড়াই। <code>transition</code> দিয়ে এই পরিবর্তনটাকে একটা নির্দিষ্ট সময় ধরে ধীরে ধীরে ঘটানো যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;button class="btn"&gt;আমার ওপর মাউস আনো&lt;/button&gt; */</span>

<span class="sel">.btn</span> {
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">padding</span>: <span class="val">10px 20px</span>;
  <span class="prop">border</span>: <span class="val">none</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
  <span class="prop">transition</span>: <span class="val">background-color 0.3s ease</span>;
}

<span class="sel">.btn:hover</span> {
  <span class="prop">background-color</span>: <span class="val">#004182</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>.demo-btn-92{background-color:#0066CC;color:white;padding:10px 20px;border:none;border-radius:8px;transition:background-color 0.3s ease;cursor:pointer;}.demo-btn-92:hover{background-color:#004182;}</style>
            <button class="demo-btn-92">আমার ওপর মাউস আনো</button>
          </div>
        </div>
        <p>💡 চেষ্টা করে দেখো — মাউস আনলে রঙটা এবার আর সাথে সাথে না বদলে, ০.৩ সেকেন্ড ধরে ধীরে ধীরে বদলাচ্ছে।</p>

        <h4>transition-এর চারটা অংশ</h4>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>অংশ</th><th>কাজ</th><th>উদাহরণ</th></tr></thead>
            <tbody>
              <tr><td><code>transition-property</code></td><td>কোন প্রপার্টিতে ট্রানজিশন হবে</td><td><code>background-color</code>, বা সব প্রপার্টির জন্য <code>all</code></td></tr>
              <tr><td><code>transition-duration</code></td><td>কতক্ষণ ধরে বদলাবে</td><td><code>0.3s</code>, <code>300ms</code></td></tr>
              <tr><td><code>transition-timing-function</code></td><td>বদলানোর গতির ধরন (শুরু-শেষে দ্রুত/ধীর)</td><td><code>ease</code>, <code>linear</code>, <code>ease-in-out</code></td></tr>
              <tr><td><code>transition-delay</code></td><td>শুরু হতে কতক্ষণ দেরি করবে</td><td><code>0.2s</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* শর্টহ্যান্ড ক্রম: property duration timing-function delay */</span>
<span class="sel">.btn</span> {
  <span class="prop">transition</span>: <span class="val">all 0.4s ease-in-out 0.1s</span>;
}

<span class="cmt">/* একাধিক প্রপার্টিতে আলাদা আলাদা ট্রানজিশন (কমা দিয়ে) */</span>
<span class="sel">.card</span> {
  <span class="prop">transition</span>: <span class="val">transform 0.3s ease, box-shadow 0.3s ease</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>all</code> ব্যবহার করলে সব প্রপার্টির পরিবর্তনই মসৃণ হয়ে যায়, কিন্তু নির্দিষ্ট প্রপার্টি উল্লেখ করাই (যেমন <code>background-color</code>) ভালো অভ্যাস, কারণ এতে ব্রাউজারের কাজ কম ও পারফরম্যান্স ভালো হয়।</p>
      `
    },
    {
      id: "9.3",
      title: "হোভার ইফেক্ট — Transform + Transition",
      content: `
        <h3>🔹 ৯.৩ Transform + Transition একসাথে — বাস্তব হোভার ইফেক্ট</h3>
        <p>Transform ও Transition একসাথে ব্যবহার করলেই সেই বিখ্যাত "কার্ড হোভার করলে একটু উপরে উঠে আসে" ইফেক্ট তৈরি হয় — অসংখ্য প্রফেশনাল ওয়েবসাইটের মডিউল/প্রোডাক্ট কার্ডে এই একই ইফেক্ট ব্যবহার হয়!</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="card"&gt;আমার ওপর মাউস আনো&lt;/div&gt; */</span>

<span class="sel">.card</span> {
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">border-radius</span>: <span class="val">12px</span>;
  <span class="prop">border</span>: <span class="val">1px solid #E5E7EB</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.25s ease, box-shadow 0.25s ease</span>;
}

<span class="sel">.card:hover</span> {
  <span class="prop">transform</span>: <span class="val">translateY(-6px)</span>;  <span class="cmt">/* উপরে উঠে আসা */</span>
  <span class="prop">box-shadow</span>: <span class="val">0 12px 24px rgba(0,0,0,0.12)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>.demo-card-93{padding:20px;border-radius:12px;border:1px solid #E5E7EB;transition:transform 0.25s ease, box-shadow 0.25s ease;width:200px;text-align:center;cursor:pointer;}.demo-card-93:hover{transform:translateY(-6px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}</style>
            <div class="demo-card-93">আমার ওপর মাউস আনো</div>
          </div>
        </div>
        <p>💡 চেষ্টা করে দেখো — কার্ডটা উপরের দিকে উঠে আসছে ও ছায়া গাঢ় হচ্ছে, একদম মসৃণভাবে। এটাই মডিউল ৪-এ শেখা <code>box-shadow</code>, মডিউল ৫-এ শেখা positioning-এর ধারণা, আর এই মডিউলের <code>transform</code>/<code>transition</code> — সব একসাথে মিলিয়ে বানানো একটা বাস্তব প্রফেশনাল ইফেক্ট।</p>

        <p><strong>আরেকটা কমন প্যাটার্ন — বাটন স্কেল ইফেক্ট:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.btn</span> {
  <span class="prop">transition</span>: <span class="val">transform 0.15s ease</span>;
}

<span class="sel">.btn:hover</span> {
  <span class="prop">transform</span>: <span class="val">scale(1.05)</span>;
}

<span class="sel">.btn:active</span> {
  <span class="prop">transform</span>: <span class="val">scale(0.97)</span>;  <span class="cmt">/* ক্লিক করার সময় সামান্য চেপে যাওয়ার অনুভূতি */</span>
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>.demo-btn2-93{background:#0066CC;color:white;padding:10px 22px;border:none;border-radius:8px;transition:transform 0.15s ease;cursor:pointer;}.demo-btn2-93:hover{transform:scale(1.05);}.demo-btn2-93:active{transform:scale(0.97);}</style>
            <button class="demo-btn2-93">ক্লিক করে দেখো</button>
          </div>
        </div>
        <p>💡 <code>:active</code> একটা pseudo-class যা এলিমেন্টে ক্লিক করে ধরে রাখার মুহূর্তে সক্রিয় হয় — এটা মডিউল ২-এ শেখা <code>:hover</code>-এর মতোই একটা state-pseudo-class।</p>
      `
    },
    {
      id: "9.4",
      title: "@keyframes ও অ্যানিমেশন বেসিক",
      content: `
        <h3>🔹 ৯.৪ @keyframes — কাস্টম অ্যানিমেশন তৈরি</h3>
        <p><code>transition</code> শুধু দুইটা অবস্থার (normal → hover) মধ্যে বদল ঘটায়। কিন্তু যদি একটা এলিমেন্টকে <strong>বারবার</strong> বা <strong>একাধিক ধাপে</strong> নড়াতে চাও (যেমন লোডিং স্পিনার, ক্রমাগত ঘোরা আইকন), তখন দরকার <code>@keyframes</code>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* অ্যানিমেশনের নাম ও ধাপগুলো ডিফাইন করা */</span>
<span class="sel">@keyframes spin</span> {
  <span class="val">from</span> {
    <span class="prop">transform</span>: <span class="val">rotate(0deg)</span>;
  }
  <span class="val">to</span> {
    <span class="prop">transform</span>: <span class="val">rotate(360deg)</span>;
  }
}

<span class="cmt">/* এখন এই অ্যানিমেশনটা কোনো এলিমেন্টে ব্যবহার করা */</span>
<span class="sel">.loader</span> {
  <span class="prop">animation</span>: <span class="val">spin 1s linear infinite</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>@keyframes demo-spin-94{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}.demo-loader-94{width:36px;height:36px;border:4px solid #DBEAFE;border-top-color:#0066CC;border-radius:50%;animation:demo-spin-94 1s linear infinite;}</style>
            <div class="demo-loader-94"></div>
          </div>
        </div>
        <p>💡 <code>from</code>/<code>to</code> দিয়ে শুরু ও শেষ অবস্থা বোঝানো হয় — এটা <code>0%</code>/<code>100%</code> লেখারই সহজ রূপ। একাধিক ধাপ থাকলে percentage ব্যবহার করতে হয় (পরের সেকশনে দেখব)।</p>

        <p><strong>একাধিক ধাপের অ্যানিমেশন (percentage দিয়ে):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">@keyframes bounce</span> {
  <span class="val">0%</span>   { <span class="prop">transform</span>: <span class="val">translateY(0)</span>; }
  <span class="val">50%</span>  { <span class="prop">transform</span>: <span class="val">translateY(-15px)</span>; }
  <span class="val">100%</span> { <span class="prop">transform</span>: <span class="val">translateY(0)</span>; }
}

<span class="sel">.icon</span> {
  <span class="prop">animation</span>: <span class="val">bounce 0.6s ease-in-out infinite</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>@keyframes demo-bounce-94{0%{transform:translateY(0);}50%{transform:translateY(-15px);}100%{transform:translateY(0);}}.demo-icon-94{font-size:28px;display:inline-block;animation:demo-bounce-94 0.6s ease-in-out infinite;}</style>
            <div class="demo-icon-94">⬆️</div>
          </div>
        </div>
        <p>💡 <code>0%</code>, <code>50%</code>, <code>100%</code> — এই তিনটা ধাপ দিয়ে "উপরে যাও, নিচে ফিরে এসো" একটা বাউন্স ইফেক্ট তৈরি হয়েছে। যত বেশি percentage-ধাপ যোগ করবে, অ্যানিমেশন তত বেশি জটিল ও নিয়ন্ত্রিত হবে।</p>
      `
    },
    {
      id: "9.5",
      title: "animation প্রপার্টি",
      content: `
        <h3>🔹 ৯.৫ animation প্রপার্টি — সব অপশন বিস্তারিত</h3>
        <p><code>animation</code> শর্টহ্যান্ডে একাধিক অংশ একসাথে লেখা যায়:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অংশ</th><th>কাজ</th><th>সাধারণ মান</th></tr></thead>
            <tbody>
              <tr><td><code>animation-name</code></td><td>কোন <code>@keyframes</code> ব্যবহার হবে</td><td><code>spin</code>, <code>bounce</code></td></tr>
              <tr><td><code>animation-duration</code></td><td>একবার সম্পূর্ণ হতে কতক্ষণ লাগবে</td><td><code>1s</code>, <code>500ms</code></td></tr>
              <tr><td><code>animation-timing-function</code></td><td>গতির ধরন</td><td><code>linear</code> (সমান গতি), <code>ease</code></td></tr>
              <tr><td><code>animation-iteration-count</code></td><td>কতবার চলবে</td><td><code>1</code>, <code>3</code>, <code>infinite</code> (অসীমবার)</td></tr>
              <tr><td><code>animation-direction</code></td><td>কোন দিকে চলবে</td><td><code>normal</code>, <code>reverse</code>, <code>alternate</code> (পালাক্রমে উল্টো)</td></tr>
              <tr><td><code>animation-delay</code></td><td>শুরু হতে কত দেরি</td><td><code>0.5s</code></td></tr>
              <tr><td><code>animation-fill-mode</code></td><td>অ্যানিমেশন শেষ হওয়ার পর এলিমেন্ট কোন অবস্থায় থাকবে</td><td><code>forwards</code> (শেষ ধাপেই থেকে যায়)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* শর্টহ্যান্ড ক্রম: name duration timing-function delay iteration-count direction fill-mode */</span>
<span class="sel">.element</span> {
  <span class="prop">animation</span>: <span class="val">bounce 0.6s ease-in-out 0s infinite alternate</span>;
}</code></pre></div>
        </div>

        <p><strong>fadeIn — পেজ লোড হলে ধীরে ধীরে ভেসে ওঠা ইফেক্ট (খুবই কমন):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">@keyframes fadeIn</span> {
  <span class="val">from</span> {
    <span class="prop">opacity</span>: <span class="val">0</span>;
    <span class="prop">transform</span>: <span class="val">translateY(10px)</span>;
  }
  <span class="val">to</span> {
    <span class="prop">opacity</span>: <span class="val">1</span>;
    <span class="prop">transform</span>: <span class="val">translateY(0)</span>;
  }
}

<span class="sel">.section</span> {
  <span class="prop">animation</span>: <span class="val">fadeIn 0.6s ease forwards</span>;
}</code></pre></div>
        </div>
        <p>💡 <code>animation-fill-mode: forwards;</code> খুবই গুরুত্বপূর্ণ এখানে — এটা ছাড়া অ্যানিমেশন শেষ হওয়ার পর এলিমেন্ট তার <strong>আসল (অ্যানিমেশনের আগের)</strong> অবস্থায় ফিরে যায়, যা <code>opacity: 0</code> হওয়ায় এলিমেন্টটা আবার অদৃশ্য হয়ে যাবে। <code>forwards</code> দিলে এলিমেন্ট অ্যানিমেশনের <strong>শেষ ধাপের</strong> (<code>opacity: 1</code>) অবস্থাতেই থেকে যায়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔄 <code>transform</code>: translate() (সরানো), rotate() (ঘোরানো), scale() (সাইজ বদল), skew() (বাঁকানো) — লেআউট প্রভাবিত না করেই ভিজ্যুয়াল পরিবর্তন।</div>
          <div class="takeaway-item">⏱️ <code>transition: property duration timing-function delay;</code> — একটা প্রপার্টির পরিবর্তনকে মসৃণ করে (সাধারণত <code>:hover</code>-এর সাথে ব্যবহার হয়)।</div>
          <div class="takeaway-item">✨ <code>transform</code> + <code>transition</code> মিলিয়ে কার্ড-হোভার (translateY) বা বাটন-স্কেল ইফেক্ট বানানো যায় — এই সাইটেই এই প্যাটার্ন ব্যবহার হয়েছে।</div>
          <div class="takeaway-item">🎬 <code>@keyframes name { 0% {...} 100% {...} }</code> দিয়ে কাস্টম, বারবার-চলা অ্যানিমেশন ডিফাইন করা হয়; <code>from</code>/<code>to</code> হলো <code>0%</code>/<code>100%</code>-এরই সহজ রূপ।</div>
          <div class="takeaway-item">🔁 <code>animation: name duration timing-function delay iteration-count direction fill-mode;</code> — <code>infinite</code> দিয়ে অসীমবার চালানো যায়, <code>forwards</code> দিয়ে শেষ ধাপে থামিয়ে রাখা যায়।</div>
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
          <li>CSS ভেরিয়েবল (Custom Properties)</li>
          <li>CSS Reset ও Normalize</li>
          <li>নামকরণ কনভেনশন — BEM মেথডলজি</li>
          <li>কোড অর্গানাইজেশন ও কমেন্ট বেস্ট প্র্যাকটিস</li>
          <li>এই কোর্স জুড়ে দেখা কমন ভুলের রিক্যাপ</li>
          <li>ব্রাউজার DevTools দিয়ে CSS ডিবাগ করা</li>
        </ul>
        <p>এই মডিউল শেষ করলে তুমি শুধু CSS প্রপার্টি জানা থেকে এক ধাপ এগিয়ে, একজন প্রফেশনালের মতো <strong>গোছানো, স্কেলেবল ও মেইনটেইনযোগ্য</strong> CSS লিখতে শিখবে।</p>
      `
    },
    {
      id: "10.1",
      title: "CSS ভেরিয়েবল",
      content: `
        <h3>🔹 ১০.১ CSS ভেরিয়েবল (Custom Properties)</h3>
        <p>একটা রঙ বা সাইজ যদি পুরো সাইটে বারবার ব্যবহার হয় (যেমন ব্র্যান্ড কালার), সেটা বারবার হাতে লেখার বদলে একবার একটা <strong>ভেরিয়েবলে</strong> সেভ করে সব জায়গায় ব্যবহার করা যায়। এটাই <strong>এই সাইটের নিজের CSS-এও</strong> ব্যবহার হয়েছে (<code>--blue</code>, <code>--text-muted</code> ইত্যাদি নাম মনে আছে?)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* :root মানে পুরো পেজ — এখানে ভেরিয়েবল ডিফাইন করা হয় */</span>
<span class="sel">:root</span> {
  <span class="prop">--main-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">--text-muted</span>: <span class="val">#6B7280</span>;
  <span class="prop">--radius</span>: <span class="val">12px</span>;
}

<span class="cmt">/* var() ফাংশন দিয়ে ভেরিয়েবলের মান ব্যবহার করা হয় */</span>
<span class="sel">h1</span> {
  <span class="prop">color</span>: <span class="val">var(--main-color)</span>;
}

<span class="sel">.card</span> {
  <span class="prop">border-radius</span>: <span class="val">var(--radius)</span>;
  <span class="prop">color</span>: <span class="val">var(--text-muted)</span>;
}</code></pre></div>
          <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
          <div class="preview-wrap">
            <style>:root{--demo-main:#0066CC;--demo-muted:#6B7280;--demo-radius:12px;}</style>
            <h1 style="color:var(--demo-main);font-size:20px;margin-bottom:8px;">হেডিং (ভেরিয়েবল থেকে রঙ)</h1>
            <div style="border-radius:var(--demo-radius);border:1px solid #E5E7EB;padding:12px;color:var(--demo-muted);">কার্ড (ভেরিয়েবল থেকে radius ও রঙ)</div>
          </div>
        </div>

        <p>💡 <strong>CSS ভেরিয়েবল ব্যবহারের সুবিধা:</strong></p>
        <ul>
          <li><strong>এক জায়গায় বদলালেই সব জায়গায় বদলে যায়</strong> — ব্র্যান্ড কালার বদলাতে চাইলে <code>:root</code>-এর একটা লাইন বদলালেই পুরো সাইট আপডেট হয়ে যায়</li>
          <li>নাম দেখেই বোঝা যায় রঙ/সাইজের উদ্দেশ্য কী (<code>--main-color</code> বনাম মনে না রাখা একটা Hex কোড)</li>
          <li>JavaScript দিয়েও রানটাইমে বদলানো যায় (যেমন ডার্ক মোড/লাইট মোড টগল করতে)</li>
        </ul>

        <p>⚠️ <strong>নামকরণ নিয়ম:</strong> ভেরিয়েবলের নাম সবসময় দুইটা হাইফেন (<code>--</code>) দিয়ে শুরু হয়, এবং সেগুলো ব্যবহার করতে হয় <code>var()</code> ফাংশনের ভেতরে — সরাসরি <code>color: --main-color;</code> লিখলে কাজ করবে না।</p>
      `
    },
    {
      id: "10.2",
      title: "CSS Reset ও Normalize",
      content: `
        <h3>🔹 ১০.২ CSS Reset ও Normalize</h3>
        <p>বিভিন্ন ব্রাউজারের (Chrome, Firefox, Safari) কিছু HTML ট্যাগের নিজস্ব ডিফল্ট স্টাইল আছে (যেমন <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;button&gt;</code>-এর ডিফল্ট মার্জিন/প্যাডিং) — এবং এই ডিফল্ট মান ব্রাউজারভেদে সামান্য আলাদা হতে পারে। <strong>CSS Reset</strong> এই সব ডিফল্ট স্টাইল মুছে একটা "ফাঁকা স্লেট" থেকে শুরু করার কৌশল।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* মডিউল ২ ও ৪-এ দেখা বেসিক রিসেট — প্রায় প্রতিটা প্রফেশনাল CSS ফাইলের শুরুতে থাকে */</span>
<span class="sel">*, *::before, *::after</span> {
  <span class="prop">margin</span>: <span class="val">0</span>;
  <span class="prop">padding</span>: <span class="val">0</span>;
  <span class="prop">box-sizing</span>: <span class="val">border-box</span>;
}</code></pre></div>
        </div>

        <p>💡 এই একই লাইন প্রায় প্রতিটা প্রফেশনাল CSS ফাইলের একদম শুরুতে দেখা যায়। <code>*::before, *::after</code> যোগ করা হয়েছে কারণ মডিউল ২-এ শেখা <code>::before</code>/<code>::after</code> pseudo-element গুলোও এই রিসেট মেনে চলা উচিত।</p>

        <p><strong>Reset vs Normalize — পার্থক্য:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th></th><th>Reset</th><th>Normalize</th></tr></thead>
            <tbody>
              <tr><td>পদ্ধতি</td><td>সব ডিফল্ট স্টাইল সম্পূর্ণ মুছে ফেলে</td><td>ব্রাউজারের মধ্যে অসামঞ্জস্য ঠিক করে, তবে উপযোগী ডিফল্ট রেখে দেয়</td></tr>
              <tr><td>ব্যবহার</td><td>নিজে থেকে সম্পূর্ণ কাস্টম ডিজাইন করতে চাইলে</td><td>দ্রুত শুরু করতে, ডিফল্ট লিস্ট বুলেট/হেডিং সাইজ ইত্যাদি ব্যবহারযোগ্য রাখতে চাইলে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "10.3",
      title: "নামকরণ কনভেনশন — BEM",
      content: `
        <h3>🔹 ১০.৩ নামকরণ কনভেনশন — BEM মেথডলজি</h3>
        <p>বড় প্রজেক্টে অসংখ্য class নাম ব্যবহার হয় — এলোমেলোভাবে নাম দিলে কোড বোঝা কঠিন হয়ে যায়। <strong>BEM</strong> (Block, Element, Modifier) একটা জনপ্রিয় নামকরণ পদ্ধতি, যা class নামেই বলে দেয় এলিমেন্টগুলো কীভাবে সম্পর্কিত।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অংশ</th><th>মানে</th><th>সিনট্যাক্স</th></tr></thead>
            <tbody>
              <tr><td><strong>Block</strong></td><td>স্বাধীন একটা কম্পোনেন্ট</td><td><code>.card</code></td></tr>
              <tr><td><strong>Element</strong></td><td>Block-এর ভেতরের অংশ (দুইটা আন্ডারস্কোর)</td><td><code>.card__title</code></td></tr>
              <tr><td><strong>Modifier</strong></td><td>Block/Element-এর ভিন্ন ভার্সন (দুইটা হাইফেন)</td><td><code>.card--featured</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- BEM অনুযায়ী নামকরণ করা একটা কার্ড কম্পোনেন্ট --&gt;</span>
<span class="sel">&lt;div</span> <span class="prop">class</span>=<span class="val">"card card--featured"</span><span class="sel">&gt;</span>
  <span class="sel">&lt;h3</span> <span class="prop">class</span>=<span class="val">"card__title"</span><span class="sel">&gt;</span>শিরোনাম<span class="sel">&lt;/h3&gt;</span>
  <span class="sel">&lt;p</span> <span class="prop">class</span>=<span class="val">"card__description"</span><span class="sel">&gt;</span>বর্ণনা<span class="sel">&lt;/p&gt;</span>
<span class="sel">&lt;/div&gt;</span></code></pre></div>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="sel">.card</span> { <span class="prop">padding</span>: <span class="val">16px</span>; <span class="prop">border-radius</span>: <span class="val">12px</span>; }
<span class="sel">.card__title</span> { <span class="prop">font-size</span>: <span class="val">18px</span>; }
<span class="sel">.card__description</span> { <span class="prop">color</span>: <span class="val">#6B7280</span>; }
<span class="sel">.card--featured</span> { <span class="prop">border</span>: <span class="val">2px solid #0066CC</span>; }</code></pre></div>
        </div>

        <p>💡 <strong>BEM-এর সুবিধা:</strong> শুধু class নাম দেখেই বোঝা যায় <code>.card__title</code> মানে card-এর ভেতরের title, আর <code>.card--featured</code> মানে card-এর একটা বিশেষ ভার্সন। এতে করে HTML কোর্সের মডিউল ৮-এ শেখা "অর্থবহ class নাম" এর ধারণাটাই আরও গঠনতান্ত্রিক (systematic) হয়ে ওঠে — বড় টিমে কাজ করার সময় এটা খুবই সহায়ক।</p>
      `
    },
    {
      id: "10.4",
      title: "কোড অর্গানাইজেশন",
      content: `
        <h3>🔹 ১০.৪ কোড অর্গানাইজেশন ও কমেন্ট বেস্ট প্র্যাকটিস</h3>
        <p>একটা বড় CSS ফাইল গোছানো রাখতে কিছু প্রফেশনাল অভ্যাস:</p>

        <ul>
          <li><strong>যৌক্তিক ক্রমে সাজানো:</strong> Reset → ভেরিয়েবল (:root) → সাধারণ এলিমেন্ট (body, headings) → লেআউট (header, nav, main) → কম্পোনেন্ট (card, button) → মিডিয়া কোয়েরি — এই ক্রম মেনে চলা</li>
          <li><strong>সেকশন কমেন্ট:</strong> বড় ফাইলে আলাদা সেকশন বোঝাতে বড় কমেন্ট ব্যবহার করা</li>
          <li><strong>একাধিক ফাইলে ভাগ করা:</strong> খুব বড় প্রজেক্টে এক ফাইলের বদলে <code>base.css</code>, <code>layout.css</code>, <code>components.css</code> ইত্যাদিতে ভাগ করা যায়</li>
        </ul>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ══════════════════════════════
   RESET & VARIABLES
   ══════════════════════════════ */</span>
<span class="sel">*</span> { <span class="prop">box-sizing</span>: <span class="val">border-box</span>; }

<span class="sel">:root</span> {
  <span class="prop">--main-color</span>: <span class="val">#0066CC</span>;
}

<span class="cmt">/* ══════════════════════════════
   LAYOUT
   ══════════════════════════════ */</span>
<span class="sel">header</span> { <span class="prop">display</span>: <span class="val">flex</span>; }

<span class="cmt">/* ══════════════════════════════
   COMPONENTS
   ══════════════════════════════ */</span>
<span class="sel">.card</span> { <span class="prop">border-radius</span>: <span class="val">12px</span>; }</code></pre></div>
        </div>

        <p>💡 এই ধরনের সেকশন-কমেন্ট প্যাটার্ন অনেক প্রফেশনাল CSS ফাইলেই দেখা যায় — <code>/* ── Reset & tokens ── */</code>, <code>/* ── Top bar ── */</code> এই ধরনের কমেন্ট দিয়ে ফাইলকে সহজে স্ক্যান করার মতো করে ভাগ করা।</p>
      `
    },
    {
      id: "10.5",
      title: "কমন ভুল রিক্যাপ",
      content: `
        <h3>🔹 ১০.৫ এই কোর্স জুড়ে দেখা কমন ভুলের রিক্যাপ</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ভুল</th><th>কেন সমস্যা</th><th>শেখা হয়েছিল</th></tr></thead>
            <tbody>
              <tr><td><code>box-sizing: border-box;</code> সেট না করা</td><td>padding/border যোগ হয়ে এলিমেন্ট প্রত্যাশার চেয়ে বড় হয়ে যায়</td><td>মডিউল ৪</td></tr>
              <tr><td>একই সিলেক্টর সবখানে <code>!important</code> দিয়ে override করা</td><td>Specificity-র হিসাব ভেঙে দেয়, ডিবাগ করা কঠিন করে তোলে</td><td>মডিউল ২</td></tr>
              <tr><td><code>position</code> সেট না করে <code>z-index</code> ব্যবহার</td><td>কোনো প্রভাব পড়ে না — z-index শুধু positioned এলিমেন্টে কাজ করে</td><td>মডিউল ৫</td></tr>
              <tr><td>Flexbox আইটেমে <code>margin</code> দিয়ে ফাঁকা জায়গা রাখা</td><td>শেষ আইটেমের পরেও বাড়তি জায়গা থেকে যায়</td><td>মডিউল ৬ (<code>gap</code> ব্যবহার করা উচিত)</td></tr>
              <tr><td>উলম্ব margin দুটো এলিমেন্টের যোগফল ধরে নেওয়া</td><td>Margin Collapsing-এর কারণে আসলে বড়টাই কার্যকর হয়</td><td>মডিউল ৪</td></tr>
              <tr><td>মিডিয়া কোয়েরি ছাড়া (বা viewport মেটা ট্যাগ ছাড়া) রেসপনসিভ আশা করা</td><td>viewport ছাড়া মোবাইলে পুরো ডেস্কটপ ভার্সন জুম-আউট হয়ে দেখায়</td><td>মডিউল ৮</td></tr>
              <tr><td><code>animation-fill-mode: forwards;</code> ভুলে যাওয়া</td><td>অ্যানিমেশন শেষে এলিমেন্ট আবার আগের (অদৃশ্য) অবস্থায় ফিরে যায়</td><td>মডিউল ৯</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "10.6",
      title: "ব্রাউজার DevTools পরিচিতি",
      content: `
        <h3>🔹 ১০.৬ ব্রাউজার DevTools দিয়ে CSS ডিবাগ করা</h3>
        <p>যেকোনো CSS সমস্যা সমাধানের সবচেয়ে শক্তিশালী টুল হলো ব্রাউজারের নিজস্ব <strong>Developer Tools (DevTools)</strong> — Chrome/Firefox-এ <code>F12</code> বা মাউস রাইট-ক্লিক করে "Inspect" চেপে খোলা যায়।</p>

        <ul>
          <li><strong>Elements/Inspector ট্যাব:</strong> যেকোনো এলিমেন্টে ক্লিক করলে তার সব CSS প্রপার্টি দেখা যায়, এবং লাইভ এডিট করে পরিবর্তনের ফলাফল সাথে সাথে দেখা যায় (পেজ রিলোড ছাড়াই)</li>
          <li><strong>Box Model ভিজ্যুয়ালাইজার:</strong> মডিউল ৪-এ শেখা margin/border/padding/content-এর প্রতিটা স্তর রঙিন ডায়াগ্রামে দেখায় — কোথায় সমস্যা তা বুঝতে সাহায্য করে</li>
          <li><strong>Responsive Mode:</strong> বিভিন্ন ডিভাইস সাইজে (মোবাইল/ট্যাবলেট) পেজ কেমন দেখাবে তা সিমুলেট করে দেখা যায়, আসল ফোন ছাড়াই মিডিয়া কোয়েরি টেস্ট করা যায়</li>
        </ul>

        <p>💡 <strong>বেস্ট প্র্যাকটিস:</strong> কোনো স্টাইল প্রত্যাশামতো কাজ না করলে, প্রথমে DevTools খুলে এলিমেন্টটা ইন্সপেক্ট করে দেখো — কোন CSS নিয়ম প্রয়োগ হচ্ছে, কোনটা override হয়ে গেছে (Specificity, মডিউল ২ মনে আছে?), সবকিছু এখানে স্পষ্ট দেখা যায়। এটাই একজন প্রফেশনাল ডেভেলপারের সবচেয়ে বেশি ব্যবহৃত টুল।</p>
      `
    },
    {
      id: "10.7",
      title: "সারসংক্ষেপ ও কোর্স সমাপ্তি",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🎨 CSS ভেরিয়েবল (<code>:root { --name: value; }</code> + <code>var(--name)</code>) দিয়ে রঙ/সাইজ এক জায়গা থেকে পুরো সাইটে নিয়ন্ত্রণ করা যায়।</div>
          <div class="takeaway-item">🧹 CSS Reset (<code>* { margin: 0; padding: 0; box-sizing: border-box; }</code>) ব্রাউজার-ভেদে অসামঞ্জস্য দূর করে একটা পরিষ্কার শুরু দেয়।</div>
          <div class="takeaway-item">🏷️ BEM (<code>.block__element--modifier</code>) নামকরণ পদ্ধতি বড় প্রজেক্টে কোড পড়া ও মেইনটেইন করা সহজ করে।</div>
          <div class="takeaway-item">📂 যৌক্তিক ক্রমে (Reset → Variables → Layout → Components → Media Queries) ও সেকশন-কমেন্ট দিয়ে CSS ফাইল গোছানো রাখা প্রফেশনাল অভ্যাস।</div>
          <div class="takeaway-item">🔍 ব্রাউজার DevTools (F12) দিয়ে যেকোনো CSS সমস্যা লাইভ দেখে, এডিট করে, এবং রেসপনসিভ মোডে টেস্ট করে সমাধান করা যায়।</div>
        </div>

        <h3>🎉 অভিনন্দন!</h3>
        <p>তুমি সম্পূর্ণ <strong>Banglay CSS</strong> কোর্সের ১০টা মডিউল শেষ করে ফেলেছ — বেসিক সিনট্যাক্স থেকে শুরু করে সিলেক্টর, বক্স মডেল, Flexbox, Grid, রেসপনসিভ ডিজাইন, অ্যানিমেশন ও প্রফেশনাল বেস্ট প্র্যাকটিস পর্যন্ত!</p>
        <p>HTML দিয়ে কাঠামো, আর এখন CSS দিয়ে ডিজাইন — দুটো মিলিয়ে এখন তুমি যেকোনো প্রফেশনাল-মানের ওয়েব পেজ বানাতে সক্ষম। এখন সময় হাতে-কলমে প্র্যাকটিস করার। <strong>Amazing CSS Projects</strong> সেকশনে গিয়ে যা শিখেছ তা দিয়ে বাস্তব প্রজেক্ট বানানো শুরু করো।</p>

        <a class="btn-next-module" href="projects.html">
          🚀 Amazing CSS Projects শুরু করো
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
};
