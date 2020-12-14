// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardImageWriter extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	bitmapRectForLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canWriteDataToPasteboard(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	containsSingleArtboard(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	exportRequestForPasteboardLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	includeArtboardBackgroundForLayers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	includedObjectIDsForLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supportedPasteboardTypes(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	writeData_toPasteboard(...args: any[]): any;
  }
}

declare const MSPasteboardImageWriter: sketchInternal.MSPasteboardImageWriter;

