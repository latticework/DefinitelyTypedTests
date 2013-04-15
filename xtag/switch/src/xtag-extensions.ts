interface IXTag {
    ondragend?: (ev: DragEvent) => any;
    onkeydown?: (ev: KeyboardEvent) => any;
    ondragover?: (ev: DragEvent) => any;
    onkeyup?: (ev: KeyboardEvent) => any;
    offsetTop?: number;
    onreset?: (ev: Event) => any;
    onmouseup?: (ev: MouseEvent) => any;
    ondragstart?: (ev: DragEvent) => any;
    ondrag?: (ev: DragEvent) => any;
    innerHTML?: string;
    onmouseover?: (ev: MouseEvent) => any;
    ondragleave?: (ev: DragEvent) => any;
    lang?: string;
    onpause?: (ev: Event) => any;
    className?: string;
    onseeked?: (ev: Event) => any;
    onmousedown?: (ev: MouseEvent) => any;
    title?: string;
    onclick?: (ev: MouseEvent) => any;
    onwaiting?: (ev: Event) => any;
    outerHTML?: string;
    offsetLeft?: number;
    ondurationchange?: (ev: Event) => any;
    offsetHeight?: number;
    dir?: string;
    onblur?: (ev: FocusEvent) => any;
    onemptied?: (ev: Event) => any;
    onseeking?: (ev: Event) => any;
    oncanplay?: (ev: Event) => any;
    onstalled?: (ev: Event) => any;
    onmousemove?: (ev: MouseEvent) => any;
    style?: MSStyleCSSProperties;
    isContentEditable?: bool;
    onratechange?: (ev: Event) => any;
    onloadstart?: (ev: Event) => any;
    ondragenter?: (ev: DragEvent) => any;
    contentEditable?: string;
    onsubmit?: (ev: Event) => any;
    tabIndex?: number;
    onprogress?: (ev: any) => any;
    ondblclick?: (ev: MouseEvent) => any;
    oncontextmenu?: (ev: MouseEvent) => any;
    onchange?: (ev: Event) => any;
    onloadedmetadata?: (ev: Event) => any;
    onerror?: (ev: Event) => any;
    onplay?: (ev: Event) => any;
    id?: string;
    onplaying?: (ev: Event) => any;
    oncanplaythrough?: (ev: Event) => any;
    onabort?: (ev: UIEvent) => any;
    onreadystatechange?: (ev: Event) => any;
    onkeypress?: (ev: KeyboardEvent) => any;
    offsetParent?: Element;
    onloadeddata?: (ev: Event) => any;
    disabled?: bool;
    onsuspend?: (ev: Event) => any;
    accessKey?: string;
    onfocus?: (ev: FocusEvent) => any;
    ontimeupdate?: (ev: Event) => any;
    onselect?: (ev: UIEvent) => any;
    ondrop?: (ev: DragEvent) => any;
    offsetWidth?: number;
    onmouseout?: (ev: MouseEvent) => any;
    onended?: (ev: Event) => any;
    onscroll?: (ev: UIEvent) => any;
    onmousewheel?: (ev: MouseWheelEvent) => any;
    onvolumechange?: (ev: Event) => any;
    onload?: (ev: Event) => any;
    oninput?: (ev: Event) => any;
    click?(): void;
    getElementsByClassName?(classNames: string): NodeList;
    scrollIntoView?(top?: bool): void;
    focus?(): void;
    blur?(): void;
    insertAdjacentHTML?(where: string, html: string): void;
}