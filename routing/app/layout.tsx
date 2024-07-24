import Navigation from "../components/Navigation";

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "Great NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
