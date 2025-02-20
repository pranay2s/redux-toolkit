import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    id: number;
    name: string;
    email: string;
  }
  
 interface UserState {
    users: User[];
  }
  const initialState: UserState = {
    users: [],
  };

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
          },
        setUsers: (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        },
    },
  })

  export const { addUser, setUsers } = userSlice.actions;