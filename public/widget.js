!function(){const e=["art.kkk3.kz"];let t=!1;for(let s=0,n=e.length;s<n;s++)location.hostname===e[s]&&(t=!0);const s={request(e){"string"==typeof e&&(e={url:e}),e.url=e.url||"",e.method=e.method||"get",e.data=e.data||{};const t=function(e,t){let s,n=[];for(const t in e)n.push(`${t}=${encodeURIComponent(e[t])}`);return""!=(s=n.join("&"))?t?t.indexOf("?")<0?`?${s}`:`&${s}`:s:""};return{host:{},process(e){const s=this;return this.xhr=null,window.ActiveXObject?this.xhr=new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest&&(this.xhr=new XMLHttpRequest),this.xhr&&(this.xhr.onreadystatechange=function(){if(4==s.xhr.readyState&&200==s.xhr.status){let t=s.xhr.responseText;!0===e.json&&"undefined"!=typeof JSON&&(t=JSON.parse(t)),s.doneCallback&&s.doneCallback.apply(s.host,[t,s.xhr])}else 4==s.xhr.readyState&&s.failCallback&&s.failCallback.apply(s.host,[s.xhr]);s.alwaysCallback&&s.alwaysCallback.apply(s.host,[s.xhr])}),"get"==e.method?this.xhr.open("GET",e.url+t(e.data,e.url),!0):(this.xhr.open(e.method,e.url,!0),this.setHeaders({"X-Requested-With":"XMLHttpRequest","Content-type":"application/x-www-form-urlencoded"})),e.headers&&"object"==typeof e.headers&&this.setHeaders(e.headers),setTimeout(()=>{"get"==e.method?s.xhr.send():s.xhr.send(t(e.data))},20),this},done(e){return this.doneCallback=e,this},fail(e){return this.failCallback=e,this},always(e){return this.alwaysCallback=e,this},setHeaders(e){for(const t in e)this.xhr&&this.xhr.setRequestHeader(t,e[t])}}.process(e)}};function n(e){(document.querySelectorAll(".mindsalesTrunkNumber")||[]).forEach(t=>{t.textContent=e,"A"==t.nodeName&&t.setAttribute("href","tel:"+e)})}window.addEventListener("DOMContentLoaded",function(){let e,o;console.info("mscrm wwwidget loaded"),function(e){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),void 0!==t&&document.getElementsByTagName("head")[0].appendChild(t)}(`https://1show.kz/widget.css?p=${(new Date).getTime()}`);const c=(a="mindsalesPhone",l=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),l?decodeURIComponent(l[1]):void 0);var a,l;c?(n(c),o=c.replace(/ /g,"").replace(/\D/g,"")):s.request({url:"https://dev.mindsales.kz/ct",method:"post",data:{referer:location.href}}).done(e=>{o=e.replace(/ /g,"").replace(/\D/g,""),function(e,t,s){var n=(s=s||{}).expires;if("number"==typeof n&&n){var o=new Date;o.setTime(o.getTime()+1e3*n),n=s.expires=o}n&&n.toUTCString&&(s.expires=n.toUTCString());var c=e+"="+(t=encodeURIComponent(t));for(var a in s){c+="; "+a;var l=s[a];!0!==l&&(c+="="+l)}document.cookie=c}("mindsalesPhone",e,{expires:30758400}),n(e)}).fail(e=>{console.log("fail xhr",e)});const i=document.createElement("div");if(i.innerHTML='\n      <div class="mscbButton" id="mscbButton"></div>\n      <div class="mscbWindow" id="mscbWindow">\n      <div class="mscbWindow_layout" id="mscbLayout">\n      <div class="mscbContent" id="mscbContent">\n      <div class="mscbHeader">\n      <span class="mscbHeader__closeBtn" id="mscbCloseBtn"></span>\n      <h1 class="mscbHeader__title">Есть вопросы?</h1>\n      <h2 class="mscbHeader__subtitle">Позвоним и расскажем обо всем подробнее!</h2>\n      </div>\n      <div class="mscbForm">\n      <label class="mscbForm__label" for="mscbPhoneText">Номер Вашего телефона</label>\n      <input type="tel" name="phone" id="mscbPhoneText" class="mscbForm__input"/>\n      <input type="button" class="mscbForm__button" id="mscbFormButton" value="Жду звонка">\n      </div>\n      </div>\n      <div class="mscbThxMessage" id="mscbThxMessage">\n      <span class="mscbThxMessage__closeBtn" id="mscbCloseThx"></span>\n      <div class="mscbThxMessage__title">Спасибо за обращение</div>\n      <div class="mscbThxMessage__subtitle">Мы свяжемся с Вами в ближайшее время</div>\n      </div>\n      </div>\n      </div>',t)return console.warn("Domain in blacklist");function d(){mscbPhoneText.value=String(mscbPhoneText.value).replace(/\D/g,"")}document.body.appendChild(i),mscbButton.addEventListener("click",()=>{mscbButton.style.display="none",mscbWindow.style.display="table",mscbPhoneText.focus()},!1),mscbFormButton.addEventListener("click",()=>{const t=mscbPhoneText.value.replace(/ /g,"");if(!t||""===t)return mscbPhoneText.focus(),mscbPhoneText.className+=" mscbForm__input--error",void setTimeout(()=>{mscbPhoneText.className="mscbForm__input"},1e3);mscbContent.style.display="none",mscbThxMessage.style.display="block",e=setTimeout(()=>{mscbThxMessage.style.display="none",mscbContent.style.display="block",mscbButton.style.display="block",mscbWindow.style.display="none"},3e3),s.request({url:`https://dev.mindsales.kz/cfw?cn=${t}&tr=${o}`}).done(e=>{console.info("MS-CRM: callback success")}).fail(e=>{console.error("MS-CRM: callback issues")})},!1),mscbCloseBtn.addEventListener("click",()=>{mscbButton.style.display="block",mscbWindow.style.display="none"},!1),mscbCloseThx.addEventListener("click",()=>{mscbButton.style.display="block",mscbWindow.style.display="none",clearTimeout(e),mscbThxMessage.style.display="none",mscbContent.style.display="block"},!1),document.addEventListener("click",t=>{t.target==mscbLayout&&(mscbButton.style.display="block",mscbWindow.style.display="none",clearTimeout(e),mscbThxMessage.style.display="none",mscbContent.style.display="block")},!1),mscbPhoneText.addEventListener("keyup",d,!1),mscbPhoneText.addEventListener("keypress",d,!1),mscbPhoneText.addEventListener("keydown",d,!1)},!1)}();