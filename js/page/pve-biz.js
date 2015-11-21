H.ready(['jquery'], function() {
	jQuery(function($) {


		//判断交易状态涂色
		$("#m-biz-list li a .biz-status").each(function(){
			var status = $(this).text()
			if(status == '出售中'){
				$(this).addClass('onsale')
			}else if(status == '求购中'){
				$(this).addClass('onbuy')
			}else{
				$(this).addClass('exp')
			}
		})

		//判断交易类型图标
		$("#m-biz-list li a .biz-type").each(function(){
			var type = $(this).children('b').text()
			if(type == '账号'){
				$(this).addClass('type-1')
			}else if(type == '代练'){
				$(this).addClass('type-2')
			}else if(type == '装备'){
				$(this).addClass('type-3')
			}else{
				$(this).addClass('type-4')
			}
		})


		//导航栏激活
		H.curpage('.u-biz')

		//帮助
    	H.route(129)

	})
})