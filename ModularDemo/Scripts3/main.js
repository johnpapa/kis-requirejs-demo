(function () {

    requirejs.config(
        {
            baseUrl: 'scripts3',
            paths: {
                'jquery': 'jquery-1.7.2'
            }
        }
    );

    require(['alerter'],
        function (alerter) {
            alerter.showMessage();
        });
})();