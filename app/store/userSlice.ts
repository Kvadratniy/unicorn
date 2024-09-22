import { StateCreator } from 'zustand'
import { useSession, signIn, signOut } from "next-auth/react";
import { DefaultSession } from 'next-auth';

export interface UserSlice {
  user: DefaultSession['user'] | null
  login: () => void
  logout: () => void
  check: () => void
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  login: () => set((state) => {
    signIn("google");
    return {};
  }),
  logout: () => set((state) => {
    signOut();
    return {user: null }
  }),
  check: () => set((state) => {
    const { data: session } = useSession();
    return { user: session?.user || null };
  }),
})
