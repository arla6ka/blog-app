
import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
