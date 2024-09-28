import type { ActionType } from 'typesafe-actions';

import type reducer from '@/store/reducer';

export type StoreState = Readonly<ReturnType<typeof reducer>>;

export type RootActions = ActionType<typeof import('@/store/actions').default>;
