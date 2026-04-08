import { useState, useEffect, useRef } from "react";

const recipes = [
  {
    id: 1,
    name: "Appam with Stew",
    emoji: "🥞",
    type: "veg",
    typeLabel: "Vegetarian",
    shortDesc: "Lacy, fermented rice hoppers served with a velvety coconut milk vegetable stew — a Kerala breakfast classic.",
    prepTime: "8 hrs",
    cookTime: "30 min",
    difficulty: "Medium",
    serves: 4,
    color: "#f4a261",
    ingredients: [
      { name: "Raw rice", qty: 2, unit: "cups" },
      { name: "Coconut (grated)", qty: 1, unit: "cup" },
      { name: "Active dry yeast", qty: 1, unit: "tsp" },
      { name: "Sugar", qty: 2, unit: "tsp" },
      { name: "Coconut milk", qty: 1.5, unit: "cups" },
      { name: "Mixed vegetables", qty: 2, unit: "cups" },
      { name: "Onion", qty: 1, unit: "large" },
      { name: "Green chillies", qty: 3, unit: "nos" },
      { name: "Cinnamon", qty: 1, unit: "stick" },
      { name: "Cardamom", qty: 4, unit: "pods" },
    ],
    steps: [
      { title: "Soak the rice", desc: "Wash and soak raw rice in water for 6–8 hours or overnight.", time: 480 },
      { title: "Grind the batter", desc: "Drain soaked rice and grind with grated coconut and a little water into a smooth, fine batter.", time: 15 },
      { title: "Ferment", desc: "Dissolve yeast in lukewarm water with sugar. Add to batter, mix well, and ferment for 8 hours.", time: 480 },
      { title: "Make the stew base", desc: "Sauté onions with cinnamon, cardamom, and green chillies in coconut oil until soft.", time: 300 },
      { title: "Cook vegetables", desc: "Add mixed vegetables, cook for 5 minutes, then pour in thin coconut milk. Simmer until tender.", time: 600 },
      { title: "Finish stew", desc: "Add thick coconut milk, reduce heat, do not boil. Season with salt.", time: 120 },
      { title: "Cook Appam", desc: "Heat an appachatti. Pour a ladle of batter, swirl to form lacy edges. Cover and cook on low heat.", time: 180 },
    ],
  },
  {
    id: 2,
    name: "Karimeen Pollichathu",
    emoji: "🐟",
    type: "seafood",
    typeLabel: "Seafood",
    shortDesc: "Pearl spot fish marinated in a fiery red masala, wrapped in banana leaf and grilled to smoky perfection.",
    prepTime: "30 min",
    cookTime: "25 min",
    difficulty: "Medium",
    serves: 4,
    color: "#2a9d8f",
    ingredients: [
      { name: "Pearl spot fish (Karimeen)", qty: 4, unit: "nos" },
      { name: "Red chilli powder", qty: 2, unit: "tbsp" },
      { name: "Turmeric powder", qty: 1, unit: "tsp" },
      { name: "Black pepper powder", qty: 1, unit: "tsp" },
      { name: "Ginger-garlic paste", qty: 2, unit: "tbsp" },
      { name: "Lemon juice", qty: 2, unit: "tbsp" },
      { name: "Curry leaves", qty: 2, unit: "sprigs" },
      { name: "Coconut oil", qty: 3, unit: "tbsp" },
      { name: "Banana leaves", qty: 4, unit: "pieces" },
      { name: "Salt", qty: 1, unit: "tsp" },
    ],
    steps: [
      { title: "Clean the fish", desc: "Make 3–4 deep diagonal slits on both sides of each fish. Rinse with water and lemon juice.", time: 300 },
      { title: "Prepare marinade", desc: "Mix red chilli powder, turmeric, pepper, ginger-garlic paste, lemon juice, salt and coconut oil into a thick paste.", time: 120 },
      { title: "Marinate", desc: "Apply marinade liberally all over the fish including inside the slits. Rest for 20–30 minutes.", time: 1800 },
      { title: "Prepare banana leaves", desc: "Hold banana leaf pieces over a flame briefly to make them pliable. Brush with coconut oil.", time: 120 },
      { title: "Wrap the fish", desc: "Place each marinated fish on a banana leaf with curry leaves. Fold tightly to form a parcel.", time: 180 },
      { title: "Grill the parcels", desc: "Cook on a hot griddle for 10–12 minutes on each side until the leaf chars.", time: 720 },
    ],
  },
  {
    id: 3,
    name: "Kerala Beef Fry",
    emoji: "🥩",
    type: "non-veg",
    typeLabel: "Non-Veg",
    shortDesc: "Tender beef slow-cooked with coconut slivers, whole spices and curry leaves until deeply dark and crispy.",
    prepTime: "20 min",
    cookTime: "60 min",
    difficulty: "Easy",
    serves: 4,
    color: "#e76f51",
    ingredients: [
      { name: "Beef (cubed)", qty: 500, unit: "g" },
      { name: "Coconut slivers", qty: 0.5, unit: "cup" },
      { name: "Pearl onions (shallots)", qty: 15, unit: "nos" },
      { name: "Ginger", qty: 2, unit: "inch" },
      { name: "Garlic cloves", qty: 6, unit: "nos" },
      { name: "Kashmiri chilli powder", qty: 2, unit: "tbsp" },
      { name: "Coriander powder", qty: 1, unit: "tbsp" },
      { name: "Garam masala", qty: 1, unit: "tsp" },
      { name: "Curry leaves", qty: 3, unit: "sprigs" },
      { name: "Coconut oil", qty: 3, unit: "tbsp" },
    ],
    steps: [
      { title: "Marinate beef", desc: "Combine beef with chilli powder, coriander powder, garam masala, ginger-garlic paste and salt.", time: 300 },
      { title: "Pressure cook", desc: "Pressure cook the marinated beef with a cup of water for 4–5 whistles until very tender.", time: 900 },
      { title: "Fry coconut slivers", desc: "In coconut oil, fry coconut slivers until golden brown. Remove and set aside.", time: 300 },
      { title: "Sauté aromatics", desc: "In the same pan, fry shallots and curry leaves until golden and slightly crispy.", time: 300 },
      { title: "Add beef and reduce", desc: "Add cooked beef. Stir fry on high heat, adding reserved stock gradually until masala coats the beef.", time: 600 },
      { title: "Finish with coconut", desc: "Add fried coconut slivers, toss together. Fry until beef is dark, dry and gloriously crispy.", time: 300 },
    ],
  },
  {
    id: 4,
    name: "Avial",
    emoji: "🥕",
    type: "veg",
    typeLabel: "Vegetarian",
    shortDesc: "A vibrant medley of 8–10 vegetables cooked with raw coconut and cumin, finished with a drizzle of coconut oil.",
    prepTime: "30 min",
    cookTime: "30 min",
    difficulty: "Easy",
    serves: 6,
    color: "#57cc99",
    ingredients: [
      { name: "Mixed vegetables (drumstick, yam, raw banana, carrot, beans)", qty: 4, unit: "cups" },
      { name: "Fresh grated coconut", qty: 1, unit: "cup" },
      { name: "Cumin seeds", qty: 1, unit: "tsp" },
      { name: "Green chillies", qty: 4, unit: "nos" },
      { name: "Turmeric powder", qty: 0.5, unit: "tsp" },
      { name: "Thick curd (yogurt)", qty: 0.5, unit: "cup" },
      { name: "Curry leaves", qty: 2, unit: "sprigs" },
      { name: "Coconut oil", qty: 2, unit: "tbsp" },
      { name: "Salt", qty: 1.5, unit: "tsp" },
    ],
    steps: [
      { title: "Cut vegetables", desc: "Cut all vegetables into uniform finger-length pieces.", time: 600 },
      { title: "Cook vegetables", desc: "Cook in a pan with turmeric, salt and a little water. Start with harder vegetables.", time: 600 },
      { title: "Grind coconut paste", desc: "Grind fresh coconut with cumin seeds and green chillies into a coarse paste.", time: 120 },
      { title: "Add coconut paste", desc: "Once vegetables are cooked, add coconut paste. Stir gently on low heat for 3–4 minutes.", time: 240 },
      { title: "Finish", desc: "Remove from heat. Stir in curd, add curry leaves and drizzle coconut oil. Do not cook after adding curd.", time: 60 },
    ],
  },
  {
    id: 5,
    name: "Puttu & Kadala Curry",
    emoji: "🫙",
    type: "veg",
    typeLabel: "Vegetarian",
    shortDesc: "Steamed rice cylinders layered with coconut paired with a robust spiced black chickpea curry.",
    prepTime: "20 min",
    cookTime: "40 min",
    difficulty: "Medium",
    serves: 4,
    color: "#9b5de5",
    ingredients: [
      { name: "Rice flour (puttu podi)", qty: 2, unit: "cups" },
      { name: "Grated coconut", qty: 1, unit: "cup" },
      { name: "Black chickpeas (kadala)", qty: 1, unit: "cup" },
      { name: "Onion", qty: 2, unit: "large" },
      { name: "Tomato", qty: 2, unit: "medium" },
      { name: "Red chilli powder", qty: 1.5, unit: "tsp" },
      { name: "Coriander powder", qty: 2, unit: "tsp" },
      { name: "Garam masala", qty: 1, unit: "tsp" },
      { name: "Coconut milk", qty: 0.5, unit: "cup" },
      { name: "Mustard seeds", qty: 1, unit: "tsp" },
    ],
    steps: [
      { title: "Soak kadala overnight", desc: "Soak black chickpeas in water overnight or for at least 8 hours.", time: 28800 },
      { title: "Pressure cook kadala", desc: "Drain and pressure cook with salt and enough water for 6–7 whistles until fully soft.", time: 1200 },
      { title: "Make the curry base", desc: "Heat oil, crackle mustard seeds, sauté onions until deep golden. Add ginger-garlic paste.", time: 480 },
      { title: "Build the curry", desc: "Add tomatoes and spice powders. Cook until oil separates. Add kadala and water for thick gravy.", time: 600 },
      { title: "Prepare puttu flour", desc: "Mix rice flour with salt. Sprinkle water and rub with fingertips until flour holds shape when pressed.", time: 300 },
      { title: "Steam the puttu", desc: "Fill a puttukutti alternating layers of flour and grated coconut. Steam for 5–8 minutes.", time: 480 },
    ],
  },
  {
    id: 6,
    name: "Malabar Fish Biryani",
    emoji: "🍚",
    type: "seafood",
    typeLabel: "Seafood",
    shortDesc: "Fragrant saffron-kissed basmati rice layered with spiced kingfish and caramelised onions — a coastal celebration.",
    prepTime: "40 min",
    cookTime: "50 min",
    difficulty: "Hard",
    serves: 6,
    color: "#f4a261",
    ingredients: [
      { name: "Basmati rice", qty: 3, unit: "cups" },
      { name: "Kingfish pieces", qty: 700, unit: "g" },
      { name: "Onion (sliced)", qty: 4, unit: "large" },
      { name: "Tomato", qty: 3, unit: "medium" },
      { name: "Biryani masala", qty: 2, unit: "tbsp" },
      { name: "Saffron strands", qty: 0.5, unit: "tsp" },
      { name: "Warm milk", qty: 4, unit: "tbsp" },
      { name: "Mint leaves", qty: 0.5, unit: "cup" },
      { name: "Coriander leaves", qty: 0.5, unit: "cup" },
      { name: "Ghee", qty: 4, unit: "tbsp" },
    ],
    steps: [
      { title: "Fry the fish", desc: "Marinate fish with chilli, turmeric and salt. Fry in oil until golden on both sides.", time: 600 },
      { title: "Caramelise onions", desc: "Deep fry sliced onions until crispy golden-brown. Drain on paper. Do not rush.", time: 1200 },
      { title: "Make the masala", desc: "In remaining oil, cook tomatoes with biryani masala, mint and coriander until thick.", time: 480 },
      { title: "Par-cook rice", desc: "Boil rice in salted water with whole spices until 70% cooked. Drain immediately.", time: 600 },
      { title: "Layer the biryani", desc: "Spread masala, layer fried fish, then par-cooked rice, saffron milk, fried onions and ghee.", time: 300 },
      { title: "Dum cook", desc: "Seal the pot tightly. Cook on very low flame for 20 minutes. Rest 10 minutes before opening.", time: 1800 },
    ],
  },
  {
    id: 7,
    name: "Prawn Moilee",
    emoji: "🍤",
    type: "seafood",
    typeLabel: "Seafood",
    shortDesc: "A delicate golden coconut milk curry with prawns, turmeric and green chillies — gentle, fragrant and comforting.",
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: "Easy",
    serves: 4,
    color: "#ffd166",
    ingredients: [
      { name: "Large prawns (cleaned)", qty: 400, unit: "g" },
      { name: "Coconut milk (thick)", qty: 1.5, unit: "cups" },
      { name: "Onion (sliced)", qty: 2, unit: "medium" },
      { name: "Green chillies", qty: 4, unit: "nos" },
      { name: "Ginger (julienned)", qty: 1.5, unit: "inch" },
      { name: "Turmeric powder", qty: 0.75, unit: "tsp" },
      { name: "Curry leaves", qty: 2, unit: "sprigs" },
      { name: "Coconut oil", qty: 2, unit: "tbsp" },
      { name: "Lemon juice", qty: 1, unit: "tbsp" },
    ],
    steps: [
      { title: "Sauté aromatics", desc: "Heat coconut oil. Add onions, green chillies, ginger and curry leaves. Cook until translucent.", time: 300 },
      { title: "Add turmeric", desc: "Add turmeric powder and stir for 30 seconds until the oil turns golden.", time: 60 },
      { title: "Pour coconut milk", desc: "Add thin coconut milk. Bring to a gentle simmer — never boil vigorously.", time: 300 },
      { title: "Add prawns", desc: "Add cleaned prawns to the simmering curry. Cook for 4–5 minutes until pink and just done.", time: 300 },
      { title: "Finish and serve", desc: "Stir in thick coconut milk and a squeeze of lemon. Heat gently for 1 minute and remove from flame.", time: 120 },
    ],
  },
  {
    id: 8,
    name: "Sadya Sambar",
    emoji: "🍲",
    type: "veg",
    typeLabel: "Vegetarian",
    shortDesc: "Kerala's golden feast sambar with pearl onions, drumstick and a freshly roasted coconut masala.",
    prepTime: "20 min",
    cookTime: "45 min",
    difficulty: "Medium",
    serves: 8,
    color: "#e9c46a",
    ingredients: [
      { name: "Toor dal", qty: 1, unit: "cup" },
      { name: "Pearl onions (shallots)", qty: 20, unit: "nos" },
      { name: "Drumstick", qty: 2, unit: "nos" },
      { name: "Tomato", qty: 2, unit: "medium" },
      { name: "Grated coconut (roasted)", qty: 0.5, unit: "cup" },
      { name: "Sambar powder", qty: 2.5, unit: "tbsp" },
      { name: "Tamarind", qty: 1, unit: "lemon-size" },
      { name: "Mustard seeds", qty: 1, unit: "tsp" },
      { name: "Red chillies", qty: 3, unit: "nos" },
      { name: "Curry leaves", qty: 2, unit: "sprigs" },
    ],
    steps: [
      { title: "Cook the dal", desc: "Pressure cook toor dal with turmeric until completely mushy. Mash well.", time: 600 },
      { title: "Prepare tamarind water", desc: "Soak tamarind in warm water for 15 minutes. Extract and strain the juice.", time: 900 },
      { title: "Roast coconut masala", desc: "Dry roast grated coconut until dark brown. Grind with sambar powder into a smooth paste.", time: 300 },
      { title: "Cook vegetables", desc: "Cook drumstick and shallots in tamarind water with tomatoes and sambar powder until tender.", time: 600 },
      { title: "Combine and simmer", desc: "Add mashed dal and coconut paste. Simmer together for 10 minutes. Adjust seasoning.", time: 600 },
      { title: "Temper", desc: "Heat coconut oil, crackle mustard seeds, add dried red chillies and curry leaves. Pour over sambar.", time: 180 },
    ],
  },
  {
    id: 9,
    name: "Kerala Porotta",
    emoji: "🫓",
    type: "veg",
    typeLabel: "Vegetarian",
    shortDesc: "Flaky multi-layered flatbreads made with maida, beaten with practiced hands for iconic crispy ribbons.",
    prepTime: "2 hrs",
    cookTime: "20 min",
    difficulty: "Hard",
    serves: 4,
    color: "#c9a96e",
    ingredients: [
      { name: "Maida (all-purpose flour)", qty: 3, unit: "cups" },
      { name: "Egg", qty: 1, unit: "no" },
      { name: "Sugar", qty: 2, unit: "tsp" },
      { name: "Salt", qty: 1, unit: "tsp" },
      { name: "Oil", qty: 3, unit: "tbsp" },
      { name: "Warm water", qty: 0.75, unit: "cup" },
      { name: "Extra oil for layering", qty: 0.25, unit: "cup" },
    ],
    steps: [
      { title: "Make the dough", desc: "Combine flour, egg, sugar, salt and oil. Add warm water gradually and knead 10 minutes into a soft dough.", time: 600 },
      { title: "Rest the dough", desc: "Apply oil over the dough. Cover and rest for at least 1 hour — essential for gluten to relax.", time: 3600 },
      { title: "Roll thin sheets", desc: "Divide dough into balls. Roll each into a very thin, almost translucent sheet. Apply oil all over.", time: 600 },
      { title: "Create layers", desc: "Pleat/fold the oiled sheet like an accordion. Coil the strip into a round disc. Press gently and rest 15 min.", time: 900 },
      { title: "Cook on tawa", desc: "Roll coiled disc to medium thickness. Cook on a hot tawa with oil, flipping and pressing until golden.", time: 300 },
      { title: "Fluff the layers", desc: "While hot, clap/beat between palms vigorously to separate and reveal all the flaky layers.", time: 60 },
    ],
  },
  {
    id: 10,
    name: "Pazham Pori",
    emoji: "🍌",
    type: "veg",
    typeLabel: "Vegetarian",
    shortDesc: "Golden crispy fritters of ripe nendran banana in a lightly sweet maida batter — Kerala's beloved teatime snack.",
    prepTime: "10 min",
    cookTime: "15 min",
    difficulty: "Easy",
    serves: 4,
    color: "#ffb703",
    ingredients: [
      { name: "Nendran banana (ripe)", qty: 2, unit: "nos" },
      { name: "Maida", qty: 0.75, unit: "cup" },
      { name: "Rice flour", qty: 2, unit: "tbsp" },
      { name: "Sugar", qty: 1, unit: "tbsp" },
      { name: "Turmeric powder", qty: 0.25, unit: "tsp" },
      { name: "Salt", qty: 1, unit: "pinch" },
      { name: "Water", qty: 0.5, unit: "cup" },
      { name: "Coconut oil for frying", qty: 2, unit: "cups" },
    ],
    steps: [
      { title: "Slice the bananas", desc: "Peel ripe nendran bananas and slice diagonally into flat oval pieces about 5mm thick.", time: 120 },
      { title: "Make the batter", desc: "Mix maida, rice flour, sugar, turmeric and salt. Add water gradually and whisk into a smooth coating batter.", time: 180 },
      { title: "Heat the oil", desc: "Heat coconut oil in a deep pan until a drop of batter sizzles and rises immediately.", time: 300 },
      { title: "Dip and fry", desc: "Dip each banana slice in batter to coat all sides. Slide gently into hot oil. Fry 3–4 at a time.", time: 300 },
      { title: "Drain and serve", desc: "After 2 minutes, flip and fry until both sides are golden. Drain on paper towels and serve hot.", time: 240 },
    ],
  },
];

// ─── Timer Component ───────────────────────────────────────────────
function Timer({ initialSeconds }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(initialSeconds);
    setRunning(false);
    clearInterval(intervalRef.current);
  }, [initialSeconds]);

  useEffect(() => {
    if (running && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) { clearInterval(intervalRef.current); setRunning(false); return 0; }
          return t - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const progress = ((initialSeconds - timeLeft) / initialSeconds) * 100;

  return (
    <div className="timer-box">
      <div className="timer-header">
        <span className="timer-label">Step Timer</span>
        <span className="timer-display">{fmt(timeLeft)}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="timer-buttons">
        <button className="btn-primary small" onClick={() => setRunning((r) => !r)}>
          {running ? "⏸ Pause" : timeLeft < initialSeconds ? "▶ Resume" : "▶ Start"}
        </button>
        <button className="btn-outline small" onClick={() => { setTimeLeft(initialSeconds); setRunning(false); }}>
          Reset
        </button>
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────
function Navbar({ currentPage, onHome }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">🌴</div>
        <span className="brand-name">Kerala Cuisines</span>
      </div>
      <div className="navbar-right">
        {currentPage !== "home" && (
          <button className="btn-primary small" onClick={onHome}>← Home</button>
        )}
        <span className="recipe-count">10 Recipes</span>
      </div>
    </nav>
  );
}

// ─── Recipe Card ───────────────────────────────────────────────────
function RecipeCard({ recipe, onClick }) {
  const typeClass = recipe.type === "veg" ? "tag-veg" : recipe.type === "seafood" ? "tag-seafood" : "tag-nonveg";
  const diffClass = recipe.difficulty === "Easy" ? "diff-easy" : recipe.difficulty === "Medium" ? "diff-medium" : "diff-hard";
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <div className="card-image" style={{ background: `linear-gradient(135deg, ${recipe.color}22, ${recipe.color}55)` }}>
        <span className="card-emoji">{recipe.emoji}</span>
        <span className={`tag ${typeClass}`}>{recipe.typeLabel}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{recipe.name}</h3>
        <p className="card-desc">{recipe.shortDesc}</p>
        <div className="card-meta">
          <span>🕐 {recipe.cookTime}</span>
          <span>👥 Serves {recipe.serves}</span>
          <span className={`tag ${diffClass}`}>{recipe.difficulty}</span>
        </div>
        <button className="btn-primary full" onClick={(e) => { e.stopPropagation(); onClick(recipe); }}>
          View Recipe →
        </button>
      </div>
    </div>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────
function HomePage({ onSelect }) {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">🌴 God's Own Country Kitchen</div>
          <h1 className="hero-title">The Flavours of Kerala</h1>
          <p className="hero-sub">
            Explore the rich tapestry of coconut, spices, and seafood that define one of India's most celebrated cuisines.
          </p>
          <button
            className="btn-hero"
            onClick={() => document.getElementById("recipes-grid")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore 10 Recipes ↓
          </button>
        </div>
        <div className="hero-wave" />
      </div>

      {/* Grid */}
      <div id="recipes-grid" className="grid-section">
        <div className="section-header">
          <h2 className="section-title">Recipe Collection</h2>
          <p className="section-sub">10 iconic dishes from the backwaters to the Malabar coast</p>
        </div>
        <div className="recipe-grid">
          {recipes.map((r) => <RecipeCard key={r.id} recipe={r} onClick={onSelect} />)}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p className="footer-sub">Crafted with love</p>
        <p className="footer-title">Nadan Recipes from God's Own Country 🌴</p>
      </div>
    </div>
  );
}

// ─── Recipe Detail Page ────────────────────────────────────────────
function RecipeDetail({ recipe, onBack }) {
  const [servings, setServings] = useState(recipe.serves);
  const [checked, setChecked] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [cookingMode, setCookingMode] = useState(false);

  const multiplier = servings / recipe.serves;
  const fmtQty = (q) => { const n = q * multiplier; return n % 1 === 0 ? n : parseFloat(n.toFixed(2)); };

  const typeClass = recipe.type === "veg" ? "tag-veg" : recipe.type === "seafood" ? "tag-seafood" : "tag-nonveg";
  const diffClass = recipe.difficulty === "Easy" ? "diff-easy" : recipe.difficulty === "Medium" ? "diff-medium" : "diff-hard";

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={onBack}>← Back to all recipes</button>

      {/* Hero banner */}
      <div className="detail-hero" style={{ background: `linear-gradient(135deg, ${recipe.color}18, ${recipe.color}35)` }}>
        <span className="detail-emoji">{recipe.emoji}</span>
        <div className="detail-info">
          <div className="detail-tags">
            <span className={`tag ${typeClass}`}>{recipe.typeLabel}</span>
            <span className={`tag ${diffClass}`}>{recipe.difficulty}</span>
          </div>
          <h1 className="detail-title">{recipe.name}</h1>
          <p className="detail-desc">{recipe.shortDesc}</p>
          <div className="detail-stats">
            {[["🕐", "Prep", recipe.prepTime], ["⏱", "Cook", recipe.cookTime], ["👥", "Serves", `${servings}`], ["📋", "Steps", `${recipe.steps.length}`]].map(([ic, label, val]) => (
              <div key={label} className="stat-item">
                <span className="stat-icon">{ic}</span>
                <span className="stat-label">{label}</span>
                <span className="stat-val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two columns */}
      <div className="detail-columns">
        {/* Ingredients */}
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Ingredients</h2>
            <div className="serving-toggle">
              {[2, 4, 6, 8].map((s) => (
                <button key={s} className={`serving-btn ${servings === s ? "active" : ""}`} onClick={() => setServings(s)}>{s}</button>
              ))}
            </div>
          </div>
          <p className="panel-hint">Tap to check off as you go</p>
          {recipe.ingredients.map((ing, i) => (
            <div key={i} className={`ing-row ${checked[i] ? "checked" : ""}`} onClick={() => setChecked((p) => ({ ...p, [i]: !p[i] }))}>
              <div className={`check-box ${checked[i] ? "checked" : ""}`}>{checked[i] && "✓"}</div>
              <span className="ing-name">{ing.name}</span>
              <span className="ing-qty">{fmtQty(ing.qty)} {ing.unit}</span>
            </div>
          ))}
        </div>

        {/* Cooking Mode */}
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Cooking Mode</h2>
            <button className={cookingMode ? "btn-outline small" : "btn-primary small"} onClick={() => { setCookingMode((m) => !m); setCurrentStep(0); }}>
              {cookingMode ? "Exit" : "▶ Start"}
            </button>
          </div>

          {cookingMode ? (
            <div>
              <div className="step-progress-label">
                <span>Step {currentStep + 1} of {recipe.steps.length}</span>
                <span>{Math.round((currentStep / recipe.steps.length) * 100)}%</span>
              </div>
              <div className="progress-bar" style={{ marginBottom: 16 }}>
                <div className="progress-fill" style={{ width: `${(currentStep / recipe.steps.length) * 100}%` }} />
              </div>
              <div className="step-card active">
                <div className="step-header">
                  <div className="step-num">{currentStep + 1}</div>
                  <span className="step-title">{recipe.steps[currentStep].title}</span>
                </div>
                <p className="step-desc">{recipe.steps[currentStep].desc}</p>
                <Timer initialSeconds={recipe.steps[currentStep].time} />
                <div className="step-nav">
                  {currentStep > 0 && (
                    <button className="btn-outline small" onClick={() => setCurrentStep((s) => s - 1)}>← Prev</button>
                  )}
                  {currentStep < recipe.steps.length - 1 ? (
                    <button className="btn-primary small" onClick={() => setCurrentStep((s) => s + 1)}>Next Step →</button>
                  ) : (
                    <button className="btn-primary small done" onClick={() => setCookingMode(false)}>🎉 Done!</button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {recipe.steps.map((step, i) => (
                <div key={i} className="step-preview">
                  <div className="step-num-sm">{i + 1}</div>
                  <div>
                    <div className="step-preview-title">{step.title}</div>
                    <div className="step-preview-desc">{step.desc.slice(0, 65)}…</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── App Root ──────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const goToRecipe = (r) => { setSelectedRecipe(r); setPage("detail"); window.scrollTo(0, 0); };
  const goHome = () => { setPage("home"); setSelectedRecipe(null); };

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #fdfaf6; color: #1a1a1a; overflow-x: hidden; }

        .app { min-height: 100vh; background: #fdfaf6; }

        /* Navbar */
        .navbar { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(42,157,143,0.15); padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .navbar-brand { display: flex; align-items: center; gap: 10px; }
        .brand-icon { width: 32px; height: 32px; background: linear-gradient(135deg, #2a9d8f, #f4a261); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .brand-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: #0a4f47; }
        .navbar-right { display: flex; gap: 12px; align-items: center; }
        .recipe-count { font-size: 13px; color: #5a7a76; font-weight: 500; }

        /* Hero */
        .hero { background: linear-gradient(135deg, #0a4f47 0%, #1a7a6e 40%, #2a9d8f 70%, #f4a261 100%); padding: 80px 24px 100px; text-align: center; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='30' cy='30' r='4' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
        .hero-badge { display: inline-block; background: rgba(255,255,255,0.15); border-radius: 30px; padding: 6px 20px; font-size: 13px; color: #fff; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.25); }
        .hero-title { font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 20px; }
        .hero-sub { font-size: 18px; color: rgba(255,255,255,0.85); line-height: 1.7; margin-bottom: 36px; }
        .btn-hero { background: rgba(255,255,255,0.95); color: #0a4f47; border: none; border-radius: 14px; padding: 14px 36px; font-size: 16px; font-weight: 600; cursor: pointer; transition: transform 0.15s; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
        .btn-hero:hover { transform: scale(1.03); }
        .hero-wave { position: absolute; bottom: -1px; left: 0; right: 0; height: 60px; background: #fdfaf6; clip-path: ellipse(55% 100% at 50% 100%); }

        /* Grid section */
        .grid-section { max-width: 1100px; margin: 0 auto; padding: 60px 24px; }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 36px; color: #0a4f47; margin-bottom: 12px; }
        .section-sub { color: #6b7280; font-size: 16px; }
        .recipe-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .recipe-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .recipe-grid { grid-template-columns: 1fr; } .hero-title { font-size: 36px; } }

        /* Recipe card */
        .recipe-card { background: #fff; border-radius: 20px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; }
        .recipe-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(42,157,143,0.2); }
        .card-image { height: 160px; display: flex; align-items: center; justify-content: center; position: relative; }
        .card-emoji { font-size: 72px; }
        .card-image .tag { position: absolute; top: 14px; right: 14px; }
        .card-body { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; }
        .card-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: #0a4f47; margin-bottom: 8px; }
        .card-desc { font-size: 13.5px; color: #6b7280; line-height: 1.6; flex: 1; margin-bottom: 16px; }
        .card-meta { display: flex; gap: 12px; margin-bottom: 16px; font-size: 12px; color: #5a7a76; align-items: center; flex-wrap: wrap; }

        /* Tags */
        .tag { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }
        .tag-veg { background: #e8f5e9; color: #2e7d32; }
        .tag-nonveg { background: #fce4ec; color: #c62828; }
        .tag-seafood { background: #e3f2fd; color: #1565c0; }
        .diff-easy { background: #e8f5e9; color: #2e7d32; }
        .diff-medium { background: #fff3e0; color: #e65100; }
        .diff-hard { background: #fce4ec; color: #c62828; }

        /* Buttons */
        .btn-primary { background: #2a9d8f; color: #fff; border: none; border-radius: 14px; padding: 12px 28px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .btn-primary:hover { background: #21867a; transform: scale(1.02); }
        .btn-primary.small { padding: 8px 18px; font-size: 13px; border-radius: 10px; }
        .btn-primary.full { width: 100%; }
        .btn-primary.done { background: #57cc99; }
        .btn-outline { background: transparent; color: #2a9d8f; border: 2px solid #2a9d8f; border-radius: 14px; padding: 10px 22px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .btn-outline:hover { background: #2a9d8f; color: #fff; }
        .btn-outline.small { padding: 8px 18px; font-size: 13px; border-radius: 10px; }

        /* Footer */
        .footer { background: linear-gradient(135deg, #0a4f47, #1a7a6e); padding: 60px 24px; text-align: center; }
        .footer-sub { color: rgba(255,255,255,0.7); font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .footer-title { font-family: 'Playfair Display', serif; color: #fff; font-size: 24px; }

        /* Detail page */
        .detail-page { max-width: 960px; margin: 0 auto; padding: 32px 24px 60px; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .back-btn { background: none; border: none; cursor: pointer; color: #2a9d8f; font-size: 14px; font-weight: 600; padding: 8px 0; margin-bottom: 24px; display: block; }
        .detail-hero { border-radius: 24px; padding: 40px 36px; margin-bottom: 32px; display: flex; gap: 32px; flex-wrap: wrap; align-items: center; }
        .detail-emoji { font-size: 100px; line-height: 1; }
        .detail-info { flex: 1; min-width: 240px; }
        .detail-tags { display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
        .detail-title { font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700; color: #0a4f47; margin-bottom: 10px; }
        .detail-desc { color: #5a7a76; font-size: 15px; line-height: 1.7; margin-bottom: 20px; }
        .detail-stats { display: flex; gap: 24px; flex-wrap: wrap; }
        .stat-item { text-align: center; }
        .stat-icon { display: block; font-size: 20px; }
        .stat-label { display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; }
        .stat-val { display: block; font-size: 14px; font-weight: 600; color: #0a4f47; }

        /* Detail columns */
        .detail-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 720px) { .detail-columns { grid-template-columns: 1fr; } .detail-hero { padding: 28px 24px; } .detail-title { font-size: 30px; } }

        /* Panels */
        .panel { background: #fff; border-radius: 20px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .panel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
        .panel-title { font-family: 'Playfair Display', serif; font-size: 22px; color: #0a4f47; }
        .panel-hint { font-size: 12px; color: #9ca3af; margin-bottom: 14px; }

        /* Serving toggle */
        .serving-toggle { display: flex; align-items: center; background: #f0faf8; border-radius: 12px; padding: 4px; gap: 4px; }
        .serving-btn { padding: 8px 14px; border-radius: 8px; border: none; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; background: transparent; color: #5a7a76; }
        .serving-btn.active { background: #2a9d8f; color: #fff; }

        /* Ingredient rows */
        .ing-row { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 12px; transition: background 0.2s; cursor: pointer; }
        .ing-row:hover { background: #f0faf8; }
        .ing-row.checked { opacity: 0.5; text-decoration: line-through; }
        .check-box { width: 20px; height: 20px; border-radius: 6px; border: 2px solid #2a9d8f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; font-size: 12px; color: #fff; }
        .check-box.checked { background: #2a9d8f; }
        .ing-name { font-size: 14px; color: #374151; flex: 1; }
        .ing-qty { font-size: 13px; font-weight: 600; color: #2a9d8f; white-space: nowrap; }

        /* Steps */
        .step-progress-label { display: flex; justify-content: space-between; font-size: 12px; color: #9ca3af; margin-bottom: 6px; }
        .progress-bar { height: 4px; background: #e0f2ef; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #2a9d8f, #f4a261); border-radius: 2px; transition: width 0.4s ease; }
        .step-card { border: 2px solid transparent; border-radius: 16px; padding: 20px; background: #f9f6f1; }
        .step-card.active { border-color: #2a9d8f; background: #e8f9f7; }
        .step-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .step-num { width: 28px; height: 28px; background: #2a9d8f; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; font-weight: 700; flex-shrink: 0; }
        .step-title { font-weight: 600; color: #0a4f47; font-size: 15px; }
        .step-desc { font-size: 14px; color: #4b5563; line-height: 1.7; margin-bottom: 16px; }
        .step-nav { display: flex; gap: 8px; margin-top: 14px; }
        .step-nav button { flex: 1; }
        .step-preview { display: flex; gap: 12px; margin-bottom: 14px; }
        .step-num-sm { width: 26px; height: 26px; background: #e8f9f7; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2a9d8f; font-size: 12px; font-weight: 700; flex-shrink: 0; }
        .step-preview-title { font-size: 14px; font-weight: 600; color: #0a4f47; }
        .step-preview-desc { font-size: 13px; color: #6b7280; }

        /* Timer */
        .timer-box { background: #f0faf8; border-radius: 16px; padding: 16px 20px; border: 1.5px solid #a8e6dc; }
        .timer-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .timer-label { font-size: 12px; font-weight: 600; color: #2a9d8f; text-transform: uppercase; letter-spacing: 1px; }
        .timer-display { font-family: 'Playfair Display', serif; font-size: 28px; color: #0a4f47; letter-spacing: 2px; }
        .timer-buttons { display: flex; gap: 8px; margin-top: 12px; }
        .timer-buttons button { flex: 1; }
      `}</style>
      <Navbar currentPage={page} onHome={goHome} />
      {page === "home" && <HomePage onSelect={goToRecipe} />}
      {page === "detail" && selectedRecipe && <RecipeDetail recipe={selectedRecipe} onBack={goHome} />}
    </div>
  );
}