import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import {activityFeedActionsReducer} from "src/features/ActivityFeedActions";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            activityFeedActions: activityFeedActionsReducer,
        },
        preloadedState: initialState,
    });
}
