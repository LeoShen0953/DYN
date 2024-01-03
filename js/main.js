
$(function () {
    $('#toggleMenu').click(function () {
        var navbarUl = $(this).closest('.top').find('.navbar ul');
        var rigiserLogin = $(this).closest('.top').find('.rigiser_login');

        // 使用 toggleClass 添加/移除 .menu-active 類
        navbarUl.toggleClass('menu-active');
        rigiserLogin.toggleClass('menu-active');
    });
});
// $(function () {
//     $('.top .fa').hover(
//         function () {
//             $(this).closest('.top').find('.navbar ul').stop(true).animate({
//                 left: '0px',
//             }, 500);
//         },
//         function () {
//             $(this).closest('.top').find('.navbar ul').animate({
//                 left: '-80vw',
//             }, 1000);
//         }
//     );
// });
$(function () {
    $('.banner img').click(function () {
        $(this).fadeOut(1000).delay(1000).fadeIn(1500);
    });
});
$(function () {
    $('.product li img').css('opacity', 0.5).mouseover(function () {

        $(this).fadeTo(500, 1)

        $('img').not(this).fadeTo(500, 0.5)

    })
});