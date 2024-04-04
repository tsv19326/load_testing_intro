import http from 'k6/http';

export const options = {
    stages: [
        { duration: '10s', target: 50 },   // Стабилно натоварване
        { duration: '1m', target: 50 },    // Държим стабилно
        { duration: '10s', target: 250 },  // Резкият пик до 250 потребители
        { duration: '3m', target: 250 },   // Поддържаме пиковото натоварване
        { duration: '10s', target: 50 },   // Бързо намаляваме натоварването
        { duration: '1m', target: 50 },    // Връщаме към нормално натоварване
        { duration: '10s', target: 0 },    // Изчистваме натоварването
    ],
};


export default function () {
    const url = 'http://localhost:8080/login';
    const payload = JSON.stringify({
        email: 'aaa',
        password: 'bbb',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);

}
