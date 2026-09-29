export const mimeTypes:Readonly<Record<string,string>>;
export function lookupMime(value:string,fallback?:string):string;
export function extensionForMime(mime:string):string|null;

