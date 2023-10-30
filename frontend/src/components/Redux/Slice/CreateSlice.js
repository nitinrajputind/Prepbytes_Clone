import { createSlice } from "@reduxjs/toolkit";


// Create a function to initialize the state, either from localStorage or with an empty array
const initializeState = () => {
  const localStorageData = localStorage.getItem("cartData");
  return localStorageData ? JSON.parse(localStorageData) : [];
};


const Slice = createSlice({
    name : "cart",
    initialState : {
        data : initializeState(),
    },
    reducers:{
        addtocart: (state , action)=>{
            const newItem = action.payload;
            const existingItem = state.data.find((item)=>item.id === newItem.id);
            if(existingItem){
                existingItem.quantity +=1;
            }else{
                newItem.quantity = 1;
                state.data.push(newItem);
            }

            // udate localStorage whenEver State is modified
            localStorage.setItem('cartData', JSON.stringify(state.data));
        }
    }
})


export default Slice.reducer;
export const {addtocart} = Slice.actions;




