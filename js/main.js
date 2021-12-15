$(function(){

  menu =  gsap.fromTo('.h_menu02_fix a',{
    opacity:0,
    y:-20+'%'
},{
    opacity:1,
    stagger:0.1,// li의 순차대로 실행되는 것
    duration:0.5,
    y:0
})

menu.pause();//정지했다가 **


  $('.h_menu02').click(function(e){
    e.preventDefault(); // a 태그 필수, a태그의 href 효과 지우기!!!!!!!!
    $('.h_menu02_fix').addClass('on');
    menu.restart();//다시 닫았다가 눌러도 재시작 **
})

$('.h_menu02_fix .close').click(function(e){
    e.preventDefault();
    $('.h_menu02_fix').removeClass('on');
}) //달러 들어간건 제이쿼리 






  /*슬라이드 */
  var swiper = new Swiper(".ch_swiper", {
    slidesPerView: 1, /*모바일 사이즈 기준으로 우선 잡음 */
    navigation: {
      nextEl: ".ch_swiper .swiper-button-next",
      prevEl: ".ch_swiper .swiper-button-prev",
    },
    pagination: {
      el: ".ch_swiper .swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 2, /*태블릿 */
      },
      1024: {
        slidesPerView: 3, /*PC */
      },
    },
  });


 



  $('.fix_right').each(function(index, item){ 

    effectimg = gsap.timeline({
        scrollTrigger:{
            trigger:item,
            start:"top 80%",
            end:"bottom 0%",
            // markers:true,
            scrub:0.3,
        }
    })
    effectimg.to(item, {y:-150 })

});
$('.fix_left').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.3,
      }
  })
  effectimg.to(item, {y:-500 })

});
$('.fix_b_left').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.3,
      }
  })
  effectimg.to(item, {y:-400 })

});


$('.fix_b_right').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.3,
      }
  })
  effectimg.to(item, {y:-250 })

});
$('.fix_mid').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.3,
      }
  })
  effectimg.to(item, {y:-200 })

});
$('.fix_b2_right').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.3,
      }
  })
  effectimg.to(item, {y:-600 })

});
$('.fix_b2_left').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.3,
      }
  })
  effectimg.to(item, {y:-200 })

});
$('.vis_img').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          end:"bottom 0%",
          // markers:true,
          scrub:0.6,
      }
  })
  effectimg.to(item, {y:-150 })

});



let titEffect = gsap.timeline({ 
  scrollTrigger:{
      trigger:'.main_vis',
      start:"0% 80%",
      end:"bottom bottom",
  },
})

titEffect.fromTo('.main_vis .t_box',{
  opacity:0,
  "filter": "blur(3px)", 
 

},{
  opacity:1,
  "filter": "blur(0px)",
  duration:1.5,
 
}) 

let txtEffect = gsap.timeline({
  scrollTrigger:{
      trigger:'.sc_story',
      start:"-20% 0%",// 첫번째 top은 element 기준의 시작점(start), 두번째는 브라우저의 시작점(scroll-start)
      //markers:true,

  },
});

txtEffect.fromTo('.sc_story .title_txt',{
  opacity:0,
  "filter": "blur(6px)",
  xPercent:-5,
},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:1,
  duration:1,
  xPercent:0,
}) // 텍스트 효과 넣었고 첫번째 


txtEffect.fromTo('.sc_story .t_wrap',{
  opacity:0,
  "filter": "blur(6px)",

},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:1,
  duration:0.5,
 
})//이미지 효과 넣었고 두번째 -0.5는 좀 더 빨리 움직이도록 음수를 넣음

txtEffect.fromTo('.sc_story .vd_box',{
  opacity:0,
  "filter": "blur(6px)",

},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:1,
  duration:0.5,
 
})


let txtEffect1 = gsap.timeline({
  scrollTrigger:{
      trigger:'.sc_value',
      start:"-20% 0%",// 첫번째 top은 element 기준의 시작점(start), 두번째는 브라우저의 시작점(scroll-start)
      //markers:true,

  },
});

txtEffect1.fromTo('.sc_value .title_txt02',{
  opacity:0,
  "filter": "blur(6px)",
  xPercent:-5,
},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:1,
  duration:1,
  xPercent:0,
});

txtEffect1.fromTo('.sc_value .t_wrap',{
  opacity:0,
  "filter": "blur(5px)",


},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:0.3,
  duration:0.5,

 
});

txtEffect1.fromTo('.sc_value .bottom_box',{
  opacity:0,
  "filter": "blur(5px)",
  xPercent:10,

},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:0.3,
  duration:1.5,
  xPercent:0,
 
});

let txtEffect2 = gsap.timeline({
  scrollTrigger:{
      trigger:'.sc_charity',
      start:"-20% 0%",
      //markers:true,

  },
});

txtEffect2.fromTo('.sc_charity .title_txt',{
  opacity:0,
  "filter": "blur(6px)",
  xPercent:-5,
},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:1,
  duration:1,
  xPercent:0,
});

txtEffect2.fromTo('.sc_charity .t_wrap_c',{
  opacity:0,
  "filter": "blur(5px)",

},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:0.3,
  duration:0.5,
 
});
txtEffect2.fromTo('.sc_charity .slide_wrap',{
  opacity:0,
  "filter": "blur(5px)",

},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:0.3,
  duration:1,

 
});

let txtEffect3 = gsap.timeline({
  scrollTrigger:{
      trigger:'.sc_shop',
      start:"-20% 0%",
      //markers:true,

  },
});
txtEffect3.fromTo('.sc_shop .title_txt',{
  opacity:0,
  "filter": "blur(6px)",
  xPercent:-5,
},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:1,
  duration:1,
  xPercent:0,
});

txtEffect3.fromTo('.sc_shop ul',{
  opacity:0,
  "filter": "blur(5px)",
  xPercent:3,

},{
  opacity:1,
  "filter": "blur(0px)",
  stagger:0.3,
  duration:1.5,
  xPercent:0,
});



/* 섹션마다 공통된 클래스 이름 붙이기  */
//index-> 순서가져올때
//eq->index선택할때 

$('.sc_area').each(function(index, item){ 

  effectimg = gsap.timeline({
      scrollTrigger:{
          trigger:item,
          start:"top 80%",
          // end:"bottom 0%",
          //markers:true,
      onEnter: () => $('.fix_menu li').removeClass('active').eq(index).addClass('active'),
      // onLeave: () => $('.fix_menu li').removeClass('active'),
      // onEnterBack: () => $(this).addClass('revealed'),
      onLeaveBack: ()  => $('.fix_menu li').removeClass('active').eq(index).prev().addClass('active'),
      }
  })


  
$('.fix_menu a').click(function(e){
  e.preventDefault();
link = $(this).attr('href');
position = $(link).offset().top;// 위치를 알려주는 태그 


gsap.to('html',{'scrollTop':position, duration:1})

})
});





});//지우면 안됨 



  