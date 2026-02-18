export function publicUrl(assetPath: string) {
  const normalized = assetPath.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/?$/, "/")}${normalized}`;
}

