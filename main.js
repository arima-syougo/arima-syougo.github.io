let galleryWidth = document.getElementById('gallery__list_ja').clientWidth;
let windowWidth = window.outerHeight;
let scrollSpace = galleryWidth - windowWidth/3;
console.log(galleryWidth);
console.log(scrollSpace);


function Responsive(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        gsap.to('#gallery__list_ja', { 
            x: -scrollSpace,
            scrollTrigger: {
                trigger: '#gallery',
                start: 'top', 
                scrub: true,
                pin: true,
            }
        });
    } else if (window.matchMedia('(min-width:768px)').matches) {
        gsap.to('#gallery__list_ja', { 
            x: -scrollSpace,
            scrollTrigger: {
                trigger: '#gallery',
                start: 'top 10%', 
                scrub: true,
                pin: true,
            }
        });
    }
}

window.onload = Responsive;


$('#hum_ja').click(function(){
    $(this).toggleClass('is-active');
    $('.header__nav').toggleClass('is-active');
    $('body').toggleClass('is-active');
});
$('.headre__connect').click(function(){
    $('#hum_ja').removeClass('is-active');
    $('#header__nav_ja').removeClass('is-active');
    $('body').removeClass('is-active');
});

$('.gallaery__item').click(function(){
    let ChangeImage = $(this).find('img');
    let ImageSrc = ChangeImage.attr('src');
    console.log(ImageSrc);
    $('#modal__image').attr('src',ImageSrc);
    $('#modal').fadeIn();
    $('body').addClass('is-active');
});
$('#modal-close').click(function(){
    $('#modal').fadeOut();
    $('body').removeClass('is-active');
});

$(function(){
    $('a[href^="#"]').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

