// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSEncrypter extends NSObject {
    /* typeEncoding=@"NSData", ivar=_alternateKeyData, attributes=(retain) */
    	alternateKeyData(): cocoascript.NSData;
    /* typeEncoding=@"NSData", ivar=_originalKeyData, attributes=(retain) */
    	originalKeyData(): cocoascript.NSData;
    /* typeEncoding=@24@0:8@16 */
    	static generateAndSaveKeyWithTag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static generateInitializationVector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static getCurrentKeyTag(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static getMetadataStringWithKeyTag(...args: any[]): any;
    /* typeEncoding=@44@0:8I16@20@28@36 */
    	static performCryptoOperation_input_initializationVector_key(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static rotateToNewKeyTag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alternateKeyData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	decryptData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	decryptString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	encryptData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	encryptString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getKeyWithKeyTag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalKeyData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlternateKeyData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalKeyData(...args: any[]): any;
  }
}

declare const MSEncrypter: sketchInternal.MSEncrypter;

