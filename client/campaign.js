/**
 * Created by andrea.terzani on 19/11/2015.
 */

Meteor.subscribe("campaigns");



Template.campaign.events({
    'submit #newcampaign': function (event) {
        event.preventDefault();

        var title = event.target.campaign_name.value;
        Campaigns.insert({
                title: title,
                created:new Date(),
                posts:[],
                owner:Meteor.userId()
            }
        );
    }
});

Template.campaign.helpers({
   campaigns: function () {
       return Campaigns.find();
   }
});


