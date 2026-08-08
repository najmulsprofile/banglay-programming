/**
 * Banglay Python — main.js
 * Author  : Md Najmul Hosen
 * GitHub  : https://github.com/najmulsprofile
 * LinkedIn: https://linkedin.com/in/najmulsprofile
 *
 * All site-wide state, routing helpers, and lesson content live here.
 * No login / authentication — every visitor can read every module freely.
 */

/* ─────────────────────────────────────────────────────────────
   MODULE METADATA
   Each entry drives the module-grid card AND the lesson sidebar.
───────────────────────────────────────────────────────────── */
const MODULES = [
  { id: 1,  title: "ভেরিয়েবল ও ডাটা টাইপ",               icon: "📘" },
  { id: 2,  title: "কন্ডিশনালস (if / elif / else)",         icon: "🔀" },
  { id: 3,  title: "লুপ (for / while)",                      icon: "🔁" },
  { id: 4,  title: "ফাংশন",                                  icon: "🧩" },
  { id: 5,  title: "ফাইল I/O",                               icon: "📂" },
  { id: 6,  title: "এক্সেপশন (try / except)",               icon: "⚠️" },
  { id: 7,  title: "লাইব্রেরি ও মডিউল",                    icon: "📦" },
  { id: 8,  title: "রেগুলার এক্সপ্রেশন (Regex)",           icon: "🔍" },
  { id: 9,  title: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং",     icon: "🏗️" },
  { id: 10, title: "অ্যাডভান্সড টপিক",                      icon: "🚀" },
];

/* ─────────────────────────────────────────────────────────────
   LESSON SECTIONS
   Module 1 is fully written; modules 2-10 are stubs.
   Each section = { id, title, content (HTML string) }
───────────────────────────────────────────────────────────── */
const LESSONS = {

  /* ══════════════════════════════════════════════════════════
     MODULE 1 — Variable & Data Types (complete)
  ══════════════════════════════════════════════════════════ */
  1: [
    {
      id: "1.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📘 মডিউল ১: ভেরিয়েবল ও ডাটা টাইপ</h2>

        <h3>🔹 ১.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>ভেরিয়েবল কী এবং কেন প্রয়োজন</li>
          <li>পাইথনে ভেরিয়েবল নামকরণের নিয়ম</li>
          <li>বিভিন্ন ডাটা টাইপ (Numeric, String, Boolean, Sequence, Mapping, Set, None)</li>
          <li>টাইপ চেকিং ও টাইপ কনভার্শন</li>
          <li>বেস্ট প্র্যাকটিস ও কমন পিটফল</li>
        </ul>
      `
    },
    {
      id: "1.1",
      title: "ভেরিয়েবল কী?",
      content: `
        <h3>🔹 ১.১ ভেরিয়েবল কী? (What is a Variable?)</h3>
        <p>একটি ভেরিয়েবল হলো মেমোরিতে ডাটা সংরক্ষণের একটি নামকরণকৃত স্থান।</p>
        <p><strong>সহজ ভাষায়:</strong> একটি ভেরিয়েবল হলো একটি লেবেল দেওয়া বাক্স।</p>

        <p><strong>উদাহরণ ১: ভেরিয়েবল তৈরি</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>age = 20
name = "Najmul"</code></pre></div>
        </div>

        <p><strong>উদাহরণ ২: ভেরিয়েবলের মান পরিবর্তন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>age = 20
print(age)

age = 21
print(age)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">20<br>21</div></div>
        </div>
      `
    },
    {
      id: "1.2",
      title: "নামকরণের নিয়ম",
      content: `
        <h3>🔹 ১.২ পাইথনে ভেরিয়েবল নামকরণের নিয়ম</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr><th>নিয়ম</th><th>সঠিক উদাহরণ</th><th>ভুল উদাহরণ</th></tr>
            </thead>
            <tbody>
              <tr><td>শুধু a-z, A-Z, 0-9, _ ব্যবহার করা যায়</td><td>user_age, var1, _data</td><td>user@age, my-name</td></tr>
              <tr><td>সংখ্যা দিয়ে শুরু করা যাবে না</td><td>name1, _2value</td><td>1name, 2var</td></tr>
              <tr><td>স্পেস দেওয়া যাবে না</td><td>first_name, studentMarks</td><td>first name</td></tr>
              <tr><td>case-sensitive</td><td colspan="2">age, Age, AGE → তিনটি ভিন্ন ভেরিয়েবল</td></tr>
              <tr><td>রিজার্ভড কীওয়ার্ড নয়</td><td>my_class, for_loop</td><td>class, if, for</td></tr>
              <tr><td>অর্থপূর্ণ নাম</td><td>total_price, student_age</td><td>tp, x, a1</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "1.3",
      title: "Numeric টাইপ",
      content: `
        <h3>🔹 ১.৩ নাম্বারিক টাইপ (int এবং float)</h3>
        <p><strong>Integer (int)</strong> — পূর্ণ সংখ্যা</p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_age = 20
noman_age  = 17
fatema_age = 15

print(f"নাজমুলের বয়স = {najmul_age}")
print(f"নোমানের বয়স  = {noman_age}")
print(f"ফাতেমার বয়স  = {fatema_age}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          নাজমুলের বয়স = 20<br>
          নোমানের বয়স  = 17<br>
          ফাতেমার বয়স  = 15
        </div></div>
      </div>

        <p><strong>Float (float)</strong> — দশমিক সংখ্যা</p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_height = 5.8
noman_weight  = 55.5

print(f"নাজমুলের উচ্চতা = {najmul_height} ফুট")
print(f"নোমানের ওজন     = {noman_weight} কেজি")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          নাজমুলের উচ্চতা = 5.8 ফুট<br>
          নোমানের ওজন     = 55.5 কেজি
        </div></div>
      </div>

        <p><strong>⚠️ সতর্কতা: Float নির্ভুলতা জটিলতা</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>result = 0.1 + 0.2
print(f"0.1 + 0.2 = {result}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">0.1 + 0.2 = 0.30000000000000004</div></div>
      </div>
      `
    },
    {
      id: "1.4",
      title: "String টাইপ",
      content: `
        <h3>🔹 ১.৪ স্ট্রিং টাইপ (str)</h3>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_name = "Najmul"
phone       = "01712345678"

print(f"নাম: {najmul_name}")
print(f"ফোন: {phone}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">নাম: Najmul<br>ফোন: 01712345678</div></div>
      </div>

        <p><strong>স্ট্রিং অপারেশন</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>print("কনকাটেনেশন: " + "Najmul" + " " + "Hosen")
print("রিপিটিশন: " + ("Ha" * 3))</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          কনকাটেনেশন: Najmul Hosen<br>
          রিপিটিশন: HaHaHa
        </div></div>
      </div>

        <p><strong>স্ট্রিং ইনডেক্সিং ও স্লাইসিং</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>name = "Python"

print(f"name[0]   = {name[0]}")
print(f"name[1]   = {name[1]}")
print(f"name[-1]  = {name[-1]}")
print(f"name[0:3] = {name[0:3]}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          name[0]   = P<br>
          name[1]   = y<br>
          name[-1]  = n<br>
          name[0:3] = Pyt
        </div></div>
      </div>
      `
    },
    {
      id: "1.5",
      title: "Boolean টাইপ",
      content: `
        <h3>🔹 ১.৫ বুলিয়ান টাইপ (bool)</h3>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>is_najmul_student = True
is_noman_student  = False

print(f"নাজমুল কি শিক্ষার্থী? {is_najmul_student}")
print(f"নোমান কি শিক্ষার্থী?  {is_noman_student}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          নাজমুল কি শিক্ষার্থী? True<br>
          নোমান কি শিক্ষার্থী?  False
        </div></div>
      </div>
      `
    },
    {
      id: "1.6",
      title: "List ও Tuple",
      content: `
        <h3>🔹 ১.৬ সিকোয়েন্স টাইপ (list এবং tuple)</h3>
        <p><strong>List (পরিবর্তনযোগ্য)</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_grades = [85, 90, 78, 92]
print(f"মূল লিস্ট: {najmul_grades}")

najmul_grades.append(88)
print(f"অ্যাপেন্ডের পরে: {najmul_grades}")

najmul_grades[2] = 80
print(f"পরিবর্তনের পরে: {najmul_grades}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          মূল লিস্ট: [85, 90, 78, 92]<br>
          অ্যাপেন্ডের পরে: [85, 90, 78, 92, 88]<br>
          পরিবর্তনের পরে: [85, 90, 80, 92, 88]
        </div></div>
      </div>

        <p><strong>Tuple (অপরিবর্তনীয়)</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_birth = (2004, 5, 15)
print(f"টাপল: {najmul_birth}")
print(f"বছর: {najmul_birth[0]}, মাস: {najmul_birth[1]}, দিন: {najmul_birth[2]}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          টাপল: (2004, 5, 15)<br>
          বছর: 2004, মাস: 5, দিন: 15
        </div></div>
      </div>
      `
    },
    {
      id: "1.7",
      title: "Dict, Set, None",
      content: `
        <h3>🔹 ১.৭ ম্যাপিং (dict), সেট (set), এবং None</h3>

        <p><strong>Dictionary (dict)</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_info = {'name': 'Najmul', 'age': 20, 'city': 'Dhaka'}
print(f"নাম: {najmul_info['name']}")
print(f"বয়স: {najmul_info['age']}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">নাম: Najmul<br>বয়স: 20</div></div>
      </div>

        <p><strong>Set</strong> — ইউনিক ভ্যালু স্বয়ংক্রিয়ভাবে রাখে</p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_courses = {'Python', 'JavaScript', 'C++', 'Python'}
print(f"সেট: {najmul_courses}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">সেট: {'Python', 'JavaScript', 'C++'}</div></div>
      </div>

        <p><strong>None টাইপ</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_result = None

if najmul_result is None:
    print("এখনও কোনো মান অ্যাসাইন করা হয়নি")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">এখনও কোনো মান অ্যাসাইন করা হয়নি</div></div>
      </div>
      `
    },
    {
      id: "1.8",
      title: "টাইপ চেকিং ও কনভার্শন",
      content: `
        <h3>🔹 ১.৮ টাইপ চেকিং ও কনভার্শন</h3>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>najmul_age  = 20
najmul_name = "Najmul"

print(f"najmul_age এর টাইপ:     {type(najmul_age)}")
print(f"najmul_name এর টাইপ:    {type(najmul_name)}")
print(f"najmul_name কি স্ট্রিং? {isinstance(najmul_name, str)}")</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">
          najmul_age এর টাইপ:     &lt;class 'int'&gt;<br>
          najmul_name এর টাইপ:    &lt;class 'str'&gt;<br>
          najmul_name কি স্ট্রিং? True
        </div></div>
      </div>

        <p><strong>টাইপ কনভার্শন</strong></p>
        <div class="vscode-panel">
        <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
        <div class="code-wrap"><pre class="code-block"><code>num_str  = "20"
num_int  = int(num_str)          # str → int
age_str  = str(17)               # int → str
num_fl   = float(10)             # int → float

print(int("20"))    # → 20
print(str(17))      # → '17'
print(float(10))    # → 10.0</code></pre></div>
        <div class="vscode-divider">TERMINAL</div>
        <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">20<br>'17'<br>10.0</div></div>
      </div>
      `
    },
    {
      id: "1.9",
      title: "প্র্যাকটিস প্রবলেম",
      content: `
        <h3>📝 ১.৯ প্র্যাকটিস প্রবলেম</h3>
        <p><strong>প্রবলেম ১ (বিগিনার):</strong> আপনার নাম, বয়স ও শহরের জন্য ভেরিয়েবল তৈরি করুন। f-string ব্যবহার করে প্রিন্ট করুন।</p>
        <p><strong>প্রবলেম ২ (বিগিনার):</strong> ৫টি সংখ্যার একটি লিস্ট তৈরি করুন। শেষে একটি নতুন সংখ্যা যোগ করুন। তৃতীয় সংখ্যাটি পরিবর্তন করুন।</p>
        <p><strong>প্রবলেম ৩ (ইন্টারমিডিয়েট):</strong> একটি বইয়ের জন্য ডিকশনারি তৈরি করুন (title, author, year, price)। প্রতিটি ভ্যালু প্রিন্ট করুন।</p>
        <p><strong>প্রবলেম ৪ (ইন্টারমিডিয়েট):</strong> স্ট্রিং <code>"100"</code> কে integer, তারপর float, তারপর আবার string-এ কনভার্ট করুন।</p>
        <p><strong>প্রবলেম ৫ (ইন্টারমিডিয়েট):</strong> আপনার জন্ম বছর, মাস, দিন নিয়ে একটি টাপল তৈরি করুন এবং প্রতিটি মান আলাদাভাবে প্রিন্ট করুন।</p>
      `
    },
    {
      id: "1.10",
      title: "কী টেকঅ্যাওয়ে",
      content: `
        <h3>🔹 ১.১০ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Variables & Data Types — Cheat Sheet ──────────────
name       = "Najmul"                       # str
age        = 20                             # int
height     = 5.8                            # float
is_student = True                           # bool
grades     = [85, 90, 78]                   # list  (mutable)
birth      = (2004, 5, 15)                  # tuple (immutable)
info       = {'name': 'Najmul', 'age': 20}  # dict
courses    = {'Python', 'JS'}               # set  (unique values)

# ── Type Checking ──────────────────────────────────────
type(age)               # <class 'int'>
isinstance(name, str)   # True

# ── Type Conversion ────────────────────────────────────
int("20")   # → 20
str(20)     # → '20'
float(10)   # → 10.0</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ ভেরিয়েবল মেমোরিতে ডাটা সংরক্ষণ করে</div>
          <div class="takeaway-item">✅ নাম অক্ষর বা আন্ডারস্কোর দিয়ে শুরু হবে</div>
          <div class="takeaway-item">✅ List mutable; Tuple immutable</div>
          <div class="takeaway-item">✅ Dictionary কী-ভ্যালু জোড়া</div>
          <div class="takeaway-item">✅ Set ইউনিক ভ্যালু স্বয়ংক্রিয়ভাবে ধরে রাখে</div>
          <div class="takeaway-item">✅ <code>type()</code> ও <code>isinstance()</code> দিয়ে টাইপ চেক করুন</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=2&section=2.0">
          পরবর্তী মডিউল: কন্ডিশনালস →
        </a>
      `
    }
  ],

  /* ══════════════════════════════════════════════════════════
     MODULES 2–10 — stubs (content coming soon)
  ══════════════════════════════════════════════════════════ */
  2: [
    {
      id: "2.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📘 মডিউল ২: কন্ডিশনালস (সিদ্ধান্ত গ্রহণ)</h2>
        <h3>🔹 ২.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>কন্ডিশনাল স্টেটমেন্ট কী এবং কেন প্রয়োজন</li>
          <li>তুলনা অপারেটর (==, !=, &gt;, &lt;, &gt;=, &lt;=)</li>
          <li>if, if-else, এবং if-elif-else স্টেটমেন্ট</li>
          <li>লজিক্যাল অপারেটর (and, or, not)</li>
          <li>টার্নারি অপারেটর (shorthand if-else)</li>
          <li>নেস্টেড if স্টেটমেন্ট</li>
        </ul>
      `
    },
    {
      id: "2.1",
      title: "কন্ডিশনাল স্টেটমেন্ট কী?",
      content: `
        <h3>🔹 ২.১ কন্ডিশনাল স্টেটমেন্ট কী? (What is a Conditional Statement?)</h3>
        <p>একটি কন্ডিশনাল স্টেটমেন্ট প্রোগ্রামকে শর্তের ভিত্তিতে সিদ্ধান্ত নিতে দেয়।</p>
        <p><strong>সহজ ভাষায়:</strong> এটি একটি প্রশ্ন করার মতো। উত্তর যদি হ্যাঁ (True) হয় তবে কিছু করো, আর যদি না (False) হয় তবে অন্য কিছু করো।</p>
        <p><strong>বাস্তব উদাহরণ:</strong> যদি বৃষ্টি হয় → ছাতা নিও, নাহলে → সানগ্লাস নিও</p>
        <p><strong>পাইথনে আমরা ব্যবহার করি:</strong> <code>if</code>, <code>elif</code>, <code>else</code></p>
      `
    },
    {
      id: "2.2",
      title: "তুলনা অপারেটর",
      content: `
        <h3>🔹 ২.২ তুলনা অপারেটর (Comparison Operators)</h3>
        <div class="table-wrapper">
          <table>
            <tr><th>অপারেটর</th><th>অর্থ</th><th>উদাহরণ</th><th>ফলাফল</th></tr>
            <tr><td>==</td><td>সমান</td><td>5 == 5</td><td>True</td></tr>
            <tr><td>!=</td><td>অসমান</td><td>5 != 3</td><td>True</td></tr>
            <tr><td>&gt;</td><td>বড়</td><td>10 &gt; 5</td><td>True</td></tr>
            <tr><td>&lt;</td><td>ছোট</td><td>3 &lt; 7</td><td>True</td></tr>
            <tr><td>&gt;=</td><td>বড় বা সমান</td><td>5 &gt;= 5</td><td>True</td></tr>
            <tr><td>&lt;=</td><td>ছোট বা সমান</td><td>4 &lt;= 6</td><td>True</td></tr>
          </table>
        </div>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>age = 18
print(age >= 18)   # True
print(age == 20)   # False
print(age != 17)   # True</code></pre></div>
        </div>
      `
    },
    {
      id: "2.3",
      title: "if স্টেটমেন্ট",
      content: `
        <h3>🔹 ২.৩ if স্টেটমেন্ট (The if Statement)</h3>
        <p><code>if</code> ব্যবহার করো যখন কোড চালাতে চাও <strong>শুধুমাত্র যদি</strong> শর্তটি True হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>temperature = 35

if temperature > 30:
    print("It's hot outside. Take an umbrella.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">It's hot outside. Take an umbrella.</div></div>
        </div>
      `
    },
    {
      id: "2.4",
      title: "if-else স্টেটমেন্ট",
      content: `
        <h3>🔹 ২.৪ if-else স্টেটমেন্ট (The if-else Statement)</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>age = 16

if age >= 18:
    print("You can vote.")
else:
    print("You cannot vote yet.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">You cannot vote yet.</div></div>
        </div>
      `
    },
    {
      id: "2.5",
      title: "if-elif-else স্টেটমেন্ট",
      content: `
        <h3>🔹 ২.৫ if-elif-else স্টেটমেন্ট (The if-elif-else Statement)</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>score = 75

if score >= 90:
    grade = "A+"
    remark = "Excellent! Outstanding work!"
elif score >= 80:
    grade = "A"
    remark = "Very Good, keep it up!"
elif score >= 70:
    grade = "B"
    remark = "Good, but can do better!"
elif score >= 60:
    grade = "C"
    remark = "Need improvement"
elif score >= 50:
    grade = "D"
    remark = "Just passed, study harder!"
elif score >= 40:
    grade = "E"
    remark = "Barely passed, need serious improvement!"
else:
    grade = "F"
    remark = "Sorry, you failed. Better luck next time!"

print(f"Your grade: {grade}")
print(f"Remark: {remark}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Your grade: B<br>Remark: Good, but can do better!</div></div>
        </div>
      `
    },
    {
      id: "2.6",
      title: "লজিক্যাল অপারেটর",
      content: `
        <h3>🔹 ২.৬ লজিক্যাল অপারেটর (Logical Operators — and, or, not)</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># AND — উভয় শর্তই True হতে হবে
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("You can enter the cinema.")
else:
    print("You cannot enter.")

# OR — অন্তত একটি শর্ত True হলেই হবে
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's a holiday.")
else:
    print("It's a workday.")

# NOT — ফলাফল উল্টে দেয়
is_locked = False

if not is_locked:
    print("Door is open.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">You can enter the cinema.<br>It's a holiday.<br>Door is open.</div></div>
        </div>
      `
    },
    {
      id: "2.7",
      title: "টার্নারি অপারেটর",
      content: `
        <h3>🔹 ২.৭ টার্নারি অপারেটর (Ternary Operator)</h3>
        <p>এক লাইনে if-else লেখার shorthand পদ্ধতি।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>marks = 65
result = "Pass" if marks >= 40 else "Fail"
print(result)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Pass</div></div>
        </div>
      `
    },
    {
      id: "2.8",
      title: "নেস্টেড if",
      content: `
        <h3>🔹 ২.৮ নেস্টেড if স্টেটমেন্ট (Nested if Statements)</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>age = 25
has_license = True

if age >= 18:
    print("Age requirement met.")
    if has_license:
        print("You have a license. You can drive.")
    else:
        print("You need a license first.")
else:
    print("You are too young to drive.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Age requirement met.<br>You have a license. You can drive.</div></div>
        </div>
      `
    },
    {
      id: "2.9",
      title: "সাধারণ ভুল",
      content: `
        <h3>🔹 ২.৯ সাধারণ ভুল (Common Mistakes)</h3>
        <div class="table-wrapper">
          <table>
            <tr><th>ভুল</th><th>কেন ভুল</th><th>সমাধান</th></tr>
            <tr><td>if x = 5:</td><td>'=' এসাইনমেন্ট, তুলনা নয়</td><td>if x == 5: ব্যবহার করো</td></tr>
            <tr><td>if x &gt; 5</td><td>কোলন ':' ভুলে যাওয়া</td><td>if x &gt; 5: ব্যবহার করো</td></tr>
            <tr><td>ভুল ইন্ডেন্টেশন</td><td>পাইথন ইন্ডেন্টেশন দিয়ে ব্লক চেনে</td><td>৪ স্পেস ধারাবাহিকভাবে ব্যবহার করো</td></tr>
            <tr><td>else if লেখা</td><td>পাইথন else if বোঝে না</td><td>elif ব্যবহার করো</td></tr>
          </table>
        </div>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># টিপ ১: একাধিক ভেরিয়েবল চেক
a, b, c = 5, 10, 7

if a > b and a > c:
    print("a is the largest")
elif b > a and b > c:
    print("b is the largest")
else:
    print("c is the largest")

# টিপ ২: 'in' অপারেটর
vowels = "aeiou"
character = "e"

if character in vowels:
    print(f"'{character}' is a vowel.")

# টিপ ৩: খালি মান চেক
name = ""

if not name:
    print("Name is not provided.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">b is the largest<br>'e' is a vowel.<br>Name is not provided.</div></div>
        </div>
      `
    },
    {
      id: "2.10",
      title: "প্র্যাকটিস প্রবলেম",
      content: `
        <h3>📝 ২.১০ প্র্যাকটিস প্রবলেম (Practice Problems)</h3>
        <ol>
          <li>একটি সংখ্যা ধনাত্মক, ঋণাত্মক নাকি শূন্য তা চেক করো।</li>
          <li>তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যাটি বের করো।</li>
          <li>ইউজারের বয়স এবং সিটবেল্টের অবস্থা চেক করো।</li>
          <li>একটি ক্যারেক্টার vowel কিনা টার্নারি অপারেটর দিয়ে চেক করো।</li>
          <li>লগইন সিস্টেম তৈরি করো (username: admin, password: 123)।</li>
        </ol>
      `
    },
    {
      id: "2.11",
      title: "কী টেকঅ্যাওয়ে",
      content: `
        <h3>🔹 ২.১১ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># Basic if
if x > 0:
    print('Positive')

# if-else
if x >= 0:
    print('Positive or zero')
else:
    print('Negative')

# if-elif-else
if x > 0:
    print('Positive')
elif x == 0:
    print('Zero')
else:
    print('Negative')

# Logical operators
if x > 0 and y > 0:
    print('Both are positive')

# Ternary operator
status = 'Large' if x > 10 else 'Small'

# Nested if
if x > 0:
    if x % 2 == 0:
        print('Positive even number')</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ কন্ডিশনাল স্টেটমেন্ট প্রোগ্রামকে সিদ্ধান্ত নিতে সাহায্য করে</div>
          <div class="takeaway-item">✅ সবসময় কোলন <code>:</code> এবং সঠিক ইন্ডেন্টেশন ব্যবহার করো</div>
          <div class="takeaway-item">✅ একটি শর্তের জন্য <code>if</code>, দুটি পথের জন্য <code>if-else</code>, একাধিক শর্তের জন্য <code>if-elif-else</code></div>
          <div class="takeaway-item">✅ তুলনা অপারেটর: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></div>
          <div class="takeaway-item">✅ লজিক্যাল অপারেটর: <code>and</code>, <code>or</code>, <code>not</code></div>
          <div class="takeaway-item">✅ টার্নারি অপারেটর সরল if-else এর shorthand</div>
          <div class="takeaway-item">✅ নেস্টেড if দিয়ে জটিল শর্ত তৈরি করা যায়</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=3&section=3.0">
          পরবর্তী মডিউল: লুপ (for/while) →
        </a>
      `
    }
  ],
  3: [
    {
      id: "3.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📘 মডিউল ৩: লুপ (Loops)</h2>
        <h3>🔹 ৩.০ মডিউল পরিচিতি (Module Overview)</h3>
        <p>এই মডিউলে আমরা যা শিখব:</p>
        <ul>
          <li>লুপ কী এবং কেন প্রয়োজন</li>
          <li>for লুপ (সিকোয়েন্সের উপর ইটারেট করা)</li>
          <li>range() ফাংশন</li>
          <li>while লুপ</li>
          <li>লুপ কন্ট্রোল স্টেটমেন্ট (break, continue, pass)</li>
          <li>নেস্টেড লুপ</li>
          <li>ইনফিনিট লুপ এবং এড়ানোর উপায়</li>
          <li>অ্যাডভান্সড লুপ টেকনিক (else with loops, enumerate)</li>
        </ul>
      `
    },
    {
      id: "3.1",
      title: "লুপ কী?",
      content: `
        <h3>🔹 ৩.১ লুপ কী? (What is a Loop?)</h3>
        <p>একটি লুপ হলো একটি কন্ট্রোল স্ট্রাকচার যা একটি ব্লক অব কোড একাধিকবার রিপিট করে।</p>
        <p><strong>সহজ ভাষায়:</strong> একই কোড ১০০ বার লেখার চেয়ে, একবার লুপের ভিতরে লিখে ১০০ বার চালানো।</p>
        <p><strong>পাইথনে দুই ধরনের লুপ:</strong></p>
        <ul>
          <li>🔹 <code>for</code> লুপ → ব্যবহার করো যখন জানো কতবার রিপিট করবে</li>
          <li>🔹 <code>while</code> লুপ → ব্যবহার করো যখন জানো না কতবার রিপিট করবে</li>
        </ul>
      `
    },
    {
      id: "3.2",
      title: "for লুপ",
      content: `
        <h3>🔹 ৩.২ for লুপ (The for Loop)</h3>
        <p><strong>সিনট্যাক্স:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for variable in sequence:
    # code to repeat</code></pre></div>
        </div>

        <p><strong>উদাহরণ ১: লিস্টের মাধ্যমে লুপ করা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>fruits = ['apple', 'banana', 'mango']
for fruit in fruits:
    print(f'I like {fruit}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">I like apple<br>I like banana<br>I like mango</div></div>
        </div>

        <p><strong>উদাহরণ ২: স্ট্রিংয়ের মাধ্যমে লুপ করা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>word = 'CAT'
for letter in word:
    print(f'Letter: {letter}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Letter: C<br>Letter: A<br>Letter: T</div></div>
        </div>

        <p><strong>উদাহরণ ৩: টাপলের মাধ্যমে লুপ করা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>colors = ('red', 'green', 'blue')
for color in colors:
    print(f'Color: {color}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Color: red<br>Color: green<br>Color: blue</div></div>
        </div>
      `
    },
    {
      id: "3.3",
      title: "range() ফাংশন",
      content: `
        <h3>🔹 ৩.৩ range() ফাংশন (The range() Function)</h3>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>সিনট্যাক্স</th><th>অর্থ</th><th>উদাহরণ</th><th>আউটপুট</th></tr></thead>
            <tbody>
              <tr><td>range(stop)</td><td>0 থেকে stop-1 পর্যন্ত</td><td>range(5)</td><td>0, 1, 2, 3, 4</td></tr>
              <tr><td>range(start, stop)</td><td>start থেকে stop-1 পর্যন্ত</td><td>range(2, 6)</td><td>2, 3, 4, 5</td></tr>
              <tr><td>range(start, stop, step)</td><td>step করে</td><td>range(1, 10, 2)</td><td>1, 3, 5, 7, 9</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>উদাহরণ ১: range(stop)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(5):
    print(f'i = {i}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">i = 0<br>i = 1<br>i = 2<br>i = 3<br>i = 4</div></div>
        </div>

        <p><strong>উদাহরণ ২: range(start, stop)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(2, 6):
    print(f'i = {i}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">i = 2<br>i = 3<br>i = 4<br>i = 5</div></div>
        </div>

        <p><strong>উদাহরণ ৩: range(start, stop, step)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(1, 10, 2):
    print(f'i = {i}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">i = 1<br>i = 3<br>i = 5<br>i = 7<br>i = 9</div></div>
        </div>

        <p><strong>উদাহরণ ৪: উল্টো দিকে গণনা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(5, 0, -1):
    print(f'i = {i}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">i = 5<br>i = 4<br>i = 3<br>i = 2<br>i = 1</div></div>
        </div>
      `
    },
    {
      id: "3.4",
      title: "while লুপ",
      content: `
        <h3>🔹 ৩.৪ while লুপ (The while Loop)</h3>
        <p><strong>সিনট্যাক্স:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>while condition:
    # code to repeat
    # make sure condition eventually becomes False</code></pre></div>
        </div>

        <p><strong>উদাহরণ ১: ১ থেকে ৫ পর্যন্ত গণনা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>count = 1
while count <= 5:
    print(f'Count is {count}')
    count += 1</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Count is 1<br>Count is 2<br>Count is 3<br>Count is 4<br>Count is 5</div></div>
        </div>

        <p><strong>উদাহরণ ২: পাসওয়ার্ড চেকার</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>correct_password = "python123"
user_input = ""
attempts = 0

while user_input != correct_password and attempts < 3:
    user_input = input("Enter password: ")
    attempts += 1

if user_input == correct_password:
    print("Login successful!")
else:
    print("Too many attempts. Account locked.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Enter password: wrong<br>Enter password: wrong2<br>Enter password: python123<br>Login successful!</div></div>
        </div>
      `
    },
    {
      id: "3.5",
      title: "break, continue, pass",
      content: `
        <h3>🔹 ৩.৫ লুপ কন্ট্রোল স্টেটমেন্ট (Loop Control Statements)</h3>

        <p><strong>🔹 break — লুপ থেকে বেরিয়ে আসো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(1, 6):
    print(f'Checking {i}')
    if i == 3:
        print('Found 3! Breaking out of loop.')
        break</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Checking 1<br>Checking 2<br>Checking 3<br>Found 3! Breaking out of loop.</div></div>
        </div>

        <p><strong>🔹 continue — বর্তমান ইটারেশন স্কিপ করো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(1, 6):
    if i == 3:
        print(f'Skipping {i}')
        continue
    print(f'Processing {i}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Processing 1<br>Processing 2<br>Skipping 3<br>Processing 4<br>Processing 5</div></div>
        </div>

        <p><strong>🔹 pass — প্লেসহোল্ডার (কিছু করে না)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(5):
    if i == 2:
        pass  # Will write code here later
    else:
        print(f'Processing {i}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Processing 0<br>Processing 1<br>Processing 3<br>Processing 4</div></div>
        </div>
      `
    },
    {
      id: "3.6",
      title: "নেস্টেড লুপ",
      content: `
        <h3>🔹 ৩.৬ নেস্টেড লুপ (Nested Loops)</h3>

        <p><strong>উদাহরণ ১: গুণন সারণী</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(1, 4):
    for j in range(1, 4):
        print(f'{i} x {j} = {i*j}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">1 x 1 = 1<br>1 x 2 = 2<br>1 x 3 = 3<br>2 x 1 = 2<br>2 x 2 = 4<br>2 x 3 = 6<br>3 x 1 = 3<br>3 x 2 = 6<br>3 x 3 = 9</div></div>
        </div>

        <p><strong>উদাহরণ ২: প্যাটার্ন প্রিন্টিং (ত্রিভুজ)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(1, 6):
    for j in range(i):
        print('*', end='')
    print()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">*<br>**<br>***<br>****<br>*****</div></div>
        </div>

        <p><strong>উদাহরণ ৩: ম্যাট্রিক্স (2D লিস্ট)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for item in row:
        print(item, end=' ')
    print()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">1 2 3<br>4 5 6<br>7 8 9</div></div>
        </div>
      `
    },
    {
      id: "3.7",
      title: "ইনফিনিট লুপ",
      content: `
        <h3>🔹 ৩.৭ ইনফিনিট লুপ (Infinite Loops and How to Avoid Them)</h3>

        <p><strong>❌ ভুল — এটি চিরকাল চলবে:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>i = 1
while i <= 5:
    print(i)
    # Missing i += 1 → i never changes → infinite loop!</code></pre></div>
        </div>

        <p><strong>✅ সঠিক — ভেরিয়েবল আপডেট করো:</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>i = 1
while i <= 5:
    print(i)
    i += 1  # ← This is crucial — updates the condition</code></pre></div>
        </div>

        <p><strong>সেইফ ইনফিনিট লুপ (break সহ):</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>while True:
    user_input = input('Type "quit" to exit: ')
    if user_input == 'quit':
        break</code></pre></div>
        </div>
      `
    },
    {
      id: "3.8",
      title: "অ্যাডভান্সড টেকনিক",
      content: `
        <h3>🔹 ৩.৮ অ্যাডভান্সড লুপ টেকনিক (Advanced Loop Techniques)</h3>

        <p><strong>🔹 else with Loops — লুপ স্বাভাবিকভাবে শেষ হলে চলে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(3):
    print(i)
else:
    print('Loop completed without break')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">0<br>1<br>2<br>Loop completed without break</div></div>
        </div>

        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>for i in range(3):
    print(i)
    if i == 1:
        print('Breaking now!')
        break
else:
    print('This will NOT run')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">0<br>1<br>Breaking now!</div></div>
        </div>

        <p><strong>🔹 enumerate() — index ও value একসাথে পাও</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>fruits = ['apple', 'banana', 'mango']
for index, fruit in enumerate(fruits):
    print(f'Index {index}: {fruit}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Index 0: apple<br>Index 1: banana<br>Index 2: mango</div></div>
        </div>

        <p><strong>🔹 ডিকশনারির মাধ্যমে লুপ করা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>student = {'name': 'Najmul', 'age': 20, 'city': 'Dhaka'}

for key in student:              # keys
    print(key)

for value in student.values():   # values
    print(value)

for key, value in student.items():  # key-value pairs
    print(f'{key} -> {value}')</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">name<br>age<br>city<br>---<br>Najmul<br>20<br>Dhaka<br>---<br>name -> Najmul<br>age -> 20<br>city -> Dhaka</div></div>
        </div>

        <p><strong>🔹 লিস্ট কম্প্রিহেনশন (List Comprehension)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>squares = [x**2 for x in range(1, 6)]
print(squares)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">[1, 4, 9, 16, 25]</div></div>
        </div>
      `
    },
    {
      id: "3.9",
      title: "প্র্যাকটিস প্রবলেম",
      content: `
        <h3>📝 ৩.৯ প্র্যাকটিস প্রবলেম (Practice Problems)</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> একটি for লুপ ব্যবহার করে 1 থেকে 100 পর্যন্ত সব সংখ্যা প্রিন্ট করো।</li>
          <li><strong>(বিগিনার)</strong> একটি while লুপ ব্যবহার করে 1 থেকে 50 পর্যন্ত সব সংখ্যার যোগফল বের করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> ইউজারের দেওয়া যেকোনো সংখ্যার নামতা প্রিন্ট করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> একটি সংখ্যা প্রাইম কিনা লুপ ব্যবহার করে চেক করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> ফিবোনাচ্চি সিরিজ n সংখ্যক পদ পর্যন্ত প্রিন্ট করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> নেস্টেড লুপ ব্যবহার করে পিরামিড প্যাটার্ন তৈরি করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> একটি সংখ্যার ফ্যাক্টরিয়াল বের করো (for এবং while উভয় ব্যবহার করে)।</li>
          <li><strong>(অ্যাডভান্সড)</strong> 'Python' শব্দের প্রতিটি অক্ষরের index ও character প্রিন্ট করতে enumerate() ব্যবহার করো।</li>
        </ol>
      `
    },
    {
      id: "3.10",
      title: "কী টেকঅ্যাওয়ে",
      content: `
        <h3>🔹 ৩.১০ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Loops Cheat Sheet ──────────────────────────────────

# for loop with range
for i in range(5):          # 0, 1, 2, 3, 4
for i in range(2, 6):       # 2, 3, 4, 5
for i in range(1, 10, 2):   # 1, 3, 5, 7, 9

# for loop with sequence
for item in my_list:
for letter in my_string:

# while loop
while condition:
    # code
    # update condition!

# Loop control
break       # Exit loop immediately
continue    # Skip current iteration
pass        # Placeholder — does nothing

# Nested loops
for i in range(3):
    for j in range(3):
        print(i, j)

# enumerate() — get index + value
for index, value in enumerate(my_list):
    print(index, value)

# else with loop — runs if no break occurred
for i in range(5):
    print(i)
else:
    print('Loop completed normally')

# List comprehension — one-line loop
squares = [x**2 for x in range(10)]</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ লুপ কোড ব্লক পুনরাবৃত্তি করে সময় বাঁচায় এবং ডুপ্লিকেশন কমায়</div>
          <div class="takeaway-item">✅ <code>for</code> লুপ ব্যবহার করো যখন জানো কতবার পুনরাবৃত্তি করবে</div>
          <div class="takeaway-item">✅ <code>while</code> লুপ ব্যবহার করো যখন শর্তের উপর নির্ভর করে</div>
          <div class="takeaway-item">✅ <code>range()</code> ফাংশন লুপের জন্য সংখ্যার সিকোয়েন্স জেনারেট করে</div>
          <div class="takeaway-item">✅ <code>break</code> সাথে সাথেই লুপ থেকে বেরিয়ে আসে</div>
          <div class="takeaway-item">✅ <code>continue</code> বর্তমান ইটারেশন স্কিপ করে পরবর্তীতে চলে যায়</div>
          <div class="takeaway-item">✅ <code>pass</code> কিছু করে না — শুধু placeholder হিসেবে কাজ করে</div>
          <div class="takeaway-item">✅ নেস্টেড লুপ হলো লুপের ভিতরে লুপ</div>
          <div class="takeaway-item">✅ <code>enumerate()</code> দিয়ে index ও value একসাথে পাওয়া যায়</div>
          <div class="takeaway-item">✅ List Comprehension লিস্ট তৈরির দ্রুত এক-লাইনের পদ্ধতি</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=4&section=4.0">
          পরবর্তী মডিউল: ফাংশন (Functions) →
        </a>
      `
    }
  ],
  4: [
    {
      id: "4.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📘 মডিউল ৪: ফাংশন (Functions)</h2>
        <h3>🔹 ৪.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>ফাংশন কী এবং কেন প্রয়োজন</li>
          <li>ফাংশন ডিফাইন ও কল করা</li>
          <li>প্যারামিটার, আর্গুমেন্ট ও রিটার্ন ভ্যালু</li>
          <li>পজিশনাল, কীওয়ার্ড, ডিফল্ট, *args, **kwargs</li>
          <li>স্কোপ: লোকাল vs গ্লোবাল</li>
          <li>ল্যাম্বডা ফাংশন</li>
          <li>রিকার্শন ও ডকস্ট্রিং</li>
        </ul>
      `
    },
    {
      id: "4.1",
      title: "ফাংশন কী?",
      content: `
        <h3>🔹 ৪.১ ফাংশন কী? (What is a Function?)</h3>
        <p>একটি ফাংশন হলো একটি রিইউজেবল ব্লক অব কোড যা একটি নির্দিষ্ট কাজ সম্পন্ন করে।</p>
        <p><strong>সহজ ভাষায়:</strong> ফাংশন হলো একটি রেসিপির মতো — একবার লেখো, যতবার ইচ্ছা ব্যবহার করো।</p>
        <ul>
          <li>🔹 <strong>বিল্ট-ইন ফাংশন:</strong> <code>print()</code>, <code>len()</code>, <code>input()</code></li>
          <li>🔹 <strong>ইউজার-ডিফাইনড ফাংশন:</strong> প্রোগ্রামাররা নিজে তৈরি করে</li>
        </ul>
      `
    },
    {
      id: "4.2",
      title: "ফাংশন ডিফাইন ও কল",
      content: `
        <h3>🔹 ৪.২ ফাংশন ডিফাইন ও কল করা</h3>
        <p><strong>উদাহরণ ১: সরল ফাংশন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def greet():
    print("Hello! Welcome to Python.")

greet()
greet()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello! Welcome to Python.<br>Hello! Welcome to Python.</div></div>
        </div>
        <p><strong>উদাহরণ ২: একটি প্যারামিটার সহ</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def greet_user(name):
    print(f"Hello {name}! Welcome to Python.")

greet_user("Najmul")
greet_user("Noman")
greet_user("Fatema")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello Najmul! Welcome to Python.<br>Hello Noman! Welcome to Python.<br>Hello Fatema! Welcome to Python.</div></div>
        </div>
        <p><strong>উদাহরণ ৩: একাধিক প্যারামিটার</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(5, 3)
add(10, 7)
add(20, 15)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">5 + 3 = 8<br>10 + 7 = 17<br>20 + 15 = 35</div></div>
        </div>
      `
    },
    {
      id: "4.3",
      title: "return স্টেটমেন্ট",
      content: `
        <h3>🔹 ৪.৩ return স্টেটমেন্ট</h3>
        <p><strong>উদাহরণ ১: একটি ভ্যালু রিটার্ন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def add(a, b):
    result = a + b
    return result

sum_result = add(5, 3)
print(f"The sum is: {sum_result}")
print(f"Another sum: {add(10, 20)}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">The sum is: 8<br>Another sum: 30</div></div>
        </div>
        <p><strong>উদাহরণ ২: একাধিক ভ্যালু রিটার্ন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def get_min_max(numbers):
    minimum = min(numbers)
    maximum = max(numbers)
    return minimum, maximum

min_val, max_val = get_min_max([5, 2, 8, 1, 9])
print(f"Minimum: {min_val}")
print(f"Maximum: {max_val}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Minimum: 1<br>Maximum: 9</div></div>
        </div>
        <p><strong>উদাহরণ ৩: Boolean রিটার্ন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def check_even(num):
    if num % 2 == 0:
        return True
    else:
        return False

print(check_even(4))
print(check_even(7))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">True<br>False</div></div>
        </div>
      `
    },
    {
      id: "4.4",
      title: "আর্গুমেন্টের ধরন",
      content: `
        <h3>🔹 ৪.৪ বিভিন্ন ধরনের আর্গুমেন্ট</h3>
        <p><strong>🔹 পজিশনাল আর্গুমেন্ট</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def introduce(name, age, city):
    print(f"I am {name}, {age} years old, from {city}.")

introduce("Najmul", 20, "Dhaka")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">I am Najmul, 20 years old, from Dhaka.</div></div>
        </div>
        <p><strong>🔹 কীওয়ার্ড আর্গুমেন্ট</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>introduce(city="Dhaka", name="Najmul", age=20)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">I am Najmul, 20 years old, from Dhaka.</div></div>
        </div>
        <p><strong>🔹 ডিফল্ট আর্গুমেন্ট</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def greet(name, message="Hello"):
    print(f"{message}, {name}!")

greet("Najmul")
greet("Najmul", "Good morning")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello, Najmul!<br>Good morning, Najmul!</div></div>
        </div>
        <p><strong>🔹 *args — যেকোনো সংখ্যক পজিশনাল আর্গুমেন্ট</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))
print(sum_all(5, 10, 15, 20))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">6<br>50</div></div>
        </div>
        <p><strong>🔹 **kwargs — যেকোনো সংখ্যক কীওয়ার্ড আর্গুমেন্ট</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Najmul", age=20, city="Dhaka")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">name: Najmul<br>age: 20<br>city: Dhaka</div></div>
        </div>
      `
    },
    {
      id: "4.5",
      title: "স্কোপ: লোকাল vs গ্লোবাল",
      content: `
        <h3>🔹 ৪.৫ স্কোপ অব ভেরিয়েবল (Local vs Global)</h3>
        <p><strong>🔹 লোকাল ভেরিয়েবল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def my_function():
    x = 10  # Local — exists only inside this function
    print(f"Inside function: x = {x}")

my_function()
# print(x)  # Error! x not accessible outside</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Inside function: x = 10</div></div>
        </div>
        <p><strong>🔹 গ্লোবাল ভেরিয়েবল (read)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>y = 20  # Global variable

def show_y():
    print(f"Inside function: y = {y}")

show_y()
print(f"Outside function: y = {y}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Inside function: y = 20<br>Outside function: y = 20</div></div>
        </div>
        <p><strong>🔹 global কীওয়ার্ড দিয়ে পরিবর্তন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>counter = 0

def increment():
    global counter
    counter += 1

print(f"Before: {counter}")
increment()
increment()
increment()
print(f"After 3 calls: {counter}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Before: 0<br>After 3 calls: 3</div></div>
        </div>
      `
    },
    {
      id: "4.6",
      title: "ল্যাম্বডা ফাংশন",
      content: `
        <h3>🔹 ৪.৬ ল্যাম্বডা ফাংশন (Lambda Functions)</h3>
        <p>এক লাইনে নামবিহীন ছোট ফাংশন।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># Normal function
def square(x):
    return x ** 2

# Equivalent lambda
square_lambda = lambda x: x ** 2

print(square(5))
print(square_lambda(5))

# Multi-argument lambda
add = lambda a, b: a + b
print(add(5, 3))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">25<br>25<br>8</div></div>
        </div>
        <p><strong>map() এবং filter() এর সাথে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>numbers = [1, 2, 3, 4, 5]

squared      = list(map(lambda x: x ** 2, numbers))
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

print(squared)
print(even_numbers)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">[1, 4, 9, 16, 25]<br>[2, 4]</div></div>
        </div>
      `
    },
    {
      id: "4.7",
      title: "রিকার্শন",
      content: `
        <h3>🔹 ৪.৭ রিকার্শন (Recursion)</h3>
        <p>একটি ফাংশন যখন নিজেকেই কল করে। অবশ্যই <strong>base case</strong> থাকতে হবে।</p>
        <p><strong>উদাহরণ ১: ফ্যাক্টরিয়াল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def factorial(n):
    if n == 0 or n == 1:   # Base case
        return 1
    else:                   # Recursive case
        return n * factorial(n - 1)

print(factorial(5))   # 5*4*3*2*1 = 120
print(factorial(3))   # 3*2*1 = 6</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">120<br>6</div></div>
        </div>
        <p><strong>উদাহরণ ২: ফিবোনাচ্চি</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(6):
    print(f"fibonacci({i}) = {fibonacci(i)}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">fibonacci(0) = 0<br>fibonacci(1) = 1<br>fibonacci(2) = 1<br>fibonacci(3) = 2<br>fibonacci(4) = 3<br>fibonacci(5) = 5</div></div>
        </div>
        <p><strong>⚠️ সতর্কতা:</strong> পাইথনের ডিফল্ট recursion limit ১০০০। বড় ইনপুটে loop ব্যবহার করো।</p>
      `
    },
    {
      id: "4.8",
      title: "ডকস্ট্রিং",
      content: `
        <h3>🔹 ৪.৮ ডকস্ট্রিং (Docstrings)</h3>
        <p>ফাংশনের উদ্দেশ্য, প্যারামিটার ও রিটার্ন ভ্যালু ডকুমেন্ট করো।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def add(a, b):
    """
    Takes two numbers and returns their sum.

    Parameters:
        a (int/float): First number
        b (int/float): Second number

    Returns:
        int/float: Sum of a and b
    """
    return a + b

print(add(3, 7))
help(add)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">10<br>Help on function add:<br>Takes two numbers and returns their sum.</div></div>
        </div>
      `
    },
    {
      id: "4.9",
      title: "প্র্যাকটিস প্রবলেম",
      content: `
        <h3>📝 ৪.৯ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> <code>square(x)</code> — সংখ্যার বর্গ রিটার্ন করো।</li>
          <li><strong>(বিগিনার)</strong> <code>is_even(n)</code> — জোড় হলে True, বিজোড় হলে False।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> <code>calculate(a, b, op)</code> — +, -, *, / সাপোর্ট করবে।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> <code>find_max(*args)</code> — সর্বোচ্চ সংখ্যা বের করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> <code>create_profile(**kwargs)</code> — প্রোফাইল প্রিন্ট করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> <code>sum_natural(n)</code> — রিকার্শন দিয়ে 1+2+...+n।</li>
          <li><strong>(অ্যাডভান্সড)</strong> <code>is_palindrome(s)</code> — রিকার্শন দিয়ে palindrome চেক।</li>
          <li><strong>(অ্যাডভান্সড)</strong> <code>filter_list(lst, func)</code> — ফাংশন আর্গুমেন্ট নিয়ে True items রিটার্ন।</li>
        </ol>
      `
    },
    {
      id: "4.10",
      title: "কী টেকঅ্যাওয়ে",
      content: `
        <h3>🔹 ৪.১০ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Functions Cheat Sheet ──────────────────────────────

# Basic function
def greet():
    print("Hello!")

# Parameters & return
def add(a, b):
    return a + b

# Default argument
def greet(name, message="Hello"):
    print(f"{message}, {name}!")

# *args — any number of positional args
def sum_all(*numbers):
    return sum(numbers)

# **kwargs — any number of keyword args
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

# Lambda — one-line anonymous function
square = lambda x: x ** 2

# Modify global variable
counter = 0
def increment():
    global counter
    counter += 1

# Recursion — must have a base case!
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Docstring
def my_func(x):
    """Describe what this function does."""
    return x</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ ফাংশন কোডকে পুনর্ব্যবহারযোগ্য ও মডুলার করে</div>
          <div class="takeaway-item">✅ <code>def</code> কীওয়ার্ড দিয়ে ফাংশন ডিফাইন করো</div>
          <div class="takeaway-item">✅ <code>return</code> কলারকে ভ্যালু ফেরত পাঠায়</div>
          <div class="takeaway-item">✅ লোকাল ভেরিয়েবল শুধুমাত্র ফাংশনের ভিতরে থাকে</div>
          <div class="takeaway-item">✅ গ্লোবাল ভেরিয়েবল পরিবর্তনে <code>global</code> কীওয়ার্ড ব্যবহার করো</div>
          <div class="takeaway-item">✅ <code>*args</code> — যেকোনো সংখ্যক positional argument</div>
          <div class="takeaway-item">✅ <code>**kwargs</code> — যেকোনো সংখ্যক keyword argument</div>
          <div class="takeaway-item">✅ Lambda হলো এক-লাইনের নামবিহীন ফাংশন</div>
          <div class="takeaway-item">✅ রিকার্শনে অবশ্যই base case থাকতে হবে</div>
          <div class="takeaway-item">✅ সবসময় ডকস্ট্রিং দিয়ে ফাংশন ডকুমেন্ট করো</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=5&section=5.0">
          পরবর্তী মডিউল: ফাইল I/O →
        </a>
      `
    }
  ],
  5: [
    {
      id: "5.0",
      title: "মডিউল পরিচিতি",
      content: `
        <h2>📘 মডিউল ৫: ফাইল I/O (File Input/Output)</h2>
        <h3>🔹 ৫.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>ফাইল I/O কী এবং কেন প্রয়োজন</li>
          <li>ফাইল ওপেন ও ক্লোজ করা (open(), close())</li>
          <li>ফাইল থেকে পড়া (read, readline, readlines)</li>
          <li>ফাইলে লেখা (write, writelines)</li>
          <li>ফাইল মোড (r, w, a, x)</li>
          <li>with স্টেটমেন্ট (Context Manager)</li>
          <li>CSV ও JSON ফাইল হ্যান্ডলিং</li>
          <li>ফাইল পাথ ও সাধারণ অপারেশন</li>
        </ul>
      `
    },
    {
      id: "5.1",
      title: "ফাইল I/O কী?",
      content: `
        <h3>🔹 ৫.১ ফাইল I/O কী?</h3>
        <p>ফাইল I/O হলো ফাইল থেকে ডাটা পড়ার এবং ফাইলে ডাটা লেখার প্রক্রিয়া।</p>
        <p><strong>সহজ ভাষায়:</strong> একটি খাতার মতো — লিখতে পারো (save) এবং পড়তে পারো (retrieve)।</p>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>ধরন</th><th>এক্সটেনশন</th><th>বিবরণ</th></tr></thead>
            <tbody>
              <tr><td>টেক্সট ফাইল</td><td>.txt, .csv, .json</td><td>মানুষ পড়তে পারে</td></tr>
              <tr><td>বাইনারি ফাইল</td><td>.jpg, .png, .exe</td><td>মেশিন পড়ে</td></tr>
            </tbody>
          </table>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>মোড</th><th>বিবরণ</th><th>ফাইল না থাকলে</th></tr></thead>
            <tbody>
              <tr><td>r</td><td>পড়া (ডিফল্ট)</td><td>Error</td></tr>
              <tr><td>w</td><td>লেখা</td><td>নতুন তৈরি হয়</td></tr>
              <tr><td>a</td><td>যোগ</td><td>নতুন তৈরি হয়</td></tr>
              <tr><td>x</td><td>নতুন তৈরি</td><td>নতুন তৈরি হয়, থাকলে Error</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "5.2",
      title: "ফাইল পড়া",
      content: `
        <h3>🔹 ৫.২ ফাইল থেকে পড়া (Reading Files)</h3>
        <p><strong>পদ্ধতি ১: read() — পুরো ফাইল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>file = open("sample.txt", "r")
content = file.read()
print(content)
file.close()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello World</div></div>
        </div>
        <p><strong>পদ্ধতি ২: readline() — এক লাইন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>file = open("sample.txt", "r")
line1 = file.readline()
line2 = file.readline()
print(f"Line 1: {line1.strip()}")
print(f"Line 2: {line2.strip()}")
file.close()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Line 1: First line<br>Line 2: Second line</div></div>
        </div>
        <p><strong>পদ্ধতি ৩: লুপ (সবচেয়ে মেমোরি কার্যকর)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>file = open("sample.txt", "r")
for line in file:
    print(line.strip())
file.close()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">First line<br>Second line<br>Third line</div></div>
        </div>
      `
    },
    {
      id: "5.3",
      title: "ফাইলে লেখা ও যোগ",
      content: `
        <h3>🔹 ৫.৩ ফাইলে লেখা ও যোগ করা</h3>
        <p><strong>write() — ফাইল ওভাররাইট করে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>file = open("output.txt", "w")
file.write("Hello, this is line 1.\n")
file.write("This is line 2.")
file.close()</code></pre></div>
        </div>
        <p><strong>append ("a") — শেষে যোগ করে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>file = open("log.txt", "w")
file.write("First entry\n")
file.close()

file = open("log.txt", "a")
file.write("Second entry\n")
file.write("Third entry\n")
file.close()

# Read back to verify
with open("log.txt", "r") as f:
    print(f.read())</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">First entry<br>Second entry<br>Third entry</div></div>
        </div>
      `
    },
    {
      id: "5.4",
      title: "with স্টেটমেন্ট",
      content: `
        <h3>🔹 ৫.৪ with স্টেটমেন্ট (Context Manager)</h3>
        <p><strong>with</strong> ব্যবহার করলে ফাইল ম্যানুয়ালি close করতে হয় না — error হলেও অটো close হয়।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># Reading with 'with'
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
# File auto-closed here

# Writing with 'with'
with open("output.txt", "w") as file:
    file.write("Hello World!\n")
    file.write("This is safer and cleaner!")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello World!<br>This is safer and cleaner!</div></div>
        </div>
        <p>✅ <strong>সবসময় with ব্যবহার করো</strong> — এটি সবচেয়ে safe ও clean পদ্ধতি।</p>
      `
    },
    {
      id: "5.5",
      title: "CSV ফাইল",
      content: `
        <h3>🔹 ৫.৫ CSV ফাইলের সাথে কাজ</h3>
        <p><strong>CSV পড়া</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">['name', 'age', 'city']<br>['Najmul', '20', 'Dhaka']<br>['Noman', '17', 'Chittagong']</div></div>
        </div>
        <p><strong>DictReader — ডিকশনারি হিসেবে পড়া</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"Name: {row['name']}, Age: {row['age']}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Name: Najmul, Age: 20<br>Name: Noman, Age: 17</div></div>
        </div>
        <p><strong>CSV লেখা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import csv

data = [
    ["name", "age", "city"],
    ["Rakib", "22", "Dhaka"],
    ["Sumaiya", "19", "Rajshahi"]
]

with open("new_students.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)</code></pre></div>
        </div>
      `
    },
    {
      id: "5.6",
      title: "JSON ফাইল",
      content: `
        <h3>🔹 ৫.৬ JSON ফাইলের সাথে কাজ</h3>
        <p><strong>JSON পড়া</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import json

with open("data.json", "r") as file:
    data = json.load(file)
    print(f"Name: {data['name']}")
    print(f"Courses: {data['courses']}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Name: Najmul<br>Courses: ['Python', 'JavaScript']</div></div>
        </div>
        <p><strong>JSON লেখা</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import json

data = {
    "name": "Najmul",
    "age": 20,
    "city": "Dhaka",
    "courses": ["Python", "JavaScript"]
}

with open("output.json", "w") as file:
    json.dump(data, file, indent=4)

print("JSON file saved!")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">JSON file saved!</div></div>
        </div>
      `
    },
    {
      id: "5.7",
      title: "ফাইল পাথ ও অপারেশন",
      content: `
        <h3>🔹 ৫.৭ ফাইল পাথ ও সাধারণ অপারেশন</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import os
import shutil
from pathlib import Path

# বর্তমান ডিরেক্টরি
print(os.getcwd())

# ফাইল আছে কিনা চেক
if os.path.exists("sample.txt"):
    print("File exists!")

# পাথ জয়েন (OS-independent)
path = os.path.join("folder", "file.txt")

# ফাইল কপি
shutil.copy("source.txt", "destination.txt")

# ফাইল রিনেম
os.rename("old.txt", "new.txt")

# ফাইল ডিলিট
os.remove("unwanted.txt")

# ডিরেক্টরি তৈরি
os.makedirs("parent/child", exist_ok=True)

# pathlib — আধুনিক পদ্ধতি
p = Path("sample.txt")
if p.exists():
    content = p.read_text()
    print(content)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">C:\Users\HP\Desktop<br>File exists!</div></div>
        </div>
      `
    },
    {
      id: "5.8",
      title: "প্র্যাকটিস প্রবলেম",
      content: `
        <h3>📝 ৫.৮ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> "myfile.txt" তৈরি করে "Hello Python!" লেখো।</li>
          <li><strong>(বিগিনার)</strong> "myfile.txt" পড়ে content প্রিন্ট করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> ৫টি নাম ইনপুট নিয়ে "names.txt"-এ সেভ করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> "names.txt" পড়ে 'A' দিয়ে শুরু হওয়া নাম দেখাও।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> CSV ফাইল পড়ে গড় মার্কস বের করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> ডিকশনারি JSON ফাইলে সেভ করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> সব .txt ফাইল এক ফোল্ডার থেকে অন্যটিতে কপি করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> টেক্সট ফাইলের লাইন, শব্দ ও অক্ষর গণনা করো।</li>
        </ol>
      `
    },
    {
      id: "5.9",
      title: "কী টেকঅ্যাওয়ে",
      content: `
        <h3>🔹 ৫.৯ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── File I/O Cheat Sheet ──────────────────────────────

# Best practice: always use 'with'
with open("file.txt", "r") as f:
    content = f.read()        # whole file
    lines   = f.readlines()   # list of lines
    line    = f.readline()    # one line

with open("file.txt", "w") as f:
    f.write("text\n")
    f.writelines(["a\n", "b\n"])

# Modes: r=read  w=write(overwrite)  a=append  x=create
# Add 'b' for binary: rb, wb

# CSV
import csv
with open("data.csv", "r") as f:
    for row in csv.reader(f):
        print(row)

with open("data.csv", "w", newline="") as f:
    csv.writer(f).writerows([["name","age"],["Najmul","20"]])

# JSON
import json
with open("data.json", "r") as f:
    data = json.load(f)

with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

# Paths
import os
os.getcwd()                   # current directory
os.path.exists("file.txt")    # check existence
os.path.join("dir", "file")   # build path safely
os.remove("file.txt")         # delete file
os.rename("old.txt","new.txt")# rename/move
os.makedirs("a/b", exist_ok=True)

from pathlib import Path       # modern approach
Path("file.txt").read_text()
Path("file.txt").write_text("data")</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ ফাইল I/O ডাটার স্থায়ী স্টোরেজ দেয়</div>
          <div class="takeaway-item">✅ সবসময় <code>with</code> স্টেটমেন্ট ব্যবহার করো — অটো close হয়</div>
          <div class="takeaway-item">✅ মোড: <code>r</code>=পড়া, <code>w</code>=লেখা, <code>a</code>=যোগ, <code>x</code>=নতুন তৈরি</div>
          <div class="takeaway-item">✅ <code>csv</code> মডিউল CSV ফাইল সহজে handle করে</div>
          <div class="takeaway-item">✅ <code>json</code> মডিউল structured data হ্যান্ডল করে</div>
          <div class="takeaway-item">✅ portable কোডের জন্য <code>os.path.join()</code> বা <code>pathlib</code> ব্যবহার করো</div>
          <div class="takeaway-item">✅ পড়ার আগে <code>os.path.exists()</code> দিয়ে ফাইল আছে কিনা চেক করো</div>
          <div class="takeaway-item">✅ <code>pathlib.Path</code> হল আধুনিক ও cleaner পদ্ধতি</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=6&section=6.0">
          পরবর্তী মডিউল: এক্সেপশন (try/except) →
        </a>
      `
    }
  ],
  6: [
    { id: "6.0", title: "মডিউল পরিচিতি", content: `
        <h2>📘 মডিউল ৬: এক্সেপশন (Error Handling)</h2>
        <h3>🔹 ৬.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>এক্সেপশন কী — Syntax / Runtime / Logical এরর</li>
          <li>সাধারণ বিল্ট-ইন এক্সেপশন</li>
          <li>try, except, else, finally ব্লক</li>
          <li>একাধিক এক্সেপশন হ্যান্ডলিং</li>
          <li>raise দিয়ে ম্যানুয়ালি এক্সেপশন রেইজ</li>
          <li>কাস্টম এক্সেপশন তৈরি</li>
          <li>এক্সেপশন হায়ারার্কি ও বেস্ট প্র্যাকটিস</li>
        </ul>
      ` },
    { id: "6.1", title: "এক্সেপশন কী?", content: `
        <h3>🔹 ৬.১ এক্সেপশন কী?</h3>
        <p>এক্সেপশন হলো প্রোগ্রাম রান করার সময় হওয়া একটি এরর।</p>
        <p><strong>সহজ ভাষায়:</strong> রেসিপি ফলো করতে গিয়ে হঠাৎ ডিম ফুরিয়ে গেল — এটাই এক্সেপশন!</p>
        <div class="table-wrapper"><table>
          <thead><tr><th>এরর টাইপ</th><th>বিবরণ</th><th>উদাহরণ</th></tr></thead>
          <tbody>
            <tr><td>Syntax Error</td><td>পাইথনের নিয়ম ভঙ্গ</td><td>print "hello"</td></tr>
            <tr><td>Runtime Error</td><td>এক্সিকিউশনের সময় হয়</td><td>10 / 0</td></tr>
            <tr><td>Logical Error</td><td>ভুল ফলাফল দেয়</td><td>+ এর বদলে - ব্যবহার</td></tr>
          </tbody>
        </table></div>
        <div class="table-wrapper"><table>
          <thead><tr><th>এক্সেপশন</th><th>কখন হয়</th><th>উদাহরণ</th></tr></thead>
          <tbody>
            <tr><td>ZeroDivisionError</td><td>শূন্য দিয়ে ভাগ</td><td>10 / 0</td></tr>
            <tr><td>NameError</td><td>ভেরিয়েবল নেই</td><td>print(x)</td></tr>
            <tr><td>TypeError</td><td>ভুল ডাটা টাইপ</td><td>"2" + 2</td></tr>
            <tr><td>ValueError</td><td>ভুল মান</td><td>int("hello")</td></tr>
            <tr><td>IndexError</td><td>ইনডেক্স রেঞ্জের বাইরে</td><td>[1,2,3][5]</td></tr>
            <tr><td>KeyError</td><td>ডিকশনারি কী নেই</td><td>{"a":1}["b"]</td></tr>
            <tr><td>FileNotFoundError</td><td>ফাইল নেই</td><td>open("x.txt")</td></tr>
          </tbody>
        </table></div>
      ` },
    { id: "6.2", title: "try-except ব্লক", content: `
        <h3>🔹 ৬.২ try-except ব্লক</h3>
        <p><strong>বেসিক try-except</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(f"Result: {result}")
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
except ValueError:
    print("Error: Please enter a valid number!")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Enter a number: 0<br>Error: Cannot divide by zero!</div></div>
        </div>
        <p><strong>'as' দিয়ে এরর ডিটেইলস পাওয়া</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"ZeroDivisionError: {e}")
except ValueError as e:
    print(f"ValueError: {e}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">ZeroDivisionError: division by zero</div></div>
        </div>
      ` },
    { id: "6.3", title: "else ও finally", content: `
        <h3>🔹 ৬.৩ else ও finally ব্লক</h3>
        <p><strong>else — কোনো এক্সেপশন না হলে চলে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid number!")
else:
    print(f"Success! Result: {result}")
    print("No errors occurred!")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Enter a number: 5<br>Success! Result: 2.0<br>No errors occurred!</div></div>
        </div>
        <p><strong>finally — সবসময় চলে (cleanup এর জন্য)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>try:
    file = open("sample.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File not found!")
else:
    print("File read successfully!")
finally:
    print("This runs no matter what!")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello World<br>File read successfully!<br>This runs no matter what!</div></div>
        </div>
      ` },
    { id: "6.4", title: "একাধিক এক্সেপশন", content: `
        <h3>🔹 ৬.৪ একাধিক এক্সেপশন হ্যান্ডলিং</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># পদ্ধতি ১: আলাদা আলাদা except
try:
    num = int(input("Enter a number: "))
    result = 100 / num
    print([1, 2, 3][num])
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Please enter a valid number!")
except IndexError:
    print("Index out of range!")

# পদ্ধতি ২: টাপলে একসাথে
try:
    num = int(input("Enter: "))
    result = 100 / num
except (ZeroDivisionError, ValueError) as e:
    print(f"Error: {e}")

# পদ্ধতি ৩: সব ধরা (সাবধানে ব্যবহার করো)
try:
    num = int(input("Enter: "))
    result = 100 / num
except Exception as e:
    print(f"Something went wrong: {e}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Enter a number: 0<br>Cannot divide by zero!</div></div>
        </div>
        <p>⚠️ <strong>সতর্কতা:</strong> সব এক্সেপশন ধরলে অপ্রত্যাশিত বাগ লুকিয়ে যেতে পারে।</p>
      ` },
    { id: "6.5", title: "raise ও কাস্টম এক্সেপশন", content: `
        <h3>🔹 ৬.৫ raise ও কাস্টম এক্সেপশন</h3>
        <p><strong>raise — ম্যানুয়ালি এক্সেপশন রেইজ</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def set_age(age):
    if age < 0 or age > 150:
        raise ValueError("Age must be between 0 and 150")
    print(f"Age set to {age}")

try:
    set_age(200)
except ValueError as e:
    print(f"Error: {e}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Error: Age must be between 0 and 150</div></div>
        </div>
        <p><strong>কাস্টম এক্সেপশন</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.message = f"Cannot withdraw {amount}. Balance: {balance}"
        super().__init__(self.message)

class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")

try:
    account = BankAccount(100)
    account.withdraw(150)
except InsufficientFundsError as e:
    print(f"Transaction failed: {e}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Transaction failed: Cannot withdraw 150. Balance: 100</div></div>
        </div>
      ` },
    { id: "6.6", title: "প্র্যাকটিস প্রবলেম", content: `
        <h3>📝 ৬.৬ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> দুই সংখ্যা ভাগ — ZeroDivisionError ও ValueError হ্যান্ডেল করো।</li>
          <li><strong>(বিগিনার)</strong> ইউজারের দেওয়া ফাইল ওপেন — FileNotFoundError হ্যান্ডেল করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> str→int কনভার্ট ফাংশন — ব্যর্থ হলে None রিটার্ন।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> IndexError সহ লিস্ট অ্যাক্সেস।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> try-except-else-finally সম্পূর্ণ উদাহরণ।</li>
          <li><strong>(অ্যাডভান্সড)</strong> InvalidAgeError কাস্টম এক্সেপশন।</li>
          <li><strong>(অ্যাডভান্সড)</strong> BankAccount ক্লাস — InsufficientFundsError।</li>
          <li><strong>(অ্যাডভান্সড)</strong> ফাইল থেকে সংখ্যা পড়া — সব এক্সেপশন হ্যান্ডেল।</li>
        </ol>
      ` },
    { id: "6.7", title: "কী টেকঅ্যাওয়ে", content: `
        <h3>🔹 ৬.৭ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Exception Handling Cheat Sheet ────────────────────

# Basic
try:
    risky_code()
except ZeroDivisionError as e:
    print(f"Error: {e}")

# Multiple exceptions
except (ValueError, TypeError) as e:
    print(f"Error: {e}")

# Full structure
try:
    risky_code()
except ValueError:
    print("Value error")
else:
    print("No error!")      # runs only if no exception
finally:
    print("Always runs")    # cleanup

# Raise manually
raise ValueError("Invalid input")

# Custom exception
class MyError(Exception):
    pass

raise MyError("Custom message")

# Catch all (use carefully)
except Exception as e:
    print(f"Unexpected: {e}")</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ এক্সেপশন রানটাইম এরর মসৃণভাবে হ্যান্ডেল করে</div>
          <div class="takeaway-item">✅ <code>bare except:</code> এড়িয়ে চলো — স্পেসিফিক এক্সেপশন ধরো</div>
          <div class="takeaway-item">✅ <code>else</code> — কোনো এক্সেপশন না হলে চলে</div>
          <div class="takeaway-item">✅ <code>finally</code> — সবসময় চলে, cleanup এর জন্য</div>
          <div class="takeaway-item">✅ <code>raise</code> — ম্যানুয়ালি এক্সেপশন trigger করে</div>
          <div class="takeaway-item">✅ কাস্টম এক্সেপশন domain-specific error-এর জন্য</div>
          <div class="takeaway-item">✅ স্পেসিফিক এক্সেপশন আগে, জেনারেল পরে</div>
          <div class="takeaway-item">✅ try ব্লক ছোট রাখো — শুধু risky code</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=7&section=7.0">
          পরবর্তী মডিউল: লাইব্রেরি ও মডিউল →
        </a>
      ` }
  ],
  7: [
    { id: "7.0", title: "মডিউল পরিচিতি", content: `
        <h2>📘 মডিউল ৭: লাইব্রেরি ও মডিউল</h2>
        <h3>🔹 ৭.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>মডিউল কী — import, from, as</li>
          <li>বিল্ট-ইন vs এক্সটার্নাল vs ইউজার-ডিফাইনড</li>
          <li>নিজের মডিউল তৈরি</li>
          <li>__name__ == "__main__"</li>
          <li>pip দিয়ে ইনস্টল</li>
          <li>math, random, datetime, os, sys</li>
          <li>প্যাকেজ স্ট্রাকচার</li>
        </ul>
      ` },
    { id: "7.1", title: "মডিউল ইম্পোর্ট", content: `
        <h3>🔹 ৭.১ মডিউল ইম্পোর্ট করা</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># পদ্ধতি ১: সম্পূর্ণ মডিউল
import math
print(math.pi)
print(math.sqrt(16))

# পদ্ধতি ২: এলিয়াস সহ
import math as m
print(m.sqrt(25))

# পদ্ধতি ৩: স্পেসিফিক আইটেম
from math import pi, sqrt
print(pi)
print(sqrt(36))

# পদ্ধতি ৫: এলিয়াস সহ স্পেসিফিক
from math import sqrt as square_root
print(square_root(64))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">3.141592653589793<br>4.0<br>5.0<br>3.141592653589793<br>6.0<br>8.0</div></div>
        </div>
        <p>⚠️ <code>from math import *</code> ব্যবহার করো না — namespace pollute করে।</p>
      ` },
    { id: "7.2", title: "নিজের মডিউল তৈরি", content: `
        <h3>🔹 ৭.২ নিজের মডিউল তৈরি</h3>
        <p><strong>ধাপ ১: my_module.py তৈরি করো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>my_module.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159</code></pre></div>
        </div>
        <p><strong>ধাপ ২: অন্য ফাইলে ব্যবহার করো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import my_module

print(my_module.greet("Najmul"))
print(my_module.add(5, 3))
print(my_module.PI)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello, Najmul!<br>8<br>3.14159</div></div>
        </div>
        <p><strong>__name__ == "__main__" — ইম্পোর্টে test code চলা বন্ধ</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>my_module.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    # This runs ONLY when file is run directly
    # NOT when imported
    print(greet("Test"))</code></pre></div>
        </div>
      ` },
    { id: "7.3", title: "বিল্ট-ইন মডিউল", content: `
        <h3>🔹 ৭.৩ বিল্ট-ইন মডিউল</h3>
        <p><strong>math মডিউল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import math

print(f"pi         = {math.pi}")
print(f"sqrt(25)   = {math.sqrt(25)}")
print(f"ceil(4.2)  = {math.ceil(4.2)}")
print(f"floor(4.9) = {math.floor(4.9)}")
print(f"factorial(5) = {math.factorial(5)}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">pi         = 3.141592653589793<br>sqrt(25)   = 5.0<br>ceil(4.2)  = 5<br>floor(4.9) = 4<br>factorial(5) = 120</div></div>
        </div>
        <p><strong>random মডিউল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import random

print(random.random())           # 0.0–1.0
print(random.randint(1, 10))     # 1–10 integer
fruits = ['apple', 'banana', 'mango']
print(random.choice(fruits))     # random item
random.shuffle(fruits)
print(fruits)                    # shuffled</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">0.6748932<br>7<br>mango<br>['banana', 'apple', 'mango']</div></div>
        </div>
        <p><strong>datetime মডিউল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import datetime

now = datetime.datetime.now()
print(f"Now:  {now}")
print(f"Date: {now.date()}")
print(f"Time: {now.time()}")

# 100 days later
future = now + datetime.timedelta(days=100)
print(f"100 days later: {future.date()}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Now:  2024-05-20 14:30:00<br>Date: 2024-05-20<br>Time: 14:30:00<br>100 days later: 2024-08-28</div></div>
        </div>
        <p><strong>os ও sys মডিউল</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import os, sys

print(os.getcwd())              # current directory
print(os.listdir('.')[:3])      # first 3 files
print(sys.version[:20])         # Python version
print(sys.platform)             # OS platform</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">C:\Users\HP\Desktop<br>['main.py', 'data.txt', 'notes.py']<br>3.11.0 (main, Oct 2022<br>win32</div></div>
        </div>
      ` },
    { id: "7.4", title: "pip ও জনপ্রিয় লাইব্রেরি", content: `
        <h3>🔹 ৭.৪ pip ও জনপ্রিয় লাইব্রেরি</h3>
        <div class="table-wrapper"><table>
          <thead><tr><th>কমান্ড</th><th>বিবরণ</th></tr></thead>
          <tbody>
            <tr><td>pip install requests</td><td>লাইব্রেরি ইনস্টল</td></tr>
            <tr><td>pip install requests==2.28.0</td><td>নির্দিষ্ট ভার্সন</td></tr>
            <tr><td>pip uninstall requests</td><td>আনইনস্টল</td></tr>
            <tr><td>pip list</td><td>ইনস্টল করা সব</td></tr>
            <tr><td>pip freeze &gt; requirements.txt</td><td>ফাইলে সেভ</td></tr>
          </tbody>
        </table></div>
        <div class="table-wrapper"><table>
          <thead><tr><th>লাইব্রেরি</th><th>উদ্দেশ্য</th></tr></thead>
          <tbody>
            <tr><td>numpy</td><td>নাম্বারিক কম্পিউটেশন</td></tr>
            <tr><td>pandas</td><td>ডাটা অ্যানালাইসিস</td></tr>
            <tr><td>matplotlib</td><td>গ্রাফ ও চার্ট</td></tr>
            <tr><td>requests</td><td>HTTP রিকুয়েস্ট</td></tr>
            <tr><td>flask</td><td>মাইক্রো ওয়েব ফ্রেমওয়ার্ক</td></tr>
            <tr><td>django</td><td>ফুল-স্ট্যাক ওয়েব</td></tr>
            <tr><td>scikit-learn</td><td>মেশিন লার্নিং</td></tr>
          </tbody>
        </table></div>
      ` },
    { id: "7.5", title: "প্র্যাকটিস প্রবলেম", content: `
        <h3>📝 ৭.৫ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> math দিয়ে 144 এর বর্গমূল, sin(90°), pi রাউন্ড করো।</li>
          <li><strong>(বিগিনার)</strong> random দিয়ে 1-100 সংখ্যা, লিস্ট থেকে random item, shuffle করো।</li>
          <li><strong>(বিগিনার)</strong> datetime দিয়ে আজকের তারিখ, সময়, ১০০ দিন পরের তারিখ।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> calculator.py মডিউল তৈরি (add, subtract, multiply, divide)।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> os দিয়ে ফাইল লিস্ট, ফোল্ডার তৈরি, অস্তিত্ব চেক।</li>
          <li><strong>(অ্যাডভান্সড)</strong> shapes প্যাকেজ — circle.py, rectangle.py, triangle.py।</li>
        </ol>
      ` },
    { id: "7.6", title: "কী টেকঅ্যাওয়ে", content: `
        <h3>🔹 ৭.৬ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Modules & Libraries Cheat Sheet ───────────────────

# Import methods
import math                    # full module
import math as m               # with alias
from math import sqrt, pi      # specific items
from math import sqrt as sr    # item with alias
# from math import *           # avoid!

# Check if running directly
if __name__ == "__main__":
    print("Running directly, not imported")

# Built-in modules
import math      # sqrt, pi, ceil, floor, factorial
import random    # random, randint, choice, shuffle
import datetime  # now, date, time, timedelta
import os        # getcwd, listdir, path.exists, makedirs
import sys       # version, platform, argv

# Explore a module
dir(math)        # list all attributes
help(math.sqrt)  # show documentation

# pip commands (run in terminal)
# pip install requests
# pip list
# pip freeze > requirements.txt</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ মডিউল হলো .py ফাইল যা reusable কোড ধারণ করে</div>
          <div class="takeaway-item">✅ <code>from module import *</code> করো না — namespace pollute হয়</div>
          <div class="takeaway-item">✅ <code>if __name__ == "__main__"</code> — import হলে test code চলবে না</div>
          <div class="takeaway-item">✅ pip দিয়ে external library ইনস্টল করো</div>
          <div class="takeaway-item">✅ math, random, datetime, os, sys — সবচেয়ে কাজের বিল্ট-ইন মডিউল</div>
          <div class="takeaway-item">✅ <code>dir()</code> ও <code>help()</code> দিয়ে যেকোনো মডিউল explore করো</div>
          <div class="takeaway-item">✅ প্যাকেজ = __init__.py সহ ডিরেক্টরি</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=8&section=8.0">
          পরবর্তী মডিউল: রেগুলার এক্সপ্রেশন (Regex) →
        </a>
      ` }
  ],
  8: [
    { id: "8.0", title: "মডিউল পরিচিতি", content: `
        <h2>📘 মডিউল ৮: রেগুলার এক্সপ্রেশন (Regex)</h2>
        <h3>🔹 ৮.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>রেগুলার এক্সপ্রেশন কী এবং কেন প্রয়োজন</li>
          <li>re মডিউল ও কমন মেথড (match, search, findall, sub, split, compile)</li>
          <li>মেটাক্যারেক্টার ও ক্যারেক্টার ক্লাস</li>
          <li>প্রিডিফাইন্ড শর্টহ্যান্ড (\d, \w, \s)</li>
          <li>কোয়ান্টিফায়ার (*, +, ?, {n,m})</li>
          <li>অ্যাঙ্কর, গ্রুপ, ফ্ল্যাগ</li>
          <li>গ্রিডি vs নন-গ্রিডি</li>
          <li>রিয়াল-ওয়ার্ল্ড: ইমেইল, ফোন, URL ভ্যালিডেশন</li>
        </ul>
      ` },
    { id: "8.1", title: "re মডিউল ও মেথড", content: `
        <h3>🔹 ৮.১ re মডিউল ও কমন মেথড</h3>
        <div class="table-wrapper"><table>
          <thead><tr><th>ফাংশন</th><th>বিবরণ</th></tr></thead>
          <tbody>
            <tr><td>re.match(p, s)</td><td>শুধু শুরুতে ম্যাচ চেক</td></tr>
            <tr><td>re.search(p, s)</td><td>যেকোনো জায়গায় খোঁজে</td></tr>
            <tr><td>re.findall(p, s)</td><td>সব ম্যাচ লিস্ট আকারে</td></tr>
            <tr><td>re.finditer(p, s)</td><td>ম্যাচ অবজেক্টের iterator</td></tr>
            <tr><td>re.sub(p, r, s)</td><td>ম্যাচ রিপ্লেস করে</td></tr>
            <tr><td>re.split(p, s)</td><td>প্যাটার্ন দিয়ে split</td></tr>
            <tr><td>re.compile(p)</td><td>পুনর্ব্যবহারের জন্য compile</td></tr>
          </tbody>
        </table></div>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

text = "The cat sat on the mat"

# search — যেকোনো জায়গায়
result = re.search("cat", text)
print(f"Found: {result.group()}, Position: {result.start()}-{result.end()}")

# findall — সব ম্যাচ
numbers = re.findall(r"\d+", "My numbers: 123, 456, 789")
print(f"Numbers: {numbers}")

# sub — রিপ্লেস
new = re.sub(r"\d{3}-\d{3}-\d{4}", "XXX-XXX-XXXX", "Phone: 123-456-7890")
print(new)

# split — বিভিন্ন delimiter দিয়ে split
parts = re.split(r"[,; |]+", "apple,banana;orange grape")
print(parts)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Found: cat, Position: 4-7<br>Numbers: ['123', '456', '789']<br>Phone: XXX-XXX-XXXX<br>['apple', 'banana', 'orange', 'grape']</div></div>
        </div>
      ` },
    { id: "8.2", title: "মেটাক্যারেক্টার ও কোয়ান্টিফায়ার", content: `
        <h3>🔹 ৮.২ মেটাক্যারেক্টার ও কোয়ান্টিফায়ার</h3>
        <div class="table-wrapper"><table>
          <thead><tr><th>প্যাটার্ন</th><th>অর্থ</th><th>উদাহরণ</th></tr></thead>
          <tbody>
            <tr><td>.</td><td>যেকোনো ক্যারেক্টার</td><td>c.t → cat, cot</td></tr>
            <tr><td>*</td><td>0 বা বেশি</td><td>ca*t → ct, cat, caat</td></tr>
            <tr><td>+</td><td>1 বা বেশি</td><td>ca+t → cat, caat</td></tr>
            <tr><td>?</td><td>0 বা 1</td><td>colou?r → color, colour</td></tr>
            <tr><td>{n,m}</td><td>n থেকে m বার</td><td>ca{2,4}t → caat..caaaat</td></tr>
            <tr><td>|</td><td>OR</td><td>cat|dog</td></tr>
            <tr><td>^</td><td>স্ট্রিংয়ের শুরু</td><td>^Hello</td></tr>
            <tr><td>$</td><td>স্ট্রিংয়ের শেষ</td><td>world$</td></tr>
            <tr><td>\b</td><td>word boundary</td><td>\bcat\b</td></tr>
          </tbody>
        </table></div>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

# ডট — যেকোনো ক্যারেক্টার
for t in ["cat", "cot", "c@t", "ct"]:
    print(f"'{t}' matches c.t:", bool(re.search("c.t", t)))

# অ্যাঙ্কর
text = "Hello world"
print(re.search(r"^Hello", text).group())    # শুরু
print(re.search(r"world$", text).group())    # শেষ

# word boundary — শুধু standalone "cat"
text2 = "cat concat cats"
print(re.findall(r"\bcat\b", text2))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">'cat' matches c.t: True<br>'cot' matches c.t: True<br>'c@t' matches c.t: True<br>'ct' matches c.t: False<br>Hello<br>world<br>['cat']</div></div>
        </div>
      ` },
    { id: "8.3", title: "ক্যারেক্টার ক্লাস ও শর্টহ্যান্ড", content: `
        <h3>🔹 ৮.৩ ক্যারেক্টার ক্লাস ও শর্টহ্যান্ড</h3>
        <div class="table-wrapper"><table>
          <thead><tr><th>শর্টহ্যান্ড</th><th>অর্থ</th><th>সমতুল্য</th></tr></thead>
          <tbody>
            <tr><td>\d</td><td>ডিজিট</td><td>[0-9]</td></tr>
            <tr><td>\D</td><td>নন-ডিজিট</td><td>[^0-9]</td></tr>
            <tr><td>\w</td><td>word ক্যারেক্টার</td><td>[a-zA-Z0-9_]</td></tr>
            <tr><td>\W</td><td>নন-word</td><td>[^a-zA-Z0-9_]</td></tr>
            <tr><td>\s</td><td>whitespace</td><td>[ \t\n\r]</td></tr>
            <tr><td>\S</td><td>নন-whitespace</td><td>[^ \t\n\r]</td></tr>
          </tbody>
        </table></div>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

text = "Hello 123 World! @#$"

print(f"Digits:     {re.findall(r'\d', text)}")
print(f"Word chars: {re.findall(r'\w', text)}")
print(f"Whitespace: {re.findall(r'\s', text)}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Digits:     ['1', '2', '3']<br>Word chars: ['H', 'e', 'l', 'l', 'o', '1', '2', '3', 'W', 'o', 'r', 'l', 'd']<br>Whitespace: [' ', ' ', ' ']</div></div>
        </div>
      ` },
    { id: "8.4", title: "গ্রুপ ও ফ্ল্যাগ", content: `
        <h3>🔹 ৮.৪ গ্রুপ, ফ্ল্যাগ ও গ্রিডি vs নন-গ্রিডি</h3>
        <p><strong>গ্রুপ — () দিয়ে অংশ capture করো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

pattern = r"(\d{3})-(\d{3})-(\d{4})"
text = "My phone: 123-456-7890"

match = re.search(pattern, text)
if match:
    print(f"Full:      {match.group(0)}")
    print(f"Area code: {match.group(1)}")
    print(f"Prefix:    {match.group(2)}")
    print(f"Line:      {match.group(3)}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Full:      123-456-7890<br>Area code: 123<br>Prefix:    456<br>Line:      7890</div></div>
        </div>
        <p><strong>ফ্ল্যাগ — re.IGNORECASE, re.MULTILINE</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

text = "Python PYTHON python"
print(re.findall("python", text, re.IGNORECASE))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">['Python', 'PYTHON', 'python']</div></div>
        </div>
        <p><strong>গ্রিডি vs নন-গ্রিডি</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

text = "<h1>Title</h1><p>Para</p>"

greedy     = re.search("<.*>", text)
non_greedy = re.findall("<.*?>", text)

print(f"Greedy:     {greedy.group()}")
print(f"Non-greedy: {non_greedy}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Greedy:     &lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Para&lt;/p&gt;<br>Non-greedy: ['&lt;h1&gt;', '&lt;/h1&gt;', '&lt;p&gt;', '&lt;/p&gt;']</div></div>
        </div>
      ` },
    { id: "8.5", title: "রিয়াল-ওয়ার্ল্ড উদাহরণ", content: `
        <h3>🔹 ৮.৫ রিয়াল-ওয়ার্ল্ড উদাহরণ</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import re

# ইমেইল ভ্যালিডেশন
def validate_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return bool(re.match(pattern, email))

print(validate_email("user@example.com"))   # True
print(validate_email("invalid-email"))       # False

# ফোন নম্বর ভ্যালিডেশন
def validate_phone(phone):
    pattern = r"^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
    return bool(re.match(pattern, phone))

print(validate_phone("123-456-7890"))   # True
print(validate_phone("(123)456-7890"))  # True

# URL এক্সট্র্যাকশন
text = "Visit https://www.python.org and http://example.com"
urls = re.findall(r"https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)
print(urls)

# IP অ্যাড্রেস
log = "192.168.1.1 - GET /index.html"
ips = re.findall(r"\b(?:\d{1,3}\.){3}\d{1,3}\b", log)
print(f"IPs: {ips}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">True<br>False<br>True<br>True<br>['https://www.python.org', 'http://example.com']<br>IPs: ['192.168.1.1']</div></div>
        </div>
      ` },
    { id: "8.6", title: "প্র্যাকটিস প্রবলেম", content: `
        <h3>📝 ৮.৬ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> স্ট্রিংয়ের সব vowel খোঁজো।</li>
          <li><strong>(বিগিনার)</strong> Capital letter দিয়ে শুরু হওয়া সব শব্দ খোঁজো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> ইমেইল ভ্যালিডেট করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> টেক্সট থেকে ফোন নম্বর extract করো।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> DD/MM/YYYY → YYYY-MM-DD কনভার্ট করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> URL ভ্যালিডেট করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> সোশ্যাল মিডিয়া পোস্ট থেকে hashtag extract করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> Strong password ভ্যালিডেট করো।</li>
        </ol>
      ` },
    { id: "8.7", title: "কী টেকঅ্যাওয়ে", content: `
        <h3>🔹 ৮.৭ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Regex Cheat Sheet ─────────────────────────────────
import re

# Basic patterns
r"cat"          # exact match
r"c.t"          # any char (dot)
r"ca*t"         # 0+ repeats
r"ca+t"         # 1+ repeats
r"colou?r"      # 0 or 1
r"ca{2,4}t"     # 2 to 4 times
r"cat|dog"      # OR

# Character classes
r"[aeiou]"      # any vowel
r"[a-z]"        # lowercase
r"[^aeiou]"     # NOT vowel
r"\d"           # digit [0-9]
r"\w"           # word char [a-zA-Z0-9_]
r"\s"           # whitespace

# Anchors
r"^Hello"       # start of string
r"world$"       # end of string
r"\bcat\b"     # word boundary

# Groups
r"(\d{3})-(\d{4})"  # capture groups

# Methods
re.search(p, s)       # find anywhere
re.findall(p, s)      # all matches
re.sub(p, r, s)       # replace
re.split(p, s)        # split
re.compile(p)         # reuse pattern

# Flags
re.IGNORECASE         # case insensitive
re.MULTILINE          # ^$ per line

# Greedy vs Non-greedy
r"<.*>"               # greedy (max)
r"<.*?>"              # non-greedy (min)</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ Regex হলো pattern-based text search ও manipulation এর শক্তিশালী টুল</div>
          <div class="takeaway-item">✅ সবসময় raw string <code>r""</code> ব্যবহার করো backslash সমস্যা এড়াতে</div>
          <div class="takeaway-item">✅ <code>\d</code>=digit, <code>\w</code>=word char, <code>\s</code>=whitespace</div>
          <div class="takeaway-item">✅ <code>*</code>=0+, <code>+</code>=1+, <code>?</code>=0-1, <code>{n,m}</code>=range</div>
          <div class="takeaway-item">✅ <code>re.search()</code> যেকোনো জায়গায়; <code>re.match()</code> শুধু শুরুতে</div>
          <div class="takeaway-item">✅ <code>re.findall()</code> সব match; <code>re.sub()</code> replace করে</div>
          <div class="takeaway-item">✅ গ্রিডি ডিফল্ট — নন-গ্রিডির জন্য <code>?</code> যোগ করো (যেমন <code>.*?</code>)</div>
          <div class="takeaway-item">✅ বারবার ব্যবহারে <code>re.compile()</code> দিয়ে pattern compile করো</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=9&section=9.0">
          পরবর্তী মডিউল: OOP →
        </a>
      ` }
  ],
  9: [
    { id: "9.0", title: "মডিউল পরিচিতি", content: `
        <h2>📘 মডিউল ৯: অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)</h2>
        <h3>🔹 ৯.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>OOP কী — Procedural vs OOP</li>
          <li>ক্লাস ও অবজেক্ট, __init__, self</li>
          <li>এনক্যাপসুলেশন — public, protected, private</li>
          <li>ইনহেরিটেন্স — single, multiple, super()</li>
          <li>পলিমরফিজম ও মেথড ওভাররাইডিং</li>
          <li>আবস্ট্রাকশন — ABC</li>
          <li>ক্লাস vs ইনস্ট্যান্স ভেরিয়েবল</li>
          <li>@staticmethod, @classmethod</li>
          <li>Magic/Dunder methods</li>
          <li>কম্পোজিশন vs ইনহেরিটেন্স</li>
        </ul>
      ` },
    { id: "9.1", title: "ক্লাস ও অবজেক্ট", content: `
        <h3>🔹 ৯.১ ক্লাস ও অবজেক্ট</h3>
        <p><strong>সহজ ভাষায়:</strong> ক্লাস = ব্লুপ্রিন্ট; অবজেক্ট = সেই ব্লুপ্রিন্ট থেকে তৈরি বাড়ি।</p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Student:
    def __init__(self, name, age, city):
        self.name = name
        self.age  = age
        self.city = city

    def introduce(self):
        print(f"Hi, I am {self.name}, {self.age} years old, from {self.city}.")

student1 = Student("Najmul", 20, "Dhaka")
student2 = Student("Noman",  17, "Chittagong")

student1.introduce()
student2.introduce()
print(type(student1))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hi, I am Najmul, 20 years old, from Dhaka.<br>Hi, I am Noman, 17 years old, from Chittagong.<br>&lt;class '__main__.Student'&gt;</div></div>
        </div>
      ` },
    { id: "9.2", title: "এনক্যাপসুলেশন ও Property", content: `
        <h3>🔹 ৯.২ এনক্যাপসুলেশন ও Property</h3>
        <div class="table-wrapper"><table>
          <thead><tr><th>নামকরণ</th><th>অ্যাক্সেস</th></tr></thead>
          <tbody>
            <tr><td>name</td><td>public — সবাই পড়তে পারে</td></tr>
            <tr><td>_name</td><td>protected — সাবক্লাস পড়তে পারে</td></tr>
            <tr><td>__name</td><td>private — শুধু class-এর ভেতরে</td></tr>
          </tbody>
        </table></div>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius  # protected

    @property
    def celsius(self):           # getter
        return self._celsius

    @celsius.setter
    def celsius(self, value):    # setter with validation
        if value < -273.15:
            raise ValueError("Too cold!")
        self._celsius = value

    @property
    def fahrenheit(self):        # computed property
        return self._celsius * 9/5 + 32

temp = Temperature(25)
print(f"Celsius:    {temp.celsius}")
print(f"Fahrenheit: {temp.fahrenheit}")
temp.celsius = 100
print(f"New Celsius: {temp.celsius}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Celsius:    25<br>Fahrenheit: 77.0<br>New Celsius: 100</div></div>
        </div>
      ` },
    { id: "9.3", title: "ইনহেরিটেন্স ও super()", content: `
        <h3>🔹 ৯.৩ ইনহেরিটেন্স ও super()</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def speak(self):               # method override
        print(f"{self.name} barks: Woof!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} meows: Meow!")

dog = Dog("Buddy")
cat = Cat("Whiskers")
dog.speak()
cat.speak()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Buddy barks: Woof!<br>Whiskers meows: Meow!</div></div>
        </div>
        <p><strong>super() — parent class-এর method call করো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Employee:
    def __init__(self, name, salary):
        self.name   = name
        self.salary = salary

    def work(self):
        print(f"{self.name} is working")

class Manager(Employee):
    def __init__(self, name, salary, team_size):
        super().__init__(name, salary)  # parent __init__
        self.team_size = team_size

    def work(self):
        print(f"{self.name} is managing {self.team_size} people")
        super().work()                  # parent work()

mgr = Manager("Najmul", 75000, 5)
mgr.work()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Najmul is managing 5 people<br>Najmul is working</div></div>
        </div>
      ` },
    { id: "9.4", title: "পলিমরফিজম ও আবস্ট্রাকশন", content: `
        <h3>🔹 ৯.৪ পলিমরফিজম ও আবস্ট্রাকশন</h3>
        <p><strong>পলিমরফিজম — একই method নাম, ভিন্ন behavior</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Bird:
    def sound(self): return "Chirp chirp"

class Dog:
    def sound(self): return "Woof woof"

def make_sound(animal):
    print(animal.sound())

for a in [Bird(), Dog(), Bird()]:
    make_sound(a)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Chirp chirp<br>Woof woof<br>Chirp chirp</div></div>
        </div>
        <p><strong>আবস্ট্রাকশন — ABC দিয়ে interface enforce করো</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, l, w):
        self.l, self.w = l, w
    def area(self):      return self.l * self.w
    def perimeter(self): return 2 * (self.l + self.w)

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):      return 3.14159 * self.r ** 2
    def perimeter(self): return 2 * 3.14159 * self.r

for shape in [Rectangle(5, 3), Circle(4)]:
    print(f"Area: {shape.area():.2f}, Perimeter: {shape.perimeter():.2f}")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Area: 15.00, Perimeter: 16.00<br>Area: 50.27, Perimeter: 25.13</div></div>
        </div>
      ` },
    { id: "9.5", title: "ক্লাস ভেরিয়েবল ও ম্যাজিক মেথড", content: `
        <h3>🔹 ৯.৫ ক্লাস ভেরিয়েবল ও ম্যাজিক মেথড</h3>
        <p><strong>ক্লাস ভেরিয়েবল — সব instance-এ শেয়ার হয়</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Employee:
    company = "Tech Corp"   # class variable — shared
    count   = 0

    def __init__(self, name):
        self.name = name    # instance variable — unique
        Employee.count += 1

    @staticmethod
    def company_info():
        return f"We are {Employee.company}"

    @classmethod
    def get_count(cls):
        return f"Total employees: {cls.count}"

emp1 = Employee("Najmul")
emp2 = Employee("Noman")
print(Employee.company_info())
print(Employee.get_count())</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">We are Tech Corp<br>Total employees: 2</div></div>
        </div>
        <p><strong>Magic/Dunder methods</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):           # print(book)
        return f'"{self.title}"'

    def __repr__(self):          # repr(book)
        return f"Book('{self.title}', {self.pages})"

    def __len__(self):           # len(book)
        return self.pages

    def __eq__(self, other):     # book1 == book2
        return self.title == other.title

book1 = Book("Python 101", 300)
book2 = Book("Python 101", 400)

print(book1)
print(len(book1))
print(book1 == book2)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">"Python 101"<br>300<br>True</div></div>
        </div>
      ` },
    { id: "9.6", title: "প্র্যাকটিস প্রবলেম", content: `
        <h3>📝 ৯.৬ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(বিগিনার)</strong> Rectangle ক্লাস — area ও perimeter method।</li>
          <li><strong>(বিগিনার)</strong> Calculator ক্লাস — add, subtract, multiply, divide।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> Person → Student ইনহেরিটেন্স।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> Shape ABC → Circle, Rectangle।</li>
          <li><strong>(ইন্টারমিডিয়েট)</strong> Book ক্লাস — সব dunder method।</li>
          <li><strong>(অ্যাডভান্সড)</strong> Library ক্লাস — Book list manage করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> Employee → Manager, Developer — polymorphic work()।</li>
          <li><strong>(অ্যাডভান্সড)</strong> Vector ক্লাস — __add__, __sub__, __mul__।</li>
        </ol>
      ` },
    { id: "9.7", title: "কী টেকঅ্যাওয়ে", content: `
        <h3>🔹 ৯.৭ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── OOP Cheat Sheet ───────────────────────────────────

# Class definition
class MyClass:
    class_var = 0             # shared by all instances

    def __init__(self, x):
        self.x = x            # unique per instance

    def method(self):
        return self.x

    @staticmethod
    def static(): pass        # no self/cls

    @classmethod
    def class_m(cls): pass    # receives class

# Inheritance
class Child(Parent):
    def __init__(self, x, y):
        super().__init__(x)   # call parent
        self.y = y

# Multiple inheritance
class C(A, B): pass

# Encapsulation
self.name    # public
self._name   # protected (convention)
self.__name  # private (name mangling)

# Property
@property
def attr(self): return self._attr

@attr.setter
def attr(self, v): self._attr = v

# Abstract class
from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self): pass

# Magic methods
__init__  __str__  __repr__
__len__   __add__  __eq__  __lt__</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ OOP কোডকে object-এর চারপাশে সংগঠিত করে</div>
          <div class="takeaway-item">✅ Class = blueprint; Object = instance</div>
          <div class="takeaway-item">✅ <code>self</code> দিয়ে বর্তমান instance access করো</div>
          <div class="takeaway-item">✅ Encapsulation: public / _protected / __private</div>
          <div class="takeaway-item">✅ Inheritance: child class parent-এর code reuse করে</div>
          <div class="takeaway-item">✅ <code>super()</code> দিয়ে parent-এর method call করো</div>
          <div class="takeaway-item">✅ Polymorphism: একই method, ভিন্ন behavior</div>
          <div class="takeaway-item">✅ ABC দিয়ে abstract class বানাও — interface enforce করো</div>
          <div class="takeaway-item">✅ Dunder methods: <code>__str__</code>, <code>__len__</code>, <code>__add__</code> ইত্যাদি</div>
          <div class="takeaway-item">✅ "Is-a" → Inheritance; "Has-a" → Composition</div>
        </div>
        <a class="btn-next-module" href="lesson.html?module=10&section=10.0">
          পরবর্তী মডিউল: ইউনিট টেস্টিং ও অ্যাডভান্সড টপিক →
        </a>
      ` }
  ],
  10: [
    { id: "10.0", title: "মডিউল পরিচিতি", content: `
        <h2>📘 মডিউল ১০: ইউনিট টেস্টিং ও অ্যাডভান্সড টপিক</h2>
        <h3>🔹 ১০.০ মডিউল পরিচিতি</h3>
        <ul>
          <li>ইউনিট টেস্টিং — unittest ও pytest</li>
          <li>Decorator (অ্যাডভান্সড)</li>
          <li>Generator ও yield</li>
          <li>কাস্টম Context Manager</li>
          <li>Dataclass</li>
          <li>Type hints ও annotation</li>
          <li>অ্যাডভান্সড comprehension</li>
          <li>map, filter, reduce</li>
          <li>enumerate, zip (অ্যাডভান্সড)</li>
          <li>Walrus operator (:=)</li>
          <li>অ্যাডভান্সড f-string</li>
        </ul>
      ` },
    { id: "10.1", title: "ইউনিট টেস্টিং", content: `
        <h3>🔹 ১০.১ ইউনিট টেস্টিং (unittest ও pytest)</h3>
        <p><strong>unittest — built-in framework</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>test_math.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import unittest

def add(a, b):    return a + b
def divide(a, b):
    if b == 0: raise ValueError("Cannot divide by zero")
    return a / b

class TestMath(unittest.TestCase):

    def setUp(self):            # runs before each test
        self.nums = [1, 2, 3]

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5.0)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

    def test_truthy(self):
        self.assertTrue(5 > 3)
        self.assertIn(2, self.nums)

if __name__ == '__main__':
    unittest.main()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python test_math.py</div><div class="output-block">....<br>----------------------------------------------------------------------<br>Ran 4 tests in 0.001s<br><br>OK</div></div>
        </div>
        <p><strong>pytest — simpler, more powerful (pip install pytest)</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>test_sample.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import pytest

def add(a, b): return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_divide_by_zero():
    with pytest.raises(ValueError):
        divide(10, 0)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; pytest test_sample.py</div><div class="output-block">.. passed in 0.01s</div></div>
        </div>
      ` },
    { id: "10.2", title: "Decorator ও Generator", content: `
        <h3>🔹 ১০.২ Decorator ও Generator</h3>
        <p><strong>Decorator — ফাংশনে extra behavior যোগ করে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>import time

def timer(func):
    def wrapper(*args, **kwargs):
        start  = time.time()
        result = func(*args, **kwargs)
        end    = time.time()
        print(f"{func.__name__} took {end - start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    return sum(range(1_000_000))

slow_function()

# Decorator with argument
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hello!")

say_hi()</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">slow_function took 0.0432s<br>Hello!<br>Hello!<br>Hello!</div></div>
        </div>
        <p><strong>Generator ও yield — lazy evaluation</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># Generator function
def count_up(n):
    i = 1
    while i <= n:
        yield i       # pause & return value
        i += 1

for num in count_up(5):
    print(num, end=" ")

# Infinite Fibonacci generator
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
print([next(fib) for _ in range(10)])</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">1 2 3 4 5<br>[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</div></div>
        </div>
      ` },
    { id: "10.3", title: "Dataclass ও Type Hints", content: `
        <h3>🔹 ১০.৩ Dataclass ও Type Hints</h3>
        <p><strong>Dataclass — boilerplate-free class</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>from dataclasses import dataclass, field

@dataclass
class Student:
    name:   str
    age:    int
    city:   str  = "Dhaka"   # default value
    grades: list = field(default_factory=list)

s1 = Student("Najmul", 20)
s2 = Student("Noman", 17, "Chittagong")

print(s1)
print(s2)
print(s1 == Student("Najmul", 20))   # auto __eq__</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Student(name='Najmul', age=20, city='Dhaka', grades=[])<br>Student(name='Noman', age=17, city='Chittagong', grades=[])<br>True</div></div>
        </div>
        <p><strong>Type Hints — কোড readable ও maintainable করে</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>from typing import List, Dict, Optional, Union

def greet(name: str) -> str:
    return f"Hello, {name}!"

def process(numbers: List[int]) -> int:
    return sum(numbers)

def find_user(uid: int) -> Optional[Dict[str, int]]:
    return {"id": uid, "age": 20} if uid > 0 else None

def add(a: Union[int, float], b: Union[int, float]) -> Union[int, float]:
    return a + b

print(greet("Najmul"))
print(process([1, 2, 3, 4, 5]))
print(find_user(1))</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">Hello, Najmul!<br>15<br>{'id': 1, 'age': 20}</div></div>
        </div>
      ` },
    { id: "10.4", title: "অ্যাডভান্সড Comprehension ও Functional", content: `
        <h3>🔹 ১০.৪ অ্যাডভান্সড Comprehension ও Functional</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># List comprehension with condition
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)

# Dict comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)

# Set comprehension
unique = {x % 3 for x in range(10)}
print(unique)

# map() — সব item-এ function apply
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)

# filter() — condition দিয়ে filter
evens2 = list(filter(lambda x: x % 2 == 0, numbers))
print(evens2)

# reduce() — একক value-এ reduce
from functools import reduce
total = reduce(lambda a, b: a + b, numbers)
print(total)</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]<br>{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}<br>{0, 1, 2}<br>[1, 4, 9, 16, 25]<br>[2, 4]<br>15</div></div>
        </div>
      ` },
    { id: "10.5", title: "zip, enumerate ও Walrus", content: `
        <h3>🔹 ১০.৫ zip, enumerate ও Walrus Operator</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># enumerate — index + value একসাথে
fruits = ['apple', 'banana', 'mango']
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}: {fruit}")

# zip — একাধিক list একসাথে
names  = ['Najmul', 'Noman', 'Fatema']
ages   = [20, 17, 15]
cities = ['Dhaka', 'Chittagong', 'Sylhet']

for name, age, city in zip(names, ages, cities):
    print(f"{name} ({age}) from {city}")

# Walrus operator := — assign ও use একসাথে
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
if (n := len(data)) > 5:
    print(f"List has {n} items — processing...")

# Walrus in while
import random
while (roll := random.randint(1, 6)) != 6:
    print(f"Rolled {roll}, try again...")
print(f"Got 6! Done.")</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">1: apple<br>2: banana<br>3: mango<br>Najmul (20) from Dhaka<br>Noman (17) from Chittagong<br>Fatema (15) from Sylhet<br>List has 10 items — processing...<br>Rolled 3, try again...<br>Got 6! Done.</div></div>
        </div>
        <p><strong>অ্যাডভান্সড f-string</strong></p>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>main.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code>name  = "Najmul"
price = 123.4567
age   = 20

print(f"{name:>10}")       # right-aligned (width 10)
print(f"{name:<10}")       # left-aligned
print(f"{name:^10}")       # centered
print(f"{price:.2f}")      # 2 decimal places
print(f"{price:,.2f}")     # thousands separator
print(f"{age:08d}")        # zero-padded
print(f"{name.upper()}")   # method call in f-string
x = 42
print(f"{x=}")             # debug: prints "x=42"</code></pre></div>
          <div class="vscode-divider">TERMINAL</div>
          <div class="output-wrap"><div class="output-prompt">PS C:\Users\HP&gt; python main.py</div><div class="output-block">    Najmul<br>Najmul    <br>  Najmul  <br>123.46<br>123.46<br>00000020<br>NAJMUL<br>x=42</div></div>
        </div>
      ` },
    { id: "10.6", title: "প্র্যাকটিস প্রবলেম", content: `
        <h3>📝 ১০.৬ প্র্যাকটিস প্রবলেম</h3>
        <ol>
          <li><strong>(ইউনিট টেস্টিং)</strong> Calculator ক্লাসের জন্য সম্পূর্ণ test suite লেখো।</li>
          <li><strong>(Decorator)</strong> @log decorator — function name, args, return value log করো।</li>
          <li><strong>(Generator)</strong> n পর্যন্ত মৌলিক সংখ্যা generate করো।</li>
          <li><strong>(Context Manager)</strong> code execution সময় measure করার context manager।</li>
          <li><strong>(Dataclass)</strong> Product dataclass — name, price, quantity, total property।</li>
          <li><strong>(Comprehension)</strong> list থেকে শুধু string items নিয়ে uppercase করো।</li>
          <li><strong>(map/filter)</strong> সংখ্যার list থেকে জোড় বের করে বর্গ করো।</li>
          <li><strong>(অ্যাডভান্সড)</strong> @retry decorator — n বার পর্যন্ত retry করে।</li>
        </ol>
      ` },
    { id: "10.7", title: "কী টেকঅ্যাওয়ে ও কোর্স সমাপ্তি", content: `
        <h3>🔹 ১০.৭ কী টেকঅ্যাওয়ে</h3>
        <div class="vscode-panel">
          <div class="vscode-tabs"><div class="vscode-tab"><span class="vscode-tab-dot"></span>cheatsheet.py</div></div>
          <div class="code-wrap"><pre class="code-block"><code># ── Advanced Python Cheat Sheet ───────────────────────

# Unit Testing
import unittest
class TestX(unittest.TestCase):
    def setUp(self): ...            # before each test
    def test_something(self):
        self.assertEqual(a, b)
        self.assertRaises(Err, fn)

# Decorator
def my_decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

# Generator
def gen():
    yield value                     # lazy — one at a time

# Dataclass
from dataclasses import dataclass
@dataclass
class Point:
    x: float
    y: float = 0.0

# Type hints
def fn(name: str, n: int = 0) -> list[str]: ...

# Comprehensions
[x**2 for x in range(10) if x % 2 == 0]
{k: v for k, v in items.items()}
{x for x in lst}

# map / filter / reduce
map(fn, lst)
filter(pred, lst)
reduce(lambda a, b: a+b, lst)

# Walrus
if (n := len(data)) > 10:
    print(f"Large: {n}")

# f-string formatting
f"{val:.2f}"    f"{val:>10}"    f"{val=}"</code></pre></div>
        </div>
        <div class="takeaway-box">
          <div class="takeaway-item">✅ Unit testing: প্রতিটি function আলাদাভাবে test করো</div>
          <div class="takeaway-item">✅ Decorator: function-এ extra behavior wrap করো</div>
          <div class="takeaway-item">✅ Generator: <code>yield</code> দিয়ে lazy sequence তৈরি করো — memory efficient</div>
          <div class="takeaway-item">✅ Dataclass: boilerplate-free class, auto <code>__init__</code> ও <code>__eq__</code></div>
          <div class="takeaway-item">✅ Type hints: code readable করে, IDE ও linter সাহায্য পায়</div>
          <div class="takeaway-item">✅ Comprehension: loop এর চেয়ে concise ও readable</div>
          <div class="takeaway-item">✅ <code>map()</code> / <code>filter()</code> / <code>reduce()</code> — functional programming</div>
          <div class="takeaway-item">✅ Walrus <code>:=</code> — একসাথে assign ও use (Python 3.8+)</div>
          <div class="takeaway-item">✅ f-string formatting: <code>:.2f</code>, <code>:>10</code>, <code>{x=}</code></div>
        </div>

        <div style="background:linear-gradient(135deg,#0A66C2,#004182);border-radius:16px;padding:28px 32px;color:#fff;text-align:center;margin-top:28px;">
          <div style="font-size:36px;margin-bottom:8px;">🎉</div>
          <h2 style="font-size:22px;margin-bottom:8px;">অভিনন্দন! কোর্স সম্পন্ন!</h2>
          <p style="opacity:.85;font-size:15px;margin-bottom:20px;">তুমি Banglay Python-এর সবগুলো মডিউল শেষ করেছ।</p>
          <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:20px;font-size:13px;">
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ১ — ভেরিয়েবল</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ২ — কন্ডিশনালস</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৩ — লুপ</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৪ — ফাংশন</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৫ — ফাইল I/O</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৬ — এক্সেপশন</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৭ — লাইব্রেরি</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৮ — Regex</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ৯ — OOP</span>
            <span style="background:rgba(255,255,255,.15);padding:6px 14px;border-radius:40px;">✅ মডিউল ১০ — অ্যাডভান্সড</span>
          </div>
          <p style="opacity:.75;font-size:13px;">এরপর: Django / Flask / FastAPI · Pandas / NumPy · Open Source contribute করো 🚀</p>
        </div>
      ` }
  ],
};

/** Returns a "coming soon" HTML snippet for stub modules. */
function comingSoon(n) {
  return `
    <div class="coming-soon">
      <div class="coming-soon-icon">🚧</div>
      <h2>মডিউল ${n} তৈরি হচ্ছে…</h2>
      <p>এই মডিউলটি শীঘ্রই যোগ করা হবে।<br>ধৈর্যের জন্য ধন্যবাদ!</p>
    </div>
  `;
}

/* ─────────────────────────────────────────────────────────────
   URL / QUERY-STRING HELPERS
   We use ?module=N&section=X.Y so every lesson is deep-linkable.
───────────────────────────────────────────────────────────── */

/** Read a single query-string parameter (returns null if absent). */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/** Build a URL for a lesson page (relative to current dir). */
function lessonURL(moduleId, sectionId) {
  return `lesson.html?module=${moduleId}&section=${encodeURIComponent(sectionId)}`;
}

/** Build a URL for the module grid page. */
function modulesURL() {
  return "modules.html";
}

/** Build a URL for the home page. */
function homeURL() {
  return "index.html";
}
