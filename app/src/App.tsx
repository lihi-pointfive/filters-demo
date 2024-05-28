import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import Resources from './pages/resources/Resources';
import Opportunities from './pages/opportunities/Opportunities';

function App() {
    return (
        <div className="mt-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/opportunities" element={<Opportunities />} />
            </Routes>
        </div>
    );
}

export default App;
