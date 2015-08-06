Meteor.startup(function () {
  ServiceConfiguration.configurations.remove({service: "github"});
  ServiceConfiguration.configurations.insert({
    service: "github",
    clientId: Meteor.settings.github_client_id,
    loginStyle: "popup",
    secret: Meteor.settings.github_secret
  });
});