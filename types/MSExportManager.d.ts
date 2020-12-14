// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportManager extends NSObject {
    /* typeEncoding=@"NSColorSpace", ivar=_colorSpace, attributes=(assign,nonatomic,readonly) */
    	colorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(retain,nonatomic) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=@?, ivar=_sliceCompletionBlock, attributes=(copy,nonatomic) */
    	sliceCompletionBlock(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	destinationForRequest_inFolder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	exportFileForRequest_toFileURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	exportFilesForRequests(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	exportSlice(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	exportedDataForRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	openPanelForRequests(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	rendererForRequest(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	savePanelWithDefaultFilename(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	saveSlices_toFolder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDriver(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setSliceCompletionBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showSavePanelToExportIndividualSlice(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showSaveToFolderPanelToExportSlices(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	sliceCompletionBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	strippedSliceName(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	warnBeforeOverwritingAndSaveSlices_toFolder_completionBlock(...args: any[]): any;
  }
}

declare const MSExportManager: sketchInternal.MSExportManager;

