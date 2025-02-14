import React from 'react'


import { Helmet } from 'react-helmet'
import Row from 'react-bootstrap/esm/Row'
import AppHeader from '../Layouts/AppHeader'


export default function Home() {
  return (
    <div>
        <Helmet>
            <title>EEC-Homepage</title>
        </Helmet>
      <AppHeader/>
  <Row></Row>
        Home Page  
    </div>
  )
}
