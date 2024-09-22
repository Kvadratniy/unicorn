import { create } from 'zustand'
import { createUserSlice , type UserSlice} from './userSlice';

const useBoundStore = create<UserSlice>()((...a) => ({
  ...createUserSlice(...a),
}))