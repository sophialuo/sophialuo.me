export const SAMPLE_JSONS: { [jsonName: string]: string } = {
  Simple: `{"id":"abcdef","name":"Hello world","version":1.0,"public":true}`,
  Nested: `{"id":"abcdef","name":"Hello world","version":1.2,"public":true,"styles":{"font-weight":500,"width":"100%"}}`,
  "Deeply Nested": `{"id":"abcdef","name":"Hello world!","version":1.3,"change_log":{"defghijk":{"date":"3 Jul 2023","diff":{"name":"Hello world v2"}},"fghijklmn":{"date":"4 Jul 2023","diff":{"styles": {"width": "80%"} }}}}`,
  "Deeply Nested with Arrays": `{"id":"abcdef","name":"Hello world!","version":1.3,"change_log":{"defghijk":{"date":"3 Jul 2023","diff":{"name":"Hello world v2"}},"fghijklmn":{"date":"4 Jul 2023","diff":{"styles": {"width": "80%"} }}},"authors": [{"first": "Foo", "last": "Bar"},{"first": "Bar", "last": "Baz"}]}`,
};
