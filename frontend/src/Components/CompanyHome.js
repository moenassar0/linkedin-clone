import React from 'react'
import AddJobOffering from './Popups/AddJobOffering'
import { useState } from 'react'

const CompanyHome = () => {

    const [addJobOfferingButton, setAddJobOfferingButon] = useState(false);
  return (
    <div>
        <button onClick={() => {setAddJobOfferingButon(true)}}>add job</button>
        <AddJobOffering trigger={addJobOfferingButton} setTrigger={setAddJobOfferingButon}>
        </AddJobOffering>
    </div>
  )
}

export default CompanyHome