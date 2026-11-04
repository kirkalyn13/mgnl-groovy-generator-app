import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SEO = () => {
  const location = useLocation();

  const getMetaTags = () => {
    switch (location.pathname) {
      case "/about":
        return {
          title: "About - Magnolia Groovy Generator",
          description:
            "Learn about the Magnolia Groovy Generator - a tool that turns plain-language requests into working Magnolia CMS scripts, grounded in real examples. Built with React + Vite, FastAPI, LlamaIndex, Qdrant, Ollama, Gemini, Redis, and LangFuse.",
          keywords:
            "magnolia groovy generator, magnolia cms scripts, groovy script generator, ai code generator, magnolia automation, react vite, fastapi, llamaindex, qdrant, ollama, gemini, redis, langfuse",
          image: "/mgnl-demo.gif",
        };
      case "/":
        return {
          title: "Magnolia Groovy Generator - Generate Groovy Scripts for Magnolia CMS",
          description:
            "Generate Magnolia CMS Groovy scripts with AI. Describe your task in plain English and get production-ready scripts grounded in real Magnolia examples.",
          keywords:
            "magnolia groovy generator, magnolia cms, groovy script, ai code generator, magnolia automation, cms scripts",
          image: "/mgnl-demo.gif",
        };
      default:
        return {
          title: "Magnolia Groovy Generator - Generate Groovy Scripts for Magnolia CMS",
          description:
            "Generate Magnolia CMS Groovy scripts with AI. Describe your task in plain English and get production-ready scripts grounded in real Magnolia examples.",
          keywords:
            "magnolia groovy generator, magnolia cms, groovy script, ai code generator, magnolia automation, cms scripts",
          image: "/mgnl-demo.gif",
        };
    }
  };

  const meta = getMetaTags();

  useEffect(() => {
    // Update document title - this is safe to do anytime
    if (typeof document !== "undefined") {
      document.title = meta.title;
    }

    // Only manipulate DOM when in browser environment
    if (typeof document === "undefined") return;

    // Remove existing meta tags with matching property names
    const existingMetaTags = [
      "description",
      "keywords",
      "og:title",
      "og:description",
      "og:image",
      "twitter:title",
      "twitter:description",
      "twitter:image",
    ];

    existingMetaTags.forEach((tag) => {
      // Try both name and property attributes
      const existingTag = document.querySelector(`meta[name="${tag}"]`) || 
                          document.querySelector(`meta[property="${tag}"]`);
      if (existingTag) {
        existingTag.remove();
      }
    });

    // Add new meta tags
    const metaElements: HTMLMetaElement[] = [];

    if (meta.description) {
      const descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      descriptionTag.content = meta.description;
      document.head.appendChild(descriptionTag);
      metaElements.push(descriptionTag);
    }

    if (meta.keywords) {
      const keywordsTag = document.createElement("meta");
      keywordsTag.name = "keywords";
      keywordsTag.content = meta.keywords;
      document.head.appendChild(keywordsTag);
      metaElements.push(keywordsTag);
    }

    // Open Graph tags - use property attribute for OG tags
    const ogTitleTag = document.createElement("meta");
    ogTitleTag.setAttribute("property", "og:title");
    ogTitleTag.content = meta.title;
    document.head.appendChild(ogTitleTag);
    metaElements.push(ogTitleTag);

    const ogDescriptionTag = document.createElement("meta");
    ogDescriptionTag.setAttribute("property", "og:description");
    ogDescriptionTag.content = meta.description;
    document.head.appendChild(ogDescriptionTag);
    metaElements.push(ogDescriptionTag);

    if (meta.image) {
      const ogImageTag = document.createElement("meta");
      ogImageTag.setAttribute("property", "og:image");
      ogImageTag.content = meta.image;
      document.head.appendChild(ogImageTag);
      metaElements.push(ogImageTag);
    }

    // Twitter Card tags
    const twitterTitleTag = document.createElement("meta");
    twitterTitleTag.setAttribute("name", "twitter:title");
    twitterTitleTag.content = meta.title;
    document.head.appendChild(twitterTitleTag);
    metaElements.push(twitterTitleTag);

    const twitterDescriptionTag = document.createElement("meta");
    twitterDescriptionTag.setAttribute("name", "twitter:description");
    twitterDescriptionTag.content = meta.description;
    document.head.appendChild(twitterDescriptionTag);
    metaElements.push(twitterDescriptionTag);

    if (meta.image) {
      const twitterImageTag = document.createElement("meta");
      twitterImageTag.setAttribute("name", "twitter:image");
      twitterImageTag.content = meta.image;
      document.head.appendChild(twitterImageTag);
      metaElements.push(twitterImageTag);
    }

    // Cleanup on unmount
    return () => {
      metaElements.forEach((el) => el.remove());
    };
  }, [meta]);

  return null;
};

export default SEO;
