import { HttpError } from "./HttpError";
export function status(response) {
    if (response.status >= 200 && response.status < 400) {
        if (response.headers.get('content-type').includes('text/html'))
            return response.text();
        if (response.headers.get('content-type').includes('application/json'))
            return response.json();
    }
    throw new HttpError(response);
}
export function parseError(error) {
    if (!(error instanceof Error))
        return new Promise(function (resolve, reject) { return reject(error.json()); });
}
//# sourceMappingURL=service-helper.js.map