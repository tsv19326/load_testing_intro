import http from 'k6/http';

export const options = {
    duration: '2h', // Натоварване за 2 часа
    vus: 50,        // 50 потребители
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
