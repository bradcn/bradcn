export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

const legalRoutes: EachRoute[] = [
  {
    title: "License",
    href: "/legal/license",
  },
  { title: "Code of Conduct", href: "/legal/codeofconduct" },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute): Page[] {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export function getLegalRoutes() {
  return legalRoutes;
}

export function getLegalRoutesFlatten(): Page[] {
  return getLegalRoutes().map((it) => getRecurrsiveAllLinks(it)).flat();
}

export function getLegalPreviousNext(path: string) {
  path = path.split("/").slice(1).join("/");
  const routes = getLegalRoutesFlatten();
  const index = routes.findIndex(({ href }) => href === `/${path}`);
  return {
    prev: routes[index - 1],
    next: routes[index + 1],
  };
}
