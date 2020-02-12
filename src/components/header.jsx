import React, { Component } from 'react'
import { Segment,Image } from 'semantic-ui-react'

export default class Header extends Component {
    render() {
        return (
            <Segment inverted id="header" style={{width:'100vw'}}>
                 <Image src='./../src/images/LBGtree.png' style={{width:'50px',display:'inline',marginRight:'2%',marginTop:'-1%'}}/>
                 How green am I ?
            </Segment>
        )
    }
}
