// This is just for debugging so I don't have to run a local web server to deal with cross origin requests

let TEST_WORDS = 
{
	"categoryNames": ["weed", "sex", "nerd", "gamer", "hacker", "jdm", "urban", "suburban", "hobbies", "movies", "emo", "catchphrases", "music", "sports", "gay", "christian"],
	"categories": 
	{
		"weed": 
		{
			"adjective": ["dank","purple","green","baked","mexi","cali","dope"],
			"noun": ["smoke","blunt","dope","maryjane","grass","bud","stems","blaze","haze","wax","bowl","bong","pipe","OG","swag","THC"],
			"postfix": ["420"]
		},
		"sex": 
		{
			"adjective": ["randy","hot","erect","big","moist","limp","hardcore","anal","wet","pounding","blacked","black","scissoring","assblasting"],
			"noun": ["69er","pussy","thicc","punani","erector","dick","penis","donger","johnson","ass","assface","asser","clam","blaster","rammer","whale","rimjob","anus","licker","sexer","squirter","grinder","chode","dildo","sex","fingerbang","squirt","MILF","GILF","incest","pounder","licker","assblaster"],
			"postfix": ["69"]
		},
		"nerd": 
		{
			"adjective": ["sweaty","giga","mega","lanky","quiet","greasy","NULL"],
			"noun": ["AMD","4K","txt","flash","winamp","nokia","napster","ebaums","T9","username","hotmail","iPod","AOL","cyber","ASL","chatroom","DOS","CD","VHS","geocities","startrek","klingon","PNG","56K","jpg","1080P","www","browser","superhighway","webz","gigabytes","netscape","webportal","dnd"],
			"postfix": ["4K","2001","1999","5000","9000","42","1080P","56K"]
		},
		"gamer": 
		{
			"adjective": ["watercooled","overclocked","hella"],
			"noun": ["noscope","xbox","ps2","headshot","frag","geforce","radeon","GFX","killstreak","GPU","noob","PC","CS","quake"],
			"postfix": ["1337"]
		},
		"hacker": 
		{
			"adjective": ["1337","ripped","warezed","phishing","torrented"],
			"noun": ["h4x0r","h4x","spammer","sp4m","phish","haxzor","warez","torrent","pr0n","codez","rip","burner"],
			"postfix": ["1337","Y2K"]
		},
		"jdm": 
		{
			"adjective": ["azn","stanced","riced","turboed","neon"],
			"noun": ["boi","hotboi","QT","stance","rocket","rice","JDM","subaru","honda","mazda","fourbanger","rims","blades","turbo","exhaust"],
			"postfix": ["QT","JDM"]
		},
		"urban": 
		{
			"adjective": ["gangster","lean","blinged","hood","black","ghetto","fire","phat","jiggy"],
			"noun": ["gangster","bling","blingbling","gat","hoodrat","hooptie","dubs","20s","gunit","dogg","fiddy","chainz","grillz"],
			"postfix": ["187"]
		},
		"suburban": 
		{
			"adjective": ["racist","white","organic","freerange","renewable","suburban","financial"],
			"noun": ["white","dolphin","bread","fence","corn","culdesac","lawncare","401K","finance","lawyer","doctor","dentist","laketahoe","condo","stocks","bonds","market","zumba"],
			"postfix": ["401K"]
		},
		"hobbies": 
		{
			"adjective": ["surfing","cooking","collecting","reading"],
			"noun": ["kayak","knitting","cooking","chef","surfer","stamps","coins","books","collector"],
			"postfix": []
		},
		"movies": 
		{
			"adjective": [],
			"noun": ["matrix","neo","morpheus","royalewithcheese","gump","schwarzenegger","melgibson","jimcarrey","matrix","neo","morpheus","royalewithcheese","gump","schwarzenegger","melgibson","jimcarrey"],
			"postfix": []
		},
		"emo": 
		{
			"adjective": ["suicidal","bleeding","crying","sad","dark"],
			"noun": ["suicide","die","kill","cut","blood","breath","knife"],
			"postfix": []
		},
		"catchphrases": 
		{
			"adjective": ["sweet","fly","rad"],
			"noun": ["wazzup","doh","asif","talktohand","booyah","mybad","ohsnap","props","yourmom","yomama","scrub","fartknocker","aiight","whatever","whoopass","punk"],
			"postfix": []
		},
		"music": 
		{
			"adjective": ["linkin","destinys"],
			"noun": ["MTV","TRL","carson","nsync","nickelback","techno","eminem","britney","durst","bizkit"],
			"postfix": ["MTV","TRL"]
		},
		"sports": 
		{
			"adjective": ["baller","athletic","fast","quick","agile"],
			"noun": ["hockey","football","bball","soccer","jordan","gretzky","pippen","rodman","bulls","basketball","champ","champion","player"],
			"postfix": []
		},
		"gay": 
		{
			"adjective": ["homo","closeted"],
			"noun": ["twink","bear","beard","gay","queen","drag"],
			"postfix": []
		},
		"christian": 
		{
			"adjective": ["blessed","saved","godfearing"],
			"noun": ["jesus","god","pastor","priest","church","savior"],
			"postfix": []
		}
	},
	"name": ["Todd","Jeffrey","Pubert","Jim","Fred","Nancy","Susan","Shannon","Bill","Ted","Max","Kate","Cathy","Micheelle","Tom","Barry","Jessica","Ashley","Amanda","Brittany","Jennifer","Sarah","Stephanie","Samantha","Elizabeth","Lauren","Nicole","Megan","Meg","Heather","Amber","Melissa","Tiffany","Danielle","Emily","Rachel","Christina","Kayla","Laura","Kimberly","Rebecca","Courtney","Katherine","Amy","Crystal","Sara","Michael","Christopher","Chris","Matthew","Matt","Joshua","Josh","David","Dave","Andrew","Drew","Daniel","Dan","Justin","James","Richard","Dick","Robert","John","Joseph","Ryan","Nicholas","Nick","William","Brandon","Anthony","Tony","Jonathan","Kevin","Kyle","Eric","Brian","Steven","Steve","Thomas","Tommy","Timothy","Adam","Jacob","Jason","Zachary","Benjamin","Ben"],
	"adjective": ["excellent","chatty","tall","short","big","sweet","small","tiny","little","huge","great","slim"],
	"noun": ["haver","taker","holder","eater","wrangler","fan","maker","wrecker","smasher","bringer","ender","slammer","killer","killa","mingus","man","woman","boy","girl","dude","bro","brosef","gurl","boi","champ","baby","boyz","child","dawg","idol"],
	"postfix": ["HP","XD","HD","XP","XS","XL","XXL","4K","2000","2001","1999","5000","9000","69","6969","1","2","3","4","5"]
};

let TEST_FORMATS = 
[
	["adjective", "name"],
	["adjective", "name", "postfix"],
	["adjective", "noun", "name"],
	["adjective", "noun", "name", "postfix"],
	["noun", "noun", "name"],
	["noun", "noun", "name", "postfix"],
	["adjective", "noun"],
	["adjective", "noun", "postfix"],
	["adjective", "noun", "noun"],
	["adjective", "noun", "noun", "postfix"],
	["noun", "noun"],
	["noun", "noun", "postfix"],
];

let EMAIL_ADDRESSES = 
[
	"@hotmail.com", "@lycos.com", "@yahoo.com", "@aol.com", "@juno.com", "@compuserve.com", "@prodigy.net", "@earthlink.net", "@mindspring.net"
];

var wordLists = {
	adjectives: [],
	nouns: [],
	postfixes: [],
	names: []
};

main();

function main()
{
	// fetch("words.json")
 //  		.then(response => response.json())
 //  		.then(json => console.log(json));

 	var usernameObject = document.getElementById("username");
  	var username = generateUsername(TEST_WORDS, TEST_FORMATS);

  	var emailAddress = randomElementFromArray(EMAIL_ADDRESSES);

  	usernameObject.innerHTML = username + emailAddress;
}

function generateUsername(words, formats)
{
	var username = "";

	// load words using categories
	refreshWordsLists(words);

	// load random format to use
	format = randomElementFromArray(formats);
	console.log(format);

	format.forEach((wordType) => 
	{
		var newWord = "";

		switch(wordType)
		{
			case "adjective":
				newWord = randomElementFromArray(wordLists.adjectives);
				break;

			case "noun":
				newWord = randomElementFromArray(wordLists.nouns);
				break;

			case "postfix":
				newWord = randomElementFromArray(wordLists.postfixes);
				break;

			case "name":
				newWord = randomElementFromArray(wordLists.names);
				break; 
		}

		if (username == "") 
		{
			username = newWord;
		}
		else 
		{
			username = username + '.' + newWord;
		}
	})

	console.log(username);
	return username;
}

function refreshWordsLists(words)
{
	// add default words
	wordLists.adjectives = words.adjective;
	wordLists.nouns = words.noun;
	wordLists.postfixes = words.postfix;
	wordLists.names = words.name;

	console.log("word name");
	console.log(words.name);

	// add category specific words
	var activeCategories = words.categoryNames;
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


