import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare class NResizeHandle extends HTMLElement {}
declare const _default: typeof NResizeHandle | null;
export default _default;

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'n-resize-handle': DetailedHTMLProps<
				HTMLAttributes<HTMLElement> & {
					target?: string;
					side?: 'left' | 'right';
					min?: number | string;
					max?: number | string;
				},
				HTMLElement
			>;
		}
	}
}
