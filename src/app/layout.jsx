
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/navbar/nav";
import Foot from "./components/footer/Foot";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KDG",
  description: "created by Kishan daaby",
};

export default function RootLayout({ children }){
  return (
    <html lang='en'>
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Foot />
      </body>
    </html>
  );
}