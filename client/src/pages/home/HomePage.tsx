import React, { ReactElement, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

const HomePage: React.FC = (props: RouteComponentProps): ReactElement => {
  useEffect(() => {
    console.log('HomePage | Initialized with RouteComponentProps: ', props)
  }, [])

  return <div className="page-container">Home Page</div>
}

export default HomePage
