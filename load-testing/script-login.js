import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5m', target: 50 },  // започваме малко
        { duration: '5m', target: 100 }, // след това удвояваме
        { duration: '5m', target: 200 }, // и удвояваме отново
        { duration: '5m', target: 0 },   // и накрая спираме
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
