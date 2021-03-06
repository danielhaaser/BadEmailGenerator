let TEST_WORDS = 
{
	"categories": 
	{
		"Standard": 
		{
			"default": true,
			"adjective": ["Excellent","Chatty","Tall","Short","Big","Sweet","Small","Tiny","Little","Huge","Great","Slim", "Gigantic", "Ridiculous", "Shiny", "Gorgeous", "Pulsating", "Lumpy", "Smelly","Pro"],
			"noun": ["Haver","Taker","Holder","Eater","Wrangler","Fan","Maker","Wrecker","Smasher","Bringer","Ender","Slammer","Killer","Killa","Man","Woman","Boy","Girl","Dude","Bro","Gurl","Boi","Champ","Baby","Boyz","Child","Dawg","Idol","Chick","Aunt","Uncle","Grandpa","Grandma","Mom","Dad"],
			"postfix": ["HP","XD","HD","XP","XS","XL","XXL","4K","2000","2001","1999","5000","9000","1","2","3","4","5"]
		},
		"Names": 
		{
			"default": true,
			"adjective": [],
			"noun": ["Todd","Jeffrey","Pubert","Jim","Fred","Nancy","Susan","Shannon","Bill","Ted","Max","Kate","Cathy","Michelle","Tom","Barry","Jessica","Ashley","Amanda","Brittany","Jennifer","Sarah","Stephanie","Samantha","Elizabeth","Lauren","Nicole","Megan","Meg","Heather","Amber","Melissa","Tiffany","Danielle","Emily","Rachel","Christina","Kayla","Laura","Kimberly","Rebecca","Courtney","Katherine","Amy","Crystal","Sara","Michael","Christopher","Chris","Matthew","Matt","Joshua","Josh","David","Dave","Andrew","Drew","Daniel","Dan","Justin","James","Richard","Robert","John","Joseph","Ryan","Nicholas","Nick","William","Brandon","Anthony","Tony","Jonathan","Kevin","Kyle","Eric","Brian","Steven","Steve","Thomas","Tommy","Timothy","Adam","Jacob","Jason","Zachary","Benjamin","Ben"],
			"postfix": []
		},
		"Stoner": 
		{
			"default": true,
			"adjective": ["Dank","Purple","Green","Baked","Mexi","Cali","Dope","Stoned"],
			"noun": ["Smoke","Blunt","Dope","MaryJane","Grass","Bud","Stems","Blaze","Haze","Wax","Bowl","Bong","Pipe","OG","Schwag","THC", "Weed"],
			"postfix": ["420"]
		},
		"Sexy": 
		{
			"default": true,
			"adjective": ["Randy","Hot","Erect","Big","Moist","Limp","Hardcore","Wet","Pounding","Blacked","Black","Scissoring","AssBlasting", "Engorged", "Sexy"],
			"noun": ["69er","Puss","Thicc","Punani","Erector","Dick","Penis","Donger","Johnson","Ass","Assface","Asser","Clam","Blaster","Rammer","Rimmer","Licker","Sexer","Squirter","Grinder","Chode","Dildo","Sex","Fingerbang","Squirt","MILF","GILF","Pounder","Licker","Assblaster", "Donger"],
			"postfix": ["69"]
		},
		"Nerd": 
		{
			"default": true,
			"adjective": ["Sweaty","Giga","Mega","Lanky","Quiet","Greasy","Pimpled","Spotty"],
			"noun": ["Braces","BraceFace","AMD","4K","TXT","Flash","Winamp","Nokia","Napster","Ebaums","T9","Username","Hotmail","iPod","AOL","Cyber","ASL","Chatroom","DOS","CD","VHS","Geocities","StarTrek","Klingon","PNG","56K","JPG","1080p","WWW","Browser","Superhighway","Webz","Gigabytes","Netscape","Webportal","DnD"],
			"postfix": ["4K","2001","1999","5000","9000","42","1080p","56K"]
		},
		"Gamer": 
		{
			"default": true,
			"adjective": ["Watercooled","Overclocked","Hella"],
			"noun": ["NoScope","Xbox","PS2","Headshot","Fragger","GeForce","Radeon","GFX","Killstreak","GPU","Noob","PC","Quake", "Halo"],
			"postfix": ["1337"]
		},
		"Hacker": 
		{
			"adjective": ["1337","Ripped","Warezed","Phishing","Torrented"],
			"noun": ["h4x0r","h4x","Spammer","Sp4m","Phish","Haxzor","Warez","Torrent","Pr0n","Codez","Rip","Burner"],
			"postfix": ["1337","Y2K"]
		},
		"JDM": 
		{
			"adjective": ["AZN","Stanced","Riced","Turboed","Neon"],
			"noun": ["Boi","HotBoi","QT","Stance","Rocket","Rice","JDM","Subaru","Honda","Mazda","FourBanger","Rims","Blades","Turbo","Exhaust"],
			"postfix": ["QT","JDM"]
		},
		"Urban": 
		{
			"adjective": ["Gangster","Lean","Blinged","Hood","Black","Ghetto","Fire","Phat","Jiggy", "Lil", "Gatmasta", "Ballin", "Nasty", "Loco"],
			"noun": ["Gangster","Bling","BlingBling","Gat","Hoodrat","Hooptie","Dubs","20s","GUnit","Dogg","Fiddy","Chainz","Grillz", "Baller", "Playa", "Shawty", "Cheekz", "Masta", "Daddy", "Boss", "Baby", "Monsta"],
			"postfix": ["187"]
		},
		"Suburban": 
		{
			"adjective": ["Racist","White","Organic","Freerange","Renewable","Financial"],
			"noun": ["White","Dolphin","Bread","Fence","Corn","CuldeSac","Lawncare","401K","Finance","Lawyer","Doctor","Dentist","Laketahoe","Condo","Stocks","Bonds","Market","Zumba"],
			"postfix": ["401K"]
		},
		"Hobbies": 
		{
			"adjective": ["Surfing","Cooking","Collecting","Reading"],
			"noun": ["Kayak","Knitting","Cooking","Chef","Surfer","Stamps","Coins","Books","Collector"],
			"postfix": []
		},
		"Movies": 
		{
			"adjective": [],
			"noun": ["Matrix","Neo","Morpheus","RoyaleWithCheese","Gump","Schwarzenegger","MelGibson","JimCarrey"],
			"postfix": []
		},
		"Emo": 
		{
			"adjective": ["Suicidal","Bleeding","Crying","Sad","Dark"],
			"noun": ["Suicide","Die","Kill","Cut","Blood","Breath","Knife"],
			"postfix": []
		},
		"Catchphrases": 
		{
			"adjective": ["Sweet","Fly","Rad"],
			"noun": ["Wazzup","Doh","AsIf","TalkToHand","Booyah","MyBad","OhSnap","Props","YourMom","YoMama","Scrub","FartKnocker","Aiight","Whatever","Whoopass","Punk"],
			"postfix": []
		},
		"Music": 
		{
			"adjective": ["Linkin","Destinys"],
			"noun": ["MTV","TRL","Carson","NSync","Nickelback","Techno","Eminem","Britney","Durst","Bizkit"],
			"postfix": ["MTV","TRL"]
		},
		"Sports": 
		{
			"adjective": ["Baller","Athletic","Fast","Quick","Agile"],
			"noun": ["Hockey","Football","BBall","Soccer","Jordan","Gretzky","Pippen","Rodman","Bulls","Basketball","Champ","Champion","Player"],
			"postfix": []
		},
		"Gay": 
		{
			"adjective": ["Homo","Closeted"],
			"noun": ["Twink","Bear","Beard","Gay","Queen","Drag"],
			"postfix": []
		},
		"Christian": 
		{
			"adjective": ["Blessed","Saved","Godfearing"],
			"noun": ["Jesus","God","Pastor","Priest","Church","Savior"],
			"postfix": []
		}
	}
};

let TEST_FORMATS = 
[
	["adjective", "noun", "postfix"],
	["adjective", "noun", "noun"],
	["adjective", "noun"],
	["noun", "noun"],
	["adjective", "noun", "noun", "postfix"],
	["noun", "noun", "postfix"]
];

let EMAIL_ADDRESSES = 
[
	"@hotmail.com", "@lycos.com", "@yahoo.com", "@aol.com", "@juno.com", "@compuserve.com", "@prodigy.net", "@earthlink.net", "@mindspring.net"
];

var wordLists = {
	adjectives: [],
	nouns: [],
	postfixes: []
};

var categoryCheckboxes = [];

main();

function main()
{
	setupCategoryButtons(TEST_WORDS.categories);

	var generateButton = document.getElementById("generateButton");
	var usernameObject = document.getElementById("screenname");
	var emaildomainObject = document.getElementById("emaildomain");

	generateButton.onclick = function(e) 
	{
		var activeCategories = retrieveActiveCategories();
	  	var username = generateUsername(TEST_WORDS, TEST_FORMATS, activeCategories);
	  	var emailAddress = randomElementFromArray(EMAIL_ADDRESSES);
	  	usernameObject.innerHTML = username;
	  	emaildomainObject.innerHTML = emailAddress;
	}

	generateButton.click();

}

function setupCategoryButtons(categories)
{
	var categoryWrapper = document.getElementById("categorywrapper");

	let categoryNames = Object.keys(categories);

	categoryNames.forEach((categoryName) => 
	{
		initializeChecked = "default" in categories[categoryName]
		let categoryButton = createCategoryButton(categoryName, initializeChecked);
		categoryWrapper.appendChild(categoryButton);
	});
}

function retrieveActiveCategories()
{
	var activeCategories = [];

	categoryCheckboxes.forEach((categoryLabelNode) => 
	{
		var checkInput = categoryLabelNode.querySelector(".checkinput");
		if (checkInput.checked == true)
		{
			activeCategories = activeCategories.concat(checkInput.value);
		}
	});

	return activeCategories;
}

function createCategoryButton(categoryName, initializeChecked = false)
{
	var labelNode = document.createElement("label");
	labelNode.classList.add("category");
	labelNode.classList.add("checklabel");
	labelNode.classList.add("first");

	var labelTextNode = document.createElement("p");
	var labelText = document.createTextNode(categoryName);
	labelTextNode.appendChild(labelText);

	var inputNode = document.createElement("input");
	inputNode.classList.add("checkinput");
	inputNode.setAttribute("type", "checkbox");
	inputNode.setAttribute("value", categoryName);
	if (initializeChecked) 
	{
		inputNode.setAttribute("checked", "true");
	}

	var divNode = document.createElement("div");
	divNode.classList.add("checkstyle");
	divNode.setAttribute("value", categoryName);

	labelNode.appendChild(labelTextNode);
	labelNode.appendChild(inputNode);
	labelNode.appendChild(divNode);

	categoryCheckboxes = categoryCheckboxes.concat(labelNode);

	return labelNode;
}

function generateUsername(words, formats, activeCategories)
{
	var username = "";

	// load words using categories
	refreshWordsLists(words, activeCategories);

	// load random format to use
	format = randomElementFromArray(formats);
	console.log(format);

	format.forEach((wordType) => 
	{
		var newWord = "";

		switch(wordType)
		{
			case "adjective":
				if (wordLists.adjectives.length > 0) 
				{
					newWord = randomElementFromArray(wordLists.adjectives);
				}
				break;

			case "noun":
				if (wordLists.nouns.length > 0) 
				{
					newWord = randomElementFromArray(wordLists.nouns);
				}
				break;

			case "postfix":
				if (wordLists.postfixes.length > 0) 
				{
					newWord = randomElementFromArray(wordLists.postfixes);
				}
				break;
		}

		username = username + newWord;

	});

	return username;
}

function refreshWordsLists(words,  activeCategories)
{
	// add default words
	wordLists.adjectives = [];
	wordLists.nouns = [];
	wordLists.postfixes = [];

	activeCategories.forEach((category) => 
	{
		wordLists.adjectives = wordLists.adjectives.concat(words.categories[category].adjective);
		wordLists.nouns = wordLists.nouns.concat(words.categories[category].noun);
		wordLists.postfixes = wordLists.postfixes.concat(words.categories[category].postfix);
	});
}

function randomElementFromArray(items)
{
	var item = items[Math.floor(Math.random() * items.length)];
	return item;
}


