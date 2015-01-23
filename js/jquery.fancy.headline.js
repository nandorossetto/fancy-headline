/*

jQuery Fancy Headline
version: 1.0
@requires jQuery 1.7 or later
@author Fernando Rossetto
@homepage nandorossetto.me

*/

(function($){
    $.fancyHeadline = function(settings){
        var settings = $.extend({
            tag : '',
            fx : 'fade'
        }),

        timer    = 1000,
        headline = $(settings.tag).html().split(''),
        counter  = 0;

        $(settings.tag).css('visibility', 'hidden').height( $(settings.tag).height() ).html('');

        var effects = {
            fade:function(target){
                target.fadeIn(500);
            },

            slide:function(target){
                target.slideDown(500);
            },

            basic:function(target){
                target.show();
            }
        };

        for(i = 0; i < headline.length; i++){
            headline[i] = headline[i].replace(/\s/g, '.');

            $.each(headline[i], function(){
                $(settings.tag).append('<span style="display: none; float: left">' + headline[i] + '</span>').each(function(){
                    total = counter += 1;
                    
                    $(this).css('visibility', 'visible');
                    $(this).find('span:nth-child(' + total + ')').each(function(){
                        var $this = $(this);

                        if(headline[i] === '.'){
                            $this.css('visibility', 'hidden');
                        }

                        setTimeout(function(){
                            effects[settings.fx]($this);
                        }, timer += 60);
                    });
                });
            });
        }
    };
    
})(jQuery);