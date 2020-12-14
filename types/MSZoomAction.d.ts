// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSZoomAction extends MSDocumentAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	zoomValueString(): cocoascript.NSString;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	findZoomPopupButton(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	handlesKeyEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasSubMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyUp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	makeToolbarItemForToolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuDidClose(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	zoomButtonWithAction_imageNamed_alternateImageName(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	zoomPopupButtonWithFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	zoomTo200Action(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	zoomTo25Action(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	zoomTo400Action(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	zoomTo50Action(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomValueDidChange(): void;
    /* typeEncoding=@16@0:8 */
    	zoomValueString(...args: any[]): any;
  }
}

declare const MSZoomAction: sketchInternal.MSZoomAction;

