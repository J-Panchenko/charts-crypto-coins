import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h';

export const fetchCrypto = createAsyncThunk(
  'cryptoService/fetchCrypto',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.mssage);
    }
  },

);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const cryptoServiceSlice = createSlice({
  name: 'cryptoService',
  initialState: {
    crypto: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchCrypto.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCrypto.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.crypto = action.payload;
    },
    [fetchCrypto.rejected]: setError,
  },
});

export default cryptoServiceSlice.reducer;
