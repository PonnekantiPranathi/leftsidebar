// Profile.jsx
import React from 'react';

import Logo from '../img/Profile.jpg';

export default function Profile() {
  return (<>     <div style={{position:'relative',marginLeft:'85rem',color:'black',marginTop:'4px'}}>Company</div>
    <div style={{position:'absolute',marginLeft:'90rem',}}><img src={Logo} alt="Default profile" height="38px"></img>
    </div></>
  );
}
