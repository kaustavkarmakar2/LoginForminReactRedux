const initState ={

};
const loginReducer = (state=initState, action) =>{
    switch(action.type){
        case "REQUEST_LOGIN":
            console.log("requesting login",action);
            return {};
    }
}