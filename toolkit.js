import toolkit from "@reduxjs/toolkit"

const {configureStore, createAction, createReducer} = toolkit;

//action
const addToCart = createAction("ADD_TO_CART");

//reducer = buat milih state mana yang mau di pake
const cartReducer = createReducer([], (builder) => {
    //array kosong untuk nyimpen state, jika cuma 1 state lgsg di deklarasi aja
    //buat function builder untuk menjalankan metod kek switch case
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload) //action.payload = data yang di push 
    });
});

// reducer kedua
const login = createAction("CREATE_SESSION");


const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

//store = buat nyimpen state2
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login:loginReducer,
    },
});
console.log("create store: ", store.getState());


//subscribe = buat mantau perubahannya 
store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
});


//action/dispatch

const action = {type: "ADD_TO_CART", payload: {id: 1, qty:5}};
store.dispatch(action);

//cara kedua
//store.dispatch(addToCart({id: 1, qty: 5}));

store.dispatch(login());