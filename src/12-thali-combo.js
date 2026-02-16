/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  if (typeof thali === 'object' && thali !== null && !Array.isArray(thali)) {
    const thaliName = thali.name;
    const thaliItems = thali.items;
    const thaliPrice = thali.price;
    const thaliType = thali.isVeg;

    if (typeof thaliName === "string" && Array.isArray(thaliItems) && typeof thaliPrice === "number" && typeof thaliType === "boolean") {
      return `${thaliName.toUpperCase()} (${(thaliType)?"Veg":"Non-Veg"}) - Items: ${thaliItems.join(", ")} - Rs.${thaliPrice.toFixed(2)}`;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

export function getThaliStats(thalis) {
  if (Array.isArray(thalis) && thalis.length > 0) {
    const prices = thalis.map(thali => thali.price);
    const obj = {
      totalThalis: thalis.length,
      vegCount: thalis.filter(thali => thali.isVeg).length,
      nonVegCount: thalis.filter(thali => !thali.isVeg).length,
      avgPrice: (thalis.reduce((acc,thali) => acc+thali.price,0)/thalis.length).toFixed(2),
      cheapest: Math.min(...prices),
      costliest: Math.max(...prices),
      names: thalis.map(thali => thali.name)
    };
    return obj;
  } else {
    return null;
  }
}

export function searchThaliMenu(thalis, query) {
  if (Array.isArray(thalis) && thalis.length > 0 && typeof query === 'string') {
    const queryLower = query.toLowerCase();
    const thaliNames = thalis.filter(thali => thali.name.toLowerCase().includes(queryLower));
    const thaliItems = thalis.filter(thali => thali.items.some(item => item.toLowerCase().includes(queryLower)));
    return [...thaliNames, ...thaliItems];
  } else {
    return [];
  }
}

export function generateThaliReceipt(customerName, thalis) {
  if (Array.isArray(thalis) && thalis.length > 0 && typeof customerName === 'string') {
    const custNameUpper = customerName.toUpperCase();
    let thaliDetails = "";
    thalis.forEach(thali => thaliDetails += `- ${thali.name} x Rs.${thali.price}\n`);
    const totalPrice = thalis.reduce((acc,sum) => acc+sum.price,0);
    const itemsCount = thalis.map(thali => thali.items);
    const receipt = `THALI RECEIPT\n---\nCustomer: ${custNameUpper}\n${thaliDetails}---\nTotal: Rs.${totalPrice}\nItems: ${itemsCount.length}`
    return receipt;
  } else {
    return "";
  }
}
