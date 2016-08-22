angular.module( 'program', [ 'ngRoute' ] )
	.config( function( $routeProvider ) {
		$routeProvider
			.when( '/' ,
			{
				templateUrl: 'partials/program.html'
			})
			.when( '/ceremony' ,
			{
				templateUrl: 'partials/ceremony.html'
			})
			.when( '/events' ,
			{
				templateUrl: 'partials/events.html'
			})
			.when( '/wedding-party1' ,  
			{
				templateUrl: 'partials/wedding-party1.html'
			})
			.when( '/wedding-party2' ,  
			{
				templateUrl: 'partials/wedding-party2.html'
			})
			.when( '/wedding-party3' ,  
			{
				templateUrl: 'partials/wedding-party3.html'
			})
			.when( '/wedding-party4' ,  
			{
				templateUrl: 'partials/wedding-party4.html'
			})
			.when( '/couple' ,
			{
				templateUrl: 'partials/couple.html'
			})
			.when( '/thank-you' ,
			{
				templateUrl: 'partials/thank-you.html'
			})
	});