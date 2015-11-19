
Meteor.publish('posts',function(){
    return Posts.find({owner:this.userId})
});

Meteor.methods({
    getWPPosts: function () {
        console.log('Method getWPPosts ');
        this.unblock();
        try {
            var result = HTTP.call("GET", "https://www.codetutorial.io/api/get_posts/?count=250",
                function (error, result) {
                    if (!error) {
                        var jsonContent = JSON.parse(result.content);
                        var posts = jsonContent.posts;

                        posts.forEach(function (post) {

                            var exitst = Posts.findOne({url:post.url});

                            if (typeof exitst == 'undefined') {
                                var newpost = {
                                    id: post.id,
                                    message: post.title,
                                    url: post.url,
                                    sent:0,
                                    created:new Date(),
                                    owner : Meteor.userId(),
                                    source : 'WP'
                                };

                                Posts.insert(newpost);
                            }
                        });

                    }
                });
        } catch (e) {
            return false;
        }
    }
});
