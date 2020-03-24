const formatFullname = require('../formatFullname');
const expect = require('chai').expect;


describe('formatFullname', () => {

  it('should return an error if "fullname" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullname" dont have space', () => {
    expect(formatFullname('aweqfasgasd')).to.equal(false);
  });

  it('should return a string with with correct capitalization', () => {
    expect(formatFullname('LOREM IpSum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LoreM ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('Lorem IPSUM')).to.equal('Lorem Ipsum');
  });

  it('should return an error if "fullname" has 3 strings', () => {
    expect(formatFullname('Lorem Ipsum sit')).to.equal('Error');
  });
});