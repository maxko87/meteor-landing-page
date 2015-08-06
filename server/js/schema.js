var Schema = {};

// https://github.com/aldeed/meteor-collection2

Schema.Signup = new SimpleSchema({
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email
  },
  button: {
    type: String,
    label: "Button"
  },
  feedback: {
    type: String,
    label: "Feedback",
    optional: true,
  },
  createdAt: {
    type: Date
  }
});

Signups.attachSchema(Schema.Signup);