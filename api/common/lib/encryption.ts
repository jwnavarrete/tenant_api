import CryptoJS from "crypto-js";

const secret = process.env.SECRET_KEY || "";

const encrypt = (data: object): string => {
  console.log("Encrypting secret:", secret);
  const json = JSON.stringify(data);
  return CryptoJS.AES.encrypt(json, secret).toString();
};

const decrypt = (ciphertext: string): any => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};

export { encrypt, decrypt };
