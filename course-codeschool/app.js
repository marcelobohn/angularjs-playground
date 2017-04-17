(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', function($http){
		var store = this;

		//store.products = [];
		store.products = gems;

		$http.get('/product.json').success(function(data){
			store.products = data;
		});
	}]);



	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});



	var gems = [
		{
		name: 'Dobecahedron',
		price: 110.5,
		description: 'Some gems have hidden qualities beyond their luster their shine... Dodeca is one of those gems.',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'sapphire-gem-full.jpg',
				thumb: 'sapphire-gem-thumb.jpg'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}
		],
		},
		{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . . .',
		canPurchase: true,
		soldOut: false,
		}
	]
})();
