/**
 * Created by andrea.terzani on 19/11/2015.
 */
Meteor.subscribe("posts");

Template.postSelect.helpers({
    posts:function(){
        return Posts.find();
    },
    campaign:function(){
        return Session.get('selectedCampaign');
    }
});

Template.post.events({
    'click #add_post':function(){
        console.log(this._id);
        var campaign =Session.get('selectedCampaign');
        campaign.posts.push(this._id);
        console.log(campaign);
        Meteor.call('addPostToCampaign',this,campaign._id);
    }
});

