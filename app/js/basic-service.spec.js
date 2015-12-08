describe('Basic service', function() {
  var $httpBackend, lyricsService;

  beforeEach(module('app'));

  beforeEach(inject(function(_$httpBackend_, _basicService_) {
    $httpBackend = _$httpBackend_;
    basicService = _basicService_;
  }));

  it('should contain a promise', function() {
    $httpBackend.expect('GET', 'http://jsonplaceholder.typicode.com/posts/1').respond([]);
    var promise = basicService.doRequest();
    $httpBackend.flush();
    expect(promise).to.have.property('then');
  });
});