import { StateSchema } from 'src/app/providers/StoreProvider';

export const getActivityFeedActionsData = (state: StateSchema) => state.activityFeedActions?.actions;
