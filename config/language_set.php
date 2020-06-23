<?php

$languageSet = [
    'determiner' => [
        'article' => ['a', 'an', 'the'],
        'possessive' => ['my', 'your', 'his', 'her', 'their', 'our', 'your'],
        'demonstrative' => ['this', 'that', 'these', 'those'],
        'numeral' => ['one', 'two', 'three', 'four'],
        'ordinal' => ['first', 'second', 'third', 'fourth', 'next', 'last', 'previous'],
        'quantifier' => [
            'with_uncountable' => [
                'much', 'a bit (of)', 'little', 'a great deal of', 'a large quantity of', 'a little',
                'very little', 'a large amount of',
            ],
            'with_countable' => [
                'a majority of', 'a great number of', 'several', 'a large number of', 'a number of',
                'few', 'a few', 'very few'
            ],
            'with_both' => [
                'all', 'enough', 'none', 'no', 'some', 'more', 'lots of', 'less',
                'least', 'any', 'not any', 'plenty of'
            ]
        ],
    ],
    // https://www.grammarly.com/blog/pronouns/
    'pronouns' => [
        'subject' => ['I', 'You', 'He', 'She', 'They', 'We', 'You'],
        'object' => ['me', 'You', 'Him', 'Him', 'Them', 'Us', 'You'],
        'possessive_adjective' => [],
        'possessive_pronouns' => ['mine', 'yours', 'his', 'hers', 'object null', 'ours', 'yours', 'theirs'],
        'reflexive_pronouns' => ['myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'yourselves', 'themselves']
    ],
    'conjunction' => [
        'coordinate' => [
            'For', // We listened eagerly for he brought news of our families
            'And', // She didn't speak to anyone, and nobody spoke to her
            'Nor', // I don't except children to be rude, nor do I expect to be disobeyed
            'But', // They rushed to the hospital, but they were too late
            'Or', // I will go shopping, or I will go camping
            'Yet', // Kelly was a convicted criminal, yet many people admired him
            'So', // I was feeling hungry, so I made myself a sandwich
        ],
        'subordination' => [
            // https://7esl.com/subordinating-conjunctions/
            'comparison' => [
                'than', // He is clevered than I am
                'rather than', // I choose to learn German rather than French
                'whether', // She was uncertain whether to stay or leave
                'as much as', // He doesn't earn as much as me
                'whereas', // Eliot is tall and blond, whereas his brother is short and has dark hair
            ],
            'relative_adjectives' => [
                'that', // She went to the school that my father went to.
                'whatever', // I copied in my notebook whatever he wrote on the blackboard
                'which', // He developed the films which he had taken
                'whichever', // Mary will eat chocolate cake or donnut, whichever is delicious
            ],
            'time' => [
                'after', // Mary closed his diary after writing about that day's events.
                'as soon as',  // A baby deer can stand as soon as it is born.
                'as long as', // You can use my car as long as you drive carefully
                'before', // He always feeds the dogs before he goes to the school
                'by the time', // By the time ambulancemen arrived, he was unconscious.
                'now that', // You can go and play now that you have finished your homework.
                'once', // Once you learn it, you never forget.
                'since', // Mary has danced since she was five
                'till', // James lived with his parents till he was twenty - five.
                'until', // You can stay on the bus until you reach London.
                'when', // Tom's parents cheered for his when he crossed the finished line.
                'whenever', // Whenever we go abroad, we take as many pictures as possible.
                'while', // While I was walking, to the market, I met Jenny.
            ],
            'concession' => [
                'thought', // Though it was raining, she went out
                'although', // Although the kitchen is small, it is well designed
                'even though', // Even though he's a millionaire, he lives in a very small flat
            ],
            'relative_pronoun' => [
                'who', // The person who made the mess needs to clean it
                'whoever', // Whoever leaves last should turn off the light.
                'whom', // He's the man whom I met in Greece
                'whomever', // He was free to marry whomever he choose
                'whose', // She's the student whose handwriting is the best in my class
            ],
            'place' => [
                'where', // This is the park where we played.
                'wherever', // Wherever you go in the world, you'll always fond someone who speaks English.
            ],
            'condition' => [
                'if', // If you leave, I will be lonely
                'only if', // Only if a teacher has given permission is a student allowed to leave the room
                'unless', // You won't succeed unless you work hard
                'provided that', // I was allowed to go off by myself provided that I promised to be careful.
                'assuming that', // I hope to go to college next year, assuming that I pass my exams.
                'even if', // Even if you have already bought your ticket, you will still need to wait in line.
                'in case', // I have my umbrella with me in case it rains.
                'lest', // Study hard lest should fall
            ],
            'manner' => [
                'how', // She taught hom how to play the piano
                'as though', // They look as though they're heading for divorce.
                'as if', // At sunset, the sun looks as if it is going down.
            ],
            'reason' => [
                'because', // I love Matisse's work because he uses color so brilliantly.
                'since', // Since we've got a few minutes to wait for the train, let's have a cup of coffee.
                'so that', // I'll go by car so that I can take more luggage
                'in order (that)', // Do exercies in order that your health may improve.
                'that', // We eat that we may live
                'as', // We played chess all evening as we had nothing better to do
            ],
        ],
        'correlative' => [
            // https://loveenglish.org/wp-content/uploads/2019/03/Correlative-Conjunctions-in-English.jpg
            'Both...and', // The fluid includes both gasses and liquids
            'Either...or', // Either dye or paints are used to color cloth.
            'Neither...nor', // Love is neither bought nor sold
            'Not only...but also', // She is not only a novelist but also a poet
            'Whether...or', // Sha was uncertain whether to stay or leave
            'As...as', // Helen comes to visit me as often as she can
            'No sonner...than', // No sooner had he sat down than the phone rang.
            'Hardly...when', // She had hardly sat down when the phone rang.
            'Such...that', // He came to such a sudden stop that wwe almost hit him
            'Scarcely...when', // Scarcely had the game started when it began to rain
            'So...that', // He was so week that he could hardly stand up
            'The more...themore', // The more you can dream, the more you can do
            'Rather...than', // I would rather go out than stay at home today.
        ]
    ],
    // When you are expressing a strong emotion, use an exclamation mark (!). A comma (,) can be used for a weaker emotion.
    'interjection' => [
        'feeling' => [
            'wow', 'gee', 'oops', 'darn', 'geez', 'oh'
        ],
        'yes/no' => [
            'yes', 'no', 'nope', 'yeah'
        ],
        'call_attention' => [
            'yo', 'hey'
        ],
        'indicate_pause' => [
            'well', 'um', 'hmm'
        ],
    ],
    'verb' => [
        'action' => [
            'transitive' => ['eat'],
            'intransitive' => ['eat'],
        ],
        'dynamique_stative' => [
            'dynamic' => [],
            'stative' => []
        ],
        'linking' => [

        ],
        // regular, irregular, linking, transitive, intranstive, finite, infinite
        // https://i0.wp.com/examplanning.com/wp-content/uploads/2019/03/Types-of-Verbs-and-Examples.jpg?w=1060&ssl=1
        'other' => ['eat','run', 'fall', 'sit', 'cry', 'take', 'choose', 'opt', 'give', 'can', 'want']
    ],
    'preposition' => [
        // https://test-english.com/grammar-points/a2/
        // https://i.ytimg.com/vi/XsYd24WwQRA/maxresdefault.jpg
        // https://test-english.com/staging01/wp-content/uploads/prepositions-of-movement.new_.png
    ],
    'modal' => [
        // https://i1.wp.com/www.eflmagazine.com/wp-content/uploads/2020/03/Modal-Verbs-.png?fit=1024%2C512&ssl=1
        // https://7esl.com/wp-content/uploads/2018/04/Modals-of-Ability-2.jpg
        // https://blog.learnbuddy.in/wp-content/uploads/2019/11/modals-usage-concept-infographic.jpg
        // http://www.teejr.com/wp-content/uploads/2015/05/Modals-1.jpg
        // https://7esl.com/wp-content/uploads/2018/05/MODAL-VERBS-3.jpg
        // Formal
        // Informal
        // Polite
        // Ability :
        //     Description : Is what you can do
        //     Exammple : I am able drive
        // Possibility :
        //     Description : Is whether it happens or not
        //     Example: Police may caught me
        'ability' => [

        ],
        'permission' => [
            'formal' => [
                'may'
            ],
            'informal' => [
                'can'
            ],
            'shades' => [
                'may', 'might', 'could'
            ],
        ],
        'requests' => [
            'formal' => [
                'may'
            ],
            'informal' => [
                'can'
            ],
            'police' => [
                'could', 'would'
            ]
        ],
        'advice' => [

        ],
        'obligation' => [
            'full' => ['must'],
            'partial' => ['should',' ought to']
        ],
        'possibility' => [
            'general' => ['can'],
            ''
        ],
        'logical conclusions' => [
            'strong' => ['must'],
            'weak' => ['should']
        ],
        'invitation' => [

        ],
        'offer' => [

        ],
        'suggestion' => [

        ],
        'condiitonal' => [

        ],
        'future' => [
            'actions/states/intensions' => ['will']
        ],
        'prohibition' => [

        ],
        'lack of nescessity' => [

        ],
        'probabilty' => [

        ],
    ],
    'punctuation' => [',', ';', '.', '!', '?'],
    'adverb' => [
        'time' => ['once', 'never', 'tommorow', 'daily'],
        'place' => ['anywhere', 'somewhere', 'near', 'far'],
        'manner' => ['honestly', 'joyfully', 'cunningly'],
        'degree' => ['fully', 'partially', 'altogether'],
        'frequency' => ['frequently', 'often', 'yearly', 'briefly'],
        'comment' => ['unfornately', 'luckily', 'happily', 'honestely'],
        'conjunction' => ['however', 'consequently', 'moreover', 'conversely'],
        'confirmation_negation' => ['definitely', 'absolutely', 'surely', 'never']
    ],
    'adjective'  => [
        'determiner' => [],
        'opinion' => ['good', 'bad', 'great', 'terrible', 'pretty', 'silly', 'lovely', 'beautiful'],
        'fact' => [
            'size' => ['huge', 'big', 'large', 'tiny', 'enormous', 'little', 'tall', 'long', 'gigantic'],
            'shape' => ['flat', 'round', 'square', 'triangular', 'rectangular'],
            'age' => ['young', 'old', 'new ancient', 'six-year-old', 'antique', 'youthful'],
            'color' => ['red', 'black', 'pale', 'bright', 'faded', 'shining', 'yellow', 'orange'],
            'origin' => ['french', 'america', 'canadian', 'mexican', 'greek', 'swiss'],
            'material' => ['wooden', 'silk', 'metal', 'paper', 'gold', 'silver', 'copper', 'cotton'],
            'purpose' => ['writing', 'rolling', 'sleeping', 'roasting', 'running', 'dancing']
        ]
    ],
    'noun' => [
        'concrete' => [
            'commons' => ['car', 'dog'],
            'proper' => ['London', 'Richar'],
        ],
        'abstract' => [
            'drawback', 'fraction', 'holdout', 'uptake', 'joy', 'fiction'
        ],
        'collective' => [
            'people' => [
                'a band of', // men
                'a cast of', // actors
                'a stack of', // librarians
                'a sentence of', // judges
                'a galaxy of', // beauties
                'a bevy of', // girls
                'a choir of', // singers
                'a hack of', // smokers
                'a blast of', // hunter
                'a blush of', // boys
                'a board of', // directors
                'a circle of', // friends
                'a body of', // men
                'a bunch of', // crooks
                'a caravan of', // travelers
                'a class of', // pupils
                'a company of', // actors
                'a crew of', // sailors
                'a grang of', // thieves
                'a disguiging of', // tailors
                'a doctrine of', // doctor
                'a staff of', // employees
            ],
            'animals' => [
                'a colony of', // gulls
                'a brood of', // hens
                'a flight of', // birds
                'a flock of', // turkeys
                'a group of', // guinea pigs
                'a litter of', // cubs
                'a kennel of', // dogs
                'a sloth of', // bears
                'a gang of', // weasels
                'an ambush of', // tigers
                'a smack of', // jellyfish
                'a destruction of', // (wild) cats
                'a company of', // angelfish
                'a squad of', // squid
                'a swarm of', // eels
                'a troupe of', // shrimp
                'a knot of', // toads
                'a clef of', // worms
                'a culture of', // bacteria
                'a flight of', // butterflies
                'a cluster of', // spiders
            ],
            'things' => [
                'a batch of', // cakes
                'a bottle of', // milk
                'a bowl of', // rice
                'a box of', // cereal
                'a can of', // soda
                'a carton of', // milk
                'a cup of', // tea
                'a glass of', // water
                'a jar of', // honey
                'a jub of', // water
                'a kilo of', // meat
                'a loaf of', // bread
                'a packet of', // tea
                'a piece of', // cheese
                'a pile of', // cookies
                'a slice of', // bread
                'a tub of', // margarine
                'a bar/a square of', // chocolate
            ]
        ]
    ]
];

$container->setParameter('language_set', $languageSet);