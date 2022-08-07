/// <reference types="cypress" />
// @ts-ignore
Cypress.Commands.add('mainWork', ({ additionalWork, version }) => {
	const imageCountArray = [...Array(15).keys()];
	const _allData = imageCountArray.reduce((acc, curr) => {
		const indexAsString = `${curr}`;
		acc[indexAsString] = [];
		return acc;
	}, {});

	imageCountArray.forEach((imageIndex) => {
		const imageIndexString = `${imageIndex}`;
		const contentImage = version === "original" ? ".content .image" : ".og-content .og-image"
		const imageElement = version === "original" ? ".image__element" : ".og-image__element"
		const mouseAction = version === "original" ? "mouseenter" : "mouseover"
		cy.get(contentImage).eq(imageIndex).should("not.have.css", "scale");
		cy.get(contentImage).eq(imageIndex).trigger(mouseAction);

		// 8 is for the number of seconds defined originally
		[...Array(8).keys()].forEach((_index) => {
			const index = _index + 1;
			cy.tick(100 * index);
			cy.get(contentImage)
				.eq(imageIndex)
				.within((el) => {
					const els = el.get(imageElement);

					cy.get(imageElement)
						.invoke("attr", "style")
						.then((value) => {
							console.log(`scale value is ${value}`);
							cy.log(`style: scale value is ${value}`);
						});
					cy.get(imageElement)
						.invoke("css", "transform")
						.then((value) => {
							console.log(`scale value is ${value}`);
							cy.log(`transform: scale value is ${value}`);
							_allData[imageIndexString].push(value);
							if (additionalWork) {
								cy.task('get_scaleValues').then((compareTo) => {

									const iterationIndex = _index
									cy.log(`see compare to and transform value`, compareTo, value)
									const comparedValue = compareTo[imageIndex][iterationIndex]
									const areEqual = value === comparedValue
									console.log(`see compare to and transform value`, { comparedValue, value, areEqual, compareTo, imageIndex, iterationIndex, compToImgIndex: compareTo[imageIndex] })
									cy.wrap(value).should('eq', comparedValue)
								})
							}
						});
					console.log(els);
					cy.log(els);
				});
		});
	});

	cy.log(`allData full`, _allData);
	if (version === "original") cy.task('set_scaleValues', _allData)
})
