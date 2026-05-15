import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SITE_HEADER_ID = "site-header"

export function scrollToSection(sectionId: string) {
  const targetEl = document.getElementById(sectionId)
  if (!targetEl) return

  const headerH = document.getElementById(SITE_HEADER_ID)?.offsetHeight ?? 0
  const top =
    targetEl.getBoundingClientRect().top + window.scrollY - headerH - 8

  window.scrollTo({ top, behavior: "smooth" })
}

export function openWithFallback(deepLink: string, webFallback: string, timeoutMs = 900) {
  // Try to open the native app in the SAME tab
  const t = setTimeout(() => {
    // If the page is still visible after timeout, assume deep link failed
    if (!document.hidden) {
      window.open(webFallback, "_blank", "noopener"); // open fallback in a new tab
    }
  }, timeoutMs);

  // If the app opens, the page usually becomes hidden or blurs: cancel fallback
  const cancel = () => {
    clearTimeout(t);
    document.removeEventListener("visibilitychange", cancel);
    window.removeEventListener("pagehide", cancel);
    window.removeEventListener("blur", cancel);
  };
  document.addEventListener("visibilitychange", cancel);
  window.addEventListener("pagehide", cancel);
  window.addEventListener("blur", cancel);

  // Trigger the deep link
  window.location.href = deepLink;
}
