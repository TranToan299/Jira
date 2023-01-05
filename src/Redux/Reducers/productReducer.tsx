import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    array:[1,2,3]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {}
});

export const {} = productReducer.actions

export default productReducer.reducer