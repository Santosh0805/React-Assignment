import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Tickets from "../Pages/Tickets";
import TicketCreate from "../Pages/TicketCreate";
import TicketEdit from "../Pages/TicketEdit";
import TicketView from "../Pages/TicketView";


export default function AllRoutes (){
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/tickets" element = {<Tickets/>}/>
        <Route path="/ticketcreate" element = {<TicketCreate/>}/>
        <Route path="/ticketedit" element = {<TicketEdit/>}/>
        <Route path="/ticketview" element = {<TicketView/>}/>
    </Routes>
)
}