var ADMIN_USERS = ["admin"];

var isAdmin = function(userId) {
  try {
    var username = Meteor.users.findOne({_id: userId}).services.github.username;
    return ADMIN_USERS.indexOf(username) !== -1;
  } catch(e) {
      return false;
  }
}

Meteor.publish("signups", function() {
  if (isAdmin(this.userId)) {
    return Signups.find();
  }
});