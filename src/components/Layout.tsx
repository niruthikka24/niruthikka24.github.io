import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
export function Layout({
  children,
  currentPage,
  setCurrentPage
}: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'research',
    label: 'Research'
  }, {
    id: 'publications',
    label: 'Publications'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'honors',
    label: 'Honors & Awards'
  }, {
    id: 'about',
    label: 'About'
  }];
  return <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                <button onClick={() => setCurrentPage('home')} className="hover:text-gray-600 transition-colors">
                  Your Name, PhD
                </button>
              </h1>
              <p className="text-sm text-gray-500">Academic Researcher</p>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map(item => <li key={item.id}>
                    <button onClick={() => setCurrentPage(item.id)} className={`text-sm hover:text-gray-600 transition-colors ${currentPage === item.id ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                      {item.label}
                    </button>
                  </li>)}
              </ul>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-500 hover:text-gray-600 focus:outline-none">
                {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {mobileMenuOpen && <nav className="md:hidden pb-4">
              <ul className="space-y-4">
                {navItems.map(item => <li key={item.id}>
                    <button onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }} className={`block w-full text-left px-2 py-1 ${currentPage === item.id ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                      {item.label}
                    </button>
                  </li>)}
              </ul>
            </nav>}
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500">
                <a href="mailto:your.email@university.edu" className="hover:text-gray-600 transition-colors">
                  your.email@university.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}