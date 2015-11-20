/**
 * Created by andrea.terzani on 20/11/2015.
 */
Template.schedule.events({
    'click #schedule_btn':function(){
        var campaign =Session.get('selectedCampaign');
        var schedule = {
          campaign_id:  campaign._id
        };
         Meteor.call('schedule',schedule,function(err,res){
            console.log(err);
        });
    },
    'click #start_schedule_btn':function(){
         Meteor.call('start_schedule',function(err,res){
            console.log(err);
        });
    }
});
