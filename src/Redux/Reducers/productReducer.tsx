import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface ProductModel {
  
}

export type productState = {
arrNumber:number[]
}



const initialState = {
   arrNumber: [1, 2, 3]
 
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    addNumber: (state:productState,action:PayloadAction<number>) => {
       state.arrNumber.push(action.payload)
    }
  }
});

export const {addNumber} = productReducer.actions

export default productReducer.reducer