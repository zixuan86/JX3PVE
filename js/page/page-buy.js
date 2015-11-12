H.ready(['jquery'],function(){
  jQuery(function($){
    $buyCoinsCount = $("#buyCoinsCount");
    var $priceEle = $("#addfundsform").find("span.price b");
    $customTips = $(".tobuy-custom")
    $payForm = $("#payForm");
    
    var checkValue = function(){  
      var value = parseInt($buyCoinsCount.val());
      if(isNaN(value) || value < 3000){
        $customTips.addClass("u-error");
        $priceEle.html("错误");
        return false;
      }
      $customTips.removeClass("u-error");
      $priceEle.html(value/100);
      return true;
    };
    
    var sendForm = function(){
      var data = {};
      $payForm.find("input").each(function(){
        data[$(this).attr('name')] = $(this).val();
      });
      console.log(data);
      $.post("home.php?mod=spacecp&ac=credit&op=buy&inajax=1", data, function(result){
        console.log(result);
      });
    };
    
    $("#addfundsform").find('label').click(function(){
      $customTips.removeClass("u-focus");
      //设置所购米币隐藏字段
      $buyCoinsCount.val($(this).data('coins'));
      //切换样式
      $(this).addClass('on').siblings('label').removeClass('on');
      //检查值
      checkValue();
    });
    
    
    $("#customBuyCoinsCount")
      .focus(function(){
        $("#addfundsform").find('label').removeClass('on')
        $customTips.addClass("u-focus")
      })
      .keyup(function(){
        $buyCoinsCount.val($(this).val());
        if(!checkValue()){
          $buyCoinsCount.val(0)
        }
      });
    
    $("#addfundssubmit_btn").click(function(){
      if(!checkValue()){return;}
      sendForm();
    });
    
    
  })
    
})
