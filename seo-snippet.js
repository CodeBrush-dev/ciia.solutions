// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.ciia.solutions",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.ciia.solutions/","title_tag":"Private Investigators Naperville | Castle Island","meta_description":"Private Investigators in Naperville offering litigation support, asset searches, internal investigations, forensic accounting and ethical investigations."},{"page_url":"https://www.ciia.solutions/about","title_tag":"Litigation Support Naperville | Castle Island","meta_description":"Litigation Support in Naperville from seasoned investigators with FBI, forensic accounting and internal investigations experience for complex disputes and fraud."},{"page_url":"https://www.ciia.solutions/contact","title_tag":"Private Investigators Naperville | Contact Castle Island","meta_description":"Contact Private Investigators in Naperville for litigation support, background investigations, asset searches, forensic accounting and ethical investigations today."}],"keywords":["Private Investigators Naperville","Litigation Support Naperville","Background Investigations Naperville","Internal Investigations Naperville","Forensic Accounting Naperville","Asset Searches Naperville","Employee Misconduct Naperville","Fraud Investigation Naperville","Criminal History Search Naperville","Ethical Investigations Naperville"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ciia.solutions/#localbusiness",
  "url": "https://www.ciia.solutions/",
  "name": "Castle Island Investigative Associates",
  "description": "Castle Island Investigative Associates provides experienced, objective, and ethical private investigation services including litigation support, internal investigations, and background investigations.",
  "image": [
    "https://static.wixstatic.com/media/5378e1_82342d56286342fd9df3c0178730a243~mv2.jpg/v1/fill/w_96,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5378e1_82342d56286342fd9df3c0178730a243~mv2.jpg",
    "https://static.wixstatic.com/media/5378e1_90ca7eb04273452aa46676dc586c737b~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/5378e1_90ca7eb04273452aa46676dc586c737b~mv2.jpg"
  ],
  "telephone": "+1-331-401-8402",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "115 E Ogden Avenue, Suite 105 PMB 332",
    "addressLocality": "Naperville",
    "addressRegion": "IL",
    "postalCode": "60563",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.784,
    "longitude": -88.136
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Illinois"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Indiana"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Michigan"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Wisconsin"
    }
  ],
  "email": "mailto:pmurphy@ciia.solutions",
  "sameAs": [
    "https://www.linkedin.com"
  ],
  "founder": {
    "@type": "Person",
    "name": "Pat Murphy",
    "jobTitle": "Owner",
    "description": "Pat Murphy, CPA, JD, CFE, CAMS, has more than 35 years of investigative experience, working with clients to address complex disputes, mitigate internal risks, and gain the upper hand in litigation proceedings."
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Pat Murphy",
      "jobTitle": "Owner",
      "description": "Pat Murphy, CPA, JD, CFE, CAMS, has more than 35 years of investigative experience, including senior roles at Prescient, Grant Thornton, and a 27-year career as an FBI Special Agent and Supervisory Special Agent."
    },
    {
      "@type": "Person",
      "name": "Chris Murphy",
      "jobTitle": "Investigative Assistant",
      "description": "Chris Murphy, Investigative Assistant, supports litigation and forensic accounting matters and holds a Master of Science in Accounting from Benedictine University."
    }
  ],
  "priceRange": "$$",
  "legalName": "Castle Island Investigative Associates",
  "knowsAbout": [
    "Private investigations",
    "Litigation support",
    "Internal investigations",
    "Background investigations",
    "Forensic accounting",
    "Asset searches",
    "Employee misconduct investigations",
    "Fraud investigations",
    "Corruption investigations"
  ],
  "serviceArea": [
    {
      "@type": "AdministrativeArea",
      "name": "Illinois"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Indiana"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Michigan"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Wisconsin"
    }
  ],
  "department": {
    "@type": "LegalService",
    "name": "Litigation Support",
    "url": "https://www.ciia.solutions/",
    "description": "Litigation support services including party and witness location, interviews, vetting, pre- and post-litigation asset searches, and forensic accounting.",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Illinois"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Indiana"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Michigan"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wisconsin"
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Litigation Support",
        "description": "Assistance with party and witness location, interviews, vetting, pre- and post-litigation asset searches, and forensic accounting."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Internal Investigations",
        "description": "Internal investigations to root out employee misconduct including theft, embezzlement, and harassment."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Background Investigations",
        "description": "Background investigations including searches of criminal and civil litigation history, public records, news media, open sources, social media, and discreet interviews."
      }
    }
  ],
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Reid S."
    },
    "reviewBody": "I have worked with Pat on numerous matters throughout the years and keep coming back because he is one of the best in the business. Pat knows what he is doing and gets results while maintaining the highest standards of integrity.",
    "reviewRating": {
      "@type": "Rating"
    }
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
