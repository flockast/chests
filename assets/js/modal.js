$(function() {

    $("form").submit(function() {
        const $form = $(this);

        const data = {
             title: $form.find("input[name=title]").val(),
             icon: $form.find("input[name=icon]").val(),
             cost: $form.find("input[name=cost]").val(),
             count: $form.find("select[name=count]").val(),
             version: $form.find("input[name=version]").val(),
             description: $form.find("textarea[name=description]").val(),
        };

        chests.add(data, function(response) {
            if(response) {
                $(".js-table tbody").append(`
                        <tr data-id="${response._id}" class="new">
                            <td>${$(".js-table tbody tr").length + 1}</td>
                            <td><input type="text" readonly="readonly" name="title" value="${response.title}"></td>
                            <td><input type="text" readonly="readonly" name="icon" value="${response.icon}"></td>
                            <td><input type="text" readonly="readonly" name="cost" value="${response.cost}"></td>
                            <td><input type="text" readonly="readonly" name="count" value="${response.count}"></td>
                            <td><input type="text" readonly="readonly" name="version" value="${response.version}"></td>
                            <td><input type="text" readonly="readonly" name="description" value="${response.description}"></td>
                            <td>
                                <div class="options">
                                    <button class="js-btn-edit options__item options__item--edit btn btn-outline-info"><span class="oi oi-pencil"></span></button>
                                    <button class="js-btn-check options__item options__item--check btn btn-outline-success"><span class="oi oi-check"></span></button>
                                    <button class="js-btn-remove options__item options__item--remove btn btn-outline-danger"><span class="oi oi-trash"></span></button>
                                </div>
                            </td>
                        </tr>
                    `);
                $form.find("[data-dismiss=modal]").trigger({ type: "click" });
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                setTimeout(function () {
                    $(".js-table tr.new").removeClass("new");
                }, 1000)
            }
        });

        return false;
    });

});