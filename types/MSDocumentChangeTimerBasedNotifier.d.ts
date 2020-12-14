// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentChangeTimerBasedNotifier extends MSDocumentChangeIntervalNotifier {
    /* typeEncoding=@"NSTimer", ivar=_timer, attributes=(retain,nonatomic) */
    	timer(): cocoascript.NSTimer;
    /* typeEncoding=d, ivar=_updateInterval, attributes=(assign,nonatomic) */
    	updateInterval(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	coalesceDocumentUpdate(): void;
    /* typeEncoding=@24@0:8Q16 */
    	initWithUpdateFrequency(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setUpdateInterval(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timer(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	updateInterval(...args: any[]): any;
  }
}

declare const MSDocumentChangeTimerBasedNotifier: sketchInternal.MSDocumentChangeTimerBasedNotifier;

