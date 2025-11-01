//SuperSlide
!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"cur",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.size(),l=a(c.mainCell,d),m=l.children().size(),n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);parseInt(c.triggerTime);var Q,t=parseInt(c.scroll),u=parseInt(c.vis),v="false"==c.autoPlay||0==c.autoPlay?!1:!0,w="false"==c.opp||0==c.opp?!1:!0,x="false"==c.autoPage||0==c.autoPage?!1:!0,y="false"==c.pnLoop||0==c.pnLoop?!1:!0,z="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,A="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,B="false"==c.returnDefault||0==c.returnDefault?!1:!0,C=0,D=0,E=0,F=0,G=c.easing,H=null,I=null,J=null,K=c.titOnClassName,L=j.index(d.find("."+K)),M=p=-1==L?p:L,N=p,O=p,P=m>=u?0!=m%t?m%t:t:0,R="leftMarquee"==e||"topMarquee"==e?!0:!1,S=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},T=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){j.removeClass(K),A&&j.eq(N).addClass(K)};if("menu"==c.type){return A&&j.removeClass(K).eq(p).addClass(K),j.hover(function(){Q=a(this).find(c.targetCell);var b=j.index(a(this));I=setTimeout(function(){switch(p=b,j.removeClass(K).eq(p).addClass(K),S(),e){case"fade":Q.stop(!0,!0).animate({opacity:"show"},q,G,T);break;case"slideDown":Q.stop(!0,!0).animate({height:"show"},q,G,T)}},c.triggerTime)},function(){switch(clearTimeout(I),e){case"fade":Q.animate({opacity:"hide"},q,G);break;case"slideDown":Q.animate({height:"hide"},q,G)}}),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(U,q)}),void 0}if(0==k&&(k=m),R&&(k=2),x){if(m>=u){if("leftLoop"==e||"topLoop"==e){k=0!=m%t?(0^m/t)+1:m/t}else{var V=m-u;k=1+parseInt(0!=V%t?V/t+1:V/t),0>=k&&(k=1)}}else{k=1}j.html("");var W="";if(1==c.autoPage||"true"==c.autoPage){for(var X=0;k>X;X++){W+="<li>"+(X+1)+"</li>"}}else{for(var X=0;k>X;X++){W+=c.autoPage.replace("$",X+1)}}j.html(W);var j=j.children()}if(m>=u){l.children().each(function(){a(this).width()>E&&(E=a(this).width(),D=a(this).outerWidth(!0)),a(this).height()>F&&(F=a(this).height(),C=a(this).outerHeight(!0))});var Y=l.children(),Z=function(){for(var a=0;u>a;a++){Y.eq(a).clone().addClass("clone").appendTo(l)}for(var a=0;P>a;a++){Y.eq(m-a-1).clone().addClass("clone").prependTo(l)}};switch(e){case"fold":l.css({position:"relative",width:D,height:C}).children().css({position:"absolute",width:E,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden;position:relative;height:'+u*C+'px"></div>').css({top:-(p*t)*C,position:"relative",padding:"0",margin:"0"}).children().css({height:F});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden;position:relative;width:'+u*D+'px"></div>').css({width:m*D,left:-(p*t)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:E});break;case"leftLoop":case"leftMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden;position:relative;width:'+u*D+'px"></div>').css({width:(m+u+P)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(P+p*t)*D}).children().css({"float":"left",width:E});break;case"topLoop":case"topMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden;position:relative;height:'+u*C+'px"></div>').css({height:(m+u+P)*C,position:"relative",padding:"0",margin:"0",top:-(P+p*t)*C}).children().css({height:F})}}var $=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},_=function(b){var c=function(c){for(var d=c;u+c>d;d++){b.eq(d).find("img["+n+"]").each(function(){var b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0]){for(var c=l.children(),d=0;d<c.size();d++){c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})}}})}};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(P+$(O));break;case"leftMarquee":case"topMarquee":var d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?D:C,g=P;if(0!=d%f){var h=Math.abs(0^d/f);g=1==p?P+h:P+h-1}c(g)}},ab=function(a){if(!A||M!=p||a||R){if(R?p>=1?p=1:0>=p&&(p=0):(O=p,p>=k?p=0:0>p&&(p=k-1)),S(),null!=n&&_(l.children()),o[0]&&(Q=o.eq(p),null!=n&&_(o),"slideDown"==e?(o.not(Q).stop(!0,!0).slideUp(q),Q.slideDown(q,G,function(){l[0]||T()})):(o.not(Q).stop(!0,!0).hide(),Q.animate({opacity:"show"},q,function(){l[0]||T()
}))),m>=u){switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().animate({opacity:"hide"},q,G);break;case"top":l.stop(!0,!1).animate({top:-p*t*C},q,G,function(){T()});break;case"left":l.stop(!0,!1).animate({left:-p*t*D},q,G,function(){T()});break;case"leftLoop":var b=O;l.stop(!0,!0).animate({left:-($(O)+P)*D},q,G,function(){-1>=b?l.css("left",-(P+(k-1)*t)*D):b>=k&&l.css("left",-P*D),T()});break;case"topLoop":var b=O;l.stop(!0,!0).animate({top:-($(O)+P)*C},q,G,function(){-1>=b?l.css("top",-(P+(k-1)*t)*C):b>=k&&l.css("top",-P*C),T()});break;case"leftMarquee":var c=l.css("left").replace("px","");0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*D)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+P)*D&&l.css("left",-P*D)});break;case"topMarquee":var d=l.css("top").replace("px","");0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*C)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+P)*C&&l.css("top",-P*C)})}}j.removeClass(K).eq(p).addClass(K),M=p,y||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<b>"+(p+1)+"</b>|"+k)}};A&&ab(!0),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(function(){p=N,A?ab():"slideDown"==e?Q.slideUp(q,U):Q.animate({opacity:"hide"},q,U),M=p},300)});var bb=function(a){H=setInterval(function(){w?p--:p++,ab()},a?a:r)},cb=function(a){H=setInterval(ab,a?a:r)},db=function(){z||(clearInterval(H),bb())},eb=function(){(y||p!=k-1)&&(p++,ab(),R||db())},fb=function(){(y||0!=p)&&(p--,ab(),R||db())},gb=function(){clearInterval(H),R?cb():bb(),i.removeClass("pauseState")},hb=function(){clearInterval(H),i.addClass("pauseState")};if(v?R?(w?p--:p++,cb(),z&&l.hover(hb,gb)):(bb(),z&&d.hover(hb,gb)):(R&&(w?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?gb():hb()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);I=setTimeout(function(){p=a,ab(),db()},c.triggerTime)},function(){clearTimeout(I)}):j.click(function(){p=j.index(this),ab(),db()}),R){if(g.mousedown(eb),f.mousedown(fb),y){var ib,jb=function(){ib=setTimeout(function(){clearInterval(H),cb(0^r/10)},150)},kb=function(){clearTimeout(ib),clearInterval(H),cb()};g.mousedown(jb),g.mouseup(kb),f.mousedown(jb),f.mouseup(kb)}"mouseover"==c.trigger&&(g.hover(eb,function(){}),f.hover(fb,function(){}))}else{g.click(eb),f.click(fb)}})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return -d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return -d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return -d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return -d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return -d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b){return c}if(1==(b/=e)){return c+d}if(g||(g=0.3*e),h<Math.abs(d)){h=d;var f=g/4}else{var f=g/(2*Math.PI)*Math.asin(d/h)}return -(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b){return c}if(1==(b/=e)){return c+d}if(g||(g=0.3*e),h<Math.abs(d)){h=d;var f=g/4}else{var f=g/(2*Math.PI)*Math.asin(d/h)}return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b){return c}if(2==(b/=e/2)){return c+d}if(g||(g=e*0.3*1.5),h<Math.abs(d)){h=d;
var f=g/4}else{var f=g/(2*Math.PI)*Math.asin(d/h)}return 1>b?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:0.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+0.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+0.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+0.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?0.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:0.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+0.5*d+c}});

$(()=>{
$('img[src=]').attr('src','/images/default.jpg');
});

/*更新时间：2016-11-17*/
function nav(nav) {
    var li_width = 0;
    var nav_width = 0;
    var li_pa;
    var li_len = $("#" + nav + ">ul>li").length;
    for (i = 0; i < li_len; i++) {
        nav_width += $("#" + nav + ">ul>li").eq(i).outerWidth();
    }
    li_pa = Math.floor(($("#" + nav + "").width() - nav_width) / li_len * 0.5);
    $("#" + nav + ">ul>li>a").css({ "padding-left": li_pa, "padding-right": li_pa });

    nav_width = 0;

    for (i = 0; i < li_len; i++) {
        nav_width += $("#" + nav + ">ul>li").eq(i).outerWidth();
    }
    var last_pa = $("#" + nav + "").width() - nav_width
    $("#" + nav + ">ul>li>a:last").css({ "padding-right": li_pa + last_pa * 0.5, "padding-left": li_pa + last_pa * 0.5 })
    if ($("#" + nav + ">ul").height() > $("#" + nav + ">ul>li").height()) {
        $("#" + nav + ">ul>li>a:last").css({ "padding-right": li_pa + last_pa * 0.5, "padding-left": li_pa + last_pa * 0.5 - 1 })
    }

}/*end nav()*/
function mswMove(boxID, btn_left, btn_right, btnBox, Car, direction, way, moveLengh, speed, Interval, number) {
    var _ID = $("#" + boxID + "");
    var _btn_left = $("#" + btn_left + "");
    var _btn_right = $("#" + btn_right + "");
    var _btnBox = $("#" + btnBox + "");
    var jsq = 0
    var timer;
    var cj;
    var no_way = 0;
    var no_wayGet = 0;
    var fade = 0;
    var new_time = new Date;

    var ID_liLen, ID_liheight, cbtmBtn;
    ID_liLen = _ID.find("li").length;
    ID_liheight = _ID.find("li").innerHeight();

    if (direction == "left" || direction == "right") {
        _ID.find("ul").width(ID_liLen * moveLengh);
    } else if (direction == "top" || direction == "bottom") {
        _ID.find("ul").height(ID_liLen * moveLengh);
        _btnBox.hide()
    } else if (direction == "fade") {
        _ID.find("ul").width(moveLengh).height(ID_liheight);
        _ID.find("li").eq(0).show().siblings().hide();
        _ID.find("li").css({ "position": "absolute", "left": 0, "top": 0 });
    }
    _btnBox.empty();
    for (i = 0; i < ID_liLen; i++) {
        _btnBox.append("<span></span>");
    };
    _btnBox.find("span").eq(0).addClass("cur");

    if (way == false) {
        _btn_left.hide();
        _btn_right.hide();
        _btnBox.hide();
    }


    function Carousel() {
        if (way == false) {
            no_way++;

            if (direction == "left") {
                _ID.find("ul").css({ "left": -no_way });
                no_wayGet = parseInt(_ID.find("ul").css("left"));
                if (no_wayGet == -moveLengh) {
                    no_way = 0
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "left": 0 });
                }
            }

            if (direction == "right") {

                no_wayGet = parseInt(_ID.find("ul").css("left"));
                if (no_wayGet == 0) {
                    no_way = -moveLengh
                    _ID.find("li:last").insertBefore(_ID.find("li:first"));
                    _ID.find("ul").css({ "left": 0 });
                }
                _ID.find("ul").css({ "left": no_way });
            }

            if (direction == "top") {
                _ID.find("ul").css({ "top": -no_way });
                no_wayGet = parseInt(_ID.find("ul").css("top"));
                if (no_wayGet == -moveLengh) {
                    no_way = 0
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "top": 0 });
                }
            }

            if (direction == "bottom") {

                no_wayGet = parseInt(_ID.find("ul").css("top"));
                if (no_wayGet == 0) {
                    no_way = -moveLengh
                    _ID.find("li:last").insertBefore(_ID.find("li:first"));
                    _ID.find("ul").css({ "top": 0 });
                }
                _ID.find("ul").css({ "top": no_way });
            }


        } else if (way == true) {

            if (direction == "left") {
                _ID.find("ul").animate({ left: -moveLengh }, speed, function () {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "left": 0 });
                });
                if (jsq < ID_liLen - 1) {
                    jsq++;
                    _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                } else {
                    jsq = 0;
                    _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                }

            }

            if (direction == "right") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "left": -moveLengh });
                _ID.find("ul").stop().animate({ left: 0 }, speed);
                if (jsq > 0) {
                    jsq--;
                    _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                } else {
                    jsq = ID_liLen - 1;
                    _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                }

            }

            if (direction == "top") {
                _ID.find("ul").animate({ top: -moveLengh }, speed, function () {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "top": 0 });
                });
            }

            if (direction == "bottom") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "top": -moveLengh });
                _ID.find("ul").stop().animate({ top: 0 }, speed);

            }
            if (direction == "fade") {

                if (fade < ID_liLen - 1) {
                    fade++;
                } else { fade = 0 }
                _ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
                _btnBox.find("span").eq(fade).addClass("cur").siblings().removeClass("cur");

            }

        }
    }


    if (Car == true) {

        if (ID_liLen > number) {
            timer = setInterval(Carousel, Interval);
        } else {
            clearInterval(timer);
            _btn_left.hide();
            _btn_right.hide();
            _btnBox.hide();
        }
    } else {
        clearInterval(timer);
    }
    _ID.find("li").hover(function () {
        clearInterval(timer);
    }, function () {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }
    });


    _btn_right.hover(function () {
        clearInterval(timer);
    }, function () {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }

    }).click(function () {
        if (new Date - new_time > 500) {
            new_time = new Date;

            if (direction == "left" || direction == "right") {
                _ID.find("ul").animate({ left: -moveLengh }, speed, function () {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "left": 0 });
                });
            }


            if (direction == "top" || direction == "bottom") {
                _ID.find("ul").animate({ top: -moveLengh }, speed, function () {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "top": 0 });
                });
            }
            if (direction == "fade") {

                if (fade > 0) {
                    fade--;
                } else { fade = ID_liLen - 1 }
                _ID.find("li").stop(true, true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);

            }
            if (jsq < ID_liLen - 1) {
                jsq++;
                _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            } else {
                jsq = 0;
                _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            };


        } else { };
    });
    _btn_left.hover(function () {
        clearInterval(timer);
    }, function () {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }
    }).click(function () {
        if (new Date - new_time > 500) {
            new_time = new Date;

            if (direction == "left" || direction == "right") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "left": -moveLengh });
                _ID.find("ul").stop().animate({ left: 0 }, speed);
            }

            if (direction == "top" || direction == "bottom") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "top": -moveLengh });
                _ID.find("ul").stop().animate({ top: 0 }, speed);

            }
            if (direction == "fade") {

                if (fade < ID_liLen - 1) {
                    fade++;
                } else { fade = 0 }
                _ID.find("li").stop(true, true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);

            }
            if (jsq > 0) {
                jsq--;
                _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            } else {
                jsq = ID_liLen - 1;
                _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            };
        } else { };
    });

    _btnBox.find("span").hover(function () {
        clearInterval(timer);

    }, function () {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }
    }).click(function () {
        if (new Date - new_time > 500) {
            new_time = new Date;
            cbtmBtn = $(this).index();
            $(this).addClass("cur").siblings().removeClass("cur");
            if (direction == "fade") {
                _ID.find("li").eq(cbtmBtn).fadeIn(speed).siblings().fadeOut(speed);
            } else {
                if (cbtmBtn > jsq) {
                    cj = cbtmBtn - jsq;
                    jsq = cbtmBtn;

                    _ID.find("ul").stop().animate({ left: -moveLengh * cj }, speed, function () {
                        for (i = 0; i < cj; i++) {
                            _ID.find("ul").css({ "left": 0 })
                            _ID.find("li:first").insertAfter(_ID.find("li:last"));
                        };
                    });
                } else {
                    cj = jsq - cbtmBtn;
                    jsq = cbtmBtn;
                    _ID.find("ul").css({ "left": -moveLengh * cj });
                    for (i = 0; i < cj; i++) {
                        _ID.find("ul").stop().animate({ left: 0 }, speed);
                        _ID.find("li:last").insertBefore(_ID.find("li:first"));
                    };
                };
            };
        } else { };
    });
}//end mswMove()
function msw_jzt(ID, btnLeft, btnRight, elment, title, speed, number, pre) {
    var _ID = $('#' + ID + '');
    var _BtnLeft = $("#" + btnLeft + "");
    var _BtnRight = $("#" + btnRight + "");
    var _elment = $("#" + ID + " ." + elment + "");
    var len = $("#" + ID + " ." + elment + "").length;
    var number = number;
    var pfnum = (number - 1) / 2;
    var jsq = 0;
    var active = 0;


    _ID.width('100%').height('100%').css({ 'position': 'relative', 'z-index': 1 });
    _elment.find('img').css({ 'width': '100%', 'display': 'block' });
    _elment.css({ 'width': '30%', 'left': '35%', 'top': '5%', 'z-index': 0, 'position': ' absolute' });
    _elment.eq(pfnum).css({ 'width': '' + pre + '%', 'left': '' + (100 - pre) / 2 + '%', 'top': '0', 'z-index': number }).addClass("active");
    _elment.find("" + title + "").hide();
    _elment.eq(pfnum).find("" + title + "").show();
    for (i = 1, th = pfnum; i < pfnum + 1; i++) {

        _elment.eq(th + i).css({ 'width': '' + (pre - 10 * i) + '%', 'left': '' + (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', 'top': '' + 7.5 * i + '%', 'z-index': number - i });

        _elment.eq(th - i).css({ 'width': '' + (pre - 10 * i) + '%', 'left': '' + 100 - (pre - 10 * i) - (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', 'top': '' + 7.5 * i + '%', 'z-index': number - i });

    };

    var time = new Date;

    _BtnLeft.hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(car, 4000);
    }).click(function () {
        if (new Date - time > 500) {
            time = new Date;
            $("#" + ID + " ." + elment + ":first").animate({ width: '30%', left: '35%', top: '5%' }).css({ 'z-index': 0 });
            $("#" + ID + " ." + elment + ":first").insertAfter($("#" + ID + " ." + elment + ":last"));
            $("#" + ID + " ." + elment + "").eq(pfnum).addClass("active").animate({ width: '' + pre + '%', left: '' + (100 - pre) / 2 + '%', top: 0 }).css({ 'z-index': number }).find("" + title + "").show();
            $("#" + ID + " ." + elment + "").eq(pfnum).siblings().removeClass("active").find("" + title + "").hide();
            for (i = 1, th = pfnum; i < pfnum + 1; i++) {

                $("#" + ID + " ." + elment + "").eq(th + i).animate({ width: '' + (pre - 10 * i) + '%', left: '' + (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', top: '' + 7.5 * i + '%' }).css({ 'z-index': number - i });

                $("#" + ID + " ." + elment + "").eq(th - i).animate({ width: '' + (pre - 10 * i) + '%', left: '' + 100 - (pre - 10 * i) - (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', top: '' + 7.5 * i + '%' }).css({ 'z-index': number - i });
            };
            for (i = number; i < len - 1; i++) {
                $("#" + ID + " ." + elment + "").eq(i).animate({ width: '0%', left: '50%', top: '50%' }).css({ 'z-index': 0 });
            };
        } else { };
    });

    _BtnRight.hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(car, 4000);
    }).click(function () {
        if (new Date - time > 500) {
            time = new Date;
            $("#" + ID + " ." + elment + ":last").animate({ width: '' + (pre - 10 * pfnum) + '%', left: '' + 100 - (pre - 10 * pfnum) + '%', top: '' + 7.5 * pfnum + '%' }).css({ 'z-index': number - pfnum });
            $("#" + ID + " ." + elment + ":last").insertBefore($("#" + ID + " ." + elment + ":first"));
            //$("#jzt .list").eq(pfnum).addClass('active');
            $("#" + ID + " ." + elment + "").eq(pfnum).addClass("active").animate({ width: '' + pre + '%', left: '' + (100 - pre) / 2 + '%', top: 0 }).css({ 'z-index': number }).find("" + title + "").show();
            $("#" + ID + " ." + elment + "").eq(pfnum).siblings().removeClass("active").find("" + title + "").hide();
            for (i = 1, th = pfnum; i < pfnum + 1; i++) {

                $("#" + ID + " ." + elment + "").eq(th + i).animate({ width: '' + (pre - 10 * i) + '%', left: '' + (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', top: '' + 7.5 * i + '%' }).css({ 'z-index': number - i });

                $("#" + ID + " ." + elment + "").eq(th - i).animate({ width: '' + (pre - 10 * i) + '%', left: '' + 100 - (pre - 10 * i) - (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', top: '' + 7.5 * i + '%' }).css({ 'z-index': number - i });

            };
            for (i = number; i < len - 1; i++) {
                $("#" + ID + " ." + elment + "").eq(i).animate({ width: '0%', left: '50%', top: '5%' }).css({ 'z-index': 0 });
            };
        };
    });

    function car() {
        $("#" + ID + " ." + elment + ":first").animate({ width: '30%', left: '35%', top: '5%' }).css({ 'z-index': 0 });
        $("#" + ID + " ." + elment + ":first").insertAfter($("#" + ID + " ." + elment + ":last"));
        //$("#jzt .list").eq(2).addClass('active');
        $("#" + ID + " ." + elment + "").eq(pfnum).addClass("active").animate({ width: '' + pre + '%', left: '' + (100 - pre) / 2 + '%', top: 0 }).css({ 'z-index': number }).find("" + title + "").show();
        $("#" + ID + " ." + elment + "").eq(pfnum).siblings().removeClass("active").find("" + title + "").hide();
        for (i = 1, th = pfnum; i < pfnum + 1; i++) {

            $("#" + ID + " ." + elment + "").eq(th + i).animate({ width: '' + (pre - 10 * i) + '%', left: '' + (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', top: '' + 7.5 * i + '%' }).css({ 'z-index': number - i });

            $("#" + ID + " ." + elment + "").eq(th - i).animate({ width: '' + (pre - 10 * i) + '%', left: '' + 100 - (pre - 10 * i) - (100 - pre) * 0.5 / pfnum * (pfnum - i) + '%', top: '' + 7.5 * i + '%' }).css({ 'z-index': number - i });
        };
        for (i = number; i < len - 1; i++) {
            $("#" + ID + " ." + elment + "").eq(i).animate({ width: '0%', left: '50%', top: '50%' }).css({ 'z-index': 0 });
        };
    }
    var t = setInterval(car, speed);







}//jzt end
function tankuang(ID, clickElement, title, showH, tkID) {

    var _tkId = $("#" + tkID + "");
    var _ID = $("#" + ID + "");
    var _cke = $("#" + ID + " " + clickElement + "");
    var _close = $("#" + tkID + "").find(".close");
    var _len = $("#" + ID + " " + clickElement + "").length;
    var _IDimg, _IDtext, w, m, n = 0, a = 0, _width, imgNum = 0;

    var w_width = $(window).width();
    _tkId.find(".imgShow").find("li").width(w_width);

    if (showH == true) {
        _tkId.find("p").show();
        _tkId.find("p").siblings("img").css({ "height": "90%" });
    } else {
        _tkId.find("p").hide();
        _tkId.find("p").siblings("img").css({ "height": "100%" });
    };

    _close.click(function () {
        _tkId.fadeOut(500);
        _tkId.find(".imgShow").find("ul").css({ "left": 0 })
        imgNum = 0; n = 0; w = 0; m = 0;
        _tkId.find(".imgBox").find("ul").empty();
        _tkId.find(".imgShow").find("ul").empty();
    });


    _cke.click(function () {
        imgNum = $("#" + ID + " " + clickElement + "").index(this)
        _tkId.fadeIn(500);
        _tkId.find(".imgBox").find("ul").empty();
        _tkId.find(".imgShow").find("ul").empty();
        for (i = 0; i < _len; i++) {
            _IDimg = _ID.find(clickElement).eq(i).find("img").attr("src");
            _IDtext = _ID.find(clickElement).eq(i).find(title).text();
            _tkId.find(".imgBox").find("ul").append("<li><img src='" + _IDimg + "'><em>" + _IDtext + "</em></li>");
            _tkId.find(".imgShow").find("ul").append("<li><img src='" + _IDimg + "'><p>" + _IDtext + "</p></li>");

        };

        _tkId.find(".imgShow").find("li").width(w_width);
        _tkId.find(".imgShow").find("ul").width(w_width * _len);
        _tkId.find(".imgBox").find("li").eq(0).addClass("cur").siblings().removeClass("cur");
        _width = _tkId.find(".imgBox").find("li").innerWidth() + 1;
        var imgBoxUl = 0;
        for (i = 0; i < _len; i++) {
            imgBoxUl += _tkId.find(".imgBox").find("li").eq(i).innerWidth() + 1;

        }
        _tkId.find(".imgBox").find("ul").width(imgBoxUl);
        _tkId.find(".imgShow").find("ul").css({ "left": -w_width * imgNum })
        _tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
        m = Math.floor(w_width / _width) - 1;
        w = Math.floor(_len / m);
        _tkId.find(".imgBox").find("li").click(function () {
            imgNum = $(this).index();
            _tkId.find(".imgShow").find("ul").stop().animate({ left: -w_width * imgNum });
            _tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");

        });


    });
    _tkId.find(".btn02").click(function () {

        if (imgNum < _len - 1) {

            if (imgNum % m == 1 && imgNum != 1) {
                n++;
                if (n > w) {
                    n = w;
                    _tkId.find(".imgBox").find("ul").animate({ left: -m * (_width * n - 1) });
                } else {
                    _tkId.find(".imgBox").find("ul").animate({ left: -m * (_width * n - 1) });
                };
            };
            imgNum++;
            console.log(imgNum)
            _tkId.find(".imgShow").find("ul").stop().animate({ left: -w_width * imgNum });
            _tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");

        } else {
            alert("已经到尽头了");
            imgNum = _len - 1;
        };
    });
    _tkId.find(".btn01").click(function () {
        if (imgNum > 0) {

            if (imgNum % m == 0 && imgNum != 0) {
                n--;
                _tkId.find(".imgBox").find("ul").animate({ left: -m * (_width * n - 1) })
            };
            imgNum--;
            console.log(imgNum)
            _tkId.find(".imgShow").find("ul").stop().animate({ left: -w_width * imgNum });
            _tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
        } else {
            alert("已经到尽头了");
            imgNum = 0;
        };
    });

}
//tankuang() end

SKIN_PATH = "/";
var PTN_Email = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var PTN_Tel = /^1(3|4|5|7|8)\d{9}$/;
function $j(elmId) { return $("#" + elmId); }
function $v(elmId, val) {
    if (val == null) {
        var o = $j(elmId).attr("value");
        if (o == null || o == undefined)
            return "";
        return o;
    } else {
        return $j(elmId).attr("value", val);
    }
}
function $tv(elmId) { return $.trim($v(elmId)); }
function $a(sMsg, boxType, autoClose, focusElmId, sTitle, behavior) {
    if (boxType == null) {
        boxType = 2;
    }
    if (autoClose == null) {
        autoClose = -1;
    }
    //标题
    if (sTitle == null) {
        sTitle = "消息提示";
    }

    hideDdl();
    var jMesbook1 = $("#mesbook1");
    if (jMesbook1.length == 0) {

        var sHtml = "<div class='tanchuang1' id='mesbook1'>"
            + "<div class='conBox'>"
            + "<div class='tcClose'><img onclick='hideMsg()' id='mesbook1ImgClose' src='" + SKIN_PATH + "images/Common/tanchaung_close.png' alt='关闭' /></div>"
            + "<div class='box b1'>"
            + "<h5 id='mesbook1Title'></h5>"
            + "<p id='mesbook1Msg'></p>"
            + "<dd id='mesbook1Btns'>"
            + "<input type='button' class='b15' value='关 闭' />";
        + "</dd>";
        + "</div>"
            + "</div>"
            + "</div>";

        $(document.body).append(sHtml);
    }
    var jMesbook1 = $("#mesbook1");
    var jMesbook1ImgClose = $("#mesbook1ImgClose");
    var jMesbook1Icon = $("#mesbook1Icon");
    var jMesbook1Msg = $("#mesbook1Msg");
    var jMesbook1AutoClose = $("#mesbook1AutoClose");
    var jMesbook1Delay = $("#mesbook1Delay");
    var jMesbook1Title = $("#mesbook1Title");
    var jMesbook1Btns = $("#mesbook1Btns");

    jMesbook1Title.html(sTitle);
    //消息内容
    jMesbook1Msg.html(sMsg);
    //图标
    var iconPath = SKIN_PATH + "images/common/";
    switch (boxType) {
        case 1: iconPath += "ico_ok.gif"; break;
        case 2: iconPath += "ico_info.gif"; break;
        case 3: iconPath += "ioc_ques.gif"; break;
        case -1: iconPath += "ico_error.gif"; break;
        default: iconPath += "ico_normal.gif"; break;
    }
    jMesbook1Icon.attr("src", iconPath);

    //关闭按钮
    var okBtn = jMesbook1Btns.find("input");
    okBtn.removeAttr("onclick");
    okBtn.click(function () {
        hideMsg();
        if (focusElmId != null) {
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    jMesbook1ImgClose.removeAttr("onclick");
    jMesbook1ImgClose.click(function () {
        hideMsg();
        if (focusElmId != null) {
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    okBtn.focus();

    //显示
    showFullBg();
    //    setCM("mesbook1");
    //relocation("mesbook1");
    jMesbook1.fadeIn(80);
}
/********************
* 显示一个全屏灰度背景
* elmId : 元素ID或元素
********************/
function showFullBg(elmId, isHideDdl, opacity, bgColor, zIndex, speed, behavior) {
    if (elmId == null) {
        elmId = "oran_full_bg";
    }
    var jElm = $j(elmId);
    if (jElm.length == 0) {
        var sHtml = "<div style='position:absolute;top:0;left:0;display:none;' id='" + elmId + "'></div>";
        $(document.body).append(sHtml);
    }
    if (opacity == null) {
        opacity = 0.75;
    }
    if (bgColor == null) {
        bgColor = "#777";
    }
    if (zIndex == null) {
        zIndex = "9";
    }
    if (speed == null) {
        speed = 80;
    }
    if (isHideDdl == null) {
        isHideDdl = true;
    }
    var jElm = $j(elmId);
    var dd = document.documentElement;
    var sWidth = dd.scrollWidth;
    var sHeight = dd.scrollHeight;
    var cH = dd.clientHeight;
    var cW = dd.clientWidth;
    if (sHeight < cH) {
        sHeight = cH;
    }
    if (sWidth < cW) {
        sWidth = cW;
    }
    jElm.css({ "z-index": zIndex, "background": bgColor, "opacity": opacity, "filter": "progid:DXImageTransform.Microsoft.Alpha(opacity=" + opacity * 100 + ")" });
    jElm.css({ "height": sHeight, "width": sWidth });
    if (isHideDdl) {
        hideDdl(null, behavior);
    }
    jElm.fadeIn(speed);
    if (behavior != null) {
        behavior();
    }
}
/********************
* 隐藏下拉框函数
* 重载1 : 如果不传递cntrId，则以body为容器
* cntrId : 容器ID
********************/
function hideDdl(cntrId) {
    var arrTags = ["select", "iframe", "applet", "object"];
    var jCntr;
    if (cntrId != null) {
        jCntr = $j(cntrId);
    } else {
        jCntr = $(document.body);
    }
    for (var i = 0; i < arrTags.length; ++i) {
        jCntr.find(arrTags[i]).css("visibility", "hidden");
    }
    //    if (behavior != null) {
    //        behavior();
    //    }
}
/********************
* 根据key获取 ajax对象节点值getAjaxVal
* xMsg : xml对象
* key : 节点的属性key
********************/
function gav(xMsg, key) {
    var jMsg = $(xMsg);
    var s = $(jMsg.find("node[key=" + key + "]")).text();
    return s;
}
/********************
* 隐藏消息提示层
********************/
function hideMsg() {
    showDdl();
    var jShadow = $("#mesbook1");
    hideFullBg();
    jShadow.fadeOut(80);
}
/********************
* 隐藏下拉框函数
********************/
function showDdl() {
    var arrTags = ["select", "iframe", "applet", "object"];
    for (var i = 0; i < arrTags.length; ++i) {
        $(arrTags[i]).css("visibility", "visible");
    }
}
/********************
* 隐藏全屏灰度背景
* speed : (可选)渐变消退的速度
********************/
function hideFullBg(elmId, speed) {
    if (elmId == null) {
        elmId = "oran_full_bg";
    }
    if (speed == null) {
        speed = 80;
    }
    var jElm = $j(elmId);
    jElm.fadeOut(speed);
    showDdl();
}
/********************
* 显示正在处理的图标
* src : 触发事件的源对象
* show : 显示/隐藏
********************/
function showProc(src, show) {
    var oImg = $j("imgProc");
    if (show == null) {
        show = true;
    }
    if (show) {
        $(src).hide();
        if (oImg.length > 0) {
            oImg.remove();
        }
        $("<img src='" + SKIN_PATH + "images/Inpage/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(src);
    } else {
        $(src).show();
        oImg.remove();
    }
}
/********************
* 清空文本框内容
* cntrId : 容器ID，不传递则以body为容器
********************/
function emptyText(cntrId) {
    var jTxts;
    if (cntrId == null) {
        jTxts = $("body").find("input[type=text]");
    } else {
        jTxts = $j(cntrId).find("input[type=text]");
    }
    var jTxtss;
    if (cntrId == null) {
        jTxtss = $("body").find("input[type=password]");
    } else {
        jTxtss = $j(cntrId).find("input[type=password]");
    }
    jTxts.each(function () {
        $(this).attr("value", "");
    });
    jTxtss.each(function () {
        $(this).attr("value", "");
    });
    if (cntrId == null)
        jTxts = $("body").find("textarea");
    else
        jTxts = $j(cntrId).find("textarea");
    jTxts.each(function () {
        $(this).attr("value", "");
    });
}

  /********************* 增加书签
* url : URL
* title : 收藏项目的标题
********************/
function addBookmark() {
    var title = document.title;
    var url = document.URL;
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

function headinit(sid) {
    sid = sid + ",";
    var liIndex = 0;
    var sidLastIndex = 0;
    $("#navBox li").each(function () {
        if (sid.indexOf("," + $(this).attr("MARK") + ",") > sidLastIndex) {
            sidLastIndex = sid.indexOf("," + $(this).attr("MARK") + ",");
            liIndex = $(this).index();
        }
    });
    $("#navBox li").eq(liIndex).addClass("cur");
    var domList = $("#navBox li").get();
    domList.sort(function (a, b) {
        var elOne = parseInt($(a).attr("px"));
        var elTwo = parseInt($(b).attr("px"));
        if (elOne > elTwo) return 1;
        if (elOne < elTwo) return -1;
        return 0;
    });
    $('#navBox').append(domList)
}

$(function(){
      
    //下拉导航    
    $(".nav-list").slide({ type:"menu", titCell:"li", targetCell:".dorpDown",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});    
  
    //在线客服
    $('.online-close').click(function(){
        $('.online').hide();
        $('.online-mini').fadeIn();
    })
    $('.online-open').click(function(){
        $('.online-mini').hide();
        $('.online').fadeIn();
    })

    //在线客服二维码
    $('.online-wx').mouseover(function(){
        $('.online-QRcode').fadeIn();
    });
    $('.online-wx').mouseout(function(){
        $('.online-QRcode').fadeOut();
    });

    //返回顶部
    $('.gotop').click(function () {
        $('html,body').animate({'scrollTop':'0'},1000);
    })
})