function cardsLoad(){switch(window.location.pathname){case"/zhivotnyie/":var t="/otpravka-formyi-filtra-dlya-vsex-zhivotnyix.html";break;case"/poisk.html":t="/otpravka-ajax-zaprosa-poiska.html";break;case"/zhivotnyie/koshki/":t="/otpravka-formyi-filtra-dlya-koshek.html";break;case"/zhivotnyie/sobaki/":t="/otpravka-formyi-filtra-dlya-sobak.html";break;case"/raduga/":t="/otpravka-formyi-dlya-radugi.html";break;case"/raduga/koshki/":t="/otpravka-formyi-filtra-dlya-koshek-radugi.html";break;case"/raduga/sobaki/":t="/otpravka-formyi-filtra-dlya-sobak-radugi.html";break;case"/uzhe-doma/":t="/otpravka-formyi-dlya-razdela-uzhe-doma.html";break;case"/uzhe-doma/koshki/":t="/otpravka-formyi-dlya-koshek-v-razdele-uzhe-doma.html";break;case"/uzhe-doma/sobaki/":t="/otpravka-formyi-filtra-sobak-v-razdele-uzhe-doma.html";break;default:t="/otpravka-formyi-filtra-dlya-vsex-zhivotnyix.html"}$(".loader").addClass("active"),$(".animal-card").css("opacity",".5"),$.ajax({type:"GET",url:t,data:$("form.animals__filter-section").serializeObject(),success:function(a){var a=a.replace(t,window.location),e=new RegExp(t,"g");$(".js-ajax-cards").html(a.replace(e,window.location)),$(".js-ajax-cards").html(a),myLazyLoad=new LazyLoad,$(".loader").removeClass("active"),$(".animal-card").css("opacity","1")}})}function resetFilter(){document.getElementById("animals-filter").reset(),$(".js-example-basic-multiple").val(null),$(".select2-search__field").attr("placeholder","Выберите цвет").css("width","100%"),$(".select2-selection__choice").remove(),$(".js-colors-clear").css("display","none");var a=parseInt($(".js-min-age").val()),e=parseInt($(".js-max-age").val());$(".age-choice").slider("option","values",[a,e]);var t=new URL(window.location);history.pushState({},null,t.origin+t.pathname),cardsLoad()}$.fn.serializeObject=function(){var a={},e=this.serializeArray();return $.each(e,function(){void 0!==a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):"colors[]"===this.name&&""===this.value||(a[this.name]=this.value||"")}),a},$(document).ready(function(){$(".js-in-work").mousemove(function(a){x=a.pageX+$(".tooltip").outerWidth()>=window.innerWidth?window.innerWidth-$(".tooltip").outerWidth()-20:a.pageX,$(".tooltip").css({left:x,top:a.pageY+30})}),$(".js-in-work").mouseenter(function(a){$(".tooltip").css({display:"block"})}),$(".js-in-work").mouseleave(function(a){$(".tooltip").css({display:"none"})}),$(".lightgallery").lightGallery();var t,a='<svg viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l3 6.649L1 14" stroke="#000" stroke-width="2"/></svg>';$("body").on("click",".modal-open",function(){$(".modal").fadeOut(200);var a=$(this),e=a.data("modal");$("html ,body").css("overflow","hidden"),$(e).fadeIn(200),"#get-animal"===e&&$("#animal-link").val(a.data("animal-link")),"#curate"===e&&($("#animal-id").val(a.data("animal-id")),$("#page-id").val(a.data("page-id")),$("#animal-rate").val(a.data("animal-price")),$("#animal-price").val(a.data("animal-price")))}),$(".modal__close, .modal__backing").click(function(){$(".modal").fadeOut(200),$("html ,body").css("overflow","auto"),$("#js-modal-video").html("")}),$(".js-video-play").click(function(){$("#watch-video").fadeIn(200),$("#js-modal-video").html($(this).data("video"))}),$('input[type="tel"]').mask("+7 (999) 999-99-99"),$(".news-slider__wrapper").owlCarousel({loop:!1,nav:!0,navText:[a,a],responsive:{0:{items:1},680:{items:2},968:{items:3},1230:{items:3},1400:{items:3}}}),$(".donate-section__tab").click(function(){var a=$(".donate-section__tab"),e=$(".donate-section__content");for(a.removeClass("active"),e.removeClass("active"),$(this).addClass("active"),i=0;i<a.length;i++)$(a[i]).hasClass("active")&&$(e[i]).addClass("active")}),$(".instagram__slider-wrapper").owlCarousel({loop:!1,nav:!0,navText:[a,a],items:3,margin:26,responsive:{0:{items:1,margin:16},680:{items:2,margin:20},968:{items:3,margin:20},1230:{items:3,margin:30},1400:{items:3,margin:32}}}),1<$(".animal__gallery-slide").length&&$(".animal__gallery-slider-wrapper").owlCarousel({loop:!1,nav:!0,navText:[a,a],items:1,URLhashListener:!0,margin:32,onTranslated:function(){var a=$(".animal__gallery-slider-wrapper .owl-item"),e=$(".animal__small-img");for(e.removeClass("active"),i=0;i<a.length;i++)$(a[i]).hasClass("active")&&$(e[i]).addClass("active")}}),1<$(".article__gallery-slide").length&&$(".article__gallery-slider-wrapper").owlCarousel({loop:!1,nav:!0,navText:[a,a],items:1,URLhashListener:!0,margin:32,onTranslated:function(){var a=$(".article__gallery-slider-wrapper .owl-item"),e=$(".article__small-img");for(e.removeClass("active"),i=0;i<a.length;i++)$(a[i]).hasClass("active")&&$(e[i]).addClass("active")}}),$(".header__top-left-nav-button").click(function(){$(".header__top-left-nav ul").toggleClass("active")}),$(".nav-button").click(function(){$(".main-nav").toggleClass("active"),$(this).toggleClass("active"),$(".header").toggleClass("menu-open")}),$(".main-nav__with-dropdown").mouseleave(function(a){var e;1130<=window.innerWidth&&(e=$(this).find(".main-nav__dropdown"),t=setTimeout(function(){e.slideUp(200)},200))}),$(".main-nav__with-dropdown").mousemove(function(a){1130<=window.innerWidth&&(clearTimeout(t),$(this).find(".main-nav__dropdown").slideDown(200))}),$(".main-nav__with-dropdown > .arrow").click(function(a){window.innerWidth<1130&&(a.preventDefault(),$(this).toggleClass("active"),$(this).next().slideToggle(200))}),$(window).scroll(function(){window.innerWidth<768?window.pageYOffset>$(".header").outerHeight()?$(".header__donate").addClass("active"):$(".header__donate").removeClass("active"):window.pageYOffset>$(".header__top").outerHeight()?$(".header__bottom").addClass("sticky"):$(".header__bottom").removeClass("sticky")}),$("#customerNumber").keyup(function(){var a=$("#customerNumber").val(),e=(e=parseFloat($("#sum").val())).toFixed(2);$("#ym_merchant_receipt").val('{"customer": {"email": "'+a+'"}, "items": [{"quantity": 1.0, "price": {"amount": '+e+'}, "tax": 1, "text": "Пожертвование приюту для животных «Краснодог» г.Краснодар"}]}')}),$("#sum").keyup(function(){var a=$("#customerNumber").val(),e=(e=parseFloat($("#sum").val())).toFixed(2);$("#ym_merchant_receipt").val('{"customer": {"email": "'+a+'"}, "items": [{"quantity": 1.0, "price": {"amount": '+e+'}, "tax": 1, "text": "Пожертвование приюту для животных «Краснодог» г.Краснодар"}]}')}),$("#sum").change(function(){var a=$("#customerNumber").val(),e=(e=parseFloat($("#sum").val())).toFixed(2);$("#ym_merchant_receipt").val('{"customer": {"email": "'+a+'"}, "items": [{"quantity": 1.0, "price": {"amount": '+e+'}, "tax": 1, "text": "Пожертвование приюту для животных «Краснодог» г.Краснодар"}]}')}),$("#customerNumber").change(function(){var a=$("#customerNumber").val(),e=(e=parseFloat($("#sum").val())).toFixed(2);$("#ym_merchant_receipt").val('{"customer": {"email": "'+a+'"}, "items": [{"quantity": 1.0, "price": {"amount": '+e+'}, "tax": 1, "text": "Пожертвование приюту для животных «Краснодог» г.Краснодар"}]}')});for(var e=$(".validate-form"),i=e.length-1;0<=i;i--)$(e[i]).validate({submitHandler:function(e){var t=$(e).find("button[type='submit']"),i=t.text(),s=$(e).find("input");$(e).ajaxSubmit({clearForm:!0,dataType:"json",beforeSubmit:function(){t.text("Отправка").css("opacity",".5"),s.css("opacity",".5")},success:function(a){s.css("opacity","1"),t.css("opacity","1").text(i),$(e).hasClass("js-animal-form")&&setTimeout(function(){$(".modal").fadeOut("active"),$("#get-animal-thx").fadeIn("active")},300)}})}});$(".animals__filter-show").click(function(a){$(".animals__filter-burger, .animals__filter-wrap").toggleClass("active")}),$(".animals__filter-checbox-input").change(function(){$(".js-page").val(1);var a=new URL(window.location),e=new URLSearchParams(a.search.slice(1));for(checkboxses=$(".animals__filter-checbox-input"),e.delete($(this).attr("name")),e.delete("page"),i=0;i<checkboxses.length;i++)$(checkboxses[i]).is(":checked")&&e.append($(this).attr("name"),$(checkboxses[i]).val());var t=new URL(window.location);history.pushState({},null,t.origin+t.pathname+"?"+e.toString()),cardsLoad()}),$(".js-example-basic-multiple").select2(),$(".js-example-basic-multiple").on("change",function(a){console.log(a),$(".js-page").val(1);var e=new URL(window.location),t=new URLSearchParams(e.search.slice(1));if(values=$(".js-example-basic-multiple").val(),t.delete($(this).attr("name")),t.delete("page"),values?$(".js-colors-clear").css("display","block"):$(".js-colors-clear").css("display","none"),values)for(var i=0;i<values.length;i++)values[i]&&t.append($(this).attr("name"),values[i]);var s=new URL(window.location);history.pushState({},null,s.origin+s.pathname+"?"+t.toString()),cardsLoad()}),$(".js-colors-clear").click(function(a){console.log(a),$(".js-example-basic-multiple").val(null).trigger("change"),$("#js-empty-val").trigger("change");var e=new URL(window.location),t=new URLSearchParams(e.search.slice(1));t.delete($(".js-example-basic-multiple").attr("name"));var i=new URL(window.location);t.toString()?history.pushState({},null,i.origin+i.pathname+"?"+t.toString()):history.pushState({},null,i.origin+i.pathname),$(".js-colors-clear").css("display","none")}),$(".age-choice").slider({min:parseInt($(".js-min-age").attr("min")),max:parseInt($(".js-max-age").attr("max")),values:[parseInt($(".js-min-age").val()),parseInt($(".js-max-age").val())],step:1,range:!0,slide:function(a,e){$(".js-min-age").val(e.values[0]),$(".js-max-age").val(e.values[1])},change:function(a,e){var t,i,s;a.originalEvent&&($(".js-page").val(1),t=new URL(window.location),(i=new URLSearchParams(t.search.slice(1))).delete("page"),i.set("min-age",e.values[0]),i.set("max-age",e.values[1]),s=new URL(window.location),history.pushState({},null,s.origin+s.pathname+"?"+i.toString()),cardsLoad())}}),$(".js-scroll-button").click(function(){$("html, body").animate({scrollTop:$($(this).data("block")).offset().top-$(".header").outerHeight()},500)}),$("body").on("click",".js-ajax-cards .pagination ul li a",function(a){$("html, body").animate({scrollTop:$(".animals_inside").offset().top},200),a.preventDefault();var e=$(this).attr("href"),t=(e=new URL(e)).searchParams.get("page"),i=e.searchParams.get("search"),t=t||1;$(".js-page").val(t),$(".js-search").val(i);var s=new URL(window.location);history.pushState({},null,s.origin+s.pathname+e.search),cardsLoad()}),$(".animal__like-button").click(function(){var e=$(this);e.hasClass("no-active")||(url="/likes.html",$.ajax({type:"POST",url:url,data:$(".animal__likes").serializeObject(),success:function(a){$(".animal__like-count").text(a),e.addClass("no-active")}}))}),$(".news__likes-button").click(function(){var e=$(this);e.hasClass("no-active")||(url="/likes.html",$.ajax({type:"POST",url:url,data:$(".news__likes").serializeObject(),success:function(a){$(".news__likes-count").text(a),e.addClass("no-active")}}))}),$(".news-card__footer-right-link-icon_like").click(function(){var a,e=$(this),t=$(this).next();e.hasClass("no-active")||(a=e.parent().serializeObject(),$.ajax({type:"POST",url:"/likes.html",data:a,success:function(a){t.text(a),e.addClass("no-active")}}))});new LazyLoad;$(".js-add-session-var").click(function(){var a=$(this).data("animal-id"),e=$(this).data("animal-price");$.ajax({type:"POST",url:"/sessionVarAdd.php",data:{loginAnimal:a,loginPrice:e},success:function(a){console.log("yes")}})}),$(".js-remove-session-var").click(function(){$.ajax({type:"POST",url:"/sessionVarRemove.php",data:{loginAnimal:"qq"},success:function(a){console.log("yes")}})})});
