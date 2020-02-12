import React, { Component } from 'react'
import { Segment,Image,Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Segment inverted id="header" style={{width:'100vw'}}>
                 <Image src='/images/LBGtree.png' style={{width:'30px',display:'inline',marginRight:'4%',marginTop:'-8%',marginLeft:'-4%'}}/>
                 <span style={{position:'relative',top:'-13px',fontSize:'16px'}}>How green am I ?</span>
                 <Link to='/'>
                    <Icon name="home" size="small" style={{float:"right",marginTop:"-10px",marginRight:"-15px",color:"white"}}/>
                 </Link>
            </Segment>
        )
    }
}
