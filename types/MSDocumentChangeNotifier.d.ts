// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentChangeNotifier extends NSObject {
    /* typeEncoding=@"MSDocumentChangeIntervalNotifier", ivar=_fastNotifier, attributes=(retain,nonatomic) */
    	fastNotifier(): MSDocumentChangeIntervalNotifier;
    /* typeEncoding=@"MSDocumentChangeIntervalNotifier", ivar=_instantNotifier, attributes=(retain,nonatomic) */
    	instantNotifier(): MSDocumentChangeIntervalNotifier;
    /* typeEncoding=@"MSDocumentChangeIntervalNotifier", ivar=_mediumNotifier, attributes=(retain,nonatomic) */
    	mediumNotifier(): MSDocumentChangeIntervalNotifier;
    /* typeEncoding=@"MSDocumentChangeIntervalNotifier", ivar=_slowNotifier, attributes=(retain,nonatomic) */
    	slowNotifier(): MSDocumentChangeIntervalNotifier;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	fastNotifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	instantNotifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mediumNotifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	processDocumentUpdate(...args: any[]): any;
    /* typeEncoding=v40@0:8@16Q24@?32 */
    	registerObserver_withFrequency_usingBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFastNotifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInstantNotifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMediumNotifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSlowNotifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	slowNotifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	unregisterAllObservers(): void;
    /* typeEncoding=v24@0:8@16 */
    	unregisterObserver(...args: any[]): any;
  }
}

declare const MSDocumentChangeNotifier: sketchInternal.MSDocumentChangeNotifier;

