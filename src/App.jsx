import Store from "./store";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Form from "./Form";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store/:storeid" element={<Store />} />
      <Route path="/contact_form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
