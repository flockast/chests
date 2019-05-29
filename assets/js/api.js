let chests = {

    getAll(success, error) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://test12345-daf7.restdb.io/rest/chests",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5ce414a1780a473c8df5ca56",
                "cache-control": "no-cache"
            }
        };
        $.ajax(settings).done(function (response) {
            success(response);
        }).fail(function (response) {
            if(error) {
                error(response)
            }
        });

    },

    update(id, data, success, error) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://test12345-daf7.restdb.io/rest/chests/" + id,
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5ce414a1780a473c8df5ca56",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(data)
        };
        $.ajax(settings).done(function (response) {
            success(response);
        }).fail(function (response) {
            if(error) {
                error(response)
            }
        });
    },

    remove(id, success, error) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://test12345-daf7.restdb.io/rest/chests/" + id,
            "method": "DELETE",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5ce414a1780a473c8df5ca56",
                "cache-control": "no-cache"
            }
        };
        $.ajax(settings).done(function (response) {
            success(response);
        }).fail(function (response) {
            if(error) {
                error(response)
            }
        });
    },

    add(data, success, error) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://test12345-daf7.restdb.io/rest/chests",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5ce414a1780a473c8df5ca56",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(data)
        };
        $.ajax(settings).done(function (response) {
            success(response);
        }).fail(function (response) {
            if(error) {
                error(response)
            }
        });
    }

};