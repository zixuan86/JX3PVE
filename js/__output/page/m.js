$(function(){function e(e,t){void 0==t&&(t="-"),$(e).each(function(){unixtime=$.trim($(this).text()),_time=new Date(1e3*parseInt(unixtime)),time=_time.getFullYear()+"-"+(_time.getMonth()+1)+"-"+_time.getDate(),arr=time.split("-");for(var e=0;3>e;e++)arr[e]<10&&(arr[e]="0"+arr[e]);time=arr.join(t),$(this).text(time)})}var t=(new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:".swiper-pagination"}),$("#i-header-more")),i=$("#i-header-extend");t.on("click",function(){i.slideToggle()});var o=$("#i-header-os"),a=$("#i-sidebar"),n=$("#u-mask");o.add(n).on("click",function(){n.toggle(),a.toggleClass("show")}),e(".e-time");var r=$("body"),c=$(window),l=$("#i-scrolltop");l.on("click",function(){var e=c.scrollTop(),t=r.height();c.scrollTop(480>e?t:0)}),c.on("scroll",function(){{var e=c.scrollTop();r.height()}480>e?l.removeClass("bot"):l.addClass("bot")});var s=$("html"),h=$("#i-attachshow"),d=$("#i-attachshow-box"),m=$("#i-attachshow-close"),g=($(".message"),$(".message img"));g.on("click",function(){s.addClass("attachfix"),h.show(),$(this).clone(!1).appendTo(d)}),m.on("click",function(){s.removeClass("attachfix"),h.hide()});var w=$("#w-weibo-win"),u=$("#w-weibo");u.length&&(u.text()||w.remove()),$(".macro-ct").each(function(){var e=$(this).html();e=e.replace("[hide]",""),e=e.replace("[/hide]",""),$(this).html(e)}),$("#extend-menu-tg").on("click",function(){$("#extend-menu").toggleClass("folder")});var p=$(".bookdown"),f=$("#isdownload");"否"==f.text()&&p.hide()});