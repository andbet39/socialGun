/**
 * Created by andrea.terzani on 19/11/2015.
 */

Meteor.publish('campaigns',function(){
    return Campaigns.find({owner:this.userId})
});





Meteor.methods({
    'addPostToCampaign':function(post,camp_id){
        var exist  = Campaigns.findOne({$and:[{_id:camp_id},{posts:{$elemMatch:{_id:post._id}}}]});
        console.log('Add post to :'+camp_id);
        if(!exist) {
            Campaigns.update({_id:camp_id},{ $push: { posts: post }});
            return {message: 'Added'};
        }else{
        	throw new Meteor.Error( 500, 'Post already in campaign' );

        }
    },
    'addOutputToCampaign':function(ouput_id,camp_id){

    }
});