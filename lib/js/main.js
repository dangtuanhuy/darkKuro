/* Dùng cho toàn bộ file HTML
(Javascript chung của tất cả) */

document.addEventListener('DOMContentLoaded', function () {
    // Code will run when page loaded correctly

    // Code of menu
    $('#toggle').click(function () {
        $('.ui.sidebar').transition('pulse');
        $('.ui.sidebar').sidebar('toggle');
    });

    //Hiệu ứng menu
    var menu = document.getElementById('menu');
    console.log(menu);
    

}, false);