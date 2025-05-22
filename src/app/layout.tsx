import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/header";
import ThemeToggle from "@/components/ThemeToggle";
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
        </ThemeProvider>
      </body>
    </html>
  );
}
