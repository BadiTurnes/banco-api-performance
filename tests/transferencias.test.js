import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';
const postTransferencias = JSON.parse(open('../fixtures/postTransferencias.json'));

export const options = {
  iterations: 1
};

export default function() {
  const token = obterToken();

  const url = 'http://localhost:3000/transferencias';

  const payload = JSON.stringify(postTransferencias);

  const params = {
      headers: {
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${token}`,
      },
  };

  let res = http.post(url, payload, params);
  
  check(res, { "status is 201": (res) => res.status === 201 });
  sleep(1);
}
