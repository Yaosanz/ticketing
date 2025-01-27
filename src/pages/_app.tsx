import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import 'styles/global.css';
function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: Record<string, unknown> }) {
  return (
    <ClerkProvider>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
