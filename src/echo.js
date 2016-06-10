var echo = {
  options: {
    appId: 'dummyAppID',
    userId: 'dummyUserID',
    userSignInCount: undefined,
    baseUrl: 'http://localhost:4000/api/v1'
  },

  init: function(appId, userId, userSignInCount) {
    //$.extend(this.options, options);
    this.options.appId = appId;
    this.options.userId = userId;
    this.options.userSignInCount = userSignInCount;
  },

  notifications: function(callback) {
    $.get(this.options.baseUrl + '/notifications?user_id=' + this.options.userId + '&sign_in_count=' + this.options.userSignInCount, function(data) {
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

