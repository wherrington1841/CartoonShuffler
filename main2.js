var shows = [
    "bobs-burgers", 
    "chowder", 
    "spongebob-squarepants", 
    "the-looney-tunes-show", 
    "fosters-home-for-imaginary-friends", 
    "gravity-falls", 
    "the-fairly-oddparents", 
    "dave-the-barbarian", 
    "adventure-time", 
    "camp-lazlo", 
    "codename-kids-next-door", 
    "phineas-and-ferb", 
    "avatar", 
    "kim-possible", 
    "wander-over-yonder", 
    "star-vs-the-forces-of-evil", 
    "teen-titans-go", 
    "tom-and-jerry-tales", 
    "tom-and-jerry", 
    "danny-phantom", 
    "johnny-test", 
    "whats-new-scooby-doo", 
    "disneys-house-of-mouse"
]
var episodes = {
    'bobs-burgers': [22.5, [13, 9, 23, 22, 21, 19, 22, 21, 22, 22, 4]],
    'chowder': [22.5, [49]],
    'spongebob-squarepants': [11.25, [20, 20, 20]],
    'the-looney-tunes-show': [22.5, [24, 26]],
    'fosters-home-for-imaginary-friends': [22.5, [13, 13, 14, 13, 13, 13]],
    'gravity-falls': [22.5, [20, 20]],
    'the-fairly-oddparents': [11.5, [7, 13, 17, 14, 16]],
    'dave-the-barbarian': [22, [21]],
    'adventure-time': [11.5, [26, 26, 26, 26, 52, 43, 26, 27, 14, 12]],
    'camp-lazlo': [22.5, [13, 13, 13, 11, 8]],
    'codename-kids-next-door': [23, [78]],
    'phineas-and-ferb': [22.5, [26, 42, 36, 33]],
    'avatar': [24, [20, 18, 18]],
    'kim-possible': [22, [87]],
    'wander-over-yonder': [22, [21]],
    'star-vs-the-forces-of-evil': [22, [13, 22, 21, 21]],
    'teen-titans-go': [11, [52, 52, 53, 52, 52, 33]],
    'tom-and-jerry-tales': [85, [3]],
    'tom-and-jerry': [11, [163]],
    'danny-phantom': [22, [51]],
    'johnny-test': [11, [13, 13, 13, 26, 26, 26]],
    'whats-new-scooby-doo': [22, [42]],
    'disneys-house-of-mouse': [22, [13, 13, 26]]
}
var avatar = ['water', 'earth', 'fire']
var noseason1 = [
    'bobs-burgers',
    'the-looney-tunes-show',
    'chowder',
    'gravity-falls',
    'the-fairly-oddparents',
    'dave-the-barbarian',
    'codename-kids-next-door',
    'phineas-and-ferb',
    'kim-possible',
    'wander-over-yonder',
    'teen-titans-go',
    'tom-and-jerry',
    'danny-phantom',
    'whats-new-scooby-doo',
    'star-vs-the-forces-of-evil'
]

// var myWindow = window.open("https://google.com")
var counter = 0
// loop()
for (i = 0; i < 10; i++) {
    loop();
}

function loop() {
    show = shows[Math.floor(Math.random() * shows.length)]
    seasons = episodes[show][1].length
    season = Math.floor(Math.random() * seasons) + 1
    episode = Math.floor(Math.random() * episodes[show][1][season-1]) + 1
    var site = "https://www.wcostream.com/" + show + "-season-" + season + "-episode-" + episode
    if (noseason1.includes(show) && season == 1) {
        site = "https://www.wcostream.com/" + show + "-episode-" + episode
    }
    if (show == "avatar") {
        site = "https://www.wcostream.com/" + show + "-book-" + season + "-" + avatar[season-1] + "-episode-" + episode
    }
    if (show == "tom-and-jerry-tales") {
        site = "https://www.wcostream.com/" + show + "-vol-" + episode
    }
    timeout = episodes[show][0] * 60000
    // if (counter == 0) {
    //     timeout = 0
    // }
    console.log(site, (timeout/60000))
    // if (counter < 5) {
    //     // window.setTimeout(() => {myWindow.location = site; loop()}, timeout)
    //     // console.log(site)
    //     // loop();
    // }
    // counter += 1
}

