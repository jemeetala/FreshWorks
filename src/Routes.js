import React from "react";
import Tasks from "pages/Tasks";
import AddProducts from "pages/AddProducts";
import Addnotes from "pages/Addnotes";
import Account from "pages/Account";
import Contacts from "pages/Contacts";
import AddTask1 from "pages/AddTask1";
import AddMeeting from "pages/AddMeeting";
import Dashboard from "pages/Dashboard";
import Products from "pages/Products";
import AddTask from "pages/AddTask";
import AddAccount from "pages/AddAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addmeeting" element={<AddMeeting />} />
        <Route path="/addtask1" element={<AddTask1 />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addnotes" element={<Addnotes />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
