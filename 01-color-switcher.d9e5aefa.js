!function(){var t=document.querySelector("button.button-start"),e=document.querySelector("button.button-stop"),n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.d9e5aefa.js.map