/**
 * **The version of the punycode module bundled in Node.js is being deprecated. **In a future major version of Node.js this module will be removed. Users
 * currently depending on the `punycode` module should switch to using the
 * userland-provided [Punycode.js](https://github.com/bestiejs/punycode.js) module instead. For punycode-based URL
 * encoding, see `url.domainToASCII` or, more generally, the `WHATWG URL API`.
 *
 * The `punycode` module is a bundled version of the [Punycode.js](https://github.com/bestiejs/punycode.js) module. It
 * can be accessed using:
 *
 * ```js
 * import punycode from 'node:punycode';
 * ```
 *
 * [Punycode](https://tools.ietf.org/html/rfc3492) is a character encoding scheme defined by RFC 3492 that is
 * primarily intended for use in Internationalized Domain Names. Because host
 * names in URLs are limited to ASCII characters only, Domain Names that contain
 * non-ASCII characters must be converted into ASCII using the Punycode scheme.
 * For instance, the Japanese character that translates into the English word, `'example'` is `'ä¾‹'`. The Internationalized Domain Name, `'ä¾‹.com'` (equivalent
 * to `'example.com'`) is represented by Punycode as the ASCII string `'xn--fsq.com'`.
 *
 * The `punycode` module provides a simple implementation of the Punycode standard.
 *
 * The `punycode` module is a third-party dependency used by Node.js and
 * made available to developers as a convenience. Fixes or other modifications to
 * the module must be directed to the [Punycode.js](https://github.com/bestiejs/punycode.js) project.
 * @deprecated Since v7.0.0 - Deprecated
 * @see [source](https://github.com/nodejs/node/blob/v22.x/lib/punycode.js)
 */
declare module "punycode" {
    /**
     * The `punycode.decode()` method converts a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only
     * characters to the equivalent string of Unicode codepoints.
     *
     * ```js
     * punycode.decode('maana-pta'); // 'maÃ±ana'
     * punycode.decode('--dqo34k'); // 'â˜ƒ-âŒ˜'
     * ```
     * @since v0.5.1
     */
    function decode(string: string): string;
    /**
     * The `punycode.encode()` method converts a string of Unicode codepoints to a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only characters.
     *
     * ```js
     * punycode.encode('maÃ±ana'); // 'maana-pta'
     * punycode.encode('â˜ƒ-âŒ˜'); // '--dqo34k'
     * ```
     * @since v0.5.1
     */
    function encode(string: string): string;
    /**
     * The `punycode.toUnicode()` method converts a string representing a domain name
     * containing [Punycode](https://tools.ietf.org/html/rfc3492) encoded characters into Unicode. Only the [Punycode](https://tools.ietf.org/html/rfc3492) encoded parts of the domain name are be
     * converted.
     *
     * ```js
     * // decode domain names
     * punycode.toUnicode('xn--maana-pta.com'); // 'maÃ±ana.com'
     * punycode.toUnicode('xn----dqo34k.com');  // 'â˜ƒ-âŒ˜.com'
     * punycode.toUnicode('example.com');       // 'example.com'
     * ```
     * @since v0.6.1
     */
    function toUnicode(domain: string): string;
    /**
     * The `punycode.toASCII()` method converts a Unicode string representing an
     * Internationalized Domain Name to [Punycode](https://tools.ietf.org/html/rfc3492). Only the non-ASCII parts of the
     * domain name will be converted. Calling `punycode.toASCII()` on a string that
     * already only contains ASCII characters will have no effect.
     *
     * ```js
     * // encode domain names
     * punycode.toASCII('maÃ±ana.com');  // 'xn--maana-pta.com'
     * punycode.toASCII('â˜ƒ-âŒ˜.com');   // 'xn----dqo34k.com'
     * punycode.toASCII('example.com'); // 'example.com'
     * ```
     * @since v0.6.1
     */
    function toASCII(domain: string): string;
    /**
     * @deprecated since v7.0.0
     * The version of the punycode module bundled in Node.js is being deprecated.
     * In a future major version of Node.js this module will be removed.
     * Users currently depending on the punycode module should switch to using
     * the userland-provided Punycode.js module instead.
     */
    const ucs2: ucs2;
    interface ucs2 {
        /**
         * @deprecated since v7.0.0
         * The version of the punycode module bundled in Node.js is being deprecated.
         * In a future major version of Node.js this module will be removed.
         * Users currently depending on the punycode module should switch to using
         * the userland-provided Punycode.js module instead.
         */
        decode(string: string): number[];
        /**
         * @deprecated since v7.0.0
         * The version of the punycode module bundled in Node.js is being deprecated.
         * In a future major version of Node.js this module will be removed.
         * Users currently depending on the punycode module should switch to using
         * the userland-provided Punycode.js module instead.
         */
        encode(codePoints: readonly number[]): string;
    }
    /**
     * @deprecated since v7.0.0
     * The version of the punycode module bundled in Node.js is being deprecated.
     * In a future major version of Node.js this module will be removed.
     * Users currently depending on the punycode module should switch to using
     * the userland-provided Punycode.js module instead.
     */
    const version: string;
}
declare module "node:punycode" {
    export * from "punycode";
}
