describe('logical operators', function(){
  it('you should be able to work with logical or', function() {
    expect(logicalOperatorsAnswers.or(false, true)).to.eql(true);
    expect(logicalOperatorsAnswers.or(true, false)).to.eql(true);
    expect(logicalOperatorsAnswers.or(true, true)).to.eql(true);
    expect(logicalOperatorsAnswers.or(false, false)).to.eql(false);
    expect(logicalOperatorsAnswers.or(3, 4) === 7).to.eql(false);
  });

  it('you should be able to work with logical and', function() {
    expect(logicalOperatorsAnswers.and(false, true)).to.eql(false);
    expect(logicalOperatorsAnswers.and(false, false)).to.eql(false);
    expect(logicalOperatorsAnswers.and(true, false)).to.eql(false);
    expect(logicalOperatorsAnswers.and(true, true)).to.eql(true);
  });
});
