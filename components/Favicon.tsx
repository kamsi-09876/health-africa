// app/components/Favicon.tsx
"use client";
import { SiWorldhealthorganization } from "react-icons/si";

export function Favicon() {
  return (
    <link
      rel="icon"
      type="image/svg+xml"
      href={`data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300B74A">
          <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm0 22c-5.522 0-10-4.478-10-10S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
        </svg>`
      )}`}
    />
  );
}