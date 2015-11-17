jQuery(function($){
    var 
    $buyCoinsCount = $("#buyCoinsCount"),
    $priceEle = $("#addfundsform").find("span.price b"),
    $customTips = $(".tobuy-custom"),
    $payForm = $("#payForm"),
    $tips = $("#buyCoinsWarningTips"),
    $ct = $(".vip-m-buy")
    $back = $("#goback")

    var checkValue = function(){  
        var value = parseInt($buyCoinsCount.val());
        if(isNaN(value)){
            $customTips.addClass("u-error");
            $priceEle.html("0");
            return 0;
        }
        if(value < 3000){
            $priceEle.html(value/100);
            return false;
        }
        $tips.hide();
        $customTips.removeClass("u-error");
        $priceEle.html(value/100);
        return true;
    };

    var sendForm = function(){
        var data = {};
        $payForm.find("input").each(function(){
            data[$(this).attr('name')] = $(this).val();
        });

        $.ajax({
            type: 'POST',
            url: 'home.php?mod=spacecp&ac=credit&op=buy&inajax=1',
            data: data,
            dataType: 'xml',
            success: function(docxml) {
                var html = $(docxml).find("root").text();
                if(html.indexOf("form") === -1){
                  alert("请先登录");
                  location.href = "member.php?mod=logging&action=login"
                }else{
                  html = html.replace("$('payform')", "$('#payform')");
                  $("body").append(html);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
              alert("操作失败，请刷新页面重试！");
            }
        });
    };

    $("#addfundsform div.m-credits").find('label').click(function(){
        
        //切换样式
        $(this).addClass('on').siblings('label').removeClass('on');
      
        //如果是自定义输入米币则返回
        if($(this).hasClass('tobuy-custom')){
          return;
        }
        //隐藏自定义
        $customTips.removeClass("u-focus");
        //设置所购米币隐藏字段
        $buyCoinsCount.val($(this).data('coins'));
        //检查值
        checkValue();
        //自定义数量跟随变化
        $("#customBuyCoinsCount").val($(this).data('coins'))
    });

    $("#addfundsform div.m-payway").find('label').click(function(){
        //设置购买方式隐藏字段
        $("#payWay").val($(this).data('payway'));
        //切换样式
        $(this).addClass('on').siblings('label').removeClass('on');
    });


    $("#customBuyCoinsCount")
    .focus(function(){
        $customTips.addClass("u-focus")
    })
    .keyup(function(){
        $buyCoinsCount.val($(this).val());
        checkValue();
    });

    $("#addfundssubmit_btn").click(function(){
        var checkResult = checkValue();
        if(checkResult === true){
            $tips.hide()
            sendForm();
            return;
        }
        $ct.slideUp(600)
        $tips.slideDown(600)
        //填写的非数字
        if(checkResult === 0){
          $tips.find("b").html("请正确填写需要购买的米币数量");
        }else{
           $tips.find("b").html("每次购买米币数量不得低于3000个");
        }
    });

    $back.on('click',function(e){
        e.preventDefault()
        $tips.slideUp(600)
        $ct.slideDown(600)
    })
});  
