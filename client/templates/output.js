Meteor.subscribe("outputs");

Template.campaignOutput.helpers({
	outputs :function(){
		return Outputs.find();
	},
	selected_outputs:function(){

	}
});

Template.output_item.events({
	'click #add_output_btn':function(){
		console.log(this._id);
		var campaign = Session.get('selectedCampaign');
		Meteor.call('addOutputToCampaign',this,campaign._id,function(err,res){
			console.log(err);

		});
	}
});