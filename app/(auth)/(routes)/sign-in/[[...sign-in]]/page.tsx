import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Admin Dashboard',
};

export default function Page() {
  return <SignIn />;
}
