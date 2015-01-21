// Wrap JS in a "Closure" - good habit
(function() {
	
	// Modules
	var app = angular.module('store', [ ]);
	
	// Controllers
	app.controller('StoreController', function() {
		
		// Set Variables equal to Controller Properties
		this.product = gem; // "product" is a property of the controller
		
	});
	
	// Gem Variables
	var gem = {
		name: "Dodecahedron",
		price: 2.95,
		description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
	}
})();
