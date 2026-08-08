/**
 * Banglay Web Development — main.js
 *
 * এই ফাইলে "Web Development" কোর্সের সব মডিউল মেটাডাটা ও লেসন
 * কনটেন্ট আছে। html-main.js / css-main.js / js-main.js থেকে
 * সম্পূর্ণ আলাদা — যাতে সব কোর্সের ডাটা একসাথে থাকলেও একে অপরের
 * ডাটাকে ওভাররাইট না করে।
 *
 * ══════════════════════════════════════════════════════════════
 * এই কোর্সের উদ্দেশ্য — অন্য তিনটা কোর্স থেকে ভিন্ন কেন?
 * ══════════════════════════════════════════════════════════════
 * HTML, CSS, ও JavaScript কোর্সে প্রতিটা ভাষা/টুল আলাদা আলাদাভাবে
 * শেখানো হয়েছে। কিন্তু বাস্তব জীবনে একটা ওয়েবসাইট বানাতে গেলে
 * তিনটাকেই একসাথে ব্যবহার করতে হয়, আর তখনই আসল সমস্যাগুলো দেখা
 * দেয় — ফাইল কীভাবে সংগঠিত করব, রেসপনসিভনেস কীভাবে প্ল্যান করব,
 * সার্ভার থেকে ডাটা কীভাবে আনব, সাইট স্লো হয়ে গেলে কী করব,
 * সবার জন্য ব্যবহারযোগ্য (accessible) কীভাবে বানাব, আর শেষে
 * সাইটটা ইন্টারনেটে সবার জন্য কীভাবে প্রকাশ করব।
 *
 * এই কোর্স সেই "মাঝখানের ফাঁক" পূরণ করে — তিনটা ভাষা জানার পরেও
 * যে দক্ষতাগুলো আলাদাভাবে শিখতে হয়, সেগুলোই এখানে ০ থেকে হিরো
 * পর্যন্ত কভার করা হচ্ছে। মডিউল শেষে থাকবে ১০টা ইউনিভার্সিটি-লেভেল
 * পোর্টফোলিও প্রজেক্ট (projects-data.js), যেখানে এই সব
 * শেখা একসাথে প্রয়োগ করা হবে।
 * ══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────────────────────
   MODULE METADATA — মোট ১০টি মডিউল
───────────────────────────────────────────────────────────── */
const WEBDEV_MODULES = [
  { id: 1,  title: "প্রজেক্ট প্ল্যানিং ও ফোল্ডার স্ট্রাকচার",       icon: "🗂️" },
  { id: 2,  title: "HTML+CSS+JS সংযুক্ত করা",                       icon: "🔗" },
  { id: 3,  title: "রেসপনসিভ লেআউট স্ট্র্যাটেজি",                    icon: "📐" },
  { id: 4,  title: "রিইউজেবল কম্পোনেন্ট ডিজাইন",                     icon: "🧩" },
  { id: 5,  title: "বাস্তব ফর্ম হ্যান্ডলিং ও ভ্যালিডেশন",             icon: "📋" },
  { id: 6,  title: "fetch() ও API থেকে ডাটা আনা",                    icon: "🌐" },
  { id: 7,  title: "পারফরম্যান্স অপ্টিমাইজেশন",                       icon: "⚡" },
  { id: 8,  title: "অ্যাক্সেসিবিলিটি ও SEO বেসিক",                    icon: "♿" },
  { id: 9,  title: "ডিবাগিং ওয়ার্কফ্লো",                              icon: "🐞" },
  { id: 10, title: "ডিপ্লয়মেন্ট ও পোর্টফোলিও প্রেজেন্টেশন",           icon: "🚀" },
];

/* ─────────────────────────────────────────────────────────────
   LESSON SECTIONS
───────────────────────────────────────────────────────────── */
const WEBDEV_LESSONS = {

  /* ══════════════════════════════════════════════════════════
     MODULE 1 — প্রজেক্ট প্ল্যানিং ও ফোল্ডার স্ট্রাকচার (complete)
  ══════════════════════════════════════════════════════════ */
  1: [
    {
      id: "1.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>🗂️ মডিউল ১: প্রজেক্ট প্ল্যানিং ও ফোল্ডার স্ট্রাকচার</h2>

        <h3>🔹 ১.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>কেন প্ল্যানিং ছাড়া কোড লেখা শুরু করা বিপজ্জনক</li>
          <li>একটা প্রফেশনাল ফোল্ডার স্ট্রাকচার কেমন হয়</li>
          <li>ফাইল নামকরণ কনভেনশন</li>
          <li>Wireframe ও User Flow — কোড লেখার আগে ডিজাইন ভাবা</li>
          <li>Git ও ভার্সন কন্ট্রোলের বেসিক পরিচিতি</li>
        </ul>
        <p>HTML, CSS, ও JavaScript কোর্সে তুমি প্রতিটা ভাষা আলাদাভাবে শিখেছ। কিন্তু একটা <strong>বাস্তব ওয়েবসাইট</strong> বানাতে গেলে প্রথম প্রশ্নটাই হলো — "আমি কোথা থেকে শুরু করব?" এই মডিউল ঠিক সেই প্রশ্নের উত্তর দেবে।</p>
      `
    },
    {
      id: "1.1",
      title: "কেন প্ল্যানিং জরুরি",
      content: `
        <h3>🔹 ১.১ কেন প্ল্যানিং ছাড়া কোড লেখা শুরু করা বিপজ্জনক</h3>
        <p>নতুন ডেভেলপাররা প্রায়ই সরাসরি VS Code খুলে কোড লেখা শুরু করে দেয় — কোনো পরিকল্পনা ছাড়াই। এটা প্রথম প্রথম দ্রুত মনে হলেও, প্রজেক্ট বড় হওয়ার সাথে সাথে মারাত্মক সমস্যা তৈরি করে:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্ল্যানিং ছাড়া কী হয়</th><th>প্ল্যানিং থাকলে কী হয়</th></tr></thead>
            <tbody>
              <tr><td>মাঝপথে বুঝতে পারো লেআউট ভুল ডিজাইনে বানিয়ে ফেলেছ</td><td>শুরুতেই wireframe দেখে লেআউট ঠিক করে নাও</td></tr>
              <tr><td>ফাইল যেখানে-সেখানে ছড়ানো, খুঁজে পাওয়া কঠিন</td><td>নির্দিষ্ট ফোল্ডারে গুছিয়ে রাখা, দ্রুত খুঁজে পাওয়া যায়</td></tr>
              <tr><td>একই কোড বারবার কপি-পেস্ট করা লাগে</td><td>রিইউজেবল কম্পোনেন্ট আগে থেকে চিন্তা করা থাকে (মডিউল ৪)</td></tr>
              <tr><td>নতুন ফিচার যোগ করতে গিয়ে পুরনো কোড ভেঙে যায়</td><td>প্রথম থেকেই স্কেলযোগ্য কাঠামো তৈরি থাকে</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>প্রফেশনাল নিয়ম:</strong> একটা প্রজেক্ট শুরু করার আগে অন্তত এই তিনটা প্রশ্নের উত্তর লিখে রাখো — ১) এই সাইটে কতগুলো পেজ থাকবে? ২) প্রতিটা পেজে কী কী সেকশন থাকবে? ৩) কোন কোন অংশ পুনরাবৃত্তি হবে (যেমন navbar, footer)? এই তিনটা প্রশ্নের উত্তরই তোমাকে ফোল্ডার স্ট্রাকচার ও কোড অর্গানাইজেশনের দিকনির্দেশনা দেবে।</p>
      `
    },
    {
      id: "1.2",
      title: "প্রফেশনাল ফোল্ডার স্ট্রাকচার",
      content: `
        <h3>🔹 ১.২ একটা প্রফেশনাল ফোল্ডার স্ট্রাকচার</h3>
        <p>ছোট প্রজেক্টে (এক-দুই পেজ) সব ফাইল একই ফোল্ডারে রাখলেও চলে, কিন্তু একটু বড় প্রজেক্টেই ফাইল ধরনভিত্তিক আলাদা ফোল্ডারে ভাগ করে রাখা হয়। নিচে একটা স্ট্যান্ডার্ড কাঠামো দেখানো হলো:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>project-structure</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">my-website/</span>
├── <span class="fn">index.html</span>              <span class="cmt">// হোমপেজ</span>
├── <span class="fn">about.html</span>              <span class="cmt">// অন্যান্য পেজ, root-এই রাখা হয় (সহজে লিংক করা যায়)</span>
├── <span class="fn">contact.html</span>
│
├── <span class="fn">css/</span>
│   ├── <span class="fn">style.css</span>           <span class="cmt">// প্রধান স্টাইলশিট</span>
│   └── <span class="fn">responsive.css</span>      <span class="cmt">// মিডিয়া কোয়েরি আলাদা রাখলে (ঐচ্ছিক)</span>
│
├── <span class="fn">js/</span>
│   ├── <span class="fn">main.js</span>              <span class="cmt">// প্রধান JavaScript লজিক</span>
│   └── <span class="fn">utils.js</span>             <span class="cmt">// পুনঃব্যবহারযোগ্য হেল্পার ফাংশন</span>
│
├── <span class="fn">images/</span>
│   ├── <span class="fn">logo.png</span>
│   └── <span class="fn">hero-banner.jpg</span>
│
└── <span class="fn">fonts/</span>                  <span class="cmt">// কাস্টম ফন্ট ফাইল থাকলে</span></code></pre></div>
        </div>

        <p>💡 <strong>মূল নিয়ম:</strong> একই ধরনের ফাইল একই ফোল্ডারে — সব CSS একসাথে, সব JavaScript একসাথে, সব ছবি একসাথে। HTML ফাইল সাধারণত root (সবচেয়ে উপরের) ফোল্ডারে রাখা হয়, কারণ ব্রাউজারের URL-এ তখন ছোট, পরিষ্কার পাথ (যেমন <code>yoursite.com/about.html</code>) দেখা যায়।</p>

        <p>⚠️ <strong>ছোট প্রজেক্টের জন্য সরলীকরণ:</strong> যদি প্রজেক্টে মাত্র ১-২টা CSS/JS ফাইল থাকে, তাহলে আলাদা ফোল্ডার (<code>css/</code>, <code>js/</code>) না বানিয়ে root-এই রাখা যায় — এই কোর্সের প্রজেক্টগুলোতেও (সরলতার জন্য) প্রায়ই সেভাবেই দেখানো হবে। ফোল্ডার আলাদা করাটা তখনই গুরুত্বপূর্ণ হয়ে ওঠে যখন ফাইল সংখ্যা বেড়ে যায়।</p>
      `
    },
    {
      id: "1.3",
      title: "ফাইল নামকরণ কনভেনশন",
      content: `
        <h3>🔹 ১.৩ ফাইল নামকরণ কনভেনশন</h3>
        <p>ফাইলের নাম যদি এলোমেলো বা অসামঞ্জস্যপূর্ণ হয় (যেমন <code>MyPage.HTML</code>, <code>contact_us.html</code>, <code>Contact-Page.html</code> — একই প্রজেক্টে মিশিয়ে), তাহলে বড় টিমে কাজ করার সময় বিভ্রান্তি তৈরি হয়, এমনকি কিছু সার্ভারে (Linux-ভিত্তিক হোস্টিং) বড়/ছোট হাতের অক্ষরের পার্থক্যের কারণে লিংক ভেঙেও যেতে পারে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>নিয়ম</th><th>ভালো উদাহরণ</th><th>খারাপ উদাহরণ</th></tr></thead>
            <tbody>
              <tr><td>সব ছোট হাতের অক্ষর</td><td><code>about.html</code></td><td><code>About.HTML</code></td></tr>
              <tr><td>স্পেসের বদলে হাইফেন</td><td><code>contact-us.html</code></td><td><code>contact us.html</code></td></tr>
              <tr><td>সংক্ষিপ্ত কিন্তু স্পষ্ট নাম</td><td><code>style.css</code></td><td><code>my-final-styles-v2-updated.css</code></td></tr>
              <tr><td>একই প্রজেক্টে একই কনভেনশন মেনে চলা</td><td>সব ফাইলে হাইফেন (<code>hero-banner.jpg</code>)</td><td>কোথাও হাইফেন, কোথাও আন্ডারস্কোর মিশিয়ে</td></tr>
            </tbody>
          </table>
        </div>

        <p>⚠️ <strong>কেন স্পেস এড়ানো উচিত:</strong> ফাইলের নামে স্পেস থাকলে সেটা URL-এ <code>%20</code> হিসেবে দেখায় (যেমন <code>contact us.html</code> হয়ে যায় <code>contact%20us.html</code>), যা দেখতে অগোছালো ও কখনো কখনো লিংক ভাঙার কারণ হয়। তাই ফাইলনামে সবসময় হাইফেন (<code>-</code>) ব্যবহার করা প্রফেশনাল স্ট্যান্ডার্ড।</p>
      `
    },
    {
      id: "1.4",
      title: "Wireframe ও User Flow",
      content: `
        <h3>🔹 ১.৪ Wireframe ও User Flow — কোড লেখার আগে ডিজাইন ভাবা</h3>
        <p><strong>Wireframe</strong> হলো একটা ওয়েবসাইটের পেজের খুবই সাধারণ, রঙ-ছাড়া "স্কেচ" — শুধু বক্স ও লাইন দিয়ে বোঝানো হয় কোথায় কী থাকবে (হেডার, ছবি, টেক্সট, বাটন)। কোনো CSS ডিজাইন বা রঙ নিয়ে চিন্তা না করেই, শুধু কাঠামো নিয়ে ভাবার জন্য এটা ব্যবহার হয়।</p>

        <p>💡 <strong>কেন Wireframe দরকার:</strong> সরাসরি CSS লিখতে বসলে মানুষ প্রায়ই রঙ, ফন্ট, ছায়া — এসব ছোটখাটো বিষয় নিয়ে সময় নষ্ট করে ফেলে, অথচ পুরো লেআউটের কাঠামোই এখনো ঠিক হয়নি। Wireframe দিয়ে আগে কাঠামো (layout) চূড়ান্ত করে, তারপর CSS দিয়ে সাজসজ্জা (styling) করা — এই ক্রমটাই সময় বাঁচায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধাপ</th><th>কী নিয়ে ভাবা হয়</th></tr></thead>
            <tbody>
              <tr><td>১. Wireframe</td><td>কাঠামো — কোথায় কী বসবে (header/nav/hero/footer)</td></tr>
              <tr><td>২. User Flow</td><td>ইউজার কোন পেজ থেকে কোন পেজে যাবে (Home → Products → Cart → Checkout)</td></tr>
              <tr><td>৩. HTML</td><td>সেই কাঠামো বাস্তবে সিমান্টিক ট্যাগ দিয়ে লেখা</td></tr>
              <tr><td>৪. CSS</td><td>রঙ, ফন্ট, স্পেসিং দিয়ে সাজানো</td></tr>
              <tr><td>৫. JavaScript</td><td>ইন্টারঅ্যাকশন ও কার্যকারিতা যোগ করা</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>User Flow</strong> হলো ইউজার সাইটে ঢুকে কোন পথ ধরে চলবে তার একটা মানচিত্র — যেমন একটা ই-কমার্স সাইটে: <code>হোমপেজ → প্রোডাক্ট লিস্ট → প্রোডাক্ট ডিটেইল → কার্ট → চেকআউট</code>। এই ফ্লো আগে থেকে ভেবে রাখলে বোঝা যায় ঠিক কতগুলো পেজ দরকার এবং কোন পেজ থেকে কোন পেজে লিংক (HTML কোর্স মডিউল ৩) থাকা উচিত।</p>

        <p>🎨 কাগজে-কলমে বা সাধারণ ড্রয়িং টুল (Figma, Excalidraw, বা এমনকি খাতা-কলম) দিয়েও Wireframe বানানো যায় — কোনো ব্যয়বহুল সফটওয়্যার লাগে না। গুরুত্বপূর্ণ হলো কোড লেখার আগে এই চিন্তা-ভাবনাটা করে নেওয়া।</p>
      `
    },
    {
      id: "1.5",
      title: "Git ও ভার্সন কন্ট্রোল পরিচিতি",
      content: `
        <h3>🔹 ১.৫ Git ও ভার্সন কন্ট্রোলের বেসিক পরিচিতি</h3>
        <p>প্রজেক্ট যত বড় হবে, কোডে ভুল করে কিছু নষ্ট হয়ে যাওয়ার ঝুঁকিও তত বাড়বে। <strong>Git</strong> একটা টুল যা তোমার কোডের প্রতিটা পরিবর্তনের "ইতিহাস" সেভ করে রাখে — যেকোনো সময় আগের কোনো ভার্সনে ফিরে যাওয়া যায়, যদি নতুন কিছু ভেঙে যায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>শব্দ</th><th>মানে</th></tr></thead>
            <tbody>
              <tr><td><strong>Repository (Repo)</strong></td><td>একটা প্রজেক্টের সব ফাইল ও তাদের ইতিহাস একসাথে সংরক্ষিত জায়গা</td></tr>
              <tr><td><strong>Commit</strong></td><td>কোডের একটা "সেভ পয়েন্ট" — কী পরিবর্তন হলো তার একটা নোটসহ</td></tr>
              <tr><td><strong>GitHub</strong></td><td>Git repository অনলাইনে হোস্ট করার একটা জনপ্রিয় প্ল্যাটফর্ম</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>terminal</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># একটা প্রজেক্ট ফোল্ডারে Git চালু করা</span>
<span class="fn">git</span> init

<span class="cmt"># পরিবর্তনগুলো "স্টেজ" করা (commit-এর জন্য প্রস্তুত করা)</span>
<span class="fn">git</span> add .

<span class="cmt"># একটা "সেভ পয়েন্ট" তৈরি করা, একটা বার্তাসহ</span>
<span class="fn">git</span> commit -m <span class="str">"হোমপেজের হিরো সেকশন যোগ করা হলো"</span></code></pre></div>
        </div>

        <p>💡 <strong>কেন এখনই এটা জানা দরকার:</strong> মডিউল ১০-এ যখন GitHub Pages-এ সাইট ডিপ্লয় (প্রকাশ) করা শিখবে, তার জন্য Git ব্যবহার করাই প্রধান পদ্ধতি। এই মুহূর্তে সব কমান্ড মুখস্থ করতে হবে না — শুধু ধারণাটা (কোডের ইতিহাস সেভ রাখা, প্রয়োজনে ফিরে যাওয়া যায়) বুঝে রাখাই যথেষ্ট, বিস্তারিত ব্যবহারিক প্র্যাকটিস মডিউল ১০-এ হবে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📝 কোড লেখার আগে অন্তত তিনটা প্রশ্নের উত্তর ঠিক করে নাও: কতগুলো পেজ, প্রতিটাতে কী সেকশন, আর কোন অংশ পুনরাবৃত্তি হবে।</div>
          <div class="takeaway-item">🗂️ ফাইল ধরনভিত্তিক ফোল্ডারে ভাগ করো (css/, js/, images/); ছোট প্রজেক্টে root-এই রাখা যথেষ্ট।</div>
          <div class="takeaway-item">🔤 ফাইলনাম সবসময় ছোট হাতের অক্ষর ও হাইফেন দিয়ে লেখো, স্পেস কখনোই না।</div>
          <div class="takeaway-item">✏️ প্রথমে Wireframe (কাঠামো) ও User Flow (পেজের মধ্যে সংযোগ) ভাবো, তারপর HTML → CSS → JavaScript এই ক্রমে বাস্তবায়ন করো।</div>
          <div class="takeaway-item">🗃️ Git দিয়ে কোডের ইতিহাস সেভ রাখা যায় — কমান্ড এখনই পুরোপুরি মুখস্থ না করলেও, ধারণাটা মাথায় রাখো (মডিউল ১০-এ বিস্তারিত)।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=2&section=2.0">
          পরের মডিউল: HTML+CSS+JS সংযুক্ত করা
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
        <h2>🔗 মডিউল ২: HTML+CSS+JS সংযুক্ত করা</h2>

        <h3>🔹 ২.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>তিনটা ফাইল একসাথে কীভাবে কাজ করে (ব্রাউজার কী ক্রমে পড়ে)</li>
          <li>CSS ও JS ফাইল লিংক করার সঠিক জায়গা ও কারণ</li>
          <li>DOMContentLoaded — কেন JS-কে "অপেক্ষা" করানো হয়</li>
          <li>একাধিক CSS/JS ফাইল ব্যবহারের কৌশল</li>
          <li>Inline vs Internal vs External — কখন কোনটা</li>
        </ul>
        <p>HTML, CSS, ও JavaScript কোর্সে প্রতিটা ভাষা আলাদাভাবে শিখেছ। কিন্তু আসল প্রশ্ন হলো — এই তিনটা ফাইল একসাথে একটা ব্রাউজারে খুললে ঠিক কী ঘটে, আর কোন ক্রমে? এই মডিউল সেই "পর্দার আড়ালের" প্রক্রিয়াটা স্পষ্ট করবে।</p>
      `
    },
    {
      id: "2.1",
      title: "ব্রাউজার কী ক্রমে পড়ে",
      content: `
        <h3>🔹 ২.১ ব্রাউজার HTML ফাইল কী ক্রমে পড়ে</h3>
        <p>ব্রাউজার একটা HTML ফাইল <strong>উপর থেকে নিচে, একটা একটা করে লাইন</strong> পড়ে (একে বলে "parsing")। যখনই এটা <code>&lt;link&gt;</code> বা <code>&lt;script&gt;</code> ট্যাগের মুখোমুখি হয়, তখন সেই মুহূর্তেই সেই ফাইলটা লোড করার চেষ্টা করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="cmt">&lt;!-- ১. এখানে CSS লোড হয় — পেজ দেখানোর আগেই --&gt;</span>
  <span class="kw">&lt;link</span> <span class="fn">rel</span>=<span class="str">"stylesheet"</span> <span class="fn">href</span>=<span class="str">"style.css"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>
  <span class="cmt">&lt;!-- ২. HTML কনটেন্ট ব্রাউজার ধাপে ধাপে দেখাতে শুরু করে --&gt;</span>
  <span class="kw">&lt;h1&gt;</span>স্বাগতম<span class="kw">&lt;/h1&gt;</span>

  <span class="cmt">&lt;!-- ৩. body-এর শেষে JS লোড হয় — HTML সম্পূর্ণ তৈরি হওয়ার পর --&gt;</span>
  <span class="kw">&lt;script</span> <span class="fn">src</span>=<span class="str">"script.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ক্রম</th><th>কী ঘটে</th><th>কেন এই ক্রমে</th></tr></thead>
            <tbody>
              <tr><td>১</td><td><code>&lt;head&gt;</code>-এর CSS লোড হয়</td><td>পেজ দেখানোর আগেই স্টাইল প্রস্তুত থাকা উচিত, নাহলে প্রথমে "কাঁচা" HTML দেখা যাবে (flash of unstyled content)</td></tr>
              <tr><td>২</td><td><code>&lt;body&gt;</code>-এর HTML পড়া ও দেখানো শুরু হয়</td><td>মূল কনটেন্ট তৈরি হতে থাকে</td></tr>
              <tr><td>৩</td><td>body-এর শেষে JS লোড ও চলে</td><td>JS প্রায়ই HTML এলিমেন্ট খুঁজে (CSS কোর্স মডিউল ৮ মনে আছে?) কাজ করে — HTML আগে সম্পূর্ণ তৈরি হওয়া দরকার, নাহলে এলিমেন্ট খুঁজে পাবে না</td></tr>
            </tbody>
          </table>
        </div>

        <p>⚠️ <strong>সবচেয়ে কমন ভুল:</strong> যদি <code>&lt;script&gt;</code> ট্যাগ <code>&lt;head&gt;</code>-এ বসানো হয় (এবং কোনো বিশেষ ব্যবস্থা না নেওয়া হয়), তাহলে JS ফাইলটা body-এর HTML তৈরি হওয়ার <strong>আগেই</strong> চলার চেষ্টা করবে — ফলে <code>document.getElementById(...)</code> এর মতো কোড <code>null</code> রিটার্ন করবে, কারণ সেই এলিমেন্টটা তখনো তৈরিই হয়নি।</p>
      `
    },
    {
      id: "2.2",
      title: "CSS লিংক করার সঠিক জায়গা",
      content: `
        <h3>🔹 ২.২ CSS কেন সবসময় &lt;head&gt;-এ থাকে</h3>
        <p>CSS ফাইল সবসময় <code>&lt;head&gt;</code>-এর ভেতরে <code>&lt;link&gt;</code> ট্যাগ দিয়ে লোড করা হয় — এর পেছনে একটা স্পষ্ট কারণ আছে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>আমার সাইট<span class="kw">&lt;/title&gt;</span>
  <span class="kw">&lt;link</span> <span class="fn">rel</span>=<span class="str">"stylesheet"</span> <span class="fn">href</span>=<span class="str">"css/style.css"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/head&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>যদি CSS body-এর শেষে থাকত তাহলে কী হতো:</strong> ব্রাউজার প্রথমে বিনা-স্টাইলের "কাঁচা" HTML দেখিয়ে ফেলত (কালো টেক্সট, ডিফল্ট ফন্ট), তারপর হঠাৎ CSS লোড হয়ে সবকিছু পরিবর্তিত হয়ে যেত ইউজারের চোখের সামনেই — এই কুৎসিত ঝলকানিকে বলে <strong>FOUC (Flash of Unstyled Content)</strong>। <code>&lt;head&gt;</code>-এ CSS রাখলে ব্রাউজার স্টাইল প্রস্তুত না হওয়া পর্যন্ত পেজ দেখানো শুরুই করে না, তাই এই সমস্যা এড়ানো যায়।</p>

        <p>⚠️ <strong>একাধিক CSS ফাইলের ক্রম গুরুত্বপূর্ণ:</strong> CSS কোর্সের মডিউল ২-এ শেখা Specificity মনে আছে? যদি দুইটা CSS ফাইলে একই সিলেক্টরে ভিন্ন স্টাইল থাকে, তাহলে যেটা <strong>পরে</strong> লিংক করা হয়েছে সেটাই জিতবে — তাই সাধারণ (base) স্টাইল আগে, নির্দিষ্ট (override) স্টাইল পরে লিংক করা উচিত।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;link</span> <span class="fn">rel</span>=<span class="str">"stylesheet"</span> <span class="fn">href</span>=<span class="str">"css/reset.css"</span><span class="kw">&gt;</span>     <span class="cmt">&lt;!-- আগে: বেসিক রিসেট --&gt;</span>
<span class="kw">&lt;link</span> <span class="fn">rel</span>=<span class="str">"stylesheet"</span> <span class="fn">href</span>=<span class="str">"css/style.css"</span><span class="kw">&gt;</span>     <span class="cmt">&lt;!-- পরে: মূল ডিজাইন --&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "2.3",
      title: "JavaScript কোথায় বসাবে",
      content: `
        <h3>🔹 ২.৩ JavaScript &lt;body&gt;-এর শেষে কেন</h3>
        <p>JS ফাইল সাধারণত <code>&lt;/body&gt;</code> ট্যাগের ঠিক আগে বসানো হয় (JavaScript কোর্সের মডিউল ১-এ প্রথম শেখা), যাতে স্ক্রিপ্ট চলার আগেই পুরো HTML কাঠামো ব্রাউজারে তৈরি হয়ে যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;body&gt;</span>
  <span class="kw">&lt;h1</span> <span class="fn">id</span>=<span class="str">"title"</span><span class="kw">&gt;</span>স্বাগতম<span class="kw">&lt;/h1&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">id</span>=<span class="str">"myBtn"</span><span class="kw">&gt;</span>ক্লিক করো<span class="kw">&lt;/button&gt;</span>

  <span class="kw">&lt;script</span> <span class="fn">src</span>=<span class="str">"js/main.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/body&gt;</span></code></pre></div>
        </div>

        <h4>বিকল্প পদ্ধতি — defer অ্যাট্রিবিউট</h4>
        <p>আধুনিক HTML-এ <code>&lt;script&gt;</code> ট্যাগ <code>&lt;head&gt;</code>-এ রেখেও <code>defer</code> অ্যাট্রিবিউট দিয়ে একই সুবিধা পাওয়া যায়:</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;script</span> <span class="fn">src</span>=<span class="str">"js/main.js"</span> <span class="fn">defer</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/head&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>পদ্ধতি</th><th>আচরণ</th></tr></thead>
            <tbody>
              <tr><td>body-শেষে সাধারণ <code>&lt;script&gt;</code></td><td>HTML সম্পূর্ণ তৈরি হওয়ার পরই স্ক্রিপ্ট ডাউনলোড ও চলে — সহজ, বেশিরভাগ প্রজেক্টে যথেষ্ট</td></tr>
              <tr><td><code>&lt;script defer&gt;</code> (head-এ)</td><td>স্ক্রিপ্ট HTML পার্স হওয়ার <strong>সাথে সাথেই</strong> ডাউনলোড হতে থাকে (ব্যাকগ্রাউন্ডে), কিন্তু <strong>চলে</strong> শুধু পুরো HTML তৈরি হওয়ার পর — দ্রুততর, বড় প্রজেক্টে প্রফেশনাল স্ট্যান্ডার্ড</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 এই কোর্সের শুরুর দিকে body-শেষের পদ্ধতিই যথেষ্ট এবং বোঝা সহজ — কিন্তু বড় প্রজেক্টে বা প্রফেশনাল কাজে <code>defer</code> ব্যবহার করাই বর্তমান বেস্ট প্র্যাকটিস, কারণ এতে পেজ কিছুটা দ্রুত লোড হয় (CSS ও JS একসাথে ডাউনলোড হতে থাকে)।</p>
      `
    },
    {
      id: "2.4",
      title: "DOMContentLoaded",
      content: `
        <h3>🔹 ২.৪ DOMContentLoaded — নিরাপদভাবে JS চালানো</h3>
        <p>যদি কোনো কারণে <code>&lt;script&gt;</code> ট্যাগ <code>&lt;head&gt;</code>-এ (কোনো <code>defer</code> ছাড়াই) রাখতেই হয়, তাহলে JS কোডকে "অপেক্ষা করাতে" হয় যতক্ষণ না পুরো HTML তৈরি হয়ে যায় — এই কাজে ব্যবহার হয় <code>DOMContentLoaded</code> ইভেন্ট (JavaScript কোর্সের মডিউল ৯-এ শেখা <code>addEventListener</code>-এরই একটা বিশেষ ব্যবহার)।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">document</span>.<span class="fn">addEventListener</span>(<span class="str">"DOMContentLoaded"</span>, <span class="kw">function</span>() {
  <span class="cmt">// এই ফাংশনের ভেতরের কোড শুধু তখনই চলবে যখন পুরো HTML প্রস্তুত</span>
  <span class="kw">const</span> <span class="fn">btn</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"myBtn"</span>);
  <span class="fn">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="kw">=&gt;</span> {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"বাটন প্রস্তুত ও কাজ করছে!"</span>);
  });
});</code></pre></div>
        </div>

        <p>💡 <code>DOMContentLoaded</code> ব্রাউজারকে বলে দেয় — "যতক্ষণ না পুরো HTML কাঠামো (DOM) সম্পূর্ণ তৈরি হয়, ততক্ষণ এই ফাংশনের ভেতরের কোড চালিও না"। এটা এক ধরনের "নিরাপত্তা বলয়" — script যেখানেই বসানো থাকুক না কেন, এই ইভেন্টের ভেতরে কোড লিখলে "এলিমেন্ট খুঁজে পাওয়া যাচ্ছে না" জাতীয় এরর এড়ানো যায়।</p>

        <p>⚠️ <strong>এখন এটা কম গুরুত্বপূর্ণ, কিন্তু জানা থাকা ভালো:</strong> যদি স্ক্রিপ্ট body-এর শেষে (বা <code>defer</code> দিয়ে) রাখা হয়, তাহলে <code>DOMContentLoaded</code> ব্যবহার করার তেমন প্রয়োজন পড়ে না, কারণ ততক্ষণে HTML এমনিতেই তৈরি হয়ে গেছে। কিন্তু বড় প্রজেক্টে, বা অন্য কারো লেখা কোড পড়ার সময় এই প্যাটার্নটা প্রায়ই দেখা যাবে, তাই এটা চেনা ও বোঝা জরুরি।</p>
      `
    },
    {
      id: "2.5",
      title: "সারসংক্ষেপ",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📖 ব্রাউজার HTML উপর থেকে নিচে পড়ে; <code>&lt;link&gt;</code>/<code>&lt;script&gt;</code> যেখানে বসানো, সেখানেই সেই ফাইল লোড হওয়ার চেষ্টা হয়।</div>
          <div class="takeaway-item">🎨 CSS সবসময় <code>&lt;head&gt;</code>-এ — পেজ দেখানোর আগেই স্টাইল প্রস্তুত থাকা দরকার (FOUC এড়াতে); একাধিক CSS ফাইলে পরেরটা জেতে (Specificity)।</div>
          <div class="takeaway-item">⚙️ JavaScript সাধারণত <code>&lt;/body&gt;</code>-এর ঠিক আগে — যাতে HTML এলিমেন্ট আগে থেকেই তৈরি থাকে; আধুনিক বিকল্প হলো <code>&lt;script defer&gt;</code> ব্যবহার করে <code>&lt;head&gt;</code>-এ রাখা।</div>
          <div class="takeaway-item">🛡️ <code>DOMContentLoaded</code> ইভেন্ট দিয়ে JS কোডকে HTML সম্পূর্ণ তৈরি হওয়া পর্যন্ত "অপেক্ষা" করানো যায় — script এর অবস্থান নির্বিশেষে নিরাপদ।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=3&section=3.0">
          পরের মডিউল: রেসপনসিভ লেআউট স্ট্র্যাটেজি
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
        <h2>📐 মডিউল ৩: রেসপনসিভ লেআউট স্ট্র্যাটেজি</h2>

        <h3>🔹 ৩.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>CSS কোর্সের মিডিয়া কোয়েরি জ্ঞানকে বাস্তব প্রজেক্টে প্রয়োগ করার কৌশল</li>
          <li>একটা সম্পূর্ণ পেজের জন্য "রেসপনসিভ প্ল্যান" কীভাবে বানাতে হয়</li>
          <li>কমন লেআউট প্যাটার্ন — Stack on Mobile, Sidebar Collapse, Nav Hamburger</li>
          <li>একাধিক ডিভাইসে সত্যিকারের টেস্টিং পদ্ধতি</li>
        </ul>
        <p>CSS কোর্সের মডিউল ৮-এ তুমি <code>@media</code> সিনট্যাক্স শিখেছ। কিন্তু একটা <strong>সম্পূর্ণ ওয়েবসাইট</strong> রেসপনসিভ বানাতে গেলে শুধু সিনট্যাক্স জানাই যথেষ্ট না — দরকার একটা পরিকল্পনা: ঠিক কোন কোন এলিমেন্ট, কোন স্ক্রিনে, কীভাবে বদলাবে। এই মডিউল সেই পরিকল্পনা করার পদ্ধতি শেখাবে।</p>
      `
    },
    {
      id: "3.1",
      title: "রেসপনসিভ প্ল্যান বানানো",
      content: `
        <h3>🔹 ৩.১ কোড লেখার আগে একটা "রেসপনসিভ প্ল্যান" বানানো</h3>
        <p>সরাসরি মিডিয়া কোয়েরি লিখতে বসার আগে, প্রতিটা বড় সেকশনের জন্য একটা টেবিল বানিয়ে ভেবে নেওয়া উচিত — মোবাইলে কেমন দেখাবে, ডেস্কটপে কেমন দেখাবে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>সেকশন</th><th>মোবাইল (&lt;600px)</th><th>ডেস্কটপ (768px+)</th></tr></thead>
            <tbody>
              <tr><td>নেভবার</td><td>হ্যামবার্গার মেনু আইকন</td><td>সব লিংক পাশাপাশি দেখা যায়</td></tr>
              <tr><td>হিরো সেকশন</td><td>ছবি উপরে, টেক্সট নিচে (column)</td><td>ছবি ও টেক্সট পাশাপাশি (row)</td></tr>
              <tr><td>প্রোডাক্ট গ্রিড</td><td>১ কলাম</td><td>৩ কলাম</td></tr>
              <tr><td>সাইডবার</td><td>মূল কনটেন্টের নিচে চলে যায়</td><td>মূল কনটেন্টের পাশে স্থায়ী থাকে</td></tr>
              <tr><td>ফুটার</td><td>সব লিংক একটার নিচে একটা</td><td>কয়েকটা কলামে ভাগ করা</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>কেন এই টেবিল আগে বানানো উচিত:</strong> সরাসরি কোড লিখতে বসলে প্রায়ই দেখা যায় একটা সেকশন ঠিক করতে গিয়ে আরেকটা ভেঙে যাচ্ছে, বা কিছু এলিমেন্ট ভুলে যাওয়া হচ্ছে। এই সহজ টেবিলটা বানিয়ে নিলে পুরো পেজের প্রতিটা অংশ একসাথে মাথায় রাখা যায়, এবং CSS লেখার সময় প্রতিটা সেকশন ধরে ধরে এগোনো যায়।</p>
      `
    },
    {
      id: "3.2",
      title: "Stack on Mobile প্যাটার্ন",
      content: `
        <h3>🔹 ৩.২ Stack on Mobile — সবচেয়ে বেশি ব্যবহৃত প্যাটার্ন</h3>
        <p>এটাই ওয়েবে সবচেয়ে বেশি দেখা রেসপনসিভ প্যাটার্ন — ডেস্কটপে দুই বা তিনটা এলিমেন্ট পাশাপাশি (row), মোবাইলে সেগুলো একটার নিচে একটা (column) সাজানো। CSS কোর্সের মডিউল ৮-এ এটা একবার দেখেছিলে, এখানে সম্পূর্ণ প্রজেক্ট-লেভেলে কীভাবে ব্যবহার হয় তা দেখা যাক।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* Mobile-First — ডিফল্ট (কোনো মিডিয়া কোয়েরি ছাড়া) মোবাইলের জন্য */</span>
<span class="fn">.hero</span> {
  <span class="fn">display</span>: <span class="fn">flex</span>;
  <span class="fn">flex-direction</span>: <span class="fn">column</span>;
  <span class="fn">gap</span>: <span class="fn">20px</span>;
}

<span class="cmt">/* বড় স্ক্রিনে row-তে বদলে যায় */</span>
<span class="fn">@media</span> <span class="fn">(min-width: 768px)</span> {
  <span class="fn">.hero</span> {
    <span class="fn">flex-direction</span>: <span class="fn">row</span>;
    <span class="fn">align-items</span>: <span class="fn">center</span>;
  }
}</code></pre></div>
        </div>

        <p>💡 <strong>প্রজেক্টে এই প্যাটার্ন কোথায় কোথায় ব্যবহার হয়:</strong></p>
        <ul>
          <li>হিরো সেকশন (ছবি + টেক্সট)</li>
          <li>প্রোডাক্ট কার্ড বা টিম মেম্বার কার্ড গ্রিড</li>
          <li>"আমাদের সম্পর্কে" সেকশন (ছবি + প্যারাগ্রাফ)</li>
          <li>কন্ট্যাক্ট পেজ (ফর্ম + ম্যাপ/তথ্য)</li>
        </ul>
        <p>এই একটা প্যাটার্নই একটা সম্পূর্ণ ওয়েবসাইটের ৭০-৮০% রেসপনসিভ সমস্যা সমাধান করে দেয় — CSS কোর্সের মডিউল ৬ (Flexbox) ও মডিউল ৮ (মিডিয়া কোয়েরি) একসাথে ব্যবহার করে।</p>
      `
    },
    {
      id: "3.3",
      title: "নেভবার হ্যামবার্গার প্যাটার্ন",
      content: `
        <h3>🔹 ৩.৩ Nav Hamburger — মোবাইল নেভিগেশনের স্ট্যান্ডার্ড</h3>
        <p>ডেস্কটপে অনেকগুলো নেভবার লিংক পাশাপাশি জায়গা করে নিতে পারে, কিন্তু মোবাইলের ছোট স্ক্রিনে সেগুলো আঁটে না বা ভীষণ ছোট দেখায়। তাই মোবাইলে সাধারণত সব লিংক একটা "☰" (হ্যামবার্গার) আইকনের পেছনে লুকিয়ে রাখা হয়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* ডিফল্ট (মোবাইল) — মেনু লুকানো, হ্যামবার্গার আইকন দেখা যায় */</span>
<span class="fn">.nav-links</span> {
  <span class="fn">display</span>: <span class="fn">none</span>;
}

<span class="fn">.hamburger-icon</span> {
  <span class="fn">display</span>: <span class="fn">block</span>;
}

<span class="cmt">/* বড় স্ক্রিনে উল্টো — মেনু দেখা যায়, হ্যামবার্গার লুকানো */</span>
<span class="fn">@media</span> <span class="fn">(min-width: 768px)</span> {
  <span class="fn">.nav-links</span> {
    <span class="fn">display</span>: <span class="fn">flex</span>;
  }
  <span class="fn">.hamburger-icon</span> {
    <span class="fn">display</span>: <span class="fn">none</span>;
  }
}</code></pre></div>
        </div>

        <p>💡 <strong>এখানে JavaScript-ও লাগে:</strong> মোবাইলে হ্যামবার্গার আইকনে ক্লিক করলে মেনু খুলতে/বন্ধ হতে হয় — এটা JavaScript কোর্সের মডিউল ৮ (classList.toggle) দিয়ে করা হয়। তাই এই একটা ফিচারেই CSS (লেআউট বদল) ও JavaScript (ক্লিক ইন্টারঅ্যাকশন) দুটোই একসাথে কাজ করে — এটাই এই কোর্সের মূল থিম, তিনটা ভাষা একসাথে মিলিয়ে কাজ করা।</p>
      `
    },
    {
      id: "3.4",
      title: "একাধিক ডিভাইসে টেস্টিং",
      content: `
        <h3>🔹 ৩.৪ একাধিক ডিভাইসে সত্যিকারের টেস্টিং</h3>
        <p>শুধু ব্রাউজার উইন্ডো ছোট-বড় করে দেখাই যথেষ্ট না — CSS কোর্সের মডিউল ১০-এ শেখা DevTools-এর <strong>Responsive/Device Mode</strong> ব্যবহার করে প্রকৃত ডিভাইস সাইজে (iPhone, iPad, বিভিন্ন অ্যান্ড্রয়েড ফোন) টেস্ট করা উচিত।</p>

        <p>💡 <strong>টেস্ট করার সময় যা যা চেক করা উচিত:</strong></p>
        <ul>
          <li>টেক্সট কি খুব ছোট বা খুব বড় দেখাচ্ছে?</li>
          <li>বাটন/লিংক কি আঙুল দিয়ে চাপার মতো যথেষ্ট বড় (কমপক্ষে ৪৪x৪৪ পিক্সেল)?</li>
          <li>ছবি কি প্যারেন্ট বক্সের বাইরে ওভারফ্লো করছে (CSS কোর্স মডিউল ৮-এ শেখা <code>max-width: 100%</code> মনে আছে?)</li>
          <li>হরিজন্টাল স্ক্রলবার অনিচ্ছাকৃতভাবে দেখা যাচ্ছে কিনা (এটা প্রায়ই কোনো এলিমেন্টের নির্দিষ্ট <code>width</code> স্ক্রিনের চেয়ে বড় হওয়ার লক্ষণ)</li>
        </ul>

        <p>⚠️ <strong>বাস্তব ডিভাইসেও টেস্ট করা ভালো অভ্যাস:</strong> DevTools-এর সিমুলেশন খুবই ভালো, কিন্তু ১০০% নিখুঁত না — সম্ভব হলে নিজের ফোন/ট্যাবলেট দিয়েও একবার আসল সাইটটা দেখে নেওয়া উচিত, বিশেষ করে কোনো প্রজেক্ট জমা দেওয়ার বা ডিপ্লয় করার আগে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">📋 কোড লেখার আগে প্রতিটা সেকশনের জন্য একটা মোবাইল-vs-ডেস্কটপ প্ল্যান টেবিল বানাও।</div>
          <div class="takeaway-item">📱 Stack on Mobile (flex-direction: column → row) সবচেয়ে বেশি ব্যবহৃত প্যাটার্ন — একটাই কৌশল পেজের বেশিরভাগ রেসপনসিভ সমস্যা সমাধান করে।</div>
          <div class="takeaway-item">☰ Nav Hamburger প্যাটার্নে CSS (display বদল) ও JavaScript (ক্লিকে টগল) একসাথে কাজ করে।</div>
          <div class="takeaway-item">🧪 শুধু ব্রাউজার ছোট-বড় করাই যথেষ্ট না — DevTools Device Mode ও সম্ভব হলে বাস্তব ডিভাইসে টেস্ট করো।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=4&section=4.0">
          পরের মডিউল: রিইউজেবল কম্পোনেন্ট ডিজাইন
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
        <h2>🧩 মডিউল ৪: রিইউজেবল কম্পোনেন্ট ডিজাইন</h2>

        <h3>🔹 ৪.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>কম্পোনেন্ট কী এবং কেন এভাবে চিন্তা করা উচিত</li>
          <li>Navbar, Card, Footer — সবচেয়ে বেশি পুনরাবৃত্তি হওয়া তিনটা কম্পোনেন্ট</li>
          <li>প্রজেক্ট-স্কেলে BEM নামকরণ প্রয়োগ (CSS কোর্সের ধারণা বিস্তৃত করে)</li>
          <li>একটা ছোট "কম্পোনেন্ট লাইব্রেরি" মানসিকতা গড়ে তোলা</li>
        </ul>
        <p>একটা ওয়েবসাইটের প্রতিটা পেজ যদি শূন্য থেকে আলাদাভাবে বানানো হয়, তাহলে কাজ বহুগুণ বেড়ে যায় এবং ডিজাইনে অসামঞ্জস্য দেখা দেয়। প্রফেশনাল ডেভেলপাররা তাই "কম্পোনেন্ট" হিসেবে চিন্তা করে — ছোট, স্বয়ংসম্পূর্ণ অংশ যা বারবার ব্যবহার করা যায়।</p>
      `
    },
    {
      id: "4.1",
      title: "কম্পোনেন্ট কী এবং কেন",
      content: `
        <h3>🔹 ৪.১ কম্পোনেন্ট কী এবং কেন এভাবে চিন্তা করা উচিত</h3>
        <p><strong>কম্পোনেন্ট</strong> হলো একটা ওয়েবসাইটের ছোট, স্বাধীন অংশ — যেমন একটা বাটন, একটা কার্ড, একটা নেভবার — যা একবার ডিজাইন করে বিভিন্ন পেজে বা একই পেজে একাধিকবার ব্যবহার করা যায়, প্রতিবার নতুন করে না বানিয়ে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>কম্পোনেন্ট-চিন্তা ছাড়া</th><th>কম্পোনেন্ট-চিন্তা সহ</th></tr></thead>
            <tbody>
              <tr><td>প্রতিটা প্রোডাক্ট কার্ডের জন্য আলাদা CSS ক্লাস ও কাঠামো লেখা</td><td>একটা <code>.product-card</code> ক্লাস বানিয়ে সব প্রোডাক্টে পুনঃব্যবহার</td></tr>
              <tr><td>নেভবার ডিজাইন বদলাতে চাইলে প্রতিটা পেজে গিয়ে আলাদা বদলানো</td><td>একটাই নেভবার কম্পোনেন্ট, এক জায়গায় বদলালে সব জায়গায় প্রতিফলিত (JS দিয়ে ডাইনামিক লোড করলে, মডিউল ৬-এ বিস্তারিত)</td></tr>
              <tr><td>বাটনের রঙ/সাইজ পেজভেদে ভিন্ন ভিন্ন দেখায়</td><td>একই <code>.btn</code> ক্লাস সব জায়গায়, সামঞ্জস্যপূর্ণ ডিজাইন</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 CSS কোর্সের প্রজেক্টগুলোতে (Pricing Card, Navbar) তুমি ইতিমধ্যে ছোট আকারে কম্পোনেন্ট বানিয়েছ — এই মডিউলে সেই ধারণাটাকেই একটা সম্পূর্ণ ওয়েবসাইটের স্কেলে নিয়ে যাওয়া হবে।</p>
      `
    },
    {
      id: "4.2",
      title: "Navbar কম্পোনেন্ট প্যাটার্ন",
      content: `
        <h3>🔹 ৪.২ Navbar — সবচেয়ে বেশি পুনরাবৃত্তি হওয়া কম্পোনেন্ট</h3>
        <p>প্রায় প্রতিটা পেজেই নেভবার থাকে, তাই এটাকে একটা "টেমপ্লেট" হিসেবে ভাবা উচিত — একবার HTML+CSS ঠিক করে নিলে, বাকি পেজগুলোতে শুধু কপি করা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>navbar-component.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;nav</span> <span class="fn">class</span>=<span class="str">"navbar"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"navbar__logo"</span><span class="kw">&gt;</span>মাইসাইট<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;ul</span> <span class="fn">class</span>=<span class="str">"navbar__links"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;li&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"index.html"</span><span class="kw">&gt;</span>হোম<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"about.html"</span><span class="kw">&gt;</span>সম্পর্কে<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"contact.html"</span><span class="kw">&gt;</span>যোগাযোগ<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="kw">&lt;/ul&gt;</span>
<span class="kw">&lt;/nav&gt;</span></code></pre></div>
        </div>

        <p>💡 লক্ষ করো <code>class</code> নামকরণ — <code>navbar</code>, <code>navbar__logo</code>, <code>navbar__links</code> — এটাই CSS কোর্সের মডিউল ১০-এ শেখা <strong>BEM</strong> পদ্ধতি (Block__Element)। প্রতিটা পেজে এই একই কাঠামো কপি করলে, শুধু <code>href</code>-এর মান বা সক্রিয় (active) লিংক বদলানো লাগবে, বাকি সব একই থাকবে — এটাই সামঞ্জস্যপূর্ণ ডিজাইনের চাবিকাঠি।</p>

        <p>⚠️ <strong>সতর্কতা — সক্রিয় পেজ চিহ্নিত করা ভুলে যেও না:</strong> প্রতিটা পেজে নেভবার কপি করার সময়, সেই পেজের নিজস্ব লিংকে একটা <code>active</code> ক্লাস যোগ করতে ভুলো না (যেমন <code>about.html</code>-এ থাকলে "সম্পর্কে" লিংকে <code>class="navbar__links-item active"</code>), নাহলে ইউজার বুঝতে পারবে না তারা এখন কোন পেজে আছে।</p>
      `
    },
    {
      id: "4.3",
      title: "Card কম্পোনেন্ট প্যাটার্ন",
      content: `
        <h3>🔹 ৪.৩ Card — সবচেয়ে নমনীয় কম্পোনেন্ট</h3>
        <p>"কার্ড" প্যাটার্ন (একটা বক্সে ছবি+শিরোনাম+বর্ণনা+বাটন) প্রোডাক্ট লিস্ট, ব্লগ পোস্ট, টিম মেম্বার, প্রাইসিং প্ল্যান — প্রায় সব জায়গাতেই ব্যবহার হয়, শুধু ভেতরের কনটেন্ট বদলায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>card-component.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"product.jpg"</span> <span class="fn">alt</span>=<span class="str">"প্রোডাক্ট"</span> <span class="fn">class</span>=<span class="str">"card__image"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"card__body"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;h3</span> <span class="fn">class</span>=<span class="str">"card__title"</span><span class="kw">&gt;</span>প্রোডাক্টের নাম<span class="kw">&lt;/h3&gt;</span>
    <span class="kw">&lt;p</span> <span class="fn">class</span>=<span class="str">"card__desc"</span><span class="kw">&gt;</span>সংক্ষিপ্ত বর্ণনা এখানে<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"card__btn"</span><span class="kw">&gt;</span>বিস্তারিত দেখুন<span class="kw">&lt;/button&gt;</span>
  <span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;/div&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>এই কম্পোনেন্টের আসল শক্তি এখানে:</strong> একবার <code>.card</code>-এর CSS (বক্স মডেল, box-shadow, border-radius — CSS কোর্স মডিউল ৪) ঠিক করে নিলে, JavaScript কোর্সের মডিউল ৬ ও প্রজেক্ট (Live Player Search, Dynamic Shopping Cart) থেকে মনে করো — <code>.map()</code> দিয়ে ডাটার অ্যারে থেকে এই একই কার্ড কাঠামো বহুবার জেনারেট করা যায়, প্রতিটাতে ভিন্ন ছবি/টেক্সট বসিয়ে। এভাবেই HTML গঠন (এই মডিউল) + CSS ডিজাইন + JS ডাটা-জেনারেশন — তিনটাই মিলে একটা প্রফেশনাল প্যাটার্ন তৈরি করে।</p>
      `
    },
    {
      id: "4.4",
      title: "Footer কম্পোনেন্ট ও সারসংক্ষেপ",
      content: `
        <h3>🔹 ৪.৪ Footer — শেষ কিন্তু গুরুত্বপূর্ণ কম্পোনেন্ট</h3>
        <p>ফুটার সাধারণত কপিরাইট তথ্য, কিছু লিংক, ও সোশ্যাল মিডিয়া আইকন ধারণ করে — এটাও নেভবারের মতোই প্রতিটা পেজে পুনরাবৃত্তি হয়, তাই একই টেমপ্লেট-চিন্তা প্রযোজ্য।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>footer-component.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;footer</span> <span class="fn">class</span>=<span class="str">"footer"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;p</span> <span class="fn">class</span>=<span class="str">"footer__copyright"</span><span class="kw">&gt;</span>© 2026 মাইসাইট<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"footer__social"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#"</span><span class="kw">&gt;</span>Facebook<span class="kw">&lt;/a&gt;</span>
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#"</span><span class="kw">&gt;</span>Instagram<span class="kw">&lt;/a&gt;</span>
  <span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;/footer&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>একটা "কম্পোনেন্ট লাইব্রেরি" মানসিকতা:</strong> একটা প্রজেক্ট শুরু করার আগে navbar, card, footer, button — এই কমন কম্পোনেন্টগুলোর জন্য আলাদা করে HTML+CSS "স্নিপেট" নিজের একটা নোট ফাইলে রেখে দাও। নতুন প্রজেক্টে এই কম্পোনেন্টগুলো শুরুর পয়েন্ট হিসেবে ব্যবহার করে সময় বাঁচানো যায় — প্রফেশনাল ডেভেলপাররাও ঠিক এভাবেই নিজের ব্যক্তিগত "টুলবক্স" তৈরি করে রাখে।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🧩 কম্পোনেন্ট হলো ছোট, পুনঃব্যবহারযোগ্য UI অংশ (navbar, card, footer, button) — প্রতিটা পেজে নতুন করে না বানিয়ে একই কাঠামো পুনঃব্যবহার করা।</div>
          <div class="takeaway-item">🏷️ BEM নামকরণ (<code>.navbar__logo</code>, <code>.card__title</code>) কম্পোনেন্টের ভেতরের অংশ স্পষ্টভাবে চিহ্নিত করে।</div>
          <div class="takeaway-item">🖼️ Card কম্পোনেন্ট সবচেয়ে নমনীয় — একবার ডিজাইন করে JavaScript দিয়ে ডাটা থেকে বহুবার জেনারেট করা যায় (<code>.map()</code> প্যাটার্ন)।</div>
          <div class="takeaway-item">📚 নিজের একটা "কম্পোনেন্ট লাইব্রেরি" (স্নিপেট নোট) বানিয়ে রাখো — নতুন প্রজেক্টে সময় বাঁচাবে।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=5&section=5.0">
          পরের মডিউল: বাস্তব ফর্ম হ্যান্ডলিং ও ভ্যালিডেশন
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
        <h2>📋 মডিউল ৫: বাস্তব ফর্ম হ্যান্ডলিং ও ভ্যালিডেশন</h2>

        <h3>🔹 ৫.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>তিনটা স্তরের ভ্যালিডেশন — HTML, CSS, JavaScript একসাথে</li>
          <li>এরর মেসেজ দেখানোর ডিজাইন প্যাটার্ন</li>
          <li>মাল্টি-ফিল্ড ফর্মে একসাথে সব ফিল্ড চেক করা</li>
          <li>সফল সাবমিশনের পর ইউজার-ফ্রেন্ডলি ফিডব্যাক</li>
        </ul>
        <p>HTML কোর্সের মডিউল ৬-এ ফর্ম বেসিক, CSS কোর্সে ফর্ম স্টাইলিং, আর JavaScript কোর্সের মডিউল ৯-এ ফর্ম ইভেন্ট ও ভ্যালিডেশন আলাদাভাবে শিখেছ। এই মডিউলে দেখা যাবে কীভাবে এই তিনটা মিলিয়ে একটা সত্যিকারের প্রফেশনাল-মানের ফর্ম বানানো হয় — যেখানে ভুল হলে স্পষ্ট, সহায়ক মেসেজ দেখায়, আর সঠিক হলে ইউজারকে আশ্বস্ত করে।</p>
      `
    },
    {
      id: "5.1",
      title: "তিন স্তরের ভ্যালিডেশন",
      content: `
        <h3>🔹 ৫.১ তিন স্তরের ভ্যালিডেশন — HTML, CSS, JavaScript</h3>
        <p>একটা প্রফেশনাল ফর্মে ভ্যালিডেশন তিনটা আলাদা স্তরে কাজ করে, প্রতিটা তার নিজস্ব দায়িত্ব পালন করে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>স্তর</th><th>দায়িত্ব</th><th>উদাহরণ</th></tr></thead>
            <tbody>
              <tr><td><strong>HTML</strong></td><td>প্রথম স্তরের বাধা — ব্রাউজারের নিজস্ব যাচাই</td><td><code>required</code>, <code>type="email"</code>, <code>minlength</code></td></tr>
              <tr><td><strong>CSS</strong></td><td>ভিজ্যুয়াল ফিডব্যাক — ভুল/ঠিক কীভাবে দেখাবে</td><td><code>:invalid</code>, <code>:focus</code>, লাল বর্ডার</td></tr>
              <tr><td><strong>JavaScript</strong></td><td>কাস্টম লজিক — HTML দিয়ে সম্ভব না এমন যাচাই</td><td>পাসওয়ার্ড ম্যাচ করছে কিনা, ইউজারনেম আগে থেকে আছে কিনা</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>কেন তিনটাই দরকার, একটাতেই না কেন:</strong> শুধু HTML ভ্যালিডেশন (<code>required</code>) দিলে ডিজাইন কুৎসিত ব্রাউজার-ডিফল্ট পপআপ দেখায়। শুধু JavaScript দিয়ে করলে, JS বন্ধ থাকলে (বিরল হলেও) কোনো ভ্যালিডেশনই কাজ করবে না। তিনটা স্তর একসাথে ব্যবহার করলে সবচেয়ে শক্তিশালী, সুন্দর, এবং নির্ভরযোগ্য ফর্ম পাওয়া যায়।</p>
      `
    },
    {
      id: "5.2",
      title: "HTML+CSS দিয়ে বেসিক এরর স্টাইল",
      content: `
        <h3>🔹 ৫.২ CSS দিয়ে ভুল ইনপুট হাইলাইট করা</h3>
        <p>CSS-এর <code>:invalid</code> pseudo-class (CSS কোর্সের মডিউল ২-এর pseudo-class ধারণার সম্প্রসারণ) দিয়ে HTML-এর <code>required</code>/<code>type="email"</code> ইত্যাদি অ্যাট্রিবিউট অনুযায়ী ভুল ইনপুটকে স্বয়ংক্রিয়ভাবে স্টাইল করা যায় — কোনো JavaScript ছাড়াই।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">input</span> {
  <span class="fn">border</span>: <span class="fn">2px solid #D1D5DB</span>;
  <span class="fn">border-radius</span>: <span class="fn">8px</span>;
  <span class="fn">padding</span>: <span class="fn">10px 12px</span>;
  <span class="fn">transition</span>: <span class="fn">border-color 0.2s ease</span>;
}

<span class="cmt">/* খালি রাখলে বা ভুল ফরম্যাট দিলে লাল বর্ডার */</span>
<span class="fn">input:invalid:not(:placeholder-shown)</span> {
  <span class="fn">border-color</span>: <span class="fn">#DC2626</span>;
}

<span class="cmt">/* সঠিকভাবে পূরণ করলে সবুজ বর্ডার */</span>
<span class="fn">input:valid:not(:placeholder-shown)</span> {
  <span class="fn">border-color</span>: <span class="fn">#16A34A</span>;
}</code></pre></div>
        </div>

        <p>💡 <code>:not(:placeholder-shown)</code> একটা গুরুত্বপূর্ণ ট্রিক — এটা ছাড়া ফর্ম লোড হওয়ার সাথে সাথেই (কিছু টাইপ করার আগেই) খালি <code>required</code> ইনপুটগুলো লাল দেখাতে শুরু করবে, যা বিরক্তিকর। <code>:placeholder-shown</code> মানে "এখনো placeholder দেখা যাচ্ছে" (অর্থাৎ কিছু টাইপ করা হয়নি) — <code>:not()</code> দিয়ে এই অবস্থা বাদ দিলে, শুধু ইউজার একবার টাইপ করে ফেলার পরই রঙ দেখাবে।</p>
      `
    },
    {
      id: "5.3",
      title: "JavaScript দিয়ে কাস্টম ভ্যালিডেশন",
      content: `
        <h3>🔹 ৫.৩ JavaScript দিয়ে একাধিক ফিল্ড একসাথে চেক করা</h3>
        <p>বাস্তব ফর্মে (যেমন সাইন-আপ ফর্ম) একাধিক ফিল্ড একসাথে চেক করতে হয়, আর প্রতিটার জন্য আলাদা এরর মেসেজ দেখাতে হয়। JavaScript কোর্সের মডিউল ৯-এর বেসিক ভ্যালিডেশনকে এখানে আরও বাস্তবসম্মতভাবে বিস্তৃত করা হচ্ছে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">form</span>.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, <span class="kw">function</span>(<span class="fn">e</span>) {
  <span class="fn">e</span>.<span class="fn">preventDefault</span>();

  <span class="kw">const</span> <span class="fn">password</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"password"</span>).<span class="fn">value</span>;
  <span class="kw">const</span> <span class="fn">confirmPassword</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"confirmPassword"</span>).<span class="fn">value</span>;
  <span class="kw">let</span> <span class="fn">isValid</span> = <span class="kw">true</span>;

  <span class="cmt">// প্রতিটা শর্ত আলাদা করে চেক করা, প্রতিটার নিজস্ব এরর মেসেজসহ</span>
  <span class="kw">if</span> (<span class="fn">password</span>.<span class="fn">length</span> &lt; <span class="num">8</span>) {
    <span class="fn">showError</span>(<span class="str">"password"</span>, <span class="str">"পাসওয়ার্ড অন্তত ৮ অক্ষরের হতে হবে"</span>);
    <span class="fn">isValid</span> = <span class="kw">false</span>;
  }

  <span class="kw">if</span> (<span class="fn">password</span> !== <span class="fn">confirmPassword</span>) {
    <span class="fn">showError</span>(<span class="str">"confirmPassword"</span>, <span class="str">"পাসওয়ার্ড দুটো মিলছে না"</span>);
    <span class="fn">isValid</span> = <span class="kw">false</span>;
  }

  <span class="kw">if</span> (<span class="fn">isValid</span>) {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"✅ সব ঠিক আছে, সাবমিট হচ্ছে..."</span>);
    <span class="fn">form</span>.<span class="fn">reset</span>();
  }
});

<span class="kw">function</span> <span class="fn">showError</span>(<span class="fn">fieldId</span>, <span class="fn">message</span>) {
  <span class="kw">const</span> <span class="fn">errorEl</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="fn">fieldId</span> + <span class="str">"Error"</span>);
  <span class="fn">errorEl</span>.<span class="fn">textContent</span> = <span class="fn">message</span>;
}</code></pre></div>
        </div>

        <p>💡 <strong>মূল ধারণাগুলো:</strong></p>
        <ul>
          <li><code>isValid</code> একটা "flag" ভেরিয়েবল — একাধিক শর্তের মধ্যে যেকোনো একটাও ব্যর্থ হলে এটা <code>false</code> হয়ে যায়, তাই একসাথে সব শর্ত চেক করেও শেষে একবারেই বোঝা যায় ফর্মটা সাবমিট করা উচিত কিনা।</li>
          <li>প্রতিটা শর্তের জন্য <strong>আলাদা</strong> <code>if</code> ব্লক (একটার পর <code>else if</code> না) ব্যবহার করা হয়েছে, যাতে একাধিক ফিল্ডে একসাথে ভুল থাকলে, ইউজার সবগুলো এরর একবারেই দেখতে পায় — একটা একটা করে ঠিক করে বারবার সাবমিট করতে না হয়।</li>
          <li><code>showError()</code> একটা আলাদা ফাংশনে বের করে নেওয়া হয়েছে (JavaScript কোর্সের মডিউল ৫-এর ধারণা), যাতে কোড পুনরাবৃত্তি না হয়ে একই লজিক সব ফিল্ডে পুনঃব্যবহার করা যায়।</li>
        </ul>
      `
    },
    {
      id: "5.4",
      title: "সফল সাবমিশনের ফিডব্যাক",
      content: `
        <h3>🔹 ৫.৪ সফল সাবমিশনের পর ইউজার-ফ্রেন্ডলি ফিডব্যাক</h3>
        <p>ফর্ম সঠিকভাবে সাবমিট হওয়ার পর ইউজারকে স্পষ্টভাবে জানানো উচিত যে কাজটা সফল হয়েছে — শুধু ফর্ম খালি হয়ে গেলে ইউজার confused থাকতে পারে "আসলেই কি সাবমিট হলো?"।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">if</span> (<span class="fn">isValid</span>) {
  <span class="fn">form</span>.<span class="fn">reset</span>();

  <span class="kw">const</span> <span class="fn">successBox</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"successMessage"</span>);
  <span class="fn">successBox</span>.<span class="fn">textContent</span> = <span class="str">"🎉 সফলভাবে সাবমিট হয়েছে!"</span>;
  <span class="fn">successBox</span>.<span class="fn">style</span>.<span class="fn">display</span> = <span class="str">"block"</span>;

  <span class="cmt">// 3 সেকেন্ড পর বার্তাটা নিজে থেকেই লুকিয়ে যাবে</span>
  <span class="fn">setTimeout</span>(() <span class="kw">=&gt;</span> {
    <span class="fn">successBox</span>.<span class="fn">style</span>.<span class="fn">display</span> = <span class="str">"none"</span>;
  }, <span class="num">3000</span>);
}</code></pre></div>
        </div>

        <p>💡 এখানে JavaScript কোর্সের মডিউল ১০ থেকে শেখা <code>setTimeout()</code> ব্যবহার করা হয়েছে — সাফল্যের বার্তা কয়েক সেকেন্ড দেখিয়ে নিজে থেকেই সরিয়ে ফেলা হচ্ছে, যাতে ইউজারকে ম্যানুয়ালি বন্ধ করতে না হয়। এই ছোট্ট বিস্তারিত (detail) একটা ফর্মকে "শখের প্রজেক্ট" থেকে "প্রফেশনাল প্রোডাক্ট"-এর মতো অনুভব করায়।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🏗️ প্রফেশনাল ফর্ম ভ্যালিডেশন তিন স্তরে কাজ করে: HTML (বেসিক বাধা), CSS (ভিজ্যুয়াল ফিডব্যাক), JavaScript (কাস্টম লজিক)।</div>
          <div class="takeaway-item">🎨 <code>:invalid:not(:placeholder-shown)</code> দিয়ে ফর্ম লোড হওয়ার সাথে সাথেই লাল না দেখিয়ে, ইউজার টাইপ করার পরই এরর দেখানো যায়।</div>
          <div class="takeaway-item">🚩 একটা <code>isValid</code> ফ্ল্যাগ ভেরিয়েবল দিয়ে একাধিক ফিল্ড একসাথে চেক করা যায়, প্রতিটা ভুলের জন্য আলাদা মেসেজ দেখিয়ে।</div>
          <div class="takeaway-item">✅ সফল সাবমিশনের পর স্পষ্ট, সাময়িক (<code>setTimeout</code> দিয়ে) সাফল্য বার্তা দেখানো ইউজার অভিজ্ঞতা অনেক উন্নত করে।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=6&section=6.0">
          পরের মডিউল: fetch() ও API থেকে ডাটা আনা
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
        <h2>🌐 মডিউল ৬: fetch() ও API থেকে ডাটা আনা</h2>

        <h3>🔹 ৬.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব — এটা এই কোর্সের একদম নতুন একটা টপিক, JavaScript কোর্সে কভার করা হয়নি:</p>
        <ul>
          <li>API কী এবং কেন দরকার</li>
          <li><code>fetch()</code> দিয়ে ইন্টারনেট থেকে ডাটা আনা</li>
          <li>Promise ও <code>.then()</code></li>
          <li><code>async</code>/<code>await</code> — আধুনিক, পরিষ্কার সিনট্যাক্স</li>
          <li>আনা ডাটা দিয়ে DOM আপডেট করা</li>
          <li>লোডিং ও এরর স্টেট হ্যান্ডেল করা</li>
        </ul>
        <p>এতদিন যত প্রজেক্ট বানিয়েছ, তার সব ডাটা তুমি নিজে হাতে লিখেছ (অ্যারে, অবজেক্ট)। কিন্তু বাস্তব ওয়েবসাইট (আবহাওয়ার অ্যাপ, নিউজ সাইট, ই-কমার্স) সাধারণত ইন্টারনেট থেকে লাইভ ডাটা আনে। এই মডিউল সেই দক্ষতা শেখাবে।</p>
      `
    },
    {
      id: "6.1",
      title: "API কী?",
      content: `
        <h3>🔹 ৬.১ API কী এবং কেন দরকার</h3>
        <p><strong>API</strong> (Application Programming Interface) হলো একটা "দরজা" যার মাধ্যমে একটা ওয়েবসাইট/অ্যাপ অন্য একটা সার্ভারের কাছে ডাটা চাইতে পারে। যেমন একটা আবহাওয়ার ওয়েবসাইট নিজে আবহাওয়া "জানে না" — এটা একটা আবহাওয়া-সংস্থার সার্ভারকে জিজ্ঞেস করে ("ঢাকার আজকের তাপমাত্রা কত?"), আর সেই সার্ভার একটা উত্তর (ডাটা) ফেরত পাঠায়।</p>

        <p>💡 <strong>বাস্তব উপমা:</strong> রেস্টুরেন্টে খাবার অর্ডার করার সময় তুমি সরাসরি রান্নাঘরে যাও না — ওয়েটারকে (API) বলো কী চাই, ওয়েটার রান্নাঘরে (সার্ভার) গিয়ে খাবার (ডাটা) নিয়ে আসে। তুমি শুধু জানো কীভাবে চাইতে হয় ও কী পাবে, ভেতরে কীভাবে রান্না হয় তা জানার দরকার নেই।</p>

        <p>এই মডিউলে আমরা <strong>JSONPlaceholder</strong> নামের একটা ফ্রি, পাবলিক টেস্ট API ব্যবহার করব, যা শেখার জন্য নকল (fake) ডাটা সরবরাহ করে — বাস্তব প্রজেক্টে API-key বা রেজিস্ট্রেশন লাগে এমন সার্ভিসও ব্যবহার হয়, কিন্তু মূল পদ্ধতি একই থাকে।</p>
      `
    },
    {
      id: "6.2",
      title: "fetch() বেসিক",
      content: `
        <h3>🔹 ৬.২ fetch() দিয়ে ডাটা আনা</h3>
        <p><code>fetch()</code> একটা বিল্ট-ইন JavaScript ফাংশন যা একটা URL-এ "অনুরোধ" (request) পাঠায় এবং ডাটা ফেরত আনে। যেহেতু ইন্টারনেটে ডাটা আসতে কিছুটা সময় লাগে (তাৎক্ষণিক না), <code>fetch()</code> সাথে সাথে ডাটা রিটার্ন করে না — এটা একটা <strong>Promise</strong> রিটার্ন করে, অর্থাৎ "আমি ডাটা আনার চেষ্টা করছি, তৈরি হলে জানাব"।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="fn">fetch</span>(<span class="str">"https://jsonplaceholder.typicode.com/users/1"</span>)
  .<span class="fn">then</span>(<span class="kw">function</span>(<span class="fn">response</span>) {
    <span class="kw">return</span> <span class="fn">response</span>.<span class="fn">json</span>();  <span class="cmt">// সার্ভারের উত্তরকে ব্যবহারযোগ্য অবজেক্টে রূপান্তর</span>
  })
  .<span class="fn">then</span>(<span class="kw">function</span>(<span class="fn">data</span>) {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">data</span>.<span class="fn">name</span>);   <span class="cmt">// এখন ডাটা প্রস্তুত, ব্যবহার করা যাবে</span>
  });</code></pre></div>
        </div>

        <p>💡 <strong>এখানে দুইটা <code>.then()</code> কেন:</strong> প্রথম <code>.then()</code> সার্ভারের কাঁচা উত্তরকে (যা JSON টেক্সট আকারে আসে — JavaScript কোর্সের মডিউল ১০-এর <code>JSON.parse()</code> মনে আছে?) একটা ব্যবহারযোগ্য অবজেক্টে রূপান্তর করে। দ্বিতীয় <code>.then()</code>-এ সেই প্রস্তুত ডাটা নিয়ে আসল কাজ (যেমন প্রিন্ট করা বা DOM আপডেট করা) করা হয়। প্রতিটা <code>.then()</code> আগেরটার ফলাফলের উপর নির্ভর করে ক্রমানুসারে চলে।</p>
      `
    },
    {
      id: "6.3",
      title: "async/await — আধুনিক সিনট্যাক্স",
      content: `
        <h3>🔹 ৬.৩ async/await — পরিষ্কার, আধুনিক সিনট্যাক্স</h3>
        <p><code>.then()</code> চেইন কাজ করে ঠিকই, কিন্তু একাধিক ধাপ থাকলে কোড জটিল দেখাতে শুরু করে। আধুনিক JavaScript-এ <code>async</code>/<code>await</code> ব্যবহার করে একই কাজ অনেক বেশি পরিষ্কার, প্রায় "সাধারণ" কোডের মতো দেখতে লেখা যায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// async কীওয়ার্ড দিয়ে বলে দেওয়া হয় এই ফাংশনের ভেতরে await ব্যবহার হবে</span>
<span class="kw">async function</span> <span class="fn">getUser</span>() {
  <span class="kw">const</span> <span class="fn">response</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://jsonplaceholder.typicode.com/users/1"</span>);
  <span class="kw">const</span> <span class="fn">data</span> = <span class="kw">await</span> <span class="fn">response</span>.<span class="fn">json</span>();

  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">data</span>.<span class="fn">name</span>);
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">data</span>.<span class="fn">email</span>);
}

<span class="fn">getUser</span>();</code></pre></div>
        </div>

        <p>💡 <strong><code>await</code> মানে "থামো, ফলাফলের জন্য অপেক্ষা করো":</strong> সাধারণত JavaScript কোড থামে না, পরের লাইনে চলে যায় (JavaScript কোর্সের মডিউল ১০-এর <code>setTimeout</code>-এর মতো "async" আচরণ মনে আছে?) — কিন্তু <code>await</code> ব্যবহার করলে, সেই নির্দিষ্ট লাইনে থেমে যায় যতক্ষণ না <code>fetch()</code> সত্যিকারের ডাটা নিয়ে আসে, তারপরই পরের লাইনে যায়। এতে কোড উপর-থেকে-নিচে, স্বাভাবিক ক্রমে পড়া যায় — <code>.then()</code> চেইনের চেয়ে অনেক সহজ।</p>

        <p>⚠️ <strong>নিয়ম:</strong> <code>await</code> শুধু <code>async</code> কীওয়ার্ড দিয়ে ঘোষিত ফাংশনের ভেতরেই ব্যবহার করা যায় — সাধারণ ফাংশনে <code>await</code> লিখলে এরর হবে।</p>
      `
    },
    {
      id: "6.4",
      title: "আনা ডাটা দিয়ে DOM আপডেট",
      content: `
        <h3>🔹 ৬.৪ আনা ডাটা দিয়ে DOM আপডেট করা</h3>
        <p>শুধু ডাটা আনাই যথেষ্ট না — বাস্তব প্রজেক্টে সেই ডাটা পেজে দেখাতে হয়। JavaScript কোর্সের মডিউল ৮ (DOM ম্যানিপুলেশন) ও প্রজেক্টে শেখা <code>.map()</code>+<code>.join()</code> প্যাটার্ন এখানে API-থেকে-আসা ডাটার সাথেও একইভাবে কাজ করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">async function</span> <span class="fn">loadUsers</span>() {
  <span class="kw">const</span> <span class="fn">response</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://jsonplaceholder.typicode.com/users"</span>);
  <span class="kw">const</span> <span class="fn">users</span> = <span class="kw">await</span> <span class="fn">response</span>.<span class="fn">json</span>();   <span class="cmt">// এটা একটা অ্যারে — অনেকগুলো ইউজার অবজেক্ট</span>

  <span class="kw">const</span> <span class="fn">list</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"userList"</span>);

  <span class="cmt">// অ্যারে থেকে HTML জেনারেট করা — এই প্যাটার্ন এখন খুবই পরিচিত হওয়া উচিত</span>
  <span class="fn">list</span>.<span class="fn">innerHTML</span> = <span class="fn">users</span>
    .<span class="fn">map</span>((<span class="fn">user</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;li&gt;\${user.name} — \${user.email}&lt;/li&gt;\`</span>)
    .<span class="fn">join</span>(<span class="str">""</span>);
}

<span class="fn">loadUsers</span>();</code></pre></div>
        </div>

        <p>💡 লক্ষ করো — API থেকে আসা ডাটা (<code>users</code>) একটা সাধারণ JavaScript অ্যারে, ঠিক তোমার নিজে হাতে লেখা অ্যারের মতোই। তাই এতদিন যা শিখেছ (<code>.map()</code>, <code>.filter()</code>, DOM আপডেট) সবকিছুই এখানে একইভাবে কাজ করে — একমাত্র নতুন অংশ হলো ডাটাটা "কোথা থেকে" আসছে (নিজের লেখা vs ইন্টারনেট থেকে আনা)।</p>
      `
    },
    {
      id: "6.5",
      title: "লোডিং ও এরর স্টেট",
      content: `
        <h3>🔹 ৬.৫ লোডিং ও এরর স্টেট হ্যান্ডেল করা</h3>
        <p>ইন্টারনেট থেকে ডাটা আনতে সময় লাগে, আর মাঝেমধ্যে ব্যর্থও হতে পারে (ইন্টারনেট সংযোগ নেই, সার্ভার ডাউন)। প্রফেশনাল ওয়েবসাইট সবসময় এই দুইটা পরিস্থিতিই ইউজারকে জানায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">async function</span> <span class="fn">loadUsers</span>() {
  <span class="kw">const</span> <span class="fn">list</span> = <span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"userList"</span>);
  <span class="fn">list</span>.<span class="fn">innerHTML</span> = <span class="str">"⏳ লোড হচ্ছে..."</span>;   <span class="cmt">// প্রথমেই লোডিং মেসেজ দেখানো</span>

  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="fn">response</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://jsonplaceholder.typicode.com/users"</span>);
    <span class="kw">const</span> <span class="fn">users</span> = <span class="kw">await</span> <span class="fn">response</span>.<span class="fn">json</span>();

    <span class="fn">list</span>.<span class="fn">innerHTML</span> = <span class="fn">users</span>
      .<span class="fn">map</span>((<span class="fn">user</span>) <span class="kw">=&gt;</span> <span class="str">\`&lt;li&gt;\${user.name}&lt;/li&gt;\`</span>)
      .<span class="fn">join</span>(<span class="str">""</span>);

  } <span class="kw">catch</span> (<span class="fn">error</span>) {
    <span class="cmt">// fetch ব্যর্থ হলে (নেটওয়ার্ক সমস্যা), catch ব্লক চলবে</span>
    <span class="fn">list</span>.<span class="fn">innerHTML</span> = <span class="str">"❌ ডাটা লোড করা যায়নি। আবার চেষ্টা করো।"</span>;
  }
}</code></pre></div>
        </div>

        <p>💡 <strong>মূল ধারণা — JavaScript কোর্সের মডিউল ১০-এ শেখা <code>try...catch</code></strong> এখানে খুবই গুরুত্বপূর্ণ ভূমিকা রাখছে — <code>fetch()</code> ব্যর্থ হলে (ইন্টারনেট না থাকলে, বা সার্ভার সমস্যায়) প্রোগ্রাম "ভেঙে" না গিয়ে <code>catch</code> ব্লকে গিয়ে ইউজারকে একটা বোধগম্য মেসেজ দেখায়। ৩টা স্টেট — লোডিং (শুরুতে), সফল (ডাটা দেখানো), ব্যর্থ (এরর মেসেজ) — এই তিনটাই সামলানো একটা প্রফেশনাল ওয়েব অ্যাপের মৌলিক বৈশিষ্ট্য।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🌐 API হলো অন্য সার্ভার থেকে ডাটা চাওয়ার একটা "দরজা"; <code>fetch(url)</code> দিয়ে সেই অনুরোধ পাঠানো হয়।</div>
          <div class="takeaway-item">⏳ <code>fetch()</code> তাৎক্ষণিক ডাটা দেয় না, একটা Promise রিটার্ন করে — <code>.then()</code> চেইন বা আধুনিক <code>async</code>/<code>await</code> দিয়ে ফলাফল ব্যবহার করা যায়।</div>
          <div class="takeaway-item">⏸️ <code>await</code> মানে "থামো, ফলাফল না আসা পর্যন্ত অপেক্ষা করো" — শুধু <code>async</code> ফাংশনের ভেতরে ব্যবহার করা যায়।</div>
          <div class="takeaway-item">📋 API থেকে আসা ডাটা সাধারণ অ্যারে/অবজেক্ট — আগে শেখা <code>.map()</code>, DOM আপডেট সবই একইভাবে কাজ করে।</div>
          <div class="takeaway-item">🛡️ <code>try...catch</code> দিয়ে লোডিং, সফল, ও ব্যর্থ — এই তিনটা স্টেটই ইউজারকে স্পষ্টভাবে দেখানো উচিত।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=7&section=7.0">
          পরের মডিউল: পারফরম্যান্স অপ্টিমাইজেশন
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
        <h2>⚡ মডিউল ৭: পারফরম্যান্স অপ্টিমাইজেশন</h2>

        <h3>🔹 ৭.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>কেন ওয়েবসাইটের গতি (speed) গুরুত্বপূর্ণ</li>
          <li>ছবি অপ্টিমাইজেশন — সঠিক ফরম্যাট ও সাইজ</li>
          <li>Lazy Loading — যা দেখা যাচ্ছে না তা এখনই লোড না করা</li>
          <li>Minification — CSS/JS ফাইল ছোট করা</li>
          <li>Render-Blocking রিসোর্স চেনা ও এড়ানো</li>
        </ul>
        <p>একটা সুন্দর ডিজাইনের ওয়েবসাইটও যদি লোড হতে অনেক সময় নেয়, তাহলে ইউজার সেটা ছেড়ে চলে যাবে। এই মডিউল শেখাবে কীভাবে একটা সাইটকে দ্রুত করা যায় — এটা শুধু ভালো অভ্যাস না, বাস্তব ব্যবহারকারীর অভিজ্ঞতার জন্য অত্যন্ত গুরুত্বপূর্ণ।</p>
      `
    },
    {
      id: "7.1",
      title: "কেন গতি গুরুত্বপূর্ণ",
      content: `
        <h3>🔹 ৭.১ কেন ওয়েবসাইটের গতি গুরুত্বপূর্ণ</h3>
        <p>গবেষণায় দেখা গেছে, একটা পেজ লোড হতে ৩ সেকেন্ডের বেশি সময় নিলে বেশিরভাগ ভিজিটর সেটা বন্ধ করে চলে যায়। ধীরগতির সাইটের প্রভাব শুধু ইউজার অভিজ্ঞতাতেই সীমাবদ্ধ না:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>প্রভাব</th><th>ব্যাখ্যা</th></tr></thead>
            <tbody>
              <tr><td>ইউজার হারানো</td><td>ধীর সাইট থেকে ভিজিটর দ্রুত চলে যায়, আর ফিরে নাও আসতে পারে</td></tr>
              <tr><td>সার্চ র‍্যাংকিং</td><td>গুগলের মতো সার্চ ইঞ্জিন দ্রুত সাইটকে বেশি প্রাধান্য দেয় (SEO-তে প্রভাব ফেলে, মডিউল ৮-এ আরও দেখব)</td></tr>
              <tr><td>মোবাইল ডাটা খরচ</td><td>বড়/অপ্টিমাইজ-না-করা ছবি ইউজারের মোবাইল ডাটা বেশি খরচ করায়</td></tr>
              <tr><td>খারাপ ইন্টারনেটে ব্যবহারযোগ্যতা</td><td>বাংলাদেশের মতো জায়গায় অনেকেরই ধীরগতির ইন্টারনেট থাকে — অপ্টিমাইজেশন সরাসরি প্রবেশগম্যতা (accessibility) বাড়ায়</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "7.2",
      title: "ছবি অপ্টিমাইজেশন",
      content: `
        <h3>🔹 ৭.২ ছবি অপ্টিমাইজেশন — সবচেয়ে বড় প্রভাব ফেলা জায়গা</h3>
        <p>একটা টিপিক্যাল ওয়েবসাইটে সবচেয়ে বেশি ডাটা খরচ হয় ছবির কারণে — তাই ছবি অপ্টিমাইজ করাই পারফরম্যান্স উন্নত করার সবচেয়ে কার্যকর উপায়।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ফরম্যাট</th><th>কখন ব্যবহার করবে</th></tr></thead>
            <tbody>
              <tr><td><strong>JPEG</strong></td><td>ছবি (ফটোগ্রাফ) — অনেক রঙ, গ্র্যাডিয়েন্ট</td></tr>
              <tr><td><strong>PNG</strong></td><td>লোগো, আইকন — স্বচ্ছ (transparent) ব্যাকগ্রাউন্ড দরকার হলে</td></tr>
              <tr><td><strong>WebP</strong></td><td>আধুনিক ফরম্যাট — JPEG/PNG-এর চেয়ে ছোট সাইজে একই মান বজায় রাখে, বর্তমানে বেস্ট প্র্যাকটিস</td></tr>
              <tr><td><strong>SVG</strong></td><td>আইকন, লোগো, সাধারণ গ্রাফিক্স — যেকোনো সাইজে ঝাপসা হয় না (vector ফরম্যাট)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>সঠিক সাইজে ছবি আপলোড করো:</strong> একটা ৪০০০×৩০০০ পিক্সেলের ছবি HTML-এ <code>width="300"</code> দিয়ে ছোট দেখালেও, ব্রাউজার এখনো পুরো বড় ফাইলটাই ডাউনলোড করে, শুধু ছোট করে দেখায়। সঠিক পদ্ধতি হলো ছবিটাকেই আগে থেকে (Photoshop, Figma, বা অনলাইন টুল দিয়ে) ওয়েবসাইটে দেখানোর উপযুক্ত সাইজে রিসাইজ করে রাখা।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- width/height আগে থেকেই বলে দিলে ব্রাউজার আগেই জায়গা বরাদ্দ করে রাখে,
     ছবি লোড হওয়ার সময় লেআউট "লাফ" দেয় না --&gt;</span>
<span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"hero.webp"</span> <span class="fn">alt</span>=<span class="str">"হিরো ছবি"</span> <span class="fn">width</span>=<span class="str">"800"</span> <span class="fn">height</span>=<span class="str">"400"</span><span class="kw">&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "7.3",
      title: "Lazy Loading",
      content: `
        <h3>🔹 ৭.৩ Lazy Loading — যা দেখা যাচ্ছে না তা এখনই লোড না করা</h3>
        <p>একটা লম্বা পেজে (যেমন অনেক ছবিওয়ালা ব্লগ বা গ্যালারি) সব ছবি একসাথে লোড করা অপ্রয়োজনীয় — ইউজার হয়তো পুরো পেজ স্ক্রলই করবে না। <strong>Lazy Loading</strong> দিয়ে ছবি তখনই লোড হয় যখন ইউজার সেই অংশে স্ক্রল করে পৌঁছায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- loading="lazy" — একটা মাত্র অ্যাট্রিবিউট, ব্রাউজার নিজে থেকেই বাকি সামলায় --&gt;</span>
<span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"gallery-photo-1.jpg"</span> <span class="fn">alt</span>=<span class="str">"গ্যালারি ছবি"</span> <span class="fn">loading</span>=<span class="str">"lazy"</span><span class="kw">&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>এত সহজ কেন:</strong> আধুনিক ব্রাউজার নিজে থেকেই <code>loading="lazy"</code> সাপোর্ট করে — কোনো JavaScript লেখার দরকার নেই। শুধু একটা HTML অ্যাট্রিবিউট যোগ করলেই ব্রাউজার বুঝে যায় কোন ছবি এখনই দরকার (স্ক্রিনে দেখা যাচ্ছে) আর কোনটা পরে (নিচে স্ক্রল করলে দেখা যাবে)।</p>

        <p>⚠️ <strong>ব্যতিক্রম:</strong> পেজের একদম উপরে (fold-এর উপরে) থাকা ছবি — যেমন হিরো সেকশনের ছবি — তে <code>loading="lazy"</code> ব্যবহার করা উচিত না, কারণ সেটা ইউজার সাথে সাথেই দেখে, তাই এটা আগে থেকেই দ্রুত লোড হওয়া উচিত।</p>
      `
    },
    {
      id: "7.4",
      title: "Minification ও Render-Blocking",
      content: `
        <h3>🔹 ৭.৪ Minification — CSS/JS ফাইল ছোট করা</h3>
        <p>তুমি যে CSS/JS লিখেছ (কমেন্ট, স্পেস, নতুন লাইন দিয়ে সুন্দরভাবে ফরম্যাট করা), ব্রাউজারের কাছে তা পড়তে সব "অতিরিক্ত" জিনিস। <strong>Minification</strong> এই কমেন্ট, স্পেস, লাইন-ব্রেক সব সরিয়ে ফাইলটাকে যতটা সম্ভব ছোট করে ফেলে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>before-after</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* আগে (readable, ডেভেলপারের জন্য) */</span>
<span class="fn">.navbar</span> {
  <span class="fn">display</span>: <span class="fn">flex</span>;
  <span class="fn">justify-content</span>: <span class="fn">space-between</span>;
}

<span class="cmt">/* পরে (minified, ব্রাউজারের জন্য) */</span>
<span class="fn">.navbar{display:flex;justify-content:space-between}</span></code></pre></div>
        </div>

        <p>💡 <strong>কীভাবে করা হয়:</strong> নিজে হাতে কোড "সংকুচিত" করার দরকার নেই — অনলাইন টুল (যেমন cssnano, Terser) বা বিল্ড টুল এটা স্বয়ংক্রিয়ভাবে করে দেয়। ডেভেলপমেন্টের সময় সবসময় readable কোড লেখা উচিত (নিজের ও অন্যের বোঝার জন্য), শুধু চূড়ান্ত পাবলিশ করার আগে minify করা হয়।</p>

        <h3>🔹 Render-Blocking রিসোর্স চেনা</h3>
        <p>মডিউল ২-এ শেখা মনে আছে — CSS <code>&lt;head&gt;</code>-এ লোড না হওয়া পর্যন্ত ব্রাউজার পেজ দেখানো শুরু করে না। বড় বা অনেকগুলো CSS ফাইল থাকলে এটা পেজ দেখাতে দেরি করিয়ে দেয় — একেই বলে <strong>Render-Blocking</strong>।</p>

        <p>💡 <strong>সমাধান:</strong> অপ্রয়োজনীয় CSS/ফন্ট ফাইল কমানো, শুধু প্রয়োজনীয়টুকু লোড করা, আর বড় প্রজেক্টে "critical CSS" (শুরুতেই দরকারি স্টাইল আলাদা করে ইনলাইনে বসানো) কৌশল ব্যবহার করা — এই শেষ কৌশলটা অ্যাডভান্সড, কিন্তু ধারণাটা জানা থাকা ভালো: "যেটুকু এখনই দরকার শুধু সেটুকুই আগে লোড করো"।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">⏱️ ৩ সেকেন্ডের বেশি লোড টাইম ইউজার হারানোর ঝুঁকি বাড়ায়; গতি SEO ও প্রবেশগম্যতাকেও প্রভাবিত করে।</div>
          <div class="takeaway-item">🖼️ ছবি অপ্টিমাইজেশন সবচেয়ে বড় প্রভাব ফেলে — সঠিক ফরম্যাট (WebP), সঠিক সাইজে রিসাইজ করে আপলোড করো।</div>
          <div class="takeaway-item">🐌 <code>loading="lazy"</code> — একটা HTML অ্যাট্রিবিউট দিয়েই স্ক্রলের নিচের ছবি পরে লোড করানো যায়।</div>
          <div class="takeaway-item">📦 Minification CSS/JS থেকে অপ্রয়োজনীয় স্পেস/কমেন্ট সরিয়ে ফাইল ছোট করে — ডেভেলপমেন্টে readable, পাবলিশের আগে minified।</div>
          <div class="takeaway-item">🚧 Render-Blocking রিসোর্স (বড়/অনেক CSS ফাইল) পেজ দেখানো দেরি করায় — যতটুকু দরকার শুধু ততটুকুই আগে লোড করাই লক্ষ্য।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=8&section=8.0">
          পরের মডিউল: অ্যাক্সেসিবিলিটি ও SEO বেসিক
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
        <h2>♿ মডিউল ৮: অ্যাক্সেসিবিলিটি ও SEO বেসিক</h2>

        <h3>🔹 ৮.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>অ্যাক্সেসিবিলিটি (a11y) কী এবং কেন সবার জন্য গুরুত্বপূর্ণ</li>
          <li>সিমান্টিক HTML-এর প্রকৃত গুরুত্ব (পুনরালোচনা+বিস্তার)</li>
          <li>ছবির alt টেক্সট ও ফর্ম লেবেল সঠিকভাবে লেখা</li>
          <li>কীবোর্ড দিয়ে নেভিগেশন — মাউস ছাড়াই ব্যবহারযোগ্যতা</li>
          <li>SEO বেসিক — meta ট্যাগ ও সার্চ ইঞ্জিনের জন্য অপ্টিমাইজেশন</li>
        </ul>
        <p>একটা ওয়েবসাইট শুধু তাদের জন্য না যারা স্বাভাবিকভাবে দেখতে ও মাউস ব্যবহার করতে পারে — দৃষ্টি প্রতিবন্ধী, মোটর-সীমাবদ্ধতাযুক্ত মানুষও ওয়েব ব্যবহার করে (স্ক্রিন রিডার বা শুধু কীবোর্ড দিয়ে)। এই মডিউল সবার জন্য ব্যবহারযোগ্য সাইট বানানো শেখাবে।</p>
      `
    },
    {
      id: "8.1",
      title: "অ্যাক্সেসিবিলিটি কেন গুরুত্বপূর্ণ",
      content: `
        <h3>🔹 ৮.১ অ্যাক্সেসিবিলিটি (a11y) কী এবং কেন গুরুত্বপূর্ণ</h3>
        <p><strong>অ্যাক্সেসিবিলিটি</strong> (সংক্ষেপে a11y — a + ১১টা অক্ষর + y) মানে একটা ওয়েবসাইট এমনভাবে বানানো যাতে যেকোনো ধরনের প্রতিবন্ধকতা থাকা মানুষও সেটা ব্যবহার করতে পারে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ব্যবহারকারীর পরিস্থিতি</th><th>কী দরকার</th></tr></thead>
            <tbody>
              <tr><td>দৃষ্টি প্রতিবন্ধী</td><td>স্ক্রিন রিডার সফটওয়্যার সঠিকভাবে পড়তে পারে এমন সিমান্টিক কাঠামো</td></tr>
              <tr><td>হাত/মোটর সীমাবদ্ধতা</td><td>মাউস ছাড়া শুধু কীবোর্ড দিয়েই সাইট ব্যবহার করার সুযোগ</td></tr>
              <tr><td>রঙ-অন্ধত্ব</td><td>শুধু রঙের উপর নির্ভর না করে (যেমন লাল/সবুজ দিয়ে ভুল/ঠিক বোঝানো)</td></tr>
              <tr><td>ধীরগতির ইন্টারনেট</td><td>হালকা, দ্রুত-লোড হওয়া পেজ (মডিউল ৭ থেকে সংযুক্ত)</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>এটা শুধু "ভালো কাজ" না, একটা দায়িত্ব:</strong> বিশ্বে কোটি কোটি মানুষ কোনো না কোনো প্রতিবন্ধকতা নিয়ে বসবাস করে। একটা অ্যাক্সেসিবল সাইট শুধু নৈতিকভাবে সঠিক না, এটা সাইটের সম্ভাব্য ব্যবহারকারীর সংখ্যাও বাড়িয়ে দেয় — অনেক দেশে সরকারি ও বড় প্রতিষ্ঠানের ওয়েবসাইটে অ্যাক্সেসিবিলিটি আইনত বাধ্যতামূলকও।</p>
      `
    },
    {
      id: "8.2",
      title: "সিমান্টিক HTML-এর প্রকৃত গুরুত্ব",
      content: `
        <h3>🔹 ৮.২ সিমান্টিক HTML কেন শুধু "ভালো অভ্যাস" না</h3>
        <p>HTML কোর্সের মডিউল ৭-এ <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>-এর মতো সিমান্টিক ট্যাগ শিখেছ। এখন বোঝা যাক কেন এগুলো <strong>অ্যাক্সেসিবিলিটির জন্য জরুরি</strong>, শুধু "ভালো প্র্যাকটিস" না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>bad-vs-good.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ❌ স্ক্রিন রিডারের জন্য অর্থহীন — সবই "div" --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"header"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"nav"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"main-content"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>

<span class="cmt">&lt;!-- ✅ স্ক্রিন রিডার প্রতিটা অংশ চিনতে পারে, ইউজার সরাসরি সেকশনে "জাম্প" করতে পারে --&gt;</span>
<span class="kw">&lt;header&gt;</span>...<span class="kw">&lt;/header&gt;</span>
<span class="kw">&lt;nav&gt;</span>...<span class="kw">&lt;/nav&gt;</span>
<span class="kw">&lt;main&gt;</span>...<span class="kw">&lt;/main&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>স্ক্রিন রিডার কীভাবে কাজ করে:</strong> দৃষ্টি প্রতিবন্ধী ব্যবহারকারীরা একটা সফটওয়্যার (স্ক্রিন রিডার) ব্যবহার করে যা পেজের লেখা জোরে পড়ে শোনায়। যদি সব <code>&lt;div&gt;</code> দিয়ে বানানো হয়, স্ক্রিন রিডার বুঝতেই পারে না কোনটা নেভিগেশন, কোনটা মূল কনটেন্ট — সবকিছু একঘেয়ে "ব্লক" মনে হয়। সিমান্টিক ট্যাগ ব্যবহার করলে, ইউজার স্ক্রিন রিডারকে বলতে পারে "সরাসরি main content-এ নিয়ে যাও", ঠিক যেমন দৃষ্টিসম্পন্ন মানুষ চোখ দিয়ে স্ক্যান করে গুরুত্বপূর্ণ অংশ খুঁজে নেয়।</p>
      `
    },
    {
      id: "8.3",
      title: "alt টেক্সট ও ফর্ম লেবেল",
      content: `
        <h3>🔹 ৮.৩ ছবির alt টেক্সট ও ফর্ম লেবেল সঠিকভাবে লেখা</h3>
        <p>HTML কোর্সের মডিউল ৪-এ <code>alt</code> অ্যাট্রিবিউট শিখেছ (ছবি লোড না হলে বিকল্প টেক্সট) — কিন্তু এর আসল উদ্দেশ্য হলো স্ক্রিন রিডার সেই টেক্সট পড়ে শোনায়, তাই <code>alt</code> লেখার মান সরাসরি অ্যাক্সেসিবিলিটিকে প্রভাবিত করে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>alt-examples.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ❌ অর্থহীন, স্ক্রিন রিডার শুধু "image.jpg" পড়ে শোনাবে --&gt;</span>
<span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"img1.jpg"</span> <span class="fn">alt</span>=<span class="str">"image1"</span><span class="kw">&gt;</span>

<span class="cmt">&lt;!-- ✅ বর্ণনামূলক, ছবিতে কী আছে তা স্পষ্ট --&gt;</span>
<span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"team-photo.jpg"</span> <span class="fn">alt</span>=<span class="str">"আমাদের ৫ জনের ডেভেলপমেন্ট টিম অফিসে দাঁড়িয়ে"</span><span class="kw">&gt;</span></code></pre></div>
        </div>

        <p>💡 <strong>ফর্ম লেবেলও একই কারণে জরুরি:</strong> HTML কোর্সের মডিউল ৬-এ শেখা <code>&lt;label&gt;</code> শুধু ভিজ্যুয়াল স্টাইলের জন্য না — স্ক্রিন রিডার ব্যবহারকারী যখন কোনো ইনপুট ফিল্ডে পৌঁছায়, তখন লেবেলটাই তাকে বলে দেয় এই ফিল্ডে কী লিখতে হবে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>form-label.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ❌ placeholder শুধু ভিজ্যুয়াল, স্ক্রিন রিডার এড়িয়ে যেতে পারে --&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"email"</span> <span class="fn">placeholder</span>=<span class="str">"ইমেইল"</span><span class="kw">&gt;</span>

<span class="cmt">&lt;!-- ✅ সঠিক label, for-এর মান input-এর id-এর সাথে মেলানো --&gt;</span>
<span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"email"</span><span class="kw">&gt;</span>ইমেইল<span class="kw">&lt;/label&gt;</span>
<span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"email"</span> <span class="fn">id</span>=<span class="str">"email"</span><span class="kw">&gt;</span></code></pre></div>
        </div>
      `
    },
    {
      id: "8.4",
      title: "কীবোর্ড নেভিগেশন",
      content: `
        <h3>🔹 ৮.৪ কীবোর্ড দিয়ে নেভিগেশন — মাউস ছাড়াই ব্যবহারযোগ্যতা</h3>
        <p>অনেক ইউজার মাউস ব্যবহার করতে পারে না বা করে না — তাদের জন্য <code>Tab</code> কী দিয়ে একটা এলিমেন্ট থেকে পরেরটায় যাওয়া, <code>Enter</code>/<code>Space</code> দিয়ে ক্লিক করার সুযোগ থাকা আবশ্যক।</p>

        <p>💡 <strong>সবচেয়ে সহজ নিয়ম:</strong> ক্লিকযোগ্য এলিমেন্টের জন্য সবসময় প্রকৃত <code>&lt;button&gt;</code> বা <code>&lt;a&gt;</code> ট্যাগ ব্যবহার করো, শুধু <code>&lt;div onclick="..."&gt;</code> না — কারণ ব্রাউজার শুধু <code>&lt;button&gt;</code>/<code>&lt;a&gt;</code>-কেই স্বয়ংক্রিয়ভাবে Tab-নেভিগেশনযোগ্য বানায়, সাধারণ <code>&lt;div&gt;</code>-কে না।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>keyboard-friendly.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">&lt;!-- ❌ Tab দিয়ে পৌঁছানো যায় না, কীবোর্ড দিয়ে ক্লিক করা যায় না --&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">onclick</span>=<span class="str">"submitForm()"</span><span class="kw">&gt;</span>সাবমিট করো<span class="kw">&lt;/div&gt;</span>

<span class="cmt">&lt;!-- ✅ স্বয়ংক্রিয়ভাবে Tab-নেভিগেশনযোগ্য, Enter/Space দিয়ে চাপা যায় --&gt;</span>
<span class="kw">&lt;button</span> <span class="fn">onclick</span>=<span class="str">"submitForm()"</span><span class="kw">&gt;</span>সাবমিট করো<span class="kw">&lt;/button&gt;</span></code></pre></div>
        </div>

        <p>⚠️ <strong>টেস্ট করার সহজ উপায়:</strong> মাউস সরিয়ে রেখে শুধু <code>Tab</code> কী চেপে চেপে নিজের সাইট ব্যবহার করার চেষ্টা করো — যদি কোনো গুরুত্বপূর্ণ বাটন/লিংকে Tab দিয়ে পৌঁছানো না যায়, সেটা একটা অ্যাক্সেসিবিলিটি সমস্যা।</p>
      `
    },
    {
      id: "8.5",
      title: "SEO বেসিক",
      content: `
        <h3>🔹 ৮.৫ SEO বেসিক — সার্চ ইঞ্জিনের জন্য অপ্টিমাইজেশন</h3>
        <p><strong>SEO</strong> (Search Engine Optimization) মানে একটা ওয়েবসাইটকে এমনভাবে বানানো যাতে গুগলের মতো সার্চ ইঞ্জিন সহজে বুঝতে পারে পেজে কী আছে, এবং সার্চ ফলাফলে ভালো অবস্থানে দেখায়।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;head&gt;</span>
  <span class="cmt">&lt;!-- ব্রাউজার ট্যাবে ও সার্চ ফলাফলে যে শিরোনাম দেখা যায় --&gt;</span>
  <span class="kw">&lt;title&gt;</span>মাইসাইট — ঢাকার সেরা ফ্রিল্যান্স ডেভেলপার<span class="kw">&lt;/title&gt;</span>

  <span class="cmt">&lt;!-- সার্চ ফলাফলে টাইটেলের নিচে যে সংক্ষিপ্ত বর্ণনা দেখা যায় --&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"description"</span> <span class="fn">content</span>=<span class="str">"ঢাকা-ভিত্তিক ফ্রিল্যান্স ওয়েব ডেভেলপার, HTML/CSS/JS দিয়ে কাস্টম ওয়েবসাইট বানাই।"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/head&gt;</span></code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>SEO ফ্যাক্টর</th><th>কী করতে হবে</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;title&gt;</code></td><td>প্রতিটা পেজে ভিন্ন, স্পষ্ট, বর্ণনামূলক শিরোনাম (৫০-৬০ অক্ষরের মধ্যে)</td></tr>
              <tr><td><code>meta description</code></td><td>পেজের বিষয়বস্তুর সংক্ষিপ্ত সারাংশ (১৫০-১৬০ অক্ষরের মধ্যে)</td></tr>
              <tr><td>হেডিং কাঠামো</td><td>প্রতি পেজে একটাই <code>&lt;h1&gt;</code>, তারপর যৌক্তিক ক্রমে <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> (HTML কোর্স মডিউল ২)</td></tr>
              <tr><td>alt টেক্সট</td><td>এই মডিউলের ৮.৩-এ শেখা বর্ণনামূলক alt — সার্চ ইঞ্জিনও ছবি "পড়তে" পারে না, alt-ই তার তথ্যের উৎস</td></tr>
              <tr><td>পেজ গতি</td><td>মডিউল ৭-এ শেখা অপ্টিমাইজেশন — ধীর সাইটকে গুগল কম প্রাধান্য দেয়</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>একটা গুরুত্বপূর্ণ উপলব্ধি:</strong> লক্ষ করো — এই টেবিলের প্রায় প্রতিটা ফ্যাক্টরই (সিমান্টিক হেডিং, ভালো alt টেক্সট, দ্রুত লোড) আসলে সেই একই জিনিস যা অ্যাক্সেসিবিলিটির জন্যও করা হয়। <strong>একটা অ্যাক্সেসিবল সাইট স্বয়ংক্রিয়ভাবেই একটা SEO-ফ্রেন্ডলি সাইট</strong> — কারণ সার্চ ইঞ্জিনের "ক্রলার" আসলে একটা স্ক্রিন-রিডারের মতোই পেজ "পড়ে", দেখে না।</p>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">♿ অ্যাক্সেসিবিলিটি (a11y) মানে প্রতিবন্ধকতা থাকা মানুষও যেন সাইট ব্যবহার করতে পারে — এটা নৈতিক দায়িত্ব, অনেক জায়গায় আইনি বাধ্যবাধকতাও।</div>
          <div class="takeaway-item">🏷️ সিমান্টিক HTML (header/nav/main) স্ক্রিন রিডারকে পেজের কাঠামো বুঝতে সাহায্য করে — শুধু "সুন্দর অভ্যাস" না।</div>
          <div class="takeaway-item">🖼️ বর্ণনামূলক <code>alt</code> টেক্সট ও সঠিক <code>&lt;label for="..."&gt;</code> স্ক্রিন রিডার ব্যবহারকারীর জন্য অপরিহার্য।</div>
          <div class="takeaway-item">⌨️ ক্লিকযোগ্য এলিমেন্টে সবসময় <code>&lt;button&gt;</code>/<code>&lt;a&gt;</code> ব্যবহার করো — Tab কী দিয়ে টেস্ট করো নিজের সাইট।</div>
          <div class="takeaway-item">🔍 SEO-এর মূল ভিত্তি: ভালো <code>&lt;title&gt;</code>+<code>meta description</code>, যৌক্তিক হেডিং কাঠামো, বর্ণনামূলক alt, দ্রুত লোড — এবং এগুলোর বেশিরভাগই অ্যাক্সেসিবিলিটির সাথে ওভারল্যাপ করে।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=9&section=9.0">
          পরের মডিউল: ডিবাগিং ওয়ার্কফ্লো
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
        <h2>🐞 মডিউল ৯: ডিবাগিং ওয়ার্কফ্লো</h2>

        <h3>🔹 ৯.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>একটা সিস্টেমেটিক ডিবাগিং পদ্ধতি (এলোমেলো চেষ্টার বদলে)</li>
          <li>CSS সমস্যা ডিবাগ করা — DevTools দিয়ে</li>
          <li>JavaScript এরর পড়া ও বোঝা</li>
          <li>console.log() ছাড়া অন্যান্য ডিবাগিং কৌশল</li>
          <li>কমন বাগের একটা "চেকলিস্ট"</li>
        </ul>
        <p>প্রতিটা কোর্সেই আলাদা আলাদা ডিবাগিং টিপস দেওয়া হয়েছে — এই মডিউলে সবকিছু একসাথে করে একটা সম্পূর্ণ, ধাপে-ধাপে ডিবাগিং ওয়ার্কফ্লো তৈরি করা হবে, যা যেকোনো ধরনের সমস্যায় (HTML, CSS, বা JS) প্রয়োগ করা যায়।</p>
      `
    },
    {
      id: "9.1",
      title: "সিস্টেমেটিক ডিবাগিং পদ্ধতি",
      content: `
        <h3>🔹 ৯.১ এলোমেলো চেষ্টার বদলে একটা পদ্ধতি অনুসরণ করা</h3>
        <p>নতুন ডেভেলপাররা প্রায়ই বাগ দেখলে এলোমেলোভাবে কোড এদিক-ওদিক বদলাতে শুরু করে, আশা করে "হয়তো এটা কাজ করবে"। এটা সময় নষ্ট করে এবং প্রায়ই নতুন বাগ তৈরি করে। প্রফেশনাল ডেভেলপাররা একটা নির্দিষ্ট পদ্ধতি অনুসরণ করে:</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধাপ</th><th>কী করতে হবে</th></tr></thead>
            <tbody>
              <tr><td>১. পুনরুৎপাদন (Reproduce)</td><td>সমস্যাটা ঠিক কীভাবে ঘটে তা নিশ্চিতভাবে আবার ঘটিয়ে দেখো</td></tr>
              <tr><td>২. বিচ্ছিন্ন করা (Isolate)</td><td>সমস্যাটা ঠিক কোন ফাইলে/কোন লাইনে — HTML, CSS, নাকি JS?</td></tr>
              <tr><td>৩. এরর মেসেজ পড়া</td><td>Console-এ কোনো এরর থাকলে সেটা মনোযোগ দিয়ে পড়ো (৯.৩-এ বিস্তারিত)</td></tr>
              <tr><td>৪. অনুমান করা (Hypothesis)</td><td>"আমার মনে হয় সমস্যাটা X কারণে হচ্ছে" — একটা নির্দিষ্ট অনুমান করো</td></tr>
              <tr><td>৫. পরীক্ষা করা</td><td>সেই একটা জিনিস বদলে দেখো, ফলাফল যাচাই করো</td></tr>
              <tr><td>৬. পুনরাবৃত্তি</td><td>সমাধান না পাওয়া পর্যন্ত ৪-৫ ধাপ আবার করো</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>সবচেয়ে গুরুত্বপূর্ণ ধাপ হলো #২ (Isolate):</strong> একটা পেজ কাজ না করলে প্রথমেই বুঝতে হবে সমস্যাটা কোথায় — যদি লেআউট ভাঙা থাকে, সেটা CSS-এর সমস্যা। যদি ক্লিক করলে কিছু না ঘটে, সেটা JavaScript-এর সমস্যা (বা HTML-এ ভুল <code>id</code>)। প্রথমেই সঠিক জায়গায় ফোকাস করলে বাকি অর্ধেক কাজ এমনিতেই সহজ হয়ে যায়।</p>
      `
    },
    {
      id: "9.2",
      title: "CSS সমস্যা ডিবাগ করা",
      content: `
        <h3>🔹 ৯.২ CSS সমস্যা ডিবাগ করা — DevTools দিয়ে</h3>
        <p>CSS কোর্সের মডিউল ১০-এ DevTools-এর পরিচিতি হয়েছিল — এখানে একটা বাস্তব সমস্যা ধরে ধাপে ধাপে সমাধান করে দেখানো হলো।</p>

        <p><strong>সমস্যা:</strong> "আমার কার্ড কম্পোনেন্টের padding কাজ করছে না।"</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধাপ</th><th>কী করতে হবে</th></tr></thead>
            <tbody>
              <tr><td>১</td><td>সেই এলিমেন্টে রাইট-ক্লিক করে "Inspect" চাপো</td></tr>
              <tr><td>২</td><td>ডান পাশের Styles প্যানেলে দেখো — আসল <code>padding</code> নিয়মটা লিস্টে আছে কিনা</td></tr>
              <tr><td>৩</td><td>যদি নিয়মটা <strong>কাটাকাটা লাইনের মতো (strikethrough)</strong> দেখায়, তার মানে অন্য কোনো বেশি-নির্দিষ্ট (Specificity, CSS কোর্স মডিউল ২) নিয়ম সেটাকে override করছে</td></tr>
              <tr><td>৪</td><td>Box Model ডায়াগ্রাম দেখো (CSS কোর্স মডিউল ৪) — হয়তো <code>box-sizing</code> সমস্যা, বা padding আসলে কাজ করছে কিন্তু width অনেক বড়</td></tr>
              <tr><td>৫</td><td>Styles প্যানেলে সরাসরি ভ্যালু বদলে লাইভ টেস্ট করো — কাজ করলে সেই বদল নিজের CSS ফাইলে বসিয়ে দাও</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>সবচেয়ে বেশি দেখা CSS বাগ:</strong> কোনো নিয়ম কাজ না করলে ৯০% সময়েই এটা Specificity সমস্যা (অন্য একটা নিয়ম জিতে যাচ্ছে) অথবা টাইপো (যেমন <code>pading</code> লেখা <code>padding</code>-এর বদলে) — DevTools-এ strikethrough দেখেই প্রথমটা সহজে ধরা যায়, আর Styles প্যানেলে প্রপার্টি নাম দেখেই টাইপো ধরা যায়।</p>
      `
    },
    {
      id: "9.3",
      title: "JavaScript এরর পড়া",
      content: `
        <h3>🔹 ৯.৩ JavaScript এরর মেসেজ পড়া ও বোঝা</h3>
        <p>JS-এ কিছু ভুল হলে Console-এ লাল রঙে একটা এরর মেসেজ দেখা যায় — নতুনরা প্রায়ই এই মেসেজটা এড়িয়ে যায় (ভয় পেয়ে বা না বুঝে), কিন্তু আসলে এই মেসেজেই সমাধানের চাবিকাঠি লুকিয়ে থাকে।</p>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>console-error</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt">// একটা সাধারণ এরর মেসেজ যা Console-এ দেখা যেতে পারে:</span>
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:5</code></pre></div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>এরর মেসেজের অংশ</th><th>কী বোঝায়</th></tr></thead>
            <tbody>
              <tr><td><code>TypeError</code></td><td>এরর-এর ধরন — এখানে ভুল টাইপের কিছু নিয়ে কাজ করার চেষ্টা হয়েছে</td></tr>
              <tr><td><code>Cannot read properties of null</code></td><td>একটা ভেরিয়েবলের মান <code>null</code> ছিল, অথচ কোড তার ভেতরের কিছু (<code>addEventListener</code>) অ্যাক্সেস করার চেষ্টা করেছে</td></tr>
              <tr><td><code>at script.js:5</code></td><td>ঠিক কোন ফাইলের কোন লাইনে সমস্যা — এটাই সবচেয়ে গুরুত্বপূর্ণ তথ্য!</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>এই নির্দিষ্ট এররের মানে কী:</strong> <code>document.getElementById("myBtn")</code> কিছু খুঁজে না পেলে <code>null</code> রিটার্ন করে (JavaScript কোর্স মডিউল ৮ মনে আছে?) — এরপর সেই <code>null</code>-এর উপর <code>.addEventListener()</code> কল করতে গেলে এই এরর আসে। এর মানে সম্ভবত: ১) <code>id</code>-এ টাইপো আছে, অথবা ২) মডিউল ২-এ শেখা লোড-অর্ডার সমস্যা — স্ক্রিপ্ট HTML তৈরি হওয়ার আগেই চলে গেছে।</p>

        <p>⚠️ <strong>নিয়ম:</strong> এরর মেসেজ পেলে সবার আগে <strong>লাইন নম্বর</strong> দেখো, তারপর এরর টাইপ ও বার্তা পড়ো — বেশিরভাগ সময় এরর মেসেজ নিজেই বলে দেয় সমস্যাটা কী, শুধু ধৈর্য ধরে পড়তে হয়।</p>
      `
    },
    {
      id: "9.4",
      title: "console.log ছাড়া অন্য কৌশল",
      content: `
        <h3>🔹 ৯.৪ console.log() ছাড়া অন্যান্য ডিবাগিং কৌশল</h3>
        <p>JavaScript কোর্সে <code>console.log()</code> প্রধান ডিবাগিং টুল হিসেবে ব্যবহার হয়েছে — এটা এখনো সবচেয়ে দ্রুত পদ্ধতি, কিন্তু আরও কিছু কৌশল জানা থাকা ভালো।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>কৌশল</th><th>কখন ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><code>console.table(array)</code></td><td>অ্যারে/অবজেক্টের অ্যারে সুন্দর টেবিল আকারে দেখাতে (console.log-এর চেয়ে পড়া সহজ)</td></tr>
              <tr><td><code>debugger;</code></td><td>কোডের এই লাইনে ঠিক থেমে যাবে (DevTools খোলা থাকলে), তারপর ধাপে ধাপে এগিয়ে দেখা যায়</td></tr>
              <tr><td>DevTools Breakpoint</td><td>Sources ট্যাবে গিয়ে কোনো লাইনে ক্লিক করে সরাসরি "থামার পয়েন্ট" বসানো, কোড এডিট না করেই</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>script.js</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="kw">function</span> <span class="fn">calculateTotal</span>(<span class="fn">cart</span>) {
  <span class="kw">let</span> <span class="fn">total</span> = <span class="num">0</span>;

  <span class="fn">cart</span>.<span class="fn">forEach</span>((<span class="fn">item</span>) <span class="kw">=&gt;</span> {
    <span class="fn">debugger</span>;  <span class="cmt">// এখানে কোড থেমে যাবে, প্রতিটা item-এর মান পরীক্ষা করা যাবে</span>
    <span class="fn">total</span> += <span class="fn">item</span>.<span class="fn">price</span>;
  });

  <span class="kw">return</span> <span class="fn">total</span>;
}</code></pre></div>
        </div>

        <p>💡 <strong>কখন console.log যথেষ্ট, কখন debugger লাগবে:</strong> একটা-দুইটা ভ্যালু চেক করতে হলে <code>console.log()</code>-ই সবচেয়ে দ্রুত। কিন্তু জটিল লজিকে (যেমন একটা লুপের প্রতিটা ধাপে কী হচ্ছে বিস্তারিত দেখতে চাইলে) <code>debugger;</code> বসিয়ে DevTools-এ ধাপে ধাপে ("Step Over" বাটন দিয়ে) এগোনো অনেক বেশি কার্যকর — প্রতিটা ভেরিয়েবলের সেই মুহূর্তের মান একসাথে দেখা যায়, বারবার <code>console.log()</code> যোগ-বাদ করতে হয় না।</p>
      `
    },
    {
      id: "9.5",
      title: "কমন বাগের চেকলিস্ট",
      content: `
        <h3>🔹 ৯.৫ কমন বাগের একটা "চেকলিস্ট"</h3>
        <p>এই কোর্স জুড়ে (HTML, CSS, JS তিনটাতেই) শেখা সবচেয়ে বেশি দেখা ভুলগুলো একটা চেকলিস্টে জড়ো করা হলো — কিছু কাজ না করলে এই তালিকা ধরে ধরে যাচাই করো।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>লক্ষণ</th><th>সম্ভাব্য কারণ</th></tr></thead>
            <tbody>
              <tr><td>CSS-এর কোনো প্রভাবই দেখা যাচ্ছে না</td><td>ফাইল পাথ ভুল, অথবা <code>&lt;link&gt;</code> ট্যাগ <code>&lt;head&gt;</code>-এ নেই</td></tr>
              <tr><td>একটা CSS নিয়ম কাজ করছে না, কিন্তু অন্যগুলো করছে</td><td>Specificity সমস্যা (অন্য নিয়ম জিতে যাচ্ছে) বা টাইপো</td></tr>
              <tr><td>"Cannot read properties of null"</td><td>ভুল <code>id</code>, অথবা স্ক্রিপ্ট HTML তৈরি হওয়ার আগেই চলছে (মডিউল ২)</td></tr>
              <tr><td>বাটনে ক্লিক করলে কিছু হয় না</td><td>Event listener ভুল এলিমেন্টে লাগানো, বা ফাংশনের নামে টাইপো</td></tr>
              <tr><td>মোবাইলে লেআউট ভাঙা</td><td>viewport meta ট্যাগ নেই (CSS কোর্স মডিউল ৮), বা মিডিয়া কোয়েরির ব্রেকপয়েন্ট ভুল</td></tr>
              <tr><td>ফর্ম সাবমিট করলে পেজ রিলোড হয়ে যায়</td><td><code>e.preventDefault()</code> ভুলে গেছ (JS কোর্স মডিউল ৯)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🔍 এলোমেলো চেষ্টার বদলে ধাপে ধাপে এগোও: পুনরুৎপাদন → বিচ্ছিন্ন করা (HTML/CSS/JS কোনটা) → এরর পড়া → অনুমান → পরীক্ষা।</div>
          <div class="takeaway-item">🎨 CSS বাগ ধরতে DevTools-এর Styles প্যানেলে strikethrough (override হওয়া) নিয়ম খোঁজো, Box Model ডায়াগ্রাম দেখো।</div>
          <div class="takeaway-item">📜 JS এরর মেসেজ ভয় না পেয়ে পড়ো — এরর টাইপ, বার্তা, ও সবচেয়ে গুরুত্বপূর্ণ, লাইন নম্বর সমাধানের দিকনির্দেশ দেয়।</div>
          <div class="takeaway-item">🐛 <code>console.log()</code> দ্রুত চেকের জন্য, <code>debugger;</code>+Breakpoint জটিল লজিক ধাপে ধাপে পরীক্ষার জন্য।</div>
          <div class="takeaway-item">✅ একটা "কমন বাগ চেকলিস্ট" নিজের কাছে রাখো — বেশিরভাগ সমস্যাই আসলে হাতেগোনা কয়েকটা পরিচিত কারণেই হয়।</div>
        </div>

        <a class="btn-next-module" href="lesson.html?module=10&section=10.0">
          পরের মডিউল: ডিপ্লয়মেন্ট ও পোর্টফোলিও প্রেজেন্টেশন
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
        <h2>🚀 মডিউল ১০: ডিপ্লয়মেন্ট ও পোর্টফোলিও প্রেজেন্টেশন</h2>

        <h3>🔹 ১০.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এটা এই কোর্সের শেষ মডিউল! এখানে আমরা যা শিখব:</p>
        <ul>
          <li>ডিপ্লয়মেন্ট মানে কী</li>
          <li>GitHub Pages-এ ধাপে ধাপে সাইট প্রকাশ করা</li>
          <li>একটা কাস্টম ডোমেইন যুক্ত করার ধারণা</li>
          <li>পোর্টফোলিওতে প্রজেক্ট কীভাবে উপস্থাপন করবে</li>
        </ul>
        <p>এতদিন যা বানিয়েছ সবকিছু শুধু নিজের কম্পিউটারে ছিল। এই শেষ মডিউলে সেই কাজকে ইন্টারনেটে সবার জন্য প্রকাশ করা শিখবে — একটা লিংক শেয়ার করলেই যে কেউ, যেকোনো জায়গা থেকে তোমার বানানো সাইট দেখতে পারবে।</p>
      `
    },
    {
      id: "10.1",
      title: "ডিপ্লয়মেন্ট মানে কী",
      content: `
        <h3>🔹 ১০.১ ডিপ্লয়মেন্ট (Deployment) মানে কী</h3>
        <p><strong>ডিপ্লয়মেন্ট</strong> মানে তোমার কোড নিজের কম্পিউটার থেকে একটা "সার্ভারে" পাঠানো, যাতে সেটা ইন্টারনেটে ২৪/৭ সবার জন্য উপলব্ধ থাকে। মডিউল ১-এ শেখা <code>index.html</code> ফাইলটা এখন শুধু তোমার কম্পিউটারেই খোলা যায় — ডিপ্লয় করার পর এটা একটা ওয়েব ঠিকানা (URL) পাবে।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>বিকল্প</th><th>বিবরণ</th></tr></thead>
            <tbody>
              <tr><td><strong>GitHub Pages</strong></td><td>সম্পূর্ণ ফ্রি, স্ট্যাটিক সাইট (HTML/CSS/JS) হোস্ট করার জন্য সবচেয়ে জনপ্রিয়, শুরুর জন্য সবচেয়ে ভালো</td></tr>
              <tr><td><strong>Netlify / Vercel</strong></td><td>ফ্রি টায়ার আছে, GitHub-এর সাথে সংযুক্ত করে স্বয়ংক্রিয় ডিপ্লয়, আরও অ্যাডভান্সড ফিচার</td></tr>
              <tr><td><strong>নিজস্ব সার্ভার/হোস্টিং কেনা</strong></td><td>বেশি নিয়ন্ত্রণ কিন্তু খরচ ও জটিলতা বেশি, এই কোর্সের স্কোপের বাইরে</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 এই মডিউলে আমরা <strong>GitHub Pages</strong> ব্যবহার করব — কারণ এটা সম্পূর্ণ ফ্রি, মডিউল ১-এ শেখা Git-এর সাথেই সরাসরি কাজ করে, আর একটা স্ট্যাটিক (HTML/CSS/JS-ভিত্তিক) সাইটের জন্য এটাই সবচেয়ে সহজ পথ।</p>
      `
    },
    {
      id: "10.2",
      title: "GitHub Pages-এ ধাপে ধাপে ডিপ্লয়",
      content: `
        <h3>🔹 ১০.২ GitHub Pages-এ ধাপে ধাপে সাইট প্রকাশ করা</h3>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধাপ</th><th>কী করতে হবে</th></tr></thead>
            <tbody>
              <tr><td>১</td><td>GitHub-এ একটা ফ্রি অ্যাকাউন্ট বানাও (না থাকলে)</td></tr>
              <tr><td>২</td><td>একটা নতুন Repository তৈরি করো (মডিউল ১-এ Git পরিচিতি মনে আছে?)</td></tr>
              <tr><td>৩</td><td>তোমার প্রজেক্টের সব ফাইল (<code>index.html</code>, <code>css/</code>, <code>js/</code>) সেই repository-তে আপলোড/push করো</td></tr>
              <tr><td>৪</td><td>Repository-এর Settings → Pages-এ গিয়ে "Enable GitHub Pages" চালু করো</td></tr>
              <tr><td>৫</td><td>কিছুক্ষণ পর একটা লিংক পাবে (যেমন <code>username.github.io/repo-name</code>) — এটাই তোমার লাইভ সাইট!</td></tr>
            </tbody>
          </table>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>terminal</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># মডিউল ১-এ শেখা Git কমান্ড ব্যবহার করে প্রজেক্ট GitHub-এ পাঠানো</span>
<span class="fn">git</span> init
<span class="fn">git</span> add .
<span class="fn">git</span> commit -m <span class="str">"প্রথম ভার্সন প্রকাশ"</span>
<span class="fn">git</span> branch -M main
<span class="fn">git</span> remote add origin https://github.com/username/repo-name.git
<span class="fn">git</span> push -u origin main</code></pre></div>
        </div>

        <p>⚠️ <strong>গুরুত্বপূর্ণ:</strong> GitHub Pages-এ হোমপেজ হিসেবে দেখাতে হলে মূল ফাইলের নাম অবশ্যই <code>index.html</code> হতে হবে (মডিউল ১-এর ফোল্ডার-স্ট্রাকচার নিয়ম মেনে চলা এখানে সরাসরি কাজে লাগছে) এবং এটা repository-এর root ফোল্ডারে থাকতে হবে।</p>
      `
    },
    {
      id: "10.3",
      title: "কাস্টম ডোমেইন",
      content: `
        <h3>🔹 ১০.৩ কাস্টম ডোমেইন যুক্ত করার ধারণা</h3>
        <p><code>username.github.io/repo-name</code> এর মতো ঠিকানা কাজ করে ঠিকই, কিন্তু একটা প্রফেশনাল প্রজেক্টে <code>yourname.com</code>-এর মতো একটা ছোট, নিজস্ব ঠিকানা (কাস্টম ডোমেইন) থাকলে অনেক বেশি প্রফেশনাল দেখায়।</p>

        <p>💡 <strong>মূল ধারণা (বিস্তারিত না):</strong></p>
        <ul>
          <li>একটা ডোমেইন নাম কেনা হয় (Namecheap, Google Domains-এর মতো প্রোভাইডার থেকে, সাধারণত বছরে সামান্য খরচে)</li>
          <li>GitHub Pages-এর সেটিংসে সেই ডোমেইনটা যুক্ত করা হয় (একটা <code>CNAME</code> ফাইল ও DNS সেটিংসের মাধ্যমে)</li>
          <li>এরপর <code>yourname.com</code> লিখলেই GitHub Pages-এ হোস্ট করা সাইটটাই দেখা যায়</li>
        </ul>

        <p>এই কোর্সের স্কোপে বিস্তারিত DNS সেটআপ কভার করা হচ্ছে না, কিন্তু ধারণাটা জানা থাকা জরুরি — যখন কোনোদিন নিজের একটা পোর্টফোলিও সাইটকে সত্যিকারের প্রফেশনাল রূপ দিতে চাইবে, তখন এই পথেই এগোতে হবে।</p>
      `
    },
    {
      id: "10.4",
      title: "পোর্টফোলিওতে প্রজেক্ট উপস্থাপন",
      content: `
        <h3>🔹 ১০.৪ পোর্টফোলিওতে প্রজেক্ট কীভাবে উপস্থাপন করবে</h3>
        <p>শুধু সাইট বানানো ও ডিপ্লয় করাই যথেষ্ট না — একটা প্রজেক্ট ইউনিভার্সিটি অ্যাপ্লিকেশন, ইন্টার্নশিপ, বা চাকরির আবেদনে কার্যকর হতে হলে সেটা সঠিকভাবে উপস্থাপন করাও জরুরি।</p>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>উপাদান</th><th>কেন গুরুত্বপূর্ণ</th></tr></thead>
            <tbody>
              <tr><td>লাইভ ডেমো লিংক</td><td>যিনি দেখছেন তিনি যেন সরাসরি ক্লিক করে সাইটটা ব্যবহার করতে পারেন, শুধু স্ক্রিনশট না</td></tr>
              <tr><td>GitHub রিপোজিটরি লিংক</td><td>কোড কীভাবে লেখা হয়েছে তা দেখার সুযোগ — নিয়োগকারী/ইন্সট্রাক্টর প্রায়ই কোড কোয়ালিটি দেখতে চান</td></tr>
              <tr><td>একটা সংক্ষিপ্ত README</td><td>প্রজেক্টটা কী করে, কোন প্রযুক্তি ব্যবহার হয়েছে, কী শেখা হয়েছে — কয়েক লাইনে বর্ণনা</td></tr>
              <tr><td>স্ক্রিনশট বা GIF</td><td>যদি কেউ লাইভ ডেমো সাথে সাথে দেখতে না চান, একটা ভিজ্যুয়াল প্রিভিউ প্রথম ইমপ্রেশন তৈরি করে</td></tr>
            </tbody>
          </table>
        </div>

        <p>💡 <strong>একটা README-এর সহজ কাঠামো:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>README.md</div></div>
          <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># প্রজেক্টের নাম</span>

সংক্ষিপ্ত বর্ণনা — এই প্রজেক্ট কী করে, কেন বানানো হয়েছে।

<span class="cmt">## ব্যবহৃত প্রযুক্তি</span>
- HTML, CSS, JavaScript

<span class="cmt">## লাইভ ডেমো</span>
[এখানে ক্লিক করে দেখো](https://username.github.io/repo-name)

<span class="cmt">## যা শিখেছি</span>
- API থেকে ডাটা আনা (fetch)
- রেসপনসিভ লেআউট ডিজাইন</code></pre></div>
        </div>

        <p>💡 এই ছোট্ট বিস্তারিতগুলোই একটা "শুধু কাজ করে এমন একটা প্রজেক্ট" আর "প্রফেশনালভাবে উপস্থাপিত একটা পোর্টফোলিও পিস"-এর মধ্যে পার্থক্য তৈরি করে।</p>
      `
    },
    {
      id: "10.5",
      title: "সারসংক্ষেপ ও কোর্স সমাপ্তি",
      content: `
        <h3>🔹 সারসংক্ষেপ (Key Takeaways)</h3>
        <div class="takeaway-box">
          <div class="takeaway-item">🚀 ডিপ্লয়মেন্ট মানে কোড ইন্টারনেটে প্রকাশ করা — GitHub Pages স্ট্যাটিক সাইটের জন্য ফ্রি ও সহজ প্রথম পছন্দ।</div>
          <div class="takeaway-item">📤 Git দিয়ে (init → add → commit → push) কোড GitHub-এ পাঠানো, তারপর Settings → Pages থেকে চালু করা — এই পাঁচ ধাপেই সাইট লাইভ হয়ে যায়।</div>
          <div class="takeaway-item">🌍 কাস্টম ডোমেইন (yourname.com) একটা ডিপ্লয় করা সাইটকে আরও প্রফেশনাল দেখায়।</div>
          <div class="takeaway-item">📋 পোর্টফোলিওতে প্রজেক্ট উপস্থাপনের সময় লাইভ লিংক, GitHub রিপো, README, ও স্ক্রিনশট/GIF — এই চারটাই যোগ করার চেষ্টা করো।</div>
        </div>

        <h3>🎉 অভিনন্দন!</h3>
        <p>তুমি সম্পূর্ণ <strong>Web Development</strong> কোর্সের ১০টা মডিউল শেষ করে ফেলেছ — প্রজেক্ট প্ল্যানিং থেকে শুরু করে ইন্টিগ্রেশন, রেসপনসিভ ডিজাইন, কম্পোনেন্ট আর্কিটেকচার, ফর্ম হ্যান্ডলিং, API, পারফরম্যান্স, অ্যাক্সেসিবিলিটি, ডিবাগিং, আর শেষে ডিপ্লয়মেন্ট পর্যন্ত!</p>
        <p>এখন তোমার হাতে HTML, CSS, JavaScript, এবং সেগুলো একসাথে ব্যবহার করে বাস্তব প্রজেক্ট বানানোর সম্পূর্ণ দক্ষতা — একদম শূন্য থেকে হিরো পর্যন্ত। এখন সময় হাতে-কলমে বড়, ইউনিভার্সিটি-লেভেল পোর্টফোলিও প্রজেক্ট বানানোর। <strong>Web Development Projects</strong> সেকশনে গিয়ে এই সবকিছু একসাথে প্রয়োগ করা শুরু করো।</p>

        <a class="btn-next-module" href="projects.html">
          🚀 Web Development Projects শুরু করো
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      `
    },
  ],
};
