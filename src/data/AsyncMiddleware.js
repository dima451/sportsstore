const isPromice =(payload) => (typeof(payload)==="object" || typeof(payload) === "function")
    && typeof(payload.then) === "function"

export const asyncActions = ()=> (next) => (action) => {
    if(isPromice(action.payload)){
        action.payload.then(result=>next({...action, payload: result}));
    }
    else{
        next(action)
    }
}