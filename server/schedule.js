
Meteor.methods({
    schedule:function(schedule){
        console.log('Schedule new campaign')
        console.log(schedule);
        SyncedCron.add({
            name: schedule.campaign_id,
            schedule: function(parser) {
                // parser is a later.parse object
                return parser.text('every 5 seconds');
            },
            job: function() {
                var numbersCrunched = ProcessCampaign(this.name);
                return numbersCrunched;
            }
        });
        return 'OK';
    },
    start_schedule:function(){
        SyncedCron.start();
    }
});

ProcessCampaign = function(camp_id){
  console.log("Processing : " + camp_id);
    var campaign = Campaigns.findOne(camp_id);

    console.log(campaign);
    return "Done";
};