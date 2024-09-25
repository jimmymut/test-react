import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: []
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            state.users.filter(us => us.id != id);
        },
        addUser: (state, action) => {
             state.users.unshift(action.payload);
        },
        updateUser: (state, action) => {
            const updatedUsers = state.users.map(user => {
                if (user.id === action.payload.id) return action.payload;
                return user;
            });

            state.users = updatedUsers;
        }
    }
});

export default usersSlice.reducer;
export const { setUsers, updateUser, addUser, deleteUser, setLoading } = usersSlice.actions;