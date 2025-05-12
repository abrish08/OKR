// // import React from 'react';
// // import './LoginPage.css'; // Import the stylesheet

// // const LoginPage = () => {
// //   return (
// //     <div className="login-container">
// //       {/* Left Side: Image */}
// //       <div className="image-container">
// //         <img src="path_to_your_image.svg" alt="Login Illustration" className="login-image" />
// //       </div>

// //       {/* Right Side: Login Form */}
// //       <div className="form-container">
// //         <div className="form-wrapper">
// //           <h1 className="title">Welcome to Our Login LoginPage</h1>
// //           <form>
// //             <div className="form-group">
// //               <label className="label" htmlFor="email">Email</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Enter your email"
// //                 className="input"
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label className="label" htmlFor="password">Password</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 placeholder="******"
// //                 className="input"
// //                 required
// //               />
// //             </div>
// //             <button type="submit" className="submit-button">Login</button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('file', file);

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/upload',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       alert('File uploaded successfully!');
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert('File upload failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <input
//         type="text"
//         placeholder="Enter title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default FileUpload;

import { useState } from 'react';
import {
  FiHome,
  FiCalendar,
  FiFileText,
  FiPieChart,
  FiUsers,
  FiSettings,
  FiMail,
  FiMessageSquare,
  FiBell,
  FiUser
} from 'react-icons/fi';

const PurpleAdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-purple-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between border-b border-purple-800">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">Purple Admin</h1>
          ) : (
            <span className="text-xl font-bold">P</span>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:bg-purple-800"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className="mt-6">
          <NavItem 
            icon={<FiHome size={20} />} 
            text="Dashboard" 
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
            expanded={sidebarOpen}
          />
          <NavItem 
            icon={<FiCalendar size={20} />} 
            text="Calendar" 
            active={activeTab === 'calendar'}
            onClick={() => setActiveTab('calendar')}
            expanded={sidebarOpen}
          />
          <NavItem 
            icon={<FiFileText size={20} />} 
            text="Documents" 
            active={activeTab === 'documents'}
            onClick={() => setActiveTab('documents')}
            expanded={sidebarOpen}
          />
          <NavItem 
            icon={<FiPieChart size={20} />} 
            text="Charts" 
            active={activeTab === 'charts'}
            onClick={() => setActiveTab('charts')}
            expanded={sidebarOpen}
          />
          <NavItem 
            icon={<FiUsers size={20} />} 
            text="Users" 
            active={activeTab === 'users'}
            onClick={() => setActiveTab('users')}
            expanded={sidebarOpen}
          />
          <NavItem 
            icon={<FiSettings size={20} />} 
            text="Settings" 
            active={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
            expanded={sidebarOpen}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800 capitalize">
                {activeTab.replace('-', ' ')}
              </h2>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="relative text-gray-600 hover:text-purple-600">
                <FiMail size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="relative text-gray-600 hover:text-purple-600">
                <FiMessageSquare size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  7
                </span>
              </button>
              
              <button className="relative text-gray-600 hover:text-purple-600">
                <FiBell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  <FiUser size={16} />
                </div>
                {sidebarOpen && <span className="text-sm font-medium">John Doe</span>}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {activeTab === 'dashboard' && <DashboardContent />}
          {activeTab === 'charts' && <ChartsContent />}
          {/* Add other tab contents */}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active, onClick, expanded }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-4 transition-colors duration-200 ${active ? 'bg-purple-800' : 'hover:bg-purple-800'}`}
    >
      <span className="mr-3">{icon}</span>
      {expanded && <span>{text}</span>}
    </button>
  );
};

const DashboardContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Revenue" 
          value="$59,345" 
          change="+3.5%" 
          icon={<FiPieChart className="text-purple-600" size={24} />}
          bgColor="bg-purple-100"
        />
        <StatCard 
          title="Orders" 
          value="5,643" 
          change="+12.5%" 
          icon={<FiFileText className="text-blue-600" size={24} />}
          bgColor="bg-blue-100"
        />
        <StatCard 
          title="Customers" 
          value="45,254" 
          change="-2.5%" 
          icon={<FiUsers className="text-green-600" size={24} />}
          bgColor="bg-green-100"
        />
        <StatCard 
          title="Growth" 
          value="+12.5%" 
          change="+1.2%" 
          icon={<FiPieChart className="text-orange-600" size={24} />}
          bgColor="bg-orange-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Revenue Chart</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Payment #{item}</p>
                  <p className="text-sm text-gray-500">Today, 0{item}:00 AM</p>
                </div>
                <span className="text-green-500 font-medium">+$1{item}5</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartsContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
        <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Bar Chart</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
        <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Pie Chart</p>
        </div>
      </div>
      
      <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Line Chart</h3>
        <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Line Chart</p>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon, bgColor }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
          </div>
          <div className={`${bgColor} p-3 rounded-full`}>
            {icon}
          </div>
        </div>
        <div className={`mt-4 flex items-center text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
          <span className="ml-1">{isPositive ? '↑' : '↓'}</span>
        </div>
      </div>
    </div>
  );
};

export default PurpleAdminDashboard;