function tableInit() {

    const $table = $(".js-table");
    const btnEditClass = "js-btn-edit";
    const btnCheckClass = "js-btn-check";
    const btnRemoveClass = "js-btn-remove";

    function editTrInTable($tr) {
        $tr
            .addClass("choose")
            .find("input")
            .attr("readonly", false)
            .addClass("editable");
        $tr.find('.' + btnEditClass)
            .addClass("hide")
            .siblings('.' + btnCheckClass).addClass("show");
    }

    function acceptTrInTable($tr) {
        $tr.addClass("loading loading--sm");
        let data = {
            title: $tr.find('input[name=title]').val(),
            icon: $tr.find('input[name=icon]').val(),
            cost: $tr.find('input[name=cost]').val(),
            count: $tr.find('input[name=count]').val(),
            version: $tr.find('input[name=version]').val(),
            description: $tr.find('input[name=description]').val(),
        };
        chests.update($tr.attr("data-id"), data, function(response) {
            $tr
                .removeClass("choose loading loading--sm")
                .find("input")
                .attr("readonly", true)
                .removeClass("editable");
            $tr.find('.' + btnCheckClass)
                .removeClass("show")
                .siblings('.' + btnEditClass).removeClass("hide");
        });
    }

    function removeTrFromTable($tr) {
        $tr.addClass("loading loading--sm");
        chests.remove($tr.attr("data-id"), function() {
            $tr
                .removeClass("loading loading--sm")
                .addClass("choose removed");
            setTimeout(function() {
                $tr.fadeOut();
            }, 400);
        });
    }

    $table.find('.' + btnEditClass).on("click", function(ev) {
        ev.preventDefault();
        const $tr = $(this).closest("tr");
        editTrInTable($tr);
    });

    $table.find('.' + btnCheckClass).on("click", function(event) {
        event.preventDefault();
        const $tr = $(this).closest("tr");
        acceptTrInTable($tr);
    });

    $table.find('.' + btnRemoveClass).on("click", function(event) {
        event.preventDefault();
        const $tr = $(this).closest("tr");
        removeTrFromTable($tr);
    });

    $table.find("input[type=text]").keypress(function(event) {
        if( !$(this).is('[readonly]') && event.keyCode === 13 ) {
            const $tr = $(this).closest("tr");
            acceptTrInTable($tr);
        }
    })
}

tableInit();