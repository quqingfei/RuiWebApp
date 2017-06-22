// JavaScript Documentmouseout=function() {MyMar=setInterval(Marquee,speed)};
-->

$(document).ready(function(){	

	//加载经验值
	setTimeout(function() {$(".Integral_list span").animate({width:'70%'},2000); }, 300);

	 $("#subimt").click(function(){
		  $("#user,.reveal-modal-bg").fadeIn(500);
		});	
	$(".Cancel,.closed2,.reveal-modal-bg,.picshow").click(function(){
			  $("#user,.reveal-modal-bg,.modal,#dh_modal,.picshow").fadeOut(500);
			  $(".picshow").removeClass('picshow_show');
		});
		//商品详情相片集弹窗
	$(".banner_top,.shop_bth").click(function(){
		  $(".picshow").fadeIn(500);
		  $(".picshow").addClass('picshow_show');
		});
	//转赠好友
	$(".ze_bth").click(function(){
		  $("#ze_modal,.reveal-modal-bg").fadeIn(500);
		});
	//确认兑换
	$("#gift_dh").click(function(){
		  $("#dh_modal,.reveal-modal-bg").fadeIn(500);
		  $(this).addClass('score_no');
		});
	//商户申请
	$("#sq_bth").click(function(){
		  $("#sq_modal").fadeIn(500);
		  $(this).addClass('score_no');
		  setTimeout(function() {$("#sq_modal").fadeOut(500);$("#sq_bth").text("已经申请"); }, 2000);
		});
	//核销
	$("#hx_bth").click(function(){
		  $("#hx_modal,.reveal-modal-bg").fadeIn(500);
		});
	//核销
	$(".guagua").click(function(){
		  $(".guagua").fadeOut(500);
		});
	//搜索按钮切换
	$(".Search").click(function(){
		  $(".bth_bg2").addClass('bth_bg5');
		});
	/*//签到按钮切换
	$(".Sign").click(function(){
		  $(".Sign").addClass('Sign_ok');
		});*/
	//设置生日
	$(".sr_bth").click(function(){
		  $(".Birthday").slideDown(500);
		});
	//商家详情关注按钮切换
	$(".gift_bth").toggle(
		function(){
		  $(".gift_bth").addClass('score_no');
		  setTimeout(function() {$(".gift_bth").text("取消关注"); }, 100);
		},function(){
			$(".gift_bth").removeClass('score_no');
			$(this).text("关注");
			}
		);
		
	//礼品详情喜欢按钮切换
	$(".score_gz").toggle(
		function(){
		  $(".score_gz").addClass('score_no');
		  setTimeout(function() {$("#gz_modal").fadeOut(500);$(".score_gz").text("取消关注"); }, 2000);
		},function(){
			$(".score_gz").removeClass('score_no');
			$(this).text("关注");
			}
		);
		
	//查看评论按钮切换
	$(".scoremore").click(function(){
		  $(".scoremore").addClass('scoremore2');
		});
	//页面的点赞效果
	$(".xin-2").click(function(){
	  $(this).toggleClass('xin-1');
	  $(".add",this).animate({top:'-28px',opacity:'1',display:'block'},500);
	  $(".add",this).animate({top:'-28px',opacity:'0',display:'block'},600);
	});
	$(".xin-1").click(function(){
	  $(this).toggleClass('xin-3');
	  $(".add",this).animate({top:'-28px',opacity:'1',display:'block'},500);
	  $(".add",this).animate({top:'-28px',opacity:'0',display:'block'},600);
	});
	//核销
	$("#hx_bth").click(function(){
		  $("#hx_modal,.reveal-modal-bg").fadeIn(500);
		});
	$(".Search").click(function(){
		  $(".bth_bg2").addClass('bth_bg5');
		});
	//签到动画
	$(".Sign").toggle(
	  function(){
		  $(".Sign").addClass('Sign_ok');
	  setTimeout(function() {$(".Sign").animate({right:'-90px'},500); }, 2000);
	  setTimeout(function() {
			$(".cz_txt").animate({top:'-10px',opacity:"1",fontSize:"48px"},800);
			$(".cz_txt").animate({opacity:"0"},500);
			  }, 100);
	  },
		function(){
			  $(".Sign").animate({right:'0px'},500);
			  setTimeout(function() {$(".Sign").animate({right:'-90px'},500); }, 2000);
			
			  }
		);
	
	
	
});

	
