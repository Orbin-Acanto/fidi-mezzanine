import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pt-18 min-h-screen">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
