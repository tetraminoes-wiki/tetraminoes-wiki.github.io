"use strict";(self.webpackChunktetraminoes=self.webpackChunktetraminoes||[]).push([[879],{3848:(e,t,r)=>{t.xv=void 0;var i=r(9572),n=r(1769),o=r(8380);t.xv={decode:function(e){return(0,i.decode)(e)}}},5936:function(e,t,r){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createActionEncoder=t.createActionDecoder=void 0;var n=r(15);function o(e){return 0!==e}function c(e){return e?1:0}t.createActionDecoder=function(e,t,r){var c=(t+r)*e;return{decode:function(r){var a=r,s=function(e){switch(e){case 0:return n.Piece.Empty;case 1:return n.Piece.I;case 2:return n.Piece.L;case 3:return n.Piece.O;case 4:return n.Piece.Z;case 5:return n.Piece.T;case 6:return n.Piece.J;case 7:return n.Piece.S;case 8:return n.Piece.Gray}throw new Error("Unexpected piece")}(a%8),u=function(e){switch(e){case 0:return n.Rotation.Reverse;case 1:return n.Rotation.Right;case 2:return n.Rotation.Spawn;case 3:return n.Rotation.Left}throw new Error("Unexpected rotation")}((a=Math.floor(a/8))%4),f=function(r,i,o){var c=r%e,a=Math.floor(r/10),s=t-a-1;return i===n.Piece.O&&o===n.Rotation.Left?(c+=1,s-=1):i===n.Piece.O&&o===n.Rotation.Reverse?c+=1:i===n.Piece.O&&o===n.Rotation.Spawn?s-=1:i===n.Piece.I&&o===n.Rotation.Reverse?c+=1:i===n.Piece.I&&o===n.Rotation.Left||i===n.Piece.S&&o===n.Rotation.Spawn?s-=1:i===n.Piece.S&&o===n.Rotation.Right?c-=1:i===n.Piece.Z&&o===n.Rotation.Spawn?s-=1:i===n.Piece.Z&&o===n.Rotation.Left&&(c+=1),{x:c,y:s}}((a=Math.floor(a/4))%c,s,u);return{rise:o((a=Math.floor(a/c))%2),mirror:o((a=Math.floor(a/2))%2),colorize:o((a=Math.floor(a/2))%2),comment:o((a=Math.floor(a/2))%2),lock:!o((a=Math.floor(a/2))%2),piece:i(i({},f),{type:s,rotation:u})}}}};t.createActionEncoder=function(e,t,r){var i=(t+r)*e;return{encode:function(r){var o,a,s,u,f,p=r.lock,h=r.comment,l=r.colorize,d=r.mirror,v=r.rise,y=r.piece,g=c(!p);return g*=2,g+=c(h),g*=2,g+=c(l),g*=2,g+=c(d),g*=2,g+=c(v),g*=i,g+=(a=(o=y).type,s=o.rotation,u=o.x,f=o.y,(0,n.isMinoPiece)(a)?a===n.Piece.O&&s===n.Rotation.Left?(u-=1,f+=1):a===n.Piece.O&&s===n.Rotation.Reverse?u-=1:a===n.Piece.O&&s===n.Rotation.Spawn?f+=1:a===n.Piece.I&&s===n.Rotation.Reverse?u-=1:a===n.Piece.I&&s===n.Rotation.Left||a===n.Piece.S&&s===n.Rotation.Spawn?f+=1:a===n.Piece.S&&s===n.Rotation.Right?u+=1:a===n.Piece.Z&&s===n.Rotation.Spawn?f+=1:a===n.Piece.Z&&s===n.Rotation.Left&&(u-=1):(u=0,f=22),(t-f-1)*e+u),g*=4,g+=function(e){var t=e.type,r=e.rotation;if(!(0,n.isMinoPiece)(t))return 0;switch(r){case n.Rotation.Reverse:return 0;case n.Rotation.Right:return 1;case n.Rotation.Spawn:return 2;case n.Rotation.Left:return 3}throw new Error("No reachable")}(y),g*=8,g+=y.type}}}},7978:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Buffer=void 0;var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=function(){function e(e){void 0===e&&(e=""),this.values=e.split("").map(n)}return e.prototype.poll=function(t){for(var r=0,i=0;i<t;i+=1){var n=this.values.shift();if(void 0===n)throw new Error("Unexpected fumen");r+=n*Math.pow(e.tableLength,i)}return r},e.prototype.push=function(t,r){void 0===r&&(r=1);for(var i=t,n=0;n<r;n+=1)this.values.push(i%e.tableLength),i=Math.floor(i/e.tableLength)},e.prototype.merge=function(e){for(var t=0,r=e.values;t<r.length;t++){var i=r[t];this.values.push(i)}},e.prototype.isEmpty=function(){return 0===this.values.length},Object.defineProperty(e.prototype,"length",{get:function(){return this.values.length},enumerable:!1,configurable:!0}),e.prototype.get=function(e){return this.values[e]},e.prototype.set=function(e,t){this.values[e]=t},e.prototype.toString=function(){return this.values.map(o).join("")},e.tableLength=64,e}();function n(e){return r.indexOf(e)}function o(e){return r[e]}t.Buffer=i},7428:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createCommentParser=void 0;var r=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";t.createCommentParser=function(){return{decode:function(e){for(var t="",i=e,n=0;n<4;n+=1){t+=r[i%96],i=Math.floor(i/96)}return t},encode:function(e,t){return r.indexOf(e)*Math.pow(96,t)}}}},9572:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.decode=t.extract=t.Page=void 0;var i=r(524),n=r(7978),o=r(15),c=r(5936),a=r(7428),s=r(6839),u=r(8380),f=function(){function e(e,t,r,i,n,o){this.index=e,this.operation=r,this.comment=i,this.flags=n,this.refs=o,this._field=t.copy()}return Object.defineProperty(e.prototype,"field",{get:function(){return new u.Field(this._field.copy())},set:function(e){this._field=(0,i.createInnerField)(e)},enumerable:!1,configurable:!0}),e.prototype.mino=function(){return u.Mino.from(this.operation)},e}();t.Page=f;var p={GarbageLine:1,Width:10};function h(e){var t,r=function(e,t){return{version:e,data:t.trim().replace(/[?\s]+/g,"")}},i=e,n=i.indexOf("&");if(0<=n&&(i=i.substring(0,n)),null!=(t=e.match(/[vmd]115@/))&&void 0!==t.index)return r("115",i.substr(t.index+5));if(null!=(t=e.match(/[vmd]110@/))&&void 0!==t.index)return r("110",i.substr(t.index+5));throw new Error("Unsupported fumen version")}function l(e,t){for(var r=(t+p.GarbageLine)*p.Width,h=new n.Buffer(e),l=function(e){for(var i={changed:!0,field:e},n=0;n<r;){var o=h.poll(2),c=Math.floor(o/r),a=o%r;8===c&&a===r-1&&(i.changed=!1);for(var s=0;s<a+1;s+=1){var u=n%p.Width,f=t-Math.floor(n/p.Width)-1;i.field.addNumber(u,f,c-8),n+=1}}return i},d=0,v=(0,i.createNewInnerField)(),y={repeatCount:-1,refIndex:{comment:0,field:0},quiz:void 0,lastCommentText:""},g=[],m=(0,c.createActionDecoder)(p.Width,t,p.GarbageLine),P=(0,a.createCommentParser)();!h.isEmpty();){var b=void 0;0<y.repeatCount?(b={field:v,changed:!1},y.repeatCount-=1):(b=l(v.copy())).changed||(y.repeatCount=h.poll(1));var w=h.poll(3),x=m.decode(w),O=void 0;if(x.comment){for(var R=[],z=h.poll(2),E=0;E<Math.floor((z+3)/4);E+=1){var A=h.poll(5);R.push(A)}for(var L="",q=0,M=R;q<M.length;q++){var k=M[q];L+=P.decode(k)}var S=unescape(L.slice(0,z));y.lastCommentText=S,O={text:S},y.refIndex.comment=d;var I=O.text;if(s.Quiz.isQuizComment(I))try{y.quiz=new s.Quiz(I)}catch(T){y.quiz=void 0}else y.quiz=void 0}else O=0===d?{text:""}:{text:void 0!==y.quiz?y.quiz.format().toString():void 0,ref:y.refIndex.comment};var N=!1;if(void 0!==y.quiz&&(N=!0,y.quiz.canOperate()&&x.lock))if((0,o.isMinoPiece)(x.piece.type))try{var _=y.quiz.nextIfEnd(),W=_.getOperation(x.piece.type);y.quiz=_.operate(W)}catch(T){y.quiz=y.quiz.format()}else y.quiz=y.quiz.format();var j=void 0;x.piece.type!==o.Piece.Empty&&(j=x.piece);var F=void 0;b.changed||0===d?(F={},y.refIndex.field=d):F={ref:y.refIndex.field},g.push(new f(d,b.field,void 0!==j?u.Mino.from({type:(0,o.parsePieceName)(j.type),rotation:(0,o.parseRotationName)(j.rotation),x:j.x,y:j.y}):void 0,void 0!==O.text?O.text:y.lastCommentText,{quiz:N,lock:x.lock,mirror:x.mirror,colorize:x.colorize,rise:x.rise},{field:F.ref,comment:O.ref})),d+=1,x.lock&&((0,o.isMinoPiece)(x.piece.type)&&b.field.fill(x.piece),b.field.clearLine(),x.rise&&b.field.riseGarbage(),x.mirror&&b.field.mirror()),v=b.field}return g}t.extract=h,t.decode=function(e){var t=h(e),r=t.version,i=t.data;switch(r){case"115":return l(i,23);case"110":return l(i,21)}throw new Error("Unsupported fumen version")}},15:(e,t)=>{var r,i;Object.defineProperty(t,"__esModule",{value:!0}),t.parseRotation=t.parseRotationName=t.Rotation=t.parsePiece=t.parsePieceName=t.isMinoPiece=t.Piece=void 0,function(e){e[e.Empty=0]="Empty",e[e.I=1]="I",e[e.L=2]="L",e[e.O=3]="O",e[e.Z=4]="Z",e[e.T=5]="T",e[e.J=6]="J",e[e.S=7]="S",e[e.Gray=8]="Gray"}(r=t.Piece||(t.Piece={})),t.isMinoPiece=function(e){return e!==r.Empty&&e!==r.Gray},t.parsePieceName=function(e){switch(e){case r.I:return"I";case r.L:return"L";case r.O:return"O";case r.Z:return"Z";case r.T:return"T";case r.J:return"J";case r.S:return"S";case r.Gray:return"X";case r.Empty:return"_"}throw new Error("Unknown piece: ".concat(e))},t.parsePiece=function(e){switch(e.toUpperCase()){case"I":return r.I;case"L":return r.L;case"O":return r.O;case"Z":return r.Z;case"T":return r.T;case"J":return r.J;case"S":return r.S;case"X":case"GRAY":return r.Gray;case" ":case"_":case"EMPTY":return r.Empty}throw new Error("Unknown piece: ".concat(e))},function(e){e[e.Spawn=0]="Spawn",e[e.Right=1]="Right",e[e.Reverse=2]="Reverse",e[e.Left=3]="Left"}(i=t.Rotation||(t.Rotation={})),t.parseRotationName=function(e){switch(e){case i.Spawn:return"spawn";case i.Left:return"left";case i.Right:return"right";case i.Reverse:return"reverse"}throw new Error("Unknown rotation: ".concat(e))},t.parseRotation=function(e){switch(e.toLowerCase()){case"spawn":return i.Spawn;case"left":return i.Left;case"right":return i.Right;case"reverse":return i.Reverse}throw new Error("Unknown rotation: ".concat(e))}},1769:function(e,t,r){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.encode=void 0;var n=r(524),o=r(7978),c=r(15),a=r(5936),s=r(7428),u=r(6839),f={GarbageLine:1,Width:10};t.encode=function(e){for(var t=function(e,t){var i=function(e,t){for(var r=23,i=r+1,n=i*f.Width,c=new o.Buffer,a=function(i,n){var o=r-n-1;return t.getNumberAt(i,o)-e.getNumberAt(i,o)+8},s=function(e,t){var r=e*n+t;c.push(r,2)},u=!0,p=a(0,0),h=-1,l=0;l<i;l+=1)for(var d=0;d<f.Width;d+=1){var v=a(d,l);v!==p?(s(p,h),h=0,p=v):h+=1}s(p,h),8===p&&h===n-1&&(u=!1);return{changed:u,values:c}}(e,t),n=i.changed,c=i.values;if(n)p.merge(c),r=-1;else if(r<0||p.get(r)===o.Buffer.tableLength-1)p.merge(c),p.push(0),r=p.length-1;else if(p.get(r)<o.Buffer.tableLength-1){var a=p.get(r);p.set(r,a+1)}},r=-1,p=new o.Buffer,h=(0,n.createNewInnerField)(),l=(0,a.createActionEncoder)(f.Width,23,f.GarbageLine),d=(0,s.createCommentParser)(),v="",y=void 0,g=function(r){var o=e[r];o.flags=o.flags?o.flags:{};var a=o.field,s=void 0!==a?(0,n.createInnerField)(a):h.copy();t(h,s);var f,g=void 0!==o.comment&&(0!==r||""!==o.comment)?o.comment:void 0,m=void 0!==o.operation?{type:(0,c.parsePiece)(o.operation.type),rotation:(0,c.parseRotation)(o.operation.rotation),x:o.operation.x,y:o.operation.y}:{type:c.Piece.Empty,rotation:c.Rotation.Reverse,x:0,y:22};if(void 0!==g?g.startsWith("#Q=")?void 0!==y&&y.format().toString()===g?f=void 0:(v=f=g,y=new u.Quiz(g)):void 0!==y&&y.format().toString()===g?(f=void 0,v=g,y=void 0):(f=v!==g?g:void 0,v=v!==g?f:v,y=void 0):(f=void 0,y=void 0),void 0!==y&&y.canOperate()&&o.flags.lock)if((0,c.isMinoPiece)(m.type))try{var P=y.nextIfEnd(),b=P.getOperation(m.type);y=P.operate(b)}catch(k){y=y.format()}else y=y.format();var w=i({lock:!0,colorize:0===r},o.flags),x={piece:m,rise:!!w.rise,mirror:!!w.mirror,colorize:!!w.colorize,lock:!!w.lock,comment:void 0!==f},O=l.encode(x);if(p.push(O,3),void 0!==f){var R=escape(o.comment),z=Math.min(R.length,4095);p.push(z,2);for(var E=0;E<z;E+=4){for(var A=0,L=0;L<4;L+=1){var q=E+L;if(z<=q)break;var M=R.charAt(q);A+=d.encode(M,L)}p.push(A,5)}}else void 0===o.comment&&(v=void 0);x.lock&&((0,c.isMinoPiece)(x.piece.type)&&s.fill(x.piece),s.clearLine(),x.rise&&s.riseGarbage(),x.mirror&&s.mirror()),h=s},m=0;m<e.length;m+=1)g(m);var P=p.toString();if(P.length<41)return P;var b=[P.substr(0,42)],w=P.substring(42).match(/[\S]{1,47}/g)||[];return b.concat(w).join("?")}},8380:function(e,t,r){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Mino=t.Field=void 0;var n=r(524),o=r(15);function c(e){return e instanceof s?e.copy():s.from(e)}var a=function(){function e(e){this.field=e}return e.create=function(t,r){return new e(new n.InnerField({field:void 0!==t?n.PlayField.load(t):void 0,garbage:void 0!==r?n.PlayField.loadMinify(r):void 0}))},e.prototype.canFill=function(e){if(void 0===e)return!0;var t=c(e);return this.field.canFillAll(t.positions())},e.prototype.canLock=function(e){return void 0===e||!!this.canFill(e)&&!this.canFill(i(i({},e),{y:e.y-1}))},e.prototype.fill=function(e,t){if(void 0===t&&(t=!1),void 0!==e){var r=c(e);if(!t&&!this.canFill(r))throw Error("Cannot fill piece on field");return this.field.fillAll(r.positions(),(0,o.parsePiece)(r.type)),r}},e.prototype.put=function(e){if(void 0!==e){for(var t=c(e);0<=t.y;t.y-=1)if(this.canLock(t))return this.fill(t),t;throw Error("Cannot put piece on field")}},e.prototype.clearLine=function(){this.field.clearLine()},e.prototype.at=function(e,t){return(0,o.parsePieceName)(this.field.getNumberAt(e,t))},e.prototype.set=function(e,t,r){this.field.setNumberAt(e,t,(0,o.parsePiece)(r))},e.prototype.copy=function(){return new e(this.field.copy())},e.prototype.str=function(e){void 0===e&&(e={});for(var t=void 0===e.reduced||e.reduced,r=void 0!==e.separator?e.separator:"\n",i=void 0===e.garbage||e.garbage?-1:0,n="",o=22;i<=o;o-=1){for(var c="",a=0;a<10;a+=1)c+=this.at(a,o);t&&"__________"===c||(t=!1,n+=c,o!==i&&(n+=r))}return n},e}();t.Field=a;var s=function(){function e(e,t,r,i){this.type=e,this.rotation=t,this.x=r,this.y=i}return e.from=function(t){return new e(t.type,t.rotation,t.x,t.y)},e.prototype.positions=function(){return(0,n.getBlockXYs)((0,o.parsePiece)(this.type),(0,o.parseRotation)(this.rotation),this.x,this.y).sort((function(e,t){return e.y===t.y?e.x-t.x:e.y-t.y}))},e.prototype.operation=function(){return{type:this.type,rotation:this.rotation,x:this.x,y:this.y}},e.prototype.isValid=function(){try{(0,o.parsePiece)(this.type),(0,o.parseRotation)(this.rotation)}catch(e){return!1}return this.positions().every((function(e){var t=e.x,r=e.y;return 0<=t&&t<10&&0<=r&&r<23}))},e.prototype.copy=function(){return new e(this.type,this.rotation,this.x,this.y)},e}();t.Mino=s},524:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPieces=t.getBlocks=t.getBlockXYs=t.getBlockPositions=t.PlayField=t.InnerField=t.createInnerField=t.createNewInnerField=void 0;var i=r(15),n={Width:10,Height:23,PlayBlocks:230};t.createNewInnerField=function(){return new o({})},t.createInnerField=function(e){for(var t=new o({}),r=-1;r<n.Height;r+=1)for(var c=0;c<n.Width;c+=1){var a=e.at(c,r);t.setNumberAt(c,r,(0,i.parsePiece)(a))}return t};var o=function(){function e(t){var r=t.field,i=void 0===r?e.create(n.PlayBlocks):r,o=t.garbage,c=void 0===o?e.create(n.Width):o;this.field=i,this.garbage=c}return e.create=function(e){return new c({length:e})},e.prototype.fill=function(e){this.field.fill(e)},e.prototype.fillAll=function(e,t){this.field.fillAll(e,t)},e.prototype.canFill=function(e,t,r,o){var c=this;return a(e,t,r,o).every((function(e){var t=e[0],r=e[1];return 0<=t&&t<10&&0<=r&&r<n.Height&&c.getNumberAt(t,r)===i.Piece.Empty}))},e.prototype.canFillAll=function(e){var t=this;return e.every((function(e){var r=e.x,o=e.y;return 0<=r&&r<10&&0<=o&&o<n.Height&&t.getNumberAt(r,o)===i.Piece.Empty}))},e.prototype.isOnGround=function(e,t,r,i){return!this.canFill(e,t,r,i-1)},e.prototype.clearLine=function(){this.field.clearLine()},e.prototype.riseGarbage=function(){this.field.up(this.garbage),this.garbage.clearAll()},e.prototype.mirror=function(){this.field.mirror()},e.prototype.shiftToLeft=function(){this.field.shiftToLeft()},e.prototype.shiftToRight=function(){this.field.shiftToRight()},e.prototype.shiftToUp=function(){this.field.shiftToUp()},e.prototype.shiftToBottom=function(){this.field.shiftToBottom()},e.prototype.copy=function(){return new e({field:this.field.copy(),garbage:this.garbage.copy()})},e.prototype.equals=function(e){return this.field.equals(e.field)&&this.garbage.equals(e.garbage)},e.prototype.addNumber=function(e,t,r){0<=t?this.field.addOffset(e,t,r):this.garbage.addOffset(e,-(t+1),r)},e.prototype.setNumberFieldAt=function(e,t){this.field.setAt(e,t)},e.prototype.setNumberGarbageAt=function(e,t){this.garbage.setAt(e,t)},e.prototype.setNumberAt=function(e,t,r){return 0<=t?this.field.set(e,t,r):this.garbage.set(e,-(t+1),r)},e.prototype.getNumberAt=function(e,t){return 0<=t?this.field.get(e,t):this.garbage.get(e,-(t+1))},e.prototype.getNumberAtIndex=function(e,t){return t?this.getNumberAt(e%10,Math.floor(e/10)):this.getNumberAt(e%10,-(Math.floor(e/10)+1))},e.prototype.toFieldNumberArray=function(){return this.field.toArray()},e.prototype.toGarbageNumberArray=function(){return this.garbage.toArray()},e}();t.InnerField=o;var c=function(){function e(e){var t=e.pieces,r=e.length,o=void 0===r?n.PlayBlocks:r;this.pieces=void 0!==t?t:Array.from({length:o}).map((function(){return i.Piece.Empty})),this.length=o}return e.load=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=t.join("").trim();return e.loadInner(i)},e.loadMinify=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=t.join("").trim();return e.loadInner(i,i.length)},e.loadInner=function(t,r){var n=void 0!==r?r:t.length;if(n%10!=0)throw new Error("Num of blocks in field should be mod 10");for(var o=new e(void 0!==r?{length:r}:{}),c=0;c<n;c+=1){var a=t[c];o.set(c%10,Math.floor((n-c-1)/10),(0,i.parsePiece)(a))}return o},e.prototype.get=function(e,t){return this.pieces[e+t*n.Width]},e.prototype.addOffset=function(e,t,r){this.pieces[e+t*n.Width]+=r},e.prototype.set=function(e,t,r){this.setAt(e+t*n.Width,r)},e.prototype.setAt=function(e,t){this.pieces[e]=t},e.prototype.fill=function(e){for(var t=e.type,r=e.rotation,i=e.x,n=e.y,o=0,c=s(t,r);o<c.length;o++){var a=c[o],u=[i+a[0],n+a[1]],f=u[0],p=u[1];this.set(f,p,t)}},e.prototype.fillAll=function(e,t){for(var r=0,i=e;r<i.length;r++){var n=i[r],o=n.x,c=n.y;this.set(o,c,t)}},e.prototype.clearLine=function(){for(var e=this.pieces.concat(),t=this.pieces.length/n.Width-1;0<=t;t-=1){if(this.pieces.slice(t*n.Width,(t+1)*n.Width).every((function(e){return e!==i.Piece.Empty}))){var r=e.slice(0,t*n.Width),o=e.slice((t+1)*n.Width);e=r.concat(o,Array.from({length:n.Width}).map((function(){return i.Piece.Empty})))}}this.pieces=e},e.prototype.up=function(e){this.pieces=e.pieces.concat(this.pieces).slice(0,this.length)},e.prototype.mirror=function(){for(var e=[],t=0;t<this.pieces.length;t+=1){var r=this.pieces.slice(t*n.Width,(t+1)*n.Width);r.reverse();for(var i=0,o=r;i<o.length;i++){var c=o[i];e.push(c)}}this.pieces=e},e.prototype.shiftToLeft=function(){for(var e=this.pieces.length/10,t=0;t<e;t+=1){for(var r=0;r<n.Width-1;r+=1)this.pieces[r+t*n.Width]=this.pieces[r+1+t*n.Width];this.pieces[9+t*n.Width]=i.Piece.Empty}},e.prototype.shiftToRight=function(){for(var e=this.pieces.length/10,t=0;t<e;t+=1){for(var r=n.Width-1;1<=r;r-=1)this.pieces[r+t*n.Width]=this.pieces[r-1+t*n.Width];this.pieces[t*n.Width]=i.Piece.Empty}},e.prototype.shiftToUp=function(){var e=Array.from({length:10}).map((function(){return i.Piece.Empty}));this.pieces=e.concat(this.pieces).slice(0,this.length)},e.prototype.shiftToBottom=function(){var e=Array.from({length:10}).map((function(){return i.Piece.Empty}));this.pieces=this.pieces.slice(10,this.length).concat(e)},e.prototype.toArray=function(){return this.pieces.concat()},Object.defineProperty(e.prototype,"numOfBlocks",{get:function(){return this.pieces.length},enumerable:!1,configurable:!0}),e.prototype.copy=function(){return new e({pieces:this.pieces.concat(),length:this.length})},e.prototype.toShallowArray=function(){return this.pieces},e.prototype.clearAll=function(){this.pieces=this.pieces.map((function(){return i.Piece.Empty}))},e.prototype.equals=function(e){if(this.pieces.length!==e.pieces.length)return!1;for(var t=0;t<this.pieces.length;t+=1)if(this.pieces[t]!==e.pieces[t])return!1;return!0},e}();function a(e,t,r,i){return s(e,t).map((function(e){return e[0]+=r,e[1]+=i,e}))}function s(e,t){var r=u(e);switch(t){case i.Rotation.Spawn:return r;case i.Rotation.Left:return r.map((function(e){return[-e[1],e[0]]}));case i.Rotation.Reverse:return function(e){return e.map((function(e){return[-e[0],-e[1]]}))}(r);case i.Rotation.Right:return function(e){return e.map((function(e){return[e[1],-e[0]]}))}(r)}throw new Error("Unsupported block")}function u(e){switch(e){case i.Piece.I:return[[0,0],[-1,0],[1,0],[2,0]];case i.Piece.T:return[[0,0],[-1,0],[1,0],[0,1]];case i.Piece.O:return[[0,0],[1,0],[0,1],[1,1]];case i.Piece.L:return[[0,0],[-1,0],[1,0],[1,1]];case i.Piece.J:return[[0,0],[-1,0],[1,0],[-1,1]];case i.Piece.S:return[[0,0],[-1,0],[0,1],[1,1]];case i.Piece.Z:return[[0,0],[1,0],[0,1],[-1,1]]}throw new Error("Unsupported rotation")}t.PlayField=c,t.getBlockPositions=a,t.getBlockXYs=function(e,t,r,i){return s(e,t).map((function(e){return{x:e[0]+r,y:e[1]+i}}))},t.getBlocks=s,t.getPieces=u},6839:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Quiz=void 0;var i,n=r(15);!function(e){e.Direct="direct",e.Swap="swap",e.Stock="stock"}(i||(i={}));var o=function(){function e(t){this.quiz=e.verify(t)}return Object.defineProperty(e.prototype,"next",{get:function(){var e=this.quiz.indexOf(")")+1,t=this.quiz[e];return void 0===t||";"===t?"":t},enumerable:!1,configurable:!0}),e.isQuizComment=function(e){return e.startsWith("#Q=")},e.create=function(t,r){var i=function(t,r){var i=function(e){return e||""};return new e("#Q=[".concat(i(t),"](").concat(i(r[0]),")").concat(i(r.substring(1))))};return void 0!==r?i(t,r):i(void 0,t)},e.trim=function(e){return e.trim().replace(/\s+/g,"")},Object.defineProperty(e.prototype,"least",{get:function(){var e=this.quiz.indexOf(")");return this.quiz.substr(e+1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){var e=this.quiz.indexOf("(")+1,t=this.quiz[e];return")"===t?"":t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hold",{get:function(){var e=this.quiz.indexOf("[")+1,t=this.quiz[e];return"]"===t?"":t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leastAfterNext2",{get:function(){var e=this.quiz.indexOf(")");return";"===this.quiz[e+1]?this.quiz.substr(e+1):this.quiz.substr(e+2)},enumerable:!1,configurable:!0}),e.prototype.getOperation=function(e){var t=(0,n.parsePieceName)(e),r=this.current;if(t===r)return i.Direct;var o=this.hold;if(t===o)return i.Swap;if(""===o){if(t===this.next)return i.Stock}else if(""===r&&t===this.next)return i.Direct;throw new Error("Unexpected hold piece in quiz: ".concat(this.quiz))},Object.defineProperty(e.prototype,"leastInActiveBag",{get:function(){var e=this.quiz.indexOf(";"),t=0<=e?this.quiz.substring(0,e):this.quiz,r=t.indexOf(")");return";"===t[r+1]?t.substr(r+1):t.substr(r+2)},enumerable:!1,configurable:!0}),e.verify=function(e){var t=this.trim(e);if(0===t.length||"#Q=[]()"===e||!e.startsWith("#Q="))return e;if(!t.match(/^#Q=\[[TIOSZJL]?]\([TIOSZJL]?\)[TIOSZJL]*;?.*$/i))throw new Error("Current piece doesn't exist, however next pieces exist: ".concat(e));return t},e.prototype.direct=function(){if(""===this.current){var t=this.leastAfterNext2;return new e("#Q=[".concat(this.hold,"](").concat(t[0],")").concat(t.substr(1)))}return new e("#Q=[".concat(this.hold,"](").concat(this.next,")").concat(this.leastAfterNext2))},e.prototype.swap=function(){if(""===this.hold)throw new Error("Cannot find hold piece: ".concat(this.quiz));var t=this.next;return new e("#Q=[".concat(this.current,"](").concat(t,")").concat(this.leastAfterNext2))},e.prototype.stock=function(){if(""!==this.hold||""===this.next)throw new Error("Cannot stock: ".concat(this.quiz));var t=this.leastAfterNext2,r=void 0!==t[0]?t[0]:"";return 1<t.length?new e("#Q=[".concat(this.current,"](").concat(r,")").concat(t.substr(1))):new e("#Q=[".concat(this.current,"](").concat(r,")"))},e.prototype.operate=function(e){switch(e){case i.Direct:return this.direct();case i.Swap:return this.swap();case i.Stock:return this.stock()}throw new Error("Unexpected operation")},e.prototype.format=function(){var t=this.nextIfEnd();if("#Q=[]()"===t.quiz)return new e("");var r=t.current,i=t.hold;if(""===r&&""!==i)return new e("#Q=[](".concat(i,")").concat(t.least));if(""===r){var n=t.least,o=n[0];return new e(void 0===o?"":";"===o?n.substr(1):"#Q=[](".concat(o,")").concat(n.substr(1)))}return t},e.prototype.getHoldPiece=function(){if(!this.canOperate())return n.Piece.Empty;var e=this.hold;return void 0===e||""===e||";"===e?n.Piece.Empty:(0,n.parsePiece)(e)},e.prototype.getNextPieces=function(e){if(!this.canOperate())return void 0!==e?Array.from({length:e}).map((function(){return n.Piece.Empty})):[];var t=(this.current+this.next+this.leastInActiveBag).substr(0,e);return void 0!==e&&t.length<e&&(t+=" ".repeat(e-t.length)),t.split("").map((function(e){return void 0===e||" "===e||";"===e?n.Piece.Empty:(0,n.parsePiece)(e)}))},e.prototype.toString=function(){return this.quiz},e.prototype.canOperate=function(){var e=this.quiz;return e.startsWith("#Q=[]();")&&(e=this.quiz.substr(8)),e.startsWith("#Q=")&&"#Q=[]()"!==e},e.prototype.nextIfEnd=function(){return this.quiz.startsWith("#Q=[]();")?new e(this.quiz.substr(8)):this},e}();t.Quiz=o},7214:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var i=r(959);const n={},o=i.createContext(n);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);