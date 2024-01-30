export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      afterLoginLayout
      {children}
    </div>
  );
}
