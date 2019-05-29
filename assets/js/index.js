$(function() {

    $("body").addClass("loading loading--lg");
    chests.getAll(function (response) {
        if(response) {
            response.forEach((item, index) => {
                $(".js-table tbody").append(`
                    <tr data-id="${item._id}">
                        <td>${index + 1}</td>
                        <td><input type="text" readonly="readonly" name="title" value="${item.title}"></td>
                        <td><input type="text" readonly="readonly" name="icon" value="${item.icon}"></td>
                        <td><input type="text" readonly="readonly" name="cost" value="${item.cost}"></td>
                        <td><input type="text" readonly="readonly" name="count" value="${item.count}"></td>
                        <td><input type="text" readonly="readonly" name="version" value="${item.version}"></td>
                        <td><input type="text" readonly="readonly" name="description" value="${item.description}"></td>
                        <td>
                            <div class="options">
                                <button class="js-btn-edit options__item options__item--edit btn btn-outline-info"><span class="oi oi-pencil"></span></button>
                                <button class="js-btn-check options__item options__item--check btn btn-outline-success"><span class="oi oi-check"></span></button>
                                <button class="js-btn-remove options__item options__item--remove btn btn-outline-danger"><span class="oi oi-trash"></span></button>
                            </div>
                        </td>
                    </tr>
                `);
            });
            $("body").removeClass("loading loading--lg");
            tableInit();
        }
    }, function(response) {
        $("body").removeClass("loading loading--lg");
        $(".alert-wrap").addClass("is-active");
        console.log(response);
    })

});