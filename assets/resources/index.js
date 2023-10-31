System.register("chunks:///_virtual/MainScript.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,a,i,n,l,c,r,o,u,s,f,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){l=e.cclegacy,c=e._decorator,r=e.Node,o=e.AudioSource,u=e.UIOpacity,s=e.tween,f=e.Vec3,p=e.Component}],execute:function(){var b,h,y,d,v,g,m,w,k,z,C,F,M,S,P,_,D,L,R,T,V,A,I;l._RF.push({},"db158X4T+VOR5gVPQK5Cg+L","MainScript",void 0);var O=c.ccclass,j=c.property;e("MainScript",(b=O("MainScript"),h=j(r),y=j(r),d=j(r),v=j(r),g=j(r),m=j(r),w=j(r),k=j(o),z=j(r),C=j(r),b((S=t((M=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t=e.call.apply(e,[this].concat(l))||this,i(t,"left",S,n(t)),i(t,"right",P,n(t)),i(t,"black",_,n(t)),i(t,"label",D,n(t)),i(t,"back",L,n(t)),i(t,"all",R,n(t)),i(t,"opened",T,n(t)),i(t,"sound",V,n(t)),i(t,"screem",A,n(t)),i(t,"face",I,n(t)),t.shake=!1,t}a(t,e);var l=t.prototype;return l.onEnable=function(){var e=this;this.label.active=!0,this.label.getComponent(u).opacity=0,s(this.label.getComponent(u)).to(1,{opacity:255}).start(),s(this.back.getComponent(u)).delay(3).to(.5,{opacity:0}).call((function(){return e.back.active=!1})).start(),s(this.left).delay(4.9).call((function(){e.opened.active=!0})).to(.3,{scale:new f(0,1,1)}).call((function(){return e.left.active=!1})).start(),s(this.left.getComponent(u)).delay(4.9).to(.2,{opacity:0}).start(),s(this.right).delay(6.4).to(.3,{scale:new f(1.06,1,1)}).to(.3,{scale:new f(0,1,1)}).call((function(){e.right.active=!1})).delay(1.6).call((function(){e.black.active=!1,e.opened.active=!1,e.all.active=!0})).delay(2).call((function(){e.sound.currentTime=238,e.face.active=!0,e.face.children[0].active=!0,e.face.children[1].active=!1,e.showFace(1,[.6,.2,.2,.2,.2,.2])})).delay(2.5).call((function(){e.face.active=!1,e.screem.active=!0})).delay(1.5).call((function(){e.shake=!1,e.showFace(1,[.1,.2,.2,.3,.2,3.7,.2,.3,.3])})).delay(5.7).call((function(){e.face.active=!1,e.screem.active=!0,e.shake=!0})).delay(2).call((function(){e.shake=!1,e.showFace(0,[.3,.4,.2,.2,.3,.2])})).delay(5).call((function(){e.face.active=!1,e.screem.active=!0,e.shake=!0})).delay(2).call((function(){e.shake=!1,e.showFace(0,[.3,.4,.2,.2,.3,.2])})).delay(1).call((function(){s(e.label.getComponent(u)).to(1,{opacity:255}).start(),e.back.active=!0,s(e.back.getComponent(u)).delay(1).to(.5,{opacity:255}).start()})).start()},l.update=function(e){this.shake&&this.node.setPosition(4*Math.random()-2,4*Math.random()-2)},l.showFace=function(e,t){var a=this;this.face.active=!0;for(var i=s(this.face),n=0;n<t.length;n++)i.delay(t[n]),i.call((function(){a.face.children[e].active=!0,e=0==e?1:0,a.face.children[e].active=!1}));i.start()},t}(p)).prototype,"left",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(M.prototype,"right",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(M.prototype,"black",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(M.prototype,"label",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(M.prototype,"back",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(M.prototype,"all",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(M.prototype,"opened",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(M.prototype,"sound",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(M.prototype,"screem",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(M.prototype,"face",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=M))||F));l._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./MainScript.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});