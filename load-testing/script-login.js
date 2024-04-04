import http from 'k6/http';

export const options = {
    stages: [
        { duration: '10s', target: 50 }, // Постепенно увеличаване на натоварването
        { duration: '10s', target: 50 }, // Стабилно натоварване
        { duration: '10s', target: 0 },  // Намаляване на натоварването
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
