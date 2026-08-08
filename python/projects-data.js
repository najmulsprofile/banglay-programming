// ══════════════════════════════════════════════════
// Banglay Python — Amazing Python Projects — Data File
// ══════════════════════════════════════════════════

const PROJECTS = [
  { id: 1, title: "Number Guessing Game", icon: "🎯", level: "বিগিনার" },
  { id: 2, title: "Calculator", icon: "🧮", level: "বিগিনার" },
  { id: 3, title: "To-Do List App", icon: "✅", level: "বিগিনার" },
  { id: 4, title: "Password Generator", icon: "🔐", level: "বিগিনার" },
  { id: 5, title: "Tic-Tac-Toe", icon: "⭕", level: "ইন্টারমিডিয়েট" },
  { id: 6, title: "Expense Tracker", icon: "💰", level: "ইন্টারমিডিয়েট" },
  { id: 7, title: "Quiz Application", icon: "❓", level: "ইন্টারমিডিয়েট" },
  { id: 8, title: "Web Scraper", icon: "🕸️", level: "ইন্টারমিডিয়েট" },
  { id: 9, title: "Weather App", icon: "🌦️", level: "ইন্টারমিডিয়েট" },
  { id: 10, title: "Simple Chatbot", icon: "🤖", level: "অ্যাডভান্সড" },
  { id: 11, title: "URL Shortener", icon: "🔗", level: "অ্যাডভান্সড" },
  { id: 12, title: "Snake Game", icon: "🐍", level: "অ্যাডভান্সড" },
];

const PROJECT_CONTENT = {
  1: `


    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🎯 Number Guessing Game</h2>
    <p class="subtitle">কম্পিউটার একটা গোপন সংখ্যা বাছাই করবে, তোমাকে সেটা গেস করতে হবে — প্রতিবার guess-এর পর "বড়" নাকি "ছোট" বলে দেবে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>ভেরিয়েবল ও ডাটা টাইপ — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস (if-elif-else) — <strong>মডিউল ২</strong></li>
        <li>while লুপ — <strong>মডিউল ৩</strong></li>
        <li>random মডিউল ব্যবহার — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>guessing_game.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># random সংখ্যা তৈরির জন্য</span>
<span class="kw">import</span> random

<span class="cmt"># ১-১০০ এর মধ্যে গোপন সংখ্যা</span>
secret_number = random.randint(<span class="str">1</span>, <span class="str">100</span>)

<span class="cmt"># গেস কাউন্টার</span>
attempts = 0
max_attempts = 7

print(<span class="str">"🎯 আমি ১ থেকে ১০০ এর মধ্যে একটা সংখ্যা ভেবেছি।"</span>)
print(<span class="str">f"তোমার হাতে আছে {max_attempts}টা সুযোগ।\\n"</span>)

is_correct = <span class="kw">False</span>

<span class="cmt"># সঠিক না হওয়া বা সুযোগ শেষ না হওয়া পর্যন্ত চলবে</span>
<span class="kw">while</span> attempts < max_attempts <span class="kw">and not</span> is_correct:

    guess = <span class="kw">int</span>(<span class="kw">input</span>(<span class="str">"তোমার গেস দাও: "</span>))
    attempts += 1

    <span class="cmt"># ছোট / বড় / সঠিক — তিনটা কেস</span>
    <span class="kw">if</span> guess < secret_number:
        print(<span class="str">"⬆️  আরেকটু বড় বলো!\\n"</span>)

    <span class="kw">elif</span> guess > secret_number:
        print(<span class="str">"⬇️  আরেকটু ছোট বলো!\\n"</span>)

    <span class="kw">else</span>:
        is_correct = <span class="kw">True</span>
        print(<span class="str">f"\\n🎉 সঠিক! সংখ্যাটা ছিল {secret_number}।"</span>)
        print(<span class="str">f"লেগেছে মোট {attempts} বার।"</span>)

<span class="cmt"># সুযোগ শেষ হয়ে গেলে</span>
<span class="kw">if not</span> is_correct:
    print(<span class="str">f"\\n😢 সুযোগ শেষ! সঠিক সংখ্যা ছিল {secret_number}।"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python guessing_game.py</div><div class="output-block">🎯 আমি ১ থেকে ১০০ এর মধ্যে একটা সংখ্যা ভেবেছি।<br>তোমার হাতে আছে ৭টা সুযোগ। বলো তো সংখ্যাটা কত?<br><br>তোমার গেস দাও: 50<br>⬆️  আরেকটু বড় সংখ্যা বলো!<br><br>তোমার গেস দাও: 75<br>⬆️  আরেকটু বড় সংখ্যা বলো!<br><br>তোমার গেস দাও: 88<br>⬇️  আরেকটু ছোট সংখ্যা বলো!<br><br>তোমার গেস দাও: 82<br><br>🎉 অভিনন্দন! তুমি সঠিক সংখ্যা 82 বলে দিয়েছ!<br>তোমার লেগেছে মোট 4 বার গেস করতে।</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ ইউজারকে বলো তার স্কোর কত হলো (কম attempt = বেশি পয়েন্ট)</div>
      <div class="extend-item">2️⃣ Difficulty level যোগ করো (Easy = 1-50, Hard = 1-500)</div>
      <div class="extend-item">3️⃣ try-except দিয়ে হ্যান্ডেল করো যদি ইউজার সংখ্যার বদলে অক্ষর লেখে</div>
      <div class="extend-item">4️⃣ একটা "আবার খেলবে?" অপশন যোগ করো (while loop দিয়ে পুরো গেম রিপিট)</div>
    </div>
  `,
  2: `


    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🧮 Calculator</h2>
    <p class="subtitle">যোগ, বিয়োগ, গুণ, ভাগ করতে পারা ক্যালকুলেটর — দুইটা ভার্সন: টার্মিনাল ও GUI (visual)।</p>

    <div class="option-tabs">
      <button class="option-tab active" onclick="showOption(1, this)">অপশন ১ — টার্মিনাল ভার্সন</button>
      <button class="option-tab" onclick="showOption(2, this)">অপশন ২ — GUI ভার্সন (tkinter)</button>
    </div>

    <!-- ═══════════ অপশন ১: টার্মিনাল ভার্সন ═══════════ -->
    <div class="option-panel active" id="option-1">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে যা লাগবে:</strong>
      <ul>
        <li>ভেরিয়েবল ও ডাটা টাইপ — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>while লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন (def, return, parameter) — <strong>মডিউল ৪</strong></li>
        <li>try-except (এরর হ্যান্ডলিং) — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>calculator.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># যোগ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="cmt"># বিয়োগ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">subtract</span>(a, b):
    <span class="kw">return</span> a - b

<span class="cmt"># গুণ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">multiply</span>(a, b):
    <span class="kw">return</span> a * b

<span class="cmt"># ভাগ করার ফাংশন — শূন্য দিয়ে ভাগ ঠেকাতে চেক</span>
<span class="kw">def</span> <span class="fn">divide</span>(a, b):
    <span class="kw">if</span> b == 0:
        <span class="kw">raise</span> ValueError(<span class="str">"শূন্য দিয়ে ভাগ করা যায় না"</span>)
    <span class="kw">return</span> a / b

print(<span class="str">"🧮 সাধারণ ক্যালকুলেটর"</span>)
print(<span class="str">"অপারেশন: + - * /   |  বের হতে লিখো: q\\n"</span>)

<span class="cmt"># মূল প্রোগ্রাম লুপ — q না লেখা পর্যন্ত চলবে</span>
<span class="kw">while</span> <span class="kw">True</span>:

    operator = <span class="kw">input</span>(<span class="str">"অপারেটর দাও (+ - * /) অথবা q: "</span>)

    <span class="cmt"># q দিলে লুপ থেকে বের হয়ে যাবে</span>
    <span class="kw">if</span> operator == <span class="str">"q"</span>:
        print(<span class="str">"বিদায়! 👋"</span>)
        <span class="kw">break</span>

    <span class="cmt"># সব ধরনের ইনপুট এরর try-except দিয়ে ধরা হচ্ছে</span>
    <span class="kw">try</span>:
        num1 = <span class="kw">float</span>(<span class="kw">input</span>(<span class="str">"প্রথম সংখ্যা: "</span>))
        num2 = <span class="kw">float</span>(<span class="kw">input</span>(<span class="str">"দ্বিতীয় সংখ্যা: "</span>))

        <span class="cmt"># অপারেটর অনুযায়ী সঠিক ফাংশন কল করা হচ্ছে</span>
        <span class="kw">if</span> operator == <span class="str">"+"</span>:
            result = add(num1, num2)
        <span class="kw">elif</span> operator == <span class="str">"-"</span>:
            result = subtract(num1, num2)
        <span class="kw">elif</span> operator == <span class="str">"*"</span>:
            result = multiply(num1, num2)
        <span class="kw">elif</span> operator == <span class="str">"/"</span>:
            result = divide(num1, num2)
        <span class="kw">else</span>:
            print(<span class="str">"❌ ভুল অপারেটর!\\n"</span>)
            <span class="kw">continue</span>

        print(<span class="str">f"= {result}\\n"</span>)

    <span class="cmt"># ভুল সংখ্যা লিখলে (যেমন অক্ষর) এখানে ধরা পড়বে</span>
    <span class="kw">except</span> ValueError <span class="kw">as</span> e:
        print(<span class="str">f"❌ ভুল ইনপুট: {e}\\n"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python calculator.py</div><div class="output-block">🧮 সাধারণ ক্যালকুলেটর<br>অপারেশন: + - * /   |  বের হতে লিখো: q<br><br>অপারেটর দাও (+ - * /) অথবা q: +<br>প্রথম সংখ্যা: 12<br>দ্বিতীয় সংখ্যা: 8<br>= 20.0<br><br>অপারেটর দাও (+ - * /) অথবা q: /<br>প্রথম সংখ্যা: 10<br>দ্বিতীয় সংখ্যা: 0<br>❌ ভুল ইনপুট: শূন্য দিয়ে ভাগ করা যায় না<br><br>অপারেটর দাও (+ - * /) অথবা q: q<br>বিদায়! 👋</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ power (**) ও modulus (%) অপারেশন যোগ করো</div>
      <div class="extend-item">2️⃣ প্রতিটা হিসাব একটা history লিস্টে জমা রাখো</div>
      <div class="extend-item">3️⃣ scientific ফাংশন যোগ করো (sqrt, sin, log) — math মডিউল ব্যবহার করে</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ১ ═══════════ -->

    <!-- ═══════════ অপশন ২: GUI ভার্সন (tkinter) ═══════════ -->
    <div class="option-panel" id="option-2">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে অতিরিক্ত যা লাগবে:</strong>
      <ul>
        <li>tkinter মডিউল (পাইথনের সাথেই বিল্ট-ইন আসে, আলাদা ইনস্টলের দরকার নেই)</li>
        <li>OOP বেসিক (class, self) — <strong>মডিউল ৯</strong> — বোঝা থাকলে কোড আরও পরিষ্কার লাগবে</li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>মনে রাখো:</strong> এই কোড ব্রাউজারে চলবে না — নিজের কম্পিউটারে <code>python calculator_gui.py</code> কমান্ড দিয়ে রান করতে হবে, তখন একটা আলাদা windows app খুলবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>calculator_gui.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># GUI বানানোর জন্য tkinter মডিউল</span>
<span class="kw">import</span> tkinter <span class="kw">as</span> tk

<span class="cmt"># মূল উইন্ডো তৈরি</span>
window = tk.Tk()
window.title(<span class="str">"ক্যালকুলেটর"</span>)
window.configure(bg=<span class="str">"#FFFFFF"</span>)

<span class="cmt"># ফোনের মতো লম্বা-সরু শেপ — width কম, height বেশি</span>
<span class="cmt"># (এটা শুধু starting সাইজ, resizable — জোর করে lock করা geometry না)</span>
window.geometry(<span class="str">"320x520"</span>)
window.minsize(<span class="str">300</span>, <span class="str">480</span>)

<span class="cmt"># প্রতিটা row/column সমান weight পাচ্ছে, তাই resize করলেও layout ভাঙবে না</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(<span class="str">4</span>):
    window.grid_columnconfigure(i, weight=<span class="str">1</span>)
<span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(<span class="str">6</span>):
    window.grid_rowconfigure(i, weight=<span class="str">1</span>)

<span class="cmt"># রঙের থিম — Windows Calculator-এর মতো হালকা, পরিষ্কার লুক</span>
COLOR_BG      = <span class="str">"#FFFFFF"</span>   <span class="cmt"># সাদা ব্যাকগ্রাউন্ড</span>
COLOR_DISPLAY = <span class="str">"#FFFFFF"</span>   <span class="cmt"># ডিসপ্লে বক্সও সাদা</span>
COLOR_NUMBER  = <span class="str">"#F5F5F5"</span>   <span class="cmt"># সংখ্যার বাটন — হালকা ধূসর</span>
COLOR_OPER    = <span class="str">"#EDEDED"</span>   <span class="cmt"># অপারেটর বাটন — একটু গাঢ় ধূসর</span>
COLOR_EQUAL   = <span class="str">"#008575"</span>   <span class="cmt"># সমান বাটন — টিল/সবুজ accent</span>
COLOR_TEXT    = <span class="str">"#1A1A1A"</span>   <span class="cmt"># প্রায় কালো টেক্সট</span>
COLOR_TEXT_EQ = <span class="str">"#FFFFFF"</span>   <span class="cmt"># "=" বাটনের টেক্সট সাদা</span>

<span class="cmt"># হিসাবের ফলাফল দেখানোর জন্য টেক্সট বক্স — ডানে-অ্যালাইন করা, বড় ফন্ট</span>
display = tk.Entry(
    window, font=(<span class="str">"Segoe UI"</span>, <span class="str">32</span>), justify=<span class="str">"right"</span>,
    bd=<span class="str">0</span>, bg=COLOR_DISPLAY, fg=COLOR_TEXT,
    insertbackground=COLOR_TEXT
)
display.grid(row=<span class="str">0</span>, column=<span class="str">0</span>, columnspan=<span class="str">4</span>, sticky=<span class="str">"nsew"</span>, padx=<span class="str">14</span>, pady=(<span class="str">24</span>, <span class="str">14</span>), ipady=<span class="str">10</span>)

<span class="cmt"># display বক্সে ক্যারেক্টার যোগ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">press</span>(char):
    display.insert(tk.END, char)

<span class="cmt"># সব clear করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">clear</span>():
    display.delete(<span class="str">0</span>, tk.END)

<span class="cmt"># শেষ ক্যারেক্টার মুছে ফেলার ফাংশন (⌫ ব্যাকস্পেস)</span>
<span class="kw">def</span> <span class="fn">backspace</span>():
    current = display.get()
    display.delete(<span class="str">0</span>, tk.END)
    display.insert(tk.END, current[:<span class="str">-1</span>])

<span class="cmt"># সমান (=) চাপলে হিসাব বের করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">calculate</span>():
    <span class="kw">try</span>:
        result = <span class="kw">eval</span>(display.get())
        clear()
        display.insert(tk.END, <span class="kw">str</span>(result))
    <span class="kw">except</span> Exception:
        clear()
        display.insert(tk.END, <span class="str">"Error"</span>)

<span class="cmt"># হেল্পার ফাংশন — বাটন বানানো + স্টাইল বসানো একসাথে করে দেয়</span>
<span class="kw">def</span> <span class="fn">make_button</span>(label, row, col, bg_color, text_color, command, colspan=<span class="str">1</span>):
    btn = tk.Button(
        window, text=label, font=(<span class="str">"Segoe UI"</span>, <span class="str">16</span>),
        bg=bg_color, fg=text_color, activebackground=bg_color,
        bd=<span class="str">0</span>, relief=<span class="str">"flat"</span>, command=command
    )
    btn.grid(row=row, column=col, columnspan=colspan, sticky=<span class="str">"nsew"</span>, padx=<span class="str">2</span>, pady=<span class="str">2</span>)
    <span class="kw">return</span> btn

<span class="cmt"># সারি ১: C এবং Backspace (⌫)</span>
make_button(<span class="str">"C"</span>, <span class="str">1</span>, <span class="str">0</span>, COLOR_OPER, COLOR_TEXT, clear, colspan=<span class="str">3</span>)
make_button(<span class="str">"⌫"</span>, <span class="str">1</span>, <span class="str">3</span>, COLOR_OPER, COLOR_TEXT, backspace)

<span class="cmt"># সংখ্যার বাটন (label, row, column)</span>
number_buttons = [
    (<span class="str">"7"</span>,<span class="str">2</span>,<span class="str">0</span>), (<span class="str">"8"</span>,<span class="str">2</span>,<span class="str">1</span>), (<span class="str">"9"</span>,<span class="str">2</span>,<span class="str">2</span>),
    (<span class="str">"4"</span>,<span class="str">3</span>,<span class="str">0</span>), (<span class="str">"5"</span>,<span class="str">3</span>,<span class="str">1</span>), (<span class="str">"6"</span>,<span class="str">3</span>,<span class="str">2</span>),
    (<span class="str">"1"</span>,<span class="str">4</span>,<span class="str">0</span>), (<span class="str">"2"</span>,<span class="str">4</span>,<span class="str">1</span>), (<span class="str">"3"</span>,<span class="str">4</span>,<span class="str">2</span>),
    (<span class="str">"0"</span>,<span class="str">5</span>,<span class="str">0</span>), (<span class="str">"."</span>,<span class="str">5</span>,<span class="str">1</span>),
]
<span class="kw">for</span> (label, row, col) <span class="kw">in</span> number_buttons:
    make_button(label, row, col, COLOR_NUMBER, COLOR_TEXT, <span class="kw">lambda</span> l=label: press(l))

<span class="cmt"># অপারেটর বাটন — সবগুলো ডানপাশের কলামে (column 3)</span>
operator_buttons = [(<span class="str">"/"</span>,<span class="str">2</span>), (<span class="str">"*"</span>,<span class="str">3</span>), (<span class="str">"-"</span>,<span class="str">4</span>), (<span class="str">"+"</span>,<span class="str">5</span>)]
<span class="kw">for</span> (label, row) <span class="kw">in</span> operator_buttons:
    make_button(label, row, <span class="str">3</span>, COLOR_OPER, COLOR_TEXT, <span class="kw">lambda</span> l=label: press(l))

<span class="cmt"># সমান (=) বাটন — নিচের পুরো সারি জুড়ে, teal রঙে হাইলাইট করা</span>
make_button(<span class="str">"="</span>, <span class="str">6</span>, <span class="str">0</span>, COLOR_EQUAL, COLOR_TEXT_EQ, calculate, colspan=<span class="str">4</span>)

<span class="cmt"># ইভেন্ট লুপ শুরু — এটা না দিলে উইন্ডো সাথে সাথে বন্ধ হয়ে যাবে</span>
window.mainloop()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python calculator_gui.py</div><div class="output-block">[একটা সাদা, ফোনের মতো লম্বা-সরু উইন্ডো খুলবে — উপরে বড় ডিসপ্লে, C/⌫ একই সারিতে, তারপর সংখ্যা (হালকা ধূসর) ও ডানপাশে অপারেটর কলাম, একদম নিচে "=" টিল রঙে হাইলাইট করা]</div></div>
    </div>

    <div class="note-box" style="margin-top:16px;">
      🎨 <strong>এই ভার্সনে যা পরিবর্তন হলো:</strong> সব রঙিন বাটন বাদ দিয়ে Windows Calculator-এর মতো সাদা/হালকা ধূসর ফ্লাট থিম করা হয়েছে (শুধু "=" বাটনে টিল রঙ, যেন চোখে পড়ে)। window-এর shape এখন <code>320x520</code> — চওড়ার চেয়ে উচ্চতা বেশি, তাই ফোনের ক্যালকুলেটরের মতো লম্বা-সরু দেখায়। একটা ⌫ (backspace) বাটনও যোগ করা হলো, যাতে ভুল সংখ্যা টাইপ হলে পুরোটা মুছতে না হয়।
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ Backspace (⌫) বাটন যোগ করো — শেষ ক্যারেক্টার মুছবে</div>
      <div class="extend-item">2️⃣ Keyboard দিয়েও টাইপ করা যায় এমন সাপোর্ট যোগ করো (<code>bind</code> ব্যবহার করে)</div>
      <div class="extend-item">3️⃣ theme/color পরিবর্তন করে ডার্ক মোড বানাও</div>
      <div class="extend-item">4️⃣ <code>eval()</code>-এর বদলে নিজে parser লিখে নিরাপদ ক্যালকুলেটর বানাও</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ২ ═══════════ -->
  `,
  3: `


    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>✅ To-Do List App</h2>
    <p class="subtitle">টাস্ক যোগ, দেখা, সম্পন্ন চিহ্নিত করা ও ডিলিট করা যাবে — সাথে ফাইলে সেভ থাকবে, তাই প্রোগ্রাম বন্ধ করে আবার চালালেও টাস্ক হারাবে না। দুইটা ভার্সন: টার্মিনাল ও GUI (visual)।</p>

    <div class="option-tabs">
      <button class="option-tab active" onclick="showOption(1, this)">অপশন ১ — টার্মিনাল ভার্সন</button>
      <button class="option-tab" onclick="showOption(2, this)">অপশন ২ — GUI ভার্সন (tkinter)</button>
    </div>

    <!-- ═══════════ অপশন ১: টার্মিনাল ভার্সন ═══════════ -->
    <div class="option-panel active" id="option-1">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে যা লাগবে:</strong>
      <ul>
        <li>লিস্ট (append, remove, indexing) — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>while লুপ ও for লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>ফাইল I/O (JSON দিয়ে সেভ/লোড) — <strong>মডিউল ৫</strong></li>
        <li>try-except — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>todo.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># ফাইলে টাস্ক সেভ/লোড করতে json মডিউল লাগবে</span>
<span class="kw">import</span> json
<span class="kw">import</span> os

FILENAME = <span class="str">"tasks.json"</span>

<span class="cmt"># ফাইল থেকে আগের টাস্কগুলো লোড করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">load_tasks</span>():
    <span class="cmt"># ফাইল না থাকলে খালি লিস্ট দিয়ে শুরু করবে</span>
    <span class="kw">if not</span> os.path.exists(FILENAME):
        <span class="kw">return</span> []
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"r"</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
        <span class="kw">return</span> json.load(file)

<span class="cmt"># বর্তমান টাস্ক লিস্ট ফাইলে সেভ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">save_tasks</span>(tasks):
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"w"</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
        json.dump(tasks, file, ensure_ascii=<span class="kw">False</span>, indent=<span class="str">2</span>)

<span class="cmt"># সব টাস্ক নাম্বার দিয়ে দেখানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">show_tasks</span>(tasks):
    <span class="kw">if not</span> tasks:
        print(<span class="str">"\\nকোনো টাস্ক নেই। নতুন টাস্ক যোগ করো!\\n"</span>)
        <span class="kw">return</span>

    print(<span class="str">"\\n📋 তোমার টাস্ক লিস্ট:"</span>)
    <span class="cmt"># enumerate দিয়ে ইনডেক্স + টাস্ক দুটোই একসাথে পাওয়া যাচ্ছে</span>
    <span class="kw">for</span> index, task <span class="kw">in</span> enumerate(tasks, start=<span class="str">1</span>):
        <span class="cmt"># সম্পন্ন হলে ✅, না হলে ⬜ চিহ্ন দেখাবে</span>
        status = <span class="str">"✅"</span> <span class="kw">if</span> task[<span class="str">"done"</span>] <span class="kw">else</span> <span class="str">"⬜"</span>
        print(<span class="str">f"{index}. {status} {task['title']}"</span>)
    print()

<span class="cmt"># নতুন টাস্ক যোগ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">add_task</span>(tasks):
    title = <span class="kw">input</span>(<span class="str">"নতুন টাস্ক লিখো: "</span>).strip()
    <span class="kw">if</span> title == <span class="str">""</span>:
        print(<span class="str">"❌ খালি টাস্ক যোগ করা যাবে না!\\n"</span>)
        <span class="kw">return</span>

    <span class="cmt"># প্রতিটা টাস্ক একটা dictionary — title আর done স্ট্যাটাস রাখা হচ্ছে</span>
    tasks.append({<span class="str">"title"</span>: title, <span class="str">"done"</span>: <span class="kw">False</span>})
    save_tasks(tasks)
    print(<span class="str">f"✅ '{title}' যোগ হলো!\\n"</span>)

<span class="cmt"># টাস্ক সম্পন্ন হিসেবে চিহ্নিত করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">complete_task</span>(tasks):
    show_tasks(tasks)
    <span class="kw">if not</span> tasks:
        <span class="kw">return</span>

    <span class="kw">try</span>:
        choice = <span class="kw">int</span>(<span class="kw">input</span>(<span class="str">"কোন নাম্বার সম্পন্ন হলো? "</span>))
        <span class="cmt"># লিস্টের ইনডেক্স ০ থেকে শুরু হয়, তাই ১ বিয়োগ করা হচ্ছে</span>
        tasks[choice - <span class="str">1</span>][<span class="str">"done"</span>] = <span class="kw">True</span>
        save_tasks(tasks)
        print(<span class="str">"🎉 কাজ শেষ! ভালো লাগছে না?\\n"</span>)
    <span class="cmt"># ভুল নাম্বার বা অক্ষর দিলে এখানে ধরা পড়বে</span>
    <span class="kw">except</span> (ValueError, IndexError):
        print(<span class="str">"❌ ভুল নাম্বার দিয়েছ!\\n"</span>)

<span class="cmt"># টাস্ক ডিলিট করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">delete_task</span>(tasks):
    show_tasks(tasks)
    <span class="kw">if not</span> tasks:
        <span class="kw">return</span>

    <span class="kw">try</span>:
        choice = <span class="kw">int</span>(<span class="kw">input</span>(<span class="str">"কোন নাম্বার ডিলিট করবে? "</span>))
        removed = tasks.pop(choice - <span class="str">1</span>)
        save_tasks(tasks)
        print(<span class="str">f"🗑️  '{removed['title']}' ডিলিট হলো!\\n"</span>)
    <span class="kw">except</span> (ValueError, IndexError):
        print(<span class="str">"❌ ভুল নাম্বার দিয়েছ!\\n"</span>)

<span class="cmt"># প্রোগ্রাম শুরুতে আগের সেভ করা টাস্ক লোড হচ্ছে</span>
tasks = load_tasks()

<span class="cmt"># মূল মেনু লুপ — ইউজার "5" না দেওয়া পর্যন্ত চলবে</span>
<span class="kw">while</span> <span class="kw">True</span>:
    print(<span class="str">"===== 📝 To-Do List ====="</span>)
    print(<span class="str">"1. টাস্ক দেখাও"</span>)
    print(<span class="str">"2. নতুন টাস্ক যোগ করো"</span>)
    print(<span class="str">"3. টাস্ক সম্পন্ন করো"</span>)
    print(<span class="str">"4. টাস্ক ডিলিট করো"</span>)
    print(<span class="str">"5. বের হও"</span>)

    choice = <span class="kw">input</span>(<span class="str">"তোমার পছন্দ (1-5): "</span>)

    <span class="cmt"># choice অনুযায়ী সঠিক ফাংশন কল হচ্ছে</span>
    <span class="kw">if</span> choice == <span class="str">"1"</span>:
        show_tasks(tasks)
    <span class="kw">elif</span> choice == <span class="str">"2"</span>:
        add_task(tasks)
    <span class="kw">elif</span> choice == <span class="str">"3"</span>:
        complete_task(tasks)
    <span class="kw">elif</span> choice == <span class="str">"4"</span>:
        delete_task(tasks)
    <span class="kw">elif</span> choice == <span class="str">"5"</span>:
        print(<span class="str">"বিদায়! 👋"</span>)
        <span class="kw">break</span>
    <span class="kw">else</span>:
        print(<span class="str">"❌ ভুল অপশন, আবার চেষ্টা করো!\\n"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python todo.py</div><div class="output-block">===== 📝 To-Do List =====<br>1. টাস্ক দেখাও<br>2. নতুন টাস্ক যোগ করো<br>3. টাস্ক সম্পন্ন করো<br>4. টাস্ক ডিলিট করো<br>5. বের হও<br>তোমার পছন্দ (1-5): 2<br>নতুন টাস্ক লিখো: পাইথন প্র্যাকটিস করা<br>✅ 'পাইথন প্র্যাকটিস করা' যোগ হলো!<br><br>তোমার পছন্দ (1-5): 1<br><br>📋 তোমার টাস্ক লিস্ট:<br>1. ⬜ পাইথন প্র্যাকটিস করা<br><br>তোমার পছন্দ (1-5): 3<br>কোন নাম্বার সম্পন্ন হলো? 1<br>🎉 কাজ শেষ! ভালো লাগছে না?</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা টাস্কে deadline (তারিখ) যোগ করো</div>
      <div class="extend-item">2️⃣ Priority (High/Medium/Low) যোগ করো ও priority অনুযায়ী sort করো</div>
      <div class="extend-item">3️⃣ Category/Tag যোগ করো (কাজ, পড়াশোনা, ব্যক্তিগত)</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ১ ═══════════ -->

    <!-- ═══════════ অপশন ২: GUI ভার্সন (tkinter) ═══════════ -->
    <div class="option-panel" id="option-2">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে অতিরিক্ত যা লাগবে:</strong>
      <ul>
        <li>tkinter মডিউল (বিল্ট-ইন, আলাদা ইনস্টলের দরকার নেই)</li>
        <li>Listbox ও Entry widget ব্যবহার</li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>মনে রাখো:</strong> এই কোড ব্রাউজারে চলবে না — নিজের কম্পিউটারে <code>python todo_gui.py</code> কমান্ড দিয়ে রান করতে হবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>todo_gui.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># GUI-এর জন্য tkinter, ফাইল সেভের জন্য json</span>
<span class="kw">import</span> tkinter <span class="kw">as</span> tk
<span class="kw">import</span> json
<span class="kw">import</span> os

FILENAME = <span class="str">"tasks.json"</span>

<span class="cmt"># আগের টাস্ক লোড করা, না থাকলে খালি লিস্ট</span>
<span class="kw">def</span> <span class="fn">load_tasks</span>():
    <span class="kw">if not</span> os.path.exists(FILENAME):
        <span class="kw">return</span> []
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"r"</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> f:
        <span class="kw">return</span> json.load(f)

<span class="cmt"># টাস্ক লিস্ট ফাইলে সেভ করা</span>
<span class="kw">def</span> <span class="fn">save_tasks</span>():
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"w"</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> f:
        json.dump(tasks, f, ensure_ascii=<span class="kw">False</span>, indent=<span class="str">2</span>)

tasks = load_tasks()

<span class="cmt"># মূল উইন্ডো — সাদা, ফোনের মতো লম্বা শেপ</span>
window = tk.Tk()
window.title(<span class="str">"To-Do List"</span>)
window.configure(bg=<span class="str">"#FFFFFF"</span>)
window.geometry(<span class="str">"340x520"</span>)
window.minsize(<span class="str">300</span>, <span class="str">460</span>)

COLOR_ACCENT = <span class="str">"#008575"</span>
COLOR_TEXT   = <span class="str">"#1A1A1A"</span>
COLOR_MUTED  = <span class="str">"#F5F5F5"</span>

<span class="cmt"># উপরে নতুন টাস্ক লেখার ইনপুট বক্স</span>
entry = tk.Entry(window, font=(<span class="str">"Segoe UI"</span>, <span class="str">13</span>), bd=<span class="str">1</span>, relief=<span class="str">"solid"</span>)
entry.pack(fill=<span class="str">"x"</span>, padx=<span class="str">14</span>, pady=(<span class="str">16</span>, <span class="str">8</span>), ipady=<span class="str">6</span>)

<span class="cmt"># সব টাস্ক দেখানোর জন্য Listbox</span>
task_listbox = tk.Listbox(
    window, font=(<span class="str">"Segoe UI"</span>, <span class="str">12</span>), bd=<span class="str">0</span>,
    bg=COLOR_MUTED, selectbackground=COLOR_ACCENT, activestyle=<span class="str">"none"</span>
)
task_listbox.pack(fill=<span class="str">"both"</span>, expand=<span class="kw">True</span>, padx=<span class="str">14</span>, pady=<span class="str">8</span>)

<span class="cmt"># Listbox-এ সব টাস্ক আবার নতুন করে দেখানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">refresh_list</span>():
    task_listbox.delete(<span class="str">0</span>, tk.END)
    <span class="kw">for</span> task <span class="kw">in</span> tasks:
        status = <span class="str">"✅"</span> <span class="kw">if</span> task[<span class="str">"done"</span>] <span class="kw">else</span> <span class="str">"⬜"</span>
        task_listbox.insert(tk.END, <span class="str">f"{status} {task['title']}"</span>)

<span class="cmt"># "যোগ করো" বাটনের কাজ</span>
<span class="kw">def</span> <span class="fn">add_task</span>():
    title = entry.get().strip()
    <span class="kw">if</span> title == <span class="str">""</span>:
        <span class="kw">return</span>
    tasks.append({<span class="str">"title"</span>: title, <span class="str">"done"</span>: <span class="kw">False</span>})
    save_tasks()
    entry.delete(<span class="str">0</span>, tk.END)
    refresh_list()

<span class="cmt"># সিলেক্ট করা টাস্ক সম্পন্ন/অসম্পন্ন টগল করা</span>
<span class="kw">def</span> <span class="fn">toggle_done</span>():
    selection = task_listbox.curselection()
    <span class="kw">if not</span> selection:
        <span class="kw">return</span>
    index = selection[<span class="str">0</span>]
    tasks[index][<span class="str">"done"</span>] = <span class="kw">not</span> tasks[index][<span class="str">"done"</span>]
    save_tasks()
    refresh_list()

<span class="cmt"># সিলেক্ট করা টাস্ক ডিলিট করা</span>
<span class="kw">def</span> <span class="fn">delete_task</span>():
    selection = task_listbox.curselection()
    <span class="kw">if not</span> selection:
        <span class="kw">return</span>
    index = selection[<span class="str">0</span>]
    tasks.pop(index)
    save_tasks()
    refresh_list()

<span class="cmt"># নিচের তিনটা বাটন রাখার জন্য একটা frame</span>
button_frame = tk.Frame(window, bg=<span class="str">"#FFFFFF"</span>)
button_frame.pack(fill=<span class="str">"x"</span>, padx=<span class="str">14</span>, pady=(<span class="str">4</span>, <span class="str">16</span>))

tk.Button(button_frame, text=<span class="str">"➕ যোগ করো"</span>, bg=COLOR_ACCENT, fg=<span class="str">"white"</span>,
          bd=<span class="str">0</span>, command=add_task).pack(side=<span class="str">"left"</span>, expand=<span class="kw">True</span>, fill=<span class="str">"x"</span>, padx=<span class="str">2</span>, ipady=<span class="str">6</span>)
tk.Button(button_frame, text=<span class="str">"✅ সম্পন্ন"</span>, bg=COLOR_MUTED, fg=COLOR_TEXT,
          bd=<span class="str">0</span>, command=toggle_done).pack(side=<span class="str">"left"</span>, expand=<span class="kw">True</span>, fill=<span class="str">"x"</span>, padx=<span class="str">2</span>, ipady=<span class="str">6</span>)
tk.Button(button_frame, text=<span class="str">"🗑️ ডিলিট"</span>, bg=COLOR_MUTED, fg=COLOR_TEXT,
          bd=<span class="str">0</span>, command=delete_task).pack(side=<span class="str">"left"</span>, expand=<span class="kw">True</span>, fill=<span class="str">"x"</span>, padx=<span class="str">2</span>, ipady=<span class="str">6</span>)

<span class="cmt"># শুরুতেই আগের টাস্কগুলো লিস্টে দেখানো হচ্ছে</span>
refresh_list()

window.mainloop()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python todo_gui.py</div><div class="output-block">[একটা সাদা, লম্বা-সরু উইন্ডো খুলবে — উপরে টাস্ক লেখার বক্স, মাঝে টাস্ক লিস্ট, নিচে তিনটা বাটন: ➕ যোগ করো / ✅ সম্পন্ন / 🗑️ ডিলিট]</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ ডাবল-ক্লিক করলেই সম্পন্ন টগল হয়ে যাক এমন সুবিধা যোগ করো</div>
      <div class="extend-item">2️⃣ সম্পন্ন টাস্কগুলো strikethrough (কাটা দাগ) দেখাও</div>
      <div class="extend-item">3️⃣ Enter চাপলেই "যোগ করো" কাজ করে এমন keyboard shortcut যোগ করো</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ২ ═══════════ -->
  `,
  4: `


    <div class="project-badges"><span class="badge-level">বিগিনার</span></div>
    <h2>🔐 Password Generator</h2>
    <p class="subtitle">ইউজারের পছন্দমতো length ও character type (letter/digit/symbol) দিয়ে র‍্যান্ডম, সিকিউর পাসওয়ার্ড তৈরি করবে। দুইটা ভার্সন: টার্মিনাল ও GUI (visual)।</p>

    <div class="option-tabs">
      <button class="option-tab active" onclick="showOption(1, this)">অপশন ১ — টার্মিনাল ভার্সন</button>
      <button class="option-tab" onclick="showOption(2, this)">অপশন ২ — GUI ভার্সন (tkinter)</button>
    </div>

    <!-- ═══════════ অপশন ১: টার্মিনাল ভার্সন ═══════════ -->
    <div class="option-panel active" id="option-1">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে যা লাগবে:</strong>
      <ul>
        <li>স্ট্রিং ও লিস্ট — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>for লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>random ও string মডিউল — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>password_generator.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># random সিলেকশনের জন্য, string থেকে letter/digit/symbol পুল পাওয়ার জন্য</span>
<span class="kw">import</span> random
<span class="kw">import</span> string

<span class="cmt"># পাসওয়ার্ড তৈরির মূল ফাংশন</span>
<span class="kw">def</span> <span class="fn">generate_password</span>(length, use_upper, use_digits, use_symbols):
    <span class="cmt"># ছোট হাতের অক্ষর সবসময় থাকবে</span>
    pool = string.ascii_lowercase

    <span class="cmt"># ইউজারের পছন্দ অনুযায়ী pool-এ আরও ক্যারেক্টার যোগ হচ্ছে</span>
    <span class="kw">if</span> use_upper:
        pool += string.ascii_uppercase
    <span class="kw">if</span> use_digits:
        pool += string.digits
    <span class="kw">if</span> use_symbols:
        pool += string.punctuation

    <span class="cmt"># pool থেকে length সংখ্যক ক্যারেক্টার এলোমেলোভাবে বেছে জোড়া লাগানো হচ্ছে</span>
    password = <span class="str">""</span>.join(random.choice(pool) <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(length))
    <span class="kw">return</span> password

<span class="cmt"># পাসওয়ার্ড কতটা শক্তিশালী তা যাচাই করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">check_strength</span>(password):
    score = <span class="str">0</span>

    <span class="cmt"># দৈর্ঘ্য বেশি হলে পয়েন্ট বাড়বে</span>
    <span class="kw">if</span> <span class="kw">len</span>(password) >= <span class="str">12</span>:
        score += <span class="str">2</span>
    <span class="kw">elif</span> <span class="kw">len</span>(password) >= <span class="str">8</span>:
        score += <span class="str">1</span>

    <span class="cmt"># বড় হাতের অক্ষর, সংখ্যা, চিহ্ন থাকলে আলাদা পয়েন্ট</span>
    <span class="kw">if</span> <span class="kw">any</span>(c.isupper() <span class="kw">for</span> c <span class="kw">in</span> password):
        score += <span class="str">1</span>
    <span class="kw">if</span> <span class="kw">any</span>(c.isdigit() <span class="kw">for</span> c <span class="kw">in</span> password):
        score += <span class="str">1</span>
    <span class="kw">if</span> <span class="kw">any</span>(c <span class="kw">in</span> string.punctuation <span class="kw">for</span> c <span class="kw">in</span> password):
        score += <span class="str">1</span>

    <span class="cmt"># স্কোর অনুযায়ী strength label ঠিক করা হচ্ছে</span>
    <span class="kw">if</span> score >= <span class="str">4</span>:
        <span class="kw">return</span> <span class="str">"💪 শক্তিশালী"</span>
    <span class="kw">elif</span> score >= <span class="str">2</span>:
        <span class="kw">return</span> <span class="str">"🙂 মোটামুটি"</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"⚠️ দুর্বল"</span>

print(<span class="str">"🔐 পাসওয়ার্ড জেনারেটর"</span>)

<span class="cmt"># length ভুল দিলে বারবার জিজ্ঞেস করার জন্য while লুপ</span>
<span class="kw">while</span> <span class="kw">True</span>:
    <span class="kw">try</span>:
        length = <span class="kw">int</span>(<span class="kw">input</span>(<span class="str">"পাসওয়ার্ডের দৈর্ঘ্য কত হবে? (৪-৫০): "</span>))
        <span class="kw">if</span> <span class="str">4</span> <= length <= <span class="str">50</span>:
            <span class="kw">break</span>
        print(<span class="str">"❌ ৪ থেকে ৫০-এর মধ্যে একটা সংখ্যা দাও।"</span>)
    <span class="kw">except</span> ValueError:
        print(<span class="str">"❌ একটা সঠিক সংখ্যা দাও।"</span>)

<span class="cmt"># y/n প্রশ্নগুলো — "y" দিলে True, নাহলে False</span>
use_upper   = <span class="kw">input</span>(<span class="str">"বড় হাতের অক্ষর থাকবে? (y/n): "</span>).lower() == <span class="str">"y"</span>
use_digits  = <span class="kw">input</span>(<span class="str">"সংখ্যা থাকবে? (y/n): "</span>).lower() == <span class="str">"y"</span>
use_symbols = <span class="kw">input</span>(<span class="str">"বিশেষ চিহ্ন (@#$%) থাকবে? (y/n): "</span>).lower() == <span class="str">"y"</span>

<span class="cmt"># উপরের ফাংশন দুটো কল করে পাসওয়ার্ড ও তার strength বের করা হচ্ছে</span>
password = generate_password(length, use_upper, use_digits, use_symbols)
strength = check_strength(password)

print(<span class="str">f"\\n✨ তোমার পাসওয়ার্ড: {password}"</span>)
print(<span class="str">f"শক্তি: {strength}"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python password_generator.py</div><div class="output-block">🔐 পাসওয়ার্ড জেনারেটর<br>পাসওয়ার্ডের দৈর্ঘ্য কত হবে? (৪-৫০): 14<br>বড় হাতের অক্ষর থাকবে? (y/n): y<br>সংখ্যা থাকবে? (y/n): y<br>বিশেষ চিহ্ন (@#$%) থাকবে? (y/n): y<br><br>✨ তোমার পাসওয়ার্ড: qT4#mK9!zR2@wL<br>শক্তি: 💪 শক্তিশালী</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একসাথে একাধিক পাসওয়ার্ড জেনারেট করার অপশন যোগ করো</div>
      <div class="extend-item">2️⃣ পাসওয়ার্ড clipboard-এ কপি করার ফিচার যোগ করো (<code>pyperclip</code> লাইব্রেরি দিয়ে)</div>
      <div class="extend-item">3️⃣ Same character বারবার (aaa) যেন না আসে সেটা নিয়ন্ত্রণ করো</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ১ ═══════════ -->

    <!-- ═══════════ অপশন ২: GUI ভার্সন (tkinter) ═══════════ -->
    <div class="option-panel" id="option-2">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে অতিরিক্ত যা লাগবে:</strong>
      <ul>
        <li>tkinter মডিউল (বিল্ট-ইন, আলাদা ইনস্টলের দরকার নেই)</li>
        <li>Checkbutton ও IntVar/StringVar variable</li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>মনে রাখো:</strong> এই কোড ব্রাউজারে চলবে না — নিজের কম্পিউটারে <code>python password_gui.py</code> কমান্ড দিয়ে রান করতে হবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>password_gui.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># GUI-এর জন্য tkinter, পাসওয়ার্ড তৈরির জন্য random ও string</span>
<span class="kw">import</span> tkinter <span class="kw">as</span> tk
<span class="kw">import</span> random
<span class="kw">import</span> string

<span class="cmt"># মূল উইন্ডো</span>
window = tk.Tk()
window.title(<span class="str">"পাসওয়ার্ড জেনারেটর"</span>)
window.configure(bg=<span class="str">"#FFFFFF"</span>)
window.geometry(<span class="str">"320x440"</span>)
window.minsize(<span class="str">300</span>, <span class="str">420</span>)

COLOR_ACCENT = <span class="str">"#008575"</span>
COLOR_TEXT   = <span class="str">"#1A1A1A"</span>
COLOR_MUTED  = <span class="str">"#F5F5F5"</span>

<span class="cmt"># ✅/⬜ চেকবক্সের অবস্থা মনে রাখার জন্য tkinter-এর নিজস্ব ভেরিয়েবল টাইপ</span>
use_upper   = tk.BooleanVar(value=<span class="kw">True</span>)
use_digits  = tk.BooleanVar(value=<span class="kw">True</span>)
use_symbols = tk.BooleanVar(value=<span class="kw">False</span>)

tk.Label(window, text=<span class="str">"🔐 পাসওয়ার্ড জেনারেটর"</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">15</span>, <span class="str">"bold"</span>),
         bg=<span class="str">"#FFFFFF"</span>, fg=COLOR_TEXT).pack(pady=(<span class="str">18</span>, <span class="str">10</span>))

<span class="cmt"># length ঠিক করার স্লাইডার</span>
tk.Label(window, text=<span class="str">"দৈর্ঘ্য:"</span>, bg=<span class="str">"#FFFFFF"</span>, fg=COLOR_TEXT).pack()
length_slider = tk.Scale(window, from_=<span class="str">4</span>, to=<span class="str">32</span>, orient=<span class="str">"horizontal"</span>,
                          bg=<span class="str">"#FFFFFF"</span>, highlightthickness=<span class="str">0</span>)
length_slider.set(<span class="str">12</span>)
length_slider.pack(fill=<span class="str">"x"</span>, padx=<span class="str">24</span>)

<span class="cmt"># তিনটা চেকবক্স — বড় হাতের অক্ষর, সংখ্যা, চিহ্ন</span>
tk.Checkbutton(window, text=<span class="str">"বড় হাতের অক্ষর (A-Z)"</span>, variable=use_upper,
               bg=<span class="str">"#FFFFFF"</span>).pack(anchor=<span class="str">"w"</span>, padx=<span class="str">24</span>, pady=<span class="str">2</span>)
tk.Checkbutton(window, text=<span class="str">"সংখ্যা (0-9)"</span>, variable=use_digits,
               bg=<span class="str">"#FFFFFF"</span>).pack(anchor=<span class="str">"w"</span>, padx=<span class="str">24</span>, pady=<span class="str">2</span>)
tk.Checkbutton(window, text=<span class="str">"বিশেষ চিহ্ন (@#$%)"</span>, variable=use_symbols,
               bg=<span class="str">"#FFFFFF"</span>).pack(anchor=<span class="str">"w"</span>, padx=<span class="str">24</span>, pady=<span class="str">2</span>)

<span class="cmt"># তৈরি হওয়া পাসওয়ার্ড দেখানোর বক্স</span>
result_var = tk.StringVar()
result_entry = tk.Entry(window, textvariable=result_var, font=(<span class="str">"Consolas"</span>, <span class="str">14</span>),
                         justify=<span class="str">"center"</span>, bd=<span class="str">1</span>, relief=<span class="str">"solid"</span>, state=<span class="str">"readonly"</span>)
result_entry.pack(fill=<span class="str">"x"</span>, padx=<span class="str">24</span>, pady=(<span class="str">16</span>, <span class="str">10</span>), ipady=<span class="str">8</span>)

<span class="cmt"># "Generate" বাটন চাপলে চলা ফাংশন</span>
<span class="kw">def</span> <span class="fn">generate</span>():
    pool = string.ascii_lowercase
    <span class="kw">if</span> use_upper.get():
        pool += string.ascii_uppercase
    <span class="kw">if</span> use_digits.get():
        pool += string.digits
    <span class="kw">if</span> use_symbols.get():
        pool += string.punctuation

    length = length_slider.get()
    password = <span class="str">""</span>.join(random.choice(pool) <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(length))

    <span class="cmt"># readonly বক্সে লেখার আগে সাময়িকভাবে normal করে নিতে হয়</span>
    result_entry.config(state=<span class="str">"normal"</span>)
    result_var.set(password)
    result_entry.config(state=<span class="str">"readonly"</span>)

tk.Button(window, text=<span class="str">"✨ Generate করো"</span>, bg=COLOR_ACCENT, fg=<span class="str">"white"</span>,
          bd=<span class="str">0</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">12</span>), command=generate
          ).pack(fill=<span class="str">"x"</span>, padx=<span class="str">24</span>, pady=<span class="str">6</span>, ipady=<span class="str">8</span>)

window.mainloop()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python password_gui.py</div><div class="output-block">[একটা সাদা উইন্ডো খুলবে — উপরে title, একটা length slider, তিনটা চেকবক্স, ফলাফল দেখানোর বক্স, এবং নিচে টিল রঙের "Generate করো" বাটন]</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ "কপি করো" বাটন যোগ করো (<code>window.clipboard_append()</code> ব্যবহার করে)</div>
      <div class="extend-item">2️⃣ পাসওয়ার্ডের strength (দুর্বল/শক্তিশালী) কালার বার দিয়ে দেখাও</div>
      <div class="extend-item">3️⃣ একসাথে একাধিক পাসওয়ার্ড জেনারেট করে লিস্টে দেখাও</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ২ ═══════════ -->
  `,
  5: `


    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>⭕ Tic-Tac-Toe Game</h2>
    <p class="subtitle">দুই খেলোয়াড় (X এবং O) পালা করে বোর্ডে চিহ্ন বসাবে — একটানা ৩টা চিহ্ন মিললেই জয়! দুইটা ভার্সন: টার্মিনাল ও GUI (visual)।</p>

    <div class="option-tabs">
      <button class="option-tab active" onclick="showOption(1, this)">অপশন ১ — টার্মিনাল ভার্সন</button>
      <button class="option-tab" onclick="showOption(2, this)">অপশন ২ — GUI ভার্সন (tkinter)</button>
    </div>

    <!-- ═══════════ অপশন ১: টার্মিনাল ভার্সন ═══════════ -->
    <div class="option-panel active" id="option-1">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে যা লাগবে:</strong>
      <ul>
        <li>লিস্ট (2D লিস্ট / বোর্ড রিপ্রেজেন্টেশন) — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>নেস্টেড লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>tic_tac_toe.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># বোর্ড শুরুতে ৯টা খালি ঘর ("1" থেকে "9" — position বোঝানোর জন্য)</span>
board = [<span class="str">str</span>(i) <span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(<span class="str">1</span>, <span class="str">10</span>)]

<span class="cmt"># বোর্ড স্ক্রিনে সুন্দর করে দেখানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">print_board</span>():
    print()
    <span class="kw">for</span> row <span class="kw">in</span> <span class="kw">range</span>(<span class="str">0</span>, <span class="str">9</span>, <span class="str">3</span>):
        <span class="cmt"># প্রতি সারিতে ৩টা ঘর, মাঝে | দিয়ে আলাদা</span>
        print(<span class="str">f" {board[row]} | {board[row+1]} | {board[row+2]} "</span>)
        <span class="kw">if</span> row < <span class="str">6</span>:
            print(<span class="str">"---+---+---"</span>)
    print()

<span class="cmt"># জয়ের সব সম্ভাব্য combination (row, column, diagonal)</span>
WIN_COMBOS = [
    (<span class="str">0</span>,<span class="str">1</span>,<span class="str">2</span>), (<span class="str">3</span>,<span class="str">4</span>,<span class="str">5</span>), (<span class="str">6</span>,<span class="str">7</span>,<span class="str">8</span>),   <span class="cmt"># সারি</span>
    (<span class="str">0</span>,<span class="str">3</span>,<span class="str">6</span>), (<span class="str">1</span>,<span class="str">4</span>,<span class="str">7</span>), (<span class="str">2</span>,<span class="str">5</span>,<span class="str">8</span>),   <span class="cmt"># কলাম</span>
    (<span class="str">0</span>,<span class="str">4</span>,<span class="str">8</span>), (<span class="str">2</span>,<span class="str">4</span>,<span class="str">6</span>),             <span class="cmt"># কর্ণ</span>
]

<span class="cmt"># কেউ জিতেছে কিনা চেক করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">check_winner</span>(player):
    <span class="cmt"># প্রতিটা combination-এ player এর চিহ্ন আছে কিনা চেক করা হচ্ছে</span>
    <span class="kw">for</span> (a, b, c) <span class="kw">in</span> WIN_COMBOS:
        <span class="kw">if</span> board[a] == board[b] == board[c] == player:
            <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="cmt"># বোর্ডের সব ঘর ভরে গেছে কিনা (ড্র হলো কিনা) চেক করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">is_board_full</span>():
    <span class="cmt"># কোনো ঘরে যদি এখনো সংখ্যা (1-9) থেকে যায়, তাহলে বোর্ড ভরেনি</span>
    <span class="kw">return</span> <span class="kw">all</span>(cell <span class="kw">in</span> (<span class="str">"X"</span>, <span class="str">"O"</span>) <span class="kw">for</span> cell <span class="kw">in</span> board)

print(<span class="str">"⭕ Tic-Tac-Toe — দুইজন খেলোয়াড়ের গেম"</span>)
print_board()

current_player = <span class="str">"X"</span>   <span class="cmt"># X সবসময় প্রথমে শুরু করবে</span>
game_over = <span class="kw">False</span>

<span class="cmt"># গেম শেষ (জয়/ড্র) না হওয়া পর্যন্ত চলবে</span>
<span class="kw">while not</span> game_over:

    <span class="cmt"># ইউজারকে জায়গা জিজ্ঞেস করা, ভুল ইনপুট হলে আবার জিজ্ঞেস করা হচ্ছে</span>
    <span class="kw">try</span>:
        move = <span class="kw">int</span>(<span class="kw">input</span>(<span class="str">f"খেলোয়াড় {current_player}, কোথায় বসাবে? (1-9): "</span>))
        <span class="kw">if</span> move < <span class="str">1</span> <span class="kw">or</span> move > <span class="str">9</span>:
            print(<span class="str">"❌ ১ থেকে ৯-এর মধ্যে সংখ্যা দাও!"</span>)
            <span class="kw">continue</span>

        <span class="cmt"># ঘর আগে থেকেই ভরা কিনা চেক (X বা O বসানো থাকলে)</span>
        <span class="kw">if</span> board[move - <span class="str">1</span>] <span class="kw">in</span> (<span class="str">"X"</span>, <span class="str">"O"</span>):
            print(<span class="str">"❌ এই ঘরে আগে থেকেই চিহ্ন বসানো আছে!"</span>)
            <span class="kw">continue</span>

    <span class="kw">except</span> ValueError:
        print(<span class="str">"❌ একটা সঠিক সংখ্যা দাও!"</span>)
        <span class="kw">continue</span>

    <span class="cmt"># বোর্ডে current player-এর চিহ্ন বসানো হচ্ছে</span>
    board[move - <span class="str">1</span>] = current_player
    print_board()

    <span class="cmt"># প্রতিটা চাল দেওয়ার পর জয়/ড্র চেক করা হচ্ছে</span>
    <span class="kw">if</span> check_winner(current_player):
        print(<span class="str">f"🎉 খেলোয়াড় {current_player} জিতে গেছে!"</span>)
        game_over = <span class="kw">True</span>
    <span class="kw">elif</span> is_board_full():
        print(<span class="str">"🤝 খেলা ড্র হয়েছে!"</span>)
        game_over = <span class="kw">True</span>
    <span class="kw">else</span>:
        <span class="cmt"># পালা বদল — X হলে O, O হলে X</span>
        current_player = <span class="str">"O"</span> <span class="kw">if</span> current_player == <span class="str">"X"</span> <span class="kw">else</span> <span class="str">"X"</span></code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python tic_tac_toe.py</div><div class="output-block">⭕ Tic-Tac-Toe — দুইজন খেলোয়াড়ের গেম<br><br> 1 | 2 | 3 <br>---+---+---<br> 4 | 5 | 6 <br>---+---+---<br> 7 | 8 | 9 <br><br>খেলোয়াড় X, কোথায় বসাবে? (1-9): 5<br><br> 1 | 2 | 3 <br>---+---+---<br> 4 | X | 6 <br>---+---+---<br> 7 | 8 | 9 <br><br>খেলোয়াড় O, কোথায় বসাবে? (1-9): 1<br>...<br>🎉 খেলোয়াড় X জিতে গেছে!</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একজনের বদলে কম্পিউটারের বিরুদ্ধে খেলার অপশন যোগ করো (Simple AI)</div>
      <div class="extend-item">2️⃣ স্কোরবোর্ড যোগ করো — কে কয়বার জিতল সেটা মনে রাখো</div>
      <div class="extend-item">3️⃣ বোর্ডের সাইজ 4x4 বা 5x5 করে গেম আরও কঠিন বানাও</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ১ ═══════════ -->

    <!-- ═══════════ অপশন ২: GUI ভার্সন (tkinter) ═══════════ -->
    <div class="option-panel" id="option-2">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে অতিরিক্ত যা লাগবে:</strong>
      <ul>
        <li>tkinter মডিউল (বিল্ট-ইন, আলাদা ইনস্টলের দরকার নেই)</li>
        <li>নেস্টেড লিস্টে বাটন রেফারেন্স রাখা</li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>মনে রাখো:</strong> এই কোড ব্রাউজারে চলবে না — নিজের কম্পিউটারে <code>python tic_tac_toe_gui.py</code> কমান্ড দিয়ে রান করতে হবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>tic_tac_toe_gui.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">import</span> tkinter <span class="kw">as</span> tk

<span class="cmt"># মূল উইন্ডো</span>
window = tk.Tk()
window.title(<span class="str">"Tic-Tac-Toe"</span>)
window.configure(bg=<span class="str">"#FFFFFF"</span>)

current_player = <span class="str">"X"</span>
<span class="cmt"># প্রতিটা ঘরের বাটন অবজেক্ট রাখার জন্য একটা 3x3 লিস্ট</span>
buttons = [[<span class="kw">None</span> <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(<span class="str">3</span>)] <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(<span class="str">3</span>)]

status_label = tk.Label(window, text=<span class="str">"পালা: X"</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">14</span>, <span class="str">"bold"</span>), bg=<span class="str">"#FFFFFF"</span>)
status_label.grid(row=<span class="str">0</span>, column=<span class="str">0</span>, columnspan=<span class="str">3</span>, pady=(<span class="str">16</span>, <span class="str">10</span>))

WIN_COMBOS = [
    (<span class="str">(0,0)</span>,<span class="str">(0,1)</span>,<span class="str">(0,2)</span>), (<span class="str">(1,0)</span>,<span class="str">(1,1)</span>,<span class="str">(1,2)</span>), (<span class="str">(2,0)</span>,<span class="str">(2,1)</span>,<span class="str">(2,2)</span>),
    (<span class="str">(0,0)</span>,<span class="str">(1,0)</span>,<span class="str">(2,0)</span>), (<span class="str">(0,1)</span>,<span class="str">(1,1)</span>,<span class="str">(2,1)</span>), (<span class="str">(0,2)</span>,<span class="str">(1,2)</span>,<span class="str">(2,2)</span>),
    (<span class="str">(0,0)</span>,<span class="str">(1,1)</span>,<span class="str">(2,2)</span>), (<span class="str">(0,2)</span>,<span class="str">(1,1)</span>,<span class="str">(2,0)</span>),
]

<span class="cmt"># কেউ জিতেছে কিনা চেক করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">check_winner</span>(player):
    <span class="kw">for</span> combo <span class="kw">in</span> WIN_COMBOS:
        <span class="kw">if</span> <span class="kw">all</span>(buttons[r][c][<span class="str">"text"</span>] == player <span class="kw">for</span> (r, c) <span class="kw">in</span> combo):
            <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="cmt"># একটা ঘরে ক্লিক করলে এই ফাংশন চলবে</span>
<span class="kw">def</span> <span class="fn">on_click</span>(row, col):
    <span class="kw">global</span> current_player

    <span class="cmt"># ঘর আগে থেকেই ভরা থাকলে কিছু হবে না</span>
    <span class="kw">if</span> buttons[row][col][<span class="str">"text"</span>] != <span class="str">""</span>:
        <span class="kw">return</span>

    buttons[row][col][<span class="str">"text"</span>] = current_player

    <span class="kw">if</span> check_winner(current_player):
        status_label.config(text=<span class="str">f"🎉 {current_player} জিতে গেছে!"</span>)
        disable_all_buttons()
        <span class="kw">return</span>

    <span class="cmt"># সব ঘর ভরে গেলে ও কেউ না জিতলে ড্র</span>
    <span class="kw">if</span> <span class="kw">all</span>(buttons[r][c][<span class="str">"text"</span>] != <span class="str">""</span> <span class="kw">for</span> r <span class="kw">in</span> <span class="kw">range</span>(<span class="str">3</span>) <span class="kw">for</span> c <span class="kw">in</span> <span class="kw">range</span>(<span class="str">3</span>)):
        status_label.config(text=<span class="str">"🤝 ড্র হয়েছে!"</span>)
        <span class="kw">return</span>

    <span class="cmt"># পালা বদল</span>
    current_player = <span class="str">"O"</span> <span class="kw">if</span> current_player == <span class="str">"X"</span> <span class="kw">else</span> <span class="str">"X"</span>
    status_label.config(text=<span class="str">f"পালা: {current_player}"</span>)

<span class="cmt"># জেতার পর সব বাটন disable করে দেওয়ার ফাংশন</span>
<span class="kw">def</span> <span class="fn">disable_all_buttons</span>():
    <span class="kw">for</span> row <span class="kw">in</span> buttons:
        <span class="kw">for</span> btn <span class="kw">in</span> row:
            btn.config(state=<span class="str">"disabled"</span>)

<span class="cmt"># ৩x৩ বাটনের গ্রিড তৈরি করা হচ্ছে</span>
<span class="kw">for</span> row <span class="kw">in</span> <span class="kw">range</span>(<span class="str">3</span>):
    <span class="kw">for</span> col <span class="kw">in</span> <span class="kw">range</span>(<span class="str">3</span>):
        btn = tk.Button(
            window, text=<span class="str">""</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">24</span>, <span class="str">"bold"</span>),
            width=<span class="str">4</span>, height=<span class="str">2</span>, bg=<span class="str">"#F5F5F5"</span>, bd=<span class="str">1</span>,
            command=<span class="kw">lambda</span> r=row, c=col: on_click(r, c)
        )
        btn.grid(row=row + <span class="str">1</span>, column=col, padx=<span class="str">3</span>, pady=<span class="str">3</span>)
        buttons[row][col] = btn

<span class="cmt"># নতুন খেলা শুরু করার ফাংশন — সব ঘর খালি ও enable করে দেয়</span>
<span class="kw">def</span> <span class="fn">reset_game</span>():
    <span class="kw">global</span> current_player
    current_player = <span class="str">"X"</span>
    status_label.config(text=<span class="str">"পালা: X"</span>)
    <span class="kw">for</span> row <span class="kw">in</span> buttons:
        <span class="kw">for</span> btn <span class="kw">in</span> row:
            btn.config(text=<span class="str">""</span>, state=<span class="str">"normal"</span>)

tk.Button(window, text=<span class="str">"🔄 নতুন খেলা"</span>, bg=<span class="str">"#008575"</span>, fg=<span class="str">"white"</span>, bd=<span class="str">0</span>,
          command=reset_game).grid(row=<span class="str">4</span>, column=<span class="str">0</span>, columnspan=<span class="str">3</span>, sticky=<span class="str">"nsew"</span>, padx=<span class="str">4</span>, pady=<span class="str">12</span>, ipady=<span class="str">6</span>)

window.mainloop()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python tic_tac_toe_gui.py</div><div class="output-block">[একটা সাদা উইন্ডো খুলবে — উপরে "পালা: X" লেখা, মাঝে ৩x৩ ক্লিকযোগ্য বাটনের বোর্ড, নিচে টিল রঙের "🔄 নতুন খেলা" বাটন]</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ X এবং O-কে আলাদা রঙে দেখাও (X নীল, O লাল)</div>
      <div class="extend-item">2️⃣ জেতার লাইনটা হাইলাইট করে দেখাও</div>
      <div class="extend-item">3️⃣ স্কোরবোর্ড যোগ করো (Label দিয়ে X ও O কতবার জিতল)</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ২ ═══════════ -->
  `,
  6: `


    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>💰 Expense Tracker</h2>
    <p class="subtitle">দৈনিক খরচ লগ করা, ক্যাটাগরি অনুযায়ী ভাগ করা ও মোট হিসাব বের করা — CSV ফাইলে স্থায়ীভাবে সেভ থাকবে। দুইটা ভার্সন: টার্মিনাল ও GUI (visual)।</p>

    <div class="option-tabs">
      <button class="option-tab active" onclick="showOption(1, this)">অপশন ১ — টার্মিনাল ভার্সন</button>
      <button class="option-tab" onclick="showOption(2, this)">অপশন ২ — GUI ভার্সন (tkinter)</button>
    </div>

    <!-- ═══════════ অপশন ১: টার্মিনাল ভার্সন ═══════════ -->
    <div class="option-panel active" id="option-1">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে যা লাগবে:</strong>
      <ul>
        <li>লিস্ট ও ডিকশনারি — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>for/while লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>CSV ফাইল I/O — <strong>মডিউল ৫</strong></li>
        <li>try-except — <strong>মডিউল ৬</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>expense_tracker.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># CSV ফাইলে সেভ/লোডের জন্য</span>
<span class="kw">import</span> csv
<span class="kw">import</span> os

FILENAME = <span class="str">"expenses.csv"</span>

<span class="cmt"># ফাইল থেকে আগের সব খরচ লোড করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">load_expenses</span>():
    <span class="kw">if not</span> os.path.exists(FILENAME):
        <span class="kw">return</span> []

    expenses = []
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"r"</span>, newline=<span class="str">""</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
        reader = csv.DictReader(file)
        <span class="kw">for</span> row <span class="kw">in</span> reader:
            <span class="cmt"># CSV-তে সবকিছু string আকারে থাকে, তাই amount আবার float-এ কনভার্ট করা হচ্ছে</span>
            row[<span class="str">"amount"</span>] = <span class="kw">float</span>(row[<span class="str">"amount"</span>])
            expenses.append(row)
    <span class="kw">return</span> expenses

<span class="cmt"># সব খরচ CSV ফাইলে সেভ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">save_expenses</span>(expenses):
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"w"</span>, newline=<span class="str">""</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
        writer = csv.DictWriter(file, fieldnames=[<span class="str">"title"</span>, <span class="str">"amount"</span>, <span class="str">"category"</span>])
        writer.writeheader()
        writer.writerows(expenses)

<span class="cmt"># নতুন খরচ যোগ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">add_expense</span>(expenses):
    title = <span class="kw">input</span>(<span class="str">"কী কিনলে/খরচ করলে? "</span>)

    <span class="kw">try</span>:
        amount = <span class="kw">float</span>(<span class="kw">input</span>(<span class="str">"কত টাকা? "</span>))
    <span class="kw">except</span> ValueError:
        print(<span class="str">"❌ সঠিক সংখ্যা দাও!\\n"</span>)
        <span class="kw">return</span>

    category = <span class="kw">input</span>(<span class="str">"ক্যাটাগরি (খাবার/যাতায়াত/কেনাকাটা/অন্যান্য): "</span>)

    expenses.append({<span class="str">"title"</span>: title, <span class="str">"amount"</span>: amount, <span class="str">"category"</span>: category})
    save_expenses(expenses)
    print(<span class="str">f"✅ '{title}' যোগ হলো ({amount} টাকা)\\n"</span>)

<span class="cmt"># সব খরচ তালিকা আকারে দেখানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">show_expenses</span>(expenses):
    <span class="kw">if not</span> expenses:
        print(<span class="str">"\\nকোনো খরচ নেই এখনো।\\n"</span>)
        <span class="kw">return</span>

    print(<span class="str">"\\n📋 তোমার সব খরচ:"</span>)
    <span class="kw">for</span> index, exp <span class="kw">in</span> enumerate(expenses, start=<span class="str">1</span>):
        print(<span class="str">f"{index}. {exp['title']} — {exp['amount']:.2f} টাকা ({exp['category']})"</span>)
    print()

<span class="cmt"># ক্যাটাগরি অনুযায়ী মোট খরচের হিসাব বের করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">show_summary</span>(expenses):
    <span class="kw">if not</span> expenses:
        print(<span class="str">"\\nকোনো খরচ নেই এখনো।\\n"</span>)
        <span class="kw">return</span>

    <span class="cmt"># প্রতিটা ক্যাটাগরির যোগফল রাখার জন্য ডিকশনারি</span>
    totals = {}
    <span class="kw">for</span> exp <span class="kw">in</span> expenses:
        cat = exp[<span class="str">"category"</span>]
        <span class="cmt"># dict.get() দিয়ে আগে না থাকলে 0 ধরে যোগ করা হচ্ছে</span>
        totals[cat] = totals.get(cat, <span class="str">0</span>) + exp[<span class="str">"amount"</span>]

    print(<span class="str">"\\n📊 ক্যাটাগরি অনুযায়ী খরচ:"</span>)
    <span class="kw">for</span> cat, total <span class="kw">in</span> totals.items():
        print(<span class="str">f"  {cat}: {total:.2f} টাকা"</span>)

    grand_total = <span class="kw">sum</span>(exp[<span class="str">"amount"</span>] <span class="kw">for</span> exp <span class="kw">in</span> expenses)
    print(<span class="str">f"\\n💰 সর্বমোট: {grand_total:.2f} টাকা\\n"</span>)

<span class="cmt"># প্রোগ্রাম শুরুতেই আগের খরচ লোড হচ্ছে</span>
expenses = load_expenses()

<span class="kw">while</span> <span class="kw">True</span>:
    print(<span class="str">"===== 💰 Expense Tracker ====="</span>)
    print(<span class="str">"1. খরচ দেখাও"</span>)
    print(<span class="str">"2. নতুন খরচ যোগ করো"</span>)
    print(<span class="str">"3. সামারি দেখাও (ক্যাটাগরি অনুযায়ী)"</span>)
    print(<span class="str">"4. বের হও"</span>)

    choice = <span class="kw">input</span>(<span class="str">"তোমার পছন্দ (1-4): "</span>)

    <span class="kw">if</span> choice == <span class="str">"1"</span>:
        show_expenses(expenses)
    <span class="kw">elif</span> choice == <span class="str">"2"</span>:
        add_expense(expenses)
    <span class="kw">elif</span> choice == <span class="str">"3"</span>:
        show_summary(expenses)
    <span class="kw">elif</span> choice == <span class="str">"4"</span>:
        print(<span class="str">"বিদায়! 👋"</span>)
        <span class="kw">break</span>
    <span class="kw">else</span>:
        print(<span class="str">"❌ ভুল অপশন, আবার চেষ্টা করো!\\n"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python expense_tracker.py</div><div class="output-block">===== 💰 Expense Tracker =====<br>1. খরচ দেখাও<br>2. নতুন খরচ যোগ করো<br>3. সামারি দেখাও (ক্যাটাগরি অনুযায়ী)<br>4. বের হও<br>তোমার পছন্দ (1-4): 2<br>কী কিনলে/খরচ করলে? দুপুরের খাবার<br>কত টাকা? 150<br>ক্যাটাগরি (খাবার/যাতায়াত/কেনাকাটা/অন্যান্য): খাবার<br>✅ 'দুপুরের খাবার' যোগ হলো (150.0 টাকা)<br><br>তোমার পছন্দ (1-4): 3<br><br>📊 ক্যাটাগরি অনুযায়ী খরচ:<br>  খাবার: 150.00 টাকা<br><br>💰 সর্বমোট: 150.00 টাকা</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা খরচে তারিখ যোগ করো, মাস অনুযায়ী ফিল্টার করো</div>
      <div class="extend-item">2️⃣ মাসিক বাজেট সেট করে খরচ বাজেট ছাড়িয়ে গেলে সতর্ক করো</div>
      <div class="extend-item">3️⃣ matplotlib দিয়ে ক্যাটাগরি অনুযায়ী pie chart বানাও</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ১ ═══════════ -->

    <!-- ═══════════ অপশন ২: GUI ভার্সন (tkinter) ═══════════ -->
    <div class="option-panel" id="option-2">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে অতিরিক্ত যা লাগবে:</strong>
      <ul>
        <li>tkinter মডিউল (বিল্ট-ইন, আলাদা ইনস্টলের দরকার নেই)</li>
        <li>Treeview widget (টেবিলের মতো ডাটা দেখানোর জন্য)</li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>মনে রাখো:</strong> এই কোড ব্রাউজারে চলবে না — নিজের কম্পিউটারে <code>python expense_gui.py</code> কমান্ড দিয়ে রান করতে হবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>expense_gui.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># GUI-এর জন্য tkinter, টেবিল দেখানোর জন্য ttk.Treeview</span>
<span class="kw">import</span> tkinter <span class="kw">as</span> tk
<span class="kw">from</span> tkinter <span class="kw">import</span> ttk
<span class="kw">import</span> csv
<span class="kw">import</span> os

FILENAME = <span class="str">"expenses.csv"</span>

<span class="cmt"># আগের খরচ লোড করা (আগের প্রজেক্টের মতোই লজিক)</span>
<span class="kw">def</span> <span class="fn">load_expenses</span>():
    <span class="kw">if not</span> os.path.exists(FILENAME):
        <span class="kw">return</span> []
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"r"</span>, newline=<span class="str">""</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> f:
        reader = csv.DictReader(f)
        <span class="kw">return</span> [{<span class="str">"title"</span>: r[<span class="str">"title"</span>], <span class="str">"amount"</span>: <span class="kw">float</span>(r[<span class="str">"amount"</span>]), <span class="str">"category"</span>: r[<span class="str">"category"</span>]} <span class="kw">for</span> r <span class="kw">in</span> reader]

<span class="cmt"># খরচ CSV ফাইলে সেভ করা</span>
<span class="kw">def</span> <span class="fn">save_expenses</span>():
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"w"</span>, newline=<span class="str">""</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> f:
        writer = csv.DictWriter(f, fieldnames=[<span class="str">"title"</span>, <span class="str">"amount"</span>, <span class="str">"category"</span>])
        writer.writeheader()
        writer.writerows(expenses)

expenses = load_expenses()

<span class="cmt"># মূল উইন্ডো</span>
window = tk.Tk()
window.title(<span class="str">"Expense Tracker"</span>)
window.configure(bg=<span class="str">"#FFFFFF"</span>)
window.geometry(<span class="str">"420x560"</span>)

COLOR_ACCENT = <span class="str">"#008575"</span>

<span class="cmt"># উপরের সারিতে তিনটা ইনপুট বক্স (title, amount, category)</span>
form_frame = tk.Frame(window, bg=<span class="str">"#FFFFFF"</span>)
form_frame.pack(fill=<span class="str">"x"</span>, padx=<span class="str">14</span>, pady=<span class="str">14</span>)

title_entry = tk.Entry(form_frame, font=(<span class="str">"Segoe UI"</span>, <span class="str">11</span>))
title_entry.insert(<span class="str">0</span>, <span class="str">"কী কিনলে?"</span>)
title_entry.pack(fill=<span class="str">"x"</span>, pady=<span class="str">3</span>, ipady=<span class="str">4</span>)

amount_entry = tk.Entry(form_frame, font=(<span class="str">"Segoe UI"</span>, <span class="str">11</span>))
amount_entry.insert(<span class="str">0</span>, <span class="str">"কত টাকা?"</span>)
amount_entry.pack(fill=<span class="str">"x"</span>, pady=<span class="str">3</span>, ipady=<span class="str">4</span>)

category_entry = tk.Entry(form_frame, font=(<span class="str">"Segoe UI"</span>, <span class="str">11</span>))
category_entry.insert(<span class="str">0</span>, <span class="str">"ক্যাটাগরি"</span>)
category_entry.pack(fill=<span class="str">"x"</span>, pady=<span class="str">3</span>, ipady=<span class="str">4</span>)

<span class="cmt"># খরচ দেখানোর জন্য টেবিল (Treeview) — তিনটা কলাম</span>
tree = ttk.Treeview(window, columns=(<span class="str">"title"</span>, <span class="str">"amount"</span>, <span class="str">"category"</span>), show=<span class="str">"headings"</span>)
tree.heading(<span class="str">"title"</span>, text=<span class="str">"কী"</span>)
tree.heading(<span class="str">"amount"</span>, text=<span class="str">"টাকা"</span>)
tree.heading(<span class="str">"category"</span>, text=<span class="str">"ক্যাটাগরি"</span>)
tree.pack(fill=<span class="str">"both"</span>, expand=<span class="kw">True</span>, padx=<span class="str">14</span>, pady=<span class="str">8</span>)

total_label = tk.Label(window, text=<span class="str">"মোট: 0.00 টাকা"</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">13</span>, <span class="str">"bold"</span>), bg=<span class="str">"#FFFFFF"</span>)
total_label.pack(pady=(<span class="str">4</span>, <span class="str">12</span>))

<span class="cmt"># Treeview-এ সব খরচ আবার নতুন করে দেখানো ও মোট হিসাব করা</span>
<span class="kw">def</span> <span class="fn">refresh_table</span>():
    <span class="kw">for</span> row <span class="kw">in</span> tree.get_children():
        tree.delete(row)
    <span class="kw">for</span> exp <span class="kw">in</span> expenses:
        tree.insert(<span class="str">""</span>, tk.END, values=(exp[<span class="str">"title"</span>], <span class="str">f"{exp['amount']:.2f}"</span>, exp[<span class="str">"category"</span>]))

    total = <span class="kw">sum</span>(exp[<span class="str">"amount"</span>] <span class="kw">for</span> exp <span class="kw">in</span> expenses)
    total_label.config(text=<span class="str">f"মোট: {total:.2f} টাকা"</span>)

<span class="cmt"># "যোগ করো" বাটনের কাজ</span>
<span class="kw">def</span> <span class="fn">add_expense</span>():
    <span class="kw">try</span>:
        amount = <span class="kw">float</span>(amount_entry.get())
    <span class="kw">except</span> ValueError:
        <span class="kw">return</span>

    expenses.append({
        <span class="str">"title"</span>: title_entry.get(),
        <span class="str">"amount"</span>: amount,
        <span class="str">"category"</span>: category_entry.get()
    })
    save_expenses()
    refresh_table()

tk.Button(window, text=<span class="str">"➕ খরচ যোগ করো"</span>, bg=COLOR_ACCENT, fg=<span class="str">"white"</span>, bd=<span class="str">0</span>,
          command=add_expense).pack(fill=<span class="str">"x"</span>, padx=<span class="str">14</span>, pady=(<span class="str">0</span>, <span class="str">14</span>), ipady=<span class="str">8</span>)

refresh_table()
window.mainloop()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python expense_gui.py</div><div class="output-block">[একটা সাদা উইন্ডো — উপরে ৩টা ইনপুট বক্স, মাঝে টেবিল (কী/টাকা/ক্যাটাগরি কলাম), নিচে মোট টাকা ও "➕ খরচ যোগ করো" বাটন]</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ Treeview-এর সারিতে ডাবল-ক্লিক করলে ডিলিট হওয়ার সুবিধা যোগ করো</div>
      <div class="extend-item">2️⃣ ক্যাটাগরি dropdown (Combobox) দিয়ে সিলেক্ট করার সুবিধা দাও, টাইপ না করে</div>
      <div class="extend-item">3️⃣ matplotlib দিয়ে GUI-এর ভেতরেই একটা pie chart embed করো</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ২ ═══════════ -->
  `,
  7: `


    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>❓ Quiz Application</h2>
    <p class="subtitle">JSON ফাইল থেকে প্রশ্ন লোড করে multiple-choice কুইজ নেওয়া হবে — শেষে স্কোর ও রিভিউ দেখানো হবে। দুইটা ভার্সন: টার্মিনাল ও GUI (visual)।</p>

    <div class="option-tabs">
      <button class="option-tab active" onclick="showOption(1, this)">অপশন ১ — টার্মিনাল ভার্সন</button>
      <button class="option-tab" onclick="showOption(2, this)">অপশন ২ — GUI ভার্সন (tkinter)</button>
    </div>

    <!-- ═══════════ অপশন ১: টার্মিনাল ভার্সন ═══════════ -->
    <div class="option-panel active" id="option-1">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে যা লাগবে:</strong>
      <ul>
        <li>লিস্ট ও ডিকশনারি — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>for লুপ ও enumerate — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>JSON ফাইল I/O — <strong>মডিউল ৫</strong></li>
      </ul>
    </div>

    <h3>🔹 প্রশ্নের ফাইল (questions.json)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>questions.json</div></div>
      <div class="code-wrap"><pre class="code-block"><code>[
  {
    <span class="str">"question"</span>: <span class="str">"পাইথন কোন ধরনের ভাষা?"</span>,
    <span class="str">"options"</span>: [<span class="str">"Compiled"</span>, <span class="str">"Interpreted"</span>, <span class="str">"Assembly"</span>, <span class="str">"Machine"</span>],
    <span class="str">"answer"</span>: <span class="str">1</span>
  },
  {
    <span class="str">"question"</span>: <span class="str">"লিস্ট কি পরিবর্তনযোগ্য (mutable)?"</span>,
    <span class="str">"options"</span>: [<span class="str">"হ্যাঁ"</span>, <span class="str">"না"</span>],
    <span class="str">"answer"</span>: <span class="str">0</span>
  }
]</code></pre></div>
    </div>
    <p><em>💡 নোট: <code>"answer"</code> হলো সঠিক অপশনের index (0 থেকে শুরু)।</em></p>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>quiz.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># JSON প্রশ্ন লোড করার জন্য</span>
<span class="kw">import</span> json

<span class="cmt"># প্রশ্নের ফাইল লোড করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">load_questions</span>():
    <span class="kw">with</span> <span class="kw">open</span>(<span class="str">"questions.json"</span>, <span class="str">"r"</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
        <span class="kw">return</span> json.load(file)

<span class="cmt"># পুরো কুইজ চালানোর মূল ফাংশন</span>
<span class="kw">def</span> <span class="fn">run_quiz</span>(questions):
    score = <span class="str">0</span>
    <span class="cmt"># ভুল হওয়া প্রশ্নগুলো পরে review-এ দেখানোর জন্য জমা রাখা হচ্ছে</span>
    wrong_answers = []

    <span class="cmt"># enumerate দিয়ে প্রশ্ন নাম্বার + প্রশ্ন dictionary একসাথে পাওয়া যাচ্ছে</span>
    <span class="kw">for</span> index, q <span class="kw">in</span> enumerate(questions, start=<span class="str">1</span>):
        print(<span class="str">f"\\nপ্রশ্ন {index}: {q['question']}"</span>)

        <span class="cmt"># প্রতিটা অপশন নাম্বার দিয়ে দেখানো হচ্ছে (1, 2, 3...)</span>
        <span class="kw">for</span> opt_index, option <span class="kw">in</span> enumerate(q[<span class="str">"options"</span>], start=<span class="str">1</span>):
            print(<span class="str">f"  {opt_index}. {option}"</span>)

        <span class="kw">try</span>:
            choice = <span class="kw">int</span>(<span class="kw">input</span>(<span class="str">"তোমার উত্তর (নাম্বার দাও): "</span>)) - <span class="str">1</span>
        <span class="kw">except</span> ValueError:
            choice = <span class="str">-1</span>   <span class="cmt"># ভুল ইনপুট দিলে কোনো অপশনের সাথেই মিলবে না</span>

        <span class="kw">if</span> choice == q[<span class="str">"answer"</span>]:
            print(<span class="str">"✅ সঠিক!"</span>)
            score += <span class="str">1</span>
        <span class="kw">else</span>:
            correct_option = q[<span class="str">"options"</span>][q[<span class="str">"answer"</span>]]
            print(<span class="str">f"❌ ভুল! সঠিক উত্তর ছিল: {correct_option}"</span>)
            wrong_answers.append((q[<span class="str">"question"</span>], correct_option))

    <span class="kw">return</span> score, wrong_answers

<span class="cmt"># ফলাফল সুন্দর করে দেখানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">show_result</span>(score, total, wrong_answers):
    percentage = (score / total) * <span class="str">100</span>
    print(<span class="str">f"\\n{'='*30}"</span>)
    print(<span class="str">f"📊 তোমার স্কোর: {score}/{total} ({percentage:.0f}%)"</span>)

    <span class="cmt"># স্কোর অনুযায়ী মন্তব্য</span>
    <span class="kw">if</span> percentage == <span class="str">100</span>:
        print(<span class="str">"🏆 পারফেক্ট! দারুণ করেছ!"</span>)
    <span class="kw">elif</span> percentage >= <span class="str">60</span>:
        print(<span class="str">"🙂 ভালো করেছ!"</span>)
    <span class="kw">else</span>:
        print(<span class="str">"📚 আরেকটু প্র্যাকটিস করা দরকার।"</span>)

    <span class="cmt"># ভুল হওয়া প্রশ্নগুলোর review দেখানো</span>
    <span class="kw">if</span> wrong_answers:
        print(<span class="str">"\\n📝 ভুল হওয়া প্রশ্নগুলো:"</span>)
        <span class="kw">for</span> question, correct <span class="kw">in</span> wrong_answers:
            print(<span class="str">f"  • {question} → সঠিক উত্তর: {correct}"</span>)

print(<span class="str">"❓ কুইজ শুরু হচ্ছে!"</span>)
questions = load_questions()
score, wrong_answers = run_quiz(questions)
show_result(score, <span class="kw">len</span>(questions), wrong_answers)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python quiz.py</div><div class="output-block">❓ কুইজ শুরু হচ্ছে!<br><br>প্রশ্ন 1: পাইথন কোন ধরনের ভাষা?<br>  1. Compiled<br>  2. Interpreted<br>  3. Assembly<br>  4. Machine<br>তোমার উত্তর (নাম্বার দাও): 2<br>✅ সঠিক!<br><br>প্রশ্ন 2: লিস্ট কি পরিবর্তনযোগ্য (mutable)?<br>  1. হ্যাঁ<br>  2. না<br>তোমার উত্তর (নাম্বার দাও): 2<br>❌ ভুল! সঠিক উত্তর ছিল: হ্যাঁ<br><br>==============================<br>📊 তোমার স্কোর: 1/2 (50%)<br>📚 আরেকটু প্র্যাকটিস করা দরকার।<br><br>📝 ভুল হওয়া প্রশ্নগুলো:<br>  • লিস্ট কি পরিবর্তনযোগ্য (mutable)? → সঠিক উত্তর: হ্যাঁ</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা প্রশ্নে টাইম-লিমিট যোগ করো</div>
      <div class="extend-item">2️⃣ ক্যাটাগরি (Python Basic, OOP, ইত্যাদি) অনুযায়ী প্রশ্ন ফিল্টার করো</div>
      <div class="extend-item">3️⃣ প্রশ্নগুলো random.shuffle() দিয়ে প্রতিবার এলোমেলো ক্রমে দেখাও</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ১ ═══════════ -->

    <!-- ═══════════ অপশন ২: GUI ভার্সন (tkinter) ═══════════ -->
    <div class="option-panel" id="option-2">

    <div class="needs-box">
      <strong>💡 এই ভার্সনে অতিরিক্ত যা লাগবে:</strong>
      <ul>
        <li>tkinter মডিউল (বিল্ট-ইন, আলাদা ইনস্টলের দরকার নেই)</li>
        <li>Radiobutton widget (একটামাত্র অপশন সিলেক্ট করার জন্য)</li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>মনে রাখো:</strong> এই কোড ব্রাউজারে চলবে না — নিজের কম্পিউটারে <code>python quiz_gui.py</code> কমান্ড দিয়ে রান করতে হবে। একই <code>questions.json</code> ফাইল লাগবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>quiz_gui.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">import</span> tkinter <span class="kw">as</span> tk
<span class="kw">import</span> json

<span class="kw">with</span> <span class="kw">open</span>(<span class="str">"questions.json"</span>, <span class="str">"r"</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
    questions = json.load(file)

<span class="cmt"># কোন প্রশ্নে আছি ও এখন পর্যন্ত স্কোর মনে রাখার ভেরিয়েবল</span>
current_index = <span class="str">0</span>
score = <span class="str">0</span>

<span class="cmt"># মূল উইন্ডো</span>
window = tk.Tk()
window.title(<span class="str">"Quiz App"</span>)
window.configure(bg=<span class="str">"#FFFFFF"</span>)
window.geometry(<span class="str">"420x420"</span>)

COLOR_ACCENT = <span class="str">"#008575"</span>

question_label = tk.Label(window, text=<span class="str">""</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">14</span>, <span class="str">"bold"</span>),
                           bg=<span class="str">"#FFFFFF"</span>, wraplength=<span class="str">380</span>, justify=<span class="str">"left"</span>)
question_label.pack(pady=(<span class="str">20</span>, <span class="str">14</span>), padx=<span class="str">20</span>, anchor=<span class="str">"w"</span>)

<span class="cmt"># সিলেক্ট করা অপশন মনে রাখার জন্য tkinter ভেরিয়েবল</span>
selected_option = tk.IntVar(value=<span class="str">-1</span>)

<span class="cmt"># ৪টা radio button আগে থেকেই তৈরি করে রাখা হচ্ছে (প্রতিবার নতুন না বানিয়ে টেক্সট বদলানো হবে)</span>
option_buttons = []
<span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(<span class="str">4</span>):
    rb = tk.Radiobutton(window, text=<span class="str">""</span>, variable=selected_option, value=i,
                         font=(<span class="str">"Segoe UI"</span>, <span class="str">12</span>), bg=<span class="str">"#FFFFFF"</span>, anchor=<span class="str">"w"</span>)
    rb.pack(fill=<span class="str">"x"</span>, padx=<span class="str">30</span>, pady=<span class="str">4</span>)
    option_buttons.append(rb)

feedback_label = tk.Label(window, text=<span class="str">""</span>, font=(<span class="str">"Segoe UI"</span>, <span class="str">11</span>), bg=<span class="str">"#FFFFFF"</span>)
feedback_label.pack(pady=<span class="str">6</span>)

<span class="cmt"># স্ক্রিনে বর্তমান প্রশ্ন ও অপশনগুলো বসানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">load_question</span>():
    q = questions[current_index]
    question_label.config(text=<span class="str">f"প্রশ্ন {current_index + 1}: {q['question']}"</span>)
    selected_option.set(<span class="str">-1</span>)
    feedback_label.config(text=<span class="str">""</span>)

    <span class="cmt"># প্রতিটা radio button-এ সংশ্লিষ্ট অপশন টেক্সট বসানো হচ্ছে</span>
    <span class="kw">for</span> i, rb <span class="kw">in</span> enumerate(option_buttons):
        <span class="kw">if</span> i < <span class="kw">len</span>(q[<span class="str">"options"</span>]):
            rb.config(text=q[<span class="str">"options"</span>][i])
            rb.pack(fill=<span class="str">"x"</span>, padx=<span class="str">30</span>, pady=<span class="str">4</span>)
        <span class="kw">else</span>:
            rb.pack_forget()   <span class="cmt"># কম অপশন থাকলে বাড়তি বাটন লুকিয়ে ফেলা</span>

<span class="cmt"># "পরবর্তী" বাটনের কাজ</span>
<span class="kw">def</span> <span class="fn">next_question</span>():
    <span class="kw">global</span> current_index, score

    q = questions[current_index]
    <span class="kw">if</span> selected_option.get() == q[<span class="str">"answer"</span>]:
        score += <span class="str">1</span>
        feedback_label.config(text=<span class="str">"✅ সঠিক!"</span>, fg=<span class="str">"green"</span>)
    <span class="kw">else</span>:
        feedback_label.config(text=<span class="str">"❌ ভুল!"</span>, fg=<span class="str">"red"</span>)

    current_index += <span class="str">1</span>

    <span class="cmt"># সব প্রশ্ন শেষ হলে ফলাফল দেখানো, নাহলে পরের প্রশ্ন লোড করা</span>
    <span class="kw">if</span> current_index < <span class="kw">len</span>(questions):
        window.after(<span class="str">700</span>, load_question)   <span class="cmt"># ০.৭ সেকেন্ড পর পরের প্রশ্নে যাবে</span>
    <span class="kw">else</span>:
        <span class="kw">for</span> rb <span class="kw">in</span> option_buttons:
            rb.pack_forget()
        next_btn.pack_forget()
        question_label.config(text=<span class="str">f"🏁 কুইজ শেষ! স্কোর: {score}/{len(questions)}"</span>)

next_btn = tk.Button(window, text=<span class="str">"পরবর্তী ➜"</span>, bg=COLOR_ACCENT, fg=<span class="str">"white"</span>,
                      bd=<span class="str">0</span>, command=next_question)
next_btn.pack(fill=<span class="str">"x"</span>, padx=<span class="str">20</span>, pady=<span class="str">16</span>, ipady=<span class="str">8</span>)

<span class="cmt"># প্রথম প্রশ্ন দিয়ে শুরু</span>
load_question()
window.mainloop()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python quiz_gui.py</div><div class="output-block">[একটা সাদা উইন্ডো — উপরে প্রশ্ন, নিচে radio button অপশন, তারপর ফিডব্যাক (✅/❌), সবার নিচে "পরবর্তী ➜" বাটন]</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একটা progress bar যোগ করো (কোন প্রশ্নে আছি দেখানোর জন্য)</div>
      <div class="extend-item">2️⃣ টাইমার যোগ করো — প্রতিটা প্রশ্নের জন্য ১৫ সেকেন্ড</div>
      <div class="extend-item">3️⃣ শেষে ভুল হওয়া প্রশ্নগুলোর একটা review স্ক্রিন দেখাও</div>
    </div>

    </div>
    <!-- ═══════════ /অপশন ২ ═══════════ -->
  `,
  8: `


    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🕸️ Web Scraper</h2>
    <p class="subtitle">একটা ওয়েবসাইট থেকে ডাটা (যেমন বইয়ের নাম ও দাম) বের করে CSV ফাইলে সেভ করা হবে — requests ও BeautifulSoup ব্যবহার করে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>লিস্ট ও ডিকশনারি — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>for লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>CSV ফাইল I/O — <strong>মডিউল ৫</strong></li>
        <li>try-except — <strong>মডিউল ৬</strong></li>
        <li>এক্সটার্নাল লাইব্রেরি ইনস্টল (pip) — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>ইনস্টল করতে হবে:</strong> <code>pip install requests beautifulsoup4</code> — এই দুটো পাইথনের সাথে বিল্ট-ইন আসে না।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>web_scraper.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># ওয়েবপেজ নামানোর জন্য requests, HTML থেকে ডাটা বের করার জন্য BeautifulSoup</span>
<span class="kw">import</span> requests
<span class="kw">from</span> bs4 <span class="kw">import</span> BeautifulSoup
<span class="kw">import</span> csv

<span class="cmt"># প্র্যাকটিসের জন্য বানানো একটা ফ্রি স্ক্র্যাপিং-বান্ধব ওয়েবসাইট</span>
URL = <span class="str">"http://books.toscrape.com/"</span>

<span class="cmt"># ওয়েবসাইট থেকে বই-এর তথ্য বের করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">scrape_books</span>():
    <span class="cmt"># ওয়েবপেজের পুরো HTML ডাউনলোড করা হচ্ছে</span>
    response = requests.get(URL)

    <span class="cmt"># স্ট্যাটাস কোড 200 মানে সফলভাবে পেজ পাওয়া গেছে</span>
    <span class="kw">if</span> response.status_code != <span class="str">200</span>:
        print(<span class="str">f"❌ পেজ লোড করা যায়নি! স্ট্যাটাস কোড: {response.status_code}"</span>)
        <span class="kw">return</span> []

    <span class="cmt"># raw HTML text-কে BeautifulSoup দিয়ে parse করা হচ্ছে</span>
    soup = BeautifulSoup(response.text, <span class="str">"html.parser"</span>)

    <span class="cmt"># সব বই একটা "product_pod" ক্লাসের ভেতরে থাকে (এই সাইটের HTML স্ট্রাকচার অনুযায়ী)</span>
    book_elements = soup.find_all(<span class="str">"article"</span>, class_=<span class="str">"product_pod"</span>)

    books = []
    <span class="kw">for</span> book <span class="kw">in</span> book_elements:
        <span class="cmt"># বইয়ের নাম <h3><a title="..."> ট্যাগের ভেতরে থাকে</span>
        title = book.h3.a[<span class="str">"title"</span>]

        <span class="cmt"># দাম <p class="price_color"> ট্যাগের টেক্সট থেকে বের করা হচ্ছে</span>
        price = book.find(<span class="str">"p"</span>, class_=<span class="str">"price_color"</span>).text

        <span class="cmt"># স্টক আছে কিনা <p class="instock ..."> থেকে চেক করা হচ্ছে</span>
        availability = book.find(<span class="str">"p"</span>, class_=<span class="str">"instock availability"</span>).text.strip()

        books.append({<span class="str">"title"</span>: title, <span class="str">"price"</span>: price, <span class="str">"availability"</span>: availability})

    <span class="kw">return</span> books

<span class="cmt"># স্ক্র্যাপ করা ডাটা CSV ফাইলে সেভ করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">save_to_csv</span>(books):
    <span class="kw">with</span> <span class="kw">open</span>(<span class="str">"books.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>, encoding=<span class="str">"utf-8"</span>) <span class="kw">as</span> file:
        writer = csv.DictWriter(file, fieldnames=[<span class="str">"title"</span>, <span class="str">"price"</span>, <span class="str">"availability"</span>])
        writer.writeheader()
        writer.writerows(books)

<span class="cmt"># নেটওয়ার্ক এরর হলে (ইন্টারনেট না থাকলে) সামলানো হচ্ছে</span>
<span class="kw">try</span>:
    print(<span class="str">"🕸️  ওয়েবসাইট থেকে ডাটা সংগ্রহ করা হচ্ছে..."</span>)
    books = scrape_books()

    <span class="kw">if</span> books:
        save_to_csv(books)
        print(<span class="str">f"✅ {len(books)}টা বইয়ের তথ্য সংগ্রহ করে books.csv-তে সেভ হয়েছে!\\n"</span>)

        <span class="cmt"># প্রথম ৫টা বই স্ক্রিনেও দেখানো হচ্ছে</span>
        <span class="kw">for</span> book <span class="kw">in</span> books[:<span class="str">5</span>]:
            print(<span class="str">f"📕 {book['title']} — {book['price']} ({book['availability']})"</span>)

<span class="kw">except</span> requests.exceptions.ConnectionError:
    print(<span class="str">"❌ ইন্টারনেট কানেকশন নেই বা ওয়েবসাইট খোলা যাচ্ছে না।"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="str">f"❌ কিছু একটা ভুল হয়েছে: {e}"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python web_scraper.py</div><div class="output-block">🕸️  ওয়েবসাইট থেকে ডাটা সংগ্রহ করা হচ্ছে...<br>✅ 20টা বইয়ের তথ্য সংগ্রহ করে books.csv-তে সেভ হয়েছে!<br><br>📕 A Light in the Attic — £51.77 (In stock)<br>📕 Tipping the Velvet — £53.74 (In stock)<br>📕 Soumission — £50.10 (In stock)<br>📕 Sharp Objects — £47.82 (In stock)<br>📕 Sapiens — £54.23 (In stock)</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ একাধিক পেজ (pagination) থেকে সব বই স্ক্র্যাপ করো</div>
      <div class="extend-item">2️⃣ প্রতিটা বইয়ের rating (star) সংগ্রহ করো</div>
      <div class="extend-item">3️⃣ price অনুযায়ী sort করে সবচেয়ে সস্তা বইগুলো আলাদাভাবে দেখাও</div>
      <div class="extend-item">4️⃣ একটা নির্দিষ্ট keyword দিয়ে বই সার্চ করার ফিচার যোগ করো</div>
    </div>
  `,
  9: `


    <div class="project-badges"><span class="badge-level">ইন্টারমিডিয়েট</span></div>
    <h2>🌦️ Weather App</h2>
    <p class="subtitle">শহরের নাম দিলেই OpenWeatherMap API থেকে বর্তমান তাপমাত্রা, আবহাওয়ার অবস্থা ও আর্দ্রতা দেখাবে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>ডিকশনারি (API রেসপন্স পড়া) — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>try-except — <strong>মডিউল ৬</strong></li>
        <li>এক্সটার্নাল লাইব্রেরি (pip install requests) — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>প্রথমে করতে হবে:</strong> <a href="https://openweathermap.org/api" target="_blank" rel="noopener">openweathermap.org</a>-এ ফ্রি অ্যাকাউন্ট খুলে একটা API key নিতে হবে (সম্পূর্ণ ফ্রি)। নিচের কোডে <code>YOUR_API_KEY</code> এর জায়গায় সেটা বসাতে হবে। <code>pip install requests</code> ইনস্টল করা লাগবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>weather_app.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># API রিকুয়েস্ট পাঠানোর জন্য</span>
<span class="kw">import</span> requests

<span class="cmt"># তোমার নিজের OpenWeatherMap API key এখানে বসাও</span>
API_KEY = <span class="str">"YOUR_API_KEY"</span>
BASE_URL = <span class="str">"https://api.openweathermap.org/data/2.5/weather"</span>

<span class="cmt"># শহরের নাম দিয়ে আবহাওয়ার তথ্য আনার ফাংশন</span>
<span class="kw">def</span> <span class="fn">get_weather</span>(city):
    <span class="cmt"># API-কে পাঠানোর প্যারামিটার — শহরের নাম, key, এবং একক (metric = সেলসিয়াস)</span>
    params = {
        <span class="str">"q"</span>: city,
        <span class="str">"appid"</span>: API_KEY,
        <span class="str">"units"</span>: <span class="str">"metric"</span>,
        <span class="str">"lang"</span>: <span class="str">"bn"</span>   <span class="cmt"># বাংলায় আবহাওয়ার বর্ণনা চাওয়া হচ্ছে</span>
    }

    response = requests.get(BASE_URL, params=params)
    data = response.json()

    <span class="cmt"># status code 200 না হলে শহর খুঁজে পায়নি বা অন্য কোনো সমস্যা</span>
    <span class="kw">if</span> response.status_code != <span class="str">200</span>:
        print(<span class="str">f"❌ ভুল: {data.get('message', 'শহর খুঁজে পাওয়া যায়নি')}"</span>)
        <span class="kw">return</span> <span class="kw">None</span>

    <span class="kw">return</span> data

<span class="cmt"># API রেসপন্স থেকে দরকারি তথ্য বের করে সুন্দর করে দেখানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">display_weather</span>(data):
    city_name   = data[<span class="str">"name"</span>]
    temp        = data[<span class="str">"main"</span>][<span class="str">"temp"</span>]
    feels_like  = data[<span class="str">"main"</span>][<span class="str">"feels_like"</span>]
    humidity    = data[<span class="str">"main"</span>][<span class="str">"humidity"</span>]
    description = data[<span class="str">"weather"</span>][<span class="str">0</span>][<span class="str">"description"</span>]
    wind_speed  = data[<span class="str">"wind"</span>][<span class="str">"speed"</span>]

    print(<span class="str">f"\\n🌍 {city_name}-এর আবহাওয়া"</span>)
    print(<span class="str">f"🌡️  তাপমাত্রা: {temp}°C (অনুভূত হচ্ছে {feels_like}°C)"</span>)
    print(<span class="str">f"☁️  অবস্থা: {description}"</span>)
    print(<span class="str">f"💧 আর্দ্রতা: {humidity}%"</span>)
    print(<span class="str">f"💨 বাতাসের গতি: {wind_speed} মি/সে"</span>)

<span class="cmt"># মূল প্রোগ্রাম — বারবার শহরের নাম জিজ্ঞেস করবে, "exit" দিলে থামবে</span>
print(<span class="str">"🌦️  ওয়েদার অ্যাপ (থামতে 'exit' লিখো)"</span>)

<span class="kw">while</span> <span class="kw">True</span>:
    city = <span class="kw">input</span>(<span class="str">"\\nকোন শহরের আবহাওয়া দেখবে? "</span>)

    <span class="kw">if</span> city.lower() == <span class="str">"exit"</span>:
        print(<span class="str">"বিদায়! 👋"</span>)
        <span class="kw">break</span>

    <span class="cmt"># ইন্টারনেট না থাকলে বা সার্ভার সমস্যা হলে এখানে ধরা পড়বে</span>
    <span class="kw">try</span>:
        data = get_weather(city)
        <span class="kw">if</span> data:
            display_weather(data)
    <span class="kw">except</span> requests.exceptions.ConnectionError:
        print(<span class="str">"❌ ইন্টারনেট কানেকশন নেই।"</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python weather_app.py</div><div class="output-block">🌦️  ওয়েদার অ্যাপ (থামতে 'exit' লিখো)<br><br>কোন শহরের আবহাওয়া দেখবে? Dhaka<br><br>🌍 Dhaka-এর আবহাওয়া<br>🌡️  তাপমাত্রা: 31.2°C (অনুভূত হচ্ছে 35.6°C)<br>☁️  অবস্থা: বিক্ষিপ্ত মেঘ<br>💧 আর্দ্রতা: 78%<br>💨 বাতাসের গতি: 3.1 মি/সে<br><br>কোন শহরের আবহাওয়া দেখবে? exit<br>বিদায়! 👋</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ ৫ দিনের forecast দেখানোর ফিচার যোগ করো</div>
      <div class="extend-item">2️⃣ একাধিক শহর একসাথে সেভ করে "favorite cities" হিসেবে রাখো</div>
      <div class="extend-item">3️⃣ তাপমাত্রা অনুযায়ী পোশাকের পরামর্শ দাও (যেমন "ছাতা নিয়ে যাও")</div>
      <div class="extend-item">4️⃣ tkinter দিয়ে GUI ভার্সন বানাও, আবহাওয়ার আইকনসহ</div>
    </div>
  `,
  10: `


    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🤖 Simple Chatbot</h2>
    <p class="subtitle">Keyword-matching পদ্ধতিতে একটা সাধারণ চ্যাটবট — নির্দিষ্ট কিছু শব্দ চিনে উত্তর দেবে, না বুঝলে সেটাও জানাবে।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>স্ট্রিং মেথড ও ডিকশনারি — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>while লুপ — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>random মডিউল (বৈচিত্র্যময় উত্তরের জন্য) — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>chatbot.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># একই উত্তর বারবার না দিয়ে random ভাবে বাছার জন্য</span>
<span class="kw">import</span> random

<span class="cmt"># প্রতিটা keyword-এর জন্য সম্ভাব্য কয়েকটা উত্তর — dictionary of lists</span>
RESPONSES = {
    <span class="str">"হ্যালো"</span>: [<span class="str">"হাই! কেমন আছো?"</span>, <span class="str">"হ্যালো! বলো, কী খবর?"</span>],
    <span class="str">"কেমন আছো"</span>: [<span class="str">"আমি ভালো আছি, ধন্যবাদ! তুমি?"</span>],
    <span class="str">"নাম"</span>: [<span class="str">"আমি একটা সাধারণ পাইথন চ্যাটবট 🤖"</span>],
    <span class="str">"সাহায্য"</span>: [<span class="str">"তুমি আমাকে hello, কেমন আছো, নাম — এসব জিজ্ঞেস করতে পারো!"</span>],
    <span class="str">"বিদায়"</span>: [<span class="str">"বিদায়! আবার দেখা হবে 👋"</span>],
}

<span class="cmt"># ইউজারের কথায় কোন keyword আছে খুঁজে সঠিক উত্তর ফেরত দেওয়ার ফাংশন</span>
<span class="kw">def</span> <span class="fn">get_response</span>(user_input):
    <span class="cmt"># ছোট হাতের অক্ষরে কনভার্ট করা হচ্ছে, যাতে HELLO আর hello একই ধরা পড়ে</span>
    text = user_input.lower()

    <span class="cmt"># RESPONSES-এর প্রতিটা keyword ইউজারের বাক্যে আছে কিনা চেক করা হচ্ছে</span>
    <span class="kw">for</span> keyword, replies <span class="kw">in</span> RESPONSES.items():
        <span class="kw">if</span> keyword <span class="kw">in</span> text:
            <span class="cmt"># একই keyword-এর একাধিক উত্তর থেকে একটা randomly বাছা হচ্ছে</span>
            <span class="kw">return</span> random.choice(replies)

    <span class="cmt"># কোনো keyword না মিললে ডিফল্ট উত্তর</span>
    <span class="kw">return</span> <span class="str">"দুঃখিত, বুঝতে পারিনি। 'সাহায্য' লিখে দেখো কী জিজ্ঞেস করতে পারো।"</span>

print(<span class="str">"🤖 চ্যাটবট: হ্যালো! আমার সাথে কথা বলো (বের হতে 'বিদায়' লিখো)"</span>)

<span class="cmt"># "বিদায়" না বলা পর্যন্ত চলতে থাকবে</span>
<span class="kw">while</span> <span class="kw">True</span>:
    user_input = <span class="kw">input</span>(<span class="str">"তুমি: "</span>)

    response = get_response(user_input)
    print(<span class="str">f"🤖 চ্যাটবট: {response}"</span>)

    <span class="cmt"># বিদায় বললে লুপ থেকে বের হয়ে যাবে</span>
    <span class="kw">if</span> <span class="str">"বিদায়"</span> <span class="kw">in</span> user_input.lower():
        <span class="kw">break</span></code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python chatbot.py</div><div class="output-block">🤖 চ্যাটবট: হ্যালো! আমার সাথে কথা বলো (বের হতে 'বিদায়' লিখো)<br>তুমি: হ্যালো<br>🤖 চ্যাটবট: হ্যালো! বলো, কী খবর?<br>তুমি: তোমার নাম কী?<br>🤖 চ্যাটবট: আমি একটা সাধারণ পাইথন চ্যাটবট 🤖<br>তুমি: আকাশে মেঘ করেছে<br>🤖 চ্যাটবট: দুঃখিত, বুঝতে পারিনি। 'সাহায্য' লিখে দেখো কী জিজ্ঞেস করতে পারো।<br>তুমি: বিদায়<br>🤖 চ্যাটবট: বিদায়! আবার দেখা হবে 👋</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ কথোপকথনের হিস্টোরি একটা ফাইলে সেভ করো</div>
      <div class="extend-item">2️⃣ আরও বেশি keyword ও প্যাটার্ন যোগ করে চ্যাটবটকে আরও "স্মার্ট" বানাও</div>
      <div class="extend-item">3️⃣ regex (মডিউল ৮) ব্যবহার করে আরও নমনীয়ভাবে বাক্য ম্যাচ করো</div>
      <div class="extend-item">4️⃣ tkinter দিয়ে একটা চ্যাট-বাবল স্টাইলের GUI বানাও</div>
    </div>
  `,
  11: `


    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🔗 URL Shortener</h2>
    <p class="subtitle">লম্বা URL দিলে একটা ছোট কোড তৈরি হবে — সেই ছোট লিংকে গেলে আসল URL-এ redirect হয়ে যাবে। Flask দিয়ে বানানো একটা ছোট ওয়েব অ্যাপ।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>ডিকশনারি ও স্ট্রিং — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>JSON ফাইল I/O (ম্যাপিং সেভ রাখার জন্য) — <strong>মডিউল ৫</strong></li>
        <li>Flask (এক্সটার্নাল লাইব্রেরি) — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>ইনস্টল করতে হবে:</strong> <code>pip install flask</code> — তারপর টার্মিনালে <code>python url_shortener.py</code> চালিয়ে ব্রাউজারে <code>http://127.0.0.1:5000</code> এ যাও।
    </div>

    <h3>🔹 সম্পূর্ণ কোড (Flask ব্যাকএন্ড)</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>url_shortener.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="cmt"># ওয়েব সার্ভার বানানোর জন্য Flask</span>
<span class="kw">from</span> flask <span class="kw">import</span> Flask, request, redirect, render_template_string
<span class="kw">import</span> json
<span class="kw">import</span> os
<span class="kw">import</span> random
<span class="kw">import</span> string

app = Flask(__name__)
FILENAME = <span class="str">"urls.json"</span>

<span class="cmt"># আগের সব short-code ↔ আসল URL ম্যাপিং লোড করা</span>
<span class="kw">def</span> <span class="fn">load_urls</span>():
    <span class="kw">if not</span> os.path.exists(FILENAME):
        <span class="kw">return</span> {}
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"r"</span>) <span class="kw">as</span> file:
        <span class="kw">return</span> json.load(file)

<span class="cmt"># ম্যাপিং ফাইলে সেভ করা</span>
<span class="kw">def</span> <span class="fn">save_urls</span>(urls):
    <span class="kw">with</span> <span class="kw">open</span>(FILENAME, <span class="str">"w"</span>) <span class="kw">as</span> file:
        json.dump(urls, file, indent=<span class="str">2</span>)

<span class="cmt"># র‍্যান্ডম ৬ ক্যারেক্টারের short code তৈরি করার ফাংশন</span>
<span class="kw">def</span> <span class="fn">generate_code</span>():
    chars = string.ascii_letters + string.digits
    <span class="kw">return</span> <span class="str">""</span>.join(random.choice(chars) <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(<span class="str">6</span>))

urls = load_urls()

<span class="cmt"># হোমপেজ — ফর্ম দেখাবে এবং নতুন URL শর্ট করবে</span>
<span class="kw">@app</span>.route(<span class="str">"/"</span>, methods=[<span class="str">"GET"</span>, <span class="str">"POST"</span>])
<span class="kw">def</span> <span class="fn">home</span>():
    short_url = <span class="kw">None</span>

    <span class="cmt"># ইউজার ফর্ম সাবমিট করলে (POST রিকুয়েস্ট) এই অংশ চলবে</span>
    <span class="kw">if</span> request.method == <span class="str">"POST"</span>:
        original_url = request.form[<span class="str">"url"</span>]

        <span class="cmt"># নতুন unique code তৈরি — আগে থেকে থাকলে আবার নতুন করে বানানো হচ্ছে</span>
        code = generate_code()
        <span class="kw">while</span> code <span class="kw">in</span> urls:
            code = generate_code()

        urls[code] = original_url
        save_urls(urls)
        short_url = request.host_url + code

    <span class="cmt"># সাধারণ HTML ফর্ম — সিম্পল রাখার জন্য সরাসরি string হিসেবে লেখা</span>
    <span class="kw">return</span> render_template_string(<span class="str">"""
        &lt;h2&gt;🔗 URL Shortener&lt;/h2&gt;
        &lt;form method="POST"&gt;
            &lt;input name="url" placeholder="লম্বা URL দাও" style="width:300px" required&gt;
            &lt;button type="submit"&gt;Shorten করো&lt;/button&gt;
        &lt;/form&gt;
        {% if short_url %}
            &lt;p&gt;✅ তোমার ছোট লিংক: &lt;a href="{{ short_url }}"&gt;{{ short_url }}&lt;/a&gt;&lt;/p&gt;
        {% endif %}
    """</span>, short_url=short_url)

<span class="cmt"># শর্ট কোডে কেউ গেলে আসল URL-এ redirect করে দেওয়া</span>
<span class="kw">@app</span>.route(<span class="str">"/&lt;code&gt;"</span>)
<span class="kw">def</span> <span class="fn">redirect_to_url</span>(code):
    <span class="cmt"># code ম্যাপিং-এ না থাকলে ভুল মেসেজ দেখানো</span>
    <span class="kw">if</span> code <span class="kw">not</span> <span class="kw">in</span> urls:
        <span class="kw">return</span> <span class="str">"❌ এই লিংক খুঁজে পাওয়া যায়নি!"</span>, <span class="str">404</span>

    <span class="kw">return</span> redirect(urls[code])

<span class="cmt"># debug=True দিলে কোড বদলালে সার্ভার নিজে থেকেই রিস্টার্ট হয়</span>
<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    app.run(debug=<span class="kw">True</span>)</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python url_shortener.py</div><div class="output-block"> * Running on http://127.0.0.1:5000<br> * Debug mode: on<br><br>[ব্রাউজারে গিয়ে একটা URL পেস্ট করে "Shorten করো" চাপলে দেখাবে:]<br>✅ তোমার ছোট লিংক: http://127.0.0.1:5000/aB3xY9</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ প্রতিটা লিংক কতবার ক্লিক হয়েছে সেই count রাখো</div>
      <div class="extend-item">2️⃣ ইউজার নিজে custom short code (যেমন /my-link) দিতে পারার সুবিধা দাও</div>
      <div class="extend-item">3️⃣ লিংকের একটা expiry date যোগ করো (নির্দিষ্ট সময় পর কাজ করবে না)</div>
      <div class="extend-item">4️⃣ JSON ফাইলের বদলে SQLite ডাটাবেস ব্যবহার করো</div>
    </div>
  `,
  12: `


    <div class="project-badges"><span class="badge-level">অ্যাডভান্সড</span></div>
    <h2>🐍 Snake Game</h2>
    <p class="subtitle">ক্লাসিক Snake গেম — অ্যারো কী দিয়ে সাপ চালাও, খাবার খেলে বড় হও, নিজের শরীরে বা দেয়ালে ধাক্কা লাগলে গেম ওভার। pygame দিয়ে বানানো।</p>

    <div class="needs-box">
      <strong>💡 এই প্রজেক্টে যা লাগবে:</strong>
      <ul>
        <li>লিস্ট (সাপের শরীরের অংশ রাখতে) — <strong>মডিউল ১</strong></li>
        <li>কন্ডিশনালস — <strong>মডিউল ২</strong></li>
        <li>while লুপ (গেম লুপ) — <strong>মডিউল ৩</strong></li>
        <li>ফাংশন — <strong>মডিউল ৪</strong></li>
        <li>pygame লাইব্রেরি — <strong>মডিউল ৭</strong></li>
      </ul>
    </div>

    <div class="note-box">
      ⚠️ <strong>ইনস্টল করতে হবে:</strong> <code>pip install pygame</code> — তারপর <code>python snake_game.py</code> দিয়ে রান করো। এটা ব্রাউজারে দেখা যাবে না, নিজের কম্পিউটারে একটা গেম উইন্ডো খুলবে।
    </div>

    <h3>🔹 সম্পূর্ণ কোড</h3>
    <div class="vscode-panel">
      <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>snake_game.py</div></div>
      <div class="code-wrap"><pre class="code-block"><code><span class="kw">import</span> pygame
<span class="kw">import</span> random

pygame.init()

<span class="cmt"># উইন্ডোর সাইজ ও প্রতিটা ব্লকের সাইজ</span>
WIDTH, HEIGHT = <span class="str">600</span>, <span class="str">400</span>
BLOCK = <span class="str">20</span>

<span class="cmt"># রঙের প্যালেট</span>
BLACK = (<span class="str">0</span>, <span class="str">0</span>, <span class="str">0</span>)
GREEN = (<span class="str">0</span>, <span class="str">200</span>, <span class="str">0</span>)
RED   = (<span class="str">220</span>, <span class="str">50</span>, <span class="str">50</span>)
WHITE = (<span class="str">255</span>, <span class="str">255</span>, <span class="str">255</span>)

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption(<span class="str">"🐍 Snake Game"</span>)
clock = pygame.time.Clock()
font  = pygame.font.SysFont(<span class="str">"Arial"</span>, <span class="str">24</span>)

<span class="cmt"># নতুন র‍্যান্ডম খাবারের পজিশন তৈরির ফাংশন — গ্রিডের সাথে align করা</span>
<span class="kw">def</span> <span class="fn">random_food_position</span>():
    x = random.randrange(<span class="str">0</span>, WIDTH - BLOCK, BLOCK)
    y = random.randrange(<span class="str">0</span>, HEIGHT - BLOCK, BLOCK)
    <span class="kw">return</span> (x, y)

<span class="cmt"># মূল গেম লুপ চালানোর ফাংশন</span>
<span class="kw">def</span> <span class="fn">game_loop</span>():
    <span class="cmt"># সাপ শুরুতে মাঝখানে ৩ ব্লক লম্বা — লিস্টে প্রতিটা অংশের (x, y) রাখা হচ্ছে</span>
    snake = [(<span class="str">100</span>, <span class="str">100</span>), (<span class="str">80</span>, <span class="str">100</span>), (<span class="str">60</span>, <span class="str">100</span>)]
    direction = <span class="str">"RIGHT"</span>

    food = random_food_position()
    score = <span class="str">0</span>
    game_over = <span class="kw">False</span>

    <span class="kw">while not</span> game_over:
        <span class="cmt"># সব ইভেন্ট (কীবোর্ড, উইন্ডো বন্ধ করা) চেক করা হচ্ছে</span>
        <span class="kw">for</span> event <span class="kw">in</span> pygame.event.get():
            <span class="kw">if</span> event.type == pygame.QUIT:
                <span class="kw">return</span>

            <span class="kw">if</span> event.type == pygame.KEYDOWN:
                <span class="cmt"># উল্টো দিকে সরাসরি ঘোরা যাবে না (ডানে যেতে যেতে হুট করে বামে না)</span>
                <span class="kw">if</span> event.key == pygame.K_UP <span class="kw">and</span> direction != <span class="str">"DOWN"</span>:
                    direction = <span class="str">"UP"</span>
                <span class="kw">elif</span> event.key == pygame.K_DOWN <span class="kw">and</span> direction != <span class="str">"UP"</span>:
                    direction = <span class="str">"DOWN"</span>
                <span class="kw">elif</span> event.key == pygame.K_LEFT <span class="kw">and</span> direction != <span class="str">"RIGHT"</span>:
                    direction = <span class="str">"LEFT"</span>
                <span class="kw">elif</span> event.key == pygame.K_RIGHT <span class="kw">and</span> direction != <span class="str">"LEFT"</span>:
                    direction = <span class="str">"RIGHT"</span>

        <span class="cmt"># সাপের মাথার বর্তমান পজিশন থেকে নতুন মাথা হিসাব করা হচ্ছে</span>
        head_x, head_y = snake[<span class="str">0</span>]
        <span class="kw">if</span> direction == <span class="str">"UP"</span>:
            head_y -= BLOCK
        <span class="kw">elif</span> direction == <span class="str">"DOWN"</span>:
            head_y += BLOCK
        <span class="kw">elif</span> direction == <span class="str">"LEFT"</span>:
            head_x -= BLOCK
        <span class="kw">elif</span> direction == <span class="str">"RIGHT"</span>:
            head_x += BLOCK

        new_head = (head_x, head_y)

        <span class="cmt"># দেয়ালে বা নিজের শরীরে ধাক্কা লাগলে গেম ওভার</span>
        <span class="kw">if</span> (head_x < <span class="str">0</span> <span class="kw">or</span> head_x >= WIDTH <span class="kw">or</span>
            head_y < <span class="str">0</span> <span class="kw">or</span> head_y >= HEIGHT <span class="kw">or</span>
            new_head <span class="kw">in</span> snake):
            game_over = <span class="kw">True</span>
            <span class="kw">break</span>

        <span class="cmt"># নতুন মাথা লিস্টের শুরুতে যোগ করা হচ্ছে</span>
        snake.insert(<span class="str">0</span>, new_head)

        <span class="cmt"># খাবার খেলে score বাড়বে ও নতুন খাবার আসবে, লেজ কাটা হবে না (সাপ বড় হবে)</span>
        <span class="kw">if</span> new_head == food:
            score += <span class="str">1</span>
            food = random_food_position()
        <span class="kw">else</span>:
            <span class="cmt"># খাবার না খেলে লেজের শেষ অংশ বাদ দেওয়া হচ্ছে (সাপের length ঠিক থাকে)</span>
            snake.pop()

        <span class="cmt"># স্ক্রিন আঁকা হচ্ছে</span>
        screen.fill(BLACK)
        <span class="kw">for</span> segment <span class="kw">in</span> snake:
            pygame.draw.rect(screen, GREEN, (segment[<span class="str">0</span>], segment[<span class="str">1</span>], BLOCK, BLOCK))
        pygame.draw.rect(screen, RED, (food[<span class="str">0</span>], food[<span class="str">1</span>], BLOCK, BLOCK))

        score_text = font.render(<span class="str">f"Score: {score}"</span>, <span class="kw">True</span>, WHITE)
        screen.blit(score_text, (<span class="str">10</span>, <span class="str">10</span>))

        pygame.display.update()
        clock.tick(<span class="str">10</span>)   <span class="cmt"># প্রতি সেকেন্ডে ১০ বার আপডেট — গতি নিয়ন্ত্রণ করে</span>

    <span class="cmt"># গেম ওভার মেসেজ দেখানো</span>
    over_text = font.render(<span class="str">f"Game Over! Score: {score}"</span>, <span class="kw">True</span>, WHITE)
    screen.blit(over_text, (WIDTH <span class="cmt">// 2 - 100</span>, HEIGHT <span class="cmt">// 2</span>))
    pygame.display.update()
    pygame.time.wait(<span class="str">2000</span>)

game_loop()
pygame.quit()</code></pre></div>
      <div class="vscode-divider">TERMINAL</div>
      <div class="output-wrap"><div class="output-prompt">PS C:\\Users\\HP&gt; python snake_game.py</div><div class="output-block">[একটা কালো গেম উইন্ডো খুলবে — সবুজ সাপ, লাল খাবার, উপরে বাম কোণে Score দেখাবে। অ্যারো-কী দিয়ে চালাও, দেয়াল/নিজের গায়ে লাগলে ২ সেকেন্ড পর "Game Over" দেখিয়ে বন্ধ হবে]</div></div>
    </div>

    <div class="extend-box">
      <div class="extend-item">🚀 <strong>বাড়াতে চাও?</strong></div>
      <div class="extend-item">1️⃣ হাই-স্কোর একটা ফাইলে সেভ রাখো, প্রতিবার সেরা স্কোর দেখাও</div>
      <div class="extend-item">2️⃣ খাবার খেলে সাপের গতি একটু একটু করে বাড়াও (কঠিন হতে থাকবে)</div>
      <div class="extend-item">3️⃣ "R" চাপলে গেম আবার শুরু হওয়ার সুবিধা যোগ করো (game over-এর পর)</div>
      <div class="extend-item">4️⃣ দেয়ালে ধাক্কা লাগলে গেম ওভার না করে উল্টো দিক দিয়ে বের হওয়ার (wrap-around) ফিচার যোগ করো</div>
    </div>
  `,
};