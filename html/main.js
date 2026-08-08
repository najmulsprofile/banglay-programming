/**
 * Banglay Python — main.js
 * Author  : Md Najmul Hosen
 * GitHub  : https://github.com/najmulsprofile
 * LinkedIn: https://linkedin.com/in/najmulsprofile
 *
 * এই ফাইলে HTML কোর্সের সব মডিউল মেটাডাটা ও লেসন কনটেন্ট আছে।
 * main.js (Python কোর্স) থেকে সম্পূর্ণ আলাদা — যাতে দুই কোর্স
 * একসাথে থাকলেও একে অপরের ডাটাকে ওভাররাইট না করে।
 *
 * নামকরণ প্যাটার্ন:
 *   HTML_MODULES  → main.js এর MODULES এর সমতুল্য
 *   HTML_LESSONS  → main.js এর LESSONS এর সমতুল্য
 */

/* ─────────────────────────────────────────────────────────────
   MODULE METADATA
   মোট ১০টি মডিউল — বেসিক থেকে অ্যাডভান্সড HTML পর্যন্ত।
   বর্তমানে মডিউল ১ সম্পূর্ণ লেখা আছে, বাকিগুলো ধাপে ধাপে যোগ হবে।
───────────────────────────────────────────────────────────── */
const HTML_MODULES = [
  { id: 1,  title: "HTML পরিচিতি ও বেসিক স্ট্রাকচার",        icon: "🌐" },
  { id: 2,  title: "টেক্সট, হেডিং ও লিস্ট",                    icon: "📝" },
  { id: 3,  title: "লিংক ও নেভিগেশন",                          icon: "🔗" },
  { id: 4,  title: "ইমেজ ও মিডিয়া",                            icon: "🖼️" },
  { id: 5,  title: "টেবিল",                                     icon: "📊" },
  { id: 6,  title: "ফর্ম ও ইনপুট",                              icon: "📋" },
  { id: 7,  title: "সিমান্টিক HTML5",                           icon: "🏛️" },
  { id: 8,  title: "div, span ও লেআউট বেসিক্স",                icon: "📐" },
  { id: 9,  title: "HTML5 নতুন ফিচার",                          icon: "⚡" },
  { id: 10, title: "অ্যাডভান্সড টপিক ও বেস্ট প্র্যাকটিস",       icon: "🚀" },
];

/* ─────────────────────────────────────────────────────────────
   LESSON SECTIONS
   প্রতিটা সেকশন = { id, title, content (HTML string) }
   মডিউল ১ সম্পূর্ণ লেখা; ২-১০ পরের সেশনে যোগ হবে।
───────────────────────────────────────────────────────────── */
const HTML_LESSONS = {

  /* ══════════════════════════════════════════════════════════
     MODULE 1 — HTML পরিচিতি ও বেসিক স্ট্রাকচার (complete)
  ══════════════════════════════════════════════════════════ */
  1: [
    {
      id: "1.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🌐 মডিউল ১: HTML পরিচিতি ও বেসিক স্ট্রাকচার</h2>

        <h3>🔹 ১.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>HTML কী এবং ওয়েবসাইটে এর ভূমিকা কী</li>
          <li>প্রথম HTML ফাইল তৈরি করে ব্রাউজারে চালানো</li>
          <li>HTML ডকুমেন্টের বেসিক স্ট্রাকচার (doctype, html, head, body)</li>
          <li>ট্যাগ, এলিমেন্ট ও নেস্টিং কী</li>
          <li>অ্যাট্রিবিউট (attribute) কীভাবে কাজ করে</li>
          <li>কোডে কমেন্ট লেখার নিয়ম</li>
        </ul>
        <p><strong>নোট:</strong> HTML কোনো প্রোগ্রামিং ভাষা নয় — এটি একটি <strong>মার্কআপ ল্যাঙ্গুয়েজ (Markup Language)</strong>, যা দিয়ে ওয়েব পেজের গঠন (structure) তৈরি করা হয়। তাই এখানে লুপ, ভেরিয়েবল বা কন্ডিশনাল নেই — শুধু ট্যাগ দিয়ে কনটেন্ট সাজানো হয়।</p>
      `
    },
    {
      id: "1.1",
      title: "HTML কী এবং কেন শিখব?",
      content: `
        <h3>🔹 ১.১ HTML কী? (What is HTML?)</h3>
        <p><strong>HTML</strong> মানে <strong>HyperText Markup Language</strong>। এটি ওয়েব পেজের কঙ্কাল বা স্ট্রাকচার তৈরি করে — কোন টেক্সট হেডিং হবে, কোনটা প্যারাগ্রাফ, কোথায় ছবি বসবে, কোথায় বাটন থাকবে — সবকিছু HTML দিয়েই বলে দেওয়া হয়।</p>

        <p><strong>সহজ ভাষায়:</strong> একটি বাড়ি বানাতে গেলে যেমন আগে কাঠামো (ইট, রড, ছাদ) লাগে, ঠিক তেমনি একটা ওয়েবসাইট বানাতে গেলে আগে HTML দিয়ে কাঠামো তৈরি করতে হয়। পরে CSS দিয়ে সাজানো হয় (রং, ডিজাইন) আর JavaScript দিয়ে ইন্টারঅ্যাকটিভ (কার্যকরী) বানানো হয়।</p>

        <p><strong>ওয়েবের তিনটি স্তম্ভ:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr><th>ভাষা</th><th>কাজ</th></tr>
            </thead>
            <tbody>
              <tr><td>HTML</td><td>কাঠামো / কনটেন্ট (Structure)</td></tr>
              <tr><td>CSS</td><td>ডিজাইন / সাজসজ্জা (Style)</td></tr>
              <tr><td>JavaScript</td><td>কার্যকারিতা / ইন্টারঅ্যাকশন (Behavior)</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>কেন HTML শিখব?</strong></p>
        <ul>
          <li>ওয়েব ডেভেলপমেন্টের প্রথম ও সবচেয়ে জরুরি ধাপ</li>
          <li>কোনো এক্সট্রা সফটওয়্যার বা কম্পাইলার লাগে না — শুধু ব্রাউজার থাকলেই চলে</li>
          <li>CSS, JavaScript, React — সবকিছুর ভিত্তি এই HTML</li>
        </ul>
      `
    },
    {
      id: "1.2",
      title: "প্রথম HTML ফাইল তৈরি",
      content: `
        <h3>🔹 ১.২ প্রথম HTML ফাইল তৈরি করা</h3>
        <p>HTML ফাইল চালাতে পাইথনের মতো কোনো ইন্টারপ্রেটার লাগে না — শুধু একটা <code>.html</code> এক্সটেনশনের ফাইল বানিয়ে ব্রাউজারে ওপেন করলেই হয়ে যায়।</p>

        <p><strong>ধাপ ১:</strong> যেকোনো টেক্সট এডিটরে (VS Code) একটা ফাইল বানাও — নাম দাও <code>index.html</code></p>
        <p><strong>ধাপ ২:</strong> নিচের কোডটা লিখে সেভ করো</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html&gt;</span>
  <span class="kw">&lt;head&gt;</span>
    <span class="kw">&lt;title&gt;</span>আমার প্রথম পেজ<span class="kw">&lt;/title&gt;</span>
  <span class="kw">&lt;/head&gt;</span>
  <span class="kw">&lt;body&gt;</span>
    <span class="kw">&lt;h1&gt;</span>স্বাগতম, নাজমুল!<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>এটাই আমার প্রথম HTML পেজ।<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
        </div>

        <p><strong>ধাপ ৩:</strong> ফাইলটির ওপর ডাবল-ক্লিক করলেই ব্রাউজারে খুলে যাবে। নিচে দেখো ব্রাউজারে এটা কেমন দেখাবে:</p>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots">
              <span class="browser-dot red"></span>
              <span class="browser-dot yellow"></span>
              <span class="browser-dot green"></span>
            </div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <h1 style="font-size:22px;margin-bottom:8px;">স্বাগতম, নাজমুল!</h1>
            <p style="font-size:14px;color:#374151;">এটাই আমার প্রথম HTML পেজ।</p>
          </div>
        </div>

        <p>💡 লক্ষ করো: কোড এডিটরে আমরা যা লিখেছি (ট্যাগসহ), ব্রাউজার সেই ট্যাগগুলো <strong>দেখায় না</strong> — বরং সেগুলোর নির্দেশনা অনুযায়ী কনটেন্ট সাজিয়ে দেখায়। এটাই HTML রেন্ডারিংয়ের মূল ধারণা।</p>
      `
    },
    {
      id: "1.3",
      title: "ডকুমেন্টের বেসিক স্ট্রাকচার",
      content: `
        <h3>🔹 ১.৩ HTML ডকুমেন্টের বেসিক স্ট্রাকচার</h3>
        <p>প্রতিটা HTML ফাইলের একটা নির্দিষ্ট কাঠামো (structure) থাকে। নিচে প্রতিটা অংশের কাজ ব্যাখ্যা করা হলো:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ব্রাউজারকে বলে দেয় এটা HTML5 ডকুমেন্ট --&gt;</span>
<span class="kw">&lt;!DOCTYPE html&gt;</span>

<span class="cmt">&lt;!-- পুরো পেজের রুট এলিমেন্ট, ভাষা বাংলা সেট করা --&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>

  <span class="cmt">&lt;!-- head এ থাকে মেটাডাটা — ইউজার এটা দেখে না --&gt;</span>
  <span class="kw">&lt;head&gt;</span>
    <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;title&gt;</span>আমার ওয়েবসাইট<span class="kw">&lt;/title&gt;</span>
  <span class="kw">&lt;/head&gt;</span>

  <span class="cmt">&lt;!-- body তে থাকে সব দৃশ্যমান কনটেন্ট --&gt;</span>
  <span class="kw">&lt;body&gt;</span>
    <span class="kw">&lt;h1&gt;</span>হেডিং<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>প্যারাগ্রাফ টেক্সট<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/body&gt;</span>

<span class="kw">&lt;/html&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr><th>অংশ</th><th>কাজ</th></tr>
            </thead>
            <tbody>
              <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>ব্রাউজারকে জানায় এটি HTML5 ডকুমেন্ট (সবসময় প্রথম লাইনে থাকে)</td></tr>
              <tr><td><code>&lt;html&gt;</code></td><td>পুরো পেজের রুট / মূল ট্যাগ, বাকি সব কিছু এর ভেতরে থাকে</td></tr>
              <tr><td><code>&lt;head&gt;</code></td><td>মেটাডাটা রাখার জায়গা — title, charset, CSS লিংক ইত্যাদি (স্ক্রিনে দেখা যায় না)</td></tr>
              <tr><td><code>&lt;title&gt;</code></td><td>ব্রাউজার ট্যাবের নামটা এখান থেকে আসে</td></tr>
              <tr><td><code>&lt;meta charset="UTF-8"&gt;</code></td><td>বাংলাসহ যেকোনো ভাষার ক্যারেক্টার সঠিকভাবে দেখাতে সাহায্য করে</td></tr>
              <tr><td><code>&lt;body&gt;</code></td><td>এখানে যা লেখা হয়, ব্রাউজারে সেটাই দেখা যায়</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>⚠️ সতর্কতা:</strong> <code>&lt;meta charset="UTF-8"&gt;</code> না দিলে বাংলা টেক্সট ব্রাউজারে ভাঙা-ভাঙা অক্ষর (garbled text) হিসেবে দেখাতে পারে। তাই প্রতিটা ফাইলের <code>&lt;head&gt;</code> এ এটা রাখা বাধ্যতামূলক অভ্যাস হিসেবে গড়ে তোলা উচিত।</p>
      `
    },
    {
      id: "1.4",
      title: "ট্যাগ ও এলিমেন্ট",
      content: `
        <h3>🔹 ১.৪ ট্যাগ ও এলিমেন্ট (Tags & Elements)</h3>
        <p><strong>ট্যাগ (Tag)</strong> হলো angle bracket <code>&lt; &gt;</code> দিয়ে ঘেরা কিওয়ার্ড, যেমন <code>&lt;p&gt;</code>। বেশিরভাগ ট্যাগের একটা <strong>ওপেনিং ট্যাগ</strong> ও একটা <strong>ক্লোজিং ট্যাগ</strong> থাকে — ক্লোজিং ট্যাগে একটা এক্সট্রা <code>/</code> থাকে।</p>

        <p>ওপেনিং ট্যাগ + কনটেন্ট + ক্লোজিং ট্যাগ মিলে একটা <strong>এলিমেন্ট (Element)</strong> তৈরি হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>এটা একটা প্যারাগ্রাফ<span class="kw">&lt;/p&gt;</span>
<span class="cmt">&lt;!--   ↑              ↑        ↑
     ওপেনিং টেক্সট       ক্লোজিং
     ট্যাগ                ট্যাগ  --&gt;</span></code></pre></div>
        </div>

        <p><strong>নেস্টিং (Nesting):</strong> একটা এলিমেন্টের ভেতরে আরেকটা এলিমেন্ট রাখা যায় — একেই নেস্টিং বলে। নেস্টেড ট্যাগগুলো অবশ্যই সঠিক ক্রমে বন্ধ (close) করতে হয়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ✅ সঠিক নেস্টিং --&gt;</span>
<span class="kw">&lt;p&gt;</span>আমি <span class="kw">&lt;strong&gt;</span>খুব খুশি<span class="kw">&lt;/strong&gt;</span> আজকে<span class="kw">&lt;/p&gt;</span>

<span class="cmt">&lt;!-- ❌ ভুল নেস্টিং — ক্রম উল্টো --&gt;</span>
<span class="kw">&lt;p&gt;</span>আমি <span class="kw">&lt;strong&gt;</span>খুব খুশি<span class="kw">&lt;/p&gt;</span>আজকে<span class="kw">&lt;/strong&gt;</span></code></pre></div>
        </div>

        <p><strong>ভয়েড এলিমেন্ট (Void Element):</strong> কিছু ট্যাগের কোনো কনটেন্ট বা ক্লোজিং ট্যাগ থাকে না, কারণ এগুলো নিজে থেকেই সম্পূর্ণ — যেমন লাইন ব্রেক বা ছবি।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;br&gt;</span>       <span class="cmt">&lt;!-- লাইন ব্রেক, কোনো ক্লোজিং ট্যাগ নেই --&gt;</span>
<span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"cat.jpg"</span> <span class="fn">alt</span>=<span class="str">"বিড়াল"</span><span class="kw">&gt;</span>
<span class="kw">&lt;hr&gt;</span>       <span class="cmt">&lt;!-- অনুভূমিক দাগ --&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "1.5",
      title: "অ্যাট্রিবিউট",
      content: `
        <h3>🔹 ১.৫ অ্যাট্রিবিউট (Attributes)</h3>
        <p><strong>অ্যাট্রিবিউট</strong> হলো একটা ট্যাগের এক্সট্রা তথ্য, যা ওপেনিং ট্যাগের ভেতরে <code>নাম="মান"</code> ফরম্যাটে লেখা হয়। এটা এলিমেন্টের আচরণ বা বৈশিষ্ট্য নিয়ন্ত্রণ করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://example.com"</span> <span class="fn">target</span>=<span class="str">"_blank"</span><span class="kw">&gt;</span>ভিজিট করো<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>

        <p>এখানে <code>href</code> এবং <code>target</code> হলো অ্যাট্রিবিউট — <code>href</code> বলে দিচ্ছে লিংকটা কোথায় যাবে, আর <code>target="_blank"</code> বলছে নতুন ট্যাবে খুলতে।</p>

        <p><strong>সবচেয়ে বেশি ব্যবহৃত কমন অ্যাট্রিবিউট:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr>
            </thead>
            <tbody>
              <tr><td><code>id</code></td><td>এলিমেন্টের ইউনিক নাম দেয় (একটা পেজে একবারই ব্যবহার হয়)</td></tr>
              <tr><td><code>class</code></td><td>CSS/JS দিয়ে গ্রুপ করে স্টাইল করার জন্য (একাধিকবার ব্যবহার করা যায়)</td></tr>
              <tr><td><code>src</code></td><td>ছবি/ভিডিওর সোর্স ফাইলের পাথ</td></tr>
              <tr><td><code>href</code></td><td>লিংকের গন্তব্য ঠিকানা</td></tr>
              <tr><td><code>alt</code></td><td>ছবি লোড না হলে বিকল্প টেক্সট দেখায়</td></tr>
              <tr><td><code>style</code></td><td>ইনলাইন CSS স্টাইল সরাসরি ট্যাগে বসানো</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p</span> <span class="fn">id</span>=<span class="str">"intro"</span> <span class="fn">class</span>=<span class="str">"highlight"</span><span class="kw">&gt;</span>এটা একটা বিশেষ প্যারাগ্রাফ<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> অ্যাট্রিবিউটের মান সবসময় কোটেশন <code>" "</code> এর ভেতরে লিখতে হয়। কোটেশন ছাড়া লিখলে একাধিক শব্দের মান (যেমন <code>class="my class"</code>) ভুলভাবে পড়া হতে পারে।</p>
      `
    },
    {
      id: "1.6",
      title: "কমেন্ট ও সারাংশ",
      content: `
        <h3>🔹 ১.৬ HTML-এ কমেন্ট লেখা</h3>
        <p>কমেন্ট হলো এমন লেখা যা ব্রাউজার স্ক্রিনে দেখায় না, শুধু কোড বোঝার জন্য ডেভেলপাররা লেখে। HTML-এ কমেন্ট লেখার ফরম্যাট:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- এটা একটা কমেন্ট, ব্রাউজারে দেখা যাবে না --&gt;</span>
<span class="kw">&lt;h1&gt;</span>হেডার সেকশন<span class="kw">&lt;/h1&gt;</span>

<span class="cmt">&lt;!-- নিচের সেকশনটা এখনো বানানো হয়নি --&gt;</span>
<span class="cmt">&lt;!-- &lt;section&gt;...&lt;/section&gt; --&gt;</span></code></pre></div>
        </div>

        <p>কমেন্ট ব্যবহার করা হয়:</p>
        <ul>
          <li>কোডের কোন অংশ কী কাজ করছে তা মনে রাখতে</li>
          <li>টিমের অন্য মেম্বারদের বোঝানোর জন্য</li>
          <li>সাময়িকভাবে কোনো কোড অংশ বন্ধ (disable) রাখতে</li>
        </ul>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🌐 <code>HTML</code> ওয়েব পেজের <strong>কাঠামো</strong> তৈরি করে — ডিজাইনের কাজ CSS-এর, কার্যকারিতার কাজ JavaScript-এর।</div>
          <div class="takeaway-item">📄 প্রতিটা HTML ফাইল শুরু হয় <code>&lt;!DOCTYPE html&gt;</code> দিয়ে, তারপর <code>&lt;html&gt;</code> এর ভেতরে <code>&lt;head&gt;</code> ও <code>&lt;body&gt;</code> থাকে।</div>
          <div class="takeaway-item">🏷️ ট্যাগ + কনটেন্ট + ক্লোজিং ট্যাগ মিলে একটা <strong>এলিমেন্ট</strong> তৈরি হয়; ভয়েড এলিমেন্টের ক্লোজিং ট্যাগ লাগে না (<code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>)।</div>
          <div class="takeaway-item">⚙️ <strong>অ্যাট্রিবিউট</strong> দিয়ে ট্যাগে এক্সট্রা তথ্য যোগ করা হয় — সবসময় কোটেশনের ভেতরে মান লিখতে হয়।</div>
          <div class="takeaway-item">💬 <code>&lt;!-- ... --&gt;</code> দিয়ে কমেন্ট লেখা যায়, যা ব্রাউজারে দেখা যায় না।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=2&section=2.0">
          পরের মডিউল: টেক্সট, হেডিং ও লিস্ট
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],

  /* ══════════════════════════════════════════════════════════
     MODULE 2-10 — শীঘ্রই আসছে (পরবর্তী সেশনে যোগ করা হবে)
  ══════════════════════════════════════════════════════════ */
  2: [
    {
      id: "2.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📝 মডিউল ২: টেক্সট, হেডিং ও লিস্ট</h2>

        <h3>🔹 ২.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>হেডিং ট্যাগ (<code>&lt;h1&gt;</code> থেকে <code>&lt;h6&gt;</code>) ও তাদের সঠিক ব্যবহার</li>
          <li>প্যারাগ্রাফ ও টেক্সট ফরম্যাটিং ট্যাগ (bold, italic, underline ইত্যাদি)</li>
          <li>লাইন ব্রেক ও হরাইজন্টাল লাইন</li>
          <li>আনঅর্ডারড লিস্ট (bullet points)</li>
          <li>অর্ডারড লিস্ট (নাম্বার দেওয়া লিস্ট)</li>
          <li>নেস্টেড লিস্ট ও ডেসক্রিপশন লিস্ট</li>
        </ul>
        <p>মডিউল ১-এ আমরা শিখেছি HTML-এর কাঠামো কেমন হয়। এই মডিউলে আমরা শিখব সেই কাঠামোর ভেতরে <strong>লেখা (text content)</strong> কীভাবে সুন্দরভাবে সাজানো যায় — যেটা যেকোনো ওয়েব পেজের সবচেয়ে বেশি ব্যবহৃত অংশ।</p>
      `
    },
    {
      id: "2.1",
      title: "হেডিং ট্যাগ",
      content: `
        <h3>🔹 ২.১ হেডিং ট্যাগ (Heading Tags)</h3>
        <p>হেডিং দিয়ে পেজের শিরোনাম বা সেকশনের টাইটেল বোঝানো হয়। HTML-এ ৬ ধরনের হেডিং ট্যাগ আছে — <code>&lt;h1&gt;</code> সবচেয়ে বড় ও গুরুত্বপূর্ণ, <code>&lt;h6&gt;</code> সবচেয়ে ছোট।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;h1&gt;</span>এটা h1 — সবচেয়ে বড় হেডিং<span class="kw">&lt;/h1&gt;</span>
<span class="kw">&lt;h2&gt;</span>এটা h2<span class="kw">&lt;/h2&gt;</span>
<span class="kw">&lt;h3&gt;</span>এটা h3<span class="kw">&lt;/h3&gt;</span>
<span class="kw">&lt;h4&gt;</span>এটা h4<span class="kw">&lt;/h4&gt;</span>
<span class="kw">&lt;h5&gt;</span>এটা h5<span class="kw">&lt;/h5&gt;</span>
<span class="kw">&lt;h6&gt;</span>এটা h6 — সবচেয়ে ছোট হেডিং<span class="kw">&lt;/h6&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <h1 style="font-size:26px;margin-bottom:6px;">এটা h1 — সবচেয়ে বড় হেডিং</h1>
            <h2 style="font-size:22px;margin-bottom:6px;">এটা h2</h2>
            <h3 style="font-size:18px;margin-bottom:6px;">এটা h3</h3>
            <h4 style="font-size:16px;margin-bottom:6px;">এটা h4</h4>
            <h5 style="font-size:14px;margin-bottom:6px;">এটা h5</h5>
            <h6 style="font-size:12px;color:#6B7280;">এটা h6 — সবচেয়ে ছোট হেডিং</h6>
          </div>
        </div>

        <p>⚠️ <strong>সতর্কতা — কমন ভুল:</strong> হেডিং ট্যাগ শুধু <em>লেখা বড় দেখানোর জন্য</em> ব্যবহার করা উচিত না। এগুলোর আসল কাজ পেজের কনটেন্টকে ক্রমানুসারে সাজানো (যেমন বইয়ের অধ্যায়-উপঅধ্যায়ের মতো)। প্রতি পেজে সাধারণত একটাই <code>&lt;h1&gt;</code> থাকা উচিত — এটাই পেজের মূল শিরোনাম। শুধু লেখা বড় দেখাতে চাইলে CSS-এর <code>font-size</code> ব্যবহার করা উচিত, যেটা পরের মডিউলে শিখবে।</p>
      `
    },
    {
      id: "2.2",
      title: "প্যারাগ্রাফ ও টেক্সট ফরম্যাটিং",
      content: `
        <h3>🔹 ২.২ প্যারাগ্রাফ ও টেক্সট ফরম্যাটিং ট্যাগ</h3>
        <p><code>&lt;p&gt;</code> ট্যাগ দিয়ে সাধারণ প্যারাগ্রাফ লেখা হয়। এর ভেতরে ছোট ছোট ট্যাগ বসিয়ে নির্দিষ্ট শব্দ বোল্ড, ইটালিক বা আন্ডারলাইন করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>
  এই শব্দটা <span class="kw">&lt;strong&gt;</span>গুরুত্বপূর্ণ<span class="kw">&lt;/strong&gt;</span> (বোল্ড),
  আর এটা <span class="kw">&lt;em&gt;</span>জোর দেওয়া<span class="kw">&lt;/em&gt;</span> (ইটালিক)।
  এখানে একটা <span class="kw">&lt;mark&gt;</span>হাইলাইট করা লেখা<span class="kw">&lt;/mark&gt;</span> আছে,
  আর এখানে <span class="kw">&lt;u&gt;</span>আন্ডারলাইন<span class="kw">&lt;/u&gt;</span> করা লেখা।
<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <p style="font-size:14px;line-height:1.7;">এই শব্দটা <strong>গুরুত্বপূর্ণ</strong> (বোল্ড), আর এটা <em>জোর দেওয়া</em> (ইটালিক)। এখানে একটা <mark>হাইলাইট করা লেখা</mark> আছে, আর এখানে <u>আন্ডারলাইন</u> করা লেখা।</p>
          </div>
        </div>

        <p><strong>প্রায়ই ব্যবহৃত টেক্সট ফরম্যাটিং ট্যাগসমূহ:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr><th>ট্যাগ</th><th>কাজ</th></tr>
            </thead>
            <tbody>
              <tr><td><code>&lt;strong&gt;</code></td><td>বোল্ড + অর্থগতভাবে গুরুত্বপূর্ণ</td></tr>
              <tr><td><code>&lt;b&gt;</code></td><td>শুধু বোল্ড (কোনো এক্সট্রা গুরুত্ব নেই)</td></tr>
              <tr><td><code>&lt;em&gt;</code></td><td>ইটালিক + জোর দেওয়া অর্থ</td></tr>
              <tr><td><code>&lt;i&gt;</code></td><td>শুধু ইটালিক (যেমন বইয়ের নাম, টার্ম)</td></tr>
              <tr><td><code>&lt;u&gt;</code></td><td>আন্ডারলাইন</td></tr>
              <tr><td><code>&lt;mark&gt;</code></td><td>হলুদ হাইলাইট</td></tr>
              <tr><td><code>&lt;small&gt;</code></td><td>ছোট আকারের টেক্সট (যেমন ডিসক্লেইমার)</td></tr>
              <tr><td><code>&lt;sub&gt;</code> / <code>&lt;sup&gt;</code></td><td>সাবস্ক্রিপ্ট (H<sub>2</sub>O) / সুপারস্ক্রিপ্ট (x<sup>2</sup>)</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>লাইন ব্রেক ও হরাইজন্টাল লাইন:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>
  প্রথম লাইন<span class="kw">&lt;br&gt;</span>
  দ্বিতীয় লাইন (br দিয়ে নতুন লাইনে গেছে)
<span class="kw">&lt;/p&gt;</span>

<span class="kw">&lt;hr&gt;</span> <span class="cmt">&lt;!-- অনুভূমিক দাগ, সেকশন আলাদা করতে ব্যবহার হয় --&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "2.3",
      title: "আনঅর্ডারড লিস্ট",
      content: `
        <h3>🔹 ২.৩ আনঅর্ডারড লিস্ট (Unordered List)</h3>
        <p>যখন কোনো লিস্টের আইটেমগুলোর ক্রম গুরুত্বপূর্ণ না (যেমন শপিং লিস্ট, ফিচার লিস্ট), তখন <strong>bullet point</strong> দিয়ে <code>&lt;ul&gt;</code> (unordered list) ব্যবহার করা হয়। প্রতিটা আইটেম <code>&lt;li&gt;</code> (list item) দিয়ে লেখা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;h3&gt;</span>আমার প্রিয় ফল<span class="kw">&lt;/h3&gt;</span>
<span class="kw">&lt;ul&gt;</span>
  <span class="kw">&lt;li&gt;</span>আম<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>কাঁঠাল<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>লিচু<span class="kw">&lt;/li&gt;</span>
<span class="kw">&lt;/ul&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <h3 style="font-size:16px;margin-bottom:8px;">আমার প্রিয় ফল</h3>
            <ul style="margin-left:20px;font-size:14px;line-height:1.8;">
              <li>আম</li>
              <li>কাঁঠাল</li>
              <li>লিচু</li>
            </ul>
          </div>
        </div>

        <p>💡 লক্ষ করো: <code>&lt;li&gt;</code> ট্যাগ সবসময় <code>&lt;ul&gt;</code> বা <code>&lt;ol&gt;</code> এর ভেতরেই থাকতে হয় — একা <code>&lt;li&gt;</code> ব্যবহার করা যায় না।</p>
      `
    },
    {
      id: "2.4",
      title: "অর্ডারড লিস্ট",
      content: `
        <h3>🔹 ২.৪ অর্ডারড লিস্ট (Ordered List)</h3>
        <p>যখন লিস্টের আইটেমগুলোর ক্রম গুরুত্বপূর্ণ (যেমন রেসিপির ধাপ, র‍্যাংকিং), তখন নাম্বার দেওয়া <code>&lt;ol&gt;</code> (ordered list) ব্যবহার করা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;h3&gt;</span>চা বানানোর ধাপ<span class="kw">&lt;/h3&gt;</span>
<span class="kw">&lt;ol&gt;</span>
  <span class="kw">&lt;li&gt;</span>পানি ফুটাও<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>চা পাতা দাও<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>দুধ ও চিনি মেশাও<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>ছেঁকে কাপে ঢালো<span class="kw">&lt;/li&gt;</span>
<span class="kw">&lt;/ol&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <h3 style="font-size:16px;margin-bottom:8px;">চা বানানোর ধাপ</h3>
            <ol style="margin-left:20px;font-size:14px;line-height:1.8;">
              <li>পানি ফুটাও</li>
              <li>চা পাতা দাও</li>
              <li>দুধ ও চিনি মেশাও</li>
              <li>ছেঁকে কাপে ঢালো</li>
            </ol>
          </div>
        </div>

        <p><strong>কাস্টম নাম্বারিং:</strong> <code>&lt;ol&gt;</code> এর <code>type</code> ও <code>start</code> অ্যাট্রিবিউট দিয়ে নাম্বারিং স্টাইল বদলানো যায়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;ol</span> <span class="fn">type</span>=<span class="str">"A"</span> <span class="fn">start</span>=<span class="str">"3"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;li&gt;</span>C থেকে শুরু হবে<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>D<span class="kw">&lt;/li&gt;</span>
<span class="kw">&lt;/ol&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>type মান</th><th>ফলাফল</th></tr></thead>
            <tbody>
              <tr><td><code>1</code> (ডিফল্ট)</td><td>1, 2, 3...</td></tr>
              <tr><td><code>A</code></td><td>A, B, C...</td></tr>
              <tr><td><code>a</code></td><td>a, b, c...</td></tr>
              <tr><td><code>I</code></td><td>I, II, III...</td></tr>
              <tr><td><code>i</code></td><td>i, ii, iii...</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "2.5",
      title: "নেস্টেড লিস্ট ও ডেসক্রিপশন লিস্ট",
      content: `
        <h3>🔹 ২.৫ নেস্টেড লিস্ট (Nested List)</h3>
        <p>একটা <code>&lt;li&gt;</code> এর ভেতরে আরেকটা পুরো লিস্ট বসিয়ে সাব-লিস্ট (sub-list) বানানো যায় — একে নেস্টেড লিস্ট বলে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;ul&gt;</span>
  <span class="kw">&lt;li&gt;</span>ফ্রন্টএন্ড
    <span class="kw">&lt;ul&gt;</span>
      <span class="kw">&lt;li&gt;</span>HTML<span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;</span>CSS<span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;</span>JavaScript<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;/ul&gt;</span>
  <span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;li&gt;</span>ব্যাকএন্ড
    <span class="kw">&lt;ul&gt;</span>
      <span class="kw">&lt;li&gt;</span>Python<span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;</span>Node.js<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;/ul&gt;</span>
  <span class="kw">&lt;/li&gt;</span>
<span class="kw">&lt;/ul&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <ul style="margin-left:20px;font-size:14px;line-height:1.8;">
              <li>ফ্রন্টএন্ড
                <ul style="margin-left:20px;">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>ব্যাকএন্ড
                <ul style="margin-left:20px;">
                  <li>Python</li>
                  <li>Node.js</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <h3>🔹 ডেসক্রিপশন লিস্ট (Description List)</h3>
        <p>কোনো টার্ম ও তার সংজ্ঞা/বিবরণ দেখাতে <code>&lt;dl&gt;</code> (description list) ব্যবহার হয় — যেমন অভিধান বা FAQ। <code>&lt;dt&gt;</code> = টার্ম, <code>&lt;dd&gt;</code> = তার বিবরণ।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;dl&gt;</span>
  <span class="kw">&lt;dt&gt;</span>HTML<span class="kw">&lt;/dt&gt;</span>
  <span class="kw">&lt;dd&gt;</span>ওয়েব পেজের কাঠামো তৈরির মার্কআপ ভাষা<span class="kw">&lt;/dd&gt;</span>

  <span class="kw">&lt;dt&gt;</span>CSS<span class="kw">&lt;/dt&gt;</span>
  <span class="kw">&lt;dd&gt;</span>ওয়েব পেজ সাজানোর স্টাইল ভাষা<span class="kw">&lt;/dd&gt;</span>
<span class="kw">&lt;/dl&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "2.6",
      title: "সারসংক্ষেপ",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔠 <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> দিয়ে কনটেন্টের ক্রমানুসারে গঠন তৈরি হয় — প্রতি পেজে একটাই <code>&lt;h1&gt;</code> রাখাই ভালো অভ্যাস।</div>
          <div class="takeaway-item">✍️ <code>&lt;strong&gt;</code>/<code>&lt;b&gt;</code> বোল্ডের জন্য, <code>&lt;em&gt;</code>/<code>&lt;i&gt;</code> ইটালিকের জন্য, <code>&lt;mark&gt;</code> হাইলাইটের জন্য।</div>
          <div class="takeaway-item">➖ <code>&lt;br&gt;</code> লাইন ব্রেক করে, <code>&lt;hr&gt;</code> অনুভূমিক দাগ দিয়ে সেকশন আলাদা করে।</div>
          <div class="takeaway-item">🔵 ক্রম গুরুত্বপূর্ণ না হলে <code>&lt;ul&gt;</code> (bullet), ক্রম গুরুত্বপূর্ণ হলে <code>&lt;ol&gt;</code> (নাম্বার) ব্যবহার করো।</div>
          <div class="takeaway-item">🔁 <code>&lt;li&gt;</code> এর ভেতরে আরেকটা <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> বসিয়ে নেস্টেড লিস্ট বানানো যায়।</div>
          <div class="takeaway-item">📖 টার্ম ও তার বিবরণ দেখাতে <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code> ব্যবহার হয়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=3&section=3.0">
          পরের মডিউল: লিংক ও নেভিগেশন
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
        <h2>🔗 মডিউল ৩: লিংক ও নেভিগেশন</h2>

        <h3>🔹 ৩.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>&lt;a&gt;</code> ট্যাগ দিয়ে লিংক তৈরি</li>
          <li>Absolute ও Relative লিংকের পার্থক্য</li>
          <li>নতুন ট্যাবে লিংক ওপেন করা</li>
          <li>ইমেইল ও ফোন নাম্বারে সরাসরি লিংক করা</li>
          <li>একই পেজের ভেতরে নির্দিষ্ট সেকশনে জাম্প করা</li>
          <li>ফাইল ডাউনলোড লিংক ও অন্যান্য দরকারি অ্যাট্রিবিউট</li>
        </ul>
        <p>ওয়েবের "Hyper" শব্দটা (HyperText) এসেছে এই লিংক করার ক্ষমতা থেকেই — একটা পেজ থেকে আরেকটা পেজে, বা একই পেজের ভেতরে ঘুরে বেড়ানোর ক্ষমতা। এই মডিউল শেষে তুমি একাধিক পেজের মধ্যে নেভিগেশন তৈরি করতে পারবে।</p>
      `
    },
    {
      id: "3.1",
      title: "অ্যাংকর ট্যাগের বেসিক",
      content: `
        <h3>🔹 ৩.১ &lt;a&gt; ট্যাগের বেসিক (Anchor Tag)</h3>
        <p><code>&lt;a&gt;</code> (anchor) ট্যাগ দিয়ে লিংক তৈরি হয়। সবচেয়ে গুরুত্বপূর্ণ অ্যাট্রিবিউট হলো <code>href</code> (hyperlink reference) — এটা বলে দেয় লিংকটা কোথায় নিয়ে যাবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://www.google.com"</span><span class="kw">&gt;</span>Google-এ যাও<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <p style="font-size:14px;"><a href="#" style="color:#0066CC;text-decoration:underline;">Google-এ যাও</a></p>
          </div>
        </div>

        <p>💡 ব্রাউজারে লিংক সাধারণত নীল রঙে ও আন্ডারলাইন সহ দেখায় — এটা ব্রাউজারের ডিফল্ট স্টাইল, CSS দিয়ে পরে বদলানো যায়।</p>

        <p>শুধু টেক্সট না, লিংকের ভেতরে ছবি বা অন্য এলিমেন্টও রাখা যায়:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"index.html"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"logo.png"</span> <span class="fn">alt</span>=<span class="str">"লোগো"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "3.2",
      title: "Absolute vs Relative লিংক",
      content: `
        <h3>🔹 ৩.২ Absolute vs Relative লিংক</h3>
        <p><strong>Absolute Link</strong> — সম্পূর্ণ URL, অন্য কোনো ওয়েবসাইট বা বাইরের রিসোর্সে যাওয়ার জন্য ব্যবহার হয়:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://github.com/najmulsprofile"</span><span class="kw">&gt;</span>GitHub প্রোফাইল<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>

        <p><strong>Relative Link</strong> — একই ওয়েবসাইটের ভেতরের অন্য পেজে যাওয়ার জন্য, শুধু ফাইলের নাম বা পাথ লিখলেই হয়:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- একই ফোল্ডারে থাকা পেজ --&gt;</span>
<span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"about.html"</span><span class="kw">&gt;</span>আমার সম্পর্কে<span class="kw">&lt;/a&gt;</span>

<span class="cmt">&lt;!-- সাব-ফোল্ডারের ভেতরে থাকা পেজ --&gt;</span>
<span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"blog/post1.html"</span><span class="kw">&gt;</span>প্রথম ব্লগ পোস্ট<span class="kw">&lt;/a&gt;</span>

<span class="cmt">&lt;!-- এক ধাপ পেছনের ফোল্ডারে যাওয়া --&gt;</span>
<span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"../index.html"</span><span class="kw">&gt;</span>হোমে ফিরে যাও<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধরন</th><th>উদাহরণ</th><th>কখন ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td>Absolute</td><td><code>https://example.com/page.html</code></td><td>অন্য ওয়েবসাইটে লিংক করতে</td></tr>
              <tr><td>Relative</td><td><code>about.html</code>, <code>../index.html</code></td><td>নিজের সাইটের ভেতরের পেজে লিংক করতে</td></tr>
            </tbody>
          </table>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> নিজের সাইটের ভেতরের পেজে Absolute URL (যেমন পুরো <code>https://...</code>) ব্যবহার করলে সাইটটা অন্য ডোমেইনে মুভ করলে সব লিংক ভেঙে যেতে পারে। তাই নিজের সাইটের ভেতরে সবসময় Relative Link ব্যবহার করাই ভালো অভ্যাস।</p>
      `
    },
    {
      id: "3.3",
      title: "target, mailto ও tel লিংক",
      content: `
        <h3>🔹 ৩.৩ নতুন ট্যাবে লিংক ওপেন করা</h3>
        <p><code>target="_blank"</code> ব্যবহার করলে লিংকটা বর্তমান ট্যাব বন্ধ না করে নতুন ট্যাবে খোলে।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://linkedin.com/in/najmulsprofile"</span> <span class="fn">target</span>=<span class="str">"_blank"</span> <span class="fn">rel</span>=<span class="str">"noopener noreferrer"</span><span class="kw">&gt;</span>LinkedIn<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>
        <p>💡 <code>target="_blank"</code> ব্যবহার করলে সাথে <code>rel="noopener noreferrer"</code> যোগ করা ভালো অভ্যাস — এটা নিরাপত্তার জন্য, যাতে নতুন খোলা পেজ থেকে পুরোনো ট্যাবের উপর কোনো নিয়ন্ত্রণ না থাকে।</p>

        <h3>🔹 ইমেইল ও ফোন নাম্বার লিংক</h3>
        <p>এই দুই ধরনের লিংকে ক্লিক করলে ব্যবহারকারীর ডিভাইসে ইমেইল অ্যাপ বা ডায়ালার সরাসরি খুলে যায়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ক্লিক করলে ইমেইল অ্যাপ খুলে যাবে --&gt;</span>
<span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"mailto:najmul@example.com"</span><span class="kw">&gt;</span>ইমেইল করো<span class="kw">&lt;/a&gt;</span>

<span class="cmt">&lt;!-- ক্লিক করলে ফোন ডায়ালার খুলে যাবে (মোবাইলে) --&gt;</span>
<span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"tel:+8801XXXXXXXXX"</span><span class="kw">&gt;</span>কল করো<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "3.4",
      title: "পেজের ভেতরে জাম্প লিংক",
      content: `
        <h3>🔹 ৩.৪ একই পেজের নির্দিষ্ট সেকশনে জাম্প করা</h3>
        <p>লম্বা পেজে (যেমন FAQ বা ব্লগ পোস্ট) নির্দিষ্ট সেকশনে সরাসরি স্ক্রল করে নিয়ে যেতে <code>id</code> অ্যাট্রিবিউট ও <code>#</code> চিহ্ন ব্যবহার করা হয়।</p>

        <p><strong>ধাপ ১:</strong> যে সেকশনে যেতে চাও, সেখানে একটা <code>id</code> দাও:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;h2</span> <span class="fn">id</span>=<span class="str">"contact"</span><span class="kw">&gt;</span>যোগাযোগ<span class="kw">&lt;/h2&gt;</span>
<span class="kw">&lt;p&gt;</span>এখানে যোগাযোগের তথ্য...<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <p><strong>ধাপ ২:</strong> লিংকের <code>href</code> এ <code>#</code> এর পর সেই <code>id</code> লেখো:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#contact"</span><span class="kw">&gt;</span>যোগাযোগ সেকশনে যাও<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>

        <p>এই একই পদ্ধতিতে অন্য পেজের নির্দিষ্ট সেকশনেও যাওয়া যায় — <code>href="about.html#team"</code> লিখলে প্রথমে <code>about.html</code> ওপেন হবে, তারপর সরাসরি <code>id="team"</code> সেকশনে স্ক্রল করবে।</p>

        <p>পেজের একদম উপরে ফিরে যাওয়ার জন্য একটা স্পেশাল শর্টকাটও আছে:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#top"</span><span class="kw">&gt;</span>⬆️ উপরে ফিরে যাও<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "3.5",
      title: "ডাউনলোড লিংক ও অন্যান্য অ্যাট্রিবিউট",
      content: `
        <h3>🔹 ৩.৫ ফাইল ডাউনলোড লিংক</h3>
        <p><code>download</code> অ্যাট্রিবিউট যোগ করলে লিংকে ক্লিক করলে পেজ ওপেন না হয়ে ফাইলটা সরাসরি ডাউনলোড হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"resume.pdf"</span> <span class="fn">download</span><span class="kw">&gt;</span>জীবনবৃত্তান্ত ডাউনলোড করো<span class="kw">&lt;/a&gt;</span>

<span class="cmt">&lt;!-- চাইলে ডাউনলোড হওয়া ফাইলের নাম পরিবর্তনও করা যায় --&gt;</span>
<span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"resume.pdf"</span> <span class="fn">download</span>=<span class="str">"Najmul-CV.pdf"</span><span class="kw">&gt;</span>CV ডাউনলোড<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>

        <p><strong>অন্যান্য দরকারি লিংক অ্যাট্রিবিউট:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>মাউস হোভার করলে ছোট টুলটিপ দেখায়</td></tr>
              <tr><td><code>target="_self"</code></td><td>একই ট্যাবে খোলে (এটাই ডিফল্ট)</td></tr>
              <tr><td><code>rel="nofollow"</code></td><td>সার্চ ইঞ্জিনকে বলে এই লিংকটা "সাজেস্ট/এনডোর্স" করা হচ্ছে না</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔗 <code>&lt;a href="..."&gt;</code> দিয়ে লিংক তৈরি হয় — href-ই সবচেয়ে গুরুত্বপূর্ণ অ্যাট্রিবিউট।</div>
          <div class="takeaway-item">🌍 বাইরের সাইটে <strong>Absolute URL</strong>, নিজের সাইটের ভেতরে <strong>Relative Path</strong> ব্যবহার করো।</div>
          <div class="takeaway-item">🆕 <code>target="_blank"</code> নতুন ট্যাবে খোলে — সাথে <code>rel="noopener noreferrer"</code> দেওয়া নিরাপদ অভ্যাস।</div>
          <div class="takeaway-item">📧 <code>mailto:</code> ও <code>tel:</code> দিয়ে সরাসরি ইমেইল/কল লিংক তৈরি করা যায়।</div>
          <div class="takeaway-item">🎯 <code>id</code> + <code>#</code> ব্যবহার করে একই পেজের (বা অন্য পেজের) নির্দিষ্ট সেকশনে জাম্প করা যায়।</div>
          <div class="takeaway-item">⬇️ <code>download</code> অ্যাট্রিবিউট দিয়ে ফাইল সরাসরি ডাউনলোড করানো যায়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=4&section=4.0">
          পরের মডিউল: ইমেজ ও মিডিয়া
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
        <h2>🖼️ মডিউল ৪: ইমেজ ও মিডিয়া</h2>

        <h3>🔹 ৪.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li><code>&lt;img&gt;</code> ট্যাগ দিয়ে ছবি বসানো ও তার গুরুত্বপূর্ণ অ্যাট্রিবিউট</li>
          <li>ইমেজ ফরম্যাট (jpg, png, svg, webp, gif) কোনটা কখন ব্যবহার করবে</li>
          <li><code>&lt;figure&gt;</code> ও <code>&lt;figcaption&gt;</code> দিয়ে ছবির সাথে ক্যাপশন যোগ করা</li>
          <li><code>&lt;audio&gt;</code> ট্যাগ দিয়ে সাউন্ড প্লে করা</li>
          <li><code>&lt;video&gt;</code> ট্যাগ দিয়ে ভিডিও এমবেড করা</li>
          <li><code>&lt;iframe&gt;</code> দিয়ে বাইরের কনটেন্ট (YouTube, Google Maps) এমবেড করা</li>
          <li>রেসপনসিভ ইমেজের বেসিক ধারণা (srcset)</li>
        </ul>
        <p>টেক্সট-ভিত্তিক পেজের পর এবার আমরা শিখব কীভাবে একটা পেজে ছবি, শব্দ ও ভিডিও যোগ করে সেটাকে আরও প্রাণবন্ত করা যায়।</p>
      `
    },
    {
      id: "4.1",
      title: "ইমেজ ট্যাগ বেসিক",
      content: `
        <h3>🔹 ৪.১ &lt;img&gt; ট্যাগ বেসিক</h3>
        <p><code>&lt;img&gt;</code> একটা <strong>ভয়েড এলিমেন্ট</strong> (মডিউল ১ থেকে মনে আছে?) — এর কোনো ক্লোজিং ট্যাগ নেই। ছবি দেখাতে ন্যূনতম দুইটা অ্যাট্রিবিউট লাগে: <code>src</code> ও <code>alt</code>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"cat.jpg"</span> <span class="fn">alt</span>=<span class="str">"একটা বিড়ালের ছবি"</span> <span class="fn">width</span>=<span class="str">"300"</span><span class="kw">&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>src</code></td><td>ছবির ফাইলের পাথ (Source) — লোকাল ফাইল বা URL দুটোই হতে পারে</td></tr>
              <tr><td><code>alt</code></td><td>ছবি লোড না হলে বা স্ক্রিন-রিডার ব্যবহারকারীর জন্য বিকল্প টেক্সট বর্ণনা</td></tr>
              <tr><td><code>width</code> / <code>height</code></td><td>ছবির আকার পিক্সেলে নির্ধারণ করে</td></tr>
              <tr><td><code>title</code></td><td>মাউস হোভার করলে টুলটিপ দেখায়</td></tr>
              <tr><td><code>loading="lazy"</code></td><td>ছবি স্ক্রিনে না এলে লোড হয় না — পেজ দ্রুত লোড হতে সাহায্য করে</td></tr>
            </tbody>
          </table>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> <code>alt</code> অ্যাট্রিবিউট কখনো বাদ দেওয়া উচিত নয় — এটা শুধু ছবি লোড ব্যর্থ হলেই দরকারি না, চোখে দেখতে না-পারা ব্যবহারকারীরা স্ক্রিন-রিডার দিয়ে ছবিটা কী তা বোঝেন এই <code>alt</code> টেক্সট থেকেই। এটা <strong>Accessibility</strong>-এর একটা মূল নিয়ম।</p>

        <p><strong>ছবি নিজেই একটা লিংক করা:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://facebook.com"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"fb-icon.png"</span> <span class="fn">alt</span>=<span class="str">"ফেসবুক আইকন"</span> <span class="fn">width</span>=<span class="str">"32"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/a&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "4.2",
      title: "ইমেজ ফরম্যাট ও Figure/Figcaption",
      content: `
        <h3>🔹 ৪.২ ইমেজ ফরম্যাট — কোনটা কখন ব্যবহার করবে</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ফরম্যাট</th><th>কখন ব্যবহার করবে</th></tr></thead>
            <tbody>
              <tr><td><code>.jpg / .jpeg</code></td><td>ছবি (photo) — যেমন মানুষ, প্রকৃতি; ফাইল সাইজ ছোট রাখে</td></tr>
              <tr><td><code>.png</code></td><td>লোগো, আইকন, স্ক্রিনশট — স্বচ্ছ (transparent) ব্যাকগ্রাউন্ড সাপোর্ট করে</td></tr>
              <tr><td><code>.svg</code></td><td>ভেক্টর গ্রাফিক্স (আইকন, লোগো) — যত বড়ই করো, ঝাপসা হয় না</td></tr>
              <tr><td><code>.webp</code></td><td>আধুনিক ফরম্যাট — jpg/png এর চেয়ে ছোট সাইজে ভালো কোয়ালিটি দেয়</td></tr>
              <tr><td><code>.gif</code></td><td>ছোট অ্যানিমেশনের জন্য</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 &lt;figure&gt; ও &lt;figcaption&gt;</h3>
        <p>যখন একটা ছবির সাথে ক্যাপশন/বর্ণনা যুক্ত করতে চাও, তখন শুধু <code>&lt;img&gt;</code> এর বদলে <code>&lt;figure&gt;</code> ব্যবহার করা ভালো — এটা ছবি ও তার ক্যাপশনকে একটা লজিক্যাল গ্রুপ হিসেবে বোঝায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;figure&gt;</span>
  <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"sundarban.jpg"</span> <span class="fn">alt</span>=<span class="str">"সুন্দরবনের ম্যানগ্রোভ বন"</span> <span class="fn">width</span>=<span class="str">"400"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;figcaption&gt;</span>বিশ্বের সবচেয়ে বড় ম্যানগ্রোভ বন, সুন্দরবন<span class="kw">&lt;/figcaption&gt;</span>
<span class="kw">&lt;/figure&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <div style="width:220px;height:130px;background:#DCFCE7;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:34px;">🌳</div>
            <p style="font-size:12.5px;color:#6B7280;text-align:center;width:220px;margin-top:6px;">বিশ্বের সবচেয়ে বড় ম্যানগ্রোভ বন, সুন্দরবন</p>
          </div>
        </div>
      `
    },
    {
      id: "4.3",
      title: "অডিও ট্যাগ",
      content: `
        <h3>🔹 ৪.৩ &lt;audio&gt; ট্যাগ দিয়ে সাউন্ড প্লে করা</h3>
        <p><code>&lt;audio&gt;</code> ট্যাগ দিয়ে পেজে সাউন্ড/মিউজিক এমবেড করা যায়। <code>controls</code> অ্যাট্রিবিউট দিলে ব্রাউজার নিজে থেকেই প্লে/পজ/ভলিউম বাটন দেখায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;audio</span> <span class="fn">controls</span><span class="kw">&gt;</span>
  <span class="kw">&lt;source</span> <span class="fn">src</span>=<span class="str">"song.mp3"</span> <span class="fn">type</span>=<span class="str">"audio/mpeg"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;source</span> <span class="fn">src</span>=<span class="str">"song.ogg"</span> <span class="fn">type</span>=<span class="str">"audio/ogg"</span><span class="kw">&gt;</span>
  তোমার ব্রাউজার অডিও প্লেব্যাক সাপোর্ট করে না।
<span class="kw">&lt;/audio&gt;</span></code></pre></div>
        </div>

        <p>💡 একাধিক <code>&lt;source&gt;</code> দেওয়া হয় কারণ সব ব্রাউজার সব ফাইল ফরম্যাট সাপোর্ট করে না — ব্রাউজার উপর থেকে নিচে চেক করে প্রথম যেটা সাপোর্ট করে সেটাই প্লে করে। একদম শেষের লেখাটা (ফলব্যাক টেক্সট) শুধু তখনই দেখা যায় যখন ব্রাউজার <code>&lt;audio&gt;</code> ট্যাগই বোঝে না (খুব পুরোনো ব্রাউজার)।</p>

        <p><strong>প্রায়ই ব্যবহৃত audio অ্যাট্রিবিউট:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>controls</code></td><td>প্লে/পজ/ভলিউম কন্ট্রোল দেখায়</td></tr>
              <tr><td><code>autoplay</code></td><td>পেজ লোড হলেই অটো প্লে শুরু হয় (⚠️ সাধারণত ব্যবহারকারী-অভিজ্ঞতার জন্য এড়ানো ভালো)</td></tr>
              <tr><td><code>loop</code></td><td>শেষ হলে আবার শুরু থেকে বাজে</td></tr>
              <tr><td><code>muted</code></td><td>ডিফল্টভাবে মিউট রাখে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "4.4",
      title: "ভিডিও ট্যাগ",
      content: `
        <h3>🔹 ৪.৪ &lt;video&gt; ট্যাগ দিয়ে ভিডিও এমবেড করা</h3>
        <p><code>&lt;video&gt;</code> ট্যাগ অনেকটা <code>&lt;audio&gt;</code> এর মতোই কাজ করে, শুধু সাথে ছবির ফ্রেমও থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;video</span> <span class="fn">width</span>=<span class="str">"480"</span> <span class="fn">controls</span> <span class="fn">poster</span>=<span class="str">"thumbnail.jpg"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;source</span> <span class="fn">src</span>=<span class="str">"tutorial.mp4"</span> <span class="fn">type</span>=<span class="str">"video/mp4"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;source</span> <span class="fn">src</span>=<span class="str">"tutorial.webm"</span> <span class="fn">type</span>=<span class="str">"video/webm"</span><span class="kw">&gt;</span>
  তোমার ব্রাউজার ভিডিও প্লেব্যাক সাপোর্ট করে না।
<span class="kw">&lt;/video&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>controls</code></td><td>প্লে/পজ/ভলিউম/ফুলস্ক্রিন কন্ট্রোল দেখায়</td></tr>
              <tr><td><code>poster</code></td><td>ভিডিও প্লে করার আগে যে থাম্বনেইল ছবি দেখাবে</td></tr>
              <tr><td><code>autoplay</code> / <code>loop</code> / <code>muted</code></td><td>audio-এর মতোই কাজ করে</td></tr>
              <tr><td><code>width</code> / <code>height</code></td><td>ভিডিও প্লেয়ারের আকার নির্ধারণ করে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "4.5",
      title: "iframe দিয়ে এমবেড করা",
      content: `
        <h3>🔹 ৪.৫ &lt;iframe&gt; দিয়ে বাইরের কনটেন্ট এমবেড করা</h3>
        <p><code>&lt;iframe&gt;</code> (inline frame) দিয়ে অন্য একটা সম্পূর্ণ ওয়েবপেজ তোমার পেজের ভেতরে একটা "জানালার" মতো বসানো যায় — সবচেয়ে বেশি ব্যবহৃত হয় YouTube ভিডিও বা Google Maps এমবেড করতে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- YouTube ভিডিও এমবেড --&gt;</span>
<span class="kw">&lt;iframe</span>
  <span class="fn">width</span>=<span class="str">"480"</span>
  <span class="fn">height</span>=<span class="str">"270"</span>
  <span class="fn">src</span>=<span class="str">"https://www.youtube.com/embed/VIDEO_ID"</span>
  <span class="fn">title</span>=<span class="str">"YouTube ভিডিও"</span>
  <span class="fn">allowfullscreen</span>
<span class="kw">&gt;&lt;/iframe&gt;</span></code></pre></div>
        </div>

        <p>⚠️ <strong>সতর্কতা:</strong> <code>&lt;iframe&gt;</code> দিয়ে অচেনা/অবিশ্বস্ত ওয়েবসাইট এমবেড করা নিরাপত্তার দিক থেকে ঝুঁকিপূর্ণ হতে পারে — শুধু বিশ্বস্ত সোর্স (YouTube, Google Maps, নিজের সাইট) থেকেই এমবেড কোড ব্যবহার করা উচিত। প্রতিটা <code>&lt;iframe&gt;</code> এ একটা অর্থপূর্ণ <code>title</code> দেওয়াও accessibility-র জন্য জরুরি।</p>
      `
    },
    {
      id: "4.6",
      title: "রেসপনসিভ ইমেজ বেসিক্স",
      content: `
        <h3>🔹 ৪.৬ রেসপনসিভ ইমেজের বেসিক ধারণা (srcset)</h3>
        <p>একই ছবি মোবাইল ও বড় স্ক্রিনে একই সাইজে পাঠালে মোবাইলে অকারণে বেশি ডাটা খরচ হয়। <code>srcset</code> অ্যাট্রিবিউট দিয়ে স্ক্রিনের সাইজ অনুযায়ী ব্রাউজারকে বেছে নিতে দেওয়া যায় কোন সাইজের ছবিটা লোড করবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;img</span>
  <span class="fn">src</span>=<span class="str">"photo-800w.jpg"</span>
  <span class="fn">srcset</span>=<span class="str">"photo-400w.jpg 400w, photo-800w.jpg 800w, photo-1200w.jpg 1200w"</span>
  <span class="fn">sizes</span>=<span class="str">"(max-width: 600px) 400px, 800px"</span>
  <span class="fn">alt</span>=<span class="str">"রেসপনসিভ ছবির উদাহরণ"</span>
<span class="kw">&gt;</span></code></pre></div>
        </div>

        <p>এখানে ব্রাউজার নিজের স্ক্রিন সাইজ ও ইন্টারনেট স্পিড বুঝে <code>srcset</code> থেকে সবচেয়ে উপযুক্ত ছবিটা বেছে নেয়। এটা একটা <strong>পরিচিতিমূলক ধারণা</strong> — CSS ও রেসপনসিভ ডিজাইন মডিউলে এই বিষয়টা আরও বিস্তারিতভাবে কাজে লাগবে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🖼️ <code>&lt;img src="..." alt="..."&gt;</code> — <code>alt</code> কখনো বাদ দিও না, এটা accessibility-র মূল অংশ।</div>
          <div class="takeaway-item">📁 ছবি: jpg (ছবি), png (স্বচ্ছ ব্যাকগ্রাউন্ড/আইকন), svg (ভেক্টর), webp (আধুনিক ও হালকা)।</div>
          <div class="takeaway-item">🏷️ ছবির সাথে ক্যাপশন দিতে <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> ব্যবহার করো।</div>
          <div class="takeaway-item">🔊 <code>&lt;audio controls&gt;</code> ও 🎬 <code>&lt;video controls&gt;</code> দিয়ে সাউন্ড/ভিডিও এমবেড হয়; একাধিক <code>&lt;source&gt;</code> দিলে ব্রাউজার-কম্প্যাটিবিলিটি বাড়ে।</div>
          <div class="takeaway-item">🪟 <code>&lt;iframe&gt;</code> দিয়ে YouTube/Maps-এর মতো বাইরের কনটেন্ট এমবেড করা যায় — শুধু বিশ্বস্ত সোর্স থেকে।</div>
          <div class="takeaway-item">📱 <code>srcset</code> দিয়ে স্ক্রিন সাইজ অনুযায়ী ভিন্ন সাইজের ছবি লোড করানো যায় — পারফরম্যান্সের জন্য ভালো।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=5&section=5.0">
          পরের মডিউল: টেবিল
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
        <h2>📊 মডিউল ৫: টেবিল</h2>

        <h3>🔹 ৫.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>বেসিক টেবিল স্ট্রাকচার — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code></li>
          <li>টেবিলের ক্যাপশন ও সেকশন — <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code></li>
          <li>একাধিক কলাম/সারি জোড়া লাগানো — <code>colspan</code>, <code>rowspan</code></li>
          <li>টেবিলকে অ্যাক্সেসিবল (accessible) বানানো</li>
        </ul>
        <p><strong>নোট:</strong> টেবিল শুধু ডাটা দেখানোর জন্য ব্যবহার করা উচিত (যেমন মার্কশিট, প্রাইস লিস্ট, সময়সূচি) — পেজের পুরো লেআউট বানাতে টেবিল ব্যবহার করা এখনকার সময়ে পুরোনো (outdated) পদ্ধতি। লেআউটের জন্য পরে মডিউল ৮-এ div ও CSS শিখবে।</p>
      `
    },
    {
      id: "5.1",
      title: "বেসিক টেবিল স্ট্রাকচার",
      content: `
        <h3>🔹 ৫.১ বেসিক টেবিল স্ট্রাকচার</h3>
        <p>একটা টেবিল বানাতে চারটা মূল ট্যাগ লাগে:</p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ট্যাগ</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;table&gt;</code></td><td>পুরো টেবিলের কন্টেইনার</td></tr>
              <tr><td><code>&lt;tr&gt;</code></td><td>Table Row — একটা সারি</td></tr>
              <tr><td><code>&lt;th&gt;</code></td><td>Table Header — কলাম/সারির শিরোনাম (বোল্ড ও মাঝ বরাবর দেখায়)</td></tr>
              <tr><td><code>&lt;td&gt;</code></td><td>Table Data — সাধারণ ডাটা সেল</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;table&gt;</span>
  <span class="kw">&lt;tr&gt;</span>
    <span class="kw">&lt;th&gt;</span>নাম<span class="kw">&lt;/th&gt;</span>
    <span class="kw">&lt;th&gt;</span>বয়স<span class="kw">&lt;/th&gt;</span>
    <span class="kw">&lt;th&gt;</span>শহর<span class="kw">&lt;/th&gt;</span>
  <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;tr&gt;</span>
    <span class="kw">&lt;td&gt;</span>নাজমুল<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;td&gt;</span>২৫<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;td&gt;</span>চট্টগ্রাম<span class="kw">&lt;/td&gt;</span>
  <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;tr&gt;</span>
    <span class="kw">&lt;td&gt;</span>নোমান<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;td&gt;</span>১৭<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;td&gt;</span>ঢাকা<span class="kw">&lt;/td&gt;</span>
  <span class="kw">&lt;/tr&gt;</span>
<span class="kw">&lt;/table&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <table style="border-collapse:collapse;font-size:13px;width:100%;">
              <tr>
                <th style="border:1px solid #D1D5DB;padding:6px 12px;background:#F3F4F6;">নাম</th>
                <th style="border:1px solid #D1D5DB;padding:6px 12px;background:#F3F4F6;">বয়স</th>
                <th style="border:1px solid #D1D5DB;padding:6px 12px;background:#F3F4F6;">শহর</th>
              </tr>
              <tr>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">নাজমুল</td>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">২৫</td>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">চট্টগ্রাম</td>
              </tr>
              <tr>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">নোমান</td>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">১৭</td>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">ঢাকা</td>
              </tr>
            </table>
          </div>
        </div>

        <p>💡 লক্ষ করো: ব্রাউজারের ডিফল্ট স্টাইলে টেবিলের কোনো বর্ডার/লাইন দেখা যায় না — সুন্দর দেখানোর জন্য CSS দিয়ে বর্ডার, প্যাডিং যোগ করতে হয় (উপরের প্রিভিউতে ইনলাইন স্টাইল দিয়ে দেখানো হয়েছে, এটা CSS মডিউলে বিস্তারিত শিখবে)।</p>
      `
    },
    {
      id: "5.2",
      title: "caption ও thead/tbody/tfoot",
      content: `
        <h3>🔹 ৫.২ &lt;caption&gt; দিয়ে টেবিলের শিরোনাম</h3>
        <p><code>&lt;caption&gt;</code> ট্যাগ দিয়ে টেবিলের একটা শিরোনাম দেওয়া যায়, যা <code>&lt;table&gt;</code> এর ঠিক ভেতরে, প্রথমেই লিখতে হয়।</p>

        <h3>🔹 thead, tbody, tfoot — টেবিলের তিনটা লজিক্যাল অংশ</h3>
        <p>বড় টেবিলে হেডার, মূল ডাটা ও ফুটার (যেমন যোগফল) আলাদা করতে এই তিনটা ট্যাগ ব্যবহার করা হয় — এটা কোডকে আরও পরিষ্কার ও অর্থবহ করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;table&gt;</span>
  <span class="kw">&lt;caption&gt;</span>মাসিক খরচের হিসাব<span class="kw">&lt;/caption&gt;</span>

  <span class="kw">&lt;thead&gt;</span>
    <span class="kw">&lt;tr&gt;</span>
      <span class="kw">&lt;th&gt;</span>খাত<span class="kw">&lt;/th&gt;</span>
      <span class="kw">&lt;th&gt;</span>টাকা<span class="kw">&lt;/th&gt;</span>
    <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;/thead&gt;</span>

  <span class="kw">&lt;tbody&gt;</span>
    <span class="kw">&lt;tr&gt;</span>
      <span class="kw">&lt;td&gt;</span>বাসা ভাড়া<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;td&gt;</span>৮০০০<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;/tr&gt;</span>
    <span class="kw">&lt;tr&gt;</span>
      <span class="kw">&lt;td&gt;</span>খাবার<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;td&gt;</span>৫০০০<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;/tbody&gt;</span>

  <span class="kw">&lt;tfoot&gt;</span>
    <span class="kw">&lt;tr&gt;</span>
      <span class="kw">&lt;td&gt;</span>মোট<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;td&gt;</span>১৩০০০<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;/tfoot&gt;</span>
<span class="kw">&lt;/table&gt;</span></code></pre></div>
        </div>

        <p>💡 <code>thead</code>/<code>tbody</code>/<code>tfoot</code> ব্যবহার না করলেও টেবিল কাজ করে (আগের সেকশনের উদাহরণে করিনি), কিন্তু বড় টেবিলে এগুলো কোড পড়া সহজ করে এবং CSS দিয়ে হেডার/ফুটার আলাদাভাবে স্টাইল করতে সুবিধা হয়।</p>
      `
    },
    {
      id: "5.3",
      title: "colspan ও rowspan",
      content: `
        <h3>🔹 ৫.৩ colspan ও rowspan — সেল জোড়া লাগানো</h3>
        <p><code>colspan</code> দিয়ে একটা সেলকে কয়েকটা কলাম জুড়ে বড় করা যায়, আর <code>rowspan</code> দিয়ে কয়েকটা সারি জুড়ে বড় করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;table&gt;</span>
  <span class="kw">&lt;tr&gt;</span>
    <span class="kw">&lt;th</span> <span class="fn">colspan</span>=<span class="str">"2"</span><span class="kw">&gt;</span>রুটিন (সোমবার)<span class="kw">&lt;/th&gt;</span>
  <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;tr&gt;</span>
    <span class="kw">&lt;td</span> <span class="fn">rowspan</span>=<span class="str">"2"</span><span class="kw">&gt;</span>সকাল<span class="kw">&lt;/td&gt;</span>
    <span class="kw">&lt;td&gt;</span>গণিত<span class="kw">&lt;/td&gt;</span>
  <span class="kw">&lt;/tr&gt;</span>
  <span class="kw">&lt;tr&gt;</span>
    <span class="kw">&lt;td&gt;</span>বিজ্ঞান<span class="kw">&lt;/td&gt;</span>
  <span class="kw">&lt;/tr&gt;</span>
<span class="kw">&lt;/table&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <table style="border-collapse:collapse;font-size:13px;">
              <tr><th colspan="2" style="border:1px solid #D1D5DB;padding:6px 12px;background:#F3F4F6;">রুটিন (সোমবার)</th></tr>
              <tr>
                <td rowspan="2" style="border:1px solid #D1D5DB;padding:6px 12px;">সকাল</td>
                <td style="border:1px solid #D1D5DB;padding:6px 12px;">গণিত</td>
              </tr>
              <tr><td style="border:1px solid #D1D5DB;padding:6px 12px;">বিজ্ঞান</td></tr>
            </table>
          </div>
        </div>

        <p>💡 <strong>মনে রাখার কৌশল:</strong> <code>col</code>span → কলাম বরাবর প্রশস্ত হয় (আনুভূমিক), <code>row</code>span → সারি বরাবর লম্বা হয় (উলম্ব)।</p>
      `
    },
    {
      id: "5.4",
      title: "টেবিল অ্যাক্সেসিবিলিটি ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৫.৪ টেবিলকে অ্যাক্সেসিবল বানানো</h3>
        <p>স্ক্রিন-রিডার ব্যবহারকারীদের জন্য <code>&lt;th&gt;</code> এর <code>scope</code> অ্যাট্রিবিউট বলে দেয় সেই হেডারটা কলামের জন্য নাকি সারির জন্য।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;tr&gt;</span>
  <span class="kw">&lt;th</span> <span class="fn">scope</span>=<span class="str">"col"</span><span class="kw">&gt;</span>নাম<span class="kw">&lt;/th&gt;</span>
  <span class="kw">&lt;th</span> <span class="fn">scope</span>=<span class="str">"col"</span><span class="kw">&gt;</span>বয়স<span class="kw">&lt;/th&gt;</span>
<span class="kw">&lt;/tr&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>scope মান</th><th>ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><code>col</code></td><td>হেডারটা তার নিচের পুরো কলামের জন্য প্রযোজ্য</td></tr>
              <tr><td><code>row</code></td><td>হেডারটা তার পাশের পুরো সারির জন্য প্রযোজ্য</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📋 <code>&lt;table&gt;</code> → <code>&lt;tr&gt;</code> (সারি) → <code>&lt;th&gt;</code>/<code>&lt;td&gt;</code> (হেডার/ডাটা সেল) — এটাই মূল কাঠামো।</div>
          <div class="takeaway-item">🏷️ <code>&lt;caption&gt;</code> টেবিলের শিরোনাম দেয়; <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code>/<code>&lt;tfoot&gt;</code> টেবিলকে লজিক্যাল অংশে ভাগ করে।</div>
          <div class="takeaway-item">↔️ <code>colspan</code> কলাম জুড়ে, ↕️ <code>rowspan</code> সারি জুড়ে সেল বড় করে।</div>
          <div class="takeaway-item">♿ <code>scope="col"</code> / <code>scope="row"</code> স্ক্রিন-রিডারকে টেবিলের গঠন বুঝতে সাহায্য করে।</div>
          <div class="takeaway-item">🚫 টেবিল শুধু ডাটার জন্য — পেজের পুরো লেআউট বানাতে টেবিল ব্যবহার করা উচিত না, সেটার জন্য div ও CSS আছে।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=6&section=6.0">
          পরের মডিউল: ফর্ম ও ইনপুট
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
        <h2>📋 মডিউল ৬: ফর্ম ও ইনপুট</h2>

        <h3>🔹 ৬.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>ফর্ম হলো HTML-এর সবচেয়ে গুরুত্বপূর্ণ ও ব্যবহারিক অংশগুলোর একটা — লগইন পেজ, সাইনআপ ফর্ম, সার্চ বক্স, ফিডব্যাক ফর্ম, চেকআউট পেজ — প্রায় সব ওয়েবসাইটেই ফর্ম থাকে। তাই এই মডিউলটা আমরা <strong>খুব বিস্তারিতভাবে</strong> কভার করব, যাতে একটাও গুরুত্বপূর্ণ input type বা attribute বাদ না যায়।</p>

        <p>এই মডিউলে আমরা যা যা শিখব:</p>
        <ul>
          <li><code>&lt;form&gt;</code> ট্যাগের বেসিক — action, method</li>
          <li><code>&lt;label&gt;</code> ও <code>&lt;input&gt;</code> — টেক্সট ইনপুট, placeholder</li>
          <li>সব গুরুত্বপূর্ণ input type — email, password, number, date, time, url, tel, color, range, file</li>
          <li>Radio button ও Checkbox</li>
          <li><code>&lt;select&gt;</code>, <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;datalist&gt;</code></li>
          <li><code>&lt;textarea&gt;</code> — বড় টেক্সট ইনপুট</li>
          <li>বাটনের ধরন ও <code>&lt;fieldset&gt;</code>/<code>&lt;legend&gt;</code> দিয়ে গ্রুপিং</li>
          <li>ফর্ম ভ্যালিডেশন অ্যাট্রিবিউট — required, pattern, minlength/maxlength, min/max, step</li>
        </ul>
      `
    },
    {
      id: "6.1",
      title: "form ট্যাগের বেসিক",
      content: `
        <h3>🔹 ৬.১ &lt;form&gt; ট্যাগের বেসিক</h3>
        <p><code>&lt;form&gt;</code> ট্যাগ দিয়ে সব ইনপুট এলিমেন্টকে একটা গ্রুপে রাখা হয়, যাতে ইউজারের দেওয়া তথ্য একসাথে সার্ভারে পাঠানো যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;form</span> <span class="fn">action</span>=<span class="str">"/submit"</span> <span class="fn">method</span>=<span class="str">"POST"</span><span class="kw">&gt;</span>
  <span class="cmt">&lt;!-- সব ইনপুট এখানে থাকবে --&gt;</span>
<span class="kw">&lt;/form&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>action</code></td><td>ফর্ম সাবমিট করলে ডাটা কোন URL/সার্ভারে পাঠাবে</td></tr>
              <tr><td><code>method</code></td><td><code>GET</code> (URL-এ ডাটা দেখা যায়, সার্চের জন্য উপযুক্ত) বা <code>POST</code> (ডাটা লুকানো থাকে, লগইন/সাইনআপের জন্য উপযুক্ত)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>নোট:</strong> এই মডিউলে আমরা ফর্মের HTML গঠন শিখছি — <code>action</code> এ দেওয়া URL-এ ডাটা প্রসেস করা (ডাটাবেজে সেভ করা ইত্যাদি) সাধারণত ব্যাকএন্ড ভাষা (Python, PHP, Node.js) দিয়ে করা হয়, যা এই কোর্সের পরের ধাপে শেখা যাবে।</p>
      `
    },
    {
      id: "6.2",
      title: "label ও টেক্সট ইনপুট",
      content: `
        <h3>🔹 ৬.২ &lt;label&gt; ও বেসিক টেক্সট ইনপুট</h3>
        <p><code>&lt;label&gt;</code> ইনপুট ফিল্ডের নাম/বর্ণনা দেখায়। <code>for</code> অ্যাট্রিবিউট ও ইনপুটের <code>id</code> মিলিয়ে দিলে লেবেলে ক্লিক করলেও ইনপুট ফিল্ডে ফোকাস চলে যায় — এটা ব্যবহারকারীর অভিজ্ঞতা (UX) ও accessibility দুটোর জন্যই গুরুত্বপূর্ণ।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;form&gt;</span>
  <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"fullname"</span><span class="kw">&gt;</span>পুরো নাম:<span class="kw">&lt;/label&gt;</span>
  <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"text"</span> <span class="fn">id</span>=<span class="str">"fullname"</span> <span class="fn">name</span>=<span class="str">"fullname"</span> <span class="fn">placeholder</span>=<span class="str">"যেমন: নাজমুল হোসেন"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/form&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <label style="font-size:13px;display:block;margin-bottom:5px;">পুরো নাম:</label>
            <input type="text" placeholder="যেমন: নাজমুল হোসেন" style="border:1px solid #D1D5DB;border-radius:5px;padding:6px 10px;font-size:13px;width:220px;">
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>type</code></td><td>ইনপুটের ধরন নির্ধারণ করে (text, email, password ইত্যাদি)</td></tr>
              <tr><td><code>name</code></td><td>সার্ভারে ডাটা পাঠানোর সময় এই নামে চেনা যায় — <strong>সাবমিটের জন্য এটা আবশ্যক</strong></td></tr>
              <tr><td><code>id</code></td><td>label-এর সাথে যুক্ত করতে ও CSS/JS দিয়ে চিহ্নিত করতে ব্যবহার হয়</td></tr>
              <tr><td><code>placeholder</code></td><td>ইনপুট খালি থাকলে হালকা রঙে একটা উদাহরণ/হিন্ট দেখায়</td></tr>
              <tr><td><code>value</code></td><td>ইনপুটের ডিফল্ট মান আগে থেকে ভরে রাখে</td></tr>
            </tbody>
          </table>
        </div>

        <p>⚠️ <strong>সতর্কতা — কমন ভুল:</strong> <code>placeholder</code>-কে <code>&lt;label&gt;</code> এর বদলে ব্যবহার করা উচিত না — ইউজার টাইপ করা শুরু করলে placeholder উধাও হয়ে যায়, তখন সে ভুলে যেতে পারে ফিল্ডটা আসলে কী। তাই সবসময় label + placeholder দুটোই একসাথে রাখা ভালো অভ্যাস।</p>
      `
    },
    {
      id: "6.3",
      title: "গুরুত্বপূর্ণ ইনপুট টাইপ (পার্ট ১)",
      content: `
        <h3>🔹 ৬.৩ গুরুত্বপূর্ণ Input Type সমূহ — পার্ট ১</h3>
        <p>শুধু <code>type="text"</code> না, HTML5-এ অনেক স্পেশাল ইনপুট টাইপ আছে, যেগুলো ব্যবহার করলে ব্রাউজার নিজে থেকেই সঠিক কীবোর্ড দেখায় (বিশেষ করে মোবাইলে) ও বেসিক ভ্যালিডেশন করে দেয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"email"</span><span class="kw">&gt;</span>ইমেইল:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"email"</span> <span class="fn">id</span>=<span class="str">"email"</span> <span class="fn">name</span>=<span class="str">"email"</span> <span class="fn">placeholder</span>=<span class="str">"you@example.com"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"pass"</span><span class="kw">&gt;</span>পাসওয়ার্ড:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"password"</span> <span class="fn">id</span>=<span class="str">"pass"</span> <span class="fn">name</span>=<span class="str">"pass"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"age"</span><span class="kw">&gt;</span>বয়স:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"number"</span> <span class="fn">id</span>=<span class="str">"age"</span> <span class="fn">name</span>=<span class="str">"age"</span> <span class="fn">min</span>=<span class="str">"1"</span> <span class="fn">max</span>=<span class="str">"120"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"phone"</span><span class="kw">&gt;</span>ফোন নাম্বার:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"tel"</span> <span class="fn">id</span>=<span class="str">"phone"</span> <span class="fn">name</span>=<span class="str">"phone"</span> <span class="fn">placeholder</span>=<span class="str">"01XXXXXXXXX"</span><span class="kw">&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>type মান</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>email</code></td><td>ইমেইল ফরম্যাট আছে কিনা (@ চিহ্ন) স্বয়ংক্রিয়ভাবে যাচাই করে</td></tr>
              <tr><td><code>password</code></td><td>টাইপ করা লেখা ডট (•••) দিয়ে লুকিয়ে দেখায়</td></tr>
              <tr><td><code>number</code></td><td>শুধু সংখ্যা লেখার জন্য, উপরে-নিচে তীর চিহ্ন সহ</td></tr>
              <tr><td><code>tel</code></td><td>ফোন নাম্বারের জন্য, মোবাইলে নাম্বার-কীবোর্ড দেখায়</td></tr>
              <tr><td><code>url</code></td><td>ওয়েবসাইট লিংক ইনপুটের জন্য, URL ফরম্যাট যাচাই করে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "6.4",
      title: "গুরুত্বপূর্ণ ইনপুট টাইপ (পার্ট ২)",
      content: `
        <h3>🔹 ৬.৪ গুরুত্বপূর্ণ Input Type সমূহ — পার্ট ২</h3>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"dob"</span><span class="kw">&gt;</span>জন্ম তারিখ:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"date"</span> <span class="fn">id</span>=<span class="str">"dob"</span> <span class="fn">name</span>=<span class="str">"dob"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"meet"</span><span class="kw">&gt;</span>মিটিং সময়:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"time"</span> <span class="fn">id</span>=<span class="str">"meet"</span> <span class="fn">name</span>=<span class="str">"meet"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"color"</span><span class="kw">&gt;</span>পছন্দের রঙ:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"color"</span> <span class="fn">id</span>=<span class="str">"color"</span> <span class="fn">name</span>=<span class="str">"color"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"volume"</span><span class="kw">&gt;</span>ভলিউম:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"range"</span> <span class="fn">id</span>=<span class="str">"volume"</span> <span class="fn">name</span>=<span class="str">"volume"</span> <span class="fn">min</span>=<span class="str">"0"</span> <span class="fn">max</span>=<span class="str">"100"</span><span class="kw">&gt;</span>

<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"photo"</span><span class="kw">&gt;</span>প্রোফাইল ছবি আপলোড:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"file"</span> <span class="fn">id</span>=<span class="str">"photo"</span> <span class="fn">name</span>=<span class="str">"photo"</span> <span class="fn">accept</span>=<span class="str">"image/*"</span><span class="kw">&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>type মান</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>date</code></td><td>ব্রাউজারের নিজস্ব ক্যালেন্ডার পিকার দেখায়</td></tr>
              <tr><td><code>time</code></td><td>ঘণ্টা-মিনিট সিলেক্ট করার পিকার দেখায়</td></tr>
              <tr><td><code>color</code></td><td>রঙ বাছাই করার কালার-পিকার দেখায়</td></tr>
              <tr><td><code>range</code></td><td>একটা স্লাইডার দেখায় — সাধারণত <code>min</code>/<code>max</code>/<code>step</code> এর সাথে ব্যবহার হয়</td></tr>
              <tr><td><code>file</code></td><td>ডিভাইস থেকে ফাইল আপলোড করার বাটন দেখায়; <code>accept</code> দিয়ে ফাইলের ধরন সীমিত করা যায়</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "6.5",
      title: "Radio Button ও Checkbox",
      content: `
        <h3>🔹 ৬.৫ Radio Button — একটা মাত্র অপশন বাছাই</h3>
        <p>একাধিক অপশন থেকে <strong>শুধু একটা</strong> বাছাই করতে হলে radio button ব্যবহার হয়। একই গ্রুপের সব radio-এর <code>name</code> একই রাখতে হয়, তাহলেই ব্রাউজার বুঝবে এরা একটা গ্রুপ (একটা সিলেক্ট করলে বাকিগুলো আপনাআপনি আনসিলেক্ট হয়ে যাবে)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>তোমার জেন্ডার:<span class="kw">&lt;/p&gt;</span>

<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"radio"</span> <span class="fn">id</span>=<span class="str">"male"</span> <span class="fn">name</span>=<span class="str">"gender"</span> <span class="fn">value</span>=<span class="str">"male"</span><span class="kw">&gt;</span>
<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"male"</span><span class="kw">&gt;</span>পুরুষ<span class="kw">&lt;/label&gt;</span>

<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"radio"</span> <span class="fn">id</span>=<span class="str">"female"</span> <span class="fn">name</span>=<span class="str">"gender"</span> <span class="fn">value</span>=<span class="str">"female"</span><span class="kw">&gt;</span>
<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"female"</span><span class="kw">&gt;</span>মহিলা<span class="kw">&lt;/label&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <p style="font-size:13px;margin-bottom:6px;">তোমার জেন্ডার:</p>
            <label style="font-size:13px;margin-right:14px;"><input type="radio" name="g" style="margin-right:4px;">পুরুষ</label>
            <label style="font-size:13px;"><input type="radio" name="g" style="margin-right:4px;">মহিলা</label>
          </div>
        </div>

        <h3>🔹 Checkbox — একাধিক অপশন বাছাই</h3>
        <p>একাধিক অপশন থেকে <strong>একটার বেশি</strong> (বা একটাও না) বাছাই করতে চাইলে checkbox ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>তোমার আগ্রহের বিষয়:<span class="kw">&lt;/p&gt;</span>

<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"checkbox"</span> <span class="fn">id</span>=<span class="str">"web"</span> <span class="fn">name</span>=<span class="str">"interest"</span> <span class="fn">value</span>=<span class="str">"web"</span><span class="kw">&gt;</span>
<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"web"</span><span class="kw">&gt;</span>ওয়েব ডেভেলপমেন্ট<span class="kw">&lt;/label&gt;</span>

<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"checkbox"</span> <span class="fn">id</span>=<span class="str">"design"</span> <span class="fn">name</span>=<span class="str">"interest"</span> <span class="fn">value</span>=<span class="str">"design"</span><span class="kw">&gt;</span>
<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"design"</span><span class="kw">&gt;</span>ডিজাইন<span class="kw">&lt;/label&gt;</span></code></pre></div>
        </div>

        <p>💡 লক্ষ করো: checkbox-এও একই <code>name</code> (<code>interest</code>) ব্যবহার হয়েছে, কিন্তু radio-এর মতো এখানে একাধিক অপশন একসাথে সিলেক্ট করা যায় — কারণ radio ও checkbox আলাদাভাবে কাজ করে।</p>
      `
    },
    {
      id: "6.6",
      title: "select, datalist ও textarea",
      content: `
        <h3>🔹 ৬.৬ &lt;select&gt; — ড্রপডাউন লিস্ট</h3>
        <p>অনেকগুলো অপশন থাকলে radio বা checkbox-এর বদলে একটা ড্রপডাউন ব্যবহার করাই ভালো — জায়গা কম লাগে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"city"</span><span class="kw">&gt;</span>শহর বাছাই করো:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;select</span> <span class="fn">id</span>=<span class="str">"city"</span> <span class="fn">name</span>=<span class="str">"city"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;optgroup</span> <span class="fn">label</span>=<span class="str">"বিভাগীয় শহর"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"dhaka"</span><span class="kw">&gt;</span>ঢাকা<span class="kw">&lt;/option&gt;</span>
    <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"ctg"</span><span class="kw">&gt;</span>চট্টগ্রাম<span class="kw">&lt;/option&gt;</span>
  <span class="kw">&lt;/optgroup&gt;</span>
  <span class="kw">&lt;optgroup</span> <span class="fn">label</span>=<span class="str">"অন্যান্য"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"cumilla"</span><span class="kw">&gt;</span>কুমিল্লা<span class="kw">&lt;/option&gt;</span>
  <span class="kw">&lt;/optgroup&gt;</span>
<span class="kw">&lt;/select&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <label style="font-size:13px;display:block;margin-bottom:5px;">শহর বাছাই করো:</label>
            <select style="border:1px solid #D1D5DB;border-radius:5px;padding:5px 8px;font-size:13px;">
              <option>ঢাকা</option><option>চট্টগ্রাম</option><option>কুমিল্লা</option>
            </select>
          </div>
        </div>

        <p>💡 <code>&lt;optgroup label="..."&gt;</code> দিয়ে অপশনগুলোকে ক্যাটাগরিতে ভাগ করে দেখানো যায় — অনেক অপশন থাকলে এটা খুঁজে পেতে সুবিধা করে দেয়।</p>

        <h3>🔹 &lt;datalist&gt; — সাজেশনসহ ইনপুট</h3>
        <p><code>&lt;datalist&gt;</code> দিয়ে একটা সাধারণ টেক্সট ইনপুটেও অটোকমপ্লিট সাজেশন যোগ করা যায় — select-এর মতো বাধ্যতামূলক না, ইউজার চাইলে নিজের মতো লিখতেও পারে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"browser"</span><span class="kw">&gt;</span>তোমার প্রিয় ব্রাউজার:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">list</span>=<span class="str">"browsers"</span> <span class="fn">id</span>=<span class="str">"browser"</span> <span class="fn">name</span>=<span class="str">"browser"</span><span class="kw">&gt;</span>

<span class="kw">&lt;datalist</span> <span class="fn">id</span>=<span class="str">"browsers"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"Chrome"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"Firefox"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"Edge"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/datalist&gt;</span></code></pre></div>
        </div>

        <h3>🔹 &lt;textarea&gt; — বড় টেক্সট ইনপুট</h3>
        <p>একাধিক লাইনের টেক্সট (যেমন মেসেজ, মন্তব্য, বায়ো) নেওয়ার জন্য <code>&lt;input&gt;</code> না, <code>&lt;textarea&gt;</code> ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"msg"</span><span class="kw">&gt;</span>তোমার মতামত:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;textarea</span> <span class="fn">id</span>=<span class="str">"msg"</span> <span class="fn">name</span>=<span class="str">"msg"</span> <span class="fn">rows</span>=<span class="str">"4"</span> <span class="fn">cols</span>=<span class="str">"40"</span> <span class="fn">placeholder</span>=<span class="str">"এখানে লেখো..."</span><span class="kw">&gt;&lt;/textarea&gt;</span></code></pre></div>
        </div>

        <p>💡 <code>rows</code> ও <code>cols</code> দিয়ে ডিফল্ট আকার নির্ধারণ করা হয় — <code>&lt;input&gt;</code> এর মতো এটাও ভয়েড এলিমেন্ট না, তাই ওপেনিং-ক্লোজিং দুটো ট্যাগই লাগে (ভেতরে ডিফল্ট টেক্সট চাইলে লেখা যায়)।</p>
      `
    },
    {
      id: "6.7",
      title: "বাটন ও fieldset/legend",
      content: `
        <h3>🔹 ৬.৭ বাটনের ধরন</h3>
        <p>ফর্মে তিন ধরনের বাটন হয়:</p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>type মান</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>submit</code></td><td>ফর্ম সাবমিট করে (ডিফল্ট, যদি type না দেওয়া হয়)</td></tr>
              <tr><td><code>reset</code></td><td>ফর্মের সব ইনপুট খালি করে দেয়</td></tr>
              <tr><td><code>button</code></td><td>কিছুই করে না নিজে থেকে — JavaScript দিয়ে কাস্টম কাজের জন্য ব্যবহার হয়</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;button</span> <span class="fn">type</span>=<span class="str">"submit"</span><span class="kw">&gt;</span>সাবমিট করো<span class="kw">&lt;/button&gt;</span>
<span class="kw">&lt;button</span> <span class="fn">type</span>=<span class="str">"reset"</span><span class="kw">&gt;</span>রিসেট করো<span class="kw">&lt;/button&gt;</span></code></pre></div>
        </div>

        <p>💡 <code>&lt;button&gt;</code> এর ভেতরে টেক্সট, এমনকি ছবিও রাখা যায় — পুরোনো <code>&lt;input type="submit" value="..."&gt;</code> পদ্ধতির চেয়ে <code>&lt;button&gt;</code> বেশি ফ্লেক্সিবল।</p>

        <h3>🔹 &lt;fieldset&gt; ও &lt;legend&gt; — সম্পর্কিত ইনপুট গ্রুপ করা</h3>
        <p>একাধিক সম্পর্কিত ইনপুটকে একটা বক্সে গ্রুপ করে দেখাতে <code>&lt;fieldset&gt;</code> ব্যবহার হয়, আর তার শিরোনাম দেয় <code>&lt;legend&gt;</code>।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;fieldset&gt;</span>
  <span class="kw">&lt;legend&gt;</span>ব্যক্তিগত তথ্য<span class="kw">&lt;/legend&gt;</span>

  <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"name2"</span><span class="kw">&gt;</span>নাম:<span class="kw">&lt;/label&gt;</span>
  <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"text"</span> <span class="fn">id</span>=<span class="str">"name2"</span> <span class="fn">name</span>=<span class="str">"name2"</span><span class="kw">&gt;</span>

  <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"age2"</span><span class="kw">&gt;</span>বয়স:<span class="kw">&lt;/label&gt;</span>
  <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"number"</span> <span class="fn">id</span>=<span class="str">"age2"</span> <span class="fn">name</span>=<span class="str">"age2"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/fieldset&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <fieldset style="border:1px solid #D1D5DB;border-radius:6px;padding:12px 16px;font-size:13px;">
              <legend style="padding:0 6px;">ব্যক্তিগত তথ্য</legend>
              <div style="margin-bottom:8px;"><label>নাম: </label><input type="text" style="border:1px solid #D1D5DB;border-radius:4px;padding:3px 8px;"></div>
              <div><label>বয়স: </label><input type="number" style="border:1px solid #D1D5DB;border-radius:4px;padding:3px 8px;width:60px;"></div>
            </fieldset>
          </div>
        </div>
      `
    },
    {
      id: "6.8",
      title: "ফর্ম ভ্যালিডেশন অ্যাট্রিবিউট",
      content: `
        <h3>🔹 ৬.৮ ফর্ম ভ্যালিডেশন অ্যাট্রিবিউট</h3>
        <p>ব্যাকএন্ড/JavaScript ছাড়াই HTML নিজে থেকে কিছু বেসিক ভ্যালিডেশন করতে পারে — এগুলোকে বলে <strong>HTML5 Native Validation</strong>।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>required</code></td><td>ফিল্ড খালি রেখে সাবমিট করা যাবে না</td></tr>
              <tr><td><code>minlength</code> / <code>maxlength</code></td><td>টেক্সটের ন্যূনতম/সর্বোচ্চ অক্ষরসংখ্যা নির্ধারণ করে</td></tr>
              <tr><td><code>min</code> / <code>max</code></td><td>সংখ্যা বা তারিখের সর্বনিম্ন/সর্বোচ্চ মান নির্ধারণ করে</td></tr>
              <tr><td><code>step</code></td><td>number/range ইনপুটে কত ধাপে বাড়বে/কমবে তা ঠিক করে</td></tr>
              <tr><td><code>pattern</code></td><td>Regular Expression দিয়ে নির্দিষ্ট ফরম্যাট মেলানো বাধ্যতামূলক করে</td></tr>
              <tr><td><code>disabled</code></td><td>ফিল্ডটা ব্যবহারই করা যাবে না (ধূসর হয়ে যায়, ডাটাও সাবমিট হয় না)</td></tr>
              <tr><td><code>readonly</code></td><td>ফিল্ড দেখা যাবে ও সাবমিট হবে, কিন্তু এডিট করা যাবে না</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"username"</span><span class="kw">&gt;</span>ইউজারনেম:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span>
  <span class="fn">type</span>=<span class="str">"text"</span>
  <span class="fn">id</span>=<span class="str">"username"</span>
  <span class="fn">name</span>=<span class="str">"username"</span>
  <span class="fn">required</span>
  <span class="fn">minlength</span>=<span class="str">"4"</span>
  <span class="fn">maxlength</span>=<span class="str">"15"</span>
  <span class="fn">pattern</span>=<span class="str">"[A-Za-z0-9_]+"</span>
  <span class="fn">title</span>=<span class="str">"শুধু ইংরেজি অক্ষর, সংখ্যা ও আন্ডারস্কোর ব্যবহার করা যাবে"</span>
<span class="kw">&gt;</span></code></pre></div>
        </div>

        <p>💡 <code>pattern</code> এর সাথে <code>title</code> দিয়ে রাখলে ভ্যালিডেশন ব্যর্থ হলে ব্রাউজার সেই টেক্সটটা টুলটিপ হিসেবে দেখায় — এতে ইউজার বুঝতে পারে কী ফরম্যাটে লিখতে হবে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📝 <code>&lt;form action="..." method="..."&gt;</code> দিয়ে সব ইনপুট গ্রুপ করে সার্ভারে পাঠানো হয়।</div>
          <div class="takeaway-item">🏷️ <code>&lt;label for="id"&gt;</code> সবসময় ইনপুটের <code>id</code> এর সাথে মিলিয়ে দাও — placeholder label-এর বিকল্প না।</div>
          <div class="takeaway-item">⌨️ text, email, password, number, tel, url, date, time, color, range, file — প্রতিটার নিজস্ব ব্যবহার আছে, শুধু <code>type</code> নিজে নির্ধারণ করে দেয় ব্রাউজার কেমন ইনপুট UI দেখাবে।</div>
          <div class="takeaway-item">🔘 একটা বাছাইয়ের জন্য radio (একই name), একাধিক বাছাইয়ের জন্য checkbox।</div>
          <div class="takeaway-item">📋 অনেক অপশন থাকলে <code>&lt;select&gt;</code>/<code>&lt;optgroup&gt;</code>, ফ্রি-টাইপ সাজেশনের জন্য <code>&lt;datalist&gt;</code>, বড় টেক্সটের জন্য <code>&lt;textarea&gt;</code>।</div>
          <div class="takeaway-item">📦 <code>&lt;fieldset&gt;</code>/<code>&lt;legend&gt;</code> দিয়ে সম্পর্কিত ইনপুট একসাথে গ্রুপ করা যায়।</div>
          <div class="takeaway-item">✅ <code>required</code>, <code>pattern</code>, <code>minlength</code>/<code>maxlength</code>, <code>min</code>/<code>max</code>, <code>step</code> দিয়ে JavaScript ছাড়াই বেসিক ভ্যালিডেশন করা যায়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=7&section=7.0">
          পরের মডিউল: সিমান্টিক HTML5
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
        <h2>🏛️ মডিউল ৭: সিমান্টিক HTML5</h2>

        <h3>🔹 ৭.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>সিমান্টিক ট্যাগ কী এবং কেন এটা গুরুত্বপূর্ণ</li>
          <li><code>&lt;header&gt;</code> ও <code>&lt;nav&gt;</code></li>
          <li><code>&lt;main&gt;</code>, <code>&lt;section&gt;</code> ও <code>&lt;article&gt;</code></li>
          <li><code>&lt;aside&gt;</code> ও <code>&lt;footer&gt;</code></li>
          <li><code>&lt;time&gt;</code> ও <code>&lt;address&gt;</code></li>
          <li>এই সব ট্যাগ মিলিয়ে একটা সম্পূর্ণ পেজ কাঠামো তৈরি</li>
        </ul>
        <p>এখন পর্যন্ত আমরা যা শিখেছি তা দিয়েই একটা পুরো ওয়েবসাইট বানানো সম্ভব — কিন্তু এতদিন আমরা মূলত <code>&lt;div&gt;</code>-নির্ভর কাঠামো নিয়ে ভাবিনি। এই মডিউলে আমরা শিখব HTML5-এর <strong>সিমান্টিক (অর্থবহ) ট্যাগ</strong> ব্যবহার করে পেজের প্রতিটা অংশকে আরও পরিষ্কারভাবে বোঝানো যায়।</p>
      `
    },
    {
      id: "7.1",
      title: "সিমান্টিক ট্যাগ কেন দরকার",
      content: `
        <h3>🔹 ৭.১ সিমান্টিক ট্যাগ কী এবং কেন দরকার?</h3>
        <p><strong>Semantic</strong> মানে "অর্থবহ"। সিমান্টিক ট্যাগ এমন ট্যাগ, যার নাম দেখেই বোঝা যায় ভেতরে কী ধরনের কনটেন্ট আছে — যেমন <code>&lt;nav&gt;</code> দেখলেই বোঝা যায় এটা নেভিগেশন মেনু।</p>

        <p><strong>পুরোনো পদ্ধতি (শুধু div দিয়ে):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- এটা দেখে বোঝা কঠিন কোনটা কী --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"header"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"nav"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"main"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>

        <p><strong>সিমান্টিক পদ্ধতি (HTML5):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ট্যাগের নাম দেখেই বোঝা যাচ্ছে কী আছে ভেতরে --&gt;</span>
<span class="kw">&lt;header&gt;</span>...<span class="kw">&lt;/header&gt;</span>
<span class="kw">&lt;nav&gt;</span>...<span class="kw">&lt;/nav&gt;</span>
<span class="kw">&lt;main&gt;</span>...<span class="kw">&lt;/main&gt;</span></code></pre></div>
        </div>

        <p><strong>সিমান্টিক ট্যাগ ব্যবহারের সুবিধা:</strong></p>
        <ul>
          <li>📖 <strong>পড়তে সহজ:</strong> নিজের কোড বা অন্য ডেভেলপারের কোড বুঝতে সময় কম লাগে</li>
          <li>♿ <strong>Accessibility:</strong> স্ক্রিন-রিডার এই ট্যাগগুলো চিনতে পারে ও ব্যবহারকারীকে দ্রুত এক সেকশন থেকে আরেক সেকশনে যেতে সাহায্য করে</li>
          <li>🔍 <strong>SEO:</strong> সার্চ ইঞ্জিন (Google) পেজের কাঠামো ভালোভাবে বুঝতে পারে, যা র‍্যাংকিংয়ে সাহায্য করে</li>
        </ul>
      `
    },
    {
      id: "7.2",
      title: "header ও nav",
      content: `
        <h3>🔹 ৭.২ &lt;header&gt; — পেজ বা সেকশনের উপরের অংশ</h3>
        <p><code>&lt;header&gt;</code> এ সাধারণত থাকে লোগো, ওয়েবসাইটের নাম, ও মূল নেভিগেশন মেনু। এটা শুধু পুরো পেজের জন্যই না, একটা <code>&lt;article&gt;</code> বা <code>&lt;section&gt;</code> এর ভেতরেও আলাদা header থাকতে পারে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;header&gt;</span>
  <span class="kw">&lt;h1&gt;</span>Banglay Programming<span class="kw">&lt;/h1&gt;</span>
  <span class="kw">&lt;p&gt;</span>বাংলায় প্রোগ্রামিং শেখো, সহজে<span class="kw">&lt;/p&gt;</span>
<span class="kw">&lt;/header&gt;</span></code></pre></div>
        </div>

        <h3>🔹 &lt;nav&gt; — নেভিগেশন লিংক</h3>
        <p><code>&lt;nav&gt;</code> এ থাকে পেজের প্রধান নেভিগেশন লিংকগুলো — যেমন হেডার মেনু বা সাইডবার মেনু। ভেতরে সাধারণত একটা <code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code> লিস্টে লিংক (<code>&lt;a&gt;</code>) রাখা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;nav&gt;</span>
  <span class="kw">&lt;ul&gt;</span>
    <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"index.html"</span><span class="kw">&gt;</span>হোম<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"modules.html"</span><span class="kw">&gt;</span>মডিউল<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"about.html"</span><span class="kw">&gt;</span>সম্পর্কে<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;/ul&gt;</span>
<span class="kw">&lt;/nav&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <div style="padding-bottom:10px;border-bottom:1px solid #E5E7EB;margin-bottom:10px;">
              <h1 style="font-size:18px;margin-bottom:2px;">Banglay Programming</h1>
              <p style="font-size:12px;color:#6B7280;">বাংলায় প্রোগ্রামিং শেখো, সহজে</p>
            </div>
            <div style="display:flex;gap:16px;font-size:13px;color:#0066CC;">
              <span>হোম</span><span>মডিউল</span><span>সম্পর্কে</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "7.3",
      title: "main, section ও article",
      content: `
        <h3>🔹 ৭.৩ &lt;main&gt; — পেজের মূল কনটেন্ট</h3>
        <p><code>&lt;main&gt;</code> এর ভেতরে থাকে পেজের সেই কনটেন্ট, যেটা এই পেজের জন্যই বিশেষ (হেডার/ফুটার/নেভিগেশনের মতো প্রতিটা পেজে রিপিট হওয়া অংশ না)। প্রতি পেজে <strong>একটাই</strong> <code>&lt;main&gt;</code> থাকা উচিত।</p>

        <h3>🔹 &lt;section&gt; — একটা থিমেটিক ভাগ</h3>
        <p><code>&lt;section&gt;</code> দিয়ে পেজের একটা নির্দিষ্ট বিষয়ভিত্তিক অংশ বোঝানো হয় — যেমন "আমাদের সার্ভিস", "কাস্টমার রিভিউ"। সাধারণত প্রতিটা <code>&lt;section&gt;</code> এর নিজস্ব একটা হেডিং (<code>&lt;h2&gt;</code>) থাকে।</p>

        <h3>🔹 &lt;article&gt; — স্বয়ংসম্পূর্ণ একক কনটেন্ট</h3>
        <p><code>&lt;article&gt;</code> এমন কনটেন্টের জন্য, যেটা নিজে থেকেই সম্পূর্ণ এবং আলাদাভাবেও অর্থবহ — যেমন একটা ব্লগ পোস্ট, একটা নিউজ আর্টিকেল, বা একটা প্রোডাক্ট কার্ড। মূল পার্থক্য: <code>section</code> পেজের একটা অংশ বোঝায়, আর <code>article</code> বোঝায় এমন কনটেন্ট যেটা এই পেজ থেকে আলাদা করেও (যেমন RSS ফিডে) অর্থবহ থাকবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;main&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>আমাদের কোর্সসমূহ<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;p&gt;</span>Python, HTML, CSS শেখো একদম বাংলায়।<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>সাম্প্রতিক ব্লগ পোস্ট<span class="kw">&lt;/h2&gt;</span>

    <span class="kw">&lt;article&gt;</span>
      <span class="kw">&lt;h3&gt;</span>HTML শেখা কেন জরুরি?<span class="kw">&lt;/h3&gt;</span>
      <span class="kw">&lt;p&gt;</span>ওয়েব ডেভেলপমেন্টের প্রথম ধাপ হলো HTML...<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;/article&gt;</span>

    <span class="kw">&lt;article&gt;</span>
      <span class="kw">&lt;h3&gt;</span>CSS দিয়ে ডিজাইন শুরু<span class="kw">&lt;/h3&gt;</span>
      <span class="kw">&lt;p&gt;</span>HTML শেখার পর এবার সাজানোর পালা...<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;/article&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

<span class="kw">&lt;/main&gt;</span></code></pre></div>
        </div>

        <p>💡 লক্ষ করো: এখানে <code>&lt;section&gt;</code> এর ভেতরে একাধিক <code>&lt;article&gt;</code> আছে — একটা ব্লগ সেকশনের ভেতরে প্রতিটা আলাদা পোস্টই একেকটা <code>&lt;article&gt;</code>।</p>
      `
    },
    {
      id: "7.4",
      title: "aside ও footer",
      content: `
        <h3>🔹 ৭.৪ &lt;aside&gt; — সাইড কনটেন্ট</h3>
        <p><code>&lt;aside&gt;</code> ব্যবহার হয় মূল কনটেন্টের সাথে সম্পর্কিত কিন্তু আলাদা রাখা যায় এমন কনটেন্টের জন্য — যেমন সাইডবার, বিজ্ঞাপন, "সম্পর্কিত পোস্ট" লিস্ট, লেখকের সংক্ষিপ্ত পরিচিতি।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;aside&gt;</span>
  <span class="kw">&lt;h3&gt;</span>সম্পর্কিত পোস্ট<span class="kw">&lt;/h3&gt;</span>
  <span class="kw">&lt;ul&gt;</span>
    <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#"</span><span class="kw">&gt;</span>CSS Flexbox বেসিক<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#"</span><span class="kw">&gt;</span>JavaScript শুরু করো<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;/ul&gt;</span>
<span class="kw">&lt;/aside&gt;</span></code></pre></div>
        </div>

        <h3>🔹 &lt;footer&gt; — পেজ বা সেকশনের নিচের অংশ</h3>
        <p><code>&lt;footer&gt;</code> এ সাধারণত থাকে কপিরাইট তথ্য, যোগাযোগের ঠিকানা, সোশ্যাল লিংক, বা সাইট ম্যাপ লিংক। এটাও <code>&lt;header&gt;</code> এর মতো পুরো পেজ বা একটা নির্দিষ্ট <code>&lt;article&gt;</code>/<code>&lt;section&gt;</code> এর জন্যও হতে পারে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;footer&gt;</span>
  <span class="kw">&lt;p&gt;</span>&amp;copy; ২০২৬ Banglay Programming. সর্বস্বত্ব সংরক্ষিত।<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;p&gt;</span>
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://github.com/najmulsprofile"</span><span class="kw">&gt;</span>GitHub<span class="kw">&lt;/a&gt;</span> |
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://linkedin.com/in/najmulsprofile"</span><span class="kw">&gt;</span>LinkedIn<span class="kw">&lt;/a&gt;</span>
  <span class="kw">&lt;/p&gt;</span>
<span class="kw">&lt;/footer&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "7.5",
      title: "time ও address ট্যাগ",
      content: `
        <h3>🔹 ৭.৫ &lt;time&gt; — মেশিন-বোধগম্য তারিখ/সময়</h3>
        <p><code>&lt;time&gt;</code> ট্যাগ দিয়ে তারিখ বা সময় লেখা হয়, যাতে মানুষ ও ব্রাউজার/সার্চ ইঞ্জিন দুটোই বুঝতে পারে। <code>datetime</code> অ্যাট্রিবিউটে স্ট্যান্ডার্ড ফরম্যাটে আসল মান থাকে, আর ট্যাগের ভেতরে মানুষের পড়ার মতো ফরম্যাটে টেক্সট থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>
  পাবলিশ হয়েছে:
  <span class="kw">&lt;time</span> <span class="fn">datetime</span>=<span class="str">"2026-07-10"</span><span class="kw">&gt;</span>১০ জুলাই, ২০২৬<span class="kw">&lt;/time&gt;</span>
<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <h3>🔹 &lt;address&gt; — যোগাযোগের তথ্য</h3>
        <p><code>&lt;address&gt;</code> ট্যাগ ব্যবহার হয় লেখক বা ওয়েবসাইটের মালিকের যোগাযোগের তথ্য দেখাতে (ঠিকানা, ইমেইল, ফোন) — সাধারণত <code>&lt;footer&gt;</code> এর ভেতরে ব্যবহার হয়। ব্রাউজার ডিফল্টভাবে এর টেক্সট ইটালিক দেখায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;address&gt;</span>
  লিখেছেন
  <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"mailto:najmul@example.com"</span><span class="kw">&gt;</span>নাজমুল হোসেন<span class="kw">&lt;/a&gt;</span>,
  চট্টগ্রাম, বাংলাদেশ
<span class="kw">&lt;/address&gt;</span></code></pre></div>
        </div>

        <p>⚠️ <strong>সতর্কতা — কমন ভুল:</strong> <code>&lt;address&gt;</code> শুধু <strong>যোগাযোগের তথ্যের</strong> জন্য — কোনো এলোমেলো ঠিকানা টেক্সট (যেমন কোনো দোকানের ঠিকানা যেটা তোমার সাইটের সাথে সম্পর্কহীন) দেখাতে এটা ব্যবহার করা উচিত না।</p>
      `
    },
    {
      id: "7.6",
      title: "সম্পূর্ণ পেজ কাঠামো ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৭.৬ সব মিলিয়ে একটা সম্পূর্ণ সিমান্টিক পেজ কাঠামো</h3>
        <p>এই মডিউলের সব ট্যাগ একসাথে বসালে একটা টিপিক্যাল পেজের কাঠামো এমন দেখায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;header&gt;</span>
    <span class="kw">&lt;h1&gt;</span>Banglay Programming<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;nav&gt;</span>...<span class="kw">&lt;/nav&gt;</span>
  <span class="kw">&lt;/header&gt;</span>

  <span class="kw">&lt;main&gt;</span>
    <span class="kw">&lt;section&gt;</span>
      <span class="kw">&lt;h2&gt;</span>আমাদের কোর্স<span class="kw">&lt;/h2&gt;</span>
      <span class="kw">&lt;article&gt;</span>...<span class="kw">&lt;/article&gt;</span>
      <span class="kw">&lt;article&gt;</span>...<span class="kw">&lt;/article&gt;</span>
    <span class="kw">&lt;/section&gt;</span>

    <span class="kw">&lt;aside&gt;</span>
      <span class="kw">&lt;h3&gt;</span>সম্পর্কিত লিংক<span class="kw">&lt;/h3&gt;</span>
    <span class="kw">&lt;/aside&gt;</span>
  <span class="kw">&lt;/main&gt;</span>

  <span class="kw">&lt;footer&gt;</span>
    <span class="kw">&lt;address&gt;</span>...<span class="kw">&lt;/address&gt;</span>
  <span class="kw">&lt;/footer&gt;</span>

<span class="kw">&lt;/body&gt;</span></code></pre></div>
        </div>

        <p>💡 এই কাঠামোটাই মূলত বেশিরভাগ আধুনিক ওয়েবসাইটের ভিত্তি — ব্লগ, নিউজ সাইট, পোর্টফোলিও, প্রায় সব জায়গাতেই একই প্যাটার্ন ঘুরেফিরে আসে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🏛️ সিমান্টিক ট্যাগ কোড পড়া সহজ করে, accessibility বাড়ায়, ও SEO-তে সাহায্য করে।</div>
          <div class="takeaway-item">🔝 <code>&lt;header&gt;</code> (উপরের অংশ) ও <code>&lt;nav&gt;</code> (নেভিগেশন লিংক) — পুরো পেজে বা যেকোনো সেকশনে ব্যবহার করা যায়।</div>
          <div class="takeaway-item">📄 <code>&lt;main&gt;</code> (পেজের মূল কনটেন্ট, একটাই থাকা উচিত), <code>&lt;section&gt;</code> (থিমেটিক ভাগ), <code>&lt;article&gt;</code> (স্বয়ংসম্পূর্ণ একক কনটেন্ট)।</div>
          <div class="takeaway-item">📌 <code>&lt;aside&gt;</code> সাইড/সম্পর্কিত কনটেন্টের জন্য, <code>&lt;footer&gt;</code> নিচের তথ্যের জন্য।</div>
          <div class="takeaway-item">🕒 <code>&lt;time datetime="..."&gt;</code> মেশিন-বোধগম্য তারিখ দেখায়; <code>&lt;address&gt;</code> শুধু যোগাযোগের তথ্যের জন্য।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=8&section=8.0">
          পরের মডিউল: div, span ও লেআউট বেসিক্স
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
        <h2>📐 মডিউল ৮: div, span ও লেআউট বেসিক্স</h2>

        <h3>🔹 ৮.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>Block ও Inline এলিমেন্টের পার্থক্য</li>
          <li><code>&lt;div&gt;</code> — জেনেরিক ব্লক কন্টেইনার</li>
          <li><code>&lt;span&gt;</code> — জেনেরিক ইনলাইন কন্টেইনার</li>
          <li><code>id</code> vs <code>class</code> — কখন কোনটা ব্যবহার করবে</li>
          <li>নেস্টেড div দিয়ে বেসিক লেআউট গঠনের ধারণা</li>
        </ul>
        <p>মডিউল ৭-এ আমরা শিখেছি অর্থবহ (সিমান্টিক) ট্যাগ কীভাবে ব্যবহার করতে হয়। কিন্তু কখনো কখনো এমন কিছু গ্রুপ করতে হয়, যার জন্য কোনো নির্দিষ্ট সিমান্টিক ট্যাগ নেই — তখন ব্যবহার হয় <strong>জেনেরিক (generic)</strong> কন্টেইনার ট্যাগ — <code>&lt;div&gt;</code> ও <code>&lt;span&gt;</code>।</p>
      `
    },
    {
      id: "8.1",
      title: "Block vs Inline এলিমেন্ট",
      content: `
        <h3>🔹 ৮.১ Block vs Inline এলিমেন্ট</h3>
        <p>এতদিন আমরা যেসব ট্যাগ শিখেছি, প্রতিটা আসলে দুই ধরনের একটা — <strong>Block</strong> অথবা <strong>Inline</strong>। এই পার্থক্যটা বোঝা লেআউট ডিজাইনের জন্য অত্যন্ত জরুরি।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধরন</th><th>বৈশিষ্ট্য</th><th>উদাহরণ ট্যাগ</th></tr></thead>
            <tbody>
              <tr><td><strong>Block</strong></td><td>নিজের আগে-পরে নতুন লাইন তৈরি করে, পুরো প্রস্থ (width) দখল করে</td><td><code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;section&gt;</code></td></tr>
              <tr><td><strong>Inline</strong></td><td>নতুন লাইন তৈরি করে না, শুধু তার কনটেন্ট যতটুকু জায়গা লাগে ততটুকুই নেয়</td><td><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- Block: প্রতিটা নতুন লাইনে শুরু হয় --&gt;</span>
<span class="kw">&lt;div&gt;</span>প্রথম ব্লক<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div&gt;</span>দ্বিতীয় ব্লক<span class="kw">&lt;/div&gt;</span>

<span class="cmt">&lt;!-- Inline: পাশাপাশি একই লাইনে থাকে --&gt;</span>
<span class="kw">&lt;span&gt;</span>প্রথম<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;span&gt;</span>দ্বিতীয়<span class="kw">&lt;/span&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <div style="background:#F0F9FF;padding:6px 10px;margin-bottom:4px;font-size:13px;">প্রথম ব্লক</div>
            <div style="background:#F0F9FF;padding:6px 10px;margin-bottom:10px;font-size:13px;">দ্বিতীয় ব্লক</div>
            <span style="background:#FFF0F5;padding:3px 8px;font-size:13px;">প্রথম</span>
            <span style="background:#FFF0F5;padding:3px 8px;font-size:13px;">দ্বিতীয়</span>
          </div>
        </div>
      `
    },
    {
      id: "8.2",
      title: "div ট্যাগ",
      content: `
        <h3>🔹 ৮.২ &lt;div&gt; — জেনেরিক ব্লক কন্টেইনার</h3>
        <p><code>&lt;div&gt;</code> (division) নিজে থেকে কোনো বিশেষ অর্থ বহন করে না — এটা শুধু একটা ব্লক-লেভেল বক্স, যেখানে অন্য যেকোনো এলিমেন্ট গ্রুপ করে রাখা যায়। যখন কোনো নির্দিষ্ট সিমান্টিক ট্যাগ (header, section, article) মানানসই না, তখন <code>&lt;div&gt;</code> ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"icon.png"</span> <span class="fn">alt</span>=<span class="str">"আইকন"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;h3&gt;</span>প্রোডাক্টের নাম<span class="kw">&lt;/h3&gt;</span>
  <span class="kw">&lt;p&gt;</span>প্রোডাক্টের সংক্ষিপ্ত বর্ণনা<span class="kw">&lt;/p&gt;</span>
<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>

        <p>💡 লক্ষ করো: এখানে ছবি, হেডিং, প্যারাগ্রাফ — এই তিনটাকে একসাথে "একটা কার্ড" হিসেবে গ্রুপ করার জন্য <code>&lt;div&gt;</code> ব্যবহার করা হয়েছে। পরে CSS দিয়ে এই <code>class="card"</code> ধরে পুরো গ্রুপটাকে বর্ডার, শ্যাডো, ইত্যাদি দিয়ে সাজানো যাবে।</p>

        <p>⚠️ <strong>সতর্কতা:</strong> যেখানে একটা মানানসই সিমান্টিক ট্যাগ আছে (যেমন নেভিগেশনের জন্য <code>&lt;nav&gt;</code>, ব্লগ পোস্টের জন্য <code>&lt;article&gt;</code>), সেখানে <code>&lt;div&gt;</code> ব্যবহার না করে সেই সিমান্টিক ট্যাগটাই ব্যবহার করা উচিত। <code>&lt;div&gt;</code> শুধু তখনই ব্যবহার করবে যখন সত্যিই কোনো নির্দিষ্ট অর্থ নেই, শুধু গ্রুপ করা দরকার।</p>
      `
    },
    {
      id: "8.3",
      title: "span ট্যাগ",
      content: `
        <h3>🔹 ৮.৩ &lt;span&gt; — জেনেরিক ইনলাইন কন্টেইনার</h3>
        <p><code>&lt;span&gt;</code> হলো <code>&lt;div&gt;</code>-এর মতোই, কিন্তু ইনলাইন — কোনো প্যারাগ্রাফের ভেতরে নির্দিষ্ট একটা শব্দ বা কয়েকটা অক্ষরকে আলাদাভাবে স্টাইল করতে চাইলে <code>&lt;span&gt;</code> ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;p&gt;</span>
  এই কোর্সটা সম্পূর্ণ
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"highlight-red"</span><span class="kw">&gt;</span>ফ্রি<span class="kw">&lt;/span&gt;</span>
  এবং বাংলায় লেখা।
<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <p style="font-size:14px;">এই কোর্সটা সম্পূর্ণ <span style="color:#DC2626;font-weight:600;">ফ্রি</span> এবং বাংলায় লেখা।</p>
          </div>
        </div>

        <p>💡 <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;mark&gt;</code> এর মতো ট্যাগের নির্দিষ্ট অর্থ আছে (bold/italic/highlight), কিন্তু <code>&lt;span&gt;</code> এর কোনো ডিফল্ট স্টাইল বা অর্থ নেই — এটা সম্পূর্ণ CSS-এর মাধ্যমে কাস্টম স্টাইল করার জন্য একটা "খালি হুক"।</p>
      `
    },
    {
      id: "8.4",
      title: "id vs class",
      content: `
        <h3>🔹 ৮.৪ id vs class — কখন কোনটা ব্যবহার করবে</h3>
        <p><code>&lt;div&gt;</code> ও <code>&lt;span&gt;</code> সাধারণত <code>id</code> বা <code>class</code> অ্যাট্রিবিউট দিয়েই চিহ্নিত করা হয়, যাতে পরে CSS/JavaScript দিয়ে তাদের টার্গেট করা যায়। মডিউল ১-এ এই দুটোর নাম শিখেছিলে, এখন দেখো পার্থক্যটা ঠিক কোথায়:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th></th><th><code>id</code></th><th><code>class</code></th></tr></thead>
            <tbody>
              <tr><td>ইউনিকনেস</td><td>একটা পেজে <strong>একবারই</strong> ব্যবহার করা যায়</td><td>একই পেজে <strong>বহুবার</strong> ব্যবহার করা যায়</td></tr>
              <tr><td>ব্যবহার</td><td>একটা নির্দিষ্ট, ইউনিক এলিমেন্ট চিহ্নিত করতে (যেমন পেজ জাম্প লিংক)</td><td>একই স্টাইলের একাধিক এলিমেন্টকে গ্রুপ করতে</td></tr>
              <tr><td>একাধিক মান</td><td>একটাই মান রাখা যায়</td><td>একটা এলিমেন্টে স্পেস দিয়ে আলাদা করে একাধিক class দেওয়া যায়</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- id: এই পেজে "main-title" নামে আর কিছু থাকবে না --&gt;</span>
<span class="kw">&lt;h1</span> <span class="fn">id</span>=<span class="str">"main-title"</span><span class="kw">&gt;</span>Banglay Programming<span class="kw">&lt;/h1&gt;</span>

<span class="cmt">&lt;!-- class: একই ক্লাস একাধিক div-এ ব্যবহার হচ্ছে --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>প্রোডাক্ট ১<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>প্রোডাক্ট ২<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>প্রোডাক্ট ৩<span class="kw">&lt;/div&gt;</span>

<span class="cmt">&lt;!-- একটা এলিমেন্টে একাধিক class --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card featured"</span><span class="kw">&gt;</span>বিশেষ প্রোডাক্ট<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>সহজে মনে রাখার নিয়ম:</strong> "এটা কি একটাই আছে পেজে?" — হ্যাঁ হলে <code>id</code>, একাধিকবার লাগবে মনে হলে <code>class</code>। বাস্তবে ৯০%+ ক্ষেত্রে <code>class</code>-ই বেশি ব্যবহার হয়, কারণ ডিজাইন সাধারণত reusable (পুনঃব্যবহারযোগ্য) হয়।</p>
      `
    },
    {
      id: "8.5",
      title: "নেস্টেড div দিয়ে বেসিক লেআউট",
      content: `
        <h3>🔹 ৮.৫ নেস্টেড div দিয়ে বেসিক লেআউট গঠন</h3>
        <p>বড় ওয়েবসাইটের লেআউট সাধারণত একটার ভেতরে আরেকটা <code>&lt;div&gt;</code> নেস্ট করে বানানো হয় — একে বলা যায় "বক্সের ভেতরে বক্স" পদ্ধতি। এখানে HTML দিয়ে শুধু কাঠামো (structure) তৈরি হয়; বক্সগুলো পাশাপাশি না নিচে-নিচে বসবে, সেটা ঠিক করে CSS (Flexbox/Grid) — যেটা পরের কোর্সে শিখবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"page-wrapper"</span><span class="kw">&gt;</span>

  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"container"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h3&gt;</span>কার্ড ১<span class="kw">&lt;/h3&gt;</span>
    <span class="kw">&lt;/div&gt;</span>

    <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h3&gt;</span>কার্ড ২<span class="kw">&lt;/h3&gt;</span>
    <span class="kw">&lt;/div&gt;</span>

  <span class="kw">&lt;/div&gt;</span>

<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>

        <p><strong>এই কাঠামোটা কেন এভাবে সাজানো:</strong></p>
        <ul>
          <li><code>page-wrapper</code> — পুরো পেজের সবচেয়ে বাইরের বক্স</li>
          <li><code>container</code> — কনটেন্টকে একটা নির্দিষ্ট সর্বোচ্চ প্রস্থে সীমাবদ্ধ রাখে (যেমন Banglay Programming সাইটের নিজের ডিজাইনেও দেখেছ)</li>
          <li><code>card</code> — প্রতিটা আলাদা আলাদা আইটেম বা ব্লক</li>
        </ul>

        <p>💡 এই নেস্টিং প্যাটার্নটাই মডার্ন ওয়েবসাইট বানানোর সবচেয়ে কমন পদ্ধতি — HTML দিয়ে বক্সের কাঠামো বানাও, CSS দিয়ে সেগুলোকে সাজাও।</p>
      `
    },
    {
      id: "8.6",
      title: "সারসংক্ষেপ",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🧱 <strong>Block</strong> এলিমেন্ট নতুন লাইনে শুরু হয় ও পুরো প্রস্থ নেয়; <strong>Inline</strong> এলিমেন্ট একই লাইনে পাশাপাশি থাকে।</div>
          <div class="takeaway-item">📦 <code>&lt;div&gt;</code> — জেনেরিক ব্লক কন্টেইনার, যেখানে কোনো নির্দিষ্ট সিমান্টিক ট্যাগ মানানসই না, সেখানে গ্রুপিংয়ের জন্য ব্যবহার হয়।</div>
          <div class="takeaway-item">🏷️ <code>&lt;span&gt;</code> — জেনেরিক ইনলাইন কন্টেইনার, প্যারাগ্রাফের ভেতরে নির্দিষ্ট অংশ স্টাইল করতে ব্যবহার হয়।</div>
          <div class="takeaway-item">🆔 <code>id</code> = ইউনিক (একবার), <code>class</code> = reusable (বহুবার); বাস্তবে বেশিরভাগ ক্ষেত্রে class-ই বেশি ব্যবহার হয়।</div>
          <div class="takeaway-item">🪆 নেস্টেড <code>&lt;div&gt;</code> (wrapper → container → card প্যাটার্ন) দিয়ে বড় লেআউটের কাঠামো তৈরি হয়; আসল সাজানোর কাজ করে CSS।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=9&section=9.0">
          পরের মডিউল: HTML5 নতুন ফিচার
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
        <h2>⚡ মডিউল ৯: HTML5 নতুন ফিচার</h2>

        <h3>🔹 ৯.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>Meta ট্যাগ ও বেসিক SEO</li>
          <li>Favicon (ব্রাউজার ট্যাবের ছোট আইকন)</li>
          <li><code>data-*</code> কাস্টম অ্যাট্রিবিউট</li>
          <li><code>&lt;details&gt;</code> ও <code>&lt;summary&gt;</code> — JavaScript ছাড়াই কোলাপসিবল কনটেন্ট</li>
          <li><code>&lt;progress&gt;</code> ও <code>&lt;meter&gt;</code></li>
          <li><code>&lt;canvas&gt;</code> ও <code>&lt;svg&gt;</code> এর পরিচিতি</li>
        </ul>
        <p>HTML5 আসার পর ওয়েবে অনেক নতুন ট্যাগ ও ফিচার যুক্ত হয়েছে, যেগুলো আগে শুধু JavaScript দিয়ে সম্ভব ছিল। এই মডিউলে আমরা সেই আধুনিক ফিচারগুলোর সাথে পরিচিত হবো।</p>
      `
    },
    {
      id: "9.1",
      title: "Meta ট্যাগ ও বেসিক SEO",
      content: `
        <h3>🔹 ৯.১ Meta ট্যাগ ও বেসিক SEO</h3>
        <p>মডিউল ১-এ আমরা <code>&lt;meta charset="UTF-8"&gt;</code> শিখেছিলাম। কিন্তু <code>&lt;meta&gt;</code> ট্যাগ দিয়ে আরও অনেক গুরুত্বপূর্ণ তথ্য দেওয়া যায়, যা <code>&lt;head&gt;</code> এর ভেতরে বসে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>

  <span class="cmt">&lt;!-- মোবাইলে পেজ সঠিকভাবে স্কেল হওয়ার জন্য বাধ্যতামূলক --&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"viewport"</span> <span class="fn">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="kw">&gt;</span>

  <span class="cmt">&lt;!-- গুগল সার্চ রেজাল্টে যে বর্ণনা দেখায় --&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"description"</span> <span class="fn">content</span>=<span class="str">"বাংলা ভাষায় প্রোগ্রামিং শেখার সবচেয়ে সহজ প্ল্যাটফর্ম"</span><span class="kw">&gt;</span>

  <span class="cmt">&lt;!-- কে বানিয়েছে সেই তথ্য --&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"author"</span> <span class="fn">content</span>=<span class="str">"Md Najmul Hosen"</span><span class="kw">&gt;</span>

  <span class="kw">&lt;title&gt;</span>Banglay Programming<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>মেটা ট্যাগ</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>charset</code></td><td>ক্যারেক্টার এনকোডিং নির্ধারণ করে (বাংলা টেক্সটের জন্য জরুরি)</td></tr>
              <tr><td><code>viewport</code></td><td>মোবাইল ডিভাইসে পেজ সঠিক স্কেলে দেখানোর জন্য — প্রতিটা আধুনিক সাইটে থাকা বাধ্যতামূলক</td></tr>
              <tr><td><code>description</code></td><td>সার্চ ইঞ্জিন রেজাল্টে যে সংক্ষিপ্ত বর্ণনা দেখায়, তাতে প্রভাব ফেলে</td></tr>
              <tr><td><code>author</code></td><td>পেজের লেখক/নির্মাতার নাম জানায়</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>SEO (Search Engine Optimization)</strong> মানে ওয়েবসাইটকে এমনভাবে সাজানো যাতে গুগলের মতো সার্চ ইঞ্জিন সহজে বুঝতে পারে ও ভালো র‍্যাংক দেয়। সঠিক <code>&lt;title&gt;</code>, <code>description</code> মেটা ট্যাগ, ও মডিউল ৭-এ শেখা সিমান্টিক ট্যাগ — এই তিনটাই SEO-র সবচেয়ে বেসিক কিন্তু গুরুত্বপূর্ণ ধাপ।</p>
      `
    },
    {
      id: "9.2",
      title: "Favicon যোগ করা",
      content: `
        <h3>🔹 ৯.২ Favicon — ব্রাউজার ট্যাবের ছোট আইকন</h3>
        <p>ব্রাউজারের ট্যাবে ওয়েবসাইটের নামের পাশে যে ছোট আইকনটা দেখা যায়, তাকে বলে <strong>Favicon</strong> (favorite icon)। এটা <code>&lt;link&gt;</code> ট্যাগ দিয়ে <code>&lt;head&gt;</code> এ যোগ করা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;link</span> <span class="fn">rel</span>=<span class="str">"icon"</span> <span class="fn">type</span>=<span class="str">"image/png"</span> <span class="fn">href</span>=<span class="str">"favicon.png"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/head&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>অ্যাট্রিবিউট</th><th>কাজ</th></tr></thead>
            <tbody>
              <tr><td><code>rel="icon"</code></td><td>ব্রাউজারকে জানায় এই লিংকটা একটা আইকন</td></tr>
              <tr><td><code>type</code></td><td>ফাইলের ফরম্যাট (image/png, image/x-icon)</td></tr>
              <tr><td><code>href</code></td><td>আইকন ফাইলের পাথ — সাধারণত ছোট (16×16 বা 32×32 পিক্সেল) .png বা .ico ফাইল</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <code>&lt;link&gt;</code> ট্যাগটাই পরবর্তীতে CSS ফাইল যুক্ত করতেও ব্যবহার হবে (<code>rel="stylesheet"</code> দিয়ে) — এটা একটা বহুমুখী ট্যাগ যা বাইরের ফাইলকে HTML পেজের সাথে সংযুক্ত করে।</p>
      `
    },
    {
      id: "9.3",
      title: "data-* কাস্টম অ্যাট্রিবিউট",
      content: `
        <h3>🔹 ৯.৩ data-* কাস্টম অ্যাট্রিবিউট</h3>
        <p>কখনো কখনো এমন কিছু তথ্য একটা এলিমেন্টের সাথে লুকিয়ে রাখতে হয়, যা ব্যবহারকারী দেখবে না, কিন্তু পরে JavaScript দিয়ে ব্যবহার করা হবে। এর জন্য HTML5-এ <code>data-</code> দিয়ে শুরু হওয়া কাস্টম অ্যাট্রিবিউট তৈরি করার নিয়ম আছে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"product-card"</span> <span class="fn">data-product-id</span>=<span class="str">"1042"</span> <span class="fn">data-price</span>=<span class="str">"599"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;h3&gt;</span>ওয়্যারলেস মাউস<span class="kw">&lt;/h3&gt;</span>
  <span class="kw">&lt;p&gt;</span>দাম: ৫৯৯ টাকা<span class="kw">&lt;/p&gt;</span>
<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>

        <p>এখানে <code>data-product-id</code> ও <code>data-price</code> স্ক্রিনে দেখা যাবে না, কিন্তু JavaScript দিয়ে খুব সহজে এগুলো পড়া যাবে — যেমন কার্টে যোগ করার সময় কোন প্রোডাক্ট আইডি যোগ হলো তা ট্র্যাক করতে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>নিয়ম</th><th>ব্যাখ্যা</th></tr></thead>
            <tbody>
              <tr><td>নাম অবশ্যই <code>data-</code> দিয়ে শুরু</td><td>ব্রাউজার এটাকে স্বীকৃত কাস্টম অ্যাট্রিবিউট হিসেবে চেনে</td></tr>
              <tr><td>যেকোনো এলিমেন্টে ব্যবহারযোগ্য</td><td>div, li, button — যেকোনো ট্যাগে বসানো যায়</td></tr>
              <tr><td>ভ্যালিড HTML</td><td>এলোমেলো কাস্টম অ্যাট্রিবিউট (যেমন <code>myAttr="x"</code>) ভ্যালিডেটর এরর দেখাতে পারে, কিন্তু <code>data-*</code> সবসময় ভ্যালিড</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "9.4",
      title: "details ও summary",
      content: `
        <h3>🔹 ৯.৪ &lt;details&gt; ও &lt;summary&gt; — JavaScript ছাড়াই কোলাপসিবল কনটেন্ট</h3>
        <p>FAQ সেকশন বা "আরও পড়ুন" এর মতো ক্লিক করলে খোলে এমন কনটেন্ট বানাতে আগে JavaScript লাগত, কিন্তু HTML5-এর <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> দিয়ে এটা শুধু HTML দিয়েই সম্ভব।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;details&gt;</span>
  <span class="kw">&lt;summary&gt;</span>কোর্সটা কি সত্যিই ফ্রি?<span class="kw">&lt;/summary&gt;</span>
  <span class="kw">&lt;p&gt;</span>হ্যাঁ, Banglay Programming-এর সব কোর্স সম্পূর্ণ ফ্রি।<span class="kw">&lt;/p&gt;</span>
<span class="kw">&lt;/details&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <details style="font-size:13.5px;">
              <summary style="cursor:pointer;font-weight:600;">কোর্সটা কি সত্যিই ফ্রি?</summary>
              <p style="margin-top:6px;color:#374151;">হ্যাঁ, Banglay Programming-এর সব কোর্স সম্পূর্ণ ফ্রি।</p>
            </details>
          </div>
        </div>

        <p>💡 <code>&lt;summary&gt;</code> এ যে টেক্সট থাকে সেটাই সবসময় দেখা যায় (একটা ছোট ▶ তীর চিহ্ন সহ) — ক্লিক করলে <code>&lt;details&gt;</code> এর বাকি কনটেন্ট খুলে যায়। <code>&lt;details&gt;</code> ট্যাগে <code>open</code> অ্যাট্রিবিউট দিলে সেটা পেজ লোড হওয়ার সাথে সাথেই খোলা অবস্থায় থাকে।</p>
      `
    },
    {
      id: "9.5",
      title: "progress ও meter",
      content: `
        <h3>🔹 ৯.৫ &lt;progress&gt; — প্রগ্রেস বার</h3>
        <p>কোনো কাজ কতটুকু সম্পন্ন হয়েছে (যেমন ফাইল আপলোড, কুইজ শেষ হওয়া) তা দেখাতে <code>&lt;progress&gt;</code> ব্যবহার হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"course-progress"</span><span class="kw">&gt;</span>কোর্স অগ্রগতি:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;progress</span> <span class="fn">id</span>=<span class="str">"course-progress"</span> <span class="fn">value</span>=<span class="str">"70"</span> <span class="fn">max</span>=<span class="str">"100"</span><span class="kw">&gt;&lt;/progress&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <label style="font-size:13px;display:block;margin-bottom:6px;">কোর্স অগ্রগতি:</label>
            <progress value="70" max="100" style="width:220px;"></progress>
          </div>
        </div>

        <h3>🔹 &lt;meter&gt; — একটা নির্দিষ্ট রেঞ্জের ভেতরে একটা মান</h3>
        <p><code>&lt;meter&gt;</code> দেখতে <code>&lt;progress&gt;</code> এর মতোই, কিন্তু এর অর্থ ভিন্ন — এটা কোনো কাজের "সম্পন্ন হওয়া" বোঝায় না, বরং একটা নির্দিষ্ট রেঞ্জের মধ্যে কোনো একটা স্ট্যাটিক মান (যেমন ডিস্ক স্পেস ব্যবহার, রেটিং) বোঝায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"storage"</span><span class="kw">&gt;</span>স্টোরেজ ব্যবহার:<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;meter</span> <span class="fn">id</span>=<span class="str">"storage"</span> <span class="fn">value</span>=<span class="str">"6"</span> <span class="fn">min</span>=<span class="str">"0"</span> <span class="fn">max</span>=<span class="str">"10"</span><span class="kw">&gt;&lt;/meter&gt;</span> 6GB / 10GB</code></pre></div>
        </div>

        <p>💡 <strong>পার্থক্য মনে রাখার সহজ উপায়:</strong> <code>progress</code> = "কতদূর এগোলাম" (সময়ের সাথে বদলায়), <code>meter</code> = "এই মুহূর্তে অবস্থা কী" (একটা রেঞ্জের মধ্যে বর্তমান মান)।</p>
      `
    },
    {
      id: "9.6",
      title: "canvas ও svg পরিচিতি",
      content: `
        <h3>🔹 ৯.৬ &lt;canvas&gt; পরিচিতি</h3>
        <p><code>&lt;canvas&gt;</code> একটা খালি ড্রয়িং বোর্ডের মতো, যেখানে JavaScript দিয়ে সরাসরি আঁকা যায় — গ্রাফ, গেম, অ্যানিমেশন ইত্যাদি। HTML দিয়ে শুধু ক্যানভাসের জায়গাটা তৈরি হয়, আঁকার আসল কাজ হয় JavaScript দিয়ে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;canvas</span> <span class="fn">id</span>=<span class="str">"myCanvas"</span> <span class="fn">width</span>=<span class="str">"200"</span> <span class="fn">height</span>=<span class="str">"100"</span><span class="kw">&gt;&lt;/canvas&gt;</span>

<span class="cmt">&lt;!-- আঁকার আসল কাজ JavaScript দিয়ে হয়, যেমন: --&gt;</span>
<span class="cmt">&lt;!-- ctx.fillRect(10, 10, 50, 50); --&gt;</span></code></pre></div>
        </div>

        <h3>🔹 &lt;svg&gt; পরিচিতি</h3>
        <p><code>&lt;svg&gt;</code> (Scalable Vector Graphics) দিয়ে সরাসরি HTML-এর ভেতরেই ভেক্টর গ্রাফিক্স (আকার, লাইন, আইকন) আঁকা যায় — এটা যত বড় করা হোক না কেন কখনো ঝাপসা হয় না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;svg</span> <span class="fn">width</span>=<span class="str">"100"</span> <span class="fn">height</span>=<span class="str">"100"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;circle</span> <span class="fn">cx</span>=<span class="str">"50"</span> <span class="fn">cy</span>=<span class="str">"50"</span> <span class="fn">r</span>=<span class="str">"40"</span> <span class="fn">fill</span>=<span class="str">"#0066CC"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/svg&gt;</span></code></pre></div>
        </div>

        <div class="browser-panel">
          <div class="browser-topbar">
            <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
            <div class="browser-url">file:///index.html</div>
          </div>
          <div class="browser-content">
            <svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="#0066CC"></circle></svg>
          </div>
        </div>

        <p>💡 <strong>canvas vs svg:</strong> <code>canvas</code> পিক্সেল-ভিত্তিক (JavaScript দিয়ে আঁকা, গেম/অ্যানিমেশনের জন্য ভালো), <code>svg</code> ভেক্টর-ভিত্তিক (সরাসরি HTML-এ লেখা, আইকন/লোগো/সিম্পল গ্রাফিক্সের জন্য ভালো)। দুটোই এই মুহূর্তে শুধু <strong>পরিচিতিমূলকভাবে</strong> দেখানো হলো — এগুলোর গভীর ব্যবহার শেখা যাবে JavaScript ও গ্রাফিক্স নিয়ে কাজ করার সময়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🏷️ <code>viewport</code> ও <code>description</code> মেটা ট্যাগ প্রতিটা প্রফেশনাল সাইটে থাকা উচিত — একটা মোবাইল স্কেলিংয়ের জন্য, অন্যটা SEO-র জন্য।</div>
          <div class="takeaway-item">🖼️ <code>&lt;link rel="icon"&gt;</code> দিয়ে ব্রাউজার ট্যাবে favicon যোগ করা যায়।</div>
          <div class="takeaway-item">🗂️ <code>data-*</code> অ্যাট্রিবিউট দিয়ে JavaScript-এর জন্য অতিরিক্ত তথ্য এলিমেন্টে লুকিয়ে রাখা যায়।</div>
          <div class="takeaway-item">📖 <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> দিয়ে JavaScript ছাড়াই ক্লিকে-খোলা কনটেন্ট (FAQ) বানানো যায়।</div>
          <div class="takeaway-item">📊 <code>&lt;progress&gt;</code> কাজের অগ্রগতি দেখায়, <code>&lt;meter&gt;</code> রেঞ্জের ভেতরে একটা স্ট্যাটিক মান দেখায়।</div>
          <div class="takeaway-item">🎨 <code>&lt;canvas&gt;</code> (JS দিয়ে আঁকা, পিক্সেল-ভিত্তিক) ও <code>&lt;svg&gt;</code> (HTML-এ সরাসরি, ভেক্টর-ভিত্তিক) — দুটোই গ্রাফিক্সের জন্য, তবে গভীর ব্যবহার পরে শিখবে।</div>
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
          <li>ক্যারেক্টার এনটিটি (Character Entities)</li>
          <li>HTML ভ্যালিডেশন ও পুরো কোর্সের কমন ভুলের রিক্যাপ</li>
          <li>Accessibility (♿) বেস্ট প্র্যাকটিস</li>
          <li>CSS ও JavaScript কীভাবে HTML-এর সাথে যুক্ত হয়</li>
          <li>কোড অর্গানাইজেশন ও নামকরণের ভালো অভ্যাস</li>
        </ul>
        <p>এই মডিউল শেষ করলে তুমি HTML-এর একদম বেসিক থেকে শুরু করে প্রফেশনাল লেভেলের বেস্ট প্র্যাকটিস পর্যন্ত সবকিছু জেনে যাবে। এরপর তুমি প্রস্তুত <strong>Amazing HTML Projects</strong> সেকশনে গিয়ে হাতে-কলমে প্র্যাকটিস করার জন্য!</p>
      `
    },
    {
      id: "10.1",
      title: "ক্যারেক্টার এনটিটি",
      content: `
        <h3>🔹 ১০.১ ক্যারেক্টার এনটিটি (Character Entities)</h3>
        <p>HTML-এ কিছু চিহ্ন (যেমন <code>&lt;</code>, <code>&gt;</code>) সরাসরি লিখলে ব্রাউজার সেটাকে ট্যাগ ভেবে ভুল বুঝতে পারে। এই সমস্যা এড়াতে বিশেষ কোড — যাকে বলে <strong>Character Entity</strong> — ব্যবহার করা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ভুল: ব্রাউজার &lt;b&gt; কে ট্যাগ ভেবে নেবে --&gt;</span>
<span class="kw">&lt;p&gt;</span>নিয়ম: &lt;b&gt; ট্যাগ ব্যবহার করো না<span class="kw">&lt;/p&gt;</span>

<span class="cmt">&lt;!-- সঠিক: এনটিটি ব্যবহার করে --&gt;</span>
<span class="kw">&lt;p&gt;</span>নিয়ম: <span class="str">&amp;lt;b&amp;gt;</span> ট্যাগ ব্যবহার করো না<span class="kw">&lt;/p&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>এনটিটি কোড</th><th>দেখায়</th><th>কখন ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><code>&amp;lt;</code></td><td>&lt;</td><td>"less than" চিহ্ন বা ট্যাগের মতো টেক্সট দেখাতে</td></tr>
              <tr><td><code>&amp;gt;</code></td><td>&gt;</td><td>"greater than" চিহ্ন দেখাতে</td></tr>
              <tr><td><code>&amp;amp;</code></td><td>&amp;</td><td>"&amp;" চিহ্ন দেখাতে (নিজে &amp; লিখলে এনটিটি কোড ভাবতে পারে ব্রাউজার)</td></tr>
              <tr><td><code>&amp;quot;</code></td><td>"</td><td>ডাবল কোটেশন দেখাতে</td></tr>
              <tr><td><code>&amp;nbsp;</code></td><td>(স্পেস)</td><td>একাধিক স্পেস পরপর দেখাতে (HTML সাধারণত একাধিক স্পেসকে একটাতে মিলিয়ে দেয়)</td></tr>
              <tr><td><code>&amp;copy;</code></td><td>©</td><td>কপিরাইট চিহ্ন (footer-এ ব্যবহার করেছিলাম মডিউল ৭-এ)</td></tr>
              <tr><td><code>&amp;hellip;</code></td><td>…</td><td>তিন-বিন্দু (ellipsis)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>মনে রাখার নিয়ম:</strong> যেকোনো এনটিটি কোড শুরু হয় <code>&amp;</code> দিয়ে ও শেষ হয় <code>;</code> দিয়ে। বাংলা লেখার সময় সাধারণত এনটিটির দরকার পড়ে না — মূলত ইংরেজি সিম্বল বা HTML-এর নিজস্ব চিহ্ন (<, >, &) দেখাতে গেলেই এগুলো লাগে।</p>
      `
    },
    {
      id: "10.2",
      title: "HTML ভ্যালিডেশন ও কমন ভুল",
      content: `
        <h3>🔹 ১০.২ HTML ভ্যালিডেশন</h3>
        <p>কোড লেখার পর সেটা ঠিকভাবে লেখা হয়েছে কিনা যাচাই করার জন্য W3C-এর একটা ফ্রি টুল আছে — <strong>W3C Markup Validator</strong> — যেখানে HTML ফাইল আপলোড করলে বা কোড পেস্ট করলে এরর ও ওয়ার্নিং দেখিয়ে দেয়। প্রফেশনাল ডেভেলপাররা মাঝেমধ্যে এই টুল দিয়ে নিজেদের কোড চেক করে নেয়।</p>

        <h3>🔹 এই কোর্স জুড়ে দেখা কমন ভুলগুলোর রিক্যাপ</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ভুল</th><th>কেন সমস্যা</th><th>শেখা হয়েছিল</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;meta charset&gt;</code> বাদ দেওয়া</td><td>বাংলা টেক্সট ভাঙা দেখাতে পারে</td><td>মডিউল ১</td></tr>
              <tr><td><code>alt</code> ছাড়া <code>&lt;img&gt;</code></td><td>Accessibility নষ্ট হয়</td><td>মডিউল ৪</td></tr>
              <tr><td>একই পেজে একাধিক <code>&lt;h1&gt;</code></td><td>SEO ও কনটেন্ট কাঠামো নষ্ট করে</td><td>মডিউল ২</td></tr>
              <tr><td><code>placeholder</code>-কে <code>&lt;label&gt;</code>-এর বিকল্প ভাবা</td><td>টাইপ করলে হিন্ট হারিয়ে যায়</td><td>মডিউল ৬</td></tr>
              <tr><td>নেস্টেড ট্যাগ ভুল ক্রমে বন্ধ করা</td><td>ব্রাউজার HTML ভুলভাবে রেন্ডার করতে পারে</td><td>মডিউল ১</td></tr>
              <tr><td>সিমান্টিক ট্যাগের বদলে সবসময় <code>&lt;div&gt;</code></td><td>Accessibility ও SEO সুবিধা হারানো</td><td>মডিউল ৭, ৮</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "10.3",
      title: "Accessibility বেস্ট প্র্যাকটিস",
      content: `
        <h3>🔹 ১০.৩ Accessibility (♿) বেস্ট প্র্যাকটিস</h3>
        <p><strong>Accessibility</strong> মানে এমনভাবে ওয়েবসাইট বানানো, যাতে যেকোনো ধরনের ব্যবহারকারী — যেমন চোখে কম দেখা বা একদম দেখতে না-পারা মানুষ, যারা স্ক্রিন-রিডার ব্যবহার করে — সাইটটা ব্যবহার করতে পারে। এই কোর্স জুড়েই আমরা এটার ছোট ছোট নিয়ম শিখেছি — এখানে সবগুলো একসাথে দেখে নিই।</p>

        <div class="takeaway-box">
          <div class="takeaway-item">🖼️ প্রতিটা <code>&lt;img&gt;</code> এ অর্থপূর্ণ <code>alt</code> টেক্সট দাও (শুধু ডেকোরেটিভ ছবি হলে <code>alt=""</code> খালি রাখা যায়)</div>
          <div class="takeaway-item">🏷️ প্রতিটা ফর্ম ইনপুটের সাথে <code>&lt;label for="id"&gt;</code> যুক্ত করো</div>
          <div class="takeaway-item">🔠 হেডিং ট্যাগ (h1-h6) ক্রম মেনে ব্যবহার করো, শুধু আকার বড়-ছোট দেখাতে না</div>
          <div class="takeaway-item">🏛️ যেখানে মানানসই, সিমান্টিক ট্যাগ (nav, main, article) ব্যবহার করো, সব জায়গায় শুধু div না</div>
          <div class="takeaway-item">🎨 শুধু রঙের ওপর ভরসা কোরো না (যেমন "লাল বাটনে ক্লিক করো") — রঙ-অন্ধ ব্যবহারকারীরা বুঝতে পারবে না; সাথে টেক্সট/আইকনও রাখো</div>
          <div class="takeaway-item">🪟 প্রতিটা <code>&lt;iframe&gt;</code> এ একটা অর্থবহ <code>title</code> দাও</div>
        </div>

        <p>💡 <strong>বাড়তি টিপ:</strong> HTML-এ <code>aria-label</code> নামে একটা অ্যাট্রিবিউটও আছে, যা কোনো এলিমেন্টের দৃশ্যমান টেক্সট না থাকলেও (যেমন শুধু আইকন-বাটন) স্ক্রিন-রিডারকে একটা নাম বলে দেয়:</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;button</span> <span class="fn">aria-label</span>=<span class="str">"সার্চ করো"</span><span class="kw">&gt;</span>🔍<span class="kw">&lt;/button&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "10.4",
      title: "CSS ও JavaScript যুক্ত করা",
      content: `
        <h3>🔹 ১০.৪ HTML-এর সাথে CSS ও JavaScript যুক্ত করা</h3>
        <p>এতদিন আমরা শুধু HTML শিখেছি। এবার দেখে নিই পরের ধাপে (CSS ও JavaScript কোর্সে) এই কাজগুলো ঠিক কীভাবে HTML ফাইলের সাথে যুক্ত হবে।</p>

        <h3>🔹 CSS যুক্ত করার ৩টা উপায়</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ১. External — আলাদা .css ফাইল লিংক করা (সবচেয়ে ভালো পদ্ধতি) --&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;link</span> <span class="fn">rel</span>=<span class="str">"stylesheet"</span> <span class="fn">href</span>=<span class="str">"style.css"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/head&gt;</span>

<span class="cmt">&lt;!-- ২. Internal — একই ফাইলের head-এ &lt;style&gt; ট্যাগ --&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;style&gt;</span>
    h1 { color: blue; }
  <span class="kw">&lt;/style&gt;</span>
<span class="kw">&lt;/head&gt;</span>

<span class="cmt">&lt;!-- ৩. Inline — সরাসরি ট্যাগের ভেতরে (শুধু ছোট/এককালীন দরকারে) --&gt;</span>
<span class="kw">&lt;h1</span> <span class="fn">style</span>=<span class="str">"color: blue;"</span><span class="kw">&gt;</span>শিরোনাম<span class="kw">&lt;/h1&gt;</span></code></pre></div>
        </div>

        <h3>🔹 JavaScript যুক্ত করার পদ্ধতি</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- External JS ফাইল, সাধারণত body এর শেষে বসানো হয় --&gt;</span>
<span class="kw">&lt;body&gt;</span>
  ...
  <span class="kw">&lt;script</span> <span class="fn">src</span>=<span class="str">"main.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/body&gt;</span></code></pre></div>
        </div>

        <p>💡 <code>&lt;script&gt;</code> সাধারণত <code>&lt;/body&gt;</code> এর ঠিক আগে বসানো হয় (আমাদের এই সাইটের প্রতিটা পেজেও তুমি এটাই দেখেছ) — এতে ব্রাউজার আগে পুরো পেজের কনটেন্ট দেখিয়ে দেয়, তারপর JavaScript চালায়, যা পেজ লোডিং দ্রুত মনে করায়।</p>

        <p><strong>মনে রাখো এই তিনের ভূমিকা:</strong></p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ভাষা</th><th>ফাইল</th><th>যুক্ত হয়</th></tr></thead>
            <tbody>
              <tr><td>HTML</td><td><code>.html</code></td><td>কাঠামো — এটাই মূল ফাইল</td></tr>
              <tr><td>CSS</td><td><code>.css</code></td><td><code>&lt;link&gt;</code> দিয়ে <code>&lt;head&gt;</code> এ</td></tr>
              <tr><td>JavaScript</td><td><code>.js</code></td><td><code>&lt;script&gt;</code> দিয়ে <code>&lt;/body&gt;</code> এর আগে</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "10.5",
      title: "কোড অর্গানাইজেশন",
      content: `
        <h3>🔹 ১০.৫ কোড অর্গানাইজেশন ও নামকরণের ভালো অভ্যাস</h3>
        <p>কোড শুধু চললেই হয় না — প্রফেশনাল ডেভেলপাররা এমনভাবে কোড লেখে, যাতে ৬ মাস পরেও নিজে বা অন্য কেউ সহজে বুঝতে পারে। কিছু ভালো অভ্যাস:</p>

        <ul>
          <li><strong>ইনডেন্টেশন সঠিক রাখা:</strong> নেস্টেড ট্যাগের ভেতরের কোড একটু ভেতরে ঢুকিয়ে (2 বা 4 স্পেস) লেখা — যেমন এই কোর্সের সব উদাহরণে করা হয়েছে</li>
          <li><strong>অর্থবহ class/id নাম:</strong> <code>class="div1"</code> এর বদলে <code>class="product-card"</code> লেখা, যাতে নাম দেখেই বোঝা যায় কী</li>
          <li><strong>ছোট হাতের অক্ষর ও হাইফেন:</strong> class/id নামে সাধারণত <code>product-card</code> এভাবে ছোট হাতের অক্ষর ও হাইফেন ব্যবহার হয়, <code>ProductCard</code> বা <code>product_card</code> কম ব্যবহৃত হয়</li>
          <li><strong>ফাইল ও ফোল্ডার সংগঠন:</strong> ছবি <code>images/</code> ফোল্ডারে, CSS <code>css/</code> ফোল্ডারে, JS <code>js/</code> ফোল্ডারে রাখা বড় প্রজেক্টে সাহায্য করে</li>
          <li><strong>দরকারি জায়গায় কমেন্ট:</strong> কোডের প্রতিটা লাইনে কমেন্ট না দিয়ে, যেখানে লজিক একটু জটিল বা বিশেষ কারণে করা হয়েছে সেখানেই কমেন্ট দেওয়া</li>
        </ul>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ❌ অস্পষ্ট নামকরণ --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"box1"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>

<span class="cmt">&lt;!-- ✅ অর্থবহ নামকরণ --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"pricing-card"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "10.6",
      title: "সারসংক্ষেপ ও কোর্স সমাপ্তি",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔣 <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, <code>&amp;nbsp;</code>, <code>&amp;copy;</code> এর মতো এনটিটি দিয়ে HTML-এর নিজস্ব চিহ্ন সরাসরি দেখানো যায়।</div>
          <div class="takeaway-item">✅ W3C Validator দিয়ে কোড চেক করা এবং এই কোর্সে শেখা কমন ভুলগুলো এড়িয়ে চলা প্রফেশনাল অভ্যাস।</div>
          <div class="takeaway-item">♿ Accessibility মানে সবার জন্য ব্যবহারযোগ্য সাইট বানানো — alt, label, সিমান্টিক ট্যাগ, aria-label সবই এর অংশ।</div>
          <div class="takeaway-item">🔗 CSS যুক্ত হয় <code>&lt;link&gt;</code> (head-এ) দিয়ে, JavaScript যুক্ত হয় <code>&lt;script&gt;</code> (body এর শেষে) দিয়ে।</div>
          <div class="takeaway-item">🗂️ অর্থবহ নামকরণ, সঠিক ইনডেন্টেশন ও গোছানো ফোল্ডার স্ট্রাকচার — ভালো কোডের মূল ভিত্তি।</div>
        </div>

        <h3>🎉 অভিনন্দন!</h3>
        <p>তুমি সম্পূর্ণ <strong>Banglay HTML</strong> কোর্সের ১০টা মডিউল শেষ করে ফেলেছ — একদম বেসিক ডকুমেন্ট স্ট্রাকচার থেকে শুরু করে ফর্ম, সিমান্টিক ট্যাগ, HTML5-এর আধুনিক ফিচার ও প্রফেশনাল বেস্ট প্র্যাকটিস পর্যন্ত!</p>
        <p>এখন সময় হাতে-কলমে প্র্যাকটিস করার। <strong>Amazing HTML Projects</strong> সেকশনে গিয়ে যা শিখেছ তা দিয়ে বাস্তব প্রজেক্ট বানানো শুরু করো — সেখানেই আসল শেখা হবে।</p>

        <a class="btn-next-module" href="projects.html">
          🚀 Amazing HTML Projects শুরু করো
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
};
