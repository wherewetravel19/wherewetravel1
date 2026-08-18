// استبدل محتوى: app/layout.js بهذا الملف بالكامل
// أضاف: ربط الشعار كأيقونة للمتصفح (icons.icon)
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Where we Travel | Plan Smarter. Travel Better.",
  description:
    "Where we Travel is an AI-powered smart trip planning platform. Get destination suggestions, smart budget planning, and the best flight & hotel deals.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
