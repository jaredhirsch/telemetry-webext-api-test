browser.browserAction.onClicked.addListener(() => {
  // call all the API methods, in turn, and log their output:
  console.log('here we go');
  console.log(`return value of browser.telemetry.canUpload(): ${browser.telemetry.canUpload()}`);

  console.log('----- now testing scalarAdd using the telemetry.test scalars -----');
  console.log(`correctly calling browser.telemetry.scalarAdd('telemetry.test.unsigned_int_kind', 1):`); 
  try { browser.telemetry.scalarAdd('telemetry.test.unsigned_int_kind', 1) } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with unknown key - browser.telemetry.scalarAdd('telemetry.test.does_not_exist', 1):`);
  try { browser.telemetry.scalarAdd('telemetry.test.does_not_exist', 1) } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with string value - browser.telemetry.scalarAdd('telemetry.test.unsigned_int_kind', 'foo'):`);
  try { browser.telemetry.scalarAdd('telemetry.test.unsigned_int_kind', 'foo') } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling scalarAdd on a keyed scalar, 'telemetry.test.keyed_unsigned_int':`);
  try { browser.telemetry.scalarAdd('telemetry.test.keyed_unsigned_int', 1) } catch (ex) { console.error('oh no! error thrown: ', ex); }

  console.log('----- now testing scalarSet using the telemetry.test scalars -----');
  console.log(`correctly calling browser.telemetry.scalarSet('telemetry.test.boolean_kind', true):`);
  try { browser.telemetry.scalarSet('telemetry.test.boolean_kind', true)  } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with uint value - browser.telemetry.scalarSet('telemetry.test.boolean_kind', 1):`);
  try { browser.telemetry.scalarSet('telemetry.test.boolean_kind', 1)} catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with unknown key - browser.telemetry.scalarSet('telemetry.test.does_not_exist', true): `);
  try { browser.telemetry.scalarSet('telemetry.test.does_not_exist', true) } catch (ex) { console.error('oh no! error thrown: ', ex); }

  console.log('----- now testing scalarSetMaximum using the telemetry.test scalars -----');
  console.log(`correctly calling browser.telemetry.scalarSetMaximum('telemetry.test.unsigned_int_kind', 1234):`);
  try { browser.telemetry.scalarSetMaximum('telemetry.test.boolean_kind', 1234); } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with unknown key - browser.telemetry.scalarSetMaximum('telemetry.test.does_not_exist': `);
  try { browser.telemetry.scalarSetMaximum('telemetry.test.does_not_exist', 1234); } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with string value - browser.telemetry.scalarSetMaximum('telemetry.test.unsigned_int_kind', 'foo'):`);
  try { browser.telemetry.scalarSetMaximum('telemetry.test.boolean_kind', 'foo'); } catch (ex) { console.error('oh no! error thrown: ', ex); }

  console.log('----- now testing recordEvent using the telemetry.test scalars -----');
  console.log(`correctly calling browser.telemetry.recordEvent('telemetry.test', 'test1', 'object1'): `);
  try { browser.telemetry.recordEvent('telemetry.test', 'test1', 'object1'); } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with unknown key: browser.telemetry.recordEvent('telemetry.test.does_not_exist', 'test1', 'object1'): `);
  try { browser.telemetry.recordEvent('telemetry.test.does_not_exist', 'test1', 'object1'); } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with unknown method: browser.telemetry.recordEvent('telemetry.test', 'unknown', 'object1'): `);
  try { browser.telemetry.recordEvent('telemetry.test', 'unknown', 'object1'); } catch (ex) { console.error('oh no! error thrown: ', ex); }
  console.log(`incorrectly calling with unknown object: browser.telemetry.recordEvent('telemetry.test', 'test1', 'unknown'): `);
  try { browser.telemetry.recordEvent('telemetry.test', 'test1', 'unknown'); } catch (ex) { console.error('oh no! error thrown: ', ex); }

  console.error('----- TODO: add tests for registerScalars and registerEvents methods');
});
