// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMemoryBuffer extends NSObject {
    /* typeEncoding=^v, ivar=_bytes, attributes=(assign,nonatomic,readonly) */
    	bytes(): any;
    /* typeEncoding=Q, ivar=_size, attributes=(assign,nonatomic,readonly) */
    	size(): number;
    /* typeEncoding=^v16@0:8 */
    	bytes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@24@0:8Q16 */
    	initWithSize(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	zerofill(...args: any[]): any;
  }
}

declare const MSMemoryBuffer: sketchInternal.MSMemoryBuffer;

