import http from 'k6/http';

export const options = {
    stages: [
        { duration: '2m', target: 100 }, // Постепенно увеличаване на потребителите до 100
        { duration: '5m', target: 100 }, // Държим на 100 потребители за 5 минути
        { duration: '2m', target: 0 },   // Разтоварване
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
