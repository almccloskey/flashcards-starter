import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            // const { quizId, name, topicId, cardIds} = action.payload;
            // state.quizzes[quizId] = {
            //     id: quizId,
            //     name: name,
            //     topicId: topicId,
            //     cardIds: cardIds
            // }
            const quizObj = {
                     
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds :action.payload.cardIds      
            
        }
        state.quizzes[action.payload.id] = quizObj;
        }
    }
});

export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId}))
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;