use hidden_treasures;
db.dropDatabase();

db.treasures.insertMany(
[
    {
        name: "St Bernards Well",
        lat: "55.95526",
        long: "-3.211475",
        description: "",
        comments: [],
        type: "Place of Worship"
      },
      {
        name: "Capelaw Hill",
        lat: "55.88034",
        long: "-3.254886",
        description: "A hill summit in the Pentland Range that borders the South West of Edinburgh. At the top you get a fantastic view of the rest of the range with a drammatic ridge leading your eyes away from the capital towards the hills",
        comments: [],
        type: "Hill"
      },
      {
        name: "Cuaig Beach",
        lat: "57.559887",
        long: "-5.838022",
        description: "",
        comments: [],
        type: "Beach"
      },
      {
        name: "Boreray",
        lat: "57.869932",
        long: "-8.487713",
        description: "",
        comments: [],
        type: "Island"
      },
      {
        name: "Sanna Bay",
        lat: "56.743651",
        long: "-6.180812",
        description: "",
        comments: [],
        type: "Beach"
      },
      {
        name: "Clamshell Cave",
        lat: "56.432712",
        long: "-6.339554",
        description: "",
        comments: [],
        type: "Cave"
      },
      {
        name: "Falls of Bruar",
        lat: "56.773901",
        long: "-3.934511",
        description: "",
        comments: [],
        type: "Waterfall"
      },
      {
        name: "Little Sparta",
        lat: "55.723283",
        long: "-3.509273",
        description: "",
        comments: [],
        type: "Garden"
      },
      {
        name: "Mount Stuart",
        lat: "55.791762",
        long: "-5.018597",
        description: "",
        comments: [],
        type: "Estate"
      },
      {
        name: "MV Captayannis",
        lat: "55.975980",
        long: "-4.742065",
        description: "",
        comments: [],
        type: "Wreckage"
      },
      {
        name: "Iona Abbey",
        lat: "56.334810",
        long: "-6.391463",
        description: "",
        comments: [],
        type: "Church\nPlace of Worship"
      },
      {
        name: "Falls of Glomach",
        lat: "57.274112",
        long: "-5.291736",
        description: "",
        comments: [],
        type: "Waterfall"
      },
      {
        name: "Wellington Bomber Crash Site",
        lat: "57.222821",
        long: "-5.191767",
        description: "",
        comments: [],
        type: "Wreckage"
      },
      {
        name: "Drumbeg Viewpoint",
        lat: "58.244601",
        long: "-5.20497",
        description: "",
        comments: [],
        type: "Viewpoint"
      },
      {
        name: "The Bad Step",
        lat: "57.194765",
        long: "-6.149147",
        description: "",
        comments: [],
        type: "Geological Feature"
      },
      {
        name: "The Black Cullins",
        lat: "57.212963",
        long: "-6.209571",
        description: "",
        comments: [],
        type: "Hill"
      },
      {
        name: "The Fairy Pools",
        lat: "57.250353",
        long: "-6.258287",
        description: "Free to visit at any time, the spectacular Fairy Pools are located near the village of Carbost in Glenbrittle on the Isle of Skye.",
        comments: [],
        type: "Waterfall"
      },
      {
        name: "Dr Neil's Secret Garden",
        lat: "55.940667",
        long: "-3.148638",
        description: "Dr Neil’s Garden is one of the most remarkable gardens in Scotland today. Lying next to the twelfth-century Duddingston Kirk.",
        comments: [],
        type: "Garden"
      },
      {
        name: "Applecross Photographic Gallery ",
        lat: "57.413979",
        long: "-5.814596",
        description: "Set up in a disused Telephone Exchange with Panoramic views of Raasay, Scalpay and the Cuillin of Skye, Applecross Photographic Gallery exhibits a selection of local images by Jack Marris.",
        comments: [],
        type: "Museum"
      },
      {
        name: "The Scottish Crannog Centre",
        lat: "56.579403",
        long: "-4.003158",
        description: "Scotland's prehistory. Walk in the footsteps of the original Crannog dwellers and immerse yourself in village life with original artefacts; demonstrations of textiles, cooking and ancient crafts & technologies; paddle into prehistory in one of our replica logboats and take in the atmosphere inside the Crannog Roundhouse.",
        comments: [],
        type: "Museum"
      },
      {
        name: "The Garden of Cosmic Speclaton",
        lat: "55.130141",
        long: "-3.66629",
        description: "A 30 acre scupture garden near Dumfries. The garden is private and only accessible on one annual open day. Charles Jencks",
        comments: [],
        type: "Garden"
      },
      {
        name: "Polphail Ghost Village",
        lat: "55.870056",
        long: "-5.306956",
        description: "Not sure if this place is still intact, will have to do more research.",
        comments: [],
        type: "Abandoned Village"
      },
      {
        name: "Logan Botanic Gardens",
        lat: "54.74198",
        long: "-4.959143",
        description: "Scotland's most exotic garden, or one of. The Garden dates back to 1869 with plant treasures from South and Central America, Southern Africa and Australiasia..",
        comments: [],
        type: "Garden"
      },
      {
        name: "Rosslyn Chapel",
        lat: "55.855309",
        long: "-3.160174",
        description: "Although a well known tourist destination, this one made my list because you're not allowed to take pictures inside the chapel..",
        comments: [],
        type: "Church"
      },
      {
        name: "The Kelpies",
        lat: "56.018856",
        long: "-3.755152",
        description: "They might not be so much hidden from a distance but they made my list for 2 reasons,  1. we rarely take time to get closer and see these from the inside, especially at night. 2. As Scottish folklore goes, the kelpie, or water kelpie is a shape-shifting water spirit occupying the lochs of the land. Almost every body of water in Scotland is associated with a story of a kelpie, the most notable being Loch Ness.",
        comments: [],
        type: "Sculpture"
      },
      {
        name: "The Witchery by the Castle",
        lat: "55.948847",
        long: "-3.195618",
        description: "The first time I walked into this place I knew right away it was special. The Times - 'A pure unmitigated pleasure palace'. The Guardian - 'The Ulminate romantic bolthole'. Andrew Lloyd Webber - 'Is this the prettiest restuarent ever'",
        comments: [],
        type: ""
      },
      {
        name: "Goblin Ha, Gifford",
        lat: "55.9009",
        long: "2.6956",
        description: "Danskine Loch, Haddington EH41 4PJ. You have go through private land and golf course but then you find yourself on a paths leading along river... It was beautiful walk, very enjoyable and peaceful. Castle itself is ruined but full of mystery... Your imagination start to work when you are there",
        comments: [],
        type: "Castle"
      },
      {
        name: "St Martin’s Kirk",
        lat: "55.9561",
        long: "-2.7688",
        description: "\nHaddington, Scotland",
        comments: [],
        type: "Church"
      },
      {
        name: "Amisfield Walled Garden",
        lat: "55.958741",
        long: "-2.7503102",
        description: "",
        comments: [],
        type: "Garden"
      },
      {
        name: "World War II miniature submarines lie in Aberlady Bay",
        lat: "56.0196743",
        long: "-2.8827483",
        description: "wrecks of 2 World War II miniature submarines lie in Aberlady Bay, East Lothian. Check the tide times first. If you do decide to head out to Aberlady for a look, you will need to plan to reach the sub wrecks about 30-60 minutes before low tide. They are only visible around low tide and awareness of the tide times is essential for your trip as the tides come in very quickly at Aberlady Sands.",
        comments: [],
        type: "Wreckage"
      },
      {
        name: "Peffer Sands Lookout",
        lat: "56.03490067",
        long: "-2.6073805",
        description: "A former Coastguard lookout station on the East Lothian coast, near the beach at Peffer Sands near Tyninghame on the East Lothian coast, now lying abandoned and derelict.The coast here is rocky, the waters are described as treacherous, and the area is said to have been home to wreckers. It is also close to a beach used by the Edinburgh Naturist Swimming Club.",
        comments: [],
        type: "Viewpoint"
      },
      {
        name: "Traprain Law",
        lat: "55.9666658",
        long: "-2.6754214",
        description: "Under its CelticnameDunpender, the hill-fort atop Traprain Law was once the citadel of a powerful Iron Age tribe known to the Romans as the Votadini and tolatr British writers as the Gododdin, whose lands stretched from the Forth down to the Tyne. Having survived the Roman occupation, the tribe was eventually defeated by the Anglo-Saxon kingdom of Northumbria during the 6th century.",
        comments: [],
        type: "Hill Fort"
      },
      {
        name: "TYNINGHAME BEACH",
        lat: "56.0236298",
        long: "-2.5952657",
        description: "Alongsandy beach, one of the finest in the South of Scotland. Perfect for extended dog walking, exploring, picnics and Sunday morning strolls to blow the cobwebs away.",
        comments: [],
        type: ""
      },
      {
        name: "Siccar Point",
        lat: "55.931462",
        long: "-2.3039103",
        description: "Siccar Point is a rocky promontory in the county of Berwickshire on the east coast of Scotland. It is famous in the history of geology for Hutton's Unconformity found in 1788, which James Hutton regarded as conclusive proof of his uniformitarian theory of geological development.",
        comments: [],
        type: "Geological Feature"
      },
      {
        name: "Barns Ness",
        lat: "55.987286",
        long: "-2.515317",
        description: "Barns Ness holds an abundance of fossils, probably the largest in Scotland. Many of the limestones are in fact coral reefs, preserved in three dimensions. These were laid down in the Carboniferous, 320 Million years ago when Scotland lay at the Equator giving rise to warm and moist temperatures.1",
        comments: [],
        type: "Geological Feature"
      },
      {
        name: "St. Mary/'s Pleasance Garden, Haddington",
        lat: "55.9539808",
        long: "-2.7765813",
        description: "A beautiful hidden gem of a public garden.  If it/'s peace and solitude you wish then spend a little time here.   I visit often.",
        comments: [],
        type: "Garden"
      },
      {
        name: "Pressmennan Wood",
        lat: "55.9484441",
        long: "-2.60197",
        description: "Wooded area with trails, a lake, wildlife & carved Glingbobs & Tooflits houses in the trees.",
        comments: [],
        type: "Wood"
      },
      {
        name: "Inchcolm Abbey",
        lat: "56.028883",
        long: "-3.3072202",
        description: "Inchcolm Abbey is a medieval abbey located on the island of Inchcolm in the Firth of Forth",
        comments: [],
        type: "Medieval Monastry"
      },
      {
        name: "The Old Forge",
        lat: "57.0373869",
        long: "-5.6826997",
        description: 'Listed as one of the top 10 places for beer and the best bar to drink in the World"s Pubs Hierarchy ranking 2014, by Oonagh Shiel (Australia) and as one of only 3 of "Scotland’s bloody good pubs" by Peter Irvine "The Best Of Scotland 2011". With no roads in or out, an 18 mile hike over munros or a 7 mile sea crossing, the pub is the remotest on mainland Britain (Guinness Book of Records).',
        comments: [],
        type: "Pub"
      },
      {
        name: "Wemyss Caves",
        lat: "56.1605806",
        long: "-3.0592213",
        description: "The Wemyss Caves are a nationally important heritage site including the largest collection of Pictish inscribed symbols in one place.",
        comments: [],
        type: "Cave"
      },
      {
        name: "Norman/'s Law",
        lat: "56.3691666",
        long: "3.1266944",
        description: "Prominent hill with walking paths, ancient fort ruins & panoramic river & countryside views.",
        comments: [],
        type: "Viewpoint"
      },
      {
        name: "Museum of Communication",
        lat: "56.059366",
        long: "-3.2339418",
        description: "From the invention of logarithms to Windows 10, it’s all here.",
        comments: [],
        type: "Museum"
      },
      {
        name: "St Fillian's Cave",
        lat: "56.2132293",
        long: "-2.7297083",
        description: "St Fillan was the patron Saint of the mentally ill and inside the cave you can find the Holy Well where mentally ill patients were brought to the cave to await a “miracle intervention”",
        comments: [],
        type: "Cave"
      },
      {
        name: "Reekie Lin",
        lat: "56.6692536",
        long: "-3.2204358",
        description: "This impressive waterfall is one of the most spectacular in Scotland. It is linked to two falls on the River Isla. When the river is in spate, the two falls merge into one making a huge 24m drop and sending up a mist of spray, hence thenameReekie Linn.",
        comments: [],
        type: "Waterfall"
      },
      {
        name: "Sandlewood Bay",
        lat: "58.5383923",
        long: "-5.0949959",
        description: "Secludedlongcoastal stretch facing the ocean, backed by huge pink sand dunes & a freshwater lake.",
        comments: [],
        type: "Beach"
      },
      {
        name: "Neptune's Staircase",
        lat: "56.8462453",
        long: "-5.0961865",
        description: "Neptune/'s Staircase is a staircase lock comprising eight locks on the Caledonian Canal. Built by Thomas Telford between 1803 and 1822, it is thelongst staircase lock in Britain. The system was originally hand-powered but has been converted to hydraulic operation.",
        comments: [],
        type: "Canal Lock"
      },
      {
        name: "The Fortingall Yew",
        lat: "56.5982127",
        long: "-4.053137",
        description: "The Fortingall Yew is estimated to be between 2000-5000 years old making it thelongst living tree in the UK. Some experts even estimate aging the tree at 9000-10,000 years old which would make it one of the oldest living things on Earth. The yew has religious significance with the site believed to be a sacred place that was Christianised during the dark ages and, according to local legend, it is believed to be the birthplace of Pontius Plat.",
        comments: [],
        type: "Natural Feature"
      },
      {
        name: "The Devil/'s Pulpit",
        lat: "56.0331555",
        long: "-4.4181085",
        description: "Blood red water courses through Finnich Glen and surges around a rock with a sinister reputation. Some say the rock is where the Devil stood to address his followers, the crimson current at his feet. Others say Druids held secret meetings there, hidden from sight within the shadows of the gorges looming walls and others say an execution block for witches.",
        comments: [],
        type: "Natural Feature"
      },
      {
        name: "Maggies Walls Memorial",
        lat: "56.3088667",
        long: "-3.6103031",
        description: "A mysterious monument where a woman who records say never existed was burnt alive for being a witch.",
        comments: [],
        type: "Monument"
      },
      {
        name: "Jupiter Artland",
        lat: "55.9009691",
        long: "-3.4233774",
        description: "Large-scale contemporary artworks tower over fields and lurk in forests around a Jacobean manor house.",
        comments: [],
        type: "Artworks"
      },
      {
        name: "Great Polish Map of Scotland",
        lat: "55.7120207",
        long: "-3.2187668",
        description: "This huge concrete map of Scotland was built as a thank you gift from a Polish soldier.",
        comments: [],
        type: "Monument"
      },
      {
        name: "Anstruther Model Solar System",
        lat: "56.2219591",
        long: "-2.6997017",
        description: "Bronze lats placed around this Scottish fishing village form a true-scale model of the solar system.",
        comments: [],
        type: "Walk"
      }])