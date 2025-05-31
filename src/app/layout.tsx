import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {/* <ThemeToggle /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
