// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRect extends _MSRect {
    /* typeEncoding=d, ivar=_bottom, attributes=(assign,nonatomic) */
    	bottom(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	height(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	left(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	maxX(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	maxY(): number;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	mid(): CGPoint;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	midX(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	midY(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	minX(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	minY(): number;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	origin(): CGPoint;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	primitiveConstrainProportions(): boolean;
    /* typeEncoding=d, ivar=_proportions, attributes=(assign,nonatomic) */
    	proportions(): number;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic) */
    	rect(): CGRect;
    /* typeEncoding=d, ivar=_right, attributes=(assign,nonatomic) */
    	right(): number;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	size(): CGSize;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	top(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	width(): number;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	static rectWithRect(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static rectWithUnionOfRects(...args: any[]): any;
    /* typeEncoding=@48@0:8d16d24d32d40 */
    	static rectWithX_y_width_height(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	beginEditing(): void;
    /* typeEncoding=d16@0:8 */
    	bottom(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	calculateProportions(): void;
    /* typeEncoding=c32@0:8{CGPoint=dd}16 */
    	containsPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	editedFromRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endEditing(): void;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithRect(...args: any[]): any;
    /* typeEncoding=@48@0:8d16d24d32d40 */
    	initWithX_y_width_height(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isIntegral(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	left(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	log(): void;
    /* typeEncoding=v16@0:8 */
    	makeOriginIntegral(): void;
    /* typeEncoding=v16@0:8 */
    	makeRectIntegral(): void;
    /* typeEncoding=d16@0:8 */
    	maxX(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	maxY(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mid(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	midX(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	midY(...args: any[]): any;
    /* typeEncoding=d24@0:8Q16 */
    	minForAxis(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	minX(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	minY(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16Q24d32 */
    	moveOriginOnAxis_toEdge_byAmount(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	origin(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	performUpdatesWithUnconstrainedProportions(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	primitiveConstrainProportions(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	processEditing(): void;
    /* typeEncoding=d16@0:8 */
    	proportions(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	right(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	scaleBy(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setBottom(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setConstrainProportions(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLeft(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMaxX(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMaxY(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMid(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMidX(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMidY(...args: any[]): any;
    /* typeEncoding=v32@0:8d16Q24 */
    	setMin_forAxis(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMinX(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMinY(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNilValueForKey(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setOrigin(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPrimitiveConstrainProportions(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setProportions(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setRight(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setSize(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTop(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setX(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setY(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldConstrainProportions(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	top(...args: any[]): any;
  }
}

declare const MSRect: sketchInternal.MSRect;

