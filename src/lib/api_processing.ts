export {};

interface Breeds {
	[breed: string]: string[];
}

/**
 * shows time interval b/w two pictures
 */
let timer: NodeJS.Timer;

let deleteFirstPhotoDelay: NodeJS.Timeout;

let breed: HTMLElement;
let slideshow: HTMLElement;

export async function startApiProcessing() {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	breed = document.getElementById('breed')!;
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	slideshow = document.getElementById('slideshow')!;

	try {
		const majorLink = 'https://dog.ceo/api/breeds/list/all';
		const response = await fetch(majorLink);
		const data: { message: Breeds } = await response.json();
		createBreedList(data.message);
	} catch (e) {
		console.log(e);
		console.log('There was a problem fetching the breed list.');
	}
}

function createBreedList(breedList: Breeds) {
	const select = document.createElement('select');
	select.addEventListener('change', () => {
		loadByBreed(select.value).then(() => {
			console.log(select.value);
		});
	});

	select.innerHTML = `
        <option>Choose a dog breed</option>
        ${Object.keys(breedList)
					.map((breed) => {
						return `<option>${breed}</option>`;
					})
					.join('')}
    `;

	breed.append(select);
}

async function loadByBreed(breed: string) {
	if (breed !== 'Choose a dog breed') {
		const link = `https://dog.ceo/api/breed/${breed}/images`;
		const response = await fetch(link); // fetch images for a concrete breed
		const data = await response.json();
		createSlideshow(data.message);
	}
}

function createSlideshow(images: string[]) {
	let currentPosition = 0;
	clearInterval(timer);
	clearTimeout(deleteFirstPhotoDelay);

	if (images.length > 1) {
		slideshow.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
        `;
		currentPosition += 2;
		if (images.length === 2) {
			currentPosition = 0;
		}
		timer = setInterval(nextSlide, 3000); // slides are changed every 3 sec
	} else {
		// keep showing a single image
		slideshow.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide"></div>
        `;
	}

	function nextSlide() {
		slideshow.insertAdjacentHTML(
			'beforeend',
			`<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
		);
		deleteFirstPhotoDelay = setTimeout(() => {
			document.querySelector('.slide')?.remove();
		}, 1000);

		if (currentPosition + 1 >= images.length) {
			// if we reached the last picture in a breed list
			currentPosition = 0;
		} else {
			currentPosition++;
		}
	}
}
