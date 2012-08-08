(function () {
    
    requirejs.config( { baseUrl: 'scripts' } );

    require(['alerter'],
        function (alerter) {
            alerter.showMessage();
        });
})();