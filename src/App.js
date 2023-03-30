import logo from './logo.svg';
import './App.css';
import Signup from './signup';
import Login from './login';
import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';
import TeacherComp from './TeacherComp';
import LeaveComp from './LeaveComp';
import ApplyLeave from './ApplyLeave';
import ListUsers from './ListUsers';
import Update from './Update';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/teacherComp" element={<TeacherComp />} />
                <Route path="/leaveComp" element={<LeaveComp />} />
                <Route path="/applyleave" element={<ApplyLeave />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/listusers" element={<ListUsers />} />
                <Route path="/update/:id" exact component={Update} ></Route>
                
            </Routes>

        </BrowserRouter>
  );
}

export default App;
