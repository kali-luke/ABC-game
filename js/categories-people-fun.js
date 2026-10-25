// Category lists, part 2: people, entertainment and sport.
// Same format as part 1. For "people" categories the surname alone also counts
// (Kevin De Bruyne can be typed as "De Bruyne"), and people are filed under their surname.

export const PEOPLE_FUN = [
{
  id: 'footballers', name: 'Footballers', rule: 'By surname: Ronaldo is R', people: true,
  data: `
A: Sergio Aguero, Trent Alexander-Arnold, Dele Alli, Mikel Arteta, Alisson | Jordi Alba, Andrey Arshavin, Xabi Alonso, Tony Adams
B: Gareth Bale, David Beckham, Jude Bellingham, Karim Benzema, Dennis Bergkamp, Gianluigi Buffon | Sergio Busquets, Leonardo Bonucci
C: Sol Campbell, Andy Carroll, Peter Crouch, Ashley Cole, Cafu, Petr Cech | Philippe Coutinho, Eric Cantona, Thibaut Courtois, Casemiro
D: Kevin De Bruyne, Didier Drogba, Jermain Defoe | Ousmane Dembele, Edin Dzeko, Kenny Dalglish, Paulo Dybala
E: Christian Eriksen, Samuel Eto'o | Patrice Evra
F: Phil Foden, Bruno Fernandes, Rio Ferdinand, Cesc Fabregas, Robbie Fowler | Luis Figo, Roberto Firmino, Fabinho
G: Steven Gerrard, Jack Grealish, Ryan Giggs, Antoine Griezmann, Paul Gascoigne/Gazza | Ilkay Gundogan, Conor Gallagher, Bruno Guimaraes
H: Erling Haaland, Thierry Henry, Eden Hazard, Joe Hart, Jordan Henderson | Mark Hughes, Emile Heskey
I: Andres Iniesta, Zlatan Ibrahimovic/Zlatan | Ciro Immobile, Alexander Isak
J: Gabriel Jesus, Diogo Jota | Jorginho, Raul Jimenez
K: Harry Kane, N'Golo Kante, Roy Keane, Kevin Keegan, Kaka | Jurgen Klinsmann, Toni Kroos, Joshua Kimmich
L: Frank Lampard, Robert Lewandowski, Gary Lineker, Romelu Lukaku, Hugo Lloris | Jesse Lingard, Rafael Leao
M: Lionel Messi, Kylian Mbappe, Sadio Mane, Luka Modric, Harry Maguire, Paolo Maldini, Diego Maradona, Mason Mount | Thomas Muller, Alexis Mac Allister, Gabriel Martinelli
N: Neymar, Gary Neville, Manuel Neuer | Pavel Nedved, Darwin Nunez
O: Michael Owen, Martin Odegaard, Mesut Ozil | Divock Origi, Jan Oblak
P: Pele, Cole Palmer, Paul Pogba, Jordan Pickford, Andrea Pirlo, Stuart Pearce | Pedri, Robert Pires
Q: | Ricardo Quaresma
R: Cristiano Ronaldo, Wayne Rooney, Marcus Rashford, Declan Rice, Ronaldinho, Sergio Ramos, Arjen Robben, Andy Robertson | Franck Ribery, Rodri, Raul
S: Mohamed Salah/Mo Salah, Bukayo Saka, Alan Shearer, Paul Scholes, Raheem Sterling, Luis Suarez, Son Heung-min/Son, John Stones, Peter Schmeichel | Kasper Schmeichel, Daniel Sturridge, Clarence Seedorf
T: John Terry, Fernando Torres, Kieran Trippier, Francesco Totti, Carlos Tevez, Yaya Toure | Ferran Torres
V: Virgil van Dijk, Jamie Vardy, Robin van Persie, Patrick Vieira, Nemanja Vidic, Vinicius Junior/Vinicius/Vini Jr | Federico Valverde, Arturo Vidal
W: Kyle Walker, Theo Walcott, Danny Welbeck, Jack Wilshere, Ian Wright, Ollie Watkins | Chris Wood
X: | Xavi, Granit Xhaka
Y: Ashley Young, Dwight Yorke | Lev Yashin
Z: Zinedine Zidane, Wilfried Zaha, Gianfranco Zola | Martin Zubimendi
`},
{
  id: 'actors', name: 'Actors and actresses', rule: 'By surname: Tom Cruise is C', people: true,
  data: `
A: Ben Affleck, Jennifer Aniston, Rowan Atkinson, Gillian Anderson | Casey Affleck, Pamela Anderson, Woody Allen
B: Sandra Bullock, Christian Bale, Halle Berry, Orlando Bloom, Emily Blunt, Pierce Brosnan, Javier Bardem | Jim Broadbent, Jack Black, Marlon Brando, Kenneth Branagh
C: Tom Cruise, George Clooney, Jim Carrey, Daniel Craig, Benedict Cumberbatch, Sean Connery, Bradley Cooper, Penelope Cruz, Michael Caine, Olivia Colman, Timothee Chalamet | Steve Carell, Jessica Chastain, Nicolas Cage, Kevin Costner
D: Johnny Depp, Leonardo DiCaprio, Matt Damon, Judi Dench, Robert De Niro, Danny DeVito, Cameron Diaz, Robert Downey Jr/Downey, Vin Diesel | Adam Driver, Danny Dyer, Viola Davis, Willem Dafoe
E: Clint Eastwood, Idris Elba, Zac Efron | Emilio Estevez, Jesse Eisenberg
F: Harrison Ford, Morgan Freeman, Colin Firth, Will Ferrell, Jodie Foster | Michael Fassbender, Martin Freeman, Megan Fox
G: Ryan Gosling, Mel Gibson, Hugh Grant, Whoopi Goldberg, Andrew Garfield | Jake Gyllenhaal, Cary Grant, Jeff Goldblum, Domhnall Gleeson
H: Tom Hanks, Anne Hathaway, Anthony Hopkins, Tom Hardy, Kevin Hart, Dustin Hoffman, Chris Hemsworth, Tom Holland, Audrey Hepburn | Woody Harrelson, Salma Hayek, Ethan Hawke
I: | Jeremy Irons, Oscar Isaac
J: Scarlett Johansson, Dwayne Johnson/The Rock, Hugh Jackman, Samuel L Jackson/Samuel Jackson, Angelina Jolie | Michael B Jordan, Felicity Jones
K: Keira Knightley, Nicole Kidman, Ben Kingsley, Mila Kunis | Diane Keaton, Michael Keaton, Grace Kelly, Val Kilmer
L: Jennifer Lawrence, Jude Law, Heath Ledger, Blake Lively | Jared Leto, Lindsay Lohan, Jennifer Lopez
M: Eddie Murphy, Bill Murray, Ewan McGregor, Helen Mirren, Ian McKellen, Matthew McConaughey, Cillian Murphy, Rami Malek | Steve Martin, Mads Mikkelsen, Marilyn Monroe, Rachel McAdams, James McAvoy
N: Liam Neeson, Jack Nicholson, Bill Nighy, Paul Newman | Edward Norton
O: Gary Oldman | Sandra Oh, Elizabeth Olsen, Clive Owen
P: Brad Pitt, Al Pacino, Chris Pratt, Natalie Portman, Joaquin Phoenix, Robert Pattinson, Simon Pegg, Florence Pugh | Sarah Jessica Parker, Dev Patel, Michelle Pfeiffer
Q: | Dennis Quaid, Randy Quaid
R: Keanu Reeves, Julia Roberts, Margot Robbie, Ryan Reynolds, Daniel Radcliffe, Eddie Redmayne, Alan Rickman | Saoirse Ronan, Mark Ruffalo, Daisy Ridley, Mickey Rourke
S: Will Smith, Meryl Streep, Ben Stiller, Arnold Schwarzenegger, Sylvester Stallone, Emma Stone, Kristen Stewart, Adam Sandler, Jason Statham, Maggie Smith | Patrick Stewart, Steven Seagal, Charlie Sheen, Martin Sheen
T: Emma Thompson, Charlize Theron, Uma Thurman, John Travolta | Stanley Tucci, Chris Tucker
U: | Peter Ustinov
V: Jean-Claude Van Damme/Van Damme | Vince Vaughn, Dick Van Dyke
W: Denzel Washington, Kate Winslet, Robin Williams, Bruce Willis, Emma Watson, Mark Wahlberg, Owen Wilson, Rebel Wilson, Reese Witherspoon | Christoph Waltz, Sigourney Weaver, Naomi Watts
Y: | Michelle Yeoh
Z: Zendaya, Catherine Zeta-Jones, Renee Zellweger
`},
{
  id: 'music', name: 'Musicians and bands', rule: "Ignore 'The'. Solo artists by surname: Ed Sheeran is S", people: true,
  data: `
A: ABBA, Adele, Arctic Monkeys, Aerosmith, AC/DC, Christina Aguilera, Lily Allen | Avicii, Aqua, Atomic Kitten
B: The Beatles, Beyonce, Blur, Bon Jovi, Busted, Blondie, Justin Bieber, David Bowie, Backstreet Boys, Bee Gees, Michael Buble, James Blunt | Black Eyed Peas, Bastille, Bananarama, Boyzone
C: Coldplay, Phil Collins, Mariah Carey, Eric Clapton, The Clash, The Cure, Johnny Cash, Miley Cyrus, Sabrina Carpenter, Cher, Lewis Capaldi | Kelly Clarkson, Chic, Chvrches
D: Drake, Daft Punk, Duran Duran, Craig David, Lana Del Rey, Celine Dion, Bob Dylan, Destiny's Child | Depeche Mode, The Darkness, Dire Straits
E: Eminem, Billie Eilish, Eagles/The Eagles | Elbow, Missy Elliott, Gloria Estefan, Everything Everything
F: Fleetwood Mac, Foo Fighters, Aretha Franklin, Florence and the Machine | Franz Ferdinand, Fall Out Boy, Fatboy Slim
G: Green Day, Ariana Grande, Lady Gaga/Gaga, Gorillaz, Girls Aloud, Ellie Goulding, Guns N' Roses | Genesis, Selena Gomez, Goo Goo Dolls
H: Whitney Houston, Jimi Hendrix, Calvin Harris | Hozier, Hanson, Hear'Say
I: Iron Maiden, Imagine Dragons | Billy Idol, Enrique Iglesias, INXS
J: Michael Jackson, Elton John, Jay-Z, Billy Joel, Tom Jones, Jamiroquai | Janet Jackson, Jonas Brothers, Journey, Jessie J
K: The Killers, Kings of Leon, Kiss, Alicia Keys, Keane, Kaiser Chiefs | Kasabian, The Kooks, Kano
L: Led Zeppelin, Linkin Park, Little Mix, Dua Lipa, John Lennon, Kendrick Lamar | Lizzo, Lorde
M: Madonna, Metallica, Muse, Bruno Mars, Kylie Minogue, George Michael, Bob Marley, Paul McCartney, Maroon 5, Madness | Shawn Mendes, Nicki Minaj, Freddie Mercury, Olly Murs, McFly
N: Nirvana, Nickelback | Willie Nelson, New Order, Noah and the Whale
O: Oasis, One Direction, Ozzy Osbourne | Roy Orbison, Frank Ocean, OutKast
P: Pink Floyd, Prince, Elvis Presley, Katy Perry, Dolly Parton, Pink, The Police, Pet Shop Boys | Pulp, The Prodigy, Paramore, Pearl Jam
Q: Queen | Queens of the Stone Age
R: Radiohead, The Rolling Stones, Rihanna, Red Hot Chili Peppers, Olivia Rodrigo | REM/R.E.M., Lionel Richie, Ramones, Rag'n'Bone Man
S: Ed Sheeran, Taylor Swift, Spice Girls, Harry Styles, Britney Spears, Stormzy, Shakira, Sam Smith, Bruce Springsteen, Frank Sinatra, Snow Patrol, Sugababes | Stereophonics, Slipknot, Sex Pistols, Sia, The Stone Roses, The Smiths, Steps, S Club 7
T: Take That, Justin Timberlake, Tina Turner | Travis, Tame Impala, Meghan Trainor
U: U2, UB40, Usher
V: | Luther Vandross, Vengaboys, Van Halen, The Vamps
W: Kanye West, Robbie Williams, The Who, Amy Winehouse, Westlife, Stevie Wonder, The Weeknd, Wham | Pharrell Williams, The White Stripes
X: | XTC, The xx
Y: Neil Young | Yes, Yeah Yeah Yeahs
Z: | ZZ Top, Zayn, Hans Zimmer
`},
{
  id: 'boys', name: "Boys' names", rule: 'Any first name',
  data: `
A: Adam, Alex, Andrew, Aaron, Alfie, Archie, Arthur | Alan, Albert, Anthony, Ashley, Austin
B: Ben, Billy, Bob, Brian, Bradley | Barry, Bruce, Bobby, Benjamin
C: Charlie, Chris, Callum, Connor, Craig | Cameron, Carl, Colin, Christopher
D: Daniel, David, Dylan, Dan, Dean | Darren, Dominic, Douglas
E: Ethan, Edward, Elliot, Eddie | Eric, Ezra, Elijah
F: Freddie, Frank, Finn, Fred | Felix, Frankie
G: George, Gary, Graham, Greg | Gavin, Gordon
H: Harry, Henry, Harvey, Hugo | Harrison, Howard
I: Isaac, Ian | Ivan, Isaiah
J: Jack, James, Jake, Joe, John, Jacob, Josh | Jamie, Jason, Joseph
K: Kevin, Kyle, Kieran | Keith, Kai
L: Luke, Leo, Liam, Lewis, Louis | Lee, Logan, Lucas
M: Michael, Matthew, Mark, Max, Mason | Martin, Mohammed, Muhammad
N: Noah, Nathan, Nick, Neil | Nigel, Niall
O: Oliver, Oscar, Owen, Ollie | Oakley
P: Peter, Paul, Patrick, Phil | Philip
Q: | Quentin, Quinn
R: Ryan, Robert, Richard, Reece, Rory | Ronnie, Ross
S: Sam, Steven, Simon, Sean, Scott | Stuart, Stephen, Sebastian
T: Tom, Thomas, Tyler, Theo, Tony | Toby, Terry, Tommy
U: | Umar, Usman
V: Victor, Vincent
W: William, Will, Wayne | Warren
X: | Xavier
Y: | Yusuf
Z: Zach, Zak, Zachary
`},
{
  id: 'girls', name: "Girls' names", rule: 'Any first name',
  data: `
A: Amy, Amelia, Alice, Anna, Ava, Abigail | Amber, Aisha, Alexandra
B: Bella, Beth, Becky, Bethany | Bonnie, Brooke
C: Chloe, Charlotte, Claire, Caitlin | Carly, Cara, Catherine
D: Daisy, Danielle, Diana, Debbie | Darcy
E: Emma, Emily, Ella, Ellie, Eve, Erin | Elizabeth, Eleanor, Evie
F: Freya, Florence, Faye | Fiona
G: Grace, Georgia, Gemma | Gabriella
H: Hannah, Holly, Harriet, Helen | Hayley, Heidi
I: Isla, Isabella, Isabelle, Imogen, Ivy
J: Jessica, Jasmine, Jade, Julia, Jenny | Jennifer, Joanne
K: Katie, Kate, Kelly, Karen | Kayla, Keira
L: Lucy, Lily, Laura, Lauren, Leah | Lola, Louise
M: Mia, Megan, Molly, Mary, Millie | Maisie, Martha
N: Natalie, Nicole, Nina, Naomi | Nancy
O: Olivia, Orla | Ophelia
P: Poppy, Phoebe, Paige, Pippa
Q: | Queenie
R: Ruby, Rachel, Rebecca, Rosie, Rose | Rachael
S: Sophie, Sarah, Scarlett, Sienna, Sophia | Stephanie, Summer
T: Tilly, Tia, Tracey, Tina | Taylor
U: | Una, Ursula
V: Victoria, Violet | Vanessa
W: Willow, Wendy
X: | Xena
Y: Yasmin
Z: Zoe, Zara
`},
{
  id: 'jobs', name: 'Jobs and occupations', rule: 'Any job',
  data: `
A: Accountant, Actor, Architect, Artist, Astronaut | Author, Air hostess
B: Builder, Baker, Barber, Banker, Butcher | Bus driver, Bricklayer, Barista, Bartender
C: Chef, Carpenter, Cleaner, Cashier, Coach | Cook, Comedian
D: Doctor, Dentist, Driver, Designer | Dancer, Detective
E: Electrician, Engineer, Estate agent | Editor
F: Firefighter, Farmer, Florist | Fireman, Fisherman
G: Gardener | Graphic designer
H: Hairdresser | Hygienist
I: | Interpreter, Illustrator, Inspector
J: Journalist, Judge, Joiner | Jockey
K: | Kitchen porter
L: Lawyer, Librarian, Lifeguard, Lecturer
M: Mechanic, Musician, Midwife, Model | Manager
N: Nurse, Nanny
O: Optician
P: Pilot, Police officer, Plumber, Painter, Postman, Pharmacist, Photographer, Paramedic | Personal trainer, Physiotherapist, Porter
R: Receptionist, Reporter
S: Solicitor, Scientist, Soldier, Surgeon, Singer, Secretary | Shop assistant
T: Teacher, Taxi driver, Tailor | Translator, Train driver
U: | Undertaker
V: Vet
W: Waiter, Waitress, Writer
Y: | YouTuber
Z: Zookeeper
`},
{
  id: 'films', name: 'Films', rule: "Ignore 'The': The Matrix is M",
  data: `
A: Avatar, Aladdin, Alien, Avengers, Anchorman, Armageddon | Amelie, Apocalypse Now, Arrival
B: Batman, Barbie, Back to the Future, Braveheart, Bambi | Beauty and the Beast, Bridesmaids
C: Cars, Casino Royale, Cinderella, Coco | Cast Away, Clueless, Chicago
D: Die Hard, Dune, Deadpool, Dirty Dancing, Dumbo
E: ET/E.T., Elf, Encanto
F: Frozen, Forrest Gump, Finding Nemo, Fight Club, The Fast and the Furious/Fast and Furious
G: Gladiator, Grease, Ghostbusters, The Godfather, Gremlins, Goodfellas
H: Home Alone, Hook, Hercules, Happy Gilmore, The Hangover | Hairspray
I: Inception, Interstellar, Inside Out, Iron Man, Independence Day, The Incredibles
J: Jaws, Jurassic Park, Joker, Jumanji, John Wick
K: King Kong, Kill Bill, The Karate Kid
L: The Lion King, Love Actually, The Lord of the Rings, La La Land
M: Mean Girls, Moana, The Matrix, Mamma Mia, Mrs Doubtfire, Mary Poppins, Minions
N: Notting Hill, The Notebook
O: Oppenheimer, Ocean's Eleven
P: Pulp Fiction, Psycho, Predator, Paddington, Pretty Woman, Pinocchio
Q: | Quantum of Solace
R: Rocky, Ratatouille, Rambo | RoboCop
S: Shrek, Star Wars, Superman, Scream, Skyfall, Spider-Man/Spiderman, The Shawshank Redemption, Snatch
T: Titanic, Toy Story, Top Gun, The Terminator/Terminator, Tangled, Taken
U: Up
V: Venom
W: Wall-E, Wicked, Wonka, The Wizard of Oz
X: X-Men
Y: | Yesterday
Z: Zootropolis/Zootopia
`},
{
  id: 'games', name: 'Video games', rule: "Ignore 'The': The Last of Us is L",
  data: `
A: Animal Crossing, Assassin's Creed, Among Us, Apex Legends | Alan Wake
B: Baldur's Gate, Bioshock, Borderlands, Battlefield | Bloodborne
C: Call of Duty/COD, Crash Bandicoot, Candy Crush, Cyberpunk 2077/Cyberpunk | Counter-Strike
D: Doom, Diablo, Donkey Kong, Dark Souls | Destiny, Dragon Age
E: Elden Ring, The Elder Scrolls
F: FIFA, Fortnite, Final Fantasy, Fallout, Forza | Far Cry
G: Grand Theft Auto/GTA, God of War, Gears of War | Ghost of Tsushima
H: Halo, Hitman, Hogwarts Legacy | Hollow Knight, Hades
I: | Inside
J: Just Dance
K: Kingdom Hearts | Kirby
L: The Legend of Zelda, The Last of Us, League of Legends | Lemmings
M: Minecraft, Mario Kart, Metal Gear Solid, Mortal Kombat, Mass Effect
N: Need for Speed
O: Overwatch
P: Pokemon, Pac-Man/Pacman, Portal
Q: | Quake
R: Red Dead Redemption, Resident Evil, Roblox, Rocket League
S: Skyrim, Sonic the Hedgehog/Sonic, Super Mario Bros/Super Mario, Street Fighter, The Sims, Spider-Man, Stardew Valley
T: Tetris, Tomb Raider, Tekken
U: Uncharted
W: The Witcher, World of Warcraft, Wii Sports
X: | Xenoblade Chronicles
Y: | Yoshi's Island
Z: | Zelda, Zoo Tycoon
`},
{
  id: 'cartoons', name: 'Cartoon characters', rule: 'By first name: Bart Simpson is B',
  data: `
A: Ariel, Aladdin | Astro Boy, Arthur
B: Bart Simpson/Bart, Bugs Bunny, Bambi, Baloo, Buzz Lightyear, Bob the Builder | Betty Boop
C: Cinderella, Casper, Charlie Brown
D: Donald Duck, Daffy Duck, Dora the Explorer/Dora, Dumbo
E: Elsa, Eeyore, Elmer Fudd
F: Fred Flintstone, Fireman Sam
G: Goofy, Garfield, Gru
H: Homer Simpson/Homer, Hello Kitty
J: Jerry | Jessie
L: Lisa Simpson/Lisa, Lightning McQueen
M: Mickey Mouse, Minnie Mouse, Marge Simpson/Marge, Maggie Simpson/Maggie, Moana, Mulan
N: Nemo
O: Olaf | Oswald
P: Popeye, Peter Griffin, Pikachu, Peppa Pig, Pluto, Patrick Star, Pink Panther, Pocahontas, Porky Pig
R: Road Runner, Roger Rabbit, Rapunzel
S: SpongeBob/SpongeBob SquarePants, Scooby-Doo, Shrek, Simba, Snoopy, Sylvester, Stitch, Sonic
T: Tom, Tweety, Tigger, Tintin, Taz
U: | Ursula
W: Winnie the Pooh/Pooh, Woody, Wile E Coyote, Wallace | Woody Woodpecker
Y: Yogi Bear
Z: | Zazu
`},
{
  id: 'disney-films', name: 'Disney films', rule: "Disney and Pixar. Ignore 'The': The Lion King is L",
  data: `
A: Aladdin, Alice in Wonderland, The Aristocats, Atlantis/Atlantis The Lost Empire
B: Bambi, Beauty and the Beast, Big Hero 6, Bolt, Brave, A Bug's Life/Bugs Life, Brother Bear | Bedknobs and Broomsticks
C: Cinderella, Cars, Coco, Cruella | Chicken Little, Christopher Robin
D: Dumbo | Dinosaur, Descendants
E: Encanto, Elemental, Enchanted | The Emperor's New Groove
F: Frozen, Finding Nemo, Finding Dory, Fantasia | Freaky Friday, The Fox and the Hound
H: Hercules, The Hunchback of Notre Dame/Hunchback | High School Musical, Home on the Range
I: Inside Out, The Incredibles/Incredibles
J: The Jungle Book/Jungle Book | James and the Giant Peach
L: The Lion King/Lion King, The Little Mermaid/Little Mermaid, Lilo & Stitch/Lilo and Stitch, Lady and the Tramp, Luca | Lightyear
M: Moana, Mulan, Monsters Inc/Monsters, Mary Poppins, Maleficent | Monsters University, Meet the Robinsons
O: Onward | Oliver & Company/Oliver and Company, Old Yeller
P: Peter Pan, Pinocchio, Pocahontas, The Princess and the Frog/Princess and the Frog, Pirates of the Caribbean | Planes
R: Ratatouille, Robin Hood, Raya and the Last Dragon/Raya, The Rescuers/Rescuers | Ralph Breaks the Internet
S: Snow White/Snow White and the Seven Dwarfs, Sleeping Beauty, Soul | The Sword in the Stone/Sword in the Stone, Strange World
T: Toy Story, Tangled, Tarzan, Turning Red | Treasure Planet, Tron
U: Up
W: Wall-E, Wreck-It Ralph, Winnie the Pooh | Wish
Z: Zootropolis/Zootopia
`},
{
  id: 'disney-characters', name: 'Disney characters', rule: 'Disney and Pixar, by first name: Mike Wazowski is M',
  data: `
A: Ariel, Aladdin, Anna, Abu, Alice | Aurora, Asha, Anger
B: Belle, Baloo, Bambi, Buzz Lightyear/Buzz, Bagheera, Baymax | Bo Peep, Bruno, Boo
C: Cinderella, Cruella de Vil/Cruella, Captain Hook | Chip, Cogsworth
D: Donald Duck/Donald, Dory, Dumbo, Daisy Duck/Daisy, Dopey | Doc, Dash
E: Elsa, Eeyore, Esmeralda | Edna Mode/Edna, EVE, Elastigirl
F: Flounder, Flynn Rider/Flynn | Figaro, Frozone
G: Goofy, Genie, Gaston, Grumpy | Gus
H: Hercules, Hades | Hamm, Happy
J: Jafar, Jasmine, Jessie, Jiminy Cricket/Jiminy | Joy
K: Kristoff | Kaa, King Louie
L: Lumiere, Lightning McQueen/Lightning | Lilo, Lady
M: Mickey Mouse/Mickey, Minnie Mouse/Minnie, Maleficent, Mufasa, Mulan, Moana, Merida, Mike Wazowski/Mike, Maui, Mushu | Mirabel, Marlin, Mater, Meeko
N: Nemo, Nala
O: Olaf
P: Pluto, Peter Pan, Pocahontas, Pinocchio, Piglet, Pumbaa | Pascal, Pua
R: Rapunzel, Rafiki, Remy | Rex, Ralph
S: Simba, Stitch, Scar, Sebastian, Sulley, Snow White, Sven | Sleepy, Sneezy
T: Tigger, Tinker Bell, Timon, Tiana, Thumper | Tramp
U: | Ursula
W: Woody, Winnie the Pooh/Pooh, Wall-E | Wendy
Y: | Yzma
`},
{
  id: 'clubs', name: 'Football clubs', rule: "Any club: Man Utd and Spurs count",
  data: `
A: Arsenal, Aston Villa, Ajax, AC Milan, Atletico Madrid
B: Barcelona/Barca, Bayern Munich, Brighton, Burnley, Bournemouth, Brentford, Benfica, Blackburn Rovers/Blackburn, Birmingham City/Birmingham, Borussia Dortmund/Dortmund | Bolton Wanderers/Bolton, Bristol City
C: Chelsea, Celtic, Crystal Palace/Palace, Cardiff City/Cardiff | Coventry City/Coventry, Charlton Athletic/Charlton
D: Derby County/Derby | Dundee
E: Everton
F: Fulham
G: | Galatasaray
H: | Hull City/Hull, Huddersfield Town/Huddersfield, Hibernian/Hibs, Hearts
I: Inter Milan/Inter, Ipswich Town/Ipswich
J: Juventus/Juve
L: Liverpool, Leeds United/Leeds, Leicester City/Leicester, Lazio
M: Manchester United/Man United/Man Utd, Manchester City/Man City, Middlesbrough, Millwall
N: Newcastle United/Newcastle, Nottingham Forest/Forest, Norwich City/Norwich, Napoli
O: | Oldham Athletic/Oldham, Oxford United
P: Paris Saint-Germain/PSG, Porto, Portsmouth, Preston North End/Preston
Q: | Queens Park Rangers/QPR
R: Real Madrid, Rangers, Roma
S: Sunderland, Southampton, Sheffield United, Sheffield Wednesday, Stoke City/Stoke | Swansea City/Swansea
T: Tottenham Hotspur/Tottenham/Spurs
V: | Valencia, Villarreal
W: West Ham United/West Ham, Wolverhampton Wanderers/Wolves, Watford, Wigan Athletic/Wigan | West Brom/West Bromwich Albion
Y: | Young Boys
`},
{
  id: 'sports', name: 'Sports', rule: 'Any sport',
  data: `
A: Athletics, Archery, American football
B: Basketball, Boxing, Badminton, Baseball, Bowling
C: Cricket, Cycling, Curling
D: Darts, Diving
F: Football, Fencing | Formula 1/Formula One/F1
G: Golf, Gymnastics
H: Hockey, Handball, Horse racing
I: Ice hockey, Ice skating
J: Judo | Javelin
K: Karate, Kickboxing
L: Lacrosse
M: MMA, Marathon | Motocross
N: Netball
P: Polo, Pool
R: Rugby, Rowing
S: Swimming, Snooker, Squash, Skiing, Surfing, Skateboarding, Sailing
T: Tennis, Table tennis, Taekwondo, Triathlon
V: Volleyball
W: Wrestling, Weightlifting, Water polo
Y: | Yoga
`},
];
