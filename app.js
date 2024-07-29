import header from "./src/common/header.js";
import { router } from "./router/router.js";

const app = () => {
    return `
    <link rel="stylesheet" href="app.css">
        ${header()}
        <div id="app"></div>
    `;
}

export default app;
