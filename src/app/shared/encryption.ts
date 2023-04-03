export class Encryption {
  // mySecretSalt
  private static CIPHER_KEY = "aqarzelo";

  private static cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
  }

  private static decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
  }

  /**
   * encrypt the text
   * @param text
   */
  public static encrypt(text) {
    return Encryption.cipher(Encryption.CIPHER_KEY)(text);
  }

  /**
   * decrypt the text
   * @param text
   */
  public static decrypt(text) {
    return Encryption.decipher(Encryption.CIPHER_KEY)(text);
  }

}
