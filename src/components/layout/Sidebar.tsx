import React from 'react';
import { Home, AlertTriangle, GitCompare, Sliders, Book } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'detection', label: 'Bias Detection', icon: <AlertTriangle size={20} /> },
    { id: 'comparison', label: 'Model Comparison', icon: <GitCompare size={20} /> },
    { id: 'mitigation', label: 'Bias Mitigation', icon: <Sliders size={20} /> },
    { id: 'resources', label: 'Resources', icon: <Book size={20} /> },
  ];

  return (
    <aside
      className={`bg-gray-800 text-white w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h2 className="text-xl font-bold">FairLoan Analyzer</h2>
      </div>
      <nav className="mt-6 px-2">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`${
                activeSection === item.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              } group flex items-center px-4 py-3 text-base font-medium rounded-md w-full transition-colors duration-200`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
        <div className="text-sm text-gray-400 text-center">
          <p>FairLoan Analyzer v1.0</p>
          <p className="mt-1">© 2025 Ethical AI Solutions</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;