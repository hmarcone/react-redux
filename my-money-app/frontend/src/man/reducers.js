import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({summary: {credit: 100, debt: 50}})
    // dashboard: DashboardReducer,
    // tab: TabReducer,
    // billingCycle: BillingCycleReducer,
    // form: formReducer,
    // toastr: toastrReducer
})

export default rootReducer