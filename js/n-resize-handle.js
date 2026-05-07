/**
 * <n-resize-handle> — n-layout 슬롯 너비 조절 핸들
 *
 * 사용법:
 *   <div class="n-layout">
 *     <nav class="layout-sidebar">
 *       ...
 *       <n-resize-handle target="--grid-col-sidebar" min="180" max="500"></n-resize-handle>
 *     </nav>
 *     <aside class="layout-panel">
 *       <n-resize-handle target="--grid-col-panel" side="left" min="200" max="600"></n-resize-handle>
 *       ...
 *     </aside>
 *   </div>
 *
 * Attributes:
 *   target  CSS 변수명 (조절할 그리드 컬럼 변수). 기본 --grid-col-sidebar
 *   side    "right" (default) | "left" — 핸들 위치. layout-panel 안에 둘 때 "left".
 *   min     최소 폭 (px). 기본 100
 *   max     최대 폭 (px). 기본 800
 *
 * SSR 가드: HTMLElement 가 정의된 환경에서만 클래스 정의·등록.
 *           Next.js prerender·Node SSR 환경에서 import 해도 안전.
 */

let NResizeHandle = null;

if (typeof HTMLElement !== "undefined") {
	NResizeHandle = class extends HTMLElement {
		static get observedAttributes() {
			return ["target", "side", "min", "max"];
		}

		constructor() {
			super();
			this._dragging = false;
			this._startX = 0;
			this._startWidth = 0;
			this._layout = null;

			this._onMouseDown = this._onMouseDown.bind(this);
			this._onMouseMove = this._onMouseMove.bind(this);
			this._onMouseUp = this._onMouseUp.bind(this);
		}

		connectedCallback() {
			const side = this.getAttribute("side") || "right";
			Object.assign(this.style, {
				position: "absolute",
				top: "0",
				bottom: "0",
				width: "4px",
				cursor: "col-resize",
				zIndex: "10",
				background: "transparent",
				transition: "background-color 0.15s",
				userSelect: "none",
				[side]: "-2px",
			});

			this.addEventListener("mouseenter", () => {
				if (!this._dragging) this.style.background = "var(--layout-divider)";
			});
			this.addEventListener("mouseleave", () => {
				if (!this._dragging) this.style.background = "transparent";
			});

			this.addEventListener("mousedown", this._onMouseDown);
		}

		disconnectedCallback() {
			this.removeEventListener("mousedown", this._onMouseDown);
			document.removeEventListener("mousemove", this._onMouseMove);
			document.removeEventListener("mouseup", this._onMouseUp);
		}

		_onMouseDown(e) {
			e.preventDefault();
			this._layout = this.closest(".n-layout");
			if (!this._layout) return;

			// 부모 슬롯의 실제 픽셀 너비 측정 — CSS 변수 resolve 이슈 회피
			// (getComputedStyle(layout).getPropertyValue('--grid-col-sidebar') 가 'var(--...)' 또는 'rem' 단위로
			//  반환되어 parseFloat 가 잘못된 값을 내는 케이스 방지)
			const slot = this.parentElement;
			this._startWidth = slot ? slot.offsetWidth : 0;
			this._startX = e.clientX;
			this._dragging = true;

			this._layout.setAttribute("data-resizing", "");
			this.style.background = "var(--color-primary, currentColor)";

			document.addEventListener("mousemove", this._onMouseMove);
			document.addEventListener("mouseup", this._onMouseUp);
		}

		_onMouseMove(e) {
			if (!this._dragging || !this._layout) return;

			const targetVar = this.getAttribute("target") || "--grid-col-sidebar";
			const side = this.getAttribute("side") || "right";
			const min = parseFloat(this.getAttribute("min")) || 100;
			const max = parseFloat(this.getAttribute("max")) || 800;

			const rawDelta = e.clientX - this._startX;
			// side="left" 면 panel 처럼 좌측 핸들 — 폭 증가가 마우스 좌측 방향
			const delta = side === "left" ? -rawDelta : rawDelta;
			const next = Math.max(min, Math.min(max, this._startWidth + delta));
			this._layout.style.setProperty(targetVar, next + "px");
		}

		_onMouseUp() {
			if (!this._dragging) return;
			this._dragging = false;
			if (this._layout) this._layout.removeAttribute("data-resizing");
			this.style.background = "transparent";
			document.removeEventListener("mousemove", this._onMouseMove);
			document.removeEventListener("mouseup", this._onMouseUp);
		}
	};

	if (typeof customElements !== "undefined" && !customElements.get("n-resize-handle")) {
		customElements.define("n-resize-handle", NResizeHandle);
	}
}

export default NResizeHandle;
