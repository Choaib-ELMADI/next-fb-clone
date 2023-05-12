import './globals.scss';



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
      <body>{ children }</body>
    </html>
  );
};