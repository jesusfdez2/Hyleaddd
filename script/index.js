function drag(){document.getElementById("nav-drag")
.offsetWidth}function hideElementeUp(){document.getElementById("updates")}$("#close-navbar")
.click(function(){var e=document.getElementById("nav-drag");e.style.width="0",e.style.visibility="hidden"
,document.getElementById("box-2").style.width="100%",trage.style.visibility="visible"})
,$("#trage").click(function(){var e=document.getElementById("nav-drag")
,t=document.getElementById("trage");e.style.visibility="visible",e.style.display="inline-block"
,e.style.width="320px"
,t.style.visibility="hidden"})
,$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".mergisus")
.fadeIn():$(".mergisus").fadeOut()}),$(".mergisus").click(function(){return $("html, body")
.animate({scrollTop:0},600),!1})})
,window.addEventListener("load"
,function(){document.querySelector(".loadingcontainer").className+=" hidden"})
,$("#copiazaIP").click(function(){swal({title:"¡Has copiado la IP!"
,text:"¡Esperamos te diviertas en Hylead!",icon:"success",button:"Close",timer:1500})
,document.getElementById("ipServer").select(),document.execCommand("copy")})
,window.onscroll=function(){},$(window).resize(function(){recodedResponsiveHeader()
,checkPhone(),responsiveDesign()}),window.onload=function(){recodedResponsiveHeader()
,checkPhone(),responsiveDesign()};var navbar=document.getElementById("navbar")
,w=window.innerWidth;function myFunction(){try{window.pageYOffset>=sticky&&w>=999?(navbar.classList.add("sticky")
,navbar.style.background="rgba(255,255,255,0.05)",navbar.style.margin="0"
,navbar.style.padding="20px",navbar.style.borderBottom="3px solid rgba(0,0,0,.2)"):(navbar.classList.remove("sticky")
,navbar.style.background="none",navbar.style.margin="20px 0px",navbar.style.padding="0px"
,navbar.style.borderBottom="none")}catch(e){console.log(e.message)}}function checkWidth(){console.log(window.innerWidth)}function checkPhone(){try{var e=document.getElementById("open-nav")
,t=document.getElementById("button-open"),n=document.getElementById("testare-hide")
,o=document.getElementById("mobile-nav"),i=window.innerWidth,s=document.getElementById("navbar");i<=999?(e.style.display="block"
,t.style.display="block !important",n.style.display="none",s.classList.remove("sticky")
,s.style.background="none",s.style.margin="0px 0px",s.style.padding="0px"):(e.style.display="none"
,t.style.display="none !important",n.style.display="inline-block",o.style.left="-300px",$("#shadow-open")
.removeClass("shadow-open"))}catch(e){}}function responsiveDesign(){try{var e=document.getElementById("vote-big-box")
,t=document.getElementById("vote-medium-box");window.innerWidth<=999?(e.style.display="block"
,e.style.width="100%",t.style.margin="20px 0px",t.style.display="block",t.style.width="100%"
,t.style.float="none"):(e.style.display="inline-block",e.style.width="70%"
,t.style.display="inline-block",t.style.width="25%",t.style.float="right"
,t.style.margin="0px")}catch(e){}}function recodedResponsiveHeader(){var e=window.innerWidth;const t=document.getElementById("cutie-1")
,n=document.getElementById("cutie-2"),o=document.getElementById("cutie-3"),i=document.getElementById("coloana-3")
,s=document.getElementById("catalin-navi-social");try{e<=968?(n.setAttribute("style","order: 1; margin: auto;")
,t.setAttribute("style","order: 2; margin: auto;"),o.setAttribute("style","order: 3; margin: auto;"),i.setAttribute("style"
,"flex-direction: column;"),s.setAttribute("style","margin-top: -13px;")):(n.setAttribute("style",""),t.setAttribute("style","")
,o.setAttribute("style",""),i.setAttribute("style",""),s.setAttribute("style",""))}catch(e){console.log(e.message)}}checkPhone()
,$("#open-nav").on("click",function(){$("#shadow-open").addClass("shadow-open"),document.getElementById("mobile-nav")
.style.left="0px"}),$("#close-nav").on("click",function(){$("#shadow-open").removeClass("shadow-open")
,document.getElementById("mobile-nav").style.left="-300px"}),$(document).keyup(function(e){27===e.keyCode&&($("#shadow-open")
.removeClass("shadow-open"),document.getElementById("mobile-nav").style.left="-300px")}),$(function(){$("html")
.click(function(e){"shadow-open"==e.target.id&&($("#shadow-open").removeClass("shadow-open"),document.getElementById("mobile-nav")
.style.left="-300px")})}),recodedResponsiveHeader()
,window.onload=function(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;console.log("Page load time is "+e+" ms")};
