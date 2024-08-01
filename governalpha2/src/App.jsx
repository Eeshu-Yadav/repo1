import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes ,useLocation } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaFileAlt, FaFileSignature, FaUserCircle, FaRobot, FaSignOutAlt } from 'react-icons/fa';
import { MdOutlineLibraryBooks, MdAttachMoney } from 'react-icons/md';
import AllScheme from './Components/AllScheme'
import UploadDocuments from './Components/UploadDocuments'
import ApplyLoan from './Components/ApplyLoan'
import Profile from './Components/Profile'
import Chatbot from './Components/Chatboat'
import SchemeDetails from './Components/SchemeDetails'

function App() {
  const location = useLocation();
  const [isActive, setActive] = useState("Dashboard");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive("Dashboard");
        break;
      case "/all-scheme":
        setActive("allScheme");
        break;
      case "/upload-documents":
        setActive("uploadDocuments");
        break;
      case "/apply-loan":
        setActive("applyLoan");
        break;
      case "/profile":
        setActive("myProfile");
        break;
      case "/chatbot":
        setActive("chatbot");
        break;
      default:
        setActive("Dashboard");
        break;
    }
  }, [location.pathname]);  

  return (
    <div className=' flex bg-richblack-900 text-richblack-5'>
   <nav className="flex flex-col min-w-[14rem] min-h-[100vh] pb-20 justify-between pl-4 py-10 bg-richblack-800 text-white">
      <div className="flex flex-col gap-5">
        <Link to="/" className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="Dashboard"?"bg-yellow-100 text-richblack-900 shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("Dashboard")}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link to="/all-scheme" className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="allScheme"?"bg-yellow-100 text-richblack-900 shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("allScheme")}>
          <MdOutlineLibraryBooks />
          <span>All Scheme</span>
        </Link>
        <Link to="/upload-documents" className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="uploadDocuments"?"bg-yellow-100 text-richblack-900 shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("uploadDocuments")}>
          <FaFileAlt />
          <span>Upload Documents</span>
        </Link>
        <Link to="/apply-loan" className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="applyLoan"?"bg-yellow-100 text-richblack-900 shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("applyLoan")}>
          <MdAttachMoney />
          <span>Apply for Loan</span>
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <Link to="/profile" className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="myProfile"?"bg-yellow-100 text-richblack-900  shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("myProfile")}>
          <FaUserCircle />
          <span>My Profile</span>
        </Link>
        <Link to="/chatbot" className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="chatboat"?"bg-yellow-100 text-richblack-900  shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("chatboat")}>
          <FaRobot />
          <span>Chatbot</span>
        </Link>
        <Link className={`flex items-center space-x-2 p-3 rounded-l-full ${isActive=="logout"?"bg-yellow-100 text-richblack-900  shadow-lg shadow-richblack-900":"bg-richblack-900"}`} onClick={()=>setActive("logout")}>
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
<Routes>
  <Route path='/' element={<Dashboard/>} ></Route>
  <Route path='/all-scheme' element={<AllScheme/>} ></Route>
  <Route path='/upload-documents' element={<UploadDocuments/>} ></Route>
  <Route path='/apply-loan' element={<ApplyLoan/>} ></Route>
  <Route path='/profile' element={<Profile/>} ></Route>
  <Route path='/chatbot' element={<Chatbot/>} ></Route>
  <Route path ="/scheme/:Schemeid" element={<SchemeDetails/>} ></Route>
</Routes>
    </div>
  )
}

export default App
