import React from 'react'
import { ElementsContextProvider } from './DoctorServicesContextApi'
import DoctorServicesList from './DoctorServicesList'
// import Home from './Home'

function DoctorServices() {
  return (
    <div className='w-full overflow-x-hidden'>
        <ElementsContextProvider>
            <DoctorServicesList/>
      </ElementsContextProvider>
    </div>
  )
}

export default React.memo(DoctorServices);