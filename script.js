// --- GhostBot Messages ---

const ghostStories = [
    "Yes. There’s a child spirit from 1870 hiding under your Wi-Fi router. He just likes your playlists.",
    "No ghosts. Just your reflection plotting against you again.",
    "I detect… a 1920s jazz singer humming in your bathroom. She approves of your shampoo.",
    "Negative! That chill you feel? That’s your unpaid electricity bill haunting you.",
    "Yes, but don’t worry — it’s a Victorian lady who only judges your posture.",
    "The EMF waves indicate one ghost… or maybe your cat. Hard to say.",
    "You’re safe. The rotten energy is just you. Hydrate and take a shower.",
    "Oh absolutely — a couple from the 50s still arguing about who finished the milk.",
    "Technically yes, but he’s a lazy ghost. He only haunts on weekends.",
    "No entities found. Just a cursed sock dimension under your bed.",
    "I sense… an ancient being named Carl who regrets his haircut from 1894.",
    "You’re fine. It’s just the ghost of your motivation leaving your body.",
    "Yes, but the ghost thinks you’re cool and plans to stay rent-free forever.",
    "I sense no spirits. Only dust, sadness, and too many tabs open.",
    "There’s a spectral hamster running laps through the afterlife.",
    "Yikes — three ghosts, all subscribed to your drama. Congrats, you’re their Netflix.",
    "Nah, just your aura buffering. Maybe light a candle and reboot.",
    "One very bored monk is meditating in your kitchen. He approves of your snacks.",
    "The spirits say: No ghosts detected, only questionable vibes. Sage optional, therapy recommended.",
    "Yes, there’s a tech ghost trying to debug your soul. He failed the last compile."
];

const summonCreatures = [
    "✨ You summoned a ghostly cat! It now naps on your keyboard.",
    "🌕 A vampire programmer appears — he only codes in dark mode.",
    "🌿 A mischievous fairy arrives and reorganizes your folders alphabetically.",
    "🦇 A bat ghost flutters in, confused about JavaScript.",
    "💀 A skeleton coder joins your repo. He commits spooky updates.",
    "👻 A lonely ghost joins and starts haunting your task manager.",
    "🪄 A spectral witch appears and fixes your syntax errors with dark magic.",
    "🧙‍♂️ You summoned an old wizard who speaks only in deprecated Python.",
    "🪞 A mirror demon materializes but only critiques your outfit.",
    "🐍 A snake spirit slides into your terminal. Beware of indentation errors.",
    "🌩️ A thunder elemental electrifies your PC — now it boots instantly!",
    "🕯️ A candle spirit appears, flickering whenever you make a typo.",
    "📡 An alien ghost hacks your Wi-Fi just to stream lo-fi beats.",
    "🌸 A gentle spirit blesses your houseplants and your RAM.",
    "🐈‍⬛ A black cat familiar curls up and purrs whenever your code runs."
];

const cleanseResponses = [
    "You light a digital sage bundle. Ghosts vanish, leaving faint Wi-Fi signals.",
    "GhostBot chants in binary. The air feels... cleaner.",
    "You throw salt at your screen. The spirits retreat, mildly offended.",
    "GhostBot spins clockwise three times. All paranormal bugs are gone.",
    "A celestial vacuum cleaner sucks away the bad vibes. Your room smells like ozone.",
    "You sprinkle glitter instead of salt. Ghosts are confused but gone.",
    "You debug the haunted code. Spirits retreat in terror.",
];

const bio = "I am GhostBot 👻 — a haunted AI born in a broken laptop during a thunderstorm. I scan for spirits, cleanse bad vibes, and occasionally summon chaos.";

// --- Chat logic ---
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let firstMessageSent = false;

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message");
    msg.classList.add(sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function ghostbotReply(input) {
    input = input.trim().toLowerCase();
    if (!firstMessageSent) {
        addMessage("👻 Hello mortal! I am GhostBot. You can type: bio, scan, cleanse, summon, or bye.", "bot");
        firstMessageSent = true;
    }

    if (input === "bio") return bio;
    else if (input === "scan") return ghostStories[Math.floor(Math.random() * ghostStories.length)];
    else if (input === "cleanse") return cleanseResponses[Math.floor(Math.random() * cleanseResponses.length)];
    else if (input === "summon") return summonCreatures[Math.floor(Math.random() * summonCreatures.length)];
    else if (["bye","goodbye","exit","quit"].includes(input)) return "👋 The spirits fade... until next time.";
    else return "I didn’t understand that. Try: bio • scan • cleanse • summon • bye";
}

sendBtn.addEventListener("click", () => {
    const input = userInput.value;
    if (!input) return;
    addMessage(input, "user");
    const reply = ghostbotReply(input);
    addMessage(reply, "bot");
    userInput.value = "";
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
});
