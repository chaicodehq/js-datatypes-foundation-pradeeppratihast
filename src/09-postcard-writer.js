/**
 * 💌 Indian Postcard Writer - String Advanced
 *
 * Dadi ji ko digital postcard likhna hai. Template literals se message banana,
 * addresses check karna, formatting karna — string advanced methods se
 * postcards likh!
 *
 * Methods to explore: template literals (`${}`), .startsWith(),
 *   .endsWith(), .padStart(), .padEnd(), .match()
 *
 * Functions:
 *
 *   1. writePostcard(sender, receiver, message)
 *      - Template literal se formatted postcard banao:
 *        "Priy {receiver},\n\n{message}\n\nAapka/Aapki,\n{sender}"
 *      - Agar koi bhi param string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: writePostcard("Guddu", "Dadi ji", "Hum theek hain")
 *                 => "Priy Dadi ji,\n\nHum theek hain\n\nAapka/Aapki,\nGuddu"
 *
 *   2. isValidPincode(code)
 *      - Indian pincodes: 6 digits, "0" se start nahi hota
 *      - .startsWith("0") se check karo ki "0" se start nahi ho raha
 *      - .length === 6 check karo
 *      - Har character digit hona chahiye (use /^\d+$/ regex test or check each char)
 *      - Agar code string nahi hai, return false
 *      - Example: isValidPincode("400001") => true
 *      - Example: isValidPincode("012345") => false
 *
 *   3. formatPostcardField(label, value, width)
 *      - label.padEnd(width) + ": " + value — for aligned fields
 *      - Wait, let me simplify: return label.padEnd(12) + ": " + value
 *      - Agar width provided, use that instead of 12
 *      - Agar label ya value string nahi hai, return ""
 *      - Example: formatPostcardField("From", "Guddu") => "From        : Guddu"
 *      - Example: formatPostcardField("To", "Dadi ji", 8) => "To      : Dadi ji"
 *
 *   4. isFromState(address, stateCode)
 *      - .endsWith() se check karo ki address kisi state code se end hota hai
 *      - Agar address ya stateCode string nahi hai, return false
 *      - Example: isFromState("Guddu, Lucknow, UP", "UP") => true
 *      - Example: isFromState("Priya, Mumbai, MH", "UP") => false
 *
 *   5. countVowels(message)
 *      - .match(/[aeiouAEIOU]/g) se saare vowels dhundho
 *      - Return: count (match result ki length, ya 0 agar null hai)
 *      - Agar message string nahi hai, return 0
 *      - Example: countVowels("Namaste India") => 6
 *
 * @example
 *   writePostcard("Guddu", "Dadi ji", "Hum theek hain")
 *   isValidPincode("400001")   // => true
 *   countVowels("Namaste")     // => 3
 */
export function writePostcard(sender, receiver, message) {
  if (typeof sender === "string" && typeof receiver === "string" && typeof message === "string") {
    const send = sender.trim();
    const receive = receiver.trim();
    const msg = message.trim();

    if (send !== "" && receive !== "" && msg !== "") {
      return `Priy ${receiver},\n\n${message}\n\nAapka/Aapki,\n${sender}`;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

export function isValidPincode(code) {
  const regex = /^\d+$/;

  if (typeof code === "string" && code.length === 6) {
    if (!code.startsWith("0")) {
      return regex.test(code);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function formatPostcardField(label, value, width) {
  if (typeof label === "string" && typeof value === "string" && label.length > 0 && value.length > 0) {
    if (width) {
      return label.padEnd(width) + ": " + value;
    }
    return label.padEnd(12) + ": " + value;
  } else {
    return "";
  }
}

export function isFromState(address, stateCode) {
  if (typeof address === 'string' && typeof stateCode === 'string') {
    return address.endsWith(stateCode);
  } else {
    return false;
  }
}

export function countVowels(message) {
  if (typeof message === 'string' && message.length > 0) {
    const vowels = message.match(/[aeiouAEIOU]/g);
    return (vowels===null)?0:vowels.length;
  } else {
    return 0;
  }
}
