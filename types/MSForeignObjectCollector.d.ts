// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSForeignObjectCollector extends NSObject {
    /* typeEncoding=@?, ivar=_filter, attributes=(copy,nonatomic) */
    	filter(): any;
    /* typeEncoding=@"<MSForeignObjectProvider>", ivar=_provider, attributes=(assign,nonatomic,readonly) */
    	provider(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@?16 */
    	buildCollectionWithFilter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	buildLibraryToSharedObjectMap(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateForeignObjects(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	filter(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithProvider(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	provider(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setFilter(...args: any[]): any;
  }
}

declare const MSForeignObjectCollector: sketchInternal.MSForeignObjectCollector;

