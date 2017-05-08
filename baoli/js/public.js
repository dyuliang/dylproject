$(function(){
			masonry();//页面瀑布流
			pdSearchSelect();//核心产品下拉选项
			
			function masonry(){//页面瀑布流
				var $container = $('.news-list');
			    $container.imagesLoaded(function() {
			        $container.masonry({
			                itemSelector: '.news-wrap',
			                gutter: 0,
			                isAnimated: true,
			            });
			     });	
			}
			
			
			function pdSearchSelect() {//核心产品下拉选项
			    $('.product-search span').click(function () {
			        var spanPar = $(this).parent();
			        if (spanPar.hasClass('open')) {
			            $(this).siblings('ul').stop().slideUp(100);
			            spanPar.removeClass('open');
			        } else {
			            $(this).siblings('ul').slideDown(100);
			            spanPar.siblings().removeClass('open').children('ul').stop().slideUp();
			            spanPar.addClass('open');
			        }
			        getEvent();
			        cancelBubble();
			    });
			    $('.product-search li').on('click', function () {
			        var $this = $(this);
			        var spanPar = $this.parents('.pd2shop');
			        console.log($(this).text());
			        if(spanPar.hasClass('open')) {
			            $this.parents('.pd2shop').children('ul').stop().slideUp();
			            spanPar.removeClass('open');
			        }else {
			            $this.parents('.pd2shop').children('ul').slideDown();
			            spanPar.siblings().removeClass('open').children('ul').stop().slideUp();
			            spanPar.addClass('open');
			        }
			        $this.parents('.pd2shop').children('span').text($this.text()).attr('data-id', $this.data('id'));
			    });
			    $('.product-search').click(function () {
			        getEvent();
			        cancelBubble();
			    })
			    $('.product-search li>ul').click(function () {//清除冒泡
			        getEvent();
			        cancelBubble();
			    })
			    $('body').click(function () {
			        $('.product-search>div').removeClass('open').children('ul').slideUp(100);
			    })
			}
			
			
			$('.project5-cnt3 .pct5-til li').click(function(){
				var inx=$(this).index();
				$(this).addClass('on').siblings().removeClass('on');
				$('.project5-cnt3 .pct5-cent').eq(inx).fadeIn().siblings('.project5-cnt3 .pct5-cent').hide();
			})
			
					    	
})
//清除冒泡事件
//得到事件
function getEvent(){
     if(window.event)    {return window.event;}
     func=getEvent.caller;
     while(func!=null){
         var arg0=func.arguments[0];
         if(arg0){
             if((arg0.constructor==Event || arg0.constructor ==MouseEvent
                || arg0.constructor==KeyboardEvent)
                ||(typeof(arg0)=="object" && arg0.preventDefault
                && arg0.stopPropagation)){
                 return arg0;
             }
         }
         func=func.caller;
     }
     return null;
}
//阻止冒泡
function cancelBubble()
{
    var e=getEvent();
    if(window.event){
        //e.returnValue=false;//阻止自身行为
        e.cancelBubble=true;//阻止冒泡
     }else if(e.preventDefault){
        //e.preventDefault();//阻止自身行为
        e.stopPropagation();//阻止冒泡
     }
} 

	