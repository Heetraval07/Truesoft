import { useEffect } from "react";

const SITE_TITLE = "Truesoft";

/**
 * Sets the browser tab title dynamically.
 * @param title - Page-specific title. Pass empty string or undefined for home page (shows "Truesoft" only).
 */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    if (title && title.trim()) {
      document.title = `${title} - ${SITE_TITLE}`;
    } else {
      document.title = SITE_TITLE;
    }
  }, [title]);
}
