import React from "react";

const MainForm = ({formName}) => {
  return (
    <div>
      <NavBarForForm />
      <Router>
        <NavBarForForm />
        <Routes>
          <Route path="/FormPersonalInfo" element={<FormPersonalInfo />} />
          <Route path="/FormOrders" element={<FormOrders />} />
          <Route path="/FormOverview" element={<FormOverview />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainForm;
