$(function () {
    //头部菜单首页高亮
    $("#navBox").find("li").eq(0).addClass("cur");
    //头部菜单
    nav("navBox");

    //回到顶部
    $('.rtTop h4 img').hover(function () {
        $(this).stop().animate({ "top": "-43px" }, 200)
    }, function () {
        $(this).stop().animate({ "top": "0" }, 200)
    })
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        if (st >500) {
            $('.rtTop').show();
        } else {
            $('.rtTop').hide();
        }

    })
    $('.rtTop h4').click(function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500);
    })
    //是否开启分站
    var isfenzhan = $("#fenzhan").val();
    if (isfenzhan == "是") {
        var DomainName = window.location.host;
        $.post("/SiteServer/Sdw/Ajax/ajax.ashx?action=GetFenZhan&t=" + Math.random(), {
            DomainName: DomainName,
            IndexName: "fenzhan",
            IsChecked: "true"
        }, function (msg) {
            if (msg != "") {
                msg = msg.split('&');
                for (var i = 0; i < msg.length; i++) {
                    var msgn = msg[i].split('=');
                    var fzClass = msgn[0];//分站样式类名就是新建虚拟字段英文或拼音,虚拟字段可以大小写，类名必须小写。如：class="email"
                    var fzValue = msgn[1];//分站值，如地址，电话，Email，QQ等等...
                    $("." + fzClass).html(fzValue);
                }
            }
        });
    }
})
//发送留言
function sendLeaveword_Index(src) {
    var sContact = $("#txtContact").val();
    var sMobile = $("#txtMobile").val();
    var sShortDesc = $("#txtShortDesc").val();
    var err = "";

    if (sContact == "" || sContact == "对接人") {
        err += "<p>请输入您的称呼</p>";
    }
    if (sMobile == "" || sMobile == "联系电话") {
        err += "<p>请输入您的手机号码</p>";
    }
    else if (sMobile.length > 0 && !PTN_Tel.test(sMobile)) {
        err += "<p>您的手机号码格式错误</p>";
    }
    if (err.length > 0) {
        $a(err);
        return;
    }
    showProc(src);
    $.post("/SiteServer/Sdw/Ajax/ajax.ashx?action=sendLeaveword_Index&t=" + Math.random(), {
        Title: "获取方案",//标题
        Name:sContact ,
        Comp: "",//公司名称
        Tel: "",//座机号码
        Contact: "",//联系人
        Mobile: sMobile,//手机号码
        Email: "",
        ShortDesc: "",
        FormId: "4",//表单编号
        AttributeValues: "对接人=" + sContact + "&联系电话=" + sMobile //字段中文名称以英文&分割

    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
            $("#txtContact").val("对接人");
            $("#txtMobile").val("联系电话");
        }
        else {

            if (sMsg == "") {
                sMsg = "提交失败，请稍后再试，勿频繁提交！";
            }
            else {
               $("#txtContact").val("对接人");
               $("#txtMobile").val("联系电话");
            }
            $a(sMsg);
        }
        showProc(src, false);
    });
}


/*Pengjin 2018年10月19日*/
$(function(){
  
    new WOW().init();

    // 轮播广告
    $(".banner").slide({mainCell:".bd ul",titCell:".hd ul",trigger:"click",autoPlay:true,autoPage:true,interTime:5000});

    //企业动态
    $(".message-marquee").slide({mainCell:"ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});

    //精英团队
    $(".team-slide").slide({mainCell:".team-list .bd",titCell:".hd ul",trigger:"click",autoPlay:true,autoPage:true,interTime:5000});

})

