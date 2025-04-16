document.getElementById("tell-joke").addEventListener("click", function() {
    const jokes = [
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "What’s orange and sounds like a parrot? A carrot!",
        "Why did the JavaScript developer go broke? Because he kept using 'var'.",
        "I’m reading a book on anti-gravity... it’s impossible to put down!"
    ];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("barista-dialogue").innerText = randomJoke;
});

document.getElementById("get-help").addEventListener("click", function() {
    const helpMessages = [
        "You're lost! But don't worry, I can guide you back. Try the homepage.",
        "Looks like you're in the middle of nowhere! How about checking out our sitemap?",
        "Uh-oh! You're in error territory. How about visiting the blog or latest articles?"
    ];
    let randomHelp = helpMessages[Math.floor(Math.random() * helpMessages.length)];
    document.getElementById("barista-dialogue").innerText = randomHelp;
});

document.getElementById("serve-coffee").addEventListener("click", function() {
    const coffeeOptions = [
        "Here's a cappuccino! It'll help you find your way back.",
        "How about a mocha? Rich, like the content you're missing!",
        "A nice black coffee... just what you need to re-energize your browsing."
    ];
    let randomCoffee = coffeeOptions[Math.floor(Math.random() * coffeeOptions.length)];
    document.getElementById("barista-dialogue").innerText = randomCoffee;
});
document.getElementById("tell-joke").addEventListener("click", function() {
    const jokes = [
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "What’s orange and sounds like a parrot? A carrot!",
        "Why did the JavaScript developer go broke? Because he kept using 'var'.",
        "I’m reading a book on anti-gravity... it’s impossible to put down!"
    ];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("barista-dialogue").innerText = randomJoke;
});

document.getElementById("get-help").addEventListener("click", function() {
    const helpMessages = [
        "You're lost! But don't worry, I can guide you back. Try the homepage.",
        "Looks like you're in the middle of nowhere! How about checking out our sitemap?",
        "Uh-oh! You're in error territory. How about visiting the blog or latest articles?"
    ];
    let randomHelp = helpMessages[Math.floor(Math.random() * helpMessages.length)];
    document.getElementById("barista-dialogue").innerText = randomHelp;
});

document.getElementById("serve-coffee").addEventListener("click", function() {
    const coffeeOptions = [
        "Here's a cappuccino! It'll help you find your way back.",
        "How about a mocha? Rich, like the content you're missing!",
        "A nice black coffee... just what you need to re-energize your browsing."
    ];
    let randomCoffee = coffeeOptions[Math.floor(Math.random() * coffeeOptions.length)];
    document.getElementById("barista-dialogue").innerText = randomCoffee;
});
