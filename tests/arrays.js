describe('arrays', function() {

	it('you should be able to determine the location of an item in an array', function() {
		var a = [ 1, 2, 3, 4 ];

		expect(arraysAnswers.indexOf(a, 3)).to.eql(2);
		expect(arraysAnswers.indexOf(a, 5)).to.eql(-1);
	});

	it('you should be able to add the values of an array', function() {
		var a = [ 1, 2, 3, 4 ];

		expect(arraysAnswers.sum(a)).to.eql(10);
	});

	it('you should be able to remove all instances of a value from an array', function() {
		var a = [1, 2, 3, 4];
		a.push(2); // Make sure the value appears more than one time
		var result = arraysAnswers.remove(a, 2);

		expect(result.length).to.eql(3);
		expect(result.join(' ')).to.eql('1 3 4');
	});

	it('you should be able to remove all instances of a value from an array, returning the original array', function() {
		var a = [ 1, 2, 3, 4 ];
		a.splice( 1, 0, 2 );
		a.push( 2 );
		a.push( 2 );

		var result = arraysAnswers.removeWithoutCopy(a, 2);

		expect(result.length).to.eql(3);
		expect(result.join(' ')).to.eql('1 3 4');

		// make sure that you return the same array instance
		expect(result).to.equal(a);
	});

	it('you should be able to add an item to the end of an array', function() {
		var a = [ 1, 2, 3, 4 ];

		var result = arraysAnswers.append(a, 10);

		expect(result.length).to.eql(5);
		expect(result[result.length - 1]).to.eql(10);
	});

	it('you should be able to remove the last item of an array', function() {
		var a = [ 1, 2, 3, 4 ];

		var result = arraysAnswers.truncate(a);

		expect(result.length).to.eql(3);
		expect(result.join(' ')).to.eql('1 2 3');
	});

	it('you should be able to add an item to the beginning of an array', function () {
		var a = [ 1, 2, 3, 4 ];

		var result = arraysAnswers.prepend(a, 10);

		expect(result.length).to.eql(5);
		expect(result[0]).to.eql(10);
	});

	it('you should be able to remove the first item of an array', function () {
		var a = [ 1, 2, 3, 4 ];

		var result = arraysAnswers.curtail(a);

		expect(result.length).to.eql(3);
		expect(result.join(' ')).to.eql('2 3 4');
	});

	it('you should be able to join together two arrays', function() {
		var a = [ 1, 2, 3, 4 ];
		var c = [ 'a', 'b', 'c', 1 ];
		var result = arraysAnswers.concat(a, c);

		expect(result.length).to.eql(8);
		expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
	});

	it('you should be able to add an item anywhere in an array', function() {
		var a = [ 1, 2, 3, 4 ];

		var result = arraysAnswers.insert(a, 'z', 2);

		expect(result.length).to.eql(5);
		expect(result.join(' ')).to.eql('1 2 z 3 4');
	});

	it('you should be able to count the occurences of an item in an array', function() {
		var result = arraysAnswers.count([ 1, 2, 4, 4, 3, 4, 3 ], 4);

		expect(result).to.eql(3);
	});

	it('you should be able to find duplicates in an array', function() {
		var result = arraysAnswers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);

		expect(result.sort()).to.equal([1, 3, 4]);
	});

	it('you should be able to square each number in an array', function() {
		var a = [ 1, 2, 3, 4 ];

		var result = arraysAnswers.square(a);

		expect(result.length).to.eql(4);
		expect(result.join(' ')).to.eql('1 4 9 16');
	});

	it('you should be able to find all occurrences of an item in an array', function() {
		var result = arraysAnswers.findAllOccurrences('abcdefabc'.split(''), 'a');

		expect(result.sort().join(' ')).to.eql('0 6');
	});
});