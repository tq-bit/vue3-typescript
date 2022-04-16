import { Directive, DirectiveBinding } from 'vue';

const handleRipple = (element: HTMLElement, binding: DirectiveBinding, mouseEvent: MouseEvent) => {
	const rippleElement: HTMLSpanElement = createRippleElement();
	let currentDiameter: number = 1;
	let currentOpacity: number = 0.65;
	let animationHandler: number = setInterval(animateRippleSpread, 15);
	applyRippleStyle();

	function applyRippleStyle(): void {
		const elementCoordinates = element.getBoundingClientRect();
		element.style.position = 'relative';
		element.style.overflow = 'hidden';

		const offsetY: number = mouseEvent.clientY - elementCoordinates.y;
		const offsetX: number = mouseEvent.clientX - elementCoordinates.x;

		rippleElement.style.position = 'absolute';
		rippleElement.style.height = '5px';
		rippleElement.style.width = '5px';
		rippleElement.style.borderRadius = '100%';
		rippleElement.style.backgroundColor = '#f2f2f2';
		rippleElement.style.left = `${offsetX}px`;
		rippleElement.style.top = `${offsetY}px`;
		(mouseEvent.target as HTMLElement).appendChild(rippleElement);
	}

	function animateRippleSpread(): void {
		const maximalDiameter: number = +binding.value || 50;
		const hasReachedMaximalDiameter: boolean = currentDiameter > maximalDiameter;
		function increaseDiameterSize() {
			currentDiameter++;
			currentOpacity -= 0.65 / maximalDiameter;
			rippleElement.style.transform = `scale(${currentDiameter})`;
			rippleElement.style.opacity = `${currentOpacity}`;
		}
		function stopRippleAnimation() {
			clearInterval(animationHandler);
			rippleElement.remove();
		}

		if (hasReachedMaximalDiameter) {
			stopRippleAnimation();
		} else {
			increaseDiameterSize();
		}
	}

	function createRippleElement(): HTMLSpanElement {
		const rippleElement: HTMLSpanElement = document.createElement('span');
		rippleElement.style.pointerEvents = 'none';
		return rippleElement;
	}
};

const vRipple: Directive = {
	mounted: (el: any, binding: DirectiveBinding): void => {
		el.addEventListener('click', (ev: MouseEvent) => handleRipple(el, binding, ev));
	},
};

export default vRipple;
