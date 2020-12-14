// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardLayersReaderWriter extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c24@0:8@16 */
    	canWriteDataToPasteboard(...args: any[]): any;
    /* typeEncoding=@52@0:8@16@24Q32@40c48 */
    	pasteboardDataFromPasteboard_colorSpace_options_sender_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	readDataFromPasteboard(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	readDataFromPasteboard_withType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supportedPasteboardTypes(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	tempFileTypeForType(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	writeData_toPasteboard(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	writeData_toPasteboard_withType(...args: any[]): any;
  }
}

declare const MSPasteboardLayersReaderWriter: sketchInternal.MSPasteboardLayersReaderWriter;

