H.ready(['jquery'],function(){
    jQuery(function($){

        var $tab = $(".tab-title li")
        $tab.on('click',function(){
            var $this = $(this)
            var i = $this.index()
            $this.parent('.tb').find('li').removeClass('a')
            $this.addClass('a')
            var $ct = $(this).parent('.tb').parent('.tab-title').next('.tb-c').find('.content')
            $ct.hide().eq(i).show()
        })


    })
})
