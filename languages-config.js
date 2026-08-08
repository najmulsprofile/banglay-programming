// ══════════════════════════════════════════════════
// Banglay Programming — ভাষা কনফিগ ফাইল
// ══════════════════════════════════════════════════
// নতুন ভাষা (যেমন Java, C++) যোগ করতে হলে:
//   ১) সেই ভাষার java-modules.html, java-lesson.html, java-main.js,
//      java-projects.html, java-project.html, java-projects-data.js
//      ফাইলগুলো একই ফোল্ডারে রাখো (আগের ভাষাগুলোর প্যাটার্ন অনুসরণ করে)
//   ২) নিচের MORE_LANGUAGES লিস্টে সেই ভাষার entry-টা status:"ready" করে
//      সঠিক course/projects লিংক বসিয়ে দাও
//   ৩) index.html বা অন্য কোনো ফাইল টাচ করার দরকার নেই — কার্ডটা
//      স্বয়ংক্রিয়ভাবে হোমপেজে দেখা যাবে
// ══════════════════════════════════════════════════

const MORE_LANGUAGES = [
  {
    id: "python",
    title: "Python",
    icon: "🐍",
    status: "ready",              // "ready" | "soon"
    course: "python/modules.html",
    projects: "python/projects.html",
    projectsLabel: "Amazing Python Projects",
  },
  {
    id: "java",
    title: "Java",
    icon: "☕",
    status: "soon",
    course: "java/modules.html",       // যখন রেডি হবে, status "ready" করে দিও
    projects: "java/projects.html",
    projectsLabel: "Amazing Java Projects",
  },
  // ── নতুন ভাষা যোগ করতে এখানে আরেকটা entry বসাও, যেমন: ──
  // {
  //   id: "cpp",
  //   title: "C++",
  //   icon: "⚙️",
  //   status: "soon",
  //   course: "cpp-modules.html",
  //   projects: "cpp-projects.html",
  //   projectsLabel: "Amazing C++ Projects",
  // },
];

// প্রতি সারিতে কয়টা কার্ড দেখাতে হবে (গ্রিড লেআউটের জন্য) — খালি স্লট
// "আরও শীঘ্রই" স্টাব দিয়ে ভরে রাখা হয়, যাতে লেআউট সবসময় সমান থাকে
const MIN_SLOTS_PER_ROW = 3;
