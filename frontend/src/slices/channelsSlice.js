/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["state"] }] */

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({ currentChannelId: null });

const slice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
    addChannels: channelsAdapter.addMany,
  },
});

export const { setCurrentChannelId, addChannels } = slice.actions;
export const selectors = channelsAdapter.getSelectors((state) => state.channels);

export default slice.reducer;
