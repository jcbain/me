export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","robots.txt","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.94ed5b6b.js","imports":["_app/immutable/entry/start.94ed5b6b.js","_app/immutable/chunks/index.bf881c71.js","_app/immutable/chunks/singletons.15f66e51.js","_app/immutable/chunks/index.ed1ae63d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cc5b753d.js","imports":["_app/immutable/entry/app.cc5b753d.js","_app/immutable/chunks/index.bf881c71.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
