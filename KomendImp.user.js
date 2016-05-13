// ==UserScript==
// @name         KomendImp
// @namespace    http://www.josefkuchar.cz/
// @version      1.0.0
// @description  Some improvement for http://komenskehozsnachod.cz/
// @author       Josef Kuchař
// @match        http://www.komenskehozsnachod.cz/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function() {
  var html = $(".clt").html();
  html = html.replace(/[-]{5,}/g,"<hr>"); //Replace ---------- to <hr>
  html = html.replace(/[_]{5,}/g,"<hr>"); //Replace __________ to <hr>
  $(".clt").html(html);
})();