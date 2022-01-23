import React, { Suspense, lazy } from "react";
import "./App.css";
const Home = lazy(() => import("./Components/Lazy/Home"));
const About = lazy(() => import("./Components/Lazy/About"));
function App() {
	return (
		<div>
				<h1>Lazy Loading</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Home />
			</Suspense>
      <Suspense fallback={<div>Loading...About</div>}>
				<About />
			</Suspense>
		</div>
	);
}

export default App;
