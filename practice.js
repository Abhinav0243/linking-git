/*const delayedFunction = () => {
    console.log('Delayed function executed!');
};

setTimeout(delayedFunction,2000);*/
/*const repeatedFunction = () => {
    console.log('Repeated function executed!');
};
const interval=setInterval(repeatedFunction,1000);*/
/*function repeatedFunction(){
    console.log('Executing repeated function');
}
const intervalId = setInterval(repeatedFunction,1000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');

},5000);*/
/*function parentFunction(name, callback){
    callback();
    console.log("Hey " +name);
}
function randomFunction(){
    console.log("Hey I am callbackfunction");
}
parentFunction("Random String",randomFunction);*/
function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey " +name);
}

parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
});
