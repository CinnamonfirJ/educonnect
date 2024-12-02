import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Questions from "./pages/Questions";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/leaderboards' element={<Leaderboard />} />
        <Route path='/faqs' element={<FAQ />} />
      </Routes>
    </main>
  );
}

export default App;
