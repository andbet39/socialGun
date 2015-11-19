


Meteor.publish('pages',function(){
	return Pages.find({user_id:this.userId});
});


Meteor.methods({
	postToPageID:function(page_id){
		var page = Pages.findOne(page_id);
		console.log(page);
		var access_token = page.access_token;
		console.log('Page Id :'+page.id+' Access Token : '+access_token);
		FBGraph.setAccessToken(access_token);

		var wallPost = {
			message: "Random link from CODETutorial.io",
			link: "https://www.codetutorial.io/from-idea-to-twittergrade-in-3-hours-with-meteor/"
		};

		FBGraph.post(page.id + "/feed", wallPost, function(err, res) {
			// returns the post id
			console.log(res); // { id: xxxxx}
		});
	},
	getPages:function(){
		var access_token = Meteor.user().services.facebook.accessToken;
		var fb_id = Meteor.user().services.facebook.id;


		FBGraph.setAccessToken(access_token);
		console.log("Start FB call ID :" + fb_id);

		var fbcall = Async.runSync(function (done) {

			FBGraph.get("/" + fb_id + "/accounts", function (err, res) {

				done(null, res.data);

			});


		});

		if (fbcall.error)
			throw new Meteor.Error(500, 'Error 500:FB Call error', 'the user is not found');


		fbcall.result.forEach(function (value) {
			var page = Pages.findOne({id:value.id});
			if(!page){
				value.user_id = Meteor.user()._id;
				Pages.insert(value);
			}
		});

		console.log("End FB call");

	}
});