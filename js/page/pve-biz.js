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


		//导航栏激活
		H.curpage('.u-biz')

		//帮助
    	H.route(129)

	})
})