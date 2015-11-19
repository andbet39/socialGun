/**
 * Created by andrea.terzani on 19/11/2015.
 */
Template.wpinput.events({
    'click #get_posts_btn':function(e){
        e.preventDefault();
        Meteor.call('getWPPosts');

    }
});