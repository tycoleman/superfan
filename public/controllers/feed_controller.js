(function() {
  "use strict";

  angular
    .module("superfanApp")
    .controller("FeedController", FeedController);


  FeedController.$inject = ['$http', 'twitterDataService', '$auth', '$state'];


    function getTweets($http, twitterDataService, $auth, $state) {

      var vm = this;

      var params = {
        action: 'user_timeline',
        user: $scope.username
      };

      // create Tweet data resource
      $scope.tweets = $resource('/tweets/:action/:user', params);

      // GET request using the resource
      $scope.tweets.query( { }, function (res) {

        $scope.tweetsResult = $scope.tweetsResult.concat(res);

        // render tweets with widgets.js
        $timeout(function () {
          twttr.widgets.load();
        }, 30);
      });
    }

})();
