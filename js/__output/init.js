H.load([{jquery:head_conf.CDNROOT+"lib/jquery-1-10-2.js"},{underscore:head_conf.CDNROOT+"lib/underscore.min.js"},{responsive:head_conf.CDNROOT+"plugin/responsive.js"},{getRequest:head_conf.CDNROOT+"plugin/getRequest.js"},{macro:head_conf.CDNROOT+"plugin/Macro.js"},{fixSidebar:head_conf.CDNROOT+"plugin/fixSidebar.js"},{treeview:head_conf.CDNROOT+"plugin/jquery.treeview.js"},{cookie:head_conf.CDNROOT+"plugin/jquery.cookie.js"},{swiper:head_conf.CDNROOT+"plugin/swiper2.min.js"},{footer:head_conf.CDNROOT+"mod/footer.js"},{dialog:head_conf.CDNROOT+"mod/dialog.js"},{postdate:head_conf.CDNROOT+"mod/postdate.js"},{oldfb:head_conf.CDNROOT+"mod/oldfb.js"},{custombg:head_conf.CDNROOT+"mod/custombg.js"},{header:head_conf.ROOT+"mod/header.js"},{bbs:head_conf.CDNROOT+"mod/bbs.js"},{widget:head_conf.ROOT+"mod/widget.js"}]),H.ready("jquery",function(){jQuery.noConflict(),H.curpage=function(e){jQuery("#c-header-nav").children(e).addClass("on")},H.fadeshow=function(e,o){var i,t=jQuery;t(e).add(o).hover(function(){i&&clearTimeout(i),t(o).fadeIn()},function(){i=setTimeout(function(){t(o).fadeOut()},400)})},H.route=function(e){{var o=jQuery("#w-route-help");jQuery("#w-route-join")}o.attr("href","http://www.jx3pve.com/misc.php?mod=faq&action=faq&id="+e)},H.time=function(e,o){var i=jQuery;void 0==o&&(o="-"),i(e).each(function(){unixtime=i.trim(i(this).text()),_time=new Date(1e3*parseInt(unixtime)),time=_time.getFullYear()+"-"+(_time.getMonth()+1)+"-"+_time.getDate(),arr=time.split("-");for(var e=0;3>e;e++)arr[e]<10&&(arr[e]="0"+arr[e]);time=arr.join(o),i(this).text(time)})},jQuery(function(e){function o(){for(var e=0;e<t.length;e++)n=n||-1!=i.indexOf(t[e])}H.time(".e-time");var i=e("#c-header-usergroup").text();(-1!=i.indexOf("管理员")||-1!=i.indexOf("版主")||-1!=i.indexOf("编辑"))&&e("html").addClass("adminHTML"),-1!=i.indexOf("VIP会员")&&e("html").addClass("vipHTML");var t=["管理员","版主","编辑","VIP会员","LV.7果子狸","LV.8果子狸","LV.9果子狸"],n=!1;o(),n&&e("html").addClass("spHTML")})});