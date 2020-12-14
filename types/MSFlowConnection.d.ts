// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowConnection extends _MSFlowConnection {
    /* typeEncoding=@"MSArtboardGroup", ivar=(null), attributes=(assign,nonatomic,readonly,weak) */
    	destinationArtboard(): MSArtboardGroup;
    /* typeEncoding=c, ivar=_disableDestination, attributes=(assign,nonatomic) */
    	disableDestination(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	isBackAction(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isValidFlowConnection(): boolean;
    /* typeEncoding=@"MSLayer", ivar=(null), attributes=(assign,nonatomic,readonly,weak) */
    	sendingLayer(): MSLayer;
    /* typeEncoding=q16@0:8 */
    	defaultAnimationType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowConnectionBack(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	flowConnectionTo_ofType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	destinationArtboard(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	disableDestination(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isBackAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValidFlowConnection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sendingLayer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisableDestination(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsBackAction(...args: any[]): any;
  }
}

declare const MSFlowConnection: sketchInternal.MSFlowConnection;

