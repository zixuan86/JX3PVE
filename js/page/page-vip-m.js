jQuery(function($) {
    var $nowCoins = $("#cal_nowCoins");
    var $needCoins = $("#cal_needCoins");
    var $buyDays = $("#cal_days");
    var $btn = $("#editsubmit_btn")

    var $nocoins = $("#vip-m-nocoins")
    var $nologin = $("#vip-m-nologin")

    var uid = parseInt($("#uid").text())
    var buyVipFail = $("#buyVipFail")
    var buyVipSuccess = $("#buyVipSuccess")
    var buyPrimary  = $("#vip-m-buy")

    
    //判断登录
    if(!uid){
        $nologin.slideDown()
        $btn.attr('disabled','disabled').addClass('disabled')
        return
    }

    //判断米币
    var judgeCoinsEnough = function(){
        var nowCoin = parseInt($nowCoins.val()) || 0;
        var needCoins = parseInt($needCoins.val()) || 0;
        if(needCoins === 0){return;}
        //米币不足,提示
        if(nowCoin < needCoins){
          $nocoins.slideDown();
          return false;
        }
        $nocoins.hide();
        return true;
    }
    
    //切换时间
    $(".m-days").find('label').click(function(){
        //设置所需米币隐藏字段
        $needCoins.val($(this).data('need_coins'));
        
        //切换样式
        $(this).addClass('on')
          .siblings('label').removeClass('on')
          .find("input:radio[name=days]").attr('checked', false);
        
        //选中单选按钮
        $(this).find("input:radio[name=days]").attr('checked', true);
        $buyDays.val($(this).find("input:radio[name=days]").val())
        judgeCoinsEnough();

    });
    
    //提交表单
    var $submitForm = $("form#buygroupform")
    $btn.click(function(){

        //判断米币不足
    　  if(!judgeCoinsEnough()){return;}

        //提交表单
        var url = "home.php?mod=spacecp&ac=usergroup&do=buy&groupid=22&inajax=1";
        var data = {
          days: $buyDays.val()
        }

        $submitForm.find('input').each(function(){
          data[$(this).attr('name')] = $(this).val()
        })

        $.post(url, data, function(result){
          result = result ? JSON.parse(result) : {};
          if(result.code === 1){
            buyPrimary.slideUp(600)
            buyVipSuccess.slideDown(600)
          }else{
            buyPrimary.slideUp(600)
            buyVipFail.slideDown(600)
          }
        });
    });
      
})