// app/components/Favicon.tsx
"use client";

export function Favicon() {
  return (
    <link
      rel="icon"
      type="image/svg+xml"
      href={`data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00B74A">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.522 0-10-4.478-10-10S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
          <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"/>
          <path d="M12 10v4m-2-2h4" stroke="#00B74A" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      `)}`}
    />
  );
}