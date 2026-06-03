/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BetaSignupCTA } from './components/BetaSignupCTA';
import logo from './assets/logo.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 sm:px-12 py-6 border-b border-gray-100 flex items-center gap-4">
        <img src={logo} alt="PharmConnect Logo" className="h-28 w-auto" />
        <h1 className="font-display text-2xl font-bold text-teal-950">PharmConnect Collaborative</h1>
      </header>
      <main>
        <HeroSection />
        <ProblemsSection />
        <TestimonialsSection />
        <BetaSignupCTA />
      </main>
      <footer className="px-6 sm:px-12 py-10 text-center text-gray-500 font-sans text-sm">
        &copy; 2026 PharmConnect Collaborative. All rights reserved.
      </footer>
    </div>
  );
}

