
//Loding Animation script
    
var preloader = document.getElementsById('main');

function myFunction() {
    preloader.style.display = 'none';     
};

//menu bar


$(document).ready(function () {
    $('#search').click(function () {
        $('.menu-item').addClass('hide-item')
        $('.search-form').addClass('active')
        $('.close').addClass('active')
        $('#search').hide()
    })
    $('.close').click(function () {
        $('.menu-item').removeClass('hide-item')
        $('.search-form').removeClass('active')
        $('.close').removeClass('active')
        $('#search').show()
    })
})