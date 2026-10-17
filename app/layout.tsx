import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karen Calderon — Product Designer",
  description:
    "Portfolio of Karen Calderon, a product designer creating clarity for complex digital experiences. Explore UX and UI concept studies.",
  openGraph: {
    title: "Karen Calderon — Product Designer",
    description: "Designing clarity for complex worlds. Explore three UX and UI concept studies.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
