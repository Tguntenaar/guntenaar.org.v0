import React from "react";
// import { Code2, Drone, Camera, Code } from "lucide-react";
import FamilyCard from "./components/FamilyCard";
import { familyMembers } from "./data/family";

// possible background colors: #fbfbfd, #e5e7eb
function BoltNew() {
  return (
    <div className="min-h-screen bg-[#e5e7eb]">
      <nav className="bg-[rgba(251,251,253,0.8)] backdrop-blur-md fixed w-full z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Guntenaar</h1>
          <div className="text-sm text-gray-600">guntenaar.org</div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-semibold text-center mb-4 text-gray-900">
            Meet the Guntenaars
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            A family of innovators, creators, and professionals, each bringing
            unique expertise to their respective fields.
          </p>

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-6 py-4">
              {[...familyMembers, ...familyMembers].map((member, index) => (
                <FamilyCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Guntenaar Family. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BoltNew;
