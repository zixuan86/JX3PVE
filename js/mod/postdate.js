H.ready(['jquery'], function(){
    jQuery(function($){

    	function postdate(){
    		
			//帖子最后编辑时间
			var $allpost = $(".c-flist-list"),
				$eachpost = $allpost.children('tbody')
			if($allpost.length == 0) return

			//获取3,6个月时间
			var M_1 = Date.parse('1970/2/1'),
				M_3 = Date.parse('1970/4/1'),
				M_6 = Date.parse('1970/7/1'),
				T_Now = new Date().getTime()

			//遍历处理
			$eachpost.each(function(i) {

				var //最后编辑时间dom
					$lastedit = $(this).find('.e-lastedit'),
					//最后编辑的时间
					lastedit = $lastedit.text(),
					//阅读数
					views = parseInt($.trim($(this).find('.e-views').text()))

				//时间颜色处理
				var T_Modif = Date.parse(lastedit.replace(/-/g, "/")),
					valid = T_Now - T_Modif

				if(valid > M_6){
					$lastedit.addClass('fail')	//6个月以上灰色·失效
				}else if(valid <= M_3 && valid > M_1){
					$lastedit.addClass('new')	//3个月以内绿色
				}else if(valid <= M_1){
					$lastedit.addClass('fresh')	//1个月以内浅紫色
				}else{
					$lastedit.addClass('old')	//3～6个月橙色·可能失效
				}

				//特殊颜色处理
				if(valid <= M_1 && views >= 10000){
					$lastedit.addClass('ok')	//1个月以内有更新，且阅读破万，红色
				}

			})

		}
		postdate()

		var t
		$("#autopbn").on('click',function(){
			t && clearTimeout(t)
			t = setTimeout(postdate,500)
		})

    })
})