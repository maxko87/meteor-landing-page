Template.landingPage.onRendered(function() {
  $("a[rel*=leanModal]").leanModal({ top : 200, closeButton: ".modal_close" });
});

Template.landingPage.helpers({
  applicationName: function() {
    return "Your Application Name"
  }
})

Template.landingPage.events({
  "submit .email-form": function(event) {
    var target = event.target;
    var email = target.email.value;
    var feedback = target.feedback.value;
    var data = {
      email: email,
      feedback: feedback,
      button: Session.get("button")
    };
    Meteor.call("addSignup", data, function(error, result) {
      if (error) {
        // Show error message in dialog
      }
      else {
        GAnalytics.event("landingPage", "signup");
        // Close window
      }
    });
  },

  "click .main-btn": function(event) {
    Session.set("button", "main");
    GAnalytics.event("landingPage", "mainButtonClick");
  },
  "click .bottom-btn": function(event) {
    Session.set("button", "bottom");
    GAnalytics.event("landingPage", "bottomButtonClick");
  },
  "click .feature-a-btn": function(event) {
    Session.set("button", "featureA");
    GAnalytics.event("landingPage", "featureAClick");
  },
  "click .feature-b-btn": function(event) {
    Session.set("button", "featureB");
    GAnalytics.event("landingPage", "featureBClick");
  },
  "click .feature-c-btn": function(event) {
    Session.set("button", "featureC");
    GAnalytics.event("landingPage", "featureCClick");
  },
  "click .plan-a": function(event) {
    Session.set("button", "planA");
    GAnalytics.event("landingPage", "planAClick");
  },
  "click .plan-b": function(event) {
    Session.set("button", "planB");
    GAnalytics.event("landingPage", "planBClick");
  },
  "click .plan-c": function(event) {
    Session.set("button", "planC");
    GAnalytics.event("landingPage", "planCClick");
  },
  "click .plan-d": function(event) {
    Session.set("button", "planD");
    GAnalytics.event("landingPage", "planDClick");
  },
  "click .modal_close": function(event) {
    GAnalytics.event("landingPage", "noThanks");
  }
});