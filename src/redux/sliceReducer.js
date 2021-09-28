import {createSlice} from "@reduxjs/toolkit";
import user from './../images/user.svg'
import companyImg from './../images/5.svg'

const slice = createSlice({
    name: 'slice',
    initialState: {
        active: true,
        items: {
            reviews: [
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Front-End developer',
                    company: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Front-End developer',
                    company: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Front-End developer',
                    company: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Front-End developer',
                    company: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Front-End developer',
                    company: companyImg
                },
            ]
        }
    },
    reducers: {
        openHandle(state) {
            if (state.active) {
                state.active = state.active = false
            } else {
                state.active = state.active = true
            }
        },
        clickedItem(state, action) {
            state.clicked = action.payload
        },
    }
});
export default slice.reducer;
export const {openHandle, clickedItem} = slice.actions;