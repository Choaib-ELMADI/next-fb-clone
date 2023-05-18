import './globals.scss';
import { AuthProvider } from "@/context/AuthContext";



export const metadata = {
  title: 'Facebook',
  description: 'Facebook clone built with React.js, Next.js, Sass, Firebase, ...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/favicon/facebook.png'></link>
      </head>
      <body>
        <AuthProvider>
          { children }
        </AuthProvider>
      </body>
    </html>
  );
};