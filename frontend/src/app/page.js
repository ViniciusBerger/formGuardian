"use client"
import { Header } from "./components/header";
import { About } from "./components/about"
import { Features } from "./components/features";
import { Installation } from "./components/installation";

export default function FormGuardianPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header/>
      <About/>
      <Features/>
      <Installation/>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm py-6 text-gray-500">
        <p>© 2025 FormGuardian. All rights reserved.</p>
      </footer>
    </div>
  );
}
