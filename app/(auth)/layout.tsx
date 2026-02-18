import Navbar from "@/component/NavBar";
import Footer from "@/component/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const session = await auth.api.getSession({
    headers: await headers(),
  });
    if (session?.user) {
      redirect("/dashboard"); 
    }
  return (
   
      <>
        
        {children}
       
        
      </>
  
  );
}
