var alerter = (function (dataservice) {
    var
        name = 'John',
        showMessage = function () {
            var msg = dataservice.getMessage();
            alert(msg + ', ' + name);
        };

    return {
        showMessage: showMessage
    };
})(dataservice);