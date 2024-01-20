const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

const greetings = [
    'I\'m doing well, thank you!',
    'Everything is good!',
    'Leave me alone.',
    'No, I am not free.',
    'What a coincidence, I love myself too.',
    'The direction is opposite to gravity.',
];

// Dark web series quotes
const darkQuotes = [
    'The Stranger: Yesterday, today, and tomorrow are connected in a never-ending circle. Everything is connected.',
    'Jonas: “Two days ago I kissed my aunt!!!”',
    'Mikkel: “Good and evil are a question of perspective.”',
    // ... (add the rest of the quotes)
];

// Game of Thrones quotes
const gotQuotes = [
    '"A mind needs books as a sword needs a whetstone, if it is to keep its edge." — Tyrion Lannister, A Game of Thrones',
    '“Fear cuts deeper than swords.” — Arya Stark, A Game of Thrones',
    // ... (add the rest of the quotes)
];

const magicQuotes = [
    'There is no such thing as magic, just illusion. Things only change when we change them. Do it skillfully, in secret. Then it seems like magic.',
];

const godQuotes = [
    'Our universe could have popped into existence 13.7 billion years ago without any divine help.',
    'No scientific evidence of God\'s existence has been found. Therefore, the scientific consensus is that whether God exists is unknown.',
];

const weatherResponses = [
    'The weather is fine.',
    'You need a tan.',
    'Why are you suddenly caring about the weather?',
    'Stop asking about the weather, I don\'t know.',
];

const identityResponses = [
    'I am Lucy, your personal assistant.',
    'I am here to assist you.',
    'My name is Lucy, created to help and assist you.',
    'Who am I? I am Lucy, your virtual personal assistant.',
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can talk to the microphone.');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    // ...

    if (message.includes('how are you')) {
        speech.text = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (message.includes('weather')) {
        speech.text = weatherResponses[Math.floor(Math.random() * weatherResponses.length)];
    } else if (message.includes('who are you')) {
        speech.text = identityResponses[Math.floor(Math.random() * identityResponses.length)];
    } else if (message.includes('who created this world') || message.includes('God is real')) {
        speech.text = godQuotes[Math.floor(Math.random() * godQuotes.length)];
    } else if (message.includes('magic')) {
        speech.text = magicQuotes[Math.floor(Math.random() * magicQuotes.length)];
    } else if (message.includes('dark')) {
        speech.text = darkQuotes[Math.floor(Math.random() * darkQuotes.length)];
    } else if (message.includes('got') || message.includes('game of thrones') || message.includes('Ice and fire') || message.includes('winter is coming')) {
        speech.text = gotQuotes[Math.floor(Math.random() * gotQuotes.length)];
    } else {
        speech.text = 'Sorry, I didn\'t understand that.';
    }

    speech.volume = 2;
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
