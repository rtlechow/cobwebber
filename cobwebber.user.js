// ==UserScript==
// @name           Cobwebber
// @namespace      http://www.rtlechow.com
// @description    Show the cobwebs on derelict Github repos
// @include        http://github.com/*
// ==/UserScript==

var lastCommit = document.getElementsByClassName("js-relative-date")[0].title;
if (lastCommit && lastCommit.length > 0) {
  lastCommit = lastCommit.split(/[-: ]/);
  var lastCommitDate = new Date(lastCommit[0], lastCommit[1] - 1, lastCommit[2], lastCommit[3], lastCommit[4], lastCommit[5]);
  var currentDate = new Date;
  var differenceDate = currentDate - lastCommitDate;
  var day = 1000 * 60 * 60 * 24;
  var webImage = "";
  if (differenceDate > day * 180) {
    webImage = "http://www.rtlechow.com/web-large.png";
  } else if (differenceDate > day * 90) {
    webImage = "http://www.rtlechow.com/web-medium.png";
  } else if (differenceDate > day * 30) {
    webImage = "http://www.rtlechow.com/web-small.png";
  }
  var main, newElement;
  main = document.getElementById("main");
  if (main) {
    newElement = document.createElement("div");
    newElement.innerHTML = "<div onselectstart=\"return false\" ondragstart=\"return false\"; style=\"position: absolute; left: 0px; top: 0px; z-index: 1;\"><img src=\""+ webImage +"\"></div>";
    main.parentNode.insertBefore(newElement, main);
  }
}
