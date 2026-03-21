import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import GhostCursor from './components/ghost_cursor';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, pointerEvents: 'none' }}>
          <GhostCursor
            // Visuals
            color="#ff4757" // Changed to match the primary theme color
            brightness={2}
            edgeIntensity={0}

            // Trail and motion
            trailLength={50}
            inertia={0.5}

            // Post-processing
            grainIntensity={0.05}
            bloomStrength={0.1}
            bloomRadius={1}
            bloomThreshold={0.025}

            // Fade-out behavior
            fadeDelayMs={1000}
            fadeDurationMs={1500}
          />
        </div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;