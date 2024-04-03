import { getActivityFeedActionsData } from './activityFeedActions';
import { StateSchema } from 'src/app/providers/StoreProvider';

describe('getActivityFeedActionsData selector', () => {
    it('should return activity feed actions data from state', () => {
        const mockState: StateSchema = {
            activityFeedActions: {
                actions: [
                    {
                        id: '1',
                        time: '2024-03-28',
                        action: 'meeting',
                        message: 'And a more formal meeting.'
                    },
                    {
                        id: '2',
                        time: '2024-03-25',
                        action: 'call',
                        message: 'Then we had a follow-up phone call.'
                    },
                ]
            }
        };

        const result = getActivityFeedActionsData(mockState);

        expect(result).toEqual(mockState.activityFeedActions.actions);
    });
});
