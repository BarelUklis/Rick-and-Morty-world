import { Typography } from "@mui/material";
import './layout.scss';
import Navbar from "../navbar/navbar";
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="layout">
      <Navbar />
      <div className="background-container">
        <div className="background" />
        <Typography variant="h1" className="title">Rick and Morty World</Typography>
      </div>
      <Outlet />
    </div>
  )
};

export default Layout;