// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardFileDataProvider extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_layers, attributes=(copy,nonatomic) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=v32@0:8@16@24 */
    	addLayers_toPasteboard(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	buildExportRequestsForLayers_inFolder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	exportLayers_toFolder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	extensionForExportingLayer(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	uniqueExportURLForLayer_inFolder_comparingTo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pasteboard_provideDataForType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
  }
}

declare const MSPasteboardFileDataProvider: sketchInternal.MSPasteboardFileDataProvider;

