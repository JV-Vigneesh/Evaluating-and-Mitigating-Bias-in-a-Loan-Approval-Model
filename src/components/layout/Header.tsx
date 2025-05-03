import React from 'react';
import { BarChart2, Settings, HelpCircle, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 md:hidden hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu size={24} />
            </button>
            <div className="flex-shrink-0 flex items-center ml-2 md:ml-0">
              <BarChart2 className="h-8 w-8 text-blue-700" />
              <span className="ml-2 text-xl font-bold text-gray-900">FairLoan Analyzer</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Documentation
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Resources
              </a>
            </div>
            <div className="flex items-center ml-4 space-x-3">
              <button
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <HelpCircle size={20} />
              </button>
              <button
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Settings size={20} />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                      <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;