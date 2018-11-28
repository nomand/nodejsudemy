console.log('Start');

setTimeout(()=>{ console.log('callback') }, 2000);
setTimeout(()=>{console.log('wat')}, 0);

console.log('End');