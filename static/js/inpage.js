
$(function () {
    //头部菜单
    nav("navBox");
    //左边分类
    var Len = $(".InpageSidebar02 .classify li").length;
    var Height = $(".InpageSidebar02 .classify li").eq(0).height() + 1;
    $(".InpageSidebar02 .classify li").hover(function () {
        var This = $(this).index() + 1;
        var Height2 = Height * This;
        $(".InpageSidebar02 .classify i").stop().animate({ height: Height2 + 'px' }, 300);
    }, function () {
        $(".InpageSidebar02 .classify i").stop().animate({ height: 0 }, 300);
        })
    //回到顶部
    $('.rtTop h4 img').hover(function () {
        $(this).stop().animate({ "top": "-43px" }, 200)
    }, function () {
        $(this).stop().animate({ "top": "0" }, 200)
    })
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        if (st > 500) {
            $('.rtTop').show();
        } else {
            $('.rtTop').hide();
        }

    })
    $('.rtTop h4').click(function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500);
    })
    //分站
    var isfenzhan = $("#fenzhan").val();//是否开启分站
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

//填加友情连接
function AddApply(src) {
    var s_Url = $.trim($("#TxtUrl").val());
    var s_Name = $.trim($("#TxtName").val());
    var s_Content = $.trim($("#TxtMsg").val());
    var s_UserName = $.trim($("#TxtUserName").val());
    var s_Phone = $.trim($("#TxtTel").val());
    var s_Email = $.trim($("#TxtEmail").val());
    var s_QQ = $.trim($("#TxtQQ").val());
    if (s_Url == "" || s_Url == "http://") {
        $a("请输入网址！", "TxtUrl");
        return;
    }
    if (s_Name == "") {
        $a("请输入网站名称！", "TxtName");
        return;
    }
    if (s_Phone.length > 0 && !PTN_Tel.test(s_Phone)) {
        $a("电话号码格式错误！", "TxtTel");
        return;
    }
    if (s_Email.length > 0 && !PTN_Email.test(s_Email)) {
        $a("邮箱格式错误！", "TxtEmail");
        return;
    }
    if (s_Content.length > 400) {
        $a("网站简况不能大于400字！", "txtUsername");
        return;
    }
    showProc(src);
    $.post("/SiteServer/Sdw/Ajax/ajax.ashx?action=apply&t=" + Math.random(), {
        FormId: "6",//表单编号
        AttributeValues: "网址="+ s_Url+"&网站名称="+ s_Name+"&网站简况="+s_Content+"&联系人姓名="+s_UserName+"&联系电话="+ s_Phone +"&站长Email="+s_Email +"&联系QQ=" + s_QQ //字段中文名称以英文&分割
    },
        function (msg) {
            if (gav(msg, "state") == "1") {
                $("#TxtUrl").val("http://");
                $("#TxtName").val("");
                $("#TxtMsg").val("");
                $("#TxtUserName").val("");
                $("#TxtTel").val("");
                $("#TxtEmail").val("");
                $("#TxtQQ").val("");
            }
            $a(gav(msg, "msg"));
            showProc(src, false);
        });
}
function emptyText() {
    $("#TxtUrl").val("http://");
    $("#TxtName").val("");
    $("#TxtMsg").val("");
    $("#TxtUserName").val("");
    $("#TxtTel").val("");
    $("#TxtEmail").val("");
    $("#TxtQQ").val("");
}
//end
//联系我们发送留言
function SendLeaveword(src) {
    var sContact = $("#txtContact").val();
    var sMobile = $("#txtMobile").val();
    var sShortDesc = $("#txtShortDesc").val();
    var verCode = $("#txtVerCode").val();

    var err = "";
    if (sContact == "" || sContact == "您的姓名") {
        err += "<p>请输入您的姓名</p>";
    }
    if (sMobile == "" || sMobile == "您的电话") {
        err += "<p>请输入您的电话</p>";
    }
    else if (sMobile.length > 0 && !PTN_Tel.test(sMobile)) {
        err += "<p>您的电话格式错误</p>";
    }
    if (verCode == "" || verCode == "请填写验证码") {
        err += "<p>验证码不可为空</p>";
    }

    if (err.length > 0) {
        $a(err);
        return;
    }
    showProc(src);
    $.post("/SiteServer/Sdw/Ajax/ajax.ashx?action=SendLeaveword&t=" + Math.random(), {
        Title: "在线留言",//标题
        Comp: "",//公司名称
        Tel: "",
        Contact: sContact,//公司名称
        Mobile: sMobile,//电话
        Email: "",
        ShortDesc: sShortDesc,
        FormId: "5",//表单编号
        AttributeValues: "姓名=" + sContact + "&电话=" + sMobile + "&留言内容=" + sShortDesc, //字段中文名称以英文&分割
        verCode: verCode

    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
            emptyText('QK');
            $j("txtContact").val("您的姓名");
            $j("txtMobile").val("您的电话");
            $j("txtShortDesc").val("留言内容");
            $j("txtVerCode").val("请填写验证码");

        } else {

            if (sMsg == "") {
                sMsg = "提交失败，请稍后再试，勿频繁提交！";
            }
            else {
                emptyText('QK');
                $j("txtContact").val("您的姓名");
                $j("txtMobile").val("您的电话");
                $j("txtShortDesc").val("留言内容");
                $j("txtVerCode").val("请填写验证码");
            }
            $a(sMsg);
        }
        showProc(src, false);
    });
}
//产品详情发送留言
function ProSendLeaveword(src) {
    var sProTitle = $("#protitle").html();
    var sContact = $("#txtContact").val();
    var sMobile = $("#txtMobile").val();
    var sEmail = $("#txtEmail").val();
    var sShortDesc = $("#txtShortDesc").val();

    var err = "";
    if (sContact == "" || sContact == "您的姓名") {
        err += "<p>请输入您的姓名</p>";
    }
    if (sMobile == "" || sMobile == "您的电话") {
        err += "<p>请输入您的电话</p>";
    }
    else if (sMobile.length > 0 && !PTN_Tel.test(sMobile)) {
        err += "<p>您的电话格式错误</p>";
    }
    if (sEmail == "" || sEmail == "您的邮箱") {
        sEmail = "";
    }
    else if (sEmail.length > 0 && !PTN_Email.test(sEmail)) {
        err += "<p>您的邮箱格式错误</p>";
    }
    if (err.length > 0) {
        $a(err);
        return;
    }
    showProc(src);
    $.post("/SiteServer/Sdw/Ajax/ajax.ashx?action=ProSendLeaveword&t=" + Math.random(), {
        Title: "产品留言订购",//标题
        ProTitle: sProTitle,//订购的产品
        Contact: sContact,//姓名
        Mobile: sMobile,//电话
        Email: sEmail,//邮箱
        ShortDesc: sShortDesc,
        FormId: "8",//表单编号
        AttributeValues: "订购的服务=" + sProTitle + "&姓名=" + sContact + "&电话=" + sMobile + "&邮箱=" + sEmail + "&留言内容=" + sShortDesc, //字段中文名称以英文&分割

    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
            emptyText('QK');
            $j("txtContact").val("您的姓名");
            $j("txtMobile").val("您的电话");
            $j("txtEmail").val("您的邮箱");
            $j("txtShortDesc").val("留言内容");

        } else {

            if (sMsg == "") {
                sMsg = "提交失败，请稍后再试，勿频繁提交！";
            }
            else {
                emptyText('QK');
                $j("txtContact").val("您的姓名");
                $j("txtMobile").val("您的电话");
                $j("txtEmail").val("您的邮箱");
                $j("txtShortDesc").val("留言内容");
            }
            $a(sMsg);
        }
        showProc(src, false);
    });
}

/********************
* 显示验证码
********************/
function showVerifyCode(elmId, msgElmId, imgId, chgLnkId) {
    if (elmId == null) {
        elmId = "spVerCode";
    }
    if (msgElmId == null) {
        msgElmId = "spVerCodeMsg";
    }
    if (imgId == null) {
        imgId = "imgVerCode";
    }
    if (chgLnkId == null) {
        chgLnkId = "spChgVerCode";
    }
    var jImg = $j(elmId);
    var jMsg = $j(msgElmId);
    var jChgLnk = $j(chgLnkId);
    if (jImg.html() == "") {
        jMsg.html("正在加载验证码...");
        jMsg.show();
        jImg.html("<img src='/SiteServer/Sdw/Tools/ValidCodes.aspx' style='display:none;' id='" + imgId + "' alt='验证码' />");
    }
    var jVerCode = $j(imgId);
    jVerCode.load(function () {
        jMsg.hide();
        jVerCode.show();
        jChgLnk.show();
    });
}
/********************
* 更换验证码
********************/
function changeVerCode(elmId, msgElmId) {
    if (elmId == null) {
        elmId = "imgVerCode";
    }
    if (msgElmId == null) {
        msgElmId = "spVerCodeMsg";
    }
    var jImg = $j(elmId);
    var jMsg = $j(msgElmId);
    jMsg.html("正在刷新验证码...").show();
    jImg.attr({ src: "/SiteServer/Sdw/Tools/ValidCodes.aspx?x=" + Math.random(), alt: "验证码" });
    jImg.hide();
    jImg.load(function () {
        jMsg.hide();
        jImg.show();
    });
}
//导航栏高亮度设置
function headNavPosition(channelIndex) {
    var lis = $("#navBox").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).find("a").attr("channelIndex") == channelIndex) {
            $(lis[i]).addClass("cur");
            break;
        }
    }
}


//下载码下载文件
function downFile(src,siteid) {
    var sName = $("#txtName").val();
    var sCode = $("#txtCode").val();
    var sFile =$("#hidfileurl").val();
    var err = "";
    if (sName == "" || sName == "请输入用户名") {
        err += "<p>请输入用户名</p>";
    }
    if (sCode == "" || sCode == "请输入下载码") {
        err += "<p>请输入下载码</p>";
    }
    if (err.length > 0) {
        $a(err);
        return;
    }
    showProc(src);
    $.post("/SiteServer/Sdw/Ajax/ajax.ashx?action=downFile&t=" + Math.random(), {
        userName: sName,//用户名
        Code: sCode,//下载码
        siteId: siteid,//站点编号
        channelIndex: "dlxzmxzwj"//栏目索引

    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            if (sFile == "") {
                $a("暂无文件");
            }
            else {
                $("#txtName").val("请输入用户名");
                $("#txtCode").val("请输入下载码");
                $(".TCbox").hide();
                location.href = sFile;
            }
        }
        else {
            $a("用户名或下载码错误");
        }
        showProc(src, false);
    });
}


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