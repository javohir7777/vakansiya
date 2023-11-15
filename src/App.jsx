import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./pages/Men";
import Woman from "./pages/Woman";
import Young from "./pages/Young";
import Transaction from "./pages/Transaction";
import Layout from "./container/layout";
import ContactUs from "./pages/ContactUs";
import RuleOfUse from "./pages/RuleOfUse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Men />} />
          <Route path="woman" element={<Woman />} />
          <Route path="young" element={<Young />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="rule" element={<RuleOfUse />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
