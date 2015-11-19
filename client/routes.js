Router.configure({
    layoutTemplate: 'main'
});

Router.map(function() {
    this.route('home', {
         path:'/'
    })
});


Router.route('/campaign/:_id', function () {
    this.render('campaignview',{
        data: function () {
            var v = Campaigns.findOne({_id: this.params._id});
            Session.set('selectedCampaign',v)
            return v;
        }
    });
}, {
    name: 'campaign.show',

});
Router.route('/campaign/:_id/output', function () {
    this.render('campaignOutput',{
        data: function () {
            var v = Campaigns.findOne({_id: this.params._id});
            Session.set('selectedCampaign',v)
            return v;
        }
    });
}, {
    name: 'campaign.output',

});

Router.route('/campaign', function () {
    this.render('campaign');
}, {
    name: 'campaign'
});  