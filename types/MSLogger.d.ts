// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLogger extends NSObject {
    /* typeEncoding=Q16@0:8 */
    	static currentLogLevel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static initialize(): void;
    /* typeEncoding=c16@0:8 */
    	static isUserDefinedLogLevel(...args: any[]): any;
    /* typeEncoding=v60@0:8@?16Q24@32r*40r*48I56 */
    	static logMessage_level_tag_file_function_line(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	static setCurrentLogLevel(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	static setIsUserDefinedLogLevel(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	static setLogHandler(...args: any[]): any;
  }
}

declare const MSLogger: sketchInternal.MSLogger;

