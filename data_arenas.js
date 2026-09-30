// קובץ הליבה: רשימת הזירות + מאגר המושגים הגלובלי.
// כל קובץ zirah/master נטען אחרי הקובץ הזה ומוסיף למאגר TERMS באמצעות TERMS.push(...[...]).
// כדי להוסיף זירה חדשה: 1) צרו data_zX.js חדש בפורמט הזה 2) סמנו active:true כאן 3) הוסיפו <script src="data_zX.js"> ב-index.html

const ARENAS = [
  { id: "master", title: "זירת העל", sub: "מושגי יסוד בדמוקרטיה ותקשורת", emoji: "🪟", active: true },
  { id: "z1", title: "זירה 1", sub: "מציאות תקשורתית", emoji: "🧭", active: true },
  { id: "z2", title: "זירה 2", sub: "גלובליזציה", emoji: "🌍", active: true },
  { id: "z3", title: "זירה 3", sub: "חדשות וצילום", emoji: "📰", active: true },
  { id: "z4", title: "זירה 4", sub: "הומור וסאטירה", emoji: "🎭", active: true },
  { id: "z5", title: "זירה 5", sub: "תרבות דיגיטלית", emoji: "📱", active: true },
  { id: "z6", title: "זירה 6", sub: "ריאליטי", emoji: "📺", active: true },
  { id: "z7", title: "זירה 7", sub: "קליפים וסרטוני רשת", emoji: "🎬", active: true },
  { id: "z8", title: "זירה 8", sub: "ספורט", emoji: "⚽", active: true },
  { id: "z9", title: "זירה 9", sub: "פרסום", emoji: "📢", active: true },
];

const TERMS = [];
