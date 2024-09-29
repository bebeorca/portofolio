import "./globals.css";


export const metadata = {
  title: "Dimas Deo Rezkidyo",
  description: "Portofolio Dimas Deo Rezkzidyo | Fullstack Developer",
  icons: {
    icon: '/images/icon.svg'
  },
};

function bgEditor(){
  //todo
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-roca scrollbar"
      >
        {children}
      </body>
    </html>
  );
}
