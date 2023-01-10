import { PayloadAction } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../..'
import { DispatchType, RootState } from '../../Redux/configStore'
import { addNumber } from '../../Redux/Reducers/productReducer'


type Props = {}

const Home = (props: Props) => {

  const {arrNumber} = useSelector((state: RootState) => { return state.productReducer })
  const dispatch: DispatchType = useDispatch()
useEffect(() => {
  const action:PayloadAction<number> = addNumber(4)
  dispatch(action)
},[])
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-6">
            <div className="imageLogin">
              <img src='' alt='...' />
            </div>
          </div>
          <div className="col-6">
            <div className="wrap-form">
              <form className='form-login'>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder='Enter your email' id='email'/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder='Enter your password' id='password'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Home