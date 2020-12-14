// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentChangeIntervalNotifier extends NSObject {
    /* typeEncoding=Q, ivar=_frequency, attributes=(assign,nonatomic) */
    	frequency(): number;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_mostRecentDocument, attributes=(retain,nonatomic) */
    	mostRecentDocument(): MSImmutableDocumentData;
    /* typeEncoding=@"NSMapTable", ivar=_observerToBlock, attributes=(retain,nonatomic) */
    	observerToBlock(): cocoascript.NSMapTable;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_previousDocument, attributes=(retain,nonatomic) */
    	previousDocument(): MSImmutableDocumentData;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	coalesceDocumentUpdate(): void;
    /* typeEncoding=Q16@0:8 */
    	frequency(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	initWithUpdateFrequency(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mostRecentDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	observerToBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previousDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	processDocumentUpdate(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	registerObserver_usingBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sendUpdateToObservers(): void;
    /* typeEncoding=v24@0:8Q16 */
    	setFrequency(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMostRecentDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObserverToBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviousDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	unregisterAllObservers(): void;
    /* typeEncoding=v24@0:8@16 */
    	unregisterObserver(...args: any[]): any;
  }
}

declare const MSDocumentChangeIntervalNotifier: sketchInternal.MSDocumentChangeIntervalNotifier;

