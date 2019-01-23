//add listener to install event.
self.addEventListener('install',function(event){
	var cacheUrls = [
						'/',
						'/index.html',
						'/restaurant.html',
						'/css/styles.css',
						'/data/restaurants.json',
						'/js/dbhelper.js',
						'/js/main.js',
						'/js/restaurant_info.js',
						'/img/1.jpg',
						'/img/2.jpg',
						'/img/3.jpg',
						'/img/4.jpg',
						'/img/5.jpg',
						'/img/6.jpg',
						'/img/7.jpg',
						'/img/8.jpg',
						'/img/9.jpg',
						'/img/10.jpg'
					];	
	event.waitUntil(caches.open('reviewCache').then(function(cache){
		return cache.addAll(cacheUrls);
	}).catch(function(err){
		console.log("Error : " + err);
	}));
});

//add listener for fetch and check for the request in cache
self.addEventListener('fetch',function(event){
	event.respondWith(caches.match(event.request)
		.then(function(response){
			if(response){
				return response;
			}else{
				return fetch(event.request);
			}
		}));
});