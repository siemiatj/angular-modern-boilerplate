'use strict';

describe('Basic directive', function () {

  var $compile, $rootScope;

  function createAndCompileEl(scope) {
    var el = angular.element('<basic-directive \
      variable="{{ somedata }}" \ \
      </basic-directive>');
    $compile(el)(scope);
    scope.$digest();
    return el;
  }

  beforeEach(module('app'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should render correctly', function () {
    $rootScope.somedata = 'Text';

    var el = createAndCompileEl($rootScope)[0];

    expect(el.querySelector('span')).to.be.ok;
    expect(el.innerHTML).to.contain('Text');
  });
});
