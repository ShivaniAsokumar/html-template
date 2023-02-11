// import './App.css';
import Index from './pages/index';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/about" element={<About />} />
					<Route path="/men" element={<Men />} />
					<Route path="/women" element={<Women />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
