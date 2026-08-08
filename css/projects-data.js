// ══════════════════════════════════════════════════
// Banglay CSS — Amazing CSS Projects — Data File
//
// html-projects-data.js / projects-data.js এর সাথে হুবহু একই প্যাটার্নে
// লেখা, কিন্তু আলাদা ভ্যারিয়েবল নামে (CSS_PROJECTS / CSS_PROJECT_CONTENT)
// যাতে তিনটা কোর্সের ডাটা একসাথে থাকলেও একে অপরের ডাটা ওভাররাইট না করে।
//
// সবগুলো ১০টা প্রজেক্ট সম্পূর্ণ লেখা — সম্পূর্ণ কোড, লাইভ প্রিভিউ,
// needs-box ও extend-box সহ।
//
// প্রতিটা প্রজেক্টে কোড দেখানো হয় lesson.html এর মতোই একই
// vscode-panel + "LIVE PREVIEW" প্যাটার্নে — কোড আর তার সরাসরি
// ভিজ্যুয়াল ফলাফল একসাথে দেখা যায়।
// ══════════════════════════════════════════════════

const CSS_PROJECTS = [
  { id: 1,  title: "Styled Profile Card",           icon: "🪪", level: "বিগিনার" },
  { id: 2,  title: "Pricing Card (Hover Effect)",    icon: "💳", level: "বিগিনার" },
  { id: 3,  title: "Flexbox Navbar",                 icon: "🧭", level: "বিগিনার" },
  { id: 4,  title: "Custom Button Styles",           icon: "🔘", level: "বিগিনার" },
  { id: 5,  title: "Responsive Photo Gallery (Grid)",icon: "🖼️", level: "ইন্টারমিডিয়েট" },
  { id: 6,  title: "Hero Section (Landing Page)",    icon: "🌄", level: "ইন্টারমিডিয়েট" },
  { id: 7,  title: "CSS Accordion / Dropdown",       icon: "📋", level: "ইন্টারমিডিয়েট" },
  { id: 8,  title: "Responsive Card Grid",           icon: "📱", level: "ইন্টারমিডিয়েট" },
  { id: 9,  title: "Loading Spinner Animation",      icon: "⏳", level: "অ্যাডভান্সড" },
  { id: 10, title: "Complete Responsive Portfolio",  icon: "🌐", level: "অ্যাডভান্সড" },
];

const CSS_PROJECT_CONTENT = {

  /* ══════════════════════════════════════════════════
     PROJECT 1 — Styled Profile Card (সম্পূর্ণ লেখা)
  ══════════════════════════════════════════════════ */
  1: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🪪 Styled Profile Card</h2>
    <p class="subtitle">HTML কোর্সের Personal Bio Card প্রজেক্টকে এবার CSS দিয়ে সাজানো হচ্ছে — রঙ, বক্স মডেল, বর্ডার-রেডিয়াস ও ছায়া দিয়ে একটা প্রফেশনাল কার্ড তৈরি।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>রঙ ও ফন্ট প্রপার্টি — <strong>মডিউল ৩</strong></li>
        <li>বক্স মডেল (padding, border-radius) — <strong>মডিউল ৪</strong></li>
        <li>box-shadow — <strong>মডিউল ৪</strong></li>
        <li>Flexbox দিয়ে ভেতরের কনটেন্ট সাজানো — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="profile-card"&gt;
     &lt;div class="avatar"&gt;⚽&lt;/div&gt;
     &lt;h2 class="name"&gt;লিওনেল মেসি&lt;/h2&gt;
     &lt;p class="role"&gt;পেশাদার ফুটবলার&lt;/p&gt;
     &lt;p class="bio"&gt;আটবার ব্যালন ডি'অর জয়ী।&lt;/p&gt;
   &lt;/div&gt; */</span>

<span class="sel">.profile-card</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">border-radius</span>: <span class="val">16px</span>;
  <span class="prop">padding</span>: <span class="val">28px 24px</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 8px 24px rgba(0, 0, 0, 0.1)</span>;
  <span class="prop">max-width</span>: <span class="val">260px</span>;
}

<span class="sel">.avatar</span> {
  <span class="prop">width</span>: <span class="val">80px</span>;
  <span class="prop">height</span>: <span class="val">80px</span>;
  <span class="prop">border-radius</span>: <span class="val">50%</span>;
  <span class="prop">background-color</span>: <span class="val">#75AADB</span>;
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">justify-content</span>: <span class="val">center</span>;
  <span class="prop">font-size</span>: <span class="val">32px</span>;
  <span class="prop">margin-bottom</span>: <span class="val">14px</span>;
}

<span class="sel">.name</span> {
  <span class="prop">font-size</span>: <span class="val">18px</span>;
  <span class="prop">font-weight</span>: <span class="val">700</span>;
  <span class="prop">margin-bottom</span>: <span class="val">4px</span>;
}

<span class="sel">.role</span> {
  <span class="prop">color</span>: <span class="val">#6B7280</span>;
  <span class="prop">font-size</span>: <span class="val">13px</span>;
  <span class="prop">margin-bottom</span>: <span class="val">10px</span>;
}

<span class="sel">.bio</span> {
  <span class="prop">font-size</span>: <span class="val">13.5px</span>;
  <span class="prop">line-height</span>: <span class="val">1.6</span>;
  <span class="prop">color</span>: <span class="val">#374151</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;background:white;border-radius:16px;padding:28px 24px;box-shadow:0 8px 24px rgba(0,0,0,0.12);max-width:260px;border:1px solid #F3F4F6;">
          <div style="width:80px;height:80px;border-radius:50%;background:#75AADB;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:14px;">⚽</div>
          <div style="font-size:18px;font-weight:700;margin-bottom:4px;">লিওনেল মেসি</div>
          <div style="color:#6B7280;font-size:13px;margin-bottom:10px;">পেশাদার ফুটবলার</div>
          <div style="font-size:13.5px;line-height:1.6;color:#374151;">আটবার ব্যালন ডি'অর জয়ী।</div>
        </div>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ মডিউল ৯ থেকে <code>transition</code> + <code>:hover</code> দিয়ে কার্ডে হোভার ইফেক্ট যোগ করো (উপরে উঠে আসা)</div>
      <div class="extend-item">2️⃣ CSS ভেরিয়েবল (<code>:root</code>) ব্যবহার করে রঙগুলো পুনর্গঠন করো (মডিউল ১০)</div>
      <div class="extend-item">3️⃣ <code>.avatar</code>-এ আসল ছবি বসিয়ে emoji-র বদলে <code>background-image</code> ব্যবহার করো</div>
      <div class="extend-item">4️⃣ মিডিয়া কোয়েরি দিয়ে মোবাইলে কার্ডের প্যাডিং কমিয়ে দাও (মডিউল ৮)</div>
    </div>
  `,

  /* ══════════════════════════════════════════════════
     PROJECT 2-10 — শীঘ্রই আসছে (পরের সেশনে যোগ হবে)
  ══════════════════════════════════════════════════ */
  2: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>💳 Pricing Card (Hover Effect)</h2>
    <p class="subtitle">একটা প্রাইসিং কার্ড যা মাউস হোভার করলে উপরে উঠে আসে ও ছায়া গাঢ় হয় — box-shadow, transform ও transition মিলিয়ে তৈরি।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>বক্স মডেল ও box-shadow — <strong>মডিউল ৪</strong></li>
        <li>Flexbox দিয়ে ভেতরের কনটেন্ট সাজানো — <strong>মডিউল ৬</strong></li>
        <li>:hover pseudo-class — <strong>মডিউল ২</strong></li>
        <li>transform ও transition — <strong>মডিউল ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="pricing-card"&gt;
     &lt;h3 class="plan-name"&gt;প্রো প্ল্যান&lt;/h3&gt;
     &lt;p class="price"&gt;৳৪৯৯&lt;span&gt;/মাস&lt;/span&gt;&lt;/p&gt;
     &lt;ul class="features"&gt;
       &lt;li&gt;সীমাহীন কোর্স&lt;/li&gt;
       &lt;li&gt;সার্টিফিকেট&lt;/li&gt;
       &lt;li&gt;প্রায়োরিটি সাপোর্ট&lt;/li&gt;
     &lt;/ul&gt;
     &lt;button class="btn"&gt;সাবস্ক্রাইব করো&lt;/button&gt;
   &lt;/div&gt; */</span>

<span class="sel">.pricing-card</span> {
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">border-radius</span>: <span class="val">16px</span>;
  <span class="prop">border</span>: <span class="val">1px solid #E5E7EB</span>;
  <span class="prop">padding</span>: <span class="val">28px 24px</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
  <span class="prop">max-width</span>: <span class="val">240px</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.25s ease, box-shadow 0.25s ease</span>;
}

<span class="sel">.pricing-card:hover</span> {
  <span class="prop">transform</span>: <span class="val">translateY(-8px)</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 16px 32px rgba(0, 0, 0, 0.12)</span>;
}

<span class="sel">.plan-name</span> {
  <span class="prop">font-size</span>: <span class="val">16px</span>;
  <span class="prop">color</span>: <span class="val">#6B7280</span>;
  <span class="prop">margin-bottom</span>: <span class="val">10px</span>;
}

<span class="sel">.price</span> {
  <span class="prop">font-size</span>: <span class="val">32px</span>;
  <span class="prop">font-weight</span>: <span class="val">700</span>;
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
  <span class="prop">margin-bottom</span>: <span class="val">16px</span>;
}

<span class="sel">.features</span> {
  <span class="prop">list-style</span>: <span class="val">none</span>;
  <span class="prop">margin-bottom</span>: <span class="val">20px</span>;
}

<span class="sel">.features li</span> {
  <span class="prop">padding</span>: <span class="val">6px 0</span>;
  <span class="prop">color</span>: <span class="val">#374151</span>;
  <span class="prop">font-size</span>: <span class="val">13.5px</span>;
}

<span class="sel">.btn</span> {
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">border</span>: <span class="val">none</span>;
  <span class="prop">padding</span>: <span class="val">10px 24px</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
  <span class="prop">cursor</span>: <span class="val">pointer</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-pricing-2{background:white;border-radius:16px;border:1px solid #E5E7EB;padding:28px 24px;text-align:center;max-width:240px;transition:transform 0.25s ease, box-shadow 0.25s ease;}
          .demo-pricing-2:hover{transform:translateY(-8px);box-shadow:0 16px 32px rgba(0,0,0,0.15);}
          .demo-pricing-2 .plan-name{font-size:16px;color:#6B7280;margin-bottom:10px;}
          .demo-pricing-2 .price{font-size:32px;font-weight:700;color:#0066CC;margin-bottom:16px;}
          .demo-pricing-2 .features{list-style:none;margin-bottom:20px;padding:0;}
          .demo-pricing-2 .features li{padding:6px 0;color:#374151;font-size:13.5px;}
          .demo-pricing-2 .btn{background:#0066CC;color:white;border:none;padding:10px 24px;border-radius:8px;cursor:pointer;}
        </style>
        <div class="demo-pricing-2">
          <div class="plan-name">প্রো প্ল্যান</div>
          <div class="price">৳৪৯৯<span style="font-size:14px;font-weight:400;color:#6B7280;">/মাস</span></div>
          <ul class="features">
            <li>সীমাহীন কোর্স</li>
            <li>সার্টিফিকেট</li>
            <li>প্রায়োরিটি সাপোর্ট</li>
          </ul>
          <button class="btn">সাবস্ক্রাইব করো</button>
        </div>
        <p style="font-size:11px;color:#6B7280;margin-top:10px;">👆 কার্ডের ওপর মাউস আনো — উপরে উঠে আসবে ও ছায়া গাঢ় হবে।</p>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা "জনপ্রিয়" ব্যাজ যোগ করো <code>position: absolute</code> দিয়ে (মডিউল ৫)</div>
      <div class="extend-item">2️⃣ পাশাপাশি ৩টা প্ল্যান (বেসিক/প্রো/প্রিমিয়াম) Flexbox বা Grid দিয়ে সাজাও</div>
      <div class="extend-item">3️⃣ <code>.btn:hover</code>-এও আলাদা ইফেক্ট (scale বা রঙ বদল) যোগ করো</div>
    </div>
  `,
  3: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🧭 Flexbox Navbar</h2>
    <p class="subtitle">লোগো বামে, মেনু লিংক ডানে — Flexbox দিয়ে একটা ফুটবল ফ্যান-সাইটের নেভবার তৈরি, সাথে মোবাইলে অটো-স্ট্যাক করার বেসিক রেসপনসিভ ব্যবহার।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>display: flex, justify-content, align-items — <strong>মডিউল ৬</strong></li>
        <li>gap প্রপার্টি — <strong>মডিউল ৬</strong></li>
        <li>মিডিয়া কোয়েরি বেসিক — <strong>মডিউল ৮</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;nav class="navbar"&gt;
     &lt;div class="logo"&gt;⚽ আর্জেন্টিনা ফ্যান ক্লাব&lt;/div&gt;
     &lt;ul class="menu"&gt;
       &lt;li&gt;&lt;a href="#"&gt;হোম&lt;/a&gt;&lt;/li&gt;
       &lt;li&gt;&lt;a href="#"&gt;ম্যাচ সূচি&lt;/a&gt;&lt;/li&gt;
       &lt;li&gt;&lt;a href="#"&gt;খেলোয়াড়&lt;/a&gt;&lt;/li&gt;
     &lt;/ul&gt;
   &lt;/nav&gt; */</span>

<span class="sel">.navbar</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">justify-content</span>: <span class="val">space-between</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">padding</span>: <span class="val">16px 28px</span>;
  <span class="prop">background-color</span>: <span class="val">#75AADB</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 2px 8px rgba(0, 0, 0, 0.15)</span>;
}

<span class="sel">.logo</span> {
  <span class="prop">font-size</span>: <span class="val">17px</span>;
  <span class="prop">font-weight</span>: <span class="val">700</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
}

<span class="sel">.menu</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">gap</span>: <span class="val">28px</span>;
  <span class="prop">list-style</span>: <span class="val">none</span>;
}

<span class="sel">.menu a</span> {
  <span class="prop">text-decoration</span>: <span class="val">none</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">font-size</span>: <span class="val">14px</span>;
  <span class="prop">transition</span>: <span class="val">opacity 0.2s ease</span>;
}

<span class="sel">.menu a:hover</span> {
  <span class="prop">opacity</span>: <span class="val">0.7</span>;
}

<span class="cmt">/* মোবাইলে মেনু নিচে চলে যাবে */</span>
<span class="sel">@media (max-width: 600px)</span> {
  <span class="sel">.navbar</span> {
    <span class="prop">flex-direction</span>: <span class="val">column</span>;
    <span class="prop">gap</span>: <span class="val">12px</span>;
  }
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-navbar-3{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#75AADB;box-shadow:0 2px 8px rgba(0,0,0,0.15);border-radius:6px;}
          .demo-navbar-3 .logo{font-size:15px;font-weight:700;color:white;}
          .demo-navbar-3 .menu{display:flex;gap:20px;list-style:none;padding:0;margin:0;}
          .demo-navbar-3 .menu a{text-decoration:none;color:white;font-size:13px;transition:opacity 0.2s ease;}
          .demo-navbar-3 .menu a:hover{opacity:0.7;}
        </style>
        <nav class="demo-navbar-3">
          <div class="logo">⚽ আর্জেন্টিনা ফ্যান ক্লাব</div>
          <ul class="menu">
            <li><a href="#">হোম</a></li>
            <li><a href="#">ম্যাচ সূচি</a></li>
            <li><a href="#">খেলোয়াড়</a></li>
          </ul>
        </nav>
        <p style="font-size:11px;color:#6B7280;margin-top:8px;">👆 মেনু লিংকে মাউস আনলে হালকা স্বচ্ছ হয়ে যাবে (opacity transition)।</p>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ মোবাইলে দেখতে <code>@media</code> ব্লকটা পরীক্ষা করো — ব্রাউজার ছোট করে দেখো লেআউট কীভাবে বদলায়</div>
      <div class="extend-item">2️⃣ <code>position: sticky; top: 0;</code> দিয়ে নেভবারকে স্ক্রল করলেও উপরে আটকে রাখো (মডিউল ৫)</div>
      <div class="extend-item">3️⃣ সক্রিয় (বর্তমান) পেজের লিংকটার জন্য একটা <code>.active</code> class ও আন্ডারলাইন যোগ করো</div>
      <div class="extend-item">4️⃣ অন্য কোনো প্রিয় দল বা খেলার থিম দিয়ে একই প্যাটার্নে নিজের নেভবার বানাও</div>
    </div>
  `,
  4: `
    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🔘 Custom Button Styles</h2>
    <p class="subtitle">একটা ফুটবল ম্যাচ-বুকিং সাইটের জন্য কয়েক ধরনের বাটন — Primary, Outline ও Disabled স্টাইল, প্রতিটাতে হোভার ইফেক্টসহ।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>রঙ, বক্স মডেল, border-radius — <strong>মডিউল ৩, ৪</strong></li>
        <li>:hover ও :disabled pseudo-class — <strong>মডিউল ২</strong></li>
        <li>transition ও transform — <strong>মডিউল ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;button class="btn btn-primary"&gt;টিকিট কিনুন&lt;/button&gt;
   &lt;button class="btn btn-outline"&gt;স্কোয়াড দেখুন&lt;/button&gt;
   &lt;button class="btn btn-primary" disabled&gt;ম্যাচ শেষ&lt;/button&gt; */</span>

<span class="cmt">/* সব বাটনের কমন স্টাইল */</span>
<span class="sel">.btn</span> {
  <span class="prop">padding</span>: <span class="val">10px 24px</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
  <span class="prop">font-size</span>: <span class="val">14px</span>;
  <span class="prop">font-weight</span>: <span class="val">600</span>;
  <span class="prop">cursor</span>: <span class="val">pointer</span>;
  <span class="prop">border</span>: <span class="val">2px solid transparent</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.15s ease, opacity 0.2s ease</span>;
}

<span class="cmt">/* Primary — মূল কল-টু-অ্যাকশন */</span>
<span class="sel">.btn-primary</span> {
  <span class="prop">background-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
}

<span class="sel">.btn-primary:hover</span> {
  <span class="prop">transform</span>: <span class="val">scale(1.05)</span>;
}

<span class="cmt">/* Outline — সেকেন্ডারি অ্যাকশন */</span>
<span class="sel">.btn-outline</span> {
  <span class="prop">background-color</span>: <span class="val">transparent</span>;
  <span class="prop">border-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
}

<span class="sel">.btn-outline:hover</span> {
  <span class="prop">background-color</span>: <span class="val">#F0F9FF</span>;
}

<span class="cmt">/* Disabled — নিষ্ক্রিয় অবস্থা */</span>
<span class="sel">.btn:disabled</span> {
  <span class="prop">background-color</span>: <span class="val">#E5E7EB</span>;
  <span class="prop">color</span>: <span class="val">#9CA3AF</span>;
  <span class="prop">cursor</span>: <span class="val">not-allowed</span>;
  <span class="prop">opacity</span>: <span class="val">0.7</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-btn-4{padding:10px 24px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;border:2px solid transparent;transition:transform 0.15s ease, opacity 0.2s ease;margin-right:10px;margin-bottom:8px;}
          .demo-btn-primary-4{background-color:#0066CC;color:white;}
          .demo-btn-primary-4:hover{transform:scale(1.05);}
          .demo-btn-outline-4{background-color:transparent;border-color:#0066CC;color:#0066CC;}
          .demo-btn-outline-4:hover{background-color:#F0F9FF;}
          .demo-btn-disabled-4{background-color:#E5E7EB;color:#9CA3AF;cursor:not-allowed;opacity:0.7;}
        </style>
        <button class="demo-btn-4 demo-btn-primary-4">টিকিট কিনুন</button>
        <button class="demo-btn-4 demo-btn-outline-4">স্কোয়াড দেখুন</button>
        <button class="demo-btn-4 demo-btn-disabled-4" disabled>ম্যাচ শেষ</button>
        <p style="font-size:11px;color:#6B7280;margin-top:6px;">👆 প্রথম বাটনে মাউস আনলে সামান্য বড় হবে, দ্বিতীয়টায় হালকা নীল ব্যাকগ্রাউন্ড আসবে, তৃতীয়টা disabled তাই কোনো ইফেক্ট নেই।</p>
      </div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা <code>.btn-danger</code> (লাল) ভ্যারিয়েন্ট যোগ করো "বাতিল করো" বাটনের জন্য</div>
      <div class="extend-item">2️⃣ বাটনে একটা আইকন (⚽ বা 🎟️) যোগ করো Flexbox দিয়ে আইকন+টেক্সট সারিবদ্ধ করে</div>
      <div class="extend-item">3️⃣ CSS ভেরিয়েবল (<code>:root</code>) ব্যবহার করে সব বাটনের রঙ এক জায়গা থেকে নিয়ন্ত্রণ করো (মডিউল ১০)</div>
    </div>
  `,
  5: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🖼️ Responsive Photo Gallery (Grid)</h2>
    <p class="subtitle">২০২২ বিশ্বকাপের স্মরণীয় মুহূর্তের একটা ফটো গ্যালারি — CSS Grid-এর <code>auto-fit</code>/<code>minmax()</code> দিয়ে কোনো মিডিয়া কোয়েরি ছাড়াই সম্পূর্ণ রেসপনসিভ।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>display: grid, grid-template-columns — <strong>মডিউল ৭</strong></li>
        <li>minmax() ও auto-fit — <strong>মডিউল ৭</strong></li>
        <li>object-fit (ছবি ক্রপ করার জন্য) — <strong>মডিউল ৪</strong> (background) এর সম্প্রসারণ</li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="gallery"&gt;
     &lt;img src="final.jpg" alt="ফাইনাল ম্যাচ"&gt;
     &lt;img src="messi-trophy.jpg" alt="মেসির ট্রফি উঁচিয়ে ধরা"&gt;
     &lt;img src="stadium.jpg" alt="লুসাইল স্টেডিয়াম"&gt;
     &lt;img src="celebration.jpg" alt="উদযাপন"&gt;
   &lt;/div&gt; */</span>

<span class="sel">.gallery</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(auto-fit, minmax(140px, 1fr))</span>;
  <span class="prop">gap</span>: <span class="val">12px</span>;
}

<span class="sel">.gallery img</span> {
  <span class="prop">width</span>: <span class="val">100%</span>;
  <span class="prop">height</span>: <span class="val">120px</span>;
  <span class="prop">object-fit</span>: <span class="val">cover</span>;   <span class="cmt">/* ছবি ক্রপ হয়ে বক্স পুরোপুরি ভরবে, চ্যাপ্টা হবে না */</span>
  <span class="prop">border-radius</span>: <span class="val">10px</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.25s ease</span>;
}

<span class="sel">.gallery img:hover</span> {
  <span class="prop">transform</span>: <span class="val">scale(1.05)</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-gallery-5{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:10px;}
          .demo-gallery-5 div{height:80px;border-radius:10px;transition:transform 0.25s ease;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;}
          .demo-gallery-5 div:hover{transform:scale(1.05);}
        </style>
        <div class="demo-gallery-5">
          <div style="background:#DBEAFE;">🏆</div>
          <div style="background:#FEF3C7;">⚽</div>
          <div style="background:#DCFCE7;">🏟️</div>
          <div style="background:#FEE2E2;">🎉</div>
        </div>
        <p style="font-size:11px;color:#6B7280;margin-top:8px;">👆 প্রিভিউ প্যানেলের প্রস্থ অনুযায়ী কলাম সংখ্যা নিজে থেকেই বদলাবে, আর প্রতিটা ছবিতে (এখানে ইমোজি-বক্সে) মাউস আনলে সামান্য বড় হবে।</p>
      </div>
    </div>

    <p>💡 <code>object-fit: cover;</code> ঠিক ব্যাকগ্রাউন্ড ইমেজের <code>background-size: cover;</code> (মডিউল ৩) এর মতোই কাজ করে, কিন্তু সরাসরি <code>&lt;img&gt;</code> ট্যাগের জন্য — বিভিন্ন সাইজের ছবি একই বক্সে বসালেও কোনোটাই চ্যাপ্টা বা টানা দেখাবে না।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা ছবির নিচে একটা ক্যাপশন (HTML কোর্সের figcaption মনে আছে?) যোগ করো</div>
      <div class="extend-item">2️⃣ <code>minmax(140px, 1fr)</code>-এর সংখ্যা বদলে দেখো কলাম সংখ্যা কীভাবে বদলায়</div>
      <div class="extend-item">3️⃣ ক্লিক করলে বড় করে দেখানোর জন্য একটা মডাল/লাইটবক্স বানানোর চেষ্টা করো (জাভাস্ক্রিপ্ট কোর্সে শিখবে)</div>
    </div>
  `,
  6: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🌄 Hero Section (Landing Page)</h2>
    <p class="subtitle">একটা ফুটবল টুর্নামেন্ট ইভেন্টের ল্যান্ডিং পেজের হিরো সেকশন — গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড, বড় হেডিং ও Flexbox দিয়ে সম্পূর্ণ সেন্টার করা কনটেন্ট।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>linear-gradient ব্যাকগ্রাউন্ড — <strong>মডিউল ৩</strong></li>
        <li>Flexbox দিয়ে সম্পূর্ণ সেন্টারিং (justify-content + align-items) — <strong>মডিউল ৬</strong></li>
        <li>vh ইউনিট — <strong>মডিউল ৮</strong></li>
        <li>বাটন হোভার ইফেক্ট — <strong>মডিউল ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;section class="hero"&gt;
     &lt;h1&gt;চ্যাম্পিয়নস কাপ ২০২৬&lt;/h1&gt;
     &lt;p&gt;বিশ্বের সেরা দলগুলোর লড়াই দেখো একসাথে&lt;/p&gt;
     &lt;button class="cta"&gt;টিকিট বুক করো&lt;/button&gt;
   &lt;/section&gt; */</span>

<span class="sel">.hero</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">justify-content</span>: <span class="val">center</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
  <span class="prop">height</span>: <span class="val">70vh</span>;
  <span class="prop">background</span>: <span class="val">linear-gradient(135deg, #0F172A, #0066CC)</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
  <span class="prop">padding</span>: <span class="val">0 20px</span>;
}

<span class="sel">.hero h1</span> {
  <span class="prop">font-size</span>: <span class="val">clamp(28px, 5vw, 52px)</span>;
  <span class="prop">margin-bottom</span>: <span class="val">14px</span>;
}

<span class="sel">.hero p</span> {
  <span class="prop">font-size</span>: <span class="val">16px</span>;
  <span class="prop">color</span>: <span class="val">#CBD5E1</span>;
  <span class="prop">margin-bottom</span>: <span class="val">28px</span>;
}

<span class="sel">.cta</span> {
  <span class="prop">background-color</span>: <span class="val">#FBBF24</span>;
  <span class="prop">color</span>: <span class="val">#1F2937</span>;
  <span class="prop">border</span>: <span class="val">none</span>;
  <span class="prop">padding</span>: <span class="val">14px 32px</span>;
  <span class="prop">border-radius</span>: <span class="val">50px</span>;
  <span class="prop">font-weight</span>: <span class="val">700</span>;
  <span class="prop">font-size</span>: <span class="val">15px</span>;
  <span class="prop">cursor</span>: <span class="val">pointer</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.2s ease</span>;
}

<span class="sel">.cta:hover</span> {
  <span class="prop">transform</span>: <span class="val">scale(1.06)</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-hero-6{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:220px;background:linear-gradient(135deg, #0F172A, #0066CC);color:white;padding:0 20px;border-radius:10px;}
          .demo-hero-6 h1{font-size:24px;margin-bottom:10px;}
          .demo-hero-6 p{font-size:13px;color:#CBD5E1;margin-bottom:18px;}
          .demo-cta-6{background-color:#FBBF24;color:#1F2937;border:none;padding:11px 26px;border-radius:50px;font-weight:700;font-size:13px;cursor:pointer;transition:transform 0.2s ease;}
          .demo-cta-6:hover{transform:scale(1.06);}
        </style>
        <div class="demo-hero-6">
          <h1>চ্যাম্পিয়নস কাপ ২০২৬</h1>
          <p>বিশ্বের সেরা দলগুলোর লড়াই দেখো একসাথে</p>
          <button class="demo-cta-6">টিকিট বুক করো</button>
        </div>
      </div>
    </div>

    <p>💡 <code>clamp(28px, 5vw, 52px)</code> একটা নতুন কিন্তু খুবই কাজের ফাংশন — এর মানে: ফন্ট সাইজ কখনো ২৮px-এর কম হবে না, কখনো ৫২px-এর বেশি হবে না, আর মাঝে স্ক্রিনের প্রস্থের ৫% (<code>5vw</code>) অনুযায়ী স্কেল করবে। এক লাইনেই ন্যূনতম, স্বয়ংক্রিয়-স্কেলিং ও সর্বোচ্চ — তিনটাই একসাথে নিয়ন্ত্রণ হয়ে যায়, আলাদা মিডিয়া কোয়েরি ছাড়াই।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ ব্যাকগ্রাউন্ডে একটা স্টেডিয়ামের ছবি যোগ করো <code>background-image</code> + গ্রেডিয়েন্ট ওভারলে দিয়ে (মডিউল ৩)</div>
      <div class="extend-item">2️⃣ হিরোর নিচে <code>@keyframes fadeIn</code> দিয়ে হেডিং ধীরে ধীরে ভেসে ওঠার ইফেক্ট যোগ করো (মডিউল ৯)</div>
      <div class="extend-item">3️⃣ দুইটা বাটন পাশাপাশি রাখো ("টিকিট বুক করো" ও "সময়সূচি দেখো") Flexbox দিয়ে</div>
    </div>
  `,
  7: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>📋 CSS Accordion / Dropdown</h2>
    <p class="subtitle">একটা ফুটবল টুর্নামেন্ট FAQ সেকশন — ক্লিক করলে খোলে এমন অ্যাকর্ডিয়ন, সম্পূর্ণ CSS দিয়ে স্টাইল করা, কোনো JavaScript ছাড়াই।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li><code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> — HTML কোর্স <strong>মডিউল ৯</strong></li>
        <li>বক্স মডেল ও border — <strong>মডিউল ৪</strong></li>
        <li>::marker pseudo-element ও transition — <strong>মডিউল ২, ৯</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;details class="faq-item"&gt;
     &lt;summary&gt;টিকিট বাতিল করলে টাকা ফেরত পাব?&lt;/summary&gt;
     &lt;p&gt;হ্যাঁ, ম্যাচের ৪৮ ঘণ্টা আগ পর্যন্ত বাতিল করলে পুরো টাকা ফেরত পাবে।&lt;/p&gt;
   &lt;/details&gt;
   &lt;details class="faq-item"&gt;
     &lt;summary&gt;স্টেডিয়ামে কখন প্রবেশ করা যাবে?&lt;/summary&gt;
     &lt;p&gt;ম্যাচ শুরুর ২ ঘণ্টা আগে থেকে গেট খোলা থাকে।&lt;/p&gt;
   &lt;/details&gt; */</span>

<span class="sel">.faq-item</span> {
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">border</span>: <span class="val">1px solid #E5E7EB</span>;
  <span class="prop">border-radius</span>: <span class="val">10px</span>;
  <span class="prop">padding</span>: <span class="val">14px 18px</span>;
  <span class="prop">margin-bottom</span>: <span class="val">10px</span>;
}

<span class="sel">.faq-item summary</span> {
  <span class="prop">cursor</span>: <span class="val">pointer</span>;
  <span class="prop">font-weight</span>: <span class="val">600</span>;
  <span class="prop">color</span>: <span class="val">#1F2937</span>;
  <span class="prop">list-style</span>: <span class="val">none</span>;   <span class="cmt">/* ব্রাউজারের ডিফল্ট ▶ তীর চিহ্ন সরানো */</span>
}

<span class="cmt">/* কাস্টম তীর চিহ্ন — খোলা/বন্ধ অবস্থায় ভিন্ন */</span>
<span class="sel">.faq-item summary::before</span> {
  <span class="prop">content</span>: <span class="val">"▶"</span>;
  <span class="prop">display</span>: <span class="val">inline-block</span>;
  <span class="prop">margin-right</span>: <span class="val">8px</span>;
  <span class="prop">color</span>: <span class="val">#0066CC</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.2s ease</span>;
}

<span class="cmt">/* details খোলা থাকলে (open অ্যাট্রিবিউট) তীর ৯০° ঘুরে যাবে */</span>
<span class="sel">.faq-item[open] summary::before</span> {
  <span class="prop">transform</span>: <span class="val">rotate(90deg)</span>;
}

<span class="sel">.faq-item p</span> {
  <span class="prop">margin-top</span>: <span class="val">10px</span>;
  <span class="prop">color</span>: <span class="val">#374151</span>;
  <span class="prop">font-size</span>: <span class="val">13.5px</span>;
  <span class="prop">line-height</span>: <span class="val">1.6</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          .demo-faq-7{background:white;border:1px solid #E5E7EB;border-radius:10px;padding:14px 18px;margin-bottom:10px;}
          .demo-faq-7 summary{cursor:pointer;font-weight:600;color:#1F2937;list-style:none;font-size:13.5px;}
          .demo-faq-7 summary::-webkit-details-marker{display:none;}
          .demo-faq-7 summary::before{content:"▶";display:inline-block;margin-right:8px;color:#0066CC;transition:transform 0.2s ease;}
          .demo-faq-7[open] summary::before{transform:rotate(90deg);}
          .demo-faq-7 p{margin-top:10px;color:#374151;font-size:13px;line-height:1.6;}
        </style>
        <details class="demo-faq-7">
          <summary>টিকিট বাতিল করলে টাকা ফেরত পাব?</summary>
          <p>হ্যাঁ, ম্যাচের ৪৮ ঘণ্টা আগ পর্যন্ত বাতিল করলে পুরো টাকা ফেরত পাবে।</p>
        </details>
        <details class="demo-faq-7">
          <summary>স্টেডিয়ামে কখন প্রবেশ করা যাবে?</summary>
          <p>ম্যাচ শুরুর ২ ঘণ্টা আগে থেকে গেট খোলা থাকে।</p>
        </details>
        <p style="font-size:11px;color:#6B7280;margin-top:6px;">👆 প্রশ্নে ক্লিক করে দেখো — তীর চিহ্ন ঘুরে যাবে ও উত্তর খুলবে।</p>
      </div>
    </div>

    <p>💡 <code>[open]</code> একটা অ্যাট্রিবিউট সিলেক্টর (মডিউল ২ থেকে মনে আছে?) — <code>&lt;details&gt;</code> খোলা থাকলে ব্রাউজার নিজে থেকেই এতে <code>open</code> অ্যাট্রিবিউট যোগ করে, আর CSS দিয়ে সেই অবস্থা ধরে স্টাইল বদলানো যায়। এভাবেই সম্পূর্ণ JavaScript ছাড়া, শুধু HTML-এর নিজস্ব ফিচার আর CSS মিলিয়ে একটা ইন্টারঅ্যাক্টিভ অ্যাকর্ডিয়ন বানানো সম্ভব হলো।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ আরও ৩-৪টা প্রশ্ন যোগ করো টুর্নামেন্ট নিয়ে</div>
      <div class="extend-item">2️⃣ <code>.faq-item[open]</code> এ একটা হালকা ব্যাকগ্রাউন্ড রঙ যোগ করো, যাতে কোনটা খোলা আছে সহজে বোঝা যায়</div>
      <div class="extend-item">3️⃣ <code>summary</code> এ <code>:hover</code> দিয়ে রঙ পরিবর্তনের ইফেক্ট যোগ করো</div>
    </div>
  `,
  8: `
    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>📱 Responsive Card Grid</h2>
    <p class="subtitle">আজকের ম্যাচ সূচি দেখানোর একটা কার্ড গ্রিড — মিডিয়া কোয়েরি দিয়ে মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম, ডেস্কটপে ৩ কলাম।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>display: grid, grid-template-columns — <strong>মডিউল ৭</strong></li>
        <li>@media (min-width) — Mobile-First অ্যাপ্রোচ — <strong>মডিউল ৮</strong></li>
        <li>বক্স মডেল ও box-shadow — <strong>মডিউল ৪</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="match-grid"&gt;
     &lt;div class="match-card"&gt;আর্জেন্টিনা vs ব্রাজিল&lt;/div&gt;
     &lt;div class="match-card"&gt;স্পেন vs ফ্রান্স&lt;/div&gt;
     &lt;div class="match-card"&gt;জার্মানি vs ইতালি&lt;/div&gt;
   &lt;/div&gt; */</span>

<span class="cmt">/* ডিফল্ট (মোবাইল-ফার্স্ট) — সিঙ্গেল কলাম */</span>
<span class="sel">.match-grid</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">1fr</span>;
  <span class="prop">gap</span>: <span class="val">16px</span>;
}

<span class="sel">.match-card</span> {
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">border-radius</span>: <span class="val">12px</span>;
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 4px 12px rgba(0, 0, 0, 0.08)</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
  <span class="prop">font-weight</span>: <span class="val">600</span>;
}

<span class="cmt">/* ট্যাবলেটে ২ কলাম */</span>
<span class="sel">@media (min-width: 600px)</span> {
  <span class="sel">.match-grid</span> {
    <span class="prop">grid-template-columns</span>: <span class="val">repeat(2, 1fr)</span>;
  }
}

<span class="cmt">/* ডেস্কটপে ৩ কলাম */</span>
<span class="sel">@media (min-width: 960px)</span> {
  <span class="sel">.match-grid</span> {
    <span class="prop">grid-template-columns</span>: <span class="val">repeat(3, 1fr)</span>;
  }
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>.demo-grid-8{display:grid;grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));gap:12px;}.demo-card-8{background:white;border:1px solid #F3F4F6;border-radius:12px;padding:16px;box-shadow:0 4px 12px rgba(0,0,0,0.08);text-align:center;font-weight:600;font-size:12.5px;}</style>
        <div class="demo-grid-8">
          <div class="demo-card-8">আর্জেন্টিনা vs ব্রাজিল</div>
          <div class="demo-card-8">স্পেন vs ফ্রান্স</div>
          <div class="demo-card-8">জার্মানি vs ইতালি</div>
        </div>
        <p style="font-size:11px;color:#6B7280;margin-top:8px;">💻 আসল মিডিয়া-কোয়েরি ভার্সনে মোবাইলে এগুলো একটার নিচে একটা বসবে, বড় স্ক্রিনে পাশাপাশি — এখানে প্রিভিউর জন্য auto-fit ব্যবহার করা হয়েছে যাতে প্যানেলের যেকোনো প্রস্থে দেখা যায়।</p>
      </div>
    </div>

    <p>💡 <strong>খেয়াল করো:</strong> এই প্রজেক্টে মডিউল ৭-এর <code>auto-fit</code> এর বদলে ইচ্ছাকৃতভাবে <code>@media</code> ব্যবহার করা হয়েছে — কারণ এখানে প্রতিটা ব্রেকপয়েন্টে ঠিক কতগুলো কলাম হবে (১, ২, নাকি ৩) তা নিয়ন্ত্রণ করতে চাওয়া হয়েছে; <code>auto-fit</code> ব্যবহার করলে ব্রাউজার নিজে থেকে হিসাব করে, যা কম নিয়ন্ত্রিত কিন্তু কম কোডেও কাজ চলে। দুটো পদ্ধতিই সঠিক — পরিস্থিতি অনুযায়ী বেছে নিতে হয়।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা কার্ডে ম্যাচের সময় ও স্টেডিয়ামের নাম যোগ করো</div>
      <div class="extend-item">2️⃣ "লাইভ" ম্যাচের কার্ডে <code>border: 2px solid #DC2626;</code> দিয়ে আলাদা করে দেখাও</div>
      <div class="extend-item">3️⃣ কার্ডে হোভার ইফেক্ট (translateY) যোগ করো প্রজেক্ট ২-এর প্যাটার্ন অনুসরণ করে</div>
    </div>
  `,
  9: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>⏳ Loading Spinner Animation</h2>
    <p class="subtitle">"ম্যাচের ফলাফল লোড হচ্ছে..." — @keyframes দিয়ে ঘোরা স্পিনার ও একটা বাউন্সিং ফুটবল অ্যানিমেশন, দুই ধরনের লোডার একসাথে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>@keyframes ও animation প্রপার্টি — <strong>মডিউল ৯</strong></li>
        <li>border-radius (গোল আকৃতি) — <strong>মডিউল ৪</strong></li>
        <li>Flexbox দিয়ে সেন্টারিং — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="loading-screen"&gt;
     &lt;div class="spinner"&gt;&lt;/div&gt;
     &lt;p&gt;ম্যাচের ফলাফল লোড হচ্ছে...&lt;/p&gt;
   &lt;/div&gt; */</span>

<span class="sel">.loading-screen</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">gap</span>: <span class="val">16px</span>;
}

<span class="cmt">/* ধাপ ১: ঘূর্ণন অ্যানিমেশন ডিফাইন করা */</span>
<span class="sel">@keyframes spin</span> {
  <span class="val">from</span> { <span class="prop">transform</span>: <span class="val">rotate(0deg)</span>; }
  <span class="val">to</span>   { <span class="prop">transform</span>: <span class="val">rotate(360deg)</span>; }
}

<span class="cmt">/* ধাপ ২: বৃত্তাকার বর্ডার বানিয়ে উপরের অংশ ভিন্ন রঙ দেওয়া */</span>
<span class="sel">.spinner</span> {
  <span class="prop">width</span>: <span class="val">48px</span>;
  <span class="prop">height</span>: <span class="val">48px</span>;
  <span class="prop">border</span>: <span class="val">5px solid #DBEAFE</span>;
  <span class="prop">border-top-color</span>: <span class="val">#0066CC</span>;   <span class="cmt">/* শুধু উপরের বর্ডার আলাদা রঙ */</span>
  <span class="prop">border-radius</span>: <span class="val">50%</span>;
  <span class="prop">animation</span>: <span class="val">spin 1s linear infinite</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          @keyframes demo-spin-9{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
          .demo-spinner-9{width:48px;height:48px;border:5px solid #DBEAFE;border-top-color:#0066CC;border-radius:50%;animation:demo-spin-9 1s linear infinite;}
        </style>
        <div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
          <div class="demo-spinner-9"></div>
          <p style="font-size:13px;color:#374151;">ম্যাচের ফলাফল লোড হচ্ছে...</p>
        </div>
      </div>
    </div>

    <p>💡 <strong>ট্রিকটা বুঝে নাও:</strong> <code>.spinner</code>-এর চারদিকেই একই হালকা রঙের বর্ডার (<code>#DBEAFE</code>), কিন্তু শুধু <code>border-top-color</code> আলাদা গাঢ় নীল — ফলে ঘুরলে মনে হয় একটা "লেজ" ঘুরছে। এটাই CSS-only স্পিনারের সবচেয়ে জনপ্রিয় কৌশল।</p>

    <h3>🔹 বাড়তি — বাউন্সিং ফুটবল লোডার</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;div class="ball-loader"&gt;⚽&lt;/div&gt; */</span>

<span class="sel">@keyframes bounce</span> {
  <span class="val">0%, 100%</span> {
    <span class="prop">transform</span>: <span class="val">translateY(0)</span>;
  }
  <span class="val">50%</span> {
    <span class="prop">transform</span>: <span class="val">translateY(-20px)</span>;
  }
}

<span class="sel">.ball-loader</span> {
  <span class="prop">font-size</span>: <span class="val">32px</span>;
  <span class="prop">display</span>: <span class="val">inline-block</span>;
  <span class="prop">animation</span>: <span class="val">bounce 0.7s ease-in-out infinite</span>;
}</code></pre></div>
      <div class="preview-divider"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap">
        <style>
          @keyframes demo-bounce-9{0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
          .demo-ball-9{font-size:32px;display:inline-block;animation:demo-bounce-9 0.7s ease-in-out infinite;}
        </style>
        <div class="demo-ball-9">⚽</div>
      </div>
    </div>

    <p>💡 <code>0%, 100%</code> একসাথে লিখে দুইটা ধাপের জন্য একই স্টাইল দেওয়া হয়েছে — শুরু ও শেষে বল মাটিতে, মাঝখানে (<code>50%</code>) সবচেয়ে উপরে। এভাবে ধাপগুলো গ্রুপ করে লেখা কোড ছোট রাখতে সাহায্য করে।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ স্পিনারের রঙ CSS ভেরিয়েবল দিয়ে নিয়ন্ত্রণ করো (মডিউল ১০)</div>
      <div class="extend-item">2️⃣ <code>animation-duration</code> কমিয়ে-বাড়িয়ে দেখো গতি কীভাবে বদলায়</div>
      <div class="extend-item">3️⃣ তিনটা বল পরপর সামান্য <code>animation-delay</code> দিয়ে একটার পর একটা লাফানো ইফেক্ট বানাও</div>
    </div>
  `,
  10: `
    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🌐 Complete Responsive Portfolio</h2>
    <p class="subtitle">এই কোর্সে শেখা প্রায় সবকিছু একসাথে মিলিয়ে একটা ফুটবল বিশ্লেষকের (Football Analyst) পোর্টফোলিও পেজ — sticky নেভবার, gradient হিরো, স্ট্যাটস গ্রিড, স্কিল বার ও কনট্যাক্ট বাটন। এটাই এই কোর্সের চূড়ান্ত ক্যাপস্টোন প্রজেক্ট।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>এই কোর্সের প্রায় সব মডিউল (১-১০) একসাথে প্রয়োগ করা হয়েছে</li>
        <li>Flexbox নেভবার + position: sticky — <strong>মডিউল ৫, ৬</strong></li>
        <li>Gradient হিরো সেকশন — <strong>মডিউল ৩, ৬</strong></li>
        <li>CSS Grid স্ট্যাটস কার্ড — <strong>মডিউল ৭</strong></li>
        <li>মিডিয়া কোয়েরি — <strong>মডিউল ৮</strong></li>
        <li>transition/animation — <strong>মডিউল ৯</strong></li>
        <li>CSS ভেরিয়েবল — <strong>মডিউল ১০</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>style.css</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt">/* HTML: &lt;body&gt;
     &lt;nav class="navbar"&gt;...&lt;/nav&gt;
     &lt;section class="hero"&gt;...&lt;/section&gt;
     &lt;section class="stats"&gt;...&lt;/section&gt;
     &lt;footer&gt;...&lt;/footer&gt;
   &lt;/body&gt; */</span>

<span class="cmt">/* ═══ ভেরিয়েবল ═══ */</span>
<span class="sel">:root</span> {
  <span class="prop">--main-color</span>: <span class="val">#0066CC</span>;
  <span class="prop">--dark</span>: <span class="val">#0F172A</span>;
  <span class="prop">--radius</span>: <span class="val">14px</span>;
}

<span class="sel">*</span> { <span class="prop">box-sizing</span>: <span class="val">border-box</span>; }

<span class="cmt">/* ═══ নেভবার — স্ক্রল করলেও উপরে আটকে থাকবে ═══ */</span>
<span class="sel">.navbar</span> {
  <span class="prop">position</span>: <span class="val">sticky</span>;
  <span class="prop">top</span>: <span class="val">0</span>;
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">justify-content</span>: <span class="val">space-between</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">padding</span>: <span class="val">16px 28px</span>;
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 2px 8px rgba(0,0,0,0.08)</span>;
}

<span class="cmt">/* ═══ হিরো সেকশন ═══ */</span>
<span class="sel">.hero</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">justify-content</span>: <span class="val">center</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
  <span class="prop">height</span>: <span class="val">50vh</span>;
  <span class="prop">background</span>: <span class="val">linear-gradient(135deg, var(--dark), var(--main-color))</span>;
  <span class="prop">color</span>: <span class="val">white</span>;
}

<span class="cmt">/* ═══ স্ট্যাটস — রেসপনসিভ গ্রিড ═══ */</span>
<span class="sel">.stats</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(auto-fit, minmax(140px, 1fr))</span>;
  <span class="prop">gap</span>: <span class="val">16px</span>;
  <span class="prop">padding</span>: <span class="val">40px 24px</span>;
}

<span class="sel">.stat-card</span> {
  <span class="prop">background-color</span>: <span class="val">white</span>;
  <span class="prop">border-radius</span>: <span class="val">var(--radius)</span>;
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">text-align</span>: <span class="val">center</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 4px 12px rgba(0,0,0,0.08)</span>;
  <span class="prop">transition</span>: <span class="val">transform 0.25s ease</span>;
}

<span class="sel">.stat-card:hover</span> {
  <span class="prop">transform</span>: <span class="val">translateY(-6px)</span>;
}

<span class="sel">.stat-number</span> {
  <span class="prop">font-size</span>: <span class="val">28px</span>;
  <span class="prop">font-weight</span>: <span class="val">700</span>;
  <span class="prop">color</span>: <span class="val">var(--main-color)</span>;
}

<span class="cmt">/* ═══ মোবাইলে হিরোর উচ্চতা কমানো ═══ */</span>
<span class="sel">@media (max-width: 600px)</span> {
  <span class="sel">.hero</span> { <span class="prop">height</span>: <span class="val">40vh</span>; }
  <span class="sel">.navbar</span> { <span class="prop">flex-direction</span>: <span class="val">column</span>; <span class="prop">gap</span>: <span class="val">10px</span>; }
}</code></pre></div>
    </div>

    <p><strong>প্রিভিউ — সম্পূর্ণ পেজ একসাথে:</strong></p>
    <div class="vscode-panel">
      <div class="preview-divider" style="border-top:none;"><span class="preview-icon">▣</span> LIVE PREVIEW</div>
      <div class="preview-wrap" style="padding:0;">
        <style>
          .demo-nav-10{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;background:white;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-size:13px;font-weight:700;color:#0066CC;}
          .demo-hero-10{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:130px;background:linear-gradient(135deg, #0F172A, #0066CC);color:white;}
          .demo-hero-10 h1{font-size:18px;margin-bottom:4px;}
          .demo-hero-10 p{font-size:11.5px;color:#CBD5E1;}
          .demo-stats-10{display:grid;grid-template-columns:repeat(auto-fit, minmax(90px, 1fr));gap:10px;padding:18px;}
          .demo-stat-10{background:white;border:1px solid #F3F4F6;border-radius:12px;padding:12px;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);transition:transform 0.25s ease;}
          .demo-stat-10:hover{transform:translateY(-6px);}
          .demo-stat-num-10{font-size:20px;font-weight:700;color:#0066CC;}
          .demo-stat-label-10{font-size:10.5px;color:#6B7280;}
        </style>
        <div class="demo-nav-10">⚽ ফুটবল ইনসাইট</div>
        <div class="demo-hero-10">
          <h1>রাফি হাসান</h1>
          <p>ফুটবল বিশ্লেষক ও কন্টেন্ট ক্রিয়েটর</p>
        </div>
        <div class="demo-stats-10">
          <div class="demo-stat-10"><div class="demo-stat-num-10">১২০+</div><div class="demo-stat-label-10">ম্যাচ বিশ্লেষণ</div></div>
          <div class="demo-stat-10"><div class="demo-stat-num-10">৫০ক</div><div class="demo-stat-label-10">ফলোয়ার</div></div>
          <div class="demo-stat-10"><div class="demo-stat-num-10">৮</div><div class="demo-stat-label-10">বছরের অভিজ্ঞতা</div></div>
        </div>
      </div>
    </div>

    <p>💡 এই প্রজেক্টে কোর্সের প্রায় সবকিছু একসাথে দেখা যাচ্ছে — CSS ভেরিয়েবল দিয়ে রঙ নিয়ন্ত্রণ, sticky নেভবার, gradient হিরো, রেসপনসিভ Grid স্ট্যাটস কার্ড, hover-এ transform ইফেক্ট, আর মোবাইলের জন্য মিডিয়া কোয়েরি — সব মডিউল মিলিয়ে একটা সম্পূর্ণ, বাস্তব ওয়েবসাইট।</p>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রজেক্ট ৭-এর CSS Accordion দিয়ে একটা FAQ সেকশন যোগ করো</div>
      <div class="extend-item">2️⃣ প্রজেক্ট ৯-এর স্পিনার ব্যবহার করে একটা "লোডিং" স্ক্রিন যোগ করো পেজের শুরুতে</div>
      <div class="extend-item">3️⃣ প্রজেক্ট ৫-এর ফটো গ্যালারি প্যাটার্ন দিয়ে "সাম্প্রতিক বিশ্লেষণ" সেকশন যোগ করো</div>
      <div class="extend-item">4️⃣ পুরো পেজটাকে নিজের পছন্দের অন্য কোনো থিমে (অন্য খেলা, শখ, বা পেশা) বানিয়ে ফেলো — এটাই এখন তোমার নিজের ক্রিয়েটিভ প্রজেক্ট!</div>
    </div>
  `,
};

