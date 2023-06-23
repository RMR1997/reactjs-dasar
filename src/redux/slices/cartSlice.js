import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id === action.payload.id)
            if(itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
    },
});

//export untuk akses ke fungsi add to cart sebagai actionnya 

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;