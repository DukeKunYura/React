/**
 * Отправка CRUD fetch запросов
 */
export default async function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    if (method === 'POST') { body = JSON.stringify(body) };
    const response = await fetch(url, {
        method: method,
        body: body,
        headers: headers
    });
    return await response.json();
}