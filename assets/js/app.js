$(document).ready(function(){
    const scrollLink = $(".scroll");
    const duration = 1000;
    //Smooth scrollinig
    scrollLink.click(function(e){
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top - 90
        }, duration);
    });

    //Active link switching 
    // $(window).scroll(function(){
    //     const scrollbarLocation = $(this).scrollTop();
        
    //     scrollLink.each(function(){
    //         const sectionOffset = $(this.hash).offset().top
    //         if ( sectionOffset <= scrollbarLocation ) {
    //             $(this).parent().addClass("active");
    //             $(this).parent().siblings().removeClass("active");
    //         }

    //     })
    // })
})