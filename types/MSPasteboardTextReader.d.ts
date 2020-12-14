// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardTextReader extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	attributedStringFromPasteboard_options(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isSVGString(...args: any[]): any;
    /* typeEncoding=@52@0:8@16@24Q32@40c48 */
    	pasteboardDataFromPasteboard_colorSpace_options_sender_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supportedPasteboardTypes(...args: any[]): any;
  }
}

declare const MSPasteboardTextReader: sketchInternal.MSPasteboardTextReader;

