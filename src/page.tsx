// import Link from 'next/link'
import { motion } from "framer-motion";
import { ScrollCarousel } from "./components/scroll-carousel";

const familyMembers = [
  {
    name: "Thomas",
    subdomain: "thomas.guntenaar.org",
    gradient: "from-blue-500 to-purple-500",
    expertise: [
      "Software Developer",
      "Full Stack",
      "React",
      "Node.js",
      "TypeScript",
      "Web3",
      "Cloud Architecture",
    ],
  },
  {
    name: "Boris",
    subdomain: "boris.guntenaar.org",
    gradient: "from-purple-500 to-pink-500",
    expertise: [
      "Accountant",
      "Drone Company",
      "Aerial Photography",
      "Financial Planning",
      "Business Strategy",
      "UAV Expert",
    ],
  },
  {
    name: "Olivier",
    subdomain: "olivier.guntenaar.org",
    gradient: "from-orange-500 to-red-500",
    expertise: [
      "Software Developer",
      "Frontend",
      "UX Design",
      "Vue.js",
      "Mobile Development",
      "UI Architecture",
    ],
  },
  {
    name: "Joost",
    subdomain: "joost.guntenaar.org",
    gradient: "from-green-500 to-emerald-500",
    expertise: [
      "Photographer",
      "Visual Artist",
      "Digital Imaging",
      "Studio Work",
      "Portrait Photography",
      "Commercial Photography",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="pt-16 pb-8 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
          Guntenaar.org
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {familyMembers.map((member, index) => (
            <a
              href={`https://${member.subdomain}`}
              key={member.name}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  relative overflow-hidden rounded-3xl p-8 h-[300px]
                  bg-gradient-to-br ${member.gradient}
                  transition-transform duration-500 ease-out
                  group-hover:scale-[0.98]
                `}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-medium">{member.name}</h2>
                    <div className="h-6 opacity-75">
                      <ScrollCarousel
                        terms={member.expertise}
                        baseVelocity={2}
                      />
                    </div>
                  </div>
                  <p className="text-sm opacity-80 font-light tracking-wide">
                    {member.subdomain}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </motion.div>
            </a>
          ))}
        </div>
      </main>

      <footer className="py-8 px-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Guntenaar Family</p>
      </footer>
    </div>
  );
}
