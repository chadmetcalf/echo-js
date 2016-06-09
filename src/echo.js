var echo = {
  options: {
    appId: 'dummyAppID',
    userId: 'dummyUserID',
    baseUrl: 'http://localhost:4000/api/v1'
  },

  init: function(appId, userId, options) {
    this.appId = appId;
    this.userId = userId;
    $.extend(this.options, options);
  },

  notifications: function(callback) {
    $.get(this.options.baseUrl + '/notifications?user_id=' + this.userId, function(data) {
      callback(data);
    });
  },

  acknowledgeNotification: function(notificationId, callback) {
    $.ajax({
      url: this.options.baseUrl + '/notifications/' + notificationId,
      type: 'DELETE',
      data: { user_id: this.options.userId }
      success: function(data) {
        callback(data);
      }
    });
  }
}

