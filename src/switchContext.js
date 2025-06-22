import React from 'react'

const switchContext = React.createContext({
   patientView : false,
   patientTrue : () => {},
   patientFalse : () => {},
})

export default switchContext
