// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCSEpochAndSeq extends NSObject {
    /* typeEncoding=@"NSString", ivar=_epoch, attributes=(retain,nonatomic) */
    	epoch(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_seq, attributes=(assign,nonatomic) */
    	seq(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	epoch(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithEpoch(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	seq(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEpoch(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSeq(...args: any[]): any;
  }
}

declare const MSCSEpochAndSeq: sketchInternal.MSCSEpochAndSeq;

