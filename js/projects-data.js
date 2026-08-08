// ══════════════════════════════════════════════════
// Banglay JavaScript — Amazing JavaScript Projects — Data File
//
// html-projects-data.js / css-projects-data.js এর সাথে হুবহু একই
// প্যাটার্নে লেখা, কিন্তু আলাদা ভ্যারিয়েবল নামে (JS_PROJECTS /
// JS_PROJECT_CONTENT) যাতে চারটা কোর্সের ডাটা একসাথে থাকলেও একে
// অপরের ডাটা ওভাররাইট না করে।
//
// ⚠️ গুরুত্বপূর্ণ ডিজাইন সিদ্ধান্ত: এই ১০টা প্রজেক্ট ইচ্ছাকৃতভাবে
// Python কোর্সের প্রজেক্ট (Number Guessing Game, Calculator,
// To-Do List, Password Generator, Tic-Tac-Toe, Expense Tracker,
// Quiz App, Web Scraper, Weather App, Chatbot, URL Shortener,
// Snake Game) থেকে সম্পূর্ণ ভিন্ন রাখা হয়েছে — এখানে বরং
// JavaScript-এর নিজস্ব শক্তি (রিয়েল-টাইম DOM আপডেট, ইভেন্ট,
// অ্যারে-ভিত্তিক লজিক, localStorage) হাইলাইট করা এমন প্রজেক্ট
// বাছাই করা হয়েছে, যা অন্য কোর্সে নেই।
//
// সবগুলো ১০টা প্রজেক্ট সম্পূর্ণ লেখা — সম্পূর্ণ কোড, লাইভ প্রিভিউ
// (প্রতিটাই সত্যিকারের ইন্টারঅ্যাক্টিভ), needs-box ও extend-box সহ।
//
// প্রতিটা প্রজেক্টে কোড lesson.html এর মতোই vscode-panel এ
// দেখানো হয়, ফলাফল CONSOLE বা LIVE PREVIEW প্যানেলে — যেটা বেশি
// মানানসই। ইন্টারঅ্যাক্টিভ ডেমোতে (innerHTML দিয়ে বসানো <script>
// এক্সিকিউট হয় না বলে) সরাসরি inline onclick/oninput ব্যবহার
// হয়েছে, যা বাস্তবে addEventListener দিয়ে করার সমতুল্য।
// ══════════════════════════════════════════════════

const JS_PROJECTS = [
  { id: 1,  title: "Live Text Analyzer",             icon: "📝", level: "বিগিনার" },
  { id: 2,  title: "Interactive Star Rating",          icon: "⭐", level: "বিগিনার" },
  { id: 3,  title: "Live Player Search",               icon: "🔍", level: "বিগিনার" },
  { id: 4,  title: "Dynamic Shopping Cart",            icon: "🛒", level: "ইন্টারমিডিয়েট" },
  { id: 5,  title: "Match Kickoff Countdown",           icon: "⏱️", level: "ইন্টারমিডিয়েট" },
  { id: 6,  title: "Random Group Stage Draw",           icon: "🎲", level: "ইন্টারমিডিয়েট" },
  { id: 7,  title: "Digital Match Scoreboard",          icon: "📟", level: "ইন্টারমিডিয়েট" },
  { id: 8,  title: "Memory Card Matching Game",         icon: "🃏", level: "অ্যাডভান্সড" },
  { id: 9,  title: "Favorite Players (localStorage)",   icon: "💾", level: "অ্যাডভান্সড" },
  { id: 10, title: "Complete Fan Dashboard",            icon: "🌐", level: "অ্যাডভান্সড" },
];

const JS_PROJECT_CONTENT = {

  /* ══════════════════════════════════════════════════
     PROJECT 1 — Live Text Analyzer (সম্পূর্ণ লেখা)
  ══════════════════════════════════════════════════ */
  1: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>📝 Live Text Analyzer</h2>
    <p class="subtitle">একজন ইউজার একটা টেক্সটবক্সে ম্যাচ-রিভিউ বা মন্তব্য লিখছে — টাইপ করার সাথে সাথে অক্ষরসংখ্যা, শব্দসংখ্যা ও আনুমানিক পড়ার সময় লাইভ দেখানো হচ্ছে। এটা এমন একটা কাজ যা শুধু JavaScript দিয়েই সম্ভব — HTML/CSS কখনো টাইপ করার সাথে সাথে হিসাব করতে পারে না।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>input ইভেন্ট — <strong>মডিউল ৯</strong></li>
        <li>স্ট্রিং-এর length ও split() (অ্যারেতে রূপান্তর) — <strong>মডিউল ৬</strong></li>
        <li>filter() দিয়ে খালি শব্দ বাদ দেওয়া — <strong>মডিউল ৬</strong></li>
        <li>Math.ceil() ও DOM আপডেট — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">textarea</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"reviewBox"</span>);

<span class="fn">textarea</span>.<span class="fn">addEventListener</span>(<span class="str">"input"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="kw">const</span> <span class="fn">text</span> = <span class="fn">e</span>.<span class="fn">target</span>.<span class="fn">value</span>;

  <span class="cmt">// অক্ষরসংখ্যা — স্পেসসহ পুরো টেক্সটের length</span>
  <span class="kw">const</span> <span class="fn">charCount</span> = <span class="fn">text</span>.<span class="fn">length</span>;

  <span class="cmt">// শব্দসংখ্যা — স্পেস দিয়ে ভেঙে, খালি অংশ বাদ দিয়ে</span>
  <span class="kw">const</span> <span class="fn">words</span> = <span class="fn">text</span>.<span class="fn">split</span>(<span class="str">" "</span>).<span class="fn">filter</span>((<span class="fn">word</span>) <span class="kw">=&gt;</span> <span class="fn">word</span> !== <span class="str">""</span>);
  <span class="kw">const</span> <span class="fn">wordCount</span> = <span class="fn">words</span>.<span class="fn">length</span>;

  <span class="cmt">// আনুমানিক পড়ার সময় — গড়ে প্রতি মিনিটে ২০০ শব্দ ধরে</span>
  <span class="kw">const</span> <span class="fn">readingTime</span> = <span class="fn">Math</span>.<span class="fn">ceil</span>(<span class="fn">wordCount</span> / <span class="num">200</span>);

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"charCount"</span>).<span class="fn">textContent</span> = <span class="fn">charCount</span>;
  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"wordCount"</span>).<span class="fn">textContent</span> = <span class="fn">wordCount</span>;
  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"readTime"</span>).<span class="fn">textContent</span> = <span class="fn">readingTime</span> &lt; <span class="num">1</span> ? <span class="str">"১ মিনিটের কম"</span> : <span class="str">\`~\${readingTime} মিনিট\`</span>;
});</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <textarea id="demo-review-1" rows="4" placeholder="ম্যাচ নিয়ে তোমার মতামত লেখো..." oninput="
          const text = this.value;
          const charCount = text.length;
          const words = text.split(' ').filter((w) => w !== '');
          const wordCount = words.length;
          const readingTime = Math.ceil(wordCount / 200);
          document.getElementById('demo-charcount-1').textContent = charCount;
          document.getElementById('demo-wordcount-1').textContent = wordCount;
          document.getElementById('demo-readtime-1').textContent = readingTime < 1 ? '১ মিনিটের কম' : '~' + readingTime + ' মিনিট';
        " style="width:100%;border:1px solid #D1D5DB;border-radius:8px;padding:10px 12px;font-size:13px;font-family:inherit;resize:vertical;margin-bottom:12px;"></textarea>
        <div style="display:flex;gap:20px;font-size:13px;">
          <div>🔤 অক্ষর: <strong id="demo-charcount-1">0</strong></div>
          <div>📖 শব্দ: <strong id="demo-wordcount-1">0</strong></div>
          <div>⏱️ পড়ার সময়: <strong id="demo-readtime-1">১ মিনিটের কম</strong></div>
        </div>
      </div>
    </div>

    <p>💡 <strong>কেন split(" ")-এর পর filter() দরকার:</strong> কেউ যদি একাধিক স্পেস দিয়ে শব্দ লেখে, তাহলে <code>split(" ")</code> মাঝে একটা খালি স্ট্রিং (<code>""</code>) তৈরি করে ফেলে, যেটা একটা "শব্দ" না অথচ গণনায় ঢুকে যেত। <code>filter((word) => word !== "")</code> দিয়ে এই খালি অংশগুলো বাদ দিয়ে সঠিক শব্দসংখ্যা পাওয়া যায় — বাস্তব প্রজেক্টে খুবই কমন একটা সমস্যা সমাধানের কৌশল।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা সর্বোচ্চ ক্যারেক্টার লিমিট (যেমন ২৮০, টুইটারের মতো) যোগ করে লিমিট ছাড়ালে লাল সতর্কতা দেখাও</div>
      <div class="extend-item">2️⃣ সবচেয়ে বেশি ব্যবহৃত শব্দটা বের করে দেখাও (অবজেক্ট দিয়ে গণনা করে, মডিউল ৭)</div>
      <div class="extend-item">3️⃣ বাক্যের সংখ্যাও গণনা করো (<code>.</code>, <code>!</code>, <code>?</code> দিয়ে ভেঙে)</div>
    </div>
  `,

  /* ══════════════════════════════════════════════════
     PROJECT 2 — Interactive Star Rating (সম্পূর্ণ লেখা)
  ══════════════════════════════════════════════════ */
  2: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>⭐ Interactive Star Rating Widget</h2>
    <p class="subtitle">একজন খেলোয়াড়ের পারফরম্যান্স ১-৫ তারা দিয়ে রেট করার একটা ইন্টারঅ্যাক্টিভ উইজেট — মাউস হোভার করলে প্রিভিউ দেখাবে, ক্লিক করলে রেটিং "লক" হয়ে যাবে। এই ধরনের উইজেট প্রায় প্রতিটা রিভিউ/রেটিং সিস্টেমে (ই-কমার্স, অ্যাপ স্টোর) ব্যবহার হয়।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>অ্যারে ও forEach — <strong>মডিউল ৬</strong></li>
        <li>classList (add/remove) — <strong>মডিউল ৮</strong></li>
        <li>mouseover/mouseout ও click ইভেন্ট — <strong>মডিউল ৯</strong></li>
        <li>Event Object ও e.target — <strong>মডিউল ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">stars</span> = <span class="fn">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".star"</span>);
<span class="kw">let</span> <span class="fn">selectedRating</span> = <span class="num">0</span>;   <span class="cmt">// এখনো কোনো রেটিং লক করা হয়নি</span>

<span class="cmt">// প্রতিটা তারার জন্য আলাদা ইভেন্ট লাগানো — forEach দিয়ে একসাথে সবগুলোতে</span>
<span class="fn">stars</span>.<span class="fn">forEach</span>((<span class="fn">star</span>, <span class="fn">index</span>) <span class="kw">=&gt;</span> {

  <span class="cmt">// হোভার করলে সেই পর্যন্ত সব তারা হাইলাইট (প্রিভিউ)</span>
  <span class="fn">star</span>.<span class="fn">addEventListener</span>(<span class="str">"mouseover"</span>, () <span class="kw">=&gt;</span> {
    <span class="fn">highlightStars</span>(<span class="fn">index</span> + <span class="num">1</span>);
  });

  <span class="cmt">// ক্লিক করলে সেই রেটিং স্থায়ীভাবে লক হয়ে যাবে</span>
  <span class="fn">star</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="kw">=&gt;</span> {
    <span class="fn">selectedRating</span> = <span class="fn">index</span> + <span class="num">1</span>;
    <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"ratingText"</span>).<span class="fn">textContent</span> = <span class="str">\`তুমি \${selectedRating} তারা দিয়েছ\`</span>;
  });
});

<span class="cmt">// মাউস পুরোপুরি সরে গেলে লক করা রেটিং-এ ফিরে যাওয়া</span>
<span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"starContainer"</span>).<span class="fn">addEventListener</span>(<span class="str">"mouseleave"</span>, () <span class="kw">=&gt;</span> {
  <span class="fn">highlightStars</span>(<span class="fn">selectedRating</span>);
});

<span class="kw">function</span> <span class="fn">highlightStars</span>(<span class="fn">count</span>) {
  <span class="fn">stars</span>.<span class="fn">forEach</span>((<span class="fn">star</span>, <span class="fn">index</span>) <span class="kw">=&gt;</span> {
    <span class="kw">if</span> (<span class="fn">index</span> &lt; <span class="fn">count</span>) {
      <span class="fn">star</span>.<span class="fn">classList</span>.<span class="fn">add</span>(<span class="str">"active"</span>);
    } <span class="kw">else</span> {
      <span class="fn">star</span>.<span class="fn">classList</span>.<span class="fn">remove</span>(<span class="str">"active"</span>);
    }
  });
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-star-2 { font-size: 30px; cursor: pointer; color: #D1D5DB; transition: color 0.15s ease; display: inline-block; }
          .demo-star-2.active { color: #FBBF24; }
        </style>
        <div id="demo-star-container-2"
             onmouseleave="
               const stars = document.querySelectorAll('.demo-star-2');
               const locked = Number(document.getElementById('demo-star-container-2').dataset.locked || 0);
               stars.forEach((s, i) => s.classList.toggle('active', i < locked));
             ">
          <span class="demo-star-2" onmouseover="const stars=document.querySelectorAll('.demo-star-2'); stars.forEach((s,i)=>s.classList.toggle('active', i<1));" onclick="document.getElementById('demo-star-container-2').dataset.locked=1; document.getElementById('demo-rating-text-2').textContent='তুমি ১ তারা দিয়েছ';">★</span><span class="demo-star-2" onmouseover="const stars=document.querySelectorAll('.demo-star-2'); stars.forEach((s,i)=>s.classList.toggle('active', i<2));" onclick="document.getElementById('demo-star-container-2').dataset.locked=2; document.getElementById('demo-rating-text-2').textContent='তুমি ২ তারা দিয়েছ';">★</span><span class="demo-star-2" onmouseover="const stars=document.querySelectorAll('.demo-star-2'); stars.forEach((s,i)=>s.classList.toggle('active', i<3));" onclick="document.getElementById('demo-star-container-2').dataset.locked=3; document.getElementById('demo-rating-text-2').textContent='তুমি ৩ তারা দিয়েছ';">★</span><span class="demo-star-2" onmouseover="const stars=document.querySelectorAll('.demo-star-2'); stars.forEach((s,i)=>s.classList.toggle('active', i<4));" onclick="document.getElementById('demo-star-container-2').dataset.locked=4; document.getElementById('demo-rating-text-2').textContent='তুমি ৪ তারা দিয়েছ';">★</span><span class="demo-star-2" onmouseover="const stars=document.querySelectorAll('.demo-star-2'); stars.forEach((s,i)=>s.classList.toggle('active', i<5));" onclick="document.getElementById('demo-star-container-2').dataset.locked=5; document.getElementById('demo-rating-text-2').textContent='তুমি ৫ তারা দিয়েছ';">★</span>
        </div>
        <p id="demo-rating-text-2" style="font-size:13px;color:#374151;margin-top:8px;">এখনো রেট করা হয়নি</p>
      </div>
    </div>

    <p>💡 <strong>এই প্রজেক্টের সবচেয়ে গুরুত্বপূর্ণ ধারণা — "State" (অবস্থা) মনে রাখা:</strong> <code>selectedRating</code> ভেরিয়েবলটাই এখানে "মেমোরি" হিসেবে কাজ করছে — মাউস সরে গেলে তারাগুলো ঠিক এই <strong>সেভ করা মান</strong>-এ ফিরে যায়, শূন্যে না। এটাই আধুনিক ওয়েব অ্যাপের একটা মৌলিক ধারণা: ইউজার ইন্টারফেসে যা দেখা যায়, তা আসলে কোনো না কোনো ভেরিয়েবলের "অবস্থা" প্রতিফলিত করে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা "গড় রেটিং" দেখাও যদি একাধিক ইউজারের রেটিং অ্যারেতে জমা থাকে (reduce ব্যবহার করে, মডিউল ৬)</div>
      <div class="extend-item">2️⃣ ★ ইমোজির বদলে SVG আইকন ব্যবহার করে আরও সুন্দর করো</div>
      <div class="extend-item">3️⃣ রেটিং localStorage-এ সেভ করো যাতে পেজ রিলোড করলেও থেকে যায় (মডিউল ১০, প্রজেক্ট ৯ দেখো)</div>
    </div>
  `,

  /* ══════════════════════════════════════════════════
     PROJECT 3-10 — শীঘ্রই আসছে (পরের সেশনে যোগ হবে)
  ══════════════════════════════════════════════════ */
  3: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🔍 Live Player Search</h2>
    <p class="subtitle">একটা ফুটবল খেলোয়াড়ের তালিকা, যেখানে সার্চ বক্সে টাইপ করার সাথে সাথে তালিকা লাইভ ফিল্টার হয়ে যায় — কোনো "সার্চ বাটন" ক্লিক করার দরকার নেই। এটাই আধুনিক ওয়েব অ্যাপের সবচেয়ে পরিচিত প্যাটার্নগুলোর একটা।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>অ্যারে ও filter() — <strong>মডিউল ৬</strong></li>
        <li>toLowerCase() ও includes() — <strong>মডিউল ২, ৬</strong></li>
        <li>map() দিয়ে অ্যারে থেকে HTML বানানো — <strong>মডিউল ৬</strong></li>
        <li>input ইভেন্ট ও innerHTML — <strong>মডিউল ৮, ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">players</span> = [<span class="str">"লিওনেল মেসি"</span>, <span class="str">"ক্রিস্টিয়ানো রোনালদো"</span>, <span class="str">"নেইমার জুনিয়র"</span>, <span class="str">"কিলিয়ান এমবাপে"</span>, <span class="str">"কেভিন ডি ব্রুইনা"</span>];

<span class="kw">const</span> <span class="fn">searchBox</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"searchInput"</span>);
<span class="kw">const</span> <span class="fn">resultList</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"resultList"</span>);

<span class="kw">function</span> <span class="fn">renderList</span>(<span class="fn">list</span>) {
  <span class="cmt">// প্রতিটা নামকে একটা &lt;li&gt; ট্যাগে রূপান্তর করে, সব জোড়া লাগানো</span>
  <span class="fn">resultList</span>.<span class="fn">innerHTML</span> = <span class="fn">list</span>
    .<span class="fn">map</span>((<span class="fn">name</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;li&gt;\${name}&lt;/li&gt;\`</span>)
    .<span class="fn">join</span>(<span class="str">""</span>);
}

<span class="fn">searchBox</span>.<span class="fn">addEventListener</span>(<span class="str">"input"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="kw">const</span> <span class="fn">query</span> = <span class="fn">e</span>.<span class="fn">target</span>.<span class="fn">value</span>.<span class="fn">toLowerCase</span>();

  <span class="kw">const</span> <span class="fn">filtered</span> = <span class="fn">players</span>.<span class="fn">filter</span>((<span class="fn">name</span>) <span class="kw">=&gt;</span>
    <span class="fn">name</span>.<span class="fn">toLowerCase</span>().<span class="fn">includes</span>(<span class="fn">query</span>)
  );

  <span class="fn">renderList</span>(<span class="fn">filtered</span>);
});

<span class="fn">renderList</span>(<span class="fn">players</span>);   <span class="cmt">// শুরুতে পুরো তালিকা দেখানো</span></code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <input type="text" placeholder="খেলোয়াড়ের নাম লেখো..." oninput="
          const players = ['লিওনেল মেসি', 'ক্রিস্টিয়ানো রোনালদো', 'নেইমার জুনিয়র', 'কিলিয়ান এমবাপে', 'কেভিন ডি ব্রুইনা'];
          const query = this.value.toLowerCase();
          const filtered = players.filter((name) => name.toLowerCase().includes(query));
          const list = document.getElementById('demo-result-3');
          if (filtered.length === 0) {
            list.innerHTML = '<li style=\\'color:#9CA3AF;list-style:none;\\'>কোনো খেলোয়াড় পাওয়া যায়নি</li>';
          } else {
            list.innerHTML = filtered.map((name) => '<li>' + name + '</li>').join('');
          }
        " style="border:1px solid #D1D5DB;border-radius:8px;padding:8px 12px;font-size:13px;width:100%;margin-bottom:12px;">
        <ul id="demo-result-3" style="margin-left:18px;font-size:13.5px;line-height:1.9;">
          <li>লিওনেল মেসি</li>
          <li>ক্রিস্টিয়ানো রোনালদো</li>
          <li>নেইমার জুনিয়র</li>
          <li>কিলিয়ান এমবাপে</li>
          <li>কেভিন ডি ব্রুইনা</li>
        </ul>
      </div>
    </div>

    <p>💡 <strong>দুইটা গুরুত্বপূর্ণ কৌশল খেয়াল করো:</strong></p>
    <ul>
      <li><code>.toLowerCase()</code> দুই জায়গাতেই (খুঁজতে থাকা টেক্সট আর নাম, দুটোতেই) ব্যবহার হয়েছে, যাতে "মেসি" আর "MESI" (ইংরেজি টাইপ হলেও) — বড়/ছোট হাতের অক্ষর নির্বিশেষে মিলে যায়। এই দুই-দিকের রূপান্তরকে বলে <strong>case-insensitive search</strong>।</li>
      <li><code>.map()</code> দিয়ে অ্যারের প্রতিটা নামকে একটা <code>&lt;li&gt;...&lt;/li&gt;</code> স্ট্রিং-এ বদলানো হয়েছে, তারপর <code>.join("")</code> দিয়ে সবগুলো একসাথে জোড়া লেগে একটাই বড় HTML স্ট্রিং হয়ে গেছে — এটাই "ডাটা থেকে HTML জেনারেট করার" সবচেয়ে বেশি ব্যবহৃত JavaScript প্যাটার্ন।</li>
    </ul>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ কিছুই না মিললে "কোনো খেলোয়াড় পাওয়া যায়নি" মেসেজ দেখাও (এই ডেমোতেই যোগ করা আছে, কোডে নিজে বসিয়ে দেখো)</div>
      <div class="extend-item">2️⃣ ম্যাচ করা অংশটুকু <code>&lt;mark&gt;</code> দিয়ে হাইলাইট করে দেখাও (HTML মডিউল ২ মনে আছে?)</div>
      <div class="extend-item">3️⃣ খেলোয়াড়ের নামের পাশাপাশি দলের নাম দিয়েও সার্চ করার সুযোগ দাও (অবজেক্টের অ্যারে ব্যবহার করে, মডিউল ৭)</div>
    </div>
  `,
  4: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🛒 Dynamic Shopping Cart</h2>
    <p class="subtitle">একটা ফ্যান-স্টোরের শপিং কার্ট — জার্সি, স্কার্ফ, বল যোগ করো, কোয়ান্টিটি +/- বাটনে বাড়াও-কমাও, প্রতিটা আইটেমের সাবটোটাল ও পুরো কার্টের গ্র্যান্ড টোটাল রিয়েল-টাইমে আপডেট হবে। এটা এমন একটা প্রজেক্ট যা প্রায় প্রতিটা ই-কমার্স সাইটের মূল ভিত্তি — বানিয়ে ফেললে সত্যিকারের একটা প্রফেশনাল ফিচার শেখা হয়ে যাবে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>অবজেক্টের অ্যারে — <strong>মডিউল ৬, ৭</strong></li>
        <li>map(), reduce(), find() — <strong>মডিউল ৬</strong></li>
        <li>DOM re-render প্যাটার্ন — <strong>মডিউল ৮</strong></li>
        <li>Event Object ও e.target — <strong>মডিউল ৯</strong></li>
        <li>Template Literal দিয়ে ডাইনামিক HTML বানানো — <strong>মডিউল ২</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// প্রতিটা কার্ট আইটেম একটা অবজেক্ট — id, নাম, দাম, quantity</span>
<span class="kw">let</span> <span class="fn">cart</span> = [
  { <span class="fn">id</span>: <span class="num">1</span>, <span class="fn">name</span>: <span class="str">"হোম জার্সি"</span>, <span class="fn">price</span>: <span class="num">1200</span>, <span class="fn">qty</span>: <span class="num">1</span> },
  { <span class="fn">id</span>: <span class="num">2</span>, <span class="fn">name</span>: <span class="str">"ফ্যান স্কার্ফ"</span>, <span class="fn">price</span>: <span class="num">350</span>, <span class="fn">qty</span>: <span class="num">2</span> },
];

<span class="kw">function</span> <span class="fn">renderCart</span>() {
  <span class="kw">const</span> <span class="fn">cartBox</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"cartItems"</span>);

  <span class="cmt">// প্রতিটা আইটেম থেকে একটা কার্ড বানিয়ে সব জোড়া লাগানো</span>
  <span class="fn">cartBox</span>.<span class="fn">innerHTML</span> = <span class="fn">cart</span>.<span class="fn">map</span>((<span class="fn">item</span>) <span class="kw">=&gt;</span> <span class="str">\`
    &lt;div class="cart-row"&gt;
      &lt;span&gt;\${item.name}&lt;/span&gt;
      &lt;button onclick="changeQty(\${item.id}, -1)"&gt;−&lt;/button&gt;
      &lt;span&gt;\${item.qty}&lt;/span&gt;
      &lt;button onclick="changeQty(\${item.id}, 1)"&gt;+&lt;/button&gt;
      &lt;span&gt;৳\${item.price * item.qty}&lt;/span&gt;
    &lt;/div&gt;
  \`</span>).<span class="fn">join</span>(<span class="str">""</span>);

  <span class="cmt">// reduce দিয়ে সব আইটেমের সাবটোটাল যোগ করে গ্র্যান্ড টোটাল বের করা</span>
  <span class="kw">const</span> <span class="fn">total</span> = <span class="fn">cart</span>.<span class="fn">reduce</span>((<span class="fn">sum</span>, <span class="fn">item</span>) <span class="kw">=&gt;</span> <span class="fn">sum</span> + <span class="fn">item</span>.<span class="fn">price</span> * <span class="fn">item</span>.<span class="fn">qty</span>, <span class="num">0</span>);
  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"cartTotal"</span>).<span class="fn">textContent</span> = <span class="str">\`৳\${total}\`</span>;
}

<span class="kw">function</span> <span class="fn">changeQty</span>(<span class="fn">id</span>, <span class="fn">delta</span>) {
  <span class="cmt">// find() দিয়ে ঠিক এই id-এর আইটেমটা খুঁজে বের করা</span>
  <span class="kw">const</span> <span class="fn">item</span> = <span class="fn">cart</span>.<span class="fn">find</span>((<span class="fn">i</span>) <span class="kw">=&gt;</span> <span class="fn">i</span>.<span class="fn">id</span> === <span class="fn">id</span>);
  <span class="fn">item</span>.<span class="fn">qty</span> = <span class="fn">Math</span>.<span class="fn">max</span>(<span class="num">1</span>, <span class="fn">item</span>.<span class="fn">qty</span> + <span class="fn">delta</span>);  <span class="cmt">// ১-এর নিচে নামবে না</span>
  <span class="fn">renderCart</span>();  <span class="cmt">// ডাটা বদলানোর পর পুরো UI আবার আঁকা</span>
}

<span class="fn">renderCart</span>();  <span class="cmt">// প্রথমবার পেজ লোড হলে দেখানো</span></code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-cart-row-4 { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid #F3F4F6; font-size: 13px; }
          .demo-cart-row-4 .demo-name-4 { flex: 1; }
          .demo-cart-row-4 button { background: #F0F9FF; border: 1px solid #0066CC; color: #0066CC; width: 26px; height: 26px; border-radius: 6px; cursor: pointer; font-size: 14px; }
          .demo-cart-row-4 .demo-price-4 { width: 75px; text-align: right; font-weight: 600; }
        </style>
        <div id="demo-cart-items-4">
          <div class="demo-cart-row-4" data-price="1200">
            <span class="demo-name-4">হোম জার্সি</span>
            <button onclick="
              const row=this.parentElement; const q=row.querySelector('.demo-qty-4'); const p=row.querySelector('.demo-price-4'); const price=Number(row.dataset.price);
              let qty=Math.max(1, Number(q.textContent)-1); q.textContent=qty; p.textContent='৳'+(price*qty);
              let total=0; document.querySelectorAll('#demo-cart-items-4 .demo-price-4').forEach(el=>total+=Number(el.textContent.replace('৳','')));
              document.getElementById('demo-cart-total-4').textContent='৳'+total;
            ">−</button>
            <span class="demo-qty-4">1</span>
            <button onclick="
              const row=this.parentElement; const q=row.querySelector('.demo-qty-4'); const p=row.querySelector('.demo-price-4'); const price=Number(row.dataset.price);
              let qty=Number(q.textContent)+1; q.textContent=qty; p.textContent='৳'+(price*qty);
              let total=0; document.querySelectorAll('#demo-cart-items-4 .demo-price-4').forEach(el=>total+=Number(el.textContent.replace('৳','')));
              document.getElementById('demo-cart-total-4').textContent='৳'+total;
            ">+</button>
            <span class="demo-price-4">৳1200</span>
          </div>
          <div class="demo-cart-row-4" data-price="350">
            <span class="demo-name-4">ফ্যান স্কার্ফ</span>
            <button onclick="
              const row=this.parentElement; const q=row.querySelector('.demo-qty-4'); const p=row.querySelector('.demo-price-4'); const price=Number(row.dataset.price);
              let qty=Math.max(1, Number(q.textContent)-1); q.textContent=qty; p.textContent='৳'+(price*qty);
              let total=0; document.querySelectorAll('#demo-cart-items-4 .demo-price-4').forEach(el=>total+=Number(el.textContent.replace('৳','')));
              document.getElementById('demo-cart-total-4').textContent='৳'+total;
            ">−</button>
            <span class="demo-qty-4">2</span>
            <button onclick="
              const row=this.parentElement; const q=row.querySelector('.demo-qty-4'); const p=row.querySelector('.demo-price-4'); const price=Number(row.dataset.price);
              let qty=Number(q.textContent)+1; q.textContent=qty; p.textContent='৳'+(price*qty);
              let total=0; document.querySelectorAll('#demo-cart-items-4 .demo-price-4').forEach(el=>total+=Number(el.textContent.replace('৳','')));
              document.getElementById('demo-cart-total-4').textContent='৳'+total;
            ">+</button>
            <span class="demo-price-4">৳700</span>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:12px;font-size:15px;font-weight:700;">
          <span>গ্র্যান্ড টোটাল</span>
          <span id="demo-cart-total-4">৳1900</span>
        </div>
      </div>
    </div>

    <p>💡 <strong>এই প্রজেক্টের সবচেয়ে গুরুত্বপূর্ণ প্যাটার্ন — "ডাটা বদলাও, তারপর পুরো UI আবার আঁকো":</strong> <code>changeQty()</code> ফাংশন সরাসরি DOM-এর কোনো সংখ্যা বদলায় না — এটা শুধু <code>cart</code> অ্যারের ডাটা বদলায়, তারপর <code>renderCart()</code> কল করে যা পুরো তালিকা আবার নতুন করে আঁকে ডাটা অনুযায়ী। এই "ডাটা-প্রথম" পদ্ধতিটাই React-এর মতো আধুনিক ফ্রেমওয়ার্কের মূল দর্শন — ডাটা বদলাও, UI নিজে থেকেই তার সাথে মিলিয়ে যাক।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা আইটেমে একটা "✕ বাদ দাও" বাটন যোগ করো যা <code>filter()</code> দিয়ে অ্যারে থেকে সেই আইটেম বাদ দেয়</div>
      <div class="extend-item">2️⃣ একটা কুপন কোড বক্স যোগ করো, যা মিললে টোটালে ১০% ছাড় দেয়</div>
      <div class="extend-item">3️⃣ কার্ট খালি হয়ে গেলে "তোমার কার্ট খালি" মেসেজ দেখাও</div>
      <div class="extend-item">4️⃣ নতুন প্রোডাক্ট যোগ করার একটা ফর্ম বানাও (নাম+দাম দিয়ে <code>cart.push()</code> করে)</div>
    </div>
  `,
  5: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>⏱️ Match Kickoff Countdown</h2>
    <p class="subtitle">একটা ম্যাচ কিকঅফ হতে আর কত সময় বাকি তা প্রতি সেকেন্ডে আপডেট হয়ে দেখানো — <code>Date</code> অবজেক্ট ও <code>setInterval</code> দিয়ে একটা সত্যিকারের "লাইভ" ফিচার তৈরি করা, যা এই কোর্সে প্রথমবার সময়ের সাথে সাথে নিজে থেকেই আপডেট হয়।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li><code>Date</code> অবজেক্ট ও মিলিসেকেন্ড হিসাব — নতুন ধারণা</li>
        <li><code>setInterval()</code> — নির্দিষ্ট বিরতিতে বারবার কোড চালানো</li>
        <li>Math.floor() দিয়ে ঘণ্টা/মিনিট/সেকেন্ড বের করা — <strong>মডিউল ২</strong></li>
        <li>Template Literal দিয়ে ফরম্যাট করা — <strong>মডিউল ২</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// কিকঅফের সময় — বর্তমান সময় থেকে ২ ঘণ্টা পরে (বাস্তবে নির্দিষ্ট তারিখ বসবে)</span>
<span class="kw">const</span> <span class="fn">kickoffTime</span> = <span class="fn">Date</span>.<span class="fn">now</span>() + (<span class="num">2</span> * <span class="num">60</span> * <span class="num">60</span> * <span class="num">1000</span>);  <span class="cmt">// মিলিসেকেন্ডে</span>

<span class="kw">function</span> <span class="fn">updateCountdown</span>() {
  <span class="kw">const</span> <span class="fn">remaining</span> = <span class="fn">kickoffTime</span> - <span class="fn">Date</span>.<span class="fn">now</span>();  <span class="cmt">// বাকি সময় (মিলিসেকেন্ডে)</span>

  <span class="kw">if</span> (<span class="fn">remaining</span> &lt;= <span class="num">0</span>) {
    <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"countdown"</span>).<span class="fn">textContent</span> = <span class="str">"⚽ কিকঅফ!"</span>;
    <span class="fn">clearInterval</span>(<span class="fn">timer</span>);   <span class="cmt">// সময় শেষ, ইন্টারভাল বন্ধ করে দাও</span>
    <span class="kw">return</span>;
  }

  <span class="cmt">// মিলিসেকেন্ড থেকে ঘণ্টা/মিনিট/সেকেন্ড বের করা</span>
  <span class="kw">const</span> <span class="fn">hours</span> = <span class="fn">Math</span>.<span class="fn">floor</span>(<span class="fn">remaining</span> / (<span class="num">1000</span> * <span class="num">60</span> * <span class="num">60</span>));
  <span class="kw">const</span> <span class="fn">minutes</span> = <span class="fn">Math</span>.<span class="fn">floor</span>((<span class="fn">remaining</span> / (<span class="num">1000</span> * <span class="num">60</span>)) % <span class="num">60</span>);
  <span class="kw">const</span> <span class="fn">seconds</span> = <span class="fn">Math</span>.<span class="fn">floor</span>((<span class="fn">remaining</span> / <span class="num">1000</span>) % <span class="num">60</span>);

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"countdown"</span>).<span class="fn">textContent</span> = <span class="str">\`\${hours}ঘ \${minutes}মি \${seconds}সে\`</span>;
}

<span class="cmt">// প্রতি ১০০০ মিলিসেকেন্ড (১ সেকেন্ড) পর পর updateCountdown() চলবে</span>
<span class="kw">const</span> <span class="fn">timer</span> = <span class="fn">setInterval</span>(<span class="fn">updateCountdown</span>, <span class="num">1000</span>);</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <p style="font-size:13px;color:#6B7280;margin-bottom:10px;">(এই ডেমোতে দ্রুত ফলাফল দেখার জন্য কিকঅফ ধরা হয়েছে মাত্র ১৫ সেকেন্ড পরে)</p>
        <button onclick="
          const btn = this;
          btn.disabled = true;
          btn.textContent = 'চলছে...';
          const kickoffTime = Date.now() + 15000;
          const el = document.getElementById('demo-countdown-5');
          const timer = setInterval(() => {
            const remaining = kickoffTime - Date.now();
            if (remaining <= 0) {
              el.textContent = '⚽ কিকঅফ!';
              el.style.color = '#DC2626';
              clearInterval(timer);
              btn.textContent = 'আবার চালাও';
              btn.disabled = false;
              return;
            }
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining / 1000) % 60);
            el.textContent = minutes + 'মি ' + seconds + 'সে';
          }, 1000);
        " style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;margin-bottom:14px;">কাউন্টডাউন শুরু করো</button>
        <div id="demo-countdown-5" style="font-size:28px;font-weight:700;color:#0066CC;font-family:'JetBrains Mono',monospace;">০মি ০সে</div>
      </div>
    </div>

    <p>👆 বাটনে ক্লিক করো — একটা সত্যিকারের লাইভ কাউন্টডাউন শুরু হবে যা প্রতি সেকেন্ডে আপডেট হতে থাকবে, শেষে "⚽ কিকঅফ!" দেখাবে।</p>

    <p>💡 <strong>মূল ধারণাগুলো:</strong></p>
    <ul>
      <li><code>Date.now()</code> — বর্তমান মুহূর্তটাকে ১৯৭০ সাল থেকে গণনা করা মিলিসেকেন্ডের একটা বিশাল সংখ্যা হিসেবে দেয় — দুইটা সময়ের পার্থক্য বের করতে এই সংখ্যা থেকে সংখ্যা বিয়োগ করাই যথেষ্ট।</li>
      <li><code>setInterval(ফাংশন, সময়)</code> — নির্দিষ্ট সময় (মিলিসেকেন্ডে) পরপর ফাংশনটা বারবার চালাতে থাকে, যতক্ষণ না <code>clearInterval()</code> দিয়ে থামানো হয়।</li>
      <li>মডিউল ২-এ শেখা <code>%</code> (ভাগশেষ) এখানে খুবই গুরুত্বপূর্ণ ভূমিকা রাখছে — মোট সেকেন্ড থেকে "কত মিনিট পার হয়ে গেছে তার বাইরে অবশিষ্ট সেকেন্ড কত" বের করতে এটাই একমাত্র সহজ উপায়।</li>
    </ul>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রকৃত তারিখ ও সময় ইনপুট নেওয়ার একটা ফর্ম যোগ করো (<code>&lt;input type="datetime-local"&gt;</code>)</div>
      <div class="extend-item">2️⃣ ২৪ ঘণ্টার বেশি বাকি থাকলে "দিন" এককও যোগ করো</div>
      <div class="extend-item">3️⃣ শেষ ৬০ সেকেন্ডে সংখ্যাগুলো লাল করে জরুরি ভাব আনো</div>
    </div>
  `,
  6: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🎲 Random Group Stage Draw</h2>
    <p class="subtitle">টুর্নামেন্টের ৮টা দলকে র‍্যান্ডমভাবে দুইটা গ্রুপে (গ্রুপ A ও গ্রুপ B) ভাগ করে দেওয়ার একটা ড্র জেনারেটর — ঠিক যেমন বিশ্বকাপ বা চ্যাম্পিয়নস লিগের গ্রুপ ড্র হয়। এখানে শেখা হবে কীভাবে একটা অ্যারেকে সত্যিকারের এলোমেলো (shuffle) করতে হয় — এটা প্রোগ্রামিংয়ের একটা ক্লাসিক সমস্যা।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>অ্যারে (slice, splice) — <strong>মডিউল ৬</strong></li>
        <li>Math.random() ও Math.floor() — <strong>মডিউল ২</strong></li>
        <li>while লুপ — <strong>মডিউল ৪</strong></li>
        <li>DOM-এ ডাইনামিক লিস্ট বানানো — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">teams</span> = [<span class="str">"আর্জেন্টিনা"</span>, <span class="str">"ব্রাজিল"</span>, <span class="str">"ফ্রান্স"</span>, <span class="str">"জার্মানি"</span>, <span class="str">"স্পেন"</span>, <span class="str">"ইংল্যান্ড"</span>, <span class="str">"পর্তুগাল"</span>, <span class="str">"নেদারল্যান্ডস"</span>];

<span class="kw">function</span> <span class="fn">shuffleAndDraw</span>() {
  <span class="cmt">// মূল অ্যারে নষ্ট না করে একটা কপি বানানো (মডিউল ৬ মনে আছে?)</span>
  <span class="kw">const</span> <span class="fn">shuffled</span> = [...<span class="fn">teams</span>];

  <span class="cmt">// একটা করে দল এলোমেলোভাবে বের করে আনার পদ্ধতি</span>
  <span class="kw">const</span> <span class="fn">drawOrder</span> = [];
  <span class="kw">while</span> (<span class="fn">shuffled</span>.<span class="fn">length</span> &gt; <span class="num">0</span>) {
    <span class="kw">const</span> <span class="fn">randomIndex</span> = <span class="fn">Math</span>.<span class="fn">floor</span>(<span class="fn">Math</span>.<span class="fn">random</span>() * <span class="fn">shuffled</span>.<span class="fn">length</span>);
    <span class="kw">const</span> [<span class="fn">picked</span>] = <span class="fn">shuffled</span>.<span class="fn">splice</span>(<span class="fn">randomIndex</span>, <span class="num">1</span>);  <span class="cmt">// এলোমেলো একটা তুলে নিয়ে বাকিদের থেকে বাদ দেওয়া</span>
    <span class="fn">drawOrder</span>.<span class="fn">push</span>(<span class="fn">picked</span>);
  }

  <span class="cmt">// প্রথম ৪টা গ্রুপ A, পরের ৪টা গ্রুপ B</span>
  <span class="kw">const</span> <span class="fn">groupA</span> = <span class="fn">drawOrder</span>.<span class="fn">slice</span>(<span class="num">0</span>, <span class="num">4</span>);
  <span class="kw">const</span> <span class="fn">groupB</span> = <span class="fn">drawOrder</span>.<span class="fn">slice</span>(<span class="num">4</span>, <span class="num">8</span>);

  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"গ্রুপ A:"</span>, <span class="fn">groupA</span>);
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"গ্রুপ B:"</span>, <span class="fn">groupB</span>);
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <button onclick="
          const teams = ['আর্জেন্টিনা', 'ব্রাজিল', 'ফ্রান্স', 'জার্মানি', 'স্পেন', 'ইংল্যান্ড', 'পর্তুগাল', 'নেদারল্যান্ডস'];
          const shuffled = [...teams];
          const drawOrder = [];
          while (shuffled.length > 0) {
            const randomIndex = Math.floor(Math.random() * shuffled.length);
            const picked = shuffled.splice(randomIndex, 1)[0];
            drawOrder.push(picked);
          }
          const groupA = drawOrder.slice(0, 4);
          const groupB = drawOrder.slice(4, 8);
          document.getElementById('demo-groupA-6').innerHTML = groupA.map((t) => '<li>' + t + '</li>').join('');
          document.getElementById('demo-groupB-6').innerHTML = groupB.map((t) => '<li>' + t + '</li>').join('');
        " style="background:#0066CC;color:white;border:none;padding:10px 22px;border-radius:6px;cursor:pointer;font-size:13px;margin-bottom:16px;">🎲 ড্র শুরু করো</button>
        <div style="display:flex;gap:24px;">
          <div>
            <p style="font-size:13px;font-weight:700;color:#0066CC;margin-bottom:6px;">গ্রুপ A</p>
            <ul id="demo-groupA-6" style="margin-left:18px;font-size:13px;line-height:1.8;">
              <li style="color:#9CA3AF;">ড্র করা হয়নি</li>
            </ul>
          </div>
          <div>
            <p style="font-size:13px;font-weight:700;color:#DC2626;margin-bottom:6px;">গ্রুপ B</p>
            <ul id="demo-groupB-6" style="margin-left:18px;font-size:13px;line-height:1.8;">
              <li style="color:#9CA3AF;">ড্র করা হয়নি</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p>👆 বাটনে বারবার ক্লিক করো — প্রতিবার সম্পূর্ণ ভিন্ন একটা এলোমেলো বিভাজন পাবে।</p>

    <p>💡 <strong>শাফলিং অ্যালগরিদমের মূল ধারণা:</strong> প্রতিবার বাকি থাকা দলগুলোর মধ্যে থেকে <code>Math.random()</code> দিয়ে একটা এলোমেলো ইনডেক্স বাছাই করে, <code>splice()</code> দিয়ে সেই দলটাকে "তুলে" নেওয়া হচ্ছে ও একইসাথে বাকিদের তালিকা থেকে বাদ দেওয়া হচ্ছে — এভাবে একটা দল দুইবার বাছাই হওয়ার কোনো সুযোগই নেই। এটাই কার্ড শাফল করা বা লটারি ড্র-এর পেছনের মূল প্রোগ্রামিং ধারণা।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ ৪টা গ্রুপ (A, B, C, D) বানাও ১৬টা দল দিয়ে</div>
      <div class="extend-item">2️⃣ "পট" সিস্টেম যোগ করো — সেরা ৪ দল আলাদা আলাদা গ্রুপে পড়বে এটা নিশ্চিত করে (সত্যিকারের বিশ্বকাপ ড্রয়ের নিয়মের কাছাকাছি)</div>
      <div class="extend-item">3️⃣ ড্র হওয়ার সময় একটা ছোট অ্যানিমেশন/সাসপেন্স ইফেক্ট যোগ করো (setTimeout দিয়ে একটার পর একটা দল ধীরে ধীরে দেখানো)</div>
    </div>
  `,
  7: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>📟 Digital Match Scoreboard</h2>
    <p class="subtitle">দুই দলের স্কোর ট্র্যাক করা, প্লাস চলমান ম্যাচ টাইমার (স্টার্ট/পজ/রিসেট) — একটা সত্যিকারের স্টেডিয়াম স্কোরবোর্ডের মতো কাজ করা একটা প্রজেক্ট। এখানে স্কোর ও সময় — দুই ধরনের "state" (অবস্থা) একসাথে ম্যানেজ করা শেখা যাবে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>ভেরিয়েবলে state রাখা ও আপডেট করা — <strong>মডিউল ১</strong></li>
        <li>setInterval/clearInterval — <strong>মডিউল ১০ প্রজেক্ট ৫ থেকে পরিচিত</strong></li>
        <li>DOM ম্যানিপুলেশন ও একাধিক ইভেন্ট হ্যান্ডলার — <strong>মডিউল ৮, ৯</strong></li>
        <li>Math.floor() দিয়ে সময় ফরম্যাট করা — <strong>মডিউল ২</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">scoreA</span> = <span class="num">0</span>;
<span class="kw">let</span> <span class="fn">scoreB</span> = <span class="num">0</span>;
<span class="kw">let</span> <span class="fn">seconds</span> = <span class="num">0</span>;
<span class="kw">let</span> <span class="fn">timerInterval</span> = <span class="kw">null</span>;   <span class="cmt">// টাইমার চলছে কিনা তা ট্র্যাক করতে</span>

<span class="kw">function</span> <span class="fn">addScore</span>(<span class="fn">team</span>) {
  <span class="kw">if</span> (<span class="fn">team</span> === <span class="str">"A"</span>) <span class="fn">scoreA</span>++;
  <span class="kw">else</span> <span class="fn">scoreB</span>++;

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"scoreA"</span>).<span class="fn">textContent</span> = <span class="fn">scoreA</span>;
  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"scoreB"</span>).<span class="fn">textContent</span> = <span class="fn">scoreB</span>;
}

<span class="kw">function</span> <span class="fn">toggleTimer</span>() {
  <span class="kw">if</span> (<span class="fn">timerInterval</span>) {
    <span class="cmt">// ইতিমধ্যে চলছে — থামাও</span>
    <span class="fn">clearInterval</span>(<span class="fn">timerInterval</span>);
    <span class="fn">timerInterval</span> = <span class="kw">null</span>;
  } <span class="kw">else</span> {
    <span class="cmt">// থামানো ছিল — চালু করো</span>
    <span class="fn">timerInterval</span> = <span class="fn">setInterval</span>(() <span class="kw">=&gt;</span> {
      <span class="fn">seconds</span>++;
      <span class="kw">const</span> <span class="fn">mins</span> = <span class="fn">Math</span>.<span class="fn">floor</span>(<span class="fn">seconds</span> / <span class="num">60</span>);
      <span class="kw">const</span> <span class="fn">secs</span> = <span class="fn">seconds</span> % <span class="num">60</span>;
      <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"matchTime"</span>).<span class="fn">textContent</span> =
        <span class="str">\`\${String(mins).padStart(2, "0")}:\${String(secs).padStart(2, "0")}\`</span>;
    }, <span class="num">1000</span>);
  }
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <div style="display:flex;justify-content:center;align-items:center;gap:24px;background:#0F172A;padding:20px;border-radius:10px;margin-bottom:14px;">
          <div style="text-align:center;">
            <p style="color:#93C5FD;font-size:12px;margin-bottom:4px;">দল A</p>
            <p id="demo-scoreA-7" style="color:white;font-size:32px;font-weight:700;font-family:'JetBrains Mono',monospace;">0</p>
          </div>
          <div style="color:#6B7280;font-size:20px;">—</div>
          <div style="text-align:center;">
            <p style="color:#FCA5A5;font-size:12px;margin-bottom:4px;">দল B</p>
            <p id="demo-scoreB-7" style="color:white;font-size:32px;font-weight:700;font-family:'JetBrains Mono',monospace;">0</p>
          </div>
          <div style="border-left:1px solid #374151;padding-left:20px;text-align:center;">
            <p style="color:#9CA3AF;font-size:11px;margin-bottom:4px;">সময়</p>
            <p id="demo-time-7" style="color:#22C55E;font-size:22px;font-weight:700;font-family:'JetBrains Mono',monospace;">00:00</p>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button onclick="document.getElementById('demo-scoreA-7').textContent = Number(document.getElementById('demo-scoreA-7').textContent) + 1" style="background:#0066CC;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">⚽ দল A গোল</button>
          <button onclick="document.getElementById('demo-scoreB-7').textContent = Number(document.getElementById('demo-scoreB-7').textContent) + 1" style="background:#DC2626;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">⚽ দল B গোল</button>
          <button onclick="
            const btn = this;
            if (window.demoScoreboardTimer7) {
              clearInterval(window.demoScoreboardTimer7);
              window.demoScoreboardTimer7 = null;
              btn.textContent = '▶️ শুরু করো';
            } else {
              btn.textContent = '⏸️ থামাও';
              window.demoScoreboardTimer7 = setInterval(() => {
                window.demoSeconds7 = (window.demoSeconds7 || 0) + 1;
                const mins = Math.floor(window.demoSeconds7 / 60);
                const secs = window.demoSeconds7 % 60;
                document.getElementById('demo-time-7').textContent = String(mins).padStart(2,'0') + ':' + String(secs).padStart(2,'0');
              }, 1000);
            }
          " style="background:#374151;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">▶️ শুরু করো</button>
          <button onclick="
            document.getElementById('demo-scoreA-7').textContent = 0;
            document.getElementById('demo-scoreB-7').textContent = 0;
            document.getElementById('demo-time-7').textContent = '00:00';
            window.demoSeconds7 = 0;
          " style="background:#F3F4F6;color:#374151;border:1px solid #D1D5DB;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px;">🔄 রিসেট</button>
        </div>
      </div>
    </div>

    <p>👆 গোল বাটনে ক্লিক করে স্কোর বাড়াও, "শুরু করো" চাপলে টাইমার চলবে (আবার চাপলে থামবে — একই বাটন দুই কাজ করে, একে বলে <strong>Toggle প্যাটার্ন</strong>)।</p>

    <p>💡 <strong>padStart() — নতুন কিন্তু কাজের মেথড:</strong> <code>String(5).padStart(2, "0")</code> ফলাফল দেয় <code>"05"</code> — সংখ্যাটাকে স্ট্রিং বানিয়ে সামনে দরকারমতো <code>"0"</code> বসিয়ে দেয়, যতক্ষণ না মোট দৈর্ঘ্য ২ হয়। এটা ছাড়া টাইমার <code>3:5</code> এর মতো দেখাতো, <code>padStart</code> দিয়ে ঠিক <code>03:05</code> এর মতো প্রফেশনাল ফরম্যাটে দেখানো যায়।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা "ভুলে গোল দিয়েছি" আন্ডু বাটন যোগ করো (স্কোর ১ কমানো, কিন্তু ০-এর নিচে না নামার শর্তসহ)</div>
      <div class="extend-item">2️⃣ হলুদ/লাল কার্ডের আলাদা কাউন্টার যোগ করো প্রতিটা দলের জন্য</div>
      <div class="extend-item">3️⃣ ৯০ মিনিট (৫৪০০ সেকেন্ড) পার হলে "ফুল টাইম" মেসেজ দেখিয়ে টাইমার স্বয়ংক্রিয়ভাবে থামিয়ে দাও</div>
    </div>
  `,
  8: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🃏 Memory Card Matching Game</h2>
    <p class="subtitle">ফুটবল-থিমের ইমোজি কার্ড উল্টিয়ে জোড়া মেলানোর ক্লাসিক মেমোরি গেম — এই কোর্সের সবচেয়ে জটিল ও ইন্টারঅ্যাক্টিভ প্রজেক্ট। এখানে একসাথে state management, টাইমিং (setTimeout), অ্যারে শাফলিং, আর ডাইনামিক DOM জেনারেশন — প্রায় পুরো কোর্সের সবকিছু মিলিয়ে একটা সত্যিকারের "গেম" তৈরি হচ্ছে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>অ্যারে শাফলিং (Fisher-Yates অ্যালগরিদম) — <strong>মডিউল ৬, প্রজেক্ট ৬</strong></li>
        <li>Destructuring Assignment Swap — <strong>মডিউল ১০</strong></li>
        <li>setTimeout() — নির্দিষ্ট সময় পরে একবার কিছু করা</li>
        <li>জটিল state management (কোনটা উল্টানো, কোনটা মিলে গেছে) — <strong>মডিউল ১</strong></li>
        <li>ডাইনামিক DOM জেনারেশন — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড (সরল করা সংস্করণ)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">icons</span> = [<span class="str">"⚽"</span>, <span class="str">"🏆"</span>, <span class="str">"🥅"</span>, <span class="str">"🟨"</span>, <span class="str">"🟥"</span>, <span class="str">"🧤"</span>];
<span class="kw">let</span> <span class="fn">deck</span> = [...<span class="fn">icons</span>, ...<span class="fn">icons</span>];  <span class="cmt">// প্রতিটা আইকন দুইবার — মোট ১২টা কার্ড</span>

<span class="kw">let</span> <span class="fn">flipped</span> = [];    <span class="cmt">// এই মুহূর্তে উল্টানো কার্ডের ইনডেক্স</span>
<span class="kw">let</span> <span class="fn">matched</span> = [];    <span class="cmt">// ইতিমধ্যে মিলে যাওয়া কার্ডের ইনডেক্স</span>
<span class="kw">let</span> <span class="fn">moves</span> = <span class="num">0</span>;

<span class="cmt">// Fisher-Yates শাফল — প্রতিটা কার্ডকে একবার এলোমেলো অন্য কারো সাথে অদলবদল করা</span>
<span class="kw">for</span> (<span class="kw">let</span> <span class="fn">i</span> = <span class="fn">deck</span>.<span class="fn">length</span> - <span class="num">1</span>; <span class="fn">i</span> &gt; <span class="num">0</span>; <span class="fn">i</span>--) {
  <span class="kw">const</span> <span class="fn">j</span> = <span class="fn">Math</span>.<span class="fn">floor</span>(<span class="fn">Math</span>.<span class="fn">random</span>() * (<span class="fn">i</span> + <span class="num">1</span>));
  [<span class="fn">deck</span>[<span class="fn">i</span>], <span class="fn">deck</span>[<span class="fn">j</span>]] = [<span class="fn">deck</span>[<span class="fn">j</span>], <span class="fn">deck</span>[<span class="fn">i</span>]];   <span class="cmt">// destructuring দিয়ে এক লাইনে অদলবদল</span>
}

<span class="kw">function</span> <span class="fn">flipCard</span>(<span class="fn">index</span>) {
  <span class="kw">if</span> (<span class="fn">flipped</span>.<span class="fn">includes</span>(<span class="fn">index</span>) || <span class="fn">matched</span>.<span class="fn">includes</span>(<span class="fn">index</span>)) <span class="kw">return</span>;  <span class="cmt">// আগে থেকে খোলা কার্ডে কিছু হবে না</span>

  <span class="fn">showCard</span>(<span class="fn">index</span>);
  <span class="fn">flipped</span>.<span class="fn">push</span>(<span class="fn">index</span>);

  <span class="kw">if</span> (<span class="fn">flipped</span>.<span class="fn">length</span> === <span class="num">2</span>) {
    <span class="fn">moves</span>++;
    <span class="kw">const</span> [<span class="fn">a</span>, <span class="fn">b</span>] = <span class="fn">flipped</span>;

    <span class="kw">if</span> (<span class="fn">deck</span>[<span class="fn">a</span>] === <span class="fn">deck</span>[<span class="fn">b</span>]) {
      <span class="fn">matched</span>.<span class="fn">push</span>(<span class="fn">a</span>, <span class="fn">b</span>);   <span class="cmt">// মিলে গেছে — খোলা থাকবে</span>
      <span class="fn">flipped</span> = [];
    } <span class="kw">else</span> {
      <span class="cmt">// মেলেনি — ০.৮ সেকেন্ড পর আবার বন্ধ করে দাও</span>
      <span class="fn">setTimeout</span>(() <span class="kw">=&gt;</span> {
        <span class="fn">hideCards</span>(<span class="fn">flipped</span>);
        <span class="fn">flipped</span> = [];
      }, <span class="num">800</span>);
    }
  }
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <button onclick="
          const icons = ['⚽','🏆','🥅','🟨','🟥','🧤'];
          let deck = [...icons, ...icons];
          for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
          }
          window.mg8 = { deck: deck, flipped: [], matched: [], moves: 0, busy: false };
          const grid = document.getElementById('demo-mg8-grid');
          grid.innerHTML = deck.map((icon, idx) =>
            '<button onclick=\\'window.mg8flip(' + idx + ')\\' id=\\'mg8-card-' + idx + '\\' style=\\'width:52px;height:52px;font-size:20px;background:#0066CC;border:none;border-radius:8px;cursor:pointer;color:white;margin:3px;\\'>?</button>'
          ).join('');
          document.getElementById('demo-mg8-moves').textContent = '0';
          document.getElementById('demo-mg8-status').textContent = 'কার্ড উল্টাও ও জোড়া খুঁজে বের করো!';

          window.mg8flip = function(idx) {
            const s = window.mg8;
            if (s.busy || s.matched.includes(idx) || s.flipped.includes(idx)) return;
            const cardEl = document.getElementById('mg8-card-' + idx);
            cardEl.textContent = s.deck[idx];
            cardEl.style.background = '#FEF3C7';
            cardEl.style.color = '#1F2937';
            s.flipped.push(idx);
            if (s.flipped.length === 2) {
              s.moves++;
              document.getElementById('demo-mg8-moves').textContent = s.moves;
              const a = s.flipped[0], b = s.flipped[1];
              if (s.deck[a] === s.deck[b]) {
                s.matched.push(a, b);
                s.flipped = [];
                if (s.matched.length === s.deck.length) {
                  document.getElementById('demo-mg8-status').textContent = '🎉 সম্পূর্ণ! মোট চাল: ' + s.moves;
                }
              } else {
                s.busy = true;
                setTimeout(function() {
                  s.flipped.forEach(function(i) {
                    const el = document.getElementById('mg8-card-' + i);
                    el.textContent = '?';
                    el.style.background = '#0066CC';
                    el.style.color = 'white';
                  });
                  s.flipped = [];
                  s.busy = false;
                }, 800);
              }
            }
          };
        " style="background:#0066CC;color:white;border:none;padding:10px 22px;border-radius:6px;cursor:pointer;font-size:13px;margin-bottom:14px;">🔄 নতুন গেম শুরু করো</button>

        <div style="display:flex;gap:16px;font-size:13px;margin-bottom:10px;">
          <div>🔢 চাল: <strong id="demo-mg8-moves">0</strong></div>
          <div id="demo-mg8-status" style="color:#6B7280;">"নতুন গেম শুরু করো" চাপো</div>
        </div>

        <div id="demo-mg8-grid" style="display:flex;flex-wrap:wrap;max-width:280px;"></div>
      </div>
    </div>

    <p>👆 প্রথমে "নতুন গেম শুরু করো" চাপো, তারপর দুইটা করে কার্ড উল্টিয়ে জোড়া মেলাও।</p>

    <p>💡 <strong>এই প্রজেক্টের সবচেয়ে গুরুত্বপূর্ণ ৩টা কৌশল:</strong></p>
    <ul>
      <li><strong>Fisher-Yates Shuffle:</strong> পেছন থেকে সামনের দিকে এসে প্রতিটা কার্ডকে এলোমেলো অন্য কারো সাথে অদলবদল করা হয় — <code>[deck[i], deck[j]] = [deck[j], deck[i]];</code> এক লাইনেই দুটো ভ্যারিয়েবলের মান অদলবদল করে দেয় (destructuring-এর একটা ক্লাসিক ব্যবহার)।</li>
      <li><strong>busy ফ্ল্যাগ:</strong> দুটো কার্ড না মিললে সেগুলো লুকানোর আগে (০.৮ সেকেন্ডের বিরতিতে) ইউজার যাতে তাড়াহুড়ো করে তৃতীয় কার্ড খুলে গেম নষ্ট করতে না পারে, তাই <code>busy</code> ফ্ল্যাগ দিয়ে সাময়িকভাবে ক্লিক ব্লক করা হয়েছে।</li>
      <li><strong>setTimeout() vs setInterval():</strong> প্রজেক্ট ৫, ৭-এ শেখা <code>setInterval</code> বারবার চলে; <code>setTimeout</code> শুধু <strong>একবার</strong>, নির্দিষ্ট সময় পরে চলে — অমিল হওয়া কার্ড লুকানোর জন্য এখানে <code>setTimeout</code>-ই সঠিক পছন্দ।</li>
    </ul>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা স্টপওয়াচ যোগ করো — গেম শুরু থেকে সম্পূর্ণ হওয়া পর্যন্ত সময় মাপো (প্রজেক্ট ৭-এর টাইমার লজিক পুনর্ব্যবহার করে)</div>
      <div class="extend-item">2️⃣ কার্ড সংখ্যা বাড়িয়ে ৪x৪ (৮ জোড়া) গ্রিড বানাও</div>
      <div class="extend-item">3️⃣ কার্ড উল্টানোর সময় CSS ট্রানজিশন/অ্যানিমেশন যোগ করো আরও বাস্তবসম্মত ফ্লিপ ইফেক্টের জন্য</div>
    </div>
  `,
  9: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>💾 Favorite Players (localStorage)</h2>
    <p class="subtitle">খেলোয়াড়দের তালিকা থেকে ★ চেপে প্রিয় তালিকায় যোগ/বাদ দেওয়া — আর সবচেয়ে গুরুত্বপূর্ণ, এই তালিকা <code>localStorage</code>-এ সেভ থাকে, তাই সত্যিকারের ওয়েবসাইটে এই পেজ রিলোড করলে বা ব্রাউজার বন্ধ করে আবার খুললেও প্রিয় তালিকা হারিয়ে যাবে না।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>localStorage.setItem/getItem — <strong>মডিউল ১০</strong></li>
        <li>JSON.stringify/parse — <strong>মডিউল ১০</strong></li>
        <li>অ্যারে includes(), filter(), push() — <strong>মডিউল ৬</strong></li>
        <li>ডাইনামিক DOM রি-রেন্ডার — <strong>মডিউল ৮, প্রজেক্ট ৪ থেকে পরিচিত প্যাটার্ন</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">players</span> = [<span class="str">"লিওনেল মেসি"</span>, <span class="str">"কিলিয়ান এমবাপে"</span>, <span class="str">"কেভিন ডি ব্রুইনা"</span>, <span class="str">"ভিনিসিয়ুস জুনিয়র"</span>];

<span class="kw">function</span> <span class="fn">getFavorites</span>() {
  <span class="cmt">// localStorage-এ কিছু না থাকলে খালি অ্যারে ডিফল্ট হিসেবে ব্যবহার</span>
  <span class="kw">const</span> <span class="fn">saved</span> = <span class="fn">localStorage</span>.<span class="fn">getItem</span>(<span class="str">"favoritePlayers"</span>);
  <span class="kw">return</span> <span class="fn">saved</span> ? <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="fn">saved</span>) : [];
}

<span class="kw">function</span> <span class="fn">toggleFavorite</span>(<span class="fn">name</span>) {
  <span class="kw">let</span> <span class="fn">favorites</span> = <span class="fn">getFavorites</span>();

  <span class="kw">if</span> (<span class="fn">favorites</span>.<span class="fn">includes</span>(<span class="fn">name</span>)) {
    <span class="fn">favorites</span> = <span class="fn">favorites</span>.<span class="fn">filter</span>((<span class="fn">p</span>) <span class="kw">=&gt;</span> <span class="fn">p</span> !== <span class="fn">name</span>);   <span class="cmt">// আগে থেকে ছিল — বাদ দাও</span>
  } <span class="kw">else</span> {
    <span class="fn">favorites</span>.<span class="fn">push</span>(<span class="fn">name</span>);   <span class="cmt">// ছিল না — যোগ করো</span>
  }

  <span class="cmt">// অ্যারে থেকে JSON স্ট্রিং বানিয়ে সেভ করা</span>
  <span class="fn">localStorage</span>.<span class="fn">setItem</span>(<span class="str">"favoritePlayers"</span>, <span class="fn">JSON</span>.<span class="fn">stringify</span>(<span class="fn">favorites</span>));

  <span class="fn">renderFavorites</span>();
}

<span class="kw">function</span> <span class="fn">renderFavorites</span>() {
  <span class="kw">const</span> <span class="fn">favorites</span> = <span class="fn">getFavorites</span>();
  <span class="kw">const</span> <span class="fn">list</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"favoritesList"</span>);

  <span class="fn">list</span>.<span class="fn">innerHTML</span> = <span class="fn">favorites</span>.<span class="fn">length</span> === <span class="num">0</span>
    ? <span class="str">"এখনো কেউ প্রিয় তালিকায় নেই"</span>
    : <span class="fn">favorites</span>.<span class="fn">map</span>((<span class="fn">name</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;li&gt;⭐ \${name}&lt;/li&gt;\`</span>).<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <p style="font-size:12px;color:#6B7280;margin-bottom:10px;">তারায় ক্লিক করো — এই ডাটা আসলেই তোমার ব্রাউজারের localStorage-এ সেভ হচ্ছে (আসল স্ট্যান্ডঅ্যালোন পেজে এই পেজ রিলোড করলেও থেকে যাবে, যেহেতু এটা localStorage, সাধারণ ভেরিয়েবলের মতো মেমোরিতে না)।</p>
        <div id="demo-players-9" style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
          <button class="demo-fav-btn-9" data-name="লিওনেল মেসি" onclick="
            this.classList.toggle('active');
            this.textContent = (this.classList.contains('active') ? '★ ' : '☆ ') + this.dataset.name;
            let favs = [];
            document.querySelectorAll('.demo-fav-btn-9.active').forEach((el) => favs.push(el.dataset.name));
            localStorage.setItem('favoritePlayersDemo', JSON.stringify(favs));
            document.getElementById('demo-favorites-9').innerHTML = favs.length === 0
              ? '<li style=\\'list-style:none;color:#9CA3AF;\\'>এখনো কেউ প্রিয় তালিকায় নেই</li>'
              : favs.map((n) => '<li>⭐ ' + n + '</li>').join('');
          " style="text-align:left;background:white;border:1px solid #E5E7EB;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:13px;">☆ লিওনেল মেসি</button>
          <button class="demo-fav-btn-9" data-name="কিলিয়ান এমবাপে" onclick="
            this.classList.toggle('active');
            this.textContent = (this.classList.contains('active') ? '★ ' : '☆ ') + this.dataset.name;
            let favs = [];
            document.querySelectorAll('.demo-fav-btn-9.active').forEach((el) => favs.push(el.dataset.name));
            localStorage.setItem('favoritePlayersDemo', JSON.stringify(favs));
            document.getElementById('demo-favorites-9').innerHTML = favs.length === 0
              ? '<li style=\\'list-style:none;color:#9CA3AF;\\'>এখনো কেউ প্রিয় তালিকায় নেই</li>'
              : favs.map((n) => '<li>⭐ ' + n + '</li>').join('');
          " style="text-align:left;background:white;border:1px solid #E5E7EB;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:13px;">☆ কিলিয়ান এমবাপে</button>
          <button class="demo-fav-btn-9" data-name="কেভিন ডি ব্রুইনা" onclick="
            this.classList.toggle('active');
            this.textContent = (this.classList.contains('active') ? '★ ' : '☆ ') + this.dataset.name;
            let favs = [];
            document.querySelectorAll('.demo-fav-btn-9.active').forEach((el) => favs.push(el.dataset.name));
            localStorage.setItem('favoritePlayersDemo', JSON.stringify(favs));
            document.getElementById('demo-favorites-9').innerHTML = favs.length === 0
              ? '<li style=\\'list-style:none;color:#9CA3AF;\\'>এখনো কেউ প্রিয় তালিকায় নেই</li>'
              : favs.map((n) => '<li>⭐ ' + n + '</li>').join('');
          " style="text-align:left;background:white;border:1px solid #E5E7EB;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:13px;">☆ কেভিন ডি ব্রুইনা</button>
          <button class="demo-fav-btn-9" data-name="ভিনিসিয়ুস জুনিয়র" onclick="
            this.classList.toggle('active');
            this.textContent = (this.classList.contains('active') ? '★ ' : '☆ ') + this.dataset.name;
            let favs = [];
            document.querySelectorAll('.demo-fav-btn-9.active').forEach((el) => favs.push(el.dataset.name));
            localStorage.setItem('favoritePlayersDemo', JSON.stringify(favs));
            document.getElementById('demo-favorites-9').innerHTML = favs.length === 0
              ? '<li style=\\'list-style:none;color:#9CA3AF;\\'>এখনো কেউ প্রিয় তালিকায় নেই</li>'
              : favs.map((n) => '<li>⭐ ' + n + '</li>').join('');
          " style="text-align:left;background:white;border:1px solid #E5E7EB;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:13px;">☆ ভিনিসিয়ুস জুনিয়র</button>
        </div>
        <style>.demo-fav-btn-9.active { background: #FEF3C7 !important; border-color: #F59E0B !important; color: #92400E; }</style>
        <p style="font-size:13px;font-weight:700;margin-bottom:6px;">⭐ তোমার প্রিয় তালিকা:</p>
        <ul id="demo-favorites-9" style="margin-left:18px;font-size:13px;line-height:1.8;color:#374151;">
          <li style="list-style:none;color:#9CA3AF;">এখনো কেউ প্রিয় তালিকায় নেই</li>
        </ul>
      </div>
    </div>

    <p>💡 <strong>এই প্রজেক্টের মূল শিক্ষা — "Toggle" ফাংশন কীভাবে দুই দিকেই কাজ করে:</strong> <code>toggleFavorite()</code> একটাই ফাংশন, কিন্তু <code>includes()</code> চেক করে বুঝে নেয় নামটা আগে থেকে ছিল কিনা — থাকলে <code>filter()</code> দিয়ে বাদ দেয়, না থাকলে <code>push()</code> দিয়ে যোগ করে। প্রতিবার সেভের আগে <code>JSON.stringify()</code> ও পড়ার সময় <code>JSON.parse()</code> — এই জোড়াটা localStorage-এ অ্যারে/অবজেক্ট রাখার সবসময়কার প্যাটার্ন (মডিউল ১০ থেকে মনে আছে?)।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা "সব মুছে ফেলো" বাটন যোগ করো (<code>localStorage.removeItem("favoritePlayers")</code>)</div>
      <div class="extend-item">2️⃣ প্রতিটা খেলোয়াড়ের সাথে দলের নামও সেভ করো (স্ট্রিং অ্যারের বদলে অবজেক্টের অ্যারে ব্যবহার করে, মডিউল ৭)</div>
      <div class="extend-item">3️⃣ প্রিয় তালিকায় কতজন আছে তার একটা লাইভ কাউন্ট ব্যাজ যোগ করো</div>
    </div>
  `,
  10: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🌐 Complete Fan Dashboard</h2>
    <p class="subtitle">এই কোর্সের চূড়ান্ত ক্যাপস্টোন প্রজেক্ট — আগের প্রজেক্টগুলোর সেরা অংশ একসাথে মিলিয়ে একটা সম্পূর্ণ ফুটবল ফ্যান ড্যাশবোর্ড: উপরে লাইভ ম্যাচ কাউন্টডাউন (প্রজেক্ট ৫), মাঝে সার্চেবল খেলোয়াড় তালিকা (প্রজেক্ট ৩), আর প্রতিটা খেলোয়াড়ের পাশে ফেভারিট টগল যা localStorage-এ সেভ থাকে (প্রজেক্ট ৯)। এভাবেই বাস্তব জীবনে ছোট ছোট ফিচার একসাথে জোড়া লাগিয়ে একটা পূর্ণাঙ্গ অ্যাপ্লিকেশন বানানো হয়।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>এই কোর্সের প্রায় সব মডিউল (১-১০) একসাথে প্রয়োগ করা হয়েছে</li>
        <li>setInterval + Date — লাইভ কাউন্টডাউন (প্রজেক্ট ৫)</li>
        <li>filter() + toLowerCase() — লাইভ সার্চ (প্রজেক্ট ৩)</li>
        <li>localStorage + JSON — ফেভারিট সেভ রাখা (প্রজেক্ট ৯)</li>
        <li>map() + join() — ডাইনামিক DOM রেন্ডারিং (প্রজেক্ট ৪, ৬)</li>
      </ul>
    </div>

    <h3>🔹 মূল স্ট্রাকচার (সংক্ষেপে)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">players</span> = [<span class="str">"লিওনেল মেসি"</span>, <span class="str">"কিলিয়ান এমবাপে"</span>, <span class="str">"কেভিন ডি ব্রুইনা"</span>, <span class="str">"ভিনিসিয়ুস জুনিয়র"</span>, <span class="str">"এরলিং হালান্ড"</span>];

<span class="cmt">// ═══ অংশ ১: লাইভ কাউন্টডাউন (প্রজেক্ট ৫-এর প্যাটার্ন) ═══</span>
<span class="kw">const</span> <span class="fn">kickoffTime</span> = <span class="fn">Date</span>.<span class="fn">now</span>() + (<span class="num">90</span> * <span class="num">60</span> * <span class="num">1000</span>);
<span class="fn">setInterval</span>(<span class="fn">updateCountdown</span>, <span class="num">1000</span>);

<span class="cmt">// ═══ অংশ ২: ফেভারিট লোড ও চেক (প্রজেক্ট ৯-এর প্যাটার্ন) ═══</span>
<span class="kw">function</span> <span class="fn">getFavorites</span>() {
  <span class="kw">const</span> <span class="fn">saved</span> = <span class="fn">localStorage</span>.<span class="fn">getItem</span>(<span class="str">"dashboardFavorites"</span>);
  <span class="kw">return</span> <span class="fn">saved</span> ? <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="fn">saved</span>) : [];
}

<span class="cmt">// ═══ অংশ ৩: সার্চ + রেন্ডার একসাথে (প্রজেক্ট ৩ ও ৪-এর প্যাটার্ন) ═══</span>
<span class="kw">function</span> <span class="fn">renderPlayers</span>(<span class="fn">query</span> = <span class="str">""</span>) {
  <span class="kw">const</span> <span class="fn">favorites</span> = <span class="fn">getFavorites</span>();

  <span class="kw">const</span> <span class="fn">filtered</span> = <span class="fn">players</span>.<span class="fn">filter</span>((<span class="fn">name</span>) <span class="kw">=&gt;</span>
    <span class="fn">name</span>.<span class="fn">toLowerCase</span>().<span class="fn">includes</span>(<span class="fn">query</span>.<span class="fn">toLowerCase</span>())
  );

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"playerList"</span>).<span class="fn">innerHTML</span> = <span class="fn">filtered</span>.<span class="fn">map</span>((<span class="fn">name</span>) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> <span class="fn">isFav</span> = <span class="fn">favorites</span>.<span class="fn">includes</span>(<span class="fn">name</span>);
    <span class="kw">return</span> <span class="str">\`&lt;li&gt;\${isFav ? "⭐" : "☆"} \${name}&lt;/li&gt;\`</span>;
  }).<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ — সম্পূর্ণ ড্যাশবোর্ড একসাথে:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">

        <div style="background:linear-gradient(135deg, #0F172A, #0066CC);color:white;padding:16px 20px;border-radius:10px;margin-bottom:16px;text-align:center;">
          <p style="font-size:12px;color:#93C5FD;margin-bottom:4px;">⏱️ পরবর্তী ম্যাচ কিকঅফ</p>
          <p id="demo-dash-countdown-10" style="font-size:22px;font-weight:700;font-family:'JetBrains Mono',monospace;">০০মি ১৫সে</p>
          <button onclick="
            const btn = this;
            const target = Date.now() + 15000;
            const el = document.getElementById('demo-dash-countdown-10');
            btn.disabled = true;
            const t = setInterval(() => {
              const remaining = target - Date.now();
              if (remaining <= 0) { el.textContent = '⚽ কিকঅফ!'; clearInterval(t); btn.disabled = false; return; }
              const m = Math.floor(remaining / 60000);
              const s = Math.floor((remaining / 1000) % 60);
              el.textContent = String(m).padStart(2,'0') + 'মি ' + String(s).padStart(2,'0') + 'সে';
            }, 1000);
          " style="margin-top:8px;background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);padding:5px 14px;border-radius:20px;cursor:pointer;font-size:11.5px;">লাইভ কাউন্টডাউন চালু করো</button>
        </div>

        <input type="text" placeholder="খেলোয়াড় খুঁজো..." oninput="
          const players = ['লিওনেল মেসি', 'কিলিয়ান এমবাপে', 'কেভিন ডি ব্রুইনা', 'ভিনিসিয়ুস জুনিয়র', 'এরলিং হালান্ড'];
          const query = this.value.toLowerCase();
          const favs = JSON.parse(localStorage.getItem('dashboardFavoritesDemo') || '[]');
          const filtered = players.filter((n) => n.toLowerCase().includes(query));
          const list = document.getElementById('demo-dash-players-10');
          list.innerHTML = filtered.length === 0
            ? '<li style=\\'list-style:none;color:#9CA3AF;\\'>কেউ পাওয়া যায়নি</li>'
            : filtered.map((name) => {
                const isFav = favs.includes(name);
                return '<li style=\\'display:flex;justify-content:space-between;align-items:center;padding:6px 0;\\'>' +
                  '<span>' + name + '</span>' +
                  '<span onclick=\\'let f=JSON.parse(localStorage.getItem(&quot;dashboardFavoritesDemo&quot;)||&quot;[]&quot;); const n=&quot;' + name + '&quot;; if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent=&quot;☆&quot;;}else{f.push(n);this.textContent=&quot;⭐&quot;;} localStorage.setItem(&quot;dashboardFavoritesDemo&quot;,JSON.stringify(f));\\' style=\\'cursor:pointer;font-size:16px;\\'>' + (isFav ? '⭐' : '☆') + '</span>' +
                '</li>';
              }).join('');
        " style="border:1px solid #D1D5DB;border-radius:8px;padding:8px 12px;font-size:13px;width:100%;margin-bottom:12px;">

        <ul id="demo-dash-players-10" style="margin-left:0;font-size:13.5px;line-height:1.6;">
          <li style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;"><span>লিওনেল মেসি</span><span onclick="let f=JSON.parse(localStorage.getItem('dashboardFavoritesDemo')||'[]'); const n='লিওনেল মেসি'; if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';} localStorage.setItem('dashboardFavoritesDemo',JSON.stringify(f));" style="cursor:pointer;font-size:16px;">☆</span></li>
          <li style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;"><span>কিলিয়ান এমবাপে</span><span onclick="let f=JSON.parse(localStorage.getItem('dashboardFavoritesDemo')||'[]'); const n='কিলিয়ান এমবাপে'; if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';} localStorage.setItem('dashboardFavoritesDemo',JSON.stringify(f));" style="cursor:pointer;font-size:16px;">☆</span></li>
          <li style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;"><span>কেভিন ডি ব্রুইনা</span><span onclick="let f=JSON.parse(localStorage.getItem('dashboardFavoritesDemo')||'[]'); const n='কেভিন ডি ব্রুইনা'; if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';} localStorage.setItem('dashboardFavoritesDemo',JSON.stringify(f));" style="cursor:pointer;font-size:16px;">☆</span></li>
          <li style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;"><span>ভিনিসিয়ুস জুনিয়র</span><span onclick="let f=JSON.parse(localStorage.getItem('dashboardFavoritesDemo')||'[]'); const n='ভিনিসিয়ুস জুনিয়র'; if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';} localStorage.setItem('dashboardFavoritesDemo',JSON.stringify(f));" style="cursor:pointer;font-size:16px;">☆</span></li>
          <li style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;"><span>এরলিং হালান্ড</span><span onclick="let f=JSON.parse(localStorage.getItem('dashboardFavoritesDemo')||'[]'); const n='এরলিং হালান্ড'; if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';} localStorage.setItem('dashboardFavoritesDemo',JSON.stringify(f));" style="cursor:pointer;font-size:16px;">☆</span></li>
        </ul>
      </div>
    </div>

    <p>💡 <strong>এই ক্যাপস্টোন প্রজেক্টের সবচেয়ে বড় শিক্ষা:</strong> একটা বড় অ্যাপ আসলে অনেকগুলো ছোট, পরিচিত প্যাটার্নের সমষ্টি — কাউন্টডাউন (Date+setInterval), সার্চ (filter+includes), ফেভারিট (localStorage+JSON) — প্রতিটাই তুমি আগেই আলাদা আলাদা প্রজেক্টে শিখেছ। প্রফেশনাল ডেভেলপাররাও নতুন কিছু বানানোর সময় প্রায়ই এভাবেই আগে শেখা ছোট ছোট প্যাটার্ন একসাথে জোড়া লাগিয়ে বড় ফিচার তৈরি করে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রজেক্ট ৭-এর স্কোরবোর্ড এই ড্যাশবোর্ডে একটা নতুন সেকশন হিসেবে যোগ করো</div>
      <div class="extend-item">2️⃣ প্রজেক্ট ৮-এর মেমোরি গেমকে "মিনি-গেম" ট্যাব হিসেবে যোগ করো</div>
      <div class="extend-item">3️⃣ পুরো ড্যাশবোর্ডটাকে CSS Grid/Flexbox (CSS কোর্স মনে আছে?) দিয়ে আরও সুন্দর, রেসপনসিভ লেআউটে সাজাও</div>
      <div class="extend-item">4️⃣ এখন তুমি HTML, CSS ও JavaScript — তিনটাই জানো। নিজের একটা সম্পূর্ণ ওয়েবসাইট বানানো শুরু করার এটাই সঠিক সময়!</div>
    </div>
  `,
};
