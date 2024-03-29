import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import { Provider } from "react-redux";
import store from "../store";
import ReduxProvider from "@/store/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NavBar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
// RootLayout.tsx
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Head } from "next/document";
// import "./globals.css";
// import NavBar from "@/components/navBar/navBar";
// import Footer from "@/components/footer/footer";
// import { Provider } from "react-redux";
// import store from "../store";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div>
//     <Head>
//       {metadata.title && <title>{metadata.title as string}</title>}
//       {metadata.description && (
//         <meta name="description" content={metadata.description} />
//       )}
//     </Head>
//     <Provider store={store}>
//       <NavBar />
//       {children}
//       <Footer />
//     </Provider>
//   </div>
// );

// export default RootLayout;
