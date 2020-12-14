// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardManager extends NSObject {
    /* typeEncoding=@"NSMutableArray", ivar=_readers, attributes=(retain,nonatomic) */
    	readers(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableArray", ivar=_writers, attributes=(retain,nonatomic) */
    	writers(): cocoascript.NSMutableArray;
    /* typeEncoding=@16@0:8 */
    	static applicationPasteboardManager(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	static readPasteboardLayersFromDrag_colorSpace_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24Q32c40 */
    	static readPasteboardLayersFromPasteboard_colorSpace_options_convertColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static registerReader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static registerViewForSupportedDraggedTypes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static registerWriter(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	static writePasteboardLayers_toPasteboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	readPasteboardLayersFromDrag_colorSpace_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24Q32c40 */
    	readPasteboardLayersFromPasteboard_colorSpace_options_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@52@0:8@16@24Q32@40c48 */
    	readPasteboardLayersFromPasteboard_colorSpace_options_sender_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	readers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	registerDefaultReadersAndWriters(): void;
    /* typeEncoding=v24@0:8@16 */
    	registerReader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerViewForSupportedDraggedTypes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerWriter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReaders(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWriters(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	writePasteboardLayers_toPasteboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	writers(...args: any[]): any;
  }
}

declare const MSPasteboardManager: sketchInternal.MSPasteboardManager;

