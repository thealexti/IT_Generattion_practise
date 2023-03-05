import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ScrollProgressBar from './components/ProgressBar/ProgressBar';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';

function App() {
  return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <Header />
      <WhatWeDo />
    </>
  );
}

export default App;
