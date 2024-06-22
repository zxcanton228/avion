export const URL: string = import.meta.env.VITE_DOMAIN,
	IS_DEV: boolean = import.meta.env.VITE_NODE_ENV === "development",
	IMG_URL: string = IS_DEV ? "/" : `/${URL}/`
