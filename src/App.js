import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Console, Forest, Ideas, Landing, Random } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/forest' element={<Forest />} />
        <Route path='/console' element={<Console />} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </Router>
  );
}

export default App;
