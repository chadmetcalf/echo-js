  var echo = {
    options: {
      appId: 'dummyAppID',
      userId: 'dummyUserID',
      baseUrl: 'http://localhost:4000/api/v1'
    },

    init: function(appId, userId) {
      this.appId = appId;
      this.userId = userId;
    },

    notifications: function(callback) {
      $.get(this.options.baseUrl + '/notifications?user_id=' + this.userId, function(data) {
        callback(data);
      });
    }
  }

