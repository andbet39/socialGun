Meteor.subscribe("pages");


Accounts.ui.config({
  requestPermissions: {
     facebook: ['manage_pages','publish_pages'],
  }
});


Template.home.events({
    'click #get_page_btn':function(e){
        e.preventDefault();
        Meteor.call('getPages');

    }
});

Template.home.helpers({
    pages:function(){
        return Pages.find({});
    }
});

Template.page.events({
    'click #post':function(e){
        e.preventDefault();
        Meteor.call('postToPageID',this._id);
        console.log(this.name);

    }
});

