// "use client"
// import { SessionProvider } from "next-auth/react";
// import React, { Children } from "react";

// type ProviderOptionsprops = {
//   children:  React.ReactNode;
// };
// export function ProviderOptions({ children }: ProviderOptionsprops) {
//   return (
//     <SessionProvider>
//       {children}
//     </SessionProvider>
//   );
// }

"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

type ProviderOptionsProps = {
  children: ReactNode;
};

export default function providerOptions({ children }: ProviderOptionsProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}