import { activityFeedActionsSlice, activityFeedActionsActions } from './activityFeedActionsSlice';
import { ActivityFeedActionsSchema } from '../types/activityFeedActionsSchema';

describe('activityFeedActionsSlice', () => {
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

    it('should handle addAction', () => {
        const newState = activityFeedActionsSlice.reducer(initialState, activityFeedActionsActions.addAction({
            id: 'newId',
            time: '2024-03-01',
            action: 'newAction',
            message: 'New message'
        }));

        expect(newState.actions.length).toEqual(initialState.actions.length + 1);
        expect(newState.actions[0].id).toEqual('newId');
    });

    it('should handle deleteAction', () => {
        const actionIdToDelete = 'asdqwefs';
        const newState = activityFeedActionsSlice.reducer(initialState, activityFeedActionsActions.deleteAction(actionIdToDelete));

        expect(newState.actions.length).toEqual(initialState.actions.length - 1);
        expect(newState.actions.some(action => action.id === actionIdToDelete)).toBeFalsy();
    });
});
