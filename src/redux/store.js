import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsAPI';

// store - містить повний стан програми, методи доступу до стану та відправлення екшенів. У програмі може бути лише один стор. Для створення стора є функція createStore(), яка приймає кілька параметрів та повертає новий об'єкт стора.
// Redux Toolkit надає функцію configureStore(options), яка обертає оригінальний createStore(), єдиним аргументом очікує об'єкт параметрів та налаштовує деякі корисні інструменти розробки як частина процесу створення стора.

const productsReducer = combineReducers({
  // додаємо редюсер з RTKQuery
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: productsReducer,
  middleware: getDefaultMiddleware =>
    //обов'язково додаємо productsApi.middleware
    getDefaultMiddleware().concat(productsApi.middleware),
});

//При проектуванні структура стану Redux ділиться на слайси (slice, частина), за кожен із яких відповідає окремий редюсер.
// Для кожного слайсу створюється стандартний набір сутностей: типи екшенів, генератори екшенів та редюсер. Редюсери визначають початковий стан слайсу, список екшенів, що впливають на нього та операції оновлення стану.

// console.log('store', store);
