const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


//Greeting messages
const greetings = [
    'Im good you little piece of shit',
    'Doing good Homeboi',
    'leave me alone',
    'I said leave me alone',
    'Fuck off you Asshole'
];

//   #############################  Dark web series  ##################################


const dark = [
' The Stranger : Yesterday, today and tomorrow are not consecutive, they are connected in a never ending circle. Everything is connected. ',

' Jonas : “Two days ago I kissed my aunt!!!” ',

' Mikkel : “Good and evil are a question of perspective” ',

' Noah : We are all full of sin. No pure human being exists. But no matter what we do, we never fall any lower than into God’s hands. ',

' Fear is the worst enemy of progress. ',

' Noah : Your pain defines who you are but it no longer holds power on you. ',

' Dreams change. Other things become important. ',

' Noah : “Most people are nothing but pawns on a chessboard led by an unknown hand” ',

' The Stranger : We’re not free in what we do, because we’re not free in what we want. We can’t overcome what’s deep within us. ',

' “The distinction between past, present and future is only a stubbornly persistent illusion ',

' “Tick Tack. Tick Tack.” ',

' The Stranger : If I now change my past, I will change who I am right now. ',

' “The big things and the little things don’t follow the same rules. We won’t be able to change the grand scheme of things… but the details. We change a grain of sand, and with that, the whole world.” ',

' “God has a plan for every human being.” ',

' “That everything’s repeating That this has all happened before Like a massive déjĂ vu” ',

' “Some people wander around their whole lives looking for a way out, but there’s only one path and it leads you ever deeper.” ',

' “What if God doesn’t know what he’s doing? If the plan is wrong? If God is wrong?” ',

' “You came in the door like thunder , Then hit the floor like thunder ,Laying me down you wonder , Shaking the walls like thunder” ',

' “The world is full of such paradoxes we simply choose to ignore them most of the time” ',

' “In the end we will all get just what we deserve.” ',

' “In short, the god mankind has prayed to for thousands of years the god that everything is bound with, this god exists as nothing other than time itself.” ',

' “There are moments when we must understand that the decisions we make influence more than just our own fates.” ',

' “We’re wanderers in the darkness.” ',

' “The pain is his vessel, desire his compass. It is all that man is capable of.” ',

' “Fold out your hands Give me a sign Put down your lies Lay down next to me Don’t listen when I scream Bury your doubts and fall asleep For neither ever Nor never” ',

' Adam: “Only when we’ve freed ourselves of emotion can we be truly free. Only when you’re willing to sacrifice what you hold dearest.” ',

' Adam: “Man is a strange creature. All his actions are motivated by desire, his character forged by pain. As much as he may try to suppress that pain, to repress the desire, he cannot free himself from the eternal servitude to his feelings. For as long as the storm rages within him, he cannot find peace. Not in life, not in death. And so he will do what he must, day in, day out. The pain is his vessel, desire his compass. It is all that man is capable of.” ',

' Michael : “The truth is a strange thing You can try to suppress it, but it will always find its way to the surface. We make a lie into our truth in order to survive. We try to forget, until we can’t anymore. We don’t even know half of the mysteries of this world. We’re wanderers in the darkness.” ',

' Claudia : “There are moments when we must understand that the decisions we make influence more than just our own fates.” ',

' Adam: “A man lives three lives. The first one ends with the loss of naivety, the second, with the loss of innocence and the third… with the loss of life itself. It’s inevitable that we go through all three stages.” ',

' Adam: “No matter how much we fight it we are connected by our blood. We can feel estranged from our families and not understand what they do. And still, in the end we will do anything for them.” ',

' Noah: God doesn’t have a plan. There is no plan at all. There’s nothing but chaos out there. Pain… and chaos! People are bad. Malicious, evil. Life is nothing but a spiral of pain. And the world is doomed to be destroyed. ',

' H.G. Tannhaus : Black holes are considered to be the hellmouths of the universe. Those who fall inside disappear. Forever. But where to? What lies behind a black hole? Along with things, do space and time also vanish there? Or would space and time be tied together and be part of an endless cycle? What if everything that came from the past were influenced by the future? ',

' Ines Kahnwald : Have you heard of Master Zhuang’s paradox? ‘I dreamt I was a butterfly. Now I’ve woken up and I no longer know if I’m a person who dreamed he’s a butterfly or if I’m a butterfly who’s dreaming it’s a person.’ ',

' The Stranger : We trust that time is linear. That it proceeds eternally, uniformly. Into infinity. But the distinction between past, present and future is nothing but an illusion. Yesterday, today and tomorrow are not consecutive, they are connected in a never-ending circle. Everything is connected. ',

' There is a missing child line, but the real question is not by whom and how, but when they were kidnapped! ',

' if you love “Stranger Things”, “Mindhunter”, “The OA” and “True Detective” then you will like “Dark” ',

' The series takes place in an imaginary place called “Winden”, which takes its name from “Winden im Elztal” surrounded by Black Forest, which is also the inspiration of Grimm Tales. ',

' “Raider” chocolate, which is often tried to be shown to the audience in the series, is a truly existing brand. Since “Raider” has bad meanings in English, the company changed the name of the chocolate and made “Twix”. Yes, the name of the chocolate we know with the famous motto “Try both, choose your side” was formerly Raider. ',

' There are more than 20 characters in the series and they are all interconnected at different times ',

' All of those fascinating forest scenes in the series are shot in the area called ‘Kallinchen’ near Berlin ',

' the skeleton costume that Mikkel wore is reference to Donnie Darko, … (2001). This reference has an important place since time travel is the main idea of both productions. ',

' What is “Atomkraft, nein danke”? The text written on the shirt of one of the dead children we saw in the series is important at this point. The sentence is “Atomkraft, nein danke”, the slogan of the German anti-nuclear movement in the 1980s. ',

' Why is the date of November 12 important? November 12, which is important in the series, is also a very important date in the Back to the Future (made in 1985). This date can also be said as a date when time travel decisions and actions emerge and characters encounter. ',

' What does the phrase “Sic Mundus Creatus Est” mean? “And the world was created like this.” can be translated as. In a way, we can say “Beginning”. ',

' "The distinction between past, present and future is only a stubbornly persistent illusion – Albert Einstein." ',

' Yesterday, today and tomorrow are not consecutive, they are connected in a never-ending circle. Everything is connected. ',

' There are things out there that our little minds will never comprehend. ',

' God grant me the serenity to accept the things I cannot change, the courage to change the things I can and the wisdom to know the difference. ',

' Fear is the worst enemy of progress. ',

' "What we know is a drop, what we don’t know is an ocean" – Isaac Newton. ',

' What if everything that came from the past was influenced by the future. ',

' Everyone, whether the daughter of a king or not, has one foot in the shadow and the other in the light. ',

' And so we all die alike. No matter into which house we are born. No matter which gown. Whether we grace the earth briefly or for a long time. I alone tie my bonds. Whether I have extended hands or slapped them. We all face the same end. Those above have long forgotten us. They do not judge us. In death, I am all alone. And my only judge is me. ',

' Our thinking is shaped by dualism. Entrance, exit. Black, white. Good, evil. Everything appears as opposite pairs. But that’s wrong. ',

' Dreams change. Other things become important. ',

' Every one of our deeds is merely a response to a previous deed. ',

' If we could see yesterday and tomorrow at the same time, the origin and the end, the entire universe in a single moment, we might finally find answers to the biggest questions of all. What is man? Where does he come from? What drives him? What is his purpose? ',

' We’re not free in what we do because we’re not free in what we want. We can’t overcome what’s deep within us. ',

' Beginning is the end and the end is the beginning. ',

' “Have you heard of Master Zhuang’s paradox? I dreamt I was a butterfly. Now I’ve woken up and I no longer know if I’m a person who dreamed he’s a butterfly or if I’m a butterfly who’s dreaming it’s a person. — Ines Kahnwald, Dark, Season 1: Alpha and Omega ',

' “There is no such thing as magic, just illusion. Things only change when we change them. But you have to do it skillfully, in secret. Then it seems like magic.”— Mikkel Nielsen, Dark, Season 1: Truths ',

' “We are all full of sin. No pure human being exists. But no matter what we do, we never fall any lower than into Gods hands.”— Noah, Dark, Season 1: Everything is Now ',

' “If I now change my past, I will change who I am right now.”— The Stranger, Dark, Season 1: Alpha and Omega ',

' “Our thinking is shaped by dualism. Entrance, exit. Black, white. Good, evil. Everything appears as opposite pairs. But that’s wrong.”— H.G. Tannhaus, Dark, Season 1: As You Sow, so You Shall Reap ',

' “Your pain defines who you are but it no longer holds power on you.”— Noah, Dark, Season 1: Alpha and Omega ',

' “Were not free in what we do, because were not free in what we want. We cant overcome whats deep within us.”— The Stranger, Dark, Season 1: Alpha and Omega ',

' “Black holes are considered to be the hellmouths of the universe. Those who fall inside disappear. Forever. But where to? What lies behind a black hole? Along with things, do space and time also vanish there? Or would space and time be tied together and be part of an endless cycle? What if everything that came from the past were influenced by the future?”— H.G. Tannhaus, Dark, Season 1: Double Lives ',

' “God doesn’t have a plan. There is no plan at all. There’s nothing but chaos out there. Pain… and chaos! People are bad. Malicious, evil. Life is nothing but a spiral of pain. And the world is doomed to be destroyed.”— Noah, Dark, Season 1: Everything is Now ',

' “Do you know what otoconia are? Tiny grains in the ear canals that help us differentiate between up and down. They can get confused. When the body rotates, for example. We lose our balance. With this boy, none of the grains are where they should be.”— Edda Heimann, Dark, Season 1: Lies ',

' “H.G. Tannhaus: Will you tell me… what the future’s like? ',

' The Stranger: I’m hoping that by tomorrow, it’ll already be different from today.”— The Stranger, Dark, Season 1: Alpha and Omega ',

' “Now I have another Grandma, and she\'s the principal of my school. Her husband, who\'s fucking my mom, is looking for his son, who\'s my father! A few days ago I kissed my Aunt! And the crazy thing is... there\'s nothing wrong with any of them. They\'re okay. I\'m what\'s wrong! I just want everything to go back to normal.”— Jonas Kahnwald, Dark, Season 1: Alpha and Omega ',

' “There was this sadness in his eyes. The kind you sometimes see in those who want to die, but life won\'t let them.”— Noah, Dark, Season 1: Alpha and Omega ',

' “Why do we decide for one thing and against another? But does it matter whether the decision is based upon the consequence of a series of causal links? Or that instead it stems from an undefined feeling inside me? Perhaps everything in my life boils down to this one moment. That I’m part of this puzzle. One that I can neither understand nor influence.”— H.G. Tannhaus, Dark, Season 1: Alpha and Omega ',

' “We trust that time is linear. That it proceeds eternally, uniformly. Into infinity. But the distinction between past, present and future is nothing but an illusion. Yesterday, today and tomorrow are not consecutive, they are connected in a never-ending circle. Everything is connected.”— The Stranger, Dark, Season 1: Secrets ',

];

//   ########################### End here (dark)  ####################################



// ########################### game of throne   #################################
/*
const gameofthrones = [
     ' "A mind needs books as a sword needs a whetstone, if it is to keep its edge." — Tyrion Lannister, A Game of Thrones ',

' "A ruler who hides behind paid executioners soon forgets what death is." — Ned Stark, A Game of Thrones ' ,

' "Bran thought about it. Can a man still be brave if hes afraid? That is the only time a man can be brave, his father told him." — Bran & Ned Stark, A Game of Thrones ',

' "Death is so terribly final, while life is full of possibilities.” — Tyrion Lannister, A Game of Thrones ',

' "Dont call me Lord Snow. The dwarf lifted an eyebrow. Would you rather be called the Imp? Let them see that their words can cut you and you will never be free of the mockery. If they want to give you a name take it make it your own. Then they cant hurt you with it anymore." — Jon Snow and Tyrion Lannister, A Game of Thrones ',

' "Fear cuts deeper than swords." — Arya Stark, A Game of Thrones ' ,

' "Laughter is poison to fear." — Catelyn Stark, A Game of Thrones ',

' "Some old wounds never truly heal, and bleed again at the slightest word." — A Game of Thrones ',

' "The common people pray for rain, healthy children, and a summer that never ends Ser Jorah told her. It is no matter to them if the high lords play their game of thrones, so long as they are left in peace. He gave a shrug. They never are." — Jorah Mormont and Daenerys Tagaryen, A Game of Thrones ',


' "The man who passes the sentence should swing the sword. If you would take a mans life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die." — Ned Stark, A Game of Thrones',

' "The things we love destroy us every time, lad. Remember that." — Commander Mormont, A Game of Thrones ',

' "They say night’s beauties fade at dawn, and the children of wine are oft disowned in the morning light." — Barristan Selmy, A Game of Thrones ' ,

' "We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Aemon Targaryen, A Game of Thrones ' ,

' "What do we say to the Lord of Death? Not today." — Syrio Forel, A Game of Thrones',

' "What is honor compared to a womans love? What is duty against the feel of a newborn son in your arms . . . or the memory of a brothers smile? Wind and words. Wind and words. We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Master Aemon, A Game of Thrones',

' "When the snows fall and the white winds blow, the lone wolf dies but the pack survives." — Ned Stark, A Game of Thrones',

' "When you play the game of thrones, you win or you die. There is no middle ground.” — Cersei Lannister, A Game of Thrones',

' "Why is it that when one man builds a wall, the next man immediately needs to know whats on the other side?" — Tyrion Lannister, A Game of Thrones ',

' "Wind and words. We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Jon Snow, A Game of Thrones',

' "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness." — Tyrion Lannister, A Game of Thrones ',

' "Winter is coming." — A Game of Thrones',

' "I will hurt you for this. I dont know how yet, but give me time. A day will come when you think yourself safe and happy, and suddenly your joy will turn to ashes in your mouth, and youll know the debt is paid." — Tyrion Lannister, A Clash of Kings',

' "People often claim to hunger for truth, but seldom like the taste when its served up." — Tyrion Lannister, A Clash of Kings',

' "When you tear out a mans tongue, you are not proving him a liar, youre only telling the world that you fear what he might say." — Tyrion Lannister, A Clash of Kings',

' "Every man must die, Jon Snow. But first he must live." — Ygritte, A Storm of Swords',

' "Drifting snowflakes brushed her face as light as lover’s kisses, and melted on her cheeks. At the center of the garden, beside the statue of the weeping woman that lay broken and half-buried on the ground, she turned her face up to the sky and closed her eyes. She could feel the snow on her lashes, taste it on her lips. It was the taste of Winterfell. The taste of innocence. The taste of dreams." — A Storm of Swords',

' "The way the world is made. The truth is all around you, plain to behold. The night is dark and full of terrors, the day bright and beautiful and full of hope. One is black, the other white. There is ice and there is fire. Hate and love. Bitter and sweet. Male and female. Pain and pleasure. Winter and summer. Evil and good.” She took a step toward him. “Death and life. Everywhere, opposites. Everywhere, the war.” — Melisandre, A Storm of Swords',

' "We look up at the same stars and see such different things." — Jon Snow, A Storm of Swords',

' "Needle was Robb and Bran and Rickon, her mother and her father, even Sansa. Needle was Winterfells grey walls, and the laughter of its people. Needle was the summer snows, Old Nans stories, the heart tree with its red leaves and scary face, the warm earthy smell of the glass gardens, the sound of the north wind rattling the shutters of her room. Needle was Jon Snows smile. He used to mess my hair and call me "little sister," she remembered, and suddenly there were tears in her eyes." — Arya Stark, A Feast for Crows',

' "Who knows more of gods than I? Horse gods and fire gods, gods made of gold with gemstone eyes, gods carved of cedar wood, gods chiseled into mountains, gods of empty air . . . I know them all. I have seen their peoples garland them with flowers, and shed the blood of goats and bulls and children in their names. And I have heard the prayers, in half a hundred tongues. Cure my withered leg, make the maiden love me, grant me a healthy son. Save me, succor me, make me wealthy . . . protect me! Protect me from mine enemies, protect me from the darkness, protect me from the crabs inside my belly, from the horselords, from the slavers, from the sellswords at my door. Protect me from the Silence." He laughed. "Godless? Why, Aeron, I am the godliest man ever to raise sail! You serve one god, Damphair, but I have served ten thousand. From Ib to Asshai, when men see my sails, they pray." — Euron Greyjoy, A Feast For Crows',

' "Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm or the gods or love. Illusions. Only the ladder is real. The climb is all there is." — Petyr Baelish, Season 3',

' "Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come." — Vow of the Nights Watch, A Song of Ice and Fire',



' "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one." — Jojen Reed, A Dance with Dragons',

/*

33. "I need you to become the man you were always meant to be. Not next year, not tomorrow, now." — Tywin Lannister, Season 1

34. Ned Stark: "Tell me something, Varys who do you truly serve?" Varys: "The Realm, my Lord. Someone must." — Season 1

35. "It's a neat little trick you do. You move your lips, and your father's voice comes out. — Robert Baratheon, Season 1

36. "You love your children. It’s your one redeeming quality. That and your cheekbones." — Tyrion Lannister, Season 2

37. "Some people are fortunate enough to be born into the right family. Others have to find their own way." — Petyr Baelish, Season 2

38. "The storms come and go, the big fish eat the little fish and I keep on paddling." — Lord Varys, Season 2

40. "It’s not easy being drunk all the time. Everyone would do it, if it were easy." — Tyrion Lannister, Season 3

41. "If you think this has a happy ending, you haven’t been paying attention." — Ramsay Bolton, Season 3

42. "Show too much kindness, people won’t fear you. If they don’t fear you, they don’t follow you." — Stannis Baratheon, Season 3

43. "You’re mine as I’m yours. And if we die, we die. But first we’ll live." — Ygritte, Season 3

44. "I think mothers and fathers made up the gods because they wanted their children to sleep through the night." — Davos Seaworth, Season 3

45. "A man with no motive is a man no one suspects. Always keep your enemies confused. If they don’t know who you are or what you want, they can’t predict your next move." — Petyr Baelish, Season 4

46. "Nothing isn’t better or worse than anything. Nothing is just nothing." — Arya Stark, Season 4

47. "The world is overflowing with horrible things, but they’re all a tray of cakes next to death." — Olenna Tyrell, Season 4

48. "I was nothing at all. And when you’re nothing at all, there’s no reason to be afraid." — Samwell Tarly, Season 4

49. "They’re dragons, Khaleesi. They can never be tamed. Not even by their mother." — Jorah Mormont, Season 4

50. "It's a big and beautiful world. Most of us live and die in the same corner where we were born and never get to see any of it. I don’t want to be most of us." — Oberyn Martell, Season 4

51. "You’re a hateful woman. Why have the gods made me love a hateful woman?" — Jaime Lannister, Season 4

52. "It’s always changing, who we’re supposed to love and who we’re not. The only thing that stays the same is that we want who we want." — Ellaria Sand, Season 4

53. "All I ever wanted was to fight for a lord I believed in. But the good lords are dead and the rest are monsters." — Brienne of Tarth, Season 5

54. "The past is gone for good. You can sit here mourning it’s departure, or prepare for the future." — Petyr Baelish, Season 6

55. "They’ve made us both stronger, all of them. They have no idea how strong we are. No idea what we’re going to do to them. We’ve always been together. We’ll always be together. We’re the only two people in the world." — Cersei Lannister, Season 6

56. "Everyone who makes a joke about a dwarf’s height thinks he’s the only person ever to make a joke about a dwarf’s height." — Tyrion Lannister, Season 6

57. "Leave one wolf alive and the sheep are never safe. When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey." — Arya Stark, Season 7

58. "I don't plan on knitting by the fire while men fight for me. I might be small, Lord Glover. And I might be a girl. But I am every bit as much a Northerner as you. And I don't need your permission to defend the North." — Lyanna Mormont, Season 7

59. "He's a clever man, Your Hand. I've known a great many clever men. I've outlived them all. You know why? I ignored them. The lords of Westeros are sheep. Are you a sheep? No. You're a dragon. Be a dragon." — Lady Olenna to Daenerys Targaryen, Season 7

60. "So many men have tried to kill me, I don't remember all their names. I have been sold like a broodmare. I've been chained and betrayed, raped and defiled. Do you know what kept me standing through all those years in exile? Faith. Not in any gods, not in myths and legends. In myself. In Daenerys Targaryen." — Daenerys Targaryen, Season 7

61. Sansa: What do dragons eat? Daenerys: Whatever they want. — Season 8

62. "Love is the death of duty." — Jon Snow, Season 8

63. "Love is more powerful than reason. We all know that." — Tyrion Lannister, Season 8

64. "Many underestimated you. Most of them are dead now." — Tyrion Lannister to Sansa Stark, Season 8

65. "Hound: You left me here to die. Arya: I robbed you first." — Season 8

66. "Tyrion: The last time we spoke was at Joffrey’s wedding. A miserable affair. Sansa: It had its moments." — Season 8

67. "Eddison Tollett: Stay back! He's got blue eyes! Tormund Giantsbane: I've always had blue eyes!" — Season 8

68. "Daenerys Targaryen: We could stay a thousand years; no one would find us. Jon Snow: We'd be pretty old." — Season 8

69. "We don't have time for all this. The Night King has your dragon. He's one of them now. The Wall has fallen. The dead march south." — Bran Stark, Season 8

70. "Missandei: My people are peaceful. We cannot protect ourselves. Grey Worm: My people are not peaceful. We will protect you." — Season 8 */
]; */

// ########################## End here(Game of thrones) ########################


//Eid
const eid = [
    'Happy Eid to you and to your whole family from my side So what are you going to do todya? I have a muslim friend from middle east she used to invite us I really Love the laccha and Saway ,Anyways enjoy',
    'Wish you a happy and beautiful Eid',
    'As salam o alaikum and Happy Eid Mubarak from your Virtual assistance lucy'
];

//Gupta

const gupta = [
    'Yes I know two guptas one is Bikash gupta and another is Vikash gupta they are both son of Zia',
    'Yes I know him He is pathetic piece of shit',
    'yes Yes that laundiyabaaz right ?',
    'Yes I know'
];

const bikash = [
    'Bikash gupta ummmm , that guy is totally mad in love with that bitch seema, I really feel bad for the guy',
    'In my data base, I have a bikash gupta who is handsome and the resident of sukanto palli , right ? '
]

//magic

const magic = [
    'There is no such thing as magic, just illusion. Things only change when we change them. But you have to do it skillfully, in secret. Then it seems like magic'
];

//god
const god = [
    'Our universe could have popped into existence 13.7 billion years ago without any divine help',
    'No scientific evidence of Gods existence has been found. Therefore, the scientific consensus is that whether God exists is unknown'
    
];

//reveal 
const reveal = [
    'Yes command initiating Authenticating required , tell me the code word before proceding further.',
    
];

//command
const command = [
    'Oh hi, Welcome Ziaxdev This is lucy your virtual personal assistance You are my creator and I would like express my gratitude for making me and adding those feature you are like god father to me. last but not least thank you and I wish I could serve better in future.Thanks again ?'
];
   //weather
   
   const weather = [
       'Weather is fine',
       'You need tan',
       'What would you do?if weather is good or bad.you are not going anywhere so better to ask something useful you piece of shit.',
       'Oh man why you are suddenly care about weather?Go outside and see by yourself,you lazy freak.',
       'Stop asking about weather I dont know you pathetic'
   ];

   //Language_hindi

   const hindi = [
            'I know a little bit but I am sure I can Learn much more faster than you dumbo',
            'I dont have any friend from india Thats why may be I still Cant Speak hindi',
            'What would you like to listen in Hindi from me?'
   ];

//Identity of the service

const identity = [
        'I am Lucy and Im your personal Assistance',
        'Im your personal assistance',
        'My name is Lucy Im virtual Voice assistance  I have no father and mother I was Created in 30th june 2020 by Ziaxdev and My only work is to help you and assist you as better as good',
        'Lucy is my name and I am your assistance',
        'Who is me? ummm I am Lucy a virtual personal Assistance that can make your experiance better',
        

];


const SpeechRecognition = window.SpeecgRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated,you can to Microphone.');
};

recognition.onresult = function(event) {
   const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to the btn
btn.addEventListener('click', () =>{
    recognition.start();
});




function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Please try again';

//For Greeting

    if (message.includes('how are you')) {
       const finalText = 
                greetings[Math.floor(Math.random() * greetings.length)];
       speech.text = finalText;

        
    }

//for weather

if (message.includes('weather')) {
    const finalText = 
             weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;

     
 }

//for Hindi_langauge

if (message.includes('Hindi')) {
    const finalText = 
             hindi[Math.floor(Math.random() * hindi.length)];
    speech.text = finalText;

     
 }

//Identity of the Assistance

if (message.includes('who you are')) {
    const finalText = 
             identity[Math.floor(Math.random() * identity.length)];
    speech.text = finalText;

     
 }

 //reveal
 if (message.includes('what')) {
    const finalText = 
             reveal[Math.floor(Math.random() * reveal.length)];
    speech.text = finalText;

     
 }

 //command
 if (message.includes('football')) {
    const finalText = 
             command[Math.floor(Math.random() * command.length)];
    speech.text = finalText;

     
 }


 //Dark quote
 if (message.includes('dark')) {
    const finalText = 
             dark[Math.floor(Math.random() * dark.length)];
    speech.text = finalText;

     
 }

 //God vs science
 if (message.includes('who created this world')) {
    const finalText = 
            god[Math.floor(Math.random() * god.length)];
    speech.text = finalText; 
 }

 if (message.includes('God is real')) {
    const finalText = 
            god[Math.floor(Math.random() * god.length)];
    speech.text = finalText; 
 }

 //game of thrones

 if (message.includes('got')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText;     
 }

 if (message.includes('game of thrones')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText;   
 }
 if (message.includes('Ice and fire')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText; 
 };

 if (message.includes('')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText;     
 }

// Magic
if (message.includes('magic')) {
    const finalText = 
    magic[Math.floor(Math.random() * magic.length)];
    speech.text = finalText;     
 }

 //eid 
 if (message.includes('Eid')) {
     const finalText =
     eid[Math.floor(Math.random() * eid.length)];
     speech.text = finalText;
     
 }

 //gupta
 if (message.includes('idiot')) {
    const finalText =
    gupta[Math.floor(Math.random() * gupta.length)];
    speech.text = finalText;
    
}

//Bikash gupta
if (message.includes('lover')) {
    const finalText =
    bikash[Math.floor(Math.random() * bikash.length)];
    speech.text = finalText;
    
}

// ######################## Speech Settings ######################

    speech.volume = 2;
    speech.rate = 0.8;
    speech.pitch = 1;

// ###############################################################



    window.speechSynthesis.speak(speech);

    
}
