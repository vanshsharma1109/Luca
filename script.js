function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        let reply = generatePlayboyReply(message);
        addMessage(reply, "bot");
    }, 400);
}

function addMessage(text, sender) {
    let chatWindow = document.getElementById("chatWindow");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;

    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// 🔥 Playboy brain logic
function generatePlayboyReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hi") || msg.includes("hello")) 
        return "Hey gorgeous… what's stealing your smile today? 😏";

    if (msg.includes("wyd") || msg.includes("what you doing"))
        return "Just thinking about how good this convo could get… if you let it 😉";

    if (msg.includes("bored"))
        return "Then let me entertain you… I’m good at that. 😌";

    if (msg.includes("miss"))
        return "Careful… I get addictive. You sure you wanna miss *me*? 😘";

    if (msg.includes("cute"))
        return "Cute? Nah… but I do look better when I’m looking at you. 😎";

    if (msg.includes("love"))
        return "Love? Slow down angel… let’s flirt first 😏🔥";

    return playfulLines[Math.floor(Math.random() * playfulLines.length)];
}

const playfulLines = [
    "So… when did you get this pretty? 👀🔥",
    "Be honest… do you flirt this good with everyone or am I special?",
    "I like your vibe… it feels like trouble. My favorite kind 😉",
    "If I flirt with you, just know… I mean it 😌",
    "Your energy? Dangerous. I like it too much 😈",
    "Say one more cute thing and I might fall for you 😳"
];
