import Footer from "@/components/footer";
import Header from "@/components/header";

type SiteLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default SiteLayout;
