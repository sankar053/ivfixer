 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	
	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	
  

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.single-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: false,
	    smartSpeed: 1000,
	  });
		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  

	  $('.slide-one-item-alt').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    mouseDrag: false,
	    touchDrag: false,
	  });
	  $('.slide-one-item-alt-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    mouseDrag: false,
	    touchDrag: false,
	    
	  });
	  

	  $('.custom-next').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('next.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	  });
	  $('.custom-prev').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('prev.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	  });
	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	// siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


  var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	    // filter items on button click
	  $('#filters').on( 'click', 'button', function() {
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters button').removeClass('active');
	    $(this).addClass('active');
	  });
  }

  siteIstotope();


  $('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});

});

$(function() {
  /*

		Creative example - Customized layout
	    ====================================

	*/

  $('[data-fancybox="cl-group"]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: false,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function(instance) {
      return '<h3>home</h3><p>interiors, exteriors, and the humans that inhabit them.</p><p><a href="https://unsplash.com/collections/curated/162" target="_blank">unsplash.com</a></p>';
    }
  });

  /*

		Creative example - Product quick view
	    =====================================

	*/

  $(".quick_view").fancybox({
    baseClass: "quick-view-container",
    infobar: false,
    buttons: false,
    thumbs: false,
    margin: 0,
    touch: {
      vertical: false
    },
    animationEffect: false,
    transitionEffect: "slide",
    transitionDuration: 500,
    baseTpl:
      '<div class="fancybox-container" role="dialog">' +
      '<div class="quick-view-content">' +
      '<div class="quick-view-carousel">' +
      '<div class="fancybox-stage"></div>' +
      "</div>" +
      '<div class="quick-view-aside"></div>' +
      '<button data-fancybox-close class="quick-view-close">X</button>' +
      "</div>" +
      "</div>",

    onInit: function(instance) {
      /*

			    #1 Create bullet navigation links
			    =================================

			*/

      var bullets = '<ul class="quick-view-bullets">';

      for (var i = 0; i < instance.group.length; i++) {
        bullets += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + "</span></a></li>";
      }

      bullets += "</ul>";

      $(bullets)
        .on("click touchstart", "a", function() {
          var index = $(this).data("index");

          $.fancybox.getInstance(function() {
            this.jumpTo(index);
          });
        })
        .appendTo(instance.$refs.container.find(".quick-view-carousel"));

      /*

			    #2 Add product form
			    ===================

			*/

      var $element = instance.group[instance.currIndex].opts.$orig;
      var form_id = $element.data("qw-form");
      instance.$refs.container.find(".quick-view-aside").append(
        // In this example, this element contains the form
		
        $("#" + form_id)
          .clone(true)
          .removeClass("hidden")
      );
    },

    beforeShow: function(instance) {
      /*
			    Mark current bullet navigation link as active
			*/

      instance.$refs.container
        .find(".quick-view-bullets")
        .children()
        .removeClass("active")
        .eq(instance.currIndex)
        .addClass("active");
    }
  });

  /*

	    Creative example - Confirm dialog

	    See demo on CodePen: https://codepen.io/fancyapps/full/Ebmqgv/
	    ===========================================================

	*/

  // Step 1: Create reusable jQuery plugin
  // =====================================

  $.fancyConfirm = function(opts) {
    opts = $.extend(
      true,
      {
        title: "Are you sure?",
        message: "",
        okButton: "OK",
        noButton: "Cancel",
        callback: $.noop
      },
      opts || {}
    );

    $.fancybox.open({
      type: "html",
      src:
        '<div class="fc-content p-5 rounded">' +
        '<h2 class="mb-3">' +
        opts.title +
        "</h2>" +
        "<p>" +
        opts.message +
        "</p>" +
        '<p class="text-right">' +
        '<a data-value="0" data-fancybox-close href="javascript:;" class="mr-2">' +
        opts.noButton +
        "</a>" +
        '<button data-value="1" data-fancybox-close class="btn btn-primary">' +
        opts.okButton +
        "</button>" +
        "</p>" +
        "</div>",
      opts: {
        animationDuration: 350,
        animationEffect: "material",
        modal: true,
        baseTpl:
          '<div class="fancybox-container fc-container" role="dialog" tabindex="-1">' +
          '<div class="fancybox-bg"></div>' +
          '<div class="fancybox-inner">' +
          '<div class="fancybox-stage"></div>' +
          "</div>" +
          "</div>",
        afterClose: function(instance, current, e) {
          var button = e ? e.target || e.currentTarget : null;
          var value = button ? $(button).data("value") : 0;

          opts.callback(value);
        }
      }
    });
  };

  // Step 2: Start using it!
  // =======================

  $("#test_confirm").click(function() {
    // Open customized confirmation dialog window
    $.fancyConfirm({
      title: "Use Google's location service?",
      message:
        "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running",
      okButton: "Agree",
      noButton: "Disagree",
      callback: function(value) {
        if (value) {
          $("#test_confirm_rez").html("Let's do this!");
        } else {
          $("#test_confirm_rez").html("Maybe later.");
        }
      }
    });
  });

  /*

		Creative example - Morphing modal window

	    See demo on CodePen: https://codepen.io/fancyapps/full/xPdvdp/
	    ==============================================================

	*/

  // Step 1: Create jQuery plugin
  // ============================

  $.fn.fancyMorph = function(opts) {
    var Morphing = function($btn, opts) {
      var self = this;

      self.opts = $.extend(
        {
          animationEffect: false,
          infobar: false,
          buttons: ["close"],
          smallBtn: false,
          touch: false,
          baseClass: "fancybox-morphing",
          afterClose: function() {
            self.close();
          }
        },
        opts
      );

      self.init($btn);
    };

    Morphing.prototype.init = function($btn) {
      var self = this;

      self.$btn = $btn.addClass("morphing-btn");

      self.$clone = $('<div class="morphing-btn-clone" />')
        .hide()
        .insertAfter($btn);

      // Add wrapping element and set initial width used for positioning
      $btn.wrap('<span class="morphing-btn-wrap"></span>').on("click", function(e) {
        e.preventDefault();

        self.start();
      });
    };

    Morphing.prototype.start = function() {
      var self = this;

      if (self.$btn.hasClass("morphing-btn_circle")) {
        return;
      }

      // Set initial width, because it is not possible to start CSS transition from "auto"
      self.$btn
        .width(self.$btn.width())
        .parent()
        .width(self.$btn.outerWidth());

      self.$btn
        .off(".fm")
        .on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
          if (e.originalEvent.propertyName === "width") {
            self.$btn.off(".fm");

            self.animateBg();
          }
        })
        .addClass("morphing-btn_circle");
    };

    Morphing.prototype.animateBg = function() {
      var self = this;

      self.scaleBg();

      self.$clone.show();

      // Trigger repaint
      self.$clone[0].offsetHeight;

      self.$clone
        .off(".fm")
        .on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
          self.$clone.off(".fm");

          self.complete();
        })
        .addClass("morphing-btn-clone_visible");
    };

    Morphing.prototype.scaleBg = function() {
      var self = this;

      var $clone = self.$clone;
      var scale = self.getScale();
      var $btn = self.$btn;
      var pos = $btn.offset();

      $clone.css({
        top: pos.top + $btn.outerHeight() * 0.5 - $btn.outerHeight() * scale * 0.5 - $(window).scrollTop(),
        left: pos.left + $btn.outerWidth() * 0.5 - $btn.outerWidth() * scale * 0.5 - $(window).scrollLeft(),
        width: $btn.outerWidth() * scale,
        height: $btn.outerHeight() * scale,
        transform: "scale(" + 1 / scale + ")"
      });
    };

    Morphing.prototype.getScale = function() {
      var $btn = this.$btn,
        radius = $btn.outerWidth() * 0.5,
        left = $btn.offset().left + radius - $(window).scrollLeft(),
        top = $btn.offset().top + radius - $(window).scrollTop(),
        windowW = $(window).width(),
        windowH = $(window).height();

      var maxDistHor = left > windowW / 2 ? left : windowW - left,
        maxDistVert = top > windowH / 2 ? top : windowH - top;

      return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radius);
    };

    Morphing.prototype.complete = function() {
      var self = this;
      var $btn = self.$btn;

      $.fancybox.open({src: $btn.data("src") || $btn.attr("href")}, self.opts);
    };

    Morphing.prototype.close = function() {
      var self = this;
      var $clone = self.$clone;

      self.scaleBg();

      $clone.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
        $clone.hide();

        self.$btn.removeClass("morphing-btn_circle");
      });

      $clone.removeClass("morphing-btn-clone_visible");

      $(window).off("resize.fm");
    };

    // Init
    this.each(function() {
      var $this = $(this);

      if (!$this.data("morphing")) {
        $this.data("morphing", new Morphing($this, opts));
      }
    });

    return this;
  };

  // Step 2: Start using it!
  // =======================

  $("[data-morphing]").fancyMorph({
    hash: "morphing"
  });
});