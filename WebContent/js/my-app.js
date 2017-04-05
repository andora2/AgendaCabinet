
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

function getTermin(plannedTime){
	var res = {};
	$$.get('rest/termine/'+plannedTime, {}, function (data) {
		res = data;
	  console.log('Load Termine was performed');
	})
	
	return res;	
}

function getCurrentTermine(){
	var res = {};
	$$.get('rest/termine', {}, function (data) {
		res = data;
	  console.log('Load Termine was performed');
	})
	
	return res;	
}

function getCustomer(i_customerId){
	var res = {};
	$$.get('rest/customer/' + i_customerId, {}, function (data) {
		res = data;
	  console.log('Load Customer was performed');
	})
	
	return res;	
}
//var listTemplate = $('script#agenda').html();
//var compiledListTemplate = Template7.compile(listTemplate);


// Initialize app
var myApp = new Framework7({
	template7Pages: true,
	
    //Specify templates/pages data
    template7Data: {
    	// This context will applied for page/template with data-page="contacts"
        'url:agenda.html': { 
        	'termine': [
        		{ 	plannedStart: '22 Dec',
        			Customer_idCustomer: 'customerid',
        			WorkType_idWorkType: 'worktypeid' },
        		{ 	plannedStart: '23 Dec',
        			Customer_idCustomer: 'customerid',
        			WorkType_idWorkType: 'worktypeid' },
        		]/*getCurrentTermine()*/, 
        	},
        
    }
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
	window.addEventListener("batterystatus", onBatteryStatus, false);

	function onBatteryStatus(status) {
	    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
	}

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})