const jose = require('node-jose');
const fs = require('fs');


(async () => {
    const keystore = jose.JWK.createKeyStore();

    // enc key
    await keystore.generate('RSA', 2048, {use: 'enc'});
    fs.writeFileSync(
        'secret.json', 
        JSON.stringify(keystore.toJSON(true), null, '  ')
    );


})();