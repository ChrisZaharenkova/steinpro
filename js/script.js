
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
        const formImage = document.getElementById('formFile');
        const formPreview = document.getElementById('formPreview');
        formImage.addEventListener('change',()=>{
            uploadFile(formImage.files[0]);
        });
        function uploadFile(file){
            if(!['image/jpeg','image/png'].includes(file.type)){
                alert('Разрешены только изображения');
                formImage.value="";
                return;
            }
            if(file.size>2*1024*1024){
                alert('Файл должен быть менее 2МБ.')
                return;
            }
           let reader = new FileReader();
            reader.onload = function(e){
                formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`
            };
            reader.onerror = function(e){
                alert('Ошибка');
            };
            reader.readAsDataURL(file);
            
        } 
        console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#ff0f0f',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    email: {
      email: 'Введите корректный email',
      required: 'Введите email'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Здесь должно быть 10 символов без +7'
    }
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})
        


