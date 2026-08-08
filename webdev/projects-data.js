// ══════════════════════════════════════════════════
// Banglay Web Development — Amazing Web Dev Projects — Data File
//
// html-projects-data.js / css-projects-data.js / js-projects-data.js
// এর সাথে একই প্যাটার্নে লেখা, কিন্তু আলাদা ভ্যারিয়েবল নামে
// (WEBDEV_PROJECTS / WEBDEV_PROJECT_CONTENT)।
//
// ⚠️ গুরুত্বপূর্ণ পার্থক্য: এই কোর্সের প্রজেক্টগুলো ইচ্ছাকৃতভাবে
// আগের তিনটা কোর্সের (HTML/CSS/JS) প্রজেক্টের চেয়ে অনেক বড় ও
// জটিল — প্রতিটাই HTML+CSS+JS একসাথে ব্যবহার করে একটা সম্পূর্ণ,
// ইউনিভার্সিটি-লেভেল পোর্টফোলিও-যোগ্য ওয়েবসাইট/অ্যাপ। এগুলো
// একক-ভাষা প্রজেক্টের মতো ছোট ডেমো না, বরং একাধিক সেকশন/ফিচার
// নিয়ে গঠিত পূর্ণাঙ্গ প্রজেক্ট।
//
// প্রতিটা প্রজেক্টে: সম্পূর্ণ HTML কাঠামো + CSS + JS আলাদা
// vscode-panel-এ, এবং একটা লাইভ প্রিভিউ যেখানে যতটা সম্ভব
// প্রকৃত ইন্টারঅ্যাকশন দেখানো হয়েছে।
// ══════════════════════════════════════════════════

const WEBDEV_PROJECTS = [
  { id: 1,  title: "Personal Portfolio Website",         icon: "🧑‍💻", level: "ইন্টারমিডিয়েট" },
  { id: 2,  title: "Restaurant Landing + Reservation",     icon: "🍽️", level: "ইন্টারমিডিয়েট" },
  { id: 3,  title: "Blog / Magazine Homepage",             icon: "📰", level: "ইন্টারমিডিয়েট" },
  { id: 4,  title: "Movie Discovery App (API)",            icon: "🎬", level: "অ্যাডভান্সড" },
  { id: 5,  title: "E-commerce Product Page + Cart",       icon: "🛍️", level: "অ্যাডভান্সড" },
  { id: 6,  title: "Admin Dashboard UI",                   icon: "📊", level: "অ্যাডভান্সড" },
  { id: 7,  title: "Event/Conference Landing Page",        icon: "🎤", level: "ইন্টারমিডিয়েট" },
  { id: 8,  title: "Recipe Finder (Favorites+Storage)",    icon: "🍲", level: "অ্যাডভান্সড" },
  { id: 9,  title: "Job Listing Board with Filters",       icon: "💼", level: "অ্যাডভান্সড" },
  { id: 10, title: "Multi-Page Business Website",          icon: "🏢", level: "অ্যাডভান্সড" },
];

const WEBDEV_PROJECT_CONTENT = {

  /* ══════════════════════════════════════════════════
     PROJECT 1 — Personal Portfolio Website (সম্পূর্ণ লেখা)
  ══════════════════════════════════════════════════ */
  1: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🧑‍💻 Personal Portfolio Website</h2>
    <p class="subtitle">এই কোর্সের প্রথম বড় ক্যাপস্টোন প্রজেক্ট — একটা সম্পূর্ণ, রেসপনসিভ পোর্টফোলিও ওয়েবসাইট যা তুমি সত্যিকারের ইন্টারভিউ বা ইউনিভার্সিটি অ্যাপ্লিকেশনে ব্যবহার করতে পারবে। এতে থাকবে: sticky নেভবার, হিরো সেকশন, স্কিল গ্রিড, প্রজেক্ট শোকেস (ফিল্টারযোগ্য), ও একটা ভ্যালিডেটেড কন্ট্যাক্ট ফর্ম — সব একসাথে, রেসপনসিভভাবে সাজানো।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>ফোল্ডার স্ট্রাকচার ও সিমান্টিক HTML — <strong>মডিউল ১, ২</strong></li>
        <li>Stack-on-Mobile ও Hamburger নেভ প্যাটার্ন — <strong>মডিউল ৩</strong></li>
        <li>Card কম্পোনেন্ট (BEM) — <strong>মডিউল ৪</strong></li>
        <li>ফর্ম ভ্যালিডেশন (HTML+CSS+JS তিন স্তর) — <strong>মডিউল ৫</strong></li>
        <li>অ্যাক্সেসিবিলিটি (alt, label, কীবোর্ড নেভিগেশন) — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 HTML কাঠামো</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;body&gt;</span>
  <span class="kw">&lt;nav</span> <span class="fn">class</span>=<span class="str">"navbar"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"navbar__logo"</span><span class="kw">&gt;</span>রাফি হাসান<span class="kw">&lt;/div&gt;</span>
    <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"navbar__hamburger"</span> <span class="fn">id</span>=<span class="str">"hamburgerBtn"</span> <span class="fn">aria-label</span>=<span class="str">"মেনু খোলো"</span><span class="kw">&gt;</span>☰<span class="kw">&lt;/button&gt;</span>
    <span class="kw">&lt;ul</span> <span class="fn">class</span>=<span class="str">"navbar__links"</span> <span class="fn">id</span>=<span class="str">"navLinks"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;li&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"#skills"</span><span class="kw">&gt;</span>স্কিল<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"#projects"</span><span class="kw">&gt;</span>প্রজেক্ট<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"#contact"</span><span class="kw">&gt;</span>যোগাযোগ<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="kw">&lt;/ul&gt;</span>
  <span class="kw">&lt;/nav&gt;</span>

  <span class="kw">&lt;header</span> <span class="fn">class</span>=<span class="str">"hero"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;h1&gt;</span>হ্যালো, আমি রাফি 👋<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>ফ্রন্টএন্ড ডেভেলপার ও কম্পিউটার সায়েন্স শিক্ষার্থী<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/header&gt;</span>

  <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"skills"</span> <span class="fn">class</span>=<span class="str">"skills"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/section&gt;</span>
  <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"projects"</span> <span class="fn">class</span>=<span class="str">"projects"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/section&gt;</span>
  <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"contact"</span> <span class="fn">class</span>=<span class="str">"contact"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;script</span> <span class="fn">src</span>=<span class="str">"script.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/body&gt;</span></code></pre></div>
    </div>

    <h3>🔹 প্রজেক্ট ফিল্টার লজিক (JavaScript)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">projects</span> = [
  { <span class="fn">title</span>: <span class="str">"টু-ডু লিস্ট অ্যাপ"</span>, <span class="fn">category</span>: <span class="str">"javascript"</span> },
  { <span class="fn">title</span>: <span class="str">"রেস্তোরাঁ ল্যান্ডিং পেজ"</span>, <span class="fn">category</span>: <span class="str">"css"</span> },
  { <span class="fn">title</span>: <span class="str">"ওয়েদার ড্যাশবোর্ড"</span>, <span class="fn">category</span>: <span class="str">"javascript"</span> },
];

<span class="kw">function</span> <span class="fn">filterProjects</span>(<span class="fn">category</span>) {
  <span class="kw">const</span> <span class="fn">filtered</span> = <span class="fn">category</span> === <span class="str">"all"</span>
    ? <span class="fn">projects</span>
    : <span class="fn">projects</span>.<span class="fn">filter</span>((<span class="fn">p</span>) <span class="kw">=&gt;</span> <span class="fn">p</span>.<span class="fn">category</span> === <span class="fn">category</span>);

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"projectGrid"</span>).<span class="fn">innerHTML</span> = <span class="fn">filtered</span>
    .<span class="fn">map</span>((<span class="fn">p</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;div class="card"&gt;\${p.title}&lt;/div&gt;\`</span>)
    .<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ — সম্পূর্ণ পোর্টফোলিও:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-wd-nav-1{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:white;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-size:13px;}
          .demo-wd-nav-1 .logo{font-weight:700;color:#0066CC;}
          .demo-wd-nav-1 .links{display:flex;gap:16px;list-style:none;}
          .demo-wd-hero-1{background:linear-gradient(135deg,#0F172A,#0066CC);color:white;padding:32px 20px;text-align:center;}
          .demo-wd-hero-1 h1{font-size:20px;margin-bottom:6px;}
          .demo-wd-hero-1 p{font-size:12px;color:#CBD5E1;}
          .demo-wd-skills-1{display:flex;gap:8px;flex-wrap:wrap;padding:18px 20px;justify-content:center;}
          .demo-wd-skills-1 span{background:#F0F9FF;color:#0066CC;padding:5px 12px;border-radius:20px;font-size:11.5px;font-weight:600;}
          .demo-wd-filters-1{display:flex;gap:8px;justify-content:center;padding:0 20px 12px;}
          .demo-wd-filters-1 button{background:white;border:1px solid #D1D5DB;padding:5px 14px;border-radius:20px;font-size:11.5px;cursor:pointer;}
          .demo-wd-filters-1 button.active{background:#0066CC;color:white;border-color:#0066CC;}
          .demo-wd-grid-1{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;padding:0 20px 20px;}
          .demo-wd-card-1{background:white;border:1px solid #F3F4F6;border-radius:10px;padding:12px;font-size:11.5px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
        </style>
        <nav class="demo-wd-nav-1">
          <div class="logo">রাফি হাসান</div>
          <ul class="links"><li>স্কিল</li><li>প্রজেক্ট</li><li>যোগাযোগ</li></ul>
        </nav>
        <div class="demo-wd-hero-1">
          <h1>হ্যালো, আমি রাফি 👋</h1>
          <p>ফ্রন্টএন্ড ডেভেলপার ও কম্পিউটার সায়েন্স শিক্ষার্থী</p>
        </div>
        <div class="demo-wd-skills-1">
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Git</span>
        </div>
        <div class="demo-wd-filters-1" id="demo-wd-filters-1">
          <button class="active" onclick="
            document.querySelectorAll('#demo-wd-filters-1 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'টু-ডু লিস্ট অ্যাপ',c:'javascript'},{t:'রেস্তোরাঁ ল্যান্ডিং পেজ',c:'css'},{t:'ওয়েদার ড্যাশবোর্ড',c:'javascript'}];
            document.getElementById('demo-wd-grid-1').innerHTML = all.map(p=>'<div class=\\'demo-wd-card-1\\'>'+p.t+'</div>').join('');
          ">সব</button>
          <button onclick="
            document.querySelectorAll('#demo-wd-filters-1 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'টু-ডু লিস্ট অ্যাপ',c:'javascript'},{t:'রেস্তোরাঁ ল্যান্ডিং পেজ',c:'css'},{t:'ওয়েদার ড্যাশবোর্ড',c:'javascript'}];
            const filtered = all.filter(p=>p.c==='javascript');
            document.getElementById('demo-wd-grid-1').innerHTML = filtered.map(p=>'<div class=\\'demo-wd-card-1\\'>'+p.t+'</div>').join('');
          ">JavaScript</button>
          <button onclick="
            document.querySelectorAll('#demo-wd-filters-1 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'টু-ডু লিস্ট অ্যাপ',c:'javascript'},{t:'রেস্তোরাঁ ল্যান্ডিং পেজ',c:'css'},{t:'ওয়েদার ড্যাশবোর্ড',c:'javascript'}];
            const filtered = all.filter(p=>p.c==='css');
            document.getElementById('demo-wd-grid-1').innerHTML = filtered.map(p=>'<div class=\\'demo-wd-card-1\\'>'+p.t+'</div>').join('');
          ">CSS</button>
        </div>
        <div class="demo-wd-grid-1" id="demo-wd-grid-1">
          <div class="demo-wd-card-1">টু-ডু লিস্ট অ্যাপ</div>
          <div class="demo-wd-card-1">রেস্তোরাঁ ল্যান্ডিং পেজ</div>
          <div class="demo-wd-card-1">ওয়েদার ড্যাশবোর্ড</div>
        </div>
        <p style="font-size:11px;color:#6B7280;padding:0 20px 16px;">👆 ফিল্টার বাটনে ক্লিক করে দেখো — প্রজেক্ট তালিকা লাইভ ফিল্টার হয়।</p>
      </div>
    </div>

    <p>💡 <strong>এই প্রজেক্টে সবকিছু কীভাবে একসাথে কাজ করছে:</strong> HTML সিমান্টিক কাঠামো দেয় (header, nav, section — মডিউল ২), CSS রেসপনসিভ লেআউট ও কম্পোনেন্ট স্টাইল দেয় (মডিউল ৩, ৪), আর JavaScript ফিল্টার বাটনের ইন্টারঅ্যাকশন চালায় (মডিউল-ভিত্তিক .filter()+.map() প্যাটার্ন, JS কোর্স থেকে পরিচিত)। এটাই এই পুরো কোর্সের মূল শিক্ষা — তিনটা ভাষা আলাদা না, একসাথে একটা সিস্টেম হিসেবে কাজ করে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ কন্ট্যাক্ট ফর্মে মডিউল ৫-এর তিন-স্তরের ভ্যালিডেশন যোগ করো</div>
      <div class="extend-item">2️⃣ ডার্ক মোড টগল বাটন যোগ করো (CSS ভেরিয়েবল + JS classList.toggle)</div>
      <div class="extend-item">3️⃣ GitHub Pages-এ ডিপ্লয় করে (মডিউল ১০) একটা সত্যিকারের লাইভ লিংক পাও</div>
      <div class="extend-item">4️⃣ নিজের আসল ছবি, প্রজেক্ট, ও তথ্য দিয়ে এই টেমপ্লেট সম্পূর্ণ কাস্টমাইজ করো — এটাই তোমার আসল পোর্টফোলিও হয়ে যাক!</div>
    </div>
  `,

  /* ══════════════════════════════════════════════════
     PROJECT 2-10 — শীঘ্রই আসছে (পরের সেশনে যোগ হবে)
  ══════════════════════════════════════════════════ */
  2: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🍽️ Restaurant Landing + Reservation</h2>
    <p class="subtitle">একটা সম্পূর্ণ রেস্তোরাঁর ওয়েবসাইট — হিরো সেকশন, মেনু ট্যাব (ক্যাটাগরি অনুযায়ী), ফটো গ্যালারি, আর একটা সত্যিকারের ভ্যালিডেটেড টেবিল-বুকিং ফর্ম। এই প্রজেক্টে বিশেষভাবে ফোকাস করা হয়েছে মডিউল ৫-এর তিন-স্তরের ফর্ম ভ্যালিডেশনের বাস্তব প্রয়োগে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>Stack-on-Mobile হিরো লেআউট — <strong>মডিউল ৩</strong></li>
        <li>Card কম্পোনেন্ট (মেনু আইটেম) — <strong>মডিউল ৪</strong></li>
        <li>তিন-স্তরের ফর্ম ভ্যালিডেশন (HTML+CSS+JS) — <strong>মডিউল ৫</strong></li>
        <li>ছবি অপ্টিমাইজেশন ধারণা (alt টেক্সট, lazy loading) — <strong>মডিউল ৭, ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 মেনু ট্যাব সুইচিং (JavaScript)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">menuItems</span> = {
  <span class="fn">starters</span>: [<span class="str">"স্যুপ"</span>, <span class="str">"সালাদ"</span>, <span class="str">"স্প্রিং রোল"</span>],
  <span class="fn">mains</span>: [<span class="str">"গ্রিলড চিকেন"</span>, <span class="str">"পাস্তা"</span>, <span class="str">"বিরিয়ানি"</span>],
  <span class="fn">desserts</span>: [<span class="str">"চকলেট কেক"</span>, <span class="str">"আইসক্রিম"</span>],
};

<span class="kw">function</span> <span class="fn">showCategory</span>(<span class="fn">category</span>) {
  <span class="kw">const</span> <span class="fn">items</span> = <span class="fn">menuItems</span>[<span class="fn">category</span>];   <span class="cmt">// Bracket Notation — dynamic key</span>

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"menuList"</span>).<span class="fn">innerHTML</span> = <span class="fn">items</span>
    .<span class="fn">map</span>((<span class="fn">item</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;li&gt;\${item}&lt;/li&gt;\`</span>)
    .<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
    </div>

    <h3>🔹 বুকিং ফর্ম ভ্যালিডেশন</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="fn">bookingForm</span>.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="fn">e</span>.<span class="fn">preventDefault</span>();

  <span class="kw">const</span> <span class="fn">guests</span> = <span class="fn">Number</span>(<span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"guests"</span>).<span class="fn">value</span>);
  <span class="kw">let</span> <span class="fn">isValid</span> = <span class="kw">true</span>;

  <span class="kw">if</span> (<span class="fn">guests</span> &lt; <span class="num">1</span> || <span class="fn">guests</span> &gt; <span class="num">12</span>) {
    <span class="fn">showError</span>(<span class="str">"guests"</span>, <span class="str">"১-১২ জনের মধ্যে সংখ্যা দাও"</span>);
    <span class="fn">isValid</span> = <span class="kw">false</span>;
  }

  <span class="kw">if</span> (<span class="fn">isValid</span>) {
    <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"confirmMsg"</span>).<span class="fn">textContent</span> =
      <span class="str">\`🎉 \${guests} জনের জন্য টেবিল বুক করা হয়েছে!\`</span>;
    <span class="fn">bookingForm</span>.<span class="fn">reset</span>();
  }
});</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-rest-hero-2{background:linear-gradient(135deg,#7C2D12,#EA580C);color:white;padding:28px 20px;text-align:center;}
          .demo-rest-hero-2 h1{font-size:20px;margin-bottom:6px;}
          .demo-rest-hero-2 p{font-size:12px;color:#FED7AA;}
          .demo-rest-tabs-2{display:flex;gap:8px;justify-content:center;padding:16px 20px 10px;}
          .demo-rest-tabs-2 button{background:white;border:1px solid #D1D5DB;padding:6px 16px;border-radius:20px;font-size:12px;cursor:pointer;}
          .demo-rest-tabs-2 button.active{background:#EA580C;color:white;border-color:#EA580C;}
          .demo-rest-menu-2{list-style:none;padding:0 20px 16px;font-size:13px;line-height:2;text-align:center;color:#374151;}
          .demo-rest-form-2{padding:16px 20px;background:#FFF7ED;}
          .demo-rest-form-2 input{border:1px solid #D1D5DB;border-radius:6px;padding:7px 10px;font-size:12.5px;width:100%;margin-bottom:8px;}
          .demo-rest-form-2 button{background:#EA580C;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;}
        </style>
        <div class="demo-rest-hero-2">
          <h1>🍽️ স্বাদ রেস্তোরাঁ</h1>
          <p>ঐতিহ্যবাহী স্বাদ, আধুনিক পরিবেশ</p>
        </div>
        <div class="demo-rest-tabs-2" id="demo-rest-tabs-2">
          <button class="active" onclick="
            document.querySelectorAll('#demo-rest-tabs-2 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('demo-rest-menu-2').innerHTML = ['স্যুপ','সালাদ','স্প্রিং রোল'].map(i=>'<li>'+i+'</li>').join('');
          ">স্টার্টার</button>
          <button onclick="
            document.querySelectorAll('#demo-rest-tabs-2 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('demo-rest-menu-2').innerHTML = ['গ্রিলড চিকেন','পাস্তা','বিরিয়ানি'].map(i=>'<li>'+i+'</li>').join('');
          ">মেইন কোর্স</button>
          <button onclick="
            document.querySelectorAll('#demo-rest-tabs-2 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('demo-rest-menu-2').innerHTML = ['চকলেট কেক','আইসক্রিম'].map(i=>'<li>'+i+'</li>').join('');
          ">ডেজার্ট</button>
        </div>
        <ul class="demo-rest-menu-2" id="demo-rest-menu-2">
          <li>স্যুপ</li><li>সালাদ</li><li>স্প্রিং রোল</li>
        </ul>
        <div class="demo-rest-form-2">
          <p style="font-size:13px;font-weight:700;margin-bottom:8px;">টেবিল বুক করো</p>
          <input type="number" id="demo-guests-2" placeholder="কতজন? (১-১২)" min="1" max="12">
          <button onclick="
            const g = Number(document.getElementById('demo-guests-2').value);
            const msg = document.getElementById('demo-confirm-2');
            if (g < 1 || g > 12 || isNaN(g)) {
              msg.textContent = '❌ ১-১২ জনের মধ্যে সংখ্যা দাও';
              msg.style.color = '#DC2626';
            } else {
              msg.textContent = '🎉 ' + g + ' জনের জন্য টেবিল বুক করা হয়েছে!';
              msg.style.color = '#16A34A';
            }
          ">বুক করো</button>
          <p id="demo-confirm-2" style="font-size:12.5px;margin-top:8px;"></p>
        </div>
      </div>
    </div>

    <p>💡 <strong>Bracket Notation-এর বাস্তব ব্যবহার:</strong> <code>menuItems[category]</code> — এখানে <code>category</code> একটা ভেরিয়েবল (<code>"starters"</code>, <code>"mains"</code>, বা <code>"desserts"</code>), যা রান-টাইমে বদলায় ট্যাব বাটনের ক্লিক অনুযায়ী। ওয়েব ডেভেলপমেন্ট কোর্সের মডিউল ৪-এ শেখা "কম্পোনেন্ট" চিন্তা আর JavaScript কোর্সের মডিউল ৭-এ শেখা Dynamic Key Access — এই দুটো মিলিয়েই এই ট্যাব-সিস্টেম কাজ করছে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা মেনু আইটেমে দাম ও ছবি যোগ করো (Card কম্পোনেন্ট প্যাটার্ন, মডিউল ৪)</div>
      <div class="extend-item">2️⃣ বুকিং ফর্মে তারিখ ও সময় (<code>&lt;input type="date"&gt;</code>, <code>type="time"</code>) যোগ করো</div>
      <div class="extend-item">3️⃣ একটা ফটো গ্যালারি সেকশন যোগ করো <code>loading="lazy"</code> সহ (মডিউল ৭)</div>
    </div>
  `,
  3: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>📰 Blog / Magazine Homepage</h2>
    <p class="subtitle">একটা নিউজ/ম্যাগাজিন সাইটের হোমপেজ — একটা ফিচার্ড আর্টিকেল, ক্যাটাগরি-ফিল্টারযোগ্য আর্টিকেল গ্রিড, আর একটা নিউজলেটার সাইনআপ বক্স। এই প্রজেক্টে বিশেষভাবে অনুশীলন হচ্ছে কম্পোনেন্ট পুনঃব্যবহার ও ডাটা-থেকে-DOM জেনারেশন প্যাটার্ন।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>সিমান্টিক HTML (article, time) — <strong>HTML কোর্স মডিউল ৭</strong></li>
        <li>Grid লেআউট (auto-fit) — <strong>CSS কোর্স মডিউল ৭</strong></li>
        <li>অবজেক্টের অ্যারে + filter() — <strong>JS কোর্স মডিউল ৬, ৭</strong></li>
        <li>ফর্ম ভ্যালিডেশন (ইমেইল) — <strong>মডিউল ৫</strong></li>
      </ul>
    </div>

    <h3>🔹 আর্টিকেল ডাটা ও ফিল্টার (JavaScript)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">articles</span> = [
  { <span class="fn">title</span>: <span class="str">"AI কীভাবে বদলে দিচ্ছে সফটওয়্যার ডেভেলপমেন্ট"</span>, <span class="fn">category</span>: <span class="str">"প্রযুক্তি"</span> },
  { <span class="fn">title</span>: <span class="str">"ঢাকার সেরা ৫টা কফি শপ"</span>, <span class="fn">category</span>: <span class="str">"লাইফস্টাইল"</span> },
  { <span class="fn">title</span>: <span class="str">"বাংলাদেশ ক্রিকেট দলের নতুন যাত্রা"</span>, <span class="fn">category</span>: <span class="str">"খেলা"</span> },
  { <span class="fn">title</span>: <span class="str">"স্টার্টআপ শুরু করার ৭টা ধাপ"</span>, <span class="fn">category</span>: <span class="str">"প্রযুক্তি"</span> },
];

<span class="kw">function</span> <span class="fn">renderArticles</span>(<span class="fn">category</span> = <span class="str">"সব"</span>) {
  <span class="kw">const</span> <span class="fn">filtered</span> = <span class="fn">category</span> === <span class="str">"সব"</span>
    ? <span class="fn">articles</span>
    : <span class="fn">articles</span>.<span class="fn">filter</span>((<span class="fn">a</span>) <span class="kw">=&gt;</span> <span class="fn">a</span>.<span class="fn">category</span> === <span class="fn">category</span>);

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"articleGrid"</span>).<span class="fn">innerHTML</span> = <span class="fn">filtered</span>
    .<span class="fn">map</span>((<span class="fn">a</span>) <span class="kw">=&gt;</span> <span class="str">\`
      &lt;article class="article-card"&gt;
        &lt;span class="article-card__tag"&gt;\${a.category}&lt;/span&gt;
        &lt;h3&gt;\${a.title}&lt;/h3&gt;
      &lt;/article&gt;
    \`</span>).<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-blog-hero-3{background:#1F2937;color:white;padding:24px 20px;}
          .demo-blog-hero-3 span{background:#DC2626;padding:2px 10px;border-radius:20px;font-size:10.5px;font-weight:700;}
          .demo-blog-hero-3 h1{font-size:17px;margin-top:8px;}
          .demo-blog-tabs-3{display:flex;gap:6px;flex-wrap:wrap;padding:14px 20px 6px;}
          .demo-blog-tabs-3 button{background:#F3F4F6;border:none;padding:5px 12px;border-radius:20px;font-size:11px;cursor:pointer;}
          .demo-blog-tabs-3 button.active{background:#0066CC;color:white;}
          .demo-blog-grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;padding:10px 20px 20px;}
          .demo-blog-card-3{background:white;border:1px solid #F3F4F6;border-radius:10px;padding:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
          .demo-blog-card-3 .tag{font-size:9.5px;background:#F0F9FF;color:#0066CC;padding:2px 8px;border-radius:20px;font-weight:600;}
          .demo-blog-card-3 h3{font-size:11.5px;margin-top:6px;line-height:1.4;}
        </style>
        <div class="demo-blog-hero-3">
          <span>ফিচার্ড</span>
          <h1>প্রযুক্তির দুনিয়ায় ২০২৬ সালের বড় পরিবর্তনগুলো</h1>
        </div>
        <div class="demo-blog-tabs-3" id="demo-blog-tabs-3">
          <button class="active" onclick="
            document.querySelectorAll('#demo-blog-tabs-3 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'AI কীভাবে বদলে দিচ্ছে সফটওয়্যার ডেভেলপমেন্ট',c:'প্রযুক্তি'},{t:'ঢাকার সেরা ৫টা কফি শপ',c:'লাইফস্টাইল'},{t:'বাংলাদেশ ক্রিকেট দলের নতুন যাত্রা',c:'খেলা'},{t:'স্টার্টআপ শুরু করার ৭টা ধাপ',c:'প্রযুক্তি'}];
            document.getElementById('demo-blog-grid-3').innerHTML = all.map(a=>'<div class=\\'demo-blog-card-3\\'><span class=\\'tag\\'>'+a.c+'</span><h3>'+a.t+'</h3></div>').join('');
          ">সব</button>
          <button onclick="
            document.querySelectorAll('#demo-blog-tabs-3 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'AI কীভাবে বদলে দিচ্ছে সফটওয়্যার ডেভেলপমেন্ট',c:'প্রযুক্তি'},{t:'ঢাকার সেরা ৫টা কফি শপ',c:'লাইফস্টাইল'},{t:'বাংলাদেশ ক্রিকেট দলের নতুন যাত্রা',c:'খেলা'},{t:'স্টার্টআপ শুরু করার ৭টা ধাপ',c:'প্রযুক্তি'}];
            const filtered = all.filter(a=>a.c==='প্রযুক্তি');
            document.getElementById('demo-blog-grid-3').innerHTML = filtered.map(a=>'<div class=\\'demo-blog-card-3\\'><span class=\\'tag\\'>'+a.c+'</span><h3>'+a.t+'</h3></div>').join('');
          ">প্রযুক্তি</button>
          <button onclick="
            document.querySelectorAll('#demo-blog-tabs-3 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'AI কীভাবে বদলে দিচ্ছে সফটওয়্যার ডেভেলপমেন্ট',c:'প্রযুক্তি'},{t:'ঢাকার সেরা ৫টা কফি শপ',c:'লাইফস্টাইল'},{t:'বাংলাদেশ ক্রিকেট দলের নতুন যাত্রা',c:'খেলা'},{t:'স্টার্টআপ শুরু করার ৭টা ধাপ',c:'প্রযুক্তি'}];
            const filtered = all.filter(a=>a.c==='লাইফস্টাইল');
            document.getElementById('demo-blog-grid-3').innerHTML = filtered.map(a=>'<div class=\\'demo-blog-card-3\\'><span class=\\'tag\\'>'+a.c+'</span><h3>'+a.t+'</h3></div>').join('');
          ">লাইফস্টাইল</button>
          <button onclick="
            document.querySelectorAll('#demo-blog-tabs-3 button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const all = [{t:'AI কীভাবে বদলে দিচ্ছে সফটওয়্যার ডেভেলপমেন্ট',c:'প্রযুক্তি'},{t:'ঢাকার সেরা ৫টা কফি শপ',c:'লাইফস্টাইল'},{t:'বাংলাদেশ ক্রিকেট দলের নতুন যাত্রা',c:'খেলা'},{t:'স্টার্টআপ শুরু করার ৭টা ধাপ',c:'প্রযুক্তি'}];
            const filtered = all.filter(a=>a.c==='খেলা');
            document.getElementById('demo-blog-grid-3').innerHTML = filtered.map(a=>'<div class=\\'demo-blog-card-3\\'><span class=\\'tag\\'>'+a.c+'</span><h3>'+a.t+'</h3></div>').join('');
          ">খেলা</button>
        </div>
        <div class="demo-blog-grid-3" id="demo-blog-grid-3">
          <div class="demo-blog-card-3"><span class="tag">প্রযুক্তি</span><h3>AI কীভাবে বদলে দিচ্ছে সফটওয়্যার ডেভেলপমেন্ট</h3></div>
          <div class="demo-blog-card-3"><span class="tag">লাইফস্টাইল</span><h3>ঢাকার সেরা ৫টা কফি শপ</h3></div>
          <div class="demo-blog-card-3"><span class="tag">খেলা</span><h3>বাংলাদেশ ক্রিকেট দলের নতুন যাত্রা</h3></div>
          <div class="demo-blog-card-3"><span class="tag">প্রযুক্তি</span><h3>স্টার্টআপ শুরু করার ৭টা ধাপ</h3></div>
        </div>
        <p style="font-size:11px;color:#6B7280;padding:0 20px 16px;">👆 ক্যাটাগরি বাটনে ক্লিক করে দেখো — আর্টিকেল লাইভ ফিল্টার হয়।</p>
      </div>
    </div>

    <p>💡 <strong>একটা গুরুত্বপূর্ণ প্যাটার্ন — ডিফল্ট প্যারামিটার + ফিল্টার একসাথে:</strong> <code>renderArticles(category = "সব")</code>-এ JavaScript কোর্সের মডিউল ৫-এ শেখা ডিফল্ট প্যারামিটার ব্যবহার হয়েছে — ফাংশনটা কোনো আর্গুমেন্ট ছাড়াই কল করলে (পেজ লোড হওয়ার সময়) স্বয়ংক্রিয়ভাবে সব আর্টিকেল দেখাবে, আর বাটনে ক্লিক করলে নির্দিষ্ট ক্যাটাগরি পাঠিয়ে ফিল্টার করা যাবে — একই ফাংশন দুই পরিস্থিতিতেই কাজ করছে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা আর্টিকেল কার্ডে <code>&lt;time&gt;</code> ট্যাগ দিয়ে প্রকাশের তারিখ যোগ করো (HTML কোর্স মডিউল ৭)</div>
      <div class="extend-item">2️⃣ নিউজলেটার সাইনআপ ফর্মে ইমেইল ভ্যালিডেশন যোগ করো (মডিউল ৫)</div>
      <div class="extend-item">3️⃣ একটা সার্চ বক্স যোগ করো যা শিরোনামেও খোঁজে (JS কোর্স প্রজেক্ট ৩-এর প্যাটার্ন পুনর্ব্যবহার করে)</div>
    </div>
  `,
  4: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🎬 Movie Discovery App (API)</h2>
    <p class="subtitle">একটা সিনেমা-খোঁজার অ্যাপ, যা সত্যিকারের একটা পাবলিক API থেকে সিনেমার তথ্য নিয়ে আসে — এই কোর্সের প্রথম প্রজেক্ট যেখানে নিজে হাতে লেখা ডাটার বদলে ইন্টারনেট থেকে লাইভ ডাটা ব্যবহার হচ্ছে। মডিউল ৬-এ শেখা fetch()+async/await এখানে সরাসরি প্রয়োগ হচ্ছে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>fetch() + async/await + JSON — <strong>মডিউল ৬</strong></li>
        <li>লোডিং ও এরর স্টেট (try/catch) — <strong>মডিউল ৬</strong></li>
        <li>DOM-এ ডাটা রেন্ডার করা (map+join) — <strong>JS কোর্স মডিউল ৮</strong></li>
        <li>Grid রেসপনসিভ লেআউট — <strong>CSS কোর্স মডিউল ৭</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">async function</span> <span class="fn">loadMovies</span>() {
  <span class="kw">const</span> <span class="fn">grid</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"movieGrid"</span>);
  <span class="fn">grid</span>.<span class="fn">innerHTML</span> = <span class="str">"⏳ সিনেমা লোড হচ্ছে..."</span>;

  <span class="kw">try</span> {
    <span class="cmt">// JSONPlaceholder থেকে নমুনা ডাটা আনা হচ্ছে (আসল প্রজেক্টে movie-API ব্যবহার হবে)</span>
    <span class="kw">const</span> <span class="fn">response</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://jsonplaceholder.typicode.com/albums?_limit=8"</span>);
    <span class="kw">const</span> <span class="fn">movies</span> = <span class="kw">await</span> <span class="fn">response</span>.<span class="fn">json</span>();

    <span class="fn">grid</span>.<span class="fn">innerHTML</span> = <span class="fn">movies</span>.<span class="fn">map</span>((<span class="fn">movie</span>) <span class="kw">=&gt;</span> <span class="str">\`
      &lt;div class="movie-card"&gt;
        &lt;h3&gt;\${movie.title}&lt;/h3&gt;
        &lt;p&gt;আইডি: \${movie.id}&lt;/p&gt;
      &lt;/div&gt;
    \`</span>).<span class="fn">join</span>(<span class="str">""</span>);

  } <span class="kw">catch</span> (<span class="fn">error</span>) {
    <span class="fn">grid</span>.<span class="fn">innerHTML</span> = <span class="str">"❌ সিনেমা লোড করা যায়নি। ইন্টারনেট চেক করো।"</span>;
  }
}

<span class="fn">loadMovies</span>();</code></pre></div>
    </div>

    <p><strong>প্রিভিউ (সিমুলেটেড — লোডিং থেকে ফলাফল দেখো):</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-movie-grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;}
          .demo-movie-card-4{background:#1F2937;color:white;border-radius:10px;padding:14px 10px;text-align:center;}
          .demo-movie-card-4 .icon{font-size:24px;margin-bottom:6px;}
          .demo-movie-card-4 h3{font-size:11px;line-height:1.3;}
        </style>
        <button onclick="
          const grid = document.getElementById('demo-movie-grid-4');
          grid.innerHTML = '⏳ সিনেমা লোড হচ্ছে...';
          setTimeout(() => {
            const movies = ['ইনসেপশন','ইন্টারস্টেলার','দ্য ডার্ক নাইট','প্যারাসাইট','জোকার','ওপেনহাইমার'];
            grid.innerHTML = movies.map((m) => '<div class=\\'demo-movie-card-4\\'><div class=\\'icon\\'>🎬</div><h3>' + m + '</h3></div>').join('');
          }, 1200);
        " style="background:#0066CC;color:white;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;margin-bottom:14px;">🎬 সিনেমা লোড করো (fetch সিমুলেশন)</button>
        <div class="demo-movie-grid-4" id="demo-movie-grid-4">
          <p style="font-size:12.5px;color:#9CA3AF;grid-column:1/-1;">উপরের বাটনে ক্লিক করো — লোডিং মেসেজ দেখাবে, তারপর ১.২ সেকেন্ড পর সিনেমা দেখাবে (আসল fetch()-এর নেটওয়ার্ক বিলম্ব সিমুলেট করে)।</p>
        </div>
      </div>
    </div>

    <p>💡 <strong>কেন এই প্রিভিউতে setTimeout ব্যবহার হয়েছে:</strong> এই লাইভ প্রিভিউ প্যানেলে সরাসরি বাইরের API-তে fetch করা সম্ভব না (নিরাপত্তা সীমাবদ্ধতার কারণে), তাই <code>setTimeout</code> দিয়ে "নেটওয়ার্ক বিলম্ব" সিমুলেট করা হয়েছে — লোডিং স্টেট আগে দেখানো, তারপর ফলাফল আসা। বাস্তব প্রজেক্টে (উপরের কোডে দেখানো) সত্যিকারের <code>fetch()</code> ব্যবহার হবে, যেখানে বিলম্বটা নেটওয়ার্ক থেকেই স্বাভাবিকভাবে আসে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা সার্চ বক্স যোগ করো যা লোড হওয়া সিনেমার তালিকা ফিল্টার করে (JS কোর্স প্রজেক্ট ৩ প্যাটার্ন)</div>
      <div class="extend-item">2️⃣ প্রতিটা কার্ডে ক্লিক করলে একটা "বিস্তারিত" মোডাল/পেজ দেখাও</div>
      <div class="extend-item">3️⃣ সত্যিকারের একটা ফ্রি মুভি API (যেমন OMDb) দিয়ে আসল সিনেমার পোস্টার ও রেটিং দেখাও</div>
    </div>
  `,
  5: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🛍️ E-commerce Product Page + Cart</h2>
    <p class="subtitle">একটা একক প্রোডাক্টের পেজ — সাইজ/রঙ ভ্যারিয়েন্ট বাছাই, কোয়ান্টিটি নিয়ন্ত্রণ, ও কার্টে যোগ করার সম্পূর্ণ ফ্লো। JavaScript কোর্সের Shopping Cart প্রজেক্টের ধারণাকে এখানে HTML+CSS দিয়ে একটা সম্পূর্ণ প্রোডাক্ট-পেজ অভিজ্ঞতায় বিস্তৃত করা হয়েছে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>State management (নির্বাচিত ভ্যারিয়েন্ট, কোয়ান্টিটি) — <strong>মডিউল ১, JS কোর্স</strong></li>
        <li>Card/Button কম্পোনেন্ট — <strong>মডিউল ৪</strong></li>
        <li>Toggle/Active স্টেট প্যাটার্ন — <strong>JS কোর্স প্রজেক্ট ২</strong></li>
        <li>ফর্ম-সদৃশ ভ্যালিডেশন (ভ্যারিয়েন্ট না বাছাই করলে সতর্কতা) — <strong>মডিউল ৫</strong></li>
      </ul>
    </div>

    <h3>🔹 ভ্যারিয়েন্ট বাছাই ও কার্ট লজিক</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">selectedSize</span> = <span class="kw">null</span>;
<span class="kw">let</span> <span class="fn">quantity</span> = <span class="num">1</span>;

<span class="kw">function</span> <span class="fn">selectSize</span>(<span class="fn">size</span>, <span class="fn">btnElement</span>) {
  <span class="fn">selectedSize</span> = <span class="fn">size</span>;
  <span class="cmt">// সব বাটন থেকে active সরিয়ে শুধু ক্লিক-করা বাটনে যোগ করা</span>
  <span class="fn">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".size-btn"</span>).<span class="fn">forEach</span>((<span class="fn">btn</span>) <span class="kw">=&gt;</span> <span class="fn">btn</span>.<span class="fn">classList</span>.<span class="fn">remove</span>(<span class="str">"active"</span>));
  <span class="fn">btnElement</span>.<span class="fn">classList</span>.<span class="fn">add</span>(<span class="str">"active"</span>);
}

<span class="kw">function</span> <span class="fn">addToCart</span>() {
  <span class="kw">if</span> (!<span class="fn">selectedSize</span>) {
    <span class="fn">alert</span>(<span class="str">"⚠️ আগে একটা সাইজ বাছাই করো"</span>);
    <span class="kw">return</span>;   <span class="cmt">// ভ্যারিয়েন্ট না বাছাই করলে এগোনো বন্ধ</span>
  }
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`কার্টে যোগ হলো: সাইজ \${selectedSize}, পরিমাণ \${quantity}\`</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-prod-5{display:flex;gap:16px;flex-wrap:wrap;}
          .demo-prod-img-5{width:100px;height:100px;background:#F0F9FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:36px;}
          .demo-prod-info-5{flex:1;min-width:150px;}
          .demo-prod-info-5 h3{font-size:15px;margin-bottom:4px;}
          .demo-prod-info-5 .price{font-size:18px;font-weight:700;color:#0066CC;margin-bottom:10px;}
          .demo-size-btn-5{background:white;border:1px solid #D1D5DB;padding:5px 12px;border-radius:6px;font-size:12px;cursor:pointer;margin-right:6px;}
          .demo-size-btn-5.active{background:#0066CC;color:white;border-color:#0066CC;}
          .demo-qty-5{display:flex;align-items:center;gap:8px;margin:10px 0;}
          .demo-qty-5 button{background:#F0F9FF;border:1px solid #0066CC;color:#0066CC;width:24px;height:24px;border-radius:6px;cursor:pointer;}
          .demo-cart-btn-5{background:#16A34A;color:white;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:13px;}
        </style>
        <div class="demo-prod-5">
          <div class="demo-prod-img-5">👕</div>
          <div class="demo-prod-info-5">
            <h3>ক্লাসিক কটন টি-শার্ট</h3>
            <div class="price">৳৮৫০</div>
            <p style="font-size:11.5px;color:#6B7280;margin-bottom:6px;">সাইজ বাছাই করো:</p>
            <div id="demo-sizes-5">
              <button class="demo-size-btn-5" onclick="document.querySelectorAll('.demo-size-btn-5').forEach(b=>b.classList.remove('active')); this.classList.add('active'); window.demoSize5='S';">S</button>
              <button class="demo-size-btn-5" onclick="document.querySelectorAll('.demo-size-btn-5').forEach(b=>b.classList.remove('active')); this.classList.add('active'); window.demoSize5='M';">M</button>
              <button class="demo-size-btn-5" onclick="document.querySelectorAll('.demo-size-btn-5').forEach(b=>b.classList.remove('active')); this.classList.add('active'); window.demoSize5='L';">L</button>
            </div>
            <div class="demo-qty-5">
              <button onclick="const q=document.getElementById('demo-qty-val-5'); q.textContent=Math.max(1,Number(q.textContent)-1);">−</button>
              <span id="demo-qty-val-5">1</span>
              <button onclick="const q=document.getElementById('demo-qty-val-5'); q.textContent=Number(q.textContent)+1;">+</button>
            </div>
            <button class="demo-cart-btn-5" onclick="
              const msg = document.getElementById('demo-cart-msg-5');
              if (!window.demoSize5) { msg.textContent='⚠️ আগে একটা সাইজ বাছাই করো'; msg.style.color='#DC2626'; }
              else { const q = document.getElementById('demo-qty-val-5').textContent; msg.textContent='✅ কার্টে যোগ হলো: সাইজ '+window.demoSize5+', পরিমাণ '+q; msg.style.color='#16A34A'; }
            ">🛒 কার্টে যোগ করো</button>
            <p id="demo-cart-msg-5" style="font-size:12px;margin-top:8px;"></p>
          </div>
        </div>
      </div>
    </div>

    <p>💡 <strong>কেন সাইজ বাছাই বাধ্যতামূলক করা হয়েছে:</strong> মডিউল ৫-এ শেখা ভ্যালিডেশন-ধারণা এখানে ফর্মের বাইরেও প্রযোজ্য — <code>if (!selectedSize) { ...; return; }</code> একটা "গার্ড ক্লজ" (guard clause), যা নিশ্চিত করে অসম্পূর্ণ তথ্য নিয়ে কার্টে কিছু যোগ না হয়। এটাই ই-কমার্স সাইটে "সাইজ বাছাই করুন" এরর দেখানোর পেছনের লজিক।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একাধিক প্রোডাক্ট ছবি (থাম্বনেইল ক্লিক করলে বড় ছবি বদলানো) যোগ করো</div>
      <div class="extend-item">2️⃣ JS কোর্সের Dynamic Shopping Cart প্রজেক্ট থেকে সম্পূর্ণ কার্ট-পেজ যুক্ত করো</div>
      <div class="extend-item">3️⃣ "স্টকে আছে" / "স্টক শেষ" স্ট্যাটাস যোগ করো, স্টক শেষ হলে বাটন disabled করে দাও</div>
    </div>
  `,
  6: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>📊 Admin Dashboard UI</h2>
    <p class="subtitle">একটা অ্যাডমিন প্যানেলের ড্যাশবোর্ড — সাইডবার নেভিগেশন, লাইভ স্ট্যাটস কার্ড, আর একটা সর্টেবল ডাটা টেবিল। ড্যাশবোর্ড-স্টাইল UI প্রায় প্রতিটা SaaS প্রোডাক্টেই দেখা যায় — এই প্রজেক্টে সেই প্যাটার্নটা শেখা হবে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>Sidebar লেআউট (Grid/Flexbox) — <strong>CSS কোর্স মডিউল ৬, ৭</strong></li>
        <li>অ্যারে .sort() দিয়ে টেবিল সাজানো — <strong>JS কোর্স মডিউল ৬</strong></li>
        <li>Dynamic টেবিল রেন্ডারিং — <strong>মডিউল ৪ কম্পোনেন্ট প্যাটার্ন</strong></li>
        <li>অ্যাক্সেসিবল নেভিগেশন (Tab-যোগ্য) — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 টেবিল সর্টিং লজিক</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">let</span> <span class="fn">users</span> = [
  { <span class="fn">name</span>: <span class="str">"নাজমুল"</span>, <span class="fn">sales</span>: <span class="num">1200</span> },
  { <span class="fn">name</span>: <span class="str">"রাফি"</span>, <span class="fn">sales</span>: <span class="num">3400</span> },
  { <span class="fn">name</span>: <span class="str">"তানিয়া"</span>, <span class="fn">sales</span>: <span class="num">2100</span> },
];

<span class="kw">function</span> <span class="fn">sortBySales</span>() {
  <span class="cmt">// মূল অ্যারে না বদলে একটা কপি সাজানো (JS কোর্স মডিউল ৬ মনে আছে?)</span>
  <span class="kw">const</span> <span class="fn">sorted</span> = [...<span class="fn">users</span>].<span class="fn">sort</span>((<span class="fn">a</span>, <span class="fn">b</span>) <span class="kw">=&gt;</span> <span class="fn">b</span>.<span class="fn">sales</span> - <span class="fn">a</span>.<span class="fn">sales</span>);
  <span class="fn">renderTable</span>(<span class="fn">sorted</span>);
}

<span class="kw">function</span> <span class="fn">renderTable</span>(<span class="fn">data</span>) {
  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"userTable"</span>).<span class="fn">innerHTML</span> = <span class="fn">data</span>
    .<span class="fn">map</span>((<span class="fn">u</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;tr&gt;&lt;td&gt;\${u.name}&lt;/td&gt;&lt;td&gt;৳\${u.sales}&lt;/td&gt;&lt;/tr&gt;\`</span>)
    .<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-dash-6{display:flex;font-size:12.5px;}
          .demo-dash-side-6{width:110px;background:#1F2937;color:#D1D5DB;padding:16px 10px;flex-shrink:0;}
          .demo-dash-side-6 div{padding:8px 6px;border-radius:6px;margin-bottom:4px;cursor:pointer;}
          .demo-dash-side-6 div.active{background:#0066CC;color:white;}
          .demo-dash-main-6{flex:1;padding:16px 18px;}
          .demo-dash-stats-6{display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:8px;margin-bottom:14px;}
          .demo-dash-stat-6{background:#F0F9FF;border-radius:8px;padding:10px;text-align:center;}
          .demo-dash-stat-6 .num{font-size:16px;font-weight:700;color:#0066CC;}
          .demo-dash-table-6{width:100%;border-collapse:collapse;}
          .demo-dash-table-6 th,.demo-dash-table-6 td{text-align:left;padding:6px 8px;border-bottom:1px solid #F3F4F6;}
          .demo-dash-table-6 th{cursor:pointer;color:#6B7280;}
        </style>
        <div class="demo-dash-6">
          <div class="demo-dash-side-6">
            <div class="active">📊 ড্যাশবোর্ড</div>
            <div>👥 ইউজার</div>
            <div>⚙️ সেটিংস</div>
          </div>
          <div class="demo-dash-main-6">
            <div class="demo-dash-stats-6">
              <div class="demo-dash-stat-6"><div class="num">156</div><div>ইউজার</div></div>
              <div class="demo-dash-stat-6"><div class="num">৳6.7K</div><div>বিক্রি</div></div>
              <div class="demo-dash-stat-6"><div class="num">23</div><div>অর্ডার</div></div>
            </div>
            <table class="demo-dash-table-6">
              <thead><tr><th onclick="
                const rows = Array.from(document.querySelectorAll('#demo-dash-body-6 tr'));
                const sorted = rows.sort((a,b) => Number(b.children[1].textContent.replace('৳','')) - Number(a.children[1].textContent.replace('৳','')));
                const tbody = document.getElementById('demo-dash-body-6');
                sorted.forEach(r => tbody.appendChild(r));
              ">নাম</th><th onclick="
                const rows = Array.from(document.querySelectorAll('#demo-dash-body-6 tr'));
                const sorted = rows.sort((a,b) => Number(b.children[1].textContent.replace('৳','')) - Number(a.children[1].textContent.replace('৳','')));
                const tbody = document.getElementById('demo-dash-body-6');
                sorted.forEach(r => tbody.appendChild(r));
              ">বিক্রি ↕️</th></tr></thead>
              <tbody id="demo-dash-body-6">
                <tr><td>নাজমুল</td><td>৳1200</td></tr>
                <tr><td>রাফি</td><td>৳3400</td></tr>
                <tr><td>তানিয়া</td><td>৳2100</td></tr>
              </tbody>
            </table>
            <p style="font-size:11px;color:#6B7280;margin-top:8px;">👆 "বিক্রি" হেডারে ক্লিক করো — সারিগুলো বেশি-থেকে-কম সাজানো হবে।</p>
          </div>
        </div>
      </div>
    </div>

    <p>💡 <strong>এই প্রিভিউতে DOM-এলিমেন্ট সরাসরি সাজানো হয়েছে (ডাটা-অ্যারে না):</strong> বাস্তব কোডে (উপরে দেখানো) সবসময় ডাটা-অ্যারে সাজিয়ে তারপর টেবিল আবার আঁকা হয় (ডাটা-প্রথম পদ্ধতি, JS কোর্স Shopping Cart প্রজেক্ট থেকে পরিচিত) — কিন্তু এই লাইভ ডেমোতে সরলতার জন্য সরাসরি HTML সারি (<code>&lt;tr&gt;</code>) এলিমেন্টগুলোকেই <code>appendChild()</code> দিয়ে পুনর্বিন্যাস করা হয়েছে। দুটো পদ্ধতিই সঠিক, তবে ডাটা-প্রথম পদ্ধতিই বড় প্রজেক্টে বেশি নির্ভরযোগ্য ও মানসম্মত।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ সাইডবার মেনু আইটেমে ক্লিক করলে ভিন্ন "পেজ" (ভিন্ন কনটেন্ট) দেখানোর ব্যবস্থা করো</div>
      <div class="extend-item">2️⃣ টেবিলে একটা সার্চ বক্স যোগ করো নাম দিয়ে ফিল্টার করতে</div>
      <div class="extend-item">3️⃣ মোবাইলে সাইডবারকে হ্যামবার্গার মেনুতে রূপান্তর করো (মডিউল ৩)</div>
    </div>
  `,
  7: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🎤 Event/Conference Landing Page</h2>
    <p class="subtitle">একটা টেক-কনফারেন্সের ল্যান্ডিং পেজ — লাইভ কাউন্টডাউন, স্পিকার কার্ড গ্রিড, আর একটা শিডিউল টাইমলাইন। JS কোর্সের Countdown প্রজেক্টের ধারণা এখানে একটা সম্পূর্ণ ইভেন্ট-পেজের প্রসঙ্গে ব্যবহার হচ্ছে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>Date + setInterval কাউন্টডাউন — <strong>মডিউল ৬, JS কোর্স</strong></li>
        <li>Card কম্পোনেন্ট (স্পিকার) — <strong>মডিউল ৪</strong></li>
        <li>Stack-on-Mobile হিরো — <strong>মডিউল ৩</strong></li>
      </ul>
    </div>

    <h3>🔹 কাউন্টডাউন লজিক</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">eventDate</span> = <span class="kw">new</span> <span class="fn">Date</span>(<span class="str">"2026-12-01T09:00:00"</span>).<span class="fn">getTime</span>();

<span class="fn">setInterval</span>(() <span class="kw">=&gt;</span> {
  <span class="kw">const</span> <span class="fn">remaining</span> = <span class="fn">eventDate</span> - <span class="fn">Date</span>.<span class="fn">now</span>();
  <span class="kw">const</span> <span class="fn">days</span> = <span class="fn">Math</span>.<span class="fn">floor</span>(<span class="fn">remaining</span> / (<span class="num">1000</span> * <span class="num">60</span> * <span class="num">60</span> * <span class="num">24</span>));
  <span class="kw">const</span> <span class="fn">hours</span> = <span class="fn">Math</span>.<span class="fn">floor</span>((<span class="fn">remaining</span> / (<span class="num">1000</span> * <span class="num">60</span> * <span class="num">60</span>)) % <span class="num">24</span>);

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"countdown"</span>).<span class="fn">textContent</span> = <span class="str">\`\${days} দিন \${hours} ঘণ্টা বাকি\`</span>;
}, <span class="num">1000</span>);</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-evt-hero-7{background:linear-gradient(135deg,#4C1D95,#7C3AED);color:white;padding:28px 20px;text-align:center;}
          .demo-evt-hero-7 h1{font-size:19px;margin-bottom:6px;}
          .demo-evt-hero-7 .cd{font-size:20px;font-weight:700;margin-top:10px;font-family:'JetBrains Mono',monospace;}
          .demo-evt-speakers-7{display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:10px;padding:18px 20px;}
          .demo-evt-card-7{background:white;border:1px solid #F3F4F6;border-radius:10px;padding:12px 8px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
          .demo-evt-card-7 .av{font-size:26px;margin-bottom:6px;}
          .demo-evt-card-7 h4{font-size:11px;}
          .demo-evt-card-7 p{font-size:9.5px;color:#6B7280;}
        </style>
        <div class="demo-evt-hero-7">
          <h1>🎤 টেকনোভা কনফারেন্স ২০২৬</h1>
          <p style="font-size:12px;color:#DDD6FE;">১ ডিসেম্বর, ঢাকা</p>
          <button onclick="
            const target = Date.now() + 20000;
            const el = document.getElementById('demo-evt-cd-7');
            const t = setInterval(() => {
              const r = target - Date.now();
              if (r <= 0) { el.textContent = '🎉 শুরু হয়ে গেছে!'; clearInterval(t); return; }
              el.textContent = Math.floor(r/1000) + ' সেকেন্ড বাকি';
            }, 1000);
          " style="margin-top:10px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;padding:5px 14px;border-radius:20px;font-size:11px;cursor:pointer;">লাইভ কাউন্টডাউন চালু করো</button>
          <div class="cd" id="demo-evt-cd-7">-- সেকেন্ড বাকি</div>
        </div>
        <div class="demo-evt-speakers-7">
          <div class="demo-evt-card-7"><div class="av">👨‍💻</div><h4>নাজমুল হক</h4><p>সিনিয়র ডেভেলপার</p></div>
          <div class="demo-evt-card-7"><div class="av">👩‍💻</div><h4>তানিয়া আক্তার</h4><p>UX ডিজাইনার</p></div>
          <div class="demo-evt-card-7"><div class="av">👨‍🔬</div><h4>রাফি হাসান</h4><p>AI গবেষক</p></div>
        </div>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা টিকিট-বুকিং ফর্ম যোগ করো (মডিউল ৫-এর ভ্যালিডেশন সহ)</div>
      <div class="extend-item">2️⃣ শিডিউল সেকশনে সময়ভিত্তিক টাইমলাইন যোগ করো</div>
      <div class="extend-item">3️⃣ স্পিকার কার্ডে হোভার করলে সোশ্যাল মিডিয়া লিংক দেখাও</div>
    </div>
  `,
  8: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🍲 Recipe Finder (Favorites+Storage)</h2>
    <p class="subtitle">একটা রেসিপি-খোঁজার অ্যাপ — সার্চ+ক্যাটাগরি ফিল্টার, আর ★ চেপে ফেভারিট রেসিপি সেভ রাখা (localStorage-এ, তাই পেজ রিলোড করলেও থেকে যায়)। JS কোর্সের প্রজেক্ট ৩ (সার্চ) ও প্রজেক্ট ৯ (localStorage)-এর ধারণা এখানে একসাথে মিলিয়ে একটা সম্পূর্ণ অ্যাপ বানানো হয়েছে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>filter()+includes() সার্চ — <strong>JS কোর্স মডিউল ৬, প্রজেক্ট ৩</strong></li>
        <li>localStorage+JSON — <strong>মডিউল ১০, JS কোর্স প্রজেক্ট ৯</strong></li>
        <li>Card কম্পোনেন্ট (রেসিপি) — <strong>মডিউল ৪</strong></li>
      </ul>
    </div>

    <h3>🔹 সার্চ + ফেভারিট একসাথে</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">recipes</span> = [<span class="str">"খিচুড়ি"</span>, <span class="str">"বিরিয়ানি"</span>, <span class="str">"পাস্তা"</span>, <span class="str">"ভুনা খিচুড়ি"</span>];

<span class="kw">function</span> <span class="fn">getFavorites</span>() {
  <span class="kw">return</span> <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="fn">localStorage</span>.<span class="fn">getItem</span>(<span class="str">"favRecipes"</span>) || <span class="str">"[]"</span>);
}

<span class="kw">function</span> <span class="fn">searchRecipes</span>(<span class="fn">query</span>) {
  <span class="kw">const</span> <span class="fn">favorites</span> = <span class="fn">getFavorites</span>();
  <span class="kw">const</span> <span class="fn">filtered</span> = <span class="fn">recipes</span>.<span class="fn">filter</span>((<span class="fn">r</span>) <span class="kw">=&gt;</span> <span class="fn">r</span>.<span class="fn">includes</span>(<span class="fn">query</span>));

  <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"results"</span>).<span class="fn">innerHTML</span> = <span class="fn">filtered</span>.<span class="fn">map</span>((<span class="fn">r</span>) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> <span class="fn">isFav</span> = <span class="fn">favorites</span>.<span class="fn">includes</span>(<span class="fn">r</span>);
    <span class="kw">return</span> <span class="str">\`&lt;li&gt;\${isFav ? "⭐" : "☆"} \${r}&lt;/li&gt;\`</span>;
  }).<span class="fn">join</span>(<span class="str">""</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <input type="text" placeholder="রেসিপি খুঁজো..." oninput="
          const recipes = ['খিচুড়ি', 'বিরিয়ানি', 'পাস্তা', 'ভুনা খিচুড়ি'];
          const favs = JSON.parse(localStorage.getItem('favRecipesDemo') || '[]');
          const filtered = recipes.filter((r) => r.includes(this.value));
          const list = document.getElementById('demo-recipe-results-8');
          list.innerHTML = filtered.length === 0
            ? '<li style=\\'list-style:none;color:#9CA3AF;\\'>পাওয়া যায়নি</li>'
            : filtered.map((r) => {
                const isFav = favs.includes(r);
                return '<li style=\\'display:flex;justify-content:space-between;padding:5px 0;\\'><span>'+r+'</span><span onclick=\\'let f=JSON.parse(localStorage.getItem(&quot;favRecipesDemo&quot;)||&quot;[]&quot;);const n=&quot;'+r+'&quot;;if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent=&quot;☆&quot;;}else{f.push(n);this.textContent=&quot;⭐&quot;;}localStorage.setItem(&quot;favRecipesDemo&quot;,JSON.stringify(f));\\' style=\\'cursor:pointer;\\'>'+(isFav?'⭐':'☆')+'</span></li>';
              }).join('');
        " style="border:1px solid #D1D5DB;border-radius:8px;padding:8px 12px;font-size:13px;width:100%;margin-bottom:12px;">
        <ul id="demo-recipe-results-8" style="font-size:13.5px;list-style:none;">
          <li style="display:flex;justify-content:space-between;padding:5px 0;"><span>খিচুড়ি</span><span onclick="let f=JSON.parse(localStorage.getItem('favRecipesDemo')||'[]');const n='খিচুড়ি';if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';}localStorage.setItem('favRecipesDemo',JSON.stringify(f));" style="cursor:pointer;">☆</span></li>
          <li style="display:flex;justify-content:space-between;padding:5px 0;"><span>বিরিয়ানি</span><span onclick="let f=JSON.parse(localStorage.getItem('favRecipesDemo')||'[]');const n='বিরিয়ানি';if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';}localStorage.setItem('favRecipesDemo',JSON.stringify(f));" style="cursor:pointer;">☆</span></li>
          <li style="display:flex;justify-content:space-between;padding:5px 0;"><span>পাস্তা</span><span onclick="let f=JSON.parse(localStorage.getItem('favRecipesDemo')||'[]');const n='পাস্তা';if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';}localStorage.setItem('favRecipesDemo',JSON.stringify(f));" style="cursor:pointer;">☆</span></li>
          <li style="display:flex;justify-content:space-between;padding:5px 0;"><span>ভুনা খিচুড়ি</span><span onclick="let f=JSON.parse(localStorage.getItem('favRecipesDemo')||'[]');const n='ভুনা খিচুড়ি';if(f.includes(n)){f=f.filter(x=>x!==n);this.textContent='☆';}else{f.push(n);this.textContent='⭐';}localStorage.setItem('favRecipesDemo',JSON.stringify(f));" style="cursor:pointer;">☆</span></li>
        </ul>
        <p style="font-size:11px;color:#6B7280;margin-top:6px;">👆 সার্চ করো (যেমন "খিচুড়ি" লিখলে দুটোই দেখাবে), আর ☆-এ ক্লিক করে ফেভারিট করো (localStorage-এ সেভ হয়)।</p>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ শুধু ফেভারিট রেসিপি দেখানোর একটা আলাদা ট্যাব যোগ করো</div>
      <div class="extend-item">2️⃣ প্রতিটা রেসিপিতে রান্নার সময় ও উপকরণ যোগ করো (অবজেক্টের অ্যারে ব্যবহার করে)</div>
      <div class="extend-item">3️⃣ একটা রেসিপি ডিটেইল পেজ বানাও ক্লিক করলে খোলে এমন</div>
    </div>
  `,
  9: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>💼 Job Listing Board with Filters</h2>
    <p class="subtitle">একটা চাকরির তালিকার বোর্ড — একাধিক ফিল্টার (ক্যাটাগরি + লোকেশন) একসাথে প্রয়োগ করা যায় এমন সিস্টেম। এই প্রজেক্টে অ্যারে ফিল্টারিং-এর একটা অ্যাডভান্সড ব্যবহার দেখানো হবে — একটার বদলে একাধিক শর্ত মিলিয়ে ফলাফল বের করা।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>একাধিক শর্তসহ filter() — <strong>JS কোর্স মডিউল ৬</strong></li>
        <li>State (একাধিক ফিল্টার ভেরিয়েবল) — <strong>মডিউল ১, JS কোর্স</strong></li>
        <li>Card কম্পোনেন্ট — <strong>মডিউল ৪</strong></li>
      </ul>
    </div>

    <h3>🔹 একাধিক ফিল্টার একসাথে প্রয়োগ</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">jobs</span> = [
  { <span class="fn">title</span>: <span class="str">"ফ্রন্টএন্ড ডেভেলপার"</span>, <span class="fn">category</span>: <span class="str">"টেক"</span>, <span class="fn">location</span>: <span class="str">"ঢাকা"</span> },
  { <span class="fn">title</span>: <span class="str">"গ্রাফিক ডিজাইনার"</span>, <span class="fn">category</span>: <span class="str">"ডিজাইন"</span>, <span class="fn">location</span>: <span class="str">"চট্টগ্রাম"</span> },
  { <span class="fn">title</span>: <span class="str">"ব্যাকএন্ড ডেভেলপার"</span>, <span class="fn">category</span>: <span class="str">"টেক"</span>, <span class="fn">location</span>: <span class="str">"চট্টগ্রাম"</span> },
];

<span class="kw">let</span> <span class="fn">activeCategory</span> = <span class="str">"সব"</span>;
<span class="kw">let</span> <span class="fn">activeLocation</span> = <span class="str">"সব"</span>;

<span class="kw">function</span> <span class="fn">applyFilters</span>() {
  <span class="kw">const</span> <span class="fn">filtered</span> = <span class="fn">jobs</span>.<span class="fn">filter</span>((<span class="fn">job</span>) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> <span class="fn">categoryMatch</span> = <span class="fn">activeCategory</span> === <span class="str">"সব"</span> || <span class="fn">job</span>.<span class="fn">category</span> === <span class="fn">activeCategory</span>;
    <span class="kw">const</span> <span class="fn">locationMatch</span> = <span class="fn">activeLocation</span> === <span class="str">"সব"</span> || <span class="fn">job</span>.<span class="fn">location</span> === <span class="fn">activeLocation</span>;
    <span class="kw">return</span> <span class="fn">categoryMatch</span> && <span class="fn">locationMatch</span>;   <span class="cmt">// দুটো শর্তই সত্যি হতে হবে</span>
  });

  <span class="fn">renderJobs</span>(<span class="fn">filtered</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
          <select id="demo-job-cat-9" onchange="
            const cat = this.value;
            const loc = document.getElementById('demo-job-loc-9').value;
            const jobs = [{title:'ফ্রন্টএন্ড ডেভেলপার', category:'টেক', location:'ঢাকা'},{title:'গ্রাফিক ডিজাইনার', category:'ডিজাইন', location:'চট্টগ্রাম'},{title:'ব্যাকএন্ড ডেভেলপার', category:'টেক', location:'চট্টগ্রাম'}];
            const filtered = jobs.filter(j => (cat==='সব'||j.category===cat) && (loc==='সব'||j.location===loc));
            document.getElementById('demo-job-results-9').innerHTML = filtered.length === 0
              ? '<p style=\\'color:#9CA3AF;font-size:12.5px;\\'>কোনো চাকরি পাওয়া যায়নি</p>'
              : filtered.map(j => '<div style=\\'border:1px solid #F3F4F6;border-radius:8px;padding:10px 14px;font-size:12.5px;\\'><strong>'+j.title+'</strong><br><span style=\\'color:#6B7280;\\'>'+j.category+' • '+j.location+'</span></div>').join('');
          " style="border:1px solid #D1D5DB;border-radius:6px;padding:6px 10px;font-size:12px;">
            <option value="সব">সব ক্যাটাগরি</option>
            <option value="টেক">টেক</option>
            <option value="ডিজাইন">ডিজাইন</option>
          </select>
          <select id="demo-job-loc-9" onchange="
            const loc = this.value;
            const cat = document.getElementById('demo-job-cat-9').value;
            const jobs = [{title:'ফ্রন্টএন্ড ডেভেলপার', category:'টেক', location:'ঢাকা'},{title:'গ্রাফিক ডিজাইনার', category:'ডিজাইন', location:'চট্টগ্রাম'},{title:'ব্যাকএন্ড ডেভেলপার', category:'টেক', location:'চট্টগ্রাম'}];
            const filtered = jobs.filter(j => (cat==='সব'||j.category===cat) && (loc==='সব'||j.location===loc));
            document.getElementById('demo-job-results-9').innerHTML = filtered.length === 0
              ? '<p style=\\'color:#9CA3AF;font-size:12.5px;\\'>কোনো চাকরি পাওয়া যায়নি</p>'
              : filtered.map(j => '<div style=\\'border:1px solid #F3F4F6;border-radius:8px;padding:10px 14px;font-size:12.5px;\\'><strong>'+j.title+'</strong><br><span style=\\'color:#6B7280;\\'>'+j.category+' • '+j.location+'</span></div>').join('');
          " style="border:1px solid #D1D5DB;border-radius:6px;padding:6px 10px;font-size:12px;">
            <option value="সব">সব লোকেশন</option>
            <option value="ঢাকা">ঢাকা</option>
            <option value="চট্টগ্রাম">চট্টগ্রাম</option>
          </select>
        </div>
        <div id="demo-job-results-9" style="display:flex;flex-direction:column;gap:8px;">
          <div style="border:1px solid #F3F4F6;border-radius:8px;padding:10px 14px;font-size:12.5px;"><strong>ফ্রন্টএন্ড ডেভেলপার</strong><br><span style="color:#6B7280;">টেক • ঢাকা</span></div>
          <div style="border:1px solid #F3F4F6;border-radius:8px;padding:10px 14px;font-size:12.5px;"><strong>গ্রাফিক ডিজাইনার</strong><br><span style="color:#6B7280;">ডিজাইন • চট্টগ্রাম</span></div>
          <div style="border:1px solid #F3F4F6;border-radius:8px;padding:10px 14px;font-size:12.5px;"><strong>ব্যাকএন্ড ডেভেলপার</strong><br><span style="color:#6B7280;">টেক • চট্টগ্রাম</span></div>
        </div>
      </div>
    </div>

    <p>💡 <strong>&& (AND) অপারেটরের ব্যবহারিক প্রয়োগ:</strong> <code>categoryMatch && locationMatch</code> — JS কোর্সের মডিউল ২-এ শেখা লজিক্যাল AND এখানে বাস্তবে কাজে লাগছে। দুটো শর্তই (ক্যাটাগরি মিলছে <strong>এবং</strong> লোকেশন মিলছে) সত্যি হলে তবেই একটা জব ফলাফলে থাকবে — "সব" নির্বাচন করা থাকলে সেই ফিল্টারটা স্বয়ংক্রিয়ভাবে "উপেক্ষা" হয়ে যায় (<code>=== "সব" ||</code> অংশটুকু সবসময় true দেয়)।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা সার্চ বক্সও যোগ করো যা শিরোনামেও ফিল্টার করে (তিনটা শর্ত একসাথে)</div>
      <div class="extend-item">2️⃣ "কতগুলো ফলাফল পাওয়া গেছে" একটা কাউন্ট দেখাও</div>
      <div class="extend-item">3️⃣ বেতন-রেঞ্জ স্লাইডার যোগ করো (<code>&lt;input type="range"&gt;</code>)</div>
    </div>
  `,
  10: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🏢 Multi-Page Business Website (চূড়ান্ত ক্যাপস্টোন)</h2>
    <p class="subtitle">এই কোর্সের সবচেয়ে বড় প্রজেক্ট — একটা সম্পূর্ণ বিজনেস ওয়েবসাইট, যেখানে আগের ৯টা প্রজেক্টের প্রায় সব কৌশল একসাথে মিশিয়ে দেওয়া হয়েছে। আর এবার নতুন একটা মাত্রা যোগ হচ্ছে — <strong>স্ক্রল-বেসড অ্যানিমেশন ও স্মুথ মোশন</strong>, যা যেকোনো সাধারণ সাইটকেও প্রফেশনাল, "প্রিমিয়াম" অনুভূতি দেয়।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা প্রয়োগ হচ্ছে:</strong>
      <ul>
        <li>এই কোর্সের প্রায় সব মডিউল (১-১০) একসাথে</li>
        <li><strong>Intersection Observer</strong> — স্ক্রল করলে এলিমেন্ট দেখা গেলেই অ্যানিমেট হওয়া (নতুন, অ্যাডভান্সড টেকনিক)</li>
        <li>CSS transition/animation (CSS কোর্স মডিউল ৯) — মোশনের ভিজ্যুয়াল অংশ</li>
        <li>Animated Counter — সংখ্যা ধীরে ধীরে বেড়ে ওঠা</li>
        <li>সব আগের প্যাটার্ন — নেভবার, কার্ড, ফর্ম, ফিল্টার</li>
      </ul>
    </div>

    <h3>🔹 Intersection Observer — স্ক্রলে অ্যানিমেশনের চাবিকাঠি</h3>
    <p>মডিউল ৯-এ আমরা <code>debugger</code>-এর মতো নতুন টুল দেখেছি — এখানে আরেকটা শক্তিশালী ব্রাউজার-বিল্ট-ইন টুল ব্যবহার করব: <strong>Intersection Observer</strong>। এটা "দেখে" থাকে একটা এলিমেন্ট স্ক্রিনে ঢুকল কিনা (স্ক্রল করার সময়), আর ঢুকলেই একটা ফাংশন চালায় — এভাবেই "স্ক্রল করলে ধীরে ধীরে ভেসে ওঠা" ইফেক্ট বানানো হয়।</p>

    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ডিফল্ট অবস্থা — অদৃশ্য ও একটু নিচে সরানো */</span>
<span class="fn">.fade-in-section</span> {
  <span class="fn">opacity</span>: <span class="fn">0</span>;
  <span class="fn">transform</span>: <span class="fn">translateY(30px)</span>;
  <span class="fn">transition</span>: <span class="fn">opacity 0.7s ease, transform 0.7s ease</span>;
}

<span class="cmt">/* JS এই ক্লাস যোগ করলেই ভেসে উঠবে */</span>
<span class="fn">.fade-in-section.visible</span> {
  <span class="fn">opacity</span>: <span class="fn">1</span>;
  <span class="fn">transform</span>: <span class="fn">translateY(0)</span>;
}</code></pre></div>
    </div>

    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">const</span> <span class="fn">sections</span> = <span class="fn">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".fade-in-section"</span>);

<span class="cmt">// একটা "observer" তৈরি করা — এটা প্রতিটা টার্গেট এলিমেন্টের উপর নজর রাখবে</span>
<span class="kw">const</span> <span class="fn">observer</span> = <span class="kw">new</span> <span class="fn">IntersectionObserver</span>((<span class="fn">entries</span>) <span class="kw">=&gt;</span> {
  <span class="fn">entries</span>.<span class="fn">forEach</span>((<span class="fn">entry</span>) <span class="kw">=&gt;</span> {
    <span class="kw">if</span> (<span class="fn">entry</span>.<span class="fn">isIntersecting</span>) {   <span class="cmt">// এলিমেন্টটা এখন স্ক্রিনে দেখা যাচ্ছে</span>
      <span class="fn">entry</span>.<span class="fn">target</span>.<span class="fn">classList</span>.<span class="fn">add</span>(<span class="str">"visible"</span>);
    }
  });
});

<span class="cmt">// প্রতিটা সেকশনকে observer-এর নজরদারিতে দেওয়া</span>
<span class="fn">sections</span>.<span class="fn">forEach</span>((<span class="fn">section</span>) <span class="kw">=&gt;</span> <span class="fn">observer</span>.<span class="fn">observe</span>(<span class="fn">section</span>));</code></pre></div>
    </div>

    <p>💡 <strong>ধাপে ধাপে বোঝা যাক:</strong> <code>IntersectionObserver</code> একটা ফাংশন নেয়, যেটা তখনই চলে যখন observe-করা কোনো এলিমেন্ট স্ক্রিনে "ঢোকে" বা "বের হয়"। <code>entry.isIntersecting</code> চেক করে বোঝা যায় এলিমেন্টটা এখন দেখা যাচ্ছে কিনা — সত্যি হলে <code>.visible</code> ক্লাস যোগ হয়, যা CSS-এর <code>transition</code> ট্রিগার করে এবং এলিমেন্টটা মসৃণভাবে ভেসে ওঠে। এই একই প্যাটার্ন (JS কোর্স মডিউল ৮-এর <code>classList.add</code>) — শুধু এবার "কখন" যোগ হবে তা ঠিক করছে Intersection Observer, ক্লিক ইভেন্ট না।</p>

    <h3>🔹 Animated Counter — সংখ্যা ধীরে বেড়ে ওঠা</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">animateCounter</span>(<span class="fn">element</span>, <span class="fn">target</span>) {
  <span class="kw">let</span> <span class="fn">current</span> = <span class="num">0</span>;
  <span class="kw">const</span> <span class="fn">step</span> = <span class="fn">target</span> / <span class="num">50</span>;   <span class="cmt">// ৫০ ধাপে পুরো সংখ্যায় পৌঁছাবে</span>

  <span class="kw">const</span> <span class="fn">timer</span> = <span class="fn">setInterval</span>(() <span class="kw">=&gt;</span> {
    <span class="fn">current</span> += <span class="fn">step</span>;
    <span class="kw">if</span> (<span class="fn">current</span> &gt;= <span class="fn">target</span>) {
      <span class="fn">element</span>.<span class="fn">textContent</span> = <span class="fn">target</span>;
      <span class="fn">clearInterval</span>(<span class="fn">timer</span>);   <span class="cmt">// পৌঁছে গেলে থামিয়ে দাও</span>
    } <span class="kw">else</span> {
      <span class="fn">element</span>.<span class="fn">textContent</span> = <span class="fn">Math</span>.<span class="fn">floor</span>(<span class="fn">current</span>);
    }
  }, <span class="num">20</span>);
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ — সম্পূর্ণ ব্যবসায়িক ওয়েবসাইট, মোশন সহ:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-biz-nav-10{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:white;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-size:13px;}
          .demo-biz-nav-10 .logo{font-weight:700;color:#0066CC;}
          .demo-biz-hero-10{background:linear-gradient(135deg,#0F172A,#0066CC);color:white;padding:32px 20px;text-align:center;}
          .demo-biz-hero-10 h1{font-size:19px;margin-bottom:6px;}
          .demo-biz-hero-10 p{font-size:12px;color:#CBD5E1;margin-bottom:14px;}
          .demo-biz-hero-10 button{background:#FBBF24;color:#1F2937;border:none;padding:8px 20px;border-radius:20px;font-weight:700;font-size:12px;cursor:pointer;transition:transform 0.2s ease;}
          .demo-biz-hero-10 button:hover{transform:scale(1.06);}
          .demo-biz-stats-10{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:20px;text-align:center;}
          .demo-biz-stats-10 .num{font-size:22px;font-weight:700;color:#0066CC;}
          .demo-biz-stats-10 .label{font-size:10.5px;color:#6B7280;}
          .demo-fade-10{opacity:0;transform:translateY(20px);transition:opacity 0.6s ease, transform 0.6s ease;}
          .demo-fade-10.visible{opacity:1;transform:translateY(0);}
        </style>
        <nav class="demo-biz-nav-10">
          <div class="logo">🏢 NextGen সলিউশনস</div>
          <div style="display:flex;gap:14px;color:#374151;"><span>সেবা</span><span>যোগাযোগ</span></div>
        </nav>
        <div class="demo-biz-hero-10">
          <h1>আমরা আপনার ব্যবসাকে ডিজিটাল করি</h1>
          <p>ওয়েব ডেভেলপমেন্ট, ডিজাইন ও কনসালটেন্সি সেবা</p>
          <button onclick="
            document.querySelectorAll('.demo-fade-10').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200);
            });
            const counters = document.querySelectorAll('.demo-counter-10');
            counters.forEach((el) => {
              const target = Number(el.dataset.target);
              let current = 0;
              const step = target / 40;
              const timer = setInterval(() => {
                current += step;
                if (current >= target) { el.textContent = target; clearInterval(timer); }
                else { el.textContent = Math.floor(current); }
              }, 20);
            });
          ">✨ স্ক্রল-ইফেক্ট প্রিভিউ চালাও</button>
        </div>
        <div class="demo-biz-stats-10">
          <div class="demo-fade-10"><div class="num"><span class="demo-counter-10" data-target="150">0</span>+</div><div class="label">প্রজেক্ট</div></div>
          <div class="demo-fade-10" style="transition-delay:0.1s;"><div class="num"><span class="demo-counter-10" data-target="98">0</span>%</div><div class="label">সন্তুষ্ট ক্লায়েন্ট</div></div>
          <div class="demo-fade-10" style="transition-delay:0.2s;"><div class="num"><span class="demo-counter-10" data-target="12">0</span></div><div class="label">টিম মেম্বার</div></div>
        </div>
        <p style="font-size:11px;color:#6B7280;padding:0 20px 16px;">👆 বাটনে ক্লিক করো — স্ট্যাটস কার্ডগুলো একটার পর একটা ভেসে উঠবে (আসল সাইটে এটা স্ক্রল করার সাথে সাথেই স্বয়ংক্রিয়ভাবে ঘটে, Intersection Observer দিয়ে) এবং সংখ্যাগুলো ধীরে ধীরে গুনে উঠবে।</p>
      </div>
    </div>

    <p>💡 <strong>এই ডেমোতে বাটন-ক্লিক ব্যবহার হয়েছে কেন, স্ক্রল না:</strong> আসল কোডে (উপরে দেখানো) Intersection Observer স্বয়ংক্রিয়ভাবে <strong>স্ক্রল করার সাথে সাথেই</strong> কাজ করে — ইউজারকে কিছু ক্লিক করতে হয় না। কিন্তু এই ছোট প্রিভিউ প্যানেলে যথেষ্ট স্ক্রল-জায়গা না থাকায়, বাটন ক্লিক দিয়ে সেই একই অ্যানিমেশন সিমুলেট করে দেখানো হয়েছে — মূল কনসেপ্ট ও ভিজ্যুয়াল ফলাফল অভিন্ন।</p>

    <p>💡 <strong>setTimeout দিয়ে ধারাবাহিক (staggered) অ্যানিমেশন:</strong> প্রতিটা স্ট্যাটস কার্ডে <code>i * 200</code> মিলিসেকেন্ড বিলম্ব দেওয়া হয়েছে (<code>forEach</code>-এর ইনডেক্স ব্যবহার করে) — ফলে সবগুলো একসাথে না ভেসে উঠে, একটার পর একটা ধারাবাহিকভাবে ভেসে ওঠে। এই ছোট্ট কৌশলটাই একটা সাইটকে "জীবন্ত" ও প্রফেশনাল অনুভূতি দেয়, যা এই কোর্সের শুরুতে (মডিউল ১) পরিকল্পনা করা একটা "সাধারণ" সাইট থেকে সম্পূর্ণ ভিন্ন স্তরে নিয়ে যায়।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও? — এটাই তোমার চূড়ান্ত পোর্টফোলিও পিস হতে পারে:</strong></div>
      <div class="extend-item">1️⃣ প্রজেক্ট ১-এর পোর্টফোলিও নেভবার+ফিল্টার এখানে যোগ করো</div>
      <div class="extend-item">2️⃣ প্রজেক্ট ২-এর ফর্ম ভ্যালিডেশন কন্ট্যাক্ট সেকশনে ব্যবহার করো</div>
      <div class="extend-item">3️⃣ প্রতিটা সেকশনে (About, Services, Testimonials) Intersection Observer দিয়ে fade-in যোগ করো</div>
      <div class="extend-item">4️⃣ মডিউল ১০ থেকে শেখা GitHub Pages-এ পুরো সাইটটা ডিপ্লয় করে একটা সত্যিকারের লাইভ লিংক নিজের CV/পোর্টফোলিওতে যোগ করো — এটাই এই সম্পূর্ণ কোর্সের চূড়ান্ত লক্ষ্য!</div>
    </div>
  `,
};

