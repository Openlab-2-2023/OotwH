const sentences1 = [
    "Prosím.",
    "Prosím.",
    "Prosím",
    "Prosím.",
    "Prosím."
];

const sentences2 = [
    "David",
    "David",
    "David.",
    "David.",
    "David."
];

const sentences3 = [
    "zabi sa",
    "zabi sa",
    "Zabi sa",
    "zabi sa",
    "zabi sa."
];

function generateSentence(elementId, sentences) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[randomIndex];
    document.getElementById(elementId).textContent = sentence;
}



