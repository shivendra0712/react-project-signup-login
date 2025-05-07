import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Data from './components/Data'

const App = () => {

  const [toggler, settoggler] = useState(false)

  return (
    <div className='w-screen h-screen overflow-x-hidden flex bg-gray-800'>
      <div className="w-[70%] h-screen">
        {toggler ? <Signin toggler={toggler} settoggler={settoggler} />
          : <Signup toggler={toggler} settoggler={settoggler} />}
      </div>
      <div className="w-[30%] ">
 <Data/>
      </div>
    </div>
  )
}

export default App