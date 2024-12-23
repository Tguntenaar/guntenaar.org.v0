// import { Metadata } from "next"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Guntenaar Family",
  description: "Welcome to the Guntenaar family website",
};

export default function Page() {
  return (
    // ${inter.className}
    <div
      className={` min-h-screen px-6 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32`}
    >
      <main className="mx-auto max-w-[700px] space-y-8">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Hello.</h1>

        <h2 className="text-2xl font-semibold md:text-3xl">
          We are the Guntenaar family.
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground">
          A family of professionals, each with their own unique expertise and
          passion.
        </p>

        <div className="space-y-6 text-lg">
          <p>
            <a
              href="https://thomas.guntenaar.org"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thomas
            </a>{" "}
            is a software developer specializing in web technologies and modern
            development practices.
          </p>

          <p>
            <a
              href="https://olivier.guntenaar.org"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olivier
            </a>{" "}
            is also a software developer, focusing on creating robust and
            scalable applications.
          </p>

          <p>
            <a
              href="https://boris.guntenaar.org"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boris
            </a>{" "}
            is an accountant and entrepreneur, running a successful drone
            company.
          </p>

          <p>
            <a
              href="https://joost.guntenaar.org"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joost
            </a>{" "}
            is a photographer, capturing moments and creating visual stories
            through his lens.
          </p>
        </div>

        <footer className="border-t pt-8 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Guntenaar Family. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
