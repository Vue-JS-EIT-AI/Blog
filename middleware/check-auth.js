
export default function (context) {
    
    if (process.server) {
        context.store.dispatch("initauth", context.req);
        console.log('check auth middleware' + context);

      }
      else{
        context.store.dispatch("initauth", context.req);
        console.log('check auth middleware' + context);

      }
        
    


    // if(process.client){
    //  context.store.dispatch("initauth",context.req);
    //  console.log('check auth middleware');
    // }
}