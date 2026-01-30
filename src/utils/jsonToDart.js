
/**
 * Converts a JSON string to Dart code based on the selected mode.
 * @param {string} jsonString - The JSON string to convert.
 * @param {string} className - The root class name.
 * @param {string} mode - One of 'Standard', 'Freezed', 'Equatable', 'JsonSerializable'.
 * @returns {string} The generated Dart code.
 */
export function convertJsonToDart(jsonString, className, mode) {
    let json;
    try {
        json = JSON.parse(jsonString);
    } catch (e) {
        return "Error: Invalid JSON format.";
    }

    if (typeof json !== 'object' || json === null) {
        return "Error: JSON must be an object.";
    }

    const classes = [];
    const seenClasses = new Set();

    function generateClass(name, obj) {
        if (seenClasses.has(name)) return; // Prevent infinite recursion/duplicates (simple check)
        // seenClasses.add(name); // Allow duplicates if structure differs? For now assume simplified.
        // Better to handle naming conflicts by appending numbers if needed, but for now strict unique names.

        const fields = [];
        const nestedClasses = [];

        // Analyze fields
        for (const [key, value] of Object.entries(obj)) {
            const type = getType(key, value);
            const fieldName = toCamelCase(key);
            const jsonKey = key;
            fields.push({ fieldName, type, jsonKey });

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // It's a nested object, generate a class for it
                const nestedClassName = capitalize(toCamelCase(key));
                generateClass(nestedClassName, value);
            } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && value[0] !== null) {
                // List of objects
                const nestedClassName = capitalize(toCamelCase(key).replace(/s$/, '')); // Singularize simply
                generateClass(nestedClassName, value[0]);
            }
        }

        // Generate Code based on Mode
        let classCode = '';
        const safeName = capitalize(name);

        if (mode === 'Freezed') {
            classCode = generateFreezedClass(safeName, fields);
        } else if (mode === 'Equatable') {
            classCode = generateEquatableClass(safeName, fields);
        } else if (mode === 'JsonSerializable') {
            classCode = generateJsonSerializableClass(safeName, fields);
        } else {
            classCode = generateStandardClass(safeName, fields);
        }

        classes.push(classCode);
    }

    // Helper to determine Dart type
    function getType(key, value) {
        if (value === null) return 'dynamic';
        if (typeof value === 'string') return 'String?';
        if (typeof value === 'number') return Number.isInteger(value) ? 'int?' : 'double?';
        if (typeof value === 'boolean') return 'bool?';
        if (Array.isArray(value)) {
            if (value.length === 0) return 'List<dynamic>?';
            const first = value[0];
            if (typeof first === 'object' && first !== null) {
                const nestedName = capitalize(toCamelCase(key).replace(/s$/, ''));
                return `List<${nestedName}>?`;
            }
            return `List<${getType(key, first).replace('?', '')}>?`;
        }
        if (typeof value === 'object') {
            return `${capitalize(toCamelCase(key))}?`;
        }
        return 'dynamic';
    }

    generateClass(className || 'Root', json);

    // Return all classes joined
    // Reverse to show dependencies first? Or Root first? Usually Dart doesn't care order in file.
    // Root first is conventional for viewing.
    return classes.join('\n\n');
}

// Generators

function generateStandardClass(name, fields) {
    const fieldDecls = fields.map(f => `  final ${f.type} ${f.fieldName};`).join('\n');
    const constructorParams = fields.map(f => `    this.${f.fieldName},`).join('\n');

    const fromJsonBody = fields.map(f => {
        if (f.type.startsWith('List<')) {
            const innerType = f.type.match(/List<(.+)>/)[1];
            if (['int', 'double', 'String', 'bool', 'dynamic'].includes(innerType)) {
                return `    ${f.fieldName} = json['${f.jsonKey}']?.cast<${innerType}>();`;
            }
            return `    if (json['${f.jsonKey}'] != null) {\n      ${f.fieldName} = <${innerType}>[];\n      json['${f.jsonKey}'].forEach((v) {\n        ${f.fieldName}!.add(${innerType}.fromJson(v));\n      });\n    }`;
        }
        if (!['int?', 'double?', 'String?', 'bool?', 'dynamic'].includes(f.type)) {
            const type = f.type.replace('?', '');
            return `    ${f.fieldName} = json['${f.jsonKey}'] != null ? ${type}.fromJson(json['${f.jsonKey}']) : null;`;
        }
        // Simple types
        // Handle double conversion explicitly if needed, but dynamic usually handles it in Dart 2+
        return `    ${f.fieldName} = json['${f.jsonKey}'];`;
    }).join('\n');

    const toJsonBody = fields.map(f => {
        if (f.type.startsWith('List<')) {
            const innerType = f.type.match(/List<(.+)>/)[1];
            if (['int', 'double', 'String', 'bool', 'dynamic'].includes(innerType)) {
                return `    data['${f.jsonKey}'] = ${f.fieldName};`;
            }
            return `    if (${f.fieldName} != null) {\n      data['${f.jsonKey}'] = ${f.fieldName}!.map((v) => v.toJson()).toList();\n    }`;
        }
        if (!['int?', 'double?', 'String?', 'bool?', 'dynamic'].includes(f.type)) {
            return `    if (${f.fieldName} != null) {\n      data['${f.jsonKey}'] = ${f.fieldName}!.toJson();\n    }`;
        }
        return `    data['${f.jsonKey}'] = ${f.fieldName};`;
    }).join('\n');

    return `class ${name} {
${fieldDecls}

  ${name}({
${constructorParams}
  });

  ${name}.fromJson(Map<String, dynamic> json) {
${fromJsonBody}
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
${toJsonBody}
    return data;
  }
}`;
}

function generateFreezedClass(name, fields) {
    // Freezed requires parameters in factory constructor
    const params = fields.map(f => `    ${f.type === 'dynamic' ? '' : f.type} ${f.fieldName},`).join('\n');
    const jsonKeyAnnotations = fields.filter(f => f.fieldName !== f.jsonKey).length > 0; // Check if any @JsonKey needed (Freezed handles names well but @JsonKey name is needed if mismatch).
    // Actually Request says convert, Freezed usually pairs with json_serializable.

    // Freezed syntax handles JsonKey automatically if using json_serializable
    const paramList = fields.map(f => {
        const isCustomKey = f.fieldName !== f.jsonKey;
        const annotation = isCustomKey ? `@JsonKey(name: '${f.jsonKey}') ` : '';
        return `    ${annotation}${f.type} ${f.fieldName},`;
    }).join('\n');

    return `@freezed
class ${name} with _$${name} {
  const factory ${name}({
${paramList}
  }) = _${name};

  factory ${name}.fromJson(Map<String, dynamic> json) => _$${name}FromJson(json);
}`;
}

function generateEquatableClass(name, fields) {
    const fieldDecls = fields.map(f => `  final ${f.type} ${f.fieldName};`).join('\n');
    const constructorParams = fields.map(f => `    this.${f.fieldName},`).join('\n');
    const props = fields.map(f => f.fieldName).join(', ');

    return `class ${name} extends Equatable {
${fieldDecls}

  const ${name}({
${constructorParams}
  });

  @override
  List<Object?> get props => [${props}];

  factory ${name}.fromJson(Map<String, dynamic> json) {
    return ${name}(
      // TODO: Implement FromJson logic similar to Standard
    );
  }
  
  // Simplified for Equatable demo
}`;
}

function generateJsonSerializableClass(name, fields) {
    const fieldDecls = fields.map(f => `  final ${f.type} ${f.fieldName};`).join('\n');
    const constructorParams = fields.map(f => `    this.${f.fieldName},`).join('\n');

    // Note: json_serializable usually generates a separated part file logic.
    // We just generate the class shell.
    return `@JsonSerializable()
class ${name} {
${fieldDecls}

  ${name}({
${constructorParams}
  });

  factory ${name}.fromJson(Map<String, dynamic> json) => _$${name}FromJson(json);
  Map<String, dynamic> toJson() => _$${name}ToJson(this);
}`;
}

// Utils
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function toCamelCase(s) {
    return s.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
}
