var echo = {
  options: {
    appId: 'dummyAppID',
    userId: 'dummyUserID',
    baseUrl: 'http://localhost:4000/api/v1'
  },

  init: function(appId, userId, options) {
    $.extend(this.options, options);
    this.options.appId = appId;
    this.options.userId = userId;
  },

  notifications: function(callback) {
    $.get(this.options.baseUrl + '/notifications?user_id=' + this.options.userId, function(data) {
      callback(data);
    });
  },

  acknowledgeNotification: function(notificationId, callback) {
    $.ajax({
      url: this.options.baseUrl + '/notifications/' + notificationId,
      type: 'PUT',
      data: { user_id: this.options.userId },
      success: function(data) {
        callback(data);
      }
    });
  }
}

