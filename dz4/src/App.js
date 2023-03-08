import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ScrollProgressBar from './components/ProgressBar/ProgressBar';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import AboutUs from './components/AboutUs/AboutUs';
import YearsOfSuccessful from './components/YearsOfSuccessful/YearsOfSuccessful';
import Preloader from './components/Preloader/Preloader';
import CompletedWork from './components/CompletedWork/CompletedWork';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <ScrollProgressBar />
          <Header />
          <WhatWeDo />
          <AboutUs />
          <YearsOfSuccessful />
          <CompletedWork />
        </>
      )}
    </>
  );
}

export default App;
