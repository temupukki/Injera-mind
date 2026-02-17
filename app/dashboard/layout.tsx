import Footer from "@/component/Footer";
import DashNavbar from "@/component/DashNavbar";
import DashFooter from "@/component/DashFooter";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashNavbar />
      {children}
      <DashFooter />
    </>
  );
}
