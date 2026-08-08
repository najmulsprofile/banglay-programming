// ══════════════════════════════════════════════════
// Banglay HTML — Amazing HTML Projects — Data File
// Author: Md Najmul Hosen
//
// এই ফাইলটা projects-data.js (Python কোর্স) এর সাথে হুবহু একই প্যাটার্নে
// লেখা, কিন্তু আলাদা ভ্যারিয়েবল নামে (PROJECTS / PROJECT_CONTENT না রেখে
// HTML_PROJECTS / HTML_PROJECT_CONTENT) — যাতে দুই কোর্স একসাথে একই
// পেজে থাকলেও একে অপরের ডাটা ওভাররাইট না করে।
//
// সবগুলো ১২টা প্রজেক্ট সম্পূর্ণ লেখা — সম্পূর্ণ কোড, ব্রাউজার প্রিভিউ,
// needs-box ও extend-box সহ।
// ══════════════════════════════════════════════════

const HTML_PROJECTS = [
  { id: 1,  title: "Personal Bio Card",         icon: "🪪", level: "বিগিনার" },
  { id: 2,  title: "Recipe Page",                icon: "🍲", level: "বিগিনার" },
  { id: 3,  title: "Photo Gallery",               icon: "🖼️", level: "বিগিনার" },
  { id: 4,  title: "Resume / CV Page",            icon: "📄", level: "বিগিনার" },
  { id: 5,  title: "Multi-Page Portfolio (Nav)",  icon: "🧭", level: "ইন্টারমিডিয়েট" },
  { id: 6,  title: "Menu / Price Table",          icon: "🍽️", level: "ইন্টারমিডিয়েট" },
  { id: 7,  title: "Registration Form",           icon: "📝", level: "ইন্টারমিডিয়েট" },
  { id: 8,  title: "Blog Post Page",              icon: "📰", level: "ইন্টারমিডিয়েট" },
  { id: 9,  title: "Media Page (Video & Audio)",  icon: "🎬", level: "ইন্টারমিডিয়েট" },
  { id: 10, title: "Feedback Survey Form",        icon: "📊", level: "অ্যাডভান্সড" },
  { id: 11, title: "Semantic Landing Page",       icon: "🏛️", level: "অ্যাডভান্সড" },
  { id: 12, title: "Complete Portfolio Website",  icon: "🌐", level: "অ্যাডভান্সড" },
];

const HTML_PROJECT_CONTENT = {

  /* ══════════════════════════════════════════════════
     PROJECT 1 — Personal Bio Card (সম্পূর্ণ লেখা — টেমপ্লেট)
  ══════════════════════════════════════════════════ */
  1: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🪪 Personal Bio Card</h2>
    <p class="subtitle">নাম, ছবি, পরিচিতি ও সোশ্যাল লিংক দিয়ে একটা ছোট্ট প্রোফাইল/বিজনেস-কার্ড স্টাইল পেজ — শুধু বেসিক ট্যাগ দিয়েই বানানো যায়। উদাহরণ হিসেবে এখানে লিওনেল মেসির একটা সংক্ষিপ্ত বায়ো কার্ড বানানো হয়েছে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>HTML ডকুমেন্ট স্ট্রাকচার — <strong>মডিউল ১</strong></li>
        <li>ট্যাগ, এলিমেন্ট ও অ্যাট্রিবিউট — <strong>মডিউল ১</strong></li>
        <li>হেডিং ও প্যারাগ্রাফ — <strong>মডিউল ২</strong></li>
        <li>ইমেজ ট্যাগ (<code>&lt;img&gt;</code>) — <strong>মডিউল ৪</strong></li>
        <li>লিংক (<code>&lt;a&gt;</code>) — <strong>মডিউল ৩</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>bio-card.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>প্রোফাইল কার্ড<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="cmt">&lt;!-- প্রোফাইল ছবি --&gt;</span>
  <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"messi.jpg"</span> <span class="fn">alt</span>=<span class="str">"লিওনেল মেসি"</span> <span class="fn">width</span>=<span class="str">"120"</span><span class="kw">&gt;</span>

  <span class="cmt">&lt;!-- নাম ও পরিচয় --&gt;</span>
  <span class="kw">&lt;h1&gt;</span>লিওনেল মেসি<span class="kw">&lt;/h1&gt;</span>
  <span class="kw">&lt;h3&gt;</span>পেশাদার ফুটবলার | আর্জেন্টিনা জাতীয় দল ও ইন্টার মায়ামি<span class="kw">&lt;/h3&gt;</span>

  <span class="cmt">&lt;!-- সংক্ষিপ্ত পরিচিতি --&gt;</span>
  <span class="kw">&lt;p&gt;</span>
    আটবার ব্যালন ডি'অর জয়ী ও ২০২২ বিশ্বকাপ চ্যাম্পিয়ন আর্জেন্টিনা দলের
    অধিনায়ক — ফুটবল ইতিহাসের অন্যতম সেরা খেলোয়াড় হিসেবে বিবেচিত।
  <span class="kw">&lt;/p&gt;</span>

  <span class="cmt">&lt;!-- সোশ্যাল / রেফারেন্স লিংক --&gt;</span>
  <span class="kw">&lt;p&gt;</span>
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://en.wikipedia.org/wiki/Lionel_Messi"</span> <span class="fn">target</span>=<span class="str">"_blank"</span><span class="kw">&gt;</span>Wikipedia প্রোফাইল<span class="kw">&lt;/a&gt;</span>
  <span class="kw">&lt;/p&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots">
          <span class="browser-dot red"></span>
          <span class="browser-dot yellow"></span>
          <span class="browser-dot green"></span>
        </div>
        <div class="browser-url">file:///bio-card.html</div>
      </div>
      <div class="browser-content">
        <div style="width:70px;height:70px;border-radius:50%;background:#75AADB;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:10px;">⚽</div>
        <h1 style="font-size:20px;margin-bottom:4px;">লিওনেল মেসি</h1>
        <h3 style="font-size:13px;color:#6B7280;font-weight:500;margin-bottom:10px;">পেশাদার ফুটবলার | আর্জেন্টিনা জাতীয় দল ও ইন্টার মায়ামি</h3>
        <p style="font-size:13.5px;color:#374151;margin-bottom:10px;">আটবার ব্যালন ডি'অর জয়ী ও ২০২২ বিশ্বকাপ চ্যাম্পিয়ন আর্জেন্টিনা দলের অধিনায়ক — ফুটবল ইতিহাসের অন্যতম সেরা খেলোয়াড় হিসেবে বিবেচিত।</p>
        <p style="font-size:13px;"><a href="#" style="color:#0066CC;">Wikipedia প্রোফাইল</a></p>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ <code>&lt;hr&gt;</code> দিয়ে প্রতিটা সেকশন আলাদা করো</div>
      <div class="extend-item">2️⃣ একটা <code>&lt;ul&gt;</code> দিয়ে "বড় অর্জন" লিস্ট যোগ করো (বিশ্বকাপ, ব্যালন ডি'অর ইত্যাদি)</div>
      <div class="extend-item">3️⃣ <code>&lt;img&gt;</code> এর width/height ঠিক রেখে round ছবি বানানোর চেষ্টা করো (CSS মডিউলে শিখবে কীভাবে)</div>
      <div class="extend-item">4️⃣ একই প্যাটার্নে তোমার প্রিয় অন্য কোনো ব্যক্তির বায়ো কার্ড বানাও — নিজের নাম দিয়েও চেষ্টা করতে পারো</div>
    </div>
  `,

  /* ══════════════════════════════════════════════════
     PROJECT 2-12 — শীঘ্রই আসছে (পরের সেশনে যোগ হবে)
     প্রতিটার জন্য হালকা প্লেসহোল্ডার — পেজ ভাঙবে না,
     কিন্তু বলে দিচ্ছে এখনো লেখা হয়নি।
  ══════════════════════════════════════════════════ */
  2: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🍲 Recipe Page</h2>
    <p class="subtitle">একটা রেসিপি পেজ — উপকরণের লিস্ট (unordered list) ও ধাপে ধাপে রান্নার পদ্ধতি (ordered list) দিয়ে সাজানো। উদাহরণ হিসেবে বাংলার জনপ্রিয় খাবার "খিচুড়ি"-র রেসিপি।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>হেডিং ও প্যারাগ্রাফ — <strong>মডিউল ২</strong></li>
        <li>আনঅর্ডারড লিস্ট (উপকরণ) — <strong>মডিউল ২</strong></li>
        <li>অর্ডারড লিস্ট (ধাপ) — <strong>মডিউল ২</strong></li>
        <li>ছবি ও figure/figcaption — <strong>মডিউল ৪</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>recipe.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>খিচুড়ি রেসিপি<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="cmt">&lt;!-- রেসিপির শিরোনাম ও ছবি --&gt;</span>
  <span class="kw">&lt;h1&gt;</span>খিচুড়ি<span class="kw">&lt;/h1&gt;</span>

  <span class="kw">&lt;figure&gt;</span>
    <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"khichuri.jpg"</span> <span class="fn">alt</span>=<span class="str">"এক বাটি গরম খিচুড়ি"</span> <span class="fn">width</span>=<span class="str">"350"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;figcaption&gt;</span>বৃষ্টির দিনের প্রিয় খাবার<span class="kw">&lt;/figcaption&gt;</span>
  <span class="kw">&lt;/figure&gt;</span>

  <span class="kw">&lt;p&gt;</span>রান্নার সময়: ৩০ মিনিট | পরিবেশন: ৪ জনের জন্য<span class="kw">&lt;/p&gt;</span>

  <span class="cmt">&lt;!-- উপকরণ — ক্রম গুরুত্বপূর্ণ না, তাই ul --&gt;</span>
  <span class="kw">&lt;h2&gt;</span>উপকরণ<span class="kw">&lt;/h2&gt;</span>
  <span class="kw">&lt;ul&gt;</span>
    <span class="kw">&lt;li&gt;</span>চাল - ১ কাপ<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>মুগ ডাল - আধা কাপ<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>আলু - ২টা (কিউব করে কাটা)<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>পেঁয়াজ, রসুন, আদা বাটা - পরিমাণমতো<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>হলুদ, মরিচ গুঁড়া - স্বাদমতো<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>লবণ - স্বাদমতো<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;/ul&gt;</span>

  <span class="cmt">&lt;!-- রান্নার ধাপ — ক্রম গুরুত্বপূর্ণ, তাই ol --&gt;</span>
  <span class="kw">&lt;h2&gt;</span>রান্নার পদ্ধতি<span class="kw">&lt;/h2&gt;</span>
  <span class="kw">&lt;ol&gt;</span>
    <span class="kw">&lt;li&gt;</span>ডাল হালকা ভেজে নাও<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>চাল ও ডাল একসাথে ধুয়ে নাও<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>পেঁয়াজ-রসুন-আদা কষিয়ে মশলা তৈরি করো<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>চাল, ডাল ও আলু মশলায় দিয়ে কষাও<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>পরিমাণমতো পানি দিয়ে ঢেকে রান্না করো<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>চাল-ডাল সিদ্ধ হয়ে গেলে নামিয়ে গরম গরম পরিবেশন করো<span class="kw">&lt;/li&gt;</span>
  <span class="kw">&lt;/ol&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///recipe.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:20px;margin-bottom:10px;">খিচুড়ি</h1>
        <div style="width:220px;height:130px;background:#FEF3C7;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:34px;margin-bottom:4px;">🍚</div>
        <p style="font-size:12px;color:#6B7280;margin-bottom:10px;">বৃষ্টির দিনের প্রিয় খাবার</p>
        <p style="font-size:13px;color:#374151;margin-bottom:12px;">রান্নার সময়: ৩০ মিনিট | পরিবেশন: ৪ জনের জন্য</p>
        <h2 style="font-size:16px;margin-bottom:6px;">উপকরণ</h2>
        <ul style="margin-left:20px;font-size:13px;line-height:1.7;margin-bottom:12px;">
          <li>চাল - ১ কাপ</li><li>মুগ ডাল - আধা কাপ</li><li>আলু - ২টা</li><li>পেঁয়াজ, রসুন, আদা বাটা</li>
        </ul>
        <h2 style="font-size:16px;margin-bottom:6px;">রান্নার পদ্ধতি</h2>
        <ol style="margin-left:20px;font-size:13px;line-height:1.7;">
          <li>ডাল হালকা ভেজে নাও</li><li>চাল ও ডাল ধুয়ে নাও</li><li>মশলা কষাও, তারপর রান্না করো</li>
        </ol>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা <code>&lt;table&gt;</code> দিয়ে পুষ্টিগুণ (ক্যালরি, প্রোটিন) দেখাও</div>
      <div class="extend-item">2️⃣ <code>&lt;h3&gt;</code> দিয়ে "পরিবেশনের পরামর্শ" নামে আরেকটা সেকশন যোগ করো</div>
      <div class="extend-item">3️⃣ নিজের প্রিয় রেসিপি দিয়ে একই প্যাটার্নে আরেকটা পেজ বানাও</div>
      <div class="extend-item">4️⃣ প্রতিটা ধাপে একটা করে ছোট ছবি যোগ করার চেষ্টা করো</div>
    </div>
  `,
  3: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🖼️ Photo Gallery</h2>
    <p class="subtitle">একাধিক ছবি সাজিয়ে একটা ছোট গ্যালারি পেজ — প্রতিটা ছবির সাথে figure/figcaption দিয়ে ক্যাপশন দেওয়া।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>ইমেজ ট্যাগ ও figure/figcaption — <strong>মডিউল ৪</strong></li>
        <li>সিমান্টিক সেকশন ট্যাগ — <strong>মডিউল ৭</strong></li>
        <li>div দিয়ে গ্রুপিং — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>gallery.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>বাংলাদেশের সৌন্দর্য — ফটো গ্যালারি<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;h1&gt;</span>বাংলাদেশের সৌন্দর্য<span class="kw">&lt;/h1&gt;</span>

  <span class="cmt">&lt;!-- গ্যালারির প্রতিটা ছবি আলাদা figure হিসেবে --&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"gallery"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;figure&gt;</span>
      <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"sundarban.jpg"</span> <span class="fn">alt</span>=<span class="str">"সুন্দরবনের ম্যানগ্রোভ বন"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;figcaption&gt;</span>সুন্দরবন<span class="kw">&lt;/figcaption&gt;</span>
    <span class="kw">&lt;/figure&gt;</span>

    <span class="kw">&lt;figure&gt;</span>
      <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"cox-bazar.jpg"</span> <span class="fn">alt</span>=<span class="str">"কক্সবাজার সমুদ্র সৈকত"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;figcaption&gt;</span>কক্সবাজার<span class="kw">&lt;/figcaption&gt;</span>
    <span class="kw">&lt;/figure&gt;</span>

    <span class="kw">&lt;figure&gt;</span>
      <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"srimangal.jpg"</span> <span class="fn">alt</span>=<span class="str">"শ্রীমঙ্গলের চা বাগান"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;figcaption&gt;</span>শ্রীমঙ্গল চা বাগান<span class="kw">&lt;/figcaption&gt;</span>
    <span class="kw">&lt;/figure&gt;</span>

  <span class="kw">&lt;/div&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///gallery.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:19px;margin-bottom:12px;">বাংলাদেশের সৌন্দর্য</h1>
        <div style="display:flex;gap:14px;flex-wrap:wrap;">
          <div style="text-align:center;">
            <div style="width:110px;height:80px;background:#DCFCE7;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:26px;">🌳</div>
            <p style="font-size:11.5px;color:#6B7280;margin-top:4px;">সুন্দরবন</p>
          </div>
          <div style="text-align:center;">
            <div style="width:110px;height:80px;background:#DBEAFE;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:26px;">🏖️</div>
            <p style="font-size:11.5px;color:#6B7280;margin-top:4px;">কক্সবাজার</p>
          </div>
          <div style="text-align:center;">
            <div style="width:110px;height:80px;background:#D1FAE5;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:26px;">🍃</div>
            <p style="font-size:11.5px;color:#6B7280;margin-top:4px;">শ্রীমঙ্গল চা বাগান</p>
          </div>
        </div>
      </div>
    </div>

    <p>💡 এখানে সবগুলো ছবি পাশাপাশি দেখানোর জন্য <code>display: flex</code> (CSS) ব্যবহার করা হয়েছে প্রিভিউতে — HTML দিয়ে শুধু কাঠামো (প্রতিটা ছবি একটা figure হিসেবে) তৈরি হয়েছে, পাশাপাশি সাজানোর কাজ CSS মডিউলে বিস্তারিত শিখবে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ আরও ৩-৪টা ছবি যোগ করে গ্যালারি বড় করো</div>
      <div class="extend-item">2️⃣ প্রতিটা ছবিকে <code>&lt;a href="..."&gt;</code> দিয়ে বড় সাইজের ছবির লিংক বানাও</div>
      <div class="extend-item">3️⃣ <code>&lt;section&gt;</code> দিয়ে গ্যালারিকে একটা সিমান্টিক সেকশনে গ্রুপ করো (মডিউল ৭)</div>
    </div>
  `,
  4: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>📄 Resume / CV Page</h2>
    <p class="subtitle">শিক্ষা, অভিজ্ঞতা ও স্কিল সাজিয়ে একটা প্রফেশনাল রেজুমে পেজ — হেডিং, লিস্ট ও সিমান্টিক ট্যাগের সমন্বয়ে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>হেডিং ও প্যারাগ্রাফ — <strong>মডিউল ২</strong></li>
        <li>আনঅর্ডারড লিস্ট (স্কিল) — <strong>মডিউল ২</strong></li>
        <li>সিমান্টিক ট্যাগ (header, section, footer) — <strong>মডিউল ৭</strong></li>
        <li>ইমেইল লিংক (mailto:) — <strong>মডিউল ৩</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>resume.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>জীবনবৃত্তান্ত<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;header&gt;</span>
    <span class="kw">&lt;h1&gt;</span>মোঃ নাজমুল হোসেন<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>ওয়েব ডেভেলপার<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;p&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"mailto:najmul@example.com"</span><span class="kw">&gt;</span>najmul@example.com<span class="kw">&lt;/a&gt;</span> | চট্টগ্রাম, বাংলাদেশ<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/header&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>শিক্ষাগত যোগ্যতা<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;p&gt;</span><span class="kw">&lt;strong&gt;</span>বিএসসি ইন কম্পিউটার সায়েন্স<span class="kw">&lt;/strong&gt;</span> — চট্টগ্রাম বিশ্ববিদ্যালয় (২০২০-২০২৪)<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>কাজের অভিজ্ঞতা<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;h3&gt;</span>ফ্রিল্যান্স ওয়েব ডেভেলপার (২০২৩ - বর্তমান)<span class="kw">&lt;/h3&gt;</span>
    <span class="kw">&lt;p&gt;</span>বিভিন্ন ক্লায়েন্টের জন্য ওয়েবসাইট ডিজাইন ও ডেভেলপ করা।<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>স্কিল<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;ul&gt;</span>
      <span class="kw">&lt;li&gt;</span>HTML &amp; CSS<span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;</span>Python<span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;li&gt;</span>Git &amp; GitHub<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;/ul&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;footer&gt;</span>
    <span class="kw">&lt;p&gt;</span>রেফারেন্স চাহিদা অনুযায়ী প্রদান করা হবে।<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/footer&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///resume.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:19px;margin-bottom:2px;">মোঃ নাজমুল হোসেন</h1>
        <p style="font-size:13px;color:#6B7280;margin-bottom:2px;">ওয়েব ডেভেলপার</p>
        <p style="font-size:12px;color:#0066CC;margin-bottom:14px;">najmul@example.com | চট্টগ্রাম, বাংলাদেশ</p>

        <h2 style="font-size:15px;margin-bottom:4px;">শিক্ষাগত যোগ্যতা</h2>
        <p style="font-size:13px;margin-bottom:12px;"><strong>বিএসসি ইন কম্পিউটার সায়েন্স</strong> — চট্টগ্রাম বিশ্ববিদ্যালয়</p>

        <h2 style="font-size:15px;margin-bottom:4px;">স্কিল</h2>
        <ul style="margin-left:18px;font-size:13px;">
          <li>HTML &amp; CSS</li><li>Python</li><li>Git &amp; GitHub</li>
        </ul>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা <code>&lt;section&gt;</code> এর ওপরে একটা <code>&lt;hr&gt;</code> দিয়ে আলাদা করো</div>
      <div class="extend-item">2️⃣ স্কিল সেকশনে প্রতিটা স্কিলের সাথে <code>&lt;progress&gt;</code> দিয়ে দক্ষতার মাত্রা দেখাও (মডিউল ৯)</div>
      <div class="extend-item">3️⃣ নিজের সত্যিকারের তথ্য দিয়ে এই টেমপ্লেট পূরণ করো</div>
    </div>
  `,
  5: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🧭 Multi-Page Portfolio (Nav)</h2>
    <p class="subtitle">দুই বা ততোধিক পেজ (Home, About) বানিয়ে একটা কমন নেভিগেশন মেনু দিয়ে একে অপরের সাথে লিংক করা — বাস্তব ওয়েবসাইটের মূল কাঠামো।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>Relative লিংক দিয়ে পেজ কানেক্ট করা — <strong>মডিউল ৩</strong></li>
        <li><code>&lt;nav&gt;</code> সিমান্টিক ট্যাগ — <strong>মডিউল ৭</strong></li>
        <li>একই কোড একাধিক ফাইলে পুনরাবৃত্তি — <strong>মডিউল ১, ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 ধাপ ১: index.html (হোম পেজ)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>index.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>হোম — আমার পোর্টফোলিও<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="cmt">&lt;!-- এই একই nav কোডটা about.html এ হুবহু কপি করা হবে --&gt;</span>
  <span class="kw">&lt;nav&gt;</span>
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"index.html"</span><span class="kw">&gt;</span>হোম<span class="kw">&lt;/a&gt;</span> |
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"about.html"</span><span class="kw">&gt;</span>আমার সম্পর্কে<span class="kw">&lt;/a&gt;</span>
  <span class="kw">&lt;/nav&gt;</span>

  <span class="kw">&lt;h1&gt;</span>স্বাগতম আমার পোর্টফোলিওতে<span class="kw">&lt;/h1&gt;</span>
  <span class="kw">&lt;p&gt;</span>আমি একজন ওয়েব ডেভেলপার — এখানে আমার কাজ ও পরিচিতি পাবে।<span class="kw">&lt;/p&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <h3>🔹 ধাপ ২: about.html (দ্বিতীয় পেজ)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>about.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>আমার সম্পর্কে — আমার পোর্টফোলিও<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="cmt">&lt;!-- ঠিক একই nav — একটাতে ক্লিক করলে আরেকটায় চলে যাবে --&gt;</span>
  <span class="kw">&lt;nav&gt;</span>
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"index.html"</span><span class="kw">&gt;</span>হোম<span class="kw">&lt;/a&gt;</span> |
    <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"about.html"</span><span class="kw">&gt;</span>আমার সম্পর্কে<span class="kw">&lt;/a&gt;</span>
  <span class="kw">&lt;/nav&gt;</span>

  <span class="kw">&lt;h1&gt;</span>আমার সম্পর্কে<span class="kw">&lt;/h1&gt;</span>
  <span class="kw">&lt;p&gt;</span>আমি বাংলায় প্রোগ্রামিং শেখাতে ভালোবাসি।<span class="kw">&lt;/p&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p>💡 লক্ষ করো: দুটো ফাইলেই <code>&lt;nav&gt;</code>-এর কোড হুবহু একই — শুধু <code>href="index.html"</code> ও <code>href="about.html"</code> দিয়ে দুটো ফাইল একে অপরের সাথে সংযুক্ত হয়েছে। যেকোনো পেজ থেকে যেকোনো পেজে যাওয়া যাচ্ছে, কারণ দুটো ফাইলই একই ফোল্ডারে আছে (তাই Relative Link কাজ করছে, মডিউল ৩ থেকে মনে আছে?)।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ তৃতীয় একটা পেজ <code>contact.html</code> বানাও ও nav-এ যোগ করো (মনে রেখো — দুই ফাইলেই আপডেট করতে হবে!)</div>
      <div class="extend-item">2️⃣ বর্তমান পেজের লিংকটা বোল্ড করে দেখাও, যাতে ইউজার বুঝতে পারে সে এখন কোন পেজে আছে</div>
      <div class="extend-item">3️⃣ nav-কে <code>&lt;header&gt;</code> এর ভেতরে রাখো আরও ভালো সিমান্টিক কাঠামোর জন্য</div>
    </div>
  `,
  6: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🍽️ Menu / Price Table</h2>
    <p class="subtitle">একটা রেস্টুরেন্টের মেনু বা প্রাইস লিস্ট — টেবিলের thead/tbody/tfoot ও colspan ব্যবহার করে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>বেসিক টেবিল স্ট্রাকচার — <strong>মডিউল ৫</strong></li>
        <li>thead/tbody/tfoot ও colspan — <strong>মডিউল ৫</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>menu.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>মেনু — বাংলা রেস্টুরেন্ট<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;h1&gt;</span>আমাদের মেনু<span class="kw">&lt;/h1&gt;</span>

  <span class="kw">&lt;table&gt;</span>
    <span class="kw">&lt;caption&gt;</span>ভাতের আইটেম<span class="kw">&lt;/caption&gt;</span>

    <span class="kw">&lt;thead&gt;</span>
      <span class="kw">&lt;tr&gt;</span>
        <span class="kw">&lt;th</span> <span class="fn">scope</span>=<span class="str">"col"</span><span class="kw">&gt;</span>আইটেম<span class="kw">&lt;/th&gt;</span>
        <span class="kw">&lt;th</span> <span class="fn">scope</span>=<span class="str">"col"</span><span class="kw">&gt;</span>দাম (টাকা)<span class="kw">&lt;/th&gt;</span>
      <span class="kw">&lt;/tr&gt;</span>
    <span class="kw">&lt;/thead&gt;</span>

    <span class="kw">&lt;tbody&gt;</span>
      <span class="kw">&lt;tr&gt;</span>
        <span class="kw">&lt;td&gt;</span>ভাত + মুরগির ঝোল<span class="kw">&lt;/td&gt;</span>
        <span class="kw">&lt;td&gt;</span>১৫০<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;/tr&gt;</span>
      <span class="kw">&lt;tr&gt;</span>
        <span class="kw">&lt;td&gt;</span>ভাত + ইলিশ মাছ<span class="kw">&lt;/td&gt;</span>
        <span class="kw">&lt;td&gt;</span>২৫০<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;/tr&gt;</span>
      <span class="kw">&lt;tr&gt;</span>
        <span class="kw">&lt;td&gt;</span>খিচুড়ি<span class="kw">&lt;/td&gt;</span>
        <span class="kw">&lt;td&gt;</span>১০০<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;/tr&gt;</span>
    <span class="kw">&lt;/tbody&gt;</span>

    <span class="kw">&lt;tfoot&gt;</span>
      <span class="kw">&lt;tr&gt;</span>
        <span class="kw">&lt;td</span> <span class="fn">colspan</span>=<span class="str">"2"</span><span class="kw">&gt;</span>* সব দামের সাথে ৫% ভ্যাট যুক্ত হবে<span class="kw">&lt;/td&gt;</span>
      <span class="kw">&lt;/tr&gt;</span>
    <span class="kw">&lt;/tfoot&gt;</span>
  <span class="kw">&lt;/table&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///menu.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:18px;margin-bottom:10px;">আমাদের মেনু</h1>
        <table style="border-collapse:collapse;font-size:12.5px;width:100%;">
          <caption style="text-align:left;font-weight:600;margin-bottom:6px;">ভাতের আইটেম</caption>
          <tr><th style="border:1px solid #D1D5DB;padding:6px 10px;background:#F3F4F6;text-align:left;">আইটেম</th><th style="border:1px solid #D1D5DB;padding:6px 10px;background:#F3F4F6;">দাম (টাকা)</th></tr>
          <tr><td style="border:1px solid #D1D5DB;padding:6px 10px;">ভাত + মুরগির ঝোল</td><td style="border:1px solid #D1D5DB;padding:6px 10px;text-align:center;">১৫০</td></tr>
          <tr><td style="border:1px solid #D1D5DB;padding:6px 10px;">ভাত + ইলিশ মাছ</td><td style="border:1px solid #D1D5DB;padding:6px 10px;text-align:center;">২৫০</td></tr>
          <tr><td colspan="2" style="border:1px solid #D1D5DB;padding:6px 10px;font-size:11px;color:#6B7280;">* সব দামের সাথে ৫% ভ্যাট যুক্ত হবে</td></tr>
        </table>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ আরেকটা <code>&lt;table&gt;</code> দিয়ে "পানীয়" ক্যাটাগরি যোগ করো</div>
      <div class="extend-item">2️⃣ প্রতিটা আইটেমের পাশে একটা ছোট ছবি (<code>&lt;img&gt;</code>) যোগ করো নতুন কলামে</div>
      <div class="extend-item">3️⃣ ঝাল/স্পাইসি আইটেমের পাশে 🌶️ ইমোজি বা <code>&lt;mark&gt;</code> দিয়ে হাইলাইট করো</div>
    </div>
  `,
  7: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>📝 Registration Form</h2>
    <p class="subtitle">নাম, ইমেইল, পাসওয়ার্ড, জন্ম তারিখ ও জেন্ডার সহ একটা সম্পূর্ণ রেজিস্ট্রেশন ফর্ম — ভ্যালিডেশন অ্যাট্রিবিউট সহ।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>form, label, input — <strong>মডিউল ৬</strong></li>
        <li>radio button — <strong>মডিউল ৬</strong></li>
        <li>ভ্যালিডেশন অ্যাট্রিবিউট (required, minlength) — <strong>মডিউল ৬</strong></li>
        <li>fieldset/legend — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>register.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>রেজিস্ট্রেশন ফর্ম<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;h1&gt;</span>নতুন অ্যাকাউন্ট তৈরি করো<span class="kw">&lt;/h1&gt;</span>

  <span class="kw">&lt;form</span> <span class="fn">action</span>=<span class="str">"/register"</span> <span class="fn">method</span>=<span class="str">"POST"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;fieldset&gt;</span>
      <span class="kw">&lt;legend&gt;</span>ব্যক্তিগত তথ্য<span class="kw">&lt;/legend&gt;</span>

      <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"fullname"</span><span class="kw">&gt;</span>পুরো নাম:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
      <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"text"</span> <span class="fn">id</span>=<span class="str">"fullname"</span> <span class="fn">name</span>=<span class="str">"fullname"</span> <span class="fn">required</span><span class="kw">&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

      <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"dob"</span><span class="kw">&gt;</span>জন্ম তারিখ:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
      <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"date"</span> <span class="fn">id</span>=<span class="str">"dob"</span> <span class="fn">name</span>=<span class="str">"dob"</span> <span class="fn">required</span><span class="kw">&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

      <span class="kw">&lt;p&gt;</span>জেন্ডার:<span class="kw">&lt;/p&gt;</span>
      <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"radio"</span> <span class="fn">id</span>=<span class="str">"male"</span> <span class="fn">name</span>=<span class="str">"gender"</span> <span class="fn">value</span>=<span class="str">"male"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"male"</span><span class="kw">&gt;</span>পুরুষ<span class="kw">&lt;/label&gt;</span>
      <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"radio"</span> <span class="fn">id</span>=<span class="str">"female"</span> <span class="fn">name</span>=<span class="str">"gender"</span> <span class="fn">value</span>=<span class="str">"female"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"female"</span><span class="kw">&gt;</span>মহিলা<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;/fieldset&gt;</span>

    <span class="kw">&lt;fieldset&gt;</span>
      <span class="kw">&lt;legend&gt;</span>অ্যাকাউন্ট তথ্য<span class="kw">&lt;/legend&gt;</span>

      <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"email"</span><span class="kw">&gt;</span>ইমেইল:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
      <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"email"</span> <span class="fn">id</span>=<span class="str">"email"</span> <span class="fn">name</span>=<span class="str">"email"</span> <span class="fn">required</span><span class="kw">&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

      <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"password"</span><span class="kw">&gt;</span>পাসওয়ার্ড:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
      <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"password"</span> <span class="fn">id</span>=<span class="str">"password"</span> <span class="fn">name</span>=<span class="str">"password"</span> <span class="fn">required</span> <span class="fn">minlength</span>=<span class="str">"8"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;/fieldset&gt;</span>

    <span class="kw">&lt;br&gt;</span>
    <span class="kw">&lt;button</span> <span class="fn">type</span>=<span class="str">"submit"</span><span class="kw">&gt;</span>রেজিস্টার করো<span class="kw">&lt;/button&gt;</span>

  <span class="kw">&lt;/form&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///register.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:18px;margin-bottom:12px;">নতুন অ্যাকাউন্ট তৈরি করো</h1>
        <fieldset style="border:1px solid #D1D5DB;border-radius:6px;padding:12px 16px;margin-bottom:10px;font-size:13px;">
          <legend style="padding:0 6px;">ব্যক্তিগত তথ্য</legend>
          <label>পুরো নাম:</label><br>
          <input type="text" style="border:1px solid #D1D5DB;border-radius:4px;padding:4px 8px;margin:4px 0 10px;width:180px;"><br>
          <span>জেন্ডার: </span>
          <label style="margin-right:8px;"><input type="radio" name="g2" style="margin-right:2px;">পুরুষ</label>
          <label><input type="radio" name="g2" style="margin-right:2px;">মহিলা</label>
        </fieldset>
        <button style="background:#0A66C2;color:#fff;border:none;padding:8px 20px;border-radius:20px;font-size:13px;">রেজিস্টার করো</button>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ <code>pattern</code> দিয়ে পাসওয়ার্ডে অন্তত একটা সংখ্যা বাধ্যতামূলক করো</div>
      <div class="extend-item">2️⃣ একটা checkbox যোগ করো "শর্তাবলীতে সম্মত" বোঝাতে (এটাও required হতে পারে)</div>
      <div class="extend-item">3️⃣ <code>&lt;select&gt;</code> দিয়ে "দেশ" ফিল্ড যোগ করো</div>
    </div>
  `,
  8: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>📰 Blog Post Page</h2>
    <p class="subtitle">শিরোনাম, লেখক, তারিখ ও কনটেন্ট সাজিয়ে একটা ব্লগ পোস্ট পেজ — সিমান্টিক ট্যাগ (article, time) ব্যবহার করে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>article, header, time — <strong>মডিউল ৭</strong></li>
        <li>টেক্সট ফরম্যাটিং (blockquote-এর মতো strong/em) — <strong>মডিউল ২</strong></li>
        <li>ছবি ও figure — <strong>মডিউল ৪</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>blog-post.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>HTML শেখা কেন জরুরি?<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;article&gt;</span>

    <span class="kw">&lt;header&gt;</span>
      <span class="kw">&lt;h1&gt;</span>HTML শেখা কেন জরুরি?<span class="kw">&lt;/h1&gt;</span>
      <span class="kw">&lt;p&gt;</span>
        লিখেছেন <span class="kw">&lt;strong&gt;</span>নাজমুল হোসেন<span class="kw">&lt;/strong&gt;</span> •
        <span class="kw">&lt;time</span> <span class="fn">datetime</span>=<span class="str">"2026-07-10"</span><span class="kw">&gt;</span>১০ জুলাই, ২০২৬<span class="kw">&lt;/time&gt;</span>
      <span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;/header&gt;</span>

    <span class="kw">&lt;figure&gt;</span>
      <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"html-cover.jpg"</span> <span class="fn">alt</span>=<span class="str">"HTML কোড লেখার স্ক্রিনশট"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;figcaption&gt;</span>ওয়েব ডেভেলপমেন্টের প্রথম ধাপ<span class="kw">&lt;/figcaption&gt;</span>
    <span class="kw">&lt;/figure&gt;</span>

    <span class="kw">&lt;p&gt;</span>
      ওয়েব ডেভেলপমেন্টের প্রথম ধাপ হলো HTML। এটা ছাড়া কোনো
      ওয়েবসাইটই দাঁড়াতে পারে না — CSS দিয়ে সাজানো বা JavaScript
      দিয়ে কার্যকরী বানানো, সবকিছুর ভিত্তিই HTML।
    <span class="kw">&lt;/p&gt;</span>

    <span class="kw">&lt;p&gt;</span>
      <span class="kw">&lt;em&gt;</span>যারা প্রোগ্রামিং একদম নতুন শুরু করছে<span class="kw">&lt;/em&gt;</span>,
      তাদের জন্য HTML দিয়ে শুরু করাটাই সবচেয়ে সহজ পথ — কারণ
      এতে কোনো জটিল লজিক নেই, শুধু ট্যাগ দিয়ে কাঠামো তৈরি করা।
    <span class="kw">&lt;/p&gt;</span>

  <span class="kw">&lt;/article&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///blog-post.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:18px;margin-bottom:4px;">HTML শেখা কেন জরুরি?</h1>
        <p style="font-size:12px;color:#6B7280;margin-bottom:10px;">লিখেছেন <strong>নাজমুল হোসেন</strong> • ১০ জুলাই, ২০২৬</p>
        <div style="width:100%;height:90px;background:#F0F9FF;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:10px;">💻</div>
        <p style="font-size:13px;color:#374151;">ওয়েব ডেভেলপমেন্টের প্রথম ধাপ হলো HTML। এটা ছাড়া কোনো ওয়েবসাইটই দাঁড়াতে পারে না।</p>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ পোস্টের নিচে একটা <code>&lt;footer&gt;</code> এ ট্যাগ/ক্যাটাগরি যোগ করো (মডিউল ৭)</div>
      <div class="extend-item">2️⃣ আরও একটা <code>&lt;article&gt;</code> যোগ করে দ্বিতীয় ব্লগ পোস্ট বানাও</div>
      <div class="extend-item">3️⃣ <code>&lt;aside&gt;</code> দিয়ে পাশে "লেখক সম্পর্কে" ছোট বক্স যোগ করো</div>
    </div>
  `,
  9: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🎬 Media Page (Video &amp; Audio)</h2>
    <p class="subtitle">একটা পেজে ভিডিও, অডিও ও একটা এমবেডেড YouTube ভিডিও একসাথে দেখানো।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>video ও audio ট্যাগ — <strong>মডিউল ৪</strong></li>
        <li>iframe দিয়ে এমবেড — <strong>মডিউল ৪</strong></li>
        <li>সিমান্টিক section ট্যাগ — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>media.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>মিডিয়া পেজ<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;h1&gt;</span>শেখার রিসোর্স<span class="kw">&lt;/h1&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>টিউটোরিয়াল ভিডিও<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;video</span> <span class="fn">width</span>=<span class="str">"400"</span> <span class="fn">controls</span> <span class="fn">poster</span>=<span class="str">"thumb.jpg"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;source</span> <span class="fn">src</span>=<span class="str">"lesson1.mp4"</span> <span class="fn">type</span>=<span class="str">"video/mp4"</span><span class="kw">&gt;</span>
      তোমার ব্রাউজার ভিডিও প্লেব্যাক সাপোর্ট করে না।
    <span class="kw">&lt;/video&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>পডকাস্ট এপিসোড<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;audio</span> <span class="fn">controls</span><span class="kw">&gt;</span>
      <span class="kw">&lt;source</span> <span class="fn">src</span>=<span class="str">"episode1.mp3"</span> <span class="fn">type</span>=<span class="str">"audio/mpeg"</span><span class="kw">&gt;</span>
      তোমার ব্রাউজার অডিও প্লেব্যাক সাপোর্ট করে না।
    <span class="kw">&lt;/audio&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;section&gt;</span>
    <span class="kw">&lt;h2&gt;</span>YouTube থেকে এমবেড<span class="kw">&lt;/h2&gt;</span>
    <span class="kw">&lt;iframe</span>
      <span class="fn">width</span>=<span class="str">"400"</span>
      <span class="fn">height</span>=<span class="str">"225"</span>
      <span class="fn">src</span>=<span class="str">"https://www.youtube.com/embed/VIDEO_ID"</span>
      <span class="fn">title</span>=<span class="str">"HTML টিউটোরিয়াল"</span>
      <span class="fn">allowfullscreen</span>
    <span class="kw">&gt;&lt;/iframe&gt;</span>
  <span class="kw">&lt;/section&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///media.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:18px;margin-bottom:10px;">শেখার রিসোর্স</h1>
        <h2 style="font-size:14px;margin-bottom:6px;">টিউটোরিয়াল ভিডিও</h2>
        <div style="width:220px;height:120px;background:#111827;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:12px;">▶️</div>
        <h2 style="font-size:14px;margin-bottom:6px;">পডকাস্ট এপিসোড</h2>
        <div style="width:220px;height:34px;background:#E5E7EB;border-radius:20px;display:flex;align-items:center;padding:0 12px;font-size:12px;color:#6B7280;">🔊 ▶ ──●───────</div>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ ভিডিওতে <code>&lt;source&gt;</code> দিয়ে দ্বিতীয় ফরম্যাট (.webm) যোগ করো ব্রাউজার-কম্প্যাটিবিলিটির জন্য</div>
      <div class="extend-item">2️⃣ প্রতিটা সেকশনে একটা করে ছোট বর্ণনা প্যারাগ্রাফ যোগ করো</div>
      <div class="extend-item">3️⃣ Google Maps থেকেও একটা iframe এমবেড করে দেখাও কীভাবে কাজ করে</div>
    </div>
  `,
  10: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>📊 Feedback Survey Form</h2>
    <p class="subtitle">সব ধরনের ইনপুট টাইপ (radio, checkbox, range, select, textarea) একসাথে ব্যবহার করে একটা সম্পূর্ণ ফিডব্যাক ফর্ম।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>মডিউল ৬-এর প্রায় সব input type ও select</li>
        <li>fieldset/legend দিয়ে গ্রুপিং — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>survey.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>কোর্স ফিডব্যাক<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;h1&gt;</span>কোর্স ফিডব্যাক সার্ভে<span class="kw">&lt;/h1&gt;</span>

  <span class="kw">&lt;form</span> <span class="fn">action</span>=<span class="str">"/submit-feedback"</span> <span class="fn">method</span>=<span class="str">"POST"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"course"</span><span class="kw">&gt;</span>কোর্স বাছাই করো:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
    <span class="kw">&lt;select</span> <span class="fn">id</span>=<span class="str">"course"</span> <span class="fn">name</span>=<span class="str">"course"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"python"</span><span class="kw">&gt;</span>Python<span class="kw">&lt;/option&gt;</span>
      <span class="kw">&lt;option</span> <span class="fn">value</span>=<span class="str">"html"</span><span class="kw">&gt;</span>HTML<span class="kw">&lt;/option&gt;</span>
    <span class="kw">&lt;/select&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

    <span class="kw">&lt;p&gt;</span>কোর্সের মান কেমন লেগেছে?<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"radio"</span> <span class="fn">id</span>=<span class="str">"good"</span> <span class="fn">name</span>=<span class="str">"rating"</span> <span class="fn">value</span>=<span class="str">"good"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"good"</span><span class="kw">&gt;</span>ভালো<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"radio"</span> <span class="fn">id</span>=<span class="str">"avg"</span> <span class="fn">name</span>=<span class="str">"rating"</span> <span class="fn">value</span>=<span class="str">"average"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"avg"</span><span class="kw">&gt;</span>মোটামুটি<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"score"</span><span class="kw">&gt;</span>১-১০ এর মধ্যে রেটিং দাও:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
    <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"range"</span> <span class="fn">id</span>=<span class="str">"score"</span> <span class="fn">name</span>=<span class="str">"score"</span> <span class="fn">min</span>=<span class="str">"1"</span> <span class="fn">max</span>=<span class="str">"10"</span><span class="kw">&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

    <span class="kw">&lt;p&gt;</span>কোন অংশগুলো তোমার ভালো লেগেছে? (একাধিক বাছাই করতে পারো)<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"checkbox"</span> <span class="fn">id</span>=<span class="str">"code"</span> <span class="fn">name</span>=<span class="str">"liked"</span> <span class="fn">value</span>=<span class="str">"code"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"code"</span><span class="kw">&gt;</span>কোড উদাহরণ<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"checkbox"</span> <span class="fn">id</span>=<span class="str">"proj"</span> <span class="fn">name</span>=<span class="str">"liked"</span> <span class="fn">value</span>=<span class="str">"projects"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"proj"</span><span class="kw">&gt;</span>প্রজেক্ট<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

    <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"comment"</span><span class="kw">&gt;</span>বাড়তি মতামত:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
    <span class="kw">&lt;textarea</span> <span class="fn">id</span>=<span class="str">"comment"</span> <span class="fn">name</span>=<span class="str">"comment"</span> <span class="fn">rows</span>=<span class="str">"4"</span> <span class="fn">cols</span>=<span class="str">"40"</span><span class="kw">&gt;&lt;/textarea&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

    <span class="kw">&lt;button</span> <span class="fn">type</span>=<span class="str">"submit"</span><span class="kw">&gt;</span>সাবমিট করো<span class="kw">&lt;/button&gt;</span>

  <span class="kw">&lt;/form&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///survey.html</div>
      </div>
      <div class="browser-content">
        <h1 style="font-size:17px;margin-bottom:10px;">কোর্স ফিডব্যাক সার্ভে</h1>
        <label style="font-size:12.5px;">কোর্স বাছাই করো:</label><br>
        <select style="border:1px solid #D1D5DB;border-radius:5px;padding:4px 8px;font-size:12.5px;margin:4px 0 10px;"><option>Python</option><option>HTML</option></select><br>
        <span style="font-size:12.5px;">রেটিং: </span>
        <input type="range" style="vertical-align:middle;width:120px;">
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ range ইনপুটের পাশে JavaScript দিয়ে বর্তমান মান লাইভ দেখাও (পরের কোর্সে)</div>
      <div class="extend-item">2️⃣ প্রতিটা প্রশ্নকে আলাদা <code>&lt;fieldset&gt;</code>-এ ভাগ করো</div>
      <div class="extend-item">3️⃣ ইমেইল ফিল্ড যোগ করো, যাতে ফলোআপ করা যায়</div>
    </div>
  `,
  11: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🏛️ Semantic Landing Page</h2>
    <p class="subtitle">header, nav, main, section, aside, footer দিয়ে একটা সম্পূর্ণ সিমান্টিক ল্যান্ডিং পেজ — মডিউল ৭-এ শেখা সব ট্যাগ একসাথে ব্যবহার করে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>header, nav, main, section, article, aside, footer — <strong>মডিউল ৭</strong></li>
        <li>div দিয়ে অতিরিক্ত গ্রুপিং — <strong>মডিউল ৮</strong></li>
        <li>মেটা ট্যাগ ও favicon — <strong>মডিউল ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>landing.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"viewport"</span> <span class="fn">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"description"</span> <span class="fn">content</span>=<span class="str">"বাংলায় প্রোগ্রামিং শেখার ল্যান্ডিং পেজ"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>Banglay Programming<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="kw">&lt;header&gt;</span>
    <span class="kw">&lt;h1&gt;</span>Banglay Programming<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;nav&gt;</span>
      <span class="kw">&lt;ul&gt;</span>
        <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#courses"</span><span class="kw">&gt;</span>কোর্স<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
        <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#contact"</span><span class="kw">&gt;</span>যোগাযোগ<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;/ul&gt;</span>
    <span class="kw">&lt;/nav&gt;</span>
  <span class="kw">&lt;/header&gt;</span>

  <span class="kw">&lt;main&gt;</span>

    <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"courses"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h2&gt;</span>আমাদের কোর্সসমূহ<span class="kw">&lt;/h2&gt;</span>

      <span class="kw">&lt;article&gt;</span>
        <span class="kw">&lt;h3&gt;</span>Python কোর্স<span class="kw">&lt;/h3&gt;</span>
        <span class="kw">&lt;p&gt;</span>একদম বেসিক থেকে অ্যাডভান্সড পর্যন্ত।<span class="kw">&lt;/p&gt;</span>
      <span class="kw">&lt;/article&gt;</span>

      <span class="kw">&lt;article&gt;</span>
        <span class="kw">&lt;h3&gt;</span>HTML কোর্স<span class="kw">&lt;/h3&gt;</span>
        <span class="kw">&lt;p&gt;</span>ওয়েব ডেভেলপমেন্টের প্রথম ধাপ।<span class="kw">&lt;/p&gt;</span>
      <span class="kw">&lt;/article&gt;</span>
    <span class="kw">&lt;/section&gt;</span>

    <span class="kw">&lt;aside&gt;</span>
      <span class="kw">&lt;h3&gt;</span>কেন Banglay Programming?<span class="kw">&lt;/h3&gt;</span>
      <span class="kw">&lt;p&gt;</span>সম্পূর্ণ বাংলায়, সম্পূর্ণ ফ্রি।<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;/aside&gt;</span>

  <span class="kw">&lt;/main&gt;</span>

  <span class="kw">&lt;footer</span> <span class="fn">id</span>=<span class="str">"contact"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;address&gt;</span>
      যোগাযোগ: <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"mailto:hello@banglayprogramming.com"</span><span class="kw">&gt;</span>hello@banglayprogramming.com<span class="kw">&lt;/a&gt;</span>
    <span class="kw">&lt;/address&gt;</span>
    <span class="kw">&lt;p&gt;</span>&amp;copy; ২০২৬ Banglay Programming<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/footer&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///landing.html</div>
      </div>
      <div class="browser-content">
        <div style="border-bottom:1px solid #E5E7EB;padding-bottom:8px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
          <strong style="font-size:15px;">Banglay Programming</strong>
          <span style="font-size:12px;color:#0066CC;">কোর্স &nbsp; যোগাযোগ</span>
        </div>
        <h2 style="font-size:15px;margin-bottom:6px;">আমাদের কোর্সসমূহ</h2>
        <div style="display:flex;gap:10px;font-size:12px;">
          <div style="background:#F0F9FF;padding:8px 12px;border-radius:6px;">Python কোর্স</div>
          <div style="background:#F0F9FF;padding:8px 12px;border-radius:6px;">HTML কোর্স</div>
        </div>
      </div>
    </div>

    <p>💡 লক্ষ করো: <code>&lt;section id="courses"&gt;</code> ও <code>&lt;footer id="contact"&gt;</code> — এই <code>id</code> দুটোই মডিউল ৩-এ শেখা "পেজের ভেতরে জাম্প" ফিচারের জন্য, যা nav-এর লিংকগুলোর (<code>href="#courses"</code>) সাথে যুক্ত।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ header-এ একটা লোগো ছবি যোগ করো</div>
      <div class="extend-item">2️⃣ আরও কোর্সের জন্য নতুন <code>&lt;article&gt;</code> যোগ করো</div>
      <div class="extend-item">3️⃣ favicon যোগ করো (মডিউল ৯)</div>
    </div>
  `,
  12: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🌐 Complete Portfolio Website</h2>
    <p class="subtitle">এই কোর্সে শেখা প্রায় সবকিছু একসাথে মিলিয়ে একটা সম্পূর্ণ পোর্টফোলিও ওয়েবসাইট — নেভিগেশন, প্রজেক্ট শোকেস, ফর্ম ও ফুটার সহ। এটাই এই কোর্সের চূড়ান্ত ক্যাপস্টোন প্রজেক্ট।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>এই কোর্সের প্রায় সব মডিউল (১-১০) একসাথে প্রয়োগ করা হয়েছে</li>
        <li>header/nav, main/section/article, aside, footer — <strong>মডিউল ৭</strong></li>
        <li>ছবি, লিংক, লিস্ট, টেবিল, ফর্ম — <strong>মডিউল ২-৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>portfolio.html</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="fn">lang</span>=<span class="str">"bn"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;meta</span> <span class="fn">name</span>=<span class="str">"viewport"</span> <span class="fn">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>নাজমুল হোসেন — পোর্টফোলিও<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>

  <span class="cmt">&lt;!-- ═══ হেডার ও নেভিগেশন ═══ --&gt;</span>
  <span class="kw">&lt;header&gt;</span>
    <span class="kw">&lt;h1&gt;</span>নাজমুল হোসেন<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>ওয়েব ডেভেলপার<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;nav&gt;</span>
      <span class="kw">&lt;ul&gt;</span>
        <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#about"</span><span class="kw">&gt;</span>সম্পর্কে<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
        <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#projects"</span><span class="kw">&gt;</span>প্রজেক্ট<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
        <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#skills"</span><span class="kw">&gt;</span>স্কিল<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
        <span class="kw">&lt;li&gt;</span><span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"#contact"</span><span class="kw">&gt;</span>যোগাযোগ<span class="kw">&lt;/a&gt;</span><span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;/ul&gt;</span>
    <span class="kw">&lt;/nav&gt;</span>
  <span class="kw">&lt;/header&gt;</span>

  <span class="kw">&lt;main&gt;</span>

    <span class="cmt">&lt;!-- ═══ সম্পর্কে সেকশন ═══ --&gt;</span>
    <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"about"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h2&gt;</span>আমার সম্পর্কে<span class="kw">&lt;/h2&gt;</span>
      <span class="kw">&lt;figure&gt;</span>
        <span class="kw">&lt;img</span> <span class="fn">src</span>=<span class="str">"profile.jpg"</span> <span class="fn">alt</span>=<span class="str">"নাজমুলের প্রোফাইল ছবি"</span> <span class="fn">width</span>=<span class="str">"120"</span><span class="kw">&gt;</span>
        <span class="kw">&lt;figcaption&gt;</span>নাজমুল হোসেন<span class="kw">&lt;/figcaption&gt;</span>
      <span class="kw">&lt;/figure&gt;</span>
      <span class="kw">&lt;p&gt;</span>আমি বাংলায় প্রোগ্রামিং শেখাতে ভালোবাসি।<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;/section&gt;</span>

    <span class="cmt">&lt;!-- ═══ প্রজেক্ট সেকশন ═══ --&gt;</span>
    <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"projects"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h2&gt;</span>আমার প্রজেক্ট<span class="kw">&lt;/h2&gt;</span>

      <span class="kw">&lt;article&gt;</span>
        <span class="kw">&lt;h3&gt;</span>Banglay Programming<span class="kw">&lt;/h3&gt;</span>
        <span class="kw">&lt;p&gt;</span>বাংলা ভাষায় প্রোগ্রামিং শেখার প্ল্যাটফর্ম।<span class="kw">&lt;/p&gt;</span>
        <span class="kw">&lt;a</span> <span class="fn">href</span>=<span class="str">"https://github.com/najmulsprofile"</span> <span class="fn">target</span>=<span class="str">"_blank"</span> <span class="fn">rel</span>=<span class="str">"noopener noreferrer"</span><span class="kw">&gt;</span>কোড দেখো<span class="kw">&lt;/a&gt;</span>
      <span class="kw">&lt;/article&gt;</span>
    <span class="kw">&lt;/section&gt;</span>

    <span class="cmt">&lt;!-- ═══ স্কিল সেকশন ═══ --&gt;</span>
    <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"skills"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h2&gt;</span>স্কিল<span class="kw">&lt;/h2&gt;</span>
      <span class="kw">&lt;ul&gt;</span>
        <span class="kw">&lt;li&gt;</span>HTML &amp; CSS<span class="kw">&lt;/li&gt;</span>
        <span class="kw">&lt;li&gt;</span>Python<span class="kw">&lt;/li&gt;</span>
        <span class="kw">&lt;li&gt;</span>Git &amp; GitHub<span class="kw">&lt;/li&gt;</span>
      <span class="kw">&lt;/ul&gt;</span>
    <span class="kw">&lt;/section&gt;</span>

    <span class="cmt">&lt;!-- ═══ যোগাযোগ ফর্ম ═══ --&gt;</span>
    <span class="kw">&lt;section</span> <span class="fn">id</span>=<span class="str">"contact"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;h2&gt;</span>যোগাযোগ করো<span class="kw">&lt;/h2&gt;</span>
      <span class="kw">&lt;form</span> <span class="fn">action</span>=<span class="str">"/send-message"</span> <span class="fn">method</span>=<span class="str">"POST"</span><span class="kw">&gt;</span>
        <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"name"</span><span class="kw">&gt;</span>নাম:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
        <span class="kw">&lt;input</span> <span class="fn">type</span>=<span class="str">"text"</span> <span class="fn">id</span>=<span class="str">"name"</span> <span class="fn">name</span>=<span class="str">"name"</span> <span class="fn">required</span><span class="kw">&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

        <span class="kw">&lt;label</span> <span class="fn">for</span>=<span class="str">"msg"</span><span class="kw">&gt;</span>মেসেজ:<span class="kw">&lt;/label&gt;</span><span class="kw">&lt;br&gt;</span>
        <span class="kw">&lt;textarea</span> <span class="fn">id</span>=<span class="str">"msg"</span> <span class="fn">name</span>=<span class="str">"msg"</span> <span class="fn">rows</span>=<span class="str">"4"</span><span class="kw">&gt;&lt;/textarea&gt;</span><span class="kw">&lt;br&gt;</span><span class="kw">&lt;br&gt;</span>

        <span class="kw">&lt;button</span> <span class="fn">type</span>=<span class="str">"submit"</span><span class="kw">&gt;</span>পাঠাও<span class="kw">&lt;/button&gt;</span>
      <span class="kw">&lt;/form&gt;</span>
    <span class="kw">&lt;/section&gt;</span>

  <span class="kw">&lt;/main&gt;</span>

  <span class="cmt">&lt;!-- ═══ ফুটার ═══ --&gt;</span>
  <span class="kw">&lt;footer&gt;</span>
    <span class="kw">&lt;p&gt;</span>&amp;copy; ২০২৬ নাজমুল হোসেন — সর্বস্বত্ব সংরক্ষিত<span class="kw">&lt;/p&gt;</span>
  <span class="kw">&lt;/footer&gt;</span>

<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
    </div>

    <p><strong>ব্রাউজারে এটা কেমন দেখাবে:</strong></p>
    <div class="browser-panel">
      <div class="browser-topbar">
        <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
        <div class="browser-url">file:///portfolio.html</div>
      </div>
      <div class="browser-content">
        <div style="border-bottom:1px solid #E5E7EB;padding-bottom:8px;margin-bottom:10px;">
          <strong style="font-size:15px;">নাজমুল হোসেন</strong>
          <div style="font-size:11.5px;color:#0066CC;margin-top:4px;">সম্পর্কে &nbsp; প্রজেক্ট &nbsp; স্কিল &nbsp; যোগাযোগ</div>
        </div>
        <h2 style="font-size:14px;margin-bottom:6px;">আমার প্রজেক্ট</h2>
        <div style="background:#F0F9FF;padding:8px 12px;border-radius:6px;font-size:12px;margin-bottom:10px;">
          <strong>Banglay Programming</strong><br>বাংলা ভাষায় প্রোগ্রামিং শেখার প্ল্যাটফর্ম।
        </div>
        <h2 style="font-size:14px;margin-bottom:6px;">যোগাযোগ করো</h2>
        <input type="text" placeholder="নাম" style="border:1px solid #D1D5DB;border-radius:4px;padding:4px 8px;font-size:12px;">
      </div>
    </div>

    <p>💡 এই প্রজেক্টে প্রায় পুরো কোর্সের সবকিছু একসাথে দেখা যাচ্ছে — সিমান্টিক লেআউট (header/nav/main/section/footer), ছবি ও ফিগার, লিস্ট, লিংক, এবং একটা কার্যকরী ফর্ম। এটাই আসলে বাস্তব জীবনের ওয়েবসাইট বানানোর প্রক্রিয়া — ছোট ছোট পার্টস (যা তুমি প্রতিটা মডিউলে আলাদাভাবে শিখেছ) একসাথে জোড়া দিয়ে একটা সম্পূর্ণ পেজ বানানো।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা <code>&lt;table&gt;</code> দিয়ে "অভিজ্ঞতা" সেকশন যোগ করো</div>
      <div class="extend-item">2️⃣ প্রতিটা স্কিলে একটা করে আইকন/ইমোজি যোগ করো</div>
      <div class="extend-item">3️⃣ সোশ্যাল লিংক (GitHub, LinkedIn) footer-এ যোগ করো</div>
      <div class="extend-item">4️⃣ এই পুরো পেজটাকে CSS দিয়ে সাজানো শুরু করো — এটাই তোমার পরের কোর্সের প্রথম কাজ হতে পারে!</div>
    </div>
  `,
};

