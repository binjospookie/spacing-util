"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var m=function(e,r){return e*r+"px"};exports.createSpacing=function(e){return function(r){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(r,t){return r+" "+m(e,t)}),m(e,r))}};