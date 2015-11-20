H.ready(['jquery', 'fixSidebar','treeview'], function() {
	jQuery(function($) {

		//导航栏激活
		H.curpage('.u-fam')

		//侧边栏
		H.fixSidebar('.pve-sidebar', 96, 105, 100)

		//帮助
    	H.route(55)

	})
})