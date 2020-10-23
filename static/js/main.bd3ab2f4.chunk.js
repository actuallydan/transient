(this.webpackJsonptransient=this.webpackJsonptransient||[]).push([[0],{13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),s=n(2),l=n(3),c=n(7),h=n(6),u=(n(13),n(1)),d=n.n(u),m=function(t,e,n,a,r){return new u.Sound({source:"wave",options:{frequency:e||440,type:t,volume:n,release:a,attack:r}})},p=function(){function t(){var e=this;Object(s.a)(this,t),this.play={soprano:{},alto:{},tenor:{},bass:{},kick:function(){e.kick.play(),setTimeout((function(){e.kick.stop()}),250)},clap:function(){e.clap.play(),setTimeout((function(){e.clap.stop()}),250)}},this.tones=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],this.oct=[2,3,4,5,6],this.kick=m("sine",130.8,.2,.6,0),this.clap=m("sawtooth",261.6,.05,1.5,0),this.voices=[{voiceName:"soprano",inst:m("triangle",null,.2,1,1)},{voiceName:"alto",inst:m("sine",null,.2,1,1)},{voiceName:"tenor",inst:m("square",null,.1,1,1)},{voiceName:"bass",inst:m("sine",null,.3,1,1)}],this.band=new d.a.Group,this.playToggle=!1,this.dur=1e3,this.reverb=new d.a.Effects.Reverb({time:1,decay:.8,reverse:!0,mix:.9}),this.ringModulator=new d.a.Effects.RingModulator({speed:1,distortion:1,mix:.1}),this.dubDelay=new d.a.Effects.DubDelay({feedback:.2,time:.7,mix:.1,cutoff:3e3}),this.quadrafuzz=new d.a.Effects.Quadrafuzz({lowGain:.6,midLowGain:.8,midHighGain:0,highGain:0})}return Object(l.a)(t,[{key:"playMusic",value:function(t){var e=this;t?(this.playKickTrigger=setInterval(this.play.kick,1e3),this.playClapTrigger=setInterval(this.play.clap,2e3),this.voices.map((function(t){return"soprano"===t.voiceName&&t.inst.addEffect(e.ringModulator),e.band.addSound(t.inst),e.randNote(t),null})),this.band.addEffect(this.reverb),this.band.addEffect(this.dubDelay)):this.stopMusic()}},{key:"stopMusic",value:function(){var t=this;clearInterval(this.playClapTrigger),clearInterval(this.playKickTrigger),this.voices.forEach((function(e){return e.inst.stop(),"soprano"===e.voiceName&&e.inst.removeEffect(t.ringModulator),t.band.removeSound(e.inst),null})),clearTimeout(this.play.soprano),clearTimeout(this.play.alto),clearTimeout(this.play.tenor),clearTimeout(this.play.bass),this.band.removeEffect(this.reverb),this.band.removeEffect(this.dubDelay)}},{key:"randNote",value:function(t){switch(t.voiceName){case"soprano":this.randNoteForVoice(t,3,4);break;case"alto":this.randNoteForVoice(t,3,3);break;case"tenor":this.randNoteForVoice(t,2,3);break;case"bass":this.randNoteForVoice(t,3,2)}}},{key:"randNoteForVoice",value:function(t,e,n){var a=this,r={voice:t.voiceName,root:this.tones[Math.floor(Math.random()*this.tones.length)].substring(0,1),oct:Math.floor(Math.random()*e)+n,duration:1e3*Math.floor(8*Math.random()+1)/2};this.dur=r.duration,t.inst.frequency=this.noteToFreq(this.getHalfSteps(r)),t.inst.volume=r.oct>5?.05:.2,t.inst.play(),this.play[t.voiceName]=setTimeout((function(){a.randNoteForVoice(t,e,n)}),this.dur)}},{key:"rand_oct",value:function(){var t=1-Math.random(),e=1-Math.random();return Math.abs(Math.floor(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)*2))+1}},{key:"noteToFreq",value:function(t){return+(440*Math.pow(Math.pow(2,1/12),t)).toFixed(2)}},{key:"getHalfSteps",value:function(t){var e=0;return e+=12*t.oct-48+(this.tones.indexOf(t.root)-9)}}]),t}(),f=new(function(){function t(){Object(s.a)(this,t),this.fps=60,this.duration=1,this.transElement=document.body,this.currentColor=this.getElementBG(this.transElement),this.transHandler=null,this.targetColor=null,this.increment=null,this.distance=null}return Object(l.a)(t,[{key:"getElementBG",value:function(t){var e=getComputedStyle(t).backgroundColor;e=(e=e.match(/\((.*)\)/)[1]).split(",");for(var n=0;n<e.length;n++)e[n]=parseInt(e[n],10);return e.length>3&&e.pop(),e}},{key:"random",value:function(){if(arguments.length>2)return 0;switch(arguments.length){case 0:return Math.random();case 1:return Math.round(Math.random()*arguments[0]);case 2:var t=arguments[0],e=arguments[1];return Math.round(Math.random()*(e-t)+t)}}},{key:"generateRGB",value:function(t,e){e=(t=t||0)||255;for(var n=[],a=0;a<3;a++){var r=this.random(t,e);n.push(r)}return n}},{key:"calculateDistance",value:function(t,e){for(var n=[],a=0;a<t.length;a++)n.push(Math.abs(t[a]-e[a]));return n}},{key:"calculateIncrement",value:function(t,e,n){e=this.fps||60,n=this.duration||1;for(var a=[],r=0;r<t.length;r++){var i=Math.abs(Math.floor(t[r]/(e*n)));0===i&&(i=1),a.push(i)}return a}},{key:"rgb2hex",value:function(t){for(var e=[],n=0;n<t.length;n++){var a=t[n].toString(16);a.length<2&&(a="0"+a),e.push(a)}return"#"+e.join("")}},{key:"startTransition",value:function(){var t=this;clearInterval(this.transHandler),this.targetColor=this.generateRGB(),this.distance=this.calculateDistance(this.currentColor,this.targetColor),this.increment=this.calculateIncrement(this.distance,this.fps,this.duration),this.transHandler=setInterval((function(){t.transition()}),1e3/this.fps)}},{key:"stopTransition",value:function(){clearInterval(this.transHandler)}},{key:"transition",value:function(){this.currentColor[0]>this.targetColor[0]?(this.currentColor[0]-=this.increment[0],this.currentColor[0]<=this.targetColor[0]&&(this.increment[0]=0)):(this.currentColor[0]+=this.increment[0],this.currentColor[0]>=this.targetColor[0]&&(this.increment[0]=0)),this.currentColor[1]>this.targetColor[1]?(this.currentColor[1]-=this.increment[1],this.currentColor[1]<=this.targetColor[1]&&(this.increment[1]=0)):(this.currentColor[1]+=this.increment[1],this.currentColor[1]>=this.targetColor[1]&&(this.increment[1]=0)),this.currentColor[2]>this.targetColor[2]?(this.currentColor[2]-=this.increment[2],this.currentColor[2]<=this.targetColor[2]&&(this.increment[2]=0)):(this.currentColor[2]+=this.increment[2],this.currentColor[2]>=this.targetColor[2]&&(this.increment[2]=0)),this.transElement.style.backgroundColor=this.rgb2hex(this.currentColor),0===this.increment[0]&&0===this.increment[1]&&0===this.increment[2]&&this.startTransition()}}]),t}()),g=function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={playToggle:!1,player:new p},t}return Object(l.a)(n,[{key:"togglePlay",value:function(){var t=this;this.setState({playToggle:!this.state.playToggle},(function(){t.state.player.playMusic(t.state.playToggle),t.state.playToggle?f.startTransition():f.stopTransition()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"header"},'Transient composes and plays programmatically "okay" music.',r.a.createElement("br",null),"Indefinitely.",r.a.createElement("div",{style:{fontFamily:"monospace",marginTop:"1em"}},"You may wish to lower your volume, just in case!")),r.a.createElement("button",{id:"play",onClick:this.togglePlay.bind(this)},this.state.playToggle?"Stop":"Play"),r.a.createElement("div",{id:"credit"},"Procedurally Composed Machine Music ",r.a.createElement("br",null)," Built with",r.a.createElement("div",{id:"logo-wrapper"},r.a.createElement("a",{href:"https://github.com/alemangui/pizzicato"},r.a.createElement("div",null,"Pizzicato.js"),r.a.createElement("img",{id:"pizzi-logo",src:"https://alemangui.github.io/pizzicato/favicon.png",alt:"Pizzicato.js"})),r.a.createElement("a",{href:"https://reactjs.org/"},r.a.createElement("img",{id:"react-logo",src:"./download.svg"}),r.a.createElement("div",null,"React")))))}}]),n}(a.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd3ab2f4.chunk.js.map