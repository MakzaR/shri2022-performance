(()=>{function e(e,t,i){Array.from(e).forEach(e=>{e.addEventListener(t,i)})}function t(t){let i=t.querySelector(".sec__tb_a").dataset.id,a=t.querySelectorAll(".sec__tb"),r=Array.from(a).map(e=>e.dataset.id),n=t.querySelector(".sec__sel");function s(e){let a=t.querySelector(`.sec__tb[data-id=${e}]`),r=t.querySelector(`.sec__p[data-id=${e}]`),s=t.querySelector(".sec__tb_a"),l=t.querySelector(".sec__p:not(.sec__p_h)");i=e,s.classList.remove("section__tab_active"),s.setAttribute("aria-selected","false"),s.removeAttribute("tabindex"),a.classList.add("section__tab_active"),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0"),a.focus({preventScroll:!0}),l.classList.add("section__panel_hidden"),l.setAttribute("aria-hidden","true"),r.classList.remove("section__panel_hidden"),r.setAttribute("aria-hidden","false"),n.value=e}n.addEventListener("input",()=>{s(n.value)}),e(a,"click", e=>{let t=e.target.dataset.id;s(t)}),e(a,"keydown", e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=r.indexOf(i);if(37===e.which)--t;else if(39===e.which)++t;else if(36===e.which)t=0;else{if(35!==e.which)return;t=r.length-1}t>=r.length?t=0:t<0&&(t=r.length-1),s(r[t]),e.preventDefault()})}function i(e){let t=!1,i=document.querySelector(".hed__lis");e.addEventListener("click",()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),e.querySelector(".header__menu-text").textContent=t?"Закрыть меню":"Открыть меню",i.classList.toggle("header__links_opened",t),i.classList.add("header__links-toggled")})}t(document.querySelector(".m__dev")),i(document.querySelector(".hed__m"))})();