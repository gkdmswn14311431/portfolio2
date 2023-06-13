//Web 메뉴바 움직이기
/* (function(){
    let menu = $('.gnb li');
    menu.mouseenter(function(){
        console.log($(this).position().left)
        let moveLeft = $(this).position().left;
        $('.bar').stop().animate({
            'left': moveLeft
        })
    })
    
}) */


$(function(){
    /*   alert() */
    let menu = $('.gnb li');
    let bar = $('.bar');
    let item = $('.item');
  
    menu.mouseenter(function(){
      //1.bar의 위치이동
      //menu가 가지는 위치값 만큼
      //bar의 left값으로 적용
      let moveleft = $(this).position().left;
      $('.bar').stop().animate({
          'left': moveleft
      })
  
      //item에게 클래스명 제어
      //내가 클릭한 menu의 index순서값을 찾아서
      //그 순서에 맞춰서
      //item에게 클래스명 추가
      //addClass() , removeClass()
      item.removeClass('on')
      item.eq($(this).index()).addClass('on');
          
    })//menu.click
    
    let dg = $('.design');
    let designTop = dg.offset().top;
    console.log(designTop) // 0
    $(window).scroll(function(){
        let scrollBar = $(window).scrollTop();
        //스크롤바의 y축값(세로로 움직이는 값)

        //화면을 스크롤했을 때 실행
        //header가 가지는 값보다
        //스크롤바가 가지는 값이 더 클 때
        //헤더에게 클래스명 on추가
        if(designTop < scrollBar) {
            dg.addClass('on');
        } else {
            dg.removeClass('on');
        }
    })//스크롤했을때

    let web = $('.web');
    let webTop = web.offset().top;
    console.log(webTop) // 0
    let resume = $('.resume');
    let resumeTop = resume.offset().top;
    let Box = $('.box');

    $(window).scroll(function(){
        let scrollBar = $(window).scrollTop();
        console.log(scrollBar)
        if(webTop < scrollBar) {
            web.addClass('on');
        } else {
            web.removeClass('on');
        }

        //스크롤바의 y축값(세로로 움직이는 값)

        //화면을 스크롤했을 때 실행
        //header가 가지는 값보다
        //스크롤바가 가지는 값이 더 클 때
        //헤더에게 클래스명 on추가
        
        if(resumeTop < scrollBar) {
            resume.addClass('on');
        } else {
            resume.removeClass('on');
        }

        if(9000 < scrollBar) {
            Box.addClass('on');
        } 
    })//스크롤했을때


  
  })//jquery






