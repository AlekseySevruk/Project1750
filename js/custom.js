jQuery(document).ready(function($) {

    "use strict";

    $ = jQuery;

    $('.menu ul a.fix').on( 'click', function(e){
        e.preventDefault();
        var section = $(this).attr('href');
        if( $('body').hasClass('home') )
        {
            $('html,body').animate(
                {scrollTop: $(''+section+'').offset().top},3000
            );
            $('nav.menu a').removeClass('active');
            $(this).addClass('active');
        } else {
            window.location.href = reborn.home_url + section;
        }

    } );

    $('#dates a').click(function(e){
        e.preventDefault();
        $('#issues li').hide();
        $( $(this).attr('href') ).fadeIn('fast');
    });

    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

    $(".responsive-nav .open").click(function(e){
        e.preventDefault();
        $(this).next('ul').slideToggle(500);
    });

    function blog_click(){
        $('.open-blog-single').click(function(e)
        {
            if( $('body').hasClass('page-template-template-home-php') )
            {
                e.preventDefault();
                var target_url = $(this).attr('href');
                var $loader = $('#blog-loader');
                $loader.fadeIn();
                $('.blogPost.single-contents').slideUp(500);
                $('.blogPost.single-contents').load( target_url + " #single", function(){
                    $loader.fadeOut();
                    $(this).slideDown(500);
                    $('html,body').animate(
                        {scrollTop: $('#blog-wrap').offset().top-125},1500
                    );
                    close_detail();
                });
            }
        });
    }

    function work_click(){
        $('.open-work-single').click(function(e)
        {
            e.preventDefault();
            var target_url = $(this).attr('href');
            var $loader = $('#work-loader');
            $loader.fadeIn();
            $('.work.single-contents').slideUp(500);
            $('.work.single-contents').load( target_url + " #single", function(){
                $loader.fadeOut();
                $(this).slideDown(500);
                $('html,body').animate(
                    {scrollTop: $('#work-wrap').offset().top-125},1500
                );
                close_detail();
            });
        });
    }

    blog_click();

    work_click();

    function close_detail(){
        $('.close').click(function(e){
            e.preventDefault();
            $(this).parents('.close-wrap').slideUp(500);
        });
    }

    $(window).scroll(function(){
        var pagetop = $(this).scrollTop();
        if (pagetop >= 400) {
            $('div#hidden_menu').slideDown();
        }
        if (pagetop <= 400) {
            $('div#hidden_menu').slideUp();
        }
    });

    // Home Sliders
    $(".slider").cycle({
        fx:'scrollRight',
        pager:'.slider-btn'
    });

    var browserHeight = $(window).height();
    $("#main_slider").css('height', browserHeight);
    $(window).resize(function() {
        var browserHeight = $(window).height();
        $("#main_slider").css('height', browserHeight);
    });

    $(".header-slider").cycle({
        fx:'scrollRight',
        pager:'.header-btn'
    });

    $(".blog-slider").cycle({
        fx:'scrollRight',
        pager:'.header-nav'
    });

    $(".our-team figure").hover(function(){
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    $("nav ul li").hover(function(){
        $(this).children('ul').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('ul').stop(true, true).fadeOut(500);
    });

    $(".work_item figure").hover(function(){
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    $(".blog-items article figure").hover(function(){
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    $(".single .close").click(function(e){
        e.preventDefault();
        $('.single ').stop(true, true).fadeOut('slow');
        $('.blog-items').stop(true, true).fadeIn('slow');
    });

    $( ".close" ).click(function(e) {
        e.preventDefault();
        $( ".work_detail" ).slideUp();
    });

    // Portfolio Filterations
    var $container = $('#project-container');
    $container.isotope({
        itemSelector : '.element'
    });
    var $optionSets = $('.my-selector'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function(){
        var $this = $(this);
        if ( $this.hasClass('selected') ) {
            return false;
        }
        var $optionSet = $this.parents('.my-selector');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[ key ] = value;
        function changeLayoutMode(){}
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            changeLayoutMode( $this, options );
        } else {
            $container.isotope( options );
        }
        return false;
    });

});