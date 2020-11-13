import React from 'react';
import classes from '../Layout/Layout.css';
import Auxiliary from '../../hoc/Auxiliary';

const Layout = (props) => {

        return(
            <Auxiliary>
                <div>Toolbar,SideBar,Backdrop</div>
                <main className={classes.content}>
                    {props.children}
                </main>
            </Auxiliary>
        )
}

export default Layout;