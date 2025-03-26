type TermsLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const TermsLayout: React.FC<TermsLayoutProps> = ({ children }) => {
  return <div className="prose dark:prose-invert container py-14 sm:py-20">{children}</div>;
};

export default TermsLayout;
