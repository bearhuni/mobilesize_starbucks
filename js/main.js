/*
    이벤트 적용 방법 -클릭일 경우

    $('클릭할대상').click(function(){
        $('클릭을할대상')
    })

*/

$(function(){
    $('.open_menu').click(function(){
        //기본적인 애니메이션 명령 9가지
        //show, hide, toggle, fadeIn, fadeOut, fadeToggle, slideUp, slideDown, slideToggle 등
        //사이드 열기
        $('#side').animate({
        right: 0
        })
        $('#wrap').css({
            position : 'fixed'
        })

    return false;
    })
    //사이드 닫기
    $('.s_close').click(function(){
        $('#side').animate({
            right :'-100%'
        })
        $('#wrap').css({
            position : 'relative'
        })
    return false;
    })
    //사이드 아코디언 메뉴 열기
    $('.s_gnb .d1 .m1').click(function(){
        var d=$(this).siblings('.sub').css('display');
        
        if(d=='block'){
            $('.s_gnb .d1 .sub').slideUp();
            $('.s_gnb .d1 .m1').removeClass('on');
        }else{
            $('.s_gnb .d1 .sub').slideUp();
            $(this).siblings('.sub').slideDown();
            $('.s_gnb .d1 .m1').removeClass('on');
            $(this).addClass('on');
        }
    return false;
    
    
    
    
    })

})