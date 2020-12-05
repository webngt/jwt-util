const jose = require('node-jose');
const fs = require('fs');


(async () => {
    const keystore = jose.JWK.createKeyStore();
    await keystore.generate('RSA', 2048, {alg: 'RS256', use: 'sig' });
    fs.writeFileSync(
        'secret.json', 
        JSON.stringify(keystore.toJSON(true), null, '  ')
    );
    fs.writeFileSync(
        'public.json', 
        JSON.stringify(keystore.toJSON(false), null, '  ')
    );
})();