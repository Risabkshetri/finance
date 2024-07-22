// import { createSlice } from "@reduxjs/toolkit";


// const loadLocalStorage = () => {
//     const aiChatsCount = localStorage.getItem("chats");

//     return aiChatsCount ? parseInt(aiChatsCount) : 0;
// };

// const saveLocalStorage = (aiChatsCount) => {
//     localStorage.setItem("chats", aiChatsCount);
// };


// const aiSlice = createSlice({
//     name: "aichats",    
//     initialState: loadLocalStorage(),
//     reducers: {
//         chatsCount: (state) => {
//             state.aiChatsCount = state.aiChatsCount + 1;
//             saveLocalStorage(state.aiChatsCount);
//         },
        
//      }
// })

// export const { chatsCount } = aiSlice.actions;

// export default aiSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const loadLocalStorage = () => {
    const aiChatsCount = localStorage.getItem("chats");
    return aiChatsCount ? parseInt(aiChatsCount) : 0;
};

const saveLocalStorage = (aiChatsCount) => {
    localStorage.setItem("chats", aiChatsCount);
};

const initialState = {
    aiChatsCount: loadLocalStorage(),
};

const aiSlice = createSlice({
    name: "aichats",
    initialState,
    reducers: {
        chatsCount: (state) => {
            state.aiChatsCount += 1;
            saveLocalStorage(state.aiChatsCount);
        },
    },
});

export const { chatsCount } = aiSlice.actions;

export default aiSlice.reducer;
