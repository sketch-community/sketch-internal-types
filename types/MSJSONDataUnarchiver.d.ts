// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONDataUnarchiver extends MSJSONUnarchiver {
    /* typeEncoding=@"NSData", ivar=_data, attributes=(retain,nonatomic) */
    	data(): cocoascript.NSData;
    /* typeEncoding=@"BCJSONDecoder", ivar=_dataDecoder, attributes=(retain,nonatomic) */
    	dataDecoder(): BCJSONDecoder;
    /* typeEncoding=@48@0:8@16q24^c32^@40 */
    	unarchivedObjectWithString_asVersion_corruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataDecoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	decodeReferenceObjectOfClass_withIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decodeRoot(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initForReadingFromData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataDecoder(...args: any[]): any;
  }
}

declare const MSJSONDataUnarchiver: sketchInternal.MSJSONDataUnarchiver;

