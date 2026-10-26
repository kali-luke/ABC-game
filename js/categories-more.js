// Category lists, part 3: the second batch (UK-focused; US ones are marked us: true).
// Same format as the other files. people: true = filed by surname, surname alone counts.
// Use ⁄ (fraction slash) when a name itself contains a slash, because / separates aliases.

export const MORE = [
{
  id: 'uk-shops', name: 'High street shops', rule: 'UK shops, past or present',
  data: `
A: Argos, Asda, Aldi, Ann Summers | Accessorize, Austin Reed
B: Boots, B&M, B&Q, Burton, BHS, Blockbuster, The Body Shop/Body Shop | Bonmarche, Bensons for Beds
C: Currys, Claire's, Card Factory, Clintons, Comet, Clarks, Co-op | Cotswold Outdoor, Cath Kidston, Carphone Warehouse
D: Debenhams, Dorothy Perkins, Dunelm, Dixons | DFS, Deichmann
E: Evans | Early Learning Centre, Ernest Jones
F: Foot Locker, Fat Face, Farmfoods | Fopp, Forbidden Planet
G: Game, Greggs, Gap, Games Workshop | Goldsmiths
H: H&M, HMV, Holland & Barrett/Holland and Barrett, Hobbycraft, Halfords, Hamleys, House of Fraser | Habitat, Hotel Chocolat
I: Iceland | Ikea
J: JD Sports, John Lewis, JJB Sports, Jack Wills | Jigsaw, Joules
K: Kwik Save | Karen Millen, Kurt Geiger
L: Lidl, Lush, Littlewoods | Laura Ashley, Lakeland, Ladbrokes
M: Marks & Spencer/Marks and Spencer/M&S, Morrisons, Matalan, Monsoon, Mothercare, Moss Bros | Maplin, Miss Selfridge, Majestic Wine
N: New Look, Next, Netto | Nisa
O: O2, Oasis | Office
P: Primark, Poundland, Pandora, Paperchase, Pets at Home | Peacocks, Phones 4u, Poundstretcher
R: River Island | Robert Dyas, Ryman
S: Sainsbury's, Superdrug, Sports Direct, Specsavers, Schuh, Selfridges | Savers, Superdry
T: Tesco, Topshop, Topman, TK Maxx, Toys R Us, Timpson | Thorntons, Tiger
V: Vision Express, Virgin Megastore, Vodafone
W: Waterstones, WHSmith/WH Smith/Smiths, Wilko/Wilkinson, Woolworths/Woolies, Waitrose, The Works/Works | Wallis, Warehouse
Z: Zara
`},
{
  id: 'food-chains', name: 'Restaurants and takeaways', rule: 'UK chains',
  data: `
A: ASK Italian/Ask, All Bar One | Absurd Bird
B: Burger King, Bella Italia, Byron | Beefeater, Burger & Lobster
C: Costa, Caffe Nero/Nero, Chiquito, Carluccio's | Chopstix, Coco di Mama, Creams
D: Domino's, Dishoom | Dunkin' Donuts/Dunkin
F: Five Guys, Frankie & Benny's/Frankie and Benny's, Franco Manca | Farmhouse Inns
G: Greggs, Gourmet Burger Kitchen/GBK | German Doner Kebab/GDK
H: Harvester, Hungry Horse, Hard Rock Cafe | Honest Burgers
K: KFC, Krispy Kreme | Kokoro
L: Little Chef, Leon | Las Iguanas
M: McDonald's/Maccies/Maccas, Miller & Carter | Mowgli
P: Pizza Hut, Pizza Express, Pret/Pret a Manger, Papa John's, Prezzo | Patisserie Valerie, Popeyes
S: Subway, Starbucks | Slim Chickens, Shake Shack
T: Taco Bell, Toby Carvery, TGI Fridays/TGI | Tortilla, Tim Hortons
W: Wagamama, Wetherspoons/Spoons/JD Wetherspoon, Wimpy, Wendy's | Wahaca
Y: YO! Sushi/Yo Sushi
Z: Zizzi
`},
{
  id: 'uk-tv', name: 'British TV shows', rule: "Ignore 'The': The Chase is C",
  data: `
A: The Apprentice/Apprentice, Absolutely Fabulous/Ab Fab, Antiques Roadshow | All Creatures Great and Small, Auf Wiedersehen Pet
B: Blackadder, Broadchurch, Bodyguard, Blue Peter, Benidorm, Big Brother, Blind Date, Bargain Hunt, Brookside | Black Mirror
C: Coronation Street/Corrie, Countdown, Casualty, Countryfile, The Chase/Chase, Call the Midwife | Cold Feet, Celebrity Juice
D: Doctor Who/Dr Who, Downton Abbey, Dragons' Den, Deal or No Deal, Derry Girls, Dad's Army | Dinnerladies
E: EastEnders, Emmerdale | Eggheads
F: Fawlty Towers, Friday Night Dinner, Family Fortunes, Father Ted | Fifteen to One
G: Gavin & Stacey/Gavin and Stacey, Gogglebox, The Great British Bake Off/Great British Bake Off/Bake Off, Grange Hill, Gladiators | Ghosts
H: Hollyoaks, Have I Got News for You, Happy Valley, Holby City | Hustle
I: I'm a Celebrity/I'm a Celebrity Get Me Out of Here, The Inbetweeners/Inbetweeners, The IT Crowd/IT Crowd | Inside No 9
J: | Jonathan Creek, The Jeremy Kyle Show/Jeremy Kyle
K: Keeping Up Appearances | Killing Eve, Kavanagh QC
L: Love Island, Luther, Line of Duty, Loose Women, Little Britain, Last of the Summer Wine | The League of Gentlemen/League of Gentlemen
M: Match of the Day, Mr Bean, Midsomer Murders, Mrs Brown's Boys, Mastermind | Men Behaving Badly
N: Not Going Out, Newsnight | Noel's House Party
O: Only Fools and Horses, The Office/Office, Outnumbered
P: Peaky Blinders, Peep Show, Pointless, Poldark | Phoenix Nights
Q: QI, Question Time | Queer as Folk
R: Red Dwarf, Ready Steady Cook, The Royle Family/Royle Family | Rab C Nesbitt
S: Sherlock, Strictly Come Dancing/Strictly, Skins, Shameless, Saturday Night Takeaway, Spooks | Stath Lets Flats
T: Top Gear, This Morning, Taskmaster, The Traitors/Traitors, The Two Ronnies/Two Ronnies, Teletubbies | Tipping Point
U: University Challenge | Upstart Crow
V: The Vicar of Dibley/Vicar of Dibley, The Voice/Voice
W: Who Wants to Be a Millionaire/Millionaire, Waterloo Road, Would I Lie to You | Whose Line Is It Anyway
X: The X Factor/X Factor
Y: You've Been Framed, The Young Ones/Young Ones | Yes Minister
`},
{
  id: 'presenters', name: 'TV presenters', rule: 'UK, by surname: Holly Willoughby is W', people: true,
  data: `
A: David Attenborough | Michael Aspel, Mark Austin
B: Clare Balding, Fern Britton, Cilla Black, Zoe Ball, Matt Baker | Sue Barker, Edith Bowman
C: Simon Cowell, Jeremy Clarkson, Fearne Cotton, Alan Carr, James Corden, Rylan Clark | Brian Cox
D: Declan Donnelly/Dec, Tess Daly, Alesha Dixon, Gino D'Acampo | Richard Dimbleby
E: Noel Edmonds, Chris Evans | Ben Elton
F: Bruce Forsyth, Andrew Flintoff/Freddie Flintoff, Ben Fogle | Hugh Fearnley-Whittingstall
G: Kate Garraway, Mel Giedroyc, Nick Grimshaw, Bear Grylls | Krishnan Guru-Murthy
H: Paul Hollywood, Richard Hammond, Harry Hill, Ainsley Harriott | Gloria Hunniford
J: Alex Jones, Gethin Jones | Steve Jones
K: Vernon Kay, Lorraine Kelly, Ross Kemp | Laura Kuenssberg
L: Gary Lineker, Joanna Lumley | Christine Lampard
M: Ant McPartlin/Ant, Davina McCall, Paddy McGuinness, Richard Madeley, James May, Piers Morgan | Steph McGovern
N: Graham Norton
O: Dermot O'Leary, Richard Osman, Jamie Oliver
P: Michael Parkinson, Sue Perkins, Jeremy Paxman, Andi Peters | Chris Packham
R: Jonathan Ross, Anne Robinson, Rachel Riley, Esther Rantzen | Gaby Roslin
S: Phillip Schofield, Rick Stein, Alan Sugar | Dan Snow
T: Chris Tarrant, Alan Titchmarsh, Louis Theroux
V: Carol Vorderman | Johnny Vaughan
W: Holly Willoughby, Claudia Winkleman, Emma Willis, Dan Walker, Bradley Walsh, Gok Wan, Terry Wogan | Laura Whitmore
`},
{
  id: 'comedians', name: 'Comedians', rule: 'UK, by surname: Peter Kay is K', people: true,
  data: `
A: Rowan Atkinson | Dave Allen, Clive Anderson
B: Bill Bailey, Frankie Boyle, Rob Brydon, Rob Beckett, Russell Brand, Jo Brand | Adam Buxton
C: Jimmy Carr, Alan Carr, Tommy Cooper, Billy Connolly, Steve Coogan, John Cleese, Jasper Carrott | Jack Carroll
D: Jack Dee, Les Dawson, Ken Dodd, Greg Davies, Hugh Dennis
E: Ben Elton, Harry Enfield | Adrian Edmondson
F: Micky Flanagan, Dawn French, Stephen Fry, Noel Fielding
G: Ricky Gervais | Rhod Gilbert, Ed Gamble
H: Lenny Henry, Benny Hill, Harry Hill, Russell Howard, Miranda Hart
K: Peter Kay | Nish Kumar, Russell Kane
L: Matt Lucas, Sean Lock | Stewart Lee
M: Lee Mack, Michael McIntyre, Jason Manford, Rik Mayall, Eric Morecambe, Spike Milligan, Bob Mortimer, Al Murray, David Mitchell, Stephen Merchant
N: Ross Noble, Graham Norton
O: Dara O Briain/Dara, Bill Oddie | Ardal O'Hanlon
P: Sue Perkins, Sara Pascoe | Simon Pegg
R: Vic Reeves, Romesh Ranganathan, Katherine Ryan
S: Frank Skinner, Jennifer Saunders | Meera Syal
T: Catherine Tate, Jimmy Tarbuck | Mark Thomas
W: Jack Whitehall, Victoria Wood, Ernie Wise, Josh Widdicombe, Kenneth Williams, Robert Webb, Paul Whitehouse | Mark Watson
`},
{
  id: 'managers', name: 'Football managers', rule: 'By surname: Pep Guardiola is G', people: true,
  data: `
A: Carlo Ancelotti, Mikel Arteta, Sam Allardyce, Ruben Amorim | Ron Atkinson
B: Rafa Benitez/Rafael Benitez, Steve Bruce, Matt Busby | Marcelo Bielsa
C: Antonio Conte, Fabio Capello, Brian Clough | Herbert Chapman
D: Kenny Dalglish, Sean Dyche, Didier Deschamps | Roberto De Zerbi
F: Alex Ferguson/Sir Alex Ferguson/Fergie | Hansi Flick, Trevor Francis
G: Pep Guardiola, Ruud Gullit, Steven Gerrard
H: Eddie Howe, Roy Hodgson, Glenn Hoddle | Mark Hughes
K: Jurgen Klopp, Kevin Keegan | Ronald Koeman
L: Frank Lampard, Joachim Low | Julen Lopetegui
M: Jose Mourinho, Roberto Mancini, David Moyes, Enzo Maresca
P: Mauricio Pochettino, Ange Postecoglou, Manuel Pellegrini, Tony Pulis | Alan Pardew
R: Harry Redknapp, Brendan Rodgers, Claudio Ranieri, Bobby Robson, Alf Ramsey | Ralf Rangnick
S: Gareth Southgate, Ole Gunnar Solskjaer/Ole, Arne Slot, Bill Shankly, Diego Simeone, Graeme Souness
T: Thomas Tuchel, Erik ten Hag | John Toshack
V: Terry Venables, Louis van Gaal | Andre Villas-Boas
W: Arsene Wenger, Neil Warnock | Howard Wilkinson
Z: Zinedine Zidane, Gianfranco Zola | Walter Zenga
`},
{
  id: 'sportspeople', name: 'Sports stars (not footballers)', rule: 'By surname: Andy Murray is M', people: true,
  data: `
A: Muhammad Ali, Andre Agassi, James Anderson | Fernando Alonso, Ben Ainslie
B: Usain Bolt, Boris Becker, Ian Botham, Jenson Button, Simone Biles | Tony Bellew
C: Linford Christie, Sebastian Coe, Mark Cavendish, Joe Calzaghe | Alastair Cook, Steve Cram
D: Tom Daley, Novak Djokovic, Frankie Dettori, Steve Davis
E: Jessica Ennis/Jessica Ennis-Hill, Chris Eubank | Jonathan Edwards
F: Mo Farah, Roger Federer, Nick Faldo, Andrew Flintoff, Tyson Fury | Carl Froch
G: Steffi Graf, Wayne Gretzky | Sally Gunnell
H: Lewis Hamilton, Damon Hill, Ricky Hatton, Kelly Holmes, Chris Hoy, Tim Henman, Naseem Hamed
J: Anthony Joshua, Michael Jordan, Magic Johnson, LeBron James, Michael Johnson | Martin Johnson
K: Billie Jean King, Eliud Kipchoge, Amir Khan
L: Carl Lewis, Lennox Lewis, Brian Lara, Niki Lauda
M: Andy Murray, Rory McIlroy, Nigel Mansell, Floyd Mayweather | Phil Mickelson
N: Rafael Nadal, Jack Nicklaus, Martina Navratilova
O: Ronnie O'Sullivan, Jesse Owens, Naomi Osaka
P: Michael Phelps, Adam Peaty, Kevin Pietersen, Lester Piggott, Manny Pacquiao
R: Paula Radcliffe, Steve Redgrave, Valentino Rossi, Emma Raducanu
S: Michael Schumacher, Ayrton Senna, Ben Stokes, Pete Sampras, Jackie Stewart | Mark Spitz
T: Mike Tyson, Daley Thompson, Jayne Torvill | Geraint Thomas
V: Max Verstappen, Sebastian Vettel | Jacques Villeneuve
W: Tiger Woods, Serena Williams, Venus Williams, Bradley Wiggins, Shane Warne, Jonny Wilkinson
`},
{
  id: 'authors', name: 'Authors', rule: 'By surname: Roald Dahl is D', people: true,
  data: `
A: Jane Austen, Isaac Asimov, Margaret Atwood | Martin Amis
B: Enid Blyton, Charlotte Bronte, Emily Bronte, Dan Brown, Judy Blume
C: Agatha Christie, Lewis Carroll, Lee Child, Geoffrey Chaucer, Suzanne Collins
D: Roald Dahl, Charles Dickens, Arthur Conan Doyle, Julia Donaldson | Daphne du Maurier
E: | George Eliot, Ben Elton, Bret Easton Ellis
F: Ian Fleming, Ken Follett, F Scott Fitzgerald, Helen Fielding
G: John Grisham, Neil Gaiman, William Golding | Graham Greene
H: Ernest Hemingway, Thomas Hardy, Aldous Huxley, Anthony Horowitz | Khaled Hosseini
J: E L James, James Joyce
K: Stephen King, Rudyard Kipling | Marian Keyes, Jack Kerouac
L: C S Lewis, Harper Lee | D H Lawrence
M: Michael Morpurgo, Hilary Mantel, Stephenie Meyer, A A Milne | Herman Melville
O: George Orwell | Michael Ondaatje
P: Terry Pratchett, Philip Pullman, Beatrix Potter, Edgar Allan Poe, James Patterson, Sylvia Plath
R: J K Rowling, Ian Rankin, Philip Roth | Sally Rooney
S: William Shakespeare, Mary Shelley, Zadie Smith, John Steinbeck, Danielle Steel, Dr Seuss
T: J R R Tolkien, Leo Tolstoy, Mark Twain | Sue Townsend
V: Jules Verne | Kurt Vonnegut
W: David Walliams, Oscar Wilde, Jacqueline Wilson, Virginia Woolf, H G Wells | P G Wodehouse, Evelyn Waugh
`},
{
  id: 'hp-characters', name: 'Harry Potter characters', rule: 'By first name: Draco Malfoy is D',
  data: `
A: Albus Dumbledore/Dumbledore, Arthur Weasley, Aragog | Argus Filch
B: Bellatrix Lestrange/Bellatrix, Buckbeak | Bill Weasley
C: Cedric Diggory, Cho Chang | Charlie Weasley, Crookshanks
D: Draco Malfoy/Draco, Dobby, Dudley Dursley/Dudley, Dolores Umbridge/Umbridge | Dean Thomas
F: Fred Weasley, Fluffy, Fawkes | Filius Flitwick
G: George Weasley, Ginny Weasley, Gilderoy Lockhart | Gregory Goyle, Griphook
H: Harry Potter/Harry, Hermione Granger/Hermione, Hagrid/Rubeus Hagrid, Hedwig | Horace Slughorn
K: Kingsley Shacklebolt, Kreacher | Katie Bell
L: Luna Lovegood, Lucius Malfoy, Lily Potter | Lavender Brown
M: Minerva McGonagall/McGonagall, Molly Weasley, Mad-Eye Moody/Moody, Moaning Myrtle
N: Neville Longbottom/Neville, Nagini, Nymphadora Tonks/Tonks, Nearly Headless Nick | Narcissa Malfoy
O: Oliver Wood, Ollivander | Olympe Maxime
P: Percy Weasley, Peeves, Peter Pettigrew | Petunia Dursley, Poppy Pomfrey
R: Ron Weasley/Ron, Remus Lupin/Lupin, Rita Skeeter | Rolanda Hooch
S: Severus Snape/Snape, Sirius Black/Sirius, Scabbers | Seamus Finnigan
T: Tom Riddle | Ted Tonks, Trevor
V: Vernon Dursley, Voldemort/Lord Voldemort, Viktor Krum
`},
{
  id: 'hp-things', name: 'Harry Potter things', rule: 'Spells, places, objects (not people)',
  data: `
A: Azkaban, Accio, Avada Kedavra | Alohomora
B: Butterbeer, Bertie Bott's Every Flavour Beans/Bertie Botts, Broomstick, The Burrow/Burrow | Bludger, Beauxbatons
C: Chamber of Secrets, Chocolate Frog, Cauldron | Crucio
D: Diagon Alley, Dementor, Deathly Hallows, Death Eater | Durmstrang
E: Expelliarmus, Expecto Patronum, Elder Wand
F: Firebolt, Floo Powder, Forbidden Forest | Felix Felicis
G: Gryffindor, Gringotts, Goblet of Fire, Golden Snitch | Great Hall
H: Hogwarts, Hufflepuff, Hogsmeade, Horcrux, Hogwarts Express | Honeydukes
I: Invisibility Cloak | Imperio
K: Knight Bus | Knockturn Alley
L: Leaky Cauldron, Lumos | Levicorpus
M: Muggle, Marauder's Map, Mandrake | Mirror of Erised
N: Nimbus 2000/Nimbus | Nox
O: Order of the Phoenix | Obliviate, Occlumency
P: Patronus, Platform Nine and Three-Quarters/Platform 9 3⁄4/Platform 9, Philosopher's Stone, Polyjuice Potion, Privet Drive | Portkey
Q: Quidditch, Quaffle | The Quibbler/Quibbler
R: Ravenclaw, Room of Requirement
S: Slytherin, Sorting Hat, Snitch | Squib
T: Time-Turner, Triwizard Tournament
W: Wand, Whomping Willow, Wingardium Leviosa | Weasleys' Wizard Wheezes
`},
{
  id: 'theme-parks', name: 'Theme parks and rides', rule: "Any park or ride, mostly UK. Ignore 'The'",
  data: `
A: Alton Towers | Adventure Island, Air
B: Blackpool Pleasure Beach, The Big One/Big One, Busch Gardens | Blackgang Chine
C: Chessington/Chessington World of Adventures, Colossus, Congo River Rapids | Crush
D: Drayton Manor, Disneyland, Disney World | Dreamland
E: Europa-Park/Europa Park | Efteling
F: Flamingo Land | Fantasy Island
G: Galactica | Gulliver's World, Gardaland
H: Hex | Hydro
I: Icon
L: Legoland, Lightwater Valley | Liseberg
N: Nemesis, Nemesis Inferno | Nemesis Reborn
O: Oblivion | Oakwood
P: Paultons Park/Paultons, PortAventura/Port Aventura, Peppa Pig World | Pleasurewood Hills
R: Rita | Runaway Mine Train
S: The Smiler/Smiler, Stealth, Saw/Saw The Ride, Spinball Whizzer, The Swarm/Swarm, SeaWorld, Six Flags | Storm Surge
T: Thorpe Park, Tidal Wave | Th13teen/Thirteen
U: Universal Studios/Universal
V: Valhalla | Vampire
W: The Wicker Man/Wicker Man, West Midland Safari Park | Wild Mouse
`},
{
  id: 'disney-parks', name: 'Disney World', rule: "Parks, rides and areas. Ignore 'The'", us: true,
  data: `
A: Animal Kingdom | Avatar Flight of Passage, Astro Orbiter
B: Big Thunder Mountain/Big Thunder, Buzz Lightyear Space Ranger Spin/Buzz Lightyear | Blizzard Beach
C: Cinderella Castle, California Adventure | Carousel of Progress
D: Disney Springs, Dumbo the Flying Elephant/Dumbo, Disneyland | Dinosaur
E: Epcot, Expedition Everest
F: Frozen Ever After, Fantasyland | Fastpass
G: Guardians of the Galaxy Cosmic Rewind/Cosmic Rewind, Galaxy's Edge
H: Haunted Mansion, Hollywood Studios | Hall of Presidents
I: It's a Small World/Small World
J: Jungle Cruise
K: Kilimanjaro Safaris | Kali River Rapids
M: Magic Kingdom, Main Street USA/Main Street, Mad Tea Party/Teacups, Monorail | Mickey's PhilharMagic
P: Pirates of the Caribbean, Peter Pan's Flight | PeopleMover/People Mover
R: Rock 'n' Roller Coaster/Rock n Roller Coaster, Rise of the Resistance | Remy's Ratatouille Adventure
S: Space Mountain, Splash Mountain, Seven Dwarfs Mine Train, Soarin', Slinky Dog Dash, Spaceship Earth | Star Tours
T: Tower of Terror, Test Track, Typhoon Lagoon, Toy Story Land, Tron Lightcycle Run/Tron | Tomorrowland
`},
{
  id: 'pokemon', name: 'Pokémon', rule: 'Any Pokémon',
  data: `
A: Arbok, Alakazam, Abra, Aerodactyl, Arcanine, Articuno | Aipom, Absol, Azumarill
B: Bulbasaur, Blastoise, Butterfree, Beedrill, Bellsprout | Blaziken, Bidoof, Bayleef
C: Charmander, Charizard, Charmeleon, Caterpie, Clefairy, Cubone, Chansey | Chikorita, Cyndaquil
D: Ditto, Dragonite, Diglett, Dratini, Dugtrio | Dialga, Darkrai
E: Eevee, Ekans, Electabuzz, Electrode | Espeon, Entei, Exeggcute
F: Flareon, Fearow | Feraligatr, Froakie
G: Gengar, Gyarados, Geodude, Golem, Gastly, Growlithe | Garchomp, Greninja, Gardevoir
H: Haunter, Hitmonlee, Hitmonchan, Horsea | Ho-Oh, Hoothoot
I: Ivysaur | Infernape, Igglybuff
J: Jigglypuff, Jolteon, Jynx | Jirachi
K: Kangaskhan, Koffing, Krabby, Kabuto, Kadabra | Kyogre
L: Lapras, Lugia | Lucario, Lickitung
M: Mew, Mewtwo, Magikarp, Machamp, Meowth, Magnemite, Mudkip | Metagross
N: Nidoking, Nidoqueen, Ninetales | Natu
O: Onix, Oddish | Omanyte
P: Pikachu, Psyduck, Pidgey, Ponyta, Poliwag, Pidgeotto | Piplup, Pichu
R: Raichu, Rattata, Rhydon, Rapidash | Rayquaza
S: Squirtle, Snorlax, Slowpoke, Scyther, Staryu, Seel | Sceptile, Sylveon
T: Tentacool, Togepi, Tauros | Totodile, Torchic, Treecko
V: Vulpix, Venusaur, Voltorb, Vaporeon | Vileplume
W: Wartortle, Weedle, Weezing | Wobbuffet
Z: Zapdos, Zubat | Zekrom
`},
{
  id: 'superheroes', name: 'Superheroes and villains', rule: 'Marvel and DC, by hero name: Batman is B',
  data: `
A: Aquaman, Ant-Man | Atom, Apocalypse
B: Batman, Black Panther, Black Widow, Bane, Batgirl | Beast
C: Captain America, Captain Marvel, Catwoman, Cyclops | Cyborg
D: Deadpool, Daredevil, Doctor Strange/Dr Strange, Doctor Doom/Dr Doom | Darkseid
F: The Flash/Flash | Falcon
G: Green Lantern, Green Goblin, Groot, Gamora | Galactus
H: Hulk/The Hulk/Incredible Hulk, Hawkeye, Harley Quinn | Hellboy
I: Iron Man | Iceman, Invisible Woman
J: The Joker/Joker | Jean Grey
L: Loki, Lex Luthor | Lobo
M: Magneto, Mystique | Moon Knight
P: The Penguin/Penguin, Poison Ivy, Professor X | Phoenix
R: Robin, The Riddler/Riddler | Rogue, Rocket
S: Superman, Spider-Man/Spiderman, Storm, Supergirl | Scarlet Witch
T: Thor, Thanos | Two-Face
V: Venom | Vision
W: Wonder Woman, Wolverine
`},
{
  id: 'dogs', name: 'Dog breeds', rule: 'Any breed or cross',
  data: `
A: Alsatian, Afghan Hound | Akita, Airedale Terrier/Airedale
B: Beagle, Boxer, Bulldog, Border Collie, Bichon Frise, Bloodhound | Basset Hound, Bernese Mountain Dog
C: Chihuahua, Cocker Spaniel, Collie, Cockapoo, Corgi, Cavalier King Charles Spaniel/Cavalier | Chow Chow
D: Dalmatian, Dachshund, Doberman | Dandie Dinmont
G: Great Dane, Greyhound, German Shepherd, Golden Retriever | Goldendoodle
H: Husky | Havanese
I: | Irish Setter, Irish Wolfhound
J: Jack Russell | Japanese Spitz
L: Labrador/Lab, Labradoodle, Lurcher | Lhasa Apso
M: Maltese | Mastiff
N: Newfoundland | Norfolk Terrier
P: Poodle, Pug, Pomeranian, Pit Bull/Pitbull | Pointer, Pekingese
R: Rottweiler | Rhodesian Ridgeback
S: Staffordshire Bull Terrier/Staffie/Staffy, Shih Tzu, Springer Spaniel, St Bernard/Saint Bernard, Schnauzer, Sausage dog, Sheepdog | Saluki
W: Whippet, West Highland Terrier/Westie | Weimaraner
Y: Yorkshire Terrier/Yorkie
`},
{
  id: 'flowers', name: 'Flowers and plants', rule: 'Any flower or plant',
  data: `
A: Azalea | Anemone, Aster, Allium
B: Bluebell, Buttercup, Begonia | Bird of Paradise
C: Carnation, Chrysanthemum, Cactus, Crocus, Clover | Cornflower, Camellia
D: Daisy, Daffodil, Dandelion, Dahlia | Delphinium
F: Foxglove, Fern, Forget-me-not | Freesia, Fuchsia
G: Geranium | Gardenia, Gerbera
H: Heather, Hyacinth, Hydrangea, Honeysuckle | Hibiscus
I: Iris, Ivy
L: Lily, Lavender, Lilac | Lotus
M: Marigold | Magnolia, Mimosa
O: Orchid
P: Poppy, Pansy, Primrose, Peony, Petunia
R: Rose
S: Sunflower, Snowdrop | Sweet pea
T: Tulip | Thistle
V: Violet
`},
{
  id: 'desserts', name: 'Desserts and cakes', rule: 'Any pudding, cake or sweet treat',
  data: `
A: Apple pie, Apple crumble, Arctic roll | Angel cake
B: Brownie, Banoffee pie, Black Forest gateau, Bread and butter pudding, Battenberg | Baked Alaska
C: Cheesecake, Crumble, Carrot cake, Cupcake, Custard, Chocolate cake | Creme brulee, Choux bun
D: Doughnut/Donut | Danish pastry
E: Eton mess, Eclair | Eccles cake
F: Fruit salad, Flapjack | Fondant fancy
G: Gingerbread | Gateau
I: Ice cream
J: Jelly, Jaffa Cakes | Jam roly-poly
L: Lemon meringue pie, Lemon drizzle cake | Lava cake
M: Mousse, Muffin, Macaron, Mince pie
P: Pavlova, Profiteroles, Pancakes, Panna cotta | Pecan pie
R: Rice pudding, Rocky road | Red velvet cake
S: Sticky toffee pudding, Sponge cake, Scone, Sundae, Spotted dick, Swiss roll, Sorbet | Strudel
T: Trifle, Tiramisu, Treacle tart | Tarte Tatin
V: Victoria sponge
W: Waffle
`},
{
  id: 'car-models', name: 'Car models', rule: 'Models, not makes: Corsa, not Vauxhall',
  data: `
A: Astra, Aygo | Accord
B: Beetle | Berlingo
C: Corsa, Clio, Civic, Captur | Corolla
D: Defender, Discovery | Duster
E: Escort, Evoque | Eclipse
F: Fiesta, Focus, Fabia
G: Golf | Galaxy, Giulia
I: Insignia, Ibiza | i10
J: Juke, Jazz | Jimny
K: Ka, Kuga | Kona
L: Leaf, Land Cruiser | Laguna
M: Micra, Mondeo, Mustang, Megane | Mokka
N: Nova, Navara | Niro
O: Octavia | Outlander
P: Polo, Passat, Punto, Prius, Picanto
Q: Qashqai | Q7
R: Range Rover | RAV4
S: Sierra, Sandero, Swift | Superb
T: Tiguan, Twingo, Transit | Tucson
Y: Yaris
Z: Zafira
`},
{
  id: 'vehicles', name: 'Vehicles and transport', rule: 'Anything that gets you about',
  data: `
A: Ambulance, Aeroplane | Airship
B: Bus, Bike/Bicycle, Boat, Bulldozer | Barge
C: Car, Caravan, Coach, Canoe | Cable car
D: Digger | Dinghy
F: Fire engine, Ferry | Forklift
G: | Gondola, Glider
H: Helicopter, Hovercraft, Hot air balloon
J: Jet ski, Jeep | Jet
K: Kayak
L: Lorry, Limousine/Limo
M: Motorbike/Motorcycle, Minibus | Moped
P: Plane, Police car | Pedalo
R: Rocket, Rickshaw | Raft
S: Ship, Scooter, Submarine, Skateboard | Sledge, Speedboat
T: Train, Taxi, Tractor, Tram, Truck, Tank | Tube
V: Van
`},
{
  id: 'toys', name: 'Toys and games', rule: 'Toys, board games and playground classics',
  data: `
A: Action Man | Airfix
B: Barbie, Battleship, Buckaroo | Bop It
C: Cluedo, Connect 4/Connect Four, Chess | Cabbage Patch Kids
D: Dominoes, Draughts | Downfall
E: Etch A Sketch
F: Furby, Frisbee | Fidget spinner
G: Guess Who | Game Boy
H: Hungry Hippos/Hungry Hungry Hippos, Hot Wheels
J: Jenga, Jigsaw | Jack-in-the-box
K: Kerplunk, Kite
L: Lego, Ludo
M: Monopoly, Mouse Trap, Meccano, My Little Pony
O: Operation
P: Play-Doh/Playdoh, Pictionary, Polly Pocket
R: Rubik's Cube/Rubiks Cube, Risk | Rocking horse
S: Scrabble, Snakes and Ladders, Sylvanian Families, Slinky, Stretch Armstrong | Spirograph
T: Twister, Tamagotchi, Trivial Pursuit, Teddy bear, Top Trumps
U: Uno
Y: Yo-yo/Yoyo | Yahtzee
`},
{
  id: 'house', name: 'Things in a house', rule: 'Anything except the kitchen',
  data: `
A: Armchair, Alarm clock | Attic
B: Bed, Bath, Bookcase, Blanket
C: Chair, Curtains, Carpet, Cushion, Clock | Chest of drawers
D: Door, Desk, Duvet | Doormat
F: Fireplace, Fan | Footstool
H: Hairdryer, Hoover
I: Iron | Ironing board
L: Lamp, Laptop | Lightbulb
M: Mirror, Mattress | Mop
P: Pillow, Picture frame, Plant | Plug
R: Rug, Radiator, Remote control/Remote | Radio
S: Sofa, Shower, Stairs, Settee | Shelf
T: Table, Television/TV/Telly, Toilet, Towel, Toothbrush
W: Wardrobe, Window, Washing machine | Wallpaper
`},
{
  id: 'musicals', name: 'Musicals', rule: "Stage or film musicals. Ignore 'The'",
  data: `
A: Annie, Aladdin
B: Billy Elliot, Blood Brothers, Bugsy Malone | The Book of Mormon/Book of Mormon
C: Cats, Chicago, Chitty Chitty Bang Bang | Cabaret
E: Evita
G: Grease, The Greatest Showman/Greatest Showman | Guys and Dolls
H: Hamilton, Hairspray | Hair
J: Joseph/Joseph and the Amazing Technicolor Dreamcoat, Jersey Boys | Jesus Christ Superstar
L: Les Miserables/Les Mis, The Lion King/Lion King, Legally Blonde
M: Mamma Mia, Matilda, Mary Poppins, Miss Saigon | Moulin Rouge
O: Oliver | Oklahoma
P: The Phantom of the Opera/Phantom of the Opera/Phantom | Priscilla
R: Rent, The Rocky Horror Show/Rocky Horror | Rock of Ages
S: Six, The Sound of Music/Sound of Music, Starlight Express | Singin' in the Rain, School of Rock
W: Wicked, West Side Story, We Will Rock You
`},
{
  id: 'elements', name: 'Chemical elements', rule: 'From the periodic table',
  data: `
A: Aluminium/Aluminum, Argon, Arsenic | Americium, Antimony, Astatine
B: Boron, Bromine, Barium | Beryllium, Bismuth
C: Carbon, Calcium, Copper, Chlorine | Caesium, Cobalt, Chromium
F: Fluorine | Francium, Fermium
G: Gold | Gallium, Germanium
H: Hydrogen, Helium | Hafnium
I: Iron, Iodine | Iridium, Indium
L: Lead, Lithium | Lanthanum
M: Magnesium, Mercury | Manganese
N: Nitrogen, Neon, Nickel | Neptunium
O: Oxygen | Osmium
P: Potassium, Phosphorus, Platinum, Plutonium | Polonium
R: Radium, Radon | Rubidium
S: Sodium, Silver, Sulphur/Sulfur, Silicon | Selenium
T: Tin, Titanium | Tungsten
Z: Zinc | Zirconium
`},
{
  id: 'languages', name: 'Languages', rule: 'Any language',
  data: `
A: Arabic | Afrikaans, Albanian
B: | Bengali, Bulgarian, Basque
C: Chinese, Cantonese | Croatian, Czech
D: Dutch | Danish
E: English | Estonian
F: French | Finnish
G: German, Greek, Gaelic | Gujarati
H: Hindi | Hebrew, Hungarian
I: Italian, Irish | Icelandic
K: Korean | Kurdish
L: Latin | Latvian, Lithuanian
M: Mandarin | Malay
N: Norwegian | Nepali
P: Portuguese, Polish | Punjabi
R: Russian | Romanian
S: Spanish, Swedish | Swahili
T: Turkish, Thai | Tamil
U: | Urdu, Ukrainian
W: Welsh
`},
{
  id: 'islands', name: 'Islands', rule: 'Anywhere in the world',
  data: `
A: Anglesey | Antigua, Aruba
B: Barbados, Bali | Bermuda
C: Cyprus, Crete | Corfu
G: Greenland, Guernsey | Gran Canaria
I: Ireland, Isle of Wight, Ibiza, Iceland, Isle of Man
J: Jersey, Jamaica | Java
M: Majorca/Mallorca, Malta, Madagascar, Menorca/Minorca, Mauritius | Madeira
S: Sicily, Sardinia, Skye/Isle of Skye, Sri Lanka | Shetland
T: Tenerife, Tasmania | Tahiti
`},
{
  id: 'colours', name: 'Colours', rule: 'Any colour or shade',
  data: `
A: Amber | Aqua
B: Blue, Black, Brown | Beige, Burgundy
C: Cream | Crimson, Cyan
G: Green, Grey, Gold
I: | Indigo, Ivory
L: Lilac, Lime | Lavender
M: Maroon, Magenta | Mauve
O: Orange | Olive
P: Pink, Purple | Peach
R: Red | Ruby
S: Silver | Scarlet, Salmon
T: Turquoise | Teal
`},
{
  id: 'us-states', name: 'US states', rule: 'Any of the 50 states', us: true,
  data: `
A: Alabama, Alaska, Arizona, Arkansas
C: California, Colorado, Connecticut
I: Idaho, Illinois, Indiana, Iowa
M: Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana
N: Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota
O: Ohio, Oklahoma, Oregon
W: Washington, West Virginia, Wisconsin, Wyoming
D: Delaware
F: Florida
G: Georgia
H: Hawaii
K: Kansas, Kentucky
L: Louisiana
P: Pennsylvania
R: Rhode Island
S: South Carolina, South Dakota
T: Tennessee, Texas
U: Utah
V: Vermont, Virginia
`},
];
