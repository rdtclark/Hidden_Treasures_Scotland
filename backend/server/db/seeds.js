use hidden_treasures;
db.dropDatabase();

db.treasures.insertMany(
  [
    
    {
      name: "St Bernard's Well",
      lat: "55.95526",
      long: "-3.211475",
      description: "Designed in 1789, St Bernard's Well, with a statue of Hygieia at its center, locals would visit to remedy any ailments they might have. The",
      type: "Place of Worship",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Edinburgh%2C-Water-Of-Leith%2C-St-Bernard%27s-Well-%28Q17570795%29.jpg",
      comments: []
    },
    {
      name: "Capelaw Hill ",
      lat: "55.88034",
      long: "-3.254886",
      description: "A hill summit in the Pentland Range that borders the South West of Edinburgh. At the top you get a fantastic view of the rest of the range with a drammatic ridge leading your eyes away from the capital towards the hills",
      type: "Hill",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/On_Capelaw_Hill._-_geograph.org.uk_-_9222.jpg",
      comments: []
    },
    {
      name: "Cuaig Beach",
      lat: "57.559887",
      long: "-5.838022",
      description: "A little visited but beautiful sandy beach. The sands are covered at high tide so the beach can only be enjoyed for a few hours a day",
      type: "Natural Feature",
      url: "https://live.staticflickr.com/2823/8859445445_5f6c71dceb_b.jpg",
      comments: []
    },
    {
      name: "Boreray",
      lat: "57.869932",
      long: "-8.487713",
      description: "Located in the North Atlantic, Boreray is a small, uninhabited island in the St Kilda archipeligo. On the island there are remains of an ancient farming comunity. ",
      type: "Natural Feature",
      url: "https://d3576n5e2t76p8.cloudfront.net/imager/s3-eu-west-1_amazonaws_com/ws-nts/Production/assets/rte/Boreray-bird-count-August-2019_a4d3b1d2372d193767395f89c3d28c77.jpg",
      comments: []
    },
    {
      name: "Sanna Bay",
      lat: "56.743651",
      long: "-6.180812",
      description: "Sanna Bay is situated at the most westerly point in mainland Britain on the Ardnamurchan Peninsula.",
      type: "Natural Feature",
      url: "https://scontent.flhr4-2.fna.fbcdn.net/v/t31.0-8/893997_656576451057682_3244949011478042197_o.jpg?_nc_cat=109&_nc_sid=6e5ad9&_nc_oc=AQmfBUYz9UIfe-zWaS9Swu1i8qtl5O_tQKL_WAx7mAV5NHCyfGZFmXnY2v5bxo18C6n2y_MSLFSvMgGWzIdmGgyn&_nc_ht=scontent.flhr4-2.fna&oh=3fbd74aa91ef1af00e1a3bef7703ec37&oe=5EF23A3A",
      comments: []
    },
    {
      name: "Clamshell Cave",
      lat: "56.432712",
      long: "-6.339554",
      description: "Sea Cave. Not accessible at high tide as water fills inlet, cave exposed at low tide although shallow pool remains at entrance, reached by climbing down from jetty to cobble shore or from north of cave walking back along shore. Distinctive curved columns at entrance lead to 32 m of 2-3 m wide and 10-12 m high passage with a rock floor becoming shingle at the back of the cave. ",
      type: "Cave",
      url: "https://www.iona-bed-breakfast-mull.com/wp-content/uploads/2019/01/P1050027.jpg",
      comments: []
    },
    {
      name: "Falls of Bruar",
      lat: "56.773901",
      long: "-3.934511",
      description: "The Falls of Bruar are a series of waterfalls on the Bruar Water in Scotland, about 8 miles (13 kilometres) from Pitlochry in the council area of Perth and Kinross. They have been a tourist attraction since the 18th century and were immortalized in a poem by Robert Burns, The Humble Petition of Bruar Water to the Noble Duke of Atholl, supposedly from the river itself entreating the Duke to plant some trees in the then barren landscape.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Fallsofbruar.jpg",
      comments: []
    },
    {
      name: "Little Sparta",
      lat: "55.723283",
      long: "-3.509273",
      description: "Little Sparta is a garden at Dunsyre in the Pentland Hills near Edinburgh, Scotland, created by artist and poet Ian Hamilton Finlay and his wife Sue Finlay. The 5-acre (2.0 ha) Arcadian garden includes concrete poetry in sculptural form, polemic, and philosophical aphorisms, together with sculptures and two temples. Altogether it includes over 275 artworks by the artist, created in collaboration with numerous craftsmen and women.",
      type: "Garden",
      url: "https://www.littlesparta.org.uk/wp-content/uploads/2017/07/Present-Tense_AndrewLawson-1.png",
      comments: []
    },
    {
      name: "Mount Stuart",
      lat: "55.791762",
      long: "-5.018597",
      description: "Mount Stuart House on the east coast of the Isle of Bute, Scotland, is a Gothic Revival country house and the ancestral home of the Marquesses of Bute. It was designed by Sir Robert Rowand Anderson for The 3rd Marquess of Bute in the late 1870s, replacing an earlier house by Alexander McGill, which burnt down in 1877. The house is a Category A listed building.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Mount_Stuart_House_2018-08-25.jpg/2880px-Mount_Stuart_House_2018-08-25.jpg",
      comments: []
    },
    {
      name: "MV Captayannis",
      lat: "55.97598",
      long: "-4.742065",
      description: "The Captayannis was a Greek sugar-carrying vessel that sank in the Firth of Clyde, Scotland in 1974.",
      type: "Monument",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Captayannis.JPG/2880px-Captayannis.JPG",
      comments: []
    },
    {
      name: "Iona Abbey",
      lat: "56.33481",
      long: "-6.391463",
      description: "Iona Abbey is an abbey located on the island of Iona, just off the Isle of Mull on the West Coast of Scotland.It is one of the oldest Christian religious centres in Western Europe. The abbey was a focal point for the spread of Christianity throughout Scotland and marks the foundation of a monastic community by St. Columba, when Iona was part of the Kingdom of Dál Riata. Saint Aidan served as a monk at Iona, before helping to reestablish Christianity in Northumberland, on the island of Lindisfarne",
      type: "Church",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Abbey_on_the_Isle_of_Iona_-_geograph.org.uk_-_1459438.jpg",
      comments: []
    },
    {
      name: "Falls of Glomach",
      lat: "57.274112",
      long: "-5.291736",
      description: "The Falls of Glomach are perhaps the most magnificent waterfalls in Britain, with a single leap of 113 metres (370 feet). They require a fair walk to reach from any direction; the shortest and more usual route is from Strath Croe but the approach up Glen Elchaig is a far finer walk, though much care is needed on the approach to the falls.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Scotland_Falls_of_Glomach.jpg/440px-Scotland_Falls_of_Glomach.jpg",
      comments: []
    },
    {
      name: "Wellington Bomber Crash Site",
      lat: "57.222821",
      long: "-5.191767",
      description: "Fifteen year old Andy Brown, the young lad who was part of the search party that first located the wreckage of Wellington R1646, never forgot about finding the remains of the aircraft on that cold day in February 1942. The memory of those who lost their lives stayed with him and he always felt that there should be something in the area to commemorate the airmen, not only those from Wellington R1646, but all the airmen who had lost their lives in the Cairngorm Mountains in aviation crashes over the years. Although the remains of some of the aircraft lost can still be seen scattered about in the remote hills and glens today there was no memorial in the area to acknowledge their loss and pay tribute to the airmen.",
      type: "Monument",
      url: "http://www.edwardboyle.com/photos/1966.jpg",
      comments: []
    },
    {
      name: "Drumbeg Viewpoint",
      lat: "58.244601",
      long: "-5.20497",
      description: "Drumbeg is reached via on the remarkably beautiful Assynt coastal road, the B869. This single track road provides a scenic link between Lochinver and Kylesku, and takes in some of Scotland's best scenery. The village itself itself lies on the north facing coast of Assynt, looking out across Eddrachillis Bay to Handa Island and mainland Sutherland. A viewpoint with a car park has been constructed at the west end of village and from here you can take in the magnificent seascapes to the north.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Loch_Drumbeg_-_geograph.org.uk_-_135982.jpg",
      comments: []
    },
    {
      name: "The Bad Step",
      lat: "57.194765",
      long: "-6.149147",
      description: "The hike from Kilmarie to Coruisk via the Bad Step is one of the most spectacular and challenging of Skye's low-level walks (11 miles round-trip; allow at least six hours). The route begins at a parking area just south of Kilmarie, on the Broadford to Elgol road (signpost for Camasunary and Sligachan), and leads over a hill pass to the bay of Camasunary, following a stony track that was built by the army in the 1960s to provide better access for mountain rescue teams.",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "The Black Cullins",
      lat: "57.212963",
      long: "-6.209571",
      description: "The iconic ridge of the Black Cuillin is the UK’s most challenging mountain range. Over 11 kilometres long and above 3,000 feet in places, the ridge contains 11 Munros and 16 other summits. The highest point is Sgurr Alasdair at 3,254.59 feet. The gentler, rounded Red Cuillin are popular with hillwalkers, the highest point being Glamaig, a 2,543-foot Corbett.",
      type: "Hill",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Main_ridge_of_the_cuillin_in_skye_arp.jpg/600px-Main_ridge_of_the_cuillin_in_skye_arp.jpg",
      comments: []
    },
    {
      name: "The Fairy Pools",
      lat: "57.250353",
      long: "-6.258287",
      description: "Free to visit at any time, the spectacular Fairy Pools are located near the village of Carbost in Glenbrittle on the Isle of Skye.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Fairy_Pools%2C_Skye%2C_Scotland_17_%28highest_pool%29.jpg",
      comments: []
    },
    {
      name: "Dr Neil's Secret Garden",
      lat: "55.940667",
      long: "-3.148638",
      description: "Dr Neil’s Garden is one of the most remarkable gardens in Scotland today. Lying next to the twelfth-century Duddingston Kirk.",
      type: "Garden",
      url: "http://www.drneilsgarden.co.uk/wp-content/uploads/2015/04/path-by-loch-2.jpg",
      comments: []
    },
    {
      name: "Applecross Photographic Gallery ",
      lat: "57.413979",
      long: "-5.814596",
      description: "Set up in a disused Telephone Exchange with Panoramic views of Raasay, Scalpay and the Cuillin of Skye, Applecross Photographic Gallery exhibits a selection of local images by Jack Marris.",
      type: "Museum",
      url: "https://static.wixstatic.com/media/eb0267_b75b150baa314405b7ee931cc182882d~mv2_d_2000_1333_s_2.jpg/v1/fill/w_2000,h_1176,al_c,q_90/eb0267_b75b150baa314405b7ee931cc182882d~mv2_d_2000_1333_s_2.webp",
      comments: []
    },
    {
      name: "The Scottish Crannog Centre",
      lat: "56.579403",
      long: "-4.003158",
      description: "Scotland's prehistory. Walk in the footsteps of the original Crannog dwellers and immerse yourself in village life with original artefacts; demonstrations of textiles, cooking and ancient crafts & technologies; paddle into prehistory in one of our replica logboats and take in the atmosphere inside the Crannog Roundhouse.",
      type: "Museum",
      url: "",
      comments: []
    },
    {
      name: "The Garden of Cosmic Speculation",
      lat: "55.130141",
      long: "-3.66629",
      description: "A 30 acre scupture garden near Dumfries. The garden is private and only accessible on one annual open day. Charles Jencks",
      type: "Garden",
      url: "",
      comments: []
    },
    {
      name: "Polphail Ghost Village",
      lat: "55.870056",
      long: "-5.306956",
      description: "Not sure if this place is still intact, will have to do more research.",
      type: "Miscellaneous",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/System-Juice_126.png/1280px-System-Juice_126.png",
      comments: []
    },
    {
      name: "Logan Botanic Gardens",
      lat: "54.74198",
      long: "-4.959143",
      description: "Scotland's most exotic garden, or one of. The Garden dates back to 1869 with plant treasures from South and Central America, Southern Africa and Australiasia..",
      type: "Garden",
      url: "",
      comments: []
    },
    {
      name: "Rosslyn Chapel",
      lat: "55.855309",
      long: "-3.160174",
      description: "Although a well known tourist destination, this one made my list because you're not allowed to take pictures inside the chapel..",
      type: "Place of Worship",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Rosslyn_Chapel.jpg",
      comments: []
    },
    {
      name: "The Kelpies",
      lat: "56.018856",
      long: "-3.755152",
      description: "They might not be so much hidden from a distance but they made my list for 2 reasons,  1. we rarely take time to get closer and see these from the inside, especially at night. 2. As Scottish folklore goes, the kelpie, or water kelpie is a shape-shifting water spirit occupying the lochs of the land. Almost every body of water in Scotland is associated with a story of a kelpie, the most notable being Loch Ness.",
      type: "Monument",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Kelpies%2C_at_The_Helix%2C_Scotland.JPG/2560px-The_Kelpies%2C_at_The_Helix%2C_Scotland.JPG",
      comments: []
    },
    {
      name: "Goblin Ha, Gifford",
      lat: "55.9032214",
      long: "-2.7492676",
      description: "Danskine Loch, Haddington EH41 4PJ. You have go through private land and golf course but then you find yourself on a paths leading along river... It was beautiful walk, very enjoyable and peaceful. Castle itself is ruined but full of mystery... Your imagination start to work when you are there",
      type: "Castle",
      url: "",
      comments: []
    },
    {
      name: "St Martin’s Kirk",
      lat: "55.9561",
      long: "-2.7688",
      description: "The proud ruin of St Martin's Kirk stands on the very eastern edge of Haddington. To its east is a playing field and, beyond that, open countryside. From the west and the south it is overlooked by houses built during the 20th century expansion of Haddington on the east side of the River Tyne.",
      type: "Church",
      url: "",
      comments: []
    },
    {
      name: "Amisfield Walled Garden",
      lat: "55.958741",
      long: "-2.7503102",
      description: "Amisfield Walled Garden lies on the outskirts of Haddington in East Lothian. Dating from the late 18th Century it is one of the largest walled gardens in Scotland with extensive herbaceous borders, fruit and vegetable beds, wildflower meadow, orchard and woodland plantings. Amisfield is a community garden managed by the Amisfield Preservation Trust and a large band of volunteers. It provides a venue for education and training for people of all abilities. The garden is becoming increasingly popular as a visitor destination, with well over 1,000 people visiting each year. The woodland and meadow surrounding the garden are popular with local walkers.",
      type: "Garden",
      url: "",
      comments: []
    },
    {
      name: "World War II miniature submarines lie in Aberlady Bay",
      lat: "56.0196743",
      long: "-2.8827483",
      description: "wrecks of 2 World War II miniature submarines lie in Aberlady Bay, East Lothian. Check the tide times first. If you do decide to head out to Aberlady for a look, you will need to plan to reach the sub wrecks about 30-60 minutes before low tide. They are only visible around low tide and awareness of the tide times is essential for your trip as the tides come in very quickly at Aberlady Sands.",
      type: "Monument",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/XT_craft_2.JPG",
      comments: []
    },
    {
      name: "Peffer Sands Lookout",
      lat: "56.03490067",
      long: "-2.6073805",
      description: "A former Coastguard lookout station on the East Lothian coast, near the beach at Peffer Sands near Tyninghame on the East Lothian coast, now lying abandoned and derelict.\n" +
        "\n" +
        "The coast here is rocky, the waters are described as treacherous, and the area is said to have been home to wreckers. It is also close to a beach used by the Edinburgh Naturist Swimming Club.",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "Traprain Law",
      lat: "55.9666658",
      long: "-2.6754214",
      description: "Under its Celtic name Dunpender, the hill-fort atop Traprain Law was once the citadel of a powerful Iron Age tribe known to the Romans as the Votadini and to later British writers as the Gododdin, whose lands stretched from the Forth down to the Tyne. Having survived the Roman occupation, the tribe was eventually defeated by the Anglo-Saxon kingdom of Northumbria during the 6th century.",
      type: "Hill",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Traprain_Law_from_the_north.JPG/2880px-Traprain_Law_from_the_north.JPG",
      comments: []
    },
    {
      name: "TYNINGHAME BEACH",
      lat: "56.0236298",
      long: "-2.5952657",
      description: "A long sandy beach, one of the finest in the South of Scotland. Perfect for extended dog walking, exploring, picnics and Sunday morning strolls to blow the cobwebs away.",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "Siccar Point",
      lat: "55.931462",
      long: "-2.3039103",
      description: "Siccar Point is a rocky promontory in the county of Berwickshire on the east coast of Scotland. It is famous in the history of geology for Hutton's Unconformity found in 1788, which James Hutton regarded as conclusive proof of his uniformitarian theory of geological development.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Hutton%27s_unconformity_at_Siccar_Point%2C_Scotland.jpg",
      comments: []
    },
    {
      name: "Barns Ness",
      lat: "55.987286",
      long: "-2.515317",
      description: "Barns Ness holds an abundance of fossils, probably the largest in Scotland. Many of the limestones are in fact coral reefs, preserved in three dimensions. These were laid down in the Carboniferous, 320 Million years ago when Scotland lay at the Equator giving rise to warm and moist temperatures.1",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "St. Mary's Pleasance Garden, Haddington",
      lat: "55.9539808",
      long: "-2.7765813",
      description: "A beautiful hidden gem of a public garden.  If it's peace and solitude you wish then spend a little time here.   I visit often.",
      type: "Garden",
      url: "",
      comments: []
    },
    {
      name: "Pressmennan Wood",
      lat: "55.9484441",
      long: "-2.60197",
      description: "Wooded area with trails, a lake, wildlife & carved Glingbobs & Tooflits houses in the trees.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Pressmennan_-_geograph.org.uk_-_28116.jpg",
      comments: []
    },
    {
      name: "Inchcolm Abbey",
      lat: "56.028883",
      long: "-3.3072202",
      description: "Inchcolm Abbey is a medieval abbey located on the island of Inchcolm in the Firth of Forth",
      type: "Church",
      url: "",
      comments: []
    },
    {
      name: "The Old Forge",
      lat: "57.0373869",
      long: "-5.6826997",
      description: "Listed as one of the top 10 places for beer and the best bar to drink in the World's Pubs Hierarchy ranking 2014, by Oonagh Shiel (Australia) and as one of only 3 of Scotland’s bloody good pubs by Peter Irvine The Best Of Scotland 2011. With no roads in or out, an 18 mile hike over munros or a 7 mile sea crossing, the pub is the remotest on mainland Britain (Guinness Book of Records).",
      type: "Miscellaneous",
      url: "",
      comments: []
    },
    {
      name: "Wemyss Caves",
      lat: "56.1605806",
      long: "-3.0592213",
      description: "The Wemyss Caves are a nationally important heritage site including the largest collection of Pictish inscribed symbols in one place.",
      type: "Cave",
      url: "",
      comments: []
    },
    {
      name: "Norman's Law",
      lat: "56.3691649",
      long: "-3.144204",
      description: "Prominent hill with walking paths, ancient fort ruins & panoramic river & countryside views.",
      type: "Hill",
      url: "",
      comments: []
    },
    {
      name: "Museum of Communication",
      lat: "56.059366",
      long: "-3.2339418",
      description: "From the invention of logarithms to Windows 10, it’s all here.",
      type: "Museum",
      url: "",
      comments: []
    },
    {
      name: "St Fillian's Cave",
      lat: "56.2132293",
      long: "-2.7297083",
      description: "St Fillan was the patron Saint of the mentally ill and inside the cave you can find the Holy Well where mentally ill patients were brought to the cave to await a “miracle intervention”",
      type: "Cave",
      url: "",
      comments: []
    },
    {
      name: "Reekie Lin",
      lat: "56.6692536",
      long: "-3.2204358",
      description: "This impressive waterfall is one of the most spectacular in Scotland. It is linked to two falls on the River Isla. When the river is in spate, the two falls merge into one making a huge 24m drop and sending up a mist of spray, hence the name Reekie Linn.",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Reekie_Linn_Waterfall%2C_Angus.jpg",
      comments: []
    },
    {
      name: "Sandlewood Bay",
      lat: "58.5383923",
      long: "-5.0949959",
      description: "Secluded long coastal stretch facing the ocean, backed by huge pink sand dunes & a freshwater lake.",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "Neptune's Staircase",
      lat: "56.8462453",
      long: "-5.0961865",
      description: "Neptune's Staircase is a staircase lock comprising eight locks on the Caledonian Canal. Built by Thomas Telford between 1803 and 1822, it is the longest staircase lock in Britain. The system was originally hand-powered but has been converted to hydraulic operation.",
      type: "Miscellaneous",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Neptune%27s_Staircase_2017_left.jpg/1920px-Neptune%27s_Staircase_2017_left.jpg",
      comments: []
    },
    {
      name: "The Fortingall Yew",
      lat: "56.5982127",
      long: "-4.053137",
      description: "The Fortingall Yew is estimated to be between 2000-5000 years old making it the longest living tree in the UK. Some experts even estimate aging the tree at 9000-10,000 years old which would make it one of the oldest living things on Earth. The yew has religious significance with the site believed to be a sacred place that was Christianised during the dark ages and, according to local legend, it is believed to be the birthplace of Pontius Pilate.",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "The Devil's Pulpit",
      lat: "56.0331555",
      long: "-4.4181085",
      description: "Blood red water courses through Finnich Glen and surges around a rock with a sinister reputation. Some say the rock is where the Devil stood to address his followers, the crimson current at his feet. Others say Druids held secret meetings there, hidden from sight within the shadows of the gorge's looming walls and others say an execution block for witches.",
      type: "Natural Feature",
      url: "",
      comments: []
    },
    {
      name: "Maggies Wall's Memorial",
      lat: "56.3088667",
      long: "-3.6103031",
      description: "A mysterious monument where a woman who records say never existed was burnt alive for being a witch.",
      type: "Monument",
      url: "",
      comments: []
    },
    {
      name: "Jupiter Artland",
      lat: "55.9009691",
      long: "-3.4233774",
      description: "Large-scale contemporary artworks tower over fields and lurk in forests around a Jacobean manor house.",
      type: "Museum",
      url: "",
      comments: []
    },
    {
      name: "Great Polish Map of Scotland",
      lat: "55.7120207",
      long: "-3.2187668",
      description: "This huge concrete map of Scotland was built as a thank you gift from a Polish soldier.",
      type: "Miscellaneous",
      url: "",
      comments: []
    },
    {
      name: "Anstruther Model Solar System",
      lat: "56.2219591",
      long: "-2.6997017",
      description: "Bronze plates placed around this Scottish fishing village form a true-scale model of the solar system.",
      type: "Miscellaneous",
      url: "",
      comments: []
    },
    {
      name: "Balmoral Cairns",
      lat: "57.0261",
      long: "-3.221374",
      description: "",
      type: "Natural Feature",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cairn_for_Prince_Albert_Balmoral.JPG/2880px-Cairn_for_Prince_Albert_Balmoral.JPG",
      comments: []
    },
    {
      name: "Tomnadashan Mine",
      lat: "56.514411",
      long: "-4.128649",
      description: "This old mine is better known as the resting place of the Killer Rabbit of Caerbannog, from Monty Pythons, the quest for the holy grail",
      type: "Cave",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Tomnadashan_Copper_Mine_-_geograph.org.uk_-_28792.jpg",
      comments: []
    },])





