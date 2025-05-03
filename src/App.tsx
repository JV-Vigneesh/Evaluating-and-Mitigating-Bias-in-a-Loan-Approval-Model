import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './sections/Dashboard';
import BiasDetection from './sections/BiasDetection';
import ModelComparison from './sections/ModelComparison';
import BiasMitigation from './sections/BiasMitigation';
import Resources from './sections/Resources';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'detection':
        return <BiasDetection />;
      case 'comparison':
        return <ModelComparison />;
      case 'mitigation':
        return <BiasMitigation />;
      case 'resources':
        return <Resources />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
    </Layout>
  );
}

export default App;