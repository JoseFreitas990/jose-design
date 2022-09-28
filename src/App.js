import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Forest, Ideas, Landing, Matryoshka } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/forest' element={<Forest />} />
        <Route path='/doll' element={<Matryoshka />} />
      </Routes>
    </Router>
  );
}

export default App;
