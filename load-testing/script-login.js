import http from 'k6/http';

export const options = {
    stages: [
        { duration: '1m', target: 100 }, // Нормално натоварване
        { duration: '1m', target: 200 }, // Увеличаване на натоварването
        { duration: '3m', target: 300 }, // Пиково натоварване
        { duration: '1m', target: 0 },   // Отпускане на натоварването
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
