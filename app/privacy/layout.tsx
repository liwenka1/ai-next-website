type PrivacyLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const PrivacyLayout: React.FC<PrivacyLayoutProps> = ({ children }) => {
  return <div className="prose dark:prose-invert container py-14 sm:py-20">{children}</div>;
};

export default PrivacyLayout;
