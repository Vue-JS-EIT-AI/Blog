export default function (context){
    if(!context.store.getters.isAuthenticated){
        console.log(context)
        context.redirect('/admin/auth')
    }
}