H.ready(['jquery'],function(){
	jQuery(function($){

		var $tab = $(".tab-title li")
		$tab.on('click',function(){
			var i = $(this).index()
			$tab.removeClass('a')
			$(this).addClass('a')
			var $ct = $(this).parent('.tab-title').next('.tb-c').find('.content')
			$ct.hide().eq(i).show()	
		})


	})
})