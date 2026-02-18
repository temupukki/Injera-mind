import DashNavbar from "@/component/DashNavbar";
import DashFooter from "@/component/DashFooter";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin");
  }
  return (
    <>
      <DashNavbar />
      {children}
      <DashFooter />
    </>
  );
}
