(self["webpackChunkminiradio"] = self["webpackChunkminiradio"] || []).push([["chunk-vendors"],{

/***/ "./node_modules/@davland7/rplayer/dist/rplayer.js":
/*!********************************************************!*\
  !*** ./node_modules/@davland7/rplayer/dist/rplayer.js ***!
  \********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={182:function(t){"undefined"!=typeof window&&(t.exports=function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=19)}([function(t,e,r){"use strict";var i;r.d(e,"a",(function(){return i})),function(t){t.MEDIA_ATTACHING="hlsMediaAttaching",t.MEDIA_ATTACHED="hlsMediaAttached",t.MEDIA_DETACHING="hlsMediaDetaching",t.MEDIA_DETACHED="hlsMediaDetached",t.BUFFER_RESET="hlsBufferReset",t.BUFFER_CODECS="hlsBufferCodecs",t.BUFFER_CREATED="hlsBufferCreated",t.BUFFER_APPENDING="hlsBufferAppending",t.BUFFER_APPENDED="hlsBufferAppended",t.BUFFER_EOS="hlsBufferEos",t.BUFFER_FLUSHING="hlsBufferFlushing",t.BUFFER_FLUSHED="hlsBufferFlushed",t.MANIFEST_LOADING="hlsManifestLoading",t.MANIFEST_LOADED="hlsManifestLoaded",t.MANIFEST_PARSED="hlsManifestParsed",t.LEVEL_SWITCHING="hlsLevelSwitching",t.LEVEL_SWITCHED="hlsLevelSwitched",t.LEVEL_LOADING="hlsLevelLoading",t.LEVEL_LOADED="hlsLevelLoaded",t.LEVEL_UPDATED="hlsLevelUpdated",t.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",t.LEVELS_UPDATED="hlsLevelsUpdated",t.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",t.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",t.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",t.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",t.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",t.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",t.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",t.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",t.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",t.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",t.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",t.CUES_PARSED="hlsCuesParsed",t.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",t.INIT_PTS_FOUND="hlsInitPtsFound",t.FRAG_LOADING="hlsFragLoading",t.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",t.FRAG_LOADED="hlsFragLoaded",t.FRAG_DECRYPTED="hlsFragDecrypted",t.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",t.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",t.FRAG_PARSING_METADATA="hlsFragParsingMetadata",t.FRAG_PARSED="hlsFragParsed",t.FRAG_BUFFERED="hlsFragBuffered",t.FRAG_CHANGED="hlsFragChanged",t.FPS_DROP="hlsFpsDrop",t.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",t.ERROR="hlsError",t.DESTROYING="hlsDestroying",t.KEY_LOADING="hlsKeyLoading",t.KEY_LOADED="hlsKeyLoaded",t.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",t.BACK_BUFFER_REACHED="hlsBackBufferReached"}(i||(i={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var i=function(){},a={trace:i,debug:i,log:i,warn:i,info:i,error:i},n=a;function s(t){var e=self.console[t];return e?e.bind(self.console,"["+t+"] >"):i}function o(t){if(self.console&&!0===t||"object"==typeof t){!function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach((function(e){n[e]=t[e]?t[e].bind(t):s(e)}))}(t,"debug","log","info","warn","error");try{n.log()}catch(t){n=a}}else n=a}var l=a},function(t,e,r){"use strict";var i,a;r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a})),function(t){t.NETWORK_ERROR="networkError",t.MEDIA_ERROR="mediaError",t.KEY_SYSTEM_ERROR="keySystemError",t.MUX_ERROR="muxError",t.OTHER_ERROR="otherError"}(i||(i={})),function(t){t.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",t.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",t.KEY_SYSTEM_NO_SESSION="keySystemNoSession",t.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",t.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",t.MANIFEST_LOAD_ERROR="manifestLoadError",t.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",t.MANIFEST_PARSING_ERROR="manifestParsingError",t.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",t.LEVEL_EMPTY_ERROR="levelEmptyError",t.LEVEL_LOAD_ERROR="levelLoadError",t.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",t.LEVEL_SWITCH_ERROR="levelSwitchError",t.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",t.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",t.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",t.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",t.FRAG_LOAD_ERROR="fragLoadError",t.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",t.FRAG_DECRYPT_ERROR="fragDecryptError",t.FRAG_PARSING_ERROR="fragParsingError",t.REMUX_ALLOC_ERROR="remuxAllocError",t.KEY_LOAD_ERROR="keyLoadError",t.KEY_LOAD_TIMEOUT="keyLoadTimeOut",t.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",t.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",t.BUFFER_APPEND_ERROR="bufferAppendError",t.BUFFER_APPENDING_ERROR="bufferAppendingError",t.BUFFER_STALLED_ERROR="bufferStalledError",t.BUFFER_FULL_ERROR="bufferFullError",t.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",t.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",t.INTERNAL_EXCEPTION="internalException",t.INTERNAL_ABORTED="aborted",t.UNKNOWN="unknown"}(a||(a={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)};Number.MAX_SAFE_INTEGER},function(t,e,r){"use strict";var i,a;r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a})),function(t){t.MANIFEST="manifest",t.LEVEL="level",t.AUDIO_TRACK="audioTrack",t.SUBTITLE_TRACK="subtitleTrack"}(i||(i={})),function(t){t.MAIN="main",t.AUDIO="audio",t.SUBTITLE="subtitle"}(a||(a={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return g}));var i,a=r(3),n=r(11),s=r(1),o=r(15),l=r(12);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,r){return e&&h(t.prototype,e),r&&h(t,r),t}!function(t){t.AUDIO="audio",t.VIDEO="video",t.AUDIOVIDEO="audiovideo"}(i||(i={}));var c=function(){function t(t){var e;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=((e={})[i.AUDIO]=null,e[i.VIDEO]=null,e[i.AUDIOVIDEO]=null,e),this.baseurl=t}return t.prototype.setByteRange=function(t,e){var r=t.split("@",2),i=[];1===r.length?i[0]=e?e.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},f(t,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Object(n.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(t){this._url=t}}]),t}(),v=function(t){function e(e,r){var i;return(i=t.call(this,r)||this)._decryptdata=null,i.rawProgramDateTime=null,i.programDateTime=null,i.tagList=[],i.duration=0,i.sn=0,i.levelkey=void 0,i.type=void 0,i.loader=null,i.level=-1,i.cc=0,i.startPTS=void 0,i.endPTS=void 0,i.appendedPTS=void 0,i.startDTS=void 0,i.endDTS=void 0,i.start=0,i.deltaPTS=void 0,i.maxStartPTS=void 0,i.minEndPTS=void 0,i.stats=new l.a,i.urlId=0,i.data=void 0,i.bitrateTest=!1,i.title=null,i.initSegment=null,i.type=e,i}u(e,t);var r=e.prototype;return r.createInitializationVector=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e},r.setDecryptDataFromLevelKey=function(t,e){var r=t;return"AES-128"===(null==t?void 0:t.method)&&t.uri&&!t.iv&&((r=o.a.fromURI(t.uri)).method=t.method,r.iv=this.createInitializationVector(e),r.keyFormat="identity"),r},r.setElementaryStreamInfo=function(t,e,r,i,a,n){void 0===n&&(n=!1);var s=this.elementaryStreams,o=s[t];o?(o.startPTS=Math.min(o.startPTS,e),o.endPTS=Math.max(o.endPTS,r),o.startDTS=Math.min(o.startDTS,i),o.endDTS=Math.max(o.endDTS,a)):s[t]={startPTS:e,endPTS:r,startDTS:i,endDTS:a,partial:n}},r.clearElementaryStreamInfo=function(){var t=this.elementaryStreams;t[i.AUDIO]=null,t[i.VIDEO]=null,t[i.AUDIOVIDEO]=null},f(e,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var t=this.sn;"number"!=typeof t&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&s.b.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),t=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,t)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!Object(a.a)(this.programDateTime))return null;var t=Object(a.a)(this.duration)?this.duration:0;return this.programDateTime+1e3*t}},{key:"encrypted",get:function(){var t;return!(null===(t=this.decryptdata)||void 0===t||!t.keyFormat||!this.decryptdata.uri)}}]),e}(c),g=function(t){function e(e,r,i,a,n){var s;(s=t.call(this,i)||this).fragOffset=0,s.duration=0,s.gap=!1,s.independent=!1,s.relurl=void 0,s.fragment=void 0,s.index=void 0,s.stats=new l.a,s.duration=e.decimalFloatingPoint("DURATION"),s.gap=e.bool("GAP"),s.independent=e.bool("INDEPENDENT"),s.relurl=e.enumeratedString("URI"),s.fragment=r,s.index=a;var o=e.enumeratedString("BYTERANGE");return o&&s.setByteRange(o,n),n&&(s.fragOffset=n.fragOffset+n.duration),s}return u(e,t),f(e,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var t=this.elementaryStreams;return!!(t.audio||t.video||t.audiovideo)}}]),e}(c)},function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"g",(function(){return h})),r.d(e,"f",(function(){return f})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return p})),r.d(e,"h",(function(){return m})),r.d(e,"a",(function(){return y}));var i=r(8),a=r(5),n=Math.pow(2,32)-1,s=[].push;function o(t){return String.fromCharCode.apply(null,t)}function l(t,e){"data"in t&&(e+=t.start,t=t.data);var r=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];return r<0?4294967296+r:r}function u(t,e,r){"data"in t&&(e+=t.start,t=t.data),t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r}function d(t,e){var r,i,a,n=[];if(!e.length)return n;"data"in t?(r=t.data,i=t.start,a=t.end):(i=0,a=(r=t).byteLength);for(var u=i;u<a;){var h=l(r,u),f=h>1?u+h:a;if(o(r.subarray(u+4,u+8))===e[0])if(1===e.length)n.push({data:r,start:u+8,end:f});else{var c=d({data:r,start:u+8,end:f},e.slice(1));c.length&&s.apply(n,c)}u=f}return n}function h(t){var e=d(t,["moov"])[0],r=e?e.end:null,i=d(t,["sidx"]);if(!i||!i[0])return null;var a=[],n=i[0],s=n.data[0],o=0===s?8:16,u=l(n,o);o+=4,o+=0===s?8:16,o+=2;var h=n.end+0,f=function(t,e){"data"in t&&(e+=t.start,t=t.data);var r=t[e]<<8|t[e+1];return r<0?65536+r:r}(n,o);o+=2;for(var c=0;c<f;c++){var v=o,g=l(n,v);v+=4;var p=2147483647&g;if(1==(2147483648&g)>>>31)return console.warn("SIDX has hierarchical references (not supported)"),null;var m=l(n,v);v+=4,a.push({referenceSize:p,subsegmentDuration:m,info:{duration:m/u,start:h,end:h+p-1}}),h+=p,o=v+=4}return{earliestPresentationTime:0,timescale:u,version:s,referencesCount:f,references:a,moovEndOffset:r}}function f(t){for(var e=[],r=d(t,["moov","trak"]),i=0;i<r.length;i++){var n=r[i],s=d(n,["tkhd"])[0];if(s){var u=s.data[s.start],h=0===u?12:20,f=l(s,h),c=d(n,["mdia","mdhd"])[0];if(c){var v=l(c,h=0===(u=c.data[c.start])?12:20),g=d(n,["mdia","hdlr"])[0];if(g){var p=o(g.data.subarray(g.start+8,g.start+12)),m={soun:a.a.AUDIO,vide:a.a.VIDEO}[p];if(m){var y=d(n,["mdia","minf","stbl","stsd"])[0],b=void 0;y&&(b=o(y.data.subarray(y.start+12,y.start+16))),e[f]={timescale:v,type:m},e[m]={timescale:v,id:f,codec:b}}}}}}return d(t,["moov","mvex","trex"]).forEach((function(t){var r=l(t,4),i=e[r];i&&(i.default={duration:l(t,12),flags:l(t,20)})})),e}function c(t,e){return d(e,["moof","traf"]).reduce((function(e,r){var i=d(r,["tfdt"])[0],a=i.data[i.start],n=d(r,["tfhd"]).reduce((function(e,r){var n=l(r,4),s=t[n];if(s){var o=l(i,4);1===a&&(o*=Math.pow(2,32),o+=l(i,8));var u=o/(s.timescale||9e4);if(isFinite(u)&&(null===e||u<e))return u}return e}),null);return null!==n&&isFinite(n)&&(null===e||n<e)?n:e}),null)||0}function v(t,e){for(var r=0,i=0,n=0,s=d(t,["moof","traf"]),o=0;o<s.length;o++){var u=s[o],f=d(u,["tfhd"])[0],c=e[l(f,4)];if(c){var v=c.default,p=l(f,0)|(null==v?void 0:v.flags),m=null==v?void 0:v.duration;8&p&&(m=l(f,2&p?12:8));for(var y=c.timescale||9e4,b=d(u,["trun"]),T=0;T<b.length;T++)!(r=g(b[T]))&&m&&(r=m*l(b[T],4)),c.type===a.a.VIDEO?i+=r/y:c.type===a.a.AUDIO&&(n+=r/y)}}if(0===i&&0===n){var E=h(t);if(null!=E&&E.references)return E.references.reduce((function(t,e){return t+e.info.duration||0}),0)}return i||n}function g(t){var e=l(t,0),r=8;1&e&&(r+=4),4&e&&(r+=4);for(var i=0,a=l(t,4),n=0;n<a;n++)256&e&&(i+=l(t,r),r+=4),512&e&&(r+=4),1024&e&&(r+=4),2048&e&&(r+=4);return i}function p(t,e,r){d(e,["moof","traf"]).forEach((function(e){d(e,["tfhd"]).forEach((function(i){var a=l(i,4),s=t[a];if(s){var o=s.timescale||9e4;d(e,["tfdt"]).forEach((function(t){var e=t.data[t.start],i=l(t,4);if(0===e)u(t,4,i-r*o);else{i*=Math.pow(2,32),i+=l(t,8),i-=r*o,i=Math.max(i,0);var a=Math.floor(i/(n+1)),s=Math.floor(i%(n+1));u(t,4,a),u(t,8,s)}}))}}))}))}function m(t){var e={valid:null,remainder:null},r=d(t,["moof"]);if(!r)return e;if(r.length<2)return e.remainder=t,e;var a=r[r.length-1];return e.valid=Object(i.a)(t,0,a.start-8),e.remainder=Object(i.a)(t,a.start-8),e}function y(t,e){var r=new Uint8Array(t.length+e.length);return r.set(t),r.set(e,t.length),r}},function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"f",(function(){return y}));var i,a=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},n=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},s=function(t,e){for(var r=e,i=0;a(t,e);)i+=10,i+=o(t,e+6),n(t,e+10)&&(i+=10),e+=i;if(i>0)return t.subarray(r,r+i)},o=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,(r|=(127&t[e+2])<<7)|127&t[e+3]},l=function(t,e){return a(t,e)&&o(t,e+6)+10<=t.length-e},u=function(t){for(var e=f(t),r=0;r<e.length;r++){var i=e[r];if(d(i))return m(i)}},d=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},h=function(t){var e=String.fromCharCode(t[0],t[1],t[2],t[3]),r=o(t,4);return{type:e,size:r,data:t.subarray(10,10+r)}},f=function(t){for(var e=0,r=[];a(t,e);){for(var i=o(t,e+6),s=(e+=10)+i;e+8<s;){var l=h(t.subarray(e)),u=c(l);u&&r.push(u),e+=l.size+10}n(t,e)&&(e+=10)}return r},c=function(t){return"PRIV"===t.type?v(t):"W"===t.type[0]?p(t):g(t)},v=function(t){if(!(t.size<2)){var e=y(t.data,!0),r=new Uint8Array(t.data.subarray(e.length+1));return{key:t.type,info:e,data:r.buffer}}},g=function(t){if(!(t.size<2)){if("TXXX"===t.type){var e=1,r=y(t.data.subarray(e),!0);e+=r.length+1;var i=y(t.data.subarray(e));return{key:t.type,info:r,data:i}}var a=y(t.data.subarray(1));return{key:t.type,data:a}}},p=function(t){if("WXXX"===t.type){if(t.size<2)return;var e=1,r=y(t.data.subarray(e),!0);e+=r.length+1;var i=y(t.data.subarray(e));return{key:t.type,info:r,data:i}}var a=y(t.data);return{key:t.type,data:a}},m=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},y=function(t,e){void 0===e&&(e=!1);var r=b();if(r){var i=r.decode(t);if(e){var a=i.indexOf("\0");return-1!==a?i.substring(0,a):i}return i.replace(/\0/g,"")}for(var n,s,o,l=t.length,u="",d=0;d<l;){if(0===(n=t[d++])&&e)return u;if(0!==n&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:u+=String.fromCharCode(n);break;case 12:case 13:s=t[d++],u+=String.fromCharCode((31&n)<<6|63&s);break;case 14:s=t[d++],o=t[d++],u+=String.fromCharCode((15&n)<<12|(63&s)<<6|(63&o)<<0)}}return u};function b(){return i||void 0===self.TextDecoder||(i=new self.TextDecoder("utf-8")),i}},function(t,e,r){"use strict";function i(t,e,r){return Uint8Array.prototype.slice?t.slice(e,r):new Uint8Array(Array.prototype.slice.call(t,e,r))}r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";r.d(e,"c",(function(){return Et})),r.d(e,"d",(function(){return Lt})),r.d(e,"a",(function(){return At})),r.d(e,"b",(function(){return Rt}));var i=r(0),a=r(2),n=r(14),s=r(3),o=r(7),l=r(6),u=r(8),d=function(){function t(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.initPTS=null}var e=t.prototype;return e.resetInitSegment=function(t,e,r){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},e.resetTimeStamp=function(){},e.resetContiguity=function(){},e.canParse=function(t,e){return!1},e.appendFrame=function(t,e,r){},e.demux=function(t,e){this.cachedData&&(t=Object(l.a)(this.cachedData,t),this.cachedData=null);var r,i,a=o.b(t,0),n=a?a.length:0,s=this._audioTrack,d=this._id3Track,f=a?o.d(a):void 0,c=t.length;for(0!==this.frameIndex&&null!==this.initPTS||(this.initPTS=h(f,e)),a&&a.length>0&&d.samples.push({pts:this.initPTS,dts:this.initPTS,data:a}),i=this.initPTS;n<c;){if(this.canParse(t,n)){var v=this.appendFrame(s,t,n);v?(this.frameIndex++,i=v.sample.pts,r=n+=v.length):n=c}else o.a(t,n)?(a=o.b(t,n),d.samples.push({pts:i,dts:i,data:a}),r=n+=a.length):n++;if(n===c&&r!==c){var g=Object(u.a)(t,r);this.cachedData?this.cachedData=Object(l.a)(this.cachedData,g):this.cachedData=g}}return{audioTrack:s,avcTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},id3Track:d,textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},e.flush=function(t){var e=this.cachedData;return e&&(this.cachedData=null,this.demux(e,0)),this.frameIndex=0,{audioTrack:this._audioTrack,avcTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},id3Track:this._id3Track,textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.destroy=function(){},t}(),h=function(t,e){return Object(s.a)(t)?90*t:9e4*e},f=d,c=r(1);function v(t,e){return 255===t[e]&&240==(246&t[e+1])}function g(t,e){return 1&t[e+1]?7:9}function p(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function m(t,e){return e+1<t.length&&v(t,e)}function y(t,e){if(m(t,e)){var r=g(t,e);if(e+r>=t.length)return!1;var i=p(t,e);if(i<=r)return!1;var a=e+i;return a===t.length||m(t,a)}return!1}function b(t,e,r,n,s){if(!t.samplerate){var o=function(t,e,r,n){var s,o,l,u,d=navigator.userAgent.toLowerCase(),h=n,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];s=1+((192&e[r+2])>>>6);var v=(60&e[r+2])>>>2;if(!(v>f.length-1))return l=(1&e[r+2])<<2,l|=(192&e[r+3])>>>6,c.b.log("manifest codec:"+n+", ADTS type:"+s+", samplingIndex:"+v),/firefox/i.test(d)?v>=6?(s=5,u=new Array(4),o=v-3):(s=2,u=new Array(2),o=v):-1!==d.indexOf("android")?(s=2,u=new Array(2),o=v):(s=5,u=new Array(4),n&&(-1!==n.indexOf("mp4a.40.29")||-1!==n.indexOf("mp4a.40.5"))||!n&&v>=6?o=v-3:((n&&-1!==n.indexOf("mp4a.40.2")&&(v>=6&&1===l||/vivaldi/i.test(d))||!n&&1===l)&&(s=2,u=new Array(2)),o=v)),u[0]=s<<3,u[0]|=(14&v)>>1,u[1]|=(1&v)<<7,u[1]|=l<<3,5===s&&(u[1]|=(14&o)>>1,u[2]=(1&o)<<7,u[2]|=8,u[3]=0),{config:u,samplerate:f[v],channelCount:l,codec:"mp4a.40."+s,manifestCodec:h};t.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+v})}(e,r,n,s);if(!o)return;t.config=o.config,t.samplerate=o.samplerate,t.channelCount=o.channelCount,t.codec=o.codec,t.manifestCodec=o.manifestCodec,c.b.log("parsed codec:"+t.codec+", rate:"+o.samplerate+", channels:"+o.channelCount)}}function T(t){return 9216e4/t}function E(t,e,r,i,a){var n=function(t,e,r,i,a){var n=g(t,e),s=p(t,e);if((s-=n)>0)return{headerLength:n,frameLength:s,stamp:r+i*a}}(e,r,i,a,T(t.samplerate));if(n){var s,o=n.frameLength,l=n.headerLength,u=n.stamp,d=l+o,h=Math.max(0,r+d-e.length);h?(s=new Uint8Array(d-l)).set(e.subarray(r+l,e.length),0):s=e.subarray(r+l,r+d);var f={unit:s,pts:u};return h||t.samples.push(f),{sample:f,length:d,missing:h}}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){var e,r;function i(e,r){var i;return(i=t.call(this)||this).observer=void 0,i.config=void 0,i.observer=e,i.config=r,i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,S(e,r);var a=i.prototype;return a.resetInitSegment=function(e,r,i){t.prototype.resetInitSegment.call(this,e,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,isAAC:!0,samples:[],manifestCodec:e,duration:i,inputTimeScale:9e4,dropped:0}},i.probe=function(t){if(!t)return!1;for(var e=(o.b(t,0)||[]).length,r=t.length;e<r;e++)if(y(t,e))return c.b.log("ADTS sync word found !"),!0;return!1},a.canParse=function(t,e){return function(t,e){return function(t,e){return e+5<t.length}(t,e)&&v(t,e)&&p(t,e)<=t.length-e}(t,e)},a.appendFrame=function(t,e,r){b(t,this.observer,e,r,t.manifestCodec);var i=E(t,e,r,this.initPTS,this.frameIndex);if(i&&0===i.missing)return i},i}(f);L.minProbeByteLength=9;var A=L,R=function(){function t(t,e){this.remainderData=null,this.config=void 0,this.config=e}var e=t.prototype;return e.resetTimeStamp=function(){},e.resetInitSegment=function(){},e.resetContiguity=function(){},t.probe=function(t){return Object(l.b)({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.demux=function(t){var e=t,r={type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0};if(this.config.progressive){this.remainderData&&(e=Object(l.a)(this.remainderData,t));var i=Object(l.h)(e);this.remainderData=i.remainder,r.samples=i.valid||new Uint8Array}else r.samples=e;return{audioTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},avcTrack:r,id3Track:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.flush=function(){var t={type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0};return t.samples=this.remainderData||new Uint8Array,this.remainderData=null,{audioTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},avcTrack:t,id3Track:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},e.destroy=function(){},t}();R.minProbeByteLength=1024;var D=R,_=null,k=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],x=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],w=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],C=[0,1,1,4];function O(t,e,r,i,a){if(!(r+24>e.length)){var n=I(e,r);if(n&&r+n.frameLength<=e.length){var s=i+a*(9e4*n.samplesPerFrame/n.sampleRate),o={unit:e.subarray(r,r+n.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=n.channelCount,t.samplerate=n.sampleRate,t.samples.push(o),{sample:o,length:n.frameLength,missing:0}}}}function I(t,e){var r=t[e+1]>>3&3,i=t[e+1]>>1&3,a=t[e+2]>>4&15,n=t[e+2]>>2&3;if(1!==r&&0!==a&&15!==a&&3!==n){var s=t[e+2]>>1&1,o=t[e+3]>>6,l=1e3*k[14*(3===r?3-i:3===i?3:4)+a-1],u=x[3*(3===r?0:2===r?1:2)+n],d=3===o?1:2,h=w[r][i],f=C[i],c=8*h*f,v=Math.floor(h*l/u+s)*f;if(null===_){var g=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);_=g?parseInt(g[1]):0}return!!_&&_<=87&&2===i&&l>=224e3&&0===o&&(t[e+3]=128|t[e+3]),{sampleRate:u,channelCount:d,frameLength:v,samplesPerFrame:c}}}function P(t,e){return 255===t[e]&&224==(224&t[e+1])&&0!=(6&t[e+1])}function F(t,e){return e+1<t.length&&P(t,e)}function M(t,e){if(e+1<t.length&&P(t,e)){var r=I(t,e),i=4;null!=r&&r.frameLength&&(i=r.frameLength);var a=e+i;return a===t.length||F(t,a)}return!1}var N=function(){function t(t){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}var e=t.prototype;return e.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),a=Math.min(4,e);if(0===a)throw new Error("no bytes available");i.set(t.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},e.skipBits=function(t){var e;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,t-=(e=t>>3)>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},e.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&c.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),(e=t-e)>0&&this.bitsAvailable?r<<e|this.readBits(e):r},e.skipLZ=function(){var t;for(t=0;t<this.bitsAvailable;++t)if(0!=(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},e.skipUEG=function(){this.skipBits(1+this.skipLZ())},e.skipEG=function(){this.skipBits(1+this.skipLZ())},e.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},e.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},e.readBoolean=function(){return 1===this.readBits(1)},e.readUByte=function(){return this.readBits(8)},e.readUShort=function(){return this.readBits(16)},e.readUInt=function(){return this.readBits(32)},e.skipScalingList=function(t){for(var e=8,r=8,i=0;i<t;i++)0!==r&&(r=(e+this.readEG()+256)%256),e=0===r?e:r},e.readSPS=function(){var t,e,r,i=0,a=0,n=0,s=0,o=this.readUByte.bind(this),l=this.readBits.bind(this),u=this.readUEG.bind(this),d=this.readBoolean.bind(this),h=this.skipBits.bind(this),f=this.skipEG.bind(this),c=this.skipUEG.bind(this),v=this.skipScalingList.bind(this);o();var g=o();if(l(5),h(3),o(),c(),100===g||110===g||122===g||244===g||44===g||83===g||86===g||118===g||128===g){var p=u();if(3===p&&h(1),c(),c(),h(1),d())for(e=3!==p?8:12,r=0;r<e;r++)d()&&v(r<6?16:64)}c();var m=u();if(0===m)u();else if(1===m)for(h(1),f(),f(),t=u(),r=0;r<t;r++)f();c(),h(1);var y=u(),b=u(),T=l(1);0===T&&h(1),h(1),d()&&(i=u(),a=u(),n=u(),s=u());var E=[1,1];if(d()&&d())switch(o()){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:E=[o()<<8|o(),o()<<8|o()]}return{width:Math.ceil(16*(y+1)-2*i-2*a),height:(2-T)*(b+1)*16-(T?2:4)*(n+s),pixelRatio:E}},e.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}(),B=function(){function t(t,e,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new n.a(t,e,{removePKCS7Padding:!1})}var e=t.prototype;return e.decryptBuffer=function(t,e){this.decrypter.decrypt(t,this.keyData.key.buffer,this.keyData.iv.buffer,e)},e.decryptAacSample=function(t,e,r,i){var a=t[e].unit,n=a.subarray(16,a.length-a.length%16),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),o=this;this.decryptBuffer(s,(function(n){var s=new Uint8Array(n);a.set(s,16),i||o.decryptAacSamples(t,e+1,r)}))},e.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(t,e,r,i),!i)return}}},e.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,a=32;a<t.length-16;a+=160,i+=16)r.set(t.subarray(a,a+16),i);return r},e.getAvcDecryptedUnit=function(t,e){for(var r=new Uint8Array(e),i=0,a=32;a<t.length-16;a+=160,i+=16)t.set(r.subarray(i,i+16),a);return t},e.decryptAvcSample=function(t,e,r,i,a,n){var s=X(a.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,(function(o){a.data=l.getAvcDecryptedUnit(s,o),n||l.decryptAvcSamples(t,e,r+1,i)}))},e.decryptAvcSamples=function(t,e,r,i){if(t instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;e++,r=0){if(e>=t.length)return void i();for(var a=t[e].units;!(r>=a.length);r++){var n=a[r];if(!(n.data.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(t,e,r,i,n,s),!s)return}}}},t}(),U={video:1,audio:2,id3:3,text:4},G=function(){function t(t,e,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this.aacLastPTS=null,this._initPTS=null,this._initDTS=null,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=t,this.config=e,this.typeSupported=r}t.probe=function(e){var r=t.syncOffset(e);return!(r<0||(r&&c.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),0))},t.syncOffset=function(t){for(var e=Math.min(1e3,t.length-564),r=0;r<e;){if(71===t[r]&&71===t[r+188]&&71===t[r+376])return r;r++}return-1},t.createTrack=function(t,e){return{container:"video"===t||"audio"===t?"video/mp2t":void 0,type:t,id:U[t],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:"audio"===t?e:void 0}};var e=t.prototype;return e.resetInitSegment=function(e,r,i){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=t.createTrack("video",i),this._audioTrack=t.createTrack("audio",i),this._id3Track=t.createTrack("id3",i),this._txtTrack=t.createTrack("text",i),this._audioTrack.isAAC=!0,this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=e,this.videoCodec=r,this._duration=i},e.resetTimeStamp=function(){},e.resetContiguity=function(){var t=this._audioTrack,e=this._avcTrack,r=this._id3Track;t&&(t.pesData=null),e&&(e.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.aacLastPTS=null},e.demux=function(e,r,n,s){var o;void 0===n&&(n=!1),void 0===s&&(s=!1),n||(this.sampleAes=null);var u=this._avcTrack,d=this._audioTrack,h=this._id3Track,f=u.pid,v=u.pesData,g=d.pid,p=h.pid,m=d.pesData,y=h.pesData,b=!1,T=this.pmtParsed,E=this._pmtId,S=e.length;if(this.remainderData&&(S=(e=Object(l.a)(this.remainderData,e)).length,this.remainderData=null),S<188&&!s)return this.remainderData=e,{audioTrack:d,avcTrack:u,id3Track:h,textTrack:this._txtTrack};var L=Math.max(0,t.syncOffset(e));(S-=(S+L)%188)<e.byteLength&&!s&&(this.remainderData=new Uint8Array(e.buffer,S,e.buffer.byteLength-S));for(var A=0,R=L;R<S;R+=188)if(71===e[R]){var D=!!(64&e[R+1]),_=((31&e[R+1])<<8)+e[R+2],k=void 0;if((48&e[R+3])>>4>1){if((k=R+5+e[R+4])===R+188)continue}else k=R+4;switch(_){case f:D&&(v&&(o=V(v))&&this.parseAVCPES(o,!1),v={data:[],size:0}),v&&(v.data.push(e.subarray(k,R+188)),v.size+=R+188-k);break;case g:D&&(m&&(o=V(m))&&(d.isAAC?this.parseAACPES(o):this.parseMPEGPES(o)),m={data:[],size:0}),m&&(m.data.push(e.subarray(k,R+188)),m.size+=R+188-k);break;case p:D&&(y&&(o=V(y))&&this.parseID3PES(o),y={data:[],size:0}),y&&(y.data.push(e.subarray(k,R+188)),y.size+=R+188-k);break;case 0:D&&(k+=e[k]+1),E=this._pmtId=H(e,k);break;case E:D&&(k+=e[k]+1);var x=K(e,k,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,n);(f=x.avc)>0&&(u.pid=f),(g=x.audio)>0&&(d.pid=g,d.isAAC=x.isAAC),(p=x.id3)>0&&(h.pid=p),b&&!T&&(c.b.log("reparse from beginning"),b=!1,R=L-188),T=this.pmtParsed=!0;break;case 17:case 8191:break;default:b=!0}}else A++;A>0&&this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"Found "+A+" TS packet/s that do not start with 0x47"}),u.pesData=v,d.pesData=m,h.pesData=y;var w={audioTrack:d,avcTrack:u,id3Track:h,textTrack:this._txtTrack};return s&&this.extractRemainingSamples(w),w},e.flush=function(){var t,e=this.remainderData;return this.remainderData=null,t=e?this.demux(e,-1,!1,!0):{audioTrack:this._audioTrack,avcTrack:this._avcTrack,textTrack:this._txtTrack,id3Track:this._id3Track},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t},e.extractRemainingSamples=function(t){var e,r=t.audioTrack,i=t.avcTrack,a=t.id3Track,n=i.pesData,s=r.pesData,o=a.pesData;n&&(e=V(n))?(this.parseAVCPES(e,!0),i.pesData=null):i.pesData=n,s&&(e=V(s))?(r.isAAC?this.parseAACPES(e):this.parseMPEGPES(e),r.pesData=null):(null!=s&&s.size&&c.b.log("last AAC PES packet truncated,might overlap between fragments"),r.pesData=s),o&&(e=V(o))?(this.parseID3PES(e),a.pesData=null):a.pesData=o},e.demuxSampleAes=function(t,e,r){var i=this.demux(t,r,!0,!this.config.progressive),a=this.sampleAes=new B(this.observer,this.config,e);return this.decrypt(i,a)},e.decrypt=function(t,e){return new Promise((function(r){var i=t.audioTrack,a=t.avcTrack;i.samples&&i.isAAC?e.decryptAacSamples(i.samples,0,(function(){a.samples?e.decryptAvcSamples(a.samples,0,0,(function(){r(t)})):r(t)})):a.samples&&e.decryptAvcSamples(a.samples,0,0,(function(){r(t)}))}))},e.destroy=function(){this._initPTS=this._initDTS=null,this._duration=0},e.parseAVCPES=function(t,e){var r,i=this,a=this._avcTrack,n=this.parseAVCNALu(t.data),s=this.avcSample,l=!1;t.data=null,s&&n.length&&!a.audFound&&(W(s,a),s=this.avcSample=j(!1,t.pts,t.dts,"")),n.forEach((function(e){switch(e.type){case 1:r=!0,s||(s=i.avcSample=j(!0,t.pts,t.dts,"")),s.frame=!0;var n=e.data;if(l&&n.length>4){var u=new N(n).readSliceType();2!==u&&4!==u&&7!==u&&9!==u||(s.key=!0)}break;case 5:r=!0,s||(s=i.avcSample=j(!0,t.pts,t.dts,"")),s.key=!0,s.frame=!0;break;case 6:r=!0;var d=new N(X(e.data));d.readUByte();for(var h=0,f=0,c=!1,v=0;!c&&d.bytesAvailable>1;){h=0;do{h+=v=d.readUByte()}while(255===v);f=0;do{f+=v=d.readUByte()}while(255===v);if(4===h&&0!==d.bytesAvailable){if(c=!0,181===d.readUByte()&&49===d.readUShort()&&1195456820===d.readUInt()&&3===d.readUByte()){for(var g=d.readUByte(),p=31&g,m=[g,d.readUByte()],y=0;y<p;y++)m.push(d.readUByte()),m.push(d.readUByte()),m.push(d.readUByte());Y(i._txtTrack.samples,{type:3,pts:t.pts,bytes:m})}}else if(5===h&&0!==d.bytesAvailable){if(c=!0,f>16){for(var b=[],T=0;T<16;T++)b.push(d.readUByte().toString(16)),3!==T&&5!==T&&7!==T&&9!==T||b.push("-");for(var E=f-16,S=new Uint8Array(E),L=0;L<E;L++)S[L]=d.readUByte();Y(i._txtTrack.samples,{pts:t.pts,payloadType:h,uuid:b.join(""),userData:Object(o.f)(S),userDataBytes:S})}}else if(f<d.bytesAvailable)for(var A=0;A<f;A++)d.readUByte()}break;case 7:if(r=!0,l=!0,!a.sps){var R=new N(e.data).readSPS();a.width=R.width,a.height=R.height,a.pixelRatio=R.pixelRatio,a.sps=[e.data],a.duration=i._duration;for(var D=e.data.subarray(1,4),_="avc1.",k=0;k<3;k++){var x=D[k].toString(16);x.length<2&&(x="0"+x),_+=x}a.codec=_}break;case 8:r=!0,a.pps||(a.pps=[e.data]);break;case 9:r=!1,a.audFound=!0,s&&W(s,a),s=i.avcSample=j(!1,t.pts,t.dts,"");break;case 12:r=!1;break;default:r=!1,s&&(s.debug+="unknown NAL "+e.type+" ")}s&&r&&s.units.push(e)})),e&&s&&(W(s,a),this.avcSample=null)},e.getLastNalUnit=function(){var t,e,r=this.avcSample;if(!r||0===r.units.length){var i=this._avcTrack.samples;r=i[i.length-1]}if(null!==(t=r)&&void 0!==t&&t.units){var a=r.units;e=a[a.length-1]}return e},e.parseAVCNALu=function(t){var e,r,i=t.byteLength,a=this._avcTrack,n=a.naluState||0,s=n,o=[],l=0,u=-1,d=0;for(-1===n&&(u=0,d=31&t[0],n=0,l=1);l<i;)if(e=t[l++],n)if(1!==n)if(e)if(1===e){if(u>=0){var h={data:t.subarray(u,l-n-1),type:d};o.push(h)}else{var f=this.getLastNalUnit();if(f&&(s&&l<=4-s&&f.state&&(f.data=f.data.subarray(0,f.data.byteLength-s)),(r=l-n-1)>0)){var c=new Uint8Array(f.data.byteLength+r);c.set(f.data,0),c.set(t.subarray(0,r),f.data.byteLength),f.data=c,f.state=0}}l<i?(u=l,d=31&t[l],n=0):n=-1}else n=0;else n=3;else n=e?0:2;else n=e?0:1;if(u>=0&&n>=0){var v={data:t.subarray(u,i),type:d,state:n};o.push(v)}if(0===o.length){var g=this.getLastNalUnit();if(g){var p=new Uint8Array(g.data.byteLength+t.byteLength);p.set(g.data,0),p.set(t,g.data.byteLength),g.data=p}}return a.naluState=n,o},e.parseAACPES=function(t){var e,r,n,s,o,l=0,u=this._audioTrack,d=this.aacOverFlow,h=t.data;if(d){this.aacOverFlow=null;var f=d.sample.unit.byteLength,v=Math.min(d.missing,f),g=f-v;d.sample.unit.set(h.subarray(0,v),g),u.samples.push(d.sample),l=d.missing}for(e=l,r=h.length;e<r-1&&!m(h,e);e++);if(e===l||(e<r-1?(n="AAC PES did not start with ADTS header,offset:"+e,s=!1):(n="no ADTS header found in AAC PES",s=!0),c.b.warn("parsing error:"+n),this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:s,reason:n}),!s)){if(b(u,this.observer,h,e,this.audioCodec),void 0!==t.pts)o=t.pts;else{if(!d)return void c.b.warn("[tsdemuxer]: AAC PES unknown PTS");var p=T(u.samplerate);o=d.sample.pts+p}for(var y=0;e<r;){if(m(h,e)){if(e+5<r){var S=E(u,h,e,o,y);if(S){if(!S.missing){e+=S.length,y++;continue}this.aacOverFlow=S}}break}e++}}},e.parseMPEGPES=function(t){var e=t.data,r=e.length,i=0,a=0,n=t.pts;if(void 0!==n)for(;a<r;)if(F(e,a)){var s=O(this._audioTrack,e,a,n,i);if(!s)break;a+=s.length,i++}else a++;else c.b.warn("[tsdemuxer]: MPEG PES unknown PTS")},e.parseID3PES=function(t){void 0!==t.pts?this._id3Track.samples.push(t):c.b.warn("[tsdemuxer]: ID3 PES unknown PTS")},t}();function j(t,e,r,i){return{key:t,frame:!1,pts:e,dts:r,units:[],debug:i,length:0}}function H(t,e){return(31&t[e+10])<<8|t[e+11]}function K(t,e,r,i){var a={audio:-1,avc:-1,id3:-1,isAAC:!0},n=e+3+((15&t[e+1])<<8|t[e+2])-4;for(e+=12+((15&t[e+10])<<8|t[e+11]);e<n;){var s=(31&t[e+1])<<8|t[e+2];switch(t[e]){case 207:if(!i){c.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===a.audio&&(a.audio=s);break;case 21:-1===a.id3&&(a.id3=s);break;case 219:if(!i){c.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===a.avc&&(a.avc=s);break;case 3:case 4:r?-1===a.audio&&(a.audio=s,a.isAAC=!1):c.b.log("MPEG audio found, not supported in this browser");break;case 36:c.b.warn("Unsupported HEVC stream type found")}e+=5+((15&t[e+3])<<8|t[e+4])}return a}function V(t){var e,r,i,a,n,s=0,o=t.data;if(!t||0===t.size)return null;for(;o[0].length<19&&o.length>1;){var l=new Uint8Array(o[0].length+o[1].length);l.set(o[0]),l.set(o[1],o[0].length),o[0]=l,o.splice(1,1)}if(1===((e=o[0])[0]<<16)+(e[1]<<8)+e[2]){if((r=(e[4]<<8)+e[5])&&r>t.size-6)return null;var u=e[7];192&u&&(a=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,64&u?a-(n=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2)>54e5&&(c.b.warn(Math.round((a-n)/9e4)+"s delta between PTS and DTS, align them"),a=n):n=a);var d=(i=e[8])+9;if(t.size<=d)return null;t.size-=d;for(var h=new Uint8Array(t.size),f=0,v=o.length;f<v;f++){var g=(e=o[f]).byteLength;if(d){if(d>g){d-=g;continue}e=e.subarray(d),g-=d,d=0}h.set(e,s),s+=g}return r&&(r-=i+3),{data:h,pts:a,dts:n,len:r}}return null}function W(t,e){if(t.units.length&&t.frame){if(void 0===t.pts){var r=e.samples,i=r.length;if(!i)return void e.dropped++;var a=r[i-1];t.pts=a.pts,t.dts=a.dts}e.samples.push(t)}t.debug.length&&c.b.log(t.pts+"/"+t.dts+":"+t.debug)}function Y(t,e){var r=t.length;if(r>0){if(e.pts>=t[r-1].pts)t.push(e);else for(var i=r-1;i>=0;i--)if(e.pts<t[i].pts){t.splice(i,0,e);break}}else t.push(e)}function X(t){for(var e=t.byteLength,r=[],i=1;i<e-2;)0===t[i]&&0===t[i+1]&&3===t[i+2]?(r.push(i+2),i+=2):i++;if(0===r.length)return t;var a=e-r.length,n=new Uint8Array(a),s=0;for(i=0;i<a;s++,i++)s===r[0]&&(s++,r.shift()),n[i]=t[s];return n}G.minProbeByteLength=188;var q=G;function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){var e,r;function i(){return t.apply(this,arguments)||this}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,z(e,r);var a=i.prototype;return a.resetInitSegment=function(e,r,i){t.prototype.resetInitSegment.call(this,e,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,isAAC:!1,samples:[],manifestCodec:e,duration:i,inputTimeScale:9e4,dropped:0}},i.probe=function(t){if(!t)return!1;for(var e=(o.b(t,0)||[]).length,r=t.length;e<r;e++)if(M(t,e))return c.b.log("MPEG Audio sync word found !"),!0;return!1},a.canParse=function(t,e){return function(t,e){return P(t,e)&&4<=t.length-e}(t,e)},a.appendFrame=function(t,e,r){if(null!==this.initPTS)return O(t,e,r,this.initPTS,this.frameIndex)},i}(f);Q.minProbeByteLength=4;var $=Q,Z=function(){function t(){}return t.getSilentFrame=function(t,e){if("mp4a.40.2"===t){if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224])}else{if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}},t}(),J=Math.pow(2,32)-1,tt=function(){function t(){}return t.init=function(){var e;for(e in t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=n,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,s,l,s,o),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,a))},t.box=function(t){for(var e=8,r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];for(var n=i.length,s=n;n--;)e+=i[n].byteLength;var o=new Uint8Array(e);for(o[0]=e>>24&255,o[1]=e>>16&255,o[2]=e>>8&255,o[3]=255&e,o.set(t,4),n=0,e=8;n<s;n++)o.set(i[n],e),e+=i[n].byteLength;return o},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(J+1)),a=Math.floor(r%(J+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(J+1)),a=Math.floor(r%(J+1)),n=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,n)},t.sdtp=function(e){var r,i,a=e.samples||[],n=new Uint8Array(4+a.length);for(r=0;r<a.length;r++)i=a[r].flags,n[r+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return t.box(t.types.sdtp,n)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r,i,a,n=[],s=[];for(r=0;r<e.sps.length;r++)a=(i=e.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<e.pps.length;r++)a=(i=e.pps[r]).byteLength,s.push(a>>>8&255),s.push(255&a),s=s.concat(Array.prototype.slice.call(i));var o=t.box(t.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|e.sps.length].concat(n).concat([e.pps.length]).concat(s))),l=e.width,u=e.height,d=e.pixelRatio[0],h=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,h>>24,h>>16&255,h>>8&255,255&h])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,a=e.width,n=e.height,s=Math.floor(i/(J+1)),o=Math.floor(i%(J+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),a=e.id,n=Math.floor(r/(J+1)),s=Math.floor(r%(J+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,s>>24,s>>16&255,s>>8&255,255&s])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i,a,n,s,o,l,u=e.samples||[],d=u.length,h=12+16*d,f=new Uint8Array(h);for(r+=8+h,f.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)n=(a=u[i]).duration,s=a.size,o=a.flags,l=a.cts,f.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return t.box(t.types.trun,f)},t.initSegment=function(e){t.types||t.init();var r=t.moov(e),i=new Uint8Array(t.FTYP.byteLength+r.byteLength);return i.set(t.FTYP),i.set(r,t.FTYP.byteLength),i},t}();tt.types=void 0,tt.HDLR_TYPES=void 0,tt.STTS=void 0,tt.STSC=void 0,tt.STCO=void 0,tt.STSZ=void 0,tt.VMHD=void 0,tt.SMHD=void 0,tt.STSD=void 0,tt.FTYP=void 0,tt.DINF=void 0;var et=tt,rt=r(4);function it(t,e){return void 0===e&&(e=!1),function(t,e,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var a=t*e*r;return i?Math.round(a):a}(t,1e3,1/9e4,e)}function at(){return(at=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var nt=null,st=null,ot=!1,lt=function(){function t(t,e,r,i){if(void 0===i&&(i=""),this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=t,this.config=e,this.typeSupported=r,this.ISGenerated=!1,null===nt){var a=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);nt=a?parseInt(a[1]):0}if(null===st){var n=navigator.userAgent.match(/Safari\/(\d+)/i);st=n?parseInt(n[1]):0}ot=!!nt&&nt<75||!!st&&st<600}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){c.b.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=t},e.resetNextTimestamp=function(){c.b.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},e.resetInitSegment=function(){c.b.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},e.getVideoStartPts=function(t){var e=!1,r=t.reduce((function(t,r){var i=r.pts-t;return i<-4294967296?(e=!0,ut(t,r.pts)):i>0?t:r.pts}),t[0].pts);return e&&c.b.debug("PTS rollover detected"),r},e.remux=function(t,e,r,i,a,n,s,o){var l,u,d,h,f,v,g=a,p=a,m=t.pid>-1,y=e.pid>-1,b=e.samples.length,T=t.samples.length>0,E=b>1;if((!m||T)&&(!y||E)||this.ISGenerated||s){this.ISGenerated||(d=this.generateIS(t,e,a));var S=this.isVideoContiguous,L=-1;if(E&&(L=function(t){for(var e=0;e<t.length;e++)if(t[e].key)return e;return-1}(e.samples),!S&&this.config.forceKeyFrameOnDiscontinuity))if(v=!0,L>0){c.b.warn("[mp4-remuxer]: Dropped "+L+" out of "+b+" video samples due to a missing keyframe");var A=this.getVideoStartPts(e.samples);e.samples=e.samples.slice(L),e.dropped+=L,p+=(e.samples[0].pts-A)/(e.timescale||9e4)}else-1===L&&(c.b.warn("[mp4-remuxer]: No keyframe found out of "+b+" video samples"),v=!1);if(this.ISGenerated){if(T&&E){var R=this.getVideoStartPts(e.samples),D=(ut(t.samples[0].pts,R)-R)/e.inputTimeScale;g+=Math.max(0,D),p+=Math.max(0,-D)}if(T){if(t.samplerate||(c.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),d=this.generateIS(t,e,a)),u=this.remuxAudio(t,g,this.isAudioContiguous,n,y||E||o===rt.b.AUDIO?p:void 0),E){var _=u?u.endPTS-u.startPTS:0;e.inputTimeScale||(c.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),d=this.generateIS(t,e,a)),l=this.remuxVideo(e,p,S,_)}}else E&&(l=this.remuxVideo(e,p,S,0));l&&(l.firstKeyFrame=L,l.independent=-1!==L)}}return this.ISGenerated&&(r.samples.length&&(f=this.remuxID3(r,a)),i.samples.length&&(h=this.remuxText(i,a))),{audio:u,video:l,initSegment:d,independent:v,text:h,id3:f}},e.generateIS=function(t,e,r){var i,a,n,o=t.samples,l=e.samples,u=this.typeSupported,d={},h=!Object(s.a)(this._initPTS),f="audio/mp4";if(h&&(i=a=1/0),t.config&&o.length&&(t.timescale=t.samplerate,t.isAAC||(u.mpeg?(f="audio/mpeg",t.codec=""):u.mp3&&(t.codec="mp3")),d.audio={id:"audio",container:f,codec:t.codec,initSegment:!t.isAAC&&u.mpeg?new Uint8Array(0):et.initSegment([t]),metadata:{channelCount:t.channelCount}},h&&(n=t.inputTimeScale,i=a=o[0].pts-Math.round(n*r))),e.sps&&e.pps&&l.length&&(e.timescale=e.inputTimeScale,d.video={id:"main",container:"video/mp4",codec:e.codec,initSegment:et.initSegment([e]),metadata:{width:e.width,height:e.height}},h)){n=e.inputTimeScale;var c=this.getVideoStartPts(l),v=Math.round(n*r);a=Math.min(a,ut(l[0].dts,c)-v),i=Math.min(i,c-v)}if(Object.keys(d).length)return this.ISGenerated=!0,h&&(this._initPTS=i,this._initDTS=a),{tracks:d,initPTS:i,timescale:n}},e.remuxVideo=function(t,e,r,n){var s,o,l,u=t.inputTimeScale,d=t.samples,h=[],f=d.length,v=this._initPTS,g=this.nextAvcDts,p=8,m=Number.POSITIVE_INFINITY,y=Number.NEGATIVE_INFINITY,b=0,T=!1;r&&null!==g||(g=e*u-(d[0].pts-ut(d[0].dts,d[0].pts)));for(var E=0;E<f;E++){var S=d[E];S.pts=ut(S.pts-v,g),S.dts=ut(S.dts-v,g),S.dts>S.pts&&(b=Math.max(Math.min(b,S.pts-S.dts),-18e3)),S.dts<d[E>0?E-1:E].dts&&(T=!0)}T&&d.sort((function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r||i})),o=d[0].dts,l=d[d.length-1].dts;var L=Math.round((l-o)/(f-1));if(b<0){if(b<-2*L){c.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by "+it(-L,!0)+" ms");for(var A=b,R=0;R<f;R++)d[R].dts=A=Math.max(A,d[R].pts-L),d[R].pts=Math.max(A,d[R].pts)}else{c.b.warn("PTS < DTS detected in video samples, shifting DTS by "+it(b,!0)+" ms to overcome this issue");for(var D=0;D<f;D++)d[D].dts=d[D].dts+b}o=d[0].dts}if(r){var _=o-g,k=_>L;if(k||_<-1){k?c.b.warn("AVC: "+it(_,!0)+" ms ("+_+"dts) hole between fragments detected, filling it"):c.b.warn("AVC: "+it(-_,!0)+" ms ("+_+"dts) overlapping between fragments detected"),o=g;var x=d[0].pts-_;d[0].dts=o,d[0].pts=x,c.b.log("Video: First PTS/DTS adjusted: "+it(x,!0)+"/"+it(o,!0)+", delta: "+it(_,!0)+" ms")}}ot&&(o=Math.max(0,o));for(var w=0,C=0,O=0;O<f;O++){for(var I=d[O],P=I.units,F=P.length,M=0,N=0;N<F;N++)M+=P[N].data.length;C+=M,w+=F,I.length=M,I.dts=Math.max(I.dts,o),I.pts=Math.max(I.pts,I.dts,0),m=Math.min(I.pts,m),y=Math.max(I.pts,y)}l=d[f-1].dts;var B,U=C+4*w+8;try{B=new Uint8Array(U)}catch(t){return void this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:U,reason:"fail allocating video mdat "+U})}var G=new DataView(B.buffer);G.setUint32(0,U),B.set(et.types.mdat,4);for(var j=0;j<f;j++){for(var H=d[j],K=H.units,V=0,W=0,Y=K.length;W<Y;W++){var X=K[W],q=X.data,z=X.data.byteLength;G.setUint32(p,z),p+=4,B.set(q,p),p+=z,V+=4+z}if(j<f-1)s=d[j+1].dts-H.dts;else{var Q=this.config,$=H.dts-d[j>0?j-1:j].dts;if(Q.stretchShortVideoTrack&&null!==this.nextAudioPts){var Z=Math.floor(Q.maxBufferHole*u),J=(n?m+n*u:this.nextAudioPts)-H.pts;J>Z?((s=J-$)<0&&(s=$),c.b.log("[mp4-remuxer]: It is approximately "+J/90+" ms to the next segment; using duration "+s/90+" ms for the last video frame.")):s=$}else s=$}var tt=Math.round(H.pts-H.dts);h.push(new dt(H.key,s,V,tt))}if(h.length&&nt&&nt<70){var rt=h[0].flags;rt.dependsOn=2,rt.isNonSync=0}this.nextAvcDts=g=l+s,this.isVideoContiguous=!0;var st={data1:et.moof(t.sequenceNumber++,o,at({},t,{samples:h})),data2:B,startPTS:m/u,endPTS:(y+s)/u,startDTS:o/u,endDTS:g/u,type:"video",hasAudio:!1,hasVideo:!0,nb:h.length,dropped:t.dropped};return t.samples=[],t.dropped=0,st},e.remuxAudio=function(t,e,r,n,s){var o=t.inputTimeScale,l=o/(t.samplerate?t.samplerate:o),u=t.isAAC?1024:1152,d=u*l,h=this._initPTS,f=!t.isAAC&&this.typeSupported.mpeg,v=[],g=t.samples,p=f?0:8,m=this.nextAudioPts||-1,y=e*o;if(this.isAudioContiguous=r=r||g.length&&m>0&&(n&&Math.abs(y-m)<9e3||Math.abs(ut(g[0].pts-h,y)-m)<20*d),g.forEach((function(t){t.pts=ut(t.pts-h,y)})),!r||m<0){if(!(g=g.filter((function(t){return t.pts>=0}))).length)return;m=0===s?0:n?Math.max(0,y):g[0].pts}if(t.isAAC)for(var b=void 0!==s,T=this.config.maxAudioFramesDrift,E=0,S=m;E<g.length;E++){var L=g[E],A=L.pts,R=A-S,D=Math.abs(1e3*R/o);if(R<=-T*d&&b)0===E&&(c.b.warn("Audio frame @ "+(A/o).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*R/o)+" ms."),this.nextAudioPts=m=S=A);else if(R>=T*d&&D<1e4&&b){var _=Math.round(R/d);(S=A-_*d)<0&&(_--,S+=d),0===E&&(this.nextAudioPts=m=S),c.b.warn("[mp4-remuxer]: Injecting "+_+" audio frame @ "+(S/o).toFixed(3)+"s due to "+Math.round(1e3*R/o)+" ms gap.");for(var k=0;k<_;k++){var x=Math.max(S,0),w=Z.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);w||(c.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),w=L.unit.subarray()),g.splice(E,0,{unit:w,pts:x}),S+=d,E++}}L.pts=S,S+=d}for(var C,O=null,I=null,P=0,F=g.length;F--;)P+=g[F].unit.byteLength;for(var M=0,N=g.length;M<N;M++){var B=g[M],U=B.unit,G=B.pts;if(null!==I)v[M-1].duration=Math.round((G-I)/l);else{if(r&&t.isAAC&&(G=m),O=G,!(P>0))return;P+=p;try{C=new Uint8Array(P)}catch(t){return void this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:P,reason:"fail allocating audio mdat "+P})}f||(new DataView(C.buffer).setUint32(0,P),C.set(et.types.mdat,4))}C.set(U,p);var j=U.byteLength;p+=j,v.push(new dt(!0,u,j,0)),I=G}var H=v.length;if(H){var K=v[v.length-1];this.nextAudioPts=m=I+l*K.duration;var V=f?new Uint8Array(0):et.moof(t.sequenceNumber++,O/l,at({},t,{samples:v}));t.samples=[];var W=O/o,Y=m/o,X={data1:V,data2:C,startPTS:W,endPTS:Y,startDTS:W,endDTS:Y,type:"audio",hasAudio:!0,hasVideo:!1,nb:H};return this.isAudioContiguous=!0,X}},e.remuxEmptyAudio=function(t,e,r,i){var a=t.inputTimeScale,n=a/(t.samplerate?t.samplerate:a),s=this.nextAudioPts,o=(null!==s?s:i.startDTS*a)+this._initDTS,l=i.endDTS*a+this._initDTS,u=1024*n,d=Math.ceil((l-o)/u),h=Z.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(c.b.warn("[mp4-remuxer]: remux empty Audio"),h){for(var f=[],v=0;v<d;v++){var g=o+v*u;f.push({unit:h,pts:g,dts:g})}return t.samples=f,this.remuxAudio(t,e,r,!1)}c.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")},e.remuxID3=function(t,e){var r=t.samples.length;if(r){for(var i=t.inputTimeScale,a=this._initPTS,n=this._initDTS,s=0;s<r;s++){var o=t.samples[s];o.pts=ut(o.pts-a,e*i)/i,o.dts=ut(o.dts-n,e*i)/i}var l=t.samples;return t.samples=[],{samples:l}}},e.remuxText=function(t,e){var r=t.samples.length;if(r){for(var i=t.inputTimeScale,a=this._initPTS,n=0;n<r;n++){var s=t.samples[n];s.pts=ut(s.pts-a,e*i)/i}t.samples.sort((function(t,e){return t.pts-e.pts}));var o=t.samples;return t.samples=[],{samples:o}}},t}();function ut(t,e){var r;if(null===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t}var dt=function(t,e,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=e,this.size=r,this.cts=i,this.flags=new ht(t)},ht=function(t){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=t?2:1,this.isNonSync=t?0:1},ft=r(5),ct=function(){function t(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndDTS=null}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){this.initPTS=t,this.lastEndDTS=null},e.resetNextTimestamp=function(){this.lastEndDTS=null},e.resetInitSegment=function(t,e,r){this.audioCodec=e,this.videoCodec=r,this.generateInitSegment(t),this.emitInitSegment=!0},e.generateInitSegment=function(t){var e=this.audioCodec,r=this.videoCodec;if(!t||!t.byteLength)return this.initTracks=void 0,void(this.initData=void 0);var i=this.initData=Object(l.f)(t);e||(e=gt(i.audio,ft.a.AUDIO)),r||(r=gt(i.video,ft.a.VIDEO));var a={};i.audio&&i.video?a.audiovideo={container:"video/mp4",codec:e+","+r,initSegment:t,id:"main"}:i.audio?a.audio={container:"audio/mp4",codec:e,initSegment:t,id:"audio"}:i.video?a.video={container:"video/mp4",codec:r,initSegment:t,id:"main"}:c.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=a},e.remux=function(t,e,r,i,a){var n=this.initPTS,o=this.lastEndDTS,u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};Object(s.a)(o)||(o=this.lastEndDTS=a||0);var d=e.samples;if(!d||!d.length)return u;var h={initPTS:void 0,timescale:1},f=this.initData;if(f&&f.length||(this.generateInitSegment(d),f=this.initData),!f||!f.length)return c.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(h.tracks=this.initTracks,this.emitInitSegment=!1),Object(s.a)(n)||(this.initPTS=h.initPTS=n=vt(f,d,o));var v=Object(l.c)(d,f),g=o,p=v+g;Object(l.e)(f,d,n),v>0?this.lastEndDTS=p:(c.b.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var m=!!f.audio,y=!!f.video,b="";m&&(b+="audio"),y&&(b+="video");var T={data1:d,startPTS:g,startDTS:g,endPTS:p,endDTS:p,type:b,hasAudio:m,hasVideo:y,nb:1,dropped:0};return u.audio="audio"===T.type?T:void 0,u.video="audio"!==T.type?T:void 0,u.text=i,u.id3=r,u.initSegment=h,u},t}(),vt=function(t,e,r){return Object(l.d)(t,e)-r};function gt(t,e){var r=null==t?void 0:t.codec;return r&&r.length>4?r:"hvc1"===r?"hvc1.1.c.L120.90":"av01"===r?"av01.0.04M.08":"avc1"===r||e===ft.a.VIDEO?"avc1.42e01e":"mp4a.40.5"}var pt,mt=ct,yt=r(16);try{pt=self.performance.now.bind(self.performance)}catch(t){c.b.debug("Unable to use Performance API on this environment"),pt=self.Date.now}var bt=[{demux:q,remux:lt},{demux:D,remux:mt},{demux:A,remux:lt},{demux:$,remux:lt}],Tt=1024;bt.forEach((function(t){var e=t.demux;Tt=Math.max(Tt,e.minProbeByteLength)}));var Et=function(){function t(t,e,r,i,a){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.cache=new yt.a,this.observer=t,this.typeSupported=e,this.config=r,this.vendor=i,this.id=a}var e=t.prototype;return e.configure=function(t){this.transmuxConfig=t,this.decrypter&&this.decrypter.reset()},e.push=function(t,e,r,i){var a=this,n=r.transmuxing;n.executeStart=pt();var s=new Uint8Array(t),o=this.cache,u=this.config,d=this.currentTransmuxState,h=this.transmuxConfig;i&&(this.currentTransmuxState=i);var f=function(t,e){var r=null;return t.byteLength>0&&null!=e&&null!=e.key&&null!==e.iv&&null!=e.method&&(r=e),r}(s,e);if(f&&"AES-128"===f.method){var c=this.getDecrypter();if(!u.enableSoftwareAES)return this.decryptionPromise=c.webCryptoDecrypt(s,f.key.buffer,f.iv.buffer).then((function(t){var e=a.push(t,null,r);return a.decryptionPromise=null,e})),this.decryptionPromise;var v=c.softwareDecrypt(s,f.key.buffer,f.iv.buffer);if(!v)return n.executeEnd=pt(),St(r);s=new Uint8Array(v)}var g=i||d,p=g.contiguous,m=g.discontinuity,y=g.trackSwitch,b=g.accurateTimeOffset,T=g.timeOffset,E=g.initSegmentChange,S=h.audioCodec,L=h.videoCodec,A=h.defaultInitPts,R=h.duration,D=h.initSegmentData;if((m||y||E)&&this.resetInitSegment(D,S,L,R),(m||E)&&this.resetInitialTimestamp(A),p||this.resetContiguity(),this.needsProbing(s,m,y)){if(o.dataLength){var _=o.flush();s=Object(l.a)(_,s)}this.configureTransmuxer(s,h)}var k=this.transmux(s,f,T,b,r),x=this.currentTransmuxState;return x.contiguous=!0,x.discontinuity=!1,x.trackSwitch=!1,n.executeEnd=pt(),k},e.flush=function(t){var e=this,r=t.transmuxing;r.executeStart=pt();var n=this.decrypter,s=this.cache,o=this.currentTransmuxState,l=this.decryptionPromise;if(l)return l.then((function(){return e.flush(t)}));var u=[],d=o.timeOffset;if(n){var h=n.flush();h&&u.push(this.push(h,null,t))}var f=s.dataLength;s.reset();var c=this.demuxer,v=this.remuxer;if(!c||!v)return f>=Tt&&this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),r.executeEnd=pt(),[St(t)];var g=c.flush(d);return Lt(g)?g.then((function(r){return e.flushRemux(u,r,t),u})):(this.flushRemux(u,g,t),u)},e.flushRemux=function(t,e,r){var i=e.audioTrack,a=e.avcTrack,n=e.id3Track,s=e.textTrack,o=this.currentTransmuxState,l=o.accurateTimeOffset,u=o.timeOffset;c.b.log("[transmuxer.ts]: Flushed fragment "+r.sn+(r.part>-1?" p: "+r.part:"")+" of level "+r.level);var d=this.remuxer.remux(i,a,n,s,u,l,!0,this.id);t.push({remuxResult:d,chunkMeta:r}),r.transmuxing.executeEnd=pt()},e.resetInitialTimestamp=function(t){var e=this.demuxer,r=this.remuxer;e&&r&&(e.resetTimeStamp(t),r.resetTimeStamp(t))},e.resetContiguity=function(){var t=this.demuxer,e=this.remuxer;t&&e&&(t.resetContiguity(),e.resetNextTimestamp())},e.resetInitSegment=function(t,e,r,i){var a=this.demuxer,n=this.remuxer;a&&n&&(a.resetInitSegment(e,r,i),n.resetInitSegment(t,e,r))},e.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},e.transmux=function(t,e,r,i,a){return e&&"SAMPLE-AES"===e.method?this.transmuxSampleAes(t,e,r,i,a):this.transmuxUnencrypted(t,r,i,a)},e.transmuxUnencrypted=function(t,e,r,i){var a=this.demuxer.demux(t,e,!1,!this.config.progressive),n=a.audioTrack,s=a.avcTrack,o=a.id3Track,l=a.textTrack;return{remuxResult:this.remuxer.remux(n,s,o,l,e,r,!1,this.id),chunkMeta:i}},e.transmuxSampleAes=function(t,e,r,i,a){var n=this;return this.demuxer.demuxSampleAes(t,e,r).then((function(t){return{remuxResult:n.remuxer.remux(t.audioTrack,t.avcTrack,t.id3Track,t.textTrack,r,i,!1,n.id),chunkMeta:a}}))},e.configureTransmuxer=function(t,e){for(var r,i=this.config,a=this.observer,n=this.typeSupported,s=this.vendor,o=e.audioCodec,l=e.defaultInitPts,u=e.duration,d=e.initSegmentData,h=e.videoCodec,f=0,v=bt.length;f<v;f++)if(bt[f].demux.probe(t)){r=bt[f];break}r||(c.b.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),r={demux:D,remux:mt});var g=this.demuxer,p=this.remuxer,m=r.remux,y=r.demux;p&&p instanceof m||(this.remuxer=new m(a,i,n,s)),g&&g instanceof y||(this.demuxer=new y(a,i,n),this.probe=y.probe),this.resetInitSegment(d,o,h,u),this.resetInitialTimestamp(l)},e.needsProbing=function(t,e,r){return!this.demuxer||!this.remuxer||e||r},e.getDecrypter=function(){var t=this.decrypter;return t||(t=this.decrypter=new n.a(this.observer,this.config)),t},t}(),St=function(t){return{remuxResult:{},chunkMeta:t}};function Lt(t){return"then"in t&&t.then instanceof Function}var At=function(t,e,r,i,a){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=t,this.videoCodec=e,this.initSegmentData=r,this.duration=i,this.defaultInitPts=a},Rt=function(t,e,r,i,a,n){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=t,this.contiguous=e,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=a,this.initSegmentChange=n}},function(t,e){t.exports=void 0},function(t,e,r){var i,a,n,s,o;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/,a=/^([^\/?#]*)([^]*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),!(e=e.trim())){if(!r.alwaysNormalize)return t;var i=o.parseURL(t);if(!i)throw new Error("Error trying to parse base URL.");return i.path=o.normalizePath(i.path),o.buildURLFromParts(i)}var n=o.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):e;var s=o.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=a.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,h=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(h)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(n,"");t.length!==(t=t.replace(s,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=o},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},function(t,e,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function s(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(t,e,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new s(r,i||t,n),l=a?a+e:e;return t._events[l]?t._events[l].fn?t._events[l]=[t._events[l],o]:t._events[l].push(o):(t._events[l]=o,t._eventsCount++),t}function l(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function u(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),u.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)i.call(t,e)&&r.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},u.prototype.listeners=function(t){var e=a?a+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,s=new Array(n);i<n;i++)s[i]=r[i].fn;return s},u.prototype.listenerCount=function(t){var e=a?a+t:t,r=this._events[e];return r?r.fn?1:r.length:0},u.prototype.emit=function(t,e,r,i,n,s){var o=a?a+t:t;if(!this._events[o])return!1;var l,u,d=this._events[o],h=arguments.length;if(d.fn){switch(d.once&&this.removeListener(t,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,e),!0;case 3:return d.fn.call(d.context,e,r),!0;case 4:return d.fn.call(d.context,e,r,i),!0;case 5:return d.fn.call(d.context,e,r,i,n),!0;case 6:return d.fn.call(d.context,e,r,i,n,s),!0}for(u=1,l=new Array(h-1);u<h;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var f,c=d.length;for(u=0;u<c;u++)switch(d[u].once&&this.removeListener(t,d[u].fn,void 0,!0),h){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,e);break;case 3:d[u].fn.call(d[u].context,e,r);break;case 4:d[u].fn.call(d[u].context,e,r,i);break;default:if(!l)for(f=1,l=new Array(h-1);f<h;f++)l[f-1]=arguments[f];d[u].fn.apply(d[u].context,l)}}return!0},u.prototype.on=function(t,e,r){return o(this,t,e,r,!1)},u.prototype.once=function(t,e,r){return o(this,t,e,r,!0)},u.prototype.removeListener=function(t,e,r,i){var n=a?a+t:t;if(!this._events[n])return this;if(!e)return l(this,n),this;var s=this._events[n];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||l(this,n);else{for(var o=0,u=[],d=s.length;o<d;o++)(s[o].fn!==e||i&&!s[o].once||r&&s[o].context!==r)&&u.push(s[o]);u.length?this._events[n]=1===u.length?u[0]:u:l(this,n)}return this},u.prototype.removeAllListeners=function(t){var e;return t?(e=a?a+t:t,this._events[e]&&l(this,e)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=a,u.EventEmitter=u,t.exports=u},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var i=function(){function t(t,e){this.subtle=void 0,this.aesIV=void 0,this.subtle=t,this.aesIV=e}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}(),a=function(){function t(t,e){this.subtle=void 0,this.key=void 0,this.subtle=t,this.key=e}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}(),n=r(8),s=function(){function t(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var e=t.prototype;return e.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},e.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],d=o[2],h=o[3],f=new Uint32Array(256),c=0,v=0,g=0;for(g=0;g<256;g++)f[g]=g<128?g<<1:g<<1^283;for(g=0;g<256;g++){var p=v^v<<1^v<<2^v<<3^v<<4;p=p>>>8^255&p^99,t[c]=p,e[p]=c;var m=f[c],y=f[m],b=f[y],T=257*f[p]^16843008*p;i[c]=T<<24|T>>>8,a[c]=T<<16|T>>>16,n[c]=T<<8|T>>>24,s[c]=T,T=16843009*b^65537*y^257*m^16843008*c,l[p]=T<<24|T>>>8,u[p]=T<<16|T>>>16,d[p]=T<<8|T>>>24,h[p]=T,c?(c=m^f[f[f[b^m]]],v^=f[f[v]]):c=v=1}},e.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var a=this.keySize=e.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,s,o,l,u=this.ksRows=4*(a+6+1),d=this.keySchedule=new Uint32Array(u),h=this.invKeySchedule=new Uint32Array(u),f=this.sBox,c=this.rcon,v=this.invSubMix,g=v[0],p=v[1],m=v[2],y=v[3];for(n=0;n<u;n++)n<a?o=d[n]=e[n]:(l=o,n%a==0?(l=f[(l=l<<8|l>>>24)>>>24]<<24|f[l>>>16&255]<<16|f[l>>>8&255]<<8|f[255&l],l^=c[n/a|0]<<24):a>6&&n%a==4&&(l=f[l>>>24]<<24|f[l>>>16&255]<<16|f[l>>>8&255]<<8|f[255&l]),d[n]=o=(d[n-a]^l)>>>0);for(s=0;s<u;s++)n=u-s,l=3&s?d[n]:d[n-4],h[s]=s<4||n<=4?l:g[f[l>>>24]]^p[f[l>>>16&255]]^m[f[l>>>8&255]]^y[f[255&l]],h[s]=h[s]>>>0}},e.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},e.decrypt=function(t,e,r){for(var i,a,n,s,o,l,u,d,h,f,c,v,g,p,m=this.keySize+6,y=this.invKeySchedule,b=this.invSBox,T=this.invSubMix,E=T[0],S=T[1],L=T[2],A=T[3],R=this.uint8ArrayToUint32Array_(r),D=R[0],_=R[1],k=R[2],x=R[3],w=new Int32Array(t),C=new Int32Array(w.length),O=this.networkToHostOrderSwap;e<w.length;){for(h=O(w[e]),f=O(w[e+1]),c=O(w[e+2]),v=O(w[e+3]),o=h^y[0],l=v^y[1],u=c^y[2],d=f^y[3],g=4,p=1;p<m;p++)i=E[o>>>24]^S[l>>16&255]^L[u>>8&255]^A[255&d]^y[g],a=E[l>>>24]^S[u>>16&255]^L[d>>8&255]^A[255&o]^y[g+1],n=E[u>>>24]^S[d>>16&255]^L[o>>8&255]^A[255&l]^y[g+2],s=E[d>>>24]^S[o>>16&255]^L[l>>8&255]^A[255&u]^y[g+3],o=i,l=a,u=n,d=s,g+=4;i=b[o>>>24]<<24^b[l>>16&255]<<16^b[u>>8&255]<<8^b[255&d]^y[g],a=b[l>>>24]<<24^b[u>>16&255]<<16^b[d>>8&255]<<8^b[255&o]^y[g+1],n=b[u>>>24]<<24^b[d>>16&255]<<16^b[o>>8&255]<<8^b[255&l]^y[g+2],s=b[d>>>24]<<24^b[o>>16&255]<<16^b[l>>8&255]<<8^b[255&u]^y[g+3],C[e]=O(i^D),C[e+1]=O(s^_),C[e+2]=O(n^k),C[e+3]=O(a^x),D=h,_=f,k=c,x=v,e+=4}return C.buffer},t}(),o=r(1),l=r(6),u=function(){function t(t,e,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=t,this.config=e,this.removePKCS7Padding=a,a)try{var n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(t){}null===this.subtle&&(this.config.enableSoftwareAES=!0)}var e=t.prototype;return e.destroy=function(){this.observer=null},e.isSync=function(){return this.config.enableSoftwareAES},e.flush=function(){var t=this.currentResult;if(t){var e,r,i,a=new Uint8Array(t);return this.reset(),this.removePKCS7Padding?(i=(r=(e=a).byteLength)&&new DataView(e.buffer).getUint8(r-1))?Object(n.a)(e,0,r-i):e:a}this.reset()},e.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},e.decrypt=function(t,e,r,i){if(this.config.enableSoftwareAES){this.softwareDecrypt(new Uint8Array(t),e,r);var a=this.flush();a&&i(a.buffer)}else this.webCryptoDecrypt(new Uint8Array(t),e,r).then(i)},e.softwareDecrypt=function(t,e,r){var i=this.currentIV,a=this.currentResult,o=this.remainderData;this.logOnce("JS AES decrypt"),o&&(t=Object(l.a)(o,t),this.remainderData=null);var u=this.getValidChunk(t);if(!u.length)return null;i&&(r=i);var d=this.softwareDecrypter;d||(d=this.softwareDecrypter=new s),d.expandKey(e);var h=a;return this.currentResult=d.decrypt(u.buffer,0,r),this.currentIV=Object(n.a)(u,-16).buffer,h||null},e.webCryptoDecrypt=function(t,e,r){var n=this,s=this.subtle;return this.key===e&&this.fastAesKey||(this.key=e,this.fastAesKey=new a(s,e)),this.fastAesKey.expandKey().then((function(e){return s?new i(s,r).decrypt(t.buffer,e):Promise.reject(new Error("web crypto not initialized"))})).catch((function(i){return n.onWebCryptoError(i,t,e,r)}))},e.onWebCryptoError=function(t,e,r,i){return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",t),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(e,r,i)},e.getValidChunk=function(t){var e=t,r=t.length-t.length%16;return r!==t.length&&(e=Object(n.a)(t,0,r),this.remainderData=Object(n.a)(t,r)),e},e.logOnce=function(t){this.logEnabled&&(o.b.log("[decrypter.ts]: "+t),this.logEnabled=!1)},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r(11);function a(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=function(){function t(t,e){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,this._uri=e?Object(i.buildAbsoluteURL)(t,e,{alwaysNormalize:!0}):t}var e,r;return t.fromURL=function(e,r){return new t(e,r)},t.fromURI=function(e){return new t(e)},e=t,(r=[{key:"uri",get:function(){return this._uri}}])&&a(e.prototype,r),t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=function(){function t(){this.chunks=[],this.dataLength=0}var e=t.prototype;return e.push=function(t){this.chunks.push(t),this.dataLength+=t.length},e.flush=function(){var t,e=this.chunks,r=this.dataLength;return e.length?(t=1===e.length?e[0]:function(t,e){for(var r=new Uint8Array(e),i=0,a=0;a<t.length;a++){var n=t[a];r.set(n,i),i+=n.length}return r}(e,r),this.reset(),t):new Uint8Array(0)},e.reset=function(){this.chunks.length=0,this.dataLength=0},t}()},function(t,e,r){function i(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var i=r(r.s=ENTRY_MODULE);return i.default||i}function a(t){return(t+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(t,e,i){var n={};n[i]=[];var s=e.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return n;for(var l,u=o[1],d=new RegExp("(\\\\n|\\W)"+a(u)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");l=d.exec(s);)"dll-reference"!==l[3]&&n[i].push(l[3]);for(d=new RegExp("\\("+a(u)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");l=d.exec(s);)t[l[2]]||(n[i].push(l[1]),t[l[2]]=r(l[1]).m),n[l[2]]=n[l[2]]||[],n[l[2]].push(l[4]);for(var h,f=Object.keys(n),c=0;c<f.length;c++)for(var v=0;v<n[f[c]].length;v++)h=n[f[c]][v],isNaN(1*h)||(n[f[c]][v]=1*n[f[c]][v]);return n}function s(t){return Object.keys(t).reduce((function(e,r){return e||t[r].length>0}),!1)}t.exports=function(t,e){e=e||{};var a={main:r.m},o=e.all?{main:Object.keys(a.main)}:function(t,e){for(var r={main:[e]},i={main:[]},a={main:{}};s(r);)for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],d=r[u].pop();if(a[u]=a[u]||{},!a[u][d]&&t[u][d]){a[u][d]=!0,i[u]=i[u]||[],i[u].push(d);for(var h=n(t,t[u][d],u),f=Object.keys(h),c=0;c<f.length;c++)r[f[c]]=r[f[c]]||[],r[f[c]]=r[f[c]].concat(h[f[c]])}}return i}(a,t),l="";Object.keys(o).filter((function(t){return"main"!==t})).forEach((function(t){for(var e=0;o[t][e];)e++;o[t].push(e),a[t][e]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",l=l+"var "+t+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o[t].map((function(e){return JSON.stringify(e)+": "+a[t][e].toString()})).join(",")+"});\n"})),l=l+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o.main.map((function(t){return JSON.stringify(t)+": "+a.main[t].toString()})).join(",")+"}))(self);";var u=new window.Blob([l],{type:"text/javascript"});if(e.bare)return u;var d=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(u),h=new window.Worker(d);return h.objectURL=d,h}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var i=r(9),a=r(0),n=r(1),s=r(13);function o(t){var e=new s.EventEmitter,r=function(e,r){t.postMessage({event:e,data:r})};e.on(a.a.FRAG_DECRYPTED,r),e.on(a.a.ERROR,r),t.addEventListener("message",(function(a){var s=a.data;switch(s.cmd){case"init":var o=JSON.parse(s.config);t.transmuxer=new i.c(e,s.typeSupported,o,s.vendor,s.id),Object(n.a)(o.debug),r("init",null);break;case"configure":t.transmuxer.configure(s.config);break;case"demux":var u=t.transmuxer.push(s.data,s.decryptdata,s.chunkMeta,s.state);Object(i.d)(u)?u.then((function(e){l(t,e)})):l(t,u);break;case"flush":var h=s.chunkMeta,f=t.transmuxer.flush(h);Object(i.d)(f)?f.then((function(e){d(t,e,h)})):d(t,f,h)}}))}function l(t,e){if((r=e.remuxResult).audio||r.video||r.text||r.id3||r.initSegment){var r,i=[],a=e.remuxResult,n=a.audio,s=a.video;n&&u(i,n),s&&u(i,s),t.postMessage({event:"transmuxComplete",data:e},i)}}function u(t,e){e.data1&&t.push(e.data1.buffer),e.data2&&t.push(e.data2.buffer)}function d(t,e,r){e.forEach((function(e){l(t,e)})),t.postMessage({event:"flush",data:r})}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return xe}));var i=r(11),a=r(3),n=r(0),s=r(2),o=r(1),l=r(6),u=r(5);function d(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var h=function(){function t(t){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.fragments=[],this.url=t}var e,r;return t.prototype.reloaded=function(t){if(!t)return this.advanced=!0,void(this.updated=!0);var e=this.lastPartSn-t.lastPartSn,r=this.lastPartIndex-t.lastPartIndex;this.updated=this.endSN!==t.endSN||!!r||!!e,this.advanced=this.endSN>t.endSN||e>0||0===e&&r>0,this.updated||this.advanced?this.misses=Math.floor(.6*t.misses):this.misses=t.misses+1,this.availabilityDelay=t.availabilityDelay},e=t,(r=[{key:"hasProgramDateTime",get:function(){return!!this.fragments.length&&Object(a.a)(this.fragments[this.fragments.length-1].programDateTime)}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||10}},{key:"drift",get:function(){var t=this.driftEndTime-this.driftStartTime;return t>0?1e3*(this.driftEnd-this.driftStart)/t:1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var t;return null!==(t=this.fragments)&&void 0!==t&&t.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}])&&d(e.prototype,r),t}(),f=r(15),c=/^(\d+)x(\d+)$/,v=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,g=function(){function t(e){for(var r in"string"==typeof e&&(e=t.parseAttrList(e)),e)e.hasOwnProperty(r)&&(this[r]=e[r])}var e=t.prototype;return e.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},e.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.decimalFloatingPoint=function(t){return parseFloat(this[t])},e.optionalFloat=function(t,e){var r=this[t];return r?parseFloat(r):e},e.enumeratedString=function(t){return this[t]},e.bool=function(t){return"YES"===this[t]},e.decimalResolution=function(t){var e=c.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e,r={};for(v.lastIndex=0;null!==(e=v.exec(t));){var i=e[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}return r},t}(),p={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function m(t,e){return MediaSource.isTypeSupported((e||"video")+'/mp4;codecs="'+t+'"')}var y=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,b=/#EXT-X-MEDIA:(.*)/g,T=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),E=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(PLAYLIST-TYPE):(.+)/.source,/#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,/#EXT-X-(SKIP):(.+)/.source,/#EXT-X-(TARGETDURATION): *(\d+)/.source,/#EXT-X-(KEY):(.+)/.source,/#EXT-X-(START):(.+)/.source,/#EXT-X-(ENDLIST)/.source,/#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,/#EXT-X-(DIS)CONTINUITY/.source,/#EXT-X-(VERSION):(\d+)/.source,/#EXT-X-(MAP):(.+)/.source,/#EXT-X-(SERVER-CONTROL):(.+)/.source,/#EXT-X-(PART-INF):(.+)/.source,/#EXT-X-(GAP)/.source,/#EXT-X-(BITRATE):\s*(\d+)/.source,/#EXT-X-(PART):(.+)/.source,/#EXT-X-(PRELOAD-HINT):(.+)/.source,/#EXT-X-(RENDITION-REPORT):(.+)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),S=/\.(mp4|m4s|m4v|m4a)$/i,L=function(){function t(){}return t.findGroup=function(t,e){for(var r=0;r<t.length;r++){var i=t[r];if(i.id===e)return i}},t.convertAVC1ToAVCOTI=function(t){var e=t.split(".");if(e.length>2){var r=e.shift()+".";return(r+=parseInt(e.shift()).toString(16))+("000"+parseInt(e.shift()).toString(16)).substr(-4)}return t},t.resolve=function(t,e){return i.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i,a=[],n={},s=!1;for(y.lastIndex=0;null!=(i=y.exec(e));)if(i[1]){var o=new g(i[1]),l={attrs:o,bitrate:o.decimalInteger("AVERAGE-BANDWIDTH")||o.decimalInteger("BANDWIDTH"),name:o.NAME,url:t.resolve(i[2],r)},u=o.decimalResolution("RESOLUTION");u&&(l.width=u.width,l.height=u.height),A((o.CODECS||"").split(/[ ,]+/).filter((function(t){return t})),l),l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=t.convertAVC1ToAVCOTI(l.videoCodec)),a.push(l)}else if(i[3]){var d=new g(i[3]);d["DATA-ID"]&&(s=!0,n[d["DATA-ID"]]=d)}return{levels:a,sessionData:s?n:null}},t.parseMasterPlaylistMedia=function(e,r,i,a){var n;void 0===a&&(a=[]);var s=[],o=0;for(b.lastIndex=0;null!==(n=b.exec(e));){var l=new g(n[1]);if(l.TYPE===i){var u={attrs:l,bitrate:0,id:o++,groupId:l["GROUP-ID"],instreamId:l["INSTREAM-ID"],name:l.NAME||l.LANGUAGE||"",type:i,default:l.bool("DEFAULT"),autoselect:l.bool("AUTOSELECT"),forced:l.bool("FORCED"),lang:l.LANGUAGE,url:l.URI?t.resolve(l.URI,r):""};if(a.length){var d=t.findGroup(a,u.groupId)||a[0];R(u,d,"audioCodec"),R(u,d,"textCodec")}s.push(u)}}return s},t.parseLevelPlaylist=function(t,e,r,n,s){var l,d,c,v=new h(e),p=v.fragments,m=null,y=0,b=0,L=0,A=0,R=null,_=new u.b(n,e),k=-1,x=!1;for(T.lastIndex=0,v.m3u8=t;null!==(l=T.exec(t));){x&&(x=!1,(_=new u.b(n,e)).start=L,_.sn=y,_.cc=A,_.level=r,m&&(_.initSegment=m,_.rawProgramDateTime=m.rawProgramDateTime));var w=l[1];if(w){_.duration=parseFloat(w);var C=(" "+l[2]).slice(1);_.title=C||null,_.tagList.push(C?["INF",w,C]:["INF",w])}else if(l[3])Object(a.a)(_.duration)&&(_.start=L,c&&(_.levelkey=c),_.sn=y,_.level=r,_.cc=A,_.urlId=s,p.push(_),_.relurl=(" "+l[3]).slice(1),D(_,R),R=_,L+=_.duration,y++,b=0,x=!0);else if(l[4]){var O=(" "+l[4]).slice(1);R?_.setByteRange(O,R):_.setByteRange(O)}else if(l[5])_.rawProgramDateTime=(" "+l[5]).slice(1),_.tagList.push(["PROGRAM-DATE-TIME",_.rawProgramDateTime]),-1===k&&(k=p.length);else{if(!(l=l[0].match(E))){o.b.warn("No matches on slow regex match for level playlist!");continue}for(d=1;d<l.length&&void 0===l[d];d++);var I=(" "+l[d]).slice(1),P=(" "+l[d+1]).slice(1),F=l[d+2]?(" "+l[d+2]).slice(1):"";switch(I){case"PLAYLIST-TYPE":v.type=P.toUpperCase();break;case"MEDIA-SEQUENCE":y=v.startSN=parseInt(P);break;case"SKIP":var M=new g(P),N=M.decimalInteger("SKIPPED-SEGMENTS");if(Object(a.a)(N)){v.skippedSegments=N;for(var B=N;B--;)p.unshift(null);y+=N}var U=M.enumeratedString("RECENTLY-REMOVED-DATERANGES");U&&(v.recentlyRemovedDateranges=U.split("\t"));break;case"TARGETDURATION":v.targetduration=parseFloat(P);break;case"VERSION":v.version=parseInt(P);break;case"EXTM3U":break;case"ENDLIST":v.live=!1;break;case"#":(P||F)&&_.tagList.push(F?[P,F]:[P]);break;case"DIS":A++;case"GAP":_.tagList.push([I]);break;case"BITRATE":_.tagList.push([I,P]);break;case"DISCONTINUITY-SEQ":A=parseInt(P);break;case"KEY":var G,j=new g(P),H=j.enumeratedString("METHOD"),K=j.URI,V=j.hexadecimalInteger("IV"),W=j.enumeratedString("KEYFORMATVERSIONS"),Y=j.enumeratedString("KEYID"),X=null!=(G=j.enumeratedString("KEYFORMAT"))?G:"identity";if(["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"].indexOf(X)>-1){o.b.warn("Keyformat "+X+" is not supported from the manifest");continue}if("identity"!==X)continue;H&&(c=f.a.fromURL(e,K),K&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(H)>=0&&(c.method=H,c.keyFormat=X,Y&&(c.keyID=Y),W&&(c.keyFormatVersions=W),c.iv=V));break;case"START":var q=new g(P).decimalFloatingPoint("TIME-OFFSET");Object(a.a)(q)&&(v.startTimeOffset=q);break;case"MAP":var z=new g(P);_.relurl=z.URI,z.BYTERANGE&&_.setByteRange(z.BYTERANGE),_.level=r,_.sn="initSegment",c&&(_.levelkey=c),_.initSegment=null,m=_,x=!0;break;case"SERVER-CONTROL":var Q=new g(P);v.canBlockReload=Q.bool("CAN-BLOCK-RELOAD"),v.canSkipUntil=Q.optionalFloat("CAN-SKIP-UNTIL",0),v.canSkipDateRanges=v.canSkipUntil>0&&Q.bool("CAN-SKIP-DATERANGES"),v.partHoldBack=Q.optionalFloat("PART-HOLD-BACK",0),v.holdBack=Q.optionalFloat("HOLD-BACK",0);break;case"PART-INF":var $=new g(P);v.partTarget=$.decimalFloatingPoint("PART-TARGET");break;case"PART":var Z=v.partList;Z||(Z=v.partList=[]);var J=b>0?Z[Z.length-1]:void 0,tt=b++,et=new u.c(new g(P),_,e,tt,J);Z.push(et),_.duration+=et.duration;break;case"PRELOAD-HINT":var rt=new g(P);v.preloadHint=rt;break;case"RENDITION-REPORT":var it=new g(P);v.renditionReports=v.renditionReports||[],v.renditionReports.push(it);break;default:o.b.warn("line parsed but not handled: "+l)}}}R&&!R.relurl?(p.pop(),L-=R.duration,v.partList&&(v.fragmentHint=R)):v.partList&&(D(_,R),_.cc=A,v.fragmentHint=_);var at=p.length,nt=p[0],st=p[at-1];if((L+=v.skippedSegments*v.targetduration)>0&&at&&st){v.averagetargetduration=L/at;var ot=st.sn;v.endSN="initSegment"!==ot?ot:0,nt&&(v.startCC=nt.cc,nt.initSegment||v.fragments.every((function(t){return t.relurl&&(e=t.relurl,S.test(null!=(r=null===(a=i.parseURL(e))||void 0===a?void 0:a.path)?r:""));var e,r,a}))&&(o.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(_=new u.b(n,e)).relurl=st.relurl,_.level=r,_.sn="initSegment",nt.initSegment=_,v.needSidxRanges=!0))}else v.endSN=0,v.startCC=0;return v.fragmentHint&&(L+=v.fragmentHint.duration),v.totalduration=L,v.endCC=A,k>0&&function(t,e){for(var r=t[e],i=e;i--;){var a=t[i];if(!a)return;a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(p,k),v},t}();function A(t,e){["video","audio","text"].forEach((function(r){var i=t.filter((function(t){return function(t,e){var r=p[e];return!!r&&!0===r[t.slice(0,4)]}(t,r)}));if(i.length){var a=i.filter((function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)}));e[r+"Codec"]=a.length>0?a[0]:i[0],t=t.filter((function(t){return-1===i.indexOf(t)}))}})),e.unknownCodecs=t}function R(t,e,r){var i=e[r];i&&(t[r]=i)}function D(t,e){t.rawProgramDateTime?t.programDateTime=Date.parse(t.rawProgramDateTime):null!=e&&e.programDateTime&&(t.programDateTime=e.endProgramDateTime),Object(a.a)(t.programDateTime)||(t.programDateTime=null,t.rawProgramDateTime=null)}var _=r(4);function k(t,e){var r=t.url;return void 0!==r&&0!==r.indexOf("data:")||(r=e.url),r}var x=function(){function t(t){this.hls=void 0,this.loaders=Object.create(null),this.hls=t,this.registerListeners()}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(n.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(n.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(n.a.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.on(n.a.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.unregisterListeners=function(){var t=this.hls;t.off(n.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(n.a.LEVEL_LOADING,this.onLevelLoading,this),t.off(n.a.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.off(n.a.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.createInternalLoader=function(t){var e=this.hls.config,r=e.pLoader,i=e.loader,a=new(r||i)(e);return t.loader=a,this.loaders[t.type]=a,a},e.getInternalLoader=function(t){return this.loaders[t.type]},e.resetInternalLoader=function(t){this.loaders[t]&&delete this.loaders[t]},e.destroyInternalLoaders=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy(),this.resetInternalLoader(t)}},e.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},e.onManifestLoading=function(t,e){var r=e.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:_.a.MANIFEST,url:r,deliveryDirectives:null})},e.onLevelLoading=function(t,e){var r=e.id,i=e.level,a=e.url,n=e.deliveryDirectives;this.load({id:r,groupId:null,level:i,responseType:"text",type:_.a.LEVEL,url:a,deliveryDirectives:n})},e.onAudioTrackLoading=function(t,e){var r=e.id,i=e.groupId,a=e.url,n=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:_.a.AUDIO_TRACK,url:a,deliveryDirectives:n})},e.onSubtitleTrackLoading=function(t,e){var r=e.id,i=e.groupId,a=e.url,n=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:_.a.SUBTITLE_TRACK,url:a,deliveryDirectives:n})},e.load=function(t){var e,r,i,a,n,s,l=this.hls.config,u=this.getInternalLoader(t);if(u){var d=u.context;if(d&&d.url===t.url)return void o.b.trace("[playlist-loader]: playlist request ongoing");o.b.log("[playlist-loader]: aborting previous loader for type: "+t.type),u.abort()}switch(t.type){case _.a.MANIFEST:r=l.manifestLoadingMaxRetry,i=l.manifestLoadingTimeOut,a=l.manifestLoadingRetryDelay,n=l.manifestLoadingMaxRetryTimeout;break;case _.a.LEVEL:case _.a.AUDIO_TRACK:case _.a.SUBTITLE_TRACK:r=0,i=l.levelLoadingTimeOut;break;default:r=l.levelLoadingMaxRetry,i=l.levelLoadingTimeOut,a=l.levelLoadingRetryDelay,n=l.levelLoadingMaxRetryTimeout}if(u=this.createInternalLoader(t),null!==(e=t.deliveryDirectives)&&void 0!==e&&e.part&&(t.type===_.a.LEVEL&&null!==t.level?s=this.hls.levels[t.level].details:t.type===_.a.AUDIO_TRACK&&null!==t.id?s=this.hls.audioTracks[t.id].details:t.type===_.a.SUBTITLE_TRACK&&null!==t.id&&(s=this.hls.subtitleTracks[t.id].details),s)){var h=s.partTarget,f=s.targetduration;h&&f&&(i=Math.min(1e3*Math.max(3*h,.8*f),i))}var c={timeout:i,maxRetry:r,retryDelay:a,maxRetryDelay:n,highWaterMark:0},v={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};u.load(t,c,v)},e.loadsuccess=function(t,e,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this.handleSidxRequest(t,r),void this.handlePlaylistLoaded(t,e,r,i);this.resetInternalLoader(r.type);var a=t.data;0===a.indexOf("#EXTM3U")?(e.parsing.start=performance.now(),a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(t,e,r,i):this.handleMasterPlaylist(t,e,r,i)):this.handleManifestParsingError(t,r,"no EXTM3U delimiter",i)},e.loaderror=function(t,e,r){void 0===r&&(r=null),this.handleNetworkError(e,r,!1,t)},e.loadtimeout=function(t,e,r){void 0===r&&(r=null),this.handleNetworkError(e,r,!0)},e.handleMasterPlaylist=function(t,e,r,i){var a=this.hls,s=t.data,l=k(t,r),u=L.parseMasterPlaylist(s,l),d=u.levels,h=u.sessionData;if(d.length){var f=d.map((function(t){return{id:t.attrs.AUDIO,audioCodec:t.audioCodec}})),c=d.map((function(t){return{id:t.attrs.SUBTITLES,textCodec:t.textCodec}})),v=L.parseMasterPlaylistMedia(s,l,"AUDIO",f),p=L.parseMasterPlaylistMedia(s,l,"SUBTITLES",c),m=L.parseMasterPlaylistMedia(s,l,"CLOSED-CAPTIONS");v.length&&(v.some((function(t){return!t.url}))||!d[0].audioCodec||d[0].attrs.AUDIO||(o.b.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),v.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new g({}),bitrate:0,url:""}))),a.trigger(n.a.MANIFEST_LOADED,{levels:d,audioTracks:v,subtitles:p,captions:m,url:l,stats:e,networkDetails:i,sessionData:h})}else this.handleManifestParsingError(t,r,"no level found in manifest",i)},e.handleTrackOrLevelPlaylist=function(t,e,r,i){var o=this.hls,l=r.id,u=r.level,d=r.type,h=k(t,r),f=Object(a.a)(l)?l:0,c=Object(a.a)(u)?u:f,v=function(t){switch(t.type){case _.a.AUDIO_TRACK:return _.b.AUDIO;case _.a.SUBTITLE_TRACK:return _.b.SUBTITLE;default:return _.b.MAIN}}(r),p=L.parseLevelPlaylist(t.data,h,c,v,f);if(p.fragments.length){if(d===_.a.MANIFEST){var m={attrs:new g({}),bitrate:0,details:p,name:"",url:h};o.trigger(n.a.MANIFEST_LOADED,{levels:[m],audioTracks:[],url:h,stats:e,networkDetails:i,sessionData:null})}if(e.parsing.end=performance.now(),p.needSidxRanges){var y,b=null===(y=p.fragments[0].initSegment)||void 0===y?void 0:y.url;this.load({url:b,isSidxRequest:!0,type:d,level:u,levelDetails:p,id:l,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null})}else r.levelDetails=p,this.handlePlaylistLoaded(t,e,r,i)}else o.trigger(n.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.LEVEL_EMPTY_ERROR,fatal:!1,url:h,reason:"no fragments found in level",level:"number"==typeof r.level?r.level:void 0})},e.handleSidxRequest=function(t,e){var r=Object(l.g)(new Uint8Array(t.data));if(r){var i=r.references,a=e.levelDetails;i.forEach((function(t,e){var i=t.info,n=a.fragments[e];0===n.byteRange.length&&n.setByteRange(String(1+i.end-i.start)+"@"+String(i.start)),n.initSegment&&n.initSegment.setByteRange(String(r.moovEndOffset)+"@0")}))}},e.handleManifestParsingError=function(t,e,r,i){this.hls.trigger(n.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.MANIFEST_PARSING_ERROR,fatal:e.type===_.a.MANIFEST,url:t.url,reason:r,response:t,context:e,networkDetails:i})},e.handleNetworkError=function(t,e,r,i){void 0===r&&(r=!1),o.b.warn("[playlist-loader]: A network "+(r?"timeout":"error")+" occurred while loading "+t.type+" level: "+t.level+" id: "+t.id+' group-id: "'+t.groupId+'"');var a=s.a.UNKNOWN,l=!1,u=this.getInternalLoader(t);switch(t.type){case _.a.MANIFEST:a=r?s.a.MANIFEST_LOAD_TIMEOUT:s.a.MANIFEST_LOAD_ERROR,l=!0;break;case _.a.LEVEL:a=r?s.a.LEVEL_LOAD_TIMEOUT:s.a.LEVEL_LOAD_ERROR,l=!1;break;case _.a.AUDIO_TRACK:a=r?s.a.AUDIO_TRACK_LOAD_TIMEOUT:s.a.AUDIO_TRACK_LOAD_ERROR,l=!1;break;case _.a.SUBTITLE_TRACK:a=r?s.a.SUBTITLE_TRACK_LOAD_TIMEOUT:s.a.SUBTITLE_LOAD_ERROR,l=!1}u&&this.resetInternalLoader(t.type);var d={type:s.b.NETWORK_ERROR,details:a,fatal:l,url:t.url,loader:u,context:t,networkDetails:e};i&&(d.response=i),this.hls.trigger(n.a.ERROR,d)},e.handlePlaylistLoaded=function(t,e,r,i){var a=r.type,s=r.level,o=r.id,l=r.groupId,u=r.loader,d=r.levelDetails,h=r.deliveryDirectives;if(null!=d&&d.targetduration){if(u)switch(d.live&&(u.getCacheAge&&(d.ageHeader=u.getCacheAge()||0),u.getCacheAge&&!isNaN(d.ageHeader)||(d.ageHeader=0)),a){case _.a.MANIFEST:case _.a.LEVEL:this.hls.trigger(n.a.LEVEL_LOADED,{details:d,level:s||0,id:o||0,stats:e,networkDetails:i,deliveryDirectives:h});break;case _.a.AUDIO_TRACK:this.hls.trigger(n.a.AUDIO_TRACK_LOADED,{details:d,id:o||0,groupId:l||"",stats:e,networkDetails:i,deliveryDirectives:h});break;case _.a.SUBTITLE_TRACK:this.hls.trigger(n.a.SUBTITLE_TRACK_LOADED,{details:d,id:o||0,groupId:l||"",stats:e,networkDetails:i,deliveryDirectives:h})}}else this.handleManifestParsingError(t,r,"invalid target duration",i)},t}(),w=function(){function t(t){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){this.hls.on(n.a.KEY_LOADING,this.onKeyLoading,this)},e._unregisterListeners=function(){this.hls.off(n.a.KEY_LOADING,this.onKeyLoading)},e.destroy=function(){for(var t in this._unregisterListeners(),this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={}},e.onKeyLoading=function(t,e){var r=e.frag,i=r.type,a=this.loaders[i];if(r.decryptdata){var s=r.decryptdata.uri;if(s!==this.decrypturl||null===this.decryptkey){var l=this.hls.config;if(a&&(o.b.warn("abort previous key loader for type:"+i),a.abort()),!s)return void o.b.warn("key uri is falsy");var u=l.loader,d=r.loader=this.loaders[i]=new u(l);this.decrypturl=s,this.decryptkey=null;var h={url:s,frag:r,responseType:"arraybuffer"},f={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout,highWaterMark:0},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};d.load(h,f,c)}else this.decryptkey&&(r.decryptdata.key=this.decryptkey,this.hls.trigger(n.a.KEY_LOADED,{frag:r}))}else o.b.warn("Missing decryption data on fragment in onKeyLoading")},e.loadsuccess=function(t,e,r){var i=r.frag;i.decryptdata?(this.decryptkey=i.decryptdata.key=new Uint8Array(t.data),i.loader=null,delete this.loaders[i.type],this.hls.trigger(n.a.KEY_LOADED,{frag:i})):o.b.error("after key load, decryptdata unset")},e.loaderror=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(n.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:t})},e.loadtimeout=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(n.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},t}();function C(t,e){var r;try{r=new Event("addtrack")}catch(t){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)}var O=r(7),I=function(){function t(t){this.hls=void 0,this.id3Track=null,this.media=null,this.hls=t,this._registerListeners()}var e=t.prototype;return e.destroy=function(){this._unregisterListeners()},e._registerListeners=function(){var t=this.hls;t.on(n.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(n.a.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.on(n.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},e._unregisterListeners=function(){var t=this.hls;t.off(n.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(n.a.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.off(n.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},e.onMediaAttached=function(t,e){this.media=e.media},e.onMediaDetaching=function(){this.id3Track&&(function(t){var e=t.mode;if("disabled"===e&&(t.mode="hidden"),t.cues)for(var r=t.cues.length;r--;)t.removeCue(t.cues[r]);"disabled"===e&&(t.mode=e)}(this.id3Track),this.id3Track=null,this.media=null)},e.getID3Track=function(t){if(this.media){for(var e=0;e<t.length;e++){var r=t[e];if("metadata"===r.kind&&"id3"===r.label)return C(r,this.media),r}return this.media.addTextTrack("metadata","id3")}},e.onFragParsingMetadata=function(t,e){if(this.media){var r=e.frag,i=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var a=self.WebKitDataCue||self.VTTCue||self.TextTrackCue,n=0;n<i.length;n++){var s=O.c(i[n].data);if(s){var o=i[n].pts,l=n<i.length-1?i[n+1].pts:r.end;l-o<=0&&(l=o+.25);for(var u=0;u<s.length;u++){var d=s[u];if(!O.e(d)){var h=new a(o,l,"");h.value=d,this.id3Track.addCue(h)}}}}}},e.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset,a=e.type;if(!a||"audio"===a){var n=this.id3Track;n&&function(t,e,r){var i=t.mode;if("disabled"===i&&(t.mode="hidden"),t.cues&&t.cues.length>0)for(var a=function(t,e,r){var i=[],a=function(t,e){if(e<t[0].startTime)return 0;var r=t.length-1;if(e>t[r].endTime)return-1;for(var i=0,a=r;i<=a;){var n=Math.floor((a+i)/2);if(e<t[n].startTime)a=n-1;else{if(!(e>t[n].startTime&&i<r))return n;i=n+1}}return t[i].startTime-e<e-t[a].startTime?i:a}(t,e);if(a>-1)for(var n=a,s=t.length;n<s;n++){var o=t[n];if(o.startTime>=e&&o.endTime<=r)i.push(o);else if(o.startTime>r)return i}return i}(t.cues,e,r),n=0;n<a.length;n++)t.removeCue(a[n]);"disabled"===i&&(t.mode=i)}(n,r,i)}},t}();function P(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var F,M=function(){function t(t){var e=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return e.timeupdate()},this.hls=t,this.config=t.config,this.registerListeners()}var e,r,i=t.prototype;return i.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},i.registerListeners=function(){this.hls.on(n.a.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(n.a.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(n.a.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(n.a.ERROR,this.onError,this)},i.unregisterListeners=function(){this.hls.off(n.a.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(n.a.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(n.a.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(n.a.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(n.a.ERROR,this.onError)},i.onMediaAttached=function(t,e){this.media=e.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},i.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},i.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},i.onLevelUpdated=function(t,e){var r=e.details;this.levelDetails=r,r.advanced&&this.timeupdate(),!r.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},i.onError=function(t,e){e.details===s.a.BUFFER_STALLED_ERROR&&(this.stallCount++,o.b.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},i.timeupdate=function(){var t=this.media,e=this.levelDetails;if(t&&e){this.currentTime=t.currentTime;var r=this.computeLatency();if(null!==r){this._latency=r;var i=this.config,a=i.lowLatencyMode,n=i.maxLiveSyncPlaybackRate;if(a&&1!==n){var s=this.targetLatency;if(null!==s){var o=r-s,l=o<Math.min(this.maxLatency,s+e.targetduration);if(e.live&&l&&o>.05&&this.forwardBufferLength>1){var u=Math.min(2,Math.max(1,n)),d=Math.round(2/(1+Math.exp(-.75*o-this.edgeStalled))*20)/20;t.playbackRate=Math.min(u,Math.max(1,d))}else 1!==t.playbackRate&&0!==t.playbackRate&&(t.playbackRate=1)}}}}},i.estimateLiveEdge=function(){var t=this.levelDetails;return null===t?null:t.edge+t.age},i.computeLatency=function(){var t=this.estimateLiveEdge();return null===t?null:t-this.currentTime},e=t,(r=[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var t=this.config,e=this.levelDetails;return void 0!==t.liveMaxLatencyDuration?t.liveMaxLatencyDuration:e?t.liveMaxLatencyDurationCount*e.targetduration:0}},{key:"targetLatency",get:function(){var t=this.levelDetails;if(null===t)return null;var e=t.holdBack,r=t.partHoldBack,i=t.targetduration,a=this.config,n=a.liveSyncDuration,s=a.liveSyncDurationCount,o=a.lowLatencyMode,l=this.hls.userConfig,u=o&&r||e;(l.liveSyncDuration||l.liveSyncDurationCount||0===u)&&(u=void 0!==n?n:s*i);var d=i;return u+Math.min(1*this.stallCount,d)}},{key:"liveSyncPosition",get:function(){var t=this.estimateLiveEdge(),e=this.targetLatency,r=this.levelDetails;if(null===t||null===e||null===r)return null;var i=r.edge,a=t-e-this.edgeStalled,n=i-r.totalduration,s=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(n,a),s)}},{key:"drift",get:function(){var t=this.levelDetails;return null===t?1:t.drift}},{key:"edgeStalled",get:function(){var t=this.levelDetails;if(null===t)return 0;var e=3*(this.config.lowLatencyMode&&t.partTarget||t.targetduration);return Math.max(t.age-e,0)}},{key:"forwardBufferLength",get:function(){var t=this.media,e=this.levelDetails;if(!t||!e)return 0;var r=t.buffered.length;return r?t.buffered.end(r-1):e.edge-this.currentTime}}])&&P(e.prototype,r),t}();function N(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}!function(t){t.No="",t.Yes="YES",t.v2="v2"}(F||(F={}));var B=function(){function t(t,e,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=t,this.part=e,this.skip=r}return t.prototype.addDirectives=function(t){var e=new self.URL(t);return void 0!==this.msn&&e.searchParams.set("_HLS_msn",this.msn.toString()),void 0!==this.part&&e.searchParams.set("_HLS_part",this.part.toString()),this.skip&&e.searchParams.set("_HLS_skip",this.skip),e.toString()},t}(),U=function(){function t(t){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[t.url],this.attrs=t.attrs,this.bitrate=t.bitrate,t.details&&(this.details=t.details),this.id=t.id||0,this.name=t.name,this.width=t.width||0,this.height=t.height||0,this.audioCodec=t.audioCodec,this.videoCodec=t.videoCodec,this.unknownCodecs=t.unknownCodecs,this.codecSet=[t.videoCodec,t.audioCodec].filter((function(t){return t})).join(",").replace(/\.[^.,]+/g,"")}var e,r;return e=t,(r=[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(t){var e=t%this.url.length;this._urlId!==e&&(this.details=void 0,this._urlId=e)}}])&&N(e.prototype,r),t}();function G(t,e,r){switch(e){case"audio":t.audioGroupIds||(t.audioGroupIds=[]),t.audioGroupIds.push(r);break;case"text":t.textGroupIds||(t.textGroupIds=[]),t.textGroupIds.push(r)}}function j(t){var e={};t.forEach((function(t){var r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++}))}function H(t,e){var r=e.startPTS;if(Object(a.a)(r)){var i,n=0;e.sn>t.sn?(n=r-t.start,i=t):(n=t.start-r,i=e),i.duration!==n&&(i.duration=n)}else e.sn>t.sn?t.cc===e.cc&&t.minEndPTS?e.start=t.start+(t.minEndPTS-t.start):e.start=t.start+t.duration:e.start=Math.max(t.start-e.duration,0)}function K(t,e,r,i,n,s){i-r<=0&&(o.b.warn("Fragment should have a positive duration",e),i=r+e.duration,s=n+e.duration);var l=r,u=i,d=e.startPTS,h=e.endPTS;if(Object(a.a)(d)){var f=Math.abs(d-r);Object(a.a)(e.deltaPTS)?e.deltaPTS=Math.max(f,e.deltaPTS):e.deltaPTS=f,l=Math.max(r,d),r=Math.min(r,d),n=Math.min(n,e.startDTS),u=Math.min(i,h),i=Math.max(i,h),s=Math.max(s,e.endDTS)}e.duration=i-r;var c=r-e.start;e.appendedPTS=i,e.start=e.startPTS=r,e.maxStartPTS=l,e.startDTS=n,e.endPTS=i,e.minEndPTS=u,e.endDTS=s;var v,g=e.sn;if(!t||g<t.startSN||g>t.endSN)return 0;var p=g-t.startSN,m=t.fragments;for(m[p]=e,v=p;v>0;v--)H(m[v],m[v-1]);for(v=p;v<m.length-1;v++)H(m[v],m[v+1]);return t.fragmentHint&&H(m[m.length-1],t.fragmentHint),t.PTSKnown=t.alignedSliding=!0,c}function V(t,e){for(var r=null,i=t.fragments,n=i.length-1;n>=0;n--){var s=i[n].initSegment;if(s){r=s;break}}t.fragmentHint&&delete t.fragmentHint.endPTS;var l,u=0;if(function(t,e,r){for(var i=e.skippedSegments,a=Math.max(t.startSN,e.startSN)-e.startSN,n=(t.fragmentHint?1:0)+(i?e.endSN:Math.min(t.endSN,e.endSN))-e.startSN,s=e.startSN-t.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments,u=a;u<=n;u++){var d=l[s+u],h=o[u];i&&!h&&u<i&&(h=e.fragments[u]=d),d&&h&&r(d,h)}}(t,e,(function(t,i){t.relurl&&(u=t.cc-i.cc),Object(a.a)(t.startPTS)&&Object(a.a)(t.endPTS)&&(i.start=i.startPTS=t.startPTS,i.startDTS=t.startDTS,i.appendedPTS=t.appendedPTS,i.maxStartPTS=t.maxStartPTS,i.endPTS=t.endPTS,i.endDTS=t.endDTS,i.minEndPTS=t.minEndPTS,i.duration=t.endPTS-t.startPTS,i.duration&&(l=i),e.PTSKnown=e.alignedSliding=!0),i.elementaryStreams=t.elementaryStreams,i.loader=t.loader,i.stats=t.stats,i.urlId=t.urlId,t.initSegment&&(i.initSegment=t.initSegment,r=t.initSegment)})),r&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach((function(t){var e;t.initSegment&&t.initSegment.relurl!==(null===(e=r)||void 0===e?void 0:e.relurl)||(t.initSegment=r)})),e.skippedSegments&&(e.deltaUpdateFailed=e.fragments.some((function(t){return!t})),e.deltaUpdateFailed)){o.b.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var d=e.skippedSegments;d--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}var h=e.fragments;if(u){o.b.warn("discontinuity sliding from playlist, take drift into account");for(var f=0;f<h.length;f++)h[f].cc+=u}e.skippedSegments&&(e.startCC=e.fragments[0].cc),function(t,e,r){if(t&&e)for(var i=0,a=0,n=t.length;a<=n;a++){var s=t[a],o=e[a+i];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?r(s,o):i--}}(t.partList,e.partList,(function(t,e){e.elementaryStreams=t.elementaryStreams,e.stats=t.stats})),l?K(e,l,l.startPTS,l.endPTS,l.startDTS,l.endDTS):W(t,e),h.length&&(e.totalduration=e.edge-h[0].start),e.driftStartTime=t.driftStartTime,e.driftStart=t.driftStart;var c=e.advancedDateTime;if(e.advanced&&c){var v=e.edge;e.driftStart||(e.driftStartTime=c,e.driftStart=v),e.driftEndTime=c,e.driftEnd=v}else e.driftEndTime=t.driftEndTime,e.driftEnd=t.driftEnd,e.advancedDateTime=t.advancedDateTime}function W(t,e){var r=e.startSN+e.skippedSegments-t.startSN,i=t.fragments;r<0||r>=i.length||function(t,e){if(e){for(var r=t.fragments,i=t.skippedSegments;i<r.length;i++)r[i].start+=e;t.fragmentHint&&(t.fragmentHint.start+=e)}}(e,i[r].start)}var Y=function(){function t(t,e){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=o.b.log.bind(o.b,e+":"),this.warn=o.b.warn.bind(o.b,e+":"),this.hls=t}var e=t.prototype;return e.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},e.onError=function(t,e){e.fatal&&e.type===s.b.NETWORK_ERROR&&this.clearTimer()},e.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},e.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},e.stopLoad=function(){this.canLoad=!1,this.clearTimer()},e.switchParams=function(t,e){var r=null==e?void 0:e.renditionReports;if(r)for(var i=0;i<r.length;i++){var n=r[i],s=""+n.URI;if(s===t.substr(-s.length)){var o=parseInt(n["LAST-MSN"]),l=parseInt(n["LAST-PART"]);if(e&&this.hls.config.lowLatencyMode){var u=Math.min(e.age-e.partTarget,e.targetduration);void 0!==l&&u>e.partTarget&&(l+=1)}if(Object(a.a)(o))return new B(o,Object(a.a)(l)?l:void 0,F.No)}}},e.loadPlaylist=function(t){},e.shouldLoadTrack=function(t){return this.canLoad&&t&&!!t.url&&(!t.details||t.details.live)},e.playlistLoaded=function(t,e,r){var i=this,a=e.details,n=e.stats,s=n.loading.end?Math.max(0,self.performance.now()-n.loading.end):0;if(a.advancedDateTime=Date.now()-s,a.live||null!=r&&r.live){if(a.reloaded(r),r&&this.log("live playlist "+t+" "+(a.advanced?"REFRESHED "+a.lastPartSn+"-"+a.lastPartIndex:"MISSED")),r&&a.fragments.length>0&&V(r,a),!this.canLoad||!a.live)return;var o,l=void 0,u=void 0;if(a.canBlockReload&&a.endSN&&a.advanced){var d=this.hls.config.lowLatencyMode,h=a.lastPartSn,f=a.endSN,c=a.lastPartIndex,v=h===f;-1!==c?(l=v?f+1:h,u=v?d?0:c:c+1):l=f+1;var g=a.age,p=g+a.ageHeader,m=Math.min(p-a.partTarget,1.5*a.targetduration);if(m>0){if(r&&m>r.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+r.tuneInGoal+" to: "+m+" with playlist age: "+a.age),m=0;else{var y=Math.floor(m/a.targetduration);l+=y,void 0!==u&&(u+=Math.round(m%a.targetduration/a.partTarget)),this.log("CDN Tune-in age: "+a.ageHeader+"s last advanced "+g.toFixed(2)+"s goal: "+m+" skip sn "+y+" to part "+u)}a.tuneInGoal=m}if(o=this.getDeliveryDirectives(a,e.deliveryDirectives,l,u),d||!v)return void this.loadPlaylist(o)}else o=this.getDeliveryDirectives(a,e.deliveryDirectives,l,u);var b=function(t,e){var r,i=1e3*t.levelTargetDuration,a=i/2,n=t.age,s=n>0&&n<3*i,o=e.loading.end-e.loading.start,l=t.availabilityDelay;if(!1===t.updated)if(s){var u=333*t.misses;r=Math.max(Math.min(a,2*o),u),t.availabilityDelay=(t.availabilityDelay||0)+r}else r=a;else s?(l=Math.min(l||i/2,n),t.availabilityDelay=l,r=l+i-n):r=i-o;return Math.round(r)}(a,n);void 0!==l&&a.canBlockReload&&(b-=a.partTarget||1),this.log("reload live playlist "+t+" in "+Math.round(b)+" ms"),this.timer=self.setTimeout((function(){return i.loadPlaylist(o)}),b)}else this.clearTimer()},e.getDeliveryDirectives=function(t,e,r,i){var a=function(t,e){var r=t.canSkipUntil,i=t.canSkipDateRanges,a=t.endSN;return r&&(void 0!==e?e-a:0)<r?i?F.v2:F.Yes:F.No}(t,r);return null!=e&&e.skip&&t.deltaUpdateFailed&&(r=e.msn,i=e.part,a=F.No),new B(r,i,a)},e.retryLoadingOrFail=function(t){var e,r=this,i=this.hls.config,a=this.retryCount<i.levelLoadingMaxRetry;if(a)if(this.retryCount++,t.details.indexOf("LoadTimeOut")>-1&&null!==(e=t.context)&&void 0!==e&&e.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+t.details+'"'),this.loadPlaylist();else{var n=Math.min(Math.pow(2,this.retryCount)*i.levelLoadingRetryDelay,i.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout((function(){return r.loadPlaylist()}),n),this.warn("retry playlist loading #"+this.retryCount+" in "+n+' ms after "'+t.details+'"')}else this.warn('cannot recover from error "'+t.details+'"'),this.clearTimer(),t.fatal=!0;return a},t}();function X(){return(X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function q(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q,$=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),Z=function(t){var e,r;function i(e){var r;return(r=t.call(this,e,"[level-controller]")||this)._levels=[],r._firstLevel=-1,r._startLevel=void 0,r.currentLevelIndex=-1,r.manualLevelIndex=-1,r.onParsedComplete=void 0,r._registerListeners(),r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,z(e,r);var a,o,l=i.prototype;return l._registerListeners=function(){var t=this.hls;t.on(n.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(n.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(n.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(n.a.FRAG_LOADED,this.onFragLoaded,this),t.on(n.a.ERROR,this.onError,this)},l._unregisterListeners=function(){var t=this.hls;t.off(n.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(n.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(n.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(n.a.FRAG_LOADED,this.onFragLoaded,this),t.off(n.a.ERROR,this.onError,this)},l.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,t.prototype.destroy.call(this)},l.startLoad=function(){this._levels.forEach((function(t){t.loadError=0})),t.prototype.startLoad.call(this)},l.onManifestLoaded=function(t,e){var r,i,a=[],o=[],l=[],u={},d=!1,h=!1,f=!1;if(e.levels.forEach((function(t){var e=t.attrs;d=d||!(!t.width||!t.height),h=h||!!t.videoCodec,f=f||!!t.audioCodec,$&&t.audioCodec&&-1!==t.audioCodec.indexOf("mp4a.40.34")&&(t.audioCodec=void 0);var r=t.bitrate+"-"+t.attrs.RESOLUTION+"-"+t.attrs.CODECS;(i=u[r])?i.url.push(t.url):(i=new U(t),u[r]=i,a.push(i)),e&&(e.AUDIO&&G(i,"audio",e.AUDIO),e.SUBTITLES&&G(i,"text",e.SUBTITLES))})),(d||h)&&f&&(a=a.filter((function(t){var e=t.videoCodec,r=t.width,i=t.height;return!!e||!(!r||!i)}))),a=a.filter((function(t){var e=t.audioCodec,r=t.videoCodec;return(!e||m(e,"audio"))&&(!r||m(r,"video"))})),e.audioTracks&&j(o=e.audioTracks.filter((function(t){return!t.audioCodec||m(t.audioCodec,"audio")}))),e.subtitles&&j(l=e.subtitles),a.length>0){r=a[0].bitrate,a.sort((function(t,e){return t.bitrate-e.bitrate})),this._levels=a;for(var c=0;c<a.length;c++)if(a[c].bitrate===r){this._firstLevel=c,this.log("manifest loaded, "+a.length+" level(s) found, first bitrate: "+r);break}var v=f&&!h,g={levels:a,audioTracks:o,subtitleTracks:l,firstLevel:this._firstLevel,stats:e.stats,audio:f,video:h,altAudio:!v&&o.some((function(t){return!!t.url}))};this.hls.trigger(n.a.MANIFEST_PARSED,g),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:e.url,reason:"no level with compatible codecs found in manifest"})},l.onError=function(e,r){if(t.prototype.onError.call(this,e,r),!r.fatal){var i=r.context,a=this._levels[this.currentLevelIndex];if(i&&(i.type===_.a.AUDIO_TRACK&&a.audioGroupIds&&i.groupId===a.audioGroupIds[a.urlId]||i.type===_.a.SUBTITLE_TRACK&&a.textGroupIds&&i.groupId===a.textGroupIds[a.urlId]))this.redundantFailover(this.currentLevelIndex);else{var n,o=!1,l=!0;switch(r.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:case s.a.KEY_LOAD_ERROR:case s.a.KEY_LOAD_TIMEOUT:if(r.frag){var u=this._levels[r.frag.level];u?(u.fragmentError++,u.fragmentError>this.hls.config.fragLoadingMaxRetry&&(n=r.frag.level)):n=r.frag.level}break;case s.a.LEVEL_LOAD_ERROR:case s.a.LEVEL_LOAD_TIMEOUT:i&&(i.deliveryDirectives&&(l=!1),n=i.level),o=!0;break;case s.a.REMUX_ALLOC_ERROR:n=r.level,o=!0}void 0!==n&&this.recoverLevel(r,n,o,l)}}},l.recoverLevel=function(t,e,r,i){var a=t.details,n=this._levels[e];if(n.loadError++,r){if(!this.retryLoadingOrFail(t))return void(this.currentLevelIndex=-1);t.levelRetry=!0}if(i){var s=n.url.length;if(s>1&&n.loadError<s)t.levelRetry=!0,this.redundantFailover(e);else if(-1===this.manualLevelIndex){var o=0===e?this._levels.length-1:e-1;this.currentLevelIndex!==o&&0===this._levels[o].loadError&&(this.warn(a+": switch to "+o),t.levelRetry=!0,this.hls.nextAutoLevel=o)}}},l.redundantFailover=function(t){var e=this._levels[t],r=e.url.length;if(r>1){var i=(e.urlId+1)%r;this.warn("Switching to redundant URL-id "+i),this._levels.forEach((function(t){t.urlId=i})),this.level=t}},l.onFragLoaded=function(t,e){var r=e.frag;if(void 0!==r&&r.type===_.b.MAIN){var i=this._levels[r.level];void 0!==i&&(i.fragmentError=0,i.loadError=0)}},l.onLevelLoaded=function(t,e){var r,i,a=e.level,n=e.details,s=this._levels[a];if(!s)return this.warn("Invalid level index "+a),void(null!==(i=e.deliveryDirectives)&&void 0!==i&&i.skip&&(n.deltaUpdateFailed=!0));a===this.currentLevelIndex?(0===s.fragmentError&&(s.loadError=0,this.retryCount=0),this.playlistLoaded(a,e,s.details)):null!==(r=e.deliveryDirectives)&&void 0!==r&&r.skip&&(n.deltaUpdateFailed=!0)},l.onAudioTrackSwitched=function(t,e){var r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=this.hls.audioTracks[e.id].groupId,n=0;n<r.audioGroupIds.length;n++)if(r.audioGroupIds[n]===a){i=n;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},l.loadPlaylist=function(t){var e=this.currentLevelIndex,r=this._levels[e];if(this.canLoad&&r&&r.url.length>0){var i=r.urlId,a=r.url[i];if(t)try{a=t.addDirectives(a)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("Attempt loading level index "+e+(t?" at sn "+t.msn+" part "+t.part:"")+" with URL-id "+i+" "+a),this.clearTimer(),this.hls.trigger(n.a.LEVEL_LOADING,{url:a,level:e,id:i,deliveryDirectives:t||null})}},l.removeLevel=function(t,e){var r=function(t,r){return r!==e},i=this._levels.filter((function(i,a){return a!==t||i.url.length>1&&void 0!==e&&(i.url=i.url.filter(r),i.audioGroupIds&&(i.audioGroupIds=i.audioGroupIds.filter(r)),i.textGroupIds&&(i.textGroupIds=i.textGroupIds.filter(r)),i.urlId=0,!0)})).map((function(t,e){var r=t.details;return null!=r&&r.fragments&&r.fragments.forEach((function(t){t.level=e})),t}));this._levels=i,this.hls.trigger(n.a.LEVELS_UPDATED,{levels:i})},a=i,(o=[{key:"levels",get:function(){return 0===this._levels.length?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(t){var e,r=this._levels;if(0!==r.length&&(this.currentLevelIndex!==t||null===(e=r[t])||void 0===e||!e.details)){if(t<0||t>=r.length){var i=t<0;if(this.hls.trigger(n.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.LEVEL_SWITCH_ERROR,level:t,fatal:i,reason:"invalid level idx"}),i)return;t=Math.min(t,r.length-1)}this.clearTimer();var a=this.currentLevelIndex,o=r[a],l=r[t];this.log("switching to level "+t+" from "+a),this.currentLevelIndex=t;var u=X({},l,{level:t,maxBitrate:l.maxBitrate,uri:l.uri,urlId:l.urlId});delete u._urlId,this.hls.trigger(n.a.LEVEL_SWITCHING,u);var d=l.details;if(!d||d.live){var h=this.switchParams(l.uri,null==o?void 0:o.details);this.loadPlaylist(h)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(t){this.manualLevelIndex=t,void 0===this._startLevel&&(this._startLevel=t),-1!==t&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(t){this.level=t,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=t)}}])&&q(a.prototype,o),i}(Y);!function(t){t.NOT_LOADED="NOT_LOADED",t.BACKTRACKED="BACKTRACKED",t.APPENDING="APPENDING",t.PARTIAL="PARTIAL",t.OK="OK"}(Q||(Q={}));var J=function(){function t(t){this.activeFragment=null,this.activeParts=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){var t=this.hls;t.on(n.a.BUFFER_APPENDED,this.onBufferAppended,this),t.on(n.a.FRAG_BUFFERED,this.onFragBuffered,this),t.on(n.a.FRAG_LOADED,this.onFragLoaded,this)},e._unregisterListeners=function(){var t=this.hls;t.off(n.a.BUFFER_APPENDED,this.onBufferAppended,this),t.off(n.a.FRAG_BUFFERED,this.onFragBuffered,this),t.off(n.a.FRAG_LOADED,this.onFragLoaded,this)},e.destroy=function(){this._unregisterListeners(),this.fragments=this.timeRanges=null},e.getAppendedFrag=function(t,e){if(e===_.b.MAIN){var r=this.activeFragment,i=this.activeParts;if(!r)return null;if(i)for(var a=i.length;a--;){var n=i[a],s=n?n.end:r.appendedPTS;if(n.start<=t&&void 0!==s&&t<=s)return a>9&&(this.activeParts=i.slice(a-9)),n}else if(r.start<=t&&void 0!==r.appendedPTS&&t<=r.appendedPTS)return r}return this.getBufferedFrag(t,e)},e.getBufferedFrag=function(t,e){for(var r=this.fragments,i=Object.keys(r),a=i.length;a--;){var n=r[i[a]];if((null==n?void 0:n.body.type)===e&&n.buffered){var s=n.body;if(s.start<=t&&t<=s.end)return s}}return null},e.detectEvictedFragments=function(t,e,r){var i=this;Object.keys(this.fragments).forEach((function(a){var n=i.fragments[a];if(n)if(n.buffered){var s=n.range[t];s&&s.time.some((function(t){var r=!i.isTimeBuffered(t.startPTS,t.endPTS,e);return r&&i.removeFragment(n.body),r}))}else n.body.type===r&&i.removeFragment(n.body)}))},e.detectPartialFragments=function(t){var e=this,r=this.timeRanges,i=t.frag,a=t.part;if(r&&"initSegment"!==i.sn){var n=et(i),s=this.fragments[n];s&&(Object.keys(r).forEach((function(t){var n=i.elementaryStreams[t];if(n){var o=r[t],l=null!==a||!0===n.partial;s.range[t]=e.getBufferedTimes(i,a,l,o)}})),s.backtrack=s.loaded=null,Object.keys(s.range).length?s.buffered=!0:this.removeFragment(s.body))}},e.fragBuffered=function(t){var e=et(t),r=this.fragments[e];r&&(r.backtrack=r.loaded=null,r.buffered=!0)},e.getBufferedTimes=function(t,e,r,i){for(var a={time:[],partial:r},n=e?e.start:t.start,s=e?e.end:t.end,o=t.minEndPTS||s,l=t.maxStartPTS||n,u=0;u<i.length;u++){var d=i.start(u)-this.bufferPadding,h=i.end(u)+this.bufferPadding;if(l>=d&&o<=h){a.time.push({startPTS:Math.max(n,i.start(u)),endPTS:Math.min(s,i.end(u))});break}if(n<h&&s>d)a.partial=!0,a.time.push({startPTS:Math.max(n,i.start(u)),endPTS:Math.min(s,i.end(u))});else if(s<=d)break}return a},e.getPartialFragment=function(t){var e,r,i,a=null,n=0,s=this.bufferPadding,o=this.fragments;return Object.keys(o).forEach((function(l){var u=o[l];u&&tt(u)&&(r=u.body.start-s,i=u.body.end+s,t>=r&&t<=i&&(e=Math.min(t-r,i-t),n<=e&&(a=u.body,n=e)))})),a},e.getState=function(t){var e=et(t),r=this.fragments[e];return r?r.buffered?tt(r)?Q.PARTIAL:Q.OK:r.backtrack?Q.BACKTRACKED:Q.APPENDING:Q.NOT_LOADED},e.backtrack=function(t,e){var r=et(t),i=this.fragments[r];if(!i||i.backtrack)return null;var a=i.backtrack=e||i.loaded;return i.loaded=null,a},e.getBacktrackData=function(t){var e=et(t),r=this.fragments[e];if(r){var i,a=r.backtrack;if(null!=a&&null!==(i=a.payload)&&void 0!==i&&i.byteLength)return a;this.removeFragment(t)}return null},e.isTimeBuffered=function(t,e,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,t>=i&&e<=a)return!0;if(e<=i)return!1}return!1},e.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if("initSegment"!==r.sn&&!r.bitrateTest&&!i){var a=et(r);this.fragments[a]={body:r,loaded:e,backtrack:null,buffered:!1,range:Object.create(null)}}},e.onBufferAppended=function(t,e){var r=this,i=e.frag,a=e.part,n=e.timeRanges;if(i.type===_.b.MAIN)if(this.activeFragment=i,a){var s=this.activeParts;s||(this.activeParts=s=[]),s.push(a)}else this.activeParts=null;this.timeRanges=n,Object.keys(n).forEach((function(t){var e=n[t];if(r.detectEvictedFragments(t,e),!a)for(var s=0;s<e.length;s++)i.appendedPTS=Math.max(e.end(s),i.appendedPTS||0)}))},e.onFragBuffered=function(t,e){this.detectPartialFragments(e)},e.hasFragment=function(t){var e=et(t);return!!this.fragments[e]},e.removeFragmentsInRange=function(t,e,r){var i=this;Object.keys(this.fragments).forEach((function(a){var n=i.fragments[a];if(n&&n.buffered){var s=n.body;s.type===r&&s.start<e&&s.end>t&&i.removeFragment(s)}}))},e.removeFragment=function(t){var e=et(t);t.stats.loaded=0,t.clearElementaryStreamInfo(),delete this.fragments[e]},e.removeAllFragments=function(){this.fragments=Object.create(null),this.activeFragment=null,this.activeParts=null},t}();function tt(t){var e,r;return t.buffered&&((null===(e=t.range.video)||void 0===e?void 0:e.partial)||(null===(r=t.range.audio)||void 0===r?void 0:r.partial))}function et(t){return t.type+"_"+t.level+"_"+t.urlId+"_"+t.sn}var rt=function(){function t(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var e=t.prototype;return e.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},e.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},e.onHandlerDestroyed=function(){},e.hasInterval=function(){return!!this._tickInterval},e.hasNextTick=function(){return!!this._tickTimer},e.setInterval=function(t){return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,t),!0)},e.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},e.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},e.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},e.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},e.doTick=function(){},t}(),it={length:0,start:function(){return 0},end:function(){return 0}},at=function(){function t(){}return t.isBuffered=function(e,r){try{if(e)for(var i=t.getBuffered(e),a=0;a<i.length;a++)if(r>=i.start(a)&&r<=i.end(a))return!0}catch(t){}return!1},t.bufferInfo=function(e,r,i){try{if(e){var a,n=t.getBuffered(e),s=[];for(a=0;a<n.length;a++)s.push({start:n.start(a),end:n.end(a)});return this.bufferedInfo(s,r,i)}}catch(t){}return{len:0,start:r,end:r,nextStart:void 0}},t.bufferedInfo=function(t,e,r){e=Math.max(0,e),t.sort((function(t,e){return t.start-e.start||e.end-t.end}));var i=[];if(r)for(var a=0;a<t.length;a++){var n=i.length;if(n){var s=i[n-1].end;t[a].start-s<r?t[a].end>s&&(i[n-1].end=t[a].end):i.push(t[a])}else i.push(t[a])}else i=t;for(var o,l=0,u=e,d=e,h=0;h<i.length;h++){var f=i[h].start,c=i[h].end;if(e+r>=f&&e<c)u=f,l=(d=c)-e;else if(e+r<f){o=f;break}}return{len:l,start:u||0,end:d||0,nextStart:o}},t.getBuffered=function(t){try{return t.buffered}catch(t){return o.b.log("failed to get media.buffered",t),it}},t}(),nt=function(t,e,r,i,a,n){void 0===i&&(i=0),void 0===a&&(a=-1),void 0===n&&(n=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing={start:0,executeStart:0,executeEnd:0,end:0},this.buffering={audio:{start:0,executeStart:0,executeEnd:0,end:0},video:{start:0,executeStart:0,executeEnd:0,end:0},audiovideo:{start:0,executeStart:0,executeEnd:0,end:0}},this.level=t,this.sn=e,this.id=r,this.size=i,this.part=a,this.partial=n};function st(t,e){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}function ot(t,e){for(var r=e.fragments,i=0,a=r.length;i<a;i++)st(r[i],t);e.fragmentHint&&st(e.fragmentHint,t),e.alignedSliding=!0}function lt(t,e,r){e&&(function(t,e,r){if(function(t,e,r){return!(!e.details||!(r.endCC>r.startCC||t&&t.cc<r.startCC))}(t,r,e)){var i=function(t,e){var r=t.fragments,i=e.fragments;if(i.length&&r.length){var a=function(t,e){for(var r=null,i=0,a=t.length;i<a;i++){var n=t[i];if(n&&n.cc===e){r=n;break}}return r}(r,i[0].cc);if(a&&(!a||a.startPTS))return a;o.b.log("No frag in previous level to align on")}else o.b.log("No fragments to align")}(r.details,e);i&&Object(a.a)(i.start)&&(o.b.log("Adjusting PTS using last level due to CC increase within current level "+e.url),ot(i.start,e))}}(t,r,e),!r.alignedSliding&&e.details&&function(t,e){if(e.fragments.length&&t.hasProgramDateTime&&e.hasProgramDateTime){var r=e.fragments[0].programDateTime,i=t.fragments[0].programDateTime,n=(i-r)/1e3+e.fragments[0].start;n&&Object(a.a)(n)&&(o.b.log("Adjusting PTS using programDateTime delta "+(i-r)+"ms, sliding:"+n.toFixed(3)+" "+t.url+" "),ot(n,t))}}(r,e.details),r.alignedSliding||!e.details||r.skippedSegments||W(e.details,r))}var ut=function(t,e){for(var r=0,i=t.length-1,a=null,n=null;r<=i;){var s=e(n=t[a=(r+i)/2|0]);if(s>0)r=a+1;else{if(!(s<0))return n;i=a-1}}return null};function dt(t,e,r){void 0===t&&(t=0),void 0===e&&(e=0);var i=Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=t?1:r.start-i>t&&r.start?-1:0}function ht(t,e,r){var i=1e3*Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>t}function ft(t){var e="function"==typeof Map?new Map:void 0;return(ft=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return ct(t,arguments,pt(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),gt(i,t)})(t)}function ct(t,e,r){return(ct=vt()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return r&&gt(a,r.prototype),a}).apply(null,arguments)}function vt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function gt(t,e){return(gt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function pt(t){return(pt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var mt=Math.pow(2,17),yt=function(){function t(t){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=t}var e=t.prototype;return e.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},e.abort=function(){this.loader&&this.loader.abort()},e.load=function(t,e){var r=this,i=t.url;if(!i)return Promise.reject(new Tt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,networkDetails:null},"Fragment does not have a "+(i?"part list":"url")));this.abort();var a=this.config,n=a.fLoader,o=a.loader;return new Promise((function(i,l){r.loader&&r.loader.destroy();var u=r.loader=t.loader=n?new n(a):new o(a),d=bt(t),h={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout,highWaterMark:mt};t.stats=u.stats,u.load(d,h,{onSuccess:function(e,a,n,s){r.resetLoader(t,u),i({frag:t,part:null,payload:e.data,networkDetails:s})},onError:function(e,i,a){r.resetLoader(t,u),l(new Tt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,response:e,networkDetails:a}))},onAbort:function(e,i,a){r.resetLoader(t,u),l(new Tt({type:s.b.NETWORK_ERROR,details:s.a.INTERNAL_ABORTED,fatal:!1,frag:t,networkDetails:a}))},onTimeout:function(e,i,a){r.resetLoader(t,u),l(new Tt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,networkDetails:a}))},onProgress:function(r,i,a,n){e&&e({frag:t,part:null,payload:a,networkDetails:n})}})}))},e.loadPart=function(t,e,r){var i=this;this.abort();var a=this.config,n=a.fLoader,o=a.loader;return new Promise((function(l,u){i.loader&&i.loader.destroy();var d=i.loader=t.loader=n?new n(a):new o(a),h=bt(t,e),f={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout,highWaterMark:mt};e.stats=d.stats,d.load(h,f,{onSuccess:function(a,n,s,o){i.resetLoader(t,d),i.updateStatsFromPart(t,e);var u={frag:t,part:e,payload:a.data,networkDetails:o};r(u),l(u)},onError:function(r,a,n){i.resetLoader(t,d),u(new Tt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,part:e,response:r,networkDetails:n}))},onAbort:function(r,a,n){t.stats.aborted=e.stats.aborted,i.resetLoader(t,d),u(new Tt({type:s.b.NETWORK_ERROR,details:s.a.INTERNAL_ABORTED,fatal:!1,frag:t,part:e,networkDetails:n}))},onTimeout:function(r,a,n){i.resetLoader(t,d),u(new Tt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,part:e,networkDetails:n}))}})}))},e.updateStatsFromPart=function(t,e){var r=t.stats,i=e.stats,a=i.total;if(r.loaded+=i.loaded,a){var n=Math.round(t.duration/e.duration),s=Math.min(Math.round(r.loaded/a),n),o=(n-s)*Math.round(r.loaded/s);r.total=r.loaded+o}else r.total=Math.max(r.loaded,r.total);var l=r.loading,u=i.loading;l.start?l.first+=u.first-u.start:(l.start=u.start,l.first=u.first),l.end=u.end},e.resetLoader=function(t,e){t.loader=null,this.loader===e&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),e.destroy()},t}();function bt(t,e){void 0===e&&(e=null);var r=e||t,i={frag:t,part:e,responseType:"arraybuffer",url:r.url,headers:{},rangeStart:0,rangeEnd:0},n=r.byteRangeStartOffset,s=r.byteRangeEndOffset;return Object(a.a)(n)&&Object(a.a)(s)&&(i.rangeStart=n,i.rangeEnd=s),i}var Tt=function(t){var e,r;function i(e){for(var r,i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return(r=t.call.apply(t,[this].concat(a))||this).data=void 0,r.data=e,r}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,gt(e,r),i}(ft(Error)),Et=r(14),St=function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+","+t.end(i).toFixed(3)+"]";return e};function Lt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function At(t,e){return(At=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Rt="STOPPED",Dt="IDLE",_t="KEY_LOADING",kt="FRAG_LOADING",xt="FRAG_LOADING_WAITING_RETRY",wt="PARSING",Ct="PARSED",Ot="BACKTRACKING",It="ENDED",Pt="ERROR",Ft="WAITING_LEVEL",Mt=function(t){var e,r;function i(e,r,i){var a;return(a=t.call(this)||this).hls=void 0,a.fragPrevious=null,a.fragCurrent=null,a.fragmentTracker=void 0,a.transmuxer=null,a._state=Rt,a.media=void 0,a.mediaBuffer=void 0,a.config=void 0,a.bitrateTest=!1,a.lastCurrentTime=0,a.nextLoadPosition=0,a.startPosition=0,a.loadedmetadata=!1,a.fragLoadError=0,a.retryDate=0,a.levels=null,a.fragmentLoader=void 0,a.levelLastLoaded=null,a.startFragRequested=!1,a.decrypter=void 0,a.initPTS=[],a.onvseeking=null,a.onvended=null,a.logPrefix="",a.log=void 0,a.warn=void 0,a.logPrefix=i,a.log=o.b.log.bind(o.b,i+":"),a.warn=o.b.warn.bind(o.b,i+":"),a.hls=e,a.fragmentLoader=new yt(e.config),a.fragmentTracker=r,a.config=e.config,a.decrypter=new Et.a(e,e.config),e.on(n.a.KEY_LOADED,a.onKeyLoaded,function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(a)),a}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,At(e,r);var u,d,h=i.prototype;return h.doTick=function(){this.onTickEnd()},h.onTickEnd=function(){},h.startLoad=function(t){},h.stopLoad=function(){this.fragmentLoader.abort();var t=this.fragCurrent;t&&this.fragmentTracker.removeFragment(t),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=Rt},h._streamEnded=function(t,e){var r=this.fragCurrent,i=this.fragmentTracker;if(!e.live&&r&&r.sn>=e.endSN&&!t.nextStart){var a=e.partList;if(null!=a&&a.length){var n=a[a.length-1];return at.isBuffered(this.media,n.start+n.duration/2)}var s=i.getState(r);return s===Q.PARTIAL||s===Q.OK}return!1},h.onMediaAttached=function(t,e){var r=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);var i=this.config;this.levels&&i.autoStartLoad&&this.state===Rt&&this.startLoad(i.startPosition)},h.onMediaDetaching=function(){var t=this.media;null!=t&&t.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},h.onMediaSeeking=function(){var t=this.config,e=this.fragCurrent,r=this.media,i=this.mediaBuffer,n=this.state,s=r?r.currentTime:0,o=at.bufferInfo(i||r,s,t.maxBufferHole);if(this.log("media seeking to "+(Object(a.a)(s)?s.toFixed(3):s)+", state: "+n),n===It)this.resetLoadingState();else if(e&&!o.len){var l=t.maxFragLookUpTolerance,u=e.start-l,d=s>e.start+e.duration+l;(s<u||d)&&(d&&e.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),e.loader.abort()),this.resetLoadingState())}r&&(this.lastCurrentTime=s),this.loadedmetadata||o.len||(this.nextLoadPosition=this.startPosition=s),this.tickImmediate()},h.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},h.onKeyLoaded=function(t,e){if(this.state===_t&&e.frag===this.fragCurrent&&this.levels){this.state=Dt;var r=this.levels[e.frag.level].details;r&&this.loadFragment(e.frag,r,e.frag.start)}},h.onHandlerDestroying=function(){this.stopLoad(),t.prototype.onHandlerDestroying.call(this)},h.onHandlerDestroyed=function(){this.state=Rt,this.hls.off(n.a.KEY_LOADED,this.onKeyLoaded,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.fragmentLoader=this.fragmentTracker=null,t.prototype.onHandlerDestroyed.call(this)},h.loadKey=function(t,e){this.log("Loading key for "+t.sn+" of ["+e.startSN+"-"+e.endSN+"], "+("[stream-controller]"===this.logPrefix?"level":"track")+" "+t.level),this.state=_t,this.fragCurrent=t,this.hls.trigger(n.a.KEY_LOADING,{frag:t})},h.loadFragment=function(t,e,r){this._loadFragForPlayback(t,e,r)},h._loadFragForPlayback=function(t,e,r){var i=this;this._doFragLoad(t,e,r,(function(e){if(i.fragContextChanged(t))return i.warn("Fragment "+t.sn+(e.part?" p: "+e.part.index:"")+" of level "+t.level+" was dropped during download."),void i.fragmentTracker.removeFragment(t);t.stats.chunkCount++,i._handleFragmentLoadProgress(e)})).then((function(e){if(e){i.fragLoadError=0;var r=i.state;if(!i.fragContextChanged(t))return"payload"in e&&(i.log("Loaded fragment "+t.sn+" of level "+t.level),i.hls.trigger(n.a.FRAG_LOADED,e),i.state===Ot)?(i.fragmentTracker.backtrack(t,e),void i.resetFragmentLoading(t)):void i._handleFragmentLoadComplete(e);(r===kt||r===Ot||!i.fragCurrent&&r===wt)&&(i.fragmentTracker.removeFragment(t),i.state=Dt)}})).catch((function(e){i.warn(e),i.resetFragmentLoading(t)}))},h.flushMainBuffer=function(t,e,r){if(void 0===r&&(r=null),t-e){var i={startOffset:t,endOffset:e,type:r};this.fragLoadError=0,this.hls.trigger(n.a.BUFFER_FLUSHING,i)}},h._loadInitSegment=function(t){var e=this;this._doFragLoad(t).then((function(r){if(!r||e.fragContextChanged(t)||!e.levels)throw new Error("init load aborted");return r})).then((function(r){var i=e.hls,a=r.payload,s=t.decryptdata;if(a&&a.byteLength>0&&s&&s.key&&s.iv&&"AES-128"===s.method){var o=self.performance.now();return e.decrypter.webCryptoDecrypt(new Uint8Array(a),s.key.buffer,s.iv.buffer).then((function(e){var a=self.performance.now();return i.trigger(n.a.FRAG_DECRYPTED,{frag:t,payload:e,stats:{tstart:o,tdecrypt:a}}),r.payload=e,r}))}return r})).then((function(r){var i=e.fragCurrent,a=e.hls,s=e.levels;if(!s)throw new Error("init load aborted, missing levels");s[t.level].details;var o=t.stats;e.state=Dt,e.fragLoadError=0,t.data=new Uint8Array(r.payload),o.parsing.start=o.buffering.start=self.performance.now(),o.parsing.end=o.buffering.end=self.performance.now(),r.frag===i&&a.trigger(n.a.FRAG_BUFFERED,{stats:o,frag:i,part:null,id:t.type}),e.tick()})).catch((function(r){e.warn(r),e.resetFragmentLoading(t)}))},h.fragContextChanged=function(t){var e=this.fragCurrent;return!t||!e||t.level!==e.level||t.sn!==e.sn||t.urlId!==e.urlId},h.fragBufferedComplete=function(t,e){var r=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+t.type+" sn: "+t.sn+(e?" part: "+e.index:"")+" of "+("[stream-controller]"===this.logPrefix?"level":"track")+" "+t.level+" "+St(at.getBuffered(r))),this.state=Dt,this.tick()},h._handleFragmentLoadComplete=function(t){var e=this.transmuxer;if(e){var r=t.frag,i=t.part,a=t.partsLoaded,n=!a||0===a.length||a.some((function(t){return!t})),s=new nt(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!n);e.flush(s)}},h._handleFragmentLoadProgress=function(t){},h._doFragLoad=function(t,e,r,i){var s=this;if(void 0===r&&(r=null),!this.levels)throw new Error("frag load aborted, missing levels");if(r=Math.max(t.start,r||0),this.config.lowLatencyMode&&e){var o=e.partList;if(o&&i){r>t.end&&e.fragmentHint&&(t=e.fragmentHint);var l=this.getNextPart(o,t,r);if(l>-1){var u=o[l];return this.log("Loading part sn: "+t.sn+" p: "+u.index+" cc: "+t.cc+" of playlist ["+e.startSN+"-"+e.endSN+"] parts [0-"+l+"-"+(o.length-1)+"] "+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),this.nextLoadPosition=u.start+u.duration,this.state=kt,this.hls.trigger(n.a.FRAG_LOADING,{frag:t,part:o[l],targetBufferTime:r}),this.doFragPartsLoad(t,o,l,i).catch((function(t){return s.handleFragLoadError(t)}))}if(!t.url||this.loadedEndOfParts(o,r))return Promise.resolve(null)}}return this.log("Loading fragment "+t.sn+" cc: "+t.cc+" "+(e?"of ["+e.startSN+"-"+e.endSN+"] ":"")+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),Object(a.a)(t.sn)&&!this.bitrateTest&&(this.nextLoadPosition=t.start+t.duration),this.state=kt,this.hls.trigger(n.a.FRAG_LOADING,{frag:t,targetBufferTime:r}),this.fragmentLoader.load(t,i).catch((function(t){return s.handleFragLoadError(t)}))},h.doFragPartsLoad=function(t,e,r,i){var a=this;return new Promise((function(s,o){var l=[];!function r(u){var d=e[u];a.fragmentLoader.loadPart(t,d,i).then((function(i){l[d.index]=i;var o=i.part;a.hls.trigger(n.a.FRAG_LOADED,i);var h=e[u+1];if(!h||h.fragment!==t)return s({frag:t,part:o,partsLoaded:l});r(u+1)})).catch(o)}(r)}))},h.handleFragLoadError=function(t){var e=t.data;return e&&e.details===s.a.INTERNAL_ABORTED?this.handleFragLoadAborted(e.frag,e.part):this.hls.trigger(n.a.ERROR,e),null},h._handleTransmuxerFlush=function(t){var e=this.getCurrentContext(t);if(e&&this.state===wt){var r=e.frag,i=e.part,a=e.level,n=self.performance.now();r.stats.parsing.end=n,i&&(i.stats.parsing.end=n),this.updateLevelTiming(r,i,a,t.partial)}else this.fragCurrent||(this.state=Dt)},h.getCurrentContext=function(t){var e=this.levels,r=t.level,i=t.sn,a=t.part;if(!e||!e[r])return this.warn("Levels object was unset while buffering fragment "+i+" of level "+r+". The current chunk will not be buffered."),null;var n=e[r],s=a>-1?function(t,e,r){if(!t||!t.details)return null;var i=t.details.partList;if(i)for(var a=i.length;a--;){var n=i[a];if(n.index===r&&n.fragment.sn===e)return n}return null}(n,i,a):null,o=s?s.fragment:function(t,e,r){if(!t||!t.details)return null;var i=t.details,a=i.fragments[e-i.startSN];return a||((a=i.fragmentHint)&&a.sn===e?a:e<i.startSN&&r&&r.sn===e?r:null)}(n,i,this.fragCurrent);return o?{frag:o,part:s,level:n}:null},h.bufferFragmentData=function(t,e,r,i){if(t&&this.state===wt){var a=t.data1,s=t.data2,o=a;if(a&&s&&(o=Object(l.a)(a,s)),o&&o.length){var u={type:t.type,frag:e,part:r,chunkMeta:i,parent:e.type,data:o};this.hls.trigger(n.a.BUFFER_APPENDING,u),t.dropped&&t.independent&&!r&&this.flushBufferGap(e)}}},h.flushBufferGap=function(t){var e=this.media;if(e)if(at.isBuffered(e,e.currentTime)){var r=e.currentTime,i=at.bufferInfo(e,r,0),a=t.duration,n=Math.min(2*this.config.maxFragLookUpTolerance,.25*a),s=Math.max(Math.min(t.start-n,i.end-n),r+n);t.start-s>n&&this.flushMainBuffer(s,t.start)}else this.flushMainBuffer(0,t.start)},h.getFwdBufferInfo=function(t,e){var r=this.config,i=this.getLoadPosition();if(!Object(a.a)(i))return null;var n=at.bufferInfo(t,i,r.maxBufferHole);if(0===n.len&&void 0!==n.nextStart){var s=this.fragmentTracker.getBufferedFrag(i,e);if(s&&n.nextStart<s.end)return at.bufferInfo(t,i,Math.max(n.nextStart,r.maxBufferHole))}return n},h.getMaxBufferLength=function(t){var e,r=this.config;return e=t?Math.max(8*r.maxBufferSize/t,r.maxBufferLength):r.maxBufferLength,Math.min(e,r.maxMaxBufferLength)},h.reduceMaxBufferLength=function(t){var e=this.config,r=t||e.maxBufferLength;return e.maxMaxBufferLength>=r&&(e.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+e.maxMaxBufferLength+"s"),!0)},h.getNextFragment=function(t,e){var r,i,a=e.fragments,n=a.length;if(!n)return null;var s,o=this.config,l=a[0].start;if(e.live){var u=o.initialLiveManifestSize;if(n<u)return this.warn("Not enough fragments to start playback (have: "+n+", need: "+u+")"),null;e.PTSKnown||this.startFragRequested||-1!==this.startPosition||(s=this.getInitialLiveFragment(e,a),this.startPosition=s?this.hls.liveSyncPosition||s.start:t)}else t<=l&&(s=a[0]);if(!s){var d=o.lowLatencyMode?e.partEnd:e.fragmentEnd;s=this.getFragmentAtPosition(t,d,e)}return null===(r=s)||void 0===r||!r.initSegment||null!==(i=s)&&void 0!==i&&i.initSegment.data||this.bitrateTest||(s=s.initSegment),s},h.getNextPart=function(t,e,r){for(var i=-1,a=!1,n=!0,s=0,o=t.length;s<o;s++){var l=t[s];if(n=n&&!l.independent,i>-1&&r<l.start)break;var u=l.loaded;!u&&(a||l.independent||n)&&l.fragment===e&&(i=s),a=u}return i},h.loadedEndOfParts=function(t,e){var r=t[t.length-1];return r&&e>r.start&&r.loaded},h.getInitialLiveFragment=function(t,e){var r=this.fragPrevious,i=null;if(r){if(t.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+r.programDateTime),i=function(t,e,r){if(null===e||!Array.isArray(t)||!t.length||!Object(a.a)(e))return null;if(e<(t[0].programDateTime||0))return null;if(e>=(t[t.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<t.length;++i){var n=t[i];if(ht(e,r,n))return n}return null}(e,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){var n=r.sn+1;if(n>=t.startSN&&n<=t.endSN){var s=e[n-t.startSN];r.cc===s.cc&&(i=s,this.log("Live playlist, switching playlist, load frag with next SN: "+i.sn))}i||(i=function(t,e){return ut(t,(function(t){return t.cc<e?1:t.cc>e?-1:0}))}(e,r.cc))&&this.log("Live playlist, switching playlist, load frag with same CC: "+i.sn)}}else{var o=this.hls.liveSyncPosition;null!==o&&(i=this.getFragmentAtPosition(o,this.bitrateTest?t.fragmentEnd:t.edge,t))}return i},h.getFragmentAtPosition=function(t,e,r){var i,a=this.config,n=this.fragPrevious,s=r.fragments,o=r.endSN,l=r.fragmentHint,u=a.maxFragLookUpTolerance,d=!!(a.lowLatencyMode&&r.partList&&l);if(d&&l&&!this.bitrateTest&&(s=s.concat(l),o=l.sn),i=t<e?function(t,e,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var a=null;return t?a=e[t.sn-e[0].sn+1]||null:0===r&&0===e[0].start&&(a=e[0]),a&&0===dt(r,i,a)?a:ut(e,dt.bind(null,r,i))||a}(n,s,t,t>e-u?0:u):s[s.length-1],i){var h=i.sn-r.startSN,f=n&&i.level===n.level,c=s[h+1];if(this.fragmentTracker.getState(i)===Q.BACKTRACKED){i=null;for(var v=h;s[v]&&this.fragmentTracker.getState(s[v])===Q.BACKTRACKED;)i=n?s[v--]:s[--v];i||(i=c)}else n&&i.sn===n.sn&&!d&&f&&(i.sn<o&&this.fragmentTracker.getState(c)!==Q.OK?(this.log("SN "+i.sn+" just loaded, load next one: "+c.sn),i=c):i=null)}return i},h.synchronizeToLiveEdge=function(t){var e=this.config,r=this.media;if(r){var i=this.hls.liveSyncPosition,a=r.currentTime,n=t.fragments[0].start,s=t.edge,o=a>=n-e.maxFragLookUpTolerance&&a<=s;if(null!==i&&r.duration>i&&(a<i||!o)){var l=void 0!==e.liveMaxLatencyDuration?e.liveMaxLatencyDuration:e.liveMaxLatencyDurationCount*t.targetduration;(!o&&r.readyState<4||a<s-l)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn("Playback: "+a.toFixed(3)+" is located too far from the end of live sliding playlist: "+s+", reset currentTime to : "+i.toFixed(3)),r.currentTime=i))}}},h.alignPlaylists=function(t,e){var r=this.levels,i=this.levelLastLoaded,n=this.fragPrevious,s=null!==i?r[i]:null,o=t.fragments.length;if(!o)return this.warn("No fragments in live playlist"),0;var l=t.fragments[0].start,u=!e,d=t.alignedSliding&&Object(a.a)(l);if(u||!d&&!l){lt(n,s,t);var h=t.fragments[0].start;return this.log("Live playlist sliding: "+h.toFixed(2)+" start-sn: "+(e?e.startSN:"na")+"->"+t.startSN+" prev-sn: "+(n?n.sn:"na")+" fragments: "+o),h}return l},h.waitForCdnTuneIn=function(t){return t.live&&t.canBlockReload&&t.tuneInGoal>Math.max(t.partHoldBack,3*t.partTarget)},h.setStartPosition=function(t,e){var r=this.startPosition;if(r<e&&(r=-1),-1===r||-1===this.lastCurrentTime){var i=t.startTimeOffset;Object(a.a)(i)?(r=e+i,i<0&&(r+=t.totalduration),r=Math.min(Math.max(e,r),e+t.totalduration),this.log("Start time offset "+i+" found in playlist, adjust startPosition to "+r),this.startPosition=r):t.live?r=this.hls.liveSyncPosition||e:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r},h.getLoadPosition=function(){var t=this.media,e=0;return this.loadedmetadata&&t?e=t.currentTime:this.nextLoadPosition&&(e=this.nextLoadPosition),e},h.handleFragLoadAborted=function(t,e){this.transmuxer&&"initSegment"!==t.sn&&t.stats.aborted&&(this.warn("Fragment "+t.sn+(e?" part"+e.index:"")+" of level "+t.level+" was aborted"),this.resetFragmentLoading(t))},h.resetFragmentLoading=function(t){this.fragCurrent&&this.fragContextChanged(t)||(this.state=Dt)},h.onFragmentOrKeyLoadError=function(t,e){if(!e.fatal){var r=e.frag;if(r&&r.type===t){this.fragCurrent;var i=this.config;if(this.fragLoadError+1<=i.fragLoadingMaxRetry){if(this.resetLiveStartWhenNotLoaded(r.level))return;var a=Math.min(Math.pow(2,this.fragLoadError)*i.fragLoadingRetryDelay,i.fragLoadingMaxRetryTimeout);this.warn("Fragment "+r.sn+" of "+t+" "+r.level+" failed to load, retrying in "+a+"ms"),this.retryDate=self.performance.now()+a,this.fragLoadError++,this.state=xt}else e.levelRetry?(t===_.b.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=Dt):(o.b.error(e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.hls.stopLoad(),this.state=Pt)}}},h.afterBufferFlushed=function(t,e,r){if(t){var i=at.getBuffered(t);this.fragmentTracker.detectEvictedFragments(e,i,r),this.state===It&&this.resetLoadingState()}},h.resetLoadingState=function(){this.fragCurrent=null,this.fragPrevious=null,this.state=Dt},h.resetLiveStartWhenNotLoaded=function(t){if(!this.loadedmetadata){this.startFragRequested=!1;var e=this.levels?this.levels[t].details:null;if(null!=e&&e.live)return this.startPosition=-1,this.setStartPosition(e,0),this.resetLoadingState(),!0;this.nextLoadPosition=this.startPosition}return!1},h.updateLevelTiming=function(t,e,r,i){var a=this,s=r.details;Object.keys(t.elementaryStreams).reduce((function(e,o){var l=t.elementaryStreams[o];if(l){var u=l.endPTS-l.startPTS;if(u<=0)return a.warn("Could not parse fragment "+t.sn+" "+o+" duration reliably ("+u+") resetting transmuxer to fallback to playlist timing"),a.resetTransmuxer(),e||!1;var d=i?0:K(s,t,l.startPTS,l.endPTS,l.startDTS,l.endDTS);return a.hls.trigger(n.a.LEVEL_PTS_UPDATED,{details:s,level:r,drift:d,type:o,frag:t,start:l.startPTS,end:l.endPTS}),!0}return e}),!1)?(this.state=Ct,this.hls.trigger(n.a.FRAG_PARSED,{frag:t,part:e})):this.resetLoadingState()},h.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},u=i,(d=[{key:"state",get:function(){return this._state},set:function(t){var e=this._state;e!==t&&(this._state=t,this.log(e+"->"+t))}}])&&Lt(u.prototype,d),i}(rt);function Nt(){return self.MediaSource||self.WebKitMediaSource}function Bt(){return self.SourceBuffer||self.WebKitSourceBuffer}var Ut=r(17),Gt=r(9),jt=r(13),Ht=Nt()||{isTypeSupported:function(){return!1}},Kt=function(){function t(t,e,r,i){var a=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.hls=t,this.id=e,this.onTransmuxComplete=r,this.onFlush=i;var l=t.config,u=function(e,r){(r=r||{}).frag=a.frag,r.id=a.id,t.trigger(e,r)};this.observer=new jt.EventEmitter,this.observer.on(n.a.FRAG_DECRYPTED,u),this.observer.on(n.a.ERROR,u);var d={mp4:Ht.isTypeSupported("video/mp4"),mpeg:Ht.isTypeSupported("audio/mpeg"),mp3:Ht.isTypeSupported('audio/mp4; codecs="mp3"')},h=navigator.vendor;if(l.enableWorker&&"undefined"!=typeof Worker){var f;o.b.log("demuxing in webworker");try{f=this.worker=Ut(18),this.onwmsg=this.onWorkerMessage.bind(this),f.addEventListener("message",this.onwmsg),f.onerror=function(e){t.trigger(n.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",error:new Error(e.message+"  ("+e.filename+":"+e.lineno+")")})},f.postMessage({cmd:"init",typeSupported:d,vendor:h,id:e,config:JSON.stringify(l)})}catch(t){o.b.warn("Error in worker:",t),o.b.error("Error while initializing DemuxerWorker, fallback to inline"),f&&self.URL.revokeObjectURL(f.objectURL),this.transmuxer=new Gt.c(this.observer,d,l,h,e),this.worker=null}}else this.transmuxer=new Gt.c(this.observer,d,l,h,e)}var e=t.prototype;return e.destroy=function(){var t=this.worker;if(t)t.removeEventListener("message",this.onwmsg),t.terminate(),this.worker=null;else{var e=this.transmuxer;e&&(e.destroy(),this.transmuxer=null)}var r=this.observer;r&&r.removeAllListeners(),this.observer=null},e.push=function(t,e,r,i,a,n,s,l,u,d){var h,f,c=this;u.transmuxing.start=self.performance.now();var v=this.transmuxer,g=this.worker,p=n?n.start:a.start,m=a.decryptdata,y=this.frag,b=!(y&&a.cc===y.cc),T=!(y&&u.level===y.level),E=y?u.sn-y.sn:-1,S=this.part?u.part-this.part.index:1,L=!T&&(1===E||0===E&&1===S),A=self.performance.now();(T||E||0===a.stats.parsing.start)&&(a.stats.parsing.start=A),!n||!S&&L||(n.stats.parsing.start=A);var R=!(y&&(null===(h=a.initSegment)||void 0===h?void 0:h.url)===(null===(f=y.initSegment)||void 0===f?void 0:f.url)),D=new Gt.b(b,L,l,T,p,R);if(!L||b||R){o.b.log("[transmuxer-interface, "+a.type+"]: Starting new transmux session for sn: "+u.sn+" p: "+u.part+" level: "+u.level+" id: "+u.id+"\n        discontinuity: "+b+"\n        trackSwitch: "+T+"\n        contiguous: "+L+"\n        accurateTimeOffset: "+l+"\n        timeOffset: "+p+"\n        initSegmentChange: "+R);var _=new Gt.a(r,i,e,s,d);this.configureTransmuxer(_)}if(this.frag=a,this.part=n,g)g.postMessage({cmd:"demux",data:t,decryptdata:m,chunkMeta:u,state:D},t instanceof ArrayBuffer?[t]:[]);else if(v){var k=v.push(t,m,u,D);Object(Gt.d)(k)?k.then((function(t){c.handleTransmuxComplete(t)})):this.handleTransmuxComplete(k)}},e.flush=function(t){var e=this;t.transmuxing.start=self.performance.now();var r=this.transmuxer,i=this.worker;if(i)i.postMessage({cmd:"flush",chunkMeta:t});else if(r){var a=r.flush(t);Object(Gt.d)(a)?a.then((function(r){e.handleFlushResult(r,t)})):this.handleFlushResult(a,t)}},e.handleFlushResult=function(t,e){var r=this;t.forEach((function(t){r.handleTransmuxComplete(t)})),this.onFlush(e)},e.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":self.URL.revokeObjectURL(this.worker.objectURL);break;case"transmuxComplete":this.handleTransmuxComplete(e.data);break;case"flush":this.onFlush(e.data);break;default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},e.configureTransmuxer=function(t){var e=this.worker,r=this.transmuxer;e?e.postMessage({cmd:"configure",config:t}):r&&r.configure(t)},e.handleTransmuxComplete=function(t){t.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(t)},t}(),Vt=function(){function t(t,e,r,i){this.config=void 0,this.media=void 0,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=t,this.media=e,this.fragmentTracker=r,this.hls=i}var e=t.prototype;return e.destroy=function(){this.hls=this.fragmentTracker=this.media=null},e.poll=function(t){var e=this.config,r=this.media,i=this.stalled,a=r.currentTime,n=r.seeking,s=this.seeking&&!n,l=!this.seeking&&n;if(this.seeking=n,a===t){if((l||s)&&(this.stalled=null),!r.paused&&!r.ended&&0!==r.playbackRate&&at.getBuffered(r).length){var u=at.bufferInfo(r,a,0),d=u.len>0,h=u.nextStart||0;if(d||h){if(n){var f=u.len>2,c=!h||h-a>2&&!this.fragmentTracker.getPartialFragment(a);if(f||c)return;this.moved=!1}if(!this.moved&&null!==this.stalled){var v,g=Math.max(h,u.start||0)-a,p=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,m=(null==p||null===(v=p.details)||void 0===v?void 0:v.live)?2*p.details.targetduration:2;if(g>0&&g<=m)return void this._trySkipBufferHole(null)}var y=self.performance.now();if(null!==i){var b=y-i;!n&&b>=250&&this._reportStall(u.len);var T=at.bufferInfo(r,a,e.maxBufferHole);this._tryFixBufferStall(T,b)}else this.stalled=y}}}else if(this.moved=!0,null!==i){if(this.stallReported){var E=self.performance.now()-i;o.b.warn("playback not stuck anymore @"+a+", after "+Math.round(E)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}},e._tryFixBufferStall=function(t,e){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);n&&this._trySkipBufferHole(n)||t.len>r.maxBufferHole&&e>1e3*r.highBufferWatchdogPeriod&&(o.b.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},e._reportStall=function(t){var e=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,o.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer (buffer="+t+")"),e.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:t}))},e._trySkipBufferHole=function(t){for(var e=this.config,r=this.hls,i=this.media,a=i.currentTime,l=0,u=at.getBuffered(i),d=0;d<u.length;d++){var h=u.start(d);if(a+e.maxBufferHole>=l&&a<h){var f=Math.max(h+.05,i.currentTime+.1);return o.b.warn("skipping hole, adjusting currentTime from "+a+" to "+f),this.moved=!0,this.stalled=null,i.currentTime=f,t&&r.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+a+" to "+f,frag:t}),f}l=u.end(d)}return 0},e._tryNudgeBuffer=function(){var t=this.config,e=this.hls,r=this.media,i=r.currentTime,a=(this.nudgeRetry||0)+1;if(this.nudgeRetry=a,a<t.nudgeMaxRetry){var l=i+a*t.nudgeOffset;o.b.warn("Nudging 'currentTime' from "+i+" to "+l),r.currentTime=l,e.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else o.b.error("Playhead still not moving while enough data buffered @"+i+" after "+t.nudgeMaxRetry+" nudges"),e.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_STALLED_ERROR,fatal:!0})},t}();function Wt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Yt(t,e){return(Yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Xt=function(t){var e,r;function i(e,r){var i;return(i=t.call(this,e,r,"[stream-controller]")||this).audioCodecSwap=!1,i.gapController=null,i.level=-1,i._forceStartLoad=!1,i.altAudio=!1,i.audioOnly=!1,i.fragPlaying=null,i.onvplaying=null,i.onvseeked=null,i.fragLastKbps=0,i.stalled=!1,i.couldBacktrack=!1,i.audioCodecSwitch=!1,i.videoBuffer=null,i._registerListeners(),i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,Yt(e,r);var l,d,h=i.prototype;return h._registerListeners=function(){var t=this.hls;t.on(n.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(n.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(n.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(n.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(n.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(n.a.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.on(n.a.ERROR,this.onError,this),t.on(n.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.on(n.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(n.a.BUFFER_CREATED,this.onBufferCreated,this),t.on(n.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.on(n.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.on(n.a.FRAG_BUFFERED,this.onFragBuffered,this)},h._unregisterListeners=function(){var t=this.hls;t.off(n.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(n.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(n.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(n.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(n.a.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.off(n.a.ERROR,this.onError,this),t.off(n.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.off(n.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(n.a.BUFFER_CREATED,this.onBufferCreated,this),t.off(n.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.off(n.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.off(n.a.FRAG_BUFFERED,this.onFragBuffered,this)},h.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},h.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&-1===t&&(this.log("Override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=Dt,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this._forceStartLoad=!0,this.state=Rt},h.stopLoad=function(){this._forceStartLoad=!1,t.prototype.stopLoad.call(this)},h.doTick=function(){switch(this.state){case Dt:this.doTickIdle();break;case Ft:var t,e=this.levels,r=this.level,i=null==e||null===(t=e[r])||void 0===t?void 0:t.details;if(i&&(!i.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(i))break;this.state=Dt;break}break;case xt:var a,n=self.performance.now(),s=this.retryDate;(!s||n>=s||null!==(a=this.media)&&void 0!==a&&a.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.state=Dt)}this.onTickEnd()},h.onTickEnd=function(){t.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},h.doTickIdle=function(){var t,e,r=this.hls,i=this.levelLastLoaded,a=this.levels,s=this.media,o=r.config,l=r.nextLoadLevel;if(null!==i&&(s||!this.startFragRequested&&o.startFragPrefetch)&&(!this.altAudio||!this.audioOnly)&&a&&a[l]){var d=a[l];this.level=r.nextLoadLevel=l;var h=d.details;if(!h||this.state===Ft||h.live&&this.levelLastLoaded!==l)this.state=Ft;else{var f=this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:s,_.b.MAIN);if(null!==f&&!(f.len>=this.getMaxBufferLength(d.maxBitrate))){if(this._streamEnded(f,h)){var c={};return this.altAudio&&(c.type="video"),this.hls.trigger(n.a.BUFFER_EOS,c),void(this.state=It)}var v=f.end,g=this.getNextFragment(v,h);if(this.couldBacktrack&&!this.fragPrevious&&g&&"initSegment"!==g.sn){var p=g.sn-h.startSN;p>1&&(g=h.fragments[p-1],this.fragmentTracker.removeFragment(g))}if(g&&this.fragmentTracker.getState(g)===Q.OK&&this.nextLoadPosition>v){var m=this.audioOnly&&!this.altAudio?u.a.AUDIO:u.a.VIDEO;this.afterBufferFlushed(s,m,_.b.MAIN),g=this.getNextFragment(this.nextLoadPosition,h)}g&&(!g.initSegment||g.initSegment.data||this.bitrateTest||(g=g.initSegment),"identity"!==(null===(t=g.decryptdata)||void 0===t?void 0:t.keyFormat)||null!==(e=g.decryptdata)&&void 0!==e&&e.key?this.loadFragment(g,h,v):this.loadKey(g,h))}}}},h.loadFragment=function(e,r,i){var a,n=this.fragmentTracker.getState(e);if(this.fragCurrent=e,n===Q.BACKTRACKED){var s=this.fragmentTracker.getBacktrackData(e);if(s)return this._handleFragmentLoadProgress(s),void this._handleFragmentLoadComplete(s);n=Q.NOT_LOADED}n===Q.NOT_LOADED||n===Q.PARTIAL?"initSegment"===e.sn?this._loadInitSegment(e):this.bitrateTest?(e.bitrateTest=!0,this.log("Fragment "+e.sn+" of level "+e.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(e)):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i)):n===Q.APPENDING?this.reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e):0===(null===(a=this.media)||void 0===a?void 0:a.buffered.length)&&this.fragmentTracker.removeAllFragments()},h.getAppendedFrag=function(t){var e=this.fragmentTracker.getAppendedFrag(t,_.b.MAIN);return e&&"fragment"in e?e.fragment:e},h.getBufferedFrag=function(t){return this.fragmentTracker.getBufferedFrag(t,_.b.MAIN)},h.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.end+.5):null},h.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},h.nextLevelSwitch=function(){var t=this.levels,e=this.media;if(null!=e&&e.readyState){var r,i=this.getAppendedFrag(e.currentTime);if(i&&i.start>1&&this.flushMainBuffer(0,i.start-1),!e.paused&&t){var a=t[this.hls.nextLoadLevel],n=this.fragLastKbps;r=n&&this.fragCurrent?this.fragCurrent.duration*a.maxBitrate/(1e3*n)+1:0}else r=0;var s=this.getBufferedFrag(e.currentTime+r);if(s){var o=this.followingBufferedFrag(s);if(o){this.abortCurrentFrag();var l=o.maxStartPTS?o.maxStartPTS:o.start,u=o.duration,d=Math.max(s.end,l+Math.min(Math.max(u-this.config.maxFragLookUpTolerance,.5*u),.75*u));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}},h.abortCurrentFrag=function(){var t=this.fragCurrent;this.fragCurrent=null,null!=t&&t.loader&&t.loader.abort(),this.state===_t&&(this.state=Dt),this.nextLoadPosition=this.getLoadPosition()},h.flushMainBuffer=function(e,r){t.prototype.flushMainBuffer.call(this,e,r,this.altAudio?"video":null)},h.onMediaAttached=function(e,r){t.prototype.onMediaAttached.call(this,e,r);var i=r.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),i.addEventListener("playing",this.onvplaying),i.addEventListener("seeked",this.onvseeked),this.gapController=new Vt(this.config,i,this.fragmentTracker,this.hls)},h.onMediaDetaching=function(){var e=this.media;e&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),t.prototype.onMediaDetaching.call(this)},h.onMediaPlaying=function(){this.tick()},h.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:null;Object(a.a)(e)&&this.log("Media seeked to "+e.toFixed(3)),this.tick()},h.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(n.a.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=this.stalled=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null},h.onManifestParsed=function(t,e){var r,i,a,n=!1,s=!1;e.levels.forEach((function(t){(r=t.audioCodec)&&(-1!==r.indexOf("mp4a.40.2")&&(n=!0),-1!==r.indexOf("mp4a.40.5")&&(s=!0))})),this.audioCodecSwitch=n&&s&&!("function"==typeof(null==(a=Bt())||null===(i=a.prototype)||void 0===i?void 0:i.changeType)),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1},h.onLevelLoading=function(t,e){var r=this.levels;if(r&&this.state===Dt){var i=r[e.level];(!i.details||i.details.live&&this.levelLastLoaded!==e.level||this.waitForCdnTuneIn(i.details))&&(this.state=Ft)}},h.onLevelLoaded=function(t,e){var r,i=this.levels,a=e.level,s=e.details,o=s.totalduration;if(i){this.log("Level "+a+" loaded ["+s.startSN+","+s.endSN+"], cc ["+s.startCC+", "+s.endCC+"] duration:"+o);var l=this.fragCurrent;!l||this.state!==kt&&this.state!==xt||l.level!==e.level&&l.loader&&(this.state=Dt,l.loader.abort());var u=i[a],d=0;if(s.live||null!==(r=u.details)&&void 0!==r&&r.live){if(s.fragments[0]||(s.deltaUpdateFailed=!0),s.deltaUpdateFailed)return;d=this.alignPlaylists(s,u.details)}if(u.details=s,this.levelLastLoaded=a,this.hls.trigger(n.a.LEVEL_UPDATED,{details:s,level:a}),this.state===Ft){if(this.waitForCdnTuneIn(s))return;this.state=Dt}this.startFragRequested?s.live&&this.synchronizeToLiveEdge(s):this.setStartPosition(s,d),this.tick()}else this.warn("Levels were reset while loading level "+a)},h._handleFragmentLoadProgress=function(t){var e,r=t.frag,i=t.part,a=t.payload,n=this.levels;if(n){var s=n[r.level],o=s.details;if(o){var l=s.videoCodec,u=o.PTSKnown||!o.live,d=null===(e=r.initSegment)||void 0===e?void 0:e.data,h=this._getAudioCodec(s),f=this.transmuxer=this.transmuxer||new Kt(this.hls,_.b.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),c=i?i.index:-1,v=-1!==c,g=new nt(r.level,r.sn,r.stats.chunkCount,a.byteLength,c,v),p=this.initPTS[r.cc];f.push(a,d,h,l,r,i,o.totalduration,u,g,p)}else this.warn("Dropping fragment "+r.sn+" of level "+r.level+" after level details were reset")}else this.warn("Levels were reset while fragment load was in progress. Fragment "+r.sn+" of level "+r.level+" will not be buffered")},h.onAudioTrackSwitching=function(t,e){var r=this.altAudio,i=!!e.url,a=e.id;if(!i){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var s=this.fragCurrent;null!=s&&s.loader&&(this.log("Switching to main audio track, cancel main fragment load"),s.loader.abort()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var o=this.hls;r&&o.trigger(n.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),o.trigger(n.a.AUDIO_TRACK_SWITCHED,{id:a})}},h.onAudioTrackSwitched=function(t,e){var r=e.id,i=!!this.hls.audioTracks[r].url;if(i){var a=this.videoBuffer;a&&this.mediaBuffer!==a&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=a)}this.altAudio=i,this.tick()},h.onBufferCreated=function(t,e){var r,i,a=e.tracks,n=!1;for(var s in a){var o=a[s];if("main"===o.id){if(i=s,r=o,"video"===s){var l=a[s];l&&(this.videoBuffer=l.buffer)}}else n=!0}n&&r?(this.log("Alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},h.onFragBuffered=function(t,e){var r=e.frag,i=e.part;if(!r||r.type===_.b.MAIN){if(this.fragContextChanged(r))return this.warn("Fragment "+r.sn+(i?" p: "+i.index:"")+" of level "+r.level+" finished buffering, but was aborted. state: "+this.state),void(this.state===Ct&&(this.state=Dt));var a=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*a.total/(a.buffering.end-a.loading.first)),"initSegment"!==r.sn&&(this.fragPrevious=r),this.fragBufferedComplete(r,i)}},h.onError=function(t,e){switch(e.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:case s.a.KEY_LOAD_ERROR:case s.a.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(_.b.MAIN,e);break;case s.a.LEVEL_LOAD_ERROR:case s.a.LEVEL_LOAD_TIMEOUT:this.state!==Pt&&(e.fatal?(this.warn(""+e.details),this.state=Pt):e.levelRetry||this.state!==Ft||(this.state=Dt));break;case s.a.BUFFER_FULL_ERROR:if("main"===e.parent&&(this.state===wt||this.state===Ct)){var r=!0,i=this.getFwdBufferInfo(this.media,_.b.MAIN);i&&i.len>.5&&(r=!this.reduceMaxBufferLength(i.len)),r&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}}},h.checkBuffer=function(){var t=this.media,e=this.gapController;if(t&&e&&t.readyState){var r=at.getBuffered(t);!this.loadedmetadata&&r.length?(this.loadedmetadata=!0,this.seekToStartPos()):e.poll(this.lastCurrentTime),this.lastCurrentTime=t.currentTime}},h.onFragLoadEmergencyAborted=function(){this.state=Dt,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},h.onBufferFlushed=function(t,e){var r=e.type;if(r!==u.a.AUDIO||this.audioOnly&&!this.altAudio){var i=(r===u.a.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(i,r,_.b.MAIN)}},h.onLevelsUpdated=function(t,e){this.levels=e.levels},h.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},h.seekToStartPos=function(){var t=this.media,e=t.currentTime,r=this.startPosition;if(r>=0&&e<r){if(t.seeking)return void o.b.log("could not seek to "+r+", already seeking at "+e);var i=at.getBuffered(t),a=(i.length?i.start(0):0)-r;a>0&&(a<this.config.maxBufferHole||a<this.config.maxFragLookUpTolerance)&&(o.b.log("adjusting start position by "+a+" to match buffer start"),r+=a,this.startPosition=r),this.log("seek to target start position "+r+" from current time "+e),t.currentTime=r}},h._getAudioCodec=function(t){var e=this.config.defaultAudioCodec||t.audioCodec;return this.audioCodecSwap&&e&&(this.log("Swapping audio codec"),e=-1!==e.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),e},h._loadBitrateTestFrag=function(t){var e=this;this._doFragLoad(t).then((function(r){var i=e.hls;if(r&&!i.nextLoadLevel&&!e.fragContextChanged(t)){e.fragLoadError=0,e.state=Dt,e.startFragRequested=!1,e.bitrateTest=!1;var a=t.stats;a.parsing.start=a.parsing.end=a.buffering.start=a.buffering.end=self.performance.now(),i.trigger(n.a.FRAG_LOADED,r)}}))},h._handleTransmuxComplete=function(t){var e,r="main",i=this.hls,s=t.remuxResult,o=t.chunkMeta,l=this.getCurrentContext(o);if(!l)return this.warn("The loading context changed while buffering fragment "+o.sn+" of level "+o.level+". This chunk will not be buffered."),void this.resetLiveStartWhenNotLoaded(o.level);var d=l.frag,h=l.part,f=l.level,c=s.video,v=s.text,g=s.id3,p=s.initSegment,m=this.altAudio?void 0:s.audio;if(!this.fragContextChanged(d)){if(this.state=wt,p){p.tracks&&(this._bufferInitSegment(f,p.tracks,d,o),i.trigger(n.a.FRAG_PARSING_INIT_SEGMENT,{frag:d,id:r,tracks:p.tracks}));var y=p.initPTS,b=p.timescale;Object(a.a)(y)&&(this.initPTS[d.cc]=y,i.trigger(n.a.INIT_PTS_FOUND,{frag:d,id:r,initPTS:y,timescale:b}))}if(c&&!1!==s.independent){if(f.details){var T=c.startPTS,E=c.endPTS,S=c.startDTS,L=c.endDTS;if(h)h.elementaryStreams[c.type]={startPTS:T,endPTS:E,startDTS:S,endDTS:L};else if(c.firstKeyFrame&&c.independent&&(this.couldBacktrack=!0),c.dropped&&c.independent){if(this.getLoadPosition()+this.config.maxBufferHole<T)return void this.backtrack(d);d.setElementaryStreamInfo(c.type,d.start,E,d.start,L,!0)}d.setElementaryStreamInfo(c.type,T,E,S,L),this.bufferFragmentData(c,d,h,o)}}else if(!1===s.independent)return void this.backtrack(d);if(m){var A=m.startPTS,R=m.endPTS,D=m.startDTS,_=m.endDTS;h&&(h.elementaryStreams[u.a.AUDIO]={startPTS:A,endPTS:R,startDTS:D,endDTS:_}),d.setElementaryStreamInfo(u.a.AUDIO,A,R,D,_),this.bufferFragmentData(m,d,h,o)}if(null!=g&&null!==(e=g.samples)&&void 0!==e&&e.length){var k={frag:d,id:r,samples:g.samples};i.trigger(n.a.FRAG_PARSING_METADATA,k)}if(v){var x={frag:d,id:r,samples:v.samples};i.trigger(n.a.FRAG_PARSING_USERDATA,x)}}},h._bufferInitSegment=function(t,e,r,i){var a=this;if(this.state===wt){this.audioOnly=!!e.audio&&!e.video,this.altAudio&&!this.audioOnly&&delete e.audio;var s=e.audio,o=e.video,l=e.audiovideo;if(s){var u=t.audioCodec,d=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(u&&(u=-1!==u.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),1!==s.metadata.channelCount&&-1===d.indexOf("firefox")&&(u="mp4a.40.5")),-1!==d.indexOf("android")&&"audio/mpeg"!==s.container&&(u="mp4a.40.2",this.log("Android: force audio codec to "+u)),t.audioCodec&&t.audioCodec!==u&&this.log('Swapping manifest audio codec "'+t.audioCodec+'" for "'+u+'"'),s.levelCodec=u,s.id="main",this.log("Init audio buffer, container:"+s.container+", codecs[selected/level/parsed]=["+(u||"")+"/"+(t.audioCodec||"")+"/"+s.codec+"]")}o&&(o.levelCodec=t.videoCodec,o.id="main",this.log("Init video buffer, container:"+o.container+", codecs[level/parsed]=["+(t.videoCodec||"")+"/"+o.codec+"]")),l&&this.log("Init audiovideo buffer, container:"+l.container+", codecs[level/parsed]=["+(t.attrs.CODECS||"")+"/"+l.codec+"]"),this.hls.trigger(n.a.BUFFER_CODECS,e),Object.keys(e).forEach((function(t){var s=e[t].initSegment;null!=s&&s.byteLength&&a.hls.trigger(n.a.BUFFER_APPENDING,{type:t,data:s,frag:r,part:null,chunkMeta:i,parent:r.type})})),this.tick()}},h.backtrack=function(t){this.couldBacktrack=!0,this.resetTransmuxer(),this.flushBufferGap(t);var e=this.fragmentTracker.backtrack(t);this.fragPrevious=null,this.nextLoadPosition=t.start,e?this.resetFragmentLoading(t):this.state=Ot},h.checkFragmentChanged=function(){var t=this.media,e=null;if(t&&t.readyState>1&&!1===t.seeking){var r=t.currentTime;if(at.isBuffered(t,r)?e=this.getAppendedFrag(r):at.isBuffered(t,r+.1)&&(e=this.getAppendedFrag(r+.1)),e){var i=this.fragPlaying,a=e.level;i&&e.sn===i.sn&&i.level===a&&e.urlId===i.urlId||(this.hls.trigger(n.a.FRAG_CHANGED,{frag:e}),i&&i.level===a||this.hls.trigger(n.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=e)}}},l=i,(d=[{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"currentLevel",get:function(){var t=this.media;if(t){var e=this.getAppendedFrag(t.currentTime);if(e)return e.level}return-1}},{key:"nextBufferedFrag",get:function(){var t=this.media;if(t){var e=this.getAppendedFrag(t.currentTime);return this.followingBufferedFrag(e)}return null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}])&&Wt(l.prototype,d),i}(Mt),qt=function(){function t(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=t,this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=e,this.totalWeight_=r}var e=t.prototype;return e.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},e.getTotalWeight=function(){return this.totalWeight_},e.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);if(t)return this.estimate_/t}return this.estimate_},t}(),zt=function(){function t(t,e,r){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new qt(t),this.fast_=new qt(e)}var e=t.prototype;return e.update=function(t,e){var r=this.slow_,i=this.fast_;this.slow_.halfLife!==t&&(this.slow_=new qt(t,r.getEstimate(),r.getTotalWeight())),this.fast_.halfLife!==e&&(this.fast_=new qt(e,i.getEstimate(),i.getTotalWeight()))},e.sample=function(t,e){var r=(t=Math.max(t,this.minDelayMs_))/1e3,i=8*e/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},e.canEstimate=function(){var t=this.fast_;return t&&t.getTotalWeight()>=this.minWeight_},e.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},e.destroy=function(){},t}();function Qt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var $t=function(){function t(t){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=t;var e=t.config;this.bwEstimator=new zt(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate),this.registerListeners()}var e,r,i=t.prototype;return i.registerListeners=function(){var t=this.hls;t.on(n.a.FRAG_LOADING,this.onFragLoading,this),t.on(n.a.FRAG_LOADED,this.onFragLoaded,this),t.on(n.a.FRAG_BUFFERED,this.onFragBuffered,this),t.on(n.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(n.a.ERROR,this.onError,this)},i.unregisterListeners=function(){var t=this.hls;t.off(n.a.FRAG_LOADING,this.onFragLoading,this),t.off(n.a.FRAG_LOADED,this.onFragLoaded,this),t.off(n.a.FRAG_BUFFERED,this.onFragBuffered,this),t.off(n.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(n.a.ERROR,this.onError,this)},i.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},i.onFragLoading=function(t,e){var r,i=e.frag;i.type===_.b.MAIN&&(this.timer||(this.fragCurrent=i,this.partCurrent=null!=(r=e.part)?r:null,this.timer=self.setInterval(this.onCheck,100)))},i.onLevelLoaded=function(t,e){var r=this.hls.config;e.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)},i._abandonRulesCheck=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.autoLevelEnabled,s=r.config,l=r.media;if(t&&l){var u=e?e.stats:t.stats,d=e?e.duration:t.duration;if(u.aborted)return o.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);if(i&&!l.paused&&l.playbackRate&&l.readyState){var h=performance.now()-u.loading.start,f=Math.abs(l.playbackRate);if(!(h<=500*d/f)){var c=r.levels,v=r.minAutoLevel,g=c[t.level],p=u.total||Math.max(u.loaded,Math.round(d*g.maxBitrate/8)),m=Math.max(1,u.bwEstimate?u.bwEstimate/8:1e3*u.loaded/h),y=(p-u.loaded)/m,b=l.currentTime,T=(at.bufferInfo(l,b,s.maxBufferHole).end-b)/f;if(!(T>=2*d/f||y<=T)){var E,S=Number.POSITIVE_INFINITY;for(E=t.level-1;E>v&&!((S=d*c[E].maxBitrate/(6.4*m))<T);E--);if(!(S>=y)){var L=this.bwEstimator.getEstimate();o.b.warn("Fragment "+t.sn+(e?" part "+e.index:"")+" of level "+t.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+E+"\n      Current BW estimate: "+(Object(a.a)(L)?(L/1024).toFixed(3):"Unknown")+" Kb/s\n      Estimated load time for current fragment: "+y.toFixed(3)+" s\n      Estimated load time for the next fragment: "+S.toFixed(3)+" s\n      Time to underbuffer: "+T.toFixed(3)+" s"),r.nextLoadLevel=E,this.bwEstimator.sample(h,u.loaded),this.clearTimer(),t.loader&&(this.fragCurrent=this.partCurrent=null,t.loader.abort()),r.trigger(n.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:e,stats:u})}}}}}},i.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if(r.type===_.b.MAIN&&Object(a.a)(r.sn)){var s=i?i.stats:r.stats,o=i?i.duration:r.duration;if(this.clearTimer(),this.lastLoadedFragLevel=r.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var l=this.hls.levels[r.level],u=(l.loaded?l.loaded.bytes:0)+s.loaded,d=(l.loaded?l.loaded.duration:0)+o;l.loaded={bytes:u,duration:d},l.realBitrate=Math.round(8*u/d)}if(r.bitrateTest){var h={stats:s,frag:r,part:i,id:r.type};this.onFragBuffered(n.a.FRAG_BUFFERED,h),r.bitrateTest=!1}}},i.onFragBuffered=function(t,e){var r=e.frag,i=e.part,a=i?i.stats:r.stats;if(!a.aborted&&r.type===_.b.MAIN&&"initSegment"!==r.sn){var n=a.parsing.end-a.loading.start;this.bwEstimator.sample(n,a.loaded),a.bwEstimate=this.bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=n/1e3:this.bitrateTestDelay=0}},i.onError=function(t,e){switch(e.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},i.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},i.getNextABRAutoLevel=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.maxAutoLevel,a=r.config,n=r.minAutoLevel,s=r.media,l=e?e.duration:t?t.duration:0,u=s?s.currentTime:0,d=s&&0!==s.playbackRate?Math.abs(s.playbackRate):1,h=this.bwEstimator?this.bwEstimator.getEstimate():a.abrEwmaDefaultEstimate,f=(at.bufferInfo(s,u,a.maxBufferHole).end-u)/d,c=this.findBestLevel(h,n,i,f,a.abrBandWidthFactor,a.abrBandWidthUpFactor);if(c>=0)return c;o.b.trace((f?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var v=l?Math.min(l,a.maxStarvationDelay):a.maxStarvationDelay,g=a.abrBandWidthFactor,p=a.abrBandWidthUpFactor;if(!f){var m=this.bitrateTestDelay;m&&(v=(l?Math.min(l,a.maxLoadingDelay):a.maxLoadingDelay)-m,o.b.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*v)+" ms"),g=p=1)}return c=this.findBestLevel(h,n,i,f+v,g,p),Math.max(c,0)},i.findBestLevel=function(t,e,r,i,a,n){for(var s,l=this.fragCurrent,u=this.partCurrent,d=this.lastLoadedFragLevel,h=this.hls.levels,f=h[d],c=!(null==f||null===(s=f.details)||void 0===s||!s.live),v=null==f?void 0:f.codecSet,g=u?u.duration:l?l.duration:0,p=r;p>=e;p--){var m=h[p];if(m&&(!v||m.codecSet===v)){var y,b=m.details,T=(u?null==b?void 0:b.partTarget:null==b?void 0:b.averagetargetduration)||g;y=p<=d?a*t:n*t;var E=h[p].maxBitrate,S=E*T/y;if(o.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+p+"/"+Math.round(y)+"/"+E+"/"+T+"/"+i+"/"+S),y>E&&(!S||c&&!this.bitrateTestDelay||S<i))return p}}return-1},e=t,(r=[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this.bwEstimator;if(!(-1===t||e&&e.canEstimate()))return t;var r=this.getNextABRAutoLevel();return-1!==t&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}}])&&Qt(e.prototype,r),t}(),Zt=r(10),Jt=r.n(Zt),te=function(){function t(t){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=t}var e=t.prototype;return e.append=function(t,e){var r=this.queues[e];r.push(t),1===r.length&&this.buffers[e]&&this.executeNext(e)},e.insertAbort=function(t,e){this.queues[e].unshift(t),this.executeNext(e)},e.appendBlocker=function(t){var e,r=new Promise((function(t){e=t})),i={execute:e,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(i,t),r},e.executeNext=function(t){var e=this.buffers,r=this.queues,i=e[t],a=r[t];if(a.length){var n=a[0];try{n.execute()}catch(e){o.b.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),n.onError(e),i&&i.updating||(a.shift(),this.executeNext(t))}}},e.shiftAndExecuteNext=function(t){this.queues[t].shift(),this.executeNext(t)},e.current=function(t){return this.queues[t][0]},t}(),ee=Nt(),re=/([ha]vc.)(?:\.[^.,]+)+/,ie=function(){function t(t){var e=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var t=e.hls,r=e.media,i=e.mediaSource;o.b.log("[buffer-controller]: Media source opened"),r&&(e.updateMediaElementDuration(),t.trigger(n.a.MEDIA_ATTACHED,{media:r})),i&&i.removeEventListener("sourceopen",e._onMediaSourceOpen),e.checkPendingTracks()},this._onMediaSourceClose=function(){o.b.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){o.b.log("[buffer-controller]: Media source ended")},this.hls=t,this._initSourceBuffer(),this.registerListeners()}var e=t.prototype;return e.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},e.destroy=function(){this.unregisterListeners(),this.details=null},e.registerListeners=function(){var t=this.hls;t.on(n.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(n.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(n.a.BUFFER_RESET,this.onBufferReset,this),t.on(n.a.BUFFER_APPENDING,this.onBufferAppending,this),t.on(n.a.BUFFER_CODECS,this.onBufferCodecs,this),t.on(n.a.BUFFER_EOS,this.onBufferEos,this),t.on(n.a.BUFFER_FLUSHING,this.onBufferFlushing,this),t.on(n.a.LEVEL_UPDATED,this.onLevelUpdated,this),t.on(n.a.FRAG_PARSED,this.onFragParsed,this),t.on(n.a.FRAG_CHANGED,this.onFragChanged,this)},e.unregisterListeners=function(){var t=this.hls;t.off(n.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(n.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(n.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(n.a.BUFFER_RESET,this.onBufferReset,this),t.off(n.a.BUFFER_APPENDING,this.onBufferAppending,this),t.off(n.a.BUFFER_CODECS,this.onBufferCodecs,this),t.off(n.a.BUFFER_EOS,this.onBufferEos,this),t.off(n.a.BUFFER_FLUSHING,this.onBufferFlushing,this),t.off(n.a.LEVEL_UPDATED,this.onLevelUpdated,this),t.off(n.a.FRAG_PARSED,this.onFragParsed,this),t.off(n.a.FRAG_CHANGED,this.onFragChanged,this)},e._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new te(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},e.onManifestParsed=function(t,e){var r=2;(e.audio&&!e.video||!e.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.details=null,o.b.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},e.onMediaAttaching=function(t,e){var r=this.media=e.media;if(r&&ee){var i=this.mediaSource=new ee;i.addEventListener("sourceopen",this._onMediaSourceOpen),i.addEventListener("sourceended",this._onMediaSourceEnded),i.addEventListener("sourceclose",this._onMediaSourceClose),r.src=self.URL.createObjectURL(i),this._objectUrl=r.src}},e.onMediaDetaching=function(){var t=this.media,e=this.mediaSource,r=this._objectUrl;if(e){if(o.b.log("[buffer-controller]: media source detaching"),"open"===e.readyState)try{e.endOfStream()}catch(t){o.b.warn("[buffer-controller]: onMediaDetaching: "+t.message+" while calling endOfStream")}this.onBufferReset(),e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),t&&(r&&self.URL.revokeObjectURL(r),t.src===r?(t.removeAttribute("src"),t.load()):o.b.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(n.a.MEDIA_DETACHED,void 0)},e.onBufferReset=function(){var t=this;this.getSourceBufferTypes().forEach((function(e){var r=t.sourceBuffer[e];try{r&&(t.removeBufferListeners(e),t.mediaSource&&t.mediaSource.removeSourceBuffer(r),t.sourceBuffer[e]=void 0)}catch(t){o.b.warn("[buffer-controller]: Failed to reset the "+e+" buffer",t)}})),this._initSourceBuffer()},e.onBufferCodecs=function(t,e){var r=this,i=this.getSourceBufferTypes().length;Object.keys(e).forEach((function(t){if(i){var a=r.tracks[t];if(a&&"function"==typeof a.buffer.changeType){var n=e[t],s=n.codec,o=n.levelCodec,l=n.container;if((a.levelCodec||a.codec).replace(re,"$1")!==(o||s).replace(re,"$1")){var u=l+";codecs="+(o||s);r.appendChangeType(t,u)}}}else r.pendingTracks[t]=e[t]})),i||(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},e.appendChangeType=function(t,e){var r=this,i=this.operationQueue,a={execute:function(){var a=r.sourceBuffer[t];a&&(o.b.log("[buffer-controller]: changing "+t+" sourceBuffer type to "+e),a.changeType(e)),i.shiftAndExecuteNext(t)},onStart:function(){},onComplete:function(){},onError:function(e){o.b.warn("[buffer-controller]: Failed to change "+t+" SourceBuffer type",e)}};i.append(a,t)},e.onBufferAppending=function(t,e){var r=this,i=this.hls,a=this.operationQueue,l=this.tracks,u=e.data,d=e.type,h=e.frag,f=e.part,c=e.chunkMeta,v=c.buffering[d],g=self.performance.now();v.start=g;var p=h.stats.buffering,m=f?f.stats.buffering:null;0===p.start&&(p.start=g),m&&0===m.start&&(m.start=g);var y=l.audio,b="audio"===d&&1===c.id&&"audio/mpeg"===(null==y?void 0:y.container),T={execute:function(){if(v.executeStart=self.performance.now(),b){var t=r.sourceBuffer[d];if(t){var e=h.start-t.timestampOffset;Math.abs(e)>=.1&&(o.b.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+h.start+" (delta: "+e+") sn: "+h.sn+")"),t.timestampOffset=h.start)}}r.appendExecutor(u,d)},onStart:function(){},onComplete:function(){var t=self.performance.now();v.executeEnd=v.end=t,0===p.first&&(p.first=t),m&&0===m.first&&(m.first=t);var e=r.sourceBuffer,i={};for(var a in e)i[a]=at.getBuffered(e[a]);r.appendError=0,r.hls.trigger(n.a.BUFFER_APPENDED,{type:d,frag:h,part:f,chunkMeta:c,parent:h.type,timeRanges:i})},onError:function(t){o.b.error("[buffer-controller]: Error encountered while trying to append to the "+d+" SourceBuffer",t);var e={type:s.b.MEDIA_ERROR,parent:h.type,details:s.a.BUFFER_APPEND_ERROR,err:t,fatal:!1};t.code===DOMException.QUOTA_EXCEEDED_ERR?e.details=s.a.BUFFER_FULL_ERROR:(r.appendError++,e.details=s.a.BUFFER_APPEND_ERROR,r.appendError>i.config.appendErrorMaxRetry&&(o.b.error("[buffer-controller]: Failed "+i.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),e.fatal=!0)),i.trigger(n.a.ERROR,e)}};a.append(T,d)},e.onBufferFlushing=function(t,e){var r=this,i=this.operationQueue,a=function(t){return{execute:r.removeExecutor.bind(r,t,e.startOffset,e.endOffset),onStart:function(){},onComplete:function(){r.hls.trigger(n.a.BUFFER_FLUSHED,{type:t})},onError:function(e){o.b.warn("[buffer-controller]: Failed to remove from "+t+" SourceBuffer",e)}}};e.type?i.append(a(e.type),e.type):this.getSourceBufferTypes().forEach((function(t){i.append(a(t),t)}))},e.onFragParsed=function(t,e){var r=this,i=e.frag,a=e.part,s=[],l=a?a.elementaryStreams:i.elementaryStreams;l[u.a.AUDIOVIDEO]?s.push("audiovideo"):(l[u.a.AUDIO]&&s.push("audio"),l[u.a.VIDEO]&&s.push("video")),0===s.length&&o.b.warn("Fragments must have at least one ElementaryStreamType set. type: "+i.type+" level: "+i.level+" sn: "+i.sn),this.blockBuffers((function(){var t=self.performance.now();i.stats.buffering.end=t,a&&(a.stats.buffering.end=t);var e=a?a.stats:i.stats;r.hls.trigger(n.a.FRAG_BUFFERED,{frag:i,part:a,stats:e,id:i.type})}),s)},e.onFragChanged=function(t,e){this.flushBackBuffer()},e.onBufferEos=function(t,e){var r=this;this.getSourceBufferTypes().reduce((function(t,i){var a=r.sourceBuffer[i];return e.type&&e.type!==i||a&&!a.ended&&(a.ended=!0,o.b.log("[buffer-controller]: "+i+" sourceBuffer now EOS")),t&&!(a&&!a.ended)}),!0)&&this.blockBuffers((function(){var t=r.mediaSource;t&&"open"===t.readyState&&t.endOfStream()}))},e.onLevelUpdated=function(t,e){var r=e.details;r.fragments.length&&(this.details=r,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},e.flushBackBuffer=function(){var t=this.hls,e=this.details,r=this.media,i=this.sourceBuffer;if(r&&null!==e){var s=this.getSourceBufferTypes();if(s.length){var o=e.live&&null!==t.config.liveBackBufferLength?t.config.liveBackBufferLength:t.config.backBufferLength;if(Object(a.a)(o)&&!(o<0)){var l=r.currentTime,u=e.levelTargetDuration,d=Math.max(o,u),h=Math.floor(l/u)*u-d;s.forEach((function(r){var a=i[r];if(a){var s=at.getBuffered(a);s.length>0&&h>s.start(0)&&(t.trigger(n.a.BACK_BUFFER_REACHED,{bufferEnd:h}),e.live&&t.trigger(n.a.LIVE_BACK_BUFFER_REACHED,{bufferEnd:h}),t.trigger(n.a.BUFFER_FLUSHING,{startOffset:0,endOffset:h,type:r}))}}))}}}},e.updateMediaElementDuration=function(){if(this.details&&this.media&&this.mediaSource&&"open"===this.mediaSource.readyState){var t=this.details,e=this.hls,r=this.media,i=this.mediaSource,n=t.fragments[0].start+t.totalduration,s=r.duration,l=Object(a.a)(i.duration)?i.duration:0;t.live&&e.config.liveDurationInfinity?(o.b.log("[buffer-controller]: Media Source duration is set to Infinity"),i.duration=1/0,this.updateSeekableRange(t)):(n>l&&n>s||!Object(a.a)(s))&&(o.b.log("[buffer-controller]: Updating Media Source duration to "+n.toFixed(3)),i.duration=n)}},e.updateSeekableRange=function(t){var e=this.mediaSource,r=t.fragments;if(r.length&&t.live&&null!=e&&e.setLiveSeekableRange){var i=Math.max(0,r[0].start),a=Math.max(i,i+t.totalduration);e.setLiveSeekableRange(i,a)}},e.checkPendingTracks=function(){var t=this.bufferCodecEventsExpected,e=this.operationQueue,r=this.pendingTracks,i=Object.keys(r).length;if(i&&!t||2===i){this.createSourceBuffers(r),this.pendingTracks={};var a=this.getSourceBufferTypes();if(0===a.length)return void this.hls.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});a.forEach((function(t){e.executeNext(t)}))}},e.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");var i=0;for(var a in t)if(!e[a]){var l=t[a];if(!l)throw Error("source buffer exists for track "+a+", however track does not");var u=l.levelCodec||l.codec,d=l.container+";codecs="+u;o.b.log("[buffer-controller]: creating sourceBuffer("+d+")");try{var h=e[a]=r.addSourceBuffer(d),f=a;this.addBufferListener(f,"updatestart",this._onSBUpdateStart),this.addBufferListener(f,"updateend",this._onSBUpdateEnd),this.addBufferListener(f,"error",this._onSBUpdateError),this.tracks[a]={buffer:h,codec:u,container:l.container,levelCodec:l.levelCodec,id:l.id},i++}catch(t){o.b.error("[buffer-controller]: error while trying to add sourceBuffer: "+t.message),this.hls.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:t,mimeType:d})}}i&&this.hls.trigger(n.a.BUFFER_CREATED,{tracks:this.tracks})},e._onSBUpdateStart=function(t){this.operationQueue.current(t).onStart()},e._onSBUpdateEnd=function(t){var e=this.operationQueue;e.current(t).onComplete(),e.shiftAndExecuteNext(t)},e._onSBUpdateError=function(t,e){o.b.error("[buffer-controller]: "+t+" SourceBuffer error",e),this.hls.trigger(n.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_APPENDING_ERROR,fatal:!1});var r=this.operationQueue.current(t);r&&r.onError(e)},e.removeExecutor=function(t,e,r){var i=this.media,n=this.mediaSource,s=this.operationQueue,l=this.sourceBuffer[t];if(!i||!n||!l)return o.b.warn("[buffer-controller]: Attempting to remove from the "+t+" SourceBuffer, but it does not exist"),void s.shiftAndExecuteNext(t);var u=Object(a.a)(i.duration)?i.duration:1/0,d=Object(a.a)(n.duration)?n.duration:1/0,h=Math.max(0,e),f=Math.min(r,u,d);f>h?(o.b.log("[buffer-controller]: Removing ["+h+","+f+"] from the "+t+" SourceBuffer"),l.remove(h,f)):s.shiftAndExecuteNext(t)},e.appendExecutor=function(t,e){var r=this.operationQueue,i=this.sourceBuffer[e];if(!i)return o.b.warn("[buffer-controller]: Attempting to append to the "+e+" SourceBuffer, but it does not exist"),void r.shiftAndExecuteNext(e);i.ended=!1,i.appendBuffer(t)},e.blockBuffers=function(t,e){var r=this;if(void 0===e&&(e=this.getSourceBufferTypes()),!e.length)return o.b.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),void Promise.resolve(t);var i=this.operationQueue,a=e.map((function(t){return i.appendBlocker(t)}));Promise.all(a).then((function(){t(),e.forEach((function(t){var e=r.sourceBuffer[t];e&&e.updating||i.shiftAndExecuteNext(t)}))}))},e.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},e.addBufferListener=function(t,e,r){var i=this.sourceBuffer[t];if(i){var a=r.bind(this,t);this.listeners[t].push({event:e,listener:a}),i.addEventListener(e,a)}},e.removeBufferListeners=function(t){var e=this.sourceBuffer[t];e&&this.listeners[t].forEach((function(t){e.removeEventListener(t.event,t.listener)}))},t}();function ae(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var ne=function(){function t(t){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=t,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var e,r,i,a=t.prototype;return a.setStreamController=function(t){this.streamController=t},a.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},a.registerListeners=function(){var t=this.hls;t.on(n.a.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.on(n.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(n.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(n.a.BUFFER_CODECS,this.onBufferCodecs,this),t.on(n.a.MEDIA_DETACHING,this.onMediaDetaching,this)},a.unregisterListener=function(){var t=this.hls;t.off(n.a.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.off(n.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(n.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(n.a.BUFFER_CODECS,this.onBufferCodecs,this),t.off(n.a.MEDIA_DETACHING,this.onMediaDetaching,this)},a.onFpsDropLevelCapping=function(e,r){t.isLevelAllowed(r.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(r.droppedLevel)},a.onMediaAttaching=function(t,e){this.media=e.media instanceof HTMLVideoElement?e.media:null},a.onManifestParsed=function(t,e){var r=this.hls;this.restrictedLevels=[],this.firstLevel=e.firstLevel,r.config.capLevelToPlayerSize&&e.video&&this.startCapping()},a.onBufferCodecs=function(t,e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},a.onMediaDetaching=function(){this.stopCapping()},a.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var t=this.hls.levels;if(t.length){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t.length-1),e.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},a.getMaxLevel=function(e){var r=this,i=this.hls.levels;if(!i.length)return-1;var a=i.filter((function(i,a){return t.isLevelAllowed(a,r.restrictedLevels)&&a<=e}));return this.clientRect=null,t.getMaxLevelByMediaSize(a,this.mediaWidth,this.mediaHeight)},a.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},a.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},a.getDimensions=function(){if(this.clientRect)return this.clientRect;var t=this.media,e={width:0,height:0};if(t){var r=t.getBoundingClientRect();e.width=r.width,e.height=r.height,e.width||e.height||(e.width=r.right-r.left||t.width||0,e.height=r.bottom-r.top||t.height||0)}return this.clientRect=e,e},t.isLevelAllowed=function(t,e){return void 0===e&&(e=[]),-1===e.indexOf(t)},t.getMaxLevelByMediaSize=function(t,e,r){if(!t||!t.length)return-1;for(var i,a,n=t.length-1,s=0;s<t.length;s+=1){var o=t[s];if((o.width>=e||o.height>=r)&&(i=o,!(a=t[s+1])||i.width!==a.width||i.height!==a.height)){n=s;break}}return n},e=t,i=[{key:"contentScaleFactor",get:function(){var t=1;try{t=self.devicePixelRatio}catch(t){}return t}}],(r=[{key:"mediaWidth",get:function(){return this.getDimensions().width*t.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*t.contentScaleFactor}}])&&ae(e.prototype,r),i&&ae(e,i),t}(),se=function(){function t(t){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=t,this.registerListeners()}var e=t.prototype;return e.setStreamController=function(t){this.streamController=t},e.registerListeners=function(){this.hls.on(n.a.MEDIA_ATTACHING,this.onMediaAttaching,this)},e.unregisterListeners=function(){this.hls.off(n.a.MEDIA_ATTACHING,this.onMediaAttaching)},e.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},e.onMediaAttaching=function(t,e){var r=this.hls.config;if(r.capLevelOnFPSDrop){var i=e.media instanceof self.HTMLVideoElement?e.media:null;this.media=i,i&&"function"==typeof i.getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}},e.checkFPS=function(t,e,r){var i=performance.now();if(e){if(this.lastTime){var a=i-this.lastTime,s=r-this.lastDroppedFrames,l=e-this.lastDecodedFrames,u=1e3*s/a,d=this.hls;if(d.trigger(n.a.FPS_DROP,{currentDropped:s,currentDecoded:l,totalDroppedFrames:r}),u>0&&s>d.config.fpsDroppedMonitoringThreshold*l){var h=d.currentLevel;o.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+h),h>0&&(-1===d.autoLevelCapping||d.autoLevelCapping>=h)&&(h-=1,d.trigger(n.a.FPS_DROP_LEVEL_CAPPING,{level:h,droppedLevel:d.currentLevel}),d.autoLevelCapping=h,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.checkFPSInterval=function(){var t=this.media;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},t}(),oe=r(12),le=/^age:\s*[\d.]+\s*$/m,ue=function(){function t(t){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=t?t.xhrSetup:null,this.stats=new oe.a,this.retryDelay=0}var e=t.prototype;return e.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},e.abortInternal=function(){var t=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),t&&(t.onreadystatechange=null,t.onprogress=null,4!==t.readyState&&(this.stats.aborted=!0,t.abort()))},e.abort=function(){var t;this.abortInternal(),null!==(t=this.callbacks)&&void 0!==t&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},e.load=function(t,e,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=t,this.config=e,this.callbacks=r,this.retryDelay=e.retryDelay,this.loadInternal()},e.loadInternal=function(){var t=this.config,e=this.context;if(t){var r=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0;var a=this.xhrSetup;try{if(a)try{a(r,e.url)}catch(t){r.open("GET",e.url,!0),a(r,e.url)}r.readyState||r.open("GET",e.url,!0);var n=this.context.headers;if(n)for(var s in n)r.setRequestHeader(s,n[s])}catch(t){return void this.callbacks.onError({code:r.status,text:t.message},e,r)}e.rangeEnd&&r.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),r.onreadystatechange=this.readystatechange.bind(this),r.onprogress=this.loadprogress.bind(this),r.responseType=e.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),t.timeout),r.send()}},e.readystatechange=function(){var t=this.context,e=this.loader,r=this.stats;if(t&&e){var i=e.readyState,a=this.config;if(!r.aborted&&i>=2)if(self.clearTimeout(this.requestTimeout),0===r.loading.first&&(r.loading.first=Math.max(self.performance.now(),r.loading.start)),4===i){e.onreadystatechange=null,e.onprogress=null;var n=e.status;if(n>=200&&n<300){var s,l;if(r.loading.end=Math.max(self.performance.now(),r.loading.first),l="arraybuffer"===t.responseType?(s=e.response).byteLength:(s=e.responseText).length,r.loaded=r.total=l,!this.callbacks)return;var u=this.callbacks.onProgress;if(u&&u(r,t,s,e),!this.callbacks)return;var d={url:e.responseURL,data:s};this.callbacks.onSuccess(d,r,t,e)}else r.retry>=a.maxRetry||n>=400&&n<499?(o.b.error(n+" while loading "+t.url),this.callbacks.onError({code:n,text:e.statusText},t,e)):(o.b.warn(n+" while loading "+t.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,a.maxRetryDelay),r.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),a.timeout)}},e.loadtimeout=function(){o.b.warn("timeout while loading "+this.context.url);var t=this.callbacks;t&&(this.abortInternal(),t.onTimeout(this.stats,this.context,this.loader))},e.loadprogress=function(t){var e=this.stats;e.loaded=t.loaded,t.lengthComputable&&(e.total=t.total)},e.getCacheAge=function(){var t=null;if(this.loader&&le.test(this.loader.getAllResponseHeaders())){var e=this.loader.getResponseHeader("age");t=e?parseFloat(e):null}return t},t}(),de=r(16);function he(t){var e="function"==typeof Map?new Map:void 0;return(he=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return fe(t,arguments,ge(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ve(i,t)})(t)}function fe(t,e,r){return(fe=ce()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return r&&ve(a,r.prototype),a}).apply(null,arguments)}function ce(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function ve(t,e){return(ve=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ge(t){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pe(){return(pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var me=function(){function t(t){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=t.fetchSetup||ye,this.controller=new self.AbortController,this.stats=new oe.a}var e=t.prototype;return e.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},e.abortInternal=function(){var t=this.response;t&&t.ok||(this.stats.aborted=!0,this.controller.abort())},e.abort=function(){var t;this.abortInternal(),null!==(t=this.callbacks)&&void 0!==t&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},e.load=function(t,e,r){var i=this,n=this.stats;if(n.loading.start)throw new Error("Loader can only be used once.");n.loading.start=self.performance.now();var s=function(t,e){var r={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(pe({},t.headers))};return t.rangeEnd&&r.headers.set("Range","bytes="+t.rangeStart+"-"+String(t.rangeEnd-1)),r}(t,this.controller.signal),o=r.onProgress,l="arraybuffer"===t.responseType,u=l?"byteLength":"length";this.context=t,this.config=e,this.callbacks=r,this.request=this.fetchSetup(t,s),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout((function(){i.abortInternal(),r.onTimeout(n,t,i.response)}),e.timeout),self.fetch(this.request).then((function(r){if(i.response=i.loader=r,!r.ok){var s=r.status,u=r.statusText;throw new Te(u||"fetch, bad network response",s,r)}return n.loading.first=Math.max(self.performance.now(),n.loading.start),n.total=parseInt(r.headers.get("Content-Length")||"0"),o&&Object(a.a)(e.highWaterMark)?i.loadProgressively(r,n,t,e.highWaterMark,o):l?r.arrayBuffer():r.text()})).then((function(s){var l=i.response;self.clearTimeout(i.requestTimeout),n.loading.end=Math.max(self.performance.now(),n.loading.first),n.loaded=n.total=s[u];var d={url:l.url,data:s};o&&!Object(a.a)(e.highWaterMark)&&o(n,t,s,l),r.onSuccess(d,n,t,l)})).catch((function(e){if(self.clearTimeout(i.requestTimeout),!n.aborted){var a=e.code||0;r.onError({code:a,text:e.message},t,e.details)}}))},e.getCacheAge=function(){var t=null;if(this.response){var e=this.response.headers.get("age");t=e?parseFloat(e):null}return t},e.loadProgressively=function(t,e,r,i,a){void 0===i&&(i=0);var n=new de.a,s=t.body.getReader();return function o(){return s.read().then((function(s){if(s.done)return n.dataLength&&a(e,r,n.flush(),t),Promise.resolve(new ArrayBuffer(0));var l=s.value,u=l.length;return e.loaded+=u,u<i||n.dataLength?(n.push(l),n.dataLength>=i&&a(e,r,n.flush(),t)):a(e,r,l,t),o()})).catch((function(){return Promise.reject()}))}()},t}();function ye(t,e){return new self.Request(t.url,e)}var be,Te=function(t){var e,r;function i(e,r,i){var a;return(a=t.call(this,e)||this).code=void 0,a.details=void 0,a.code=r,a.details=i,a}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,ve(e,r),i}(he(Error)),Ee=me;!function(t){t.WIDEVINE="com.widevine.alpha",t.PLAYREADY="com.microsoft.playready"}(be||(be={}));var Se="undefined"!=typeof self&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null;function Le(){return(Le=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function Ae(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function Re(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Ae(Object(r),!0).forEach((function(e){De(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function De(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _e=Re(Re({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:6e7,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:ue,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:$t,bufferController:ie,capLevelController:ne,fpsController:se,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:Se,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0},{cueHandler:Jt.a,enableCEA708Captions:!1,enableWebVTT:!1,enableIMSC1:!1,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:void 0,subtitleTrackController:void 0,timelineController:void 0,audioStreamController:void 0,audioTrackController:void 0,emeController:void 0,cmcdController:void 0});function ke(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var xe=function(){function t(e){void 0===e&&(e={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new jt.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null;var r=this.config=function(t,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(void 0!==e.liveMaxLatencyDurationCount&&(void 0===e.liveSyncDurationCount||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(void 0===e.liveSyncDuration||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return Le({},t,e)}(t.DefaultConfig,e);this.userConfig=e,Object(o.a)(r.debug),this._autoLevelCapping=-1,r.progressive&&function(t){var e=t.loader;e!==Ee&&e!==ue?(o.b.log("[config]: Custom loader detected, cannot enable progressive streaming"),t.progressive=!1):function(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch(t){}return!1}()&&(t.loader=Ee,t.progressive=!0,t.enableSoftwareAES=!0,o.b.log("[config]: Progressive streaming enabled, using FetchLoader"))}(r);var i=r.abrController,a=r.bufferController,n=r.capLevelController,s=r.fpsController,l=this.abrController=new i(this),u=this.bufferController=new a(this),d=this.capLevelController=new n(this),h=new s(this),f=new x(this),c=new w(this),v=new I(this),g=this.levelController=new Z(this),p=new J(this),m=this.streamController=new Xt(this,p);d.setStreamController(m),h.setStreamController(m);var y=[g,m];this.networkControllers=y;var b=[f,c,l,u,d,h,v,p];this.audioTrackController=this.createController(r.audioTrackController,null,y),this.createController(r.audioStreamController,p,y),this.subtitleTrackController=this.createController(r.subtitleTrackController,null,y),this.createController(r.subtitleStreamController,p,y),this.createController(r.timelineController,null,b),this.emeController=this.createController(r.emeController,null,b),this.cmcdController=this.createController(r.cmcdController,null,b),this.latencyController=this.createController(M,null,b),this.coreComponents=b}t.isSupported=function(){return function(){var t=Nt();if(!t)return!1;var e=Bt(),r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return!!r&&!!i}()};var e,r,a,l=t.prototype;return l.createController=function(t,e,r){if(t){var i=e?new t(this,e):new t(this);return r&&r.push(i),i}return null},l.on=function(t,e,r){void 0===r&&(r=this),this._emitter.on(t,e,r)},l.once=function(t,e,r){void 0===r&&(r=this),this._emitter.once(t,e,r)},l.removeAllListeners=function(t){this._emitter.removeAllListeners(t)},l.off=function(t,e,r,i){void 0===r&&(r=this),this._emitter.off(t,e,r,i)},l.listeners=function(t){return this._emitter.listeners(t)},l.emit=function(t,e,r){return this._emitter.emit(t,e,r)},l.trigger=function(t,e){if(this.config.debug)return this.emit(t,t,e);try{return this.emit(t,t,e)}catch(e){o.b.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),this.trigger(n.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.INTERNAL_EXCEPTION,fatal:!1,event:t,error:e})}return!1},l.listenerCount=function(t){return this._emitter.listenerCount(t)},l.destroy=function(){o.b.log("destroy"),this.trigger(n.a.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach((function(t){return t.destroy()})),this.networkControllers.length=0,this.coreComponents.forEach((function(t){return t.destroy()})),this.coreComponents.length=0},l.attachMedia=function(t){o.b.log("attachMedia"),this._media=t,this.trigger(n.a.MEDIA_ATTACHING,{media:t})},l.detachMedia=function(){o.b.log("detachMedia"),this.trigger(n.a.MEDIA_DETACHING,void 0),this._media=null},l.loadSource=function(t){this.stopLoad();var e=this.media,r=this.url,a=this.url=i.buildAbsoluteURL(self.location.href,t,{alwaysNormalize:!0});o.b.log("loadSource:"+a),e&&r&&r!==a&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(e)),this.trigger(n.a.MANIFEST_LOADING,{url:t})},l.startLoad=function(t){void 0===t&&(t=-1),o.b.log("startLoad("+t+")"),this.networkControllers.forEach((function(e){e.startLoad(t)}))},l.stopLoad=function(){o.b.log("stopLoad"),this.networkControllers.forEach((function(t){t.stopLoad()}))},l.swapAudioCodec=function(){o.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},l.recoverMediaError=function(){o.b.log("recoverMediaError");var t=this._media;this.detachMedia(),t&&this.attachMedia(t)},l.removeLevel=function(t,e){void 0===e&&(e=0),this.levelController.removeLevel(t,e)},e=t,a=[{key:"version",get:function(){return"1.1.5"}},{key:"Events",get:function(){return n.a}},{key:"ErrorTypes",get:function(){return s.b}},{key:"ErrorDetails",get:function(){return s.a}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:_e},set:function(e){t.defaultConfig=e}}],(r=[{key:"levels",get:function(){return this.levelController.levels||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){o.b.log("set currentLevel:"+t),this.loadLevel=t,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){o.b.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){o.b.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){o.b.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){o.b.log("set startLevel:"+t),-1!==t&&(t=Math.max(t,this.minAutoLevel)),this.levelController.startLevel=t}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(t){var e=!!t;e!==this.config.capLevelToPlayerSize&&(e?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=e)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){this._autoLevelCapping!==t&&(o.b.log("set autoLevelCapping:"+t),this._autoLevelCapping=t)}},{key:"bandwidthEstimate",get:function(){var t=this.abrController.bwEstimator;return t?t.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var t=this.levels,e=this.config.minAutoBitrate;if(!t)return 0;for(var r=t.length,i=0;i<r;i++)if(t[i].maxBitrate>e)return i;return 0}},{key:"maxAutoLevel",get:function(){var t=this.levels,e=this.autoLevelCapping;return-1===e&&t&&t.length?t.length-1:e}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(t){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,t)}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var t=this.subtitleTrackController;return!!t&&t.subtitleDisplay},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleDisplay=t)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(t){this.config.lowLatencyMode=t}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}])&&ke(e.prototype,r),a&&ke(e,a),t}();xe.defaultConfig=void 0}]).default)}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};return(()=>{"use strict";r.d(i,{default:()=>a});var t=r(182),e=r.n(t);class a extends Audio{constructor(){super();const t="rplayer-volume";this.hls=null,localStorage.hasOwnProperty(t)?this.volume=localStorage.getItem(t):this.volume=.2,this.onvolumechange=()=>{localStorage.setItem(t,this.volume)}}rewind(t){this.currentTime=this.currentTime-t}playSrc(t){const r=t.indexOf(".m3u8")>0;this.stop(),e().isSupported()&&r?(this.hls=new(e()),this.hls.loadSource(t),this.hls.attachMedia(this),this.hls.on(e().Events.MANIFEST_PARSED,(()=>{this.play()}))):(this.canPlayType("application/vnd.apple.mpegurl")||e().isSupported()&&!r)&&(this.src=t,this.addEventListener("loadedmetadata",(()=>{this.play()})))}mute(){this.muted=!this.muted}stop(){this.pause(),this.currentTime=0,this.hls&&(this.hls.destroy(),this.hls=null)}upVolume(){this.#t(this.volume+.1)}downVolume(){this.#t(this.volume-.1)}#t(t){t>=0&&t<=1&&(this.volume=Number(t).toFixed(1))}get isHls(){return this.hls instanceof e()}get url(){return this.isHls?this.hls.url:this.src}get playing(){return this.currentTime>0&&!this.paused&&!this.ended&&this.readyState>2}}})(),i.default})()));

/***/ }),

/***/ "./node_modules/@vue/compat/dist/vue.runtime.esm-bundler.js":
/*!******************************************************************!*\
  !*** ./node_modules/@vue/compat/dist/vue.runtime.esm-bundler.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* binding */ BaseTransition),
/* harmony export */   "Comment": () => (/* binding */ Comment),
/* harmony export */   "EffectScope": () => (/* binding */ EffectScope),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "KeepAlive": () => (/* binding */ KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* binding */ ReactiveEffect),
/* harmony export */   "Static": () => (/* binding */ Static),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "Teleport": () => (/* binding */ Teleport),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "TransitionGroup": () => (/* binding */ TransitionGroup),
/* harmony export */   "VueElement": () => (/* binding */ VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* binding */ callWithErrorHandling),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "cloneVNode": () => (/* binding */ cloneVNode),
/* harmony export */   "compatUtils": () => (/* binding */ compatUtils),
/* harmony export */   "computed": () => (/* binding */ computed$1),
/* harmony export */   "configureCompat": () => (/* binding */ configureCompat$1),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "createCommentVNode": () => (/* binding */ createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* binding */ createElementBlock),
/* harmony export */   "createElementVNode": () => (/* binding */ createBaseVNode),
/* harmony export */   "createHydrationRenderer": () => (/* binding */ createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* binding */ createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "createSSRApp": () => (/* binding */ createSSRApp),
/* harmony export */   "createSlots": () => (/* binding */ createSlots),
/* harmony export */   "createStaticVNode": () => (/* binding */ createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* binding */ createTextVNode),
/* harmony export */   "createVNode": () => (/* binding */ createVNode),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement),
/* harmony export */   "defineEmits": () => (/* binding */ defineEmits),
/* harmony export */   "defineExpose": () => (/* binding */ defineExpose),
/* harmony export */   "defineProps": () => (/* binding */ defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* binding */ defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* binding */ devtools),
/* harmony export */   "effect": () => (/* binding */ effect),
/* harmony export */   "effectScope": () => (/* binding */ effectScope),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* binding */ getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* binding */ getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* binding */ guardReactiveProps),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "initCustomFormatter": () => (/* binding */ initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* binding */ initDirectivesForSSR),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isMemoSame": () => (/* binding */ isMemoSame),
/* harmony export */   "isProxy": () => (/* binding */ isProxy),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "isRuntimeOnly": () => (/* binding */ isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* binding */ isShallow),
/* harmony export */   "isVNode": () => (/* binding */ isVNode),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "mergeDefaults": () => (/* binding */ mergeDefaults),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "normalizeClass": () => (/* binding */ normalizeClass),
/* harmony export */   "normalizeProps": () => (/* binding */ normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* binding */ normalizeStyle),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onRenderTracked": () => (/* binding */ onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* binding */ onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* binding */ onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "openBlock": () => (/* binding */ openBlock),
/* harmony export */   "popScopeId": () => (/* binding */ popScopeId),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "pushScopeId": () => (/* binding */ pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* binding */ queuePostFlushCb),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderSlot": () => (/* binding */ renderSlot),
/* harmony export */   "resolveComponent": () => (/* binding */ resolveComponent),
/* harmony export */   "resolveDirective": () => (/* binding */ resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* binding */ resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* binding */ resolveFilter$1),
/* harmony export */   "resolveTransitionHooks": () => (/* binding */ resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* binding */ setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* binding */ setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* binding */ setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "ssrContextKey": () => (/* binding */ ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* binding */ ssrUtils),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "toDisplayString": () => (/* binding */ toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* binding */ toHandlerKey),
/* harmony export */   "toHandlers": () => (/* binding */ toHandlers),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* binding */ transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "useSSRContext": () => (/* binding */ useSSRContext),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "useTransitionState": () => (/* binding */ useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* binding */ vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* binding */ vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* binding */ vModelRadio),
/* harmony export */   "vModelSelect": () => (/* binding */ vModelSelect),
/* harmony export */   "vModelText": () => (/* binding */ vModelText),
/* harmony export */   "vShow": () => (/* binding */ vShow),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn$1),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "watchPostEffect": () => (/* binding */ watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* binding */ watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* binding */ withAsyncContext),
/* harmony export */   "withCtx": () => (/* binding */ withCtx),
/* harmony export */   "withDefaults": () => (/* binding */ withDefaults),
/* harmony export */   "withDirectives": () => (/* binding */ withDirectives),
/* harmony export */   "withKeys": () => (/* binding */ withKeys),
/* harmony export */   "withMemo": () => (/* binding */ withMemo),
/* harmony export */   "withModifiers": () => (/* binding */ withModifiers),
/* harmony export */   "withScopeId": () => (/* binding */ withScopeId)
/* harmony export */ });
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString(value)) {
        return value;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
        return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return isString(val)
        ? val
        : val == null
            ? ''
            : isArray(val) ||
                (isObject(val) &&
                    (val.toString === objectToString || !isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : 0;
const EMPTY_ARR = ( true) ? Object.freeze([]) : 0;
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => toTypeString(val) === '[object Date]';
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};

function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
    constructor(detached = false) {
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if ((true)) {
            warn(`cannot run an inactive effect scope.`);
        }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((true)) {
        warn(`onScopeDispose() is called when there is no active effect scope` +
            ` to be associated with.`);
    }
}

const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit; // set was tracked
        }
    }
};
const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
                dep.delete(effect);
            }
            else {
                deps[ptr++] = dep;
            }
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};

const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(( true) ? 'iterate' : 0);
const MAP_KEY_ITERATE_KEY = Symbol(( true) ? 'Map key iterate' : 0);
class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) {
            return this.fn();
        }
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent) {
            if (parent === this) {
                return;
            }
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
                initDepMarkers(this);
            }
            else {
                cleanupEffect(this);
            }
            return this.fn();
        }
        finally {
            if (effectTrackDepth <= maxMarkerBits) {
                finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
            if (this.deferStop) {
                this.stop();
            }
        }
    }
    stop() {
        // stopped while running itself - defer the cleanup
        if (activeEffect === this) {
            this.deferStop = true;
        }
        else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
                this.onStop();
            }
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) {
        fn = fn.effect.fn;
    }
    const _effect = new ReactiveEffect(fn);
    if (options) {
        extend(_effect, options);
        if (options.scope)
            recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) {
        _effect.run();
    }
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = createDep()));
        }
        const eventInfo = ( true)
            ? { effect: activeEffect, target, type, key }
            : 0;
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    }
    else {
        // Full cleanup mode.
        shouldTrack = !dep.has(activeEffect);
    }
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (( true) && activeEffect.onTrack) {
            activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
        }
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    let deps = [];
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        deps = [...depsMap.values()];
    }
    else if (key === 'length' && isArray(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                deps.push(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            deps.push(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if (isIntegerKey(key)) {
                    // new index added to array -> length changes
                    deps.push(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if (isMap(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const eventInfo = ( true)
        ? { target, type, key, newValue, oldValue, oldTarget }
        : 0;
    if (deps.length === 1) {
        if (deps[0]) {
            if ((true)) {
                triggerEffects(deps[0], eventInfo);
            }
            else {}
        }
    }
    else {
        const effects = [];
        for (const dep of deps) {
            if (dep) {
                effects.push(...dep);
            }
        }
        if ((true)) {
            triggerEffects(createDep(effects), eventInfo);
        }
        else {}
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    const effects = isArray(dep) ? dep : [...dep];
    for (const effect of effects) {
        if (effect.computed) {
            triggerEffect(effect, debuggerEventExtraInfo);
        }
    }
    for (const effect of effects) {
        if (!effect.computed) {
            triggerEffect(effect, debuggerEventExtraInfo);
        }
    }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
        if (( true) && effect.onTrigger) {
            effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
        }
        if (effect.scheduler) {
            effect.scheduler();
        }
        else {
            effect.run();
        }
    }
}

const isNonTrackableKeys = /*#__PURE__*/ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
/*#__PURE__*/
Object.getOwnPropertyNames(Symbol)
    // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
    // but accessing them on Symbol leads to TypeError because Symbol is a strict mode
    // function
    .filter(key => key !== 'arguments' && key !== 'caller')
    .map(key => Symbol[key])
    .filter(isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
        instrumentations[key] = function (...args) {
            const arr = toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get" /* GET */, i + '');
            }
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) {
                // if that didn't work, run it again using raw values.
                return arr[key](...args.map(toRaw));
            }
            else {
                return res;
            }
        };
    });
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
        instrumentations[key] = function (...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_isShallow" /* IS_SHALLOW */) {
            return shallow;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver ===
                (isReadonly
                    ? shallow
                        ? shallowReadonlyMap
                        : readonlyMap
                    : shallow
                        ? shallowReactiveMap
                        : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - skip unwrap for Array + integer key.
            return targetIsArray && isIntegerKey(key) ? res : res.value;
        }
        if (isObject(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
            return false;
        }
        if (!shallow && !isReadonly(value)) {
            if (!isShallow(value)) {
                value = toRaw(value);
                oldValue = toRaw(oldValue);
            }
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key)
            ? Number(key) < target.length
            : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if (hasChanged(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, isArray(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((true)) {
            warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    },
    deleteProperty(target, key) {
        if ((true)) {
            warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "get" /* GET */, key);
        }
        track(rawTarget, "get" /* GET */, rawKey);
    }
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
    else if (target !== rawTarget) {
        // #3602 readonly(reactive(Map))
        // ensure that the nested reactive `Map` can do tracking for itself
        target.get(key);
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "has" /* HAS */, key);
        }
        track(rawTarget, "has" /* HAS */, rawKey);
    }
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((true)) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if (hasChanged(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((true)) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( true)
        ? isMap(target)
            ? new Map(target)
            : new Set(target)
        : 0;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((true)) {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */ ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get(key) {
            return get$1(this, key);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get(key) {
            return get$1(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
    iteratorMethods.forEach(method => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? isReadonly
            ? shallowReadonlyInstrumentations
            : shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get(hasOwn(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap(toRawType(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        if ((true)) {
            console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only specific value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    def(value, "__v_skip" /* SKIP */, true);
    return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;

function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        if ((true)) {
            trackEffects(ref.dep || (ref.dep = createDep()), {
                target: ref,
                type: "get" /* GET */,
                key: 'value'
            });
        }
        else {}
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    if (ref.dep) {
        if ((true)) {
            triggerEffects(ref.dep, {
                target: ref,
                type: "set" /* SET */,
                key: 'value',
                newValue: newVal
            });
        }
        else {}
    }
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : toRaw(newVal);
        if (hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref) {
    triggerRefValue(ref, ( true) ? ref.value : 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.dep = undefined;
        this.__v_isRef = true;
        const { get, set } = factory(() => trackRefValue(this), () => triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (( true) && !isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val)
        ? val
        : new ObjectRefImpl(object, key, defaultValue);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR) {
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ( true)
            ? () => {
                console.warn('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (( true) && debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}

const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn$1(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if (isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if (isFunction(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = toRaw(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */]: 'serverPrefetch hook',
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( true) ? ErrorTypeStrings[type] : 0;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((true)) {
        const info = ErrorTypeStrings[type];
        if (contextVNode) {
            pushWarningContext(contextVNode);
        }
        warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) {
            popWarningContext();
        }
        // crash in dev by default so it's more noticeable
        if (throwInDev) {
            throw err;
        }
        else {
            console.error(err);
        }
    }
    else {}
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? (start = middle + 1) : (end = middle);
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        if (job.id == null) {
            queue.push(job);
        }
        else {
            queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
        queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!isArray(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((true)) {
            seen = seen || new Map();
        }
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if (( true) &&
                checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
                continue;
            }
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    // flush any pre cbs queued during the flush (e.g. pre watchers)
    flushPreFlushCbs();
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((true)) {
            seen = seen || new Map();
        }
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (( true) &&
                checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
                continue;
            }
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((true)) {
        seen = seen || new Map();
    }
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b) => getId(a) - getId(b));
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = ( true)
        ? (job) => checkRecursiveUpdates(seen, job)
        : 0;
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (( true) && check(job)) {
                    continue;
                }
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length ||
            pendingPreFlushCbs.length ||
            pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
            return true;
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((true)) {
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
        createRecord: tryWrap(createRecord),
        rerender: tryWrap(rerender),
        reload: tryWrap(reload)
    };
}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
        return;
    }
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [...record.instances].forEach(instance => {
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [...record.instances];
    for (const instance of instances) {
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) {
                updateComponentDef(oldComp, newComp);
            }
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        }
        else if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance.parent.type.__asyncLoader &&
                instance.parent.ceReload) {
                instance.parent.ceReload(newComp.styles);
            }
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(() => {
        for (const instance of instances) {
            hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
        }
    });
}
function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
        if (key !== '__file' && !(key in newComp)) {
            delete oldComp[key];
        }
    }
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
    if (devtools) {
        devtools.emit(event, ...args);
    }
    else if (!devtoolsNotInstalled) {
        buffer.push({ event, args });
    }
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
        buffer = [];
    }
    else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== 'undefined' &&
        // some envs mock window but not fully
        window.HTMLElement &&
        // also exclude jsdom
        !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
        const replay = (target.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []);
        replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(() => {
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    }
    else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit("app:init" /* APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = 
/*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = 
/*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
function createDevtoolsComponentHook(hook) {
    return (component) => {
        emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */);
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */);
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
        emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

const deprecationData = {
    ["GLOBAL_MOUNT" /* GLOBAL_MOUNT */]: {
        message: `The global app bootstrapping API has changed: vm.$mount() and the "el" ` +
            `option have been removed. Use createApp(RootComponent).mount() instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/global-api.html#mounting-app-instance`
    },
    ["GLOBAL_MOUNT_CONTAINER" /* GLOBAL_MOUNT_CONTAINER */]: {
        message: `Vue detected directives on the mount container. ` +
            `In Vue 3, the container is no longer considered part of the template ` +
            `and will not be processed/replaced.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/mount-changes.html`
    },
    ["GLOBAL_EXTEND" /* GLOBAL_EXTEND */]: {
        message: `Vue.extend() has been removed in Vue 3. ` +
            `Use defineComponent() instead.`,
        link: `https://vuejs.org/api/general.html#definecomponent`
    },
    ["GLOBAL_PROTOTYPE" /* GLOBAL_PROTOTYPE */]: {
        message: `Vue.prototype is no longer available in Vue 3. ` +
            `Use app.config.globalProperties instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/global-api.html#vue-prototype-replaced-by-config-globalproperties`
    },
    ["GLOBAL_SET" /* GLOBAL_SET */]: {
        message: `Vue.set() has been removed as it is no longer needed in Vue 3. ` +
            `Simply use native JavaScript mutations.`
    },
    ["GLOBAL_DELETE" /* GLOBAL_DELETE */]: {
        message: `Vue.delete() has been removed as it is no longer needed in Vue 3. ` +
            `Simply use native JavaScript mutations.`
    },
    ["GLOBAL_OBSERVABLE" /* GLOBAL_OBSERVABLE */]: {
        message: `Vue.observable() has been removed. ` +
            `Use \`import { reactive } from "vue"\` from Composition API instead.`,
        link: `https://vuejs.org/api/reactivity-core.html#reactive`
    },
    ["GLOBAL_PRIVATE_UTIL" /* GLOBAL_PRIVATE_UTIL */]: {
        message: `Vue.util has been removed. Please refactor to avoid its usage ` +
            `since it was an internal API even in Vue 2.`
    },
    ["CONFIG_SILENT" /* CONFIG_SILENT */]: {
        message: `config.silent has been removed because it is not good practice to ` +
            `intentionally suppress warnings. You can use your browser console's ` +
            `filter features to focus on relevant messages.`
    },
    ["CONFIG_DEVTOOLS" /* CONFIG_DEVTOOLS */]: {
        message: `config.devtools has been removed. To enable devtools for ` +
            `production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.`,
        link: `https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags`
    },
    ["CONFIG_KEY_CODES" /* CONFIG_KEY_CODES */]: {
        message: `config.keyCodes has been removed. ` +
            `In Vue 3, you can directly use the kebab-case key names as v-on modifiers.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html`
    },
    ["CONFIG_PRODUCTION_TIP" /* CONFIG_PRODUCTION_TIP */]: {
        message: `config.productionTip has been removed.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed`
    },
    ["CONFIG_IGNORED_ELEMENTS" /* CONFIG_IGNORED_ELEMENTS */]: {
        message: () => {
            let msg = `config.ignoredElements has been removed.`;
            if (isRuntimeOnly()) {
                msg += ` Pass the "isCustomElement" option to @vue/compiler-dom instead.`;
            }
            else {
                msg += ` Use config.isCustomElement instead.`;
            }
            return msg;
        },
        link: `https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-ignoredelements-is-now-config-iscustomelement`
    },
    ["CONFIG_WHITESPACE" /* CONFIG_WHITESPACE */]: {
        // this warning is only relevant in the full build when using runtime
        // compilation, so it's put in the runtime compatConfig list.
        message: `Vue 3 compiler's whitespace option will default to "condense" instead of ` +
            `"preserve". To suppress this warning, provide an explicit value for ` +
            `\`config.compilerOptions.whitespace\`.`
    },
    ["CONFIG_OPTION_MERGE_STRATS" /* CONFIG_OPTION_MERGE_STRATS */]: {
        message: `config.optionMergeStrategies no longer exposes internal strategies. ` +
            `Use custom merge functions instead.`
    },
    ["INSTANCE_SET" /* INSTANCE_SET */]: {
        message: `vm.$set() has been removed as it is no longer needed in Vue 3. ` +
            `Simply use native JavaScript mutations.`
    },
    ["INSTANCE_DELETE" /* INSTANCE_DELETE */]: {
        message: `vm.$delete() has been removed as it is no longer needed in Vue 3. ` +
            `Simply use native JavaScript mutations.`
    },
    ["INSTANCE_DESTROY" /* INSTANCE_DESTROY */]: {
        message: `vm.$destroy() has been removed. Use app.unmount() instead.`,
        link: `https://vuejs.org/api/application.html#app-unmount`
    },
    ["INSTANCE_EVENT_EMITTER" /* INSTANCE_EVENT_EMITTER */]: {
        message: `vm.$on/$once/$off() have been removed. ` +
            `Use an external event emitter library instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/events-api.html`
    },
    ["INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */]: {
        message: event => `"${event}" lifecycle events are no longer supported. From templates, ` +
            `use the "vnode" prefix instead of "hook:". For example, @${event} ` +
            `should be changed to @vnode-${event.slice(5)}. ` +
            `From JavaScript, use Composition API to dynamically register lifecycle ` +
            `hooks.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html`
    },
    ["INSTANCE_CHILDREN" /* INSTANCE_CHILDREN */]: {
        message: `vm.$children has been removed. Consider refactoring your logic ` +
            `to avoid relying on direct access to child components.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/children.html`
    },
    ["INSTANCE_LISTENERS" /* INSTANCE_LISTENERS */]: {
        message: `vm.$listeners has been removed. In Vue 3, parent v-on listeners are ` +
            `included in vm.$attrs and it is no longer necessary to separately use ` +
            `v-on="$listeners" if you are already using v-bind="$attrs". ` +
            `(Note: the Vue 3 behavior only applies if this compat config is disabled)`,
        link: `https://v3-migration.vuejs.org/breaking-changes/listeners-removed.html`
    },
    ["INSTANCE_SCOPED_SLOTS" /* INSTANCE_SCOPED_SLOTS */]: {
        message: `vm.$scopedSlots has been removed. Use vm.$slots instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/slots-unification.html`
    },
    ["INSTANCE_ATTRS_CLASS_STYLE" /* INSTANCE_ATTRS_CLASS_STYLE */]: {
        message: componentName => `Component <${componentName || 'Anonymous'}> has \`inheritAttrs: false\` but is ` +
            `relying on class/style fallthrough from parent. In Vue 3, class/style ` +
            `are now included in $attrs and will no longer fallthrough when ` +
            `inheritAttrs is false. If you are already using v-bind="$attrs" on ` +
            `component root it should render the same end result. ` +
            `If you are binding $attrs to a non-root element and expecting ` +
            `class/style to fallthrough on root, you will need to now manually bind ` +
            `them on root via :class="$attrs.class".`,
        link: `https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html`
    },
    ["OPTIONS_DATA_FN" /* OPTIONS_DATA_FN */]: {
        message: `The "data" option can no longer be a plain object. ` +
            `Always use a function.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/data-option.html`
    },
    ["OPTIONS_DATA_MERGE" /* OPTIONS_DATA_MERGE */]: {
        message: (key) => `Detected conflicting key "${key}" when merging data option values. ` +
            `In Vue 3, data keys are merged shallowly and will override one another.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change`
    },
    ["OPTIONS_BEFORE_DESTROY" /* OPTIONS_BEFORE_DESTROY */]: {
        message: `\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`
    },
    ["OPTIONS_DESTROYED" /* OPTIONS_DESTROYED */]: {
        message: `\`destroyed\` has been renamed to \`unmounted\`.`
    },
    ["WATCH_ARRAY" /* WATCH_ARRAY */]: {
        message: `"watch" option or vm.$watch on an array value will no longer ` +
            `trigger on array mutation unless the "deep" option is specified. ` +
            `If current usage is intended, you can disable the compat behavior and ` +
            `suppress this warning with:` +
            `\n\n  configureCompat({ ${"WATCH_ARRAY" /* WATCH_ARRAY */}: false })\n`,
        link: `https://v3-migration.vuejs.org/breaking-changes/watch.html`
    },
    ["PROPS_DEFAULT_THIS" /* PROPS_DEFAULT_THIS */]: {
        message: (key) => `props default value function no longer has access to "this". The compat ` +
            `build only offers access to this.$options.` +
            `(found in prop "${key}")`,
        link: `https://v3-migration.vuejs.org/breaking-changes/props-default-this.html`
    },
    ["CUSTOM_DIR" /* CUSTOM_DIR */]: {
        message: (legacyHook, newHook) => `Custom directive hook "${legacyHook}" has been removed. ` +
            `Use "${newHook}" instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/custom-directives.html`
    },
    ["V_ON_KEYCODE_MODIFIER" /* V_ON_KEYCODE_MODIFIER */]: {
        message: `Using keyCode as v-on modifier is no longer supported. ` +
            `Use kebab-case key name modifiers instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html`
    },
    ["ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */]: {
        message: (name) => `Attribute "${name}" with v-bind value \`false\` will render ` +
            `${name}="false" instead of removing it in Vue 3. To remove the attribute, ` +
            `use \`null\` or \`undefined\` instead. If the usage is intended, ` +
            `you can disable the compat behavior and suppress this warning with:` +
            `\n\n  configureCompat({ ${"ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */}: false })\n`,
        link: `https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html`
    },
    ["ATTR_ENUMERATED_COERCION" /* ATTR_ENUMERATED_COERCION */]: {
        message: (name, value, coerced) => `Enumerated attribute "${name}" with v-bind value \`${value}\` will ` +
            `${value === null ? `be removed` : `render the value as-is`} instead of coercing the value to "${coerced}" in Vue 3. ` +
            `Always use explicit "true" or "false" values for enumerated attributes. ` +
            `If the usage is intended, ` +
            `you can disable the compat behavior and suppress this warning with:` +
            `\n\n  configureCompat({ ${"ATTR_ENUMERATED_COERCION" /* ATTR_ENUMERATED_COERCION */}: false })\n`,
        link: `https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html`
    },
    ["TRANSITION_CLASSES" /* TRANSITION_CLASSES */]: {
        message: `` // this feature cannot be runtime-detected
    },
    ["TRANSITION_GROUP_ROOT" /* TRANSITION_GROUP_ROOT */]: {
        message: `<TransitionGroup> no longer renders a root <span> element by ` +
            `default if no "tag" prop is specified. If you do not rely on the span ` +
            `for styling, you can disable the compat behavior and suppress this ` +
            `warning with:` +
            `\n\n  configureCompat({ ${"TRANSITION_GROUP_ROOT" /* TRANSITION_GROUP_ROOT */}: false })\n`,
        link: `https://v3-migration.vuejs.org/breaking-changes/transition-group.html`
    },
    ["COMPONENT_ASYNC" /* COMPONENT_ASYNC */]: {
        message: (comp) => {
            const name = getComponentName(comp);
            return (`Async component${name ? ` <${name}>` : `s`} should be explicitly created via \`defineAsyncComponent()\` ` +
                `in Vue 3. Plain functions will be treated as functional components in ` +
                `non-compat build. If you have already migrated all async component ` +
                `usage and intend to use plain functions for functional components, ` +
                `you can disable the compat behavior and suppress this ` +
                `warning with:` +
                `\n\n  configureCompat({ ${"COMPONENT_ASYNC" /* COMPONENT_ASYNC */}: false })\n`);
        },
        link: `https://v3-migration.vuejs.org/breaking-changes/async-components.html`
    },
    ["COMPONENT_FUNCTIONAL" /* COMPONENT_FUNCTIONAL */]: {
        message: (comp) => {
            const name = getComponentName(comp);
            return (`Functional component${name ? ` <${name}>` : `s`} should be defined as a plain function in Vue 3. The "functional" ` +
                `option has been removed. NOTE: Before migrating to use plain ` +
                `functions for functional components, first make sure that all async ` +
                `components usage have been migrated and its compat behavior has ` +
                `been disabled.`);
        },
        link: `https://v3-migration.vuejs.org/breaking-changes/functional-components.html`
    },
    ["COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */]: {
        message: (comp) => {
            const configMsg = `opt-in to ` +
                `Vue 3 behavior on a per-component basis with \`compatConfig: { ${"COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */}: false }\`.`;
            if (comp.props &&
                (isArray(comp.props)
                    ? comp.props.includes('modelValue')
                    : hasOwn(comp.props, 'modelValue'))) {
                return (`Component declares "modelValue" prop, which is Vue 3 usage, but ` +
                    `is running under Vue 2 compat v-model behavior. You can ${configMsg}`);
            }
            return (`v-model usage on component has changed in Vue 3. Component that expects ` +
                `to work with v-model should now use the "modelValue" prop and emit the ` +
                `"update:modelValue" event. You can update the usage and then ${configMsg}`);
        },
        link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
    },
    ["RENDER_FUNCTION" /* RENDER_FUNCTION */]: {
        message: `Vue 3's render function API has changed. ` +
            `You can opt-in to the new API with:` +
            `\n\n  configureCompat({ ${"RENDER_FUNCTION" /* RENDER_FUNCTION */}: false })\n` +
            `\n  (This can also be done per-component via the "compatConfig" option.)`,
        link: `https://v3-migration.vuejs.org/breaking-changes/render-function-api.html`
    },
    ["FILTERS" /* FILTERS */]: {
        message: `filters have been removed in Vue 3. ` +
            `The "|" symbol will be treated as native JavaScript bitwise OR operator. ` +
            `Use method calls or computed properties instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
    },
    ["PRIVATE_APIS" /* PRIVATE_APIS */]: {
        message: name => `"${name}" is a Vue 2 private API that no longer exists in Vue 3. ` +
            `If you are seeing this warning only due to a dependency, you can ` +
            `suppress this warning via { PRIVATE_APIS: 'suppress-warning' }.`
    }
};
const instanceWarned = Object.create(null);
const warnCount = Object.create(null);
function warnDeprecation(key, instance, ...args) {
    if (false) {}
    instance = instance || getCurrentInstance();
    // check user config
    const config = getCompatConfigForKey(key, instance);
    if (config === 'suppress-warning') {
        return;
    }
    const dupKey = key + args.join('');
    let compId = instance && formatComponentName(instance, instance.type);
    if (compId === 'Anonymous' && instance) {
        compId = instance.uid;
    }
    // skip if the same warning is emitted for the same component type
    const componentDupKey = dupKey + compId;
    if (componentDupKey in instanceWarned) {
        return;
    }
    instanceWarned[componentDupKey] = true;
    // same warning, but different component. skip the long message and just
    // log the key and count.
    if (dupKey in warnCount) {
        warn$1(`(deprecation ${key}) (${++warnCount[dupKey] + 1})`);
        return;
    }
    warnCount[dupKey] = 0;
    const { message, link } = deprecationData[key];
    warn$1(`(deprecation ${key}) ${typeof message === 'function' ? message(...args) : message}${link ? `\n  Details: ${link}` : ``}`);
    if (!isCompatEnabled(key, instance, true)) {
        console.error(`^ The above deprecation's compat behavior is disabled and will likely ` +
            `lead to runtime errors.`);
    }
}
const globalCompatConfig = {
    MODE: 2
};
function configureCompat(config) {
    if ((true)) {
        validateCompatConfig(config);
    }
    extend(globalCompatConfig, config);
}
const seenConfigObjects = /*#__PURE__*/ new WeakSet();
const warnedInvalidKeys = {};
// dev only
function validateCompatConfig(config, instance) {
    if (seenConfigObjects.has(config)) {
        return;
    }
    seenConfigObjects.add(config);
    for (const key of Object.keys(config)) {
        if (key !== 'MODE' &&
            !(key in deprecationData) &&
            !(key in warnedInvalidKeys)) {
            if (key.startsWith('COMPILER_')) {
                if (isRuntimeOnly()) {
                    warn$1(`Deprecation config "${key}" is compiler-specific and you are ` +
                        `running a runtime-only build of Vue. This deprecation should be ` +
                        `configured via compiler options in your build setup instead.\n` +
                        `Details: https://v3-migration.vuejs.org/breaking-changes/migration-build.html`);
                }
            }
            else {
                warn$1(`Invalid deprecation config "${key}".`);
            }
            warnedInvalidKeys[key] = true;
        }
    }
    if (instance && config["OPTIONS_DATA_MERGE" /* OPTIONS_DATA_MERGE */] != null) {
        warn$1(`Deprecation config "${"OPTIONS_DATA_MERGE" /* OPTIONS_DATA_MERGE */}" can only be configured globally.`);
    }
}
function getCompatConfigForKey(key, instance) {
    const instanceConfig = instance && instance.type.compatConfig;
    if (instanceConfig && key in instanceConfig) {
        return instanceConfig[key];
    }
    return globalCompatConfig[key];
}
function isCompatEnabled(key, instance, enableForBuiltIn = false) {
    // skip compat for built-in components
    if (!enableForBuiltIn && instance && instance.type.__isBuiltIn) {
        return false;
    }
    const rawMode = getCompatConfigForKey('MODE', instance) || 2;
    const val = getCompatConfigForKey(key, instance);
    const mode = isFunction(rawMode)
        ? rawMode(instance && instance.type)
        : rawMode;
    if (mode === 2) {
        return val !== false;
    }
    else {
        return val === true || val === 'suppress-warning';
    }
}
/**
 * Use this for features that are completely removed in non-compat build.
 */
function assertCompatEnabled(key, instance, ...args) {
    if (!isCompatEnabled(key, instance)) {
        throw new Error(`${key} compat has been disabled.`);
    }
    else if ((true)) {
        warnDeprecation(key, instance, ...args);
    }
}
/**
 * Use this for features where legacy usage is still possible, but will likely
 * lead to runtime error if compat is disabled. (warn in all cases)
 */
function softAssertCompatEnabled(key, instance, ...args) {
    if ((true)) {
        warnDeprecation(key, instance, ...args);
    }
    return isCompatEnabled(key, instance);
}
/**
 * Use this for features with the same syntax but with mutually exclusive
 * behavior in 2 vs 3. Only warn if compat is enabled.
 * e.g. render function
 */
function checkCompatEnabled(key, instance, ...args) {
    const enabled = isCompatEnabled(key, instance);
    if (( true) && enabled) {
        warnDeprecation(key, instance, ...args);
    }
    return enabled;
}

const eventRegistryMap = /*#__PURE__*/ new WeakMap();
function getRegistry(instance) {
    let events = eventRegistryMap.get(instance);
    if (!events) {
        eventRegistryMap.set(instance, (events = Object.create(null)));
    }
    return events;
}
function on(instance, event, fn) {
    if (isArray(event)) {
        event.forEach(e => on(instance, e, fn));
    }
    else {
        if (event.startsWith('hook:')) {
            assertCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance, event);
        }
        else {
            assertCompatEnabled("INSTANCE_EVENT_EMITTER" /* INSTANCE_EVENT_EMITTER */, instance);
        }
        const events = getRegistry(instance);
        (events[event] || (events[event] = [])).push(fn);
    }
    return instance.proxy;
}
function once(instance, event, fn) {
    const wrapped = (...args) => {
        off(instance, event, wrapped);
        fn.call(instance.proxy, ...args);
    };
    wrapped.fn = fn;
    on(instance, event, wrapped);
    return instance.proxy;
}
function off(instance, event, fn) {
    assertCompatEnabled("INSTANCE_EVENT_EMITTER" /* INSTANCE_EVENT_EMITTER */, instance);
    const vm = instance.proxy;
    // all
    if (!event) {
        eventRegistryMap.set(instance, Object.create(null));
        return vm;
    }
    // array of events
    if (isArray(event)) {
        event.forEach(e => off(instance, e, fn));
        return vm;
    }
    // specific event
    const events = getRegistry(instance);
    const cbs = events[event];
    if (!cbs) {
        return vm;
    }
    if (!fn) {
        events[event] = undefined;
        return vm;
    }
    events[event] = cbs.filter(cb => !(cb === fn || cb.fn === fn));
    return vm;
}
function emit$1(instance, event, args) {
    const cbs = getRegistry(instance)[event];
    if (cbs) {
        callWithAsyncErrorHandling(cbs.map(cb => cb.bind(instance.proxy)), instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    return instance.proxy;
}

const compatModelEventPrefix = `onModelCompat:`;
const warnedTypes = new WeakSet();
function convertLegacyVModelProps(vnode) {
    const { type, shapeFlag, props, dynamicProps } = vnode;
    const comp = type;
    if (shapeFlag & 6 /* COMPONENT */ && props && 'modelValue' in props) {
        if (!isCompatEnabled("COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */, 
        // this is a special case where we want to use the vnode component's
        // compat config instead of the current rendering instance (which is the
        // parent of the component that exposes v-model)
        { type })) {
            return;
        }
        if (( true) && !warnedTypes.has(comp)) {
            pushWarningContext(vnode);
            warnDeprecation("COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */, { type }, comp);
            popWarningContext();
            warnedTypes.add(comp);
        }
        // v3 compiled model code -> v2 compat props
        // modelValue -> value
        // onUpdate:modelValue -> onModelCompat:input
        const model = comp.model || {};
        applyModelFromMixins(model, comp.mixins);
        const { prop = 'value', event = 'input' } = model;
        if (prop !== 'modelValue') {
            props[prop] = props.modelValue;
            delete props.modelValue;
        }
        // important: update dynamic props
        if (dynamicProps) {
            dynamicProps[dynamicProps.indexOf('modelValue')] = prop;
        }
        props[compatModelEventPrefix + event] = props['onUpdate:modelValue'];
        delete props['onUpdate:modelValue'];
    }
}
function applyModelFromMixins(model, mixins) {
    if (mixins) {
        mixins.forEach(m => {
            if (m.model)
                extend(model, m.model);
            if (m.mixins)
                applyModelFromMixins(model, m.mixins);
        });
    }
}
function compatModelEmit(instance, event, args) {
    if (!isCompatEnabled("COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */, instance)) {
        return;
    }
    const props = instance.vnode.props;
    const modelHandler = props && props[compatModelEventPrefix + event];
    if (modelHandler) {
        callWithErrorHandling(modelHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}

function emit$2(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
        return;
    const props = instance.vnode.props || EMPTY_OBJ;
    if ((true)) {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) &&
                !((event.startsWith('hook:') ||
                        event.startsWith(compatModelEventPrefix)))) {
                if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
                    warn$1(`Component emitted event "${event}" but it is neither declared in ` +
                        `the emits option nor as an "${toHandlerKey(event)}" prop.`);
                }
            }
            else {
                const validator = emitsOptions[event];
                if (isFunction(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) {
                        warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                    }
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        if (number) {
            args = rawArgs.map(toNumber);
        }
    }
    if (true) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((true)) {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
            warn$1(`Event "${lowerCaseEvent}" is emitted in component ` +
                `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` +
                `Note that HTML attributes are case-insensitive and you cannot use ` +
                `v-on to listen to camelCase events when using in-DOM templates. ` +
                `You should probably use "${hyphenate(event)}" instead of "${event}".`);
        }
    }
    let handlerName;
    let handler = props[(handlerName = toHandlerKey(event))] ||
        // also try camelCase event handler (#2249)
        props[(handlerName = toHandlerKey(camelize(event)))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handler = props[(handlerName = toHandlerKey(hyphenate(event)))];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            instance.emitted = {};
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    {
        compatModelEmit(instance, event, args);
        return emit$1(instance, event, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) {
        return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if ( true && !isFunction(comp)) {
        const extendEmits = (raw) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if (isArray(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        extend(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
        return false;
    }
    if (key.startsWith(compatModelEventPrefix)) {
        return true;
    }
    key = key.slice(2).replace(/Once$/, '');
    return (hasOwn(options, key[0].toLowerCase() + key.slice(1)) ||
        hasOwn(options, hyphenate(key)) ||
        hasOwn(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = (instance && instance.type.__scopeId) || null;
    // v2 pre-compiled components uses _scopeId instead of __scopeId
    if (!currentScopeId) {
        currentScopeId = (instance && instance.type._scopeId) || null;
    }
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */
function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */
const withScopeId = (_id) => withCtx;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // true only
) {
    if (!ctx)
        return fn;
    // already normalized
    if (fn._n) {
        return fn;
    }
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) {
            setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
            setBlockTracking(1);
        }
        if (true) {
            devtoolsComponentUpdated(ctx);
        }
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    // compat build only flag to distinguish scoped slots from non-scoped ones
    if (isNonScopedSlot) {
        renderFnWithContext._ns = true;
    }
    return renderFnWithContext;
}

/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    if ((true)) {
        accessedAttrs = false;
    }
    try {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (( true) && attrs === props) {
                markAttrsAccessed();
            }
            result = normalizeVNode(render.length > 1
                ? render(props, ( true)
                    ? {
                        get attrs() {
                            markAttrsAccessed();
                            return attrs;
                        },
                        slots,
                        emit
                    }
                    : 0)
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
    }
    catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (( true) &&
        result.patchFlag > 0 &&
        result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */) {
        [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & (1 /* ELEMENT */ | 6 /* COMPONENT */)) {
                if (propsOptions && keys.some(isModelListener)) {
                    // If a v-model listener (onUpdate:xxx) has a corresponding declared
                    // prop, it indicates this component expects to handle v-model and
                    // it should not fallthrough.
                    // related: #1543, #1643, #1989
                    fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
            }
            else if (( true) && !accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for (let i = 0, l = allAttrs.length; i < l; i++) {
                    const key = allAttrs[i];
                    if (isOn(key)) {
                        // ignore v-model handlers when they fail to fallthrough
                        if (!isModelListener(key)) {
                            // remove `on`, lowercase first letter to reflect event casing
                            // accurately
                            eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                        }
                    }
                    else {
                        extraAttrs.push(key);
                    }
                }
                if (extraAttrs.length) {
                    warn$1(`Extraneous non-props attributes (` +
                        `${extraAttrs.join(', ')}) ` +
                        `were passed to component but could not be automatically inherited ` +
                        `because component renders fragment or text root nodes.`);
                }
                if (eventAttrs.length) {
                    warn$1(`Extraneous non-emits event listeners (` +
                        `${eventAttrs.join(', ')}) ` +
                        `were passed to component but could not be automatically inherited ` +
                        `because component renders fragment or text root nodes. ` +
                        `If the listener is intended to be a component custom event listener only, ` +
                        `declare it using the "emits" option.`);
                }
            }
        }
    }
    if (isCompatEnabled("INSTANCE_ATTRS_CLASS_STYLE" /* INSTANCE_ATTRS_CLASS_STYLE */, instance) &&
        vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ &&
        root.shapeFlag & (1 /* ELEMENT */ | 6 /* COMPONENT */)) {
        const { class: cls, style } = vnode.props || {};
        if (cls || style) {
            if (( true) && inheritAttrs === false) {
                warnDeprecation("INSTANCE_ATTRS_CLASS_STYLE" /* INSTANCE_ATTRS_CLASS_STYLE */, instance, getComponentName(instance.type));
            }
            root = cloneVNode(root, {
                class: cls,
                style: style
            });
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (( true) && !isElementRoot(root)) {
            warn$1(`Runtime directive used on component with non-element root node. ` +
                `The directives will not function as intended.`);
        }
        // clone before mutating since the root may be a hoisted vnode
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (( true) && !isElementRoot(root)) {
            warn$1(`Component inside <Transition> renders non-element root node ` +
                `that cannot be animated.`);
        }
        root.transition = vnode.transition;
    }
    if (( true) && setRoot) {
        setRoot(root);
    }
    else {
        result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & (6 /* COMPONENT */ | 1 /* ELEMENT */) ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (( true) && (prevChildren || nextChildren) && isHmrUpdating) {
        return true;
    }
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = (SuspenseImpl );
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (isFunction(eventListener)) {
        eventListener();
    }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            triggerEvent(n2, 'onPending');
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if ( true && !hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = toNumber(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((true)) {
                if (!resume && !suspense.pendingBranch) {
                    throw new Error(`suspense.resolve() is called without a pending branch.`);
                }
                if (suspense.isUnmounted) {
                    throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
                }
            }
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, 'onResolve');
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, 'onFallback');
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((true)) {
                    pushWarningContext(vnode);
                }
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((true)) {
                    popWarningContext();
                }
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren
        ? normalizeSuspenseSlot(children.fallback)
        : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (isFunction(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (isArray(s)) {
        const singleChild = filterSingleRoot(s);
        if (( true) && !singleChild) {
            warn$1(`<Suspense> slots expect a single root node.`);
        }
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) {
        s.dynamicChildren = block.filter(c => c !== s);
    }
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (isArray(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if ((true)) {
            warn$1(`provide() can only be used inside setup().`);
        }
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue)
                ? defaultValue.call(instance.proxy)
                : defaultValue;
        }
        else if ((true)) {
            warn$1(`injection "${String(key)}" not found.`);
        }
    }
    else if ((true)) {
        warn$1(`inject() can only be used inside setup() or functional components.`);
    }
}

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, (( true)
        ? Object.assign(Object.assign({}, options), { flush: 'post' }) : 0));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, (( true)
        ? Object.assign(Object.assign({}, options), { flush: 'sync' }) : 0));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (( true) && !isFunction(cb)) {
        warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. ` +
            `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
            `supports \`watch(source, cb, options?) signature.`);
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    if (( true) && !cb) {
        if (immediate !== undefined) {
            warn$1(`watch() "immediate" option is only respected when using the ` +
                `watch(source, callback, options?) signature.`);
        }
        if (deep !== undefined) {
            warn$1(`watch() "deep" option is only respected when using the ` +
                `watch(source, callback, options?) signature.`);
        }
    }
    const warnInvalidSource = (s) => {
        warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
    }
    else if (isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(s => isReactive(s) || isShallow(s));
        getter = () => source.map(s => {
            if (isRef(s)) {
                return s.value;
            }
            else if (isReactive(s)) {
                return traverse(s);
            }
            else if (isFunction(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
            else {
                ( true) && warnInvalidSource(s);
            }
        });
    }
    else if (isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onCleanup]);
            };
        }
    }
    else {
        getter = NOOP;
        ( true) && warnInvalidSource(source);
    }
    // 2.x array mutation watch compat
    if (cb && !deep) {
        const baseGetter = getter;
        getter = () => {
            const val = baseGetter();
            if (isArray(val) &&
                checkCompatEnabled("WATCH_ARRAY" /* WATCH_ARRAY */, instance)) {
                traverse(val);
            }
            return val;
        };
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
        cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = NOOP;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!effect.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
                    : hasChanged(newValue, oldValue)) ||
                (isArray(newValue) &&
                    isCompatEnabled("WATCH_ARRAY" /* WATCH_ARRAY */, instance))) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            effect.run();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job; // the scheduler function gets called directly
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => queuePreFlushCb(job);
    }
    const effect = new ReactiveEffect(getter, scheduler);
    if ((true)) {
        effect.onTrack = onTrack;
        effect.onTrigger = onTrigger;
    }
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = effect.run();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    }
    else {
        effect.run();
    }
    return () => {
        effect.stop();
        if (instance && instance.scope) {
            remove(instance.scope.effects, effect);
        }
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source)
        ? source.includes('.')
            ? createPathGetter(publicThis, source)
            : () => publicThis[source]
        : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
        cb = value;
    }
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
        setCurrentInstance(cur);
    }
    else {
        unsetCurrentInstance();
    }
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function traverse(value, seen) {
    if (!isObject(value) || value["__v_skip" /* SKIP */]) {
        return value;
    }
    seen = seen || new Set();
    if (seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (isSet(value) || isMap(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else if (isPlainObject(value)) {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                // locate first non-comment child
                for (const c of children) {
                    if (c.type !== Comment) {
                        if (( true) && hasFound) {
                            // warn more than one non-comment child
                            warn$1('<transition> can only be used on a single element or component. ' +
                                'Use <transition-group> for lists.');
                            break;
                        }
                        child = c;
                        hasFound = true;
                        if (false)
                            {}
                    }
                }
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            // check mode
            if (( true) &&
                mode &&
                mode !== 'in-out' &&
                mode !== 'out-in' &&
                mode !== 'default') {
                warn$1(`invalid <transition> mode: ${mode}`);
            }
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out' && innerChild.type !== Comment) {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
{
    BaseTransitionImpl.__isBuiltIn = true;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook(hook, args);
        if (isArray(hook)) {
            if (hook.every(hook => hook.length <= 1))
                done();
        }
        else if (hook.length <= 1) {
            done();
        }
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                callAsyncHook(hook, [el, done]);
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                callAsyncHook(onLeave, [el, done]);
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // #5360 inherit parent key in case of <template v-for>
        const key = parentKey == null
            ? child.key
            : String(parentKey) + String(child.key != null ? child.key : i);
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

// implementation, close to no-op
function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(err => {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise((resolve, reject) => {
                            const userRetry = () => resolve(retry());
                            const userFail = () => reject(err);
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then((comp) => {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (( true) && !comp) {
                        warn$1(`Async component loader resolved to undefined. ` +
                            `If you are using retry(), make sure to return its return value.`);
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (( true) && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error(`Invalid async component load result: ${comp}`);
                    }
                    resolvedComp = comp;
                    return comp;
                })));
    };
    return defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved() {
            return resolvedComp;
        },
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if ((suspensible && instance.suspense) ||
                (isInSSRComponentSetup)) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = ref(false);
            const error = ref();
            const delayed = ref(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    // parent is keep-alive, force update so the loaded component's
                    // name is taken into account
                    queueJob(instance.parent.update);
                }
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref, props, children, shapeFlag }, parent }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) {
            return () => {
                const children = slots.default && slots.default();
                return children && children.length === 1 ? children[0] : children;
            };
        }
        const cache = new Map();
        const keys = new Set();
        let current = null;
        if (true) {
            instance.__v_cache = cache;
        }
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    invokeArrayFns(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
            if (true) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    invokeArrayFns(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
            if (true) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((true)) {
                    warn$1(`KeepAlive should contain exactly one component child.`);
                }
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode)
                ? vnode.type.__asyncResolved || {}
                : comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
{
    KeepAliveImpl.__isBuildIn = true;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (isArray(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if (isString(pattern)) {
        return pattern.split(',').includes(name);
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            return hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        remove(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                unsetCurrentInstance();
                resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((true)) {
        const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
        warn$1(`${apiName} is called when there is no active component instance to be ` +
            `associated with. ` +
            `Lifecycle injection APIs can only be used during execution of setup().` +
            (` If you are using async setup(), make sure to register lifecycle ` +
                    `hooks before the first await statement.`
                ));
    }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */) &&
    injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
}

function getCompatChildren(instance) {
    assertCompatEnabled("INSTANCE_CHILDREN" /* INSTANCE_CHILDREN */, instance);
    const root = instance.subTree;
    const children = [];
    if (root) {
        walk(root, children);
    }
    return children;
}
function walk(vnode, children) {
    if (vnode.component) {
        children.push(vnode.component.proxy);
    }
    else if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
        const vnodes = vnode.children;
        for (let i = 0; i < vnodes.length; i++) {
            walk(vnodes[i], children);
        }
    }
}

function getCompatListeners(instance) {
    assertCompatEnabled("INSTANCE_LISTENERS" /* INSTANCE_LISTENERS */, instance);
    const listeners = {};
    const rawProps = instance.vnode.props;
    if (!rawProps) {
        return listeners;
    }
    for (const key in rawProps) {
        if (isOn(key)) {
            listeners[key[2].toLowerCase() + key.slice(3)] = rawProps[key];
        }
    }
    return listeners;
}

const legacyDirectiveHookMap = {
    beforeMount: 'bind',
    mounted: 'inserted',
    updated: ['update', 'componentUpdated'],
    unmounted: 'unbind'
};
function mapCompatDirectiveHook(name, dir, instance) {
    const mappedName = legacyDirectiveHookMap[name];
    if (mappedName) {
        if (isArray(mappedName)) {
            const hook = [];
            mappedName.forEach(mapped => {
                const mappedHook = dir[mapped];
                if (mappedHook) {
                    softAssertCompatEnabled("CUSTOM_DIR" /* CUSTOM_DIR */, instance, mapped, name);
                    hook.push(mappedHook);
                }
            });
            return hook.length ? hook : undefined;
        }
        else {
            if (dir[mappedName]) {
                softAssertCompatEnabled("CUSTOM_DIR" /* CUSTOM_DIR */, instance, mappedName, name);
            }
            return dir[mappedName];
        }
    }
}

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn$1('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( true) && warn$1(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getExposeProxy(internalInstance) ||
        internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
        if (isFunction(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        if (dir.deep) {
            traverse(value);
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name];
        if (!hook) {
            hook = mapCompatDirectiveHook(name, binding.dir, instance);
        }
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            resetTracking();
        }
    }
}

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
const FILTERS = 'filters';
/**
 * @private
 */
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if (isString(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
/**
 * v2 compat only
 * @internal
 */
function resolveFilter(name) {
    return resolveAsset(FILTERS, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false /* do not include inferred name to avoid breaking existing code */);
            if (selfName &&
                (selfName === name ||
                    selfName === camelize(name) ||
                    selfName === capitalize(camelize(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) {
            // fallback to implicit self-reference
            return Component;
        }
        if (( true) && warnMissing && !res) {
            const extra = type === COMPONENTS
                ? `\nIf this is a native custom element, make sure to exclude it from ` +
                    `component resolution via compilerOptions.isCustomElement.`
                : ``;
            warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    }
    else if ((true)) {
        warn$1(`resolve${capitalize(type.slice(0, -1))} ` +
            `can only be used in render() or setup().`);
    }
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[camelize(name)] ||
            registry[capitalize(camelize(name))]));
}

function convertLegacyRenderFn(instance) {
    const Component = instance.type;
    const render = Component.render;
    // v3 runtime compiled, or already checked / wrapped
    if (!render || render._rc || render._compatChecked || render._compatWrapped) {
        return;
    }
    if (render.length >= 2) {
        // v3 pre-compiled function, since v2 render functions never need more than
        // 2 arguments, and v2 functional render functions would have already been
        // normalized into v3 functional components
        render._compatChecked = true;
        return;
    }
    // v2 render function, try to provide compat
    if (checkCompatEnabled("RENDER_FUNCTION" /* RENDER_FUNCTION */, instance)) {
        const wrapped = (Component.render = function compatRender() {
            // @ts-ignore
            return render.call(this, compatH);
        });
        // @ts-ignore
        wrapped._compatWrapped = true;
    }
}
function compatH(type, propsOrChildren, children) {
    if (!type) {
        type = Comment;
    }
    // to support v2 string component name look!up
    if (typeof type === 'string') {
        const t = hyphenate(type);
        if (t === 'transition' || t === 'transition-group' || t === 'keep-alive') {
            // since transition and transition-group are runtime-dom-specific,
            // we cannot import them directly here. Instead they are registered using
            // special keys in @vue/compat entry.
            type = `__compat__${t}`;
        }
        type = resolveDynamicComponent(type);
    }
    const l = arguments.length;
    const is2ndArgArrayChildren = isArray(propsOrChildren);
    if (l === 2 || is2ndArgArrayChildren) {
        if (isObject(propsOrChildren) && !is2ndArgArrayChildren) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return convertLegacySlots(createVNode(type, null, [propsOrChildren]));
            }
            // props without children
            return convertLegacySlots(convertLegacyDirectives(createVNode(type, convertLegacyProps(propsOrChildren, type)), propsOrChildren));
        }
        else {
            // omit props
            return convertLegacySlots(createVNode(type, null, propsOrChildren));
        }
    }
    else {
        if (isVNode(children)) {
            children = [children];
        }
        return convertLegacySlots(convertLegacyDirectives(createVNode(type, convertLegacyProps(propsOrChildren, type), children), propsOrChildren));
    }
}
const skipLegacyRootLevelProps = /*#__PURE__*/ makeMap('staticStyle,staticClass,directives,model,hook');
function convertLegacyProps(legacyProps, type) {
    if (!legacyProps) {
        return null;
    }
    const converted = {};
    for (const key in legacyProps) {
        if (key === 'attrs' || key === 'domProps' || key === 'props') {
            extend(converted, legacyProps[key]);
        }
        else if (key === 'on' || key === 'nativeOn') {
            const listeners = legacyProps[key];
            for (const event in listeners) {
                let handlerKey = convertLegacyEventKey(event);
                if (key === 'nativeOn')
                    handlerKey += `Native`;
                const existing = converted[handlerKey];
                const incoming = listeners[event];
                if (existing !== incoming) {
                    if (existing) {
                        converted[handlerKey] = [].concat(existing, incoming);
                    }
                    else {
                        converted[handlerKey] = incoming;
                    }
                }
            }
        }
        else if (!skipLegacyRootLevelProps(key)) {
            converted[key] = legacyProps[key];
        }
    }
    if (legacyProps.staticClass) {
        converted.class = normalizeClass([legacyProps.staticClass, converted.class]);
    }
    if (legacyProps.staticStyle) {
        converted.style = normalizeStyle([legacyProps.staticStyle, converted.style]);
    }
    if (legacyProps.model && isObject(type)) {
        // v2 compiled component v-model
        const { prop = 'value', event = 'input' } = type.model || {};
        converted[prop] = legacyProps.model.value;
        converted[compatModelEventPrefix + event] = legacyProps.model.callback;
    }
    return converted;
}
function convertLegacyEventKey(event) {
    // normalize v2 event prefixes
    if (event[0] === '&') {
        event = event.slice(1) + 'Passive';
    }
    if (event[0] === '~') {
        event = event.slice(1) + 'Once';
    }
    if (event[0] === '!') {
        event = event.slice(1) + 'Capture';
    }
    return toHandlerKey(event);
}
function convertLegacyDirectives(vnode, props) {
    if (props && props.directives) {
        return withDirectives(vnode, props.directives.map(({ name, value, arg, modifiers }) => {
            return [
                resolveDirective(name),
                value,
                arg,
                modifiers
            ];
        }));
    }
    return vnode;
}
function convertLegacySlots(vnode) {
    const { props, children } = vnode;
    let slots;
    if (vnode.shapeFlag & 6 /* COMPONENT */ && isArray(children)) {
        slots = {};
        // check "slot" property on vnodes and turn them into v3 function slots
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const slotName = (isVNode(child) && child.props && child.props.slot) || 'default';
            const slot = slots[slotName] || (slots[slotName] = []);
            if (isVNode(child) && child.type === 'template') {
                slot.push(child.children);
            }
            else {
                slot.push(child);
            }
        }
        if (slots) {
            for (const key in slots) {
                const slotChildren = slots[key];
                slots[key] = () => slotChildren;
                slots[key]._ns = true; /* non-scoped slot */
            }
        }
    }
    const scopedSlots = props && props.scopedSlots;
    if (scopedSlots) {
        delete props.scopedSlots;
        if (slots) {
            extend(slots, scopedSlots);
        }
        else {
            slots = scopedSlots;
        }
    }
    if (slots) {
        normalizeChildren(vnode, slots);
    }
    return vnode;
}
function defineLegacyVNodeProperties(vnode) {
    /* istanbul ignore if */
    if (isCompatEnabled("RENDER_FUNCTION" /* RENDER_FUNCTION */, currentRenderingInstance, true /* enable for built-ins */) &&
        isCompatEnabled("PRIVATE_APIS" /* PRIVATE_APIS */, currentRenderingInstance, true /* enable for built-ins */)) {
        const context = currentRenderingInstance;
        const getInstance = () => vnode.component && vnode.component.proxy;
        let componentOptions;
        Object.defineProperties(vnode, {
            tag: { get: () => vnode.type },
            data: { get: () => vnode.props || {}, set: p => (vnode.props = p) },
            elm: { get: () => vnode.el },
            componentInstance: { get: getInstance },
            child: { get: getInstance },
            text: { get: () => (isString(vnode.children) ? vnode.children : null) },
            context: { get: () => context && context.proxy },
            componentOptions: {
                get: () => {
                    if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
                        if (componentOptions) {
                            return componentOptions;
                        }
                        return (componentOptions = {
                            Ctor: vnode.type,
                            propsData: vnode.props,
                            children: vnode.children
                        });
                    }
                }
            }
        });
    }
}

const normalizedFunctionalComponentMap = new Map();
const legacySlotProxyHandlers = {
    get(target, key) {
        const slot = target[key];
        return slot && slot();
    }
};
function convertLegacyFunctionalComponent(comp) {
    if (normalizedFunctionalComponentMap.has(comp)) {
        return normalizedFunctionalComponentMap.get(comp);
    }
    const legacyFn = comp.render;
    const Func = (props, ctx) => {
        const instance = getCurrentInstance();
        const legacyCtx = {
            props,
            children: instance.vnode.children || [],
            data: instance.vnode.props || {},
            scopedSlots: ctx.slots,
            parent: instance.parent && instance.parent.proxy,
            slots() {
                return new Proxy(ctx.slots, legacySlotProxyHandlers);
            },
            get listeners() {
                return getCompatListeners(instance);
            },
            get injections() {
                if (comp.inject) {
                    const injections = {};
                    resolveInjections(comp.inject, injections);
                    return injections;
                }
                return {};
            }
        };
        return legacyFn(compatH, legacyCtx);
    };
    Func.props = comp.props;
    Func.displayName = comp.name;
    Func.compatConfig = comp.compatConfig;
    // v2 functional components do not inherit attrs
    Func.inheritAttrs = false;
    normalizedFunctionalComponentMap.set(comp, Func);
    return Func;
}

/**
 * Actual implementation
 */
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = (cache && cache[index]);
    if (isArray(source) || isString(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
        }
    }
    else if (typeof source === 'number') {
        if (( true) && !Number.isInteger(source)) {
            warn$1(`The v-for range expect an integer value but got ${source}.`);
        }
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
        }
    }
    else if (isObject(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, (item, i) => renderItem(item, i, undefined, cached && cached[i]));
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    }
    else {
        ret = [];
    }
    if (cache) {
        cache[index] = ret;
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (isArray(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE ||
        (currentRenderingInstance.parent &&
            isAsyncWrapper(currentRenderingInstance.parent) &&
            currentRenderingInstance.parent.isCE)) {
        return createVNode('slot', name === 'default' ? null : { name }, fallback && fallback());
    }
    let slot = slots[name];
    if (( true) && slot && slot.length > 1) {
        warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render ` +
            `function. You need to mark this component with $dynamic-slots in the ` +
            `parent template.`);
        slot = () => [];
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) {
        slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
        ? 64 /* STABLE_FRAGMENT */
        : -2 /* BAIL */);
    if (!noSlotted && rendered.scopeId) {
        rendered.slotScopeIds = [rendered.scopeId + '-s'];
    }
    if (slot && slot._c) {
        slot._d = true;
    }
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === Comment)
            return false;
        if (child.type === Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (( true) && !isObject(obj)) {
        warn$1(`v-on with no argument expects an object value.`);
        return ret;
    }
    for (const key in obj) {
        ret[toHandlerKey(key)] = obj[key];
    }
    return ret;
}

function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
function legacyBindObjectProps(data, _tag, value, _asProp, isSync) {
    if (value && isObject(value)) {
        if (isArray(value)) {
            value = toObject(value);
        }
        for (const key in value) {
            if (isReservedProp(key)) {
                data[key] = value[key];
            }
            else if (key === 'class') {
                data.class = normalizeClass([data.class, value.class]);
            }
            else if (key === 'style') {
                data.style = normalizeClass([data.style, value.style]);
            }
            else {
                const attrs = data.attrs || (data.attrs = {});
                const camelizedKey = camelize(key);
                const hyphenatedKey = hyphenate(key);
                if (!(camelizedKey in attrs) && !(hyphenatedKey in attrs)) {
                    attrs[key] = value[key];
                    if (isSync) {
                        const on = data.on || (data.on = {});
                        on[`update:${key}`] = function ($event) {
                            value[key] = $event;
                        };
                    }
                }
            }
        }
    }
    return data;
}
function legacyBindObjectListeners(props, listeners) {
    return mergeProps(props, toHandlers(listeners));
}
function legacyRenderSlot(instance, name, fallback, props, bindObject) {
    if (bindObject) {
        props = mergeProps(props, bindObject);
    }
    return renderSlot(instance.slots, name, props, fallback && (() => fallback));
}
function legacyresolveScopedSlots(fns, raw, 
// the following are added in 2.6
hasDynamicKeys) {
    // v2 default slot doesn't have name
    return createSlots(raw || { $stable: !hasDynamicKeys }, mapKeyToName(fns));
}
function mapKeyToName(slots) {
    for (let i = 0; i < slots.length; i++) {
        const fn = slots[i];
        if (fn) {
            if (isArray(fn)) {
                mapKeyToName(fn);
            }
            else {
                fn.name = fn.key || 'default';
            }
        }
    }
    return slots;
}
const staticCacheMap = /*#__PURE__*/ new WeakMap();
function legacyRenderStatic(instance, index) {
    let cache = staticCacheMap.get(instance);
    if (!cache) {
        staticCacheMap.set(instance, (cache = []));
    }
    if (cache[index]) {
        return cache[index];
    }
    const fn = instance.type.staticRenderFns[index];
    const ctx = instance.proxy;
    return (cache[index] = fn.call(ctx, null, ctx));
}
function legacyCheckKeyCodes(instance, eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    const config = instance.appContext.config;
    const configKeyCodes = config.keyCodes || {};
    const mappedKeyCode = configKeyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !configKeyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
    }
    else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    }
    else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
    }
}
function isKeyNotMatch(expect, actual) {
    if (isArray(expect)) {
        return !expect.includes(actual);
    }
    else {
        return expect !== actual;
    }
}
function legacyMarkOnce(tree) {
    return tree;
}
function legacyBindDynamicKeys(props, values) {
    for (let i = 0; i < values.length; i += 2) {
        const key = values[i];
        if (typeof key === 'string' && key) {
            props[values[i]] = values[i + 1];
        }
    }
    return props;
}
function legacyPrependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
}

function installCompatInstanceProperties(map) {
    const set = (target, key, val) => {
        target[key] = val;
    };
    const del = (target, key) => {
        delete target[key];
    };
    extend(map, {
        $set: i => {
            assertCompatEnabled("INSTANCE_SET" /* INSTANCE_SET */, i);
            return set;
        },
        $delete: i => {
            assertCompatEnabled("INSTANCE_DELETE" /* INSTANCE_DELETE */, i);
            return del;
        },
        $mount: i => {
            assertCompatEnabled("GLOBAL_MOUNT" /* GLOBAL_MOUNT */, null /* this warning is global */);
            // root mount override from ./global.ts in installCompatMount
            return i.ctx._compat_mount || NOOP;
        },
        $destroy: i => {
            assertCompatEnabled("INSTANCE_DESTROY" /* INSTANCE_DESTROY */, i);
            // root destroy override from ./global.ts in installCompatMount
            return i.ctx._compat_destroy || NOOP;
        },
        // overrides existing accessor
        $slots: i => {
            if (isCompatEnabled("RENDER_FUNCTION" /* RENDER_FUNCTION */, i) &&
                i.render &&
                i.render._compatWrapped) {
                return new Proxy(i.slots, legacySlotProxyHandlers);
            }
            return ( true) ? shallowReadonly(i.slots) : 0;
        },
        $scopedSlots: i => {
            assertCompatEnabled("INSTANCE_SCOPED_SLOTS" /* INSTANCE_SCOPED_SLOTS */, i);
            const res = {};
            for (const key in i.slots) {
                const fn = i.slots[key];
                if (!fn._ns /* non-scoped slot */) {
                    res[key] = fn;
                }
            }
            return res;
        },
        $on: i => on.bind(null, i),
        $once: i => once.bind(null, i),
        $off: i => off.bind(null, i),
        $children: getCompatChildren,
        $listeners: getCompatListeners
    });
    /* istanbul ignore if */
    if (isCompatEnabled("PRIVATE_APIS" /* PRIVATE_APIS */, null)) {
        extend(map, {
            // needed by many libs / render fns
            $vnode: i => i.vnode,
            // inject additional properties into $options for compat
            // e.g. vuex needs this.$options.parent
            $options: i => {
                const res = extend({}, resolveMergedOptions(i));
                res.parent = i.proxy.$parent;
                res.propsData = i.vnode.props;
                return res;
            },
            // some private properties that are likely accessed...
            _self: i => i.proxy,
            _uid: i => i.uid,
            _data: i => i.data,
            _isMounted: i => i.isMounted,
            _isDestroyed: i => i.isUnmounted,
            // v2 render helpers
            $createElement: () => compatH,
            _c: () => compatH,
            _o: () => legacyMarkOnce,
            _n: () => toNumber,
            _s: () => toDisplayString,
            _l: () => renderList,
            _t: i => legacyRenderSlot.bind(null, i),
            _q: () => looseEqual,
            _i: () => looseIndexOf,
            _m: i => legacyRenderStatic.bind(null, i),
            _f: () => resolveFilter,
            _k: i => legacyCheckKeyCodes.bind(null, i),
            _b: () => legacyBindObjectProps,
            _v: () => createTextVNode,
            _e: () => createCommentVNode,
            _u: () => legacyresolveScopedSlots,
            _g: () => legacyBindObjectListeners,
            _d: () => legacyBindDynamicKeys,
            _p: () => legacyPrependModifier
        });
    }
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => {
    if (!i)
        return null;
    if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = 
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/ extend(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( true) ? shallowReadonly(i.props) : 0),
    $attrs: i => (( true) ? shallowReadonly(i.attrs) : 0),
    $slots: i => (( true) ? shallowReadonly(i.slots) : 0),
    $refs: i => (( true) ? shallowReadonly(i.refs) : 0),
    $parent: i => getPublicInstance(i.parent),
    $root: i => getPublicInstance(i.root),
    $emit: i => i.emit,
    $options: i => ( true ? resolveMergedOptions(i) : 0),
    $forceUpdate: i => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: i => ( true ? instanceWatch.bind(i) : 0)
});
{
    installCompatInstanceProperties(publicPropertiesMap);
}
const isReservedPrefix = (key) => key === '_' || key === '$';
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // for internal formatters to know that this is a Vue instance
        if (( true) && key === '__isVue') {
            return true;
        }
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (( true) &&
            setupState !== EMPTY_OBJ &&
            setupState.__isScriptSetup &&
            hasOwn(setupState, key)) {
            return setupState[key];
        }
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 1 /* SETUP */:
                        return setupState[key];
                    case 2 /* DATA */:
                        return data[key];
                    case 4 /* CONTEXT */:
                        return ctx[key];
                    case 3 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
                accessCache[key] = 1 /* SETUP */;
                return setupState[key];
            }
            else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */;
                return props[key];
            }
            else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */;
                return ctx[key];
            }
            else if ( false || shouldCacheAccess) {
                accessCache[key] = 0 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* GET */, key);
                ( true) && markAttrsAccessed();
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            hasOwn(globalProperties, key))) {
            {
                const desc = Object.getOwnPropertyDescriptor(globalProperties, key);
                if (desc.get) {
                    return desc.get.call(instance.proxy);
                }
                else {
                    const val = globalProperties[key];
                    return isFunction(val)
                        ? Object.assign(val.bind(instance.proxy), val)
                        : val;
                }
            }
        }
        else if (( true) &&
            currentRenderingInstance &&
            (!isString(key) ||
                // #1091 avoid internal isRef/isVNode checks on component instance leading
                // to infinite warning loop
                key.indexOf('__v') !== 0)) {
            if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
                warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` +
                    `character ("$" or "_") and is not proxied on the render context.`);
            }
            else if (instance === currentRenderingInstance) {
                warn$1(`Property ${JSON.stringify(key)} was accessed during render ` +
                    `but is not defined on instance.`);
            }
        }
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
        }
        else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value;
            return true;
        }
        else if (hasOwn(instance.props, key)) {
            ( true) &&
                warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( true) &&
                warn$1(`Attempting to mutate public property "${key}". ` +
                    `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        }
        else {
            if (( true) && key in instance.appContext.config.globalProperties) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    value
                });
            }
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (!!accessCache[key] ||
            (data !== EMPTY_OBJ && hasOwn(data, key)) ||
            (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key)) ||
            hasOwn(ctx, key) ||
            hasOwn(publicPropertiesMap, key) ||
            hasOwn(appContext.config.globalProperties, key));
    },
    defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
            // invalidate key cache of a getter based property #5417
            target._.accessCache[key] = 0;
        }
        else if (hasOwn(descriptor, 'value')) {
            this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
    }
};
if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
        warn$1(`Avoid app logic that relies on enumerating keys on a component instance. ` +
            `The keys will be empty in production mode to avoid performance overhead.`);
        return Reflect.ownKeys(target);
    };
}
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ extend({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !isGloballyWhitelisted(key);
        if (( true) && !has && PublicInstanceProxyHandlers.has(_, key)) {
            warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        }
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: NOOP
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach(key => {
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                    `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => setupState[key],
                set: NOOP
            });
        }
    });
}

function deepMergeData(to, from) {
    for (const key in from) {
        const toVal = to[key];
        const fromVal = from[key];
        if (key in to && isPlainObject(toVal) && isPlainObject(fromVal)) {
            ( true) && warnDeprecation("OPTIONS_DATA_MERGE" /* OPTIONS_DATA_MERGE */, null, key);
            deepMergeData(toVal, fromVal);
        }
        else {
            to[key] = fromVal;
        }
    }
    return to;
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) {
        callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */);
    }
    const { 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, 
    // public API
    expose, inheritAttrs, 
    // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = ( true) ? createDuplicateChecker() : 0;
    if ((true)) {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) {
            for (const key in propsOptions) {
                checkDuplicateProperties("Props" /* PROPS */, key);
            }
        }
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if (isFunction(methodHandler)) {
                // In dev mode, we use the `createRenderContext` function to define
                // methods to the proxy target, and those are read-only but
                // reconfigurable, so it needs to be redefined here
                if ((true)) {
                    Object.defineProperty(ctx, key, {
                        value: methodHandler.bind(publicThis),
                        configurable: true,
                        enumerable: true,
                        writable: true
                    });
                }
                else {}
                if ((true)) {
                    checkDuplicateProperties("Methods" /* METHODS */, key);
                }
            }
            else if ((true)) {
                warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
                    `Did you reference the function correctly?`);
            }
        }
    }
    if (dataOptions) {
        if (( true) && !isFunction(dataOptions)) {
            warn$1(`The data option must be a function. ` +
                `Plain object usage is no longer supported.`);
        }
        const data = dataOptions.call(publicThis, publicThis);
        if (( true) && isPromise(data)) {
            warn$1(`data() returned a Promise - note data() cannot be async; If you ` +
                `intend to perform data fetching before component renders, use ` +
                `async setup() + <Suspense>.`);
        }
        if (!isObject(data)) {
            ( true) && warn$1(`data() should return an object.`);
        }
        else {
            instance.data = reactive(data);
            if ((true)) {
                for (const key in data) {
                    checkDuplicateProperties("Data" /* DATA */, key);
                    // expose data on ctx during dev
                    if (!isReservedPrefix(key[0])) {
                        Object.defineProperty(ctx, key, {
                            configurable: true,
                            enumerable: true,
                            get: () => data[key],
                            set: NOOP
                        });
                    }
                }
            }
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = isFunction(opt)
                ? opt.bind(publicThis, publicThis)
                : isFunction(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : NOOP;
            if (( true) && get === NOOP) {
                warn$1(`Computed property "${key}" has no getter.`);
            }
            const set = !isFunction(opt) && isFunction(opt.set)
                ? opt.set.bind(publicThis)
                : ( true)
                    ? () => {
                        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
                    }
                    : 0;
            const c = computed$1({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((true)) {
                checkDuplicateProperties("Computed" /* COMPUTED */, key);
            }
        }
    }
    if (watchOptions) {
        for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
        }
    }
    if (provideOptions) {
        const provides = isFunction(provideOptions)
            ? provideOptions.call(publicThis)
            : provideOptions;
        Reflect.ownKeys(provides).forEach(key => {
            provide(key, provides[key]);
        });
    }
    if (created) {
        callHook(created, instance, "c" /* CREATED */);
    }
    function registerLifecycleHook(register, hook) {
        if (isArray(hook)) {
            hook.forEach(_hook => register(_hook.bind(publicThis)));
        }
        else if (hook) {
            register(hook.bind(publicThis));
        }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    {
        if (beforeDestroy &&
            softAssertCompatEnabled("OPTIONS_BEFORE_DESTROY" /* OPTIONS_BEFORE_DESTROY */, instance)) {
            registerLifecycleHook(onBeforeUnmount, beforeDestroy);
        }
        if (destroyed &&
            softAssertCompatEnabled("OPTIONS_DESTROYED" /* OPTIONS_DESTROYED */, instance)) {
            registerLifecycleHook(onUnmounted, destroyed);
        }
    }
    if (isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach(key => {
                Object.defineProperty(exposed, key, {
                    get: () => publicThis[key],
                    set: val => (publicThis[key] = val)
                });
            });
        }
        else if (!instance.exposed) {
            instance.exposed = {};
        }
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === NOOP) {
        instance.render = render;
    }
    if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
    }
    // asset options.
    if (components)
        instance.components = components;
    if (directives)
        instance.directives = directives;
    if (filters &&
        isCompatEnabled("FILTERS" /* FILTERS */, instance)) {
        instance.filters = filters;
    }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if (isObject(opt)) {
            if ('default' in opt) {
                injected = inject(opt.from || key, opt.default, true /* treat default function as factory */);
            }
            else {
                injected = inject(opt.from || key);
            }
        }
        else {
            injected = inject(opt);
        }
        if (isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    get: () => injected.value,
                    set: v => (injected.value = v)
                });
            }
            else {
                if ((true)) {
                    warn$1(`injected property "${key}" is a ref and will be auto-unwrapped ` +
                        `and no longer needs \`.value\` in the next minor release. ` +
                        `To opt-in to the new behavior now, ` +
                        `set \`app.config.unwrapInjectedRef = true\` (this config is ` +
                        `temporary and will not be needed in the future.)`);
                }
                ctx[key] = injected;
            }
        }
        else {
            ctx[key] = injected;
        }
        if ((true)) {
            checkDuplicateProperties("Inject" /* INJECT */, key);
        }
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray(hook)
        ? hook.map(h => h.bind(instance.proxy))
        : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if (isString(raw)) {
        const handler = ctx[raw];
        if (isFunction(handler)) {
            watch(getter, handler);
        }
        else if ((true)) {
            warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
        }
    }
    else if (isFunction(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (isObject(raw)) {
        if (isArray(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = isFunction(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if (isFunction(handler)) {
                watch(getter, handler, raw);
            }
            else if ((true)) {
                warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
            }
        }
    }
    else if ((true)) {
        warn$1(`Invalid watch option: "${key}"`, raw);
    }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
        resolved = cached;
    }
    else if (!globalMixins.length && !mixins && !extendsOptions) {
        if (isCompatEnabled("PRIVATE_APIS" /* PRIVATE_APIS */, instance)) {
            resolved = extend({}, base);
            resolved.parent = instance.parent && instance.parent.proxy;
            resolved.propsData = instance.vnode.props;
        }
        else {
            resolved = base;
        }
    }
    else {
        resolved = {};
        if (globalMixins.length) {
            globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
        }
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    if (isFunction(from)) {
        from = from.options;
    }
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
        if (asMixin && key === 'expose') {
            ( true) &&
                warn$1(`"expose" option is ignored when declared in mixins or extends. ` +
                    `It should only be declared in the base component itself.`);
        }
        else {
            const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
{
    internalOptionMergeStrats.filters = mergeObjectOptions;
}
function mergeDataFn(to, from) {
    if (!from) {
        return to;
    }
    if (!to) {
        return from;
    }
    return function mergedDataFn() {
        return (isCompatEnabled("OPTIONS_DATA_MERGE" /* OPTIONS_DATA_MERGE */, null)
            ? deepMergeData
            : extend)(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (isArray(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
        }
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
    return to ? extend(extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to)
        return from;
    if (!from)
        return to;
    const merged = extend(Object.create(null), to);
    for (const key in from) {
        merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
}

function createPropsDefaultThis(instance, rawProps, propKey) {
    return new Proxy({}, {
        get(_, key) {
            ( true) &&
                warnDeprecation("PROPS_DEFAULT_THIS" /* PROPS_DEFAULT_THIS */, null, propKey);
            // $options
            if (key === '$options') {
                return resolveMergedOptions(instance);
            }
            // props
            if (key in rawProps) {
                return rawProps[key];
            }
            // injections
            const injections = instance.type.inject;
            if (injections) {
                if (isArray(injections)) {
                    if (injections.includes(key)) {
                        return inject(key);
                    }
                }
                else if (key in injections) {
                    return inject(key);
                }
            }
        }
    });
}

function shouldSkipAttr(key, instance) {
    if (key === 'is') {
        return true;
    }
    if ((key === 'class' || key === 'style') &&
        isCompatEnabled("INSTANCE_ATTRS_CLASS_STYLE" /* INSTANCE_ATTRS_CLASS_STYLE */, instance)) {
        return true;
    }
    if (isOn(key) &&
        isCompatEnabled("INSTANCE_LISTENERS" /* INSTANCE_LISTENERS */, instance)) {
        return true;
    }
    // vue-router
    if (key.startsWith('routerView') || key === 'registerRouteInstance') {
        return true;
    }
    return false;
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
            props[key] = undefined;
        }
    }
    // validation
    if ((true)) {
        validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(( true) &&
        (instance.type.__hmrId ||
            (instance.parent && instance.parent.type.__hmrId))) &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                let key = propsToUpdate[i];
                // skip if the prop key is a declared emit event listener
                if (isEmitListener(instance.emitsOptions, key)) {
                    continue;
                }
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    }
                    else {
                        const camelizedKey = camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
                    }
                }
                else {
                    {
                        if (isOn(key) && key.endsWith('Native')) {
                            key = key.slice(0, -6); // remove Native postfix
                        }
                        else if (shouldSkipAttr(key, instance)) {
                            continue;
                        }
                    }
                    if (value !== attrs[key]) {
                        attrs[key] = value;
                        hasAttrsChanged = true;
                    }
                }
            }
        }
    }
    else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
        }
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!hasOwn(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true /* isAbsent */);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps ||
                    (!hasOwn(rawProps, key) &&
                        (!hasOwn(rawProps, key + 'Native')))) {
                    delete attrs[key];
                    hasAttrsChanged = true;
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) {
        trigger(instance, "set" /* SET */, '$attrs');
    }
    if ((true)) {
        validateProps(rawProps || {}, props, instance);
    }
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
        for (let key in rawProps) {
            // key, ref are reserved and never passed down
            if (isReservedProp(key)) {
                continue;
            }
            {
                if (key.startsWith('onHook:')) {
                    softAssertCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance, key.slice(2).toLowerCase());
                }
                if (key === 'inline-template') {
                    continue;
                }
            }
            const value = rawProps[key];
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && hasOwn(options, (camelKey = camelize(key)))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                    props[camelKey] = value;
                }
                else {
                    (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                // Any non-declared (either as a prop or an emitted event) props are put
                // into a separate `attrs` object for spreading. Make sure to preserve
                // original key casing
                {
                    if (isOn(key) && key.endsWith('Native')) {
                        key = key.slice(0, -6); // remove Native postfix
                    }
                    else if (shouldSkipAttr(key, instance)) {
                        continue;
                    }
                }
                if (!(key in attrs) || value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        const castValues = rawCastValues || EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = hasOwn(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && isFunction(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) {
                    value = propsDefaults[key];
                }
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(isCompatEnabled("PROPS_DEFAULT_THIS" /* PROPS_DEFAULT_THIS */, instance)
                        ? createPropsDefaultThis(instance, props, key)
                        : null, props);
                    unsetCurrentInstance();
                }
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (isAbsent && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === hyphenate(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
        return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if ( true && !isFunction(comp)) {
        const extendProps = (raw) => {
            if (isFunction(raw)) {
                raw = raw.options;
            }
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            extend(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        cache.set(comp, EMPTY_ARR);
        return EMPTY_ARR;
    }
    if (isArray(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (( true) && !isString(raw[i])) {
                warn$1(`props must be strings when using array syntax.`, raw[i]);
            }
            const normalizedKey = camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        if (( true) && !isObject(raw)) {
            warn$1(`invalid props options`, raw);
        }
        for (const key in raw) {
            const normalizedKey = camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    isArray(opt) || isFunction(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || hasOwn(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((true)) {
        warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
        return expectedTypes.findIndex(t => isSameType(t, type));
    }
    else if (isFunction(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        warn$1('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = isArray(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn$1(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ makeMap('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else if (expectedType === 'null') {
        valid = value === null;
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(capitalize).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => isArray(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
        // already normalized - #5353
        return rawSlot;
    }
    const normalized = withCtx((...args) => {
        if (( true) && currentInstance) {
            warn$1(`Slot "${key}" invoked outside of the render function: ` +
                `this will not track dependencies used in the slot. ` +
                `Invoke the slot function inside the render function instead.`);
        }
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if (isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if (( true) &&
                !(isCompatEnabled("RENDER_FUNCTION" /* RENDER_FUNCTION */, instance))) {
                warn$1(`Non-function value encountered for slot "${key}". ` +
                    `Prefer function slots for better performance.`);
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (( true) &&
        !isKeepAlive(instance.vnode) &&
        !(isCompatEnabled("RENDER_FUNCTION" /* RENDER_FUNCTION */, instance))) {
        warn$1(`Non-function value encountered for default slot. ` +
            `Prefer function slots for better performance.`);
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = toRaw(children);
            // make compiler marker non-enumerable
            def(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}), instance);
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (( true) && isHmrUpdating) {
                // Parent was HMR updated so slot content may have changed.
                // force update slots and mark instance for hmr as well
                extend(slots, children);
            }
            else if (optimized && type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                extend(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */) {
                    delete slots._;
                }
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots, instance);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

// dev only
function installLegacyConfigWarnings(config) {
    const legacyConfigOptions = {
        silent: "CONFIG_SILENT" /* CONFIG_SILENT */,
        devtools: "CONFIG_DEVTOOLS" /* CONFIG_DEVTOOLS */,
        ignoredElements: "CONFIG_IGNORED_ELEMENTS" /* CONFIG_IGNORED_ELEMENTS */,
        keyCodes: "CONFIG_KEY_CODES" /* CONFIG_KEY_CODES */,
        productionTip: "CONFIG_PRODUCTION_TIP" /* CONFIG_PRODUCTION_TIP */
    };
    Object.keys(legacyConfigOptions).forEach(key => {
        let val = config[key];
        Object.defineProperty(config, key, {
            enumerable: true,
            get() {
                return val;
            },
            set(newVal) {
                if (!isCopyingConfig) {
                    warnDeprecation(legacyConfigOptions[key], null);
                }
                val = newVal;
            }
        });
    });
}
function installLegacyOptionMergeStrats(config) {
    config.optionMergeStrategies = new Proxy({}, {
        get(target, key) {
            if (key in target) {
                return target[key];
            }
            if (key in internalOptionMergeStrats &&
                softAssertCompatEnabled("CONFIG_OPTION_MERGE_STRATS" /* CONFIG_OPTION_MERGE_STRATS */, null)) {
                return internalOptionMergeStrats[key];
            }
        }
    });
}

let isCopyingConfig = false;
// exported only for test
let singletonApp;
let singletonCtor;
// Legacy global Vue constructor
function createCompatVue(createApp, createSingletonApp) {
    singletonApp = createSingletonApp({});
    const Vue = (singletonCtor = function Vue(options = {}) {
        return createCompatApp(options, Vue);
    });
    function createCompatApp(options = {}, Ctor) {
        assertCompatEnabled("GLOBAL_MOUNT" /* GLOBAL_MOUNT */, null);
        const { data } = options;
        if (data &&
            !isFunction(data) &&
            softAssertCompatEnabled("OPTIONS_DATA_FN" /* OPTIONS_DATA_FN */, null)) {
            options.data = () => data;
        }
        const app = createApp(options);
        if (Ctor !== Vue) {
            applySingletonPrototype(app, Ctor);
        }
        const vm = app._createRoot(options);
        if (options.el) {
            return vm.$mount(options.el);
        }
        else {
            return vm;
        }
    }
    Vue.version = `2.6.14-compat:${"3.2.37"}`;
    Vue.config = singletonApp.config;
    Vue.use = (p, ...options) => {
        if (p && isFunction(p.install)) {
            p.install(Vue, ...options);
        }
        else if (isFunction(p)) {
            p(Vue, ...options);
        }
        return Vue;
    };
    Vue.mixin = m => {
        singletonApp.mixin(m);
        return Vue;
    };
    Vue.component = ((name, comp) => {
        if (comp) {
            singletonApp.component(name, comp);
            return Vue;
        }
        else {
            return singletonApp.component(name);
        }
    });
    Vue.directive = ((name, dir) => {
        if (dir) {
            singletonApp.directive(name, dir);
            return Vue;
        }
        else {
            return singletonApp.directive(name);
        }
    });
    Vue.options = { _base: Vue };
    let cid = 1;
    Vue.cid = cid;
    Vue.nextTick = nextTick;
    const extendCache = new WeakMap();
    function extendCtor(extendOptions = {}) {
        assertCompatEnabled("GLOBAL_EXTEND" /* GLOBAL_EXTEND */, null);
        if (isFunction(extendOptions)) {
            extendOptions = extendOptions.options;
        }
        if (extendCache.has(extendOptions)) {
            return extendCache.get(extendOptions);
        }
        const Super = this;
        function SubVue(inlineOptions) {
            if (!inlineOptions) {
                return createCompatApp(SubVue.options, SubVue);
            }
            else {
                return createCompatApp(mergeOptions(extend({}, SubVue.options), inlineOptions, internalOptionMergeStrats), SubVue);
            }
        }
        SubVue.super = Super;
        SubVue.prototype = Object.create(Vue.prototype);
        SubVue.prototype.constructor = SubVue;
        // clone non-primitive base option values for edge case of mutating
        // extended options
        const mergeBase = {};
        for (const key in Super.options) {
            const superValue = Super.options[key];
            mergeBase[key] = isArray(superValue)
                ? superValue.slice()
                : isObject(superValue)
                    ? extend(Object.create(null), superValue)
                    : superValue;
        }
        SubVue.options = mergeOptions(mergeBase, extendOptions, internalOptionMergeStrats);
        SubVue.options._base = SubVue;
        SubVue.extend = extendCtor.bind(SubVue);
        SubVue.mixin = Super.mixin;
        SubVue.use = Super.use;
        SubVue.cid = ++cid;
        extendCache.set(extendOptions, SubVue);
        return SubVue;
    }
    Vue.extend = extendCtor.bind(Vue);
    Vue.set = (target, key, value) => {
        assertCompatEnabled("GLOBAL_SET" /* GLOBAL_SET */, null);
        target[key] = value;
    };
    Vue.delete = (target, key) => {
        assertCompatEnabled("GLOBAL_DELETE" /* GLOBAL_DELETE */, null);
        delete target[key];
    };
    Vue.observable = (target) => {
        assertCompatEnabled("GLOBAL_OBSERVABLE" /* GLOBAL_OBSERVABLE */, null);
        return reactive(target);
    };
    Vue.filter = ((name, filter) => {
        if (filter) {
            singletonApp.filter(name, filter);
            return Vue;
        }
        else {
            return singletonApp.filter(name);
        }
    });
    // internal utils - these are technically internal but some plugins use it.
    const util = {
        warn: ( true) ? warn$1 : 0,
        extend,
        mergeOptions: (parent, child, vm) => mergeOptions(parent, child, vm ? undefined : internalOptionMergeStrats),
        defineReactive
    };
    Object.defineProperty(Vue, 'util', {
        get() {
            assertCompatEnabled("GLOBAL_PRIVATE_UTIL" /* GLOBAL_PRIVATE_UTIL */, null);
            return util;
        }
    });
    Vue.configureCompat = configureCompat;
    return Vue;
}
function installAppCompatProperties(app, context, render) {
    installFilterMethod(app, context);
    installLegacyOptionMergeStrats(app.config);
    if (!singletonApp) {
        // this is the call of creating the singleton itself so the rest is
        // unnecessary
        return;
    }
    installCompatMount(app, context, render);
    installLegacyAPIs(app);
    applySingletonAppMutations(app);
    if ((true))
        installLegacyConfigWarnings(app.config);
}
function installFilterMethod(app, context) {
    context.filters = {};
    app.filter = (name, filter) => {
        assertCompatEnabled("FILTERS" /* FILTERS */, null);
        if (!filter) {
            return context.filters[name];
        }
        if (( true) && context.filters[name]) {
            warn$1(`Filter "${name}" has already been registered.`);
        }
        context.filters[name] = filter;
        return app;
    };
}
function installLegacyAPIs(app) {
    // expose global API on app instance for legacy plugins
    Object.defineProperties(app, {
        // so that app.use() can work with legacy plugins that extend prototypes
        prototype: {
            get() {
                ( true) && warnDeprecation("GLOBAL_PROTOTYPE" /* GLOBAL_PROTOTYPE */, null);
                return app.config.globalProperties;
            }
        },
        nextTick: { value: nextTick },
        extend: { value: singletonCtor.extend },
        set: { value: singletonCtor.set },
        delete: { value: singletonCtor.delete },
        observable: { value: singletonCtor.observable },
        util: {
            get() {
                return singletonCtor.util;
            }
        }
    });
}
function applySingletonAppMutations(app) {
    // copy over asset registries and deopt flag
    app._context.mixins = [...singletonApp._context.mixins];
    ['components', 'directives', 'filters'].forEach(key => {
        // @ts-ignore
        app._context[key] = Object.create(singletonApp._context[key]);
    });
    // copy over global config mutations
    isCopyingConfig = true;
    for (const key in singletonApp.config) {
        if (key === 'isNativeTag')
            continue;
        if (isRuntimeOnly() &&
            (key === 'isCustomElement' || key === 'compilerOptions')) {
            continue;
        }
        const val = singletonApp.config[key];
        // @ts-ignore
        app.config[key] = isObject(val) ? Object.create(val) : val;
        // compat for runtime ignoredElements -> isCustomElement
        if (key === 'ignoredElements' &&
            isCompatEnabled("CONFIG_IGNORED_ELEMENTS" /* CONFIG_IGNORED_ELEMENTS */, null) &&
            !isRuntimeOnly() &&
            isArray(val)) {
            app.config.compilerOptions.isCustomElement = tag => {
                return val.some(v => (isString(v) ? v === tag : v.test(tag)));
            };
        }
    }
    isCopyingConfig = false;
    applySingletonPrototype(app, singletonCtor);
}
function applySingletonPrototype(app, Ctor) {
    // copy prototype augmentations as config.globalProperties
    const enabled = isCompatEnabled("GLOBAL_PROTOTYPE" /* GLOBAL_PROTOTYPE */, null);
    if (enabled) {
        app.config.globalProperties = Object.create(Ctor.prototype);
    }
    let hasPrototypeAugmentations = false;
    const descriptors = Object.getOwnPropertyDescriptors(Ctor.prototype);
    for (const key in descriptors) {
        if (key !== 'constructor') {
            hasPrototypeAugmentations = true;
            if (enabled) {
                Object.defineProperty(app.config.globalProperties, key, descriptors[key]);
            }
        }
    }
    if (( true) && hasPrototypeAugmentations) {
        warnDeprecation("GLOBAL_PROTOTYPE" /* GLOBAL_PROTOTYPE */, null);
    }
}
function installCompatMount(app, context, render) {
    let isMounted = false;
    /**
     * Vue 2 supports the behavior of creating a component instance but not
     * mounting it, which is no longer possible in Vue 3 - this internal
     * function simulates that behavior.
     */
    app._createRoot = options => {
        const component = app._component;
        const vnode = createVNode(component, options.propsData || null);
        vnode.appContext = context;
        const hasNoRender = !isFunction(component) && !component.render && !component.template;
        const emptyRender = () => { };
        // create root instance
        const instance = createComponentInstance(vnode, null, null);
        // suppress "missing render fn" warning since it can't be determined
        // until $mount is called
        if (hasNoRender) {
            instance.render = emptyRender;
        }
        setupComponent(instance);
        vnode.component = instance;
        vnode.isCompatRoot = true;
        // $mount & $destroy
        // these are defined on ctx and picked up by the $mount/$destroy
        // public property getters on the instance proxy.
        // Note: the following assumes DOM environment since the compat build
        // only targets web. It essentially includes logic for app.mount from
        // both runtime-core AND runtime-dom.
        instance.ctx._compat_mount = (selectorOrEl) => {
            if (isMounted) {
                ( true) && warn$1(`Root instance is already mounted.`);
                return;
            }
            let container;
            if (typeof selectorOrEl === 'string') {
                // eslint-disable-next-line
                const result = document.querySelector(selectorOrEl);
                if (!result) {
                    ( true) &&
                        warn$1(`Failed to mount root instance: selector "${selectorOrEl}" returned null.`);
                    return;
                }
                container = result;
            }
            else {
                // eslint-disable-next-line
                container = selectorOrEl || document.createElement('div');
            }
            const isSVG = container instanceof SVGElement;
            // HMR root reload
            if ((true)) {
                context.reload = () => {
                    const cloned = cloneVNode(vnode);
                    // compat mode will use instance if not reset to null
                    cloned.component = null;
                    render(cloned, container, isSVG);
                };
            }
            // resolve in-DOM template if component did not provide render
            // and no setup/mixin render functions are provided (by checking
            // that the instance is still using the placeholder render fn)
            if (hasNoRender && instance.render === emptyRender) {
                // root directives check
                if ((true)) {
                    for (let i = 0; i < container.attributes.length; i++) {
                        const attr = container.attributes[i];
                        if (attr.name !== 'v-cloak' && /^(v-|:|@)/.test(attr.name)) {
                            warnDeprecation("GLOBAL_MOUNT_CONTAINER" /* GLOBAL_MOUNT_CONTAINER */, null);
                            break;
                        }
                    }
                }
                instance.render = null;
                component.template = container.innerHTML;
                finishComponentSetup(instance, false, true /* skip options */);
            }
            // clear content before mounting
            container.innerHTML = '';
            // TODO hydration
            render(vnode, container, isSVG);
            if (container instanceof Element) {
                container.removeAttribute('v-cloak');
                container.setAttribute('data-v-app', '');
            }
            isMounted = true;
            app._container = container;
            container.__vue_app__ = app;
            if (true) {
                devtoolsInitApp(app, version);
            }
            return instance.proxy;
        };
        instance.ctx._compat_destroy = () => {
            if (isMounted) {
                render(null, app._container);
                if (true) {
                    devtoolsUnmountApp(app);
                }
                delete app._container.__vue_app__;
            }
            else {
                const { bum, scope, um } = instance;
                // beforeDestroy hooks
                if (bum) {
                    invokeArrayFns(bum);
                }
                if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                    instance.emit('hook:beforeDestroy');
                }
                // stop effects
                if (scope) {
                    scope.stop();
                }
                // unmounted hook
                if (um) {
                    invokeArrayFns(um);
                }
                if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                    instance.emit('hook:destroyed');
                }
            }
        };
        return instance.proxy;
    };
}
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
const patched = new WeakSet();
function defineReactive(obj, key, val) {
    // it's possible for the original object to be mutated after being defined
    // and expecting reactivity... we are covering it here because this seems to
    // be a bit more common.
    if (isObject(val) && !isReactive(val) && !patched.has(val)) {
        const reactiveVal = reactive(val);
        if (isArray(val)) {
            methodsToPatch.forEach(m => {
                // @ts-ignore
                val[m] = (...args) => {
                    // @ts-ignore
                    Array.prototype[m].call(reactiveVal, ...args);
                };
            });
        }
        else {
            Object.keys(val).forEach(key => {
                try {
                    defineReactiveSimple(val, key, val[key]);
                }
                catch (e) { }
            });
        }
    }
    const i = obj.$;
    if (i && obj === i.proxy) {
        // target is a Vue instance - define on instance.ctx
        defineReactiveSimple(i.ctx, key, val);
        i.accessCache = Object.create(null);
    }
    else if (isReactive(obj)) {
        obj[key] = val;
    }
    else {
        defineReactiveSimple(obj, key, val);
    }
}
function defineReactiveSimple(obj, key, val) {
    val = isObject(val) ? reactive(val) : val;
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            track(obj, "get" /* GET */, key);
            return val;
        },
        set(newVal) {
            val = isObject(newVal) ? reactive(newVal) : newVal;
            trigger(obj, "set" /* SET */, key, newVal);
        }
    });
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!isFunction(rootComponent)) {
            rootComponent = Object.assign({}, rootComponent);
        }
        if (rootProps != null && !isObject(rootProps)) {
            ( true) && warn$1(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((true)) {
                    warn$1(`app.config cannot be replaced. Modify individual options instead.`);
                }
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( true) && warn$1(`Plugin has already been applied to target app.`);
                }
                else if (plugin && isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((true)) {
                    warn$1(`A plugin must either be a function or an object with an "install" ` +
                        `function.`);
                }
                return app;
            },
            mixin(mixin) {
                if (true) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                    }
                    else if ((true)) {
                        warn$1('Mixin has already been applied to target app' +
                            (mixin.name ? `: ${mixin.name}` : ''));
                    }
                }
                else {}
                return app;
            },
            component(name, component) {
                if ((true)) {
                    validateComponentName(name, context.config);
                }
                if (!component) {
                    return context.components[name];
                }
                if (( true) && context.components[name]) {
                    warn$1(`Component "${name}" has already been registered in target app.`);
                }
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((true)) {
                    validateDirectiveName(name);
                }
                if (!directive) {
                    return context.directives[name];
                }
                if (( true) && context.directives[name]) {
                    warn$1(`Directive "${name}" has already been registered in target app.`);
                }
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    // #5571
                    if (( true) && rootContainer.__vue_app__) {
                        warn$1(`There is already an app instance mounted on the host container.\n` +
                            ` If you want to mount another app on the same host container,` +
                            ` you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    }
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((true)) {
                        context.reload = () => {
                            render(cloneVNode(vnode), rootContainer, isSVG);
                        };
                    }
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer, isSVG);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (true) {
                        app._instance = vnode.component;
                        devtoolsInitApp(app, version);
                    }
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
                else if ((true)) {
                    warn$1(`App has already been mounted.\n` +
                        `If you want to remount the same app, move your app creation logic ` +
                        `into a factory function and create fresh app instances for each ` +
                        `mount - e.g. \`const createMyApp = () => createApp(App)\``);
                }
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (true) {
                        app._instance = null;
                        devtoolsUnmountApp(app);
                    }
                    delete app._container.__vue_app__;
                }
                else if ((true)) {
                    warn$1(`Cannot unmount an app that is not mounted.`);
                }
            },
            provide(key, value) {
                if (( true) && key in context.provides) {
                    warn$1(`App already provides property with key "${String(key)}". ` +
                        `It will be overwritten with the new value.`);
                }
                context.provides[key] = value;
                return app;
            }
        });
        {
            installAppCompatProperties(app, context, render);
        }
        return app;
    };
}

/**
 * Function for handling a template ref
 */
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
        // when mounting async components, nothing needs to be done,
        // because the template ref is forwarded to inner component
        return;
    }
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */
        ? getExposeProxy(vnode.component) || vnode.component.proxy
        : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (( true) && !owner) {
        warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` +
            `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (isString(oldRef)) {
            refs[oldRef] = null;
            if (hasOwn(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (isFunction(ref)) {
        callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
    }
    else {
        const _isString = isString(ref);
        const _isRef = isRef(ref);
        if (_isString || _isRef) {
            const doSet = () => {
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) {
                        isArray(existing) && remove(existing, refValue);
                    }
                    else {
                        if (!isArray(existing)) {
                            if (_isString) {
                                refs[ref] = [refValue];
                                if (hasOwn(setupState, ref)) {
                                    setupState[ref] = refs[ref];
                                }
                            }
                            else {
                                ref.value = [refValue];
                                if (rawRef.k)
                                    refs[rawRef.k] = ref.value;
                            }
                        }
                        else if (!existing.includes(refValue)) {
                            existing.push(refValue);
                        }
                    }
                }
                else if (_isString) {
                    refs[ref] = value;
                    if (hasOwn(setupState, ref)) {
                        setupState[ref] = value;
                    }
                }
                else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k)
                        refs[rawRef.k] = value;
                }
                else if ((true)) {
                    warn$1('Invalid template ref type:', ref, `(${typeof ref})`);
                }
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            }
            else {
                doSet();
            }
        }
        else if ((true)) {
            warn$1('Invalid template ref type:', ref, `(${typeof ref})`);
        }
    }
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (!container.hasChildNodes()) {
            ( true) &&
                warn$1(`Attempting to hydrate existing markup but container is empty. ` +
                    `Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        if (patchFlag === -2 /* BAIL */) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    // #5728 empty text node inside a slot can cause hydration failure
                    // because the server rendered HTML won't contain a text node
                    if (vnode.children === '') {
                        insert((vnode.el = createText('')), parentNode(node), node);
                        nextNode = node;
                    }
                    else {
                        nextNode = onMismatch();
                    }
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( true) &&
                            warn$1(`Hydration text mismatch:` +
                                `\n- Client: ${JSON.stringify(node.data)}` +
                                `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */ && domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children +=
                                nextNode.nodeType === 1 /* ELEMENT */
                                    ? nextNode.outerHTML
                                    : nextNode.data;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type.toLowerCase() !==
                            node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                    // #4293 teleport as component root
                    if (nextNode &&
                        isComment(nextNode) &&
                        nextNode.data === 'teleport end') {
                        nextNode = nextSibling(nextNode);
                    }
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode
                                ? nextNode.previousSibling
                                : container.lastChild;
                        }
                        else {
                            subTree =
                                node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                        }
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                }
                else if ((true)) {
                    warn$1('Invalid HostVNode type:', type, `(${typeof type})`);
                }
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = (type === 'input' && dirs) || type === 'option';
        // skip props & children if this is hoisted static nodes
        // #5405 in dev, always hydrate children for HMR
        if (true /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (forcePatchValue ||
                    !optimized ||
                    patchFlag & (16 /* FULL_PROPS */ | 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if ((forcePatchValue && key.endsWith('value')) ||
                            (isOn(key) && !isReservedProp(key))) {
                            patchProp(el, key, null, props[key], false, undefined, parentComponent);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (( true) && !hasWarned) {
                        warn$1(`Hydration children mismatch in <${vnode.type}>: ` +
                            `server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( true) &&
                        warn$1(`Hydration text content mismatch in <${vnode.type}>:\n` +
                            `- Client: ${el.textContent}\n` +
                            `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            else if (vnode.type === Text && !vnode.children) {
                continue;
            }
            else {
                hasMismatch = true;
                if (( true) && !hasWarned) {
                    warn$1(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` +
                        `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
        hasMismatch = true;
        ( true) &&
            warn$1(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */
                ? `(text)`
                : isComment(node) && node.data === '['
                    ? `(start of fragment)`
                    : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

/* eslint-disable no-restricted-globals */
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (true) {
        devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    if (true) {
        devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    const needWarn = [];
    if (false) {}
    if (false) {}
    if (( true) && needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(', ')} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, ` +
            `which expects these compile-time feature flags to be globally injected ` +
            `via the bundler config in order to get better tree-shaking in the ` +
            `production bundle.\n\n` +
            `For more details, see https://link.vuejs.org/feature-flags.`);
    }
}

const queuePostRenderEffect = queueEffectWithSuspense
    ;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (true) {
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = ( true) && isHmrUpdating ? false : !!n2.dynamicChildren) => {
        if (n1 === n2) {
            return;
        }
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((true)) {
                    patchStaticNode(n1, n2, container, isSVG);
                }
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if ((true)) {
                    warn$1('Invalid VNode type:', type, `(${typeof type})`);
                }
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
        if (false /* HOISTED */) {}
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (key !== 'value' && !isReservedProp(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */
                if ('value' in props) {
                    hostPatchProp(el, 'value', null, props.value);
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        }
        if (true) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
            }
        }
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (( true) &&
                subTree.patchFlag > 0 &&
                subTree.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */) {
                subTree =
                    filterSingleRoot(subTree.children) || subTree;
            }
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        parentComponent && toggleRecurse(parentComponent, true);
        if (( true) && isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (( true) && parentComponent && parentComponent.type.__hmrId) {
                traverseStaticChildren(n1, n2);
            }
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el &&
                // - In the case of a Fragment, we need to provide the actual parent
                // of the Fragment itself so it can move its children.
                (oldVNode.type === Fragment ||
                    // - In the case of different nodes, there is going to be a replacement
                    // which also requires the correct parent container
                    !isSameVNodeType(oldVNode, newVNode) ||
                    // - In the case of a component, it could contain anything.
                    oldVNode.shapeFlag & (6 /* COMPONENT */ | 64 /* TELEPORT */))
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if (isReservedProp(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== EMPTY_OBJ) {
                for (const key in oldProps) {
                    if (!isReservedProp(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if ('value' in newProps) {
                hostPatchProp(el, 'value', oldProps.value, newProps.value);
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (( true) &&
            // #5523 dev root fragment may inherit directives
            (isHmrUpdating || patchFlag & 2048 /* DEV_ROOT_FRAGMENT */)) {
            // HMR updated / Dev root fragment (w/ comments), force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                if (( true) && parentComponent && parentComponent.type.__hmrId) {
                    traverseStaticChildren(n1, n2);
                }
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        // 2.x compat may pre-create the component instance before actually
        // mounting
        const compatMountInstance = initialVNode.isCompatRoot && initialVNode.component;
        const instance = compatMountInstance ||
            (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (( true) && instance.type.__hmrId) {
            registerHMR(instance);
        }
        if ((true)) {
            pushWarningContext(initialVNode);
            startMeasure(instance, `mount`);
        }
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        if (!(compatMountInstance)) {
            if ((true)) {
                startMeasure(instance, `init`);
            }
            setupComponent(instance);
            if ((true)) {
                endMeasure(instance, `init`);
            }
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((true)) {
            popWarningContext();
            endMeasure(instance, `mount`);
        }
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((true)) {
                    pushWarningContext(n2);
                }
                updateComponentPreRender(instance, n2, optimized);
                if ((true)) {
                    popWarningContext();
                }
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        const componentUpdateFn = () => {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) {
                    invokeArrayFns(bm);
                }
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                    instance.emit('hook:beforeMount');
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = () => {
                        if ((true)) {
                            startMeasure(instance, `render`);
                        }
                        instance.subTree = renderComponentRoot(instance);
                        if ((true)) {
                            endMeasure(instance, `render`);
                        }
                        if ((true)) {
                            startMeasure(instance, `hydrate`);
                        }
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        if ((true)) {
                            endMeasure(instance, `hydrate`);
                        }
                    };
                    if (isAsyncWrapperVNode) {
                        initialVNode.type.__asyncLoader().then(
                        // note: we are moving the render call into an async callback,
                        // which means it won't track dependencies - but it's ok because
                        // a server-rendered async wrapper is already in resolved state
                        // and it will never need to change.
                        () => !instance.isUnmounted && hydrateSubTree());
                    }
                    else {
                        hydrateSubTree();
                    }
                }
                else {
                    if ((true)) {
                        startMeasure(instance, `render`);
                    }
                    const subTree = (instance.subTree = renderComponentRoot(instance));
                    if ((true)) {
                        endMeasure(instance, `render`);
                    }
                    if ((true)) {
                        startMeasure(instance, `patch`);
                    }
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((true)) {
                        endMeasure(instance, `patch`);
                    }
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                    queuePostRenderEffect(() => instance.emit('hook:mounted'), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ||
                    (parent &&
                        isAsyncWrapper(parent.vnode) &&
                        parent.vnode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */)) {
                    instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                    if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                        queuePostRenderEffect(() => instance.emit('hook:activated'), parentSuspense);
                    }
                }
                instance.isMounted = true;
                if (true) {
                    devtoolsComponentAdded(instance);
                }
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((true)) {
                    pushWarningContext(next || instance.vnode);
                }
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    invokeArrayFns(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                    instance.emit('hook:beforeUpdate');
                }
                toggleRecurse(instance, true);
                // render
                if ((true)) {
                    startMeasure(instance, `render`);
                }
                const nextTree = renderComponentRoot(instance);
                if ((true)) {
                    endMeasure(instance, `render`);
                }
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((true)) {
                    startMeasure(instance, `patch`);
                }
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((true)) {
                    endMeasure(instance, `patch`);
                }
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                }
                if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
                    queuePostRenderEffect(() => instance.emit('hook:updated'), parentSuspense);
                }
                if (true) {
                    devtoolsComponentUpdated(instance);
                }
                if ((true)) {
                    popWarningContext();
                }
            }
        };
        // create reactive effect for rendering
        const effect = (instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope // track it in component's effect scope
        ));
        const update = (instance.update = () => effect.run());
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        if ((true)) {
            effect.onTrack = instance.rtc
                ? e => invokeArrayFns(instance.rtc, e)
                : void 0;
            effect.onTrigger = instance.rtg
                ? e => invokeArrayFns(instance.rtg, e)
                : void 0;
            update.ownerInstance = instance;
        }
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (( true) && keyToNewIndexMap.has(nextChild.key)) {
                        warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    }
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if (shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (shapeFlag & 64 /* TELEPORT */) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            }
            else if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                patchFlag &
                    (128 /* KEYED_FRAGMENT */ | 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeUnmounted)) ||
            shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            if (( true) &&
                vnode.patchFlag > 0 &&
                vnode.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ &&
                transition &&
                !transition.persisted) {
                vnode.children.forEach(child => {
                    if (child.type === Comment) {
                        hostRemove(child.el);
                    }
                    else {
                        remove(child);
                    }
                });
            }
            else {
                removeFragment(el, anchor);
            }
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (( true) && instance.type.__hmrId) {
            unregisterHMR(instance);
        }
        const { bum, scope, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            invokeArrayFns(bum);
        }
        if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
            instance.emit('hook:beforeDestroy');
        }
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        if (isCompatEnabled("INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */, instance)) {
            queuePostRenderEffect(() => instance.emit('hook:destroyed'), parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (true) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container, isSVG) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (( true) && c2.type === Comment && !c2.el) {
                c2.el = c1.el;
            }
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (isString(targetSelector)) {
        if (!select) {
            ( true) &&
                warn$1(`Current renderer does not support string target for Teleports. ` +
                    `(missing querySelector renderer option)`);
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( true) &&
                    warn$1(`Failed to locate Teleport target with selector "${targetSelector}". ` +
                        `Note the target element must exist before the component is mounted - ` +
                        `i.e. the target cannot be rendered by the component itself, and ` +
                        `ideally should be outside of the entire Vue component tree.`);
            }
            return target;
        }
    }
    else {
        if (( true) && !targetSelector && !isTeleportDisabled(props)) {
            warn$1(`Invalid Teleport target: ${targetSelector}`);
        }
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        // #3302
        // HMR updated, force full diff
        if (( true) && isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( true)
                ? createComment('teleport start')
                : 0);
            const mainAnchor = (n2.anchor = ( true)
                ? createComment('teleport end')
                : 0);
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (( true) && !disabled) {
                warn$1('Invalid Teleport target on mount:', target, `(${typeof target})`);
            }
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((true)) {
                        warn$1('Invalid Teleport target on update:', target, `(${typeof target})`);
                    }
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) {
            hostRemove(targetAnchor);
        }
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
                }
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                // lookahead until we find the target anchor
                // we cannot rely on return value of hydrateChildren() because there
                // could be nested teleports
                let targetAnchor = targetNode;
                while (targetAnchor) {
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor &&
                        targetAnchor.nodeType === 8 &&
                        targetAnchor.data === 'teleport anchor') {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa =
                            vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const normalizedAsyncComponentMap = new Map();
function convertLegacyAsyncComponent(comp) {
    if (normalizedAsyncComponentMap.has(comp)) {
        return normalizedAsyncComponentMap.get(comp);
    }
    // we have to call the function here due to how v2's API won't expose the
    // options until we call it
    let resolve;
    let reject;
    const fallbackPromise = new Promise((r, rj) => {
        (resolve = r), (reject = rj);
    });
    const res = comp(resolve, reject);
    let converted;
    if (isPromise(res)) {
        converted = defineAsyncComponent(() => res);
    }
    else if (isObject(res) && !isVNode(res) && !isArray(res)) {
        converted = defineAsyncComponent({
            loader: () => res.component,
            loadingComponent: res.loading,
            errorComponent: res.error,
            delay: res.delay,
            timeout: res.timeout
        });
    }
    else if (res == null) {
        converted = defineAsyncComponent(() => fallbackPromise);
    }
    else {
        converted = comp; // probably a v3 functional comp
    }
    normalizedAsyncComponentMap.set(comp, converted);
    return converted;
}

function convertLegacyComponent(comp, instance) {
    if (comp.__isBuiltIn) {
        return comp;
    }
    // 2.x constructor
    if (isFunction(comp) && comp.cid) {
        comp = comp.options;
    }
    // 2.x async component
    if (isFunction(comp) &&
        checkCompatEnabled("COMPONENT_ASYNC" /* COMPONENT_ASYNC */, instance, comp)) {
        // since after disabling this, plain functions are still valid usage, do not
        // use softAssert here.
        return convertLegacyAsyncComponent(comp);
    }
    // 2.x functional component
    if (isObject(comp) &&
        comp.functional &&
        softAssertCompatEnabled("COMPONENT_FUNCTIONAL" /* COMPONENT_FUNCTIONAL */, instance, comp)) {
        return convertLegacyFunctionalComponent(comp);
    }
    return comp;
}

const Fragment = Symbol(( true) ? 'Fragment' : 0);
const Text = Symbol(( true) ? 'Text' : 0);
const Comment = Symbol(( true) ? 'Comment' : 0);
const Static = Symbol(( true) ? 'Static' : 0);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren =
        isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
/**
 * @private
 */
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (( true) &&
        n2.shapeFlag & 6 /* COMPONENT */ &&
        hmrDirtyComponents.has(n2.type)) {
        // HMR only: if the component has been hot-updated, force a reload.
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for }) => {
    return (ref != null
        ? isString(ref) || isRef(ref) || isFunction(ref)
            ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for }
            : ref
        : null);
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */) {
            type.normalize(vnode);
        }
    }
    else if (children) {
        // compiled element vnode - if children is passed, only possible types are
        // string or Array.
        vnode.shapeFlag |= isString(children)
            ? 8 /* TEXT_CHILDREN */
            : 16 /* ARRAY_CHILDREN */;
    }
    // validate key
    if (( true) && vnode.key !== vnode.key) {
        warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        vnode.patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    {
        convertLegacyVModelProps(vnode);
        defineLegacyVNodeProperties(vnode);
    }
    return vnode;
}
const createVNode = (( true) ? createVNodeWithArgsTransform : 0);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (( true) && !type) {
            warn$1(`Invalid vnode type when creating vnode: ${type}.`);
        }
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6 /* COMPONENT */) {
                currentBlock[currentBlock.indexOf(type)] = cloned;
            }
            else {
                currentBlock.push(cloned);
            }
        }
        cloned.patchFlag |= -2 /* BAIL */;
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // 2.x async/functional component compat
    {
        type = convertLegacyComponent(type, currentRenderingInstance);
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !isString(klass)) {
            props.class = normalizeClass(klass);
        }
        if (isObject(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !isArray(style)) {
                style = extend({}, style);
            }
            props.style = normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = isString(type)
        ? 1 /* ELEMENT */
        : isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : isObject(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : isFunction(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (( true) && shapeFlag & 4 /* STATEFUL_COMPONENT */ && isProxy(type)) {
        type = toRaw(type);
        warn$1(`Vue received a Component which was made a reactive object. This can ` +
            `lead to unnecessary performance overhead, and should be avoided by ` +
            `marking the component with \`markRaw\` or using \`shallowRef\` ` +
            `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props)
        return null;
    return isProxy(props) || InternalObjectKey in props
        ? extend({}, props)
        : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? isArray(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: ( true) && patchFlag === -1 /* HOISTED */ && isArray(children)
            ? children.map(deepCloneVNode)
            : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    {
        defineLegacyVNodeProperties(cloned);
    }
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
        cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if (isArray(child)) {
        // fragment
        return createVNode(Fragment, null, 
        // #3666, avoid reference pollution when reusing vnode
        child.slice());
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return cloneIfMounted(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (isArray(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & (1 /* ELEMENT */ | 64 /* TELEPORT */)) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */) {
                    children._ = 1 /* STABLE */;
                }
                else {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
            }
        }
    }
    else if (isFunction(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = normalizeClass([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = normalizeStyle([ret.style, toMerge.style]);
            }
            else if (isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming &&
                    existing !== incoming &&
                    !(isArray(existing) && existing.includes(incoming))) {
                    ret[key] = existing
                        ? [].concat(existing, incoming)
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new EffectScope(true /* detached */),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    if ((true)) {
        instance.ctx = createDevRenderContext(instance);
    }
    else {}
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$2.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) {
        vnode.ce(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ makeMap('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        warn$1('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if ((true)) {
        if (Component.name) {
            validateComponentName(Component.name, instance.appContext.config);
        }
        if (Component.components) {
            const names = Object.keys(Component.components);
            for (let i = 0; i < names.length; i++) {
                validateComponentName(names[i], instance.appContext.config);
            }
        }
        if (Component.directives) {
            const names = Object.keys(Component.directives);
            for (let i = 0; i < names.length; i++) {
                validateDirectiveName(names[i]);
            }
        }
        if (Component.compilerOptions && isRuntimeOnly()) {
            warn$1(`"compilerOptions" is only supported when using a build of Vue that ` +
                `includes the runtime compiler. Since you are using a runtime-only ` +
                `build, the options should be passed via your build tool config instead.`);
        }
    }
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    if ((true)) {
        exposePropsOnRenderContext(instance);
    }
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( true) ? shallowReadonly(instance.props) : 0, setupContext]);
        resetTracking();
        unsetCurrentInstance();
        if (isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult
                    .then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult, isSSR);
                })
                    .catch(e => {
                    handleError(e, instance, 0 /* SETUP_FUNCTION */);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
                if (( true) && !instance.suspense) {
                    const name = (_a = Component.name) !== null && _a !== void 0 ? _a : 'Anonymous';
                    warn$1(`Component <${name}>: setup function returned a promise, but no ` +
                        `<Suspense> boundary was found in the parent component tree. ` +
                        `A component with async setup() must be nested in a <Suspense> ` +
                        `in order to be rendered.`);
                }
            }
        }
        else {
            handleSetupResult(instance, setupResult, isSSR);
        }
    }
    else {
        finishComponentSetup(instance, isSSR);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) {
            // when the function's name is `ssrRender` (compiled by SFC inline mode),
            // set it as ssrRender instead.
            instance.ssrRender = setupResult;
        }
        else {
            instance.render = setupResult;
        }
    }
    else if (isObject(setupResult)) {
        if (( true) && isVNode(setupResult)) {
            warn$1(`setup() should not return VNodes directly - ` +
                `return a render function instead.`);
        }
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (true) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = proxyRefs(setupResult);
        if ((true)) {
            exposeSetupStateOnRenderContext(instance);
        }
    }
    else if (( true) && setupResult !== undefined) {
        warn$1(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
    }
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = i => {
        if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    };
}
// dev only
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    {
        convertLegacyRenderFn(instance);
        if (( true) && Component.compatConfig) {
            validateCompatConfig(Component.compatConfig);
        }
    }
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = (instance.vnode.props &&
                instance.vnode.props['inline-template']) ||
                Component.template;
            if (template) {
                if ((true)) {
                    startMeasure(instance, `compile`);
                }
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = extend(extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                {
                    // pass runtime compat config into the compiler
                    finalCompilerOptions.compatConfig = Object.create(globalCompatConfig);
                    if (Component.compatConfig) {
                        extend(finalCompilerOptions.compatConfig, Component.compatConfig);
                    }
                }
                Component.render = compile(template, finalCompilerOptions);
                if ((true)) {
                    endMeasure(instance, `compile`);
                }
            }
        }
        instance.render = (Component.render || NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) {
            installWithProxy(instance);
        }
    }
    // support for 2.x options
    if ( true && !(skipOptions)) {
        setCurrentInstance(instance);
        pauseTracking();
        applyOptions(instance);
        resetTracking();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (( true) && !Component.render && instance.render === NOOP && !isSSR) {
        /* istanbul ignore if */
        if (!compile && Component.template) {
            warn$1(`Component provided template option but ` +
                `runtime compilation is not supported in this build of Vue.` +
                (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                    ) /* should not happen */);
        }
        else {
            warn$1(`Component is missing template or render function.`);
        }
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, ( true)
        ? {
            get(target, key) {
                markAttrsAccessed();
                track(instance, "get" /* GET */, '$attrs');
                return target[key];
            },
            set() {
                warn$1(`setupContext.attrs is readonly.`);
                return false;
            },
            deleteProperty() {
                warn$1(`setupContext.attrs is readonly.`);
                return false;
            }
        }
        : 0);
}
function createSetupContext(instance) {
    const expose = exposed => {
        if (( true) && instance.exposed) {
            warn$1(`expose() should be called only once per setup().`);
        }
        instance.exposed = exposed || {};
    };
    let attrs;
    if ((true)) {
        // We use getters in dev in case libs like test-utils overwrite instance
        // properties (overwrites should not be done in prod)
        return Object.freeze({
            get attrs() {
                return attrs || (attrs = createAttrsProxy(instance));
            },
            get slots() {
                return shallowReadonly(instance.slots);
            },
            get emit() {
                return (event, ...args) => instance.emit(event, ...args);
            },
            expose
        });
    }
    else {}
}
function getExposeProxy(instance) {
    if (instance.exposed) {
        return (instance.exposeProxy ||
            (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
                get(target, key) {
                    if (key in target) {
                        return target[key];
                    }
                    else if (key in publicPropertiesMap) {
                        return publicPropertiesMap[key](instance);
                    }
                }
            })));
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function getComponentName(Component, includeInferred = true) {
    return isFunction(Component)
        ? Component.displayName || Component.name
        : Component.name || (includeInferred && Component.__name);
}
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return isFunction(value) && '__vccOpts' in value;
}

const computed$1 = ((getterOrOptions, debugOptions) => {
    // @ts-ignore
    return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
});

// dev only
const warnRuntimeUsage = (method) => warn$1(`${method}() is a compiler-hint helper that is only usable inside ` +
    `<script setup> of a single file component. Its arguments should be ` +
    `compiled away and passing it at runtime has no effect.`);
// implementation
function defineProps() {
    if ((true)) {
        warnRuntimeUsage(`defineProps`);
    }
    return null;
}
// implementation
function defineEmits() {
    if ((true)) {
        warnRuntimeUsage(`defineEmits`);
    }
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
function defineExpose(exposed) {
    if ((true)) {
        warnRuntimeUsage(`defineExpose`);
    }
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */
function withDefaults(props, defaults) {
    if ((true)) {
        warnRuntimeUsage(`withDefaults`);
    }
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (( true) && !i) {
        warn$1(`useContext() called without active instance.`);
    }
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    const props = isArray(raw)
        ? raw.reduce((normalized, p) => ((normalized[p] = {}), normalized), {})
        : raw;
    for (const key in defaults) {
        const opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if ((true)) {
            warn$1(`props default key "${key}" has no corresponding declaration.`);
        }
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
        if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
                enumerable: true,
                get: () => props[key]
            });
        }
    }
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (( true) && !ctx) {
        warn$1(`withAsyncContext called without active current instance. ` +
            `This is likely a bug.`);
    }
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) {
        awaitable = awaitable.catch(e => {
            setCurrentInstance(ctx);
            throw e;
        });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( true) ? `ssrContext` : 0);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            warn$1(`Server rendering context not provided. Make sure to only call ` +
                `useSSRContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if ( false || typeof window === 'undefined') {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!isObject(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if (isRef(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if (isReactive(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, isShallow(obj) ? 'ShallowReactive' : 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${isReadonly(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if (isReadonly(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, isShallow(obj) ? 'ShallowReadonly' : 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', toRaw(instance.props)));
        }
        if (instance.setupState !== EMPTY_OBJ) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== EMPTY_OBJ) {
            blocks.push(createInstanceBlock('data', toRaw(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = extend({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if (isObject(v)) {
            return ['object', { object: asRaw ? toRaw(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (isFunction(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((isArray(opts) && opts.includes(key)) ||
            (isObject(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (isShallow(v)) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
        return cached;
    }
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return (cache[index] = ret);
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
        return false;
    }
    for (let i = 0; i < prev.length; i++) {
        if (hasChanged(prev[i], memo[i])) {
            return false;
        }
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(cached);
    }
    return true;
}

// Core API ------------------------------------------------------------------
const version = "3.2.37";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */
const ssrUtils = (_ssrUtils );
/**
 * @internal only exposed in compat builds
 */
const resolveFilter$1 = resolveFilter ;
const _compatUtils = {
    warnDeprecation,
    createCompatVue,
    isCompatEnabled,
    checkCompatEnabled,
    softAssertCompatEnabled
};
/**
 * @internal only exposed in compat builds.
 */
const compatUtils = (_compatUtils );

const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const templateContainer = doc && /*#__PURE__*/ doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) {
            cloned._value = el._value;
        }
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) {
            // cached
            while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling))
                    break;
            }
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                    template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(' ');
    }
    if (value == null) {
        el.removeAttribute('class');
    }
    else if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    if (next && !isCssString) {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !isString(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
    else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                style.cssText = next;
            }
        }
        else if (prev) {
            el.removeAttribute('style');
        }
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) {
            style.display = currentDisplay;
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (isArray(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (val == null)
            val = '';
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = camelize(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        if (compatCoerceAttr(el, key, value, instance)) {
            return;
        }
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = isSpecialBooleanAttr(key);
        if (value == null || (isBoolean && !includeBooleanAttr(value))) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}
// 2.x compat
const isEnumeratedAttr = /*#__PURE__*/ makeMap('contenteditable,draggable,spellcheck')
    ;
function compatCoerceAttr(el, key, value, instance = null) {
    if (isEnumeratedAttr(key)) {
        const v2CocercedValue = value === null
            ? 'false'
            : typeof value !== 'boolean' && value !== undefined
                ? 'true'
                : null;
        if (v2CocercedValue &&
            compatUtils.softAssertCompatEnabled("ATTR_ENUMERATED_COERCION" /* ATTR_ENUMERATED_COERCION */, instance, key, value, v2CocercedValue)) {
            el.setAttribute(key, v2CocercedValue);
            return true;
        }
    }
    else if (value === false &&
        !isSpecialBooleanAttr(key) &&
        compatUtils.softAssertCompatEnabled("ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */, instance, key)) {
        el.removeAttribute(key);
        return true;
    }
    return false;
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' &&
        el.tagName !== 'PROGRESS' &&
        // custom elements may use _value internally
        !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue ||
            // #4956: always set for OPTION elements because its value falls back to
            // textContent if no value attribute is present. And setting .value for
            // OPTION has no side effect
            el.tagName === 'OPTION') {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    let needRemove = false;
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            value = includeBooleanAttr(value);
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            value = '';
            needRemove = true;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            value = 0;
            needRemove = true;
        }
    }
    else {
        if (value === false &&
            compatUtils.isCompatEnabled("ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */, parentComponent)) {
            const type = typeof el[key];
            if (type === 'string' || type === 'number') {
                ( true) &&
                    compatUtils.warnDeprecation("ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */, parentComponent, key);
                value = type === 'number' ? 0 : '';
                needRemove = true;
            }
        }
    }
    // some properties perform value validation and throw,
    // some properties has getter, no setter, will error in 'use strict'
    // eg. <select :type="null"></select> <select :willValidate="null"></select>
    try {
        el[key] = value;
    }
    catch (e) {
        if ((true)) {
            warn$1(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
                `value ${value} is invalid.`, e);
        }
    }
    needRemove && el.removeAttribute(key);
}

// Async edge case fix requires storing an event listener's attach timestamp.
const [_getNow, skipTimestampCheck] = /*#__PURE__*/ (() => {
    let _getNow = Date.now;
    let skipTimestampCheck = false;
    if (typeof window !== 'undefined') {
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        if (Date.now() > document.createEvent('Event').timeStamp) {
            // if the low-res timestamp which is bigger than the event timestamp
            // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
            // and we need to use the hi-res version for event listeners as well.
            _getNow = performance.now.bind(performance);
        }
        // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
        // and does not fire microtasks in between event propagation, so safe to exclude.
        const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
        skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
    }
    return [_getNow, skipTimestampCheck];
})();
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = /*#__PURE__*/ Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === 'class') {
        patchClass(el, nextValue, isSVG);
    }
    else if (key === 'style') {
        patchStyle(el, prevValue, nextValue);
    }
    else if (isOn(key)) {
        // ignore v-model listeners
        if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
    }
    else if (key[0] === '.'
        ? ((key = key.slice(1)), true)
        : key[0] === '^'
            ? ((key = key.slice(1)), false)
            : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    }
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
            el._trueValue = nextValue;
        }
        else if (key === 'false-value') {
            el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG, parentComponent);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && isFunction(value)) {
            return true;
        }
        return false;
    }
    // these are enumerated attrs, however their corresponding DOM properties
    // are actually booleans - this leads to setting it with a string "false"
    // value leading it to be coerced to `true`, so we need to always treat
    // them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && isString(value)) {
        return false;
    }
    return key in el;
}

function defineCustomElement(options, hydrate) {
    const Comp = defineComponent(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps) {
            super(Comp, initialProps, hydrate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = ((options) => {
    // @ts-ignore
    return defineCustomElement(options, hydrate);
});
const BaseClass = (typeof HTMLElement !== 'undefined' ? HTMLElement : class {
});
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate) {
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */
        this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate) {
            hydrate(this._createVNode(), this.shadowRoot);
        }
        else {
            if (( true) && this.shadowRoot) {
                warn$1(`Custom element has pre-rendered declarative shadow root but is not ` +
                    `defined as hydratable. Use \`defineSSRCustomElement\`.`);
            }
            this.attachShadow({ mode: 'open' });
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        nextTick(() => {
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */
    _resolveDef() {
        if (this._resolved) {
            return;
        }
        this._resolved = true;
        // set initial attrs
        for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
        }
        // watch future attr changes
        new MutationObserver(mutations => {
            for (const m of mutations) {
                this._setAttr(m.attributeName);
            }
        }).observe(this, { attributes: true });
        const resolve = (def) => {
            const { props, styles } = def;
            const hasOptions = !isArray(props);
            const rawKeys = props ? (hasOptions ? Object.keys(props) : props) : [];
            // cast Number-type props set before resolve
            let numberProps;
            if (hasOptions) {
                for (const key in this._props) {
                    const opt = props[key];
                    if (opt === Number || (opt && opt.type === Number)) {
                        this._props[key] = toNumber(this._props[key]);
                        (numberProps || (numberProps = Object.create(null)))[key] = true;
                    }
                }
            }
            this._numberProps = numberProps;
            // check if there are props set pre-upgrade or connect
            for (const key of Object.keys(this)) {
                if (key[0] !== '_') {
                    this._setProp(key, this[key], true, false);
                }
            }
            // defining getter/setters on prototype
            for (const key of rawKeys.map(camelize)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this._getProp(key);
                    },
                    set(val) {
                        this._setProp(key, val);
                    }
                });
            }
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) {
            asyncDef().then(resolve);
        }
        else {
            resolve(this._def);
        }
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) {
            value = toNumber(value);
        }
        this._setProp(camelize(key), value, false);
    }
    /**
     * @internal
     */
    _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */
    _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
                this._update();
            }
            // reflect
            if (shouldReflect) {
                if (val === true) {
                    this.setAttribute(hyphenate(key), '');
                }
                else if (typeof val === 'string' || typeof val === 'number') {
                    this.setAttribute(hyphenate(key), val + '');
                }
                else if (!val) {
                    this.removeAttribute(hyphenate(key));
                }
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = createVNode(this._def, extend({}, this._props));
        if (!this._instance) {
            vnode.ce = instance => {
                this._instance = instance;
                instance.isCE = true;
                // HMR
                if ((true)) {
                    instance.ceReload = newStyles => {
                        // always reset styles
                        if (this._styles) {
                            this._styles.forEach(s => this.shadowRoot.removeChild(s));
                            this._styles.length = 0;
                        }
                        this._applyStyles(newStyles);
                        // if this is an async component, ceReload is called from the inner
                        // component so no need to reload the async wrapper
                        if (!this._def.__asyncLoader) {
                            // reload
                            this._instance = null;
                            this._update();
                        }
                    };
                }
                // intercept emit
                instance.emit = (event, ...args) => {
                    this.dispatchEvent(new CustomEvent(event, {
                        detail: args
                    }));
                };
                // locate nearest Vue custom element parent for provide/inject
                let parent = this;
                while ((parent =
                    parent && (parent.parentNode || parent.host))) {
                    if (parent instanceof VueElement) {
                        instance.parent = parent._instance;
                        break;
                    }
                }
            };
        }
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) {
            styles.forEach(css => {
                const s = document.createElement('style');
                s.textContent = css;
                this.shadowRoot.appendChild(s);
                // record for HMR
                if ((true)) {
                    (this._styles || (this._styles = [])).push(s);
                }
            });
        }
    }
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = getCurrentInstance();
        if (!instance) {
            ( true) && warn$1(`useCssModule must be called inside setup()`);
            return EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( true) && warn$1(`Current instance does not have CSS modules injected.`);
            return EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            ( true) &&
                warn$1(`Current instance does not have CSS module named "${name}".`);
            return EMPTY_OBJ;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = getCurrentInstance();
    /* istanbul ignore next */
    if (!instance) {
        ( true) &&
            warn$1(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    watchPostEffect(setVars);
    onMounted(() => {
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, { childList: true });
        onUnmounted(() => ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        setVarsOnNode(vnode.el, vars);
    }
    else if (vnode.type === Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
    else if (vnode.type === Static) {
        let { el, anchor } = vnode;
        while (el) {
            setVarsOnNode(el, vars);
            if (el === anchor)
                break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
{
    Transition.__isBuiltIn = true;
}
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props =
    /*#__PURE__*/ extend({}, BaseTransition.props, DOMTransitionPropsValidators));
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */
const callHook$1 = (hook, args = []) => {
    if (isArray(hook)) {
        hook.forEach(h => h(...args));
    }
    else if (hook) {
        hook(...args);
    }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */
const hasExplicitCallback = (hook) => {
    return hook
        ? isArray(hook)
            ? hook.some(h => h.length > 1)
            : hook.length > 1
        : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (rawProps.css === false) {
        return baseProps;
    }
    const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    // legacy transition class compat
    const legacyClassEnabled = compatUtils.isCompatEnabled("TRANSITION_CLASSES" /* TRANSITION_CLASSES */, null);
    let legacyEnterFromClass;
    let legacyAppearFromClass;
    let legacyLeaveFromClass;
    if (legacyClassEnabled) {
        const toLegacyClass = (cls) => cls.replace(/-from$/, '');
        if (!rawProps.enterFromClass) {
            legacyEnterFromClass = toLegacyClass(enterFromClass);
        }
        if (!rawProps.appearFromClass) {
            legacyAppearFromClass = toLegacyClass(appearFromClass);
        }
        if (!rawProps.leaveFromClass) {
            legacyLeaveFromClass = toLegacyClass(leaveFromClass);
        }
    }
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook$1(hook, [el, resolve]);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                if (legacyClassEnabled) {
                    removeTransitionClass(el, isAppear ? legacyAppearFromClass : legacyEnterFromClass);
                }
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return extend(baseProps, {
        onBeforeEnter(el) {
            callHook$1(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            if (legacyClassEnabled) {
                addTransitionClass(el, legacyEnterFromClass);
            }
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            callHook$1(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            if (legacyClassEnabled) {
                addTransitionClass(el, legacyAppearFromClass);
            }
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            el._isLeaving = true;
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            if (legacyClassEnabled) {
                addTransitionClass(el, legacyLeaveFromClass);
            }
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                if (!el._isLeaving) {
                    // cancelled
                    return;
                }
                removeTransitionClass(el, leaveFromClass);
                if (legacyClassEnabled) {
                    removeTransitionClass(el, legacyLeaveFromClass);
                }
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            callHook$1(onLeave, [el, resolve]);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            callHook$1(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            callHook$1(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            callHook$1(onLeaveCancelled, [el]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if (isObject(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = toNumber(val);
    if ((true))
        validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        warn$1(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        warn$1(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            if (!rawProps.tag &&
                compatUtils.checkCompatEnabled("TRANSITION_GROUP_ROOT" /* TRANSITION_GROUP_ROOT */, instance.parent)) {
                tag = 'span';
            }
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                }
                else if ((true)) {
                    warn$1(`<TransitionGroup> children must be keyed.`);
                }
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return createVNode(tag, null, children);
        };
    }
};
{
    TransitionGroupImpl.__isBuiltIn = true;
}
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1 ? root : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'] ||
        (vnode.props['onModelCompat:input']);
    return isArray(fn) ? value => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event('input'));
    }
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || (vnode.props && vnode.props.type === 'number');
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            if (castToNumber) {
                domValue = toNumber(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el && el.type !== 'range') {
            if (lazy) {
                return;
            }
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && toNumber(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (isArray(modelValue)) {
                const index = looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if (isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (isArray(value)) {
        el.checked = looseIndexOf(value, vnode.props.value) > -1;
    }
    else if (isSet(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = looseEqual(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = looseEqual(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = isSet(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? toNumber(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !isArray(value) && !isSet(value)) {
        ( true) &&
            warn$1(`<select multiple v-model> expects an Array or Set value for its binding, ` +
                `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (isArray(value)) {
                option.selected = looseIndexOf(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i)
                    el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function resolveDynamicModel(tagName, type) {
    switch (tagName) {
        case 'SELECT':
            return vModelSelect;
        case 'TEXTAREA':
            return vModelText;
        default:
            switch (type) {
                case 'checkbox':
                    return vModelCheckbox;
                case 'radio':
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value }) => ({ value });
    vModelRadio.getSSRProps = ({ value }, vnode) => {
        if (vnode.props && looseEqual(vnode.props.value, value)) {
            return { checked: true };
        }
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode) => {
        if (isArray(value)) {
            if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
                return { checked: true };
            }
        }
        else if (isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
                return { checked: true };
            }
        }
        else if (value) {
            return { checked: true };
        }
    };
    vModelDynamic.getSSRProps = (binding, vnode) => {
        if (typeof vnode.type !== 'string') {
            return;
        }
        const modelToUse = resolveDynamicModel(
        // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
        }
    };
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    let globalKeyCodes;
    let instance = null;
    {
        instance = getCurrentInstance();
        if (compatUtils.isCompatEnabled("CONFIG_KEY_CODES" /* CONFIG_KEY_CODES */, instance)) {
            if (instance) {
                globalKeyCodes = instance.appContext.config.keyCodes;
            }
        }
        if (( true) && modifiers.some(m => /^\d+$/.test(m))) {
            compatUtils.warnDeprecation("V_ON_KEYCODE_MODIFIER" /* V_ON_KEYCODE_MODIFIER */, instance);
        }
    }
    return (event) => {
        if (!('key' in event)) {
            return;
        }
        const eventKey = hyphenate(event.key);
        if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
        }
        {
            const keyCode = String(event.keyCode);
            if (compatUtils.isCompatEnabled("V_ON_KEYCODE_MODIFIER" /* V_ON_KEYCODE_MODIFIER */, instance) &&
                modifiers.some(mod => mod == keyCode)) {
                return fn(event);
            }
            if (globalKeyCodes) {
                for (const mod of modifiers) {
                    const codes = globalKeyCodes[mod];
                    if (codes) {
                        const matches = isArray(codes)
                            ? codes.some(code => String(code) === keyCode)
                            : String(codes) === keyCode;
                        if (matches) {
                            return fn(event);
                        }
                    }
                }
            }
        }
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value }) => {
        if (!value) {
            return { style: { display: 'none' } };
        }
    };
}

const rendererOptions = /*#__PURE__*/ extend({ patchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return (renderer ||
        (renderer = createRenderer(rendererOptions)));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!isFunction(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
            // 2.x compat check
            if ((true)) {
                for (let i = 0; i < container.attributes.length; i++) {
                    const attr = container.attributes[i];
                    if (attr.name !== 'v-cloak' && /^(v-|:|@)/.test(attr.name)) {
                        compatUtils.warnDeprecation("GLOBAL_MOUNT_CONTAINER" /* GLOBAL_MOUNT_CONTAINER */, null);
                        break;
                    }
                }
            }
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true, container instanceof SVGElement);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return isCustomElement;
            },
            set() {
                warn$1(`The \`isCustomElement\` config option is deprecated. Use ` +
                    `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` +
            `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
            `Since you are using the runtime-only build, \`compilerOptions\` ` +
            `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
            `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
            `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
            `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get() {
                warn$1(msg);
                return compilerOptions;
            },
            set() {
                warn$1(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (isString(container)) {
        const res = document.querySelector(container);
        if (( true) && !res) {
            warn$1(`Failed to mount app: mount target selector "${container}" returned null.`);
        }
        return res;
    }
    if (( true) &&
        window.ShadowRoot &&
        container instanceof window.ShadowRoot &&
        container.mode === 'closed') {
        warn$1(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */
const initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
            ssrDirectiveInitialized = true;
            initVModelForSSR();
            initVShowForSSR();
        }
    }
    ;

var runtimeDom = /*#__PURE__*/Object.freeze({
  __proto__: null,
  render: render,
  hydrate: hydrate,
  createApp: createApp,
  createSSRApp: createSSRApp,
  initDirectivesForSSR: initDirectivesForSSR,
  defineCustomElement: defineCustomElement,
  defineSSRCustomElement: defineSSRCustomElement,
  VueElement: VueElement,
  useCssModule: useCssModule,
  useCssVars: useCssVars,
  Transition: Transition,
  TransitionGroup: TransitionGroup,
  vModelText: vModelText,
  vModelCheckbox: vModelCheckbox,
  vModelRadio: vModelRadio,
  vModelSelect: vModelSelect,
  vModelDynamic: vModelDynamic,
  withModifiers: withModifiers,
  withKeys: withKeys,
  vShow: vShow,
  reactive: reactive,
  ref: ref,
  readonly: readonly,
  unref: unref,
  proxyRefs: proxyRefs,
  isRef: isRef,
  toRef: toRef,
  toRefs: toRefs,
  isProxy: isProxy,
  isReactive: isReactive,
  isReadonly: isReadonly,
  isShallow: isShallow,
  customRef: customRef,
  triggerRef: triggerRef,
  shallowRef: shallowRef,
  shallowReactive: shallowReactive,
  shallowReadonly: shallowReadonly,
  markRaw: markRaw,
  toRaw: toRaw,
  effect: effect,
  stop: stop,
  ReactiveEffect: ReactiveEffect,
  effectScope: effectScope,
  EffectScope: EffectScope,
  getCurrentScope: getCurrentScope,
  onScopeDispose: onScopeDispose,
  computed: computed$1,
  watch: watch,
  watchEffect: watchEffect,
  watchPostEffect: watchPostEffect,
  watchSyncEffect: watchSyncEffect,
  onBeforeMount: onBeforeMount,
  onMounted: onMounted,
  onBeforeUpdate: onBeforeUpdate,
  onUpdated: onUpdated,
  onBeforeUnmount: onBeforeUnmount,
  onUnmounted: onUnmounted,
  onActivated: onActivated,
  onDeactivated: onDeactivated,
  onRenderTracked: onRenderTracked,
  onRenderTriggered: onRenderTriggered,
  onErrorCaptured: onErrorCaptured,
  onServerPrefetch: onServerPrefetch,
  provide: provide,
  inject: inject,
  nextTick: nextTick,
  defineComponent: defineComponent,
  defineAsyncComponent: defineAsyncComponent,
  useAttrs: useAttrs,
  useSlots: useSlots,
  defineProps: defineProps,
  defineEmits: defineEmits,
  defineExpose: defineExpose,
  withDefaults: withDefaults,
  mergeDefaults: mergeDefaults,
  createPropsRestProxy: createPropsRestProxy,
  withAsyncContext: withAsyncContext,
  getCurrentInstance: getCurrentInstance,
  h: h,
  createVNode: createVNode,
  cloneVNode: cloneVNode,
  mergeProps: mergeProps,
  isVNode: isVNode,
  Fragment: Fragment,
  Text: Text,
  Comment: Comment,
  Static: Static,
  Teleport: Teleport,
  Suspense: Suspense,
  KeepAlive: KeepAlive,
  BaseTransition: BaseTransition,
  withDirectives: withDirectives,
  useSSRContext: useSSRContext,
  ssrContextKey: ssrContextKey,
  createRenderer: createRenderer,
  createHydrationRenderer: createHydrationRenderer,
  queuePostFlushCb: queuePostFlushCb,
  warn: warn$1,
  handleError: handleError,
  callWithErrorHandling: callWithErrorHandling,
  callWithAsyncErrorHandling: callWithAsyncErrorHandling,
  resolveComponent: resolveComponent,
  resolveDirective: resolveDirective,
  resolveDynamicComponent: resolveDynamicComponent,
  registerRuntimeCompiler: registerRuntimeCompiler,
  isRuntimeOnly: isRuntimeOnly,
  useTransitionState: useTransitionState,
  resolveTransitionHooks: resolveTransitionHooks,
  setTransitionHooks: setTransitionHooks,
  getTransitionRawChildren: getTransitionRawChildren,
  initCustomFormatter: initCustomFormatter,
  get devtools () { return devtools; },
  setDevtoolsHook: setDevtoolsHook,
  withCtx: withCtx,
  pushScopeId: pushScopeId,
  popScopeId: popScopeId,
  withScopeId: withScopeId,
  renderList: renderList,
  toHandlers: toHandlers,
  renderSlot: renderSlot,
  createSlots: createSlots,
  withMemo: withMemo,
  isMemoSame: isMemoSame,
  openBlock: openBlock,
  createBlock: createBlock,
  setBlockTracking: setBlockTracking,
  createTextVNode: createTextVNode,
  createCommentVNode: createCommentVNode,
  createStaticVNode: createStaticVNode,
  createElementVNode: createBaseVNode,
  createElementBlock: createElementBlock,
  guardReactiveProps: guardReactiveProps,
  toDisplayString: toDisplayString,
  camelize: camelize,
  capitalize: capitalize,
  toHandlerKey: toHandlerKey,
  normalizeProps: normalizeProps,
  normalizeClass: normalizeClass,
  normalizeStyle: normalizeStyle,
  transformVNodeArgs: transformVNodeArgs,
  version: version,
  ssrUtils: ssrUtils,
  resolveFilter: resolveFilter$1,
  compatUtils: compatUtils
});

function initDev() {
    {
        initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((true)) {
    initDev();
}
function wrappedCreateApp(...args) {
    // @ts-ignore
    const app = createApp(...args);
    if (compatUtils.isCompatEnabled("RENDER_FUNCTION" /* RENDER_FUNCTION */, null)) {
        // register built-in components so that they can be resolved via strings
        // in the legacy h() call. The __compat__ prefix is to ensure that v3 h()
        // doesn't get affected.
        app.component('__compat__transition', Transition);
        app.component('__compat__transition-group', TransitionGroup);
        app.component('__compat__keep-alive', KeepAlive);
        // built-in directives. No need for prefix since there's no render fn API
        // for resolving directives via string in v3.
        app._context.directives.show = vShow;
        app._context.directives.model = vModelDynamic;
    }
    return app;
}
function createCompatVue$1() {
    const Vue = compatUtils.createCompatVue(createApp, wrappedCreateApp);
    extend(Vue, runtimeDom);
    return Vue;
}

// This entry exports the runtime only, and is built as
const Vue = createCompatVue$1();
Vue.compile = (() => {
    if ((true)) {
        warn$1(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "@vue/compat/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
});

const { configureCompat: configureCompat$1 } = Vue;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.mjs":
/*!*****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}}
//# sourceMappingURL=mitt.mjs.map


/***/ })

}]);