import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 10 },  // Ramp-up to 10 virtual users
        { duration: '1m', target: 10 },   // Stay at 10 virtual users for 1 minute
        { duration: '10s', target: 0 },   // Ramp-down to 0 users
    ],
};

export default function () {
    const res = http.get('http://localhost:8080/');
    check(res, { 'status was 200': (r) => r.status === 200 });
//    sleep(1); // Simulate a 1-second user "think time"
}
