function describe (title, executeDescribe) {
	var resultsDomElement = document.getElementById("results");
	var describeResults = document.createElement('div');
	describeResults.setAttribute('class', 'container');
	var titleElement = document.createElement('p');
	var textNode = document.createTextNode(title);
	titleElement.appendChild(textNode);
	titleElement.setAttribute('class', 'title');
	describeResults.appendChild(titleElement);
	resultsDomElement.appendChild(describeResults);

	this.it = it;

	executeDescribe.bind(this);
	executeDescribe();

	function addResult(type, itTitle) {
		var titleElement = document.createElement('p');
		var textNode = document.createTextNode(itTitle);
		titleElement.appendChild(textNode);

		titleElement.setAttribute('class', type + ' result');
		describeResults.appendChild(titleElement);
	}

	function success (itTitle) {
		addResult('success', itTitle);
	}

	function fail (itTitle) {
		addResult('fail', itTitle);
	}

	function it(testName, executeIt) {
		var i = 0;
		var calls = [];
		var results = {
			SUCCESS: 0,
			FAIL: 0
		};
		var failed = false;

		this.expect = expect;

		executeIt.bind(this);

		function expect(actual) {
			calls.push({id: i, status: 'PENDING'});
			var chained = chain(actual, i);
			i++;
			return chained;
		}

		function chain(actual, i) {
			return {
				to: {
					eql: function (expected) {
						register(i, function run () {
							if (actual === expected) {
								executed(i, 'SUCCESS');
							} else {
								executed(i, 'FAIL');
							}
						});
					},
					equal: function (expected) {
						register(i, function run () {
							var equal = true;

							expected.forEach(function (exp, index) {
								equal = equal && exp === actual[index];
							});

							if (equal) {
								executed(i, 'SUCCESS');
							} else {
								executed(i, 'FAIL');
							}
						});
					}
				}
			};

			function register (i, run) {
				calls.forEach(function (call) {
					if (call.id === i) {
						call.run = run;
					}
				});
			}
		}

		function executed(i, state) {
			calls.forEach(function (call) {
				if (i === call.id) {
					call.status = state;
					results[state]++;
				}
			});

			if (results.FAIL) {
				if (!failed) {
					fail(testName);
					failed = true;
				}
			} else if (results.SUCCESS === calls.length) {
				success(testName);
			}
		}

		try {
			executeIt();
		} catch (e) {
			fail(testName);
		}


		calls.forEach(function (call) {
			call.run();
		});
	}

}