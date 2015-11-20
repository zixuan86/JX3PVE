H.ready(['jquery'], function(){
    jQuery(function($){

    	var $value = $(".s-filter-list").find('.item .value'),
    		$extend = $(".s-filter-list").find('.item .value .extend')

    	//点击展开选择
    	$value.on('click',function(){
    		$(this).toggleClass('active')
    	})
    	//点击任意选择后收起
    	$extend.on('click',function(e){
    		$(this).hide()
			e.stopPropagation()
    	})
    	//获取current key加入到default key
    	$value.each(function(){
    		//获取激活的key
    		var current_key = $(this).find('.extend .a a').text()

    		//当有激活项时
    		if(current_key){
    			//当item为服务器筛选时，字符串做截取
    			if($(this).find('.extend').hasClass('u-fwq-1')){
    				current_key = $.trim(current_key.split('/')[1])
    			}
    			//将当前值赋值给默认值
    			default_key = current_key
    		//如果没有激活项时
    		}else{
    			//将'不限'作为默认值
    			default_key = '不限'
    		}
    		
    		//插入求值
    		var $default_key = $(this).find('.default em')
    		$default_key.text(default_key)
    	})
		
    })
})