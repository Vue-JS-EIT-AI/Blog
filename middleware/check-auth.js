export default function (context){
   
   if(process.client){
    context.store.dispatch("initauth");
    console.log('check auth middleware');
   }
}