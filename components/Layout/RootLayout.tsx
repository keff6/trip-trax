import { Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "../NavBar/NavBar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${jakarta.className} antialiased bg-white dark:bg-ebony-clay h-full`}>
      <header>
        <NavBar />
      </header>
      <main className="h-[calc(100%-80px)] ">
        {children}
      </main>
    </main>
  );
}