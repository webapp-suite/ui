import '@babel/polyfill';

function runAllTests(tests) {
    tests.keys().forEach(tests);
}

runAllTests(require.context('../src', true, /test.js$/));
