import React, { useContext } from 'react'
import { UseContext } from '../App';

const ChildC = () => {
    const user=useContext(UseContext);
  return (
    <div>
  data:{user.name}
    </div>
  )
}

export default ChildC
