$(".smooth-scroll").click(function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top-0},1e3,function(){window.location.hash=t})}});
