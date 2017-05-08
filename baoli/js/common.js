$(function(){
	 if (window.location.href.indexOf(".html") >= 0) {
        $('.head').load('head.html');
        $('.footer').load('footer.html');
    }

	
	
	
	
	var screen_height = $(window).height(),
	f1num_state = false;
	if (screen_height > 820) {
		if (!f1num_state) {
			indm_bd();

		}
		f1num_state = true;
	}
	$(window).scroll(function(){
		var bdTop = $(document).scrollTop();
		if(bdTop >100){
			indm_bd();
		}
		if(bdTop >280){
			$('.ind-main2').css({'opacity':1,'transform':'translateY(0)','-webkit-transform':'translateY(0)'})
		}
		if(bdTop >450){
			ind2_show();
		}
		if(bdTop >700){
			new_show();
		}
		if(bdTop >1700){
			$('.ind-btm3').css({'opacity':1,'transform':'translateY(0)','-webkit-transform':'translateY(0)'})
		}
		
	})
	
	
	function ind2_show() {
		var ind2m = $(".ind-main2");

		setTimeout(function() {
			ind2m.find(".im2-box1").addClass("active");
		}, 300)
		setTimeout(function() {
			ind2m.find(".im2-box2").addClass("active");
		}, 600)
		setTimeout(function() {
			ind2m.find(".im2-box3").addClass("active");
		}, 900)
		setTimeout(function() {
			ind2m.find(".im2-box4").addClass("active");
		}, 1200)
		setTimeout(function() {
			ind2m.find(".im2-box5").addClass("active");
		}, 1500)
	}
	function new_show(){
		var newsShow = $('.ind-btm .ind-news-box'),
			maxNewsLen = $('.ind-btm .ind-news-box').find('.news-wrap').length;
			newsIndex = 0;
			newsState = false;

			newsShow.find(".news-list").children('.news-wrap').each(function (i) {
			    var idx=i+1;
			    var $this=$(this);
			    setTimeout(function () {
			        $this.addClass("active");
			    }, 300 * (idx + 1));
			});
	}
	
	function indm_bd(){
		var indm1Li = $('.ind-main1 ul li');
		/*setTimeout(function(){
			var indm1Index = 0;
			var indm1_static = false;
			if(!indm1_static){
				indm1Li.eq(indm1Index).addClass('active');
				indm1Index++;
				console.log(indm1Index);
				if(indm1Index == 10){
					indm1_static = true
				}
			}
		},200)*/
		setTimeout(function(){
			indm1Li.eq(0).addClass('active');
		},300)
		setTimeout(function(){
			indm1Li.eq(1).addClass('active');
		},600)
		setTimeout(function(){
			indm1Li.eq(2).addClass('active');
		},900)
		setTimeout(function(){
			indm1Li.eq(3).addClass('active');
		},1200)
		setTimeout(function(){
			indm1Li.eq(4).addClass('active');
		},1500)
		setTimeout(function(){
			indm1Li.eq(5).addClass('active');
		},1800)
		setTimeout(function(){
			indm1Li.eq(6).addClass('active');
		},2100)
		setTimeout(function(){
			indm1Li.eq(7).addClass('active');
		},2400)
		setTimeout(function(){
			indm1Li.eq(8).addClass('active');
		},2700)
		setTimeout(function(){
			indm1Li.eq(9).addClass('active');
		},3000)
		setTimeout(function(){
			indm1Li.eq(10).addClass('active');
		},3300)
		setTimeout(function(){
			indm1Li.eq(11).addClass('active');
		},3600)
		
	}
})
