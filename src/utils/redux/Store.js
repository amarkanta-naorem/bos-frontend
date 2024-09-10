import { configureStore } from '@reduxjs/toolkit';
import DashboardSlice from './Slicer/DashboardSlice';

const Store = configureStore({
    reducer: {
        dashboard: DashboardSlice
    }
})

export default Store;
