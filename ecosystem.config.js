/**
 * Copyright (c) 2022 | LuciferMorningstarDev <contact@lucifer-morningstar.dev>
 * Copyright (C) 2022 | Pharaoh & Morningstar LLC team and contributors
 */

'use strict'; // https://www.w3schools.com/js/js_strict.asp

module.exports = {
    apps: [
        {
            name: 'Pharastar-Fronten',
            script: 'server.sh',
            instances: 1,
            exec_mode: 'fork',
            watch: true,
            autorestart: true,
            ignore_watch: ['./.git/*', './.ignore_watch/*', './node_modules/*', './cache.json']
        }
    ]
};
