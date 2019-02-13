/* eslint-disable */
var getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var addressNames = 
	[
		"Dream St", "Fantastic Blvd", "Bird Ln", "River St", "California St", "University Ave", "Main St", "Union St",
		"Water St", "VanNess St", "Clay St", "Pacific Ave", "Mission St", "Tehama St", "Howard St", "Green St",
		"Valencia St", "Potrero St", "Dolores St", "1st St", "5th St", "7th St", "10th St", "24th St"
	];

var Cities = [
		"San Francisco", "Berkeley", "Oakland", "Vallejo", "Daly City", "Richmond", "Livermore", "Alameda", "Piedmont" ,"San Mateo"
	];

var details = [
		"Vegan actually lo-fi yuccie hella selfies snackwave vexillologist pok pok. 90's shaman synth microdosing, locavore tacos squid taxidermy migas freegan mlkshk hoodie. Umami messenger bag cardigan four dollar toast. Vinyl 8-bit air plant brunch godard helvetica glossier single-origin coffee 90's semiotics affogato tousled kale chips try-hard. Semiotics photo booth shoreditch trust fund. Forage cred fingerstache direct trade green juice lomo vexillologist irony mumblecore offal bushwick venmo mustache. Banjo small batch art party bicycle rights.",
		"Yuccie art party pinterest copper mug, single-origin coffee fanny pack banjo vinyl forage bicycle rights YOLO etsy. Farm-to-table kinfolk shaman bespoke migas selvage lomo iceland trust fund unicorn lumbersexual bitters whatever selfies keffiyeh. Af seitan sustainable gastropub vinyl leggings. Stumptown meditation humblebrag, gentrify small batch XOXO typewriter vice distillery.",
		"Brooklyn letterpress viral, bespoke vexillologist wolf venmo plaid slow-carb four loko yuccie bushwick. Cliche chia truffaut, live-edge sriracha tilde coloring book selfies church-key crucifix snackwave. Man braid sartorial forage chicharrones, before they sold out whatever cliche. Cloud bread master cleanse copper mug locavore godard ramps before they sold out, next level vinyl air plant austin fanny pack +1 sartorial bushwick. Poke hell of beard, vexillologist mustache meh actually readymade synth man bun raclette keytar aesthetic lyft. Pickled bespoke PBR&B vegan cronut enamel pin ethical, ennui tousled. Flexitarian letterpress scenester blog, listicle organic locavore four loko pabst.",
		"Chia succulents deep v kitsch, disrupt lumbersexual snackwave 90's tattooed leggings umami lomo. Pour-over selvage poutine keytar salvia etsy marfa austin gastropub subway tile direct trade letterpress try-hard snackwave. Aesthetic master cleanse next level post-ironic. Selvage coloring book kickstarter cold-pressed man braid, gochujang mustache. Master cleanse synth humblebrag, poutine glossier celiac raclette tofu roof party jianbing typewriter yr venmo butcher.",
		"Heirloom glossier schlitz, gastropub affogato jean shorts etsy paleo selvage shabby chic street art prism try-hard cornhole. Keffiyeh poutine bushwick flexitarian air plant seitan. Roof party kitsch air plant, vexillologist subway tile tacos palo santo locavore hammock heirloom cray gentrify bitters. Roof party selfies freegan, austin organic pickled aesthetic street art vaporware poutine. PBR&B art party hashtag, pour-over kogi craft beer pork belly. Four loko kombucha bitters DIY prism. Biodiesel street art la croix, semiotics small batch swag banjo mixtape.",
		"Lo-fi bushwick ethical pork belly narwhal, hot chicken farm-to-table. Enamel pin jianbing art party, bushwick beard sriracha irony tbh. Adaptogen glossier pug, heirloom banjo mixtape migas keffiyeh chartreuse tofu hot chicken hexagon lyft etsy. Wayfarers truffaut jean shorts vape chicharrones selfies intelligentsia. Cronut deep v pour-over tumblr viral, vice pickled venmo letterpress cardigan. Hashtag YOLO jianbing stumptown flannel. Prism organic literally meditation hell of, street art humblebrag +1 green juice.",
		"Shaman vaporware pop-up, butcher seitan readymade venmo fam kombucha hashtag pok pok. Freegan raw denim you probably haven't heard of them shaman waistcoat cliche echo park mixtape. Neutra sartorial normcore street art prism fashion axe. Jean shorts helvetica marfa 90's unicorn green juice forage.",
		"Everyday carry pour-over master cleanse, mixtape tacos godard 8-bit. Fam air plant pour-over vexillologist cred keffiyeh flannel polaroid edison bulb kogi everyday carry jean shorts XOXO PBR&B yr. Sriracha poutine 8-bit fingerstache mumblecore squid VHS. Palo santo kogi cornhole tumeric green juice.",
		"You probably haven't heard of them pinterest plaid jean shorts pork belly, ugh normcore truffaut VHS chillwave umami distillery flexitarian. Bicycle rights iceland taiyaki beard, four dollar toast quinoa whatever cray normcore master cleanse. Gastropub pug microdosing, knausgaard polaroid glossier ennui austin fingerstache godard you probably haven't heard of them pop-up butcher synth. Health goth skateboard banjo fam leggings waistcoat hoodie gastropub.",
		"Etsy vape swag, palo santo chicharrones yr af selvage hell of gluten-free viral hexagon chambray waistcoat. Gluten-free biodiesel chillwave, brooklyn stumptown banh mi flannel bushwick bitters lumbersexual locavore. Art party everyday carry jianbing VHS butcher fashion axe williamsburg meditation intelligentsia sustainable 3 wolf moon mixtape. Deep v tofu forage hot chicken thundercats, migas flexitarian fashion axe occupy skateboard crucifix synth cornhole. Tofu prism butcher cred semiotics adaptogen copper mug farm-to-table vape poutine."
	];

var types = [
		"Single-Family Home", "Town House", "Mansion", "Castle", "Double-Family Home", "Studio"
	];

var event = [
		"Listed For Sale", "Posting removed", "Price Change", "Sold"
	];

var priceType = [
		"Sales Price or Transfer Tax rounded by county prior to computation. Varies by county.",
		"Full amount computed from Transfer Tax or Excise Tax."
	];

var transactionType = [
		"Insured Non-Residential Grant Deed",
		"Purchase/Resale Arm's Length Residential Transaction",
		"N/A"
	];

var documentType = [
		"Grant Deed",
		"N/A"
	];

// home
for (let i = 1; i <= 100; i++) {
	console.log('INSERT INTO home (totalPrice, detailsId) VALUES (' + getRandomNumber(450000, 1500000) + ', ' + i + ');');
}

// similarHomes
for (let i = 1; i <= 100; i++) {
	var similarNum = getRandomNumber(0, 20);
	for (let j = 1; j <= similarNum; j++) {
		console.log('INSERT INTO similarHomes (homeId, image, price, rooms, baths, address1, address2) VALUES (' +
			i + ', ' + '"https://s3-us-west-1.amazonaws.com/affordability-module/photo' + getRandomNumber(0, 9) +'.jpeg", ' +
			getRandomNumber(45000, 1500000) + ', "' + getRandomNumber(0, 8) + '", "' + getRandomNumber(0, 8) + '", "' +
			getRandomNumber(1, 5000) + ' ' + addressNames[getRandomNumber(0, addressNames.length - 1)] + '", "' +
			Cities[getRandomNumber(0, Cities.length - 1)] + ' CA, ' + getRandomNumber(90000, 99999) + '"'
		+ ');');
	}
}

// homeDetails
	// overview
	// features
		// listingInfo
		// publicRecords
for (let i = 1; i <= 100; i++) {
	console.log('INSERT INTO homeDetails (overviewId, description, featuresId) VALUES (' + i + ', "' +
		details[getRandomNumber(0, details.length - 1)] + '", ' + i + ');');
	console.log('INSERT INTO overview (type, rooms, baths, builtIn, howlongOnTrulia, lotSize, sqft, pricePerSqft, priceHOA, views) VALUES (' + 
		'"' + types[getRandomNumber(0, types.length - 1)] + '", "' + getRandomNumber(0, 8) + '", "' + getRandomNumber(0, 8) + '", ' +
		getRandomNumber(1900, 2018) + ', ' + getRandomNumber(2, 30) + ', ' + getRandomNumber(1000, 5000) + ', ' + getRandomNumber(1000, 5000) + ', ' + 
		getRandomNumber(500, 3000) + ', ' + getRandomNumber(0, 2000) + ', ' + getRandomNumber(0, 10000) + ');');
	console.log('INSERT INTO features (listingInfoId, publicRecordsId) VALUES (' + i + ', ' + i + ');');
	console.log('INSERT INTO listingInfo (updatedAt, rooms, baths, type, sqft, lotSize) VALUES (' +
		'"' + pad(getRandomNumber(1, 12), 2) + '/' + pad(getRandomNumber(1,30), 2) + '/' + getRandomNumber(1990, 2018) + '", ' +
		'"' + getRandomNumber(0, 8) + '", "' + getRandomNumber(0, 8) + '", "' + types[getRandomNumber(0, types.length - 1)] + '", ' +
		getRandomNumber(1000, 5000) + ', ' + getRandomNumber(1000, 5000) + ');');
	console.log('INSERT INTO publicRecords (updatedAt, rooms, baths, type, sqft, lotSize) VALUES (' + 
		'"' + getRandomNumber(1, 12) + '/' + getRandomNumber(1,30) + '/' + getRandomNumber(1990, 2018) + '", ' +
		'"' + getRandomNumber(0, 8) + '", "' + getRandomNumber(0, 8) + '", "' + types[getRandomNumber(0, types.length - 1)] + '", ' +
		getRandomNumber(1000, 5000) + ', ' + getRandomNumber(1000, 5000) + ');');
}

// priceHistory
	// priceHistoryDetails
var detailsId = 1;
for (let i = 1; i <= 100; i++) {
	var numHistory = getRandomNumber(5, 30);
	for (let j = 1; j <= numHistory; j++) {
		var currentEventIndex = getRandomNumber(0, event.length - 1);
		if (currentEventIndex === 2 || currentEventIndex === 3) {
			console.log('INSERT INTO priceHistory (homeDetailsId, historyDate, price, event, detailsId) VALUES (' +
				i + ', "' + pad(getRandomNumber(1, 12), 2) + '/' + pad(getRandomNumber(1,30), 2) + '/' + getRandomNumber(1990, 2018) + '", ' +
				getRandomNumber(45000, 1500000) + ', "' + event[currentEventIndex] + '", ' + (detailsId++) + ');');
			console.log('INSERT INTO priceHistoryDetails (recordingDate, contractDate, salePrice, priceType,' + 
				'countyTransferTax, totalTransferTax, transactionType, documentType, priceChange, source) VALUES (' +
				'"' + pad(getRandomNumber(1, 12), 2) + '/' + pad(getRandomNumber(1,30), 2) + '/' + getRandomNumber(1990, 2018) + '", ' +
				'"' + pad(getRandomNumber(1, 12), 2) + '/' + pad(getRandomNumber(1,30), 2) + '/' + getRandomNumber(1990, 2018) + '", ' +
				getRandomNumber(45000, 1500000) + ', "' + priceType[getRandomNumber(0, priceType.length - 1)] + '", ' +
				'"N/A", "N/A", "' + transactionType[getRandomNumber(0, transactionType.length - 1)] + '", ' +
				'"' + documentType[getRandomNumber(0, documentType.length - 1)] + '", ' + getRandomNumber(-2000000, 2000000) +
				', ' + '"Pacific Union International Inc.");');
		} else {
			console.log('INSERT INTO priceHistory (homeDetailsId, historyDate, price, event, detailsId) VALUES (' +
				i + ', "' + pad(getRandomNumber(1, 12), 2) + '/' + pad(getRandomNumber(1,30), 2) + '/' + getRandomNumber(1990, 2018) + '", ' +
				getRandomNumber(45000, 1500000) + ', "' + event[currentEventIndex] + '", 0);');
		}
	}
}