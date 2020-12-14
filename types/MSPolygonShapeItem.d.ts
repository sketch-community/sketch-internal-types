// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPolygonShapeItem extends MSCustomShapeItem {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_sidesAdaptor, attributes=(retain,nonatomic) */
    	sidesAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSUpDownTextField", ivar=_sidesField, attributes=(retain,nonatomic) */
    	sidesField(): MSUpDownTextField;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c24@0:8@16 */
    	static canHandleLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	inspectorValueAdaptorDidChangeValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSidesAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSidesField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sidesAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sidesField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSPolygonShapeItem: sketchInternal.MSPolygonShapeItem;

