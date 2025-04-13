import { OakFooter } from "../components/Footer/Footer";
import { OakNavbar } from "../components/Navbar/OakNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100dvh] flex-col mx-auto p-6">
      <OakNavbar />
      <main className="flex-1">{children}</main>
      <OakFooter />
    </div>
  );
}
