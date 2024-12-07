import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Questions from "./pages/Questions";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import SearchResults from "./pages/SearchResults";
import Profile from "./pages/Profile";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <main>
      <div className='sticky top-0 z-30'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/leaderboards' element={<Leaderboard />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
