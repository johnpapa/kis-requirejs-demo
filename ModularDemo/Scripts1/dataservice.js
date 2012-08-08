var dataservice = (function () {
    var
        msg = 'Welcome to Code Camp',
        getMessage = function () {
            return msg;
        };

    return {
        getMessage: getMessage
    };
})();