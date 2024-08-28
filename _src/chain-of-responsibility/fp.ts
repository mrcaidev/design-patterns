type Handler = (request: string) => string;
type Link = (request: string, next?: Handler) => string;

const authenticate: Link = (request, next) => {
  const PASS = true;
  if (!PASS) return request + " -> authentication fail";

  const result = request + " -> authentication pass";
  if (!next) return result;

  return next(result);
};

const validate: Link = (request, next) => {
  const PASS = true;
  if (!PASS) return request + " -> validation fail";

  const result = request + " -> validation pass";
  if (!next) return result;

  return next(result);
};

function compose(...links: Link[]) {
  return links.reduceRight((result, link) => {
    return (request: string) => link(request, result);
  }, undefined as Parameters<Link>[1]);
}

const handler = compose(authenticate, validate);
const result = handler?.("request");
console.log(result);

export {};
