import React from "react";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nirayam Technologies",
    "url": "https://nirayam.com",
    "logo": "https://nirayam.com/logo.png",
    "description": "Nirayam Technologies is an elite software studio engineering custom web applications, native mobile apps, AI integrations, and workflow automation architectures.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/nirayam-technologies-b4201941b/",
      "https://www.youtube.com/channel/UCMVZmf6vlu0SqCWBKvzL3kQ",
      "https://www.instagram.com/nirayam.tech/",
      
    ],
    "knowsAbout": [
      "Software Development",
      "Artificial Intelligence Solutions",
      "Web Application Development",
      "Mobile Application Development",
      "Business Automation Systems",
      "React Native Ecosystem"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}