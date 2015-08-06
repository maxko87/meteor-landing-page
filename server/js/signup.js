Meteor.methods({
  addSignup: function(data) {
    var email = data.email;
    var feedback = data.feedback;
    var button = data.button;

    // Above could be untrusted data.
    Signups.insert({
      email: email,
      button: button,
      feedback: feedback,
      createdAt: new Date()
    });
  }
});