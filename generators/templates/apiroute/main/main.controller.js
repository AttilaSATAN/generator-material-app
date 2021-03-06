(function () {
  'use strict';

  /**
   * Register the list controller as <%= classedName %>MainController
   */

  angular
    .module('<%= scriptAppName %>.<%= moduleName %>.main')
    .controller('<%= classedName %>MainController', <%= classedName %>MainController);

  // add <%= classedName %>MainController dependencies to inject
  <%= classedName %>MainController.$inject = ['$state'];

  /**
   * <%= classedName %>MainController constructor
   */
  function <%= classedName %>MainController($state) {
    var vm = this;
    // switch to the list state
    vm.showList = showList;

    /**
     * Activate the <%= moduleName %>.list state
     */
    function showList() {
      $state.go('<%= moduleName %>.list');
    }
  }

})();
