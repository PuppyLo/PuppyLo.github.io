(function($) {
    $(function() {
    
        $('ul.tabs__caption').on('click', 'li:not(.tabs__active)', function() {
            $(this)
                .addClass('tabs__active').siblings().removeClass('tabs__active')
                .closest('div.tabs').find('div.tabs__content').removeClass('tabs__active').eq($(this).index()).addClass('tabs__active');
        });
    
    });
    })(jQuery);