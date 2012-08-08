(function () {

    requirejs.config(
        {
            baseUrl: 'scripts2',
        }
    );

    require(['alerter'],
        function (alerter) {
            alerter.showMessage();
        });
})();