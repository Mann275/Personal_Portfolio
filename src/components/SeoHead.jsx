import { useEffect } from "react";

const SITE_URL = "https://patelmann.me";

function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) {
    return SITE_URL;
  }

  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function upsertMeta(selector, attributes) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
}

function upsertCanonicalLink(href) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export default function SeoHead({
  title,
  description,
  path = "/",
  image = "/link.png",
  type = "website",
  keywords,
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  jsonLd,
}) {
  const schemaSignature = JSON.stringify(jsonLd ?? null);

  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(path);
    const imageUrl = toAbsoluteUrl(image);

    document.title = title;

    upsertMeta('meta[name="title"]', {
      name: "title",
      content: title,
    });
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: robots,
    });

    if (keywords) {
      upsertMeta('meta[name="keywords"]', {
        name: "keywords",
        content: keywords,
      });
    }

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });

    upsertMeta('meta[property="twitter:card"]', {
      property: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[property="twitter:url"]', {
      property: "twitter:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="twitter:title"]', {
      property: "twitter:title",
      content: title,
    });
    upsertMeta('meta[property="twitter:description"]', {
      property: "twitter:description",
      content: description,
    });
    upsertMeta('meta[property="twitter:image"]', {
      property: "twitter:image",
      content: imageUrl,
    });

    upsertCanonicalLink(canonicalUrl);

    const existingManagedScripts = document.querySelectorAll(
      'script[data-seo-managed="true"]',
    );
    existingManagedScripts.forEach((script) => script.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.seoManaged = "true";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [
    description,
    image,
    jsonLd,
    keywords,
    path,
    robots,
    schemaSignature,
    title,
    type,
  ]);

  return null;
}
