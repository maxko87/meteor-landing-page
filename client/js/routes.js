Router.route("/", function() {
  GAnalytics.pageview();
  this.render("landingPage");
});

Router.route("/admin", function() {
  this.render("admin");
});