import React from 'react'
import  SubNavItem from './SubNavItem/SubNavItem'

function SubNav() {
    return (
        <div>
            <SubNavItem label='Restaurants'  icon='fas fa-utensils'/>
            <SubNavItem label='Home Services' icon='fas fa-concierge-bell'/>
            <SubNavItem label='Auto Services' icon='fas fa-truck'/>
            <SubNavItem label='More' icon="fas fa-info-circle"/>
        </div>
    )
}

export default SubNav
