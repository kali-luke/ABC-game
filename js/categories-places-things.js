// Category lists, part 1: places and things.
//
// FORMAT (easy to edit on GitHub):
//   L: well-known, well-known, ... | obscure, obscure, ...
//   - Left of "|"  = well-known (can be picked as the hidden answer, and counts as valid)
//   - Right of "|" = obscure (counts as valid, never picked as the hidden answer)
//   - "Name/Alias/Alias" = other spellings that also count, e.g. United Kingdom/UK
//   - A letter with fewer than 3 answers in total is skipped in games.

export const PLACES_THINGS = [
{
  id: 'countries', name: 'Countries', rule: "Ignore 'The'",
  data: `
A: Argentina, Australia, Austria, Afghanistan, Albania, Algeria | Andorra, Angola, Armenia, Azerbaijan, Antigua and Barbuda
B: Brazil, Belgium, Bulgaria, Bangladesh, Bolivia, Barbados, Bahamas | Bahrain, Belarus, Belize, Benin, Bhutan, Bosnia and Herzegovina/Bosnia, Botswana, Brunei, Burkina Faso, Burundi
C: Canada, China, Chile, Colombia, Croatia, Cuba, Cyprus, Czech Republic/Czechia, Cameroon, Costa Rica | Cambodia, Cape Verde/Cabo Verde, Central African Republic, Chad, Comoros, Congo/Republic of the Congo, Cote d'Ivoire
D: Denmark, Dominican Republic | Djibouti, Dominica, DR Congo/Democratic Republic of the Congo/DRC
E: Egypt, England, Estonia, Ethiopia, Ecuador | El Salvador, Equatorial Guinea, Eritrea, Eswatini/Swaziland, East Timor/Timor-Leste
F: France, Finland, Fiji
G: Germany, Greece, Ghana, Georgia, Guatemala | Gabon, Gambia, Grenada, Guinea, Guinea-Bissau, Guyana
H: Hungary, Honduras, Haiti | Holland
I: India, Italy, Ireland, Iceland, Indonesia, Iran, Iraq, Israel, Ivory Coast
J: Japan, Jamaica, Jordan
K: Kenya, Kuwait, Kazakhstan | Kiribati, Kosovo, Kyrgyzstan
L: Lebanon, Luxembourg, Libya, Lithuania, Latvia | Laos, Lesotho, Liberia, Liechtenstein
M: Mexico, Morocco, Malta, Malaysia, Maldives, Monaco, Mongolia | Madagascar, Malawi, Mali, Marshall Islands, Mauritania, Mauritius, Micronesia, Moldova, Montenegro, Mozambique, Myanmar/Burma
N: Netherlands/The Netherlands, New Zealand, Nigeria, Norway, Nepal, North Korea, Northern Ireland | Namibia, Nauru, Nicaragua, Niger, North Macedonia/Macedonia
O: Oman
P: Portugal, Poland, Pakistan, Peru, Philippines, Panama, Paraguay | Palau, Palestine, Papua New Guinea
Q: Qatar
R: Russia, Romania, Rwanda
S: Spain, Sweden, Switzerland, Scotland, South Africa, South Korea, Saudi Arabia, Singapore, Serbia, Sri Lanka, Slovakia, Slovenia, Syria | Samoa, San Marino, Sao Tome and Principe, Senegal, Seychelles, Sierra Leone, Solomon Islands, Somalia, South Sudan, Sudan, Suriname, St Lucia/Saint Lucia, St Kitts and Nevis/Saint Kitts and Nevis, St Vincent and the Grenadines/Saint Vincent and the Grenadines
T: Turkey/Turkiye, Thailand, Tunisia, Tanzania | Taiwan, Tajikistan, Togo, Tonga, Trinidad and Tobago/Trinidad, Turkmenistan, Tuvalu
U: United Kingdom/UK/Great Britain/Britain, United States/USA/US/America/United States of America, Ukraine, Uruguay, Uganda, United Arab Emirates/UAE | Uzbekistan
V: Vietnam, Venezuela | Vatican City/Vatican, Vanuatu
W: Wales
Y: Yemen
Z: Zimbabwe, Zambia
`},
{
  id: 'capitals', name: 'Capital cities', rule: 'Capitals of countries (plus UK nations)',
  data: `
A: Amsterdam, Athens, Abu Dhabi, Ankara, Addis Ababa | Algiers, Amman, Abuja, Accra, Asmara, Ashgabat, Astana, Asuncion, Apia, Andorra la Vella, Antananarivo
B: Berlin, Brussels, Budapest, Bangkok, Beijing, Buenos Aires, Bern, Belfast, Bogota, Bucharest, Belgrade, Beirut, Brasilia | Baku, Bamako, Bangui, Banjul, Bishkek, Bissau, Bratislava, Bridgetown, Bujumbura, Bandar Seri Begawan, Basseterre, Belmopan
C: Cairo, Copenhagen, Canberra, Cardiff, Caracas | Colombo, Conakry, Castries, Chisinau
D: Dublin, Doha, Damascus, Dhaka | Dakar, Dodoma, Dili, Djibouti, Dushanbe
E: Edinburgh
F: | Freetown, Funafuti
G: | Guatemala City, Georgetown, Gaborone, Gitega
H: Helsinki, Havana, Hanoi | Harare, Honiara
I: Islamabad
J: Jakarta, Jerusalem | Juba
K: Kyiv/Kiev, Kabul, Kathmandu, Kuala Lumpur, Kingston | Khartoum, Kampala, Kigali, Kinshasa, Kuwait City, Kingstown
L: London, Lisbon, Lima, Luxembourg | Ljubljana, La Paz, Lilongwe, Lome, Luanda, Lusaka, Libreville
M: Madrid, Moscow, Mexico City, Manila, Montevideo, Monaco, Minsk | Muscat, Majuro, Malabo, Male, Managua, Manama, Maputo, Maseru, Mbabane, Mogadishu, Monrovia, Moroni
N: Nairobi, New Delhi/Delhi, Nicosia, Nassau | N'Djamena, Niamey, Nouakchott, Nuku'alofa, Naypyidaw
O: Oslo, Ottawa | Ouagadougou
P: Paris, Prague, Pyongyang, Pretoria | Panama City, Phnom Penh, Podgorica, Port Louis, Port Moresby, Port-au-Prince, Port of Spain, Porto-Novo, Praia, Paramaribo, Port Vila
Q: Quito
R: Rome, Riga, Reykjavik, Riyadh, Rabat | Roseau
S: Stockholm, Seoul, Santiago, Singapore, Sofia | Sarajevo, Skopje, Sana'a, San Marino, Suva, St George's, Sao Tome, Sucre, San Jose, San Salvador, Santo Domingo, St John's
T: Tokyo, Tehran, Tallinn, Tirana, Tbilisi, Tunis, Taipei | Tashkent, Tripoli, Tegucigalpa, Thimphu
U: Ulaanbaatar/Ulan Bator
V: Vienna, Vilnius, Valletta, Vatican City | Victoria, Vientiane
W: Washington DC/Washington, Warsaw, Wellington | Windhoek
Y: | Yerevan, Yaounde, Yamoussoukro
Z: Zagreb
`},
{
  id: 'cities', name: 'World cities', rule: "Any city in the world",
  data: `
A: Amsterdam, Athens, Atlanta, Auckland, Austin, Adelaide, Alexandria, Abu Dhabi | Antwerp, Acapulco, Almaty, Ahmedabad, Albuquerque, Anchorage, Aberdeen, Alicante
B: Barcelona, Berlin, Boston, Bangkok, Brisbane, Buenos Aires, Bordeaux, Bologna, Birmingham, Brussels, Budapest, Beijing, Bristol | Baltimore, Basel, Bilbao, Bruges, Bangalore, Busan, Bratislava
C: Chicago, Cairo, Cape Town, Copenhagen, Cancun, Calgary, Cardiff | Cologne, Casablanca, Chennai, Cleveland, Cincinnati, Cork, Cordoba
D: Dubai, Dublin, Dallas, Detroit, Denver, Delhi, Dortmund | Durban, Dusseldorf, Dresden, Doha, Dhaka
E: Edinburgh, Edmonton | Eindhoven, Essen
F: Florence, Frankfurt | Faro, Fukuoka
G: Geneva, Glasgow | Guangzhou, Gothenburg, Granada, Genoa
H: Hong Kong, Houston, Hamburg, Havana, Helsinki | Hanoi, Honolulu, Hiroshima, Hobart
I: Istanbul | Islamabad, Indianapolis, Ibiza
J: Jakarta, Johannesburg, Jerusalem | Jeddah, Jaipur
K: Kyoto, Kolkata/Calcutta, Krakow, Karachi | Kuala Lumpur, Kyiv/Kiev, Kingston
L: London, Los Angeles/LA, Lisbon, Las Vegas/Vegas, Lagos, Lima, Lyon, Liverpool, Leeds | Leipzig, Lille
M: Madrid, Miami, Milan, Moscow, Mumbai/Bombay, Melbourne, Montreal, Manchester, Marseille, Munich, Mexico City | Malaga, Manila, Marrakech, Minneapolis, Monaco
N: New York/New York City/NYC, Nice, Naples, Nairobi, New Orleans, Nashville | Newcastle, Nagoya, Nantes
O: Osaka, Oslo, Orlando, Ottawa, Oxford | Oporto
P: Paris, Prague, Perth, Philadelphia, Porto, Phoenix | Pittsburgh, Palma, Pisa, Pune, Portland
Q: Quebec City/Quebec | Quito, Qingdao
R: Rome, Rio de Janeiro/Rio, Rotterdam | Riyadh, Riga, Reykjavik
S: Sydney, Seoul, Shanghai, Singapore, San Francisco, Seattle, Stockholm, Sao Paulo, Seville, San Diego | Salzburg, Santiago, St Petersburg/Saint Petersburg, Stuttgart, Salt Lake City
T: Tokyo, Toronto, Tel Aviv, Turin | Tallinn, Tampa, Tijuana, Tunis
U: | Utrecht, Ulsan
V: Venice, Vienna, Vancouver, Valencia | Verona, Vilnius
W: Warsaw, Washington DC/Washington, Wellington | Wuhan, Winnipeg
X: | Xi'an, Xiamen
Y: | Yokohama, Yangon
Z: Zurich | Zagreb
`},
{
  id: 'uk-towns', name: 'UK towns and cities', rule: 'Anywhere in England, Scotland, Wales or NI',
  data: `
A: Aberdeen, Aylesbury, Ashford, Ayr | Aberystwyth, Altrincham, Andover, Armagh, Ashby-de-la-Zouch, Accrington
B: Birmingham, Bristol, Brighton, Bath, Belfast, Bradford, Blackpool, Bolton, Bournemouth, Blackburn | Barnsley, Basingstoke, Bedford, Burnley, Bury, Bangor, Barnstaple
C: Cardiff, Cambridge, Coventry, Chester, Canterbury, Carlisle, Colchester, Crewe | Cheltenham, Chelmsford, Chichester, Crawley, Croydon
D: Derby, Dundee, Doncaster, Dover, Durham | Darlington, Dudley, Dumfries
E: Edinburgh, Exeter, Eastbourne | Ely, Enniskillen, Epsom
F: Folkestone, Falmouth | Fort William, Farnham, Fareham
G: Glasgow, Gloucester, Grimsby, Guildford | Gateshead, Gravesend, Grantham
H: Hull, Harrogate, Hastings, Huddersfield | Halifax, Hereford, Hartlepool, Harlow
I: Ipswich, Inverness | Ilkley
J: | Jedburgh, Jarrow
K: Kendal, Kettering | Keswick, Kidderminster, Kilmarnock, King's Lynn
L: London, Leeds, Liverpool, Leicester, Lincoln, Luton | Lancaster, Londonderry/Derry, Llandudno
M: Manchester, Milton Keynes, Middlesbrough, Maidstone, Margate | Macclesfield, Mansfield
N: Newcastle/Newcastle upon Tyne, Nottingham, Norwich, Northampton, Newport | Nuneaton, Newquay
O: Oxford, Oldham | Oban
P: Plymouth, Portsmouth, Preston, Peterborough, Perth | Poole, Penzance
Q: | Queensferry
R: Reading, Rochdale | Rotherham, Ripon, Rugby
S: Sheffield, Southampton, Swansea, Stoke-on-Trent/Stoke, Sunderland, Stirling, St Albans/Saint Albans | Salford, Salisbury, Scarborough, Slough, Southend, Stockport, Swindon, St Andrews
T: Torquay | Telford, Truro, Tamworth, Taunton
U: | Ullapool
V: | Ventnor
W: Wolverhampton, Watford, Warrington, Wigan, Winchester, Worcester | Wakefield, Weymouth, Wrexham, Whitby, Windsor
Y: York | Yeovil
`},
{
  id: 'cars', name: 'Car brands', rule: 'Car makers, not models',
  data: `
A: Audi, Aston Martin/Aston, Alfa Romeo/Alfa | Acura, Alpine, Ariel, Austin
B: BMW, Bentley, Bugatti | Buick, BYD
C: Citroen, Chevrolet/Chevy, Cadillac, Chrysler | Cupra
D: Dodge, Dacia | Daewoo, Daihatsu, DS, DeLorean
F: Ford, Ferrari, Fiat | Fisker
G: | Genesis, GMC, Geely
H: Honda, Hyundai | Hummer, Holden
I: | Infiniti, Isuzu
J: Jaguar, Jeep
K: Kia | Koenigsegg
L: Lamborghini, Land Rover, Lexus, Lotus | Lancia, Lincoln, Lucid
M: Mercedes/Mercedes-Benz, Mazda, Mini, Mitsubishi, McLaren, Maserati | MG, Morgan
N: Nissan
O: | Opel
P: Porsche, Peugeot | Polestar, Pagani, Pontiac, Proton
R: Renault, Rolls-Royce | Rivian, Rover
S: Skoda, Subaru, Suzuki, SEAT, Smart | Saab, SsangYong
T: Toyota, Tesla | TVR, Triumph
V: Volkswagen/VW, Volvo, Vauxhall
`},
{
  id: 'animals', name: 'Animals', rule: 'Any animal, bird, fish or insect',
  data: `
A: Alligator, Ant, Antelope, Armadillo, Ape | Aardvark, Albatross, Alpaca, Anteater, Anaconda
B: Bear, Bee, Beaver, Badger, Bat, Bison, Butterfly | Baboon, Buffalo, Beetle, Budgie, Bull
C: Cat, Cow, Camel, Cheetah, Crocodile, Chicken, Chimpanzee/Chimp | Caterpillar, Cobra, Crab, Crow, Chameleon, Cougar
D: Dog, Dolphin, Donkey, Duck, Deer | Dingo, Dragonfly, Dove, Dormouse
E: Elephant, Eagle, Eel, Emu | Elk, Earwig
F: Fox, Frog, Flamingo | Ferret, Falcon, Fly, Fish
G: Giraffe, Gorilla, Goat, Goose | Gazelle, Gecko, Gerbil, Goldfish, Grasshopper, Guinea pig
H: Horse, Hippo/Hippopotamus, Hedgehog, Hamster, Hyena | Hare, Hawk, Heron
I: Iguana | Impala, Ibis
J: Jaguar, Jellyfish | Jackal, Jay
K: Kangaroo, Koala | Kiwi, Kingfisher, Koi
L: Lion, Leopard, Lizard, Llama, Lobster | Ladybird, Lemur, Lynx
M: Monkey, Mouse, Meerkat | Mole, Moose, Moth, Magpie, Mosquito
N: | Newt, Narwhal, Nightingale
O: Owl, Octopus, Ostrich, Otter, Orangutan | Orca
P: Penguin, Panda, Pig, Parrot, Polar bear | Puma, Peacock, Pelican, Panther, Pigeon, Porcupine
Q: | Quail, Quokka
R: Rabbit, Rhino/Rhinoceros, Rat | Raccoon, Reindeer, Robin
S: Snake, Shark, Sheep, Squirrel, Spider, Swan, Sloth | Seal, Snail, Starfish, Stingray, Sparrow, Scorpion
T: Tiger, Tortoise, Turtle, Toucan | Toad, Tarantula, Turkey
V: | Vulture, Viper
W: Whale, Wolf, Walrus, Wombat | Woodpecker, Worm, Wasp
Y: | Yak
Z: Zebra
`},
{
  id: 'fruit-veg', name: 'Fruit and veg', rule: 'Any fruit or vegetable',
  data: `
A: Apple, Apricot, Avocado, Asparagus, Aubergine | Artichoke
B: Banana, Broccoli, Blueberry, Blackberry, Beetroot | Butternut squash, Brussels sprouts/Sprouts, Blackcurrant
C: Carrot, Cherry, Cabbage, Cauliflower, Cucumber, Coconut, Celery, Courgette | Clementine, Cranberry, Cantaloupe
D: Date | Damson, Dragon fruit
E: | Elderberry, Endive
F: Fig | Fennel
G: Grape, Grapefruit, Garlic | Gooseberry, Guava, Ginger
H: | Honeydew melon/Honeydew, Horseradish
K: Kiwi, Kale | Kumquat
L: Lemon, Lime, Lettuce, Leek | Lychee
M: Mango, Melon, Mushroom | Mandarin
N: | Nectarine
O: Orange, Onion, Olive | Okra
P: Pear, Peach, Pineapple, Plum, Potato, Pepper, Peas/Pea | Parsnip, Pomegranate, Papaya, Pumpkin, Passion fruit
Q: | Quince
R: Raspberry, Radish | Rhubarb, Redcurrant
S: Strawberry, Spinach, Sweetcorn, Satsuma | Swede, Sweet potato, Spring onion, Shallot
T: Tomato, Tangerine | Turnip
U: | Ugli fruit
W: Watermelon | Watercress
Y: | Yam
Z: | Zucchini
`},
{
  id: 'foods', name: 'Foods and dishes', rule: 'Any food or dish',
  data: `
A: Apple pie, Apple crumble | Arancini, Arctic roll
B: Burger, Burrito, Bagel, Baked beans, Brownie, Bacon, Bread | Bolognese, Biryani, Bruschetta, Black pudding
C: Curry, Chips, Cheesecake, Crisps, Croissant, Chilli con carne/Chilli, Cottage pie, Cheese | Carbonara, Coleslaw, Crumpet, Cornish pasty
D: Doughnut/Donut | Dumplings, Dim sum
E: | Eggs Benedict, Enchiladas, Eton mess
F: Fish and chips, Fajitas, Fry-up/Full English | Falafel, Fish fingers
G: | Goulash, Gnocchi, Gravy
H: Hot dog, Hamburger | Hummus, Hash browns, Hotpot
I: Ice cream
J: Jacket potato | Jelly, Jambalaya
K: Kebab | Korma, Kedgeree
L: Lasagne/Lasagna | Lamb chops
M: Macaroni cheese/Mac and cheese, Muffin, Meatballs | Moussaka
N: Nachos, Noodles
O: Omelette | Onion rings
P: Pizza, Pasta, Pancakes, Pie | Paella, Pad thai, Porridge
Q: | Quiche
R: Roast dinner, Risotto | Ramen, Rice pudding
S: Sandwich, Sushi, Spaghetti, Sausage roll, Shepherd's pie, Scone, Soup | Samosa, Scotch egg, Steak
T: Tacos, Toast, Trifle, Toad in the hole | Tiramisu, Tikka masala
W: Waffles | Welsh rarebit
Y: Yorkshire pudding
`},
{
  id: 'drinks', name: 'Drinks and cocktails', rule: 'Any drink, brand or cocktail',
  data: `
A: Apple juice | Aperol Spritz, Absinthe, Amaretto
B: Beer, Brandy | Bloody Mary, Bellini, Bourbon, Baileys
C: Coffee, Coca-Cola/Coke, Cider, Champagne, Cappuccino | Cosmopolitan, Cava, Cola
D: | Daiquiri, Dr Pepper
E: Espresso | Eggnog, Espresso martini
F: Fanta | Frappe
G: Gin, Gin and tonic | Guinness, Ginger beer
H: Hot chocolate
I: Iced tea | Irish coffee, Irn-Bru/Irn Bru
J: | Jagerbomb, Jagermeister
K: | Kombucha
L: Lemonade, Latte, Lager | Lucozade
M: Milk, Mojito, Margarita, Martini, Milkshake | Mimosa
N: | Negroni
O: Orange juice
P: Pepsi, Prosecco, Pina colada | Port
R: Rum, Red wine | Ribena, Red Bull
S: Smoothie, Sprite, Sangria | Sherry
T: Tea, Tequila
V: Vodka
W: Water, Wine, Whisky/Whiskey
`},
{
  id: 'sweets', name: 'Chocolate bars and sweets', rule: 'UK chocolate bars and sweets',
  data: `
A: Aero | After Eight
B: Bounty, Buttons | Boost, Blue Riband
C: Crunchie, Curly Wurly | Chomp, Caramac, Creme Egg
D: Dairy Milk, Double Decker | Drifter, Dime
F: Flake, Freddo, Fudge | Fruit Pastilles, Fruit Gums, Ferrero Rocher
G: Galaxy | Gummy bears
H: Haribo | Hershey's
J: Jelly Babies, Jelly Beans
K: KitKat, Kinder Bueno | Kinder Surprise
L: Lion Bar | Lindt, Love Hearts
M: Mars, Milky Way, Maltesers, M&Ms, Milkybar | Minstrels, Munchies
P: Picnic, Polo | Percy Pig, Parma Violets
R: Rolo, Revels | Refreshers
S: Snickers, Skittles, Starburst, Smarties | Sherbet Lemons, Star Bar
T: Twix, Toblerone, Turkish Delight | Toffee, Tic Tac
W: Wispa, Wine Gums | Walnut Whip, Werther's Original
Y: Yorkie
`},
{
  id: 'kitchen', name: 'Things in a kitchen', rule: 'Anything you would find in a kitchen',
  data: `
A: Apron | Aga
B: Bin, Bowl, Blender, Baking tray | Bread bin, Bottle opener, Butter dish
C: Cooker, Cup, Colander, Chopping board, Cupboard | Corkscrew, Cutlery, Coffee machine
D: Dishwasher | Dish rack, Dishcloth
E: | Egg cup, Extractor fan
F: Fridge, Freezer, Fork, Frying pan | Funnel
G: Grater, Glass | Grill
H: Hob
I: | Ice cube tray
J: Jug | Jar
K: Kettle, Knife
L: Ladle | Lunchbox
M: Microwave, Mug | Mixer
N: | Napkin
O: Oven | Oven gloves
P: Pan, Plate, Peeler | Pepper grinder
R: Rolling pin
S: Sink, Spoon, Saucepan, Spatula, Sieve | Scales, Salt shaker
T: Toaster, Tap, Tea towel, Teapot | Tin opener, Tongs, Tupperware
W: Whisk, Wok | Washing machine, Washing-up liquid
`},
{
  id: 'clothes', name: 'Clothing and accessories', rule: 'Things you wear',
  data: `
A: Anorak
B: Belt, Boots, Bra, Blazer, Beanie, Bracelet | Bikini, Bow tie, Blouse, Bandana
C: Coat, Cap, Cardigan | Crop top, Cufflinks
D: Dress, Dressing gown | Dungarees
E: Earrings
F: Flip-flops, Fleece
G: Gloves, Glasses | Gilet
H: Hat, Hoodie, Heels | Headband, Handbag
J: Jeans, Jumper, Jacket
K: Kilt
L: Leggings
M: | Mittens
N: Necklace | Nightie
O: Overalls
P: Pyjamas, Polo shirt | Poncho, Parka
R: Ring | Raincoat
S: Shirt, Shoes, Socks, Scarf, Shorts, Skirt, Slippers, Sandals, Sunglasses, Suit | Sweatshirt, Swimsuit
T: T-shirt/Tshirt, Tie, Trainers, Trousers, Tracksuit | Tights
U: Underwear | Umbrella
V: Vest
W: Watch, Wellies/Wellington boots | Waistcoat
`},
{
  id: 'brands', name: 'Brands and companies', rule: 'Any brand or company',
  data: `
A: Apple, Amazon, Adidas, Asda, Argos, Aldi | Airbnb
B: Burger King, Boots, BBC, Barclays | Burberry, B&Q
C: Coca-Cola, Costa, Converse | Cadbury, Chanel
D: Disney, Dyson, Domino's | Deliveroo
E: eBay, EasyJet | EE, Expedia
F: Facebook, Ford, FedEx
G: Google, Gucci, Greggs | Gap
H: Heinz, Honda, H&M, HSBC
I: IKEA, Instagram, Iceland | Intel
J: John Lewis, JD Sports
K: KFC, Kellogg's
L: Lego, Lidl, Lloyds
M: McDonald's, Microsoft, Marks & Spencer/M&S
N: Nike, Netflix, Nintendo, Nando's
O: | Ocado
P: Pepsi, PlayStation, Primark, Puma, Pizza Hut
R: Ryanair, Red Bull, Rolex
S: Samsung, Sony, Starbucks, Subway, Sainsbury's, Spotify
T: Tesco, Tesla, TikTok, Toyota
U: Uber
V: Vodafone, Virgin
W: Walmart, Waitrose | WhatsApp
Y: YouTube
Z: Zara
`},
{
  id: 'body', name: 'Body parts', rule: 'Any part of the human body',
  data: `
A: Arm, Ankle | Armpit, Abdomen
B: Back, Bone, Brain, Bottom | Bladder
C: Chin, Cheek, Chest | Calf
E: Ear, Elbow, Eye, Eyebrow | Eyelash
F: Foot, Finger, Face | Forehead
G: | Gums
H: Hand, Head, Heart, Hip, Hair | Heel
J: | Jaw
K: Knee, Kidney | Knuckle
L: Leg, Lip, Lung, Liver
M: Mouth | Muscle
N: Nose, Neck, Nail | Nostril
S: Shoulder, Stomach, Skin, Skull | Spine
T: Toe, Thumb, Tongue, Tooth/Teeth, Thigh | Throat
W: Wrist, Waist
`},
];
