// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSVectorOverlay extends MSHandleOverlay {
    /* typeEncoding=q, ivar=activeHandleBehavior, attributes=(assign,nonatomic) */
    	activeHandleBehavior(): number;
    /* typeEncoding=q, ivar=selectionComponentType, attributes=(assign,nonatomic) */
    	selectionComponentType(): number;
    /* typeEncoding=q16@0:8 */
    	activeHandleBehavior(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLayout(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16q32Q40 */
    	mouseDownAtPoint_clickCount_modifierFlags(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	selectionComponentType(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setActiveHandleBehavior(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setSelectionComponentType(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	specifierForComponentAtPoint(...args: any[]): any;
  }
}

declare const MSVectorOverlay: sketchInternal.MSVectorOverlay;

