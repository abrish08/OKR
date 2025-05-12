// src/Dashboard.js
import React, { useState } from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { AdvancedContent, DashboardContent, SettingsContent, UserGroupContent } from './DashboardContent'; // Adjust path as necessary
import TicketsList from './adminComponent/TicketList';
import Registration from '../Registration';

const styles = {
  sidebar: {
    width: 240,
    transition: 'width 0.3s',
  },
  content: {
    flex: 1,

    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'margin-left 0.3s',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    height: '100vh',
  },
};

// Mapping of keys to user-friendly text
const sectionTitles = {
  '1': 'Dashboard',
  '2': 'User Group',
  '3': 'Manage Users',
  '3-1': 'Add New',
  '3-2': 'display User',
  '3-3': 'Terminate User',
  '3-4': 'Terminated Users',
  '4': 'Settings',
  '4-1': 'Applications',
  '4-2': 'Channels',
  '4-3': 'Versions',
};

const CustomSidenav = ({ activeKey, openKeys, expanded, onOpenChange, onExpand, onSelect }) => {
  return (
    <div style={{ ...styles.sidebar, width: expanded ? 240 : 0 }}>
      <Sidenav expanded={expanded} openKeys={openKeys} onOpenChange={onOpenChange}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={onSelect}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Mange Users" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Add New</Nav.Item>
              <Nav.Item eventKey="3-2">Display User</Nav.Item>
              <Nav.Item eventKey="3-3">Terminate User</Nav.Item>
              <Nav.Item eventKey="3-4">Terminated Users</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};

const Dashboard = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [openKeys, setOpenKeys] = useState(['3', '4']);
  const [expanded, setExpand] = useState(true);

  const renderContent = () => {
    switch (activeKey) {
      case '1':
        return <DashboardContent />;
      case '2':
        return <UserGroupContent />;
      case '3':
      case '3-1':
        return < Registration/>
      case '3-2':
      case '3-3':
      case '3-4':
        return <AdvancedContent />;
      case '4':
      case '4-1':
        return <TicketsList />;
      case '4-2':
      case '4-3':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div style={styles.container}>
      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        expanded={expanded}
        onExpand={setExpand}
        onSelect={setActiveKey}
      />
      <div style={{ ...styles.content, marginLeft: expanded ? 0 : 100 }}>
        <h3 className="text-gray-600 text-2xl font-semibold"> {sectionTitles[activeKey]} </h3>
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;