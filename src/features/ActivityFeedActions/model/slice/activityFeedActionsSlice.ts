import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ActivityFeedActionsSchema} from "../types/activityFeedActionsSchema";
import {IActionStatus} from "../types/actionStatus";

const initialState: ActivityFeedActionsSchema = {
    actions: [
        {
            id: 'asdqwefs',
            time: '2024-03-28',
            action: 'meeting',
            message: 'And a more formal meeting.'
        },
        {
            id: '123saa',
            time: '2024-03-25',
            action: 'call',
            message: 'Then we had a follow-up phone call.'
        },
        {
            id: '213as',
            time: '2024-03-20',
            action: 'coffee',
            message: 'We had coffee!'
        },
        {
            id: '1234ad',
            time: '2024-02-21',
            action: 'message',
            message: 'A test note of message type !'
        }
    ],
};

export const activityFeedActionsSlice = createSlice({
    name: 'activityFeedActions',
    initialState,
    reducers: {
        addAction: (state, { payload }: PayloadAction<IActionStatus>) => {
            state.actions.unshift(payload);
        },
        deleteAction: (state, { payload }: PayloadAction<string>) => {
            state.actions = state.actions.filter(item => item.id !== payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: activityFeedActionsActions } = activityFeedActionsSlice;
export const { reducer: activityFeedActionsReducer } = activityFeedActionsSlice;
