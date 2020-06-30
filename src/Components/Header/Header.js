import React from 'react';
import { Layout} from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderPage = () => {
    return (
        <div>
            <Header style={{display:'flex',justifyContent:'space-between'}}>
   
        <Link to="/">Home Page</Link>
        <Link to="/AboutPage">AboutPage</Link>
        <Link to="/ServiesPage">ServiesPage</Link>
     
    </Header>
        </div>
    );
}
 
export default HeaderPage;