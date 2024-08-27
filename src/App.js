import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Career, Home, Service } from "./page";
import Contact from "./page/Contact/Contact";
import Recruitment from "./page/Recruitment/Recruitment";
import Outsourcing from "./page/Outsourcing/Outsourcing";
import Training from "./page/Training/Training";
import Payroll from "./page/Payroll/Payroll";
import Consulting from "./page/Consulting/Consulting";
import Campus from "./page/Campus/Campus";
import ItStaff from "./page/ItStaff/itStaff";
import NonItStaff from "./page/NonItStaff/nonItStaff";
import StaffingSolution from "./page/StaffingSolution/staffingSolution";
import PermanentStaffing from "./page/PermanentStaffing/permanentStaffing";
import TemporaryStaffing from "./page/TemporaryStaffing/temporaryStaffing";
import ContractualStaffing from "./page/ContractualStaffing/contractualStaffing";
import Employment from "./page/VirtualEmployment/Employment";
import ServicesConsulting from "./page/Services&Consulting/ServicesConsulting";
import ThirdPartyPayroll from "./page/ThirdPartyPayroll/ThirdPartyPayroll";

function App() {
  const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/outsourcing" element={<Outsourcing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/payroll" element={<Payroll />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/career" element={<Career />} />
      <Route path="/campus" element={<Campus />} />
      <Route path="/itStaff" element={<ItStaff />} />
      <Route path="/nonItStaff" element={<NonItStaff />} />
      <Route path="/staffingSolution" element={<StaffingSolution />} />
      <Route path="/permanentStaffing" element={<PermanentStaffing />} />
      <Route path="/temporaryStaffing" element={<TemporaryStaffing />} />
      <Route path="/contractualStaffing" element={<ContractualStaffing />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/servicesConsulting" element={<ServicesConsulting />} />
      <Route path="/thirdPartyPayroll" element={<ThirdPartyPayroll />} />

    </Routes>
  );

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
