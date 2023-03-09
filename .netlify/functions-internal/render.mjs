import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","robots.txt","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b339a04e.js","imports":["_app/immutable/entry/start.b339a04e.js","_app/immutable/chunks/index.bf881c71.js","_app/immutable/chunks/singletons.41cad3a5.js","_app/immutable/chunks/index.ed1ae63d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.302d3906.js","imports":["_app/immutable/entry/app.302d3906.js","_app/immutable/chunks/index.bf881c71.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
