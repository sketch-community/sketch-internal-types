type SketchContext = any;
type MOClassDescription = any;
type MOPropertyDescription = any;
type MOMethodDescription = any;
declare const Mocha: any;

const propertyGetters = true;
const extraSymbols = [
  '_MSArtboardGroup',
  '_MSAssetCollection',
  '_MSBaseGrid',
  '_MSBitmapLayer',
  '_MSColor',
  '_MSCurvePoint',
  '_MSDocumentData',
  '_MSExportFormat',
  '_MSExportOptions',
  '_MSExportPreset',
  '_MSForeignSymbol',
  '_MSGradient',
  '_MSGradientStop',
  '_MSGraphicsContextSettings',
  '_MSImageCollection',
  '_MSImmutableArtboardGroup',
  '_MSImmutableAssetCollection',
  '_MSImmutableBaseGrid',
  '_MSImmutableBitmapLayer',
  '_MSImmutableColor',
  '_MSImmutableCurvePoint',
  '_MSImmutableDocumentData',
  '_MSImmutableExportFormat',
  '_MSImmutableExportOptions',
  '_MSImmutableExportPreset',
  '_MSImmutableForeignSymbol',
  '_MSImmutableGradient',
  '_MSImmutableGradientStop',
  '_MSImmutableGraphicsContextSettings',
  '_MSImmutableImageCollection',
  '_MSImmutableLayer',
  '_MSImmutableLayerGroup',
  '_MSImmutableLayoutGrid',
  '_MSImmutableOvalShape',
  '_MSImmutablePage',
  '_MSImmutablePolygonShape',
  '_MSImmutableRect',
  '_MSImmutableRectangleShape',
  '_MSImmutableRulerData',
  '_MSImmutableShapeGroup',
  '_MSImmutableShapePath',
  '_MSImmutableShapePathLayer',
  '_MSImmutableSharedObject',
  '_MSImmutableSharedObjectContainer',
  '_MSImmutableSharedStyle',
  '_MSImmutableSharedStyleContainer',
  '_MSImmutableSharedTextStyleContainer',
  '_MSImmutableSimpleGrid',
  '_MSImmutableSliceLayer',
  '_MSImmutableStarShape',
  '_MSImmutableStyle',
  '_MSImmutableStyleBasicFill',
  '_MSImmutableStyleBlur',
  '_MSImmutableStyleBorder',
  '_MSImmutableStyleBorderOptions',
  '_MSImmutableStyleColorControls',
  '_MSImmutableStyledLayer',
  '_MSImmutableStyleFill',
  '_MSImmutableStyleInnerShadow',
  '_MSImmutableStylePart',
  '_MSImmutableStyleReflection',
  '_MSImmutableStyleShadow',
  '_MSImmutableSymbol',
  '_MSImmutableSymbolContainer',
  '_MSImmutableSymbolInstance',
  '_MSImmutableSymbolMaster',
  '_MSImmutableTextLayer',
  '_MSImmutableTextStyle',
  '_MSImmutableTriangleShape',
  '_MSLayer',
  '_MSLayerGroup',
  '_MSLayoutGrid',
  '_MSOvalShape',
  '_MSPage',
  '_MSPolygonShape',
  '_MSRect',
  '_MSRectangleShape',
  '_MSRulerData',
  '_MSShapeGroup',
  '_MSShapePath',
  '_MSShapePathLayer',
  '_MSSharedObject',
  '_MSSharedObjectContainer',
  '_MSSharedStyle',
  '_MSSharedStyleContainer',
  '_MSSharedTextStyleContainer',
  '_MSSimpleGrid',
  '_MSSliceLayer',
  '_MSStarShape',
  '_MSStyle',
  '_MSStyleBasicFill',
  '_MSStyleBlur',
  '_MSStyleBorder',
  '_MSStyleBorderOptions',
  '_MSStyleColorControls',
  '_MSStyledLayer',
  '_MSStyleFill',
  '_MSStyleInnerShadow',
  '_MSStylePart',
  '_MSStyleReflection',
  '_MSStyleShadow',
  '_MSSymbol',
  '_MSSymbolContainer',
  '_MSSymbolInstance',
  '_MSSymbolMaster',
  '_MSTextLayer',
  '_MSTextStyle',
  '_MSTriangleShape',
];

const NAMESPACE = 'sketchInternal';

class CodeGenerator {
  trunks: string[] = [];
  indentCount = 0;

  appendLine(str: string = '') {
    const indent = str ? ' '.repeat(this.indentCount * 2) : '';
    this.trunks.push(
      str
        .split('\n')
        .map(line => indent + line)
        .join('\n')
        .trimRight()
    );
    return this;
  }

  append(str: string) {
    const lines = this.trunks.length;
    if (lines === 0) {
      this.trunks.push(str);
    } else {
      this.trunks[lines - 1] = this.trunks[lines - 1] + str;
    }
    return this;
  }

  namespace(body: () => void) {
    this.appendLine(`declare namespace ${NAMESPACE} {`).indent();
    body();
    this.endIndent().appendLine('}');
    return this;
  }

  interface(name: string, inheritsFrom?: string, body?: () => void) {
    this.appendLine(`interface ${name}${inheritsFrom ? ` extends ${inheritsFrom} ` : ' '}{`).indent();
    if (body) {
      body();
    }
    this.endIndent().appendLine('}');
    return this;
  }

  indent() {
    this.indentCount += 1;
    return this;
  }

  endIndent() {
    if (this.indentCount === 0) {
      throw new Error('indent no match');
    }
    this.indentCount -= 1;
    return this;
  }

  toString() {
    return this.trunks.join('\n');
  }
}

function generate(context: SketchContext) {
  if (!context) {
    throw new Error('Document is not open');
  }
  const output = (symbolName: string) => {
    return String(context.scriptPath).replace(/\/[^\/]*\/[^\/]*\/[^\/]*\/[^\/]*\/[^\/]*$/, `/types/${symbolName}.d.ts`);
  };

  try {
    generateDo(context, /^MS/, output);
  } catch (e) {
    context.document.showMessage(e.message || String(e));
    throw e;
  }
}

function generateDo(context: SketchContext, symbolMatch: RegExp, outputFile: (name: string) => string) {
  const info = context.document.showMessage;
  let mutableNotFoundSymbolsCount = 0;
  const header = '// Generated with Sketch ' + MSApplicationMetadata.metadata().appVersion + '\n\n';

  const symbolNames = uniqueArray(
    array(Mocha.sharedRuntime().globalSymbolNames())
      .map(s => String(s))
      .filter(s => s.match(symbolMatch))
      .concat(extraSymbols)
      .sort()
  );

  for (const symbolName of symbolNames) {
    if (symbolName === 'JSExport') {
      // Sketch crashes
      mutableNotFoundSymbolsCount++;
      continue;
    }

    const symbol = check(symbolName);
    if (symbol === false) {
      mutableNotFoundSymbolsCount++;
      continue;
    }

    const output = symbol.class ? genClass(symbol, symbolName) : genFunction(symbol, symbolName);

    if (!output) {
      mutableNotFoundSymbolsCount++;
      continue;
    }

    writeFile(outputFile(symbolName), header + output);
  }

  writeFile(outputFile('index'), symbolNames.map(n => `/// <reference path="./${n}.d.ts" />`).join('\n'));

  info('Generation successful, ' + mutableNotFoundSymbolsCount + ' symbols skipped.');
}

// noinspection JSUnusedLocalSymbols
function genFunction(symbol: any, symbolName: string) {
  return 'declare function ' + symbolName + '(...args: any[]): any\n\n';
}

function genClass(symbol: any, symbolName: string) {
  const classObject = symbol.class();
  if (!classObject.mocha) {
    return;
  }

  const desc: MOClassDescription = classObject.mocha();

  const code = new CodeGenerator();
  const ancestors = desc.ancestors();

  code
    .namespace(() => {
      code.interface(symbolName, ancestors[0]?.name(), () => {
        array(desc.properties())
          .sort(sortProperty)
          .forEach(p => {
            code.appendLine(genProperty(p));
          });

        array(desc.classMethods())
          .sort(sortMethod)
          .forEach(m => {
            code.appendLine(genMethod(m));
          });

        array(desc.instanceMethods())
          .sort(sortMethod)
          .forEach(m => {
            code.appendLine(genMethod(m));
          });
      });
    })
    .appendLine();

  code.appendLine(`declare const ${symbolName}: ${NAMESPACE}.${symbolName};`).appendLine().appendLine();

  return code.toString();
}

function genProperty(prop: MOPropertyDescription) {
  const p = String(prop).replace(/^.*(typeEncoding=.*)>$/, '$1');
  const name = conformName(String(prop.name()));
  const getter = propertyGetters ? '()' : '';
  const type = genType(String(prop.typeEncoding()));

  return '/* ' + p + ' */\n\t' + name + getter + ': ' + type + ';';
}

function sortProperty(a: MOPropertyDescription, b: MOPropertyDescription) {
  const aName = String(a.name());
  const bName = String(b.name());
  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  }
  return 0;
}

function genMethod(method: MOMethodDescription) {
  const p = String(method).replace(/^.*(typeEncoding=.*)>$/, '$1');
  const name = conformName(String(method.selector()));
  const staticName = '';
  const type = String(method.typeEncoding()) === 'v16@0:8' ? '(): void' : '(...args: any[]): any';

  return '/* ' + p + ' */\n\t' + staticName + name + type + ';';
}

function sortMethod(a: MOMethodDescription, b: MOMethodDescription) {
  const aName = String(a.selector());
  const bName = String(b.selector());
  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  }
  return 0;
}

function genType(type: string) {
  switch (type[0]) {
    case 'B':
    case 'c':
      return 'boolean';

    case 'i':
    case 's':
    case 'l':
    case 'q':
    case 'C':
    case 'I':
    case 'S':
    case 'L':
    case 'Q':
    case 'f':
    case 'd':
    case 'D':
      return 'number';

    case 'v':
    case '?':
      return 'void';

    case ':':
    case '#':
    case '^':
    case 'r':
      return 'any';

    case '{':
      if (type[1] === '?') {
        return 'any';
      }
      return type.substr(1).replace(/=.*$/, '');

    case '@':
      let t = type.substr(1).replace(/[\42?]/g, '');
      if (t.includes('<')) {
        return 'any';
      }
      if (t) {
        if (t.startsWith('NS')) {
          return `cocoascript.${t}`;
        }
        return t;
      }
      return 'any';
  }

  return type;
}

function conformName(name: string) {
  return name.replace(/[:.]/g, '_').replace(/_$/, '');
}

function check(symbolName: string) {
  try {
    return eval(symbolName);
  } catch (e) {}
  return false;
}

function array(objects: any) {
  const length = objects.count();
  const mutableResult = new Array(length);
  for (let mutableI = 0; mutableI < length; mutableI++) {
    mutableResult[mutableI] = objects[mutableI];
  }
  return mutableResult;
}

function uniqueArray(arr: any[]) {
  return arr.filter((item, pos) => arr.indexOf(item) === pos);
}

function writeFile(path: string, content: string) {
  const string = NSString.stringWithFormat('%@', content);
  return string.writeToFile_atomically(path, true);
}
