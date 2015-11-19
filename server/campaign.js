/**
 * Created by andrea.terzani on 19/11/2015.
 */

Meteor.publish('campaigns',function(){
    return Campaigns.find({owner:this.userId})
});

Meteor.publish('post_campaign',function(campaign_id){
    return PostCampaign.find({campaign_id:campaign_id});
});

Meteor.methods({
    'addPostToCampaign':function(post,camp_id){
        
        Campaigns.update({ _id: camp_id },{ $push: { posts: post }})
    }
});