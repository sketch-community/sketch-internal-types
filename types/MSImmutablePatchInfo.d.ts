// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutablePatchInfo extends _MSImmutablePatchInfo {
    /* typeEncoding=@"NSObject", ivar=__patchContainer, attributes=(retain,nonatomic) */
    	_patchContainer(): cocoascript.NSObject;
    /* typeEncoding=@"MSPatchContainer", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	patchContainer(): MSPatchContainer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	_patchContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodePropertiesWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultValues(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patchContainer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performInitEmptyObject(): void;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithMutableModelObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	set_patchContainer(...args: any[]): any;
  }
}

declare const MSImmutablePatchInfo: sketchInternal.MSImmutablePatchInfo;

