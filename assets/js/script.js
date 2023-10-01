$(document).ready(function() {

    const myTableFun = (table) => {
        $(".coptConti").css({ "display": "none" });
        $(".tableContainer").html("");
        $("#customRange3").attr("value", table)
        for (let i = 1; i <= 10; i++) {
            $(".tableContainer").append(`<p>${table} x ${i} = ${table*i}</p>`);
        }
    }

    $("#inputGroupPrepend2").click(function() {
        let table = $("#tableValGet").val();
        if (table) {
            $("#customRange3").attr("max", table)
            myTableFun(table);
        } else {
            return;
        }
    });

    $(".resetBtn").click(function() {
        window.location.href = window.location.href;
    });

    document.getElementById("customRange3").oninput = function() {
        myTableFun(this.value);
    }

});

document.getElementById("copyTxtCon").addEventListener('click', function(e) {
    window.open('https://lexuscreations.herokuapp.com/', '_blank')
})