import React from 'react'
import * as MaterialUI from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DashboardNavbarCss from './DashboardNavbar.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Aux from '../../../hoc/Auxiliary';

function DashboardNavbar() {
  //overriding Avatar root class
  const styles =makeStyles(
    {
      root: {
        margin:'0.5rem'
      }
    }
  );
  const classes = styles();
  /////
  return (
    <Aux>
       <nav>
        
        <div className ={DashboardNavbarCss.remindBox}>
          Remind Box
        </div>

        <div className ={DashboardNavbarCss.userIcon}>
          <MaterialUI.Avatar 
            classes={{root: classes.root}}>
          <PermIdentityIcon color='action'/>
          </MaterialUI.Avatar>

          <MaterialUI.Avatar
            classes={{root: classes.root}}>
          <PermIdentityIcon color ='primary'/>
          </MaterialUI.Avatar>

          <MaterialUI.Avatar
            classes={{root: classes.root}}>
          <PermIdentityIcon color ='secondary'/>
          </MaterialUI.Avatar>
          
        </div>
       
      </nav>
    </Aux>
  )
}

export default DashboardNavbar;
