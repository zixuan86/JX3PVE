H.ready(['jquery'],function(){
	jQuery(function($){

		var $tab = $(".tab-title li"),
			$ct = $(".tb-c .content")
		$tab.on('click',function(){
			var i = $(this).index()
			$tab.removeClass('a')
			$(this).addClass('a')
			$ct.hide().eq(i).show()	
		})


	})
})