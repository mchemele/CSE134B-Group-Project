$(document).ready(function () {
    $("#register").click(function () {
        $("#login").html('');
        $.ajax({
            url: "register.html",
            type: "post",
            success: function (res) {
                $("#login").html(res);
            }
        });
    });
    $("#forgot").click(function () {
        $("#login").html('');
        $.ajax({
            url: "password.html",
            type: "post",
            success: function (res) {
                $("#login").html(res);
            }
        });
    });
})