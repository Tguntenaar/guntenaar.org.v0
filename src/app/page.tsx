import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollingTerms } from "../components/scrolling-terms";

const familyMembers = [
  {
    name: "Thomas",
    role: "Software Developer",
    terms: [
      "React",
      "TypeScript",
      "Node.js",
      "Cloud Architecture",
      "System Design",
      "API Development",
    ],
    subdomain: "thomas.guntenaar.org",
  },
  {
    name: "Boris",
    role: "Accountant & Drone Specialist",
    terms: [
      "Financial Analysis",
      "Drone Photography",
      "Aerial Mapping",
      "Business Strategy",
      "Risk Assessment",
    ],
    subdomain: "boris.guntenaar.org",
  },
  {
    name: "Olivier",
    role: "Software Developer",
    terms: [
      "Frontend Development",
      "UX Design",
      "Mobile Apps",
      "Web Performance",
      "Accessibility",
    ],
    subdomain: "olivier.guntenaar.org",
  },
  {
    name: "Joost",
    role: "Photographer",
    terms: [
      "Portrait Photography",
      "Landscape",
      "Digital Editing",
      "Studio Lighting",
      "Commercial Photography",
    ],
    subdomain: "joost.guntenaar.org",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e5e7eb] text-gray-900">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-medium">
            Guntenaar
          </a>
          <nav className="space-x-8 text-sm">
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-center mb-4">
            The Guntenaar Family
          </h1>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto">
            A collective of professionals in technology, finance, and creative
            arts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {familyMembers.map((member) => (
              <a
                key={member.name}
                href={`https://${member.subdomain}`}
                className="group"
              >
                <Card className="p-6 h-[300px] bg-white border-gray-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:bg-gray-100">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      {member.name}
                    </h2>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <ScrollingTerms terms={member.terms} />
                  </div>
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-900 transition-colors">
                    Visit website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Guntenaar Family. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
