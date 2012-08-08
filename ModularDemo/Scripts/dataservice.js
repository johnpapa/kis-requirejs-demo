define('dataservice', [],
    function () {
        var
            getMessage = function () {
                return 'Welcome to Code Camp';
            };

        return {
            getMessage: getMessage
        };
    });