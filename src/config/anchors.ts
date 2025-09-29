export const ANCHORS = {
	hero: "hero",
	about: "about",
	contact: "contacts",
	partners: "partners",
	contactForm: "contact-form",
	blog: "blog",
	inputAgreement: "input-agreement",
}

export const getAnchor = (key: keyof typeof ANCHORS, isRoot: boolean = true) => {
	return isRoot ? `/#${ANCHORS[key]}` : `#${ANCHORS[key]}`;
}