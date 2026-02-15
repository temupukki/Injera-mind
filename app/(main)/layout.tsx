import Navbar from "@/component/NavBar";
import Footer from "@/component/Footer";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
