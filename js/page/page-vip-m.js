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
        //设置隐藏天数
        $buyDays.val($(this).data('buy_days'))
        //切换样式
        $(this).addClass('on')
          .siblings('label').removeClass('on')
          .find("input:radio[name=days]").attr('checked', false);
        
        //选中单选按钮
        $(this).find("input:radio[name=days]").attr('checked', true);
        $buyDays.val($(this).find("input:radio[name=days]").val())
        judgeCoinsEnough();

    });
  
    $showVIPDateSpan = $(".vip-m-container").find("span.ex")
    $showVIPDateB = $(".vip-m-container").find("b#ex");
  
    var updateVIPDateB = function(days){
      var days = parseInt($buyDays.val());
      var now = 0;
      //如果原来没有开通VIP,从当前时间开始计算
      if(!$showVIPDateB[0]){
        now = new Date().getTime();
      }else{
        now = new Date($showVIPDateB.html()).getTime();
      }
      var expireTime = now + days * 24 * 60 * 60 * 1000;
      var expireDate = new Date(expireTime);
      var year = expireDate.getFullYear();
      var month = expireDate.getMonth() + 1;
      var day = expireDate.getDate();
      var toDate = year + "-" + month + "-" + day
      if($showVIPDateB[0]){
        $showVIPDateB.html(toDate);
      }else{
        $showVIPDateSpan.html("<em>有效期至:</em><b id='ex'>"+toDate+"</b>")
      }
    };
    
    //提交表单
    var $submitForm = $("form#buygroupform");
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
            buyPrimary.slideUp(600);
            buyVipSuccess.slideDown(600);
            //更新显示时间
            updateVIPDateB($buyDays.val());
          }else{
            buyPrimary.slideUp(600)
            buyVipFail.slideDown(600)
          }
        });
    });
      
})