import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData,SidebarDataWithDrop } from './SidebarData';
import SubMenu, { SubMenuWithDrop } from './SubMenu';
import { IconContext } from 'react-icons/lib';
import "./SideBar.css";

const Nav = styled.div`
  background: linear-gradient(45deg, #2e31ab, #0f343673);
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin-top: 1px;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  // background: #15171c;
  background: #15171c;
  opacity: 0.9;
  width: 200px;
  margin-top: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars size={25} className='sidebar__icon' onClick={showSidebar} />
          </NavIcon>


          <div className='sidebar__navbar'>
            <ul className='sidebar__ul'>
              <Link to={`/`}>
                <li>Home</li>
              </Link>
              <Link to={`/`}>
                <li>About</li>
              </Link>
            </ul>
          </div>

        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

            {SidebarDataWithDrop.map((item, index) => {
              return <SubMenuWithDrop item={item} key={index} />;
            })}

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
