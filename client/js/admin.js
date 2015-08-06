Signups = new Meteor.Collection("signups");
Meteor.subscribe("signups");

Template.admin.helpers({
  isAdmin: function() {
    return Meteor.user() !== null;
  }
});

Template.adminPage.helpers({
  signups: function() {
    return Signups.find();
  }
})