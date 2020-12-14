// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFolderMonitor extends NSObject {
    /* typeEncoding=@?, ivar=_contentsChangedBlock, attributes=(copy,nonatomic) */
    	contentsChangedBlock(): any;
    /* typeEncoding=@"NSURL", ivar=_folderURL, attributes=(copy,nonatomic) */
    	folderURL(): cocoascript.NSURL;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@?16@0:8 */
    	contentsChangedBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=I16@0:8 */
    	flags(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	flush(): void;
    /* typeEncoding=@16@0:8 */
    	folderURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@?24 */
    	initWithURL_contentsChangedBlock(...args: any[]): any;
    /* typeEncoding=@40@0:8@16d24@?32 */
    	initWithURL_latency_contentsChangedBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	restart(): void;
    /* typeEncoding=v24@0:8@?16 */
    	setContentsChangedBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFolderURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	stop(): void;
  }
}

declare const MSFolderMonitor: sketchInternal.MSFolderMonitor;

