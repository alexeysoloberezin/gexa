$(document).ready(function() {
	$('.open-video').click(function(e) {
		e.preventDefault()
		$('.popupVideo').fadeIn()	
	})

	$( 'body' ).on( "click", ".popup-video", function(e) {
		if (e.target.classList.contains('popup-video')){
			$('.popup-video').fadeOut()
		}
	});

	$('.inp input').focus(function(){
			$(this).placeholder = "";
	})
	
	// open popup
	$('.closePopup').click(() => {
		$('.popup').fadeOut()
	})
	$('.openPopupList').click(() => {
		$('.popup').fadeOut()
		$('.popupList').fadeIn()
	})
	$( 'body' ).on( "click", ".popup ", function(e) {
		if (e.target.classList.contains('popup')){
			$('.popup').fadeOut()
		}
	});

	$('.header__bottom-reg').click(() => $('.popupFirst').fadeIn())
	// open popup

	$('.iso__box').click(() => {
		$(this).find('.icon-arrow').toggleClass('active')
		$('.iso__hid').slideToggle('slow')
	})

	$('.gallery__min li').click(function(e) {
		e.preventDefault();		
		if ($(this).hasClass('open-video')){
			$(`popupVideo-${$(this).attr('data-key')}`).fadeIn()
		}else{
			$('.gallery__min li').removeClass('active')
			$(this).addClass('active')	
			const src = $(this).find('img').attr('src')
			const alt = $(this).find('img').attr('alt')
			const img = `<img src="${src}" alt="${alt}">`	
			$('.gallery__main img').remove()
			$('.gallery__main').append(img)
		}	
	})

	//burger - menu

	$('.burger-one').click(() => {
		$('.header__bottom nav').addClass('active')
		$('.window').fadeIn()
	})

	$('.burger-two').click(() => {
		$('.header__bottom nav').removeClass('active')
		$('.window').fadeOut()
	})

	$('.window').click(function() {
		$(this).fadeOut()
		$('.header__bottom nav').removeClass('active')
	})

	//burger 


	$('.applic__head').click(function() {
		const parent = $(this).parent()
		parent.toggleClass('active')		
		parent.find('.applic__hid').slideToggle('slow')
	})
	// sldiers  ----------------------------------------------

	if ( $('.mat__slider').length ){
		$('.mat__slider').slick({
			dots: false,
			infinite: true,
			variableWidth: true,
			focusOnSelect: true,
		});
	}
	if ( $('.matitem__slider').length ){
		$('.matitem__slider').slick({
			dots: false,
			focusOnSelect: true,
			slidesToShow: 2,
			prevArrow: $('.matitem__arrows .prev'),
			nextArrow: $('.matitem__arrows .next'),
		});
	}
	$('.matitem__toggler').click(function() {
		$(this).toggleClass('active')
		if($(this).hasClass('active')){
			$(this).find('p').text('Показать')
			$('.matitem__slider').hide()
			$('.matitem').addClass('sliderHide')
			$('.matitem__arrows').addClass('block')
		}else{
			$(this).find('p').text('Скрыть')
			$('.matitem__slider').show()
			$('.matitem').removeClass('sliderHide')
			$('.matitem__arrows').removeClass('block')
		}		
	})
	
	
	// sldiers  ----------------------------------------------

});


// dropdwn --------------------------------------
$('.dropdwn').click(function() {
	$(this).toggleClass('active')
	$(this).find('.dropdwn-list').toggle()
})
$('.dropdwn>a').click(function(e) {
	e.preventDefault()
})
$('.catalog__list-main').click(function(e) {
	e.preventDefault()
	$(this).toggleClass('active')
	$(this).parent().find('.catalog-dropdwn').slideToggle()
})
// dropdwn --------------------------------------


// filter --------------------------
const baseFilterImg = './assets/images/filter.png'
const activeFilterImg = './assets/images/activeFilter.png'

$('.filter').click(function() {
	$('.filter img').attr('src', baseFilterImg)
	$(this).toggleClass('active')
	if ($(this).hasClass('active')){
		$(this).find('img').attr('src', activeFilterImg)
	}		
})

$('.filter__btns-canc').click((e) => {
	e.preventDefault()
	closeFilter()
})
$('.filter img').click(function(){
	$(this).parent().find('.filter__drop').slideToggle('250')
})

function closeFilter() {
	$('.filter img').attr('src', baseFilterImg)
	$('.filter').removeClass('.active')
	$('.filter__drop').slideUp()
}
// filter --------------------------

$('.image-popup-zoom').magnificPopup({
	type: 'image',
	zoom: {
		enabled: true,
		duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
	}
});

$('.form__open-form').click(function(){
	$('.formclosed').toggleClass('close')
	$('.form__hid').slideToggle()
})


// магия с каталогом
$('.catalog-expand').click(function() {
	$(this).toggleClass('active')
	$('.index .catalog__list').toggle()
	$('.index .catalog__head-file').toggle()
	$('.index ').toggleClass('closecatalog')
	$('.catalog').toggleClass('mobcatalogopen')
})


// магия с каталогом 

