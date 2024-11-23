import sha256 from 'crypto-js/sha256';
export const Encryption = {
    create: (pass: string) => {
        return sha256(pass).toString();
    }
}