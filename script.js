/* =========================================================
   PIZZA HUB — script.js
   ========================================================= */

/* ============================================================
   ⚙️  CONFIG  —  EDIT THESE VALUES FOR YOUR BUSINESS
   ============================================================ */
const CONFIG = {
  // 1) WHATSAPP NUMBER — replace with your real number.
  //    Format: country code + number, NO +, NO spaces, NO dashes.
  //    Example for India: "919876543210"
  WHATSAPP_NUMBER: "919999999999",

  BUSINESS_NAME: "Pizza Hub",

  // 2) OPENING HOURS — 24hr format "HH:MM". Set open:null for a closed day.
  HOURS: [
    { day: "Monday",    open: "11:00", close: "23:00" },
    { day: "Tuesday",   open: "11:00", close: "23:00" },
    { day: "Wednesday", open: "11:00", close: "23:00" },
    { day: "Thursday",  open: "11:00", close: "23:00" },
    { day: "Friday",    open: "11:00", close: "23:00" },
    { day: "Saturday",  open: "11:00", close: "23:30" },
    { day: "Sunday",    open: "11:00", close: "23:30" },
  ],

  MAPS_LINK: "https://maps.app.goo.gl/fh1CFvreUKyMMKEX8?g_st=ac",
};

/* ============================================================
   🍕 MENU DATA — priced exactly per the Pizza Hub printed menu.
   Edit names / descriptions / prices here. `p` = price in ₹.
   ============================================================ */
const MENU = [
  {
    id: "pizza",
    label: "Pizza",
    groups: [
      {
        title: "Veg Pizza",
        note: "Reg ₹79 · Med ₹149 · Large ₹279",
        items: [
          { id: "p1", name: "Cheese Sweet Corn Pizza", desc: "Sweet corn, mozzarella, cheese", variants: [{ k: "reg", l: "Reg", p: 79 }, { k: "med", l: "Med", p: 149 }, { k: "large", l: "Large", p: 279 }] },
          { id: "p2", name: "Cheese Capsicum Pizza", desc: "Capsicum, mozzarella, cheese", variants: [{ k: "reg", l: "Reg", p: 79 }, { k: "med", l: "Med", p: 149 }, { k: "large", l: "Large", p: 279 }] },
          { id: "p3", name: "Cheese Tomato Pizza", desc: "Fresh tomato, mozzarella, cheese", variants: [{ k: "reg", l: "Reg", p: 79 }, { k: "med", l: "Med", p: 149 }, { k: "large", l: "Large", p: 279 }] },
          { id: "p4", name: "Cheese Onion Pizza", desc: "Onion, mozzarella, cheese", variants: [{ k: "reg", l: "Reg", p: 79 }, { k: "med", l: "Med", p: 149 }, { k: "large", l: "Large", p: 279 }] },
          { id: "p5", name: "Cheese Margherita Pizza", desc: "Classic mozzarella cheese pizza", variants: [{ k: "reg", l: "Reg", p: 79 }, { k: "med", l: "Med", p: 149 }, { k: "large", l: "Large", p: 279 }] },
        ],
      },
      {
        title: "Mix Veg Pizza",
        note: "Reg ₹149 · Med ₹197 · Large ₹339",
        items: [
          { id: "p6", name: "Country Special", desc: "Onion, capsicum, tomato, cheese", variants: [{ k: "reg", l: "Reg", p: 149 }, { k: "med", l: "Med", p: 197 }, { k: "large", l: "Large", p: 339 }] },
          { id: "p7", name: "Cheese Schezwan Pizza", desc: "Onion, capsicum, schezwan sauce, jalapeno, mozzarella", variants: [{ k: "reg", l: "Reg", p: 149 }, { k: "med", l: "Med", p: 197 }, { k: "large", l: "Large", p: 339 }] },
          { id: "p8", name: "Mushroom Pizza", desc: "Onion, mushroom, cheese", variants: [{ k: "reg", l: "Reg", p: 149 }, { k: "med", l: "Med", p: 197 }, { k: "large", l: "Large", p: 339 }] },
          { id: "p9", name: "Italian Pizza", desc: "Baby corn, black olive, cheese, onion", variants: [{ k: "reg", l: "Reg", p: 149 }, { k: "med", l: "Med", p: 197 }, { k: "large", l: "Large", p: 339 }] },
          { id: "p10", name: "Tandoori Soya Pizza", desc: "Onion, capsicum, Chinese soya sauce, cheese", variants: [{ k: "reg", l: "Reg", p: 149 }, { k: "med", l: "Med", p: 197 }, { k: "large", l: "Large", p: 339 }] },
        ],
      },
      {
        title: "Special Veggi Pizza",
        note: "Reg ₹186 · Med ₹274 · Large ₹350",
        items: [
          { id: "p11", name: "Farm House", desc: "Onion, crispy nachos, capsicum, mushroom, tomato, cheese", variants: [{ k: "reg", l: "Reg", p: 186 }, { k: "med", l: "Med", p: 274 }, { k: "large", l: "Large", p: 350 }] },
          { id: "p12", name: "Gourmet", desc: "Black olive, golden corn, jalapeno", variants: [{ k: "reg", l: "Reg", p: 186 }, { k: "med", l: "Med", p: 274 }, { k: "large", l: "Large", p: 350 }] },
          { id: "p13", name: "Fresh Veggie", desc: "Onion, crispy nachos, capsicum, corn, cheese", variants: [{ k: "reg", l: "Reg", p: 186 }, { k: "med", l: "Med", p: 274 }, { k: "large", l: "Large", p: 350 }] },
          { id: "p14", name: "Mexican Veg", desc: "Onion, capsicum, corn, jalapeno, cheese", variants: [{ k: "reg", l: "Reg", p: 186 }, { k: "med", l: "Med", p: 274 }, { k: "large", l: "Large", p: 350 }] },
          { id: "p15", name: "Golden Choice", desc: "Onion, Chinese soya, sweet corn, mushroom, cheese", variants: [{ k: "reg", l: "Reg", p: 186 }, { k: "med", l: "Med", p: 274 }, { k: "large", l: "Large", p: 350 }] },
        ],
      },
      {
        title: "Favourite Paneer Pizza",
        note: "Reg ₹219 · Med ₹310 · Large ₹410",
        items: [
          { id: "p16", name: "Peppy Paneer", desc: "Crispy nachos, capsicum, red paprika, paneer, cheese", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
          { id: "p17", name: "Chilli Paneer Pizza", desc: "Onion, capsicum, spicy sauce, paneer, jalapeno, mozzarella", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
          { id: "p18", name: "Tandoori Paneer Pizza", desc: "Onion, red paprika, capsicum, tandoori sauce, paneer, mozzarella", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
          { id: "p19", name: "Paneer-Do-Pyaza", desc: "Onion, crispy nachos, capsicum, black & green olive, paneer, mozzarella", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
          { id: "p20", name: "Paneer Tikka Pizza", desc: "Onion, capsicum, tomato, paneer, cheese", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
          { id: "p21", name: "Extra Spicy Paneer Pizza", desc: "Onion, capsicum, paneer, jalapeno, mozzarella", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
          { id: "p22", name: "Dulax Paneer Pizza", desc: "Onion, red paprika, schezwan sauce, paneer, mozzarella", variants: [{ k: "reg", l: "Reg", p: 219 }, { k: "med", l: "Med", p: 310 }, { k: "large", l: "Large", p: 410 }] },
        ],
      },
      {
        title: "Special Range Pizza",
        note: "Reg ₹260 · Med ₹350 · Large ₹550",
        items: [
          { id: "p23", name: "Dulax Veg", desc: "Extra cheese, capsicum, corn, jalapeno, mushroom, mozzarella", variants: [{ k: "reg", l: "Reg", p: 260 }, { k: "med", l: "Med", p: 350 }, { k: "large", l: "Large", p: 550 }] },
          { id: "p24", name: "Veg House", desc: "Extra cheese, onion, capsicum, corn, red paprika, mushroom, mozzarella", variants: [{ k: "reg", l: "Reg", p: 260 }, { k: "med", l: "Med", p: 350 }, { k: "large", l: "Large", p: 550 }] },
          { id: "p25", name: "Hub Special Pizza", desc: "Extra cheese, onion, capsicum, jalapeno, paneer, olives, mozzarella", variants: [{ k: "reg", l: "Reg", p: 260 }, { k: "med", l: "Med", p: 350 }, { k: "large", l: "Large", p: 550 }] },
          { id: "p26", name: "Customer Best Pizza", desc: "Extra cheese, onion, jalapeno, mushroom, paneer, red paprika, mozzarella", variants: [{ k: "reg", l: "Reg", p: 260 }, { k: "med", l: "Med", p: 350 }, { k: "large", l: "Large", p: 550 }] },
          { id: "p27", name: "All Time Pizza", desc: "Extra cheese, onion, capsicum, corn, mushroom, paneer, red paprika, mozzarella", variants: [{ k: "reg", l: "Reg", p: 260 }, { k: "med", l: "Med", p: 350 }, { k: "large", l: "Large", p: 550 }] },
          { id: "p28", name: "Kadhai Paneer Pizza", desc: "Kadhai paneer, extra cheese, onion, capsicum, corn, mozzarella", variants: [{ k: "reg", l: "Reg", p: 260 }, { k: "med", l: "Med", p: 350 }, { k: "large", l: "Large", p: 550 }] },
        ],
      },
      {
        title: "Pizza Hub Signature",
        note: "Reg ₹270 · Med ₹429 · Large ₹599",
        items: [
          { id: "p29", name: "Customer Demanded Pizza", desc: "Onion, capsicum, black olive, sweet corn, paneer, extra mozzarella", variants: [{ k: "reg", l: "Reg", p: 270 }, { k: "med", l: "Med", p: 429 }, { k: "large", l: "Large", p: 599 }] },
          { id: "p30", name: "Spicy Cheese Paneer Pizza", desc: "Onion, capsicum, red paprika, jalapeno, paneer with spicy cheese sauce", variants: [{ k: "reg", l: "Reg", p: 270 }, { k: "med", l: "Med", p: 429 }, { k: "large", l: "Large", p: 599 }] },
          { id: "p31", name: "Veg Extra", desc: "Extra cheese, onion, capsicum, black olive, baby corn, jalapeno, mushroom, mozzarella", variants: [{ k: "reg", l: "Reg", p: 270 }, { k: "med", l: "Med", p: 429 }, { k: "large", l: "Large", p: 599 }] },
          { id: "p32", name: "Hot Shop King", desc: "Cheese, onion, capsicum, schezwan sauce, paneer, black & green olive, baby corn, sweet tomato, jalapeno, extra cheese", bestseller: true, variants: [{ k: "reg", l: "Reg", p: 270 }, { k: "med", l: "Med", p: 429 }, { k: "large", l: "Large", p: 599 }] },
        ],
      },
    ],
    addon: {
      title: "Cheese Burst Crust — add to any pizza",
      note: "Mention with your order · Regular ₹35 · Medium ₹50 · Large ₹75",
    },
  },

  {
    id: "burger",
    label: "Burger",
    items: [
      { id: "b1", name: "Aloo Tikki Burger", desc: "Crispy potato patty, veggies, sauces", variants: [{ k: "std", l: "Add", p: 40 }] },
      { id: "b2", name: "Schezwan Burger", desc: "Spicy schezwan patty burger", variants: [{ k: "std", l: "Add", p: 50 }] },
      { id: "b3", name: "Cheese Burger", desc: "Loaded with melted cheese", variants: [{ k: "std", l: "Add", p: 60 }] },
      { id: "b4", name: "Paneer Burger", desc: "Grilled paneer patty burger", variants: [{ k: "std", l: "Add", p: 70 }] },
      { id: "b5", name: "Paneer Cheese Burger", desc: "Paneer patty with extra cheese", variants: [{ k: "std", l: "Add", p: 90 }] },
      { id: "b6", name: "King Burger", desc: "Our biggest, fully loaded burger", bestseller: true, variants: [{ k: "std", l: "Add", p: 120 }] },
    ],
  },

  {
    id: "noodles-rice",
    label: "Noodles & Rice",
    groups: [
      {
        title: "Noodles",
        note: "Half / Full",
        items: [
          { id: "n1", name: "Veg Noodles", desc: "Classic stir-fried veg noodles", variants: [{ k: "half", l: "Half", p: 50 }, { k: "full", l: "Full", p: 80 }] },
          { id: "n2", name: "Schezwan Noodles", desc: "Spicy schezwan style noodles", variants: [{ k: "half", l: "Half", p: 55 }, { k: "full", l: "Full", p: 90 }] },
          { id: "n3", name: "Extra Spicy Noodles", desc: "For the heat-lovers", variants: [{ k: "half", l: "Half", p: 60 }, { k: "full", l: "Full", p: 90 }] },
          { id: "n4", name: "Paneer Noodles", desc: "Tossed with paneer cubes", variants: [{ k: "half", l: "Half", p: 60 }, { k: "full", l: "Full", p: 100 }] },
          { id: "n5", name: "Hakka Noodles", desc: "Classic Indo-Chinese hakka style", variants: [{ k: "half", l: "Half", p: 70 }, { k: "full", l: "Full", p: 110 }] },
          { id: "n6", name: "Manchurian Noodles", desc: "Noodles tossed in manchurian sauce", variants: [{ k: "half", l: "Half", p: 70 }, { k: "full", l: "Full", p: 120 }] },
        ],
      },
      {
        title: "Rice",
        note: "Half / Full",
        items: [
          { id: "r1", name: "Veg Fried Rice", desc: "Classic Chinese-style fried rice", variants: [{ k: "half", l: "Half", p: 50 }, { k: "full", l: "Full", p: 80 }] },
          { id: "r2", name: "Manchurian Rice", desc: "Fried rice with manchurian sauce", variants: [{ k: "half", l: "Half", p: 50 }, { k: "full", l: "Full", p: 90 }] },
          { id: "r3", name: "Paneer Fried Rice", desc: "Fried rice loaded with paneer", variants: [{ k: "half", l: "Half", p: 60 }, { k: "full", l: "Full", p: 100 }] },
          { id: "r4", name: "Chilli Garlic Fried Rice", desc: "Bold chilli-garlic flavour", variants: [{ k: "half", l: "Half", p: 60 }, { k: "full", l: "Full", p: 100 }] },
          { id: "r5", name: "Mushroom Fried Rice", desc: "Fried rice with mushroom", variants: [{ k: "half", l: "Half", p: 60 }, { k: "full", l: "Full", p: 100 }] },
          { id: "r6", name: "Paneer Manchurian Rice", desc: "Fried rice, paneer manchurian", variants: [{ k: "half", l: "Half", p: 70 }, { k: "full", l: "Full", p: 120 }] },
          { id: "r7", name: "Mushroom Paneer Rice", desc: "Fried rice with mushroom & paneer", variants: [{ k: "half", l: "Half", p: 70 }, { k: "full", l: "Full", p: 120 }] },
        ],
      },
      {
        title: "Gravy",
        note: "Half / Full",
        items: [
          { id: "g1", name: "Manchurian", desc: "Classic veg manchurian gravy", variants: [{ k: "half", l: "Half", p: 50 }, { k: "full", l: "Full", p: 80 }] },
          { id: "g2", name: "Manchurian Dry", desc: "Dry-tossed veg manchurian", variants: [{ k: "half", l: "Half", p: 55 }, { k: "full", l: "Full", p: 80 }] },
          { id: "g3", name: "Paneer Manchurian", desc: "Paneer manchurian in gravy", variants: [{ k: "half", l: "Half", p: 80 }, { k: "full", l: "Full", p: 130 }] },
          { id: "g4", name: "Paneer Manchurian Dry", desc: "Dry-tossed paneer manchurian", variants: [{ k: "half", l: "Half", p: 100 }, { k: "full", l: "Full", p: 170 }] },
          { id: "g5", name: "Chilli Paneer", desc: "Paneer in spicy chilli gravy", variants: [{ k: "half", l: "Half", p: 90 }, { k: "full", l: "Full", p: 150 }] },
          { id: "g6", name: "Chilli Paneer Dry", desc: "Dry-tossed chilli paneer", variants: [{ k: "half", l: "Half", p: 100 }, { k: "full", l: "Full", p: 170 }] },
          { id: "g7", name: "Mushroom Chilli", desc: "Mushroom tossed in chilli sauce", variants: [{ k: "half", l: "Half", p: 90 }, { k: "full", l: "Full", p: 150 }] },
          { id: "g8", name: "Chilli Potato", desc: "Crispy potato in chilli sauce", variants: [{ k: "half", l: "Half", p: 60 }, { k: "full", l: "Full", p: 90 }] },
        ],
      },
    ],
  },

  {
    id: "sides",
    label: "Sides & More",
    groups: [
      {
        title: "Chinese Sides",
        items: [
          { id: "s1", name: "French Fry", desc: "Classic crispy fries", variants: [{ k: "std", l: "Add", p: 60 }] },
          { id: "s2", name: "Masala French Fry", desc: "Fries tossed in masala", variants: [{ k: "std", l: "Add", p: 70 }] },
          { id: "s3", name: "Cheese Garlic Bread", desc: "Toasted garlic bread with cheese", variants: [{ k: "std", l: "Add", p: 90 }] },
          { id: "s4", name: "Stick Garlic Bread", desc: "Garlic bread sticks", variants: [{ k: "std", l: "Add", p: 100 }] },
          { id: "s5", name: "KGF Combo", desc: "Our Chinese sides combo", variants: [{ k: "half", l: "Half", p: 80 }, { k: "full", l: "Full", p: 140 }] },
        ],
      },
      {
        title: "Maggi & Pasta",
        items: [
          { id: "m1", name: "Veg Maggi", desc: "Classic veg maggi", variants: [{ k: "std", l: "Add", p: 60 }] },
          { id: "m2", name: "Masala Maggi", desc: "Maggi with extra masala", variants: [{ k: "std", l: "Add", p: 70 }] },
          { id: "m3", name: "Paneer Maggi", desc: "Maggi loaded with paneer", variants: [{ k: "std", l: "Add", p: 80 }] },
          { id: "m4", name: "Red Sauce Pasta", desc: "Penne in tangy red sauce", variants: [{ k: "std", l: "Add", p: 70 }] },
          { id: "m5", name: "White Sauce Pasta", desc: "Penne in creamy white sauce", variants: [{ k: "std", l: "Add", p: 80 }] },
          { id: "m6", name: "Mix Sauce Pasta", desc: "Creamy red & white sauce blend", bestseller: true, variants: [{ k: "std", l: "Add", p: 90 }] },
        ],
      },
      {
        title: "Chinese Main Course",
        items: [
          { id: "c1", name: "Momos (5 pcs)", desc: "Steamed veg momos", variants: [{ k: "std", l: "Add", p: 35 }] },
          { id: "c2", name: "Veg Roll", desc: "Veggies rolled in soft paratha", variants: [{ k: "std", l: "Add", p: 30 }] },
          { id: "c3", name: "Schezwan Roll", desc: "Spicy schezwan roll", variants: [{ k: "std", l: "Add", p: 35 }] },
        ],
      },
    ],
  },

  {
    id: "beverages",
    label: "Beverages",
    items: [
      { id: "d1", name: "Tea", desc: "Hot masala tea", variants: [{ k: "std", l: "Add", p: 20 }] },
      { id: "d2", name: "Hot Coffee", desc: "Freshly brewed hot coffee", variants: [{ k: "std", l: "Add", p: 40 }] },
      { id: "d3", name: "Lemon Soda", desc: "Sweet & salty lemon soda", variants: [{ k: "std", l: "Add", p: 40 }] },
      { id: "d4", name: "Cold Drink", desc: "Assorted soft drinks", variants: [{ k: "std", l: "Add", p: 20 }] },
      { id: "d5", name: "Cold Coffee", desc: "Chilled, blended cold coffee", bestseller: true, variants: [{ k: "std", l: "Add", p: 80 }] },
      { id: "d6", name: "Water Bottle", desc: "Packaged drinking water", variants: [{ k: "std", l: "Add", p: 20 }] },
    ],
  },

  {
    id: "combos",
    label: "Combos",
    items: [
      { id: "co1", name: "RRR Combo", desc: "Fried rice + manchurian, bundled to save", variants: [{ k: "half", l: "Half", p: 80 }, { k: "full", l: "Full", p: 140 }] },
      { id: "co2", name: "KGF Combo", desc: "Our Chinese sides combo", variants: [{ k: "half", l: "Half", p: 80 }, { k: "full", l: "Full", p: 140 }] },
    ],
  },
];

/* Handpicked "Most Ordered" shortcuts shown near the top of the page */
const POPULAR = [
  { cat: "pizza", itemId: "p32", variantKey: "reg", img: "assets/pizza-cheese-pull.jpg" },
  { cat: "pizza", itemId: "p1", variantKey: "reg", icon: "🍕" },
  { cat: "burger", itemId: "b2", variantKey: "std", icon: "🍔" },
  { cat: "sides", itemId: "m6", variantKey: "std", img: "assets/pasta.jpg" },
  { cat: "noodles-rice", itemId: "n4", variantKey: "full", icon: "🍜" },
  { cat: "beverages", itemId: "d5", variantKey: "std", icon: "🥤" },
];

/* ============================================================
   Helpers
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmt = (n) => "₹" + n.toLocaleString("en-IN");

function findItem(catId, itemId) {
  const cat = MENU.find((c) => c.id === catId);
  if (!cat) return null;
  if (cat.items) {
    const it = cat.items.find((i) => i.id === itemId);
    if (it) return it;
  }
  if (cat.groups) {
    for (const g of cat.groups) {
      const it = g.items.find((i) => i.id === itemId);
      if (it) return it;
    }
  }
  return null;
}

/* ============================================================
   Cart (persisted in localStorage)
   ============================================================ */
const CART_KEY = "pizzahub_cart_v1";
let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}
function cartKey(catId, itemId, variantKey) {
  return `${catId}::${itemId}::${variantKey}`;
}
function getQty(catId, itemId, variantKey) {
  const line = cart[cartKey(catId, itemId, variantKey)];
  return line ? line.qty : 0;
}
function addToCart(catId, itemId, variantKey) {
  const item = findItem(catId, itemId);
  if (!item) return;
  const variant = item.variants.find((v) => v.k === variantKey);
  if (!variant) return;
  const key = cartKey(catId, itemId, variantKey);
  if (cart[key]) {
    cart[key].qty += 1;
  } else {
    cart[key] = {
      catId, itemId, variantKey,
      name: item.name,
      variantLabel: variant.l,
      price: variant.p,
      qty: 1,
    };
  }
  saveCart();
  onCartChange();
}
function decFromCart(key) {
  if (!cart[key]) return;
  cart[key].qty -= 1;
  if (cart[key].qty <= 0) delete cart[key];
  saveCart();
  onCartChange();
}
function incInCart(key) {
  if (!cart[key]) return;
  cart[key].qty += 1;
  saveCart();
  onCartChange();
}
function removeFromCart(key) {
  delete cart[key];
  saveCart();
  onCartChange();
}
function clearCart() {
  cart = {};
  saveCart();
  onCartChange();
}
function cartLines() { return Object.entries(cart); }
function cartCount() { return cartLines().reduce((s, [, l]) => s + l.qty, 0); }
function cartTotal() { return cartLines().reduce((s, [, l]) => s + l.qty * l.price, 0); }

/* ============================================================
   Rendering: Menu
   ============================================================ */
function itemVariantControl(catId, itemId, variant) {
  const key = cartKey(catId, itemId, variant.k);
  const qty = getQty(catId, itemId, variant.k);
  const wrap = document.createElement("div");
  wrap.className = "variant-slot";
  wrap.id = `ctrl-${key}`;
  renderVariantControl(wrap, catId, itemId, variant, qty);
  return wrap;
}

function renderVariantControl(wrap, catId, itemId, variant, qty) {
  if (qty > 0) {
    wrap.innerHTML = `
      <div class="variant-stepper" data-key="${cartKey(catId, itemId, variant.k)}">
        <span class="variant-stepper__label">${variant.l}</span>
        <div class="variant-stepper__controls">
          <button type="button" data-act="dec" aria-label="Remove one ${variant.l}">−</button>
          <span class="variant-stepper__qty">${qty}</span>
          <button type="button" data-act="inc" aria-label="Add one more ${variant.l}">+</button>
        </div>
      </div>`;
  } else {
    wrap.innerHTML = `
      <button type="button" class="variant-btn" data-act="add" data-cat="${catId}" data-item="${itemId}" data-variant="${variant.k}">
        <span class="variant-btn__label">${variant.l}</span>
        <span class="variant-btn__price">${fmt(variant.p)}</span>
      </button>`;
  }
}

function refreshVariantControl(catId, itemId, variantKey) {
  const key = cartKey(catId, itemId, variantKey);
  const wrap = document.getElementById(`ctrl-${key}`);
  if (!wrap) return;
  const item = findItem(catId, itemId);
  const variant = item.variants.find((v) => v.k === variantKey);
  renderVariantControl(wrap, catId, itemId, variant, getQty(catId, itemId, variantKey));
}

function buildItemCard(catId, item) {
  const card = document.createElement("article");
  card.className = "item-card" + (item.bestseller ? " item-card--bestseller" : "");
  const nameEl = document.createElement("h4");
  nameEl.className = "item-card__name";
  nameEl.textContent = item.name;
  const descEl = document.createElement("p");
  descEl.className = "item-card__desc";
  descEl.textContent = item.desc || "";
  const variantsEl = document.createElement("div");
  variantsEl.className = "item-card__variants";
  item.variants.forEach((v) => variantsEl.appendChild(itemVariantControl(catId, item.id, v)));

  card.appendChild(nameEl);
  card.appendChild(descEl);
  card.appendChild(variantsEl);
  return card;
}

function buildMenuPanel(category) {
  const panel = document.createElement("div");
  panel.className = "menu-panel";
  panel.id = `panel-${category.id}`;
  panel.setAttribute("role", "tabpanel");

  if (category.groups) {
    category.groups.forEach((group) => {
      const groupEl = document.createElement("div");
      groupEl.className = "menu-group";
      groupEl.innerHTML = `
        <div class="menu-group__head">
          <h3 class="menu-group__title">${group.title}</h3>
          ${group.note ? `<p class="menu-group__price-range">${group.note}</p>` : ""}
        </div>`;
      const grid = document.createElement("div");
      grid.className = "item-grid";
      group.items.forEach((item) => grid.appendChild(buildItemCard(category.id, item)));
      groupEl.appendChild(grid);
      panel.appendChild(groupEl);
    });

    if (category.addon) {
      const note = document.createElement("div");
      note.className = "addon-note";
      note.innerHTML = `<strong>${category.addon.title}</strong><br>${category.addon.note}`;
      panel.appendChild(note);
    }
  } else if (category.items) {
    const grid = document.createElement("div");
    grid.className = "item-grid";
    category.items.forEach((item) => grid.appendChild(buildItemCard(category.id, item)));
    panel.appendChild(grid);
  }

  return panel;
}

function renderMenu() {
  const tabsEl = $("#menuTabs");
  const panelsEl = $("#menuPanels");
  tabsEl.innerHTML = "";
  panelsEl.innerHTML = "";

  MENU.forEach((category, idx) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "menu-tab" + (idx === 0 ? " is-active" : "");
    tab.textContent = category.label;
    tab.setAttribute("role", "tab");
    tab.dataset.target = category.id;
    tabsEl.appendChild(tab);

    const panel = buildMenuPanel(category);
    if (idx === 0) panel.classList.add("is-active");
    panelsEl.appendChild(panel);
  });

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-tab");
    if (!btn) return;
    $$(".menu-tab", tabsEl).forEach((t) => t.classList.toggle("is-active", t === btn));
    $$(".menu-panel", panelsEl).forEach((p) => p.classList.toggle("is-active", p.id === `panel-${btn.dataset.target}`));
  });

  panelsEl.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-act='add']");
    if (addBtn) {
      addToCart(addBtn.dataset.cat, addBtn.dataset.item, addBtn.dataset.variant);
      return;
    }
    const stepBtn = e.target.closest(".variant-stepper button");
    if (stepBtn) {
      const key = stepBtn.closest(".variant-stepper").dataset.key;
      if (stepBtn.dataset.act === "inc") incInCart(key);
      else decFromCart(key);
    }
  });
}

/* ============================================================
   Rendering: Popular items
   ============================================================ */
function renderPopular() {
  const scroller = $("#popularScroller");
  scroller.innerHTML = "";
  POPULAR.forEach((p) => {
    const item = findItem(p.cat, p.itemId);
    if (!item) return;
    const variant = item.variants.find((v) => v.k === p.variantKey);
    const key = cartKey(p.cat, p.itemId, p.variantKey);

    const card = document.createElement("article");
    card.className = "pop-card";
    card.innerHTML = `
      <div class="pop-card__img-wrap">
        ${item.bestseller ? `<span class="pop-card__badge">★ Bestseller</span>` : ""}
        ${p.img
          ? `<img src="${p.img}" alt="${item.name} at Pizza Hub Atarra" loading="lazy">`
          : `<div style="width:100%;height:100%;display:grid;place-items:center;font-size:2.6rem;background:linear-gradient(135deg,var(--char-700),var(--char-600));">${p.icon || "🍽️"}</div>`}
      </div>
      <div class="pop-card__body">
        <h3>${item.name}</h3>
        <p class="pop-card__price">${variant.l !== "Add" ? variant.l + " · " : ""}${fmt(variant.p)}</p>
        <button type="button" class="pop-card__add" data-key="${key}" data-cat="${p.cat}" data-item="${p.itemId}" data-variant="${p.variantKey}">
          Add to cart
        </button>
      </div>`;
    scroller.appendChild(card);
  });

  scroller.addEventListener("click", (e) => {
    const btn = e.target.closest(".pop-card__add");
    if (!btn) return;
    addToCart(btn.dataset.cat, btn.dataset.item, btn.dataset.variant);
    btn.textContent = "Added ✓";
    btn.classList.add("is-added");
    setTimeout(() => {
      btn.textContent = "Add to cart";
      btn.classList.remove("is-added");
    }, 1200);
  });
}

/* ============================================================
   Rendering: Cart drawer / bar
   ============================================================ */
function renderCartDrawer() {
  const itemsEl = $("#cartItems");
  const emptyEl = $("#cartEmpty");
  const footEl = $("#cartFoot");
  const lines = cartLines();

  itemsEl.innerHTML = "";

  if (lines.length === 0) {
    itemsEl.appendChild(emptyEl);
    emptyEl.hidden = false;
    footEl.hidden = true;
    return;
  }

  footEl.hidden = false;

  lines.forEach(([key, l]) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item__info">
        <p class="cart-item__name">${l.name}</p>
        <p class="cart-item__variant">${l.variantLabel !== "Add" ? l.variantLabel : "Regular"} · ${fmt(l.price)} each</p>
        <div class="cart-item__row">
          <div class="cart-item__qty">
            <button type="button" data-act="dec" data-key="${key}" aria-label="Decrease quantity">−</button>
            <span>${l.qty}</span>
            <button type="button" data-act="inc" data-key="${key}" aria-label="Increase quantity">+</button>
          </div>
          <span class="cart-item__price">${fmt(l.qty * l.price)}</span>
        </div>
        <button type="button" class="cart-item__remove" data-act="remove" data-key="${key}">Remove</button>
      </div>`;
    itemsEl.appendChild(row);
  });

  $("#cartTotal").textContent = fmt(cartTotal());
}

function renderCartBar() {
  const bar = $("#cartBar");
  const count = cartCount();
  if (count === 0) {
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  $("#cartBarCount").textContent = count;
  $("#cartBarTotal").textContent = fmt(cartTotal());
}

function renderCartNavCount() {
  const count = cartCount();
  const el = $("#cartCount");
  if (count === 0) { el.hidden = true; return; }
  el.hidden = false;
  el.textContent = count;
}

function onCartChange() {
  renderCartDrawer();
  renderCartBar();
  renderCartNavCount();
  // refresh any visible variant controls to reflect qty
  cartLines().forEach(([key, l]) => refreshVariantControl(l.catId, l.itemId, l.variantKey));
  // also refresh controls for items that were just removed (qty 0) — cheap full pass on visible panel
  $$(".variant-slot").forEach((slot) => {
    const idParts = slot.id.replace("ctrl-", "").split("::");
    if (idParts.length === 3) refreshVariantControl(idParts[0], idParts[1], idParts[2]);
  });
}

/* ============================================================
   Cart drawer open/close
   ============================================================ */
function openCart() {
  $("#cartDrawer").classList.add("is-open");
  $("#cartOverlay").classList.add("is-open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $("#cartDrawer").classList.remove("is-open");
  $("#cartOverlay").classList.remove("is-open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ============================================================
   WhatsApp message building
   ============================================================ */
function waLink(message) {
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function baseWaMessage() {
  return `Hi ${CONFIG.BUSINESS_NAME}! 👋 I'd like to place an order.`;
}

function buildOrderMessage() {
  const lines = cartLines();
  const name = $("#custName").value.trim();
  const orderType = ($$('input[name="orderType"]').find((r) => r.checked) || {}).value || "Delivery";
  const address = $("#custAddress").value.trim();

  let msg = `Hi ${CONFIG.BUSINESS_NAME}! 👋 I'd like to place an order.\n\n`;
  msg += `🧾 *Order Details*\n`;
  lines.forEach(([, l]) => {
    const sizeTag = l.variantLabel !== "Add" ? ` (${l.variantLabel})` : "";
    msg += `• ${l.name}${sizeTag} x${l.qty} — ${fmt(l.qty * l.price)}\n`;
  });
  msg += `\n💰 *Total: ${fmt(cartTotal())}*\n\n`;
  msg += `👤 Name: ${name || "—"}\n`;
  msg += `🛵 Order Type: ${orderType}\n`;
  if (orderType === "Delivery") msg += `📍 Address: ${address || "—"}\n`;
  msg += `\nPlease confirm my order. Thank you! 🍕`;
  return msg;
}

function updateStaticWaButtons() {
  $$("#navWaBtn, #heroWaBtn, #finalWaBtn, #footerWaBtn, #locationWaBtn").forEach((btn) => {
    if (!btn) return;
    btn.href = waLink(baseWaMessage());
  });
}

function updateCartWaButton() {
  const btn = $("#cartWaBtn");
  btn.href = waLink(buildOrderMessage());
}

/* ============================================================
   Opening hours
   ============================================================ */
function renderHours() {
  const list = $("#hoursList");
  const statusEl = $("#hoursStatus");
  const now = new Date();
  const todayIdx = (now.getDay() + 6) % 7; // Mon=0 ... Sun=6, matching CONFIG.HOURS order

  list.innerHTML = "";
  CONFIG.HOURS.forEach((d, idx) => {
    const li = document.createElement("li");
    if (idx === todayIdx) li.classList.add("is-today");
    const hoursText = d.open ? `${to12h(d.open)} – ${to12h(d.close)}` : "Closed";
    li.innerHTML = `<span>${d.day}</span><span>${hoursText}</span>`;
    list.appendChild(li);
  });

  const today = CONFIG.HOURS[todayIdx];
  let isOpen = false;
  if (today && today.open) {
    const [oh, om] = today.open.split(":").map(Number);
    const [ch, cm] = today.close.split(":").map(Number);
    const openMins = oh * 60 + om;
    const closeMins = ch * 60 + cm;
    const nowMins = now.getHours() * 60 + now.getMinutes();
    isOpen = nowMins >= openMins && nowMins <= closeMins;
  }
  statusEl.textContent = isOpen ? "🟢 Open now" : "🔴 Closed now";
  statusEl.className = "hours__status " + (isOpen ? "is-open" : "is-closed");
}

function to12h(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

/* ============================================================
   Nav interactions
   ============================================================ */
function initNav() {
  const burger = $("#navBurger");
  const links = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#navLinks a").forEach((a) => a.addEventListener("click", () => {
    links.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }));
}

/* ============================================================
   Init
   ============================================================ */
function init() {
  $("#year").textContent = new Date().getFullYear();

  renderMenu();
  renderPopular();
  renderHours();
  onCartChange();
  updateStaticWaButtons();

  initNav();

  $("#cartOpenBtn").addEventListener("click", openCart);
  $("#cartBarBtn").addEventListener("click", openCart);
  $("#cartCloseBtn").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#cartClearBtn").addEventListener("click", () => {
    if (confirm("Clear all items from your cart?")) clearCart();
  });

  $("#cartItems").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const key = btn.dataset.key;
    if (btn.dataset.act === "inc") incInCart(key);
    if (btn.dataset.act === "dec") decFromCart(key);
    if (btn.dataset.act === "remove") removeFromCart(key);
  });

  // Toggle delivery address field visibility
  $$('input[name="orderType"]').forEach((r) => {
    r.addEventListener("change", () => {
      $("#addressField").style.display = r.value === "Delivery" && r.checked ? "flex" : ($("input[name='orderType']:checked").value === "Delivery" ? "flex" : "none");
    });
  });

  // Build the WhatsApp link fresh right before navigating (covers late edits to name/address)
  $("#cartWaBtn").addEventListener("click", (e) => {
    if (cartLines().length === 0) {
      e.preventDefault();
      alert("Your cart is empty — add something tasty first! 🍕");
      return;
    }
    updateCartWaButton();
  });
  $("#custName").addEventListener("input", updateCartWaButton);
  $("#custAddress").addEventListener("input", updateCartWaButton);
  updateCartWaButton();
}

document.addEventListener("DOMContentLoaded", init);
