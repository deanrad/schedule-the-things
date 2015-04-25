Router.configure({
  layoutTemplate: "layout"
});

Router.route("history", {
  path: "/",
  waitOn: function() {
    return Meteor.subscribe("appointments");
  },
  data: function() {
    return {
      appointments: Appointments.find({}, {
        sort: [["time", "desc"]]
      })
    };
  }
});

Router.route("appointment", {
  path: "/appointment/new",
  data: function() {
    return currentFeeding().fetch()[0];
  }
});

Router.route("appointmentEdit", {
  path: "/appointment/:_id/edit",
  data: function() {
    return Appointments.findOne(this.params._id);
  }
});

// ---
// generated by coffee-script 1.9.0