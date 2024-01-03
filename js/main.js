
/*漢堡選單 */
$(function () {
    $('#toggleMenu').click(function () {
        var navbarUl = $(this).closest('.top').find('.navbar ul');
        var rigiserLogin = $(this).closest('.top').find('.rigiser_login');

        navbarUl.toggleClass('menu-active');
        rigiserLogin.toggleClass('menu-active');
    });
});

/*index.html的熱門商品變暗*/
$(function () {
    $('.product li img').css('opacity', 0.5).mouseover(function () {

        $(this).fadeTo(500, 1)

        $('.product li img').not(this).fadeTo(500, 0.5)

    })
});
/*index.html的熱門商品滑鼠滑過變亮*/
$('.product li').mousemove(function (e) {

    let theText = $(this).attr('data-text');

    $('#theProductDiv').show().text(theText).css({
        left: e.pageX + 15,
        top: e.pageY + 15,
    });
}).mouseout(function () {
    $('#theProductDiv').hide();
});

/*index.html的輪播 */
$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length
    // alert(imgCount)

    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:first').addClass('clicked')

    $('#content li').width(divWidth)            // li 的寬度
    $('#content').width(divWidth * imgCount)    // ul 的寬度

    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $('#contentButton li').click(function () {
        clearInterval(timer)

        index = $(this).index()
        // alert(index)

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext() {
        // 控制 index 只能介於 0 ~ 2 之間
        if (index < imgCount - 1) {
            index++
        } else {
            index = 0
        }
        // alert(index)

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
    }
});
/*留言板quotation.html的留言板*/

$(function () {
    $('#quo-btn').click(function () {
        let subject = $('.container input[placeholder="主旨"]').val();
        let content = $('.container textarea').val();


        let commentBox = $('<div>').addClass('comment-box');
        commentBox.append('<p><strong>主旨:</strong> ' + subject + '</p>');
        commentBox.append('<p><strong>信件內容:</strong> ' + content + '</p>');


        $('#feedback').append(commentBox);


        $('.container input[placeholder="主旨"]').val('');
        $('.container textarea').val('');
    })
});

// 清空 textarea
// $('.container textarea').val('');

// $('#feedback').append(name + '<br>').css({
//     'text-align': 'center',
//     'border': '3px solid black',
//     'font-size': '24px',
//     'width': '50%',
//     'margin': '0 auto'
// })




/*faq.html的qa用toggle*/
$(function () {
    $('#qa1').addClass('bold').click(function () {
        $(this).nextUntil('h3').toggle();
    }).nextUntil('h3').hide();

    $('#qa2').addClass('bold').click(function () {
        $(this).nextUntil('h3').toggle();
    }).nextUntil('h3').hide();
});
