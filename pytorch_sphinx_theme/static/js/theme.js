require=function r(s,l,a){function c(t,e){if(!l[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var o=l[t]={exports:{}};s[t][0].call(o.exports,function(e){return c(s[t][1][e]||e)},o,o.exports,r,s,l,a)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,n){window.utilities={scrollTop:function(){var e=window.pageXOffset!==undefined,t="CSS1Compat"===(document.compatMode||"");e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft;return e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop},throttle:function(n,i,o){var r,s,l,a=null,c=0;o||(o={});var u=function(){c=!1===o.leading?0:Date.now(),a=null,l=n.apply(r,s),a||(r=s=null)};return function(){var e=Date.now();c||!1!==o.leading||(c=e);var t=i-(e-c);return r=this,s=arguments,t<=0||i<t?(a&&(clearTimeout(a),a=null),c=e,l=n.apply(r,s),a||(r=s=null)):a||!1===o.trailing||(a=setTimeout(u,t)),l}},closest:function(e,t){var n,i;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(e){return"function"==typeof document.body[e]&&(n=e,!0)});e;){if((i=e.parentElement)&&i[n](t))return i;e=i}return null},offset:function(e){if(e&&(rect=e.getBoundingClientRect(),rect.width||rect.height||e.getClientRects().length)){var t=e.ownerDocument.documentElement;return{top:rect.top+window.pageYOffset-t.clientTop,left:rect.left+window.pageXOffset-t.clientLeft}}},headersHeight:function(){return document.getElementById("header-holder").offsetHeight+document.getElementById("pytorch-page-level-bar").offsetHeight}}},{}],2:[function(e,t,n){window.highlightNavigation={navigationListItems:document.querySelectorAll("#pytorch-right-menu li"),sections:document.querySelectorAll(".pytorch-article .section"),sectionIdTonavigationLink:{},bind:function(){if(sideMenus.displayRightMenu){for(var e=0;e<highlightNavigation.sections.length;e++){var t=highlightNavigation.sections[e].id;highlightNavigation.sectionIdTonavigationLink[t]=document.querySelectorAll('#pytorch-right-menu li a[href="#'+t+'"]')[0]}$(window).scroll(utilities.throttle(highlightNavigation.highlight,100))}},highlight:function(){var e=document.getElementById("pytorch-right-menu");if(0!==e.offsetWidth||0!==e.offsetHeight)for(var t=utilities.scrollTop(),n=document.getElementById("header-holder").offsetHeight+document.getElementById("pytorch-page-level-bar").offsetHeight+25,i=highlightNavigation.sections,o=i.length-1;0<=o;o--){var r=i[o];if(utilities.offset(r).top-n<=t){var s=highlightNavigation.sectionIdTonavigationLink[r.id],l=utilities.closest(s,"li");if(l&&!l.classList.contains("active")){for(o=0;o<highlightNavigation.navigationListItems.length;o++){var a=highlightNavigation.navigationListItems[o];a.classList.contains("active")&&a.classList.remove("active")}l.classList.add("active")}break}}}}},{}],3:[function(e,t,n){"object"==typeof window.MathJax&&(window.MathJax.Hub.Config({messageStyle:"none",scale:100,"HTML-CSS":{showMathMenu:!1,linebreaks:{automatic:!0,width:"container"},preferredFont:"STIX",availableFonts:["STIX","TeX"]},SVG:{linebreaks:{automatic:!0,width:"container"}}}),window.MathJax.Hub.Configured())},{}],4:[function(e,t,n){window.mobileMenu={bind:function(){$("[data-behavior='open-mobile-menu']").on("click",function(e){e.preventDefault(),$(".mobile-main-menu").addClass("open"),$("body").addClass("no-scroll"),mobileMenu.listenForResize()}),$("[data-behavior='close-mobile-menu']").on("click",function(e){e.preventDefault(),mobileMenu.close()})},listenForResize:function(){$(window).on("resize.ForMobileMenu",function(){768<$(this).width()&&mobileMenu.close()})},close:function(){$(".mobile-main-menu").removeClass("open"),$("body").removeClass("no-scroll"),$(window).off("resize.ForMobileMenu")}}},{}],5:[function(e,t,n){window.mobileTOC={bind:function(){$("[data-behavior='toggle-table-of-contents']").on("click",function(e){e.preventDefault();var t=$(this).parent();t.hasClass("is-open")?(t.removeClass("is-open"),$(".pytorch-left-menu").slideUp(200,function(){$(this).css({display:""})})):(t.addClass("is-open"),$(".pytorch-left-menu").slideDown(200))})}}},{}],6:[function(e,t,n){window.pytorchAnchors={bind:function(){$(".headerlink").text(""),window.anchors.add(".pytorch-article .headerlink"),$(".anchorjs-link").each(function(){var e=$(this).closest(".headerlink"),t=e.attr("href"),n=this.outerHTML;$clone=$(n).attr("href",t),e.before($clone),e.remove()})}}},{}],7:[function(e,t,n){window.scrollToAnchor={bind:function(){var o=window.document,r=window.history,s=window.location,l=!(!r||!r.pushState),e={ANCHOR_REGEX:/^#[^ ]+$/,offsetHeightPx:function(){return o.getElementById("header-holder").offsetHeight+o.getElementById("pytorch-page-level-bar").offsetHeight+20},init:function(){this.scrollToCurrent(),$("body").on("click","a",$.proxy(this,"delegateAnchors")),$("body").on("click","#pytorch-right-menu li span",$.proxy(this,"delegateSpans"))},getFixedOffset:function(){return this.offsetHeightPx()},scrollIfAnchor:function(e,t){var n;if(!this.ANCHOR_REGEX.test(e))return!1;if(n=o.getElementById(e.slice(1))){var i=$(n).offset().top-this.getFixedOffset();$("html, body").scrollTop(i),l&&t&&r.pushState({},o.title,s.pathname+e)}return!!n},scrollToCurrent:function(e){this.scrollIfAnchor(window.location.hash)&&e&&e.preventDefault()},delegateSpans:function(e){var t=utilities.closest(e.target,"a");this.scrollIfAnchor(t.getAttribute("href"),!0)&&e.preventDefault()},delegateAnchors:function(e){var t=e.target;this.scrollIfAnchor(t.getAttribute("href"),!0)&&e.preventDefault()}};$(o).ready($.proxy(e,"init"))}}},{}],8:[function(e,t,n){function a(e){var t=e.getBoundingClientRect();return 0<t.bottom&&0<t.right&&t.left<(window.innerWidth||document.documentElement.clientWidth)&&t.top<(window.innerHeight||document.documentElement.clientHeight)}window.sideMenus={displayRightMenu:1<document.querySelectorAll("#pytorch-right-menu li").length,isFixedToBottom:!1,bind:function(){if(sideMenus.handleLeftMenu(),sideMenus.displayRightMenu){document.getElementById("pytorch-content-right").classList.add("show"),document.getElementById("pytorch-shortcuts-wrapper").style.display="block";var e=document.querySelectorAll("#pytorch-side-scroll-right > ul > li");1===e.length&&(e[0].querySelector("a.reference.internal").style.display="none"),document.getElementById("pytorch-right-menu").style["margin-top"]=sideMenus.rightMenuInitialTop()+"px",sideMenus.handleRightMenu()}$(window).on("resize scroll",function(e){sideMenus.handleLeftMenu(),sideMenus.displayRightMenu&&sideMenus.handleRightMenu()})},rightMenuInitialTop:function(){return utilities.headersHeight()},handleLeftMenu:function(){var e=window.innerHeight,t=document.getElementById("docs-tutorials-resources").getBoundingClientRect().top;if(e<=t)document.getElementById("pytorch-left-menu").style.height="100%";else{var n=e-t+document.getElementById("header-holder").offsetHeight;document.getElementById("pytorch-left-menu").style.height=e-n+"px"}},handleRightMenu:function(){var e=document.getElementById("pytorch-right-menu");if(0!==utilities.scrollTop()){var t=e.getElementsByTagName("ul")[0],n=utilities.offset(t).top+t.offsetHeight,i=utilities.offset(document.getElementById("docs-tutorials-resources")).top,o=i<=n||i-n<=40,r=$(window).height()-document.getElementById("docs-tutorials-resources").getBoundingClientRect().top;if(r<0&&(r=0),this.isFixedToBottom)(s=a(document.getElementById("docs-tutorials-resources")))?(l=r,e.style["margin-top"]="auto",e.style.bottom=l+"px"):(this.isFixedToBottom=!1,e.style.height=window.innerHeight-r-utilities.headersHeight()+"px",e.style["margin-top"]=sideMenus.rightMenuInitialTop()+"px",e.style.bottom=l);else if(o){var s=a(document.getElementById("docs-tutorials-resources")),l=0;this.isFixedToBottom=!0,s?(l=r,e.style["margin-top"]="auto",e.style.bottom=l+"px"):(e.style.height=window.innerHeight-r-utilities.headersHeight()+"px",e.style["margin-top"]=sideMenus.rightMenuInitialTop()+"px",e.style.bottom=l)}else this.isFixedToBottom=!1,e.style.height=window.innerHeight-r-utilities.headersHeight()+"px",e.style["margin-top"]=sideMenus.rightMenuInitialTop()+"px",e.style.bottom=l}else e.style["margin-top"]=sideMenus.rightMenuInitialTop()+"px"}}},{}],"pytorch-sphinx-theme":[function(e,t,n){var jQuery="undefined"!=typeof window?window.jQuery:e("jquery");t.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(t){var n=this;void 0===t&&(t=!0),n.isRunning||(n.isRunning=!0,jQuery(function(e){n.init(e),n.reset(),n.win.on("hashchange",n.reset),t&&n.win.on("scroll",function(){n.linkScroll||n.winScroll||(n.winScroll=!0,requestAnimationFrame(function(){n.onScroll()}))}),n.win.on("resize",function(){n.winResize||(n.winResize=!0,requestAnimationFrame(function(){n.onResize()}))}),n.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(n){n(document);var i=this;this.navBar=n("div.pytorch-side-scroll:first"),this.win=n(window),n(document).on("click","[data-toggle='pytorch-left-menu-nav-top']",function(){n("[data-toggle='wy-nav-shift']").toggleClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".pytorch-menu-vertical .current ul li a",function(){var e=n(this);n("[data-toggle='wy-nav-shift']").removeClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift"),i.toggleCurrent(e),i.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){n("[data-toggle='rst-versions']").toggleClass("shift-up")}),n("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),n("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),n("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),n(".pytorch-menu-vertical ul").not(".simple").siblings("a").each(function(){var t=n(this);expand=n('<span class="toctree-expand"></span>'),expand.on("click",function(e){return i.toggleCurrent(t),e.stopPropagation(),!1}),t.prepend(expand)})},reset:function(){var e=encodeURI(window.location.hash)||"#";try{var t=$(".pytorch-menu-vertical"),n=t.find('[href="'+e+'"]');if(0===n.length){var i=$('.document [id="'+e.substring(1)+'"]').closest("div.section");0===(n=t.find('[href="#'+i.attr("id")+'"]')).length&&(n=t.find('[href="#"]'))}0<n.length&&($(".pytorch-menu-vertical .current").removeClass("current"),n.addClass("current"),n.closest("li.toctree-l1").addClass("current"),n.closest("li.toctree-l1").parent().addClass("current"),n.closest("li.toctree-l1").addClass("current"),n.closest("li.toctree-l2").addClass("current"),n.closest("li.toctree-l3").addClass("current"),n.closest("li.toctree-l4").addClass("current"))}catch(o){console.log("Error expanding nav for anchor",o)}},onScroll:function(){this.winScroll=!1;var e=this.win.scrollTop(),t=e+this.winHeight,n=this.navBar.scrollTop()+(e-this.winPosition);e<0||t>this.docHeight||(this.navBar.scrollTop(n),this.winPosition=e)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},toggleCurrent:function(e){var t=e.closest("li");t.siblings("li.current").removeClass("current"),t.siblings().find("li.current").removeClass("current"),t.find("> ul li.current").removeClass("current"),t.toggleClass("current")}},"undefined"!=typeof window&&(window.SphinxRtdTheme={Navigation:t.exports.ThemeNav,StickyNav:t.exports.ThemeNav}),function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),o=window.setTimeout(function(){e(n+i)},i);return r=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),$(".sphx-glr-thumbcontainer").removeAttr("tooltip"),$("table").removeAttr("border")},{jquery:"jquery"}]},{},[1,2,3,4,5,6,7,8,"pytorch-sphinx-theme"]);