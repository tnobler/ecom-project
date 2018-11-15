import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All',
                active: true
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            },
        ]
    });
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. ... Dude i just had to do the The Fitness Gram™ Pacer Test and i am sooooo tired. Get a The Fitness Gram™ Pacer Test mug for your sister-in-law Helena.',
                price: 1.99,
                belongsTo: [0, 6]
            },
        ]
    });
}