import moment from "moment";

const initialState = {
    events:
        [
            {
                title: 'Cumplea;os del jefe',
                start: moment().toDate(),
                end: moment().add(2, 'hours').toDate(),
                bgcolor: '#fafafa',
                notes: 'Comprar el pastel',
                user: {
                    _id: '123',
                    name: 'Ignacio',
                }
            }
        ],
    activeEvent: null,
}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        


        default:
            return state;
    }
}
