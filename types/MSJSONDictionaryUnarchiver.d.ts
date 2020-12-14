// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONDictionaryUnarchiver extends MSJSONUnarchiver {
    /* typeEncoding=@"BCJSONDecoder", ivar=_dataDecoder, attributes=(retain,nonatomic) */
    	dataDecoder(): BCJSONDecoder;
    /* typeEncoding=@"NSDictionary", ivar=_dictionary, attributes=(retain,nonatomic) */
    	dictionary(): cocoascript.NSDictionary;
    /* typeEncoding=@48@0:8@16q24^c32^@40 */
    	static unarchivedObjectFromDictionary_asVersion_corruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	dataDecoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	decodeReferenceObjectOfClass_withIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decodeRoot(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dictionary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initForReadingFromDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataDecoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDictionary(...args: any[]): any;
  }
}

declare const MSJSONDictionaryUnarchiver: sketchInternal.MSJSONDictionaryUnarchiver;

