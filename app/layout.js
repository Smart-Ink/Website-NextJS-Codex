export const metadata = {
  title: 'Smart Ink',
  description: 'Smart Ink website wrapped in Next.js routing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
