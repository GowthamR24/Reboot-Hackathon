import React, { Component } from 'react'
import { Segment,Image } from 'semantic-ui-react'

export default class Header extends Component {
    render() {
        return (
            <Segment inverted id="header" style={{width:'100vw'}}>
                 <Image src='./../src/images/LBGtree.png' style={{width:'30px',display:'inline',marginRight:'2%',marginTop:'-8%'}}/>
                 <span style={{position:'relative',top:'-13px',fontSize:'16px'}}>How green am I ?</span>
            </Segment>
        )
    }
}
