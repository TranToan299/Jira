import React from 'react'
import { useSelector } from 'react-redux'
import { history } from '../..'
import { RootState } from '../../Redux/configStore'

type Props = {}

const Home = (props: Props) => {

  const { array } = useSelector((state: RootState) => { return state.productReducer })


  console.log(array)
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