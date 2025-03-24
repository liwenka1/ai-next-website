import Footer from "@/components/footer";
import Header from "@/components/header";

type SiteLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="prose dark:prose-invert container py-14 sm:py-20">{children}</div>
      <Footer />
    </main>
  );
};

export default SiteLayout;
