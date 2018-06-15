/* Dùng cho toàn bộ file HTML
(Javascript chung của tất cả) */

/*Phần này tạo hiệu ứng cho vertical menu và toggle*/
document.addEventListener('DOMContentLoaded', function () {
    // Code will run when page loaded correctly

    // Code of menu
    $('#toggle').click(function () {
<<<<<<< Updated upstream
        $('.ui.sidebar.menu').sidebar('setting','transition','overlay').sidebar('toggle');
=======
        $('.ui.sidebar').transition('pulse'); /*hiệu ứng pulse */
        $('.ui.sidebar').sidebar('toggle'); /*toogle khi nhấn*/
>>>>>>> Stashed changes
    });

    //Hiệu ứng menu khi scroll chuột
    var menu = document.getElementById('menu');
    var navStatus = false;
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 100) {
            if (navStatus == false) {
                menu.classList.remove('firstMenu');
                menu.classList.add('changeMenu');
                navStatus = true;
            }
        };
        if (window.pageYOffset < 100) {
            if (navStatus == true) {
                menu.classList.remove('changeMenu');
                menu.classList.add('firstMenu');
                navStatus = false;
            }
        };
    });


}, false);