function e(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}var o=globalThis,n={},t={},r=o.parcelRequiref6c2;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){t[e]=o},o.parcelRequiref6c2=r),(0,r.register)("lN9t0",function(o,n){let t;e(o.exports,"publishMessage",()=>c),e(o.exports,"getLatestMessage",()=>i);let r="StandardnachrichtStandardnachrichtStandardnachrichtStandardnachricht";function c(e,o){if(!t){console.log("MQTT client not initialized");return}t.publish(e,o,n=>{n?console.log("Publish error:",n):console.log(`Message "${o}" published to topic "${e}"`)})}function i(){return r}!function(){let e="client"+Math.random().toString(36).substring(7);(t=mqtt.connect("ws://4.184.199.231:15675/ws",{keepalive:60,clientId:e,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:3e4,username:"prueferol",password:"Susauskaka27!"})).on("connect",()=>{console.log("Client connected:"+e),function(e){if(!t){console.log("MQTT client not initialized");return}t.subscribe(e,{qos:0},o=>{o?console.log("Subscribe error:",o):console.log("Subscribed to:",e)})}("sensors")}),t.on("message",(e,o,n)=>{r=o.toString(),console.log(`Received Message: ${r} On topic: ${e}`)}),t.on("error",e=>{console.log("Connection Error:",e),t.end()}),t.on("reconnect",()=>{console.log("Reconnecting...")})}()}),r("lN9t0");
//# sourceMappingURL=index.1ca5c1bb.js.map