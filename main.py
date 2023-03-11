import webbrowser
import random
import time

episodes = {
    'bobs-burgers': [0, [13, 9, 23, 22, 21, 19, 22, 21, 22, 22, 4]],
    'chowder': [0, [49]],
    'spongebob-squarepants': [0, [20, 20, 20]],
    'the-looney-tunes-show': [22.5, [24, 26]],
    'fosters-home-for-imaginary-friends': [22.5, [13, 13, 14, 13, 13, 13]],
    'gravity-falls': [22.5, [20, 20]],
    'the-fairly-oddparents': [0, [7, 13, 17, 14, 16]],
    'dave-the-barbarian': [0, [21]],
    'adventure-time': [0, [26, 26, 26, 26, 52, 43, 26, 27, 14, 12]],
    'camp-lazlo': [22.5, [13, 13, 13, 11, 8]],
    'codename-kids-next-door': [0, [78]],
    'phineas-and-ferb': [0, [26, 42, 36, 33]],
    'avatar': [24, [20, 18, 18]],
    'kim-possible': [0, [87]],
    'wander-over-yonder': [0, [21]],
    'star-vs-the-forces-of-evil': [0, [13, 22, 21, 21]],
    'teen-titans-go': [11, [52, 52, 53, 52, 52, 33]],
    'tom-and-jerry-tales': [85, [3]],
    'tom-and-jerry': [0, [163]],
    'danny-phantom': [0, [51]],
    'johnny-test': [0, [13, 13, 13, 26, 26, 26]],
    'whats-new-scooby-doo': [0, [42]],
    'disneys-house-of-mouse': [0, [13, 13, 26]]
}
avatar = ['water', 'earth', 'fire']
noseason1 = [
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
    'whats-new-scooby-doo'
]

for i in episodes:
    episodes[i][0] = .5

# test = {}
# for i in list(episodes.keys()):
#     test[i] = 0

for i in range(10):
    show = list(episodes.keys())[random.randint(0, len(episodes)-1)]
    show = "adventure-time"
    # test[show] += 1
    seasons = len(episodes[show][1])
    season = random.randint(1, seasons)
    episode = random.randint(1, episodes[show][1][season-1])
    site = "https://www.wcostream.com/" + show + "-season-" + str(season) + "-episode-" + str(episode)
    if show in noseason1 and season == 1:
        site = "https://www.wcostream.com/" + show + "-episode-" + str(episode)
    if show == 'avatar':
        site = "https://www.wcostream.com/" + show + "-book-" + str(season) + "-" + avatar[season-1] + "-episode-" + str(episode)
    if show == 'tom-and-jerry-tales':
        site = "https://www.wcostream.com/" + show + "-vol-" + str(episode)
    print(episodes[show][0], ": ", site)
    # webbrowser.open(site)
    # time.sleep(episodes[show][0]*60)


# for i in test:
#     print(i, ": ", test[i])

# webbrowser.open("https://www.wcostream.com/bobs-burgers-season-11-episode-4-heartbreak-hotel-oween")

