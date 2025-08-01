import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));
import { pegarBaseURL } from '../utils/variaveis.js';

export const options = {
  // iterations: 50,
  // vus: 10,
  // duration: '30s',
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 30 },
    { duration: '20s', target: 30 },
    { duration: '20s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(90)<100','max<100'], // 90% das requisições devem ser concluídas em menos de 500ms
    http_req_failed: ['rate<0.01'], // Taxa de falhas deve ser menor que 1%    
    }
};

export default function () {
    const url = pegarBaseURL() + '/login';

    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);
    //const resposta = http.post(url, payload, params);
    //console.log(resposta)

    check(res, {
        'Validar que o Status 200': (r) => r.status === 200,
        'Validar que o Token é string': (r) => typeof(r.json().token) == 'string'
    });

    sleep(1);

}