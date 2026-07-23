import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mohamed-atef.vercel.app"),
  title: "Mohamed Atef",
  description: "Portfolio of Mohamed Atef, AI Engineer specializing in LLMs, RAG systems, and Agentic AI. Explore projects, skills, certifications, and experience.",
  keywords: [
    "Mohamed Atef", "Portfolio", "AI Engineer", "LLM", "RAG", "LangChain", "Agentic AI", "NLP", "Computer Vision", "Deep Learning", "Python", "FastAPI", "Cairo University", "Machine Learning"
  ],
  authors: [{ name: "Mohamed Atef", url: "https://www.linkedin.com/in/mohamed-atef-mawad" }],
  creator: "Mohamed Atef",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true, noimageindex: false }
  },
  openGraph: {
    title: "Mohamed Atef — AI Engineer",
    description: "Portfolio of Mohamed Atef, AI Engineer specializing in LLMs, RAG systems, and Agentic AI. Explore projects, skills, certifications, and experience.",
    url: "https://portfolio-mohamed-atef.vercel.app/",
    siteName: "Mohamed Atef Portfolio",
    images: [
      {
        url: "/my_photo.jpg",
        width: 800,
        height: 600,
        alt: "Mohamed Atef Photo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Atef — AI Engineer",
    description: "Portfolio of Mohamed Atef, AI Engineer specializing in LLMs, RAG systems, and Agentic AI.",
    images: [
      {
        url: "/my_photo.jpg",
        width: 800,
        height: 600,
        alt: "Mohamed Atef Photo"
      }
    ]
  },
  alternates: {
    canonical: "https://portfolio-mohamed-atef.vercel.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/my_photo.jpg" type="image/jpeg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
