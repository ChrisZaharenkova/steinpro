$(document).ready(function(){
    /*$("a[href^='#']").on("click", function () {
        let href = $(this).attr("href");
    
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, {
        duration: 300,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });
    
        return false;
    });
    
        
    $('.kitchenCatalog__item,.bathCatalog__item,.windowCatalog__item,.otherCatalog__item').click(function(e){
        if ($(window).width()>479){
        $(e.currentTarget).addClass('big');
        $('.wrapper').addClass('dark');
        $(e.currentTarget).click(function(e){
            if($(e.currentTarget).hasClass('end-item')){
                $('.end-item').removeClass('big');
                $('.start-item').addClass('big');
                
            }
            else{
            $(e.currentTarget).removeClass('big');
            $(e.currentTarget).next().addClass('big');}
            })}
            else{console.log("NO");return false}});
    
    
    $(document).on('mouseup', function(e){ // При нажатии на документ
        let s = $('.kitchenCatalog__item.big,.bathCatalog__item.big,.windowCatalog__item.big,.otherCatalog__item.big'); // берём .block.-active
        if(!s.is(e.target) && s.has(e.target).length === 0) {
          // Если нажат не он и не его дочернии И сам он существует
          s.removeClass('big'); // То удаляем у него класс .active
          $('.wrapper').removeClass('dark');
        }
      });
     function loop(){
      
       let currentSlide = $('.item-what__image.current'),
             currentSlideIndex = currentSlide.index(),
             nextSlide = currentSlide.next(),
             nextSlideIndex = currentSlideIndex + 1;
    
        currentSlide.hide().removeClass('current');
        if(nextSlideIndex === ($('.item-what__image').length)){
            $('.item-what__image:first').show().addClass('current');
        }else{
            nextSlide.show().addClass('current');
        } 
        
     }
        setInterval(loop,2500);
        */
        const formImage = document.getElementById('formImage');
        const formPreview = document.getElementById('formPreview');
        formImage.addEventListener('change',()=>{
            uploadFile(formImage.files[0]);
        });

});
