(function(module) {
  mifosX.controllers = _.extend(module, {
    LoginFormController: function(scope, authenticationService) {
      scope.loginCredentials = {};
      scope.authenticationFailed = false;

      scope.login = function() {
        authenticationService.authenticateWithUsernamePassword(scope.loginCredentials);
      };
      $('#pwd').keypress(function(e) {
        if(e.which == 13) {
            scope.login();
        }
      });
      scope.$on("UserAuthenticationFailureEvent", function(data) {
        scope.authenticationFailed = true;
      });

    }
  });
  mifosX.ng.application.controller('LoginFormController', ['$scope', 'AuthenticationService', mifosX.controllers.LoginFormController]).run(function($log) {
    $log.info("LoginFormController initialized");
  });
}(mifosX.controllers || {}));
