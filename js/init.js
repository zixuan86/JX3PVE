//加载公共模块
H.load([
	{'jquery':head_conf.CDNROOT+'lib/jquery-1-10-2.js'},
	{'underscore':head_conf.CDNROOT+'lib/underscore.min.js'},
	{'cookie':head_conf.CDNROOT+'plugin/jquery.cookie.js'},
	{'swiper':head_conf.CDNROOT+'plugin/swiper2.min.js'},
	{'macro':head_conf.CDNROOT+'plugin/Macro.js'},
	{'responsive':head_conf.CDNROOT+'plugin/responsive.js'},
	{'getRequest':head_conf.CDNROOT+'plugin/getRequest.js'},
	{'fixSidebar':head_conf.CDNROOT+'plugin/fixSidebar.js'},
	{'header':head_conf.ROOT+'mod/header.js'},
	{'footer':head_conf.CDNROOT+'mod/footer.js'},
	{'dialog':head_conf.CDNROOT+'mod/dialog.js'},
	{'postdate':head_conf.CDNROOT+'mod/postdate.js'},
	{'custombg':head_conf.CDNROOT+'mod/custombg.js'},
	{'editor':head_conf.CDNROOT+'mod/editor.js'},
	{'widget':head_conf.ROOT+'mod/widget.js'}
])

//全局设置
H.ready('jquery',function(){
	jQuery.noConflict();

	//当前页
	H.curpage = function(cur){
		jQuery('#c-header-nav').children(cur).addClass('on')
	}

	//开关
	H.fadeshow = function(tg,ele){
		var $ = jQuery,
			t
		$(tg).add(ele).hover(function(){
			t && clearTimeout(t)
			$(ele).fadeIn()
		},function(){
			t = setTimeout(function(){
				$(ele).fadeOut()
			},400)
		})
	}

	//route助手
	H.route = function(helpID,joinID){
		var $routeHelp = jQuery('#w-route-help'),
			$routeJoin = jQuery('#w-route-join')
		$routeHelp.attr('href','http://www.jx3pve.com/misc.php?mod=faq&action=faq&id='+helpID)
	}

	//unix时间戳转换
	H.time = function(selector,dividing){
		var $ = jQuery
		if(dividing == undefined) dividing='-'
		$(selector).each(function(){
			unixtime = $.trim($(this).text()),
			_time = new Date(parseInt(unixtime) * 1000),
			time = _time.getFullYear() + '-' + (_time.getMonth()+1) + '-' + _time.getDate(),
			arr = time.split('-')

			for (var i = 0; i < 3; i++) {
				if (arr[i] < 10 ) arr[i] = '0' + arr[i]
			}

			time = arr.join(dividing)
			$(this).text(time)
		})
	}

	jQuery(function($){
		//时间转化
		//H.time('.e-time');
	})
})