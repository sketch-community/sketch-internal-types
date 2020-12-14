// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMirrorAction extends MSDocumentAction {
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	badgeTint(): cocoascript.NSColor;
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(assign,dynamic,nonatomic,readonly) */
    	badgeTitle(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"SMKMirrorController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mirrorController(): SMKMirrorController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	numberOfBadges(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@16@0:8 */
    	availableClients(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	badgeTint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mirrorClientsDidChangeNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mirrorController(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfBadges(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
  }
}

declare const MSMirrorAction: sketchInternal.MSMirrorAction;

