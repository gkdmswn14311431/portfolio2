window.onload = function () {
    var swiper = new Swiper(".main_visual", {
        /* spaceBetween: 30,
        centeredSlides: true, */
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }); //swiper main_visual

    let cont = document.getElementsByClassName('gift')[0];
    let contImg = cont.getElementsByTagName('img')[0];
    let contMenu = cont.getElementsByTagName('li');

    let i = 0;

    //li한테 아래쪽으로 테두리 스타일 적용
    contMenu[0].style.borderBottom = '1px solid #333';

    for (i; i < contMenu.length; i++) {
        console.log(i)
        let num = i + 1;
        let imgchange = 'img/imgg' + 0 + num + '.png';
        contMenu[i].onclick = function () {
            contImg.src = imgchange;

            //클릭을 했을 때 li한테 스타일 변화
            //if문으로 작성(조건식)


            contMenu[0].style.borderBottom = '1px solid #FCECD5';
            contMenu[1].style.borderBottom = '1px solid #FCECD5';
            contMenu[2].style.borderBottom = '1px solid #FCECD5';

            this.style.borderBottom = '1px solid #333'
        }


    }//contMenu.onclick


    let play = document.getElementsByClassName('swiper-play')[0];
    let stop = document.getElementsByClassName('swiper-stop')[0];
    play.style.display = 'none'
    play.onclick = function () {
        swiper.autoplay.start();

        if (stop.style.display == 'none') {
            stop.style.display = 'block'
            play.style.display = 'none'
        }
    }

    stop.onclick = function () {
        swiper.autoplay.stop();
        if (play.style.display == 'none') {
            play.style.display = 'block'
            stop.style.display = 'none'
        }
    }


    let hd = document.getElementsByTagName('header')[0];
    let business = document.getElementsByClassName('business')[0]
    let businessTitle = business.getElementsByClassName('title')[0];

    window.onscroll = function () {
        let scrollBar = window.scrollY; //현재 스크롤바
        //console.log(hd.offsetTop)
        if (hd.offsetTop < scrollBar) {
            hd.classList.add('on');
        } else {
            hd.classList.remove('on')
        }

        if (businessTitle.offsetTop / 3 < scrollBar) {
            businessTitle.classList.add('on');
        } else {
            businessTitle.classList.remove('on');
        }


        let result = document.getElementsByClassName('result')[0];
        let resultTitle = result.getElementsByTagName('h3')[0]
        let resultTextList = result.getElementsByClassName('text_list')[0]
        console.log(resultTitle.offsetTop)
        console.log(scrollBar)
        if (resultTitle.offsetTop - 500 < scrollBar) {
            resultTitle.classList.add('on')
        } else {
            resultTitle.classList.remove('on')
        }

    }//scroll event

    let businessMenuList = business.getElementsByClassName('business_menu')[0]
    let businessMenu = businessMenuList.getElementsByTagName('li');
    let businessItem = business.getElementsByClassName('item');

    for (let i = 0; i < businessItem.length; i++) {

        businessMenu[i].onclick = function () {
            businessMenu[0].classList.remove('on')
            businessMenu[1].classList.remove('on')
            businessMenu[2].classList.remove('on')

            businessMenu[i].classList.add('on')

            businessItem[0].classList.remove('on')
            businessItem[1].classList.remove('on')
            businessItem[2].classList.remove('on')

            businessItem[i].classList.add('on')
        }
    }
}